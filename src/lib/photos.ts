/**
 * Resolves a slot name to its bundled photo so a card degrades to a clean text
 * card when an image is missing, rather than breaking the build.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/site/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byId = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byId.set(id, mod.default);
}

/**
 * Semantic slots mapped onto the sourced filenames, so pages and place data
 * refer to what a picture is *for* rather than which file happened to win.
 */
const ALIAS: Record<string, string> = {
  // Heroes. A full-bleed hero on a phone is tall, so an ultra-wide panorama
  // crops to a narrow strip of itself — these are 3:2 or portrait on purpose.
  'oia-hero': 'oia-hero-2',
  'santorini-hero': 'oia-hero-3',
  'fira-hero': 'fira-caldera-1',
  'mykonos-hero': 'mykonos-windmills-1',

  // Card thumbnails for the hub (16:10 frames).
  'santorini-card': 'oia-hero-4',
  'mykonos-card': 'mykonos-windmills-3',
  'mykonos-windmills': 'mykonos-windmills-3',

  // Oia sights
  'three-domes': 'oia-three-domes-1',
  'oia-castle': 'oia-castle-1',
  'oia-windmills': 'oia-windmill-1',
  'panagia-platsani': 'platsani-1',
  'oia-alley': 'oia-alley-1',

  // Oia shops and coffee
  epilekton: 'santorini-art-shop-1',
  galanopoulos: 'santorini-shop-2',
  aquamarine: 'santorini-shop-1',
  'the-yard': 'freddo-cappuccino-1',
  skiza: 'freddo-espresso-1',

  // Ammoudi
  'ammoudi-fish-tavern': 'ammoudi-dusk-1',
  'ammoudi-steps': 'ammoudi-steps-1',

  // Fira
  'three-bells': 'three-bells-1',
  'metropolitan-cathedral': 'fira-cathedral-1',
  'catholic-cathedral': 'fira-belltower-1',
  'gold-street': 'santorini-alley-1',
  'atlantis-books': 'atlantis-books-1',
  'santo-wines': 'santo-wines-terrace-1',

  // Scene-setting
  'oia-sunset': 'caldera-sunset-1',
  bougainvillea: 'santorini-alley-bougainvillea-1',
  'blue-dome': 'blue-dome-detail-1',

  // Museums and galleries. Several of these are the museum's own collection
  // rather than its building — a truthful way to show what is inside.
  'naval-museum': 'naval-museum-1',
  'prehistoric-thera': 'prehistoric-thera-1',
  'archaeological-museum': 'archaeological-museum-1',
  'megaro-gyzi': 'megaro-gyzi-1',
  lalaounis: 'lalaounis-3',
  'mati-gallery': 'mati-gallery-1',
  'ak-gallery': 'ak-gallery-1',
  'bead-shop': 'bead-shop-1',

  // Food. Mostly representative of what you'd eat, not the premises.
  luckys: 'luckys-real',
  obelix: 'obelix-real',
  'pelican-kipos': 'pelican-kipos-real',
  'mama-thira': 'mama-thira-real',
  irinis: 'irinis-real',
  gioras: 'gioras-real',

  // Mykonos shops
  'rarity-gallery': 'rarity-gallery-real',
  parthenis: 'parthenis-real',

  // Mykonos
  'little-venice': 'mykonos-little-venice-1',
  paraportiani: 'mykonos-paraportiani-1',
  'kato-mili': 'mykonos-windmills-3',
  'mykonos-alley': 'mykonos-alley-1',
  pelican: 'mykonos-harbour-1',
  'folklore-museum': 'mykonos-white-house-1',
  'nice-n-easy': 'mykonos-little-venice-2',
  kastros: 'mykonos-town-water-1',
  sakis: 'greek-gyros-1',
  kadena: 'greek-meze-1',
};

export function photo(id: string): ImageMetadata | undefined {
  return byId.get(id) ?? byId.get(ALIAS[id] ?? '');
}

export function hasPhoto(id: string): boolean {
  return photo(id) !== undefined;
}
