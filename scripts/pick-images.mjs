/**
 * Copies the chosen photos out of the download pool and into src/assets/site/,
 * which is the only folder the build globs.
 *
 * Astro emits the original of every image it imports, so globbing a folder of
 * candidates ships all of them — and the service worker then precaches the lot.
 * Keeping the pool outside src is what stops that.
 */
import { copyFile, mkdir, readdir, readFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = new URL('../', import.meta.url).pathname;
const POOL = join(ROOT, 'assets-pool');
const SITE = join(ROOT, 'src/assets/site');

await mkdir(SITE, { recursive: true });

/** Every id the site actually asks for, from the alias map and the place data. */
async function wantedIds() {
  const sources = [
    'src/lib/photos.ts',
    'src/data/santorini-places.ts',
    'src/data/mykonos-places.ts',
  ];
  const ids = new Set();
  for (const rel of sources) {
    let text;
    try {
      text = await readFile(join(ROOT, rel), 'utf8');
    } catch {
      continue;
    }
    // Alias targets: 'slot': 'actual-file-id'
    for (const m of text.matchAll(/:\s*'([a-z0-9-]+)'/g)) ids.add(m[1]);
    // Place ids: id: 'some-place'
    for (const m of text.matchAll(/\bid:\s*'([a-z0-9-]+)'/g)) ids.add(m[1]);
  }
  return ids;
}

const wanted = await wantedIds();

let pool;
try {
  pool = await readdir(POOL);
} catch {
  console.error(`No pool at ${POOL}. Run fetch-images.mjs first.`);
  process.exit(1);
}

// Start clean so a removed pick doesn't linger in the build.
for (const f of await readdir(SITE)) await rm(join(SITE, f));

let copied = 0;
let bytes = 0;
const missing = [];

for (const id of [...wanted].sort()) {
  const file = `${id}.jpg`;
  if (!pool.includes(file)) continue;
  const dest = join(SITE, file);
  await copyFile(join(POOL, file), dest);
  bytes += (await stat(dest)).size;
  copied += 1;
}

for (const id of wanted) {
  if (!pool.includes(`${id}.jpg`)) missing.push(id);
}

console.log(`picked ${copied} of ${pool.length} pooled images, ${(bytes / 1048576).toFixed(1)} MB`);
if (missing.length) {
  console.log(`not in pool (fine if they aren't image ids): ${missing.slice(0, 12).join(', ')}`);
}
