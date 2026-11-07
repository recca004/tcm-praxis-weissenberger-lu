# Premium Design Review — TCM Praxis Weissenberger-Lu

Branch: `design/quiet-consultation` · Design exploration, not merged or published.
Goal: a calm, original, professional website that reflects Min's real practice — visual care of a custom build, not a template.

---

## 1. Audit of the current design (baseline on `main`)

Screenshots: `docs/screenshots/audit/*-1440.png`, `*-390.png` (before). Pages reviewed: Home, About, Treatments, First Visit, Prices, Booking, Contact at 1440 / 768 / 390.

**Findings**

- **Card monoculture.** Every section is the same white card (hairline + icon well + title + text + link): 6 treatment cards on home, 6 more on Treatments, 3 step cards, 3 pillar cards, 2 info cards. The whole site reads as one repeated component.
- **Uniform section rhythm.** eyebrow → H2 → lead → card grid, ~8 times per page → monotonous vertical pace.
- **Same green CTA banner on every page** (identical component) — noise that weakens the booking action.
- **Hero undersells.** Small 11:10 photo + a caption line under it; the image carries little presence.
- **Practitioner placeholder reads unfinished** — a large gray silhouette block occupying ~40% of the About hero panel.
- **Sparse photography.** Two stock photos site-wide; icon wells carry everything else → generic.
- **Booking widget embedded mid-homepage** — a heavy dark-green block forcing the 4-step demo into the main flow.
- **Trust strip** = dense 4-icon checklist bar, visually generic.
- **Bug:** fixed header clipped the sub-page eyebrow and "Zurück zur Startseite" link (missing top offset for non-home pages).
- **Type:** single sans at modest sizes; hierarchy by weight only — functional but not premium.

## 2. Reference findings (FleexStudio Dribbble shot 27783935)

Palette: warm cream `#F3ECDB`, dark brown ink, tan, amber CTA pills. What it does well and what transfers:

- **Serif editorial display type** (roman + italic accent) — the strongest transferable signal of "calm premium".
- **Photography-led trust**: full-bleed warm treatment-room imagery.
- **A statement/word-highlight section** as a dealt moment.
- Clear booking path (floating booking card).
- *Not transferred:* testimonials/review carousel (inventing reviews is banned by the project), yellow marquee band (too loud for this practice), stats row (no verified metrics to show).

## 3. Three directions (Stage 3 previews)

Previews in `design-explorations/` (local only, gitignored): shots `shots/{a,b,c}-1440.png` + `*-390.png`.

- **A — Quiet Consultation Room (built).** Serif display, framed 4:5 photography without caption, treatments as an editorial hairline index, serif statement between hairlines, honest labeled placeholders, quiet booking band.
- **B — Modern Apothecary.** Catalog/material character: specimen labels (N°01–06), photo thumbnails, stamp badges, chamomile panels. Characterful but busier; repeats photography; drifts toward boutique retail.
- **C — Understated Editorial.** Oversized serif type, full-bleed photo band, near-zero chrome. Elegant but reads magazine-first and starves the pragmatic content the patient needs above the fold.

**Selected: A.** It is the canonical DESIGN.md north star ("The Quiet Consultation Room") executed with more care — keeps the green/cream palette and tokens, keeps the eyebrow label device that the rest of the site uses, and converts the card-grid repetition into an editorial index without losing information density.

## 4. What was built (homepage)

- **Typography:** self-hosted **Source Serif 4** (declared in tokens, now with a real use) drives `h1`/`h2`, serif numerals, the statement, index titles — weight 400–500. Chinese pages fall through to the Noto TC stack automatically; body stays Source Sans 3.
- **Hero:** 1.1fr/0.9fr split, 4:5 framed photo, no caption (taste rule); approval badge overlaid inside the photo corner; **facts row** (4 trust facts, 2-col, hairline top) replaces the icon trust strip — same data, quieter delivery.
- **Statement moment:** one serif sentence between hairlines (existing approved copy, all locales — no invented claims).
- **Treatments:** editorial index — italic serif numerals 01–06, hairline rows, title → treatments page, action link → booking (`Termin anfragen` preserved).
- **Practitioner:** labeled 4:5 portrait placeholder (honest `[CONFIRM]`/`[Foto folgt]` badge kept) + serif title + dash-less credential list + language line + both links.
- **First Visit:** steps restyled editorial — large italic serif numerals, 2px ink top rule, no card.
- **Booking:** the 4-step widget was removed from the homepage and replaced by a quiet **booking band** (white panel, serif title, primary → `/…/termin-buchen/` + phone secondary). The full demo remains untouched on the booking page.
- **Bug fix:** `.page-top` clears the fixed header on all sub-pages (was clipped).
- Rest of pages unchanged; `h2` serif applies site-wide for consistency (visible on Prices/Treatments heads — verified).

## 5. Constraints honored

Astro, vanilla JS, trilingual content, Lucide icons, GSAP, Impeccable tokens (palette, spacing, radii, shadows) all kept. `[CONFIRM]` and `REVIEW-MIN-TC`/`Rev` markers preserved. No invented qualifications, testimonials, outcomes, or prices. Booking action remains the one green action per viewport. Reduced-motion contract unchanged (markup visible; GSAP enhances; failsafe list updated).

**Advisory-rule deviations (documented):**
- Impeccable craft-floor bans eyebrow kickers and section numbers — **kept deliberately**: DESIGN.md's canonical system defines the eyebrow label as its hierarchy device, and the numbered index is the chosen editorial signature; changing it would diverge the homepage from the other 8 pages.
- Taste "more real photographs" — capped by the project rule: only approved/`[CONFIRM]`-labeled imagery may ship; honest placeholders labeled instead.
- The photo approval badge sits *inside* the photo corner (not a caption): workflow label, required by "honest placeholders clearly labeled".

## 6. Test results (Stage 6)

- `npm run check`: **0 errors, 0 warnings** (21 hints, pre-existing style notes).
- `npm run build`: **29 pages, clean**.
- `npm run test:e2e`: **45/45 pass** (spec updated for new home structure: `.t-index-row` ×6, `.hero-fact` ×4, booking-band link instead of embedded widget; booking demo tests on `/de/termin-buchen/` unchanged).
- No horizontal scroll at 320/375/390/768/1024/1440. Reduced-motion test green.
- Before/after shots: `docs/screenshots/audit/` (home, about, treatments, prices, booking, contact at 1440/768/390; `after-*` = new design).

## 7. Remaining issues / next steps

- Photography is still the same two stand-in images; the design has slots ready for approved clinic/portrait photography.
- Treatments/About/First-Visit pages still use the card pattern — extend the editorial index/steps treatment to subpages on approval.
- `zh` display face: serif falls to Noto Sans TC; consider Noto Serif TC subset if serif display is desired for Chinese.
- Statement copy is deliberately re-used approved text; a bespoke line needs Min's sign-off.
- Direction B/C previews remain in `design-explorations/` (local only).
