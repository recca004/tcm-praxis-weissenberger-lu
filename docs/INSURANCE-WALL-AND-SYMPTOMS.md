# Insurance Logo Wall & Extended Symptoms
Date: 2026-11-08 · Branch: feature/insurance-wall-extended-symptoms

## Insurer logo wall
- Two looping rows (~58s/cycle, row 2 reversed), soft grey (grayscale+opacity),
  full colour on hover/focus, pause on hover/focus + accessible pause button.
- Mobile (<900px): static, manual horizontal scroll, no autoplay.
- Reduced motion: fully static, duplicate track removed.
- Duplicate tracks: aria-hidden, tabindex=-1 (verified in e2e).
- PUBLIC RENDER GATE unchanged: only `approved && logo` entries show. With zero
  approvals the wall is inert (display:none, images carry data-src → never fetched).
- Internal design preview: open any page with `?preview-insurers` — shows the
  wall with a labelled "INTERNAL DESIGN PREVIEW" banner.

## Logo assets (public/assets/insurers/)
| Insurer | File | Source | Status |
|---|---|---|---|
| KPT | kpt.svg | kpt.ch official header SVG | fetched — usage permission pending Min |
| Groupe Mutuel | mutuel.svg | groupemutuel.ch official SVG | fetched — permission pending |
| CSS / SWICA / Sanitas / Visana | — | official brand kits | asset pending (logoPending:true) |
Missing logos render as clearly-marked "(Logo offen)" name slots in preview only.
No invented graphics, no font-recreated brands, no hotlinks.

## Symptoms — extended topics (Helsana + NCCIH sources)
Four groups below the existing four rows, light list style (no cards):
- Pain & Movement (8): headaches, joint pain, neck/spinal, musculoskeletal,
  sprains, muscle/tendon injuries, tendinitis, bursitis
- Sleep/Energy/Wellbeing (7): sleep problems, stress, burnout, daytime
  sleepiness, fatigue, concentration, mood
- Allergies & Breathing (2): allergic conditions, asthma (marked complementary)
- Further topics (4): neurological (medically assessed only), psychosomatic,
  smoking cessation (supportive), childbirth prep (by arrangement)
Plus neutral disclaimer + links to treatments page, Helsana and NCCIH.
REVIEW markers on the section for Min's clinical review.
One H1 kept; meta descriptions lightly extended with "Akupunktur" terms.

## Tests: 105/105 pass (incl. 6 new wall/symptoms specs)
Screenshots: test-results/final-pass/insurer-wall-*, symptoms-de-*.
