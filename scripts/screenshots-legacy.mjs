import { chromium } from '@playwright/test';
const base = 'http://localhost:4321';
const routes = { de: '/de/beschwerden/', en: '/en/symptoms/', zh: '/zh/changjian-jiankang-wenti/' };
const widths = [1440, 768, 390];
const browser = await chromium.launch();
for (const [loc, route] of Object.entries(routes)) {
  for (const w of widths) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `docs/screenshots/legacy-content/symptoms-${loc}-${w}px.png`, fullPage: true });
    await page.close();
  }
}
const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(base + '/de/kontakt/', { waitUntil: 'networkidle' });
await p.screenshot({ path: 'docs/screenshots/legacy-content/contact-de-1440px.png', fullPage: true });
await p.goto(base + '/de/termin-buchen/', { waitUntil: 'networkidle' });
await p.screenshot({ path: 'docs/screenshots/legacy-content/booking-de-1440px.png', fullPage: true });
await p.setViewportSize({ width: 390, height: 844 });
await p.goto(base + '/de/', { waitUntil: 'networkidle' });
await p.locator('.mobile-menu-toggle').click();
await p.waitForTimeout(600);
await p.screenshot({ path: 'docs/screenshots/legacy-content/mobile-menu-de-390px.png', fullPage: true });
await browser.close();
console.log('done');
