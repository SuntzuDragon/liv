import type { Place } from './types';

/** Coordinates from OpenStreetMap, most cross-checked against Nominatim. */

export const MYKONOS_SIGHTS: Place[] = [
  {
    id: 'aegean-maritime',
    name: 'Aegean Maritime Museum',
    greek: 'Ναυτικό Μουσείο Αιγαίου',
    kind: 'museum',
    town: 'chora',
    star: true,
    blurb:
      'Ship models from pre-Minoan to the early 1900s, in a 19th century house with a courtyard of anchors and sailors\' gravestones brought over from Delos. The restored Armenistis lighthouse lantern is in the garden, which is four minutes from the tender instead of twelve kilometers away.',
    hours: '10:00-15:00',
    price: '€6',
    coords: { lat: 37.4453376, lng: 25.3284876 },
    tags: ['Season ends 30 Oct'],
  },
  {
    id: 'archaeological-museum-mykonos',
    name: 'Archaeological Museum',
    greek: 'Αρχαιολογικό Μουσείο Μυκόνου',
    kind: 'museum',
    town: 'chora',
    blurb:
      'Finds from the Rheneia pit, where Athens moved every grave off Delos in 426 BC. The Pithos of Mykonos is here too, a relief storage jar showing the wooden horse, one of the earliest pictures of that scene anywhere.',
    hours: '09:00-16:00, closed Tuesdays',
    price: '€5',
    coords: { lat: 37.4501451, lng: 25.3294077 },
  },
  {
    id: 'mccabe-kastro',
    name: "McCabe's Mykonos of the '50s",
    kind: 'museum',
    town: 'chora',
    blurb:
      'Robert McCabe photographed the island in the 1950s, before any of this. The show is staged in the Kastro site right beside Paraportiani, so it costs about fifty meters on top of a church you are passing anyway.',
    hours: 'Runs to April 2027. Daily hours are not published anywhere.',
    price: 'Free',
    coords: { lat: 37.4471, lng: 25.3257 },
    unverified: true,
  },
  {
    id: 'agios-nikolaos-kadena',
    name: 'Agios Nikolaos of Kadena',
    greek: 'Άγιος Νικόλαος ο Θαλασσινός',
    kind: 'church',
    town: 'chora',
    blurb:
      'The small blue-domed chapel out on the harbor quay, and one of the few in Chora with an interior you can walk into. One room, a few icons, a black and white tiled floor.',
    hours: 'Unlocked on and off through the day, no published hours',
    price: 'Free',
    coords: { lat: 37.447508, lng: 25.327149 },
    unverified: true,
  },
  {
    id: 'municipal-gallery',
    name: 'Municipal Gallery',
    greek: 'Δημοτική Πινακοθήκη Μυκόνου',
    kind: 'museum',
    town: 'chora',
    blurb:
      'The municipality\'s own gallery, in the 19th century building that was the island\'s first clinic. CYCLES runs 17 October to 1 November, eight artists across photography, video, ceramics, handmade paper and engraving.',
    hours: 'Probably 11:00-14:00. Last year\'s edition published those hours and this one has not.',
    price: 'Free, going by the show before it',
    coords: { lat: 37.445821, lng: 25.329072 },
    unverified: true,
  },
  {
    id: 'paraportiani',
    name: 'Panagia Paraportiani',
    greek: 'Παναγία Παραπορτιανή',
    kind: 'church',
    town: 'chora',
    star: true,
    blurb:
      'Five chapels fused into one white mass that looks melted rather than built. Most photographed church in Greece.',
    price: 'Free',
    placeId: 'ID12122C600FE5F16',
    coords: { lat: 37.4471317, lng: 25.3257242 },
    tags: ['Empty at 08:15'],
  },
  {
    id: 'kato-mili',
    name: 'Kato Mili - the windmills',
    greek: 'Κάτω Μύλοι',
    kind: 'view',
    town: 'chora',
    star: true,
    blurb:
      'The row of five up on the ridge, five mins uphill from Little Venice. Better in the morning.',
    price: 'Free',
    placeId: 'I449703DF61A1714A',
    coords: { lat: 37.4444803, lng: 25.3256267 },
  },
  {
    id: 'little-venice',
    name: 'Little Venice',
    greek: 'Αλευκάντρα',
    kind: 'view',
    town: 'chora',
    star: true,
    blurb:
      'Old houses with balconies hanging straight over the water.',
    price: 'Free',
    placeId: 'I674BF331EF8DDC55',
    coords: { lat: 37.446174, lng: 25.326317 },
    tags: ['Quietest in the morning'],
  },
  {
    id: 'mykonos-alley',
    name: 'The maze',
    kind: 'view',
    town: 'chora',
    blurb:
      'Matogianni for the famous names, Enoplon Dynameon for calmer design shops, Kalogera for restaurants, Mitropoleos for the smaller proper ones.',
    price: 'Free',
    coords: { lat: 37.4462, lng: 25.3282 },
  },
  {
    id: 'pelican',
    name: 'The pelican',
    kind: 'view',
    town: 'chora',
    blurb:
      'Three pelicans roam the town and one is always called Petros. The known haunt is the kitchen door of Niko’s Taverna.',
    price: 'Free',
    coords: { lat: 37.4471, lng: 25.32691 },
    tags: ['Best odds around midday'],
  },
];

export const MYKONOS_FOOD: Place[] = [
  {
    id: 'baboulas',
    name: 'Baboulas Ouzeri',
    greek: 'Μπαμπούλας',
    kind: 'food',
    town: 'chora',
    star: true,
    blurb:
      'Ouzeri on the old port quay. Meze, grilled octopus, seafood, ouzo. There are two Baboulas on the island and this is the old port one.',
    hours: 'From 11:00',
    price: '€11-30',
    coords: { lat: 37.4494922, lng: 25.3294955 },
  },
  {
    id: 'captains',
    name: "Captain's",
    kind: 'food',
    town: 'chora',
    blurb:
      'Twenty five meters from where the tender lands, and open at 07:00 when essentially nothing else is. Meze to share, fried calamari, grilled octopus. Portions are on the small side.',
    hours: 'From 07:00',
    coords: { lat: 37.447297, lng: 25.327162 },
  },
  {
    id: 'vegera',
    name: 'Vegera',
    kind: 'cafe',
    town: 'chora',
    blurb:
      'All day cafe on the old port waterfront, in a building that was a coffee house long before it was this. Seventeen meters from the pier and open at 07:00.',
    hours: 'From 07:00',
    price: '€20-50',
    coords: { lat: 37.4473786, lng: 25.3270879 },
  },
  {
    id: 'katerinas',
    name: "Katerina's",
    kind: 'cafe',
    town: 'chora',
    blurb:
      'Balcony hanging straight over the water in Little Venice, restaurant below and a cocktail bar upstairs. Most of that strip only opens for sunset, which is hours after you sail. This one opens at 09:00.',
    hours: 'From 09:00',
    coords: { lat: 37.4468014, lng: 25.3258896 },
  },
  {
    id: 'karavaki',
    name: 'Karavaki',
    kind: 'food',
    town: 'chora',
    blurb:
      'Seafood with a sea view at the Vencia hotel, and the only place here that publishes its season, which runs to 31 October. It is 540 meters east and uphill though, ten minutes out of the maze.',
    hours: 'From 08:00',
    price: 'Around €50',
    coords: { lat: 37.4453458, lng: 25.3324784 },
  },
  {
    id: 'gioras',
    imageAlt:
      'The vaulted underground room at Gioras, with the wood-fired oven',
    name: 'Gioras Bakery',
    greek: 'Φούρνος Γιώρας',
    kind: 'cafe',
    town: 'chora',
    star: true,
    blurb:
      'Oldest working bread oven on the island. 18th century, wood-fired, same family for over two hundred years. A magnificent lil room. The spanakopita is the thing, and the cheese-and-honey pie is melopita.',
    price: 'Cheap, for Mykonos',
    placeId: 'IFFB2C0F0132E8376',
    coords: { lat: 37.4444592, lng: 25.3275985 },
    tags: ['Cash only', 'No street sign'],
  },
  {
    id: 'nice-n-easy',
    name: 'Nice n Easy',
    kind: 'food',
    town: 'chora',
    star: true,
    blurb:
      'On Alefkandra Square with Little Venice on one side and the windmills on the other.',
    hours: '09:00-00:00',
    price: '€20-40pp',
    placeId: 'I7AAB7AFC58654B02',
    coords: { lat: 37.4455045, lng: 25.326312 },
  },
  {
    id: 'sakis',
    name: 'Sakis Grill House',
    kind: 'food',
    town: 'chora',
    blurb:
      'Fast, loud, crowded, meat carved all day.',
    price: '€5-10',
    placeId: 'IE5854CF16853AA83',
    coords: { lat: 37.4459427, lng: 25.3293699 },
  },
  {
    id: 'kadena',
    name: 'Kadena',
    kind: 'food',
    town: 'chora',
    blurb:
      'A hundred meters from the water, and the most reliable place for the local stuff. Mykonian sausage, kopanisti and louza.',
    price: '€€',
    placeId: 'I777A427EF5EF7F5',
    coords: { lat: 37.4472102, lng: 25.3272682 },
    tags: ['Kopanisti and louza'],
  },
];

/** Where the tender lands - she doesn't get to choose which. */
export const MYKONOS_PINS: {
  name: string;
  note?: string;
  coords: { lat: number; lng: number };
  placeId?: string;
}[] = [
  {
    name: 'Tender pier (town hall)',
    note: 'The good one, you step off already in town',
    coords: { lat: 37.44737, lng: 25.3269 },
  },
  {
    name: 'Tender pier (old port end)',
    note: 'The other one. Flat 10-12 min walk along the water',
    coords: { lat: 37.45116, lng: 25.3287 },
  },
  {
    name: 'Little Venice',
    note: '3 min from the pier',
    coords: { lat: 37.446174, lng: 25.326317 },
    placeId: 'I674BF331EF8DDC55',
  },
  {
    name: 'The windmills',
    note: '5 min, slightly uphill',
    coords: { lat: 37.4445, lng: 25.32554 },
    placeId: 'I449703DF61A1714A',
  },
];
