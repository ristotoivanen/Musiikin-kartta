import { test, expect } from '@playwright/test';

test.describe('Uudet oppimispolut', () => {
  test('etusivulla näkyy kolme polkua eikä vanhaa pudotusvalikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
    for (const title of ['Sävelkorva ja otelauta', 'Skaalat ja moodit', 'Soinnut ja musiikin rakenne']) {
      await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible();
    }
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
  });

  test('ensimmäisen skaalaposition vaiheet avautuvat järjestyksessä ja eteneminen tallentuu', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'A-mollipentatoninen · positio 1' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Soita muistista/ })).toBeDisabled();
    await expect(page.getByRole('region', { name: 'Otelaudan vastausruudukko' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita ylös ja alas' })).toBeVisible();
    await page.reload();
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita ylös ja alas' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await page.getByRole('button', { name: 'Näytä vain pohjasävelet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(3);
    await page.getByRole('button', { name: 'Piilota loputkin vihjeet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Näytä koko kuvio' })).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('2');
  });

  test('sointupolku tarjoaa vanhan sointusävelharjoituksen ilman kaikkien harjoitusten valikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
    await expect(page.getByText(/Rakenna C-duurisointua/)).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1');
    await expect(page.getByRole('heading', { name: 'Sointusävelet' })).toBeVisible();
  });

  test('sävelkorvan polku käyttää olemassa olevaa kuule ja toista -harjoitusta', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    await expect(page.getByRole('heading', { name: 'Kuule ja toista' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Aloita harjoitus' })).toBeVisible();
  });

  test('oppaan vanha ?tila=-linkki ohittaa polun valinnan', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&boksi=1');
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveValue('scale');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toHaveCount(0);
  });
});
