# Contact Page Redesign — Privacy-Gated Google Maps — 8 Nov 2026

Branch: `design/contact-page-map` (from `design/visual-layout-polish` @ cf107a9). Not pushed, not merged, not published.

## Initial problems

- Reception photo floated between the details card and transit card with no grouping.
- No map — directions link only; page felt thin for a premium healthcare contact page.
- Loading Google Maps unconditionally would violate privacy-by-default expectations.

## Design decisions

- **Row 1:** practice details card + real reception photograph (16:10, desk+window crop) on the left; contact form on the right — photo is part of the practice info column, not an isolated block.
- **Row 2:** "So finden Sie uns in Zürich-Seebach" heading; 63/37 split — interactive map left, tram/bus/parking panel right.
- Mobile: single column, order details → form → photo → map → transit.

## ContactMap.astro

Reusable privacy-gated embed in `src/components/sections/ContactMap.astro`:
- Placeholder: Lucide map-pin, serif address, "Karte laden / Load map / 加载地图" button, localized consent note, "Open in Google Maps" external link (works with JS disabled).
- On click (vanilla JS, `{ once: true }`) the placeholder is replaced by the iframe with the supplied embed URL, `loading="lazy"`, `allowfullscreen`, `referrerpolicy="strict-origin-when-cross-origin"`, localized `title`.
- **No Google request before activation** — verified by request listener in e2e.
- Heights: 440px desktop, 340px mobile; radius-lg + hairline per DESIGN.md.
- Privacy policy draft: new section "4. Google Maps" (rights renumbered to 5), still under the client-review notice.

## Tests

`npm run check` 0 errors · `npm run build` 29 pages · `npm run test:e2e` **48/48** — includes new `contact-map.spec.js` (DE/EN/ZH: placeholder visible, zero Google requests pre-click, iframe + attrs post-click, external link works). Screenshots: `map-contact-*` (placeholder) and `map-contact-loaded-*` (activated) at 1440/768/390/320.

## Remaining approvals

- Phone number discrepancy still open (site +41 78 899 92 88 vs card 078 790 88 69 / 043 300 9932) — `[CONFIRM]` preserved.
- Privacy-policy §4 wording — client legal review (whole doc is marked draft).
- Reception photo approval — shown without badge (treated consistent with approved session photo set).

## Final commit

Final SHA: ef1f67d
