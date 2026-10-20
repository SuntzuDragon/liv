import type { Fact, Leg } from './santorini-essentials';

/** Mykonos, Thursday 22 October 2026, 07:00–17:00, tender port. */

export const SUNSET = '18:32';

export const FACTS: Fact[] = [
  {
    label: 'In the queue by',
    value: '15:45',
    note: 'Not 17:00. The tender queue is the longest of the day',
    tone: 'warn',
  },
  {
    label: 'Everything is within',
    value: '400m',
    note: 'Of where the tender drops you. No transport needed',
    tone: 'cool',
  },
  {
    label: 'Forecast',
    value: 'Calm',
    note: '22°C, no rain, wind under 12kn — the tender will run',
    tone: 'warm',
  },
  {
    label: 'Sunset',
    value: SUNSET,
    note: "You'll be aboard 90 minutes before it. Do Little Venice in the morning instead",
    tone: 'warm',
  },
  {
    label: 'A drink in Little Venice',
    value: '€10–18',
    note: 'One street inland it is half that',
    tone: 'cool',
  },
  {
    label: 'Bakery, gyros',
    value: '€5–10',
    note: 'The cheap end is genuinely good here',
    tone: 'cool',
  },
];

export const WARNINGS: { title: string; body: string }[] = [
  {
    title: 'The weather is a gift — the clock is the only risk',
    body:
      'Four separate weather models agree that Thursday is near-calm: southerly wind under 12 knots, waves under half a metre, no rain. The meltemi is a northerly and this is not one — and the northerlies arrive the day after you leave. So the tender will run, which means the only thing that can wreck the day is time. Be in the tender queue by 15:45 and treat the printed last-tender time as half an hour earlier than printed.',
  },
  {
    title: 'Download the offline map before you leave the ship',
    body:
      'Chora is a whitewashed maze, and GPS bounces off the walls so the blue dot wanders. In Apple Maps, search Mykonos and tap Download offline map while you still have wifi. GPS works with no signal; the map tiles do not. Tap the pins on this page while you are still online too.',
  },
  {
    title: 'This is the most expensive island in Greece',
    body:
      'And the waterfront is the worst of it — a drink in Little Venice runs €10–18. One street inland it is half that, and no worse. Never let anyone pick a fish without asking the price per kilo and what that whole fish will cost, out loud, first.',
  },
  {
    title: 'Always choose euros',
    body:
      'Every terminal and ATM will offer to bill you in dollars "for convenience". That is dynamic currency conversion and it costs roughly 3–7%. Press EUR, or decline conversion. Use a bank machine — Alpha, Eurobank, National Bank — rather than the standalone Euronet one.',
  },
  {
    title: 'Flat grippy shoes, and nothing with wheels',
    body:
      'The alleys are centuries-polished flagstone with raised grout ridges, random steps and no handrails. Genuinely slippery, and it matters more for your mum than for you. And do not rent a scooter or an ATV — loose gravel, blind bends, insurance that often will not cover a US licence, against a hard afternoon deadline.',
  },
];

/**
 * Built backwards from a 15:45 tender queue, and front-loaded deliberately:
 * the famous places are empty at 08:15 and unbearable by noon.
 */
export const PLAN: Leg[] = [
  {
    time: '07:15',
    title: 'Be first in the tender queue',
    body:
      'The single highest-leverage thing you do all day. The first tenders go before the ship’s own excursions fill them, and every minute you win here is a minute of empty Mykonos at the other end.',
    tone: 'go',
  },
  {
    time: '08:10',
    title: 'Panagia Paraportiani',
    body:
      'Ninety seconds from where you land, and completely empty at this hour. Five chapels fused into one white mass that looks melted. Approach from the south-west for the photo, with the low east light on it.',
    tone: 'watch',
  },
  {
    time: '08:25',
    title: 'Little Venice, with nobody in it',
    body:
      'This is the deserted version of the famous place, and it is the better photograph. It is also your compensation for missing the sunset — the ship sails long before. Face north-west along the balconies, then turn south-west for the windmills.',
    tone: 'watch',
  },
  {
    time: '08:45',
    title: 'The windmills',
    body:
      'Five minutes uphill from Little Venice. Shoot back north over the town with the morning sun behind you. It is an exposed ridge, so this is where the extra layer comes out. Then sit down — this is the view you came for.',
    tone: 'watch',
  },
  {
    time: '09:15',
    title: 'Breakfast you have earned',
    body:
      'Nice n Easy opens at 09:00 on Alefkandra Square with Little Venice on one side and the windmills on the other — the first verified thing open with that view. Or go five minutes inland to Gioras, the 18th-century wood-fired bakery, for spanakopita.',
    tone: 'eat',
  },
  {
    time: '10:00',
    title: 'Get deliberately lost',
    body:
      'Two hours in the alleys, which are the actual attraction. Matogianni for the famous names, Enoplon Dynameon for calmer design shops, Kalogera for restaurants, Mitropoleos for the smaller proper ones. Rarity Gallery opens at 10:00, is free, and is indoors.',
    tone: 'go',
  },
  {
    time: '12:00',
    title: 'Pelican o’clock',
    body:
      'Back to the Old Port waterfront. Lunch prep is when a pelican stands by a kitchen door waiting for fish — Niko’s Taverna is the named haunt. There are three of them on the island and one is always called Petros.',
    tone: 'watch',
  },
  {
    time: '12:30',
    title: 'A proper lunch',
    body:
      'Ask for kopanisti — the spicy fermented cheese that is the island’s own — and louza, the cured pork loin. Kadena does Mykonian sausage a hundred metres from the water; Sakis is the €5–10 gyros answer if you would rather spend the money elsewhere.',
    tone: 'eat',
  },
  {
    time: '14:00',
    title: 'Second pass, your choice',
    body:
      'Deliberately unstructured — by now you know what you liked. The windmills again for the warmer afternoon side-light, or the Maritime Museum, or walk to Megali Ammos and put your feet in the sea, or just eat ice cream on the harbourfront.',
    tone: 'go',
  },
  {
    time: '15:30',
    title: 'Stop starting things',
    body:
      'Last coffee, last toilet, buy water for the tender. Then walk to the pier and get in the queue. The forty-five minutes after that is the plan, not slack — do not spend it.',
    tone: 'warn',
  },
];

export const SPECIALITIES = [
  {
    name: 'Kopanisti',
    greek: 'κοπανιστή',
    what:
      'The island’s own cheese and the thing to ask for by name — soft, peppery, properly pungent, and genuinely local. It turns up on meze plates rather than in shops.',
  },
  {
    name: 'Louza',
    greek: 'λούζα',
    what:
      'Air-cured spiced pork loin, sliced thin. Mykonos’s great charcuterie, and the other half of the order when you ask for kopanisti.',
  },
  {
    name: 'Melopita',
    greek: 'μελόπιτα',
    what:
      'Honey and fresh-cheese pie, baked and served warm. Gioras bakery’s cheese-and-honey pie is the realistic way to try it.',
  },
  {
    name: 'Amygdalota',
    greek: 'αμυγδαλωτά',
    what: 'Soft almond-paste sweets under icing sugar. Gioras again, or any decent bakery.',
  },
  {
    name: 'Freddo espresso',
    what:
      'The Greek default. Expect €4–6 inland and considerably more if you drink it looking at the water.',
  },
];
