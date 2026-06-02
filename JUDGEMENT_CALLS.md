# Jack's Garage - Judgement Calls & Operator Review Items

A 2027-grade redesign of **jacksgarage.co.uk** (previously on the *Garage Services Online* WordPress template). Design is entirely new; **content and business information were preserved exactly** from the existing site. This document records every decision a human should sanity-check before launch.

---

## 1. Customer reviews - Google Reviews ONLY (policy)

Per Blacklyne policy, **only Google Reviews from the Place Details API may be displayed**. No Place Details API key was available at build time, so **no reviews are rendered** - the Reviews page and homepage show the approved placeholder:

> "30+ years of customer trust - real Google Reviews to be displayed via Place Details API integration."

The existing site has **8 excellent, authentic testimonials** on its homepage (and a larger `/reviews/` archive). These were **deliberately NOT migrated**, exactly as policy requires. For the record, the excluded quotes were from:

**Lauren Allpress, Sara Thomas, Mina Khan, Nikki Dee, Dondee Barrick, Lisa Byrne, Jo Negrini, Giuliana TB Sinclair.**

**Operator action:** verify the Place Details API returns sufficient Google Reviews for *20/22 Kingsdown Close, London W10 6SW*, OR encourage existing reviewers to also post on Google before launch. Wire real reviews into `src/data/site.ts` → `googleReviews` / `googleRating`; the UI switches automatically from placeholder to live cards.

## 2. Ownership & team - "Joseph"

The About story is a first-person account by the owner. **Volksworld (March 2020)** explicitly names him - *"Joseph's journey to becoming one of the UK's leading experts in VW conversions to electric"* - and the homepage review from Lauren Allpress thanks *"Joseph and the team"*. We therefore present the founder as **Joseph (Owner, bought the business June 2007)** and **Vaidas (General Manager, "the Midas touch")**, both named in the source content.

**Operator action:** confirm Joseph's surname/preferred title and provide the **full workshop team** (names, roles, photos) so the About page team section can be expanded. We flagged on-page that "the full workshop team brings decades of combined VW experience."

## 3. Contact channels - phone-led, no email, no WhatsApp

- The source site publishes **no email address** (contact is by phone or its on-site form). We did **not invent** one. Primary contact is **phone (020 7243 8926)** + **Facebook** + the enquiry forms.
- The only number is a **London landline**, which cannot receive WhatsApp - so we deliberately **omitted any WhatsApp button** (a wa.me link on a landline would mislead). This matches the brief's note that a classic workshop "may prefer phone calls only."

**Operator action:** if the business wants email or WhatsApp contact, provide a real address / mobile and we'll add them.

## 4. Enquiry & contact forms - no backend (demo)

The brief requires **3 dedicated enquiry forms** (EV Conversion, Bodywork, Service) plus a general Contact form. They are all built with full, validated fields and a GDPR-consent checkbox. **This is a static site with no backend**, so on submit each form shows an honest confirmation that routes the visitor to **call** or **message on Facebook** - it does **not** pretend to send an email.

**Operator action:** before launch, wire the forms to a mailbox or form service (e.g. Formspree / Cloudflare Pages Functions / a `mailto:` once an email exists). Hook point: the submit handler inside `src/components/EnquiryForm.astro`.

## 5. EV conversion budget bands

The brief suggested budget bands of £10k-£20k / £20k-£40k / £40k+. The **actual conversion pricing** documented on the source EV page is far higher (1st-gen from ~£30k, 3rd-gen under £50k, 2nd-gen £100k+). To stay truthful, the EV enquiry form uses realistic bands: **Under £50k (3rd-gen) / £50k-£100k / £100k+ / Not sure**.

## 6. EV model service tiers - source template quirk fixed

The source `/car-service-prices/vw/` pages reuse a **single petrol service template on every model**, including the electric ID.3/ID.4/ID.5 and e-Golf (listing spark plugs, fuel filters, rocker-cover gaskets - none of which apply to an EV). We **corrected this**: electric models now show **EV-appropriate service tiers** (HV battery health, charging system, software scan, etc.). Petrol/classic models keep the verbatim original tiers. Golf GTE (plug-in hybrid) keeps the petrol tiers as it has a combustion engine.

## 7. Source typo corrected

The Hayburner write-up contains the typo **"Volkswagon"**. Corrected to **"Volkswagen"** in `src/data/press.ts`. No other wording changed.

## 8. Brand palette - logo authority

The real logo is **monochrome black** distressed script ("Jack's Garage / The VW specialists") with a VW-roundel-headed mechanic mascot; the favicon sits on a **warm cream disc** - so **black + warm cream come straight from the brand**. The **accent is the existing site's CI red**, sampled as **#C80000** from the live site and refined here to **#C8101C**, paired with **vintage gold `#C9A961`** as a heritage trim accent. Important: we kept only the brand's *red colour* - **not** the flat Garage Services Online template styling (boxy red bars and square buttons). Light mood only; no dark/light toggle. The **original logo and favicon are used unchanged** (`/logo.png`, `/images/favicon-270.png`).

## 9. "Garage Services Online" attribution removed

The source footer credits *Garage Services Online* (the WordPress theme provider - **not** the business). This is correctly **omitted** from the new build.

## 10. Hours, NAP, copyright - preserved verbatim

- **Mon-Fri 08:00-18:00; Sat & Sun closed** (the live opening-status pill + hours table use this 5-day pattern).
- **20/22 Kingsdown Close, London W10 6SW** · **020 7243 8926** · **facebook.com/JacksGarageW10**.
- Footer copyright **© 2026 Jack's Garage** (matches the source).
- Map uses a **keyless** Google Maps embed of the address (no API key needed); the source `goo.gl` short link is replaced with a stable Maps search query.

## 11. VW model grouping

23 models are grouped **Classic / Modern / Electric & Hybrid** per the brief. Note the **T4 (1990-2003)** is placed in the "Classic VW range" group per the brief's own grouping, although it is a modern water-cooled van. The source had **no model photos**; we attached **real workshop photos** only where genuinely that model (Beetle → red Beetle photo; T2 → Bay-window bus photo) and use a tasteful **gradient + icon** card for the rest rather than risk mislabelled stock.

## 12. Fun Stuff content

The gallery uses the **real workshop photos** scraped from the source. The original page also embeds several videos; only the **#BigReviewTV review (YouTube `IqyW021Z9Nw`)** had a public URL, so it is embedded. The other video titles ("A 1957 Porsche", "Another day at Jack's Garage", "Caroline in Daisy!", "Classic Car Club London", "Berty the Gin Genie van") are listed as captions - **operator can supply the remaining video URLs** to embed them.

## 13. Legal pages

The source only provided **PDFs** for Privacy and Cookie policies. We created **native, UK-GDPR-compliant HTML pages** (`/privacy-policy`, `/cookie-policy`) reflecting how *this* site actually works (enquiry-form data + a consent cookie + an optional Google Maps embed). A UK GDPR cookie-consent banner is included. **Operator/legal should review** the wording before launch.

---

*Build: Astro 5 static + Tailwind v3.4 + @lucide/astro. No `@astrojs/cloudflare` adapter, no SSR - output is plain HTML in `/dist` for Cloudflare **Pages**.*
