import type { Phrase, Speciality } from './types';

/**
 * Santorini, Wednesday 21 October 2026, 07:00-22:00, tender port.
 * Every number here is from an operator or official source - see
 * notes in the repo's planning docs for the citation behind each one.
 */

export const SUNSET = '18:36';
export const SHIP_DEPARTS = '22:00';
export const SHIP_ARRIVES = '07:00';

export interface Fact {
  label: string;
  value: string;
  note?: string;
  tone?: 'cool' | 'warm' | 'warn';
}

export const FACTS: Fact[] = [
  {
    label: 'Sunset',
    value: SUNSET,
    note: 'Golden hour from about 17:45',
    tone: 'warm',
  },
  {
    label: 'Weather',
    value: '22°C',
    note: 'UV 5, so you\'ll burn without noticing',
    tone: 'warm',
  },
  {
    label: 'Water',
    value: 'Bottled',
    note: 'Tap water is desalinated and tastes it',
    tone: 'cool',
  },
];

export const PHRASES: Phrase[] = [
  { greek: 'Γεια σας', say: 'YAH-sas', means: 'Hello / goodbye (polite)' },
  { greek: 'Ευχαριστώ', say: 'ef-hah-rees-TOH', means: 'Thank you' },
  { greek: 'Παρακαλώ', say: 'pah-rah-kah-LOH', means: "Please / you're welcome" },
  { greek: 'Συγγνώμη', say: 'see-GHNO-mee', means: 'Excuse me / sorry' },
  { greek: 'Καλημέρα', say: 'kah-lee-MEH-rah', means: 'Good morning' },
  { greek: 'Πόσο κάνει;', say: 'POH-so KAH-nee', means: 'How much is it?' },
  { greek: 'Το λογαριασμό', say: 'toh loh-gar-yaz-MOH', means: 'The bill, please' },
  { greek: 'Ναι / Όχι', say: 'neh / OH-hee', means: 'Yes / no - "neh" means yes' },
  { greek: 'Στην υγειά μας', say: 'stin ee-YAH mas', means: 'Cheers' },
];

export const SPECIALITIES: Speciality[] = [
  {
    name: 'Freddo cappuccino',
    what:
      'Iced espresso under a cap of cold-frothed milk. This is what Greeks actually drink all day, not iced lattes. Ask for a freddo espresso if you want it without the milk.',
  },
  {
    name: 'Chlorotyri',
    greek: 'χλωροτύρι',
    what:
      "Santorini's own fresh goat's-milk cheese. Soft, creamy, a lil sour. Ask at a deli rather than a restaurant.",
  },
  {
    name: 'Fava',
    what:
      'Yellow split pea purée, warm, olive oil and capers on top. On basically every menu and rly good.',
  },
  {
    name: 'Tomatokeftedes',
    what:
      'Tomato fritters made from the island\'s tiny intense tomatoes. Best thing on most meze menus.',
  },
  {
    name: 'White aubergine',
    what:
      'A local one, sweeter and less bitter than the purple kind. Usually grilled or in a dip.',
  },
  {
    name: 'Assyrtiko & Vinsanto',
    what:
      'The island\'s white grape, grown in baskets on the ground so the wind doesn\'t get it. Assyrtiko is bone dry, Vinsanto is the sweet sun-dried version.',
  },
];
