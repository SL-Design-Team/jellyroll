# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running locally

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

No build step. All files are static HTML/CSS/JS. Open any file directly in a browser or serve from root.

## Publishing

Push to `main` and enable GitHub Pages from `main → / (root)`. The live site is at https://sl-design-team.github.io/jellyroll/.

## Architecture

This is a **static, no-framework design system gallery** for SnapLogic's JellyRoll design system. There is no build tool, no bundler, and no package.json.

### Core files

- **`index.html`** — Single-page gallery app. Reads `_data/items.js` and `_data/tokens.js` at runtime to build the left-hand nav and tile grid. Renders detail views inline (no iframes) with Anatomy / Options / Usage / Behaviors / Tokens sections.
- **`colors_and_type.css`** — The entire token system as CSS custom properties: 10 color ramps × 11 steps (`--sl-{hue}-{step}`), semantic tokens (`--color-text-*`, `--color-background-*`, `--color-border-*`, `--field-*`), spacing scale (`--space-{n}`), radii, shadows, typography scale, and AI state tokens. **This is the source of truth for all design tokens.**
- **`fonts.css`** — `@font-face` declarations for Acherus Grotesque (weights 200–900 WOFF2). Imported automatically by `colors_and_type.css`.
- **`_data/items.js`** — Catalog definition. Exports `window.JELLYROLL_DATA` with the full section/item tree, per-item taglines, and documentation content (anatomy, options, usage, behaviors). Adding a new preview card requires a new entry here.
- **`_data/tokens.js`** — Per-asset token lists. Exports `window.JELLYROLL_TOKENS` keyed by preview file path. Only assets listed here show a Tokens section in the detail view.

### Preview files (`preview/`)

113 standalone HTML cards, one per design asset. Each file:
- Links to `../colors_and_type.css` and `preview/card.css` (shared card chrome)
- Uses inline `<style>` for component-specific CSS
- Uses Lucide icons via `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js` (loaded only when needed)
- Is self-contained — no JS framework dependencies

The `index.html` gallery renders preview files by injecting their `<body>` content inline (not in an iframe).

### Icon libraries

- **Lucide** (CDN) — primary icon set, 24×24 SVG, `stroke="currentColor"`, 2px stroke. Used in all component previews.
- **Font Awesome 6** (CDN, loaded in `index.html`) — fallback for vendor logos and domain pictograms.

## Design token conventions

- Prefer **semantic tokens** (`--color-text-body`, `--color-background-primary`) over raw ramp variables in component code.
- Raw ramp tokens (`--sl-blue-600`) are for building new semantic tokens or one-off brand moments only.
- The **4-pt spacing grid** (`--space-1` = 4px through `--space-20` = 80px) governs **layout spacing** — the margin, padding, and gap *between* components and around them on a page. Use `--space-*` tokens here; never hardcode these values.
  - **Component-internal metrics are exempt.** A control's own padding is *derived* from a height-anchored sizing scale, not free layout space. Buttons anchor to fixed heights (lg 40 / md 36 / sm 28, all ×4); once height, line-height, and borders are fixed, the leftover vertical padding legitimately lands off-grid (e.g. md `6px 18px`, tertiary md `6px 10px`). **Do not round these to the grid** — it breaks the target height and Figma parity. Keep the inline height-math comment (`/* 36px */`) as the justification, or promote the values to component tokens (`--button-pad-y-md`). The grid is a layout contract, not a component-internals contract.
- **Primary brand color:** `--sl-blue-600` (#0841B4). Primary hover is the teal→blue gradient in `--color-background-primary-hover` — not a darker blue.
- **Focus rings:** always `box-shadow: 0 0 0 2px rgba(9,129,127,0.18)` with `border-color: var(--sl-teal-600)`.

## Content and visual rules

- **Sentence case everywhere.** Pills/tags = 10px ExtraBold UPPERCASE only.
- **No emoji** anywhere in the system.
- **No gradients in normal UI.** Reserved for the 6 product launcher icons, SnapGPT accent, and the brand gradient.
- **Lucide icons only** — never hardcode SVG paths that aren't from Lucide. Icon-only buttons require `aria-label`.
- Cards: white fill, 1px `--sl-grey-300` border (not shadow), `--radius-sm` (4px), 16px padding, `--shadow-raised`.
- Selection state uses thicker border (3px Blue-600), never background color alone.

## Adding a new preview card

1. Create `preview/{category}-{name}.html` following the pattern of existing previews (link `../colors_and_type.css` and `card.css`, inline component CSS in `<style>`).
2. Add an entry to `_data/items.js` under the appropriate section with `file`, `name`, `tagline`, and `meta` fields.
3. Optionally add a token list to `_data/tokens.js` keyed by the file path.
4. Run `node scripts/build-agent-assets.js` to regenerate the agent-readable assets (`jellyroll.json`, `llms.txt`, and the inline `<head>` metadata in each preview). Re-run this after any edit to `_data/items.js` or `_data/tokens.js`.

## Agent-readable assets (generated)

`scripts/build-agent-assets.js` derives these from `_data/items.js` + `_data/tokens.js` — never hand-edit them; edit the data and re-run the script:

- **`llms.txt`** — llmstxt.org index of the whole system (sections → components with taglines + links).
- **`jellyroll.json`** — structured catalog: every asset's anatomy/options/usage/behaviors + token list, as parseable JSON.
- **inline `<head>` metadata** — each `preview/*.html` gets a `<script type="application/json" id="jellyroll-meta">` block (inert in the gallery; readable by agents fetching raw HTML).
- **`snippets/<name>.html`** — hand-authored, chrome-free copy-paste blocks (not generated; a curated subset).

## For AI agents building with this system

Start at the index, then fetch the token CSS and the specific component you need:

```
https://sl-design-team.github.io/jellyroll/llms.txt            # index of every component
https://sl-design-team.github.io/jellyroll/jellyroll.json      # structured catalog + tokens
https://sl-design-team.github.io/jellyroll/colors_and_type.css # token source of truth
https://sl-design-team.github.io/jellyroll/preview/<name>.html # canonical full demo
https://sl-design-team.github.io/jellyroll/snippets/<name>.html # bare copy-paste block (subset)
```

The preview files are the canonical implementation reference — each one shows the exact CSS, token usage, and markup pattern for that component.
