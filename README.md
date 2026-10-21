# liv.ianmcbride.com

A hub of guides made for Liv. Static Astro site on Cloudflare Workers static
assets, deployed on every push to `main`.

- `/` - hub: the islands, and the sailing with today highlighted
- `/santorini` - Wednesday 21 October 2026
- `/mykonos` - Thursday 22 October 2026
- `/credits` - photographers

## Why it's built the way it is

**It has to work with no signal.** She opens it on ship wifi and then walks an
island on airplane mode. A service worker generated at build time
(`scripts/build-sw.mjs`) precaches the whole site - every page, font and photo -
so a page she never visited on wifi still opens ashore. Shell and photos live in
separate caches and the shell goes first, so if the photos blow a quota the site
is still fully usable as text.

**It has to be flawless in iOS Safari.** Several things here look odd until you
know why:

- `html` and `body` both carry an explicit `background-color`. iOS 26 and 27
  ignore `theme-color` entirely and tint Safari's translucent toolbars by
  sampling the page instead.
- The sticky section nav is opaque, not frosted. A `backdrop-filter` on a
  sticky element tears during rubber-band overscroll *and* hijacks that toolbar
  tint.
- Cards don't rotate - only the photo inside them does, via a three-layer
  structure (wrapper rotates → inner clips → image plain). Rotated text gets
  rasterized and goes soft, and Safari has a decade-old bug where a transformed
  child escapes its parent's rounded clip.
- Photos are capped at 2000px on ingest and served much smaller. Decoded cost is
  `width × height × 4` regardless of file size, and Safari starts silently
  dropping off-screen images long before it actually runs out of memory.
- Every reveal animation has a 2.5s force-show fallback. Decoration must never
  be the reason she can't read something.

**Maps are Apple's.** `https://maps.apple.com/place?coordinate=LAT,LNG&name=NAME`
is the current documented unified schema; the older `?q=&ll=` form just 301s to
it. `name` is a label, not a search, so the pin lands exactly where we put it.
Each place also offers a small Google link, because Apple's web Maps won't hand
off to an app on Android.

## Running it

```sh
npm install
npm run dev          # localhost:4321
npm run build        # dist/ + dist/sw.js
npx wrangler dev     # serve dist the way Cloudflare will
```

Node is pinned by `.nvmrc` (Astro 7 needs ≥22.22).

## Photos

`scripts/fetch-images.mjs` pulls the sourced images into `src/assets/places/`
and writes `src/data/credits.json`. It throttles and resumes, because Wikimedia
rate-limits hard. Astro does the AVIF/WebP conversion at build time.

```sh
node scripts/fetch-images.mjs <manifest.json>
```

## Deploying - one-time setup

### 1. DNS

The site is attached to its hostname as a Worker **Custom Domain**, not a Route:
a Route needs you to already own a proxied DNS record there, which is exactly
what the Custom Domain creates for you. A Custom Domain cannot be created over
an existing CNAME, so any pre-existing record at that hostname has to go first.

**Check what else lives on that hostname before touching it.** A hostname can
carry non-HTTP service records that an A/CNAME change will break, because
Cloudflare's proxy only carries HTTP(S) ports and is an L7 proxy regardless.
Service records at `_service._proto.name` are a different DNS node and coexist
fine - what breaks them is repointing or proxying the host their *target*
resolves to.

### 2. GitHub secrets

Create a Cloudflare API token (My Profile → API Tokens → **Create Custom
Token**) with exactly:

- Account → **Workers Scripts** → Edit
- Zone → **Workers Routes** → Edit, scoped to `ianmcbride.com`

Nothing else. Not a Global API Key. Then add two repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### 3. First deploy

```sh
npx wrangler deploy
```

That creates the Worker and attaches the Custom Domain from `wrangler.jsonc`.
Afterwards `.github/workflows/deploy.yml` handles every push to `main`.
