# TCM Praxis Weissenberger-Lu — Website

Trilingual (de / en / zh-Hant) static website for TCM Praxis Weissenberger-Lu, Zürich-Seebach. Built with **Astro** — the single active website source. The site previews the planned WordPress implementation (`WORDPRESS-IMPLEMENTATION.md`).

Live preview: <https://recca004.github.io/tcm-praxis-weissenberger-lu/> — deployed automatically from `main` via GitHub Pages (`.github/workflows/deploy.yml`; `scripts/pages-base.mjs` prefixes root-absolute URLs with the Pages base path after `astro build`).

## Quick start

```bash
npm ci            # install
npm run dev       # dev server on http://localhost:3000
npm run check     # astro check (types/templates)
npm run build     # static build → dist/
npm run preview   # serve dist/ on http://localhost:3000
npm run test:e2e  # Playwright suite (45 tests: routes, interactions, responsive)
```

## Everyday edits

All website copy lives in `src/data/` — edit text there, never in layout code. Each item uses one stable ID across the three locales (`de`, `en`, `zh`).

| Task | File |
|---|---|
| Homepage hero / trust strip | `src/data/home.js` |
| Add or edit treatments | `src/data/treatments.js` (`TREATMENTS`) |
| First-visit steps & checklists | `src/data/firstVisit.js` |
| Prices & insurance | `src/data/prices.js` |
| FAQ items | `src/data/faq.js` |
| Booking demo labels & slots | `src/data/booking.js` |
| Contact details & form labels | `src/data/contact.js`, `src/data/site.js` |
| Phone / address / email | `src/data/site.js` (`PRACTICE`) |
| Page titles & meta descriptions | `src/data/meta.json` |
| Navigation & translated routes | `src/data/routes.js` |
| Closing CTA banners | `src/data/cta.js` |
| Privacy / imprint drafts | `src/data/legal.js` |

## Replace images

Drop a new file into `public/assets/images/` and update its path/alt text in the matching data file (e.g. `DIAGNOSTIC.image` in `src/data/treatments.js`). Keep JPG/WebP under ~300 KB.

## Icons

All UI icons are **Lucide**, rendered at build time via `@lucide/astro` — no runtime icon script. In components use `<Icon name="map-pin" size={18} />` (`src/components/Icon.astro` maps names to imports; extend `MAP` for new icons). Brand imagery stays as regular `<img>`.

## Animations

GSAP + ScrollTrigger are bundled via `src/layouts/BaseLayout.astro`. Scroll reveals live in `src/scripts/animations.js` — markup is visible by default; animations only enhance. `prefers-reduced-motion` is respected.

## Structure

See `docs/ASTRO-ARCHITECTURE.md`. Content conventions: `[CONFIRM]` = pending client approval, `REVIEW-MIN-TC` = zh medical wording under review — keep markers intact.

## Testing

`npm run test:e2e` builds-serves `dist/` (port 3002) and runs `tests/e2e/site.spec.js` against all 27 localized routes + root + 404, core interactions (menu, FAQ, booking, forms, language switch), and viewports 320–1440 px.
