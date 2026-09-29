# Fonts

JellyRoll's brand typeface is **Acherus Grotesque**. It is commercially
licensed, so it ships to some consumers and not others. This page explains
which case you are in and what to do about it.

## Which case are you in?

| You are | Use | How |
| --- | --- | --- |
| **Building anything for SnapLogic** | **Acherus Grotesque. Always.** | [Internal projects](#internal-projects-snaplogic) |
| Outside SnapLogic, via npm | Bundled metric-matched fallback | [External projects](#external-projects) |

The fallback exists so the public package degrades gracefully. **It is not a
substitute for the brand face, and internal projects should never ship on it.**

---

## Internal projects (SnapLogic)

SnapLogic holds a license for Acherus Grotesque. Every internal surface — apps,
prototypes, demos, internal tools — should render in it. If your project is
falling back to Montserrat or a system sans, that is a bug, not a styling
choice.

### Getting the files

The full family (weights 100–900, roman and italic, WOFF2 + OTF) lives in the
[JellyRoll repo](https://github.com/SL-Design-Team/jellyroll), under `fonts/`.
Copy that directory into your project along with the repo's `fonts.css` and
`colors_and_type.css`:

```
your-app/
├── fonts/                  # from the repo
├── fonts.css               # from the repo — declares Acherus @font-face
└── colors_and_type.css     # from the repo
```

```html
<link rel="stylesheet" href="/colors_and_type.css">
```

`colors_and_type.css` imports `fonts.css`, which declares Acherus and pulls the
fallback layer in behind it. One link tag is all you need.

> **Take these three files from the repo, not from the npm package.** The
> `fonts.css` published to npm is the *fallback* layer — it declares no Acherus
> faces at all, because the package ships no Acherus binaries. Copying the npm
> copy leaves you silently on the fallback, which is the exact failure this page
> exists to prevent.

### If you consume the public npm package internally

The public package deliberately contains **no Acherus files**. Install it for
the tokens, then supply Acherus yourself:

```js
import '@snaplogic-ux/jellyroll/tokens.css';
import './acherus.css';   // your own @font-face rules, pointing at your copy
```

`--font-sans` already lists `"Acherus Grotesque"` first, so declaring the
family is enough — no token override needed.

Do **not** import `fallback-web.css` in an internal project. It only adds
weight you do not need, since you have the real face.

### Verify you are actually getting it

This is the trap. If Acherus is installed in your OS font book — and it is, on
most SnapLogic design machines — then `font-family: "Acherus Grotesque"`
resolves from the system even when your app never loaded the webfont. **Your
local render will look correct while every other machine falls back.**

Check in DevTools rather than trusting your eyes:

```js
// Loaded as a webfont by this page?
document.fonts.check('16px "Acherus Grotesque"')

// What the browser actually painted: DevTools > Elements > Computed >
// Rendered Fonts. It names the file source.
```

If Rendered Fonts shows a local/system origin rather than your `@font-face`,
your deployment is relying on the viewer having the font installed. Fix the
`@font-face` path.

### Licensing boundaries

- Do not commit Acherus files to a **public** repository.
- Do not serve them from a public CDN or an unauthenticated asset host.
- Do not redistribute them in any package published to the public npm registry.
  `scripts/build-npm.js` enforces this — it refuses to build if any Acherus
  asset reaches the package.
- Confirm terms with whoever manages the foundry license before extending use
  to a new distribution channel.

---

## External projects

The public npm package contains no Acherus files. You get a metric-matched
substitute in two tiers, and Acherus still sits first in `--font-sans` so a
licensed consumer can drop it in without touching tokens.

**Tier 2 — automatic, 0 kB.** A `local()` system face rescaled so the line box
matches Acherus. Active by default via `tokens.css`.

**Tier 1 — opt-in, ~38 kB.** Montserrat Variable, bundled and rescaled:

```js
import '@snaplogic-ux/jellyroll/tokens.css';
import '@snaplogic-ux/jellyroll/fallback-web.css';
```

Measured at 100px against Acherus, same string:

| | width | line box | vs Acherus |
| --- | --- | --- | --- |
| Acherus Grotesque | 1260.1 | 126.0 | — |
| Tier 1 (Montserrat) | 1237.1 | 125.0 | −1.8% |
| Tier 2 (system) | 1158.0 | 126.0 | −8.1% |
| no fallback layer | 1103.5 | 118.0 | −12.4% |

### Licensing your own copy

Acherus Grotesque is sold by its foundry. If you want the real face in a
non-SnapLogic project, license it yourself — SnapLogic's license does not
extend to you, and nothing in this repo's MIT license grants any font rights.

---

## How the fallback works

Both tiers are `@font-face` aliases over another face, rescaled with
`size-adjust`, `ascent-override`, `descent-override` and `line-gap-override`
so the line box matches Acherus. Without this, a missing brand font reflows
every string: an unadjusted system sans runs 12% narrow.

Derivation, from Acherus Regular (x-height 0.509, hhea ascent 0.945, descent
0.279, gap 0.025, as ratios of em):

```
size-adjust       = 0.509 / fallbackXHeight
ascent-override   = 0.945 / size-adjust
descent-override  = 0.279 / size-adjust
line-gap-override = 0.025 / size-adjust
```

Two things to understand before changing any of it:

**Montserrat matches on width only after normalization.** Its raw advances are
~12% wider than Acherus and its x/cap is 0.750 against Acherus's 0.727. It
lands within 2% *because* `size-adjust` normalizes x-height 0.525 → 0.509.
Listing `Montserrat` as a bare family name in a font stack does not reproduce
this — it gives you noticeably wider text.

**`size-adjust` cannot fix shape.** x/cap is scale-invariant, so scaling
corrects a size mismatch and never a proportion one. Picking a fallback is
therefore a trade between matching running width and matching cap proportion.
Width was chosen, because width errors cause reflow and truncation while
proportion errors are cosmetic.

Re-derive with fontTools rather than hand-tuning. Per-face numbers and the full
candidate comparison are in the headers of
[`fonts-fallback.css`](fonts-fallback.css) and
[`fallback-web.css`](fallback-web.css).
