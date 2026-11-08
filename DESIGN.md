---
name: TCM Praxis Weissenberger-Lu
description: Calm, warm, trilingual website for a single-practitioner TCM clinic in Zürich-Seebach — "The Quiet Consultation Room".
colors:
  apothecary-green: "#28584E"
  apothecary-deep: "#1E433B"
  apothecary-light: "#3D7569"
  sage: "#799087"
  sage-wash: "#EBF0ED"
  rice-paper: "#FAF8F3"
  linen: "#F4F1EA"
  surface-white: "#FFFFFF"
  ink-green: "#24322D"
  muted-lichen: "#384C44"
  hairline: "#DCE4DF"
  hairline-soft: "#E8EFEA"
  chamomile: "#D9C7A7"
  chamomile-soft: "#F5EFE4"
  madder-red: "#A33D35"
  madder-wash: "#FCEEED"
  amber-clay: "#7A4500"
  amber-wash: "#FFF8E6"
  sage-badge: "#E3EDE8"
  sage-badge-ink: "#235449"
typography:
  display:
    fontFamily: "'Source Serif 4', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Georgia, serif"
    fontSize: "clamp(2.4rem, 4.6vw, 3.9rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Source Serif 4', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', Georgia, serif"
    fontSize: "2.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.62
    letterSpacing: "0em"
  action:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0em"
  label:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-10: "40px"
  space-12: "48px"
  space-16: "64px"
  space-20: "80px"
  space-24: "96px"
components:
  button-primary:
    backgroundColor: "{colors.apothecary-green}"
    textColor: "{colors.surface-white}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.apothecary-deep}"
    textColor: "{colors.surface-white}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.apothecary-deep}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.sage-wash}"
    textColor: "{colors.apothecary-deep}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-green}"
    typography: "{typography.action}"
    rounded: "{rounded.sm}"
    padding: "10px 15px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-green}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "32px"
  badge:
    backgroundColor: "{colors.sage-wash}"
    textColor: "{colors.apothecary-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  badge-confirm:
    backgroundColor: "{colors.amber-wash}"
    textColor: "{colors.amber-clay}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
---

# Design System: TCM Praxis Weissenberger-Lu

## Overview

**Creative North Star: "The Quiet Consultation Room"**

The site should feel like sitting across from Min in her practice: unhurried, warm, and precise. Nothing here is loud. The page breathes on a warm cream floor, surfaces rise in white with a hairline border and the softest green-tinted shadow, and a single deep botanical green carries every action and heading. Ornament is nearly absent; what remains — sage icon wells, a chamomile accent, gently rounded corners — reads as the apothecary cabinet, not the hospital corridor.

The editorial layer is led by Source Serif 4: hero headlines, section titles, the statement moment and the numbered treatment index are set in a quiet text serif, while body copy, navigation, forms and controls stay in Source Sans 3. The serif does the "consultation room" work — calm authority, print-like confidence — the sans does the "clinic admin" work.

Density is generous and calm. Components are **refined and restrained**: quiet surfaces, hairline borders, subtle state shifts — confidence through precision rather than weight or saturation. The palette is deliberately desaturated; type does most of the hierarchy work. Confirmed visual rejections: large-hospital or institutional stock aesthetics, hard drop shadows, saturated "wellness-brand" color, and anything that makes a one-person practice look like a clinic chain.

**Key Characteristics:**
- Warm cream page floor; white is reserved for content surfaces, never the page itself.
- One botanical green does all the work — CTAs, links, headings, selection states.
- Source Serif 4 leads display type (h1/h2, statement, index numerals); Source Sans 3 carries everything else.
- Hairline borders plus ambient quiet shadows; hover deepens the shadow, nothing more.
- Editorial numbered rows instead of card grids for treatments and process steps.
- Softly rounded corners (6–24 px) everywhere; pills only for toggles and step markers.
- Tabular numerals on every price and time.
- Trilingual by design: Latin type in Source Serif 4 / Source Sans 3, Chinese in a dedicated Traditional Chinese stack with its own line-height.

## Colors

A muted botanical palette on a warm paper floor — green is scarce and therefore meaningful.

### Primary
- **Apothecary Green** (#28584E): the brand voice. Primary buttons, links, active/selected states, eyebrows, the lang-switcher active pill, calendar and time-slot selection.
- **Apothecary Deep** (#1E433B): hover/focus state of the green, all heading color, the booking widget's header bar, CTA banners, the footer, skip link.
- **Apothecary Light** (#3D7569): the lifted mid-step of the green ramp — use only where a third green is genuinely needed between primary and deep.

### Secondary
- **Sage** (#799087): quiet decorative green for icon wells, accordion-open borders, hover borders on selectable cards, the serif italic index numerals — never small text (contrast).
- **Sage Wash** (#EBF0ED): the pale green tint for secondary hover fills, icon-well backgrounds, credential chips, notice-box backgrounds, selected service cards, alternate sections.

### Tertiary
- **Chamomile** (#D9C7A7): the warm beige accent — booking-header caption text on dark green, dashed borders on confirmation badges. Rare; it marks warmth and pending state.
- **Chamomile Soft** (#F5EFE4): the pale wash of the accent for supporting text on dark surfaces.

### Neutral
- **Rice Paper** (#FAF8F3): the page background and the unscrolled header's translucent base. The floor is never pure white.
- **Linen** (#F4F1EA): the subtle surface tint for hover rows, steps-bar fills, and quiet alternate sections.
- **Surface White** (#FFFFFF): cards, panels, dropdowns, form fields, the booking widget.
- **Ink Green** (#24322D): body text; a near-black with the green's hue in it, not neutral gray.
- **Muted Lichen** (#384C44): secondary text, captions, descriptions. Deepened from the original #52655E to hold ≥7:1 contrast on Rice Paper (WCAG AAA).
- **Hairline** (#DCE4DF): the standard 1 px border on cards, tables, inputs, accordions, index rows.
- **Hairline Soft** (#E8EFEA): the quieter interior divider (table row separators, booking summary rows).

### Status
- **Madder Red** (#A33D35) / **Madder Wash** (#FCEEED): form errors and required-field marks only.
- **Amber Clay** (#7A4500) / **Amber Wash** (#FFF8E6): unverified-fact `[CONFIRM]` badges, photo placeholder labels and the demo disclaimer banner. Deepened from #B26A00 for ≥7.5:1 contrast on Amber Wash.
- **Sage Badge** (#E3EDE8) / **Sage Badge Ink** (#235449): neutral informational badges.

### Named Rules
**The One Voice Rule.** Apothecary Green is the only action color and covers ≤10% of any screen. If a second element wants the green, demote it to secondary/ghost or sage — the rarity is what makes the booking button findable.

**The Warm Floor Rule.** The page floor is always Rice Paper cream. Pure white exists only on raised surfaces; never paint a full-bleed section `#FFFFFF` and never set a section background to pure gray.

## Typography

**Display Font:** Source Serif 4 — h1, h2, the statement moment, treatment-index titles and numerals, editorial step titles, pillar numerals. Weight 400–500, never bold; `-0.01em` letter-spacing. Chinese falls through to the TC stack inside `--font-display`.
**Body Font:** Source Sans 3 — all reading text, navigation, buttons, forms, tables, captions.
**Chinese Font:** Traditional Chinese is the binding commitment (zh-Hant); stack `'Noto Sans TC'`, `PingFang TC`, `Microsoft JhengHei`, `Heiti TC`, sans-serif at 1.75 line-height.
**Unused:** `JetBrains Mono` is declared but applied nowhere; keep it out of components unless a real use appears.

**Character:** a text serif at modest weights reads as calm clinical authority; headings are never heavier than 500 in serif, body never heavier than 400.

### Hierarchy
- **Display** (serif, 500, clamp 38–62 px, -0.01em, 1.12 lh): hero H1s only — one per page.
- **Headline** (serif, 500, 38 px, 1.2 lh): section H2s, always in Apothecary Deep.
- **Title** (sans, 600, 24 px, 1.3 lh): card titles, H3s.
- **Subtitle** (sans, 600, 20 px, 1.35 lh): H4s, booking step titles.
- **Lead** (400, 19 px, 1.55 lh, Muted Lichen): section intros beneath headlines.
- **Body** (400, 17 px, 1.62 lh): all reading text; long blocks constrained to the 760 px narrow container (~65–75 ch).
- **Action** (600, 15 px): buttons, nav links, card action links, time slots.
- **Label** (700, 13 px, +0.08em, uppercase): eyebrows, table headers, form labels (+0.04em), badges.
- **Chinese body** (same size, 1.75 lh): `html[lang="zh"]` bumps line-height and swaps the family; never force Latin metrics onto Chinese lines.

### Eyebrow policy
Eyebrows are used sparingly — the hero and genuinely new contexts get one. Sections whose headings already name the topic ("Individuelle TCM-Behandlungen", "Preise & Krankenkasse", "Häufig gestellte Fragen") carry no eyebrow. `SectionHeader` renders an eyebrow only when one is passed.

### Named Rules
**The Tabular Figures Rule.** Every price, duration, time slot, and phone number sets `font-variant-numeric: tabular-nums`. Figures in money and time never jitter.

**The One Display Rule.** Only the page's hero headline gets Display size. Section headlines stop at Headline; hierarchy comes from spacing and the serif/sans split, not from bigger type.

## Layout

An 8 px spacing grid (4 px half-step at `space-1`) over a 1200 px container, with long reading content on a 760 px narrow container and a 680 px cap for centered intro copy.

- **Containers:** `--container-max: 1200px` for all sections; `--container-narrow: 760px` for prose blocks and FAQ columns. Containers are margin-aligned (`width: min(100% - 2×24px, max)`), so left and right content edges are equal on every screen.
- **Hero:** fixed two-column grid `690px + 486px` (8+4 of a 12-col, 24 px gutter), `align-items: start`. On desktop (≥1025 px) the section holds `min-height: 100svh` — the hero owns the first screen with headline, lead, both CTAs and the 2×2 trust-facts block above the fold. Below 1024 px it stacks naturally with `min-height: auto` so nothing clips under the fixed header.
- **Hero image:** 4:5 portrait frame (`aspect-ratio: 4/5`), `border-radius-lg`, hairline border, card shadow, honest placeholder badge in the top-left corner.
- **Trust facts:** a quiet 2×2 hairline-topped block inside the hero column — name/credential, insurance, location/transit, languages. It replaces the old full-width trust strip.
- **Section rhythm:** major sections breathe `space-16` vertically (`space-10` on mobile); subtle sections (`section-subtle`, `section-sage`) are separated by hairlines, never by color blocks.
- **Editorial index:** treatments and process steps render as numbered hairline rows (`64px` numeral column + fluid title/description + action link), not card grids.
- **Booking band (home):** a single quiet `booking-band` panel — left-aligned heading, short copy, primary + phone-fallback buttons — instead of embedding the full widget on the homepage.
- **Header:** 76 px desktop / 64–68 px mobile, sticky, translucent Rice Paper (`rgba(250,248,243,0.94)` + backdrop blur) that turns near-white with a hairline bottom border and soft shadow on scroll.
- **Breakpoints:** collapse below 1024 px (drawer nav, stacked grids); single-column below 768 px; tightening pass at 375 px; design must survive 320 px without horizontal scroll.
- **Chinese pages** get wider line-height (1.75) and their own per-language spacing checks; do not assume Latin line counts.

## Elevation & Depth

**Ambient quiet shadows.** Soft, low-opacity, green-tinted shadows are always on for cards and panels — this is warmth, not lift. Hover deepens the same shadow rather than adding a new one; there are no hard black shadows and no flat-white-on-white surfaces.

### Shadow Vocabulary
- **Ambient** (`0 1px 3px rgba(36,50,45,0.04), 0 1px 2px rgba(36,50,45,0.02)`): resting state for timeline steps, price tables, small panels.
- **Card** (`0 4px 16px rgba(36,50,45,0.04), 0 1px 3px rgba(36,50,45,0.02)`): treatment cards, practitioner panel, booking widget, CTA banner, hero image frame.
- **Hover lift** (`0 10px 24px rgba(40,88,78,0.08), 0 2px 6px rgba(40,88,78,0.03)`): the only elevation increase, tint shifted to Apothecary Green.
- **Overlay** (`0 12px 32px rgba(36,50,45,0.12)`): dropdowns, popovers, the mobile drawer edge (`-8px 0 32px rgba(30,67,59,0.12)`).
- **Focus ring** (`0 0 0 3px rgba(40,88,78,0.12)` on inputs; `2px solid Apothecary Green, offset 3px` globally): state, not decoration.

### Named Rules
**The Quiet Shadow Rule.** All shadows use the ink/green hue (`rgba(36,50,45,…)` or `rgba(40,88,78,…)`), never `rgba(0,0,0,…)` above 0.12 opacity. Depth is felt, not seen.

## Shapes

Everything is softly rounded; nothing is sharp and nothing is a blob. Radius steps up with surface size — small elements take 6 px, cards 16 px, hero-scale containers 24 px.

- **6 px (sm):** buttons, inputs, badges, chips, time slots, notice boxes, calendar cells, skip link.
- **10 px (md):** accordions, icon wells, selectable service cards, demo banner, booking summary.
- **16 px (lg):** cards, price-table wrappers, hero image frame, portrait placeholder.
- **24 px (xl):** the three largest surfaces — practitioner panel, booking widget, CTA banner.
- **Pill (9999px):** language-switcher container and active thumb, step-number circles, nav indicator dots — toggles and markers only, never buttons or cards.
- **Borders:** 1 px Hairline on nearly every surface; 2 px only on selectable options (booking service cards), thickening to Apothecary Green when selected.

### Named Rules
**The Radius Ladder Rule.** Never mix radius steps inside one component family — a card and its inner elements step down the ladder (24 → 16 → 10 → 6), they never step up. Pills are for toggles, full stop.

## Motion & Interaction

Quiet micro-interactions only — the page is a clinic, not a showreel. `--transition-fast` (150 ms) and `--transition-base` (220 ms) on `cubic-bezier(0.16,1,0.3,1)` cover almost everything.

- **Buttons:** hover steps up — `translateY(-1px)` (48 px) or `-2px` (lg); press sinks — `translateY(1px) scale(0.985)` at 90 ms. Only under `(hover:hover) and (pointer:fine)`.
- **Linked cards / rows:** 2–4 px lift + shadow deepen + border to Sage; editorial index rows fill Linen instead of lifting.
- **Photography:** the hero image zooms `scale(1.02)` inside its masked frame on hover (600 ms ease-out).
- **Links:** card/index action links draw an underline (`background-size 0→100%`) and nudge their arrow 3 px.
- **Hero entrance:** one GSAP pass on load — content children rise 16 px staggered 80 ms; the photo scales in from 0.98. Never loops, never re-runs.
- **Dealt moment — word highlight:** the statement (`data-moment="word-highlight"`) splits into word spans that illuminate from 38 % ink to full Apothecary Deep as they cross the viewport middle, driven by a passive scroll listener (no ScrollTrigger, no scroll-jacking).
- **Reduced motion contract:** all content is visible by default — animation is enhancement only. Under `prefers-reduced-motion`, entrance animations are skipped and every statement word renders `is-on` at full ink immediately.
- **Forbidden:** ScrollTrigger or any scroll-linked hijack, loops, carousels, tilt, parallax, shaders/WebGL (this is a service page, not a tech page).

## Photography

- Only real or honestly labeled imagery. The hero photo is a warm consultation-room photograph labeled `Beispielfoto vor Freigabe` until Min approves final photography — the amber dashed-corner badge is the honest marker, never a caption.
- The practitioner portrait is a deliberate silhouette placeholder (`[Foto folgt nach Freigabe durch Min]`) — keep it, never fake a photo or a face.
- Frames are masked (`overflow: hidden`), hairline-bordered, `radius-lg`; aspect 4:5 hero portrait / 4:3 editorial / 16:11 tablet fallback.
- No stock-hospital, no props mood shots, no captions under images. Placement plan: `PHOTOGRAPHY-BRIEF.md`.

## Components

### Buttons
Refined and restrained — compact, confident, no drama.

- **Shape:** 6 px radius, `10px 20px` padding (sm: `6px 14px`; lg: `14px 28px`), Action type (600/15px), 44 px / 48 px (lg) min-height.
- **Primary:** Apothecary Green fill, white text; hover darkens to Apothecary Deep with a small lift shadow (`0 4px 12px rgba(40,88,78,0.2)`).
- **Secondary:** white fill, 1 px Hairline border, Apothecary Deep text; hover fills Sage Wash.
- **Outline:** transparent, 1 px Apothecary Green border; hover fills Apothecary Green + white text. Used for phone-fallback CTAs.
- **Text:** bare Apothecary Green link-styled button; hover deepens.
- **Interaction:** the step-and-press motion from the Motion section; focus uses the global green focus ring.
- **CTA wording:** one primary verb phrase everywhere — `Termin buchen` / `Book Appointment` / `預約就診`; phone fallbacks say `Telefonisch anfragen` (the number lives in `tel:` href, not the label).

### Badges & Chips
- **Style:** tiny uppercase Label type, `2px 8px` padding, 6 px radius.
- **Variants:** Sage Wash/Apothecary Deep (default, info), Amber Wash/Amber Clay (`[CONFIRM]` unverified-fact badge, 11 px), Sage Badge pair (info). Credential chips use Sage Wash at `4px 10px`.
- **Photo badge:** the hero/placeholder label sits *inside* the photo corner (top-left, dashed Chamomile border on Amber Wash at 94 % opacity) — never a caption row under the image.

### Cards & Editorial Rows
- **Treatment card:** white, 1 px Hairline, 16 px radius, `space-8` padding; sage icon well flips to Apothecary Green with white icon on hover; hover = ambient → lift shadow, border to Sage.
- **Treatment index row:** `01`-style serif italic sage numeral + serif title + hairline rule + green arrow link; hover fills Linen, arrow nudges. Used on the treatments page and homepage index.
- **Timeline / editorial steps:** serif italic numeral above a hairline, sans title + body — print-like process steps on First Visit and About.
- **Insurance/info card:** same card recipe with checklist rows of small green icons.
- **Portrait placeholder:** diagonal Linen→Sage Wash gradient panel, white silhouette circle — stands in until the approved photo lands; keep it, don't fake a photo.
- **Practitioner editorial (`pract-ed`):** same 690+486 grid as the hero — serif name/philosophy left, portrait slot right; credential list below with `[CONFIRM]` badges.

### Inputs / Fields
- **Style:** white fill, 1 px Hairline border, 6 px radius, `10px 15px` padding, Action-size text.
- **Focus:** border to Apothecary Green + `0 0 0 3px rgba(40,88,78,0.12)` ring; no default outline.
- **Labels:** uppercase Label style, Apothecary Deep; required marker in Madder Red; error text Madder Red at 13 px.

### Navigation
- **Header:** sticky translucent bar (see Layout); wordmark left, single-line links, lang switcher, primary CTA button right. Scrolled → near-white + hairline + soft shadow.
- **Lang switcher:** pill container (1 px Hairline, full radius) with DE/EN/中文 segments; active segment is a solid Apothecary Green pill with white text.
- **Mobile drawer:** slides from right, white surface, Overlay shadow; booking CTA sits first inside, then nav links, then language segments. When closed it is `visibility: hidden` — off-screen content never receives keyboard focus.
- **Accordion (FAQ):** stacked white items, 1 px Hairline, 10 px radius; open item's border shifts to Sage and the chevron rotates 180° to Apothecary Green; trigger hover fills Linen.

### Price Table
- White wrapper card (16 px radius, Ambient shadow); header row Sage Wash with uppercase Label in Apothecary Deep; rows separated by Hairline Soft; row hover fills Linen; prices always Tabular Figures; unconfirmed prices carry an Amber `[CONFIRM]` chip instead of a number.

### Booking Widget (signature)
The 4-step Amelia-shaped prototype — treat it as the most important surface on the site.

- **Frame:** white, 24 px radius, 1 px Hairline, Card shadow, max-width 860 px, centered.
- **Header bar:** solid Apothecary Deep; white title, Chamomile caption text; `Demo-Ablauf` badge on translucent white (always visible — the demo never pretends to book).
- **Steps bar:** Linen fill, tabs with 3 px transparent underline; active tab white + Apothecary Green underline; completed tabs Apothecary Deep text. Below 560 px the bar scrolls horizontally (`overflow-x: auto`, hidden scrollbar) so all four labels stay reachable.
- **Service select cards:** 2 px Hairline border, 10 px radius; hover → Sage border; selected → Apothecary Green border + Sage Wash fill.
- **Calendar cells / time slots:** small bordered cells (6 px radius); selected fills Apothecary Green with white bold numeral; disabled cells in a pale gray-green.
- **Summary panel (step 4):** Linen box with Hairline-Soft row separators; labels pinned to a 9 rem column; the Amber demo banner sits directly beneath it.
- **Nav row:** hairline top rule, `Zurück` secondary left / `Weiter` primary right; the final step hides `Weiter` entirely.

### CTA Banner
- Diagonal Apothecary Green → Apothecary Deep gradient, 24 px radius, left-aligned text with `space-12` vertical padding; white serif heading, Chamomile Soft paragraph, white primary button plus an outline phone fallback. The one place a gradient is allowed.

## Do's and Don'ts

### Do:
- **Do** keep Apothecary Green scarce — one primary action per viewport; everything else steps down to secondary, outline, or text styles.
- **Do** put every surface on Rice Paper cream and let white mean "card".
- **Do** pair the 1 px Hairline border with the Ambient shadow on every card — the border is what keeps the soft shadow from looking muddy.
- **Do** set prices, durations, times, and phone numbers in Tabular Figures.
- **Do** keep `[CONFIRM]` badges in the Amber pair until the client verifies the fact; the badge is a workflow tool, not a style choice.
- **Do** set h1/h2 and editorial titles in Source Serif 4 at weight 400–500; keep controls, nav and body in Source Sans 3.
- **Do** give Chinese pages their own stack and line-height (1.75), and ship Noto Sans TC once the zh-Hant re-translation lands.
- **Do** use the 2 px selectable-card pattern for any choice the user must commit to (service picker, future filters).
- **Do** keep the hero on a `min-height` — never a fixed `height` — so content always grows past the fold instead of clipping under the header.
- **Do** keep every animation skippable: content must be fully readable with JavaScript disabled and under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce a second accent color; Chamomile marks warmth and pending state only, never an action.
- **Don't** use hard or black drop shadows — depth is always green-tinted and low-opacity (≤0.12).
- **Don't** use Sage for small text or borders alone to signal errors; it's decorative and fails contrast at small sizes.
- **Don't** use the pill radius on buttons or cards — pills are for toggles and step markers.
- **Don't** apply gradients anywhere except the CTA banner (and the portrait placeholder's quiet two-tone).
- **Don't** ship Simplified glyphs on the Chinese pages — Traditional Chinese is binding (zh-Hant); update the font stack and copy together.
- **Don't** add stock-hospital or clinical-institution imagery; approved real photos or the labeled placeholder, nothing else.
- **Don't** put captions or description rows under images — approval labels sit inside the frame corner.
- **Don't** add scroll-linked animations, parallax or shader scenes — this is a service page; the word-highlight moment is the only scroll-aware effect.
