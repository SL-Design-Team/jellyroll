---
name: jellyroll
description: "Implement any UI — components, screens, patterns, or data visualizations — using the live JellyRoll SnapLogic design system with pixel-perfect token fidelity. Use this skill whenever the user wants to build, create, implement, design, update, or style any UI in the SnapLogic product context: buttons, forms, modals, tables, nav, dashboards, AI interaction patterns, data viz. Also trigger for use the design system, SnapLogic design, JellyRoll, or any request to match SnapLogic's look and feel. Always fetch the live system before implementing." 
---

# JellyRoll Design System

**Your deliverable is a standalone HTML file** — a rendered UI that opens in a browser. Do not produce documentation, READMEs, or code explanations. Implement the UI the user described.

JellyRoll is SnapLogic's enterprise design system (106 components, patterns, and data viz). Study the token CSS and relevant preview HTML, then implement with fidelity.

## Workflow

### 1. Load the design system tokens and rules (run in parallel)

**If you are inside the `jellyroll-design-system` project directory**, read the local files directly — they are the same content as the live URLs:
- `colors_and_type.css` — all CSS tokens
- `README.md` — design rules and guidelines
- `preview/<name>.html` — component specs (use the index below to find the right ones)

**Otherwise**, fetch from the live site using `curl` via Bash — **never use WebFetch for these files**. WebFetch returns an AI-summarized reconstruction, not the real content, so you would be building against fake specs.

```bash
curl -s https://sl-design-team.github.io/jellyroll/colors_and_type.css
curl -s https://sl-design-team.github.io/jellyroll/README.md
curl -s https://sl-design-team.github.io/jellyroll/preview/<name>.html
```

Run the token CSS and README fetches in parallel, then fetch the preview files in parallel after identifying which ones you need.

### 2. Identify and fetch 2–5 relevant preview files

Use the index below to find the preview files that match what you're building. **This step is non-optional.** You may not implement any component before reading its preview HTML — your training knowledge of "what a header looks like" or "what a left nav looks like" is wrong for this system. The preview HTML is the spec for structure, spacing, states, and token usage.

Before writing any HTML, **print a one-line confirmation** of which preview files you fetched, for example:

> Fetched: `colors_and_type.css`, `components-global-header.html`, `components-left-nav.html`, `brand-logo.html`

If you cannot name the files you fetched, stop and fetch them — do not proceed from memory.

> **Always fetch `components-global-header` when building any screen with a top navigation bar.** The header background is `--sl-blue-1000` (not `--sl-blue-900`, not "dark blue from memory"). Read the file.
> **Always fetch `brand-logo` when rendering the SnapLogic brand mark.** Do NOT substitute a Lucide icon, an emoji, a colored square, or a made-up wordmark — the brand mark is a specific PNG hosted at the live URL (see Assets section below).
> **Always fetch `components-left-nav` when building any sidebar navigation.** The treatment, spacing, hover states, and selection style are specific to this system.

### 3. Produce the HTML file

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
