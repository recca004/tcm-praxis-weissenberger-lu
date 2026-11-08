# Phase 11 — Premium Experience Review (QA Report)

**Branch:** `design/premium-experience-final` (from `design/quiet-consultation-inner` @ `b772984`)
**Date:** 8 November 2026
**Scope:** visual quality review + focused fixes. No merge, no publish — `main`/`gh-pages` untouched.

---

## 1. Design review — findings ranked by severity

Real issues found in browser inspection at 1440×900, 1366×768, 1024×768, 768×1024, 390×844, 320×700:

| # | Severity | Finding | Evidence | Status |
|---|----------|---------|----------|--------|
| 1 | **High** | Hero content clipped under the translucent fixed header at 1024×768 — `height:100svh` + centered flex + the `min/max-width:1024px` media overlap stacked the hero taller than the viewport, so the H1 hid behind the header | `home-de-1024x768-fold.png` (before) | **Fixed** — `min-height:100svh` only, breakpoint moved to `min-width:1025px` (`verify-hero-1024x768.png`) |
| 2 | **High** | Booking steps bar clipped on mobile — tab 4 "Bestätigung" unreachable at 390px | `booking-de-step1-390x844.png` (before) | **Fixed** — horizontal scroll, hidden scrollbar, `white-space:nowrap` (`verify-booking-step1-390x844.png`) |
| 3 | Medium | Booking step-4 summary was an unstyled inline-styled box — weakest surface on the signature component | `booking-de-step4-1440x900.png` (before) | **Fixed** — `.booking-summary` hairline-separated rows, 9rem label column (`verify-booking-step4-1440x900.png`) |
| 4 | Medium | About page rendered the eyebrow "IHRE THERAPEUTIN" twice in one viewport (page header + editorial block) | `about-de-1440x900-full.png` (before) | **Fixed** — editorial eyebrow suppressed on About (`verify-about-1440.png`) |
| 5 | Low | Booking markup carried inline styles (step titles, field grid, nav row, demo badge) | `BookingWidget.astro` | **Fixed** — `.booking-step-title`, `.booking-field-grid`, `.booking-nav`, `.booking-demo-badge` |
| 6 | Low | Booking header badge wrapped mid-word on 390px | `booking-de-step1-390x844.png` | **Fixed** — `flex-wrap` + `white-space:nowrap` on badge |
| 7 | Info | Chinese H1 uses an interpunct "傳統中醫療法·蘇黎世 Seebach" — stylistic, kept | `home-zh-1440x900-fold.png` | Open — Min's call on zh copy |
| 8 | Info | "Beispielfoto vor Freigabe" badge flagged by automated checker as placeholder text — intentionally retained per honest-placeholder policy until real photography arrives | `home-de-1440x900-fold.png` | Kept (see §6) |

**Not problems (checked, confirmed):** hero balances well at 1366×768 and 1440×900 with photo, headline, CTAs and 2×2 trust facts all in the first screen; at 390×844 content stacks readably; at 320×700 no horizontal scroll (e2e-verified); treatments index, prices table, FAQ, contact and legal pages hold the editorial system cleanly.

## 2. Skills used and why

| Skill | Used for |
|-------|----------|
| `design-taste-frontend` | Review criteria: first-screen presence, equal edges, honest imagery, quiet micro-interactions, no scroll-jacking on a service page |
| `playwright-skill` | Real-browser screenshots at 6 viewports × 12 routes, interactive booking-flow capture, reduced-motion/no-JS/drawer checks |
| `copywriting` / `cro` | CTA wording audit (single booking verb), phone-fallback label simplification, booking microcopy |
| `local-seo` | NAP consistency check against the live site (see §5) |
| `impeccable` | `design.json` token sync (muted-lichen, amber-clay, serif display note) |

Not installed/needed: dedicated shader/effect skills (correct — service page gets no scenes).

## 3. Changes made

- `src/styles/layout.css` — hero `100svh` fixed-height → `min-height` at ≥1025px (fixes header clip; keeps first-screen presence)
- `src/styles/components.css` — mobile scrollable steps bar; `.booking-step-title`, `.booking-nav`, `.booking-summary`/`.booking-summary-row`, `.booking-field-grid`, `.booking-demo-badge`; booking header flex-wrap
- `src/components/sections/BookingWidget.astro` — inline styles → classes; summary panel → semantic hairline rows
- `src/components/sections/PractitionerEditorial.astro` — deduplicated eyebrow on About
- `DESIGN.md` — fully rewritten to the implemented system: Source Serif 4 display / Source Sans 3 body / Noto Sans TC; deepened contrast tokens (#384C44, #7A4500); editorial index; hero grid & 100svh rule; quiet booking band; button interaction rules; photography rules; reduced-motion contract; eyebrow policy
- `.impeccable/design.json` — tokens synced (7 replacements)
- `PHOTOGRAPHY-BRIEF.md` — new, for Min (see §6)
- Booking logic (`booking-demo.js`) — **untouched**; demo still clearly labeled, never claims a real booking

## 4. Booking-page review (all 3 languages, steps 1–4)

Verified interactively at 1440 and 390 in DE/EN/ZH: service selection, calendar day pick, time slot, details form, summary. After polish: consistent step titles, scrollable step tabs, styled summary with label column, visible demo banner, working phone fallback. Screenshots: `booking-{de,en,zh}-step{1,2,2b,3,4}-{1440x900,390x844}.png`.

## 5. Content verification — source-backed differences for Min

Checked `src/data/*` against the **live site** (tcm-weissenberger-lu.ch, fetched 8 Nov 2026), the intake form, the Leistungsbeschreibung, and the first-call transcript. **Nothing was silently changed — list for Min's decision:**

| Fact | Live site | New site data | Source docs | Action for Min |
|------|-----------|---------------|-------------|----------------|
| Phone | **043 300 9932 / 078 790 88 69** (two numbers) | `+41 78 899 92 88` `[CONFIRM]` | Intake form: `078 790 88 69` | **Which number(s) should be public?** Live shows a landline + mobile; ours shows a third number. Correct before launch. |
| Address | Schaffhauserstrasse 466, 8052 Zürich | same | Leistungsbeschreibung: same | ✓ verified |
| Email | info@tcm-weissenberger-lu.ch | same | intake: same | ✓ verified |
| Recognition | **ASCA / EMR / LCC** anerkannt | EMR / ASCA / SBO-TCM `[CONFIRM]` | call: "bei der Krankenkasse anerkannt" | **Confirm exact registries** — live adds LCC, ours lists SBO-TCM |
| Title | "TCM Therapeutin mit Eidgenössische Diplom" | "Eidg. Diplomierte TCM-Therapeutin" `[CONFIRM]` | — | Confirm wording (Diplom type: eidg. / NHP?) |
| Membership | TCM-Fachverband Mitglied | not listed | — | Keep or drop? |
| Prices | none published | Richtwert badges `[CONFIRM]` (ca. 140–160 / 150–180) | call mentions ~CHF 140–150 self-pay | Confirm final price list |
| Hours | Mo–Fr 09:00–18:00, Sat by appt, Sun closed | Mo–Fr 09:00–18:00, Sat by appt | — | Add "Sonntag geschlossen"? Minor |
| Symptoms page | dedicated "Symptome" page (Rücken, Migräne, Stress/Schlaf, Verdauung) | folded into Treatments | call: "Behandlung, Symptome bleibt" | **Scope decision** — Min asked to keep Symptome; keep consolidated or restore dedicated page? |
| ICD-11 / AI features | "ICD-11 System", "KI-Gesundheitsanalyse" | not carried over | — | Keep or drop? (probably drop — verify) |
| Tarif 590 billing | not stated | claimed `[CONFIRM]` | — | Confirm she bills Tarif 590 |
| 15+ years experience | not stated | claimed `[CONFIRM]` | — | Confirm |
| 24h cancellation | not stated | claimed | call: "24 Stunden im Voraus absagen" | ✓ consistent |

All unverified items remain behind `[CONFIRM]` / `data-assumed` markers — none display as confirmed facts.

## 6. Photography

`PHOTOGRAPHY-BRIEF.md` written for Min: 6 shot groups (portrait, room, consultation, preparation details, interior, entrance/Seebacherplatz) with framing, light and delivery guidance. Until delivery + approval, all placeholders keep their honest labels — no fake portrait, no invented practice imagery.

## 7. Interaction & accessibility

- Reduced motion: statement words render full Apothecary Deep (verified `rgb(30,67,59)` — no dependence on scroll animation)
- Closed mobile drawer: `visibility:hidden` + `pointer-events:none` — unfocusable; opens correctly
- No-JS: hero headline and statement at opacity 1 — content is never animation-gated
- No ScrollTrigger/scroll-jacking; hero entrance is a single 0.65s load pass
- Focus: global 2px green `:focus-visible` ring; keyboard-verified drawer toggle

## 8. Test results

- `npm ci` — 323 packages, 0 vulnerabilities (one retry needed: locked native binary cleared by killing stale node processes)
- `npm run check` — **0 errors, 0 warnings** (26 pre-existing hints)
- `npm run build` — **29/29 pages**
- `npm run test:e2e` — **45/45 passed** (all locales, booking demo, contact form, lang switch, responsive 320→1440, reduced motion)
- Copy lint (prior run, unchanged content paths): 0 FAIL, 0 WARN

Screenshots: `test-results/premium-shots/` — `verify-*` = after-fix evidence.

## 9. Outstanding client decisions (for Min)

1. **Phone number** — live lists 043 300 9932 + 078 790 88 69; ours shows +41 78 899 92 88. Must resolve before launch.
2. **Exact registries** — ASCA/EMR/**LCC** vs our ASCA/EMR/**SBO-TCM**.
3. **Symptome page** — keep consolidated in Treatments or restore dedicated page (she asked it "bleibt").
4. **ICD-11/AI features** — live homepage advertises them; redesign omits them.
5. **Final prices** — confirm real CHF values for the Tarif 590 table.
6. **Photos** — deliver per `PHOTOGRAPHY-BRIEF.md`, then approve each placement.
7. **Sunday hours** — add "geschlossen" for completeness?

## 10. Final commit

`fb9a307` on `design/premium-experience-final` — branch stays unmerged and unpublished.
