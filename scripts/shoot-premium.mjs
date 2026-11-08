import { chromium } from '@playwright/test';
const base = 'http://localhost:4321';
const pages = [
  ['de/', 'home-de'], ['de/ueber-min/', 'about-de'], ['de/behandlungen/', 'treatments-de'],
  ['de/erster-besuch/', 'first-visit-de'], ['de/preise-krankenkasse/', 'prices-de'],
  ['de/termin-buchen/', 'booking-de'], ['de/kontakt/', 'contact-de'], ['de/impressum/', 'imprint-de'],
  ['en/', 'home-en'], ['en/book-appointment/', 'booking-en'],
  ['zh/', 'home-zh'], ['zh/yuyue/', 'booking-zh'],
];
const vp = [
  [1440, 900], [1366, 768], [1024, 768], [768, 1024], [390, 844], [320, 700],
];
const browser = await chromium.launch();
for (const [w, h] of vp) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  const page = await ctx.newPage();
  for (const [path, name] of pages) {
    try {
      await page.goto(base + "/" + path, { waitUntil: 'networkidle', timeout: 20000 });
      await page.waitForTimeout(900);
      await page.screenshot({ path: `test-results/premium-shots/${name}-${w}x${h}-full.png`, fullPage: true });
      await page.screenshot({ path: `test-results/premium-shots/${name}-${w}x${h}-fold.png`, fullPage: false });
    } catch (e) {
      console.log('FAIL', path, w, h, e.message);
    }
  }
  await ctx.close();
  console.log('done', w + 'x' + h);
}
await browser.close();
console.log('ALL DONE');
