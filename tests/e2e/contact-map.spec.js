import { test, expect } from '@playwright/test';

const pages = { de: '/de/kontakt/', en: '/en/contact/', zh: '/zh/lianxi/' };

test.describe('contact map', () => {
  for (const [lang, path] of Object.entries(pages)) {
    test(`${lang}: placeholder first, no google request before click, iframe after`, async ({ page }) => {
      let googleReq = false;
      page.on('request', (r) => { if (r.url().includes('google.com/maps')) googleReq = true; });
      await page.goto(path);
      const placeholder = page.locator('.contact-map-placeholder');
      await expect(placeholder).toBeVisible();
      await expect(page.locator('.contact-map iframe')).toHaveCount(0);
      expect(googleReq).toBe(false);
      // external directions link present even without JS interaction
      await expect(page.locator('.contact-map-ext')).toHaveAttribute('href', /maps\.google\.com/);
      await page.locator('.contact-map-load').click();
      const iframe = page.locator('.contact-map iframe');
      await expect(iframe).toHaveCount(1);
      await expect(iframe).toHaveAttribute('src', /google\.com\/maps\/embed\?pb=/);
      await expect(iframe).toHaveAttribute('loading', 'lazy');
      await expect(iframe).toHaveAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      await expect(iframe).toHaveAttribute('title', /.+/);
      expect(googleReq).toBe(true);
    });
  }
});
