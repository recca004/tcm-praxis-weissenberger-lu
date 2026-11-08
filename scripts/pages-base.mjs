// Prefix root-absolute URLs in dist/ with the GitHub Pages base path.
// GitHub Pages serves this repo under /<repo>/ — the site is built with
// root-absolute links (/de/..., /assets/...), so CI rewrites them post-build.
// Dev, preview and the e2e suite are unaffected (they run on the unmodified build).
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = process.env.PAGES_BASE || '/tcm-praxis-weissenberger-lu';
const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* walk(p);
    else yield p;
  }
}

let htmlFiles = 0, cssFiles = 0;
for (const file of walk(DIST)) {
  if (file.endsWith('.html')) {
    const html = readFileSync(file, 'utf8');
    const out = html
      // quoted root-absolute URLs: href="/de/", src="/_astro/…", location.replace(`/de/`)
      .replace(/(["'`])\/(?!\/)/g, `$1${BASE}/`)
      // srcset continuation entries: /a.webp 800w, /b.webp 1600w
      .replace(/, \/(.)/g, `, ${BASE}/$1`)
      // meta refresh: content="0; url=/de/"
      .replace(/url=\/(.)/g, `url=${BASE}/$1`)
      // staging preview must not be indexed
      .replace(/<\/title>/, `</title><meta name="robots" content="noindex,nofollow">`);
    if (out !== html) { writeFileSync(file, out); htmlFiles++; }
  } else if (file.endsWith('.css')) {
    const css = readFileSync(file, 'utf8');
    const out = css.replace(/url\((['"]?)\/(?!\/)/g, `url($1${BASE}/`);
    if (out !== css) { writeFileSync(file, out); cssFiles++; }
  }
}
console.log(`pages-base: prefixed ${htmlFiles} HTML + ${cssFiles} CSS files with base "${BASE}"`);
