import { test, expect } from '@playwright/test';

test.describe('Rytmilliset melodiapilotit', () => {
  test('A-mollipentatonisen Wayfaring Stranger etenee lyhyestä osasta pidempään ennen improvisointia', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Wayfaring Stranger/ });
    // Section on semanttisesti nimetty section; Playwright role=region näkee aria-labelin.
    await expect(melody).toBeVisible();
    await expect(melody.getByRole('heading', { name: 'Wayfaring Stranger' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa A' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: '▶ Kuuntele mallifraasi' })).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await melody.getByRole('button', { name: 'Osa B' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.getByRole('button', { name: 'Pidempi melodia' })).toBeVisible();
    await expect(melody.getByText('ENNEN IMPROVISOINTIA')).toBeVisible();
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
    await expect(melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' })).toBeVisible();
    // Vanha etenemisavain ja muu improvisointitausta ovat muuttumattomat.
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('3');
  });

  test('C-joonisen Ukko Nooa ja oma B→C-motiivi harjoitellaan ennen improvisointia', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    await expect(melody).toBeVisible();
    await expect(melody.getByRole('heading', { name: 'Ukko Nooa' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa A' })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await melody.getByRole('button', { name: 'Osa B' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Vertaile sävelkeskuksia' })).toBeVisible();
    await expect(melody).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.getByRole('button', { name: 'Pidempi melodia' })).toBeVisible();
    await melody.getByRole('button', { name: 'Oma B → C -lisä' }).click();
    await expect(melody.getByText(/erillinen oma harjoitus/i)).toBeVisible();
    await expect(page.getByRole('button', { name: '▶ Käynnistä sointupulssi' })).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:moodipolku:ionian:v1'))).toBe('4');
  });

  test('A-mollipentatonisen siirtymään lisätään oma melodia eikä poistaa koko asteikon soittoa', async ({ page }) => {
    await page.addInitScript(() => {
      const defaults = {
        'musiikin-kartta:skaalapolku:v1': '4',
        'musiikin-kartta:skaalapolku:position-2:v1': '4',
        'musiikin-kartta:skaalapolku:bridge-1-2:v1': '1',
        'musiikin-kartta:skaalapolku:active-position:v1': 'bridge',
      };
      for (const [key, value] of Object.entries(defaults)) localStorage.setItem(key, value);
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Siirtymä kahden position välillä/ });
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await expect(page.getByRole('button', { name: '▶ Toista koko asteikko jatkuvasti' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.getByRole('button', { name: 'Pidempi melodia' })).toBeVisible();
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
  });

  test('melodia soi vain yhden rytmillisen kierroksen ja sen voi käynnistää uudelleen', async ({ page }) => {
    await page.clock.install();
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    const play = melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' });
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    // 8 iskua 84 BPM:ssä alle 7 s.
    await page.clock.fastForward(7500);
    await expect(play).toBeVisible();
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    await melody.getByRole('button', { name: '■ Pysäytä melodia' }).click();
    await expect(play).toBeVisible();
  });
});
