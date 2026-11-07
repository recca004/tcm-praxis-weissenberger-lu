# Astro Migration — TCM Praxis Weissenberger-Lu
Branch: `feature/astro-static-migration` · 7 Nov 2026

## What changed
Vite multi-page (27 repeated HTML files) → Astro static site with shared components.

- `src/pages/[locale]/[...slug].astro` — one dynamic route renders all 27 pages.
- `src/content/{de,en,zh}/{pageId}.html` — each page's `<main>` content, verbatim
  (all copy, `[CONFIRM]` badges, `REVIEW-MIN-TC` markers preserved).
- `src/data/routes.js` — single route map (9 page ids × 3 locales) + nav/chrome strings.
- `src/data/meta.json` — per-page titles/descriptions extracted from old files.
- Components: `BaseLayout`, `Header`, `MobileMenu`, `Footer`, `LanguageSwitcher`.
- `src/pages/index.astro` — root redirect to `/de/`; `404.astro` added.
- Old `assets/` copied to `public/assets/` (all `/assets/*` URLs unchanged).

## JS migration
- `main.js`, `booking-demo.js`, `animations.js` → `src/scripts/`, bundled by Astro
  via one `<script>` in BaseLayout (code-split, loaded on every page).
- Lucide: CDN → npm `lucide` package; `createIcons({icons})` shim preserves
  `window.lucide.createIcons()` calls in main.js/booking-demo.js.
- GSAP + ScrollTrigger: CDN → npm `gsap` package, exposed on `window` so the
  existing animation contract (visible-by-default + failsafe) is unchanged.
- `i18n` config: de default, prefixes on all locales, `/zh/` → `lang="zh-Hant"`.

## Commands
`npm run dev` (port 3000) · `npm run build` → `dist/` (29 pages) · `npm run preview`.

## Editing content
- Page copy: edit `src/content/{locale}/{pageId}.html` — one file per page.
- Header/footer/nav: edit components once — applies to all 27 pages.
- Routes/labels: `src/data/routes.js`. Titles/descriptions: `src/data/meta.json`.

## Known limitations / follow-ups
- No sitemap.xml yet (add `@astrojs/sitemap` when the public URL is confirmed).
- Icons render via client-side `createIcons` (matches old behavior). A future pass
  could inline SVGs at build time for zero-JS icon rendering.
- Old `assets/` HTML source pages remain in the repo for reference; `vite.config.ts`
  is now unused but kept until the migration is fully approved.
- `npm run lint` mapped to `astro check` (needs `@astrojs/check` + typescript to run).
- Old site files (de/, en/, zh/ HTML dirs) are untouched — remove them only after
  the Astro output is fully reviewed and approved.
