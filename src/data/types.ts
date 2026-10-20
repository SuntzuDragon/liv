import type { Coords } from '../lib/maps';

export type PlaceKind =
  | 'view'    // a viewpoint / photo spot
  | 'church'
  | 'museum'
  | 'shop'
  | 'food'
  | 'cafe'
  | 'winery';

export type Town = 'oia' | 'ammoudi' | 'fira' | 'firostefani' | 'pyrgos';

export interface Place {
  /** Stable kebab-case id; also the image filename. */
  id: string;
  name: string;
  /** Greek name, shown small under the English one where known. */
  greek?: string;
  kind: PlaceKind;
  town: Town;
  /** One or two sentences of genuinely useful colour. No brochure filler. */
  blurb: string;
  hours?: string;
  price?: string;
  coords?: Coords;
  address?: string;
  url?: string;
  /** Harvested from the Apple Maps share sheet; unlocks the real listing. */
  placeId?: string;
  /** Short flags rendered as chips: 'cash only', '280 steps down', … */
  tags?: string[];
  /** Liv-should-not-miss-this. Gets the sun-coloured treatment. */
  star?: boolean;
  /** Set when a detail could not be confirmed, so the page can hedge honestly. */
  unverified?: boolean;
}

export interface Phrase {
  greek: string;
  /** Phonetic respelling for an American English speaker. */
  say: string;
  means: string;
}

export interface Speciality {
  name: string;
  greek?: string;
  what: string;
}
