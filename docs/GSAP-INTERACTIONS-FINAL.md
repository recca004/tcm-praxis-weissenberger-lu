# GSAP & Interactions — Final Pass
Date: 2026-11-08 · feature/contact-seo-gsap-final

## What runs (gsap.matchMedia, no-preference only)
- Hero content staggered entrance (existing, kept): y16→0, 0.65s, power2.out.
- Section headers: one-time y14 entrance at top-88% (ScrollTrigger).
- .t-index-row / .pillar-row: batched one-time y12 reveal, 0.5s, stagger 60ms.
- About portrait (.pract-ed--about): y18, 0.7s once.
- Contact map: iframe opacity fade on load (CSS transition, GSAP not needed).
- Word-highlight statement moment kept as-is (class-driven, reduced-motion aware).

## Guardrails
- All motion via gsap.matchMedia('(prefers-reduced-motion: no-preference)') —
  zero tweens under reduced motion (e2e asserts no hidden/transformed leftovers).
- Everything tweens FROM hidden TO natural state: content fully visible with
  JS disabled (e2e no-JS test passes).
- No scroll hijack, no parallax, no scale(0), no letter animation; single
  gsap bundle via existing import; ScrollTrigger registered once.
- Slideshow, accordions, booking demo, mobile menu, language switch unchanged
  (all e2e still green — 99/99).
