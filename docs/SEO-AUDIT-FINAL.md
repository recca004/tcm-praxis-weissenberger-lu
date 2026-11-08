# Final SEO Audit — TCM Praxis Weissenberger-Lu
Date: 2026-11-08 · Branch: feature/contact-seo-gsap-final

## Central system
All SEO is generated once in `src/layouts/BaseLayout.astro` from
`src/data/seo.js` + `src/data/meta.json` — no per-page SEO code.

- Unique `<title>` + `meta description` per page × locale (30 pages).
- Canonical per page; `html lang` de-CH / en / zh-CN.
- Reciprocal hreflang: de-CH, en, zh-CN + x-default → /de/.
- robots.txt added (`Allow: /` + production sitemap URL).
- Sitemap: @astrojs/sitemap covers all 30 content routes.
- OG/Twitter cards: og:type website, site_name, title/desc, url,
  og:image clinic-room-orchids.webp 1500×1000, localized alt,
  og:locale (de_CH / en_GB / zh_CN) + alternates, twitter summary_large_image.
- Preview stays noindex,nofollow (meta injected by pages-base script at deploy).
- Production indexing stays OFF until Min approves + domain switch.

## JSON-LD (schema.org, one @graph per page)
- `MedicalBusiness` on all pages: name, url, telephone (landline +41 43 300 99 32 — EMR-verified),
  email, PostalAddress (Schaffhauserstrasse 466, 8052 Zürich, CH), GeoCoordinates from the published
  Maps embed, image, sameAs → official EMR profile.
- `BreadcrumbList` on all inner pages (localized labels).
- `Person` on About Min only (name, generic jobTitle, worksFor → #practice, EMR sameAs).
- Deliberately omitted (unconfirmed): openingHours, mobile, priceRange, ratings/reviews,
  medicalSpecialty, insurer partners, ASCA/SBO-TCM credential claims.

## Metadata fixes
- Booking page meta no longer claims a working booking service — describes the demo + landline.
- zh copy: "瑞士联邦认证中医师" → EMR-registered practitioner wording (title pending).
- de About desc: "Eidg. Diplomierte" removed (title wording still pending Min).

## H1 audit (automated, all pass)
30/30 pages = exactly one H1 (verified by tests/e2e/seo.spec.js). About page checked after
the visual-fix change — single H1 inside the biography column.

## Redirect map (prepared for production launch — NOT active)
| Old URL | New URL |
|---|---|
| /de → /de/ | /de/ |
| /de/about | /de/ueber-min/ |
| /de/services | /de/behandlungen/ |
| /de/symptoms | /de/beschwerden/ |
| /de/appointment | /de/termin-buchen/ |
| /de/contact | /de/kontakt/ |
| /en → /en/ | /en/ |
| /en/about | /en/about-min/ |
| /en/services | /en/treatments/ |
| /en/symptoms | /en/symptoms/ |
| /en/appointment | /en/book-appointment/ |
| /en/contact | /en/contact/ |
| /zh-CN | /zh/ |
| / (root) | /de/ |
All 301. Old site has no other indexed paths (checked /de,/en + all subpaths; /zh 404s, /zh-CN exists).
New pages not on old site (prices, first-visit, privacy, imprint) need no redirect.

## Google Business Profile — consistency checklist for Min
- [ ] Name: TCM Praxis Weissenberger-Lu (exact, no keyword suffixes)
- [ ] Address: Schaffhauserstrasse 466, 8052 Zürich (match site exactly)
- [ ] Phone: decide primary number — landline 043 300 99 32 is EMR-verified;
      old site showed mobile 078 790 88 69, new site drafts +41 78 899 92 88 — CONFLICT, confirm
- [ ] Website URL: https://www.tcm-weissenberger-lu.ch/de/
- [ ] Hours: confirm Mon–Fri 09:00–18:00, Sat by arrangement, Sun closed (old site listed Sunday closed)
- [ ] Category: Naturheilpraktiker / Acupuncturist equivalents
- [ ] Photos: reuse the approved clinic + portrait photos
- [ ] Do NOT copy unverified claims (ICD-11, AI analysis, ASCA/LCC) into the profile

## Local SEO findings
- NAP consistent across header/footer/contact/legal except mobile + hours (pending, documented).
- Landline, email, street address consistent everywhere.
- Internal links added: symptoms rows → booking; symptoms → treatments; about/contact cross-links exist.
- No district-doorway pages created (intentional).

## Performance (measured, local astro preview)
- /de/ desktop: load 77ms, TTFB 4ms, 14 resources, 413KB transfer.
- /de/kontakt/ desktop: load 41ms, 10 resources.
- Mobile /de/: load 70ms. LCP/CLS: no layout shift observed; hero image fetchpriority=high, lazy below fold.
- CJK subset nsasc-cjk.ttf verified: 811 CJK ideographs covering site copy.
