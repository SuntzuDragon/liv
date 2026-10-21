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
      'The shot everyone comes for. Morning light is best, they’re backlit at sunset.',
    hours: 'Always open',
    price: 'Free',
    coords: { lat: 36.46133, lng: 25.37611 },
    tags: ['Rooftops are private homes'],
  },
  {
    id: 'oia-castle',
    name: 'Oia Castle',
    greek: 'Καστέλι Αγίου Νικολάου',
    kind: 'view',
    town: 'oia',
    star: true,
    blurb:
      'A ruined Venetian lookout on the tip of the headland, built out of lava rock. No gate, no ticket, no roof. Just the best open view west down the caldera, and where the whole island shows up to watch the sun go down.',
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
      'Restored, up on the ridge above Ammoudi, a minute past the castle. You can walk right up and photograph them, just not go inside.',
    hours: 'Always open',
    price: 'Free',
    coords: { lat: 36.46163, lng: 25.37219 },
  },
  {
    id: 'panagia-platsani',
    name: 'Panagia Platsani',
    greek: 'Παναγία Πλατσανή',
    kind: 'church',
    town: 'oia',
    blurb:
      'The blue-domed church on the main square, thirty seconds from the bus stop. Rebuilt in 1965 after the 1956 earthquake took out the original, so it’s way more modern than it looks.',
    price: 'Free',
    coords: { lat: 36.46213, lng: 25.37626 },
    tags: ['By the bus stop'],
  },
  {
    id: 'naval-museum',
    imageAlt:
      'A 19th-century Greek ship’s figurehead - the kind of thing Oia’s collection is built around, though this one is in Athens',
    name: 'Naval Museum of Oia',
    kind: 'museum',
    town: 'oia',
    blurb:
      'In an old sea captain’s mansion: figureheads, sea chests, sextants, model ships, watercolours. Quaint.',
    hours: '10:00-14:00 & 17:00-20:00, closed Tue',
    price: '€5',
    coords: { lat: 36.46159, lng: 25.37389 },
    url: 'https://www.instagram.com/santorini_maritime_museum/',
    tags: ['Check hours on the door'],
  },
  {
    id: 'oia-alley',
    name: 'Just getting lost 😛',
    kind: 'view',
    town: 'oia',
    blurb:
      'The lanes off the main walkway. One turn inland and the crowd dies down. Nothing specific, just fun to wander.',
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
      'Art, antiques, and odd lil trinkets. On the central square.',
    hours: '10:00-19:00',
    coords: { lat: 36.46213, lng: 25.37626 },
    url: 'https://epilektonart.com',
  },
  {
    id: 'galanopoulos',
    name: 'Galanopoulos Gallery',
    kind: 'shop',
    town: 'oia',
    blurb:
      'Started in 1986 by the sculptor Stavros Galanopoulos, still run by his family. Originals and prints, on the main walkway at Armenoi.',
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
      'A tiny shop right on the main walkway with a rly good reputation, 5.0 across a hundred-odd reviews.',
    hours: '10:00-21:00',
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
      '"Best coffee in Oia". Also the cheapish. Small, and it fills up. A splendid start. Worth knowing it’s a 10 min walk inland, not on the caldera.',
    hours: 'From 06:00',
    price: '€2.50-4.50',
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
      'Relaxed, right on the main walkway, caldera straight out in front of you. Paying for the view.',
    hours: '08:00-23:30',
    price: 'Coffee €4.50-7',
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
      'Let’s take a gander at the fish. A converted stone warehouse right on the water, and the reason most people go down. Fish is sold by weight before cooking.',
    hours: '11:00-23:00',
    price: '€25-45pp',
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
      'About 280 steps starting below the castle. Kinda steep.',
    price: 'Free down, €10 taxi up',
    coords: { lat: 36.46063, lng: 25.37336 },
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
      'The blue dome with three bells stacked above it, fifteen mins north along the caldera path. Built 1757. Go up the road behind it for the classic photo. The inside is normally shut.',
    price: 'Free',
    coords: { lat: 36.42333, lng: 25.42855 },
    tags: ['15 min walk north'],
  },
  {
    id: 'prehistoric-thera',
    imageAlt:
      'The gold ibex figurine from Akrotiri, which is held in this museum',
    name: 'Museum of Prehistoric Thera',
    kind: 'museum',
    town: 'fira',
    star: true,
    blurb:
      'The Akrotiri stuff - the wall paintings and the gold ibex from the "Minoan Pompeii". If you only do one museum this is the one, and it’s indoors and air conditioned. Genuinely excellent. Ten mins south of the shopping streets.',
    hours: '08:30-15:30, closed Tue',
    price: '€10 / €5',
    coords: { lat: 36.4165, lng: 25.4326 },
    url: 'https://cyclades.culture.gov.gr/en/location/mouseio-proistorikis-thiras/',
  },
  {
    id: 'archaeological-museum',
    imageAlt:
      'Theran amphorae from the cemetery of Ancient Thera, held in this museum',
    name: 'Archaeological Museum of Thera',
    kind: 'museum',
    town: 'fira',
    blurb:
      'Geometric through Roman rather than the famous frescoes, so less striking than the Prehistoric one. Right by the cable car station.',
    hours: '08:30-15:30',
    price: '€10 / €5',
    coords: { lat: 36.42001, lng: 25.4311 },
    url: 'https://cyclades.culture.gov.gr/en/hours-prices/',
  },
  {
    id: 'megaro-gyzi',
    imageAlt:
      'The courtyard of the Megaro Gyzi mansion in Fira',
    name: 'Megaro Gyzi Museum',
    kind: 'museum',
    town: 'fira',
    blurb:
      'A 17th-century mansion in the Catholic quarter. Engravings, photos of the island before and after the 1956 earthquake. Inexpensive.',
    hours: 'Mon-Sat 10:00-16:00',
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
      'The big white one with the arched terrace on the caldera edge at the south end of town. Free, and the terrace out front is one of the easiest good views in Fira.',
    price: 'Free',
    coords: { lat: 36.41678, lng: 25.43186 },
  },
  {
    id: 'catholic-cathedral',
    name: 'Cathedral of St John the Baptist',
    kind: 'church',
    town: 'fira',
    blurb:
      'Up in the old Catholic quarter. Completely different mood from the Orthodox one. The quarter around it is the prettiest part of Fira to wander.',
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
      'Ypapantis Street, a whole lane of jewellers along the caldera edge. Worth a wander even if you buy nothing.',
    coords: { lat: 36.41723, lng: 25.43162 },
    tags: ['Browse, then decide'],
  },
  // OSM still carries a stale node for this shop at 36.46148, 25.37439 - the
  // pre-2024 cave location in Oia. Anyone re-researching from OSM or Nominatim
  // will be handed that and "fix" this backwards. The move to Firostefani is
  // confirmed by the shop's own site and Instagram.
  {
    id: 'atlantis-books',
    name: 'Atlantis Books',
    kind: 'shop',
    town: 'firostefani',
    star: true,
    blurb:
      'The famous one. Hand-written shelf recommendations, new and second-hand, some rare.',
    hours: 'Roughly midday to sunset',
    coords: { lat: 36.42167, lng: 25.42859 },
    url: 'https://atlantisbooks.org',
    tags: ['Moved from Oia', 'Phone to confirm'],
  },
  {
    id: 'lalaounis',
    imageAlt:
      'A gold cuff by Ilias Lalaounis, from the house’s own collection',
    name: 'Ilias Lalaounis',
    kind: 'shop',
    town: 'fira',
    blurb:
      'The famous Greek jeweller, on Ypapantis just north of the Orthodox cathedral. Archaeological-revival pieces copied off Minoan and Byzantine originals. Island’s luxury end.',
    coords: { lat: 36.41725, lng: 25.4317 },
    url: 'https://www.lalaounis.com/',
  },
  {
    id: 'mati-gallery',
    imageAlt:
      'The Mati Art Gallery in Fira at dusk, with Kypris bronze fish on the facade',
    name: 'Mati Art Gallery',
    kind: 'shop',
    town: 'fira',
    blurb:
      'Yorgos Kypris’s gallery on Gold Street. Glass and metal fish, shoals and birds.',
    coords: { lat: 36.41711, lng: 25.43171 },
    url: 'https://matiartgallery.com/',
  },
  {
    id: 'bead-shop',
    imageAlt:
      'A bracelet of carved black volcanic lava beads - the kind of thing sold here',
    name: 'The Bead Shop',
    kind: 'shop',
    town: 'fira',
    blurb:
      'Beads carved out of lava, near the Archaeological Museum.',
    coords: { lat: 36.41632, lng: 25.4323 },
  },
  {
    id: 'luckys',
    imageAlt:
      'A gyros from Lucky’s, in their own printed wrapper',
    name: "Lucky's Souvlakis",
    kind: 'food',
    town: 'fira',
    star: true,
    blurb:
      'Cheap, fast and rly good. You eat standing up. Good for a quick lunch.',
    price: 'Gyros €4-6',
    coords: { lat: 36.41727, lng: 25.43242 },
    tags: ['Cash is easiest'],
  },
  {
    id: 'obelix',
    imageAlt:
      'The counter at Obelix, with the photo menu board and the gyros spit',
    name: 'Obelix',
    kind: 'food',
    town: 'fira',
    blurb:
      'Behind the main square in the Fabrika area, where people who live here actually eat. Gyros.',
    price: '€5-9',
    coords: { lat: 36.41798, lng: 25.432 },
    url: 'https://obelix.gr',
  },
  {
    id: 'pelican-kipos',
    imageAlt:
      'The walled garden courtyard at Pelican Kipos at dusk',
    name: 'Pelican Kipos',
    kind: 'cafe',
    town: 'fira',
    blurb:
      'A garden courtyard tucked behind the square. Shady! Breakfast and lunch.',
    price: '€8-20',
    coords: { lat: 36.41837, lng: 25.43277 },
    url: 'https://www.pelicankipos.com',
  },
  {
    id: 'mama-thira',
    imageAlt:
      'Mama Thira’s clifftop terrace in Firostefani, tables laid for dinner',
    name: 'Mama Thira Taverna',
    kind: 'food',
    town: 'firostefani',
    blurb:
      'In Firostefani near the Three Bells, with the caldera view. Family-run Greek restaurant.',
    coords: { lat: 36.42402, lng: 25.42839 },
  },
  {
    id: 'irinis',
    imageAlt:
      'Irini’s Cafe - a cream Cycladic building above the caldera',
    name: "Irini's Cafe",
    kind: 'cafe',
    town: 'fira',
    blurb:
      'A small traditional Greek cafe on the way north out of town. Not too pricey.',
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
      'The caldera-view terrace everyone photographs, 4km south near Pyrgos. Probs costs you Oia. Might be booked out?',
    price: 'Tour €14 · flights €35-45',
    coords: { lat: 36.38757, lng: 25.43651 },
    url: 'https://santowines.gr/',
    tags: ['Book ahead', 'Half a day'],
  },
];
