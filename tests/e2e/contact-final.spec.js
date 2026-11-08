import { test, expect } from '@playwright/test';

test.describe('contact page layout', () => {
  test('practice details, transport, form, then full-width map', async ({ page }) => {
    await page.goto('/de/kontakt/');
    // single H1
    await expect(page.locator('h1')).toHaveCount(1);
    // left column: details H2 then transport H3 (before form in DOM order)
    const details = page.locator('.contact-cols h2', { hasText: 'Praxisdaten' });
    const transit = page.locator('.contact-transit-title');
    const form = page.locator('.js-contact-form');
    await expect(details).toBeVisible();
    await expect(transit).toBeVisible();
    await expect(form).toBeVisible();
    const order = await page.evaluate(() => {
      const d = document.querySelector('.contact-cols h2');
      const t = document.querySelector('.contact-transit');
      const f = document.querySelector('.js-contact-form');
      return d.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
        && t.compareDocumentPosition(f) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
    expect(order).toBeTruthy();
    // transport inside the same (left) column as details
    const sameCol = await page.evaluate(() => {
      const d = document.querySelector('.contact-cols > div:first-child');
      return d.contains(document.querySelector('.contact-transit'));
    });
    expect(sameCol).toBeTruthy();
    // map spans full content width below the columns
    const colsW = await page.locator('.contact-cols').evaluate((e) => e.getBoundingClientRect().width);
    const mapW = await page.locator('.contact-map').evaluate((e) => e.getBoundingClientRect().width);
    expect(Math.abs(mapW - colsW)).toBeLessThan(2);
  });

  test('reception photo removed; accessibility item hidden', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await expect(page.locator('img[src*="clinic-reception"]')).toHaveCount(0);
    await expect(page.locator('text=Barrierefreier Zugang')).toHaveCount(0);
    await expect(page.locator('.contact-transit li')).toHaveCount(3);
  });

  test('map privacy-gated, localized title, no iframe before click', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await expect(page.locator('.contact-map iframe')).toHaveCount(0);
    const requests = [];
    page.on('request', (r) => { if (r.url().includes('google.com/maps')) requests.push(r.url()); });
    await page.waitForTimeout(800);
    expect(requests.length).toBe(0); // nothing loaded without consent
    await page.locator('.contact-map-load').click();
    await page.waitForSelector('.contact-map iframe');
    const iframe = page.locator('.contact-map iframe');
    expect(await iframe.getAttribute('title')).toContain('Karte');
    expect(requests.length).toBeGreaterThan(0);
    // iframe fades in via .is-loaded after load event
    await expect(iframe).toHaveClass(/is-loaded/, { timeout: 15000 });
  });

  test('mobile order: details → transit → form → map', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/de/kontakt/');
    const ys = await page.evaluate(() => {
      const y = (s) => document.querySelector(s)?.getBoundingClientRect().top ?? 0;
      return { details: y('.contact-cols h2'), transit: y('.contact-transit'), form: y('.js-contact-form'), map: y('.contact-map') };
    });
    expect(ys.details).toBeLessThan(ys.transit);
    expect(ys.transit).toBeLessThan(ys.form);
    expect(ys.form).toBeLessThan(ys.map);
  });

  test('contact form demo notice honest', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await page.fill('#contact-name', 'Test');
    await page.fill('#contact-email', 't@example.ch');
    await page.fill('#contact-message', 'Hallo');
    await page.locator('.form-checkbox').check();
    await page.locator('button[type="submit"]').click();
    const fb = page.locator('.form-submission-feedback');
    await expect(fb).toBeVisible();
    await expect(fb).toContainText('nicht versendet');
  });
});

test.describe('motion + no-js safety', () => {
  test('content visible with JavaScript disabled', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto('/de/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.hero-slide').first()).toBeVisible();
    await page.goto('/de/ueber-min/');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.pract-ed-photo--real img')).toBeVisible();
    await ctx.close();
  });

  test('reduced motion: no gsap entrance transforms linger', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/de/ueber-min/');
    await page.waitForTimeout(600);
    const hidden = await page.evaluate(() =>
      [...document.querySelectorAll('.section-header, .pillar-row, .pract-ed-photo--real')]
        .filter((e) => getComputedStyle(e).opacity !== '1' || getComputedStyle(e).visibility === 'hidden').length,
    );
    expect(hidden).toBe(0);
    await ctx.close();
  });
});
