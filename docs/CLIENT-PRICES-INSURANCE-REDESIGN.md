# Prices & Insurance Page — Client-Requested Redesign

**Branch:** `feature/client-prices-insurance-redesign`
**Base:** `feature/official-client-branding` (`d078f91`)
**Date:** 10 November 2026
**Preview:** https://recca004.github.io/tcm-praxis-weissenberger-lu/de/preise-krankenkasse/ (noindex)

## 1. What Min asked for

Min approved the site's colour combination and sent reference screenshots for a clearer Prices & Insurance page. This change implements her proposed content order while keeping the official logo work, fonts, colours, spacing and quiet GSAP motion untouched.

## 2. New page structure

`/de/preise-krankenkasse/` · `/en/prices-insurance/` · `/zh/feiyong-baoxian/` — all three locales share one Astro layout and central data (`src/data/prices.js`, `src/data/insurers.js`).

| Order | Section | Implementation |
|---|---|---|
| 1 | Page intro | One H1 ("Preise & Krankenkassen" / "Prices & Insurance" / "收费与医疗保险") + Min's suggested lead text |
| 2 | H2 "Unsere Preise" | Two price blocks (`PriceBlocks.astro`): **Erstbehandlung CHF 200 · ca. 90 Min.** and **Folgebehandlung CHF 150 · ca. 60 Min.**, each with a "Betrag zur Freigabe" badge |
| 3 | Herbs note | "Chinesische Arzneimittel … separat ausgewiesen. Bitte Kosten vorab erfragen." (+ EN/zh) as a quiet chamomile-edged note |
| 4 | H2 "Krankenkassen & Kostenübernahme" | Neutral paragraph: reimbursement varies by policy, treatment method, practitioner recognition, insurer rules/limits |
| 5 | Insurer examples | 12 insurer names in a two-column list inside a quiet bordered block, headed "Beispiele von Krankenkassen" + "Liste zur Freigabe" badge + neutral note (no recognition claim, no "partners" wording) |
| 6 | Disclaimer | "Eine Kostenübernahme kann nicht zugesichert werden…" |
| 7 | H2 "So funktioniert die Rückerstattung" | Three numbered editorial steps (01 Vorab prüfen · 02 Behandlung · 03 Einreichen); step 02 mentions Tarif 590 and carries a "Tarif 590 zur Freigabe" badge |
| 8 | Closing CTA | Existing green `cta-banner`: "Wir freuen uns auf Sie" + text + primary **043 300 99 32 anrufen** (`tel:+41433009932`, confirmed EMR landline) + secondary "Termin buchen" + footnote "Zürich-Seebach · TCM Praxis Weissenberger-Lu" |

Removed: the crowded 4-column price table (`PriceTable` usage on this page), all old draft fee ranges (150–180 / 140–160 placeholders), Tuina and herbal-consultation fee rows (new fees may not be set without approval), and the two `InfoBlocks` cards (superseded by the new sections). `PriceTable.astro` itself remains in the codebase for reference.

## 3. Homepage update

The homepage overview now mirrors the page: section title + intro, the two `PRICE_BLOCKS` in compact form (with pending badges), and a link to the full page. The VVG insurance card, insurer note and the gated logo wall are unchanged — no reimbursement guide duplicated.

## 4. Insurer review list (internal data)

`src/data/insurers.js` now holds all 12 names from Min's screenshots — Helsana, CSS, SWICA, Sanitas, Sympany, CONCORDIA, Visana, EGK, Groupe Mutuel, KPT, ÖKK, Atupri — every entry `approved: false`. The two-row logo wall and its approval gating are untouched; `?preview-insurers` remains localhost-only. Names render on the preview strictly as examples with a pending marker until Min confirms recognition + display permission.

## 5. Pending client confirmations

- [ ] CHF 200 (initial) and CHF 150 (follow-up) — final fees?
- [ ] Durations ~90 / ~60 minutes — final?
- [ ] Do the two fee types cover all relevant treatments (Tuina, herbal consults)?
- [ ] Chinese herbs billed separately — wording confirmed?
- [ ] Does the practice issue Tarif 590 invoices?
- [ ] Which insurers recognise Min for reimbursement?
- [ ] May the practice display insurer names/logos?

All mirrored in `CLIENT-APPROVAL.md` §3 (3.2–3.9). Badges stay visible on the preview until answered.

## 6. Test results

- `npm run check` — **0 errors, 0 warnings** (36 pre-existing hints)
- `npm run build` — **32 pages built**
- `npm run test:e2e` — **105/105 passed**
- Manual browser QA: one H1 per page, no horizontal scroll at 320/390/768/1024/1440px, no broken assets, pending badges visible, reduced-motion unaffected (steps/CTA are static markup, GSAP unchanged)

## 7. Screenshots

`docs/screenshots/prices-insurance/` — desktop (de/en/zh), tablet 768/1024, mobile 390/320, homepage price section.

## 8. Commits

- Source: `feature/client-prices-insurance-redesign` — see final commit SHA below
- gh-pages deploy: reported in the final handoff note

**Final source commit:** recorded in the delivery report.
