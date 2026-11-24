import { expect, test } from '@playwright/test';

const routes = [
  '/musapelit.html',
  '/musapelit.html#aihe-korva',
  '/musapelit.html#aihe-otelauta',
  '/musapelit.html#aihe-soinnut',
  '/musapelit.html#aihe-kappaleet',
] as const;

// Returns actual layout measurements, including the first visible elements extending beyond
// the viewport. Keeping the diagnostics in the assertion makes future failures actionable.
async function measureReflow(page: import('@playwright/test').Page) {
  return page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const offenders = [...document.body.querySelectorAll<HTMLElement>('*')]
      .filter((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return rect.width > 0 && rect.height > 0 &&
          rect.left >= -0.5 && rect.right > viewport + 0.5 &&
          style.display !== 'none' && style.visibility !== 'hidden';
      })
      .slice(0, 18)
      .map((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          element: element.tagName.toLowerCase(),
          className: String(element.className).slice(0, 90),
          text: (element.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 90),
          left: Math.round(rect.left * 10) / 10,
          right: Math.round(rect.right * 10) / 10,
          width: Math.round(rect.width * 10) / 10,
          minWidth: style.minWidth,
          whiteSpace: style.whiteSpace,
          overflowWrap: style.overflowWrap,
          display: style.display,
        };
      });
    return { viewport, scrollWidth: document.documentElement.scrollWidth, offenders };
  });
}

for (const width of [320, 360, 390]) {
  for (const textSize of [100, 200]) {
    test(`Musapelit reflow ${width} px / ${textSize} %`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      for (const route of routes) {
        await page.goto(route);
        if (textSize === 200) {
          // Same enlargement method as the existing #142-failing regression.
          await page.addStyleTag({
            content: 'html { font-size: 200% !important; } body { font-size: 200%; }',
          });
        }
        const result = await measureReflow(page);
        expect(result.scrollWidth,
          `${route}: ${JSON.stringify(result)}`).toBeLessThanOrEqual(width);
        expect(result.viewport, route).toBe(width);
      }
    });
  }
}

test('Musapelien aiherajaukset ja saavutettavat nimet säilyvät', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/musapelit.html');
  const filter = page.getByRole('navigation', { name: 'Rajaa pelit aiheen mukaan' });
  await expect(filter).toBeVisible();
  await expect(filter.locator('a')).toHaveCount(5);
  for (const [anchor, accessibleName] of [
    ['#pelit', /Kaikki pelit.*8 peliä/],
    ['#aihe-korva', /04 Sävelkorva ja melodia.*4 peliä/],
    ['#aihe-otelauta', /05 Otelauta.*2 peliä/],
    ['#aihe-soinnut', /06 Soinnut ja harmonia.*2 peliä/],
    ['#aihe-kappaleet', /08 Kappaleet ja oma musiikki.*1 peli/],
  ] as const) {
    await expect(filter.locator(`a[href="${anchor}"]`)).toHaveAccessibleName(accessibleName);
  }
  await expect(page.locator('#pelit .game-card')).toHaveCount(9);
  await filter.locator('a[href="#aihe-korva"]').click();
  await expect(page).toHaveURL(/#aihe-korva$/);
  await expect(page.locator('#aihe-korva .game-card:visible')).toHaveCount(4);
  await expect(page.locator('#pelit')).toBeHidden();
  await expect(filter.locator('a[href="#aihe-korva"]')).toHaveAttribute('aria-current', 'true');
  await filter.locator('a[href="#pelit"]').click();
  await expect(page.locator('#pelit .game-card:visible')).toHaveCount(9);
  await expect(filter.locator('a[href="#pelit"]')).toHaveAttribute('aria-current', 'true');
});

test('Kosketuskohteet säilyvät vähintään 44 px korkuisina', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/musapelit.html#aihe-korva');
  await page.addStyleTag({ content: 'html { font-size: 200% !important; } body { font-size: 200%; }' });
  for (const selector of ['.game-filter a[href="#aihe-korva"]', '#aihe-korva .game-card:first-child']) {
    const box = await page.locator(selector).first().boundingBox();
    expect(box?.height, selector).toBeGreaterThanOrEqual(44);
    expect(box?.x, selector).toBeGreaterThanOrEqual(0);
    expect((box?.x ?? 0) + (box?.width ?? 0), selector).toBeLessThanOrEqual(320.5);
  }
});

test('Aiherajausta voi napauttaa mobiilin kosketusemuloinnilla', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Kosketustapahtuma testataan phone-projektissa.');
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/musapelit.html');
  await page.addStyleTag({ content: 'html { font-size: 200% !important; } body { font-size: 200%; }' });
  await page.locator('.game-filter a[href="#aihe-korva"]').tap();
  await expect(page.locator('#aihe-korva .game-card:visible')).toHaveCount(4);
  await expect(page.locator('.game-filter a[href="#aihe-korva"]')).toHaveAttribute('aria-current', 'true');
  expect((await measureReflow(page)).scrollWidth).toBeLessThanOrEqual(320);
  await page.locator('.game-filter a[href="#pelit"]').tap();
  await expect(page.locator('#pelit .game-card:visible')).toHaveCount(9);
});

test('Aiherajaus toimii Enterillä ja fokuksen näkyvyys säilyy', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Työpöydän fyysinen Tab/Enter-käyttö testataan desktop-projektilla.');
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto('/musapelit.html');
  const link = page.locator('.game-filter a[href="#aihe-korva"]');
  await link.focus();
  await expect(link).toBeFocused();
  expect(await link.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe('solid');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#aihe-korva$/);
  await expect(page.locator('#aihe-korva .game-card:visible')).toHaveCount(4);
  const firstGame = page.locator('#aihe-korva .game-card').first();
  await firstGame.focus();
  await expect(firstGame).toBeFocused();
  await expect(firstGame).toHaveAccessibleName(/Ensikeikka/);
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });
  test('ankkurirajaus toimii myös 320 px / 200 %', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    // With JavaScript disabled, inject the enlargement as HTML rather than page.addStyleTag:
    // the latter waits for script evaluation and times out in this browser mode.
    await page.route('**/musapelit.html', async route => {
      const response = await route.fetch();
      const html = (await response.text()).replace('</head>',
        '<style>html { font-size: 200% !important; } body { font-size: 200%; }</style></head>');
      await route.fulfill({ response, body: html });
    });
    await page.goto('/musapelit.html#aihe-korva');
    await expect(page.locator('#aihe-korva .game-card:visible')).toHaveCount(4);
    expect((await measureReflow(page)).scrollWidth).toBeLessThanOrEqual(320);
    await page.locator('.game-filter a[href="#pelit"]').click();
    await expect(page.locator('#pelit .game-card:visible')).toHaveCount(9);
    expect((await measureReflow(page)).scrollWidth).toBeLessThanOrEqual(320);
  });
});
