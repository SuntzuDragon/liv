import type { Coords } from '../lib/maps';

/** Coordinates from OpenStreetMap, 2026-10-20. These are the landmarks the
 *  whole day navigates by, so they get their own pins. */
export const TRANSPORT: { name: string; greek?: string; note?: string; coords: Coords }[] = [
  {
    name: 'Old Port (tender landing)',
    greek: 'Παλιό λιμάνι, Φηρά',
    note: 'Where the boat drops you, at the bottom of the cliff',
    coords: { lat: 36.41831, lng: 25.42761 },
  },
  {
    name: 'Fira bus terminal',
    greek: 'Φηρά Bus Terminal',
    note: 'Inland from the caldera edge. Every island route leaves from here',
    coords: { lat: 36.41655, lng: 25.43343 },
  },
  {
    name: 'Oia bus stop',
    note: 'At the inland end of the village. Walk west to reach the caldera edge',
    coords: { lat: 36.4631, lng: 25.37656 },
  },
];
