import type { Coords } from '../lib/maps';

/** Coordinates from OpenStreetMap, 2026-10-20. These are the landmarks the
 *  whole day navigates by, so they get their own pins. */
export const TRANSPORT: { name: string; greek?: string; note?: string; coords: Coords }[] = [
  {
    name: 'Old Port (tender landing)',
    greek: 'Παλιό λιμάνι, Φηρά',
    note: 'Where your tender drops you, at the bottom of the cliff',
    coords: { lat: 36.41831, lng: 25.42761 },
  },
  {
    name: 'Cable car — bottom station',
    note: 'Two minutes right from the tender dock',
    coords: { lat: 36.4188, lng: 25.42736 },
  },
  {
    name: 'Cable car — top station',
    greek: 'Τελεφερίκ Σαντορίνης',
    note: 'Your landmark in Fira — everything is described from here',
    coords: { lat: 36.42047, lng: 25.43045 },
  },
  {
    name: 'Fira bus terminal',
    greek: 'Φηρά Bus Terminal',
    note: 'About 9 minutes inland from the cable car. All routes leave from here',
    coords: { lat: 36.41655, lng: 25.43343 },
  },
  {
    name: 'Oia bus stop',
    note: 'At the inland end of the village — walk west to reach the caldera edge',
    coords: { lat: 36.4631, lng: 25.37656 },
  },
];
