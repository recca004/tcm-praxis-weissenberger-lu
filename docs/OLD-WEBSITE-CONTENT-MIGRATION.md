# Old Website → New Astro Site: Content Migration Record

**Date:** 8 November 2026 · **Branch:** `feature/restore-legacy-content` · **Base:** `release/client-review-final`
**Sources:** old site https://www.tcm-weissenberger-lu.ch/ · EMR profile https://emr.ch/de/therapeut/min.weissenberger-lu

Internal audit document — not part of the public build.

## 1. Old content inventory

| Old page | Content |
|---|---|
| `/de` (home) | "Ganzheitliche Individuelle Behandlung nach TCM"; three "Besonderheiten": **ICD-11 System** ("Schweizweit erstes ICD-11-basiertes intelligentes TCM-Dossier"), **AI Analyse** ("KI-unterstützte Gesundheitsanalyse"), **Transparenz** ("Transparente Behandlungsprozesse"); 3 treatments (Akupunktur, Chinesische Kräuter, Tuina); ASCA/EMR claim |
| `/de/about` | Mission/Werte (holistic + "wissenschaftliche Basis"); Ausbildung: TCM Bachelor/Master, kontinuierliche Weiterbildung, "evidenzbasierte Methoden"; Zertifizierungen: ASCA, EMR, LCC anerkannt, TCM-Fachverband Mitglied; Sprachen DE/EN/zh |
| `/de/services` | 6 services: Akupunktur, Chinesische Kräuter, Tuina, Schröpfen, Moxibustion, TCM Konsultation |
| `/de/symptoms` | 4 topics with one-line labels: Rückenschmerzen, Migräne, Stress & Schlaf, Verdauung; each linked to `/de/appointment` |
| `/de/contact` | Address Schaffhauserstrasse 466; **Telefon 043 300 9932 / 078 790 88 69**; hours Mo–Fr 09–18, Sa n.V., So closed; "ASCA / EMR / LCC anerkannt" |
| `/en/contact` | **Different phone numbers: 078 789 8887 / 043 300 9712** ⚠ |
| All pages | Footer: "© 2025 Powered by Tubban.com Agentic AI Services" (third-party builder credit) |

## 2. Where the old content now lives

| Old content | New location | Status |
|---|---|---|
| Symptoms page (4 topics) | `/de/beschwerden/` · `/en/symptoms/` · `/zh/changjian-jiankang-wenti/` | **Live** (drafts flagged `REVIEW-MIN-TC`) |
| "Transparente Behandlungsprozesse" | First Visit page — now a 4-step arc (intake → TCM assessment → first treatment & planning → **Verlauf & Folgetermine**) | **Live** |
| ICD-11 dossier claim | **Not published** — draft subsection for "Über Min" in `docs/CLIENT-FINAL-REVIEW.md` §6 | Pending Min's confirmation |
| AI health-analysis claim | **Not published** — draft alongside ICD-11 subsection, same doc | Pending Min's confirmation |
| Bachelor/Master, ASCA, LCC | **Not published** — recorded as unverified in review doc | Pending proof/confirmation |
| Old treatments | Covered by existing 9-method Treatments page | Live |
| Contact/hours | Landline added site-wide; hours conflict kept in approval table | Live + pending |

## 3. The four Symptoms topics

1. Rückenschmerzen / Back Pain / 背部疼痛 — icon `stretch-horizontal`
2. Migräne / Migraine / 偏头痛 — icon `brain`
3. Stress & Schlaf / Stress & Sleep / 压力与睡眠 — icon `moon`
4. Verdauungsbeschwerden / Digestion / 消化问题 — icon `salad`

Each numbered editorial row: concern description + neutral "In der TCM-Beratung:" note + link to booking. The old site supplied topic labels only; all descriptive copy is **new draft** flagged `REVIEW-MIN-TC` on every locale. No cure promises, no clinical evidence, no invented outcomes. Closing = consultation CTA + link to the nine treatment methods.

## 4. ICD-11 review requirements (NOT in public build)

Draft subsection — proposed placement: **Über Min** (or Erster Besuch), titled
DE *"Digitale Dokumentation in der Praxis"* · EN *"Digital Documentation at the Practice"* · ZH *"诊所数字化记录"*.

Min must confirm before publication:
- Is the system still in use?
- Its actual product name
- How ICD-11 coding is used
- Whether it stores clinical information
- Which service provider processes the data
- Whether patient data leaves Switzerland
- Whether the Privacy Policy covers it

## 5. AI review requirements (NOT in public build)

Draft linked to the ICD-11 subsection, titled DE *"KI-gestützte Gesundheitsanalyse"* · EN *"AI-assisted health analysis"* · ZH *"人工智能辅助健康分析"*.

Min must confirm: which AI software, which tasks, whether patient health data is processed, whether data is shared with outside services, how Min reviews output, whether the feature is currently active.
No AI tools/APIs were added to the site. The old claim "Schweizweit erstes ICD-11-basiertes … System" is **not** repeated.

## 6. Verified EMR details (now on Über Min)

- Landline **043 300 99 32** (tel:+41433009932)
- EMR registered **since October 2021** (kept separate from practice start 2021)
- Diploma title: **"Naturheilpraktikerin mit eidg. Diplom TCM"** (+ OdA AM certificates listed on EMR)
- Registered methods: Akupunktur · Anmo/Tuina · Elektroakupunktur · Ohrakupunktur · Moxibustion · Schröpfen · Chinesische Arzneitherapie
- Memberships: **TCM Fachverband** · **NVS**
- Rate CHF 150/h · children treated · facilities (barrier-free, lift, parking nearby, own rooms)
- Consultation languages DE/EN/zh — matches site claim

Unverified items from the old site kept OUT of the public page: ASCA, SBO-TCM, LCC, Bachelor/Master, "erste Schweiz" claims, "evidenzbasierte Methoden" wording.

## 7. Landline

| Field | Value | Source |
|---|---|---|
| Display | `043 300 99 32` | EMR profile |
| International | `+41 43 300 99 32` | derived |
| tel link | `tel:+41433009932` | — |

Central source: `src/data/site.js` (`PRACTICE.landline*`). Rendered on Contact page (Festnetz/Landline/固定电话 row), footer (click-to-call), booking-page phone fallback, mobile-menu call buttons.

## 8. Phone & hours conflicts — approval table

| Item | New site | Old site DE | Old site EN | EMR | Business card |
|---|---|---|---|---|---|
| Landline | 043 300 99 32 | 043 300 99 32 | **043 300 97 12** ⚠ | 043 300 99 32 | — |
| Mobile | +41 78 899 92 88 [CONFIRM] | 078 790 88 69 | **078 789 8887** ⚠ | — | 078 790 88 69 |
| Weekday hours | 09:00–18:00 | 09:00–18:00 | 09:00–18:00 | **08:00–12:00 / 13:30–20:00** | — |
| Hourly rate | CHF 140–160 (Richtwert) | — | — | CHF 150 | — |

→ Min picks the public values before launch (see CLIENT-FINAL-REVIEW.md). Hours were **not** silently changed.

## 9. Content needing Min's approval

- All four Symptoms descriptions + consultation notes (new drafts, `REVIEW-MIN-TC` markers, zh also `REVIEW-MIN-ZH-CN`)
- ICD-11 subsection draft · AI subsection draft (§4–§5 — kept off public pages)
- Mobile number, weekday hours, hourly rate (conflict table §8)
- ASCA / SBO-TCM / LCC / Bachelor-Master claims
- New first-visit step 4 zh copy
- New barrier-free-access transit item (EMR-verified)

## 10. Route & navigation changes

- `src/data/routes.js`: `symptoms` route added (de/en/zh slugs), `NAV` entry after Behandlungen, `drawerLinks` updated (mobile menu), landline/mobile labels
- `src/data/meta.json`, `src/data/cta.js`, `src/data/symptoms.js` (new), `src/data/home.js` (`HOME_CONCERNS`)
- `SubPage.astro`: symptoms render block (pillar rows) + booking landline fallback button
- `HomePage.astro`: slim "Häufige Beschwerden" link under treatments index (no cards)
- `Icon.astro`: +accessibility, brain, moon, salad, stretch-horizontal
- `ContactDetails`/`Footer`/`MobileMenu`: landline + mobile tel: links from `PRACTICE`
- `practitioner.js`: EMR-verified credentials (confirmed flag suppresses [CONFIRM] badge)
- `firstVisit.js`: +step 4 "Verlauf & Folgetermine" (timeline auto-switches to 4-col)
- `contact.js`: Festnetz/Mobil labels + accessibility transit item
- `responsive.css`: header lang-switcher now hidden ≤767px (was ≤375 — toggle was off-viewport at 390px, **pre-existing bug, fixed**)
- Sitemap: 31 `<loc>` entries = 30 localized pages + root; 404 excluded. Build output: **32 pages**.

## 11. Test results (8 Nov 2026)

- `npm ci` → EPERM unlink on native binaries (mapped K: drive); `npm install` restored 247 pkgs successfully
- `npm run check` → **10 errors, all pre-existing** in `ContactMap.astro`/`HeroSlideshow.astro` script typings (unchanged files, unrelated to this work); 0 warnings
- `npm run build` → **32 pages** ✓
- `npm run test:e2e` → **82/82 pass** (incl. new `legacy-content.spec.js`: routes ×3, topics ×4, lang-switch parity, homepage link, landline tel: links, sitemap, no ICD-11/AI/ASCA claims in public build, 4-step first visit, maps gating, no horizontal overflow)
- Screenshots `docs/screenshots/legacy-content/`: symptoms ×3 locales × 1440/768/390 + contact, booking, mobile-menu
