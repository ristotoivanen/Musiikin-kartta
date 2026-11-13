import { test, expect, type Page } from '@playwright/test';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta';
const ROOT = 'assets/audio/kappaleet/';
const FULL = {
  normal: ROOT + 'yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3',
  acoustic: ROOT + 'yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3',
};

/** Ei oikeaa äänentoistoa: play- ja pause-kutsut lasketaan raidoittain. */
async function mockPlayback(page: Page) {
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = function () {
      this.dataset.playCount = String(Number(this.dataset.playCount ?? '0') + 1);
      return Promise.resolve();
    };
    HTMLMediaElement.prototype.pause = function () {
      this.dataset.pauseCount = String(Number(this.dataset.pauseCount ?? '0') + 1);
    };
  });
}

/** Soittimen koko tila: toistopainike, valinnat, raitojen mykistys, äänenvoimakkuus ja kutsumäärät. */
async function playerState(page: Page) {
  const player = page.locator('.song-player');
  return {
    button: await player.locator('.song-play').textContent(),
    checks: await player.locator('.song-toggles input[type=checkbox]').evaluateAll(
      inputs => inputs.map(input => (input as HTMLInputElement).checked)),
    volume: await player.getByRole('slider', { name: 'Äänenvoimakkuus' }).inputValue(),
    streams: await player.locator('audio').evaluateAll(elements => elements.map(element => {
      const audio = element as HTMLAudioElement;
      return { src: audio.getAttribute('src'), muted: audio.muted, volume: audio.volume, loop: audio.loop,
        plays: audio.dataset.playCount ?? '0', pauses: audio.dataset.pauseCount ?? '0' };
    })),
  };
}

const sha = (data: Buffer) => createHash('sha256').update(data).digest('hex');

test.describe('Kappaleharjoittelijan Lataa MP3', () => {
  test('linkki lataa valitun version alkuperäisen kokonaisen MP3:n', async ({ page }) => {
    await mockPlayback(page);
    await page.goto(SONG);
    const player = page.locator('.song-player');
    const link = player.getByRole('link', { name: 'Lataa MP3' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', FULL.normal);
    await expect(link).toHaveAttribute('download', 'yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3');
    await expect(player.locator('.song-download')).toContainText('Normaali versio, koko kappale · 4,9 Mt');

    const normal = page.waitForEvent('download');
    await link.click();
    const normalFile = await normal;
    expect(normalFile.suggestedFilename()).toBe('yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3');
    expect(sha(readFileSync(await normalFile.path()))).toBe(sha(readFileSync(FULL.normal)));

    await page.getByRole('combobox', { name: 'Versio' }).selectOption('acoustic');
    await expect(link).toHaveAttribute('href', FULL.acoustic);
    await expect(player.locator('.song-download')).toContainText('Akustinen versio, koko kappale · 5,3 Mt');
    const acoustic = page.waitForEvent('download');
    await link.click();
    const acousticFile = await acoustic;
    expect(acousticFile.suggestedFilename()).toBe('yksi-sointu-kaksi-askelta-akustinen-kokonainen.mp3');
    expect(sha(readFileSync(await acousticFile.path()))).toBe(sha(readFileSync(FULL.acoustic)));
    // Sivu pysyy soittimessa eikä siirry tiedostoon.
    await expect(page).toHaveURL(/kitaraharjoittelija\.html/);
  });

  test('lataus toimii kesken toiston ja mykistettynä eikä muuta soittimen tilaa', async ({ page }) => {
    await mockPlayback(page);
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
    await page.getByRole('checkbox', { name: 'Laulu kuuluu' }).uncheck();
    await player.getByRole('slider', { name: 'Äänenvoimakkuus' }).fill('35');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    // Kitara ja laulu ovat edelleen valitun version raitoja; latauslinkki ei riipu niistä.
    await expect(player.getByRole('link', { name: 'Lataa MP3' })).toHaveAttribute('href', FULL.normal);

    const before = await playerState(page);
    const download = page.waitForEvent('download');
    await player.getByRole('link', { name: 'Lataa MP3' }).click();
    expect((await download).suggestedFilename()).toBe('yksi-sointu-kaksi-askelta-normaali-kokonainen.mp3');
    expect(await playerState(page)).toEqual(before);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    expect(before.checks).toEqual([false, false, false]);
    expect(before.streams.map(stream => stream.muted)).toEqual([false, true, true]);
  });

  test('ladattavat tiedostot ovat paketin muuttamattomat alkuperäiset', () => {
    expect(sha(readFileSync(FULL.normal))).toBe('df9d91c32de104791c036fbf2dc602b402b37cb220edaaaca9bc69ea092a7e57');
    expect(sha(readFileSync(FULL.acoustic))).toBe('2b7f49e7df1993f7fef64b430a09f17993aa4d20457580fe2964b31f6e0544f8');
  });
});
