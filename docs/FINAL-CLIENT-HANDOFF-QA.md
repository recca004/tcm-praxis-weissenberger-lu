# Final Client Handoff QA
Date: 2026-11-08 · Branch: feature/final-client-handoff-qa

## Fixes applied this pass
1. **Insurance wording (home + prices data)**: removed broad "most insurers reimburse
   a substantial portion" claim in EN/ZH; DE/EN/ZH now state coverage depends on the
   individual VVG policy — confirm with insurer.
2. **Contact form**: demo-only notice now a visible callout (chamomile left border)
   shown BEFORE typing; submit feedback keeps the typed text (no form.reset) and adds
   a mailto link to info@tcm-weissenberger-lu.ch.
3. **Booking accessibility**: treatment choice cards converted from clickable <div>
   to semantic <button aria-pressed>; step bar loses incomplete tab roles, uses
   aria-current="step"; step titles h4→h2.
4. **Heading hierarchy**: sr-only H2s before Symptoms pillars + About pillars;
   InfoBlocks titles h3→h2; booking step titles h2. One H1 per page unchanged.
5. **Insurer preview**: ?preview-insurers only activates on localhost/127.0.0.1 —
   no public query access on the deployed preview.
6. **Images**: intrinsic width/height added (portrait 1417×945, waiting area 1500×987,
   diagnostic photo 1500×1000). Hero photo keeps fetchpriority=high; others lazy.
7. **Slideshow dots**: role="tablist" → role="group" (correct semantics for toggle
   buttons with aria-pressed); autoplay/pause/reduced-motion unchanged.
8. **GSAP**: unchanged this pass — hero entrance, section/row reveals, portrait,
   map fade verified calm, no layout shifts, reduced-motion + no-JS safe.
9. **Playwright**: workers: 4 (stability); all 105 e2e tests pass.

## Gates
- astro check: 0 errors · build: 32 pages · e2e: 105/105
- Custom audit script (audit-15k.mjs): 0 console errors, 0 layout overflows at
  1440/1024/768/390/320px across all 30 localized routes.

## Screenshots
test-results/audit-15k/ — full-page per page × desktop/tablet/mobile;
final-{booking,contact,symptoms,prices}-{desktop,mobile}.png after fixes.

## Remaining Min approvals (unchanged list)
- Mobile number (old site showed 078 790 88 69 vs draft +41 78 899 92 88)
- Opening hours incl. Sunday; final prices; diplomas/memberships list
- Insurer listing + logo permission (KPT/Mutuel fetched; CSS/SWICA/Sanitas/Visana files pending)
- Step-free access claim; ICD-11/AI features; zh review markers
- Redirect map ready in SEO-AUDIT-FINAL.md — for production launch only.
