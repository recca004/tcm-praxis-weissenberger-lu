# Contact Page Redesign — Final
Date: 2026-11-08 · feature/contact-seo-gsap-final

## Layout shipped
Eyebrow + H1 + lead (existing SectionHeader, unchanged) → two columns:
- LEFT: "Practice Details" (H2, open editorial — no card): name, address,
  landline 043 300 99 32, mobile [CONFIRM], email, hours. Underneath, small
  divider + "Public Transport & Parking" (H3) with Tram 14 / Bus 768 /
  blue-zone parking. The unconfirmed step-free access item is hidden
  (flagged `pending` in contact.js).
- RIGHT: "Send an Enquiry" form (existing card, labels, privacy note,
  demo-only feedback preserved).
- FULL WIDTH: "Find us in Zürich-Seebach" (H2) + privacy-gated map at
  100% content width — 460px desktop / 400px ≤1024 / 340px ≤640.
  Iframe fades in (0.5s, disabled under reduced-motion) after consent;
  same embed URL, localized title, "Open in Google Maps" link kept.

Removed: clinic-reception.webp from this page only (asset kept; still
referenced nowhere else — flagged as spare in audit doc).
Removed: .contact-map-row grid (dead CSS removed).

Mobile order verified at 320–1440px: details → transport → form → map;
no overflow, no nested cards.

Files: SubPage.astro, TransitCard.astro (card → inline list),
ContactMap.astro (is-loaded fade), contact.js (pending flag),
components.css (contact-cols, contact-transit, map heights).
Tests: tests/e2e/contact-final.spec.js (8 checks, all pass).
