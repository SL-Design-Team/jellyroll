#!/usr/bin/env node
/* Build the PUBLIC npm package into npm-dist/.
 *
 * The public package must never contain Acherus Grotesque binaries: they are
 * licensed and cannot be redistributed. The swap happens here, at the package
 * boundary, so colors_and_type.css keeps its single `@import "./fonts.css"`
 * line in both the public package and the internal (font-bearing) one.
 *
 *   repo      fonts.css = licensed @font-face rules  -> fonts/*.woff2
 *   published fonts.css = fonts-fallback.css content -> local() + overrides
 *
 * assertNoFontBinaries() below is a hard gate, not a formality. If it ever
 * throws, do not "fix" it by loosening the check.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'npm-dist');

const PKG_NAME = process.env.JELLYROLL_PKG_NAME || '@snaplogic-ux/jellyroll';
const PKG_VERSION = process.env.JELLYROLL_PKG_VERSION || '2.0.0';

const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const write = (rel, body) => {
  const dest = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, body);
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// --- CSS -------------------------------------------------------------------
write('colors_and_type.css', read('colors_and_type.css'));
write('card.css', read('preview/card.css'));

// fonts.css is published as the fallback layer. Strip the self-import that
// only makes sense in the repo, where fonts.css is the licensed file.
const fallback = read('fonts-fallback.css');
write('fonts-fallback.css', fallback);
write(
  'fonts.css',
  '/* Published build: this is the metric-matched fallback layer.\n' +
    '   The licensed Acherus Grotesque binaries are NOT redistributed here.\n' +
    '   Self-host Acherus and declare your own @font-face rules to get the\n' +
    '   brand face; --font-sans already lists it first. */\n\n' +
    fallback
);

// Tier 1 fallback: opt-in, and the only font binaries allowed in the package.
// Montserrat is OFL-1.1, so unlike Acherus it may be redistributed. The OFL
// requires the license text ship alongside it.
write(
  'fallback-web.css',
  read('fallback-web.css').split('@snaplogic-ux/jellyroll').join(PKG_NAME)
);
for (const f of fs.readdirSync(path.join(ROOT, 'vendor/montserrat'))) {
  const src = path.join(ROOT, 'vendor/montserrat', f);
  const dest = path.join(OUT, 'vendor/montserrat', f);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

// --- Catalog + agent assets ------------------------------------------------
write('jellyroll.json', read('jellyroll.json'));
write('llms.txt', read('llms.txt'));

for (const f of fs.readdirSync(path.join(ROOT, 'snippets'))) {
  write(path.join('snippets', f), read(path.join('snippets', f)));
}

// --- Manifest --------------------------------------------------------------
write(
  'package.json',
  JSON.stringify(
    {
      name: PKG_NAME,
      version: PKG_VERSION,
      description:
        "Design tokens and CSS for JellyRoll, SnapLogic's design system.",
      keywords: ['design-system', 'design-tokens', 'css', 'snaplogic', 'jellyroll'],
      homepage: 'https://sl-design-team.github.io/jellyroll/',
      repository: {
        type: 'git',
        url: 'git+https://github.com/SL-Design-Team/jellyroll.git',
      },
      license: 'MIT',
      sideEffects: ['*.css'],
      exports: {
        './tokens.css': './colors_and_type.css',
        './fonts.css': './fonts.css',
        './fonts-fallback.css': './fonts-fallback.css',
        './fallback-web.css': './fallback-web.css',
        './card.css': './card.css',
        './jellyroll.json': './jellyroll.json',
        './llms.txt': './llms.txt',
        './snippets/*': './snippets/*',
        './package.json': './package.json',
      },
      publishConfig: { access: 'public' },
    },
    null,
    2
  ) + '\n'
);

// README refers to the package by name in install/import lines; keep those
// in sync with PKG_NAME rather than hardcoding a scope in two places.
write('FONTS.md', read('FONTS.md').split('@snaplogic-ux/jellyroll').join(PKG_NAME));
write('README.md', read('npm/README.npm.md').split('@snaplogic-ux/jellyroll').join(PKG_NAME));
write('LICENSE', read('npm/LICENSE'));

// --- Hard gate -------------------------------------------------------------
// Acherus Grotesque is licensed and must NEVER ship. Montserrat is OFL-1.1 and
// is allowlisted by exact filename. Anything else is refused: an unrecognised
// font file is assumed unlicensed until someone proves otherwise HERE, by name.
//
// Do not relax this by widening the pattern. Add a filename, and its license
// file, or leave the font out.
const BINARY_EXT = /\.(woff2?|otf|ttf|eot)$/i;
const ALLOWED_FONTS = new Set([
  'vendor/montserrat/montserrat-latin-wght-normal.woff2',
  'vendor/montserrat/montserrat-latin-wght-italic.woff2',
]);
const LICENSE_FOR = { 'vendor/montserrat': 'vendor/montserrat/OFL.txt' };

function assertFontsAreRedistributable(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const rel = path.relative(OUT, full);
    if (entry.isDirectory()) {
      assertFontsAreRedistributable(full);
      continue;
    }
    if (/acherus/i.test(entry.name)) {
      throw new Error(`Refusing to build: Acherus asset in package -> ${rel}`);
    }
    if (BINARY_EXT.test(entry.name) && !ALLOWED_FONTS.has(rel)) {
      throw new Error(
        `Refusing to build: font binary not on the redistributable allowlist -> ${rel}`
      );
    }
    if (/\.css$/i.test(entry.name)) {
      const css = fs.readFileSync(full, 'utf8');
      for (const m of css.matchAll(/url\(\s*["']?([^"')]+\.(?:woff2?|otf|ttf|eot))/gi)) {
        const target = path
          .relative(OUT, path.resolve(path.dirname(full), m[1]))
          .split(path.sep)
          .join('/');
        if (!ALLOWED_FONTS.has(target)) {
          throw new Error(
            `Refusing to build: ${rel} references a non-allowlisted font -> ${target}`
          );
        }
      }
    }
  }
}
assertFontsAreRedistributable(OUT);

// Every allowlisted font must ship with its license text (OFL-1.1 requires it).
for (const f of ALLOWED_FONTS) {
  if (!fs.existsSync(path.join(OUT, f))) continue;
  const lic = LICENSE_FOR[path.dirname(f)];
  if (!lic || !fs.existsSync(path.join(OUT, lic))) {
    throw new Error(`Refusing to build: ${f} ships without its license (${lic})`);
  }
}

console.log(`Built ${PKG_NAME}@${PKG_VERSION} -> npm-dist/  (Acherus excluded; fonts allowlisted)`);
