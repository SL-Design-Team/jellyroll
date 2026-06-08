# Product

## Register

product

## Users

Designers and frontend engineers building SnapLogic's products — Designer, Admin Manager, Monitor, AutoSync, APIM, and the Pattern Catalog — plus AI coding agents fetching the system programmatically. They arrive needing a specific component or token: the canonical spec, the exact markup, and the token to use. Their context is "I'm mid-build and need the source of truth, fast." Secondary audience: design-system maintainers extending the catalog, and stakeholders evaluating whether the system is complete and credible.

## Product Purpose

JellyRoll is the single source of truth for the SnapLogic design system (the 2.0 code-first rebuild; 1.0 was Figma-only). It is a static, no-framework gallery that documents every design asset — 113 preview cards across components, patterns, and tokens — with Anatomy / Options / Usage / Behaviors / Tokens for each. It serves humans through the index gallery and agents through `llms.txt`, `jellyroll.json`, and live token CSS. Success: a builder (human or agent) can find the right component and ship a pixel-accurate, on-brand implementation without guessing, and trust that what the gallery shows is what production uses.

## Brand Personality

Precise and confident. Engineering-grade and exact — the gallery should look as rigorous as the token system behind it. Quiet authority over expressive flourish: it earns trust by being correct, legible, and complete, not by selling. Voice is plain and specific (sentence case everywhere, no marketing buzzwords, no emoji). The system demonstrates its own discipline — it practices what it documents.

## Anti-references

- **Generic Material/Bootstrap defaults** — off-the-shelf framework look (purple buttons, ambient drop shadows, no brand identity). JellyRoll uses 1px `--sl-grey-300` borders, not shadow-soup, and its own blue/teal identity.
- **Cluttered legacy enterprise dashboard** — dense gray over-paneled UI with tiny text, border-on-everything, no breathing room. Use the 4-pt spacing grid for rhythm; let content breathe.
- **Trendy AI-startup landing** — gradient text, glassmorphism, dark-mode-by-default, eyebrow-on-every-section. Gradients are reserved (product launcher icons, SnapGPT accent, brand gradient only).
- **Over-animated / playful** — bouncy, gamified, illustration-heavy styling that undercuts an enterprise system's credibility. Motion is intentional and restrained.

## Design Principles

1. **Practice what you preach.** The gallery must itself be a flawless example of the system — every border, token, and spacing value on the index is the canonical pattern. Inconsistency here discredits everything it documents.
2. **The token is the source of truth.** Prefer semantic tokens over raw ramps; never hardcode pixels off the 4-pt grid. What the gallery shows must equal what production ships.
3. **Findability over decoration.** Users arrive mid-task. Hierarchy, scannability, and fast navigation beat expressive visuals. Every screen answers "where is the thing I need?"
4. **Built for two audiences at once.** Humans read the gallery; agents read the generated assets. Changes to the catalog must keep both in sync (regenerate agent assets after data edits).
5. **Quiet authority.** Earn trust through correctness and completeness, not persuasion. Sentence case, no buzzwords, no emoji, restrained motion.

## Accessibility & Inclusion

WCAG 2.1 AA. Body text ≥4.5:1 contrast against its background (including placeholders); large text ≥3:1. Visible, consistent focus rings — `box-shadow: 0 0 0 2px rgba(9,129,127,0.18)` with `border-color: var(--sl-teal-600)`. Full keyboard navigability across the gallery nav and detail views. Every animation ships a `prefers-reduced-motion: reduce` alternative. Icon-only controls require `aria-label`. Selection state never relies on color alone (uses a thicker 3px Blue-600 border).
