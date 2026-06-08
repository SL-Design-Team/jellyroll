# Release notes

The live gallery is at <https://sl-design-team.github.io/jellyroll/>.

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
