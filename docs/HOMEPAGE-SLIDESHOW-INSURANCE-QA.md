# Homepage Slideshow, Trust & Insurance — QA — 8 Nov 2026

Branch: `design/homepage-slideshow-trust` (from `design/contact-page-map` @ 2696af0). Not pushed, not merged, not published.

## Files changed

- `src/components/sections/HeroSlideshow.astro` — new slideshow component (vanilla JS)
- `src/components/sections/HomepageTrust.astro` — new compact trust row
- `src/components/sections/InsuranceLogoCarousel.astro` — new marquee (approval-gated)
- `src/data/insurers.js` — insurer candidates + neutral insurance copy
- `src/data/home.js` — `HERO_SLIDES` (3 slides, per-slide crop + trilingual alt), `HOMEPAGE_TRUST`
- `src/components/sections/Hero.astro` — slideshow replaces single photo; approval badge removed per brief
- `src/components/pages/HomePage.astro` — trust row + insurance section insert
- `src/styles/components.css` — slideshow/trust/carousel styles
- `tests/e2e/hero-slideshow.spec.js` — new

## Slideshow

3 slides (orchids → treatment room → waiting area), 7s interval, 800ms crossfade, loops. Prev/next pills, 3 dots, pause/play toggle (aria-pressed), arrow-key nav, pauses when tab hidden, `prefers-reduced-motion` disables autoplay + transition (manual still works). Slide 1 `fetchpriority="high"`; slides 2–3 `loading="lazy"`. First slide visible without JS (`.is-active` rendered server-side). Badge removed; photo approval status stays in internal docs.

## Trust factors (approved facts only)

Personal care with Min · Nine treatment methods (as on business card) · Zürich-Seebach location + transit · Three consultation languages. Compact 4-col hairline-top row; hero fact block retained ([CONFIRM] markers preserved).

## Insurers

`src/data/insurers.js`: CSS, SWICA, Sanitas, Visana, KPT, Groupe Mutuel — all `approved: false`, `logo: null`. Official URLs listed for later linking. Carousel renders nothing publicly until Min confirms reimbursement + logo permission; neutral wording added under Prices section ("ob und in welchem Umfang…bitte mit Ihrer Versicherung klären") + link to Prices & Insurance.

**For Min's checklist:** per insurer — reimburses TCM under which supplementary plan? logo use permitted? — then set `approved: true` and drop logo file into `public/assets/insurers/`.

## Tests

`npm run check` 0 errors · `npm run build` 29 pages · `npm run test:e2e` **55/55** — 7 new slideshow/trust/insurance tests (controls, loop order, dots, pause, keyboard, autoplay ~7s, reduced-motion, no-JS, trilingual, trust facts, carousel gating). Screenshots: `slide-*` in test-results/premium-shots.

## Final commit

Final SHA: 6360b0a
