# JellyRoll

Design tokens and CSS for JellyRoll, SnapLogic's design system.

```bash
npm install @snaplogic-ux/jellyroll
```

```js
import '@snaplogic-ux/jellyroll/tokens.css';
```

That single import pulls in the token layer (color ramps, semantic tokens,
spacing, radii, shadows, type scale) and the font layer.

## The font

The brand face is **Acherus Grotesque**, which is commercially licensed and
therefore **not shipped in this package**. `--font-sans` still lists it first,
so if you self-host it your app gets the real thing:

```css
@font-face {
  font-family: "Acherus Grotesque";
  src: url("/fonts/acherus-grotesque-regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```

Without it you get a metric-matched substitute, in two tiers.

**Tier 2 (automatic, 0 kB).** A system face rescaled with `size-adjust` and
`ascent-override` so the line box matches Acherus exactly. Running width lands
~8% short.

**Tier 1 (opt-in, ~38 kB).** Montserrat, bundled and rescaled. Add one import:

```js
import '@snaplogic-ux/jellyroll/fallback-web.css';
```

Measured against Acherus at 100px, same string:

| | width | line box |
| --- | --- | --- |
| Acherus Grotesque | 1260.1 | 126.0 |
| Tier 1 (Montserrat) | 1237.1 | 125.0 |
| Tier 2 (system) | 1158.0 | 126.0 |
| no fallback layer | 1103.5 | 118.0 |

Montserrat matches Acherus's running width closely **only because of the
`size-adjust`** that normalizes its x-height from 0.525 to 0.509. Its raw
advances are ~12% wider. Listing `Montserrat` as a bare family name in a font
stack does not give you this — it gives you noticeably wider text.

Do not assume Acherus advance widths in layout. Size elements to content.

Full detail — licensing boundaries, how to verify which font actually rendered,
and the metric derivation — is in [FONTS.md](./FONTS.md).

## Entry points

| Import | What |
| --- | --- |
| `@snaplogic-ux/jellyroll/tokens.css` | Tokens + type. Start here. |
| `@snaplogic-ux/jellyroll/card.css` | Shared card and control chrome. |
| `@snaplogic-ux/jellyroll/fallback-web.css` | Tier 1 fallback (Montserrat, ~38 kB). |
| `@snaplogic-ux/jellyroll/fonts-fallback.css` | Tier 2 fallback metrics on their own. |
| `@snaplogic-ux/jellyroll/jellyroll.json` | Structured catalog of every component. |
| `@snaplogic-ux/jellyroll/llms.txt` | llmstxt.org index, for agents. |
| `@snaplogic-ux/jellyroll/snippets/button.html` | Chrome-free copy-paste blocks. |

## Conventions

- Prefer semantic tokens (`--color-text-body`) over raw ramp steps
  (`--sl-blue-600`). Raw steps are for building new semantic tokens.
- Layout spacing uses the 4-pt grid (`--space-1` … `--space-20`). Never
  hardcode those values. Component-internal padding is exempt — it is derived
  from a height-anchored sizing scale and legitimately lands off-grid.
- Focus rings are always `box-shadow: var(--ring-focus)` with
  `border-color: var(--sl-teal-600)`.

## Live reference

Canonical component implementations, with markup and per-component CSS:
<https://sl-design-team.github.io/jellyroll/>
