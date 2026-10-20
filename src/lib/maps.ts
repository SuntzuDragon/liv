/**
 * Map links.
 *
 * Apple's unified Maps URL schema (iOS 18.4+) is the documented current form;
 * the old `?q=&ll=` idiom is just an undocumented alias that 301s to this one,
 * so we skip the redirect. `name` is a pure label, not a search term — the pin
 * lands on our exact coordinates and carries our exact title, with nothing to
 * geocode and nothing to fail. `address=` is deliberately unused: it is
 * geocoder-dependent and 404s on real Greek street addresses.
 *
 * On iOS the handoff to Maps.app is a system special case rather than a
 * universal link. Everywhere else the same URL renders Apple's web Maps, so
 * nothing is broken for a non-Apple visitor — but Android stays in the browser,
 * which is why each place also offers a Google link that does hand off there.
 */

export interface Coords {
  lat: number;
  lng: number;
}

/** %20 over +, and `&` must be escaped or Apple truncates the label. */
function enc(s: string): string {
  return encodeURIComponent(s);
}

/** A pin with our label at our coordinates. */
export function appleMaps(name: string, c: Coords): string {
  return `https://maps.apple.com/place?coordinate=${c.lat},${c.lng}&name=${enc(name)}`;
}

/**
 * The real Apple Maps business listing, with hours and photos.
 * Place IDs are opaque and can only be harvested from the Maps share sheet,
 * so this is used only where we have one.
 */
export function applePlace(placeId: string): string {
  return `https://maps.apple.com/place?place-id=${enc(placeId)}`;
}

/** Walking directions from wherever she is standing. */
export function appleWalk(c: Coords): string {
  return `https://maps.apple.com/directions?destination=${c.lat},${c.lng}&mode=walking`;
}

/** Secondary link — this one does hand off to the Google Maps app on Android. */
export function googleMaps(c: Coords): string {
  return `https://www.google.com/maps/search/?api=1&query=${c.lat}%2C${c.lng}`;
}

/** Prefer the real listing when we have one, else a labelled pin. */
export function mapLink(name: string, c?: Coords, placeId?: string): string | undefined {
  if (placeId) return applePlace(placeId);
  if (c) return appleMaps(name, c);
  return undefined;
}
