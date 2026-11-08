import { chromium } from '@playwright/test';

const BASE = 'http://localhost:4321';
const OUT = 'test-results/audit-15k';

const PAGES = [
  ['de/', 'de-home'],
  ['de/ueber-min/', 'de-about'],
  ['de/behandlungen/', 'de-treatments'],
  ['de/beschwerden/', 'de-symptoms'],
  ['de/erster-besuch/', 'de-first-visit'],
  ['de/preise-krankenkasse/', 'de-prices'],
  ['de/termin-buchen/', 'de-booking'],
  ['de/kontakt/', 'de-contact'],
  ['de/datenschutz/', 'de-privacy'],
  ['de/impressum/', 'de-imprint'],
  ['en/', 'en-home'],
  ['en/about-min/', 'en-about'],
  ['en/treatments/', 'en-treatments'],
  ['en/symptoms/', 'en-symptoms'],
  ['en/contact/', 'en-contact'],
  ['zh/', 'zh-home'],
  ['zh/guanyu-min/', 'zh-about'],
  ['zh/liaofa/', 'zh-treatments'],
  ['zh/changjian-jiankang-wenti/', 'zh-symptoms'],
  ['zh/lianxi/', 'zh-contact'],
];

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

const errors = [];
const issues = [];

const browser = await chromium.launch();

console.log('--- Starting Comprehensive 15k Design Audit ---');

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await ctx.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(`[${vp.name}] Console error on ${page.url()}: ${msg.text()}`);
    }
  });

  page.on('pageerror', (err) => {
    errors.push(`[${vp.name}] Page error on ${page.url()}: ${err.message}`);
  });

  for (const [route, slug] of PAGES) {
    try {
      const resp = await page.goto(`${BASE}/${route}`, { waitUntil: 'networkidle', timeout: 20000 });
      if (!resp || resp.status() !== 200) {
        issues.push(`[${vp.name}] Non-200 status on ${route}: ${resp ? resp.status() : 'no resp'}`);
      }

      await page.waitForTimeout(400);

      // Check horizontal overflow
      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });
      if (hasOverflow) {
        issues.push(`[${vp.name}] Horizontal overflow on ${route}`);
      }

      // Check H1 count
      const h1Count = await page.locator('h1').count();
      if (h1Count !== 1) {
        issues.push(`[${vp.name}] H1 count = ${h1Count} on ${route}`);
      }

      // Capture screenshot
      if (vp.name === 'desktop' || slug.startsWith('de-') || slug === 'en-home' || slug === 'zh-home') {
        await page.screenshot({ path: `${OUT}/${slug}-${vp.name}-fold.png`, fullPage: false });
        await page.screenshot({ path: `${OUT}/${slug}-${vp.name}-full.png`, fullPage: true });
      }
    } catch (e) {
      issues.push(`[${vp.name}] Failed to load ${route}: ${e.message}`);
    }
  }

  await ctx.close();
  console.log(`Completed viewport ${vp.name} (${vp.width}x${vp.height})`);
}

// 320px ultra-small check for de pages
const ctx320 = await browser.newContext({ viewport: { width: 320, height: 600 } });
const p320 = await ctx320.newPage();
for (const [route, slug] of PAGES.slice(0, 10)) {
  await p320.goto(`${BASE}/${route}`, { waitUntil: 'networkidle' });
  const hasOverflow = await p320.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  if (hasOverflow) issues.push(`[320px] Horizontal overflow on ${route}`);
}
await ctx320.close();
console.log('Completed 320px check');

// Check GSAP on desktop
const ctxDesktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const pD = await ctxDesktop.newPage();
await pD.goto(`${BASE}/de/`, { waitUntil: 'networkidle' });
const gsapInfo = await pD.evaluate(() => {
  return {
    hasGsap: typeof window.gsap !== 'undefined',
    gsapVersion: window.gsap?.version,
    heroContentChildrenOpacity: Array.from(document.querySelectorAll('.hero-content > *')).map(el => getComputedStyle(el).opacity),
    statementMomentPresent: !!document.querySelector('[data-moment="word-highlight"]'),
  };
});
console.log('GSAP Status:', JSON.stringify(gsapInfo));
await ctxDesktop.close();

await browser.close();

console.log('\n--- AUDIT SUMMARY ---');
console.log(`Console/Page Errors: ${errors.length}`);
errors.forEach(e => console.log('  ERROR:', e));
console.log(`Layout/HTTP Issues: ${issues.length}`);
issues.forEach(i => console.log('  ISSUE:', i));
