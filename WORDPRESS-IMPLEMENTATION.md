# WordPress Implementation Map — TCM Praxis Weissenberger-Lu

**Scope:** how the static prototype (this repo) maps to the production build. Stack per `BUILD-PLAN.md`: WordPress on Hostpoint, Elementor Pro, JetEngine, Polylang, Amelia. All work in staging; live domain and the current Google Calendar booking link stay untouched until cutover.

## 1. Page / template mapping (per language, 9 launch pages)

| Prototype | WP template | Elementor work | Content source |
|---|---|---|---|
| `/{de,en,zh}/index.html` — Home | Page template "Home" | hero grid, trust strip, treatment cards grid, practitioner panel, timeline, price summary, FAQ, booking widget embed, contact block, CTA banner | Page content + `practice_info` options + `treatment` CPT items |
| About Min | Page template "Standard" | practitioner panel (portrait + credential chips), bio | Page content + `practice_info` |
| Treatments | Page + JetEngine Listing Grid | `.treatment-card` loop from CPT `treatment` (`featured_order`) | CPT `treatment` |
| First Visit | Page template "Standard" | `.timeline-step` blocks | Page content |
| Prices & Insurance | Page template "Standard" | `.price-table` + `.insurance-card` | Page content + `practice_info` prices |
| Booking | Page hosting Amelia | `amelia-booking` block replaces `.booking-widget-container` | Amelia services |
| Contact / Directions | Page template "Standard" | contact details block + non-medical form (Fluent/JetForm) + map link | `practice_info` options |
| Privacy / Imprint | Page template "Standard" (narrow) | `container-narrow` prose | Page content (client-approved) |

Global: header (wordmark + nav + pill lang-switcher + booking button) and footer as Elementor Pro Theme-Builder templates; `.site-header` sticky behavior reproduced with header template sticky settings.

## 2. JetEngine data model

**Options Page `practice_info`** (single source for all locales, per-language fields or translated pages where needed):
`address_line1`, `postcode`, `city`, `phone_primary`, `phone_secondary`, `email_public`, `hours_text`, `map_link`, `insurance_text`, `booking_mode`, `booking_page_id`.

**CPT `treatment`** fields: `short_intro`, `hero_image`, `session_outline`, `benefit_context` (clinician-reviewed only), `faq_items` (repeater), `featured_order`, `amelia_service_id`, `published_after_review`.

**CPT `condition`** (Phase 2): `plain_summary`, `medical_review_date`, `medical_reviewer`, `limitations_note`, `recommended_treatments` (relation).

**Relation** `treatment_condition`: many-to-many, approved content only.

**Hard rule:** JetEngine never stores appointments or customers — Amelia owns services, schedule, customers, bookings. No shadow tables.

## 3. Polylang / languages

- Locales: `de-CH` (default), `en`, `zh-Hant`. URLs `/de/`, `/en/`, `/zh/` — keep the `/zh/` base.
- Every published page needs its approved translation before linking; reciprocal `hreflang` only where a real counterpart exists; one self-canonical per page.
- Translated slugs for Pages (already used in the prototype). CPT base slug shared across languages on Polylang Free — verify on staging.
- Chinese pages use the Traditional font stack (Noto Sans TC + PingFang TC + Microsoft JhengHei) via theme CSS; zh body line-height 1.75.

## 4. Amelia mapping

| Prototype demo | Amelia |
|---|---|
| Service card "Erstbehandlung" | Service: Initial consultation (approved name/price/duration) |
| Service card "Folgebehandlung" | Service: Follow-up treatment |
| One practitioner | One employee (Min) |
| Calendar + time slots | Amelia schedule, Europe/Zurich |
| Details form | Amelia customer fields (no medical questions) |
| Summary + pending status | Amelia booking + pending/confirmed emails |
| Phone fallback | Contact block beside widget |

- Google Calendar sync only after licence + client approval; keep the existing external booking link live until the Amelia flow passes 3-locale end-to-end tests. Never run two unsynced calendars.

## 5. Content dependencies (must precede build steps)

Phone/email/hours → header, footer, contact page, `practice_info`. Credentials → About + trust strip. Prices/durations → price table + Amelia services. Portrait/photos → hero + practitioner panel. zh-Hant medical review → all zh pages. Legal text → privacy/imprint. See `CLIENT-APPROVAL.md`.

## 6. Migration checks (19 Nov 2026)

Staging build → 3-locale booking test (incl. email) → redirect map from crawl of current `/de/*`,`/en/*` → SSL + backups + restore test → DNS cutover → Search Console + analytics (no patient data) → post-launch 404 watch. Detailed checklist lives in `BUILD-PLAN.md` §10.

## 7. Asset carryover

Design tokens map 1:1 from `assets/css/variables.css` into the Elementor kit / theme CSS variables — same names (`--color-primary` …) so the sidecar components transfer. Fonts: Source Sans 3 + Noto Sans TC. GSAP/Lucide are optional niceties in WP — rebuild hover states with Elementor/native CSS first.
