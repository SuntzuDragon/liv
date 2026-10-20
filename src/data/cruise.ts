/**
 * Odyssey of the Seas — 7 Night Greek Isles & Italy, round trip Civitavecchia.
 * Port sequence and the "Tendered" labels are Royal Caribbean's own; the date
 * assignment is corroborated by five independent published schedules plus two
 * port-arrival databases. Times are local port time (Greece UTC+3 until 25 Oct,
 * Italy UTC+2).
 */

export interface Day {
  /** ISO date, local. */
  date: string;
  label: string;
  port: string;
  country?: string;
  arrive?: string;
  depart?: string;
  tender?: boolean;
  /** Link to our page for this stop, where one exists. */
  href?: string;
  note?: string;
}

export const SHIP = 'Odyssey of the Seas';
export const SAILING = '7 nights · Greek Isles & Italy';

export const ITINERARY: Day[] = [
  {
    date: '2026-10-18',
    label: 'Day 1',
    port: 'Rome (Civitavecchia)',
    country: 'Italy',
    depart: '16:00',
    note: 'Embarkation',
  },
  {
    date: '2026-10-19',
    label: 'Day 2',
    port: 'Messina, Sicily',
    country: 'Italy',
    arrive: '10:00',
    depart: '21:00',
  },
  { date: '2026-10-20', label: 'Day 3', port: 'At sea' },
  {
    date: '2026-10-21',
    label: 'Day 4',
    port: 'Santorini',
    country: 'Greece',
    arrive: '07:00',
    depart: '22:00',
    tender: true,
    href: '/santorini',
    note: '15 hours ashore — long enough for the sunset',
  },
  {
    date: '2026-10-22',
    label: 'Day 5',
    port: 'Mykonos',
    country: 'Greece',
    arrive: '07:00',
    depart: '17:00',
    tender: true,
    href: '/mykonos',
    note: 'Tenders land in the old port, already in town',
  },
  { date: '2026-10-23', label: 'Day 6', port: 'At sea' },
  {
    date: '2026-10-24',
    label: 'Day 7',
    port: 'Naples / Capri',
    country: 'Italy',
    arrive: '07:00',
    depart: '18:00',
  },
  {
    date: '2026-10-25',
    label: 'Day 8',
    port: 'Rome (Civitavecchia)',
    country: 'Italy',
    arrive: '05:00',
    note: 'Disembarkation',
  },
];
