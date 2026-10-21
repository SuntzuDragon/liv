import type { Coords } from '../lib/maps';

/** Coordinates from OpenStreetMap, 2026-10-20. These are the landmarks the
 *  whole day navigates by, so they get their own pins. */
export const TRANSPORT: {
  name: string;
  greek?: string;
  note?: string;
  coords: Coords;
  placeId?: string;
}[] = [
  {
    name: 'Old Port (tender landing)',
    greek: 'Παλιό λιμάνι, Φηρά',
    note: 'Where the boat drops you, at the bottom of the cliff',
    coords: { lat: 36.4176013, lng: 25.4280013 },
    placeId: 'I469D90F118395F65',
  },
  {
    name: 'Fira bus terminal',
    greek: 'Φηρά Bus Terminal',
    note: 'Inland from the caldera edge. Every island route leaves from here',
    coords: { lat: 36.4165945, lng: 25.4334676 },
    placeId: 'I32EA65BD21412AF2',
  },
  {
    name: 'Oia bus stop',
    note: 'At the inland end of the village. Walk west to reach the caldera edge',
    coords: { lat: 36.4631163, lng: 25.3765136 },
    placeId: 'I19D11764C76783BB',
  },
];
