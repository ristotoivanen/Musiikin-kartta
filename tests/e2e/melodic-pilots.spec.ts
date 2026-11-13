import { test, expect } from '@playwright/test';

test.describe('Melodiaharjoitusten näkyvyys ja otelautakorostus', () => {
  test('pentatonisessa ensimmäinen kuuntelu on vain asteikko, melodia avautuu vasta sormituksessa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Wayfaring Stranger/ });
    await expect(melody).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Toista asteikkoa jatkuvasti/ })).toBeVisible();

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toBeVisible();
    const summary = melody.locator('summary');
    await expect(summary).toContainText('Valinnainen melodiaharjoitus');
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await summary.click();
    await expect(melody.getByRole('heading', { name: 'Wayfaring Stranger' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await expect(melody.locator('.melody-tab')).toBeVisible();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await melody.getByRole('button', { name: 'Osa B' }).click();
    await expect(melody.locator('.practice-board')).toBeVisible();
    await summary.click();
    await expect(melody.locator('.practice-board')).toHaveCount(0);

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä otelaudan sävelvihjeet' }).click();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('Ennen improvisointia');
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
    await melody.locator('summary').click();
    await expect(melody.getByRole('button', { name: 'Pidempi melodia' })).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('3');
  });

  test('C-joonisen ensimmäisessä vaiheessa vain asteikko ja Ukko Nooa avautuu seuraavassa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    await expect(melody).toHaveCount(0);
    await expect(page.locator('.practice-board .dot')).toHaveCount(8);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toBeVisible();
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await melody.locator('summary').click();
    await expect(melody.getByRole('heading', { name: 'Ukko Nooa' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toHaveCount(0); // vertailussa ei ole kappaleharjoitusta
    await expect(page.getByRole('heading', { name: 'Vertaile sävelkeskuksia' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    await expect(melody.locator('summary')).toContainText('Ennen improvisointia');
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await expect(page.getByRole('button', { name: '▶ Käynnistä sointupulssi' })).toBeVisible();
    await melody.locator('summary').click();
    await expect(melody.getByRole('button', { name: 'Pidempi melodia' })).toBeVisible();
    await melody.getByRole('button', { name: 'Oma B → C -lisä' }).click();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:moodipolku:ionian:v1'))).toBe('4');
  });

  test('oma positionvaihtomelodia on suljettu, mutta improvisaatio ja asteikko säilyvät', async ({ page }) => {
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
    await expect(melody).toBeVisible();
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await expect(page.getByRole('button', { name: '▶ Toista koko asteikko jatkuvasti' })).toBeVisible();
    await melody.locator('summary').click();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('Ennen improvisointia');
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
  });

  test('avattu melodia korostaa soivan nauhan keltaisella ja pysähtyy kertatoistoon', async ({ page }) => {
    await page.clock.install();
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    await melody.locator('summary').click();
    const play = melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' });
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    await page.clock.fastForward(180);
    await expect(melody.locator('.practice-board .playing .dot')).toHaveCount(1);
    await page.clock.fastForward(7500);
    await expect(play).toBeVisible();
    await expect(melody.locator('.practice-board .playing')).toHaveCount(0);
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    await melody.locator('summary').click(); // sulkeminen pysäyttää myös äänen
    await melody.locator('summary').click();
    await expect(play).toBeVisible();
  });
});
