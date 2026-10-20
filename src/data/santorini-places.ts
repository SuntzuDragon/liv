import type { Place } from './types';

/**
 * Coordinates are OSM/Wikidata, cross-checked where a second source existed.
 * Hours and prices come from the operator's own site wherever one publishes
 * them. Anything we could not confirm is marked `unverified`, and the card
 * says so rather than quietly pretending.
 */

export const OIA: Place[] = [
  {
    id: 'three-domes',
    name: 'The three blue domes',
    kind: 'view',
    town: 'oia',
    star: true,
    blurb:
      'The shot everyone comes for. Walk east along the main lane about 150m past where Atlantis Books used to be, then drop down the side lane by the Aspaki hotel — the spot is past the churches, looking back west at them. Morning light is front-on; at sunset they are backlit.',
    hours: 'Always open',
    price: 'Free',
    coords: { lat: 36.46133, lng: 25.37611 },
    tags: ['Go before 10am', 'Rooftops are private homes'],
  },
  {
    id: 'oia-castle',
    name: 'Oia Castle',
    greek: 'Καστέλι Αγίου Νικολάου',
    kind: 'view',
    town: 'oia',
    star: true,
    blurb:
      'A ruined Venetian lookout on the tip of the headland, built of lava rock. No gate, no ticket, no roof — just the best open view west down the caldera. It is also where the whole island comes to watch the sun go down.',
    hours: 'Always open',
    price: 'Free',
    coords: { lat: 36.46019, lng: 25.37328 },
    tags: ['Sunset spot'],
  },
  {
    id: 'oia-windmills',
    name: 'The windmills',
    kind: 'view',
    town: 'oia',
    blurb:
      'Restored and standing on the ridge above Ammoudi, a minute past the castle. They are private holiday lets now, so you can walk right up and photograph them but not go inside.',
    hours: 'Always open',
    price: 'Free',
    coords: { lat: 36.46059, lng: 25.3739 },
  },
  {
    id: 'panagia-platsani',
    name: 'Panagia Platsani',
    greek: 'Παναγία Πλατσανή',
    kind: 'church',
    town: 'oia',
    blurb:
      'The blue-domed church on the main square, thirty seconds from the bus stop. Rebuilt in 1965 after the 1956 earthquake destroyed the original inside the castle — so it is modern, despite looking ancient. Shoulders and knees covered if you go in.',
    price: 'Free',
    coords: { lat: 36.46213, lng: 25.37626 },
    tags: ['By the bus stop'],
  },
  {
    id: 'naval-museum',
    name: 'Naval Museum of Oia',
    kind: 'museum',
    town: 'oia',
    blurb:
      'In a restored sea captain’s mansion: figureheads, sea chests, sextants, model ships and watercolours. Small, genuinely charming, and about forty minutes well spent if the lane outside is heaving.',
    hours: 'Usually 10:00–14:00 & 17:00–20:00, closed Tue',
    price: '€5',
    coords: { lat: 36.46159, lng: 25.37389 },
    url: 'https://www.instagram.com/santorini_maritime_museum/',
    tags: ['Check hours on the door'],
  },
  {
    id: 'oia-alley',
    name: 'Just getting lost',
    kind: 'view',
    town: 'oia',
    blurb:
      'The lanes off the main walkway are where Oia is actually pleasant. One turn inland and the crowd thins out completely. There is nothing to find — that is the point.',
    hours: 'Always',
    price: 'Free',
    coords: { lat: 36.4617, lng: 25.37606 },
  },

  // --- shops ---
  {
    id: 'epilekton',
    name: 'Epilekton',
    kind: 'shop',
    town: 'oia',
    blurb:
      'Art, antiques and genuinely odd small objects rather than souvenirs — the kind of shop where a 1980s brass bottle opener costs €20 and you want it anyway. On the central square.',
    hours: '10:00–19:00',
    coords: { lat: 36.46213, lng: 25.37626 },
    url: 'https://epilektonart.com',
  },
  {
    id: 'galanopoulos',
    name: 'Galanopoulos Gallery',
    kind: 'shop',
    town: 'oia',
    blurb:
      'Founded in 1986 by the sculptor Stavros Galanopoulos and still run by his family. Originals and prints, on the main walkway at Armenoi.',
    coords: { lat: 36.46165, lng: 25.37482 },
    url: 'https://galanopo28740.cmdwebsites.com',
    tags: ['Hours not published'],
  },
  {
    id: 'aquamarine',
    name: 'Aquamarine Jewelry',
    kind: 'shop',
    town: 'oia',
    blurb:
      'A tiny shop directly on the main walkway with an unusually good reputation — 5.0 across a hundred-odd reviews. Being offered a discount without asking is normal here, not a trick.',
    hours: '10:00–21:00',
    coords: { lat: 36.4617, lng: 25.37606 },
  },

  // --- food ---
  {
    id: 'the-yard',
    name: 'The Yard Coffee Bar',
    kind: 'cafe',
    town: 'oia',
    star: true,
    blurb:
      'Widely called the best coffee in Oia and reliably the cheapest thing on this page. Opens at 06:00, which on a tender morning is the single most useful fact here. Small, and it fills up.',
    hours: 'From 06:00',
    price: '€',
    coords: { lat: 36.46793, lng: 25.37943 },
    url: 'https://theyardcoffeebarsantorini.com',
    tags: ['Opens early', 'Gets full'],
  },
  {
    id: 'skiza',
    name: 'Skiza Cafe',
    kind: 'cafe',
    town: 'oia',
    blurb:
      'Relaxed, right on the main walkway, with the caldera straight out in front of you. You are paying for the view: espresso €4.50, cappuccino €7. Worth it once.',
    hours: '08:00–23:30',
    price: 'Coffee €4.50–7',
    coords: { lat: 36.46194, lng: 25.37777 },
    url: 'https://skiza.gr',
  },
];

export const AMMOUDI: Place[] = [
  {
    id: 'ammoudi-fish-tavern',
    name: 'Ammoudi Fish Tavern',
    kind: 'food',
    town: 'ammoudi',
    star: true,
    blurb:
      'A converted stone warehouse on the water at the bottom of the steps, and the reason most people go down. Fish is sold by weight — ask the price per kilo and have it weighed before you order, or the bill is a surprise.',
    hours: '11:00–23:00',
    price: '€25–45pp',
    coords: { lat: 36.46062, lng: 25.37023 },
    url: 'https://ammoudisantorini.com',
    tags: ['Season ends soon', 'Fish sold by weight'],
  },
  {
    id: 'ammoudi-steps',
    name: 'The steps down',
    kind: 'view',
    town: 'ammoudi',
    blurb:
      'About 280 switchbacks starting below the castle. Ten to fifteen minutes down, twenty to thirty back up with no shade at all. It is a working donkey path, so watch your footing. Walk down, then take the fixed €10 taxi back up.',
    price: 'Free down, €10 taxi up',
    coords: { lat: 36.46019, lng: 25.37328 },
    tags: ['No shade', 'Donkey path'],
  },
];

export const FIRA: Place[] = [
  {
    id: 'three-bells',
    name: 'Three Bells of Fira',
    greek: 'Church of the Dormition · Άγιοι Θεόδωροι',
    kind: 'church',
    town: 'firostefani',
    star: true,
    blurb:
      'The blue dome with three bells stacked above it, fifteen minutes’ walk north along the caldera path. Built 1757, and it goes by two names — Agioi Theodoroi is the same church, not a different one. For the classic photo go up the road behind and above it. The inside is normally shut.',
    price: 'Free',
    coords: { lat: 36.42333, lng: 25.42855 },
    tags: ['15 min walk north'],
  },
  {
    id: 'prehistoric-thera',
    name: 'Museum of Prehistoric Thera',
    kind: 'museum',
    town: 'fira',
    star: true,
    blurb:
      'The Akrotiri material — the wall paintings and the gold ibex from the "Minoan Pompeii". If you only do one museum, this is the one, and it is indoors and air-conditioned. Ten minutes south of the cable car, not in the shopping streets.',
    hours: '08:30–15:30, closed Tue',
    price: '€10 / €5',
    coords: { lat: 36.4165, lng: 25.4326 },
    url: 'https://cyclades.culture.gov.gr/en/location/mouseio-proistorikis-thiras/',
  },
  {
    id: 'archaeological-museum',
    name: 'Archaeological Museum of Thera',
    kind: 'museum',
    town: 'fira',
    blurb:
      'Geometric through Roman rather than the famous frescoes, so less striking than the Prehistoric one — but it is right beside the cable car station, which makes it the easy one to fit in.',
    hours: '08:30–15:30, closed Mon (Sat to 21:00)',
    price: '€10 / €5',
    coords: { lat: 36.42001, lng: 25.4311 },
    url: 'https://cyclades.culture.gov.gr/en/hours-prices/',
  },
  {
    id: 'megaro-gyzi',
    name: 'Megaro Gyzi Museum',
    kind: 'museum',
    town: 'fira',
    blurb:
      'A 17th-century mansion in the Catholic quarter with engravings, photographs of the island before and after the 1956 earthquake, and almost nobody in it. The best-value hour in Fira at €3.',
    hours: 'Mon–Sat 10:00–16:00',
    price: '€3',
    coords: { lat: 36.42082, lng: 25.43096 },
    url: 'http://gyzimegaron.gr/en/museum/',
  },
  {
    id: 'metropolitan-cathedral',
    name: 'Orthodox Metropolitan Cathedral',
    greek: 'Υπαπαντή',
    kind: 'church',
    town: 'fira',
    blurb:
      'The big white one with the arcaded terrace on the caldera edge at the south end of town. Free, and the terrace in front is one of the easiest good views in Fira.',
    price: 'Free',
    coords: { lat: 36.41678, lng: 25.43186 },
  },
  {
    id: 'catholic-cathedral',
    name: 'Cathedral of St John the Baptist',
    kind: 'church',
    town: 'fira',
    blurb:
      'The Catholic cathedral, up in the old Catholic quarter — pale yellow and pink with a bell tower, and a completely different mood from the Orthodox one. The quarter around it is the prettiest part of Fira to wander.',
    price: 'Free',
    coords: { lat: 36.42056, lng: 25.43079 },
  },
  {
    id: 'gold-street',
    name: 'Gold Street',
    greek: 'Υπαπαντής',
    kind: 'shop',
    town: 'fira',
    blurb:
      'Ypapantis Street — a whole lane of jewellers along the caldera edge. Worth walking even if you buy nothing. Prices climb and quality gets patchier the further north you go.',
    coords: { lat: 36.41763, lng: 25.4322 },
    tags: ['Browse, then decide'],
  },
  {
    id: 'atlantis-books',
    name: 'Atlantis Books',
    kind: 'shop',
    town: 'firostefani',
    star: true,
    blurb:
      'The famous one — and it is no longer in Oia. It moved to Firostefani in 2024, at the foot of the Nomikos Cultural Centre, so it is now a Fira-side stop on the caldera walk rather than an Oia errand. Hand-written shelf recommendations, new and second-hand, some rare.',
    hours: 'Roughly midday to sunset',
    coords: { lat: 36.42167, lng: 25.42859 },
    url: 'https://atlantisbooks.org',
    tags: ['Moved from Oia', 'Phone to confirm'],
  },
  {
    id: 'lalaounis',
    name: 'Ilias Lalaounis',
    kind: 'shop',
    town: 'fira',
    blurb:
      'The famous Greek jeweller, on Ypapantis a few metres north of the Orthodox cathedral. Archaeological-revival pieces copied from Minoan and Byzantine originals. This is the island’s genuine luxury end — lovely to look at, no prices in the window.',
    coords: { lat: 36.41725, lng: 25.4317 },
    url: 'https://www.lalaounis.com/',
  },
  {
    id: 'mati-gallery',
    name: 'Mati Art Gallery',
    kind: 'shop',
    town: 'fira',
    blurb:
      'Yorgos Kypris’s gallery on Gold Street — glass and metal fish, shoals and birds, some wearable. Genuinely unlike the rest of the street.',
    coords: { lat: 36.41711, lng: 25.43171 },
    url: 'https://matiartgallery.com/',
  },
  {
    id: 'ak-gallery',
    name: 'AK Art Gallery',
    kind: 'shop',
    town: 'fira',
    blurb:
      'The oldest gallery on the island, in a converted flour mill just north on Ypapantis. Paintings by Christoforos Asimis and sculpture by Eleni Kolaitou.',
    coords: { lat: 36.41732, lng: 25.4317 },
    url: 'https://www.ak-galleries.com/ak-art-gallery-fira',
  },
  {
    id: 'bead-shop',
    name: 'The Bead Shop',
    kind: 'shop',
    town: 'fira',
    blurb:
      'Beads carved from lava, near the Archaeological Museum. Worth a look if you pass it.',
    coords: { lat: 36.41632, lng: 25.4323 },
    unverified: true,
  },
  {
    id: 'luckys',
    name: "Lucky's Souvlakis",
    kind: 'food',
    town: 'fira',
    star: true,
    blurb:
      'The cheap, fast, genuinely good gyros everyone sends you to. No view, no ceremony, €4–6 and you eat it standing up. The correct lunch on a day where time is the scarce thing.',
    price: 'Gyros €4–6',
    coords: { lat: 36.41727, lng: 25.43242 },
    tags: ['Cash is easiest'],
  },
  {
    id: 'obelix',
    name: 'Obelix',
    kind: 'food',
    town: 'fira',
    blurb:
      'Behind the main square in the Fabrika area, where people who live here actually eat. Gyros €5–9. The website is Greek-only, which tells you most of what you need to know.',
    price: '€5–9',
    coords: { lat: 36.41798, lng: 25.432 },
    url: 'https://obelix.gr',
  },
  {
    id: 'pelican-kipos',
    name: 'Pelican Kipos',
    kind: 'cafe',
    town: 'fira',
    blurb:
      'A garden courtyard tucked behind the square — shade, which by mid-afternoon in Fira is the thing you want most. Breakfast €8–14, lunch €12–20.',
    price: '€8–20',
    coords: { lat: 36.41837, lng: 25.43277 },
    url: 'https://www.pelicankipos.com',
  },
  {
    id: 'mama-thira',
    name: 'Mama Thira Taverna',
    kind: 'food',
    town: 'firostefani',
    blurb:
      'In Firostefani near the Three Bells, with the caldera view. Note this is the substitute for Galini Cafe, which half the internet still recommends — Galini is now a hotel and does not reopen until 2027.',
    coords: { lat: 36.42402, lng: 25.42839 },
    tags: ['Go here, not Galini'],
  },
  {
    id: 'irinis',
    name: "Irini's Cafe",
    kind: 'cafe',
    town: 'fira',
    blurb:
      'A small traditional Greek cafe on the way north out of town. Unfussy, and priced like somewhere locals drink.',
    coords: { lat: 36.42144, lng: 25.42905 },
  },
];

export const BEYOND: Place[] = [
  {
    id: 'santo-wines',
    name: 'Santo Wines',
    kind: 'winery',
    town: 'pyrgos',
    blurb:
      'The caldera-view terrace everyone photographs, 4km south near Pyrgos. The bus is €2.20 and stops a couple of hundred metres away, slightly downhill — it does not drop you in Pyrgos village. Tour €14; flights are €35 / €40 / €45 and only the €45 includes Vinsanto. Rows three and four cannot be reserved, so there is always a walk-up tier. Realistically, this costs you Oia.',
    price: 'Tour €14 · flights €35–45',
    coords: { lat: 36.38757, lng: 25.43651 },
    url: 'https://santowines.gr/',
    tags: ['Book ahead', 'Half a day'],
  },
];
