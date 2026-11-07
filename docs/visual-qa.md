# Visual QA — Client Review Preview
Build: `npm run build` → `dist/` (27 pages, ~10kB gzip per page). Run: `npm run dev` → :3000.

## Screenshots (`.impeccable/shots/`)
- `de-home-1440-after.jpeg` — homepage desktop 1440px, post-fix (all content visible).
- `page-...16-57-35.jpeg` — homepage full page (earlier state).
- `page-...16-58-02.jpeg` — treatment cards mid-reveal.
- `page-...16-58-38.jpeg` — zh-Hant booking page at 375px.
- `page-...17-01-16.jpeg` — working mobile drawer (EN, 375px).

## Test matrix (all pass)
| Check | 320 | 375 | 768 | 1024 | 1440 |
|---|---|---|---|---|---|
| No horizontal scroll | ✓ | ✓ | ✓ | ✓ | ✓ |
| Header/drawer usable | ✓ | ✓ | ✓ | ✓ | n/a |
| All content visible | ✓ | ✓ | ✓ | ✓ | ✓ |

- Links: 39/39 internal refs 200 · Console: 0 errors · Reduced-motion: ✓
- Booking demo end-to-end: ✓ (demo notice always visible; no real submission)
- Language switching preserves route across all page triples.

## Still placeholder (client approval required — badged [CONFIRM])
Phone number(s), practitioner title/registrations (EMR/ASCA/SBO-TCM), prices & durations
(guideline 150–180 / 140–160 CHF shown only as pending ranges), portrait & clinic photos,
insurance wording, privacy/imprint text, and ALL zh-Hant medical copy (REVIEW-MIN-TC).
