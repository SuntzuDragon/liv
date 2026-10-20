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
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const manifestPath = process.argv[2];
if (!manifestPath) {
  console.error('usage: node scripts/fetch-images.mjs <manifest.json>');
  process.exit(1);
}

const ROOT = new URL('../', import.meta.url).pathname;
const OUT = join(ROOT, 'src/assets/places');
const MAX_EDGE = 2000;

await mkdir(OUT, { recursive: true });

const entries = JSON.parse(await readFile(manifestPath, 'utf8'));
const credits = [];
let ok = 0;
let failed = 0;

for (const e of entries) {
  const id = e.id;
  try {
    const res = await fetch(e.url, {
      headers: {
        // Wikimedia blocks requests without a descriptive agent.
        'user-agent': 'liv-island-guide/1.0 (personal static site; contact via repo)',
        accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
      },
      redirect: 'follow',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

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
    const outPath = join(OUT, `${id}.jpg`);
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
  } catch (err) {
    failed += 1;
    console.warn(`  FAIL ${id}  ${err.message}`);
  }
}

await writeFile(
  join(ROOT, 'src/data/credits.json'),
  JSON.stringify(credits, null, 2) + '\n',
  'utf8',
);

console.log(`\n${ok} downloaded, ${failed} failed. Credits written to src/data/credits.json`);
