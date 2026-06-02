// ───────────────────────────────────────────────────────────────────────────
// Jack's Garage — 23 VW models serviced, grouped by era.
// Intro copy + service tiers + warranty block are preserved verbatim from the
// source /car-service-prices/vw/ pages. The electric models use corrected
// EV-appropriate service tiers (the source site reused the petrol template on
// EVs — a quirk we fix here). All pricing is POA, exactly as published.
// ───────────────────────────────────────────────────────────────────────────

export const HERO_STRAPLINE =
  "Jack's Garage is the leading independent VW servicing specialist in London";

// Petrol / classic service tiers (verbatim from source).
export const PETROL_TIERS = [
  {
    name: 'Oil Service',
    includes: ['Oil and oil filter change', 'Oil and sump gasket on older VWs'],
  },
  {
    name: 'Engine Service',
    includes: [
      'All service items included in the Oil Service',
      'Replace spark plugs (if needed)',
      'Replace fuel filter(s)',
      'Replace air filter (if needed)',
      'Replace pollen filter (if needed)',
      'Rocker-cover gaskets',
      'Check exhaust',
      'Check engine charging',
      'Check and adjust tyre pressures',
    ],
  },
  {
    name: 'Full Service',
    includes: [
      'All service items included in the Engine Service',
      'Check brakes, steering and suspension',
      'Check copper slip battery terminals, starter motor terminals and earth strap',
      'Check cooling system (if relevant)',
    ],
  },
];

// EV service tiers — corrected for electric drivetrains (no spark plugs / fuel
// filters / rocker gaskets, which do not apply to an EV).
export const EV_TIERS = [
  {
    name: 'EV Health Check',
    includes: ['High-voltage battery state-of-health check', 'Charging system inspection', 'Pollen / cabin filter (if needed)', 'Check and adjust tyre pressures'],
  },
  {
    name: 'EV Service',
    includes: [
      'All items in the EV Health Check',
      'Brake fluid condition and level',
      'Battery and inverter coolant check (if relevant)',
      'Software and fault-code scan',
      '12V auxiliary battery check',
    ],
  },
  {
    name: 'EV Full Service',
    includes: [
      'All items in the EV Service',
      'Check brakes, steering and suspension',
      'Underbody and high-voltage cable inspection',
      'Air-conditioning / heat-pump check',
    ],
  },
];

export const WARRANTY_BLOCK = {
  heading: "At Jack's Garage, Your VW Warranty is Safe in Our Hands",
  text:
    "Don't let anyone tell you that you have to take your VW to the main dealer to have it serviced if you want your warranty to remain valid - it's just not true. In fact, since 2003, independent garages such as Jack's Garage have been authorised to carry out manufacturer servicing, and as long as we follow the VW servicing schedule and use genuine replacement parts and lubricants (which we do at Jack's Garage), then your warranty is safe.",
};

export interface VwModel {
  slug: string;
  name: string;          // "VW Beetle"
  short: string;         // "Beetle"
  suffix: 'All' | 'Van' | 'Electric' | 'Hybrid';
  era: 'Classic' | 'Modern' | 'Electric & Hybrid';
  icon: string;          // Lucide name
  blurb: string;         // grid-card one-liner
  image?: string;        // real photo where we genuinely have it
  isElectric?: boolean;  // use EV tiers
  isHybrid?: boolean;
}

export const eras: { key: VwModel['era']; label: string; context: string }[] = [
  {
    key: 'Classic',
    label: 'Classic VW',
    context: 'Air-cooled icons and early water-cooled vans - the cars that built our reputation. Beetles, Buses, Type 3s and Karmann Ghias are the emotional heart of Jack\'s Garage.',
  },
  {
    key: 'Modern',
    label: 'Modern VW',
    context: 'From the Golf to the T-Roc, we keep every modern Volkswagen serviced to schedule - protecting your warranty with genuine parts and dealer-level know-how.',
  },
  {
    key: 'Electric & Hybrid',
    label: 'Electric & Hybrid VW',
    context: 'The ID family, e-Golf and GTE represent VW\'s electric future - and as EV-conversion pioneers, we are fluent in high-voltage Volkswagens too.',
  },
];

export const models: VwModel[] = [
  // ── Classic ──
  { slug: 'vw-beetle-all', name: 'VW Beetle', short: 'Beetle', suffix: 'All', era: 'Classic', icon: 'Car', blurb: 'The people\'s car - the icon that started it all.', image: '/images/workshop/ws-01.jpg' },
  { slug: 'vw-karmann-ghia-all', name: 'VW Karmann Ghia', short: 'Karmann Ghia', suffix: 'All', era: 'Classic', icon: 'Car', blurb: 'Coachbuilt elegance on Beetle underpinnings.' },
  { slug: 'vw-t1-van', name: 'VW T1', short: 'T1', suffix: 'Van', era: 'Classic', icon: 'BusFront', blurb: 'The Splitscreen Microbus - air-cooled royalty.' },
  { slug: 'vw-t2-van', name: 'VW T2', short: 'T2', suffix: 'Van', era: 'Classic', icon: 'BusFront', blurb: 'The Bay window Bus - the spirit of endless summer.', image: '/images/workshop/ws-19.jpg' },
  { slug: 'vw-t3-van', name: 'VW T3', short: 'T3', suffix: 'Van', era: 'Classic', icon: 'BusFront', blurb: 'The T25 - last of the air-cooled vans.' },
  { slug: 'vw-t4-van', name: 'VW T4', short: 'T4', suffix: 'Van', era: 'Classic', icon: 'BusFront', blurb: 'The modern workhorse and camper base.' },
  { slug: 'vw-type-3-all', name: 'VW Type 3', short: 'Type 3', suffix: 'All', era: 'Classic', icon: 'Car', blurb: 'Fastback, Notchback and Squareback cool.' },
  { slug: 'vw-splitscreen-van', name: 'VW Splitscreen', short: 'Splitscreen', suffix: 'Van', era: 'Classic', icon: 'BusFront', blurb: 'The original split-window Transporter.' },
  // ── Modern ──
  { slug: 'vw-golf-all', name: 'VW Golf', short: 'Golf', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'Eight generations of the definitive hatchback.' },
  { slug: 'vw-jetta-all', name: 'VW Jetta', short: 'Jetta', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The Golf with a boot - understated and durable.' },
  { slug: 'vw-lupo-all', name: 'VW Lupo', short: 'Lupo', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The pocket-sized city VW.' },
  { slug: 'vw-polo-all', name: 'VW Polo', short: 'Polo', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The supermini that punches above its weight.' },
  { slug: 'vw-scirocco-all', name: 'VW Scirocco', short: 'Scirocco', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'VW\'s sharp-suited sports coupe.' },
  { slug: 'vw-sharan-all', name: 'VW Sharan', short: 'Sharan', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The seven-seat family hauler.' },
  { slug: 'vw-t-cross-all', name: 'VW T-Cross', short: 'T-Cross', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The compact urban crossover.' },
  { slug: 'vw-t-roc-all', name: 'VW T-Roc', short: 'T-Roc', suffix: 'All', era: 'Modern', icon: 'Car', blurb: 'The style-led compact SUV.' },
  { slug: 'vw-caddy-van', name: 'VW Caddy', short: 'Caddy', suffix: 'Van', era: 'Modern', icon: 'Truck', blurb: 'The car-derived van that does it all.' },
  { slug: 'vw-transporter-van', name: 'VW Transporter', short: 'Transporter', suffix: 'Van', era: 'Modern', icon: 'Truck', blurb: 'The T4, T5 and T6 - Britain\'s favourite van.' },
  // ── Electric & Hybrid ──
  { slug: 'vw-e-golf-electric', name: 'VW e-Golf', short: 'e-Golf', suffix: 'Electric', era: 'Electric & Hybrid', icon: 'Zap', blurb: 'The Golf, gone fully electric.', isElectric: true },
  { slug: 'vw-golf-gte-hybrid', name: 'VW Golf GTE', short: 'Golf GTE', suffix: 'Hybrid', era: 'Electric & Hybrid', icon: 'Zap', blurb: 'Plug-in hybrid hot-hatch.', isHybrid: true },
  { slug: 'vw-id-3-electric', name: 'VW ID.3', short: 'ID.3', suffix: 'Electric', era: 'Electric & Hybrid', icon: 'Zap', blurb: 'VW\'s born-electric hatchback.', isElectric: true },
  { slug: 'vw-id-4-electric', name: 'VW ID.4', short: 'ID.4', suffix: 'Electric', era: 'Electric & Hybrid', icon: 'Zap', blurb: 'The electric family SUV.', isElectric: true },
  { slug: 'vw-id-5-electric', name: 'VW ID.5', short: 'ID.5', suffix: 'Electric', era: 'Electric & Hybrid', icon: 'Zap', blurb: 'The ID.4\'s sleek SUV-coupe sibling.', isElectric: true },
];

// ── Intro paragraphs (verbatim template, personalised per model) ─────────────
export const modelIntro = (m: VwModel) => ({
  p1: `As VW specialists, Jack's Garage are proud to have been servicing all varieties of VW since we started trading in 1995. We've stacked up quite a lot of experience, skill and knowledge over that time and there really is no other place to bring your ${m.name} for servicing in London.`,
  p2: `If your ${m.short} is still in its warranty period, that's no problem because your warranty is safe when your vehicle is serviced at Jack's Garage, and if your VW is a little older, we can cater for that too. We have different levels of servicing available, and we can have a chat with you and come up with the best servicing option depending on your requirements and the service history and mileage of your car.`,
  cta: `Give one of our friendly team a call on 020 7243 8926 or contact us online for more information and to book a service for your ${m.name}.`,
});

export const displayName = (m: VwModel) => `${m.name} - ${m.suffix}`;
export const tiersFor = (m: VwModel) => (m.isElectric ? EV_TIERS : PETROL_TIERS);

// ── Helpers ──────────────────────────────────────────────────────────────────
export const getModel = (slug: string) => models.find((m) => m.slug === slug);
export const modelsByEra = eras.map((e) => ({ ...e, items: models.filter((m) => m.era === e.key) }));
