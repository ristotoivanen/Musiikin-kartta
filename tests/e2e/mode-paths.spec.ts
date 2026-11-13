import { test, expect } from '@playwright/test';

test.describe('Skaalat ja moodit -valinta', () => {
  test('poluista voi valita pentatonisen ilman vanhan edistymisen häviämistä', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('musiikin-kartta:skaalapolku:v1', '2');
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'Mitä haluat opetella?' })).toBeVisible();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    await expect(page.getByRole('heading', { name: 'A-mollipentatoninen · positio 1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await page.getByRole('button', { name: /Oppimispolut/ }).first().click();
    await expect(page.getByRole('heading', { name: 'Mitä haluat opetella?' })).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('2');
  });

  test('moodit opettavat yhden oktaavin, muistivihjeet ja avaavat aiolisen joonisen jälkeen', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    await expect(page.getByRole('heading', { name: /C-jooninen/ })).toBeVisible();
    await expect(page.getByText('C · D · E · F · G · A · B')).toBeVisible();
    await expect(page.getByRole('button', { name: /2\. A-aiolinen/ })).toBeDisabled();
    await expect(page.locator('.practice-board .dot')).toHaveCount(8);

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita yksi oktaavi' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: 'Näytä pohjasävelet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(2);

    await page.reload();
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Vertaile sävelkeskuksia' })).toBeVisible();
    await expect(page.getByRole('button', { name: '▶ Kuuntele satunnainen fraasi' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Improvisoi sointupulssin päälle' })).toBeVisible();
    await expect(page.getByRole('button', { name: '▶ Käynnistä sointupulssi' })).toBeVisible();
    await page.getByRole('button', { name: 'Kirjaa moodi harjoitelluksi' }).click();
    await expect(page.getByRole('heading', { name: 'C-jooninen harjoiteltu' })).toBeVisible();
    await expect(page.getByRole('button', { name: /2\. A-aiolinen/ })).toBeEnabled();
    await page.getByRole('button', { name: 'Jatka A-aioliseen →' }).click();
    await expect(page.getByRole('heading', { name: /A-aiolinen/ })).toBeVisible();
    await expect(page.getByText('A · B · C · D · E · F · G')).toBeVisible();
    await expect(page.locator('.practice-board .dot')).toHaveCount(8);

    expect(await page.evaluate(() => [
      localStorage.getItem('musiikin-kartta:moodipolku:ionian:v1'),
      localStorage.getItem('musiikin-kartta:moodipolku:aeolian:v1'),
    ])).toEqual(['5', null]);
  });

  test('moodivalinta ei ohita alkuperäisiä tila-linkkejä', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&boksi=1');
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveValue('scale');
    await expect(page.getByRole('heading', { name: 'Mitä haluat opetella?' })).toHaveCount(0);
  });
});
