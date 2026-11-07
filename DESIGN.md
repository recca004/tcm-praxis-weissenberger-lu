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
  muted-lichen: "#52655E"
  hairline: "#DCE4DF"
  hairline-soft: "#E8EFEA"
  chamomile: "#D9C7A7"
  chamomile-soft: "#F5EFE4"
  madder-red: "#A33D35"
  madder-wash: "#FCEEED"
  amber-clay: "#B26A00"
  amber-wash: "#FFF8E6"
  sage-badge: "#E3EDE8"
  sage-badge-ink: "#235449"
typography:
  display:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "2.375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
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

Density is generous and calm. Components are **refined and restrained**: quiet surfaces, hairline borders, subtle state shifts — confidence through precision rather than weight or saturation. The palette is deliberately desaturated; type does most of the hierarchy work. Confirmed visual rejections: large-hospital or institutional stock aesthetics, hard drop shadows, saturated "wellness-brand" color, and anything that makes a one-person practice look like a clinic chain.

**Key Characteristics:**
- Warm cream page floor; white is reserved for content surfaces, never the page itself.
- One botanical green does all the work — CTAs, links, headings, selection states.
- Hairline borders plus ambient quiet shadows; hover deepens the shadow, nothing more.
- Softly rounded corners (6–24 px) everywhere; pills only for toggles and step markers.
- Tabular numerals on every price and time.
- Trilingual by design: Latin type in Source Sans 3, Chinese in a dedicated Noto stack with its own line-height.

## Colors

A muted botanical palette on a warm paper floor — green is scarce and therefore meaningful.

### Primary
- **Apothecary Green** (#28584E): the brand voice. Primary buttons, links, active/selected states, eyebrows, the lang-switcher active pill, calendar and time-slot selection.
- **Apothecary Deep** (#1E433B): hover/focus state of the green, all heading color, the booking widget's header bar, the footer, skip link.
- **Apothecary Light** (#3D7569): the lifted mid-step of the green ramp — use only where a third green is genuinely needed between primary and deep.

### Secondary
- **Sage** (#799087): quiet decorative green for icon wells, accordion-open borders, hover borders on selectable cards — never small text (contrast).
- **Sage Wash** (#EBF0ED): the pale green tint for secondary hover fills, icon-well backgrounds, credential chips, notice-box backgrounds, price-table headers, selected service cards.

### Tertiary
- **Chamomile** (#D9C7A7): the warm beige accent — booking-header caption text on dark green, skip-link focus outline, borders on warning banners. Rare; it marks warmth and pending state.
- **Chamomile Soft** (#F5EFE4): the pale wash of the accent for supporting text on dark surfaces.

### Neutral
- **Rice Paper** (#FAF8F3): the page background and the unscrolled header's translucent base. The floor is never pure white.
- **Linen** (#F4F1EA): the subtle surface tint for hover rows, steps-bar fills, and quiet alternate sections.
- **Surface White** (#FFFFFF): cards, panels, dropdowns, form fields, the booking widget.
- **Ink Green** (#24322D): body text; a near-black with the green's hue in it, not neutral gray.
- **Muted Lichen** (#52655E): secondary text, captions, descriptions.
- **Hairline** (#DCE4DF): the standard 1 px border on cards, tables, inputs, accordions.
- **Hairline Soft** (#E8EFEA): the quieter interior divider (table row separators).

### Status
- **Madder Red** (#A33D35) / **Madder Wash** (#FCEEED): form errors and required-field marks only.
- **Amber Clay** (#B26A00) / **Amber Wash** (#FFF8E6): unverified-fact `[CONFIRM]` badges and the demo disclaimer banner.
- **Sage Badge** (#E3EDE8) / **Sage Badge Ink** (#235449): neutral informational badges.

### Named Rules
**The One Voice Rule.** Apothecary Green is the only action color and covers ≤10% of any screen. If a second element wants the green, demote it to secondary/ghost or sage — the rarity is what makes the booking button findable.

**The Warm Floor Rule.** The page floor is always Rice Paper cream. Pure white exists only on raised surfaces; never paint a full-bleed section `#FFFFFF` and never set a section background to pure gray.

## Typography

**Display Font:** Source Sans 3 (with system sans fallback)
**Body Font:** Source Sans 3 (same family; hierarchy by size and weight, not face)
**Chinese Font:** Traditional Chinese is the binding commitment (zh-Hant); target stack `'Noto Sans TC'`, `PingFang TC`, `Microsoft JhengHei`, sans-serif. The incumbent code still loads Noto Sans SC + PingFang SC fallbacks — update before launch.
**Unused in code:** `Source Serif 4` and `JetBrains Mono` are declared as variables but applied nowhere; keep them out of components unless a real use appears.

**Character:** A single humanist sans at modest weights reads as calm competence; headings are never lighter than 600, body never heavier than 400.

### Hierarchy
- **Display** (600, clamp 36–52 px, -0.015em, 1.15 lh): hero H1s only — one per page.
- **Headline** (600, 38 px, 1.2 lh): section H2s, always in Apothecary Deep.
- **Title** (600, 24 px, 1.3 lh): card titles, H3s.
- **Subtitle** (600, 20 px, 1.35 lh): H4s, booking step titles.
- **Lead** (400, 19 px, 1.55 lh, Muted Lichen): section intros beneath headlines.
- **Body** (400, 17 px, 1.62 lh): all reading text; long blocks constrained to the 760 px narrow container (~65–75 ch).
- **Action** (600, 15 px): buttons, nav links, card action links, time slots.
- **Label** (700, 13 px, +0.08em, uppercase): eyebrows, table headers, form labels (+0.04em), badges.
- **Chinese body** (same size, 1.75 lh): `html[lang="zh"]` bumps line-height and swaps the family; never force Latin metrics onto Chinese lines.

### Named Rules
**The Tabular Figures Rule.** Every price, duration, time slot, and phone number sets `font-variant-numeric: tabular-nums`. Figures in money and time never jitter.

**The One Display Rule.** Only the page's hero headline gets Display size. Section headlines stop at Headline; hierarchy comes from spacing and the eyebrow label above, not from bigger type.

## Layout

An 8 px spacing grid (4 px half-step at `space-1`) over a 1200 px container, with long reading content on a 760 px narrow container and a 680 px cap for centered hero/intro copy.

- **Containers:** `--container-max: 1200px` for all sections; `--container-narrow: 760px` for prose blocks and FAQ columns.
- **Section rhythm:** major sections breathe `space-16`–`space-24` vertically; card grids gap `space-6`–`space-8`; inside cards, `space-8` padding.
- **Grids in use:** hero splits `1.15fr / 0.85fr` with `space-12` gap; treatment cards `repeat(3, 1fr)`; pairs `repeat(2, 1fr)`; footer `repeat(4, 1fr)`.
- **Header:** 76 px desktop / 64 px mobile, sticky, translucent Rice Paper (`rgba(250,248,243,0.94)` + backdrop blur) that turns near-white with a hairline bottom border and soft shadow on scroll.
- **Breakpoints:** collapse below 1024 px (drawer nav, stacked grids); single-column below 768 px; tightening pass at 375 px; design must survive 320 px without horizontal scroll.
- **Chinese pages** get wider line-height (1.75) and their own per-language spacing checks; do not assume Latin line counts.

## Elevation & Depth

**Ambient quiet shadows.** Soft, low-opacity, green-tinted shadows are always on for cards and panels — this is warmth, not lift. Hover deepens the same shadow rather than adding a new one; there are no hard black shadows and no flat-white-on-white surfaces.

### Shadow Vocabulary
- **Ambient** (`0 1px 3px rgba(36,50,45,0.04), 0 1px 2px rgba(36,50,45,0.02)`): resting state for timeline steps, price tables, small panels.
- **Card** (`0 4px 16px rgba(36,50,45,0.04), 0 1px 3px rgba(36,50,45,0.02)`): treatment cards, practitioner panel, booking widget, CTA banner.
- **Hover lift** (`0 10px 24px rgba(40,88,78,0.08), 0 2px 6px rgba(40,88,78,0.03)`): the only elevation increase, tint shifted to Apothecary Green.
- **Overlay** (`0 12px 32px rgba(36,50,45,0.12)`): dropdowns, popovers, the mobile drawer edge (`-8px 0 32px rgba(30,67,59,0.12)`).
- **Focus ring** (`0 0 0 3px rgba(40,88,78,0.12)` on inputs; `2px solid Apothecary Green, offset 3px` globally): state, not decoration.

### Named Rules
**The Quiet Shadow Rule.** All shadows use the ink/green hue (`rgba(36,50,45,…)` or `rgba(40,88,78,…)`), never `rgba(0,0,0,…)` above 0.12 opacity. Depth is felt, not seen.

## Shapes

Everything is softly rounded; nothing is sharp and nothing is a blob. Radius steps up with surface size — small elements take 6 px, cards 16 px, hero-scale containers 24 px.

- **6 px (sm):** buttons, inputs, badges, chips, time slots, notice boxes, calendar cells, skip link.
- **10 px (md):** accordions, icon wells, selectable service cards, demo banner.
- **16 px (lg):** cards, price-table wrappers, hero image frame.
- **24 px (xl):** the three largest surfaces — practitioner panel, booking widget, CTA banner.
- **Pill (9999px):** language-switcher container and active thumb, step-number circles, nav indicator dots — toggles and markers only, never buttons or cards.
- **Borders:** 1 px Hairline on nearly every surface; 2 px only on selectable options (booking service cards), thickening to Apothecary Green when selected.

### Named Rules
**The Radius Ladder Rule.** Never mix radius steps inside one component family — a card and its inner elements step down the ladder (24 → 16 → 10 → 6), they never step up. Pills are for toggles, full stop.

## Components

### Buttons
Refined and restrained — compact, confident, no drama.

- **Shape:** 6 px radius, `10px 20px` padding (sm: `6px 14px`; lg: `14px 28px`), Action type (600/15px).
- **Primary:** Apothecary Green fill, white text; hover darkens to Apothecary Deep with a small lift shadow (`0 4px 12px rgba(40,88,78,0.2)`).
- **Secondary:** white fill, 1 px Hairline border, Apothecary Deep text; hover fills Sage Wash.
- **Outline:** transparent, 1 px Hairline border; hover fills Apothecary Green + white text.
- **Text:** bare Apothecary Green link-styled button; hover deepens.
- All buttons ≥44 px effective touch height; focus uses the global green focus ring.

### Badges & Chips
- **Style:** tiny uppercase Label type, `2px 8px` padding, 6 px radius.
- **Variants:** Sage Wash/Apothecary Deep (default, info), Amber Wash/Amber Clay (`[CONFIRM]` unverified-fact badge, 11 px), Sage Badge pair (info). Credential chips use Sage Wash at `4px 10px`.

### Cards
- **Treatment card:** white, 1 px Hairline, 16 px radius, `space-8` padding; sage icon well flips to Apothecary Green with white icon on hover; hover = ambient → lift shadow, border to Sage.
- **Timeline step:** white card + numbered Apothecary Green circle (pill, white 700 numeral, small green shadow).
- **Insurance/info card:** same card recipe with checklist rows of small green icons.
- **Portrait placeholder:** diagonal Linen→Sage Wash gradient panel, white silhouette circle — stands in until the approved photo lands; keep it, don't fake a photo.

### Inputs / Fields
- **Style:** white fill, 1 px Hairline border, 6 px radius, `10px 15px` padding, Action-size text.
- **Focus:** border to Apothecary Green + `0 0 0 3px rgba(40,88,78,0.12)` ring; no default outline.
- **Labels:** uppercase Label style, Apothecary Deep; required marker in Madder Red; error text Madder Red at 13 px.

### Navigation
- **Header:** sticky translucent bar (see Layout); wordmark left, single-line links, lang switcher, primary CTA button right. Scrolled → near-white + hairline + soft shadow.
- **Lang switcher:** pill container (1 px Hairline, full radius) with DE/EN/中文 segments; active segment is a solid Apothecary Green pill with white text.
- **Mobile drawer:** slides from right, white surface, Overlay shadow; booking CTA sits first inside, then nav links, then language segments.
- **Accordion (FAQ):** stacked white items, 1 px Hairline, 10 px radius; open item's border shifts to Sage and the chevron rotates 180° to Apothecary Green; trigger hover fills Linen.

### Price Table
- White wrapper card (16 px radius, Ambient shadow); header row Sage Wash with uppercase Label in Apothecary Deep; rows separated by Hairline Soft; row hover fills Linen; prices always Tabular Figures.

### Booking Widget (signature)
The 4-step Amelia-shaped prototype — treat it as the most important surface on the site.

- **Frame:** white, 24 px radius, 1 px Hairline, Card shadow, max-width 860 px, centered.
- **Header bar:** solid Apothecary Deep; white title, Chamomile caption text.
- **Steps bar:** Linen fill, tabs with 3 px transparent underline; active tab white + Apothecary Green underline; completed tabs Apothecary Deep text.
- **Service select cards:** 2 px Hairline border, 10 px radius; hover → Sage border; selected → Apothecary Green border + Sage Wash fill.
- **Calendar cells / time slots:** small bordered cells (6 px radius); selected fills Apothecary Green with white bold numeral; disabled cells in a pale gray-green.
- **Demo banner:** Amber Wash fill, Chamomile border, Amber Clay text — always visible on the prototype flow.

### CTA Banner
- Diagonal Apothecary Green → Apothecary Deep gradient, 24 px radius, centered, `space-12` vertical padding; white heading, Chamomile Soft paragraph, primary white button plus a ghost-style phone fallback (30% white hairline → 10% white fill on hover). The one place a gradient is allowed.

## Do's and Don'ts

### Do:
- **Do** keep Apothecary Green scarce — one primary action per viewport; everything else steps down to secondary, outline, or text styles.
- **Do** put every surface on Rice Paper cream and let white mean "card".
- **Do** pair the 1 px Hairline border with the Ambient shadow on every card — the border is what keeps the soft shadow from looking muddy.
- **Do** set prices, durations, times, and phone numbers in Tabular Figures.
- **Do** keep `[CONFIRM]` badges in the Amber pair until the client verifies the fact; the badge is a workflow tool, not a style choice.
- **Do** give Chinese pages their own stack and line-height (1.75), and ship Noto Sans TC once the zh-Hant re-translation lands.
- **Do** use the 2 px selectable-card pattern for any choice the user must commit to (service picker, future filters).

### Don't:
- **Don't** introduce a second accent color; Chamomile marks warmth and pending state only, never an action.
- **Don't** use hard or black drop shadows — depth is always green-tinted and low-opacity (≤0.12).
- **Don't** use Sage for small text or borders alone to signal errors; it's decorative and fails contrast at small sizes.
- **Don't** use the pill radius on buttons or cards — pills are for toggles and step markers.
- **Don't** apply gradients anywhere except the CTA banner (and the portrait placeholder's quiet two-tone).
- **Don't** ship Simplified glyphs on the Chinese pages — Traditional Chinese is binding (zh-Hant); update the font stack and copy together.
- **Don't** add stock-hospital or clinical-institution imagery; approved real photos or the placeholder, nothing else.
