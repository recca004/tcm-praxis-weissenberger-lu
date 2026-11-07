# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Confirmed by the PRD:

- **New local patient** — finds the practice via Google; wants to know what to expect and how to get an appointment.
- **Returning patient** — needs quick access to booking and phone details.
- **English-speaking visitor** — wants complete, understandable English pages and booking steps.
- **Chinese-speaking visitor** — wants accurate Chinese copy, not a partly translated template.
- **Min Weissenberger-Lu (practitioner)** — wants reliable schedule control and a low-effort way to handle requests.
- **Agence 25 admin** — wants reusable layouts, easy updates, backups, and clear change ownership.

## Product Purpose

The public website and appointment path for TCM Praxis Weissenberger-Lu, a single-practitioner Traditional Chinese Medicine clinic in Zürich-Seebach. It replaces the current brochure-style site (tcm-weissenberger-lu.ch), which leads with ICD-11/AI claims instead of the patient, practitioner, and booking path.

Success means a first-time visitor can answer five questions in under a minute — who Min is, what treatments exist, where the practice is, what a visit costs and whether supplementary insurance applies, and how to book or ask a question — and then book or call. Success measures live in `prd.md` §3 (booking completion, booking-start clicks, call clicks, contact enquiries, local search visibility); no fixed conversion promises without first-party data.

## Positioning

A real, named, local single-practitioner practice — Min Weissenberger-Lu herself, in Zürich-Seebach — with full content parity across German, English, and Chinese and a working online booking path in each language. A neighboring clinic cannot truthfully copy the practitioner, her credentials, or the location. Trust comes from verified facts and a calm, patient-first structure, not from scale or technology claims.

## Operating Context

- **This repository is the high-fidelity prototype, not the shipping product.** User-confirmed: the trilingual static site here (HTML5/CSS3/vanilla JS + GSAP + Lucide, built with Vite multi-page) previews the real product — a WordPress site on Hostpoint (Elementor Pro + JetEngine + Polylang + Amelia) — and must map to it closely enough to serve as the build blueprint. Planned migration: **19 November 2026**.
- **Agency/client workflow:** Agence 25 builds; Min approves all factual, medical, and price content. Items marked `[CONFIRM]` in `BUILD-PLAN.md`/`prd.md` must not publish without her sign-off.
- **Booking authority:** Amelia, once configured and tested (user-confirmed). Amelia owns services, schedule, customers, and appointments; JetEngine never stores appointment data. The existing Google Calendar booking link stays live until the Amelia switch passes end-to-end tests — never two unsynced active calendars.
- **Content ownership matrix** is in `prd.md` §10; success measures and functional requirements in `prd.md` §3–§7.

## Capabilities and Constraints

- Nine launch pages per language: Home, About Min, Treatments, Prices & Insurance, First Visit, Booking, Contact/Directions, Privacy, Imprint. Phase 2 (post-approval): treatment detail pages, condition pages, articles, expanded FAQs.
- Three locales: **German default (`/de/`)**, English (`/en/`), Chinese (`/zh/`). Language switch preserves the equivalent route.
- Booking flow shows `Europe/Zurich`, pending/confirmed status, cancellation rules, and email notification; public contact form collects only name, reply address, preferred language, and a non-medical question.
- **Hard constraints:**
  - **Health-data minimization:** no diagnoses, symptoms, clinical notes, or medical history in marketing forms, JetEngine lead tables, or analytics. Swiss FADP applies.
  - **No invented facts:** no guessed phone numbers, fees, certifications, session durations, testimonials, or cure/effect claims. Prices come only from the client's approved list.
  - **Budget:** CHF 650 cap for the agreed fixed scope; licences, paid translation, and extra content need scope approval.
  - **Redirects:** existing `/de/*` and `/en/*` routes inventoried and 301-mapped at cutover.
- **Out of scope unless separately approved:** medical records/intake, EHR, AI medical evaluation, payment gateway, patient portal, insurer-coverage checker, CRM/marketing automation, SMS campaigns.

### Open decisions (recorded, not invented)

- **Phone number(s):** German and English legacy pages disagree; one client-approved contact record required.
- **Practitioner title, registrations (EMR, ASCA, SBO-TCM), and qualifications:** spelling and documents to verify.
- **Price list and session durations:** client-approved CHF fees pending (guideline ranges only).
- **Portrait and clinic photography:** client-approved images pending; current images are placeholders.
- **Privacy/imprint wording:** legal approval needed.

## Brand Commitments

- Practice name: **TCM Praxis Weissenberger-Lu**; practitioner: **Min Weissenberger-Lu**.
- Address as currently shown: Schaffhauserstrasse 466, 8052 Zürich-Seebach `[CONFIRM]`.
- Language commitment: complete, accurate content in German, English, and **Traditional Chinese (zh-Hant — user-confirmed binding on 7 Nov 2026)**. The `/zh/` pages have been converted from the Simplified draft to Traditional (phrasal conversion, OpenCC TW profile) with `lang`/`hreflang` = `zh-Hant` and a Noto Sans TC font stack; **the Traditional copy still requires Min's review of medical wording before publication** — medical lines are marked `REVIEW-MIN-TC` in source.
- Voice: plain-language, calm, and reassuring; no cure promises, no unreviewed medical claims, no leading with technology.

## Evidence on Hand

- Audited live site (7 Nov 2026): https://www.tcm-weissenberger-lu.ch/en — content audit findings in `prd.md` §2.
- Trilingual prototype pages under `/de/`, `/en/`, `/zh/`; shared assets in `/assets/`; design tokens in `assets/css/variables.css`.
- Planning documents: `prd.md`, `market_research.md`, `design.md`, and per-locale sitemaps (`public/assets/aistudio/sitemap_*.md`).
- Working booking-flow prototype (`assets/js/booking-demo.js`) with demo disclaimers in three languages.
- **Absent — must not be fabricated:** approved portrait/practice photos, testimonials, verified credentials spelling, final prices, approved phone number, measured traffic/speed/conversion data.

## Product Principles

1. **Verified facts or nothing.** If Min has not approved it — price, phone, credential, photo, claim — it does not publish.
2. **Patient path first.** Every page serves the two actions: book an appointment or ask a question; everything else supports them.
3. **True language parity.** Chinese is a first-class edition, not a translated afterthought; every published page has an approved equivalent in all three languages.
4. **Health data stays out of marketing.** Minimal fields, minimal analytics, no clinical data anywhere in the website stack.
5. **Small and correct beats large and unreviewed.** Launch scope is deliberately narrow; depth comes in phases after approval.

## Accessibility & Inclusion

- Target **WCAG 2.2 AA** where practical; the full booking flow must be keyboard-usable.
- Main booking action reachable on a 360 px screen without horizontal scrolling.
- `prefers-reduced-motion` respected; all content functional without JavaScript or external CDNs.
- Traditional Chinese copy needs its own font stack, line-wrapping, and page checks — not Latin text metrics forced onto it.
