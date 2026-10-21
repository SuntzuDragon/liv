import type { Place } from './types';

/** Coordinates from OpenStreetMap, most cross-checked against Nominatim. */

export const MYKONOS_SIGHTS: Place[] = [
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
    coords: { lat: 37.4471, lng: 25.32572 },
    tags: ['Go first, go early'],
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
    coords: { lat: 37.4445, lng: 25.32554 },
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
    coords: { lat: 37.44586, lng: 25.32643 },
    tags: ['Do it in the morning'],
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
  {
    id: 'folklore-museum',
    name: 'Folklore Museum',
    kind: 'museum',
    town: 'chora',
    blurb:
      'In an 18th-century captain’s house seventy metres from where you land. Hours are anyone’s guess in late October.',
    coords: { lat: 37.44746, lng: 25.32594 },
  },
  {
    id: 'parthenis',
    imageAlt:
      'The Parthenis store in Mykonos: a white vaulted room with linen on a brass rail',
    name: 'Parthenis',
    kind: 'shop',
    town: 'chora',
    blurb:
      'Orsalia Parthenis’s shop near Little Venice. The Greek label that actually belongs here, all soft neutral linen.',
    coords: { lat: 37.44514, lng: 25.32637 },
  },
];

export const MYKONOS_FOOD: Place[] = [
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
      'Oldest working bread oven on the island. 18th century, wood-fired, same family for over two hundred years. A magnificent lil room. Get the spanakopita, and the cheese-and-honey pie if you want to try melopita.',
    price: 'Cheap, for Mykonos',
    coords: { lat: 37.44444, lng: 25.32754 },
    tags: ['Cash only', 'No sign - look for the alley'],
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
    coords: { lat: 37.44553, lng: 25.32624 },
  },
  {
    id: 'sakis',
    name: 'Sakis Grill House',
    kind: 'food',
    town: 'chora',
    blurb:
      'Fast, loud, crowded, meat carved all day.',
    price: '€5-10',
    coords: { lat: 37.44586, lng: 25.32934 },
  },
  {
    id: 'kadena',
    name: 'Kadena',
    kind: 'food',
    town: 'chora',
    blurb:
      'A hundred metres from the water. Mykonian sausage, kopanisti and louza. Order boldly.',
    price: '€€',
    coords: { lat: 37.44716, lng: 25.32719 },
    tags: ['Order kopanisti'],
  },
  {
    id: 'kastros',
    name: "Kastro's",
    kind: 'cafe',
    town: 'chora',
    blurb:
      'The Little Venice balcony bar, two mins from the pier.',
    coords: { lat: 37.447, lng: 25.32567 },
  },
];

/** Where the tender lands - she doesn't get to choose which. */
export const MYKONOS_PINS = [
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
    coords: { lat: 37.44586, lng: 25.32643 },
  },
  {
    name: 'The windmills',
    note: '5 min, slightly uphill',
    coords: { lat: 37.4445, lng: 25.32554 },
  },
];
