# Clean component snippets

Chrome-free, copy-paste blocks for AI agents and developers: the **reusable CSS
plus canonical markup only** — none of the gallery's demo scaffolding (state
columns, usage notes, section headers). State styles are wired to real
`:hover` / `:active` / `:focus-visible` / `:disabled` (the gallery previews
demonstrate them with `.hover` / `.pressed` classes instead).

Each snippet links the token CSS and is otherwise self-contained:

```html
<link rel="stylesheet" href="https://sl-design-team.github.io/jellyroll/colors_and_type.css" />
```

## Available

- [`button.html`](button.html) — primary / secondary / tertiary, sizes, icon-only, loading, disabled
- [`card.html`](card.html) — the surface building block + interactive/selected states
- [`menu.html`](menu.html) — light action menu

## Relationship to the rest of the system

| Surface | Purpose |
|---|---|
| `snippets/` | Bare, copy-paste component blocks (this folder) |
| `preview/<name>.html` | Full demo of every state/variant — the canonical reference |
| `jellyroll.json` | Structured catalog (anatomy / usage / tokens) for every asset |
| `llms.txt` | Index of the whole system for AI agents |
| `colors_and_type.css` | The token source of truth |

## Coverage

This is a curated starter set, not yet every component. The remaining assets
are fully documented in `jellyroll.json` and `preview/`; snippets are being
added incrementally. To add one, copy a component's reusable CSS out of its
`preview/` file, convert the `.hover`/`.pressed` demo classes to real
pseudo-classes, and drop in minimal markup.
