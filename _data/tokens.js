// JellyRoll · Tokens per asset
//
// Keyed by the asset's file path. Each entry is an array of
// `{ name, value, role }` records. Color values render with a small swatch.
//
// Only cards that genuinely consume specific tokens are listed here;
// the rest auto-hide the Tokens section in the detail view.

window.JELLYROLL_TOKENS = {
  // ── 01 Foundations ────────────────────────────────────────────────
  "preview/type-scale.html": [
    { name: "--font-sans", value: "'Acherus Grotesque', system-ui, 'SF Pro', 'Segoe UI', sans-serif", role: "Body, labels, headings" },
    { name: "--font-mono", value: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", role: "Code, tokens, JSON, timestamps" },
  ],
  "preview/type-faces.html": [
    { name: "--font-sans", value: "'Acherus Grotesque', system-ui, 'SF Pro', 'Segoe UI', sans-serif", role: "Body, labels, headings" },
    { name: "--font-mono", value: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace", role: "Code, tokens, JSON, timestamps" },
  ],
  "preview/spacing-scale.html": [
    { name: "--space-0",  value: "0px",  role: "Zero (flush)" },
    { name: "--space-1",  value: "4px",  role: "Smallest gap — between tightly-coupled atoms" },
    { name: "--space-2",  value: "8px",  role: "Default gap between sibling atoms" },
    { name: "--space-3",  value: "12px", role: "Input horizontal padding" },
    { name: "--space-4",  value: "16px", role: "Card padding — the system's default" },
    { name: "--space-5",  value: "20px", role: "Mid-density grouping" },
    { name: "--space-6",  value: "24px", role: "Section internal padding" },
    { name: "--space-8",  value: "32px", role: "Between unrelated content blocks" },
    { name: "--space-10", value: "40px", role: "Page-level vertical rhythm" },
    { name: "--space-12", value: "48px", role: "Frame header top/bottom padding" },
    { name: "--space-16", value: "64px", role: "Layout container horizontal padding" },
    { name: "--space-20", value: "80px", role: "Top-level page spacing" },
  ],
  "preview/spacing-radius.html": [
    { name: "--radius-xs",   value: "2px",   role: "Small inline elements (badges, chips, tags)" },
    { name: "--radius-sm",   value: "4px",   role: "Cards and buttons — system default" },
    { name: "--radius-md",   value: "6px",   role: "Mid-size surfaces" },
    { name: "--radius-lg",   value: "8px",   role: "Large surfaces and modals" },
    { name: "--radius-pill", value: "999px", role: "Pill tags, toggle tracks, status dots" },
  ],
  "preview/spacing-shadows.html": [
    { name: "--shadow-raised",         value: "0 2px 4px rgba(206, 217, 240, 0.8)",  role: "Card resting — a tint of Blue-200" },
    { name: "--shadow-raised-hover",   value: "0 4px 8px rgba(206, 217, 240, 1)",    role: "Card hover" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)",   role: "Modal / popover" },
    { name: "--shadow-overlay-strong", value: "0 12px 32px rgba(38, 40, 44, 0.28)",  role: "Top-of-stack overlay" },
    { name: "--shadow-focus-ring",     value: "0 0 0 3px rgba(9, 129, 127, 0.35)",   role: "Focus halo — Teal-600 at 35% alpha" },
    { name: "--shadow-inset-sunken",   value: "inset 0 1px 2px rgba(38, 40, 44, 0.08)", role: "Sunken surface inner shadow" },
  ],

  // ── 02 Color ──────────────────────────────────────────────────────
  "preview/colors-all-ramps.html": [
    { name: "--sl-blue-600",   value: "#0841B4", role: "Primary brand & action" },
    { name: "--sl-teal-600",   value: "#09817F", role: "Secondary accent — hover, focus" },
    { name: "--sl-indigo-600", value: "#304684", role: "Information" },
    { name: "--sl-orange-600", value: "#F9660B", role: "Accent" },
    { name: "--sl-yellow-600", value: "#FBBC04", role: "Warning" },
    { name: "--sl-purple-600", value: "#623684", role: "Discovery" },
    { name: "--sl-green-600",  value: "#017D1B", role: "Success" },
    { name: "--sl-red-600",    value: "#E31C3D", role: "Alert / destructive" },
    { name: "--sl-pink-600",   value: "#E31C73", role: "Marketing accent" },
    { name: "--sl-grey-600",   value: "#9CA7BA", role: "Neutral" },
  ],
  "preview/colors-semantic-text.html": [
    { name: "--color-text-body",        value: "#031A48", role: "Default body text — Indigo-900" },
    { name: "--color-text-heading",     value: "#031A48", role: "Headings — same family as body" },
    { name: "--color-text-subtle",      value: "#7D8695", role: "Secondary copy, captions" },
    { name: "--color-text-disabled",    value: "#B0B9C8", role: "Disabled labels and values" },
    { name: "--color-text-inverse",     value: "#FFFFFF", role: "Text on dark surfaces (navbar)" },
    { name: "--color-text-selected",    value: "#0841B4", role: "Selected text" },
    { name: "--color-text-link",        value: "#0841B4", role: "Default link" },
    { name: "--color-text-link-hover",  value: "#09817F", role: "Link hover — Teal-600" },
    { name: "--color-text-link-pressed",value: "#6BB3B2", role: "Link pressed — Teal-400" },
    { name: "--color-text-alert",       value: "#B61631", role: "Error message text" },
    { name: "--color-text-success",     value: "#014B10", role: "Success message text" },
    { name: "--color-text-discovery",   value: "#4E2B6A", role: "Discovery accent" },
    { name: "--color-text-information", value: "#26386A", role: "Informational accent" },
  ],
  "preview/colors-surfaces.html": [
    { name: "--color-surface-primary", value: "#FFFFFF", role: "Canvas — default page background" },
    { name: "--color-surface-raised",  value: "#FFFFFF", role: "Cards and drawers (with shadow)" },
    { name: "--color-surface-sunken",  value: "#F5F6F8", role: "Pressed-in section (Grey-100)" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Modal / popover" },
    { name: "--color-surface-navbar",  value: "#031A48", role: "Global navbar (Indigo-1000)" },
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal scrim (no backdrop blur)" },
  ],
  "preview/colors-gradient-brand.html": [
    { name: "--gradient-brand",        value: "linear-gradient(90deg, #008380 29%, #0841B4 100%)", role: "Horizontal teal → blue brand sweep" },
    { name: "--gradient-brand-stop-1", value: "#008380", role: "Left stop — teal" },
    { name: "--gradient-brand-stop-2", value: "#0841B4", role: "Right stop — Blue-600" },
  ],

  // ── 03 Brand ──────────────────────────────────────────────────────
  "Brand%20Gradient.html": [
    { name: "--gradient-brand", value: "linear-gradient(90deg, #008380 29%, #0841B4 100%)", role: "The brand gradient" },
  ],

  // ── 04 Primitives ─────────────────────────────────────────────────
  "preview/components-buttons.html": [
    { name: "--color-background-primary",         value: "#0841B4", role: "Primary button background" },
    { name: "--color-background-primary-hover",   value: "linear-gradient(112.63deg, #0B9D9B 12.38%, #0841B4 137.46%)", role: "Primary hover — teal → blue (distinctive)" },
    { name: "--color-background-primary-pressed", value: "#6BB3B2", role: "Primary pressed — Teal-400" },
    { name: "--color-background-disabled",        value: "#EBEDF1", role: "Disabled fill" },
    { name: "--color-background-secondary",       value: "#FFFFFF", role: "Secondary button — white fill stays on hover" },
    { name: "--color-border-default",             value: "#C4CAD6", role: "Default border (e.g., secondary outline)" },
    { name: "--color-border-focus",               value: "#09817F", role: "Focus ring (Teal-600)" },
    { name: "--radius-sm",                        value: "4px",     role: "Button corner radius" },
    { name: "--shadow-focus-ring",                value: "0 0 0 3px rgba(9, 129, 127, 0.35)", role: "Focus halo" },
  ],
  "preview/components-inputs.html": [
    { name: "--color-background-input", value: "#F5F6F8", role: "Field fill — Grey-100" },
    { name: "--color-border-subtle",    value: "#D7DCE3", role: "Default field border (Grey-300)" },
    { name: "--color-border-focus",     value: "#09817F", role: "Focus border — Teal-600" },
    { name: "--color-border-hover",     value: "#0841B4", role: "Hover border — Blue-600" },
    { name: "--color-border-error",     value: "#E31C3D", role: "Error border — Red-600" },
    { name: "--color-text-body",        value: "#031A48", role: "Typed value text" },
    { name: "--color-text-subtle",      value: "#7D8695", role: "Help text below the field" },
    { name: "--radius-sm",              value: "4px",     role: "Field corner radius" },
    { name: "--shadow-focus-ring",      value: "0 0 0 3px rgba(9, 129, 127, 0.35)", role: "Focus halo" },
  ],
  "preview/components-badges.html": [
    { name: "--radius-pill",          value: "999px",   role: "Pill shape" },
    { name: "--font-sans",            value: "'Acherus Grotesque', system-ui, …", role: "ExtraBold 800 uppercase 10px" },
    { name: "--sl-blue-100",          value: "#E6ECF8", role: "Info badge fill" },
    { name: "--sl-green-100",         value: "#E6F2E8", role: "Success badge fill" },
    { name: "--sl-yellow-100",        value: "#FFF8E6", role: "Warning badge fill" },
    { name: "--sl-red-100",           value: "#FCE8EC", role: "Danger badge fill" },
    { name: "--sl-purple-100",        value: "#EFEBF3", role: "Discovery badge fill" },
  ],
  "preview/components-spinner.html": [
    { name: "--ai-accent",             value: "var(--sl-ai-500)", role: "AI spinner stroke" },
    { name: "--color-text-link",       value: "#0841B4", role: "Default spinner stroke" },
    { name: "--color-text-success",    value: "#014B10", role: "Success spinner" },
    { name: "--color-text-alert",      value: "#B61631", role: "Danger spinner" },
  ],

  // ── 05 Components ────────────────────────────────────────────────
  "preview/components-card.html": [
    { name: "--color-surface-raised",  value: "#FFFFFF", role: "Card fill" },
    { name: "--color-border-subtle",   value: "#D7DCE3", role: "Resting border — 1px Grey-300" },
    { name: "--color-border-hover",    value: "#0841B4", role: "Hover border — 1.5px Blue-600" },
    { name: "--color-border-selected", value: "#0841B4", role: "Selected border — 3px Blue-600" },
    { name: "--radius-sm",             value: "4px",     role: "Card corner radius" },
    { name: "--space-4",               value: "16px",    role: "Card internal padding" },
    { name: "--shadow-raised",         value: "0 2px 4px rgba(206, 217, 240, 0.8)", role: "Resting shadow" },
    { name: "--shadow-raised-hover",   value: "0 4px 8px rgba(206, 217, 240, 1)",   role: "Hover shadow" },
  ],
  "preview/components-modal.html": [
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal scrim (no blur)" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Modal panel fill" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)", role: "Modal shadow" },
    { name: "--radius-lg",             value: "8px",     role: "Modal corner radius" },
    { name: "--space-6",               value: "24px",    role: "Modal internal padding" },
  ],
  "preview/components-drawer.html": [
    { name: "--color-scrim",           value: "rgba(9, 30, 66, 0.54)", role: "Modal-variant scrim" },
    { name: "--color-surface-overlay", value: "#FFFFFF", role: "Drawer fill" },
    { name: "--shadow-overlay",        value: "0 8px 24px rgba(38, 40, 44, 0.18)", role: "Drawer shadow" },
  ],
  "preview/components-table.html": [
    { name: "--sl-grey-100",                value: "#F5F6F8", role: "Row hover background" },
    { name: "--sl-blue-100",                value: "#E6ECF8", role: "Selected row background" },
    { name: "--sl-grey-200",                value: "#EBEDF1", role: "Row divider + subtle vertical header dividers" },
    { name: "--sl-grey-300",                value: "#D7DCE3", role: "Table border + header bottom border" },
    { name: "--color-text-body",            value: "#031A48", role: "Header label + cell text (Indigo-900)" },
    { name: "--color-text-subtle",          value: "#7D8695", role: "Muted cell text (em-dash placeholders, monospace IDs)" },
    { name: "--sl-blue-600",                value: "#0841B4", role: "Toolbar text-button actions + filter-funnel indicator" },
  ],
  "preview/components-global-header.html": [
    { name: "--color-surface-navbar", value: "#031A48", role: "Global navbar background — Indigo-1000" },
    { name: "--color-text-inverse",   value: "#FFFFFF", role: "Text + icons on the navbar" },
  ],

  // ── 09 Data viz · palette foundations ─────────────────────────────
  "preview/dataviz-status.html": [
    { name: "--sl-green-600",  value: "#017D1B", role: "Success — pipeline completed" },
    { name: "--sl-red-600",    value: "#E31C3D", role: "Failed" },
    { name: "--sl-yellow-600", value: "#FBBC04", role: "Warning" },
    { name: "--sl-blue-600",   value: "#0841B4", role: "Running" },
    { name: "--sl-grey-500",   value: "#B0B9C8", role: "Queued / idle" },
  ],
};
