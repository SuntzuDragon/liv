import type { Fact } from './santorini-essentials';

/** Mykonos, Thursday 22 October 2026, 07:00-17:00, tender port. */

export const SUNSET = '18:32';

export const FACTS: Fact[] = [
  {
    label: 'Everything is within',
    value: '400m',
    note: 'Of where you land. The whole town is walkable',
    tone: 'cool',
  },
  {
    label: 'Forecast',
    value: 'Calm',
    note: '22°C, no rain, barely any wind',
    tone: 'warm',
  },
  {
    label: 'Sunset',
    value: SUNSET,
    note: 'After you sail, so do Little Venice in the morning instead',
    tone: 'warm',
  },
  {
    label: 'A drink in Little Venice',
    value: '€10-18',
    note: 'One street inland it\'s half that',
    tone: 'cool',
  },
];

export const SPECIALITIES = [
  {
    name: 'Kopanisti',
    greek: 'κοπανιστή',
    what:
      'The island’s own cheese and the thing to ask for by name. Soft, peppery, properly pungent. Turns up on meze plates rather than in shops.',
  },
  {
    name: 'Louza',
    greek: 'λούζα',
    what:
      'Air-cured spiced pork loin, sliced thin. The other half of the order when you ask for kopanisti.',
  },
  {
    name: 'Melopita',
    greek: 'μελόπιτα',
    what:
      'Honey and fresh cheese pie, baked, served warm. Gioras\' cheese-and-honey pie is the realistic way to try it.',
  },
  {
    name: 'Amygdalota',
    greek: 'αμυγδαλωτά',
    what: 'Soft almond paste sweets under icing sugar. Gioras again, or any decent bakery.',
  },
  {
    name: 'Freddo espresso',
    what:
      'The Greek default. €4-6 inland, way more if you drink it looking at the water.',
  },
];
