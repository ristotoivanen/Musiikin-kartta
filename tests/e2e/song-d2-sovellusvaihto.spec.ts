import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9, PR #181 B7: sovellusvaihdon jälkeen iPhonen D2-konteksti voi soittaa äänettömästi (kello etenee, ääntä ei
 * kuulu), eikä tilaa voi havaita sivulta. Sivun piiloutumisen jälkeen seuraava Soita luo kontekstin uudelleen.
 * Chromium ei toista iOS:n äänettömyyttä: testit varmistavat polun (uusi konteksti vain piiloutumisen jälkeen, vanha
 * suljetaan, kohta, mykistykset, äänenvoimakkuus ja looppi säilyvät, konteksteja ei kasaudu, ei päällekkäistä soittoa).
 */
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali';

type Hook = { context: AudioContext; player: { position(): number; playing: boolean; state: string; duration: number;
  level(track: string): number; events: { kind: string }[]; looping: boolean } };
const hook = (page: Page) => page.evaluate(() => {
  const h = (window as unknown as { __kappaleD1?: Hook }).__kappaleD1;
  return h ? { position: h.player.position(), playing: h.player.playing, state: h.player.state, duration: h.player.duration,
    looping: h.player.looping, levels: ['backing', 'guitar', 'vocals'].map(t => Math.round(h.player.level(t) * 1000) / 1000),
    soitot: h.player.events.filter(e => e.kind === 'soitto').length } : null;
});
const contexts = (page: Page) => page.evaluate(() => (window as unknown as { __kontekstit: { luotu: number; suljettu: number } }).__kontekstit);

async function instrument(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __kontekstit: { luotu: number; suljettu: number }; __piilossa?: boolean };
    w.__kontekstit = { luotu: 0, suljettu: 0 };
    const Original = window.AudioContext;
    class Counted extends Original {
      constructor(options?: AudioContextOptions) { super(options); w.__kontekstit.luotu++; }
      close() { w.__kontekstit.suljettu++; return super.close(); }
    }
    window.AudioContext = Counted;
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => w.__piilossa === true });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => (w.__piilossa ? 'hidden' : 'visible') });
  });
}
const background = async (page: Page, ms = 500) => {
  await page.evaluate(() => { (window as unknown as { __piilossa: boolean }).__piilossa = true; document.dispatchEvent(new Event('visibilitychange')); });
  await page.waitForTimeout(ms);
  await page.evaluate(() => { (window as unknown as { __piilossa: boolean }).__piilossa = false; document.dispatchEvent(new Event('visibilitychange')); });
};
async function startPlaying(page: Page) {
  await page.goto(SONG);
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  await expect.poll(async () => (await hook(page))!.position, { timeout: 15000 }).toBeGreaterThan(2);
  return play;
}

test('D2-sovellusvaihto: ilman piiloutumista tauko ja jatko käyttävät samaa kontekstia', async ({ page }) => {
  await instrument(page);
  const play = await startPlaying(page);
  await play.click();
  await play.click();
  await expect(play).toHaveText(/Tauko/);
  expect(await contexts(page)).toEqual({ luotu: 1, suljettu: 0 });
});

test('D2-sovellusvaihto: paluun jälkeen Soita luo uuden kontekstin ja jatkaa samasta kohdasta mykistykset, taso ja looppi säilyttäen', async ({ page }) => {
  test.setTimeout(60000);
  await instrument(page);
  const play = await startPlaying(page);
  await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
  await page.locator('.song-player').getByRole('slider', { name: 'Äänenvoimakkuus' }).fill('50');
  await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
  await background(page, 1000);
  await expect(play).toHaveText(/Soita kappale/);
  const saved = (await hook(page))!.position;
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  expect(await contexts(page)).toEqual({ luotu: 2, suljettu: 1 });
  const after = (await hook(page))!;
  expect(after.position).toBeGreaterThanOrEqual(saved - 0.05);
  expect(after.position).toBeLessThan(saved + 1.5);
  expect(after.soitot).toBe(1);
  expect(after.looping).toBe(true);
  await expect.poll(async () => (await hook(page))!.levels, { timeout: 5000 }).toEqual([0.425, 0, 0.39]);
  await expect(page.getByRole('alert')).toHaveCount(0);
});

test('D2-sovellusvaihto: kymmenen vaihtoa ei kasauta konteksteja, ja jokainen paluu soi kerran', async ({ page }) => {
  test.setTimeout(120000);
  await instrument(page);
  const play = await startPlaying(page);
  for (let i = 0; i < 10; i++) {
    await background(page, 200);
    await play.click();
    await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
    const h = (await hook(page))!;
    expect(h.soitot).toBe(1);
    expect(h.playing).toBe(true);
  }
  const counted = await contexts(page);
  expect(counted.luotu - counted.suljettu).toBe(1);
  expect(counted.luotu).toBe(11);
});

test('D2-sovellusvaihto: vaihto latauksen aikana ja versionvaihto paluun jälkeen soivat uudella kontekstilla', async ({ page }) => {
  test.setTimeout(120000);
  await instrument(page);
  const cdp = await page.context().newCDPSession(page);
  await page.goto(SONG);
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 190000, uploadThroughput: 100000 });
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Peruuta lataus|Tauko/);
  await background(page, 500);
  await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 0, downloadThroughput: -1, uploadThroughput: -1 });
  // Lataus valmistuu paluun jälkeen: ei soittoa vanhaan kontekstiin, vaan ohje painaa Soita.
  await expect(page.getByText('Soitin oli taustalla latauksen aikana. Paina Soita aloittaaksesi.')).toBeVisible({ timeout: 60000 });
  expect((await hook(page))!.soitot).toBe(0);
  await expect(play).toHaveText(/Soita kappale/);
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 60000 });
  expect((await contexts(page)).luotu).toBe(2);
  // Versionvaihto paluun jälkeen: uusi konteksti, uusi versio, vanhaa ei kuulu.
  await background(page, 300);
  await page.locator('#song-version-select').selectOption('acoustic');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  const h = (await hook(page))!;
  expect(h.duration).toBeCloseTo(233.33, 1);
  expect(h.soitot).toBe(1);
  const counted = await contexts(page);
  expect(counted.luotu - counted.suljettu).toBe(1);
});
