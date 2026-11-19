import { expect, test, type Page } from '@playwright/test';

// Ensikeikan paluu Musapeleihin ja harjoittelijoiden yhtenäinen tumma teema.
const ensikeikka = '/pelit/ensikeikka/index.html';
const returnLinks = (page: Page) => page.locator('main a, .site-top .map-return a')
  .filter({ hasText: /Takaisin (Musapeleihin|aiheeseen|harjoitusvalikkoon)|Takaisin: Musapelit/ });

test.describe('Ensikeikan paluu', () => {
  test('suoraan avattuna oma paluulinkki vie Musapeleihin', async ({ page }) => {
    await page.goto(ensikeikka);
    await expect(page.getByRole('heading', { level: 1, name: 'Ensikeikka (beta)' })).toBeVisible();
    await expect(returnLinks(page)).toHaveCount(1);
    await expect(page.locator('.site-top .map-return')).toHaveCount(0);
    await page.getByRole('link', { name: 'Takaisin Musapeleihin' }).click();
    await expect(page).toHaveURL(/\/musapelit\.html$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Musapelit' })).toBeVisible();
    // Selaimen Takaisin palaa Ensikeikkaan.
    await page.goBack();
    await expect(page.getByRole('heading', { level: 1, name: 'Ensikeikka (beta)' })).toBeVisible();
  });

  test('Musapeleistä avattuna palataan samaan aiheeseen yhdellä paluulinkillä', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-korva');
    await page.locator('#aihe-korva').getByRole('link', { name: /Ensikeikka/ }).click();
    await expect(page).toHaveURL(/pelit\/ensikeikka\/index\.html\?aihe=aihe-korva&tapa=pelit$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Ensikeikka (beta)' })).toBeVisible();
    const back = page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' });
    await expect(back).toBeVisible();
    await expect(page.getByRole('link', { name: 'Takaisin Musapeleihin' })).toHaveCount(0);
    await expect(returnLinks(page)).toHaveCount(1);
    await back.click();
    await expect(page).toHaveURL(/\/musapelit\.html#aihe-korva$/);
    await expect(page.locator('#aihe-korva')).toBeVisible();
    // Selaimen Takaisin palauttaa Ensikeikan ja sen parametrit.
    await page.goBack();
    await expect(page).toHaveURL(/\?aihe=aihe-korva&tapa=pelit$/);
    await expect(page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' })).toBeVisible();
  });

  test('Oppimiskartan aihesivulta avattuna paluu vie aiheeseen ilman toista paluulinkkiä', async ({ page }) => {
    await page.goto(ensikeikka + '?aihe=aihe-korva');
    await expect(page.getByRole('link', { name: 'Takaisin aiheeseen' })).toHaveAttribute('href', /\/oppi\/korva\/index\.html$/);
    await expect(page.getByRole('link', { name: 'Takaisin Musapeleihin' })).toHaveCount(0);
    await expect(returnLinks(page)).toHaveCount(1);
  });

  test('tuntemattomalla aiheella oma paluulinkki näytetään', async ({ page }) => {
    await page.goto(ensikeikka + '?aihe=aihe-tuntematon&tapa=pelit');
    await expect(page.getByRole('link', { name: 'Takaisin Musapeleihin' })).toBeVisible();
    await expect(returnLinks(page)).toHaveCount(1);
  });

  test('keikkalista, kappale ja selaimen historia toimivat ennallaan', async ({ page }) => {
    await page.goto(ensikeikka + '?aihe=aihe-korva&tapa=pelit');
    await page.getByRole('button', { name: 'Kotikulmien keikat' }).click();
    await expect(page).toHaveURL(/#keikkalista$/);
    await page.getByRole('button', { name: 'Aloita keikka 1' }).click();
    await expect(page).toHaveURL(/#kappale-\d+$/);
    await page.goBack();
    await expect(page).toHaveURL(/#keikkalista$/);
    await page.goBack();
    await expect(page.getByRole('heading', { level: 1, name: 'Ensikeikka (beta)' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' })).toBeVisible();
  });
});

test.describe('Harjoittelijoiden yhtenäinen tumma teema', () => {
  const apps = [
    ['Kitaraharjoittelija', '/kitaraharjoittelija.html', 'h1'],
    ['Riffikaiku', '/riffikaiku.html', 'h1'],
    ['Ensikeikka', ensikeikka, 'h1'],
  ] as const;
  const luminance = (rgb: string) => {
    const [r, g, b] = rgb.match(/\d+(\.\d+)?/g)!.slice(0, 3).map(Number).map(v => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contrast = (a: string, b: string) => {
    const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
    return (x + 0.05) / (y + 0.05);
  };
  const colors = (page: Page) => page.evaluate(() => {
    const style = (selector: string) => {
      const el = document.querySelector(selector);
      return el ? getComputedStyle(el) : null;
    };
    const body = getComputedStyle(document.body);
    const button = style('main button, main a.game-link, main .learning-card');
    const muted = style('.learning-lead, .intro p, .riff-help, main p');
    return {
      scheme: getComputedStyle(document.documentElement).colorScheme,
      bg: body.backgroundColor, text: style('main h1, main h2')!.color,
      muted: muted?.color ?? null, button: button ? [button.backgroundColor, button.color] : null,
    };
  });

  for (const [name, path] of apps) {
    test(`${name} näyttää samalta tummassa ja vaaleassa järjestelmäteemassa ja teksti on luettavaa`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: 'dark' });
      await page.goto(path);
      await expect(page.locator('main h1, main h2').first()).toBeVisible();
      const dark = await colors(page);
      await page.emulateMedia({ colorScheme: 'light' });
      await page.reload();
      await expect(page.locator('main h1, main h2').first()).toBeVisible();
      const light = await colors(page);
      expect(light).toEqual(dark);
      // Sama tumma perusväri kuin muualla sivustossa (assets/otelauta.css: --bg #16121f).
      expect(dark.bg).toBe('rgb(22, 18, 31)');
      expect(contrast(dark.text, dark.bg)).toBeGreaterThanOrEqual(4.5);
      if (dark.muted) expect(contrast(dark.muted, dark.bg)).toBeGreaterThanOrEqual(4.5);
    });
  }

  test('suunniteltu vaalea paletti säilyy myöhempää hallittua teemanvalintaa varten', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.locator('main h2').first()).toBeVisible();
    await page.evaluate(() => { document.documentElement.dataset.theme = 'light'; });
    expect(await page.evaluate(() => getComputedStyle(document.body).backgroundColor)).toBe('rgb(250, 248, 255)');
  });
});
