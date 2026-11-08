import { test, expect } from '@playwright/test';

// Coverage for the legacy-content restoration: Symptoms pages, landline,
// homepage link, sitemap, and absence of unverified ICD-11/AI claims.

const SYMPTOMS = {
  de: { route: '/de/beschwerden/', h1: 'Häufige Anliegen in der TCM-Beratung', topics: ['Rückenschmerzen', 'Migräne', 'Stress & Schlaf', 'Verdauungsbeschwerden'] },
  en: { route: '/en/symptoms/', h1: 'Common Health Concerns', topics: ['Back Pain', 'Migraine', 'Stress & Sleep', 'Digestion'] },
  zh: { route: '/zh/changjian-jiankang-wenti/', h1: '常见健康困扰与中医调理', topics: ['背部疼痛', '偏头痛', '压力与睡眠', '消化问题'] },
};

const PUBLIC_PAGES = [
  '/de/', '/de/ueber-min/', '/de/behandlungen/', '/de/beschwerden/', '/de/erster-besuch/', '/de/preise-krankenkasse/', '/de/termin-buchen/', '/de/kontakt/', '/de/datenschutz/', '/de/impressum/',
  '/en/', '/en/about-min/', '/en/treatments/', '/en/symptoms/', '/en/first-visit/', '/en/prices-insurance/', '/en/book-appointment/', '/en/contact/', '/en/privacy-policy/', '/en/imprint/',
  '/zh/', '/zh/guanyu-min/', '/zh/liaofa/', '/zh/changjian-jiankang-wenti/', '/zh/shouci-jiuzhen/', '/zh/feiyong-baoxian/', '/zh/yuyue/', '/zh/lianxi/', '/zh/yinsi/', '/zh/falv-shengming/',
];

test.describe('symptoms pages', () => {
  for (const [loc, d] of Object.entries(SYMPTOMS)) {
    test(`${loc}: four concerns with icons, approach notes and consultation links`, async ({ page }) => {
      await page.goto(d.route);
      await expect(page.locator('h1')).toContainText(d.h1);
      const rows = page.locator('.pillar-row');
      await expect(rows).toHaveCount(4);
      for (const topic of d.topics) {
        await expect(page.locator('body')).toContainText(topic);
      }
      // one lucide svg per row icon + one arrow per consult link
      await expect(page.locator('.pillar-icon svg')).toHaveCount(4);
      await expect(page.locator('.pillar-approach')).toHaveCount(4);
      // each concern links to the booking page; closing links to treatments
      const bookingLinks = page.locator(`.pillar-body a[href$="${loc === 'de' ? '/termin-buchen/' : loc === 'en' ? '/book-appointment/' : '/yuyue/'}"]`);
      await expect(bookingLinks).toHaveCount(4);
      const treatmentsHref = loc === 'de' ? '/de/behandlungen/' : loc === 'en' ? '/en/treatments/' : '/zh/liaofa/';
      await expect(page.locator(`a.card-action-link[href="${treatmentsHref}"]`)).toBeVisible();
      // personal consultation CTA closes the page
      await expect(page.locator('.cta-banner')).toHaveCount(1);
      // medical-review markers present on drafted copy
      const html = await page.content();
      expect(html).toContain('REVIEW-MIN-TC');
    });
  }

  test('language switch preserves the symptoms route', async ({ page }) => {
    await page.goto('/de/beschwerden/');
    await page.locator('.site-header .lang-btn', { hasText: 'EN' }).first().click();
    await expect(page).toHaveURL(/\/en\/symptoms\//);
    await page.locator('.site-header .lang-btn', { hasText: '中文' }).first().click();
    await expect(page).toHaveURL(/\/zh\/changjian-jiankang-wenti\//);
    await page.locator('.site-header .lang-btn', { hasText: 'DE' }).first().click();
    await expect(page).toHaveURL(/\/de\/beschwerden\//);
  });

  test('desktop nav and footer link to the symptoms page', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.site-nav a[href="/de/beschwerden/"]')).toBeVisible();
    await expect(page.locator('.site-footer a[href="/de/beschwerden/"]')).toBeVisible();
    await page.goto('/zh/');
    await expect(page.locator('.site-nav a[href="/zh/changjian-jiankang-wenti/"]')).toBeVisible();
  });

  test('mobile menu lists symptoms and both phone numbers', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/de/');
    await page.locator('.mobile-menu-toggle').click();
    const menu = page.locator('.mobile-menu-overlay');
    await expect(menu).toHaveClass(/is-open/);
    await expect(menu.locator('a[href="/de/beschwerden/"]')).toBeVisible();
    await expect(menu.locator('a[href="tel:+41433009932"]')).toBeVisible();
    await expect(menu.locator('a[href="tel:+41788999288"]')).toBeVisible();
  });

  test('homepage shows a slim link to the concerns page', async ({ page }) => {
    await page.goto('/de/');
    const link = page.locator('.home-concerns a[href="/de/beschwerden/"]');
    await expect(link).toBeVisible();
    // no card grid — the link sits in a single quiet block
    await expect(page.locator('.home-concerns')).toHaveCount(1);
    await page.goto('/en/');
    await expect(page.locator('.home-concerns a[href="/en/symptoms/"]')).toBeVisible();
    await page.goto('/zh/');
    await expect(page.locator('.home-concerns a[href="/zh/changjian-jiankang-wenti/"]')).toBeVisible();
  });

  test('no horizontal overflow at 390 and 768', async ({ page }) => {
    for (const width of [390, 768]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/de/beschwerden/');
      const scrollable = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      expect(scrollable).toBe(false);
    }
  });
});

test.describe('landline', () => {
  test('contact page shows landline and mobile with tel: links', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await expect(page.locator('main a[href="tel:+41433009932"]').first()).toBeVisible();
    await expect(page.locator('body')).toContainText('043 300 99 32');
    await expect(page.locator('body')).toContainText('Festnetz');
    await expect(page.locator('main a[href="tel:+41788999288"]').first()).toBeVisible();
  });

  test('en + zh landline labels', async ({ page }) => {
    await page.goto('/en/contact/');
    await expect(page.locator('body')).toContainText('Landline');
    await page.goto('/zh/lianxi/');
    await expect(page.locator('body')).toContainText('固定电话');
  });

  test('footer carries click-to-call landline on every locale', async ({ page }) => {
    for (const loc of ['de', 'en', 'zh']) {
      await page.goto(`/${loc}/`);
      await expect(page.locator('.site-footer a[href="tel:+41433009932"]')).toBeVisible();
    }
  });

  test('booking page offers landline as phone fallback', async ({ page }) => {
    await page.goto('/de/termin-buchen/');
    await expect(page.locator('main a[href="tel:+41433009932"]')).toBeVisible();
    await expect(page.locator('main a[href="tel:+41788999288"]')).toBeVisible();
  });
});

test.describe('sitemap', () => {
  test('30 localized pages + root incl. the three new symptoms routes', async ({ page }) => {
    const resp = await page.request.get('/sitemap-0.xml');
    expect(resp.status()).toBe(200);
    const xml = await resp.text();
    const locCount = (xml.match(/<loc>/g) || []).length;
    expect(locCount).toBe(31); // 30 localized content pages + root redirect
    expect(xml).not.toContain('/404');
    for (const d of Object.values(SYMPTOMS)) {
      expect(xml).toContain(`tcm-weissenberger-lu.ch${d.route}`);
    }
  });
});

test.describe('unverified legacy claims stay out of the public build', () => {
  test('no ICD-11 or AI-analysis claims on any public page', async ({ page }) => {
    const forbidden = /ICD-11|KI-unterstützte|AI Analyse|AI-Analyse|Agentic AI|Gesundheitsanalyse|intelligentes TCM-Dossier|人工智能分析|智能.*病历/i;
    for (const p of PUBLIC_PAGES) {
      await page.goto(p);
      const text = await page.locator('body').innerText();
      expect(text, `forbidden claim visible on ${p}`).not.toMatch(forbidden);
    }
  });

  test('no ASCA / SBO-TCM / LCC claims on the About page', async ({ page }) => {
    for (const p of ['/de/ueber-min/', '/en/about-min/', '/zh/guanyu-min/']) {
      await page.goto(p);
      const text = await page.locator('body').innerText();
      expect(text).not.toMatch(/ASCA|SBO-TCM|\bLCC\b|Bachelor|Master/);
    }
  });
});

test.describe('first-visit treatment-process arc', () => {
  test('four steps incl. follow-up discussion', async ({ page }) => {
    await page.goto('/de/erster-besuch/');
    await expect(page.locator('.timeline-step')).toHaveCount(4);
    await expect(page.locator('.timeline-step').nth(3)).toContainText('Folgetermine');
    await page.goto('/en/first-visit/');
    await expect(page.locator('.timeline-step')).toHaveCount(4);
    await page.goto('/zh/shouci-jiuzhen/');
    await expect(page.locator('.timeline-step')).toHaveCount(4);
  });
});

test.describe('contact page unchanged features', () => {
  test('Google Maps placeholder still privacy-gated', async ({ page }) => {
    await page.goto('/de/kontakt/');
    // map loads only after user consent click — no iframe up front
    await expect(page.locator('iframe[src*="google.com/maps"]')).toHaveCount(0);
    await expect(page.locator('a[href*="maps.google.com"]').first()).toBeVisible();
  });
});
