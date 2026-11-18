import { test, expect, type Page } from '@playwright/test';

/**
 * Issue #9: fyysisellä iPhonella (iOS 27.2, 17.11.2026) näytön lukitus pysäytti AudioContextin
 * renderöinnin. Tila jäi 'running', mutta currentTime ei edennyt, eikä mitään kuulunut.
 * suspend() → resume() käyttäjän painalluksesta palautti äänen. Nämä testit ajavat soittimen
 * oikeaa Soita-polkua valekontekstilla, jonka kellon voi jäädyttää.
 */
const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta';
const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.7 Mobile/15E148 Safari/604.1';

interface Harness {
  contexts: number; suspends: number; resumes: number; sources: number;
  frozen: boolean; failResume: boolean; rejectPlay: boolean;
}

test.use({ userAgent: IPHONE_UA });

async function setup(page: Page) {
  await page.addInitScript(() => {
    const harness = {
      contexts: 0, suspends: 0, resumes: 0, sources: 0,
      frozen: false, failResume: false, rejectPlay: false,
    };
    const all: { freeze(): void; thaw(): void }[] = [];
    Object.assign(window, {
      harness,
      freezeAudioClock: () => { harness.frozen = true; all.forEach(context => context.freeze()); },
    });
    // Ei oikeaa äänentoistoa: play-kutsut lasketaan. Palautuksen jälkeinen hylkäys voidaan pakottaa.
    HTMLMediaElement.prototype.play = function () {
      this.dataset.playCount = String(Number(this.dataset.playCount ?? '0') + 1);
      return harness.rejectPlay
        ? Promise.reject(new DOMException('Toisto vaatii käyttäjän eleen', 'NotAllowedError'))
        : Promise.resolve();
    };
    HTMLMediaElement.prototype.pause = function () { /* Ei äänilaitetta selaintestissä. */ };
    class FakeContext {
      state = 'suspended';
      destination = {};
      private base = performance.now();
      private frozenAt: number | null = null;
      constructor() { harness.contexts++; all.push(this); }
      get currentTime() { return this.frozenAt ?? (performance.now() - this.base) / 1000; }
      freeze() { this.frozenAt = this.currentTime; }
      thaw() {
        if (this.frozenAt === null) return;
        this.base = performance.now() - this.frozenAt * 1000;
        this.frozenAt = null;
        harness.frozen = false;
      }
      suspend() { harness.suspends++; this.state = 'suspended'; return Promise.resolve(); }
      resume() {
        harness.resumes++;
        if (harness.failResume) return Promise.reject(new DOMException('Palautus estetty', 'NotAllowedError'));
        // Kuten fyysisellä iPhonella: suspend() → resume() käynnistää pysähtyneen renderöinnin uudelleen.
        this.state = 'running';
        this.thaw();
        return Promise.resolve();
      }
      close() { this.state = 'closed'; return Promise.resolve(); }
      createMediaElementSource() { harness.sources++; return { connect: (node: unknown) => node }; }
      createGain() { return { gain: { value: 1 }, connect: (target: unknown) => target }; }
    }
    (window as unknown as { AudioContext: unknown }).AudioContext = FakeContext;
  });
  await page.goto(SONG);
  await expect(page.locator('.song-volume')).toHaveAttribute('data-volume-mode', 'webaudio');
}

const harness = (page: Page) => page.evaluate(() => ({ ...(window as unknown as { harness: Harness }).harness }));
const playCounts = (page: Page) => page.locator('.song-player audio')
  .evaluateAll(elements => elements.map(element => (element as HTMLElement).dataset.playCount ?? '0'));
const playButton = (page: Page) => page.locator('.song-player').getByRole('button', { name: '▶ Soita kappale' });
const pauseButton = (page: Page) => page.locator('.song-player').getByRole('button', { name: '■ Tauko' });
const alert = (page: Page) => page.locator('.song-player .backing-error');

/** Näytön lukitus: sivu piiloon (soitin pysähtyy), renderöinti pysähtyy, sivu takaisin näkyviin. */
async function lockScreen(page: Page, { freeze = true } = {}) {
  await page.evaluate(frozen => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
    if (frozen) (window as unknown as { freezeAudioClock(): void }).freezeAudioClock();
    Reflect.deleteProperty(document, 'hidden');
    document.dispatchEvent(new Event('visibilitychange'));
  }, freeze);
  await expect(playButton(page)).toBeVisible();
}

/** Odotetaan kellovahdin vertailuväli (250 ms) varmuusvaralla. */
const pastClockWindow = (page: Page) => page.waitForTimeout(400);

test('lukituksen jälkeen pysähtynyt kello palautetaan yhdellä suspend → resume -kierroksella, vaikka Soita painetaan kolmesti', async ({ page }) => {
  await setup(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  expect(await harness(page)).toMatchObject({ contexts: 1, suspends: 0, resumes: 1, sources: 3 });

  await lockScreen(page);
  await pastClockWindow(page);
  // Kolme painallusta samassa tehtävässä: palautus on kesken toisen ja kolmannen aikana.
  await playButton(page).evaluate((button: HTMLButtonElement) => { button.click(); button.click(); button.click(); });
  await expect(pauseButton(page)).toBeVisible();
  expect(await harness(page)).toMatchObject({ contexts: 1, suspends: 1, resumes: 2, sources: 3, frozen: false });
  // Vain viimeisin painallus käynnistää toiston: jokainen raita soitetaan yhden kerran lisää.
  expect(await playCounts(page)).toEqual(['2', '2', '2']);
  // Vahti ei hälytä, kun kello taas etenee.
  await page.waitForTimeout(1000);
  await expect(alert(page)).toHaveCount(0);
  await expect(pauseButton(page)).toBeVisible();
});

test('normaali kello: ensimmäinen käynnistys, tauko, piilotus ja versionvaihto eivät käynnistä palautusta', async ({ page }) => {
  await setup(page);
  // Ilman palautusta play() kutsutaan yhä samassa painalluksessa (iOS vaatii käyttäjän eleen).
  const synchronous = await playButton(page).evaluate((button: HTMLButtonElement) => {
    button.click();
    return Array.from(document.querySelectorAll('.song-player audio'), element => (element as HTMLElement).dataset.playCount ?? '0');
  });
  expect(synchronous).toEqual(['1', '1', '1']);
  await expect(pauseButton(page)).toBeVisible();

  await pauseButton(page).click();
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();

  await lockScreen(page, { freeze: false });
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();

  await page.getByRole('combobox', { name: 'Versio' }).selectOption('acoustic');
  await expect(playButton(page)).toBeVisible();
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  expect(await harness(page)).toMatchObject({ contexts: 1, suspends: 0, resumes: 1, sources: 6 });
  await page.waitForTimeout(1000);
  await expect(alert(page)).toHaveCount(0);
  await expect(pauseButton(page)).toBeVisible();
});

test('epäonnistunut palautus jättää soittimen pysäytetyksi, kertoo syyn ja seuraava painallus yrittää uudelleen', async ({ page }) => {
  await setup(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await lockScreen(page);
  await page.evaluate(() => { (window as unknown as { harness: Harness }).harness.failResume = true; });
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(alert(page)).toContainText('Ääni ei palautunut: Web Audio on pysähtynyt');
  await expect(alert(page)).toContainText('NotAllowedError');
  await expect(playButton(page)).toBeVisible();
  await expect(pauseButton(page)).toHaveCount(0);
  expect(await playCounts(page)).toEqual(['1', '1', '1']);
  expect(await harness(page)).toMatchObject({ suspends: 1, resumes: 2 });

  await page.evaluate(() => { (window as unknown as { harness: Harness }).harness.failResume = false; });
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await expect(alert(page)).toHaveCount(0);
  expect(await playCounts(page)).toEqual(['2', '2', '2']);
});

test('NotAllowedError palautuksen jälkeen: ei näennäistä toistoa, ja seuraava painallus soittaa ilman uutta palautusta', async ({ page }) => {
  await setup(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await lockScreen(page);
  await page.evaluate(() => { (window as unknown as { harness: Harness }).harness.rejectPlay = true; });
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(alert(page)).toContainText('toisto vaatii uuden painalluksen');
  await expect(playButton(page)).toBeVisible();
  await expect(pauseButton(page)).toHaveCount(0);
  expect(await harness(page)).toMatchObject({ suspends: 1, resumes: 2, frozen: false });

  await page.evaluate(() => { (window as unknown as { harness: Harness }).harness.rejectPlay = false; });
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await expect(alert(page)).toHaveCount(0);
  expect(await harness(page)).toMatchObject({ suspends: 1, resumes: 2 });
});

test('kello pysähtyy toiston alussa: vahti pysäyttää toiston, ja seuraava painallus palauttaa kontekstin', async ({ page }) => {
  await setup(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await page.evaluate(() => (window as unknown as { freezeAudioClock(): void }).freezeAudioClock());
  await expect(alert(page)).toContainText('Ääni ei kulje', { timeout: 3000 });
  await expect(playButton(page)).toBeVisible();
  await pastClockWindow(page);
  await playButton(page).click();
  await expect(pauseButton(page)).toBeVisible();
  await expect(alert(page)).toHaveCount(0);
  expect(await harness(page)).toMatchObject({ suspends: 1, resumes: 2, frozen: false });
});
