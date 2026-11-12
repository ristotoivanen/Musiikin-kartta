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


test('sointuja voi häivyttää harjoitustasoittain ja paljastaa vain nykyisen vihjeen', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const panel=page.locator('.song-chord-panel');
  const level=panel.getByRole('combobox',{name:'Harjoitustaso'});
  const current=panel.locator('.song-current-chord strong');
  const show=panel.getByRole('checkbox',{name:'Näytä soinnut'});
  await expect(level).toHaveValue('0');
  await expect(show).toBeChecked();
  await expect(current).toHaveText('Gm');

  await level.selectOption('1');
  await expect(current).toHaveText('?');
  await expect(panel.getByText('Piilossa 2/6 sointua')).toBeVisible();
  await expect(panel.getByRole('button',{name:/^Tahti 1: sointu piilossa sointu piilossa/})).toHaveCount(1);
  await expect(panel.locator('.song-measure').first().locator('strong')).toHaveText(['?','?']);

  await panel.getByRole('button',{name:'Paljasta sointu'}).click();
  await expect(current).toHaveText('Gm');
  await panel.getByRole('button',{name:'Piilota vihje'}).click();
  await expect(current).toHaveText('?');

  await level.selectOption('2');
  await expect(panel.getByText('Piilossa 4/6 sointua')).toBeVisible();
  await level.selectOption('3');
  await expect(panel.getByText('Piilossa 5/6 sointua')).toBeVisible();
  await level.selectOption('4');
  await expect(panel.getByText('Piilossa 6/6 sointua')).toBeVisible();
  await expect(panel.locator('.song-measure-chords strong')).toHaveText(['?','?','?','?','?','?']);
  await expect(panel.getByRole('combobox',{name:'Harjoiteltava osa'})).toHaveValue('intro');

  await show.uncheck();
  await expect(level).toBeDisabled();
  await expect(current).toHaveText('?');
  await show.check();
  await expect(level).toHaveValue('4');
  await level.selectOption('0');
  await expect(current).toHaveText('Gm');
});

test('sointujen piilotusjärjestystä voi muokata ja valinnat säilyvät versiota vaihtaessa', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const panel=page.locator('.song-chord-panel');
  const level=panel.getByRole('combobox',{name:'Harjoitustaso'});
  await panel.locator('.song-fade-customize summary').click();
  await panel.getByRole('combobox',{name:'Gm: piilotusvaihe'}).selectOption('4');
  await panel.getByRole('combobox',{name:'C: piilotusvaihe'}).selectOption('1');
  await level.selectOption('1');
  await expect(panel.getByText('Piilossa 2/6 sointua')).toBeVisible();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');

  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  await expect(level).toHaveValue('1');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('bridge');
  await panel.getByRole('button',{name:/^Tahti 4: sointu piilossa/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('?');

  await page.reload();
  await expect(page.getByRole('heading',{name:'Yksi sointu, kaksi askelta'})).toBeVisible();
  await expect(panel.getByRole('combobox',{name:'Harjoitustaso'})).toHaveValue('1');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.locator('.song-fade-customize summary').click();
  await expect(panel.getByRole('combobox',{name:'Gm: piilotusvaihe'})).toHaveValue('4');
  await expect(panel.getByRole('combobox',{name:'C: piilotusvaihe'})).toHaveValue('1');
});
