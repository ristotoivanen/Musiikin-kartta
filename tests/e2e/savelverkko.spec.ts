import { expect, test } from '@playwright/test';

test('Sävelverkkoon pääsee Musapeleistä ja oppitunnilta oikeaan tilaan', async ({ page }) => {
  await page.goto('/musapelit.html#aihe-otelauta');
  await page.locator('#aihe-otelauta').getByRole('link', { name: /Sävelverkko/ }).click();
  await expect(page.locator('#mode')).toHaveValue('tutki');
  await page.locator('#mute').click();
  await page.locator('#explore-view').selectOption('unison');
  await page.getByRole('button', { name: 'Valitse F', exact: true }).click();
  await page.getByRole('button', { name: 'Valitse G', exact: true }).click();
  await expect(page.locator('#trace-caption')).toContainText('F → G');
  await expect(page.locator('.fret-note[data-id="5/1"]')).toHaveAccessibleName(/edellisen kuvion F4/);
  await expect(page.locator('#edges .edge.unison').first()).toBeAttached();
  await expect(page.locator('#edges .edge.octave')).toHaveCount(0);
  await page.locator('#long').click();
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('[data-jump="24"]').click();
  await expect(page.locator('#viewport')).toContainText('–24');
  const openE = page.locator('.string-key button[data-id="0/0"]');
  await openE.click();
  await expect(page.locator('#heading')).toHaveText('E otelaudalla');
  await page.getByRole('link', {name: /teoria ja soittoharjoitukset/}).click();
  await page.getByRole('link', {name: 'etsi oktaavit', exact:true}).click();
  await expect(page.locator('#mode')).toHaveValue('oktaavi');
  await expect(page.locator('#picker')).toBeHidden();
});

test('Yhteydet kertyvät harjoituksen mukaan ja valmis verkko säilyy kitaralla tarkistettavana', async ({ page }) => {
  for (const mode of ['sama-korkeus', 'oktaavi', 'muisti']) {
    await page.goto('/savelverkko.html?harjoitus=' + mode);
    await page.locator('#mute').click();
    await page.locator('#order').selectOption('ordered');
    await expect(page.locator('#heading')).toContainText('C');
    if (mode === 'muisti') {
      for (const id of ['0/8','1/3','2/10','3/5','4/1','5/8']) {
        await page.locator(`.fret-note[data-id="${id}"]`).click();
      }
      await expect(page.locator('#result-count')).toContainText('6 itse');
    } else {
      for (let i = 0; i < 20 && await page.locator('#reveal').isVisible(); i++) {
        await page.locator('#reveal').click();
      }
      await expect(page.locator('#result-count')).toContainText('avustettuna');
    }
    await expect(page.locator('#round-result')).toBeVisible();
    for (const [kind, visible] of [['unison', mode !== 'oktaavi'], ['octave', mode !== 'sama-korkeus']] as const) {
      const lines = page.locator('#edges .edge.' + kind);
      if (visible) await expect(lines.first()).toBeAttached();
      else await expect(lines).toHaveCount(0);
    }
    await page.locator('#guitar').click();
    await page.locator('#check').click();
    await expect(page.locator('#answer')).toContainText('C');
    await page.locator('#back').click();
    await page.locator('#next').click();
    await expect(page.locator('#heading')).toContainText('D');
    await expect(page.locator('#round-result')).toBeHidden();
  }
});
