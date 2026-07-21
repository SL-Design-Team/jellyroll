# Release notes

The live gallery is at <https://sl-design-team.github.io/jellyroll/>.

## 2026-07-21 · Toast spec cleanup & Tree indentation

### Docs
- **Toast** spec reconciled after implementation questions:
  - **Tones** corrected to the real set — **info / success / warning / alert · loading** (the metadata had invented a "neutral" tone and omitted info + loading).
  - **Durations** resolved to the corroborated values: **3s** with no action, **10s** when there's an action link (auto-bump so action toasts don't vanish before they can be clicked), and **no timeout** while loading. The stray "5s / 8s" numbers are gone; the Undo pattern now reads **10s** (was inconsistently 8s in its metadata vs 10s in its spec).
  - **Countdown bar** documented as appearing **only on toasts that carry an action** — a deadline indicator on a purely informational toast manufactures false urgency.
  - **Loading tone is not user-dismissible** (no `×`) — it resolves in place into a success/alert toast; cancellable operations get an explicit `Cancel` action instead of overloading the `×`.
- **Tree / Tree-select** now share a single **24px per-level indentation step** (Tree `8/32/56`, Tree-select `12/36`); the checkbox is a fixed 12px leading inset, not a per-level delta (was an inconsistent 22px vs 26px). Fixed the stale Tree-select anatomy (claimed 16px/level).

### Fixes
- **Undo-toast** action pill now uses `--radius-sm` instead of `--field-radius` (identical 4px value; drops a dependency on a non-vendored semantic token).

## 2026-07-16 · Skeleton loaders & Designer loading state

### New components
- **Left nav skeleton** (Composed components) — a loading placeholder for the dark navigation rail. Uses white-alpha bands tuned to the navy surface rather than the light-grey Skeleton loader, which reads too bright on `--sl-blue-1000`. Expanded (icon + label bars) and minimized (icon circles) states, matching the real nav's geometry.

### Foundations
- **Skeleton tokens reworked and unified.** `--color-skeleton` is now **Grey-400** (`#C4CAD6`, light surfaces) and there's a new **`--color-skeleton-on-dark`** (`rgba(255,255,255,0.10)`, dark surfaces like the nav rail). The vestigial `--color-skeleton-pulse` (a gradient-sweep stop no component used) was removed. Every skeleton — the component, the chart loader, the nav skeleton, and the foundations demo — now shares one **2s opacity pulse** (`1 → 0.5 → 1`), disabled under `prefers-reduced-motion`.

### Components
- **Skeleton loader** gains an **on-dark variant** (`.sk.on-dark`) and an "On dark surface" example. Its metadata was corrected — it described a "Grey-200 · gradient sweep at 1500ms" that never matched the actual flat-pulse implementation.
- **Selection & skeleton** (Foundations) now demos both a light and a dark skeleton card and documents the two tokens.

### Docs
- **Global header** now documents the **combo loader bar** — the 5px teal → blue → teal gradient bar on the header's bottom edge that fills left→right over 4s while an inner band walks on a 1s loop for global loading.

### Off-gallery
- **Designer · Loading state** (`preview/templates-designer-loading.html`) — a full load-time treatment for the Designer: skeleton chrome around a canvas that centers the SnapLogic mark breathing in a soft halo, with a caption that cycles through what's loading and swaps in connector / toolbar glyphs. It is **kept out of the gallery catalog on purpose**: the gallery injects a preview's `<body>` inline and does not run head-level CSS/JS, so this page only animates when opened directly. Share the URL: `/preview/templates-designer-loading.html`.

## 2026-07-16 · Quiet in-cell Select for dense tables

### Components
- **Select** gains a **quiet** (borderless, in-cell) variant (`.sl-select--quiet`) for dense tables and editable cells. It reads as plain text with a subtle, always-visible chevron, then reveals a Grey-300 border + white fill on hover and the standard Teal-600 focus ring when open — the Select equivalent of the existing editable-cell affordance. This replaces the full bordered field in table cells, where repeating it down every row turned a column into a wall of boxes that competed with the data. No new tokens (reuses `--sl-grey-300`, `--field-border-focus`, `--ring-focus`, `--color-text-subtle`).
- **Table** now demos the quiet Select in the real interactive data table — the Snaplex column reads as data, not chrome, while keeping its sort and per-column filter working.

### Docs
- **Select** usage now points to the quiet variant for dense tables instead of a bordered field in every row.

### Components
- **Avatar group** now specs and demos the **overflow member-list popover**: click `+N` to open a white card (1px Grey-300 border, `radius-sm`, raised shadow, min-width 240px, no header) whose rows pair an xs avatar with the member's full name and a muted right-aligned presence label (**Inactive** where applicable), scrolling after ~5 rows. Wired with `aria-haspopup="dialog"` / `aria-expanded` / `aria-controls`; Escape closes and returns focus to the button.
- **Avatar group** individual avatars are now **keyboard-focusable** (`tabindex="0"`, `role="img"`) — focus shows the same name tooltip and teal focus ring as `+N`, so keyboard users can reach every name (previously only screen readers got them via `aria-label`).

### Fixes
- **Tooltip max-width corrected to 240px.** The CSS shipped `280px` while every doc, comment, and the "vs alt text" table said 240px; the CSS was the typo.
- **Tooltip width no longer collapses to the trigger.** Removed a dead `white-space: nowrap` (immediately overridden) and added `width: max-content`, so the bubble sizes to its content and wraps only past 240px instead of rendering one word per line.
- **Tooltip arrow documentation aligned.** The header comment's "6×4px triangle" now reads "5px triangle (renders 10×5px)," matching the CSS and metadata. The "vs alt text" table now says tooltips **cap** at 240px (wrapping, not truncating).
- **Rich tooltip** copy no longer implies a hard 2-line cap — it wraps within 320px; "~2 lines" is guidance only.

## 2026-07-08 · Selection controls spec cleanup

### Components
- **Radio and Checkbox** now share the same selection-control rules: 20px default controls, 16px dense controls for tables / trees / popovers, Grey-600 unselected borders, explicit disabled colors instead of opacity, and global Teal focus halos that layer on top of state.
- **Radio** now documents and draws error, selected-hover, selected-focus, and vertical / horizontal radio group layouts with semantic `fieldset` + `legend` treatment.
- **Checkbox** now draws error and focus variants, documents the 20px / 16px size tiers, and confirms there is no 14px tier.
- **Toggle** now matches its drawn geometry and product usage: small / default / large sizes, global focus halo, optional left/right labels and Off / On status text, solid Grey-700 / Blue-700 hover treatments, and `role="switch"` guidance.
- **Slider** now documents the supported base component: single-thumb only, disabled state, 28px visual height with a 44px hit area, subtle 150ms thumb-shadow transition, and optional label / unit / paired number input. Tick marks, value bubbles, and range sliders are no longer promised.

### Docs
- **Card** metadata no longer advertises an undocumented top media slot; the base Card remains header / body / footer slots only.

## 2026-06-11 · Time range selector + calendar consistency

### New components
- **Time range selector** (Composed components) — a segmented control of quick presets (`24h · 7d · 30d · 12mo`) with a trailing **More** segment. More opens a Menu with period-relative ranges (Last month, Last quarter) and **Custom range…**, which opens the two-month date-range calendar reused from Date picker. A non-preset choice moves selection onto the More segment, which then shows the active value with a caret. Small (24px) is the default size; default (30px) is available for roomier headers. Configurable from two segments up to five. Placement is context-driven: page header, upper-right outside a table, or inside the table actions row.

### Fixes
- **Calendar selection shape now matches Date picker.** The Calendar building block rendered the selected day as a rounded rectangle (`--radius-sm`); it's now the same 32px circle the Date picker uses, with circular range endpoints and a continuous Blue-100 range fill. Calendar, Date picker, and Time range selector now share one selection treatment.

### Docs
- **Spacing rule clarified in `CLAUDE.md`.** The 4-pt grid governs layout spacing between components; height-anchored component internals (e.g. button padding derived from fixed 40/36/28 heights) are exempt and must not be rounded to the grid.

## 2026-06-08 · Picker family + popup primitives

- **Picker family → Composed components.** Combobox, Select, Multi-select, and Tree select join Date picker in Composed components — each is a control wired to a popup built from another component (Menu / Calendar / tree), not a self-contained control.
- **New `Tree` building block** — the hierarchical-node primitive (expand/collapse, indentation, single- and multi-select) that Tree select composes.
- **New `Calendar` building block** — the month-grid primitive (today marker, single + range selection) that Date picker composes.
- The three popup primitives now all live in Building blocks: **Menu** (flat list), **Tree** (hierarchy), **Calendar** (dates).

## 2026-06-08 · Catalog refinements

- **Date picker** → Composed components. It composes a distinct Calendar widget on top of an input, unlike the list-backed pickers (Select, Combobox, Multi-select, Tree select), which remain single-control Building blocks.
- **Menu** → Building blocks. It's the action-list primitive itself, not an assembly of distinct components.
- **Field anatomy** and **Field states** are now nested under **Inputs** in the left nav. Presentation only — they remain standalone items in the grid, search, and `jellyroll.json`.

## 2026-06-08 · Agent-readable assets

Made JellyRoll easier for AI coding agents to read and consume. New `scripts/build-agent-assets.js` derives everything below from the catalog source of truth (`_data/items.js` + `_data/tokens.js`) — re-run it after editing the data.

### Generated
- **`llms.txt`** — an [llmstxt.org](https://llmstxt.org) index of the whole system: every component grouped by section with one-line descriptions and links. The recommended starting point for agents.
- **`jellyroll.json`** — the structured catalog: each asset's anatomy / options / usage / behaviors and token list as parseable JSON, so agents don't have to scrape HTML.
- **Inline metadata** — every preview now carries a `<script type="application/json" id="jellyroll-meta">` block in its `<head>` (inert in the gallery, readable by agents fetching the raw file).

### Hand-authored
- **`snippets/`** — chrome-free, copy-paste blocks (reusable CSS + canonical markup, with real `:hover` / `:active` / `:disabled` states). Starter set: Button, Card, Menu; more added incrementally.

### Docs
- README "For AI coding agents" and `CLAUDE.md` now point at `llms.txt`, `jellyroll.json`, and `snippets/`, and document the generator.

## 2026-06-08 · Design system updates

### Information architecture
- **Renamed two sections for clarity:** _Primitives_ → **Building blocks**, _Components_ → **Composed components**. Internal ids are unchanged, so existing links and anchors still work.
- **Added a one-line definition to every section**, surfaced in three places: under each grid section header, in the "What's in the system" landing strip, and as a hover tooltip on the sidebar section headers.
- **Re-categorized misfiled assets:**
  - _Avatar group_ and _File upload_ moved to **Composed components** (both are assembled from other building blocks).
  - _Card_ moved to **Building blocks** (it's the atomic surface, not an assembly).
- **Section order:** _Advanced editors_ moved down to just above _Templates_; **Templates is now the last section**. _Dataviz · Colors_ is no longer a standalone section — its palette items were **merged into Color**. All sections renumbered.
- **Color section:** _Color ramps_ now leads the section; the categorical / diverging / sequential palettes are labeled as **chart** palettes so their purpose is clear alongside the brand and semantic tokens.

### New components
- **Menu** — a light, on-canvas action menu (white surface, Grey-300 hairline, overlay shadow), distinct from the dark header dropdowns. Covers default/hover/selected/destructive/disabled items, group labels, dividers, and shortcuts, shown anchored to split buttons and "More" buttons.
- **Composed cards** — real cards (pipeline, stat, resource) assembled from the Card surface plus Buttons, Badge, and Avatar. The base **Card** asset was simplified to show only the bare surface, its states, and its slots.

### Buttons
- **Fixed** the primary button's hover gradient rendering a faint border/seam — the gradient now fills the full border box, so the fill and the transparent ghost border match.
- **Added a loading state** for all three variants (in-button spinner, `aria-busy`, `progress` cursor, width preserved).
- **Disabled buttons** now use the `not-allowed` cursor and respond to the real `[disabled]` attribute.
- Count/badge **chips now follow the hover/pressed color** instead of staying blue.
- Split-button triggers carry `aria-haspopup="menu"` and open the new Menu component.

### Gallery
- **Hardened the fallback preview iframe** used on `file://` — it now re-measures after icons/fonts load and uses a `ResizeObserver`, falling back to a viewport-height fit when the browser blocks measurement. (For full inline rendering with no embedded scroll, serve the site over HTTP.)
