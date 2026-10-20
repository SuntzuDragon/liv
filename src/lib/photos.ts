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
  'oia-hero': 'oia-three-domes-1',
  'santorini-hero': 'oia-hero-3',
  'fira-hero': 'fira-caldera-1',
  'mykonos-hero': 'mykonos-windmills-1',

  // Card thumbnails for the hub (16:10 frames).
  'santorini-card': 'oia-hero-2',
  'mykonos-card': 'mykonos-windmills-3',
  'mykonos-windmills': 'mykonos-windmills-3',

  // Oia sights
  'oia-blue-domes': 'oia-three-domes-1',
  'oia-castle': 'oia-castle-1',
  'oia-windmills': 'oia-windmill-1',
  'panagia-platsani': 'platsani-1',
  'oia-sunset': 'caldera-sunset-1',

  // Ammoudi
  'ammoudi-bay': 'ammoudi-1',
  'ammoudi-steps': 'ammoudi-steps-1',
  'ammoudi-fish-tavern': 'ammoudi-dusk-1',

  // Fira
  'fira-caldera': 'fira-caldera-2',
  'cable-car': 'fira-cablecar-1',
  'old-port': 'fira-oldport-1',
  'karavolades-steps': 'fira-donkey-steps-1',
  'three-bells': 'three-bells-1',
  'fira-cathedral': 'fira-cathedral-1',
  'catholic-cathedral': 'fira-belltower-1',

  // Shops, streets, texture
  'atlantis-books': 'atlantis-books-1',
  'gold-street': 'santorini-shop-1',
  'santorini-alley': 'santorini-alley-1',
  'oia-alley': 'oia-alley-1',
  'art-gallery': 'santorini-art-shop-1',
  bougainvillea: 'santorini-alley-bougainvillea-1',
  'blue-dome': 'blue-dome-detail-1',

  // Food and wine
  freddo: 'freddo-cappuccino-1',
  gyros: 'greek-gyros-1',
  meze: 'greek-meze-1',
  fava: 'greek-fava-1',
  tomatokeftedes: 'tomatokeftedes-1',
  'santo-wines': 'santo-wines-terrace-1',
  'wine-tasting': 'santorini-wine-tasting-1',
  vineyard: 'santorini-vine-1',

  // Mykonos
  'little-venice': 'mykonos-little-venice-1',
  paraportiani: 'mykonos-paraportiani-1',
  'mykonos-alley': 'mykonos-alley-1',
  'mykonos-harbour': 'mykonos-harbour-1',
};

export function photo(id: string): ImageMetadata | undefined {
  return byId.get(id) ?? byId.get(ALIAS[id] ?? '');
}

export function hasPhoto(id: string): boolean {
  return photo(id) !== undefined;
}
