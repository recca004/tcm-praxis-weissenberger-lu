import { chromium } from '@playwright/test';
const browser = await chromium.launch();
const results = {};

// A) reduced motion — statement words must be fully visible without scrolling animation
{
  const ctx = await browser.newContext({ viewport:{width:1440,height:900}, reducedMotion:'reduce' });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/de/', {waitUntil:'load'});
  await p.waitForTimeout(800);
  const dim = await p.evaluate(() => {
    const ws = [...document.querySelectorAll('.mo-w')];
    if (!ws.length) return 'no-words';
    const sample = ws[Math.floor(ws.length/2)];
    return getComputedStyle(sample).color;
  });
  results.reducedMotionColor = dim; // expect full ink rgb(30,67,59)
  await ctx.close();
}
// B) closed mobile drawer is not focusable (visibility:hidden)
{
  const ctx = await browser.newContext({ viewport:{width:390,height:844} });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/de/', {waitUntil:'load'});
  const drawerState = await p.evaluate(() => {
    const d = document.querySelector('.mobile-menu-overlay, .mobile-menu, [class*="drawer"]');
    if (!d) return 'no-drawer';
    const cs = getComputedStyle(d);
    return {vis: cs.visibility, pe: cs.pointerEvents, op: cs.opacity};
  });
  results.drawerClosed = drawerState;
  // open drawer via toggle, then Escape / close
  await p.locator('.mobile-menu-toggle, [aria-label*="enü"], [aria-label*="enu"]').first().click().catch(()=>{});
  await p.waitForTimeout(400);
  const openState = await p.evaluate(() => {
    const d = document.querySelector('.mobile-menu-overlay, .mobile-menu, [class*="drawer"]');
    return d ? getComputedStyle(d).visibility : 'none';
  });
  results.drawerOpen = openState;
  await ctx.close();
}
// C) hero content visible without JS
{
  const ctx = await browser.newContext({ viewport:{width:1440,height:900}, javaScriptEnabled:false });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/de/', {waitUntil:'load'});
  const vis = await p.evaluate(() => {
    const h1 = document.querySelector('.hero-title');
    const st = document.querySelector('.statement-text');
    const cs = h1 ? getComputedStyle(h1) : null;
    const cs2 = st ? getComputedStyle(st) : null;
    return {h1: cs?.opacity, stmt: cs2?.opacity};
  });
  results.noJS = vis;
  await ctx.close();
}
console.log(JSON.stringify(results, null, 2));
await browser.close();
