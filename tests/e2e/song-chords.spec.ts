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
  await expect(panel.getByText(/Normaaliversion sointujen paikat/)).toBeVisible();
  await expect(panel.locator('.song-bar-grid')).toHaveCount(0);
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
