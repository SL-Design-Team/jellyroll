// JellyRoll · SnapLogic Design System catalog
// One entry per gallery asset. `meta` keys are optional — a missing key hides
// its section + the corresponding TOC entry on the detail page.
//
// Voice: professional, technical, calm. Sentence case. No emoji.

window.JELLYROLL_DATA = {
  sections: [
    {
      num: "01",
      id: "foundations",
      name: "Foundations",
      items: [
        {
          file: "preview/foundations-accessibility.html",
          name: "Accessibility",
          tagline: "WCAG 2.1 AA guidelines — color contrast, keyboard nav, screen readers, focus management.",
          meta: {
            usage: "Apply these guidelines to every SnapLogic surface. All components in JellyRoll are built to meet WCAG 2.1 AA as a baseline. When building new components or patterns, review the keyboard interaction, focus management, and ARIA sections before implementation.",
            behaviors: "The page covers the four POUR principles, contrast ratios for core token pairings, keyboard interaction patterns, semantic HTML vs ARIA guidance, form labeling rules, image alt text requirements, focus management for modals and drawers, a testing checklist, and links to external resources."
          }
        },
        {
          file: "preview/brand-iconography.html",
          name: "Iconography",
          tagline: "202 outlined line icons — 24×24 viewbox, currentColor stroke.",
          meta: {
            anatomy: "Each icon is a 24×24 SVG with `viewBox=\"0 0 24 24\"`, 2px stroke, rounded caps and joins, and `stroke=\"currentColor\"` so it inherits text color. No fills (except a single white-fill contrast detail in one icon).",
            options: "Sizes: 24px default, 16px inline / dense contexts, 20px nav rail. Outlined glyphs by default; filled status pictograms (running check, failed dot, sticky star) are the only exception. Click any icon in the gallery to copy its name.",
            usage: "Pick the icon whose metaphor matches the action or object directly — never invent a custom mark. Drop the SVG inline (or reference via `<svg><use href=\"icons/{name}.svg\">`) so it picks up the surrounding text color. For vendor logos (AWS, Salesforce, GitHub) the system falls back to Font Awesome 6 brands at matching stroke weight.",
            behaviors: "Icon-only buttons require an explicit `aria-label`. Icons paired with text take `aria-hidden=\"true\"` so screen readers don't read them twice. The icon inherits `currentColor` from its parent — never hardcode a tint."
          }
        },
        {
          file: "preview/spacing-radius.html",
          name: "Radius",
          tagline: "Restrained corners: 2 / 4 / 6–8 / 999px.",
          meta: {
            usage: "Use 2px for small inline elements (badges, chips), 4px as the default for cards and buttons, 6–8px for large surfaces and modals, and 999px for pill tags only. Never invent intermediate values."
          }
        },
        {
          file: "preview/spacing-shadows.html",
          name: "Shadows",
          tagline: "Light, blueish, low-spread — borders carry more weight than shadows in this system.",
          meta: {
            usage: "Resting card shadow is `0 2px 4px rgba(206, 217, 240, 0.8)` — literally a tint of Blue-200. Modals use `0 8px 24px rgba(38, 40, 44, 0.18)`. Focus rings use a 3px Teal-600 halo at 35% alpha. No heavy drop shadows, no neumorphism, no glow."
          }
        },
        {
          file: "preview/spacing-scale.html",
          name: "Spacing",
          tagline: "Strict 4-pt grid: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80.",
          meta: {
            usage: "Use `--space-*` tokens for every margin, padding, and gap. Never hardcode pixel values. Layout containers use 64px horizontal padding, frame headers use 48px top/bottom padding, cards use 16px internal padding, and inputs use 8px top/bottom × 12px left/right for a 40px-tall field."
          }
        },
        {
          file: "preview/foundations-tokens.html",
          name: "Tokens",
          tagline: "All CSS custom properties — color ramps, semantic tokens, typography, spacing, radius, shadows, field, and AI.",
          meta: {
            usage: "Import `colors_and_type.css` and reference tokens by name in your CSS or inline styles. Prefer semantic tokens (`--color-text-body`, `--color-background-primary`, etc.) over raw ramp variables in component code. Raw ramp tokens (`--sl-blue-600`) are appropriate only when building new semantic tokens or one-off brand moments."
          }
        },
        {
          file: "preview/colors-surfaces.html",
          name: "Surfaces",
          tagline: "Navbar · Canvas · Sunken · Raised · Overlay — five elevation planes.",
          meta: {
            usage: "Compose interfaces from five surfaces. Navbar (Indigo-1000) carries the dark global chrome only. Canvas (white) is the default page. Sunken (Grey-100) nests inside Canvas for inline panels. Raised (white + shadow) lifts cards and drawers. Overlay sits on top for modals and popovers. Use elevation to organize complexity, not for decoration."
          }
        },
        {
          file: "preview/type-scale.html",
          name: "Type scale",
          tagline: "Display through Micro — eight steps with set line heights and weight conventions.",
          meta: {
            usage: "Use these eight steps for every text element. Body and labels are 14/22 Regular; headings step up from Card Title 18 to Display 56. Labels and headings sit at ExtraBold (800); body at Regular (400). The contrast between thin body and chunky labels is the system's signature — do not introduce intermediate weights for emphasis."
          }
        },
        {
          file: "preview/type-faces.html",
          name: "Type specimen",
          tagline: "Acherus Grotesque, weights 200–900, plus the SF Mono code font.",
          meta: {
            usage: "Acherus Grotesque is the system sans across every weight. Reach for the mono stack only inside code blocks, tokens, JSON snippets, and timestamps. Italic is reserved for placeholders (Light Italic 300) and the rare in-line citation — never used for emphasis."
          }
        },
        {
          file: "preview/foundations-motion.html",
          name: "Motion",
          tagline: "Durations and easings for transitions and animations.",
          meta: {
            usage: "Compose transitions from one `--duration-*` (Fast 120ms, Normal 200ms, Slow 320ms) and one `--ease-*` curve (Standard, In, Out). Default to `--duration-normal var(--ease-standard)` for hover and state changes; use `--duration-slow var(--ease-out)` for entrances like drawers and modals; use `--ease-in` for exits. Avoid bespoke durations — consistency across the product matters more than per-component tuning."
          }
        },
        {
          file: "preview/foundations-zindex.html",
          name: "Z-index",
          tagline: "8-step stacking scale — base through toast.",
          meta: {
            usage: "Use `--z-*` tokens instead of literal z-index values. The scale runs Base (0), Dropdown (1000), Sticky (1100), Overlay (1200), Modal (1300), Popover (1400), Tooltip (1500), Toast (1600). Tooltips sit above popovers because they can appear inside popovers; toasts sit highest so they're never occluded. Never set z-index outside this scale."
          }
        },
        {
          file: "preview/foundations-breakpoints.html",
          name: "Breakpoints",
          tagline: "Viewport widths — sm 640, md 768, lg 1024, xl 1280.",
          meta: {
            usage: "The breakpoint scale targets four common widths. Because CSS custom properties cannot be used inside `@media` queries, the `--bp-*` tokens are exposed for JS (matchMedia, ResizeObserver) and the same numbers should be mirrored in your SCSS or CSS-in-JS layer for media query authoring. Mobile-first: write base styles for the smallest viewport and add `min-width` media queries to step up."
          }
        },
        {
          file: "preview/foundations-selection-skeleton.html",
          name: "Selection & skeleton",
          tagline: "Text highlight and loading placeholder colors.",
          meta: {
            usage: "`--color-selection-bg` and `--color-selection-text` style the browser's text-highlight via a global `::selection` rule — no per-component wiring needed. Use `--color-skeleton` (resting) and `--color-skeleton-pulse` (animated band) for loading placeholders; pair with `--duration-slow` and a 1400ms shimmer to avoid drawing too much attention. Skeletons should match the eventual content's geometry — same row heights, same line widths."
          }
        }
      ]
    },
    {
      num: "02",
      id: "color",
      name: "Color",
      items: [
        {
          file: "preview/colors-gradient-brand.html",
          name: "Brand gradient",
          tagline: "linear-gradient(90deg, #008380 29%, #0841B4 100%) — horizontal teal → blue.",
          meta: {
            usage: "Reserved for hero/marketing surfaces, launcher backgrounds, and brand moments — never for normal UI. Distinct from `--color-background-primary-hover`, which uses a slightly different teal at a 112.63° diagonal for primary-button hover only."
          }
        },
        {
          file: "preview/colors-all-ramps.html",
          name: "Color ramps",
          tagline: "Ten named ramps × eleven steps each. Step 600 is the canonical default for each hue.",
          meta: {
            usage: "Use the `--sl-{hue}-{step}` tokens directly. Steps 50–400 read as light backgrounds and supporting tints; 500–700 carry semantic meaning; 800–1000 are nav and on-dark text. The 600 step of each ramp is the canonical default. Prefer semantic tokens (`--color-text-body`, `--color-background-primary`, etc.) over raw ramp variables in component code."
          }
        },
        {
          file: "preview/colors-semantic-text.html",
          name: "Semantic text",
          tagline: "Body, subtle, link, status, information, discovery, accents.",
          meta: {
            usage: "Use semantic text tokens rather than raw ramp values: `--color-text-body` (Indigo-900) for primary copy, `--color-text-subtle` (Grey-700) for secondary, `--color-text-link` (Blue-600) for links. Status colors map to Green-800 (success), Orange-700 (warning), Red-700 (alert/error). Information uses Indigo-700; Discovery uses Purple-700. AI uses the dedicated SL AI ramp — never substitute purple for AI."
          }
        },
      ]
    },
    {
      num: "03",
      id: "brand",
      name: "Brand",
      items: [
        {
          file: "preview/brand-logo.html",
          name: "Logo",
          tagline: "SnapLogic wordmark + snap-icon. White-on-dark version supplied.",
          meta: {
            usage: "Use the white wordmark on the dark navbar and any dark brand surface. The wordmark and snap-icon ship together — do not separate them, recolor them, or pair the wordmark with a non-system glyph. Minimum clear space around the mark is the height of the snap-icon."
          }
        },
      ]
    },
    {
      num: "04",
      id: "primitives",
      name: "Primitives",
      items: [
        {
          file: "preview/components-avatar.html",
          name: "Avatar",
          tagline: "User identity glyph — initials, photo, or fallback icon.",
          meta: {
            anatomy: "Circular crop · sizes 20 / 24 / 32 / 40 / 56 / 72 / 96. Background is a deterministic ramp pick based on the name hash; initials in white ExtraBold; photo when present.",
            options: "Photo, initials (default), system icon (when no name); with optional status dot anchored bottom-right.",
            usage: "Use for any user or system actor reference. Pair with the user's name on first reference; standalone in dense lists. Initials are the first letter of the first and last name (uppercase)."
          }
        },
        {
          file: "preview/components-avatar-group.html",
          name: "Avatar group",
          tagline: "Stack of overlapping avatars with overflow count.",
          meta: {
            anatomy: "Avatars overlap by 8px (default size); the last avatar in the visible set sits leftmost in z-order. Overflow shown as `+N` in a grey avatar.",
            options: "Visible count 2–6; overflow shown as `+N` or expanded into a tooltip on hover. Sizes follow Avatar.",
            usage: "Use to surface a small set of collaborators or assignees — pipeline owners, mentioned users. Above 6 visible avatars, the row stops being scannable; show only 3–4 and use `+N`."
          }
        },
        {
          file: "preview/components-badges.html",
          name: "Badge",
          tagline: "Compact status or metadata pill, 10px ExtraBold uppercase.",
          meta: {
            anatomy: "Pill at 999px radius · 10/14 ExtraBold uppercase text · 6–8px horizontal padding · 2–4px vertical padding · optional 6px status dot prefix.",
            options: "Tones: neutral, info (Blue), success (Green), warning (Yellow), danger (Red), discovery (Yellow-500). Sizes: default, small. With or without leading dot.",
            usage: "Use to label state or category at a glance — pipeline status, environment, account tier. Never use to display free-form text or numbers; for those use a Chip or inline count."
          }
        },
        {
          file: "preview/components-buttons.html",
          name: "Buttons",
          tagline: "Verb-led actions in primary, secondary, tertiary, and destructive variants.",
          meta: {
            anatomy: "Label (sentence case, 1–3 words) · optional leading or trailing 16px icon · 1.5px transparent or colored border · 4px radius. Heights: lg 40px, md 36px, sm 28px. Icon-only buttons are square at the same height.",
            options: "Variants: primary (filled blue), secondary (white with blue border), tertiary/text (no border, underline on hover), destructive (red fill). Sizes: lg / md / sm. Icon-only variant for each.",
            usage: "One primary per screen for the single most important action. Secondary for supporting actions. Tertiary/text for low-emphasis actions inside dense forms or tables. Destructive only for irreversible operations — pair with a confirm modal.",
            behaviors: "Primary hover applies the teal→blue gradient (`--color-background-primary-hover`) — not a darker blue. Pressed = Teal-400. Secondary stays white on hover; only border + text shift blue → teal. Tertiary underlines on hover. Press never uses transforms — color only. Disabled drops to Blue-200 with white text and removes the pointer."
          }
        },
        {
          file: "preview/components-checkbox.html",
          name: "Checkbox",
          tagline: "Binary selection with optional indeterminate state.",
          meta: {
            anatomy: "16px square · 1.5px Grey-400 border · 2px radius · label to the right (14/22). Checked: Blue-600 fill with white Lucide check. Indeterminate: Blue-600 fill with white horizontal dash.",
            options: "States: unchecked, checked, indeterminate, disabled, error. Sizes: default 16px, small 14px.",
            usage: "Use for boolean selections in forms and for selecting rows in a table or list. For a single optional yes/no, prefer a Toggle. Indeterminate is reserved for the parent of a partially-selected group.",
            behaviors: "Click anywhere on the box or label toggles. Space toggles when focused. Disabled drops opacity to 0.5 and removes the pointer. Focus ring matches the global 3px Teal-600 halo."
          }
        },
        {
          file: "preview/components-chip.html",
          name: "Chip",
          tagline: "Selectable or removable label for filters, tags, and multi-select values.",
          meta: {
            anatomy: "Pill (4px radius for tag-style, 999px for filter-style) · 12/16 Medium text · optional leading icon · optional trailing `×` remove · 6–10px horizontal padding.",
            options: "Static (display only), removable (with `×`), selectable (toggle), with leading icon.",
            usage: "Use for free-form labels (tags, applied filters, selected multi-select values). For fixed status enums, use a Badge instead.",
            behaviors: "Click the `×` removes; click the chip body toggles selection (where applicable). Removed chips animate out in 100ms with no shift of the remaining row."
          }
        },
        {
          file: "preview/components-combobox.html",
          name: "Combobox",
          tagline: "Input combined with a filtered dropdown for very long or open-ended lists.",
          meta: {
            anatomy: "Input · trailing chevron · panel of suggestions that updates as the user types. Highlighted match shown bold.",
            options: "Single-value, multi-value (chips), async-loaded suggestions, creatable (typed values become new options).",
            usage: "Use for 50+ options, async-loaded sets, or open-ended pickers where the user may want to type a value that does not exist yet (tags, custom names). Below 50 options, use a Select.",
            behaviors: "Typing filters in 150ms debounce. Arrow keys cycle filtered results; Enter accepts the highlighted suggestion; Tab accepts the current input. For creatable comboboxes, typing a new value and pressing Enter creates it."
          }
        },
        {
          file: "preview/components-date-picker.html",
          name: "Date picker",
          tagline: "Calendar dropdown attached to an input for picking a date or range.",
          meta: {
            anatomy: "Input with `dd/mm/yyyy` placeholder · trailing `calendar` icon · popover with month grid, prev/next month chevrons, today highlight, and selected fill.",
            options: "Single date or range; min/max bounds; disabled dates; locale-aware first-day-of-week and format.",
            usage: "Use for any date input where the user benefits from seeing a calendar. For purely typed dates (e.g., dates a backend system fills in), use a plain Input with a date mask.",
            behaviors: "Arrow keys move the focused day; Page Up/Down moves a month; Shift+Page Up/Down moves a year; Enter selects. Esc closes the popover. Today is marked with a 1.5px Blue-600 border; selected is the Blue-600 fill."
          }
        },
        {
          file: "preview/components-field-anatomy.html",
          name: "Field anatomy",
          tagline: "Label, optional indicator, control, help text, error — in that order.",
          meta: {
            usage: "Reference for the canonical field stack. Label above (14/22 ExtraBold) · optional optional/required indicator · control · help text below (12/18 Grey-700) · inline error in Red-600 with a `circle-alert` icon. Never invert this order, and never put help text above the control."
          }
        },
        {
          file: "preview/components-field-states.html",
          name: "Field states",
          tagline: "Rest, hover, focus, filled, disabled, read-only, error, AI-generating, AI-review.",
          meta: {
            usage: "Visual reference for every state any field renders in. Use as the contract when implementing a new input variant — every state on this card has an explicit token and should not be invented per-component."
          }
        },
        {
          file: "preview/components-file-upload.html",
          name: "File upload",
          tagline: "Drop zone, browse button, and progress.",
          meta: {
            anatomy: "Drop zone (dashed Grey-400 border, 6px radius, Grey-50 fill) · centered prompt with a `Browse` link inside · in-progress list of files showing name, size, progress bar, cancel.",
            options: "Single or multiple files; accept filter (mime/extension); max-size validation; auto-upload on drop or queued.",
            usage: "Use for any file pickup — including drag-and-drop from the OS. Always allow click-to-browse as a fallback; never hide it. Show progress per file; on completion swap the progress bar for a Green-600 check.",
            behaviors: "Drag over the zone bumps the border to Blue-600 and the fill to Blue-100. Drop kicks off the upload. Cancel during upload aborts the request and removes the row. Files that fail validation render with a Red-600 border and the constraint description as the error."
          }
        },
        {
          file: "preview/components-inputs.html",
          name: "Inputs",
          tagline: "Standard 40px-tall single-line text input.",
          meta: {
            anatomy: "Label above (14/22 ExtraBold) · field (40px tall, 8px top/bottom × 12px left/right padding, 1.5px Grey-300 border, 4px radius) · optional help text below (12/18 Grey-700) · optional inline error.",
            options: "Sizes: default 40px, compact 32px. States: rest, hover, focus, filled, disabled, read-only, error. Optional leading or trailing icon slot.",
            usage: "Use for short single-line input — names, emails, IDs. Placeholder is Light Italic and describes the shape (`dd/mm/yyyy`, `Search snaps`), not an exhortation. Help text clarifies expectations rather than restating the label.",
            behaviors: "Border shifts Grey-300 → Blue-600 on focus and pairs with the 3px Teal-600 35% focus halo. Error state replaces the border with Red-600 and shows an inline message. Disabled drops opacity and removes the pointer; read-only loses the border but keeps the value selectable."
          }
        },
        {
          file: "preview/components-multi-select.html",
          name: "Multi-select",
          tagline: "Select-style trigger that accepts multiple values rendered as chips.",
          meta: {
            anatomy: "Trigger field showing selected chips inline · trailing chevron · panel of checkboxes (so the multi-select intent is obvious). Each chip has a remove `×`.",
            options: "Plain, searchable, grouped. Optional `Select all` row at the top of the panel.",
            usage: "Use when the user can pick more than one value from a bounded list. For free-form text tags, use a Chip input instead. Limit visible chips inline and overflow to `+N more` past a sensible threshold.",
            behaviors: "Click options to toggle (no auto-close). Click outside or Esc closes. Removing a chip refocuses the trigger. Backspace inside an empty trigger removes the last chip."
          }
        },
        {
          file: "preview/components-notification-dot.html",
          name: "Notification dot",
          tagline: "8px red dot anchored to the top-right of an icon or avatar.",
          meta: {
            usage: "Use to mark unread or new items on bell icons, avatars, and menu rows. The dot is decorative — keep an `aria-label` on the parent control describing the count or state. For numeric counts, use a Badge instead."
          }
        },
        {
          file: "preview/components-number.html",
          name: "Number input",
          tagline: "Numeric input with optional stepper and unit suffix.",
          meta: {
            anatomy: "Field · optional stepper (chevron-up / chevron-down stacked on the right) · optional unit suffix inside the field (e.g., `MB`, `ms`).",
            options: "Plain, with stepper, with unit. Integer or decimal precision. Min/max/step bounds.",
            usage: "Use for bounded numeric values — counts, timeouts, sizes. Use with a unit suffix when the unit clarifies meaning. For unbounded text-like numerics (phone, ID), use a plain Input.",
            behaviors: "Arrow up/down increments by step; Shift+arrow by 10× step. Steppers respect min/max bounds and disable at the limits. Pasting non-numeric input is rejected silently. Decimal separator matches the user's locale."
          }
        },
        {
          file: "preview/components-password.html",
          name: "Password field",
          tagline: "Masked input with a show/hide toggle.",
          meta: {
            anatomy: "Field with the value rendered as bullet characters · trailing eye icon button (Lucide `eye` / `eye-off`) that toggles visibility.",
            options: "Plain, with strength meter, with show/hide toggle (default on).",
            usage: "Use for any credential or sensitive token. Auto-disable browser auto-fill suggestions only on confirm / current-password fields where the prompt would be misleading.",
            behaviors: "Toggling visibility does not refocus the field. The strength meter, when shown, updates on each keystroke and uses Green-600 / Yellow-600 / Red-600 — no numeric score."
          }
        },
        {
          file: "preview/components-radio.html",
          name: "Radio",
          tagline: "Single-choice from a small visible set.",
          meta: {
            anatomy: "16px circle · 1.5px Grey-400 border · label to the right (14/22). Checked: Blue-600 fill with a 6px white center dot.",
            options: "States: unselected, selected, disabled, error. Layout: vertical (default) or horizontal.",
            usage: "Use for picking one of 2–5 options where all options should be visible at once. Above 5 options, prefer a Select. Below 2 options, this is a toggle, not a radio group.",
            behaviors: "Click anywhere on the circle or label selects. Arrow keys move between options within the group; Tab jumps past the group. Selection cannot be cleared by clicking again — the only way out is to choose another value."
          }
        },
        {
          file: "preview/components-search-field.html",
          name: "Search field",
          tagline: "Input with a leading search icon and a clear-on-typed affordance.",
          meta: {
            anatomy: "Leading Lucide `search-sm` icon · field · trailing clear `×` button that appears once there is text. Placeholder describes the shape (`Search snaps`).",
            options: "Default 40px or compact 32px. Inline (chrome) or filled (in dense surfaces).",
            usage: "Use for filtering visible content on the current screen. For navigating to results on another screen, use the global Search overlay instead. Debounce input by 150ms before triggering a request.",
            behaviors: "Esc clears when focused. Clear button removes text and refocuses the field. On submit (Enter), the request fires immediately, bypassing the debounce."
          }
        },
        {
          file: "preview/components-segmented-control.html",
          name: "Segmented control",
          tagline: "Compact horizontal switch for 2–5 mutually exclusive options.",
          meta: {
            anatomy: "Pill container in Grey-100 · selected segment is white with shadow · text-only or icon + text segments.",
            options: "Sizes: default 32px, small 28px. Text-only, icon-only, or icon + text segments.",
            usage: "Use to flip between views inside a single surface (list / grid, day / week / month, summary / details). For navigating between unrelated screens, use Tabs. For more than 5 options, use a Select.",
            behaviors: "Click selects; arrow keys cycle. Selection animates the white pill across segments in 150ms with no overshoot. Disabled segments drop opacity and reject input."
          }
        },
        {
          file: "preview/components-select.html",
          name: "Select",
          tagline: "Single-choice dropdown with searchable + grouped variants.",
          meta: {
            anatomy: "Trigger (same shape as Input) with trailing chevron · panel (white, Raised shadow, 4px radius, max-height with scroll) · options (40px rows, 12px left padding, optional leading icon, current selection marked).",
            options: "Variants: standard, searchable, grouped, with icons. Sizes: default 40px, compact 32px.",
            usage: "Use for picking one value from 5–50 options. Below 5, prefer a Segmented control or Radio group. Above 50 or for unbounded sets, use a Combobox.",
            behaviors: "Click or Space/Enter opens. Arrow keys cycle options; typing jumps to the first match. Selecting closes the panel and updates the trigger. Esc closes without changing the value. The panel anchors to the trigger and flips above when it would clip below."
          }
        },
        {
          file: "preview/components-skeleton.html",
          name: "Skeleton loader",
          tagline: "Pulsing grey shape standing in for loading content.",
          meta: {
            anatomy: "Grey-200 fill · 4px radius · animated linear gradient sweep at 1500ms infinite (subtle, low contrast).",
            options: "Block (default), text (1em tall), avatar (circle), media (with aspect ratio).",
            usage: "Use for loading states on cards, rows, lists, and full views. Match the rough shape of the content that is loading — a row of three skeletons of varying widths suggests a body of text. Never animate aggressively; the sweep should sit at the edge of perception."
          }
        },
        {
          file: "preview/components-slider.html",
          name: "Slider",
          tagline: "Drag to pick a value or a range from a continuous track.",
          meta: {
            anatomy: "4px track · 16px circular thumb · optional tick marks · optional value bubble above thumb. Filled portion Blue-600; unfilled Grey-300.",
            options: "Single thumb or range (two thumbs); horizontal default; integer or float steps; optional tick labels.",
            usage: "Use for approximate continuous values where exact precision is not required — opacity, zoom, throttling. Pair with a number input alongside when the user may want to type an exact value.",
            behaviors: "Click on the track jumps the nearest thumb. Drag, arrow keys, Page Up/Down (large step), Home/End (min/max) all move the thumb. Range thumbs cannot cross. Value bubble appears on hover and during drag."
          }
        },
        {
          file: "preview/components-spinner.html",
          name: "Spinner",
          tagline: "Half-arc rotation with trailing ellipsis dots.",
          meta: {
            anatomy: "Half-circle arc (180°) with rounded end caps · three trailing dots positioned along the path · rotation 700ms linear infinite.",
            options: "Sizes: xs / sm / md / lg / xl. Color variants follow status tokens (default Indigo, success Green, danger Red, AI).",
            usage: "Use for in-progress operations under 10 seconds where the user is actively waiting. For longer or background work, use a Skeleton or a progress bar. Never block a whole screen with a centered spinner — prefer skeletons."
          }
        },
        {
          file: "preview/components-status.html",
          name: "Status atom",
          tagline: "6px colored dot + label — the minimal status indicator.",
          meta: {
            anatomy: "6px solid circle · 8px gap · short label in 12/18 Regular. Filled dot for running/success/failed/warning/discovery; outlined ring for queued/idle.",
            usage: "Use anywhere you need a single status next to a label — table rows, list items, breadcrumbs. For multi-line states with a description, use a Toast or Banner."
          }
        },
        {
          file: "preview/components-textarea.html",
          name: "Text area",
          tagline: "Multi-line text input. Auto-grows by default; resize handle on demand.",
          meta: {
            anatomy: "Label · field (min 80px tall, same border/radius/padding as Input) · optional help text · optional character counter bottom-right.",
            options: "Auto-grow vs fixed height; optional max-height with internal scroll; optional resize handle.",
            usage: "Use for free-form text over one line — descriptions, comments, paste targets. Auto-grow by default so the user sees what they have typed. Show a counter only when there is a real character limit.",
            behaviors: "Focus and error states match the Input. Resize handle (when shown) is the standard CSS handle in Grey-500. Counter turns Red-600 within 10 characters of the limit."
          }
        },
        {
          file: "preview/components-toggle.html",
          name: "Toggle",
          tagline: "On/off switch for a setting that takes effect immediately.",
          meta: {
            anatomy: "32×16 pill track · 12px circular thumb · label to the left or right. Track grey when off, Blue-600 when on; thumb white in both states.",
            options: "Sizes: default 32×16, small 28×14. With or without inline status text (`On` / `Off`).",
            usage: "Use for settings that take effect immediately — feature toggles, autosave, notifications. For form fields that submit later, use a Checkbox.",
            behaviors: "Click anywhere on the track or label toggles. Space toggles when focused. Animation is a 150ms slide of the thumb with a colour swap of the track — no bounce or overshoot."
          }
        },
        {
          file: "preview/components-tooltip.html",
          name: "Tooltip",
          tagline: "Short label or description surfaced on hover or focus.",
          meta: {
            anatomy: "Dark navy pill (Indigo-900 fill, white 12/16 text, 4px radius, 5×10px padding) · 5px triangle arrow pointing at the trigger · max-width 240px.",
            options: "Placement: top (default), bottom, left, right. Variants: default (single line) · rich (bold title + muted body, up to 2 lines). Works on any focusable trigger.",
            usage: "Use to label icon-only controls, surface truncated text, or add a short explanation to a disabled element. Keep copy to one short sentence — for more detail, use a Popover. Never put interactive content (links, buttons) inside a tooltip.",
            behaviors: "Appears after a 300ms hover delay; disappears immediately on mouse-out. Also shows on keyboard focus so it is accessible without a pointer. For disabled triggers, wrap the trigger in a container that handles the hover — the button itself cannot receive hover events when disabled."
          }
        },
        {
          file: "preview/components-tree-select.html",
          name: "Tree select",
          tagline: "Hierarchical picker — folders, snaplexes, org units.",
          meta: {
            anatomy: "Same trigger as Select · panel showing a tree with chevron disclosure on each parent · indentation 16px per level. Single or multi-select.",
            options: "Single or multi (with `Select children` toggle when multi); searchable; lazy-loaded branches.",
            usage: "Use when the items form a real hierarchy the user navigates — project folders, snaplex groups, org charts. For a flat tagged list, use a Multi-select.",
            behaviors: "Chevron toggles expand/collapse; clicking the row label selects. Search collapses non-matching branches and highlights matched nodes. Selecting a parent in multi-mode optionally selects all descendants."
          }
        }
      ]
    },
    {
      num: "05",
      id: "components",
      name: "Components",
      items: [
        {
          file: "preview/components-broadcast-banner.html",
          name: "Broadcast banner",
          tagline: "Full-width system message across the top of the app.",
          meta: {
            anatomy: "Strip spanning the canvas · leading status icon · message text · optional inline action link · trailing `×` dismiss.",
            options: "Tones: neutral / info / warning / danger. Dismissible or persistent. With or without action.",
            usage: "Use for system-wide announcements — maintenance windows, license issues, broad outages. Never use for per-record errors (use a Toast) or for ephemeral feedback. Persistent banners must include a `Learn more` link.",
            behaviors: "Dismiss is per-user and per-banner-id; the banner does not re-appear on next load until the id changes. Tone color sets the background tint and the leading icon."
          }
        },
        {
          file: "preview/components-card.html",
          name: "Card",
          tagline: "White surface with a 1px Grey-300 border. Borders — not shadow — indicate selection.",
          meta: {
            anatomy: "White fill · 1px Grey-300 border · 4px radius · 16px internal padding · `--shadow-raised` shadow. Optional header, body, and footer sections.",
            options: "Interactive vs static. With or without header / footer slots. With or without media at the top.",
            usage: "Use to group a single object's attributes (a pipeline, a snap, a connection). For a list of objects, use a Table. Cards do not stretch to fill their parent — they sit at intrinsic width or in a grid.",
            behaviors: "Hover bumps the border to 1.5px Blue-600 and may raise the shadow one step. Selected goes to 3px Blue-600 — same color shift, thicker border. The shadow never increases on selection (that's reserved for hover)."
          }
        },
        {
          file: "preview/components-drawer.html",
          name: "Drawer",
          tagline: "Side panel that slides in from the right for details or secondary tasks.",
          meta: {
            anatomy: "Scrim (same token as Modal) · panel slides from right · 400–600px wide depending on content · header with title and close `×` · body · sticky footer for actions.",
            options: "Widths: narrow (320), default (480), wide (640). Modal (with scrim) or inline (no scrim, doesn't block the page).",
            usage: "Use for details about a selected object (preview, full edit form) or for secondary tasks that can run alongside the main canvas. For confirms, use a Modal. For temporary notifications, use a Toast.",
            behaviors: "Slides in 240ms ease-out. Esc closes. Inline variant does not block the canvas — the canvas remains interactive. Modal variant traps focus inside the drawer."
          }
        },
        {
          file: "preview/components-env-picker.html",
          name: "Environment picker",
          tagline: "Switcher for the active environment (Dev / Stage / Prod).",
          meta: {
            anatomy: "Pill control in the global header · current env name in 12/16 ExtraBold uppercase · color-coded leading dot (Green for Dev, Yellow for Stage, Red for Prod) · trailing chevron · popover listing all environments the user can access.",
            usage: "Use as the global active-env switch. The selected env scopes the page below — pipelines, accounts, configs all filter to it. Prod is intentionally Red to remind operators of the blast radius.",
            behaviors: "Click opens the popover. Selecting an env refreshes the page in the new env's scope. A confirm modal interposes when switching into Prod from any other env."
          }
        },
        {
          file: "preview/components-form-row.html",
          name: "Form row",
          tagline: "Horizontal label + control + help layout used inside forms.",
          meta: {
            anatomy: "Label column (200px, right-aligned, top-aligned) · control column (flex) · help column or inline help below the control. 24px row gap.",
            usage: "Use inside the Designer's properties panel and other dense configuration forms where labels and controls must line up across many rows. For looser layouts, use the standard Field anatomy (label above)."
          }
        },
        {
          file: "preview/components-form-section.html",
          name: "Form section",
          tagline: "Grouped fields under a heading + optional description.",
          meta: {
            anatomy: "Heading (18/28 ExtraBold) · optional 14/22 description · stack of Form rows · 1px Grey-200 divider above the next section.",
            usage: "Use to group related fields inside a long form. Sections do not collapse; if collapse is required, use Accordion sections instead."
          }
        },
        {
          file: "preview/components-global-header.html",
          name: "Global header",
          tagline: "The dark Indigo-1000 chrome that spans every product.",
          meta: {
            anatomy: "56px tall · Indigo-1000 fill · left: waffle launcher + product wordmark · center: contextual search + breadcrumb · right: env picker + notifications + user menu.",
            usage: "Use across every product as the only chrome that crosses product boundaries. Never inject product-specific controls into the global header — those belong on the Left nav or the page itself.",
            behaviors: "Sticky to the top of the viewport. Hover states on icons use a 12% white overlay; selected states use a 24% white overlay. The waffle launcher opens the Product launcher popover."
          }
        },
        {
          file: "preview/components-left-nav.html",
          name: "Left nav",
          tagline: "Contextual product navigation — collapsible to icons-only.",
          meta: {
            anatomy: "Vertical rail · 56px or 240px wide depending on state · 20px Lucide icons in the collapsed state · 14/22 labels alongside in the expanded state · section headers in 10px ExtraBold uppercase.",
            options: "Collapsed (icons only) or expanded (labels visible). With or without nested item groups.",
            usage: "Use as the primary product-level nav inside each app. Designer's snap palette, Manager's org tree, and Monitor's pipeline list all live here. Items represent destinations or scopes — never actions.",
            behaviors: "Collapse toggle is persistent per user. Hover on a collapsed item shows the label as a tooltip. Active route is marked with a 3px Blue-600 left border and Blue-100 row background."
          }
        },
        {
          file: "preview/components-modal.html",
          name: "Modal",
          tagline: "Overlay surface for confirms, focused tasks, and destructive actions.",
          meta: {
            anatomy: "Scrim `rgba(9, 30, 66, 0.54)` · panel (white, 6–8px radius, `0 8px 24px rgba(38, 40, 44, 0.18)` shadow) · header (question or noun-title) · body (specific, quotes the object being acted on) · footer (right-aligned actions; primary on the right).",
            options: "Sizes: small (confirm), medium (form), large (multi-step). With or without close `×` in the header.",
            usage: "Use for confirms (destructive actions), short focused tasks, and content that requires the user's full attention. Do not use for navigation, casual previews, or anything that could live inline. The header is a question or noun-title; the body names the specific object being acted on.",
            behaviors: "Esc dismisses (except in unsaved-changes flows). Click outside the panel dismisses unless the modal is confirming a destructive action. Focus traps inside the panel; on close, focus returns to the trigger. Animation: 200ms scrim fade + panel slide-up 8px."
          }
        },
        {
          file: "preview/components-notifications.html",
          name: "Notifications",
          tagline: "Notification center surfaced from the global bell icon.",
          meta: {
            anatomy: "Bell icon in the global header with an unread Notification dot · popover panel with grouped rows (Today / This week / Older) · each row has a leading icon, title, snippet, timestamp · trailing `View` link.",
            options: "Read / unread state per row. Filter tabs (`All`, `Mentions`, `System`). Mark-all-as-read action.",
            usage: "Use as the persistent inbox for any non-urgent event the user should see eventually — pipeline run completes, comment mentions, system updates. For urgent actionable events, also surface a Toast.",
            behaviors: "Clicking the bell opens the panel and marks the dot dismissed (but does not auto-mark rows as read). Click a row to navigate to the source object and mark the row read."
          }
        },
        {
          file: "preview/components-product-launcher.html",
          name: "Product launcher (waffle)",
          tagline: "Grid of product tiles surfaced from the waffle icon in the global header.",
          meta: {
            anatomy: "Trigger: 24px waffle icon in the global header · popover with a 3-column grid · each tile shows the product's gradient circle, name, and one-line description. Footer shows the release-notes card.",
            usage: "Use as the only cross-product launcher. Do not duplicate it in the Left nav or in product-specific menus. Tiles are sorted by frequency of use, with newly-released products marked by a `New` badge for 30 days.",
            behaviors: "Hover bumps a tile's background to Blue-50. Click navigates to the product's home, opening in the same tab unless Shift is held."
          }
        },
        {
          file: "preview/components-search-overlay.html",
          name: "Search overlay",
          tagline: "Full-page search modal triggered from anywhere by `⌘ K`.",
          meta: {
            anatomy: "Centered modal (no scrim — backdrop blur is not used; instead a flat Indigo-1000 60% fill) · search input · grouped results by type (Pipelines / Snaps / Accounts / Docs) · keyboard hint footer.",
            usage: "Use as the global navigate-to-result entry point. For filtering content visible on the current screen, use a local Search field instead.",
            behaviors: "Opens on `⌘ K` / `Ctrl K` from any page; Esc closes. Up/Down arrows cycle results; Enter activates. Recent searches show on empty input; typing replaces them with live results."
          }
        },
        {
          file: "preview/components-snapgpt-panel.html",
          name: "SnapGPT panel",
          tagline: "AI assistant side panel — woven through the suite as the AI accent.",
          meta: {
            anatomy: "Right-side panel (drawer-style, inline) · header with SnapGPT mark + close · message stream · prompt composer at the bottom · suggested-action chips above the composer.",
            usage: "Use as the persistent AI surface inside any product. The panel can suggest snaps, explain errors, generate config — never destructive actions without an explicit confirm. Always present AI output as `Editable AI output` so the user can review and adjust.",
            behaviors: "Trigger toggles the panel from the global header SnapGPT icon. Suggestions stream token-by-token; user can stop generation mid-stream. The AI accent (light blue tint) appears on AI-generated content but not on user messages."
          }
        },
        {
          file: "preview/components-stepper.html",
          name: "Stepper",
          tagline: "Numbered progress through a multi-step flow.",
          meta: {
            anatomy: "Numbered circle (28px) per step · label below or to the right · 1px Grey-300 connector between steps · current is Blue-600 filled · complete is Green-600 with a check · upcoming is Grey-300 outlined.",
            options: "Horizontal or vertical. With or without inline descriptions per step. Linear (must complete in order) or freely navigable.",
            usage: "Use for tasks broken into 3–7 explicit steps (wizards, onboarding, API setup). For more than 7 steps, reconsider the task. For non-sequential progress, use Tabs or a Stepper variant.",
            behaviors: "Click a completed step navigates back to it. Linear steppers reject clicks on future steps. Current step is announced to screen readers as `Step N of M`."
          }
        },
        {
          file: "preview/components-table.html",
          name: "Table",
          tagline: "Dense data table — the dominant shape for Manager and Monitor.",
          meta: {
            anatomy: "Toolbar (count + text-button actions left, search + icon buttons right) · 40px header row with Label 14/22 ExtraBold cells, subtle vertical dividers, sort arrow only on the active column, per-column filter-funnel button to the left of the label · 40px data rows (Compact, default) with Body 14/22 Regular text · 1px Grey-200 row dividers · 12px horizontal cell padding · 40px left checkbox column · 80px right action column with right-aligned dots-vertical (always visible) · pagination footer.",
            options: "Toolbar configuration uses two small popovers anchored to the right-side icons: Display (row spacing — Expanded 48 / Compact 40 / Dense 32 — row striping, auto-refresh) and Columns (per-column show/hide checkboxes + drag-to-reorder). Per-column filters open from the funnel button on the column header itself (search input, multi-select checklist, or numeric range, depending on the column type). All changes apply instantly — no Apply/Cancel commit step. Sortable columns (single active sort), resizable columns with a 60px minimum, fluid % column widths down to an 800px table minimum (horizontal scroll inside the component below that), sticky header, sticky first column, bulk selection, expandable rows, inline edit.",
            usage: "Use for any list of structured records — pipelines, snaps, accounts, tasks. Tables scale to thousands of rows with pagination or virtual scroll. For 5 or fewer items, prefer a list of Cards.",
            behaviors: "Sort: click a sortable header to cycle asc → desc → unsorted (restoring original order); only the active column shows an arrow. Filter: click the funnel on a column header to open a per-column filter popover; the funnel turns blue while a filter is active and rows that don't match are hidden instantly. Selection: click the row checkbox to toggle; the header checkbox selects all when any are unselected and clears all otherwise; selecting flips the toolbar count to `N selected` and brings in selection actions (Delete / Clone / Stop / More). Row hover swaps the background to Grey-100. Selected row uses Blue-100. Display popover row-spacing radios apply live as you click. Columns popover checkboxes can't leave zero columns visible; drag handles reorder both the popover list and the actual table columns in lockstep."
          }
        },
        {
          file: "preview/components-tabs.html",
          name: "Tabs",
          tagline: "Horizontal tab bar that swaps views inside a single surface.",
          meta: {
            anatomy: "Tab list with a 1px Grey-300 underline · active tab indicator is a 2px Blue-600 underline above the row · 14/22 ExtraBold labels · 12px horizontal padding · 8px vertical.",
            options: "Sizes: default, compact. With or without leading icons. With optional badge/count next to the label.",
            usage: "Use to swap between views in the same surface that share context (Configuration / Logs / Settings on a pipeline). For independent navigation across pages, use the Left nav.",
            behaviors: "Left/Right arrow moves focus; Home/End jump to first/last. Activation on click or Enter (or automatically on focus in `automatic activation` mode). Indicator slides between tabs in 150ms."
          }
        },
        {
          file: "preview/components-toast.html",
          name: "Toast",
          tagline: "Transient message anchored bottom-right.",
          meta: {
            anatomy: "Card (white, Raised shadow, 4px radius) · leading status icon · message (14/22) · optional inline action link · optional dismiss `×`. Stacks vertically with 8px gap.",
            options: "Tones: neutral / success / warning / danger. With or without action link (`Undo`, `View`).",
            usage: "Use for ephemeral feedback after an action — saves, deletes (with Undo), background process completes. Auto-dismiss after 5s (8s if there is an action link). For errors that need user attention, use a Banner or Modal.",
            behaviors: "Slide in from bottom-right in 200ms. Hover pauses the auto-dismiss timer. Stack is FIFO; new toasts push above older ones. Dismiss via `×`, the action, or auto-timeout."
          }
        },
        {
          file: "preview/components-user-menu.html",
          name: "User menu",
          tagline: "Avatar in the global header opens an account + preferences popover.",
          meta: {
            anatomy: "Trigger: 32px avatar · popover with the user's name and email · org switcher · `Account`, `Preferences`, `Documentation`, `Sign out` rows.",
            usage: "Use as the single location for personal account actions. Org-level admin (users, billing, integrations) belongs in the Admin Manager product, not here.",
            behaviors: "Click outside or Esc closes. Org switcher swaps the active org and refreshes the page (or routes home if the current page does not exist in the new org)."
          }
        }
      ]
    },
    {
      num: "06",
      id: "advanced-editors",
      name: "Advanced editors",
      items: [
        {
          file: "preview/components-api-param-builder.html",
          name: "API parameter builder",
          tagline: "Build a REST request — path, query, headers, body.",
          meta: {
            anatomy: "Method picker (GET/POST/...) · URL field with inline `{path-param}` chips · tabbed editor for Query / Headers / Body / Auth · response preview below.",
            options: "Variants per HTTP method. Body editor mode (Raw / JSON / Form-data / x-www-form-urlencoded).",
            usage: "Use anywhere the user builds an outbound HTTP request — REST Snap, webhook test tool, custom API source. Pair with a `Send test request` action that shows the live response in the preview pane.",
            behaviors: "Path params chip out automatically from `{name}` segments in the URL. Switching body mode preserves edits where possible; otherwise warns before discarding. Auth tab swaps in the relevant auth fields (Basic, Bearer, OAuth, API key)."
          }
        },
        {
          file: "preview/components-code-editor.html",
          name: "Code editor",
          tagline: "Embedded Monaco-style code editor — JSON, JS, SQL, Python.",
          meta: {
            anatomy: "Container with a 1.5px Grey-300 border and 4px radius · 36px-tall toolbar with language picker, format, expand · gutter with line numbers · main editor (SF Mono 13/20) · status bar with cursor position and language.",
            options: "Languages: JSON, JavaScript, SQL, Python, plain text. Sizes: inline (200px), default (320px), expanded (full-screen).",
            usage: "Use anywhere the user writes more than a single line of code — pipeline expressions, custom SQL, JS snippets. For a one-line expression, use a plain Input with mono font.",
            behaviors: "Syntax highlighting and bracket matching per-language. `⌘ /` toggles comment on selection; `⌘ Enter` formats. Errors gutter-mark with Red-600 squiggles; warnings with Yellow-600."
          }
        },
        {
          file: "preview/components-connection-picker.html",
          name: "Connection picker",
          tagline: "Multi-step picker for selecting a connection or creating one inline.",
          meta: {
            anatomy: "Step 1: source type grid (Postgres, Salesforce, REST, etc.) · Step 2: existing connections for the chosen type · Step 3: inline new-connection form when no existing connection fits.",
            usage: "Use when a Snap or step needs to bind to a SaaS endpoint or database. Surfaces existing connections first so the user does not re-enter credentials; falls back to inline creation only when needed.",
            behaviors: "Step 1 is keyboard-navigable as a grid; arrow keys move the focus, Enter selects. Type-ahead in step 1 filters the grid by source name. Step 3 reuses the Form section + Form row primitives."
          }
        },
        {
          file: "preview/components-dynamic-repeater.html",
          name: "Dynamic repeater",
          tagline: "Field group the user can duplicate N times.",
          meta: {
            anatomy: "Vertical stack of identical sub-forms · each repeat has a remove `×` and a drag handle · `+ Add another` button below the stack.",
            options: "Min/max count constraints. Optional `Duplicate` action on each repeat that copies the previous values.",
            usage: "Use for ordered lists of structured items — pipeline parameters, mapping rules, conditional branches. For unordered tag-like lists, use a Chip input instead.",
            behaviors: "Drag handle reorders; Tab moves through fields then advances to the next repeat. Removing the last repeat leaves the empty add-button visible — never an empty stack with no affordance."
          }
        },
        {
          file: "preview/components-json-editor.html",
          name: "JSON editor",
          tagline: "Tree + raw view of a JSON document with inline edit.",
          meta: {
            anatomy: "Toolbar with mode toggle (Tree / Raw) · main pane · in Tree mode each row is a key with a typed editor on the right; in Raw mode it falls back to the Code editor with JSON highlighting.",
            options: "Tree, Raw, Diff (when comparing to a baseline). Read-only mode for output JSON.",
            usage: "Use for any user-edited JSON — pipeline configuration, account credentials, custom payloads. Diff mode pairs naturally with the Save / discard pattern.",
            behaviors: "Switching from Tree to Raw preserves edits; switching back validates and surfaces parse errors inline. Add / remove / reorder operations in Tree mode update the underlying JSON immediately."
          }
        },
        {
          file: "preview/components-key-value-editor.html",
          name: "Key/value editor",
          tagline: "Inline editor for headers, params, and other flat dicts.",
          meta: {
            anatomy: "Table-like rows · two columns (key, value) · trailing remove · `+ Add` row at the bottom · optional disabled-row checkbox column for skipping entries without removing them.",
            options: "Plain k/v, with description column, with disable toggle, with auth/secret masking on the value column.",
            usage: "Use for HTTP headers, query params, environment overrides — any short flat dictionary. For nested structures, use the JSON editor.",
            behaviors: "Tab from value to the next key (auto-appending a new row when on the last value). Drag-handle column reorders rows. Removing a row leaves no trace; disabling keeps the row but greys it and excludes it from the saved value."
          }
        },
        {
          file: "preview/components-schema-builder.html",
          name: "Schema builder",
          tagline: "Visual editor for JSON schemas — output specs, payload shapes.",
          meta: {
            anatomy: "Tree of fields · each field row: name, type, required toggle, default · child fields indented under their parent · `+` adds a child or sibling depending on the focused row.",
            options: "Output schema, input schema, request body, response body. Types: string, number, boolean, object, array, enum.",
            usage: "Use anywhere the user defines a structured payload — Snap output schema, custom API responses, webhook contracts. Pair with a sample-data view that validates against the schema as the user types.",
            behaviors: "Changing a parent type between object / array shows/hides the child editor. Required fields surface a red dot in the tree. Validation errors appear inline next to the offending row."
          }
        }
      ]
    },
    {
      num: "07",
      id: "patterns",
      name: "Patterns",
      items: [
        {
          file: "preview/patterns-agent-activity-panel.html",
          name: "Agent activity panel",
          tagline: "Activity stream of agent tool calls — separate from the chat thread.",
          meta: {
            usage: "Use to surface what an agent is doing as it runs, grouped into Done, In progress, Blocked, and Queued. Kept distinct from the SnapGPT chat thread — linked but never merged into one stream. Only non-empty sections render.",
            behaviors: "The running item carries a 2px `--sl-blue-600` left border, a `--sl-blue-100` tint, and an inline spinner; blocked items use an orange left border. Clicking an item expands an inline tool disclosure with the tool name, request payload, and truncated response plus a `View all` link. The footer tracks overall progress (`Running step 2 of 4` → `Completed in 1m 22s`)."
          }
        },
        {
          file: "preview/patterns-agent-plan.html",
          name: "Agent plan",
          tagline: "Plan-and-execute flow — review, approve, then watch steps run.",
          meta: {
            usage: "Use when an agent proposes a multi-step plan the user should review before it runs. In the review state the user can approve the whole plan or edit/remove individual steps; during execution, completed steps lock while still-pending steps remain editable.",
            behaviors: "Steps move through pending → running → complete. Edit/Remove links appear on row hover and are hidden on running and completed steps. The running step gets a 2px `--sl-blue-600` left border, a `--sl-blue-100` tint, bold label, and comet-tail spinner. The footer swaps from Approve / Edit (review) to Pause / Stop (executing)."
          }
        },
        {
          file: "preview/patterns-agent-recovery.html",
          name: "Agent recovery",
          tagline: "Three distinct recovery paths — misunderstood, tool failure, partial success.",
          meta: {
            usage: "Use when an agent run goes wrong. Three paths: (A) misunderstood request — yellow, with an editable prompt and a Try again; (B) tool call failure — red, with tool detail (tool, status, retries, step) and Retry tool / Skip and continue; (C) partial success — orange, with a step-by-step status list and Retry from step N / Skip / Stop here.",
            behaviors: "Every recovery message is 3-part — what happened · why · what to try next — never a generic `Something went wrong`. Completed steps are always preserved as locked Done rows and are never lost on retry."
          }
        },
        {
          file: "preview/patterns-agent-step-override.html",
          name: "Agent step override",
          tagline: "Mid-execution controls — pause, resume, modify, skip, stop.",
          meta: {
            usage: "Use to give the user control over an agent mid-run. The executing state shows Pause + Stop, with Edit/Skip on hover for pending steps; pausing exposes Resume / Modify / Stop on the active step; modifying opens an inline text input (no modal); skipping dims and strikes through the step.",
            behaviors: "The paused active step takes a yellow border and background; modifying takes a blue border, background, and a focused input with Save / Cancel. Skipped steps drop to 45% opacity with a struck-through label. Completed steps are locked — only upcoming steps ever show Edit / Skip."
          }
        },
        {
          file: "preview/patterns-agent-tool-disclosure.html",
          name: "Agent tool disclosure",
          tagline: "Inline tool call + response — collapsed or expanded, success or error.",
          meta: {
            usage: "Use to show a single agent tool call inline in the chat thread or inside an activity-panel item. Collapsed shows the tool icon, tool name, and a summary chip; expanded reveals the request payload and a truncated response with copy / view full.",
            behaviors: "The chevron rotates up on expand. Success uses a green treatment; error uses a red trigger with an error message and Retry + Skip step affordances. Placed inline between chat messages or inside an activity panel item expansion."
          }
        },
        {
          file: "preview/patterns-ai-confidence.html",
          name: "AI confidence",
          tagline: "Visual treatment for AI output the user should sanity-check.",
          meta: {
            usage: "Use to flag AI output that is below high-confidence threshold — uncertain field mappings, partial generations. The user is asked to confirm or refine before continuing.",
            behaviors: "Low-confidence values render in the AI tint with a Yellow-600 left border and a `Review` chip. Confirming the value clears both the tint and the chip; refining re-runs the generation with the user's correction as context."
          }
        },
        {
          file: "preview/patterns-ai-assisted-input.html",
          name: "AI-assisted input",
          tagline: "Field with an inline AI generate button.",
          meta: {
            usage: "Use on free-text fields where AI can offer a useful first draft — pipeline description, error message, recipe name. The user always sees the AI suggestion before it becomes the value.",
            behaviors: "Click the AI button to generate; the suggestion streams into the field with the AI tint. Accept commits the value; Reject reverts to what was there. While generating, the field is read-only and the AI tint is visible."
          }
        },
        {
          file: "preview/patterns-bulk-selection.html",
          name: "Bulk selection",
          tagline: "Header checkbox + per-row checkbox + sticky action bar.",
          meta: {
            usage: "Use on any Table where the user may operate on more than one row at a time — delete, archive, tag, move. The header row swaps to a `N selected · actions` bar once at least one row is selected.",
            behaviors: "Header checkbox cycles unchecked → all-selected → indeterminate (when only some rows are selected). Shift+click on a row selects the range between the last selection and the clicked row. The action bar persists across pagination — the user's selection is preserved when the page changes."
          }
        },
        {
          file: "preview/patterns-destructive-confirm.html",
          name: "Destructive confirm",
          tagline: "Modal with positive-phrasing button labels.",
          meta: {
            usage: "Use before any irreversible action — deleting a pipeline, removing a connection, ending a session. The modal header is a question (`Are you sure you want to delete this pipeline?`); the body names the object (`'MG-pipeline-Nov2022' will be moved to the Recycle Bin and deleted forever after 30 days.`).",
            behaviors: "Buttons use the `Yes, delete` / `No, keep it` pattern — confirming destructive actions uses positive phrasing instead of generic `OK / Cancel`. The destructive button is red and appears on the right; the safe action is on the left."
          }
        },
        {
          file: "preview/patterns-drag-drop.html",
          name: "Drag and drop",
          tagline: "Drop affordances on canvas, lists, and tables.",
          meta: {
            usage: "Use for spatially-meaningful actions — placing a snap on the canvas, reordering pipeline parameters, dragging a file into an upload zone. For purely abstract reordering, prefer up/down buttons inside each row.",
            behaviors: "Drop targets bump their border to Blue-600 and their fill to Blue-100 on dragover. Invalid drop targets show a `not-allowed` cursor and reject the drop. After drop, the new item animates into place over 150ms; reorder shifts neighbors out of the way."
          }
        },
        {
          file: "preview/patterns-drawer-snapgpt.html",
          name: "Drawer + SnapGPT",
          tagline: "SnapGPT panel composed inside a Drawer surface.",
          meta: {
            usage: "Use when the AI assistant needs to operate on a selected object — explain this snap, refactor this pipeline, validate this config. The drawer carries the selected object's identity; SnapGPT operates inside.",
            behaviors: "Drawer slides in from the right (default 480px wide); SnapGPT message stream fills the body. Closing the drawer also ends the SnapGPT context for that object — open it again to start fresh."
          }
        },
        {
          file: "preview/patterns-editable-ai-output.html",
          name: "Editable AI output",
          tagline: "AI-generated content the user can review and edit before accepting.",
          meta: {
            usage: "Use whenever AI produces content the user is responsible for — generated configs, summaries, queries. The output renders with the AI tint, an explicit `AI-generated` badge, and is fully editable inline before the user commits.",
            behaviors: "Editing removes the AI tint progressively as the user touches each field. An `AI` chip in the corner persists until the user explicitly accepts the output. Reject discards the entire generation and reverts to the previous state."
          }
        },
        {
          file: "preview/patterns-empty-states.html",
          name: "Empty states",
          tagline: "First-run, no-results, and after-clear states.",
          meta: {
            usage: "Empty states explain why the view is empty and what to do next. First-run states include a primary action (`Create your first pipeline`). No-results states explain that the filter is the cause and offer a `Clear filters` action. After-clear states are minimal — they confirm the action without offering more affordance.",
            behaviors: "Illustration is optional and minimal — a flat icon, never a stock illustration of people. The primary action is a Button; secondary actions are text links."
          }
        },
        {
          file: "preview/patterns-error-states.html",
          name: "Error states",
          tagline: "Page-level, surface-level, and inline error layouts.",
          meta: {
            usage: "Page-level errors (404, 500) take the full canvas with an illustration and a way back. Surface-level errors (a failed list, a broken card) render an error message in place of the failed content with a Retry action. Inline errors (a single failed row) use a Red-600 badge and an inline message.",
            behaviors: "All retryable errors include a Retry button; on retry success, the surface returns to normal state without re-rendering surrounding content. Errors never block other parts of the page from working."
          }
        },
        {
          file: "preview/patterns-filter-sort.html",
          name: "Filter, sort, faceted search",
          tagline: "Combined filter bar above a Table — applied filters render as Chips.",
          meta: {
            usage: "Use above any data-dense Table. Filter controls live in a single horizontal bar; applied filters render as removable Chips below the bar. Sort lives in the column headers (click to sort, click again to reverse).",
            behaviors: "Filter changes update the table in 150ms debounce. Chips remove their filter when their `×` is clicked. A `Clear all` link appears once two or more filters are active. URL params encode the filter state so the view is shareable."
          }
        },
        {
          file: "preview/patterns-form-validation.html",
          name: "Form validation",
          tagline: "Inline error messages — specific, never generic.",
          meta: {
            usage: "Validate on blur for individual fields; on submit for the form as a whole. Error messages describe the constraint, not the symptom — `Must be a valid email address` beats `Invalid input`. Show one error per field at a time; if several violations exist, list the highest-priority one.",
            behaviors: "Error state borders the field in Red-600 and surfaces a 12/18 Red-600 message below. On submit, focus jumps to the first invalid field. Clearing the violation removes the error in the same paint frame — no animation."
          }
        },
        {
          file: "preview/patterns-inline-editing.html",
          name: "Inline editing",
          tagline: "Click a value to edit in place — no dedicated edit screen.",
          meta: {
            usage: "Use for fields where the user already sees the value and wants to change it without context-switching — pipeline name, description, account labels. For multi-field changes, use a dedicated edit drawer or modal.",
            behaviors: "Hover surfaces a subtle pencil icon. Click activates the editor with the current value selected. Enter or click-outside commits; Esc cancels. Disabled fields render the value with no hover affordance."
          }
        },
        {
          file: "preview/patterns-keyboard-shortcuts.html",
          name: "Keyboard shortcuts",
          tagline: "Shortcut conventions across the suite.",
          meta: {
            usage: "Use the suite's keyboard conventions: `⌘ K` opens the global search overlay; `⌘ S` saves; `⌘ /` toggles SnapGPT; `?` opens the shortcut cheat-sheet. Single-key shortcuts (without modifier) only work when no input is focused — never hijack typing.",
            behaviors: "All shortcuts surface in the `?` cheat-sheet. Custom shortcuts inside a product (e.g., Designer's `R` for run pipeline) list under their own product section."
          }
        },
        {
          file: "preview/patterns-pagination.html",
          name: "Pagination",
          tagline: "Page number controls + page size selector for long tables.",
          meta: {
            usage: "Use on Tables over 100 rows. Default page size is 25; allow 10 / 25 / 50 / 100. Show first / last / prev / next plus the current page in a row of pill buttons.",
            behaviors: "Clicking a page number jumps to that page. Changing the page size resets to page 1. The pagination bar sticks to the bottom of the table when the user scrolls vertically."
          }
        },
        {
          file: "preview/patterns-save-discard.html",
          name: "Save / discard",
          tagline: "Sticky action bar that surfaces when the user has unsaved changes.",
          meta: {
            usage: "Use on any edit surface with multiple fields where the user makes changes gradually — account settings, snap properties, schema editors. The bar pins to the bottom and shows once the form is dirty.",
            behaviors: "Save commits and dismisses the bar with a success Toast. Discard reverts to the last-saved state with a confirm modal if there are non-trivial changes. Navigating away while dirty triggers the unsaved-changes confirm modal."
          }
        },
        {
          file: "preview/patterns-undo-toast.html",
          name: "Undo via toast",
          tagline: "Reversible destructive actions skip the confirm modal and offer Undo in the toast.",
          meta: {
            usage: "Prefer this over a confirm modal whenever the operation is genuinely reversible within a short window — archive a record, remove a list item, dismiss a notification. The toast persists 8 seconds with the Undo link active.",
            behaviors: "Acting on Undo reverses the operation immediately and confirms with a second toast (`Pipeline restored`). After 8 seconds the toast auto-dismisses and the operation becomes permanent."
          }
        },
        {
          file: "preview/patterns-wizard.html",
          name: "Wizard / multi-step flow",
          tagline: "Stepper-driven flow for onboarding and complex setup.",
          meta: {
            usage: "Use for tasks that genuinely break into 3–7 sequential steps where each step builds on the last (account setup, pipeline scaffolding, integration onboarding). For shorter flows, use a single Modal with sections. For longer flows, reconsider.",
            behaviors: "Stepper at the top tracks progress. `Back` returns without losing values; `Next` validates the current step before advancing. Unsaved-changes confirm appears if the user closes mid-flow."
          }
        }
      ]
    },
    {
      num: "08",
      id: "templates",
      name: "Templates",
      items: [
        {
          file: "preview/templates-designer.html",
          name: "Designer · Empty canvas",
          tagline: "Full Designer template — global header, left rail, canvas, toolbar, properties panel.",
          meta: {
            usage: "Use as the reference layout for the Designer workspace. Composes the Global header, Left nav (snap palette), Canvas, Toolbar (Build / Execution / Configuration / Version Control / Transfer groups), and the right Properties panel. Empty state on the canvas shows the `Create your first pipeline` primary action.",
            behaviors: "Toolbar collapses to icons-only (state A) or expands with labels and group headers (state B); the chevron toggles. Left rail can be resized between 200–360px and persists per user. The properties panel is hidden until a snap is selected; selecting one opens it in the right column."
          }
        }
      ]
    },
    {
      num: "09",
      id: "data-viz",
      name: "Data visualization",
      items: [
        {
          file: "preview/dataviz-bar.html",
          name: "Bar chart",
          tagline: "Vertical or horizontal bars — ranking and discrete comparisons.",
          meta: {
            anatomy: "Bars at 4px radius on the top edge (vertical) or right edge (horizontal); 1px gap between bars at narrow widths; grid lines Grey-200; axis labels Grey-700.",
            usage: "Use horizontal bars when category labels are long (snap names, error types); vertical bars when categories are short and ordered (months, sizes). Sort bars by value unless category order is canonical (months).",
            behaviors: "Hover lifts the bar to 1px Blue-600 outline and shows the exact value."
          }
        },
        {
          file: "preview/dataviz-calendar.html",
          name: "Calendar heatmap",
          tagline: "GitHub-style daily heatmap over a quarter or year.",
          meta: {
            usage: "Use to expose seasonality and weekly patterns across a long window — daily run volume, daily failure counts. The sequential palette goes from Grey-100 (zero) to Green-600 (max), preserving the empty-day reading.",
            behaviors: "Hover surfaces the date and value in a tooltip. Click drills into the day's runs."
          }
        },
        {
          file: "preview/dataviz-empty.html",
          name: "Chart empty state",
          tagline: "No-data message inside the chart area — never a blank canvas.",
          meta: {
            usage: "Use when a chart's query returns no rows. Render a centered icon (`bar-chart-3-off` or similar) + a one-line message explaining why (`No runs in the selected window`) + a `Clear filters` action if the empty state is filter-induced."
          }
        },
        {
          file: "preview/dataviz-loading.html",
          name: "Chart loading state",
          tagline: "Skeleton bars and lines while a chart fetches.",
          meta: {
            usage: "Use the chart-shape-matching skeleton — bar chart loading uses Skeleton bars, line chart uses a faint flat line, sparkline uses a thin grey rectangle. Animation is the standard Skeleton pulse, no spinner."
          }
        },
        {
          file: "preview/dataviz-combo.html",
          name: "Combo (bar + line)",
          tagline: "Bars and a line on a single chart with dual axes.",
          meta: {
            usage: "Use when comparing two unlike units that move together — throughput (bars, left axis) vs latency (line, right axis). Color the axes to match their series so readers do not misalign. Never plot more than one of each shape.",
            behaviors: "Tooltip aligns to the bar center and shows both values for the same time bucket."
          }
        },
        {
          file: "preview/dataviz-donut.html",
          name: "Donut chart",
          tagline: "Proportion of total across 3–5 categories.",
          meta: {
            anatomy: "Donut (not pie — center stays open for total or label) · max 5 slices · slices ordered by size (largest at 12 o'clock) · legend with values to the right.",
            usage: "Use for a small bounded set of categories whose proportion to the whole is the point. Never use for more than 5 categories or trends over time. For stacked proportions over time, use a Stacked area.",
            behaviors: "Hover highlights a slice and surfaces value + percent. Click filters the underlying view to that slice (when available)."
          }
        },
        {
          file: "preview/dataviz-gauge.html",
          name: "Gauge",
          tagline: "Arc showing a single value against a known range — capacity, utilization.",
          meta: {
            anatomy: "240° arc (default) or 180° arc · filled portion uses a sequential ramp · centered value with units below · optional zone bands (good / warning / danger).",
            usage: "Use for a single bounded value where 100% is meaningful — disk capacity, license usage, rate-limit budget. For values without a natural ceiling, use a sparkline or a KPI card instead."
          }
        },
        {
          file: "preview/dataviz-heatmap.html",
          name: "Heatmap",
          tagline: "Two-axis matrix of values colored by a sequential ramp.",
          meta: {
            usage: "Use for hour-of-day × day-of-week patterns, snap × pipeline performance grids. Cells are square or 1.5:1 wide; sequential palette goes from Grey-50 to the saturated step.",
            behaviors: "Hover highlights the row + column and surfaces the exact value."
          }
        },
        {
          file: "preview/dataviz-histogram.html",
          name: "Histogram",
          tagline: "Distribution of a numeric value — bin width chosen by the chart.",
          meta: {
            usage: "Use for run-duration distribution, payload-size distribution, error-rate distribution. Mark p50/p95/p99 with dashed vertical lines. Bins default to Freedman–Diaconis; allow the user to override for known-quirky data."
          }
        },
        {
          file: "preview/dataviz-hive-plot.html",
          name: "Hive plot",
          tagline: "Krzywinski-style 2- or 3-axis hive — categorical layout for many-to-many.",
          meta: {
            usage: "Use when the network has natural axis categories — Sources → Pipelines → Destinations (3-axis) or Sources ↔ Destinations (2-axis). Axis positions are log-scale by degree. Edge color follows the source axis; never connect nodes on the same axis.",
            behaviors: "Selection highlights one node with a dashed halo, brightens 1-hop neighbors, and dims the rest. The optional `node ribbons` variant uses concentric rings to encode a secondary metric (volume tiers) — use rings OR tick labels, never both."
          }
        },
        {
          file: "preview/dataviz-kpi.html",
          name: "KPI card",
          tagline: "Single big number, label, optional trend chip and sparkline.",
          meta: {
            anatomy: "Card · 10/14 ExtraBold uppercase label · 32–48px ExtraBold value · optional sparkline below · optional `+/-` trend chip.",
            usage: "Use for one number that matters — total pipelines, success rate, throughput. Pair with a trend so the user reads it as motion, not a static value. For multiple related numbers, use a small-multiple of KPI cards rather than one card with several values.",
            behaviors: "Hover surfaces the underlying time window in a tooltip. Click navigates to the drill-down view."
          }
        },
        {
          file: "preview/dataviz-sankey.html",
          name: "Sankey diagram",
          tagline: "Flow from sources to destinations — ribbon width = volume.",
          meta: {
            usage: "Use to expose record flow Sources → Pipelines → Destinations or any other many-to-many flow. Ribbon width encodes volume; node height encodes total throughput at that node. For 2-axis flows, prefer Hive plot.",
            behaviors: "Hover highlights a ribbon and dims the rest, surfacing the per-flow volume."
          }
        },
        {
          file: "preview/dataviz-sparkline.html",
          name: "Sparkline",
          tagline: "Small inline trend line — no axes, no labels.",
          meta: {
            usage: "Use inside KPI cards, table rows, and dense layouts where shape matters more than exact values. Width 60–120px, height 16–24px. Never add axis ticks or labels — the value is the trend.",
            behaviors: "Hover surfaces a single tooltip with the value and timestamp at the cursor position."
          }
        },
        {
          file: "preview/dataviz-stacked.html",
          name: "Stacked area",
          tagline: "Time series where the layers stack to show share of total.",
          meta: {
            usage: "Use when both total and composition over time matter — total runs split by status, throughput split by snap type. Order the stack with the largest/most-stable category at the bottom. Use a sequential or categorical palette consistent with the rest of the page.",
            behaviors: "Hover surfaces both the absolute value and the share of total for each layer at the cursor."
          }
        },
        {
          file: "preview/dataviz-gantt.html",
          name: "Swim-lane Gantt",
          tagline: "Pipeline runs along a timeline — color = final status.",
          meta: {
            usage: "Use for run-history visualization in Monitor. One row per pipeline; bars are run durations colored by final status (pastel-200 bg + dark-800 text). A continuous `streaming` lane marks realtime pipelines.",
            behaviors: "Hover lifts the bar and surfaces run id, duration, status, snaplex. Click drills into the run's detail view."
          }
        },
        {
          file: "preview/dataviz-timeseries.html",
          name: "Time series",
          tagline: "Line chart over time — single or multi-line.",
          meta: {
            anatomy: "X axis is time, ascending left to right. 1.5px lines using the categorical palette. Grid lines Grey-200; axis labels Grey-700. Markers on data points appear on hover.",
            usage: "Use for any over-time trend with 1–5 series. For more than 5 series, use small multiples. For percentages of a total over time, use Stacked area instead.",
            behaviors: "Hover snaps a crosshair to the nearest x value and shows a multi-series tooltip. Click-drag selects a range and zooms in; double-click resets the zoom."
          }
        },
        {
          file: "preview/dataviz-usage.html",
          name: "Usage rules",
          tagline: "When to reach for each chart type — and when not to.",
          meta: {
            usage: "Use this card as the decision tree for picking a chart. The default is the simplest visualization that answers the question — a number for a KPI, a sparkline for a trend, a small-multiple grid before a giant chart. Never use a chart to decorate; if the chart does not answer a specific question, remove it."
          }
        }
      ]
    },
    {
      num: "10",
      id: "dataviz-colors",
      name: "Dataviz · Colors",
      items: [
        {
          file: "preview/dataviz-categorical.html",
          name: "Palette · Categorical",
          tagline: "Five-color palette for unordered categories — designed for light and dark backgrounds.",
          meta: {
            usage: "Use the categorical palette only when categories are unordered. The five colors are picked to keep relative perceived weight equal; do not extend with extra colors or you will read order into the order. For more than five categories, use a series of small-multiple charts."
          }
        },
        {
          file: "preview/dataviz-diverging.html",
          name: "Palette · Diverging",
          tagline: "Two-hue ramps for values around a meaningful midpoint.",
          meta: {
            usage: "Use a diverging palette for values that fan out from zero or a target — deltas, sentiment, percent change. The midpoint is always Grey or off-white; ends are color-coded by direction. Pair with a clear legend showing the midpoint and the units."
          }
        },
        {
          file: "preview/dataviz-sequential.html",
          name: "Palette · Sequential",
          tagline: "Single-hue ramps for ordered values — counts, magnitudes, percentages.",
          meta: {
            usage: "Use a sequential ramp when the value has a meaningful order with one extreme. Most often Green (success / volume) or Blue (neutral). Encode larger values with the darker step. For two-sided values around a meaningful zero, use a Diverging palette."
          }
        },
        {
          file: "preview/dataviz-status.html",
          name: "Status colors",
          tagline: "Green / Yellow / Red / Blue mapping for pipeline run states.",
          meta: {
            usage: "Use status colors consistently across charts: Green-600 = success, Red-600 = failed, Yellow-600 = warning, Blue-600 = running, Grey-500 = queued or idle. Never re-map the colors per chart — operators learn the mapping once and rely on it across the suite."
          }
        }
      ]
    }
  ]
};
