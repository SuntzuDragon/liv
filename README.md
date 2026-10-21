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

### 1. DNS, and the game server server

`liv.ianmcbride.com` currently serves a game server server over an SRV record. The
SRV record itself (`the service record`) is a different DNS name and coexists
with a Worker at `liv` fine - SRV can't be proxied, so Cloudflare won't touch it.

**The problem is the SRV *target*.** If it points at `liv.ianmcbride.com`
itself, attaching the Worker swaps that hostname's A record to Cloudflare's
anycast IPs, and the Java client - which resolves the SRV target's A record -
ends up at Cloudflare. Cloudflare's proxy only carries HTTP(S) ports and is an
L7 HTTP proxy anyway, so game server's binary protocol dies regardless of port.

Split the two services:

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `mc` | the server's public IPv4 | **DNS only (grey)** |
| SRV | `the service record` | prio 0, weight 5, port `<MC port>`, target `the game server host` | n/a |
| SRV | `the service record` | prio 0, weight 5, port `<MC port>`, target `the game server host` | n/a |
| Worker | `liv` | created automatically by the Custom Domain - don't hand-create | managed |

Delete the existing A/CNAME at `liv.ianmcbride.com` first; a Custom Domain can't
be created over an existing record.

Caveats: SRV targets must be hostnames, never IPs (RFC 2782). **Bedrock ignores
SRV entirely** - Bedrock players need `the game server host` plus the port. Some
launchers skip the SRV lookup and fall back to the A record at `liv`, which is
now Cloudflare, so **publish `the game server host` as the canonical address** and
treat the `liv` SRV as back-compat.

Verify:

```sh
dig +short SRV the service record   # -> 0 5 <port> the game server host.
dig +short A the game server host                      # -> your real IP, NOT 104.x/172.6x
dig +short A liv.ianmcbride.com                     # -> Cloudflare
```

`ping` does not honour SRV records, so a failed ping proves nothing.

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
