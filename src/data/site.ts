// ───────────────────────────────────────────────────────────────────────────
// Jack's Garage — single source of truth.
// All NAP, hours, copy fragments preserved verbatim from jacksgarage.co.uk.
// Per Blacklyne policy the 8 source-site testimonials are NOT migrated (Google
// Reviews only). See JUDGEMENT_CALLS.md for every content decision.
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Jack's Garage",
  short: "Jack's Garage",
  tagline: 'The VW specialists',          // verbatim from the logo lockup
  legal: "Jack's Garage",
  established: 1995,
  yearsBadge: '30+',                       // 1995 → 2026
  domain: 'demo-jacks-garage.pages.dev',
  url: 'https://demo-jacks-garage.pages.dev',
  copyrightYear: 2026,                     // matches source-site footer "© Jack's Garage - 2026"

  // Single landline — no mobile/WhatsApp number is published (classic workshop
  // prefers phone calls). A WhatsApp deeplink on a landline would be misleading.
  phone: { display: '020 7243 8926', tel: '+442072438926', href: 'tel:02072438926' },

  // No public email address exists on the source site — contact is by phone or
  // the on-site enquiry forms. See JUDGEMENT_CALLS.md.
  email: null as string | null,

  facebook: 'https://www.facebook.com/JacksGarageW10',

  address: {
    line1: '20/22 Kingsdown Close',
    area: 'Ladbroke Grove',
    city: 'London',
    region: 'London',
    postcode: 'W10 6SW',
    country: 'United Kingdom',
    full: "20/22 Kingsdown Close, London W10 6SW",
  },

  // W10 6SW (Kingsdown Close, off Ladbroke Grove). Approximate — map uses the
  // address string so the pin is exact regardless.
  geo: { lat: 51.5219, lng: -0.2147 },

  // Day index matches JS getDay(): 0=Sun … 6=Sat. Times 24h "HH:MM".
  // Verbatim from source: Mon–Fri 08:00–18:00, Sat & Sun closed.
  hours: [
    { day: 'Sunday', dow: 0, open: '', close: '', closed: true },
    { day: 'Monday', dow: 1, open: '08:00', close: '18:00', closed: false },
    { day: 'Tuesday', dow: 2, open: '08:00', close: '18:00', closed: false },
    { day: 'Wednesday', dow: 3, open: '08:00', close: '18:00', closed: false },
    { day: 'Thursday', dow: 4, open: '08:00', close: '18:00', closed: false },
    { day: 'Friday', dow: 5, open: '08:00', close: '18:00', closed: false },
    { day: 'Saturday', dow: 6, open: '', close: '', closed: true },
  ],

  // External UK Government MOT/vehicle enquiry utility (verbatim link).
  motCheckUrl: 'https://vehicleenquiry.service.gov.uk/',

  // Three dedicated enquiry routes (verbatim from source site).
  enquiries: {
    ev: '/electric-vehicle-conversion-enquiry',
    bodywork: '/bodywork-enquiry',
    service: '/service-enquiry',
  },

  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/JacksGarageW10', icon: 'facebook' },
  ],
};

// ── Primary navigation (mega-menus on Services + VW Servicing) ───────────────
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  { label: 'Services', href: '/services', mega: 'services' as const },
  { label: 'VW Servicing', href: '/car-service-prices/vw', mega: 'models' as const },
  { label: 'EV Conversions', href: '/services/electric-vehicle-conversions' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Press', href: '/promotions' },
  { label: 'Contact', href: '/contact-us' },
];

// ── Trust badges (hero strip + footer) ───────────────────────────────────────
export const trustBadges = [
  { label: 'Family Business Since 1995', icon: 'HeartHandshake' },
  { label: '30+ Years in Ladbroke Grove W10', icon: 'MapPin' },
  { label: 'Classic VW Specialists', icon: 'Car' },
  { label: 'Featured in 6 Magazines', icon: 'Award' },
  { label: 'EV Conversion Pioneers', icon: 'Zap' },
  { label: 'eClassics UK Distributor', icon: 'BadgeCheck' },
];

// ── Count-up stats ───────────────────────────────────────────────────────────
export const stats = [
  { label: 'Years of dedicated VW expertise', to: 30, suffix: '+', icon: 'CalendarClock' },
  { label: 'VW models serviced, classic to electric', to: 23, suffix: '', icon: 'Car' },
  { label: 'Motoring-press features', to: 6, suffix: '', icon: 'Award' },
  { label: 'A family-run workshop', text: 'Since 1995', icon: 'HeartHandshake' },
];

// ── Partners / trade links (verbatim from /links) ────────────────────────────
export const partners = [
  { name: 'eClassics', href: 'http://www.e-classics.eu/en/', note: 'EV conversion kit partner · Stuttgart' },
  { name: 'Heritage Parts Centre', href: 'https://www.heritagepartscentre.com/uk/', note: 'Classic VW parts' },
  { name: 'Just Kampers', href: 'https://www.justkampers.com/', note: 'Camper & bus parts' },
  { name: 'Cool Air VW', href: 'https://www.coolairvw.co.uk/', note: 'Air-cooled specialists' },
  { name: 'VeeWee', href: 'https://www.gsfcarparts.com/veewee', note: 'VW parts' },
  { name: 'VW Shows Europe', href: 'https://www.vwshows.com/', note: 'The latest VW shows in Europe' },
];

// ── External press / editorial coverage (real article URLs from /about-us) ───
export const externalPress = [
  { source: 'The Times', title: "Disaster doesn't have to mean the end of the road", href: 'https://www.thetimes.co.uk/article/disaster-doesn-t-have-to-mean-the-end-of-the-road-rwkrt7pb8' },
  { source: 'Sky News', title: 'Grenfell garage saved from closure by electric car deal', href: 'https://news.sky.com/story/grenfell-garage-saved-from-closure-by-electric-car-deal-11877559' },
  { source: 'Autocar', title: 'Grenfell garage to electrify classic Volkswagens', href: 'https://www.autocar.co.uk/car-news/industry/grenfell-garage-electrify-classic-volkswagens' },
  { source: 'Autocar', title: "Grenfell garage electrifying VW's motoring icon", href: 'https://www.autocar.co.uk/car-news/features/grenfell-garage-electrifying-vws-motoring-icon' },
  { source: 'CAT Magazine', title: 'Inside the VW specialist with an electric future', href: 'https://www.catmag.co.uk/inside-the-vw-specialist-with-an-electric-future' },
];

// ── Google Reviews (Place Details API) ───────────────────────────────────────
// Policy: Google Reviews ONLY. No Place Details API key was available at build
// time, so no reviews are rendered — the section shows the approved placeholder.
// The 8 excellent source-site testimonials were deliberately NOT migrated.
export const googleReviews: { author: string; rating: number; text: string; date?: string }[] = [];
export const googleRating = { value: 0, count: 0, profileUrl: '' };
export const reviewsPlaceholderNote =
  '30+ years of customer trust - real Google Reviews to be displayed via Place Details API integration.';

// ── Keyless Google Maps (no API key needed) ──────────────────────────────────
export const mapEmbed =
  'https://www.google.com/maps?q=' +
  encodeURIComponent("Jack's Garage, 20/22 Kingsdown Close, London W10 6SW") +
  '&z=15&output=embed';
export const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent("Jack's Garage, 20/22 Kingsdown Close, London W10 6SW");

// ── SEO ──────────────────────────────────────────────────────────────────────
export const seoKeywords = [
  'classic vw specialist london', 'vw beetle service london', 'vw electric conversion uk',
  'vw bodywork ladbroke grove', 'vw mot london w10', 'karmann ghia repairs london',
  'vw t1 t2 t3 t4 service', 'vw bus repair london', 'classic vw restoration london',
  'vw transporter service london', 'vw id 3 id 4 id 5 service', 'vw splitscreen specialist',
  'vw camper van mot', 'electric vehicle conversion london', 'vw golf service ladbroke grove',
  'vw scirocco repairs uk', 'classic vw mechanical specialist',
].join(', ');

// ── Quick-action cards (verbatim from homepage) ──────────────────────────────
export const quickActions = [
  {
    title: 'Check MOT',
    text: "Check if you've got a valid MOT, it takes no time at all...",
    href: site.motCheckUrl, cta: 'Check MOT', icon: 'ShieldCheck', external: true,
  },
  {
    title: 'EV Conversion Enquiry',
    text: "Find out more about our Electric Vehicle Conversions at Jack's Garage.",
    href: site.enquiries.ev, cta: 'Enquire Now', icon: 'Zap', external: false,
  },
  {
    title: 'Bodywork Enquiry',
    text: "Enquire about Bodywork Repairs at Jack's Garage.",
    href: site.enquiries.bodywork, cta: 'Enquire Now', icon: 'Hammer', external: false,
  },
  {
    title: 'Service Enquiry',
    text: "Enquire about your vehicle service with Jack's Garage.",
    href: site.enquiries.service, cta: 'Enquire Now', icon: 'Wrench', external: false,
  },
];
