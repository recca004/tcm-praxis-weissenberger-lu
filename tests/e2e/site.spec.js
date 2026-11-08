import { test, expect } from '@playwright/test';

const ROUTES = [
  '/de/', '/de/ueber-min/', '/de/behandlungen/', '/de/beschwerden/', '/de/erster-besuch/', '/de/preise-krankenkasse/', '/de/termin-buchen/', '/de/kontakt/', '/de/datenschutz/', '/de/impressum/',
  '/en/', '/en/about-min/', '/en/treatments/', '/en/symptoms/', '/en/first-visit/', '/en/prices-insurance/', '/en/book-appointment/', '/en/contact/', '/en/privacy-policy/', '/en/imprint/',
  '/zh/', '/zh/guanyu-min/', '/zh/liaofa/', '/zh/changjian-jiankang-wenti/', '/zh/shouci-jiuzhen/', '/zh/feiyong-baoxian/', '/zh/yuyue/', '/zh/lianxi/', '/zh/yinsi/', '/zh/falv-shengming/',
];

test.describe('routes', () => {
  test('root redirects to /de/', async ({ page }) => {
    const resp = await page.goto('/');
    expect(resp.status()).toBe(200);
    expect(page.url()).toContain('/de/');
  });

  for (const route of ROUTES) {
    test(`${route} returns 200 with content`, async ({ page }) => {
      const resp = await page.goto(route);
      expect(resp.status()).toBe(200);
      await expect(page.locator('h1')).toBeVisible();
      // no runtime icon placeholders left
      await expect(page.locator('[data-lucide]')).toHaveCount(0);
      // no broken internal links
      const badLinks = await page.locator('a[href^="#"]').count();
      expect(badLinks).toBeLessThan(3); // skip-link only
    });
  }

  test('404 page works', async ({ page }) => {
    const resp = await page.goto('/404.html');
    expect(resp.status()).toBe(200);
    await expect(page.locator('h1')).toContainText('nicht gefunden');
  });

  test('hreflang + canonical present', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('link[hreflang="de-CH"]')).toHaveCount(1);
    await expect(page.locator('link[hreflang="zh-CN"]')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.tcm-weissenberger-lu.ch/de/');
  });
});

test.describe('homepage content', () => {
  test('all sections render', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.t-index-row')).toHaveCount(5);
    await expect(page.locator('.hero-fact')).toHaveCount(1);
    await expect(page.locator('.timeline-step')).toHaveCount(3);
    await expect(page.locator('.accordion-item')).toHaveCount(6);
    await expect(page.locator('.price-table tbody tr')).toHaveCount(3);
    await expect(page.locator('.booking-band a[href*="/termin-buchen"]')).toBeVisible();
    await expect(page.locator('.cta-banner')).toHaveCount(1);
    await expect(page.locator('img[src*="clinic-room-orchids"]')).toBeVisible();
  });

  test('en/zh homepages render correctly', async ({ page }) => {
    await page.goto('/en/');
    await expect(page.locator('.accordion-item')).toHaveCount(5);
    await expect(page.locator('h1')).toContainText('Traditional Chinese Medicine');
    await page.goto('/zh/');
    await expect(page.locator('.accordion-item')).toHaveCount(5);
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-CN');
  });
});

test.describe('interactions', () => {
  test('mobile menu opens and closes', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 });
    await page.goto('/de/');
    const toggle = page.locator('.mobile-menu-toggle');
    await toggle.click();
    await expect(page.locator('.mobile-menu-overlay')).toHaveClass(/is-open/);
    await page.locator('.mobile-menu-close').click();
    await expect(page.locator('.mobile-menu-overlay')).not.toHaveClass(/is-open/);
  });

  test('FAQ accordion expands and collapses', async ({ page }) => {
    await page.goto('/de/');
    const trigger = page.locator('.accordion-trigger').first();
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('booking demo: service, date, time, summary', async ({ page }) => {
    await page.goto('/de/termin-buchen/');
    // step 2
    await page.locator('.service-card-select[data-service="followup"]').click();
    await page.locator('.js-booking-next').click();
    await expect(page.locator('.booking-step-panel[data-step="2"]')).toBeVisible();
    // pick day 23 and a time
    await page.locator('.cal-day-cell:not(:disabled)', { hasText: '23' }).click();
    await page.locator('.time-slot-btn', { hasText: '13:30' }).click();
    await page.locator('.js-booking-next').click();
    // step 3: fill form
    await page.fill('#booking-name', 'Test Person');
    await page.fill('#booking-phone', '+41 79 000 00 00');
    await page.locator('.js-booking-next').click();
    // step 4: summary
    await expect(page.locator('.js-summary-service')).toContainText('Folgebehandlung');
    await expect(page.locator('.js-summary-datetime')).toContainText('23. November 2026 · 13:30');
    await expect(page.locator('.js-summary-patient')).toContainText('Test Person');
    await expect(page.locator('.demo-notice-banner')).toBeVisible();
    // next button hidden on step 4
    await expect(page.locator('.js-booking-next')).toBeHidden();
  });

  test('booking summary localized on en page', async ({ page }) => {
    await page.goto('/en/book-appointment/');
    await page.locator('.js-booking-next').click();
    await page.locator('.js-booking-next').click();
    await page.locator('.js-booking-next').click();
    await expect(page.locator('.js-summary-service')).toContainText('Initial Consultation');
    await expect(page.locator('.js-summary-datetime')).toContainText('November 16, 2026');
  });

  test('contact form shows prototype feedback', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await page.fill('#contact-name', 'Test');
    await page.fill('#contact-email', 't@example.ch');
    await page.fill('#contact-message', 'Hallo');
    await page.locator('.form-checkbox').check();
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('.form-submission-feedback')).toBeVisible();
  });

  test('language switch preserves route', async ({ page }) => {
    await page.goto('/de/behandlungen/');
    await page.locator('.site-header .lang-btn', { hasText: 'EN' }).first().click();
    await expect(page).toHaveURL(/\/en\/treatments\//);
  });
});

test.describe('responsive', () => {
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    test(`no horizontal scroll at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/de/');
      const scrollable = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(scrollable).toBe(false);
    });
  }
});

test.describe('motion', () => {
  test('content visible with reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/de/');
    const opacity = await page.locator('.t-index-row').first().evaluate((el) => getComputedStyle(el).opacity);
    expect(parseFloat(opacity)).toBe(1);
    await expect(page.locator('.hero-content h1')).toBeVisible();
  });
});
