import { test, expect } from '@playwright/test';

const ROUTES = [
  '/de/', '/de/ueber-min/', '/de/behandlungen/', '/de/beschwerden/', '/de/erster-besuch/',
  '/de/preise-krankenkasse/', '/de/termin-buchen/', '/de/kontakt/', '/de/datenschutz/', '/de/impressum/',
  '/en/', '/en/about-min/', '/en/treatments/', '/en/symptoms/', '/en/first-visit/',
  '/en/prices-insurance/', '/en/book-appointment/', '/en/contact/', '/en/privacy-policy/', '/en/imprint/',
  '/zh/', '/zh/guanyu-min/', '/zh/liaofa/', '/zh/changjian-jiankang-wenti/', '/zh/shouci-jiuzhen/',
  '/zh/feiyong-baoxian/', '/zh/yuyue/', '/zh/lianxi/', '/zh/yinsi/', '/zh/falv-shengming/',
];

const SITE = 'https://www.tcm-weissenberger-lu.ch';

test.describe('seo', () => {
  test('every localized content page has exactly one h1', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route);
      await expect(page.locator('h1'), `h1 count on ${route}`).toHaveCount(1);
    }
  });

  test('unique title + non-empty description per page', async ({ page }) => {
    const titles = new Set();
    for (const route of ROUTES) {
      await page.goto(route);
      const title = await page.title();
      const desc = await page.locator('meta[name="description"]').getAttribute('content');
      expect(desc?.length, `desc on ${route}`).toBeGreaterThan(40);
      titles.add(title);
    }
    expect(titles.size).toBe(ROUTES.length);
  });

  test('canonical + html lang correct', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', SITE + route);
      const lang = await page.locator('html').getAttribute('lang');
      const expected = { de: 'de-CH', en: 'en', zh: 'zh-CN' }[route.slice(1, 3)];
      expect(lang, `lang on ${route}`).toBe(expected);
    }
  });

  test('reciprocal hreflang set + x-default on every page', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route);
      const alts = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) =>
        Object.fromEntries(els.map((e) => [e.getAttribute('hreflang'), e.getAttribute('href')])),
      );
      expect(Object.keys(alts).sort(), `hreflangs on ${route}`).toEqual(['de-CH', 'en', 'x-default', 'zh-CN']);
      expect(alts['x-default']).toBe(`${SITE}/de/`);
      for (const [k, v] of Object.entries(alts)) {
        if (k !== 'x-default') expect(v, `${k} on ${route}`).toContain(SITE);
      }
    }
  });

  test('JSON-LD present and valid on all pages', async ({ page }) => {
    for (const route of ROUTES) {
      await page.goto(route);
      const raw = await page.locator('script[type="application/ld+json"]').textContent();
      const ld = JSON.parse(raw);
      expect(ld['@context']).toBe('https://schema.org');
      const types = ld['@graph'].map((n) => n['@type']);
      expect(types).toContain('MedicalBusiness');
      const biz = ld['@graph'].find((n) => n['@type'] === 'MedicalBusiness');
      expect(biz.address.streetAddress).toBe('Schaffhauserstrasse 466');
      expect(biz.telephone).toContain('+4143300');
      expect(JSON.stringify(biz)).not.toContain('openingHours');
      if (route !== `/${route.slice(1, 3)}/`) expect(types).toContain('BreadcrumbList');
    }
  });

  test('Person node only on About pages', async ({ page }) => {
    await page.goto('/de/ueber-min/');
    const ld = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    const types = ld['@graph'].map((n) => n['@type']);
    expect(types).toContain('Person');
    await page.goto('/de/');
    const ld2 = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
    expect(ld2['@graph'].map((n) => n['@type'])).not.toContain('Person');
  });

  test('Open Graph + Twitter card metadata present', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /clinic-room-orchids\.webp/);
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'de_CH');
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', /.+/);
  });

  test('robots.txt + sitemap served', async ({ page }) => {
    const robots = await page.request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toContain('Sitemap:');
    const sitemap = await page.request.get('/sitemap-index.xml');
    expect(sitemap.status()).toBe(200);
  });

  test('sitemap covers all 30 content routes', async ({ page }) => {
    const res = await page.request.get('/sitemap-0.xml');
    const xml = await res.text();
    for (const route of ROUTES) {
      expect(xml, `sitemap missing ${route}`).toContain(SITE + route);
    }
  });

  test('internal links resolve (sampled per locale)', async ({ page, request }) => {
    const seen = new Set();
    for (const route of ['/de/', '/en/', '/zh/']) {
      await page.goto(route);
      const hrefs = await page.locator('a[href^="/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')));
      for (const h of hrefs) {
        const clean = h.split('#')[0];
        if (clean.startsWith('/') && !clean.startsWith('//') && !seen.has(clean)) seen.add(clean);
      }
    }
    for (const link of seen) {
      const res = await request.get(link);
      expect(res.status(), `broken link ${link}`).toBe(200);
    }
  });
});
