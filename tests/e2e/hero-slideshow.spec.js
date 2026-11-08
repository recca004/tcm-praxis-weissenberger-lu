import { test, expect } from '@playwright/test';

test.describe('hero slideshow', () => {
  test('three slides, controls, dots, pause, keyboard', async ({ page }) => {
    await page.goto('/de/');
    const slides = page.locator('.hero-slide');
    await expect(slides).toHaveCount(3);
    await expect(slides.first()).toBeVisible();
    // next -> slide 2, again -> 3, again -> 1
    await page.locator('[data-next]').click();
    await expect(slides.nth(1)).toHaveClass(/is-active/);
    await page.locator('[data-next]').click();
    await expect(slides.nth(2)).toHaveClass(/is-active/);
    await page.locator('[data-next]').click();
    await expect(slides.first()).toHaveClass(/is-active/);
    // prev
    await page.locator('[data-prev]').click();
    await expect(slides.nth(2)).toHaveClass(/is-active/);
    // dots
    await page.locator('.hero-slide-dot').nth(1).click();
    await expect(slides.nth(1)).toHaveClass(/is-active/);
    // pause toggles aria-pressed
    const pause = page.locator('[data-pause]');
    await pause.click();
    await expect(pause).toHaveAttribute('aria-pressed', 'true');
    // keyboard on wrapper
    await page.locator('.hero-slide-ui').focus();
    await page.keyboard.press('ArrowRight');
    await expect(slides.nth(2)).toHaveClass(/is-active/);
  });

  test('autoplay advances after ~7s', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.hero-slide').first()).toHaveClass(/is-active/);
    await page.waitForTimeout(7600);
    await expect(page.locator('.hero-slide').nth(1)).toHaveClass(/is-active/);
  });

  test('reduced motion: no autoplay, manual works, first visible', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const p = await ctx.newPage();
    await p.goto('/de/');
    await expect(p.locator('.hero-slide').first()).toHaveClass(/is-active/);
    await p.waitForTimeout(1500);
    await expect(p.locator('.hero-slide').first()).toHaveClass(/is-active/); // no auto-advance
    await p.locator('[data-next]').click();
    await expect(p.locator('.hero-slide').nth(1)).toHaveClass(/is-active/);
    await ctx.close();
  });

  test('first slide visible without JS', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const p = await ctx.newPage();
    await p.goto('/de/');
    const op = await p.locator('.hero-slide').first().evaluate((el) => getComputedStyle(el).opacity);
    // without JS .is-active is still in HTML -> opacity 1
    expect(Number(op)).toBe(1);
    await ctx.close();
  });

  test('zh + en slideshows render', async ({ page }) => {
    for (const path of ['/en/', '/zh/']) {
      await page.goto(path);
      await expect(page.locator('.hero-slide')).toHaveCount(3);
      await expect(page.locator('.hero-slide').first()).toHaveAttribute('alt', /.+/);
    }
  });
});

test.describe('trust + insurance gating', () => {
  test('trust row shows 4 approved facts', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.home-trust-item')).toHaveCount(4);
    await expect(page.locator('.home-trust')).toContainText('Persönliche Betreuung');
  });
  test('insurance carousel hidden until insurers approved', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.ins-carousel')).toHaveCount(0);
    await expect(page.locator('text=Zusatzversicherung & Kostenübernahme')).toBeVisible();
  });
});
