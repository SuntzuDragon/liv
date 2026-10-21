# liv - working rules

A hub of island guides made for Liv, at `liv.ianmcbride.com`. Astro 7, static
output, no SSR, deployed to Cloudflare Workers static assets.

`README.md` explains *why* the site is built this way and is written for people.
This file states the *rules*, and is the one to read before changing anything.

## Conventions

- **pnpm, not npm.** The version is pinned by `packageManager` in
  `package.json`, and CI runs `pnpm/action-setup` *before* `setup-node` because
  `cache: pnpm` needs pnpm on PATH to find the store.
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
- **Heroes stay one image at every aspect ratio.** An art-directed portrait crop
  behind a `max-aspect-ratio` switch was tried and rejected twice over: the
  Mykonos crop loses two of the five windmills, and the breakpoint is a cliff
  that lands on the wrong side of itself on an ultrawide or a tall foldable.
  The hero box is tall, so a 3:2 photo shows about half its width on a phone -
  that waste is the accepted price of never breaking at an odd size.

## Design

- **No colours outside the token set** in `src/styles/global.css` `@layer tokens`.
  Colours are `oklch()`; Safari has supported it since 15.4, so no hex fallback
  is needed.
- Fonts are self-hosted in `public/fonts/` so nothing needs a CDN at sea. Inter
  carries the Greek subset - the phrase cards need it.
- **The shipped fonts are subset, and the full originals live in `fonts-src/`.**
  Regenerate with `python3 scripts/subset-fonts.py` (needs
  `pip install fonttools brotli`). It is a manual step on purpose, not part of
  the build.

  **You almost certainly do not need to re-run it.** The subset deliberately
  carries far more than the site uses, so writing new copy - including new Greek
  phrases - never requires a re-run. What is already available:

  | Range | Covers |
  |---|---|
  | U+0020-007E | printable ASCII |
  | U+00A0-00FF | Latin-1: accents, °, £ |
  | U+0100-017F | Latin Extended-A |
  | U+0370-03FF | **the whole Greek block** |
  | U+1F00-1FFF | polytonic Greek |
  | U+2000-206F | curly quotes, ellipsis, dashes |
  | U+20A0-20BF | currency symbols |
  | U+2190-21FF, U+2600-26FF | arrows, misc symbols |

  Re-run it only to change that coverage, or if a font file itself is replaced.
  It saves 71KB (-38%), about half of which is pinning Fraunces' `SOFT` and
  `WONK` axes - `global.css` sets both to fixed values, so the rest of those
  axes was dead weight. Each `wght` range is copied from that font's
  `@font-face` in `src/styles/fonts.css`; pinning narrower would silently clamp
  a weight the CSS may still ask for. **Never subset from `public/fonts/`** -
  a subset cannot be widened from itself, the glyphs are gone.
- Tilt angles stay small (around 1°) and only ever apply to images.

## Maps

Links use Apple's unified schema,
`https://maps.apple.com/place?coordinate=LAT,LNG&name=NAME`, built in
`src/lib/maps.ts`. `name` is a label, not a search, so the pin lands exactly
where we put it. Never use `address=` - it is geocoder-dependent and 404s on
real Greek street addresses. Each place also offers a Google link, because
Apple's web Maps does not hand off to an app on Android. Map links open in a
new tab so the guide is never lost behind Maps.

## Editing content

Blurbs and other copy live as **single string literals**, however long the line
gets. Do not wrap them into `'...' + '...'` concatenations to keep lines short.
That was tried, and it silently produced glued words ("aroundnoon",
"cheapestthing") whenever a join lost its space - which nothing catches,
because the concatenation is valid TypeScript either way and the build is
perfectly happy. One long line is uglier in the editor and correct in the
browser.

## Voice

The copy is written to sound like Ian, not like a travel site. This was derived
from a large sample of his own writing, so it is measured, not guessed. The
full rules live outside this repo.

Do:

- Sentence case, normal contractions, curly apostrophes.
- Short sentences. Fragments are fine. Median message length in the sample was
  five words, so err shorter than feels right.
- ` - ` (spaced hyphen) where a dash is wanted.
- Quote someone else's claim rather than asserting it: "best coffee in Oia".
- Hedge in front, then state the thing plainly: "I think", "probs", "idk".
- Sparing shorthand that he actually uses: `rly`, `probs`, `mins`, `lil`,
  `ofc`, `idk`, `tmrw`, `bc`.
- **American spelling.** flashlight not torch, meters not metres, colors not
  colours, jewelry not jewellery.
- Criticise by understatement, never by verdict. "It's no SF museum", not
  "overrated" or "tourist trap".
- Start a sentence with Also / But / And / Oh when it suits.

Never:

- **Em dashes or en dashes.** Zero in the sample. This is the loudest tell.
- **Semicolons.** Essentially never. (The `;` in `Πόσο κάνει;` is a Greek
  question mark, not a semicolon - leave it.)
- Brochure adjectives: vibrant, bustling, charming, picturesque, quaint,
  idyllic, hidden gem, must-see, breathtaking, curated, nestled.
- Formal connectives: however, therefore, moreover, furthermore, that said,
  additionally, ultimately, in terms of.
- Consultant verbs: utilize, ensure, leverage, facilitate, elevate, embark,
  unwind, indulge, delve.
- "not only ... but also", "whether you're X or Y", or any rhetorical
  scaffolding ("let's dive in", "in conclusion").
- `lmao`, `smth`, `cuz`, `hehe` - wrong flavour of casual for him.
- **Explaining what the reader already knows or could work out.** No "don't
  forget to", "make sure you", "be aware that". Liv and her mum travel well;
  copy that over-explains reads as condescending. If they'd figure it out
  standing there, cut it.

One deliberate departure: he ends a short line without a period almost always.
That works in a chat bubble and reads as broken in a paragraph, so prose here
keeps its terminal punctuation.

## Content accuracy

The guides are used in the field, so a confidently wrong detail is worse than an
admitted gap. Places carry an `unverified` flag and the card hedges honestly
rather than stating something we could not confirm. Several places that every
guidebook still lists have closed or moved. The current list and the reasoning
behind each is kept in my own notes, not here.

## Checking your work

`pnpm run verify` - it runs `astro check` then the build, and `&&` stops at the
first failure so the error summary is the last thing on screen. Read the whole
tail of it. Truncating the output has already let a duplicate object key reach
`main`: the error count sits *above* the warning and hint counts, so a
`tail -3` shows a reassuring "0 warnings, 0 hints" while hiding "1 error".

## Deploying

`pnpm exec wrangler deploy`, or push to `main` and GitHub Actions does it.

**This hostname also carries an SRV record for a game server.** It keeps
working because a client resolves the SRV *before* any A lookup, and the SRV
target is a separate unproxied hostname. So: never hand-create an A or CNAME at
this hostname, and never let the SRV target become proxied. Check the live DNS
before changing anything here.
