# Brand & Services Update — 8 Nov 2026

Branch: `design/services-and-brand` (from `design/real-photography` @ d17b57d). Not pushed, not merged, not published.

## Nine services (stable IDs, editorial numbered index)

| # | id | DE | EN | zh-CN |
|---|----|----|----|-------|
| 01 | acupuncture | Akupunktur | Acupuncture | 针灸 |
| 02 | tuina | Tuina | Tuina | 推拿 |
| 03 | cupping | Schröpfen | Cupping | 拔罐 |
| 04 | herbal | Kräutertherapie | Herbal Medicine | 中草药治疗 |
| 05 | guasha | Gua Sha | Gua Sha | 刮痧 |
| 06 | moxa | Moxa | Moxibustion | 艾灸 |
| 07 | plum-blossom | Pflaumenblütennadel-Behandlung | Plum Blossom Needle Therapy | 梅花针治疗 |
| 08 | electro-acupuncture | Elektro-Akupunktur | Electro-Acupuncture | 电针 |
| 09 | ear-acupuncture | Ohr-Akupunktur | Ear Acupuncture | 耳针 |

- DE names = business card verbatim. EN/zh-CN translations → **client review items** (zh names are the proposed list from the brief).
- TCM-Beratung & Diagnostik removed from the advertised therapy index — covered in First Visit info.
- Descriptions rewritten factual/restrained; every zh string keeps `rev: { zh: true }` (REVIEW-MIN-ZH-CN). No prices, durations, outcomes or coverage claims added.
- Booking demo unchanged — still the initial/follow-up demo flow, no nine-service booking.
- Homepage shows first 5 rows + "Behandlungen ansehen" → treatments page shows all 9.
- New Lucide icons registered in Icon.astro: hand, circle, waves, flower-2, zap, ear, sprout. Lucide remains the only UI icon system.

## Logo

Original WL monogram based on the supplied concept PNG: calligraphic W stem growing three leaves over a wave underline — Apothecary Green leaves, Deep Green strokes, Cormorant wordmark + DM Sans supporting line. No copied artwork (reference tcm-chan.ch used for lockup approach only).

- `src/components/Logo.astro` — inline SVG (real page fonts apply); props: `light`, `compact`, `height`
- `public/assets/brand/logo-symbol.svg`, `logo-horizontal.svg`, `favicon.svg` (copied to `public/favicon.svg`)
- Header: compact lockup replaces boxed Lucide leaf + text; footer: light version
- Supplied reference PNG + `vl-tcm.svg`/`vl-nvs.svg` moved to gitignored `assets-private/` — third-party marks never displayed

## Tests

`npm run check` 0 errors · `npm run build` 29 pages · `npm run test:e2e` **45/45** (t-index-row assertion updated 6→5 for the home preview). Screenshots: `brand-*` in test-results/premium-shots.

## Client approvals pending

1. Logo design + supporting-line wording
2. EN/zh service names
3. zh/EN descriptions (rev flags)
4. Membership logos (vl-tcm/vl-nvs) — membership + permission to show
5. Whether 9 services map to booking categories later

## Final commit
Final SHA: d9fd1c4
