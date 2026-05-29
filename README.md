# JellyRoll · SnapLogic Design System 2.0

The design system for **SnapLogic** — an enterprise iPaaS for connecting applications, data, and AI agents. JellyRoll is the source of truth for Designer, Admin Manager, Monitor, AutoSync, APIM, and the Pattern Catalog.

## For AI coding agents

### Claude Code slash command (recommended)

Copy `.claude/commands/jellyroll.md` and `.claude/commands/jellyroll-setup.md` from this repo into your **global** commands folder (`~/.claude/commands/`). The commands then work in any project.

**One-time setup** — the skill fetches live tokens via `curl` and needs permission to do so silently. Run this once after copying the files:

```
/jellyroll-setup
```

This adds the required allow rule to `~/.claude/settings.json`. You only need to do it once across all your projects. If you prefer to add it manually:

```json
// ~/.claude/settings.json
{
  "permissions": {
    "allow": [
      "Bash(curl -s https://sl-design-team.github.io/jellyroll/*)"
    ]
  }
}
```

Then in any Claude Code session:

```
/jellyroll <describe what you want built>
```

The command loads the full preview file index, fetches the live token CSS and relevant component specs, and produces a standalone HTML file with pixel-fidelity to the design system. No URL wrangling required.

### Manual prompt (Cursor, Copilot, other agents)

The design system is published live from [`SL-Design-Team/jellyroll`](https://github.com/SL-Design-Team/jellyroll) — the repo is the source of truth, not a frozen export. Any AI coding agent that can fetch URLs can pull the agent-oriented context with this prompt:

```
Read the JellyRoll design system at https://sl-design-team.github.io/jellyroll/README.md,
then fetch the token CSS at https://sl-design-team.github.io/jellyroll/colors_and_type.css
and any preview files at https://sl-design-team.github.io/jellyroll/preview/<name>.html that
relate to what you're building.
Implement: <describe what you want built>
```

The repo includes the full token CSS, every preview HTML file (inline styles + Lucide icon usage), the Acherus Grotesque webfonts, and brand assets. Browse the rendered gallery at <https://sl-design-team.github.io/jellyroll/> to see component names + previews; each tile's URL maps directly to a fetchable file under `/preview/`.

Because the source of truth is the live repo, what you fetch is always current — no stale tarball drift.

## Browse

Open `index.html` in any browser, or run a quick local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

The gallery lists 106 design assets — foundations, color ramps, brand, primitives, components, advanced editors, patterns, the Designer template, and data-visualization charts. A left-hand accordion lists every asset under its category; a top-of-sidebar search filters both the nav and the grid. Click any tile to open its detail page — the preview renders inline (no iframes), alongside the Adobe Spectrum-style Anatomy / Options / Usage guidelines / Behaviors / Tokens sections.

If you want to publish this on GitHub Pages, push to a repo and enable Pages from `main` → `/ (root)`. No build step required — it's all static HTML/CSS + Acherus Grotesque webfonts.

## Use the tokens in your project

Drop `colors_and_type.css` and `fonts.css` (with the `fonts/` directory) into your app, then `@import` or `<link>` the stylesheet:

```html
<link rel="stylesheet" href="/jellyroll/colors_and_type.css" />
```

This gives you every JellyRoll token as a CSS custom property — color ramps, semantic colors, spacing, radii, shadows, the type scale, and ready-made type recipes (`.sl-body`, `.sl-pill`, `h1`–`h6`, etc.):

```css
.my-button {
  background: var(--sl-blue-600);
  color: var(--sl-white);
  border-radius: var(--radius-sm);
  padding: var(--space-2) var(--space-6);
  font: 800 14px/22px var(--font-sans);
}
.my-button:hover {
  background: var(--color-background-primary-hover); /* teal→blue gradient */
}
```

### Quick rules

- **Primary brand:** `--sl-blue-600` (`#0841B4`). Primary hover is the **teal→blue gradient** in `--color-background-primary-hover` — distinctive, not a darker blue. Pressed = `--sl-teal-400`.
- **Secondary buttons:** white fill; on hover only the border + text shift blue → teal.
- **Body text:** `--color-text-body` (`#031A48`, dark navy). Subtle text: `--color-text-subtle` (`#7D8695`).
- **Cards:** white, 1px Grey-300 border, 4px radius, 16px padding, `--shadow-raised`. Borders — not shadow — indicate selection (1px → 1.5px on hover → 3px when selected).
- **Sentence case** everywhere. Pills/tags = 10px ExtraBold UPPERCASE only.
- **No emoji.** Icons via [Lucide](https://lucide.dev) CDN; Font Awesome 6 as a fallback for vendor logos and domain pictograms.
- **No gradients in normal UI.** Reserved for the 6 product launcher icons + SnapGPT accent + the brand gradient.

The full visual + content guidelines lived in the agent-oriented bundle README — preserved in the project history if you need the long version (voice, tone, casing, surfaces & elevation, animation, iconography rules).

## Structure

```
jellyroll-design-system/
├── index.html              # SPA gallery — Getting Started, categories, detail view, search
├── _data/
│   ├── items.js            # Catalog: category structure, taglines, usage + behaviors per item
│   └── tokens.js           # Per-item token lists (rendered in the Tokens section)
├── colors_and_type.css     # Full token system (drop-in CSS variables)
├── fonts.css               # @font-face for Acherus Grotesque
├── fonts/                  # Acherus Grotesque WOFF2/OTF, weights 200–900
├── assets/                 # SnapLogic logo (white wordmark) + SnapGPT mark
├── preview/                # 113 standalone preview cards + the combined color-ramps page
├── Brand Gradient.html     # Full-page brand-gradient demo
└── network-graph.html      # Full-page force-directed network graph demo
```

### Categories (mirroring the gallery)

| #  | Category              | Count | Examples                                            |
|----|-----------------------|-------|-----------------------------------------------------|
| 01 | Foundations           | 5     | Type scale, type faces, spacing, radii, shadows     |
| 02 | Color                 | 4     | All 10 ramps (one page) + semantic text + surfaces + brand gradient |
| 03 | Brand                 | 4     | Logo, iconography, launcher, brand gradient demo    |
| 04 | Primitives            | 27    | Buttons, inputs, badges, status, spinner, avatar… |
| 05 | Components            | 18    | Card, modal, table, tabs, toast, global header…   |
| 06 | Advanced editors      | 7     | Code, JSON, schema, connection, API param builder   |
| 07 | Patterns              | 17    | Validation, save/discard, AI-assisted input, wizard |
| 08 | Templates             | 1     | Designer · Empty canvas                             |
| 09 | Data visualization    | 23    | KPI, sparkline, time series, Sankey, Gantt, hive plot… |

## Caveats

- **Icons are Lucide via CDN** as a substitute for the Figma's Untitled UI Icons (~95% visual match). If pixel-perfect Untitled UI Icons are required, swap in the Pro SVGs.
- **Product launcher gradient icons** (Designer, APIM, AutoSync, Admin Manager, Monitor, Project Manager) are placeholder gradient circles with Lucide glyphs. Real product icons were not exported from Figma.
- **No formal dark theme.** The dark global navbar is treated as inverted chrome, not full dark mode.
- **Acherus Grotesque** is licensed; the WOFF2/OTF files in `fonts/` are bundled for use within SnapLogic surfaces. Confirm license terms before re-distributing outside SnapLogic.

## Sources

Built from the JellyRoll Figma library (60 pages, 279 frames) and the SnapLogic Confluence design-tokens documentation. Design rationale was captured during a back-and-forth in Claude Design across three sessions covering color ramps, primitive components, AI patterns, the spinner, the Designer template, and the data-viz wave (network graph, hive plot, Sankey, swim-lane Gantt, calendar heatmap, etc.).
