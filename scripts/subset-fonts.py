#!/usr/bin/env python3
"""
Subsets the self-hosted fonts from fonts-src/ into public/fonts/.

This is a MANUAL step, not part of the build. It is run when the font files
themselves change, not when the copy changes - the coverage below is deliberately
wider than the site's current text so that editing copy never needs a re-run.

Needs: pip install fonttools brotli

Two separate savings, and the second is the bigger one for Fraunces:

1. Glyph subsetting - drop the characters the site will never show.
2. Axis pinning - Fraunces ships four variable axes (opsz, wght, SOFT, WONK).
   global.css sets 'SOFT' 28 and 'WONK' 1 as fixed values, so the whole SOFT
   0-100 and WONK 0-1 design space is dead weight. opsz is kept because
   `font-optical-sizing: auto` needs it, and each wght range is copied from
   that font's @font-face declaration in src/styles/fonts.css.

Originals stay in fonts-src/ precisely so this can be re-run or widened later.
A subset cannot be widened from itself - the glyphs are gone.
"""
import os
import subprocess
import sys

from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

SRC = 'fonts-src'
OUT = 'public/fonts'

# Deliberately generous. Covers far more than the site uses so that a new place
# name, a new Greek phrase, a currency symbol or a curly quote can be typed into
# src/data/ without anyone remembering this script exists. The whole Greek and
# Greek Extended blocks are in here, which is the range most at risk otherwise.
RANGES = [
    (0x0020, 0x007E),  # printable ASCII
    (0x00A0, 0x00FF),  # Latin-1 supplement (accents, degree sign)
    (0x0100, 0x017F),  # Latin Extended-A
    (0x0370, 0x03FF),  # Greek and Coptic
    (0x1F00, 0x1FFF),  # Greek Extended (polytonic)
    (0x2000, 0x206F),  # general punctuation (curly quotes, ellipsis)
    (0x20A0, 0x20BF),  # currency symbols
    (0x2190, 0x21FF),  # arrows
    (0x2600, 0x26FF),  # misc symbols
]

# Weight ranges mirror the @font-face declarations in src/styles/fonts.css
# exactly. Pinning narrower than the declaration would silently clamp a weight
# the CSS is still allowed to ask for.
PLANS = {
    'fraunces-latin': {'SOFT': 28, 'WONK': 1, 'wght': (300, 700)},
    'inter-latin': {'wght': (300, 800)},
    'inter-greek': {'wght': (300, 800)},
}

text = ''.join(chr(c) for lo, hi in RANGES for c in range(lo, hi + 1))
tmp = os.path.join(OUT, '_subset_tmp.ttf')
total_before = total_after = 0

for name, limits in PLANS.items():
    src = os.path.join(SRC, name + '.woff2')
    dst = os.path.join(OUT, name + '.woff2')
    if not os.path.exists(src):
        sys.exit('missing original: %s' % src)
    subprocess.run(
        ['pyftsubset', src, '--output-file=' + tmp, '--text=' + text,
         '--layout-features=*', '--no-hinting', '--desubroutinize'],
        check=True, capture_output=True)
    font = TTFont(tmp)
    instancer.instantiateVariableFont(font, limits, inplace=True, updateFontNames=False)
    font.flavor = 'woff2'
    font.save(dst)
    before, after = os.path.getsize(src), os.path.getsize(dst)
    total_before += before
    total_after += after
    print('  %-22s %6.1f KB -> %6.1f KB  (-%d%%)'
          % (name, before / 1024, after / 1024, round((1 - after / before) * 100)))

os.remove(tmp)
print('  %-22s %6.1f KB -> %6.1f KB  (-%.0f KB, -%d%%)'
      % ('TOTAL', total_before / 1024, total_after / 1024,
         (total_before - total_after) / 1024,
         round((1 - total_after / total_before) * 100)))
