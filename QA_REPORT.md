# QA Report - Jack's Garage (demo-jacks-garage)

Premium 2027-grade redesign of **jacksgarage.co.uk**. Astro 5 static + Tailwind v3.4 + @lucide/astro. All 21 QA steps below were carried out.

## Build & output
- `npm run build` - **clean, 69 pages** built in ~1.6s, zero warnings/errors.
- `/dist` contains **plain HTML** (`index.html` per route). **No `_worker.js`**, no SSR - correct for Cloudflare **Pages**. `sitemap-index.xml` + `robots.txt` present.
- No console errors or warnings on any audited route (checked via live dev server).

## Pages (69 total)
| Group | Count | Notes |
|---|---|---|
| Core | 4 | Home, About Us, Contact, Reviews |
| Services overview + details | 1 + 25 | dynamic `/services/[slug]` (EV Conversions has its own featured page) |
| EV Conversions (featured) | 1 | process, 3 generations, benefits, portfolio, press |
| VW Servicing overview + models | 1 + 23 | dynamic `/car-service-prices/vw/[model]`, grouped by era |
| In the Press overview + features | 1 + 6 | dynamic `/promotions/[slug]` |
| Enquiry forms | 3 | EV Conversion, Bodywork, Service |
| Fun Stuff, Links | 2 | gallery + YouTube embed; partner links |
| Legal | 2 | Privacy Policy, Cookie Policy (native HTML, UK GDPR) |

## Content fidelity (verbatim from source)
- **25+ services** preserved (26 service pages incl. Mechanical Repairs, Steering, Suspension). Real body copy reproduced verbatim where it existed (EV Conversions, Classic VW Specialist, VW Bodywork, MOT); faithful expanded copy elsewhere.
- **23 VW models** preserved with dedicated pages, grouped Classic / Modern / Electric & Hybrid. Verbatim service-tier template + warranty block.
- **6 press features** (Hayburner Spring 2020, Classic & Sports Car April 2020, Volksworld March 2020, VW Camper & Commercial February 2020, Car & Accessory Trader January 2020, Autocar January 2020) with verbatim write-ups + real magazine covers.
- **3 enquiry forms** preserved + general Contact form. Live **opening-status** logic (Mon-Fri 8am-6pm, weekends closed). Address 20/22 Kingsdown Close, London W10 6SW. Phone `tel:02072438926`. Facebook link. Family-business-since-1995 heritage + the full owner story (AZIZA T2, Grant the Kiwi, Vaidas, Pugsley EV, eClassics, Grenfell).
- **YouTube hero film** (`IqyW021Z9Nw`) embedded via a lazy lightbox on the homepage and on Fun Stuff.

## Automated audits (live server, all routes)
- **Emojis: 0** across every page (regex scan of rendered HTML). Status indicators use styled CSS spans; stars/icons are Lucide; Facebook is inline SVG.
- **No "Garage Services Online"** attribution anywhere (theme provider correctly dropped).
- **No template leakage** (no VRS / Eastern Ave / Newbury references).
- **Phone present** on all routes; all routes return **HTTP 200**.
- **Em/en dashes:** removed from rendered content (hyphens only); only code comments retain them.
- **Responsive:** iframe overflow-probe at **375px and 768px** shows **no horizontal overflow** on any page (document scrollWidth == viewport width).
- **EV model service tiers corrected:** `/car-service-prices/vw/vw-id-3-electric` shows EV tiers (no "spark plugs"), fixing the source's petrol-template quirk.

## Design & brand
- Floating glass-morphism **pill nav** (80% width, backdrop-blur, scroll-shrink) with **dual mega-menus** (26 services by category, 23 models by era). Mobile hamburger overlay + sticky phone bar.
- Warm **Classic-VW heritage palette**: black + classic VW red `#C8101C` + vintage gold `#C9A961` + cream `#FAF8F2` (logo + favicon authority). **Light mood only, no dark/light toggle.**
- Fonts: Inter (display + body) + JetBrains Mono (stats/phone) + DM Serif Display italic for "Classic VW" heritage flourishes.
- Original **logo** + **favicon** used unchanged. Hover lifts, shimmer CTAs, scroll-reveal, `prefers-reduced-motion` honoured, keyboard-accessible mega-menus, skip-link, focus rings.
- Real imagery throughout (workshop photos, EV-conversion chassis, owner portrait, magazine covers) - zero stock placeholders.

## SEO & compliance
- Unique `<title>` + meta description per page; Schema.org **AutoRepair/LocalBusiness** JSON-LD; Open Graph + Twitter cards; `hreflang="en-GB"`; sitemap + robots.
- UK English spelling, £ GBP, UK phone format, DD/MM/YYYY date inputs.
- UK GDPR cookie-consent banner + native Privacy & Cookie policy pages.

## Reviews policy
- **Google Reviews only.** No Place Details API key at build time → approved placeholder shown. The 8 source-site testimonials were **not migrated** (see JUDGEMENT_CALLS.md §1).

See **JUDGEMENT_CALLS.md** for every content decision and the operator action items.
