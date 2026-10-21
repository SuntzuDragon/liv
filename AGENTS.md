# liv - working rules

A hub of island guides made for Liv, at `liv.ianmcbride.com`. Astro 7, static
output, no SSR, deployed to Cloudflare Workers static assets.

`README.md` explains *why* the site is built this way and is written for people.
This file states the *rules*, and is the one to read before changing anything.

## Conventions

- Commit subjects: one short sentence, no body, **no attribution lines of any
  kind** (no Co-Authored-By, no generated-with, no session links).
- Comments explain **why**, and name the thing that motivated the code. Most of
  the non-obvious code here exists because of a specific browser behaviour - say
  which one, so the next person doesn't "simplify" it back into a bug.
- Content lives in plain `.ts` files under `src/data/`, typed from
  `src/data/types.ts`. No content collections, no CMS, no markdown pipeline.
- Hand-written CSS using `@layer` and custom properties. No Tailwind, no
  component library.

## Hard requirements

These are not preferences. Breaking one breaks the thing the site exists for.

- **It must work offline.** She opens it on ship wifi and then walks an island
  with no signal. The whole site is precached by `scripts/build-sw.mjs` at build
  time. If you add a route or an asset type, make sure it still gets precached.
- **It must work in iOS Safari.** That is the only browser that actually
  matters here.
- **Decoration must never gate content.** Anything that animates in must be
  readable if the animation never runs.

## iOS Safari rules

Each of these was expensive to find. Don't undo them.

- `html` **and** `body` both carry an explicit `background-color`. iOS 26 and 27
  ignore `theme-color` entirely and tint Safari's translucent toolbars by
  sampling the page instead.
- **No `backdrop-filter` on a sticky or fixed element**, especially one touching
  the top or bottom edge. It tears during rubber-band overscroll and hijacks the
  toolbar tint. The sticky section nav is deliberately opaque in `--bg`.
- **Cards never rotate; only the photo inside them does.** Three layers:
  wrapper rotates → inner clips → image plain. Rotated text is rasterized and
  goes soft, and a transformed child escapes its parent's rounded clip.
- **No compositing hints on gallery images** - no `will-change`, no
  `translateZ(0)`, no `filter`, no `drop-shadow`. Each promoted layer is its own
  device-pixel surface and there are dozens of these.
- **No `content-visibility: auto` on cards.** It estimates height until first
  paint, so a section-nav jump lands hundreds of pixels off target.
- **No `scroll-behavior: smooth` on `html`.** The Santorini page is ~33,000px
  tall; a nav jump animates for seconds and fights the iOS edge-swipe-back.
- **No `maximum-scale` or `user-scalable=no`.** Blocking zoom fails WCAG 1.4.4,
  and it is still honoured in home-screen web apps.
- Use `svh` for full-height heroes, never `dvh` - `dvh` tracks the toolbar live
  and reflows the page mid-scroll.
- Source photos are capped at 2000px on ingest and served much smaller. Decoded
  cost is `width × height × 4` regardless of file size.

## Design

- **No colours outside the token set** in `src/styles/global.css` `@layer tokens`.
  Colours are `oklch()`; Safari has supported it since 15.4, so no hex fallback
  is needed.
- Fonts are self-hosted in `public/fonts/` so nothing needs a CDN at sea. Inter
  carries the Greek subset - the phrase cards need it.
- Tilt angles stay small (around 1°) and only ever apply to images.

## Maps

Links use Apple's unified schema,
`https://maps.apple.com/place?coordinate=LAT,LNG&name=NAME`, built in
`src/lib/maps.ts`. `name` is a label, not a search, so the pin lands exactly
where we put it. Never use `address=` - it is geocoder-dependent and 404s on
real Greek street addresses. Each place also offers a Google link, because
Apple's web Maps does not hand off to an app on Android. Map links open in a
new tab so the guide is never lost behind Maps.

## Content accuracy

The guides are used in the field, so a confidently wrong detail is worse than an
admitted gap. Places carry an `unverified` flag and the card hedges honestly
rather than stating something we could not confirm. Several places that every
guidebook still lists have closed or moved - see `my own notes`
for the current list and the reasoning behind each.

## Deploying

`npx wrangler deploy`, or push to `main` and GitHub Actions does it.

**`liv.ianmcbride.com` also hosts a game server server** via
`SRV the service record → the game server host:the game port`. That works because the
Java client resolves the SRV *before* any A lookup, and `home` is unproxied.
Never add an A or CNAME at `liv` by hand, and never let `home` become proxied.
