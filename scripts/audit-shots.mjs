// Audit screenshots: capture key pages at multiple widths for design review.
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const BASE = process.env.AUDIT_BASE || 'http://localhost:3000';
const OUT = process.env.AUDIT_OUT || 'docs/screenshots/audit';
const PAGES = [
  ['home', '/de/'],
  ['about', '/de/ueber-min/'],
  ['treatments', '/de/behandlungen/'],
  ['first-visit', '/de/erster-besuch/'],
  ['prices', '/de/preise-krankenkasse/'],
  ['booking', '/de/termin-buchen/'],
  ['contact', '/de/kontakt/'],
];
const SIZES = process.env.AUDIT_SIZES
  ? JSON.parse(process.env.AUDIT_SIZES)
  : [[1440, 900, '1440'], [768, 1024, '768'], [390, 844, '390']];

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
for (const [name, path] of PAGES) {
  for (const [w, h, tag] of SIZES) {
    const page = await browser.newPage({ viewport: { width: w, height: h }, reducedMotion: 'reduce' });
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${name}-${tag}.png`, fullPage: true });
    await page.close();
    console.log(`${name}-${tag}.png`);
  }
}
await browser.close();
