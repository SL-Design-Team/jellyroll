#!/usr/bin/env node
/*
 * Build agent-readable assets from the catalog source of truth.
 *
 *   node scripts/build-agent-assets.js
 *
 * Reads  : _data/items.js  (catalog) + _data/tokens.js (per-asset tokens)
 * Writes : jellyroll.json  — structured catalog (sections → items + tokens)
 *          llms.txt        — llmstxt.org index for AI agents
 *          injects a <script type="application/json" id="jellyroll-meta">
 *          block into the <head> of every catalog preview (idempotent).
 *
 * Output is deterministic (no timestamps) so re-running only diffs real
 * content changes. Run this after editing _data/items.js or _data/tokens.js.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://sl-design-team.github.io/jellyroll';

// ── Load the catalog (both files assign to window.*) ───────────────────────
global.window = {};
require(path.join(ROOT, '_data/items.js'));
require(path.join(ROOT, '_data/tokens.js'));
const DATA = global.window.JELLYROLL_DATA;
const TOKENS = global.window.JELLYROLL_TOKENS || {};

if (!DATA || !Array.isArray(DATA.sections)) {
  console.error('Could not load JELLYROLL_DATA from _data/items.js');
  process.exit(1);
}

const SUMMARY =
  "SnapLogic's code-first design system. The live repo is the source of truth: " +
  'token CSS, one self-contained preview HTML per asset, webfonts, and brand assets. ' +
  'Fetch the token CSS and the relevant preview files before implementing a component.';

// ── jellyroll.json ─────────────────────────────────────────────────────────
function buildCatalog() {
  return {
    name: 'JellyRoll · SnapLogic Design System',
    summary: SUMMARY,
    site: SITE + '/',
    tokensCss: SITE + '/colors_and_type.css',
    sections: DATA.sections.map(sec => ({
      num: sec.num,
      id: sec.id,
      name: sec.name,
      description: sec.description || '',
      items: sec.items.map(it => {
        const out = {
          name: it.name,
          file: it.file,
          url: SITE + '/' + it.file,
          tagline: it.tagline || '',
        };
        if (it.meta) {
          for (const k of ['anatomy', 'options', 'usage', 'behaviors']) {
            if (it.meta[k]) out[k] = it.meta[k];
          }
        }
        const toks = TOKENS[it.file];
        if (toks && toks.length) out.tokens = toks;
        return out;
      }),
    })),
  };
}

// ── llms.txt (llmstxt.org format) ───────────────────────────────────────────
function buildLlmsTxt() {
  const lines = [];
  lines.push('# JellyRoll · SnapLogic Design System');
  lines.push('');
  lines.push('> ' + SUMMARY);
  lines.push('');
  lines.push('The structured catalog (every component with anatomy, usage, and tokens as JSON) ');
  lines.push('is at [jellyroll.json](' + SITE + '/jellyroll.json). The complete token system ');
  lines.push('(color ramps, semantic tokens, spacing, radii, shadows, type) is at ');
  lines.push('[colors_and_type.css](' + SITE + '/colors_and_type.css). Each preview HTML is ');
  lines.push('self-contained — inline component CSS, token usage, and markup. Prefer semantic ');
  lines.push('tokens over raw ramp variables. Sentence case; no emoji; Lucide icons only.');
  lines.push('');
  for (const sec of DATA.sections) {
    lines.push('## ' + sec.name);
    if (sec.description) {
      lines.push('');
      lines.push(sec.description);
    }
    lines.push('');
    for (const it of sec.items) {
      const tag = it.tagline ? ': ' + it.tagline : '';
      lines.push('- [' + it.name + '](' + SITE + '/' + it.file + ')' + tag);
    }
    lines.push('');
  }
  return lines.join('\n').replace(/\n+$/, '\n');
}

// ── Inline metadata injected into each preview's <head> ─────────────────────
const META_RE =
  /\n?[ \t]*<script type="application\/json" id="jellyroll-meta">[\s\S]*?<\/script>\n?/;

function injectInlineMeta() {
  let touched = 0, missing = 0, skipped = 0;
  for (const sec of DATA.sections) {
    for (const it of sec.items) {
      const abs = path.join(ROOT, it.file);
      if (!fs.existsSync(abs)) { missing++; continue; }
      let html = fs.readFileSync(abs, 'utf8');
      const meta = {
        name: it.name,
        section: sec.name,
        url: SITE + '/' + it.file,
        tagline: it.tagline || '',
      };
      if (it.meta) {
        for (const k of ['anatomy', 'options', 'usage', 'behaviors']) {
          if (it.meta[k]) meta[k] = it.meta[k];
        }
      }
      const toks = TOKENS[it.file];
      if (toks && toks.length) meta.tokens = toks.map(t => t.name);
      const block =
        '<script type="application/json" id="jellyroll-meta">\n' +
        JSON.stringify(meta, null, 2) +
        '\n</script>';
      // Remove any prior block (idempotent), then inject before </head>.
      html = html.replace(META_RE, '\n');
      if (!/<\/head>/i.test(html)) { skipped++; continue; }
      html = html.replace(/([ \t]*)<\/head>/i, block + '\n$1</head>');
      fs.writeFileSync(abs, html);
      touched++;
    }
  }
  return { touched, missing, skipped };
}

// ── Alphabetical-order check ────────────────────────────────────────────────
// Most sections list their items A→Z. These two are intentionally ordered by
// meaning (Foundations follows a learning order; Color leads with the ramps),
// so they're exempt. Warns — never fails — when any other section drifts.
const UNSORTED_SECTIONS = new Set(['foundations', 'color']);
function checkAlphabetical() {
  const warnings = [];
  for (const sec of DATA.sections) {
    if (UNSORTED_SECTIONS.has(sec.id)) continue;
    for (let i = 1; i < sec.items.length; i++) {
      const prev = sec.items[i - 1].name;
      const curr = sec.items[i].name;
      if (prev.localeCompare(curr, 'en', { sensitivity: 'base' }) > 0) {
        warnings.push('  ' + sec.name + ': "' + curr + '" should come before "' + prev + '"');
      }
    }
  }
  return warnings;
}

// ── Run ─────────────────────────────────────────────────────────────────────
const catalog = buildCatalog();
fs.writeFileSync(path.join(ROOT, 'jellyroll.json'), JSON.stringify(catalog, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'llms.txt'), buildLlmsTxt());
const inj = injectInlineMeta();

const itemCount = DATA.sections.reduce((n, s) => n + s.items.length, 0);
console.log('jellyroll.json : ' + DATA.sections.length + ' sections, ' + itemCount + ' items');
console.log('llms.txt       : written');
console.log('inline meta    : ' + inj.touched + ' previews updated, ' +
  inj.missing + ' missing file(s), ' + inj.skipped + ' without <head>');

const orderWarnings = checkAlphabetical();
if (orderWarnings.length) {
  console.warn('\n⚠ alphabetical order — ' + orderWarnings.length + ' item(s) out of place:');
  orderWarnings.forEach(w => console.warn(w));
} else {
  console.log('order check    : all sortable sections alphabetical');
}
