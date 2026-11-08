import { chromium } from '@playwright/test';
const base = 'http://localhost:4321';
const flows = [
  ['de/termin-buchen/', 'booking-de'],
  ['en/book-appointment/', 'booking-en'],
  ['zh/yuyue/', 'booking-zh'],
];
const vp = [[1440, 900], [390, 844]];
const browser = await chromium.launch();
for (const [w, h] of vp) {
  for (const [path, name] of flows) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    try {
      await page.goto(`${base}/${path}`, { waitUntil: 'load', timeout: 20000 });
      await page.waitForSelector('.js-booking-widget', { timeout: 10000 });
      await page.waitForTimeout(800);
      const shot = async (n) => page.screenshot({ path: `test-results/premium-shots/${name}-step${n}-${w}x${h}.png`, fullPage: true });
      await shot(1);
      await page.locator('.booking-service-option').first().click({ timeout: 4000 }).catch(()=>{});
      await page.locator('.js-booking-next').click({ timeout: 4000 });
      await page.waitForTimeout(400);
      await shot(2);
      await page.locator('.cal-day:not(.cal-disabled):not([disabled])').nth(6).click({ timeout: 3000 }).catch(async ()=>{
        await page.locator('[class*="cal"] [class*="day"], .calendar-mini-grid button, .time-slots-grid button').nth(6).click().catch(()=>{});
      });
      await page.waitForTimeout(300);
      await page.locator('.time-slot, .time-slots-grid button').first().click({ timeout: 3000 }).catch(()=>{});
      await page.waitForTimeout(300);
      await shot('2b');
      await page.locator('.js-booking-next').click({ timeout: 4000 }).catch(()=>{});
      await page.waitForTimeout(400);
      await shot(3);
      await page.locator('#booking-name').fill('Anna Muster').catch(()=>{});
      await page.locator('#booking-phone').fill('+41 79 000 00 00').catch(()=>{});
      await page.locator('#booking-email').fill('anna@example.com').catch(()=>{});
      await page.locator('.js-booking-next').click({ timeout: 4000 }).catch(()=>{});
      await page.waitForTimeout(400);
      await shot(4);
      console.log('done', name, w + 'x' + h);
    } catch (e) {
      console.log('FAIL', name, w, e.message.split('\n')[0]);
    }
    await ctx.close();
  }
}
await browser.close();
console.log('DONE');
