# Design Changes — Phase 2/3
Branch: impeccable/phase-2 (from baseline `597d4c3`)

## Documentation
- `PRODUCT.md` — durable product record (users, positioning, constraints, zh-Hant commitment).
- `design.md` — rewritten as canonical Impeccable DESIGN.md (YAML tokens + 8 sections).
- `.impeccable/design.json` — Stitch sidecar: tonal ramps, shadows, motion, breakpoints,
  10 self-contained component snippets, narrative.
- `BUILD-PLAN.md` — WordPress build plan recovered verbatim from
  `public/assets/aistudio/design_cee10b15.md` + role banner.
- `prd.md`, `README.md`, `PRODUCT.md` — cross-references updated; FR-30 records zh-Hant.

## Traditional Chinese (zh-Hant)
- `lang`/`hreflang` zh-Hans → zh-Hant on all 27 pages.
- `--font-chinese`: Noto Sans TC + PingFang TC + Microsoft JhengHei + Heiti TC; Google Fonts import updated.
- Copy converted via OpenCC cn→twp (Taiwan-standard phrasal forms); `專案→項目` idiom corrected.
- 63 `REVIEW-MIN-TC` markers on medical/claims copy — pending Min's approval, NOT approved.
- zh sitemap doc + planning docs updated to record the decision.

## CSS/JS
- `assets/css/responsive.css` — mobile header fixes (brand suffix, header switcher, gaps).
- `assets/css/base.css` — `html { overflow-x: clip }`.
- `assets/css/components.css` — systemic tabular-nums.
- `assets/css/variables.css` — zh-Hant font stack.
- `assets/js/animations.js` — per-element ScrollTrigger reveals + visibility failsafe.
- `assets/images/favicon.svg` — new; linked on all pages.
- Hero secondary CTA: `btn-secondary` → `btn-outline` (3 homepages).

## HTML (21 pages)
- Injected mobile drawer markup where missing; added menu toggle to 6 legal pages.
