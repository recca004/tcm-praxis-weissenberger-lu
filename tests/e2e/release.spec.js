import { test, expect } from '@playwright/test';

test.describe('client-review release', () => {
  test('hero shows only 2 approved facts', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.hero-fact')).toHaveCount(1);
    await expect(page.locator('.hero-facts')).not.toContainText('Diplom');
    await expect(page.locator('.hero-facts')).not.toContainText('Sprachen');
  });
  test('no 15+ years claims anywhere', async ({ page }) => {
    for (const p of ['/de/ueber-min/', '/en/about-min/', '/zh/guanyu-min/', '/de/']) {
      await page.goto(p);
      await expect(page.locator('body')).not.toContainText(/15\+|\u003c15|ber 15|15年/);
    }
  });
  test('about shows 2021 + EMR', async ({ page }) => {
    await page.goto('/de/ueber-min/');
    await expect(page.locator('body')).toContainText('2021');
    await expect(page.locator('body')).toContainText('EMR');
    await expect(page.locator('a[href*="emr.ch"]')).toBeVisible();
  });
  test('homepage about preview: no creds, has links', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.pract-ed-creds')).toHaveCount(0);
  });
  test('insurance: no 70-90% promise', async ({ page }) => {
    for (const p of ['/de/preise-krankenkasse/', '/en/prices-insurance/']) {
      await page.goto(p);
      await expect(page.locator('body')).not.toContainText(/70\s*[%–]|70.*90/);
    }
  });
  test('contact form says message not sent', async ({ page }) => {
    await page.goto('/de/kontakt/');
    await page.locator('#contact-name').fill('Test');
    await page.locator('input[type=email]').first().fill('t@t.ch');
    await page.locator('#contact-message').fill('Test');
    await page.locator('.form-checkbox').first().check();
    await page.locator('button[type=submit]').first().click();
    await expect(page.locator('.form-submission-feedback').first()).toContainText('nicht versendet');
  });
  test('no insurer logos rendered', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.ins-carousel')).toHaveCount(0);
  });
});
