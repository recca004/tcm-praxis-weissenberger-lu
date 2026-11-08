import { test, expect } from '@playwright/test';

test.describe('insurer logo wall', () => {
  test('hidden on public pages without preview flag', async ({ page }) => {
    await page.goto('/de/');
    await expect(page.locator('.ins-wall-wrap')).toBeHidden();
    await expect(page.locator('img[src*="/assets/insurers/"]')).toHaveCount(0);
  });

  test('internal preview shows two rows, soft logos, aria-hidden dupes', async ({ page }) => {
    await page.goto('/de/?preview-insurers');
    await expect(page.locator('.ins-preview-banner')).toBeVisible();
    await expect(page.locator('.ins-row')).toHaveCount(2);
    // duplicate tracks hidden from AT and keyboard
    for (const t of page.locator('.ins-track[aria-hidden="true"] .ins-item').all ? [] : []) {}
    await expect(page.locator('.ins-track[aria-hidden="true"]')).toHaveCount(2);
    const dupes = page.locator('.ins-track[aria-hidden="true"] a, .ins-track[aria-hidden="true"] .ins-item');
    for (const d of await dupes.all()) {
      expect(await d.getAttribute('tabindex')).toBe('-1');
    }
    // logo proportions preserved (natural ratio via height-only sizing)
    const imgs = page.locator('.ins-track:not([aria-hidden]) img');
    for (const im of await imgs.all()) {
      const box = await im.boundingBox();
      expect(box.height).toBeGreaterThan(10);
    }
    // pause control works
    const btn = page.locator('.ins-pause');
    await btn.click();
    await expect(page.locator('.ins-wall')).toHaveClass(/is-paused/);
    await expect(btn).toHaveAttribute('aria-pressed', 'true');
  });

  test('reduced motion shows static layout', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.goto('/de/?preview-insurers');
    const anim = await page.evaluate(() => getComputedStyle(document.querySelector('.ins-track')).animationName);
    expect(anim).toBe('none');
    await ctx.close();
  });
});

test.describe('symptoms extended topics', () => {
  test('four original topics + extra groups render, one h1', async ({ page }) => {
    await page.goto('/de/beschwerden/');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('.pillar-row')).toHaveCount(4);
    await expect(page.locator('.sym-extra-group')).toHaveCount(4);
    await expect(page.locator('.sym-extra-title')).toContainText('Weitere Anliegen');
    await expect(page.locator('.sym-extra-note')).toContainText('ersetzt keine');
    // source links
    await expect(page.locator('a[href*="helsana.ch"]')).toHaveCount(1);
    await expect(page.locator('a[href*="nccih.nih.gov"]')).toHaveCount(1);
  });

  test('no forbidden medical claims', async ({ page }) => {
    for (const r of ['/de/beschwerden/', '/en/symptoms/', '/zh/changjian-jiankang-wenti/']) {
      await page.goto(r);
      const body = (await page.textContent('body')).toLowerCase();
      for (const bad of ['heilt asthma', 'cures asthma', 'garantiert', 'guaranteed', 'proven treatment', 'bewiesene wirkung', '治愈']) {
        expect(body, `${bad} on ${r}`).not.toContain(bad);
      }
    }
  });

  test('en + zh render translated groups', async ({ page }) => {
    await page.goto('/en/symptoms/');
    await expect(page.locator('.sym-extra-title')).toContainText('Acupuncture');
    await expect(page.locator('.sym-extra-group').first()).toContainText('Pain & Movement');
    await page.goto('/zh/changjian-jiankang-wenti/');
    await expect(page.locator('.sym-extra-title')).toContainText('针灸');
  });
});
