/**
 * Resolves a place id to its bundled photo so a card degrades to a clean
 * text card when an image is missing, instead of breaking the build.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/{places,scenes}/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const byId = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.[^.]+$/, '');
  byId.set(id, mod.default);
}

export function photo(id: string): ImageMetadata | undefined {
  return byId.get(id);
}

export function hasPhoto(id: string): boolean {
  return byId.has(id);
}
