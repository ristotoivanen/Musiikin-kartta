import { test, expect } from '@playwright/test';

test('akustisen kappaleen soinnut seuraavat aikajanaa ja tahtiin voi hypätä', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const panel=page.locator('.song-chord-panel');
  await expect(panel.getByRole('heading',{name:'Soinnut ja sanat'})).toBeVisible();
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  await expect(jump).toHaveValue('intro');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');

  // Seek toimii ilman oikeita MP3-tiedostoja (äänitoisto ei ole tämän testin kohde).
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await jump.selectOption('bridge');
  await expect(jump).toHaveValue('bridge');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  expect(await backing.evaluate(el=>el.currentTime)).toBe(122);
  await panel.getByRole('button',{name:/^Tahti 7: E♭/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('E♭');
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 7');

  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  await expect(panel.getByRole('heading',{name:'Soinnut ja sanat'})).toBeVisible();
  await expect(panel.locator('.song-bar-grid .song-measure')).toHaveCount(4);
  await expect(jump).toHaveValue('intro');
  await page.getByRole('combobox',{name:'Versio'}).selectOption('acoustic');
  await expect(jump).toHaveValue('intro');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
});

test('kertosäkeen ohimenevä basso ja outrossa epävarma Dm erotetaan soinnuista', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const panel=page.locator('.song-chord-panel');
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('chorus1');
  await expect(panel.getByText('Basso: (F), isku 4')).toBeVisible();
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('outro');
  await expect(panel.getByText('Mahdollinen (Dm?)')).toHaveCount(2);
  await panel.getByRole('button',{name:/^Tahti 2: Gm/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
});

test('sähköisen version osiot, loppukertosäe ja tahtihypyt pysyvät omassa aikajanassa', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const panel=page.locator('.song-chord-panel');
  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await expect(jump.locator('option')).toHaveCount(9);
  await expect(jump.locator('option')).not.toContainText(['Välisoitto']);
  await jump.selectOption('verse2');
  await expect(jump).toHaveValue('verse2');
  expect(await backing.evaluate(el=>el.currentTime)).toBe(63);
  await jump.selectOption('chorus3');
  await expect(panel.locator('.song-measure')).toHaveCount(8);
  await expect(panel.locator('.song-measure').nth(4)).toContainText('B♭');
  await panel.getByRole('button',{name:/^Tahti 5: B♭ F/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('B♭');
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 5');
  await jump.selectOption('outro');
  await expect(panel.locator('.song-measure')).toHaveCount(4);
  await expect(panel.getByText(/Viimeinen Gm jää soimaan/)).toBeVisible();
  await expect(panel.locator('.song-measure small')).toHaveCount(0);
  expect(await backing.evaluate(el=>el.currentTime)).toBe(195);
});
