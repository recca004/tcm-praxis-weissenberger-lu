import { chromium } from '@playwright/test';
const browser = await chromium.launch();
// 1) hero at 1024x768 and 1366x768 — clip check
for (const [w,h] of [[1024,768],[1366,768],[1440,900],[2560,1080]]) {
  const ctx = await browser.newContext({ viewport:{width:w,height:h} });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321/de/', {waitUntil:'load'});
  await page.waitForTimeout(900);
  await page.screenshot({path:`test-results/premium-shots/verify-hero-${w}x${h}.png`});
  await ctx.close();
}
// 2) booking steps bar at 390 + step4 desktop
for (const [w,h] of [[390,844],[1440,900]]) {
  const ctx = await browser.newContext({ viewport:{width:w,height:h} });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321/de/termin-buchen/', {waitUntil:'load'});
  await page.waitForSelector('.js-booking-widget');
  await page.waitForTimeout(700);
  await page.screenshot({path:`test-results/premium-shots/verify-booking-step1-${w}x${h}.png`, fullPage:w<500});
  await page.locator('.service-card-select').first().click();
  await page.locator('.js-booking-next').click();
  await page.waitForTimeout(300);
  await page.locator('.cal-day-cell:not(:disabled)').nth(6).click();
  await page.locator('.time-slot-btn').first().click();
  await page.locator('.js-booking-next').click();
  await page.locator('#booking-name').fill('Anna Muster');
  await page.locator('.js-booking-next').click();
  await page.waitForTimeout(400);
  await page.screenshot({path:`test-results/premium-shots/verify-booking-step4-${w}x${h}.png`});
  await ctx.close();
}
// 3) about page eyebrow dedup check
const ctx = await browser.newContext({viewport:{width:1440,height:1600}});
const p = await ctx.newPage();
await p.goto('http://localhost:4321/de/ueber-min/', {waitUntil:'load'});
await p.waitForTimeout(700);
await p.screenshot({path:'test-results/premium-shots/verify-about-1440.png'});
await ctx.close();
await browser.close();
console.log('VERIFY DONE');
