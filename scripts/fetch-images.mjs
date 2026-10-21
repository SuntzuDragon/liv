/**
 * Downloads the sourced photos into src/assets/ so the site has no runtime
 * dependency on anyone else's CDN — it has to work from a cache at sea.
 *
 * Sources are capped at 2000px on the long edge before they ever reach Astro:
 * decoded cost is width × height × 4 bytes regardless of file size, and iOS
 * Safari starts dropping off-screen images well before it runs out of memory.
 *
 *   node scripts/fetch-images.mjs <manifest.json>
 */
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const manifestPath = process.argv[2];
if (!manifestPath) {
  console.error('usage: node scripts/fetch-images.mjs <manifest.json>');
  process.exit(1);
}

const ROOT = new URL('../', import.meta.url).pathname;
const OUT = join(ROOT, 'assets-pool');
const MAX_EDGE = 2000;

await mkdir(OUT, { recursive: true });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Wikimedia rate-limits hard. Back off and respect Retry-After. */
async function fetchWithRetry(url, attempts = 5) {
  let wait = 2000;
  for (let i = 0; i < attempts; i += 1) {
    const res = await fetch(url, {
      headers: {
        'user-agent':
          'liv-island-guide/1.0 (personal static site; contact via repo)',
        accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
      },
      redirect: 'follow',
    });
    if (res.ok) return res;
    if (res.status !== 429 && res.status < 500) {
      throw new Error(`HTTP ${res.status}`);
    }
    const retryAfter = Number(res.headers.get('retry-after'));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : wait;
    await sleep(delay);
    wait = Math.min(wait * 2, 30000);
  }
  throw new Error('rate limited after retries');
}

const entries = JSON.parse(await readFile(manifestPath, 'utf8'));
const credits = [];
let ok = 0;
let failed = 0;

for (const e of entries) {
  const id = e.id;
  const outPath = join(OUT, `${id}.jpg`);

  // Resume: a rate-limited run can be re-run without refetching what landed.
  try {
    await access(outPath);
    credits.push({
      id,
      subject: e.subject,
      license: e.license,
      attribution: e.attribution,
      source: e.source_page,
    });
    ok += 1;
    continue;
  } catch {
    /* not downloaded yet */
  }

  try {
    const res = await fetchWithRetry(e.url);
    const buf = Buffer.from(await res.arrayBuffer());
    const img = sharp(buf, { failOn: 'none' });
    const meta = await img.metadata();

    const longEdge = Math.max(meta.width ?? 0, meta.height ?? 0);
    const pipeline =
      longEdge > MAX_EDGE
        ? img.resize({
            width: meta.width >= meta.height ? MAX_EDGE : undefined,
            height: meta.height > meta.width ? MAX_EDGE : undefined,
            withoutEnlargement: true,
          })
        : img;

    // One normalised intermediate; Astro does the real AVIF/WebP work at build.
    const info = await pipeline
      .jpeg({ quality: 88, mozjpeg: true, progressive: true })
      .toFile(outPath);

    credits.push({
      id,
      subject: e.subject,
      license: e.license,
      attribution: e.attribution,
      source: e.source_page,
    });
    ok += 1;
    console.log(`  ok   ${id}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
    await sleep(700);
  } catch (err) {
    failed += 1;
    console.warn(`  FAIL ${id}  ${err.message}`);
  }
}

/**
 * Merge, never replace. This script is normally run with a small manifest of
 * whatever is being added that day, and writing `credits` straight out silently
 * dropped every photographer not in that manifest - it took the file from 98
 * entries to 7, and nothing failed or warned. Existing ids win, so re-running a
 * manifest never duplicates or rewrites a credit already on record.
 */
const creditsPath = join(ROOT, 'src/data/credits.json');
let existing = [];
try {
  existing = JSON.parse(await readFile(creditsPath, 'utf8'));
} catch {
  /* first run, or the file is gone */
}
const byId = new Map(existing.map((c) => [c.id, c]));
let added = 0;
for (const c of credits) {
  if (!byId.has(c.id)) {
    byId.set(c.id, c);
    added += 1;
  }
}
await writeFile(creditsPath, JSON.stringify([...byId.values()], null, 2) + '\n', 'utf8');

console.log(
  `\n${ok} downloaded, ${failed} failed. ` +
    `Credits: ${added} added, ${byId.size} on record.`,
);
