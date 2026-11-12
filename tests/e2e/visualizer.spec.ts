import { test, expect } from '@playwright/test';

test.describe('Otelautakartta, vain visualisointi', () => {
  test('etusivulla on yksi otelautakartan linkki vanhan kahden sijaan', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.getByRole('link', { name: 'Tutki otelautakarttaa' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Soita taustan mukana' })).toHaveCount(0);
  });

  test('kotisävelen ja asteikon vaihtaminen säilyttää kaulan mitat ja vaihtaa sormitusjärjestelmän automaattisesti', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    const root = page.getByRole('combobox', { name: 'Kotisävel' });
    const scale = page.getByRole('combobox', { name: 'Asteikko tai moodi' });
    const details = page.locator('#box-details > summary');
    const board = page.locator('#board svg');
    const neck = await board.getAttribute('viewBox');

    await expect(root).toHaveValue('9');
    await expect(scale).toHaveValue('mp');
    await details.click();
    await expect(page.locator('#system-name')).toHaveText('Pentatoniset boksit (5)');
    await expect(page.locator('#box-system')).toHaveCount(0);
    await expect(page.locator('#pentatonic-boxes')).toBeVisible();
    await page.locator('#pentatonic-boxes input[value="1"]').check();
    await expect(page.locator('#board .box-highlight[data-box="1"]')).not.toHaveCount(0);

    const fullCount = await page.locator('#board svg circle[r="11"]').count();
    await page.getByRole('checkbox', { name: 'Näytä vain valittujen boksien sävelet' }).check();
    expect(await page.locator('#board svg circle[r="11"]').count()).toBeLessThan(fullCount);

    await scale.selectOption('dorian');
    await expect(page.locator('#system-name')).toHaveText('3NPS: kolme säveltä per kieli (7)');
    await expect(page.locator('#three-note-boxes')).toBeVisible();
    await expect(page.locator('#pentatonic-boxes')).toBeHidden();
    await expect(board).toHaveAttribute('viewBox', neck!);
    await page.locator('#three-note-boxes input[value="2"]').check();
    await expect(page.locator('#board .box-highlight[data-box="2"]')).not.toHaveCount(0);
    await scale.selectOption('majp');
    await expect(page.locator('#system-name')).toHaveText('Pentatoniset boksit (5)');
    await expect(board).toHaveAttribute('viewBox', neck!);

    await root.selectOption('7');
    await expect(page.locator('#selection-title')).toContainText('G-duuripentatoninen');
    await expect(board).toHaveAttribute('viewBox', neck!);
  });

  test('soinnut ja oktaavit näyttävät nuottisijainnit ilman harjoituksia tai ääntä', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=A&asteikko=mp');
    await page.getByRole('button', { name: 'Soinnut' }).click();
    await expect(page.locator('#chord-settings')).toBeVisible();
    await expect(page.locator('#chord-buttons button').first()).toBeVisible();
    await expect(page.locator('#board svg')).toBeVisible();
    await page.getByRole('button', { name: 'Oktaavit' }).click();
    await expect(page.locator('#octave-settings')).toBeVisible();
    await expect(page.locator('#scale-field')).toBeHidden();
    await expect(page.locator('#board .octave-note').first()).toBeVisible();
    await expect(page.locator('audio')).toHaveCount(0);
    await expect(page.locator('main button').filter({ hasText: /Soita tausta|Aloita harjoitus|Tarkista vastaus/ })).toHaveCount(0);
    await expect(page).toHaveURL(/#oktaavit$/);
  });

  test('vanha harjoitustaustaosoite ohjautuu karttaan ja säilyttää sävellajin', async ({ page }) => {
    await page.goto('/harjoitustaustat.html?toonikka=E&asteikko=dorian');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html\?toonikka=E&asteikko=dorian/);
    await expect(page.getByRole('combobox', { name: 'Kotisävel' })).toHaveValue('4');
    await expect(page.getByRole('combobox', { name: 'Asteikko tai moodi' })).toHaveValue('dorian');
  });

  test('vanha oktaavilinkki avaa pelkän kartan ja 17 nauhaa säilyy ilman asteikkovaihtoa', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html?toonikka=A#oktaavit');
    await expect(page.getByRole('button', { name: 'Oktaavit' })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#board .octave-note')).not.toHaveCount(0);
    await expect(page.getByRole('combobox', { name: 'Näytettävät nauhat' })).toHaveValue('17');
    await page.getByRole('button', { name: 'Asteikko' }).click();
    await expect(page.locator('#selection-title')).toContainText('A-mollipentatoninen');
  });
});
