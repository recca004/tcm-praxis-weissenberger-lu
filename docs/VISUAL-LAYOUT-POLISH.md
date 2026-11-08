# Visual Layout Polish — 8 Nov 2026

Branch: `design/visual-layout-polish` (from `design/services-and-brand` @ e48893e). Not pushed, not merged, not published.

## What looked wrong / what changed

1. **Portrait badge** — Min approved the portrait; `[Porträt vor Freigabe]` badge removed from home + About (all 3 locales). Qualifications `[CONFIRM]` markers untouched.
2. **Portrait inset** — the silhouette panel's `padding: var(--space-8)` overrode the real-photo rule (equal specificity, later source order). Fixed with `.pract-ed-photo.pract-ed-photo--real` — photo now fills the 4:5 frame edge-to-edge, face sharp.
3. **"In-Depth" wrap** — EN heading now uses a non-breaking hyphen (In‑Depth U+2011).
4. **First Visit** — waiting-room photo moved from a disconnected centered block into a two-column opening (title/lead left, 4:3 photo right); steps keep serif numerals only (duplicated "1./2./3." prefixes removed from headings). Stacks naturally on mobile.
5. **Treatments diagnostic** — heavy white `ed-panel-xl` card replaced with `.diagnostic-open`: hairline top rule, 2-col text/photo, single-col on mobile.
6. **Contact** — row 1: practice details + form; row 2: reception photo + transit card. No more long-left/empty-right. Mobile order: details → form → photo → transit.
7. **Footer** — 9-treatment column replaced with 5 core links + "Alle Behandlungen ansehen →" per locale.
8. **Logo** — header lockup raised to 44px (34px mobile); verified no collision with nav/lang/CTA.
9. **Homepage spacing** — treatments→About transition reviewed; rhythm unchanged, no forced full-screen sections.

## Screenshot overlay finding

Dark ovals in earlier full-page captures were **screenshot tooling artifacts**, not site elements — clean-session captures show none. No code removed.

## Confirmed approval

- Practitioner portrait: **approved** (badge removed).

## Still pending

- Hero/treatment/reception/waiting photos ("Foto vor Freigabe" on hero), qualifications/EMR [CONFIRM], phone discrepancy (078 790 88 69 / 043 300 9932 vs +41 78 899 92 88), prices.

## Tests

`npm run check` 0 errors · `npm run build` 29 pages · `npm run test:e2e` **45/45**. Screenshots: `polish-*-1440.png`.

## Final commit

Final SHA: 0fe0f1e
