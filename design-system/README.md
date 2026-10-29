# Griffin Design System — Foundations

The visual source of truth for **porto-hermes**, derived from the design
language of [griffin.com](https://www.griffin.com/): a warm near-black
canvas, cream ink, a high-contrast serif that does the talking, grotesque
body text that stays out of the way, and uppercase mono labels that
structure everything. Strictly editorial. No hue — contrast, scale, and
whitespace carry the hierarchy.

All tokens live in [`tokens.css`](./tokens.css) as CSS custom properties
prefixed `--ds-`. Tailwind utilities are generated from them in
`app/globals.css` via `@theme inline`. Change a token here and it moves
everywhere.

---

## 1. Color

Darkness with temperature. The canvas is not pure black — it is a warm
near-black (`#0C0C0B`), and every surface above it steps a few degrees
lighter. Text is a single cream (`#F9F5EF`); hierarchy comes from opacity
ramps of warm gray, never from color.

| Token | Value | Role |
|---|---|---|
| `--ds-color-canvas` | `#0C0C0B` | Page background |
| `--ds-color-surface` | `#141312` | Cards, raised panels |
| `--ds-color-surface-2` | `#1A1918` | Nested surfaces, inputs |
| `--ds-color-surface-3` | `#262523` | Hover fills, chips |
| `--ds-color-ink` | `#F9F5EF` | Primary text |
| `--ds-color-ink-muted` | `#959089` | Secondary text |
| `--ds-color-ink-subtle` | `#514E4B` | Tertiary text, placeholders |
| `--ds-color-line` | `rgba(249,245,239,.10)` | Hairline borders |
| `--ds-color-accent` | `#E6E1D9` | Primary button fill |
| `--ds-color-accent-ink` | `#0C0C0B` | Text on accent |

**Rules.** One ink. Hairlines (10% cream) separate surfaces — never heavy
borders. The accent is simply "cream at full strength"; primary buttons
invert (cream fill, near-black text). Hover states lighten, never add hue.

## 2. Typography

Three voices with fixed jobs:

- **Display — Instrument Serif** (stands in for Griffin's Cambon).
  High contrast, light weight, tight tracking (`-0.02em`), line-height
  `1.02`. Used for the hero statement and section headings only. Never
  below 28px.
- **Body — Inter** (stands in for Söhne). Weight 300 for leads, 400 for
  running text, line-height 1.5. The 20px/28px lead is the default
  paragraph size.
- **Mono — JetBrains Mono** (stands in for Söhne Mono). Uppercase,
  `0.09em` tracking, 12px. Every label, eyebrow, nav item, button, and
  piece of metadata speaks in mono. This is the system's signature.

| Scale token | Size | Used for |
|---|---|---|
| `--ds-text-display-xl` | clamp(3rem→6.5rem) | Hero statement |
| `--ds-text-display-lg` | clamp(2.5rem→4.5rem) | Section headings |
| `--ds-text-display-md` | clamp(2rem→3rem) | Card group headings |
| `--ds-text-display-sm` | 1.75rem | Sub-headings |
| `--ds-text-body-lg` | 1.25rem/1.75rem | Lead paragraphs |
| `--ds-text-body` | 1rem/1.5rem | Running text |
| `--ds-text-label` | 0.75rem uppercase | Eyebrows, nav, buttons |
| `--ds-text-label-sm` | 0.6875rem uppercase | Meta, captions |
| `--ds-text-code` | 0.8125rem | Inline code, data |

**Rules.** The serif never shouts below display-sm. Mono labels are always
uppercase. Never set body copy in mono, never set headings in body sans.

## 3. Spacing

4px base. Section rhythm is 96px (`--ds-space-9`); the hero gets 192px of
headroom. The base gutter is 16px (`--ds-space-4`), doubling to 24px+ at
larger breakpoints. Scale: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192.

## 4. Layout

- `--ds-container: 75rem` (1200px) — the single page measure.
- `--ds-container-narrow: 48rem` — prose columns.
- `--ds-nav-h: 4.5rem` — fixed navigation height.
- Sections stack vertically with `--ds-section-y` padding and a hairline
  top rule. Numbered eyebrows (`01 — PROJECTS`) replace decorative
  dividers, Griffin-style.

## 5. Radii & elevation

Architecturally sharp: cards and panels use 2px (`--ds-radius-sm`) or
square corners. **Buttons are the only pills** (`--ds-radius-pill`) —
that single round shape marks everything clickable. Elevation is layered
near-black shadow plus the hairline border; surfaces separate by
lightness steps, not by heavy shadows.

## 6. Motion

Slow and weighted. Durations: 150ms (micro), 300ms (base), 600ms
(reveals). Easing: `cubic-bezier(0.22, 1, 0.36, 1)` — fast out, long
settle. The signature move is `.ds-reveal`: content fades up 24px as it
enters the viewport (IntersectionObserver). Nothing bounces, nothing
parallaxes. `prefers-reduced-motion` disables all of it.

## 7. Component vocabulary

Built from the tokens above, in `components/ui/`:

- **Button** — pill, mono uppercase 12px. Primary: cream fill / near-black
  ink. Secondary: transparent / cream ink / hairline border. Ghost: ink
  only. Sizes: sm, md, lg.
- **Card** — surface fill, hairline border, 2px radius, hover lifts
  border to 18% cream and translates -2px.
- **Badge / Tag** — mono uppercase pill, surface-3 fill, hairline border.
- **Section** — numbered mono eyebrow + serif heading + hairline rule.
- **Container** — the 1200px measure with responsive gutters.

## 8. Voice

The copy follows the type: confident, plain, present tense. Mono labels
are terse and factual (`SELECTED WORK — 2023→2026`). The serif makes one
claim per section and stops. Terminal heritage (`~/alip_rahman`,
`$ ./intro.sh`) survives as mono easter eggs — the old portfolio's
personality, re-typeset in the new system.
