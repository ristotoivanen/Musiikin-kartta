import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9: D2 on kappaleharjoittelijan oletussoitin. Nämä testit kattavat käyttäjälle näkyvät toiminnot, joita vanhan
 * soittimen testit (learning-paths, song-chords, song-download, song-volume-scales; nyt ?soitin=vanha) tarkistavat:
 * avaus oppimispoluilta ilman parametreja, raitojen kytkentä katkaisematta toistoa, versionvaihto, sointukartta ja
 * tahtihypyt soittimen kohtaan, äänenvoimakkuus sekä MP3-lataus kesken toiston.
 */
type Hook = { context: AudioContext; player: {
  position(): number; playing: boolean; duration: number; level(track: string): number; events: { kind: string }[];
} };
const hook = (page: Page) => page.evaluate(() => {
  const h = (window as unknown as { __kappaleD1?: Hook }).__kappaleD1;
  return h ? { position: h.player.position(), playing: h.player.playing, duration: h.player.duration,
    levels: ['backing', 'guitar', 'vocals'].map(t => Math.round(h.player.level(t) * 1000) / 1000),
    soitot: h.player.events.filter(e => e.kind === 'soitto').length } : null;
});
/** Tasot asettuvat setTargetAtTime-käyrällä (5 ms): odotetaan lopputasoa. */
const levelsEventually = (page: Page, expected: number[]) =>
  expect.poll(async () => (await hook(page))!.levels, { timeout: 5000 }).toEqual(expected);

async function play(page: Page) {
  const button = page.locator('.song-play');
  await button.click();
  await expect(button).toHaveText(/Tauko/, { timeout: 30000 });
  await expect.poll(async () => (await hook(page))!.position, { timeout: 15000 }).toBeGreaterThan(0.5);
  return button;
}

test('D2 oletuksena: oppimispoluilta avattu kappale soi ilman parametreja, ja kitaran sekä laulun saa pois katkaisematta toistoa', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
  await expect(page.getByRole('combobox', { name: 'Versio' })).toHaveValue('normal');
  // D2: ei mediaelementtejä, ei diagnostiikkaa.
  await expect(page.locator('.song-player audio')).toHaveCount(0);
  await expect(page.locator('.song-player pre')).toHaveCount(0);
  await play(page);
  const start = (await hook(page))!;
  expect(start.duration).toBeCloseTo(212.17, 1);
  await levelsEventually(page, [0.85, 0.78, 0.78]);
  await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
  await levelsEventually(page, [0.85, 0, 0.78]);
  await page.getByRole('checkbox', { name: 'Laulu kuuluu' }).uncheck();
  await levelsEventually(page, [0.85, 0, 0]);
  await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).check();
  await page.getByRole('checkbox', { name: 'Laulu kuuluu' }).check();
  await levelsEventually(page, [0.85, 0.78, 0.78]);
  const after = (await hook(page))!;
  // Kytkennät ovat tasoja: toisto ei katkennut eikä uusia lähteitä käynnistetty.
  expect(after.playing).toBe(true);
  expect(after.soitot).toBe(start.soitot);
  expect(after.position).toBeGreaterThan(start.position);
});

test('D2: versionvaihto pysäyttää ja kelaa alkuun, ei soita ilman painallusta, ja valinta säilyy oppimispolkujen kautta', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
  await play(page);
  const version = page.getByRole('combobox', { name: 'Versio' });
  await version.selectOption('acoustic');
  await expect(page.locator('.song-play')).toHaveText(/Soita kappale/);
  await expect(page.locator('.song-time')).toHaveText('0:00 / 0:00');
  await page.waitForTimeout(1500);
  expect((await hook(page))!.playing).toBe(false);
  await expect(page).not.toHaveURL(/kappale=/);
  await page.getByRole('button', { name: '← Oppimispolut' }).click();
  await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
  await expect(version).toHaveValue('acoustic');
  await play(page);
  expect((await hook(page))!.duration).toBeCloseTo(233.33, 1);
  // Kappalelinkillä avattu sivu pitää linkin samassa versiossa kuin valinnan.
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  await version.selectOption('normal');
  await expect(page).toHaveURL(/kappale=yksi-sointu-kaksi-askelta-normaali/);
});

test('D2: sointukartta seuraa soittimen kohtaa, ja osa- ja tahtihyppy kelaavat soittimen', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  await page.locator('details.song-chart-collapse > summary').click();
  const panel = page.locator('.song-chord-panel');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await play(page);
  const jump = panel.getByRole('combobox', { name: 'Harjoiteltava osa' });
  await jump.selectOption('bridge');
  await expect(jump).toHaveValue('bridge');
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(122);
  expect((await hook(page))!.position).toBeLessThan(124);
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.getByRole('button', { name: /^Tahti 7: E♭/ }).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('E♭');
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 7');
  expect((await hook(page))!.playing).toBe(true);
});

test('D2: äänenvoimakkuus 100 / 50 / 0 % muuttaa kaikkien raitojen tasoa ja säilyy, toisto ei katkea', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali');
  await play(page);
  const before = (await hook(page))!.soitot;
  const volume = page.locator('.song-player').getByRole('slider', { name: 'Äänenvoimakkuus' });
  await volume.fill('50');
  await levelsEventually(page, [0.425, 0.39, 0.39]);
  await volume.fill('0');
  await levelsEventually(page, [0, 0, 0]);
  await volume.fill('100');
  await levelsEventually(page, [0.85, 0.78, 0.78]);
  const after = (await hook(page))!;
  expect(after.playing).toBe(true);
  expect(after.soitot).toBe(before);
  await volume.fill('35');
  await page.reload();
  await expect(page.locator('.song-player').getByRole('slider', { name: 'Äänenvoimakkuus' })).toHaveValue('35');
});

test('D2: MP3-lataus kesken toiston ja mykistettynä ei muuta soittimen tilaa', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta');
  const player = page.locator('.song-player');
  await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
  await page.getByRole('checkbox', { name: 'Laulu kuuluu' }).uncheck();
  await play(page);
  await levelsEventually(page, [0.85, 0, 0]);
  const download = page.waitForEvent('download');
  await player.getByRole('link', { name: 'Lataa MP3' }).click();
  expect((await download).suggestedFilename()).toBe('yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3');
  const after = (await hook(page))!;
  expect(after.playing).toBe(true);
  expect(after.levels).toEqual([0.85, 0, 0]);
  await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
});
