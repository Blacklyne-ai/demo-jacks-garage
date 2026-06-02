// ───────────────────────────────────────────────────────────────────────────
// Jack's Garage — "In the Press". 6 motoring-magazine features (all 2020).
// Write-ups are verbatim from the source /promotions/<slug> pages. The single
// source typo "Volkswagon" is corrected to "Volkswagen" (see JUDGEMENT_CALLS.md).
// ───────────────────────────────────────────────────────────────────────────

export interface PressFeature {
  slug: string;
  magazine: string;
  edition: string;
  topic: string;        // short chip
  cover: string;
  excerpt: string;      // verbatim write-up
  pages: number;        // scanned clipping count on the source sub-page
}

export const press: PressFeature[] = [
  {
    slug: 'hayburner-magazine',
    magazine: 'Hayburner Magazine',
    edition: 'Spring 2020',
    topic: 'The e-Käfer',
    cover: '/images/press/hayburner.png',
    excerpt:
      "Is converting classic VWs to electric the future? Jack's Garage is the company that has exclusively taken on the job of working alongside eClassics and the all-new Volkswagen improved classic Beetle conversion, the e-Käfer.",
    pages: 5,
  },
  {
    slug: 'classic-sports-car-magazine',
    magazine: 'Classic & Sports Car Magazine',
    edition: 'April 2020',
    topic: 'Adapting to thrive',
    cover: '/images/press/classic-sports-car.png',
    excerpt:
      "A feature article on Jack's Garage in London explaining how our ability to adapt to the changing market is helping us thrive.",
    pages: 3,
  },
  {
    slug: 'volksworld-magazine',
    magazine: 'Volksworld Magazine',
    edition: 'March 2020',
    topic: "Joseph's EV journey",
    cover: '/images/press/volksworld.png',
    excerpt:
      "A feature article detailing Joseph's journey to becoming one of the UK's leading experts in Volkswagen conversions to electric, following Jack's Garage's partnership with eClassics in Germany.",
    pages: 8,
  },
  {
    slug: 'volkswagen-camper-commercial-magazine',
    magazine: 'Volkswagen Camper & Commercial Magazine',
    edition: 'February 2020',
    topic: 'Onwards to the e-future',
    cover: '/images/press/vw-camper-commercial.png',
    excerpt:
      "Onwards to the e-Future. Whenever the topic of electric vehicles as the normal mode of transport is raised, there is always a fair amount of scepticism, even doubt as to whether this will ever be a reality.",
    pages: 4,
  },
  {
    slug: 'car-accessory-trader-magazine',
    magazine: 'Car & Accessory Trader Magazine',
    edition: 'January 2020',
    topic: 'Reinventing an icon',
    cover: '/images/press/car-accessory-trader.png',
    excerpt:
      "How one London Volkswagen specialist (Jack's Garage) overcame adversity with a plan to reinvent a motoring icon.",
    pages: 4,
  },
  {
    slug: 'autocar-magazine',
    magazine: 'Autocar Magazine',
    edition: 'January 2020',
    topic: 'Back from the brink',
    cover: '/images/press/autocar.png',
    excerpt:
      "A feature article charting Jack's Garage's close proximity to the Grenfell Tower tragedy, the effect it had on the local community and the business, and how we came back from the brink of closure.",
    pages: 3,
  },
];

export const getPress = (slug: string) => press.find((p) => p.slug === slug);
