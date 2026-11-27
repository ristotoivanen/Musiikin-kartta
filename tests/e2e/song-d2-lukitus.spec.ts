import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9, D2: näytön lukituksen jälkeinen palautus. Fyysisellä iPhonella (PR #92, D6) AudioContext jäi tilaan
 * `running`, mutta `currentTime` ei edennyt eikä mitään kuulunut; suspend() → resume() palautti äänen.
 * Chromiumissa tilanne jäljitellään jäädyttämällä `currentTime` (window.__kello.seis). Testisuspend vapauttaa kellon
 * (korjaa = true), kuten laitteella. Lisäksi sivun piilotus (lukitus) ja palautuksen epäonnistuminen.
 */
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali';

type Hook = { context: AudioContext; player: { position(): number; playing: boolean; state: string; events: { kind: string }[] } };
const hook = (page: Page) => page.evaluate(() => {
  const h = (window as unknown as { __kappaleD1?: Hook }).__kappaleD1;
  return h ? { position: h.player.position(), playing: h.player.playing, state: h.player.state, context: h.context.state,
    soitot: h.player.events.filter(e => e.kind === 'soitto').length } : null;
});
const clockState = (page: Page) => page.evaluate(() => (window as unknown as { __kello: { suspendit: number } }).__kello);

async function freezableClock(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __kello: { seis: boolean; korjaa: boolean; suspendit: number; viive: number }; __piilossa?: boolean };
    w.__kello = { seis: false, korjaa: true, suspendit: 0, viive: 0 };
    const time = Object.getOwnPropertyDescriptor(BaseAudioContext.prototype, 'currentTime')!;
    const frozen = new WeakMap<object, number>();
    Object.defineProperty(BaseAudioContext.prototype, 'currentTime', {
      configurable: true,
      get() {
        if (w.__kello.seis) { if (!frozen.has(this)) frozen.set(this, time.get!.call(this)); return frozen.get(this); }
        frozen.delete(this);
        return time.get!.call(this);
      },
    });
    const suspend = AudioContext.prototype.suspend;
    AudioContext.prototype.suspend = function (this: AudioContext) {
      w.__kello.suspendit++;
      const done = () => { if (w.__kello.korjaa) w.__kello.seis = false; return suspend.call(this); };
      return w.__kello.viive ? new Promise<void>(resolve => setTimeout(() => resolve(done()), w.__kello.viive)) : done();
    };
    // Sivun piilotus testistä (lukitus): document.hidden ja visibilitychange.
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => w.__piilossa === true });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => (w.__piilossa ? 'hidden' : 'visible') });
  });
}

async function startPlaying(page: Page) {
  await page.goto(SONG);
  const play = page.locator('.song-play');
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  await expect.poll(async () => (await hook(page))!.position, { timeout: 15000 }).toBeGreaterThan(2);
  return play;
}

test('D2-lukitus: pysähtynyt kello tilassa running pysäyttää toiston kohtaan ja Soita palauttaa äänen samasta kohdasta', async ({ page }) => {
  test.setTimeout(60000);
  await freezableClock(page);
  const play = await startPlaying(page);
  // Normaali kello ei laukaise valvontaa.
  await page.waitForTimeout(2500);
  await expect(page.getByRole('alert')).toHaveCount(0);
  await page.evaluate(() => { (window as unknown as { __kello: { seis: boolean } }).__kello.seis = true; });
  const frozenAt = (await hook(page))!.position;
  await expect(page.getByRole('alert')).toHaveText(/Ääni pysähtyi.*Paina Soita jatkaaksesi samasta kohdasta/, { timeout: 5000 });
  await expect(play).toHaveText(/Soita kappale/);
  const stopped = (await hook(page))!;
  expect(stopped.playing).toBe(false);
  expect(Math.abs(stopped.position - frozenAt)).toBeLessThan(0.05);
  const sessionsBefore = stopped.soitot;
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 10000 });
  expect((await clockState(page)).suspendit).toBe(1);
  await expect(page.getByRole('alert')).toHaveCount(0);
  const resumed = (await hook(page))!;
  expect(resumed.soitot).toBe(sessionsBefore + 1);
  expect(resumed.position).toBeGreaterThanOrEqual(frozenAt - 0.05);
  expect(resumed.position).toBeLessThan(frozenAt + 1.5);
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(frozenAt + 1);
});

test('D2-lukitus: kolme nopeaa painallusta pysähdyksen jälkeen tekevät yhden palautuksen ja yhden soiton', async ({ page }) => {
  test.setTimeout(60000);
  await freezableClock(page);
  const play = await startPlaying(page);
  await page.evaluate(() => { const k = (window as unknown as { __kello: { seis: boolean; viive: number } }).__kello; k.seis = true; k.viive = 400; });
  await expect(page.getByRole('alert')).toHaveText(/Ääni pysähtyi/, { timeout: 5000 });
  const before = (await hook(page))!.soitot;
  await play.click(); await play.click(); await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 10000 });
  await page.waitForTimeout(1000);
  expect((await clockState(page)).suspendit).toBe(1);
  const after = (await hook(page))!;
  expect(after.playing).toBe(true);
  expect(after.soitot).toBe(before + 1);
});

test('D2-lukitus: epäonnistunut palautus antaa selkeän viestin, ja seuraava Soita käynnistää soittimen uudelleen samasta kohdasta', async ({ page }) => {
  test.setTimeout(90000);
  await freezableClock(page);
  const play = await startPlaying(page);
  await page.evaluate(() => { const k = (window as unknown as { __kello: { seis: boolean; korjaa: boolean } }).__kello; k.seis = true; k.korjaa = false; });
  await expect(page.getByRole('alert')).toHaveText(/Ääni pysähtyi/, { timeout: 5000 });
  const saved = (await hook(page))!.position;
  await play.click();
  await expect(page.getByRole('alert')).toHaveText(/Ääntä ei saatu palautettua\. Paina Soita, niin soitin käynnistetään uudelleen samasta kohdasta/, { timeout: 10000 });
  await expect(play).toHaveText(/Soita kappale/);
  expect(await hook(page)).toBeNull();
  // Laitteella uusi konteksti toimii; testissä kello vapautetaan ennen uutta painallusta.
  await page.evaluate(() => { (window as unknown as { __kello: { seis: boolean } }).__kello.seis = false; });
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  const restarted = (await hook(page))!;
  expect(restarted.position).toBeGreaterThanOrEqual(saved - 0.05);
  expect(restarted.position).toBeLessThan(saved + 3);
  await expect(page.getByRole('alert')).toHaveCount(0);
});

test('D2-lukitus: sivun piilotus pysäyttää kohtaan, ja paluun jälkeen Soita jatkaa ilman palautusta', async ({ page }) => {
  test.setTimeout(60000);
  await freezableClock(page);
  const play = await startPlaying(page);
  await page.evaluate(() => { (window as unknown as { __piilossa: boolean }).__piilossa = true; document.dispatchEvent(new Event('visibilitychange')); });
  await expect(play).toHaveText(/Soita kappale/);
  const saved = (await hook(page))!.position;
  await page.waitForTimeout(1500);
  expect(Math.abs((await hook(page))!.position - saved)).toBeLessThan(0.01);
  await page.evaluate(() => { (window as unknown as { __piilossa: boolean }).__piilossa = false; document.dispatchEvent(new Event('visibilitychange')); });
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 10000 });
  expect((await clockState(page)).suspendit).toBe(0);
  const resumed = (await hook(page))!;
  expect(resumed.position).toBeGreaterThanOrEqual(saved - 0.05);
  expect(resumed.position).toBeLessThan(saved + 1);
});

test('D2-lukitus: versionvaihto kesken palautuksen ei käynnistä vanhaa versiota, uusi versio soi seuraavasta painalluksesta', async ({ page }) => {
  test.setTimeout(90000);
  await freezableClock(page);
  const play = await startPlaying(page);
  await page.evaluate(() => { const k = (window as unknown as { __kello: { seis: boolean; viive: number } }).__kello; k.seis = true; k.viive = 1500; });
  await expect(page.getByRole('alert')).toHaveText(/Ääni pysähtyi/, { timeout: 5000 });
  await play.click();
  await expect(page.getByRole('status').filter({ hasText: 'Palautetaan ääntä…' })).toBeVisible();
  await page.locator('#song-version-select').selectOption('acoustic');
  await page.waitForTimeout(2500);
  await expect(play).toHaveText(/Soita kappale/);
  expect((await hook(page))!.playing).toBe(false);
  await play.click();
  await expect(play).toHaveText(/Tauko/, { timeout: 30000 });
  await expect.poll(async () => (await hook(page))!.position, { timeout: 10000 }).toBeGreaterThan(0.3);
  await expect(page.locator('.song-player .session-top span')).toContainText('Akustinen versio');
});
