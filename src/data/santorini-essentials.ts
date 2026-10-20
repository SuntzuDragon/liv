import type { Phrase, Speciality } from './types';

/**
 * Santorini, Wednesday 21 October 2026, 07:00–22:00, tender port.
 * Every number here is from an operator or official source — see
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
    label: 'Ship sails',
    value: SHIP_DEPARTS,
    note: 'Last tender is earlier — get the real time from the Compass',
    tone: 'warn',
  },
  {
    label: 'Cable car',
    value: '€10',
    note: 'One way, per person. Every 20 min, 07:00–22:00',
    tone: 'cool',
  },
  {
    label: 'Bus to Oia',
    value: '€2.20',
    note: 'Cash only, 20–25 min, every 30 min',
    tone: 'cool',
  },
  {
    label: 'Weather',
    value: '22°C',
    note: 'UV 5 — you will burn without noticing',
    tone: 'warm',
  },
  {
    label: 'Bring cash',
    value: '€60–80',
    note: 'Small notes and coins. The bus takes nothing else',
    tone: 'cool',
  },
];

/** The five things that actually decide how the day goes. */
export const WARNINGS: { title: string; body: string }[] = [
  {
    title: 'The last tender is the only real deadline',
    body:
      "It is not the same as the 22:00 sailing time — they can be 60–90 minutes apart. Get the final tender time from the day's Cruise Compass or the app, then work backwards: back in Fira two hours before it, in the cable car queue 60–90 minutes before it. The cable car moves about 600 people an hour downhill and the whole ship wants down at once.",
  },
  {
    title: 'The cable car is €10, not €6',
    body:
      "Half the internet still quotes €6 — that fare retired in 2024, and even the port authority's own page hasn't updated. The operator says €10 one way per person, and there are no return tickets and no online booking. Budget €40 for the two of you both ways.",
  },
  {
    title: 'The bus is cash only',
    body:
      'You pay a conductor on board. No cards, no day passes, no tapping anything. Have coins and small notes before you leave the ship — everywhere else on the island takes Apple Pay, so this is the one thing that catches people.',
  },
  {
    title: 'Your shoes decide your day',
    body:
      'Fira and Oia are polished marble and smooth volcanic cobble, slick even bone dry, plus 587 steps at the port and about 280 down to Ammoudi. Grippy trainers or properly strapped walking sandals. No flip-flops, no smooth soles, absolutely no heels or platforms.',
  },
  {
    title: 'Always choose euros',
    body:
      'Any ATM or card machine offering to charge you "in US dollars" or at a "guaranteed home rate" is dynamic currency conversion, and the markup runs to about 13%. Someone measured 8% at the Alpha Bank ATM by the Fira bus station. Press the button that says EUR, every time.',
  },
];

export interface Leg {
  time: string;
  title: string;
  body: string;
  tone?: 'go' | 'eat' | 'watch';
}

/**
 * Oia-first, because Oia at 09:00 is a different village from Oia at 13:00,
 * and because it keeps the bus off the critical path at the end of the day.
 * The 22:00 sailing is what makes the sunset ending possible at all.
 */
export const PLAN: Leg[] = [
  {
    time: '07:00',
    title: 'Get a tender ticket early',
    body:
      'Ship excursions tender first, independent passengers generally last. The earlier you have a numbered ticket, the earlier you are ashore — and being ashore before 08:30 is how you walk straight onto the cable car instead of queuing 45 minutes.',
    tone: 'go',
  },
  {
    time: '08:00',
    title: 'Cable car up to Fira',
    body:
      '€10 each, three minutes, 220 metres up. Buy at the window — bring cash as backup, the card machine is unconfirmed. The morning crunch is 09:30–11:00, so going early is worth real time.',
    tone: 'go',
  },
  {
    time: '08:30',
    title: 'Walk to the bus station',
    body:
      'About nine minutes from the top station: out, then follow the main pedestrian lane inland to the main road, 25is Martiou. Queue for the bus rather than drifting up at departure time — full buses skip stops, and the next one is 30 minutes.',
    tone: 'go',
  },
  {
    time: '09:00',
    title: 'Oia, while it is still quiet',
    body:
      'The excursion wave lands between 10:00 and 11:00. Before that you get the blue domes, the castle and the lanes in low warm light with room to stand. Do the photos first and the shops after.',
    tone: 'watch',
  },
  {
    time: '11:00',
    title: 'Coffee, shops, maybe Ammoudi',
    body:
      'Ammoudi Bay is about 280 steps below Oia — 10–15 minutes down, 20–30 back up with no shade. The move is walk down, eat, and take the fixed €10 taxi back up. Only worth it if you are happy to give up Fira.',
    tone: 'eat',
  },
  {
    time: '13:00',
    title: 'Bus back to Fira for lunch',
    body:
      'Fira is the better afternoon town: more shade, more shops, more places to eat, and being in a crowd matters less there. You are also now a nine-minute walk from the cable car, which takes the bus out of the endgame.',
    tone: 'eat',
  },
  {
    time: '16:00',
    title: 'Fira: the museums and Gold Street',
    body:
      'The Museum of Prehistoric Thera is the one worth the ticket, and it is indoors and air-conditioned. Then the caldera edge for the view, and the jewellery street if that is your thing.',
    tone: 'watch',
  },
  {
    time: '17:30',
    title: 'The decision point',
    body:
      'If the final tender is 21:00 or later, you can go back to Oia for sunset — bus out at 17:30, sunset at 18:36, return bus at 19:20 or 19:50, and the cable car runs to 22:00 with the last car down at 21:40. If the final tender is earlier than 21:00, do not try it. Watch the sunset from the Fira caldera edge instead; it is the same sun.',
    tone: 'watch',
  },
  {
    time: '18:36',
    title: 'Sunset',
    body:
      'Most cruise passengers never get this — ships usually sail long before. Yours does not. Find a wall, sit on it, and let the crowd be someone else’s problem.',
    tone: 'watch',
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
  { greek: 'Ναι / Όχι', say: 'neh / OH-hee', means: 'Yes / no — "neh" means yes' },
  { greek: 'Στην υγειά μας', say: 'stin ee-YAH mas', means: 'Cheers' },
];

export const SPECIALITIES: Speciality[] = [
  {
    name: 'Freddo cappuccino',
    what:
      'Iced espresso under a cap of cold-frothed milk. This is what Greeks actually drink all day, not iced lattes. Order a freddo espresso if you want it without the milk.',
  },
  {
    name: 'Chlorotyri',
    greek: 'χλωροτύρι',
    what:
      "Santorini's own fresh goat's-milk cheese — soft, creamy, slightly sour. Ask for it at a deli rather than a restaurant.",
  },
  {
    name: 'Fava',
    what:
      'Yellow split pea purée, warm, with olive oil and capers on top. A Santorini PDO product and on basically every menu.',
  },
  {
    name: 'Tomatokeftedes',
    what:
      'Tomato fritters made from the island\'s tiny, intense sun-dried tomatoes. The best thing on most meze menus.',
  },
  {
    name: 'White aubergine',
    what:
      'A local variety that is sweeter and less bitter than purple. Usually grilled or in a dip.',
  },
  {
    name: 'Assyrtiko & Vinsanto',
    what:
      'The island\'s white grape, grown in baskets on the ground against the wind, from vines in volcanic ash. Assyrtiko is bone dry and mineral; Vinsanto is the sweet sun-dried version.',
  },
];
