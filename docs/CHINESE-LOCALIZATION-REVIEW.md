# Chinese Localization Review — Traditional → Simplified (zh-CN)

**Branch:** `design/premium-experience-final` · **Date:** 8 Nov 2026
**Method:** OpenCC `t2s` conversion + structural review. Full per-line inventory: `test-results/zh-conversion-inventory.json`. Screenshots: `test-results/premium-shots/zh-*-{320,390,768,1024,1440}.png`.

## Scope converted (16 files, ~325 lines)

| File | Lines | Content |
|---|---:|---|
| src/data/prices.js | 51 | prices, insurance, Tarif 590 text |
| src/data/booking.js | 43 | booking steps, services, summaries, demo notice |
| src/data/treatments.js | 39 | treatment names/descriptions |
| src/data/contact.js | 37 | contact form, details, transit |
| src/data/practitioner.js | 28 | bio, credentials, portrait labels |
| src/data/firstVisit.js | 27 | first-visit steps, checklists |
| src/data/legal.js | 24 | privacy + imprint (incl. phone/EMR [CONFIRM]) |
| src/data/cta.js | 20 | CTA banners, phone fallbacks |
| src/data/meta.json | 18 | SEO titles/descriptions |
| src/data/routes.js | 18 | nav labels, footer strings |
| src/data/home.js | 17 | hero, sections |
| src/data/faq.js | 13 | FAQ |
| Footer, BookingWidget, BookingBand, booking-demo.js, main.js | 9 | literals (蘇黎世 Seebach, 中文 etc.) |

Sample pairs: 蘇黎世→苏黎世 · 預約就診→预约就诊 · 中醫→中医 · 針灸→针灸 · 治療項目→治疗项目 · 蘇黎世 Seebach→苏黎世 Seebach.

## Language contract (as implemented)

- `<html lang="zh-CN">`, `hreflang="zh-CN"` on all `/zh/` pages.
- Fonts verified loading via `document.fonts`: **Noto Serif SC 500** (h1–h3 via `html[lang="zh-CN"]` rule — never Latin fallback), **Noto Sans SC 400/500/600** (body/UI).
- Chinese punctuation preserved; no uppercase/letter-spacing applied to zh text.

## Medical review items for Min — REVIEW-MIN-ZH-CN mapping

All `rev: { zh: true }` flags survived conversion (they are structural, not text). Any TC `REVIEW-MIN-TC` marker now maps 1:1 to **REVIEW-MIN-ZH-CN** on the same string. Flagged claims awaiting Min's sign-off (unchanged, not strengthened):

- Eidg. Diplom / practitioner title (practitioner.js, legal.js)
- EMR / ASCA / SBO-TCM registrations (practitioner.js, prices.js, legal.js)
- 15+ years experience claim
- Treatment benefit wording (acupuncture, herbs, Tuina, cupping, moxibustion)
- Insurance/VVG reimbursement + Tarif 590 billing statements
- zh FAQ answers on coverage and outcomes
- Demo booking strings — still clearly marked demo-only, no real submission

## Verification

- Zero Traditional characters remain in `src/` and built `dist/zh/**` (checked against TC glyph set).
- `npm run check` 0 errors · `npm run build` 29 pages · `npm run test:e2e` **45/45** (includes zh-CN lang/hreflang assertions).
- Booking demo exercised DE/EN/ZH steps 1–4 earlier; zh labels now Simplified (预约流程 unchanged).

## Remaining approvals

1. Min reviews the full zh copy for natural Mainland phrasing (mechanical conversion reviewed but needs native read, esp. medical terms and the 敬語 tone).
2. Phone number on zh pages inherits the same [CONFIRM] discrepancy as DE/EN.
3. Registries (EMR/ASCA/SBO-TCM vs live-site LCC) still open — same as DE/EN.
4. Taiwan-vs-Mainland vocabulary check (e.g. 網絡/网络 usage) — conversion normalized to Mainland forms; Min confirms preference.
