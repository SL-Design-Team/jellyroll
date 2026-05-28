---
name: jellyroll
description: "Implement any UI — components, screens, patterns, or data visualizations — using the live JellyRoll SnapLogic design system with pixel-perfect token fidelity. Use this skill whenever the user wants to build, create, implement, design, update, or style any UI in the SnapLogic product context: buttons, forms, modals, tables, nav, dashboards, AI interaction patterns, data viz. Also trigger for use the design system, SnapLogic design, JellyRoll, or any request to match SnapLogic's look and feel. Always fetch the live system before implementing." 
---

# JellyRoll Design System

**Your deliverable is a standalone HTML file** — a rendered UI that opens in a browser. Do not produce documentation, READMEs, or code explanations. Implement the UI the user described.

JellyRoll is SnapLogic's enterprise design system. The two foundations below — the token CSS and the design rules — have been **pre-loaded for you** at command-invocation time. They are the authoritative source. Use them as-is; do not refetch, summarize, or substitute training knowledge for any value below.

---

## Token CSS (live)

The complete set of design tokens. Reference these CSS custom properties — never hardcode hex values or pixel measurements.

!`curl -s https://sl-design-team.github.io/jellyroll/colors_and_type.css`

---

## Design rules (live)

!`curl -s https://sl-design-team.github.io/jellyroll/README.md`

---

## Workflow

### 1. Identify and fetch the relevant preview files

The tokens and rules above give you the foundation. Now use the preview index below to find the 2–5 component spec files that match what the user is building, and fetch each one with curl:

```bash
curl -s https://sl-design-team.github.io/jellyroll/preview/<name>.html
```

**Never use WebFetch for these files** — it returns an AI-summarized reconstruction, not the real content. Always use `curl` via Bash. Run multiple fetches in parallel.

Use the index below to find the preview files that match what you're building. **This step is non-optional.** You may not implement any component before reading its preview HTML — your training knowledge of "what a header looks like" or "what a left nav looks like" is wrong for this system. The preview HTML is the spec for structure, spacing, states, and token usage.

Before writing any HTML, **print a one-line confirmation** of which preview files you fetched, for example:

> Fetched: `colors_and_type.css`, `components-global-header.html`, `components-left-nav.html`, `brand-logo.html`

If you cannot name the files you fetched, stop and fetch them — do not proceed from memory.

> **Always fetch `components-global-header` when building any screen with a top navigation bar.** The header background is `--sl-blue-1000` (not `--sl-blue-900`, not "dark blue from memory"). Read the file.
> **Always fetch `brand-logo` when rendering the SnapLogic brand mark.** Do NOT substitute a Lucide icon, an emoji, a colored square, or a made-up wordmark — the brand mark is a specific PNG hosted at the live URL (see Assets section below).
> **Always fetch `components-left-nav` when building any sidebar navigation.** The treatment, spacing, hover states, and selection style are specific to this system.

#### Default chrome — every full screen has header AND collapsible left nav

If the user asks for a **screen, page, app, dashboard, view, layout, workspace, or any full product canvas** (anything other than a single isolated component), default to the standard SnapLogic chrome:

1. **Global header** at the top — fetch `components-global-header.html`. The header is **never** just a logo + app name. Every header must include all of the following affordances, in this left-to-right order:
   1. **Brand** — logo mark (PNG at the absolute URL — see Assets) + app name
   2. **Environment picker** — `box` icon + environment name + `chevron-down`, with hover state
   3. Flex spacer
   4. **SnapGPT label** — "Snap" + gradient-text "GPT" affordance
   5. **Search** — `search` icon button (opens search overlay)
   6. **Notifications** — `bell` icon button with red dot indicator (opens notifications panel)
   7. **User menu** — circular avatar with user initial (opens user menu dropdown)
   8. **Product launcher** — 3×3 dot waffle grid (opens product launcher)
   9. **Combo loader bar** — 5px gradient hairline on the bottom edge

   Do not omit any of these. The header is canonical — if you ship a header with only the brand and avatar, the result is incomplete. Render every affordance even if the surrounding screen content is sparse.

2. **Collapsible left nav** along the side — fetch `components-left-nav.html`. The nav has two states per the preview spec:
   - **Expanded** (240px wide, default at desktop) — icons + labels
   - **Minimized** (56px wide) — icons only
   Include both states and a toggle control so the user can collapse/expand it. Default to the expanded state on first render.

3. **Main content area** with the requested content

The header + left nav are not optional embellishments — they're how SnapLogic product UIs are composed. Do not omit them just because the user didn't enumerate them. Do not ship a non-collapsible nav or a header missing affordances. Only skip or simplify the chrome if the user explicitly says one of:

- "just the `<component>`" / "only the `<component>`"
- "without the header" / "without the nav" / "without the chrome"
- "isolated" / "standalone component" / "just the card"
- "nav doesn't need to collapse" / "static nav"
- "minimal header" / "just the brand"

When in doubt, include the full chrome with all header affordances and a collapsible nav.

### 2. Produce the HTML file

- Use CSS custom properties from `colors_and_type.css` — never hardcode hex values
- Link or inline tokens so the file is self-contained:
  ```html
  <link rel="stylesheet" href="https://sl-design-team.github.io/jellyroll/colors_and_type.css" />
  <link rel="stylesheet" href="https://sl-design-team.github.io/jellyroll/fonts.css" />
  ```
  (When running locally inside the design system repo, replace with relative paths to the local files.)
- Use Lucide icons via CDN (`https://unpkg.com/lucide@latest`)
- Include hover, focus, active, and disabled states
- Follow the quick rules from the README (sentence case, no decorative gradients, border-based card selection, etc.)

### Assets — rewrite relative paths to absolute URLs

Preview files reference brand images via **relative paths** like `../assets/logo-white.png` or `url("../assets/logo-mark-white.png")`. These will NOT resolve in the dev's output environment. Every asset reference you copy from a preview file MUST be rewritten to its absolute URL on the live site:

| In the preview file | In your output |
|---|---|
| `src="../assets/logo-white.png"` | `src="https://sl-design-team.github.io/jellyroll/assets/logo-white.png"` |
| `src="../assets/logo-mark-white.png"` | `src="https://sl-design-team.github.io/jellyroll/assets/logo-mark-white.png"` |
| `url("../assets/logo-mark-white.png")` | `url("https://sl-design-team.github.io/jellyroll/assets/logo-mark-white.png")` |
| `src="../assets/snapgpt-icon.svg"` | `src="https://sl-design-team.github.io/jellyroll/assets/snapgpt-icon.svg"` |

**Never substitute a Lucide icon, emoji, generic SVG, or placeholder shape for the SnapLogic logo or brand mark.** If the image fails to load, leave it broken — do not invent a replacement. The available brand assets are:

- `logo-white.png` — full wordmark for dark backgrounds
- `logo-mark-white.png` — round mark only for dark backgrounds
- `snapgpt-icon.svg` — SnapGPT product icon
- `snapgpt-illustrator.svg` — SnapGPT illustration mark

---

## Preview file index

### Foundations
`type-scale` · `type-faces` · `spacing-scale` · `spacing-radius` · `spacing-shadows` · `foundations-tokens` · `foundations-motion` · `foundations-zindex` · `foundations-breakpoints` · `foundations-selection-skeleton`

### Color
`colors-all-ramps` · `colors-semantic-text` · `colors-surfaces` · `colors-gradient-brand`

### Brand
`brand-logo` · `brand-iconography` · `brand-launchers`

### Primitives
`components-buttons` · `components-inputs` · `components-badges` · `components-status` · `components-spinner` · `components-avatar` · `components-avatar-group` · `components-checkbox` · `components-radio` · `components-toggle` · `components-chip` · `components-slider` · `components-segmented-control` · `components-number` · `components-password` · `components-search-field` · `components-skeleton` · `components-stepper` · `components-notification-dot` · `components-broadcast-banner` · `components-product-launcher` · `components-user-menu` · `components-field-anatomy` · `components-field-states` · `components-multi-select` · `components-combobox` · `components-date-picker`

### Components
`components-card` · `components-modal` · `components-table` · `components-tabs` · `components-toast` · `components-global-header` · `components-left-nav` · `components-drawer` · `components-notifications` · `components-form-row` · `components-form-section` · `components-file-upload` · `components-dynamic-repeater` · `components-key-value-editor` · `components-search-overlay` · `components-tree-select` · `components-select` · `components-env-picker` · `components-connection-picker`

### Advanced editors
`components-code-editor` · `components-json-editor` · `components-schema-builder` · `components-api-param-builder`

### Patterns
`patterns-form-validation` · `patterns-save-discard` · `patterns-empty-states` · `patterns-error-states` · `patterns-ai-assisted-input` · `patterns-editable-ai-output` · `patterns-ai-confidence` · `patterns-bulk-selection` · `patterns-drag-drop` · `patterns-filter-sort` · `patterns-inline-editing` · `patterns-keyboard-shortcuts` · `patterns-pagination` · `patterns-destructive-confirm` · `patterns-undo-toast` · `patterns-wizard` · `patterns-drawer-snapgpt`

### Data visualization
`dataviz-kpi` · `dataviz-sparkline` · `dataviz-timeseries` · `dataviz-bar` · `dataviz-stacked` · `dataviz-histogram` · `dataviz-donut` · `dataviz-categorical` · `dataviz-diverging` · `dataviz-gauge` · `dataviz-gantt` · `dataviz-calendar` · `dataviz-heatmap` · `dataviz-sankey` · `dataviz-network` · `dataviz-sequential` · `dataviz-combo` · `dataviz-usage` · `dataviz-status` · `dataviz-loading` · `dataviz-empty` · `dataviz-hive-plot`
