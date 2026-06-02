# Jack's Garage - website

A premium 2027-grade redesign of [jacksgarage.co.uk](https://jacksgarage.co.uk) for **Jack's Garage** -
London's Classic VW specialists, a family business in Ladbroke Grove, W10 since 1995, offering
mechanical & bodywork repairs, servicing across 23 VW models, and pioneering **Electric Vehicle
Conversions** for classic VWs (UK distributor of eClassics kits).

The design is entirely new; **all content and business information is preserved verbatim** from the
existing site. See [`JUDGEMENT_CALLS.md`](./JUDGEMENT_CALLS.md) for every content decision and
[`QA_REPORT.md`](./QA_REPORT.md) for the QA results.

## Tech stack

- **Astro 5** - static output (no SSR, no adapter). Builds to plain HTML in `/dist`.
- **Tailwind CSS v3.4** - warm Classic-VW heritage design system (black + classic VW red + vintage gold + cream).
- **@lucide/astro** - icons (brand icons such as Facebook are inline SVG).
- **@fontsource** - Inter, JetBrains Mono, DM Serif Display.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static HTML to /dist
npm run preview
```

## Deploy - Cloudflare Pages

> Use the **Pages** tab, NOT Workers.

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`

Output is plain HTML (no `_worker.js`), so it serves directly from Cloudflare Pages.

## Project structure

```
src/
  data/        site.ts · services.ts (26) · models.ts (23) · press.ts (6)
  components/  Nav (mega-menus) · Footer · EnquiryForm · ServiceCard · ...
  layouts/     Layout.astro (SEO + Schema.org AutoRepair)
  pages/       69 routes incl. dynamic /services/[slug], /car-service-prices/vw/[model], /promotions/[slug]
public/images/ real logo, favicon, workshop + EV-conversion photos, magazine covers
```

## Operator action items before launch

See [`JUDGEMENT_CALLS.md`](./JUDGEMENT_CALLS.md): wire up the enquiry forms to a mailbox/form service,
connect real Google Reviews via the Place Details API, and confirm the full team. No public email or
WhatsApp number exists on the source site, so contact is phone + Facebook + forms.
