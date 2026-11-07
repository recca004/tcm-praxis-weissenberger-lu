# Premium Inner Pages Review — Phase 2

Branch: `design/quiet-consultation-inner` (based on `design/quiet-consultation` @ `376aae3`) · not merged, not published.
Extends the Quiet Consultation Room direction to every inner page. Homepage untouched except where shared components apply.

## Task 1 — Homepage re-check

Verified at 1440/768/390 in all three locales before starting (plus prior e2e baseline): serif display, hero photo, facts row, treatment index, practitioner section, booking band all consistent. No direction change needed.

## Changes per page

### Treatments (`/de/behandlungen/` …)
- `TreatmentGrid` replaced by `TreatmentIndex variant="page"`: numbered editorial rows — index numeral, Lucide icon well (flips to Apothecary Green on row hover), serif `titleFull`, `descFull`, booking link.
- Diagnostic section kept (checklist + photo) but wrapper lightened to `.ed-panel-xl`.
- Six identical large cards eliminated.

### About (`/de/ueber-min/` …)
- `PractitionerSection` replaced by `PractitionerEditorial variant="about"`: 4:5 labeled portrait slot (`[Foto folgt nach Freigabe]` badge kept, `[CONFIRM]` chips on credentials kept), serif "Mein Weg & Behandlungsphilosophie", full biography, language line.
- Three pillar cards → numbered `.pillar-row` hairline rows (numeral, icon well, title, description).

### First Visit (`/de/erster-besuch/` …)
- Steps reuse the `editorial` StepsTimeline variant (serif numerals, 2px ink rules, no cards) with `pageStyle` spacing.
- Two InfoCard boxes → `InfoBlocks` (hairline-top blocks: icon well, serif title, checklist rows).

### Prices (`/de/preise-krankenkasse/` …)
- `PriceTable open`: the table leaves its white card — 2px ink rules top/bottom, hairline row separators, tabular numerals and `[CONFIRM]` price badges preserved.
- Two InfoCards → `InfoBlocks` editorial grid.

### Booking (`/de/termin-buchen/` …)
- Widget untouched (logic + markup). Phone fallback panel restyled to `.ed-panel`.
- Header clip fixed globally in phase 1 (`.page-top`).

### Contact (`/de/kontakt/` …)
- Practice-data wrapper → `.ed-panel`; address/phone/email/hours list, TransitCard, and working form unchanged — no fake "message sent" claims introduced.

### Privacy & Imprint
- White card removed → `.ed-legal`: open prose sections separated by hairlines, 2px ink rule above the first section, narrow measure, serif section heads. `.page-top` applied.

## Skills applied

- **Taste (design-taste-frontend):** layout ideas (editorial index, hairline rows, numbered sequences); its mandatory photo/animation rules consciously not applied — project restricts to approved imagery and restrained motion.
- **Impeccable:** DESIGN.md tokens honored (Apothecary Green, Rice Paper, hairlines, quiet shadows, radius ladder, `[CONFIRM]` amber badges). Eyebrow-label and section-number patterns kept per canonical DESIGN.md — documented deviation in Phase 1 review still applies.
- **Playwright:** all pages captured at 1440 (+spot 390) — `docs/screenshots/audit/p2-*.png`.

## Test results

- `npm run check`: 0 errors, 0 warnings
- `npm run build`: 29 pages clean
- `npm run test:e2e`: **45/45 pass** — all 27 localized routes + 404 + root redirect, h1 visibility, no broken `#` links, booking demo flow (service→date→time→summary) de + en, contact form feedback, language-switch route preservation, no horizontal scroll 320–1440, reduced-motion visibility
- Screenshots: `docs/screenshots/audit/p2-{treatments,about,first-visit,prices,booking,contact,privacy}-1440.png`, `p2-treatments-390.png`

## Outstanding issues

- Portrait/photography still placeholder — awaiting Min's approved assets.
- Treatments index rows link to booking (no detail pages exist yet — Phase 2 scope); per-row anchors could deepen later.
- zh serif falls back to Noto Sans TC (no TC serif subset loaded — intentional, keeps font weight light).
- `BookingWidget` visual restyling deferred — logic-sensitive component; spacing polish only.

## Commit

`<SHA>` — see `git log` on `design/quiet-consultation-inner`.
