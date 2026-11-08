# Internal Final Report — release/client-review-final

## Changes
- Hero facts: diploma + languages removed → only insurance [CONFIRM] + location remain (2 items)
- HOMEPAGE_TRUST: languages item removed → 3 items
- Homepage About preview: credentials list + languages now About-only; heading → "Persönliche Betreuung mit Zeit für Sie" / "Personal Care, With Time to Listen" / «悉心守护 · 耐心倾听» [REVIEW-MIN-ZH-CN]
- practitioner.js: 15+ years → "Praxis seit 2021" + "EMR-registriert seit Oktober 2021"; EMR profile link added on About
- prices.js: 70–90% insurer claim replaced with neutral coverage wording (DE/EN/ZH)
- main.js: contact-form feedback now states the message was NOT sent + phone/email path
- Insurance carousel still gated (0 approved insurers)

## Sources
- EMR profile: https://emr.ch/de/therapeut/min.weissenberger-lu (registered Oct 2021, methods, languages, hours, CHF 150)
- Business card: mobile 078 790 88 69, landline 043 300 9932, "Dipl. TCM Therapeutin", 9 methods
- Live site: tcm-weissenberger-lu.ch

## Tests
npm run build: 29 pages · test:e2e: **62/62** incl. 7 new release regression tests (hero facts, no 15+, 2021/EMR on About, no creds on home preview, no 70-90%, form-not-sent, insurer gating)

## Open approvals → see CLIENT-FINAL-REVIEW.md table
