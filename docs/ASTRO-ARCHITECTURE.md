# Astro Architecture

Single-source Astro static site. 29 output pages: 27 localized pages + `/` redirect + `404.html`.

## Folder layout

```
src/
├── pages/
│   ├── index.astro              # / → /de/ redirect (meta refresh + JS + link)
│   ├── 404.astro                # custom 404
│   └── [locale]/[...slug].astro # getStaticPaths → all 27 routes
├── layouts/
│   └── BaseLayout.astro         # <head> meta/hreflang/canonical, Header/MobileMenu/Footer,
│                               #   bundled CSS imports, bundled JS (GSAP + main/booking/animations)
├── components/
│   ├── Icon.astro               # name → @lucide/astro map (build-time SVG)
│   ├── Rev.astro                # renders <!-- REVIEW-MIN-TC --> markers
│   ├── BackLink.astro           # "back to home" link on subpages
│   ├── SectionHeader.astro      # eyebrow + h1/h2 + lead
│   ├── Header.astro, Footer.astro, MobileMenu.astro, LanguageSwitcher.astro
│   ├── sections/                # reusable page sections
│   │   ├── Hero.astro, TrustStrip.astro, CTABanner.astro
│   │   ├── TreatmentGrid.astro  # preview (home) & page variants
│   │   ├── PractitionerSection.astro  # home & about variants
│   │   ├── StepsTimeline.astro, PriceTable.astro, InsuranceCard.astro, InfoCard.astro
│   │   ├── FaqAccordion.astro, BookingWidget.astro (home & page variants)
│   │   ├── ContactDetails.astro, TransitCard.astro, ContactForm.astro
│   │   └── LegalPage.astro      # privacy + imprint shell
│   └── pages/
│       ├── HomePage.astro       # homepage section composition
│       └── SubPage.astro        # all 8 subpage types via pageId switch
├── data/                        # ALL website copy, keyed by locale
│   ├── site.js                  # PRACTICE info (phone/address/email/maps)
│   ├── routes.js                # ROUTES, NAV, I18N, LANG_TAG, drawerLinks
│   ├── meta.json                # <title> + meta description per page/locale
│   ├── home.js                  # hero, trust items, back-link label
│   ├── treatments.js            # 6 treatments + treatments-page copy
│   ├── practitioner.js          # portrait, credentials, about copy, pillars
│   ├── firstVisit.js            # home preview + page steps/checklists
│   ├── prices.js                # price tables + insurance/payment cards
│   ├── faq.js                   # FAQ items (de: 6, en/zh: 5)
│   ├── booking.js               # booking demo copy + demo calendar data
│   ├── contact.js               # contact + transit + form copy
│   ├── cta.js                   # closing CTA per page
│   └── legal.js                 # privacy & imprint drafts
├── scripts/                     # browser JS, bundled by Astro
│   ├── main.js                  # sticky header, mobile drawer, accordion, forms
│   ├── booking-demo.js          # 4-step demo widget state machine
│   └── animations.js            # GSAP/ScrollTrigger reveals + reduced-motion guard
├── styles/                      # bundled CSS (was public/assets/css)
│   ├── variables.css            # design tokens
│   ├── base.css, layout.css, components.css, responsive.css
public/
└── assets/images/               # favicon + photos (only files served to visitors)
tests/e2e/site.spec.js           # Playwright suite (npm run test:e2e)
playwright.config.js
```

## Content model

- One stable ID per content item; locale maps `{ de, en, zh }` on each field.
- `[CONFIRM]` badges mark client-approval-pending facts — kept verbatim.
- `rev: { zh: true }` (or `rev: { zh: ['lead'] }` per-key) flags zh strings that carried `REVIEW-MIN-TC` markers; `Rev.astro` emits the comment in output so reviewers can grep built HTML.
- HTML-bearing strings (`*Html`) render via `set:html`; everything else is escaped text.

## Routing & SEO

`ROUTES` in `data/routes.js` defines all 27 paths. `BaseLayout` emits `lang` attr (`de-CH`, `en`, `zh-Hant`), canonical URL, per-locale `hreflang` + `x-default`, sitemap link. `@astrojs/sitemap` generates `sitemap-index.xml`.

## JS strategy

- No framework, no runtime icon injection — icons are static SVG.
- GSAP injected as `window.gsap`/`window.ScrollTrigger` in `BaseLayout`'s bundled script; `animations.js` is enhancement-only (content visible without JS).
- `booking-demo.js` seeds its state from server-rendered markup (locale-safe).

## Notes

- Fonts load via Google Fonts `@import` in `base.css` (graceful fallbacks, no layout dependence).
- `dist/`, `.astro/`, `test-results/`, `.playwright-mcp/` are gitignored.
