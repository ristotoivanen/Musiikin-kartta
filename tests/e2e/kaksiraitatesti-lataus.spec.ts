import { test, expect, type Page, type Route } from '@playwright/test';

/**
 * Kahden raidan testisivun lataus ja latausvirheet (H1:n jälkeinen korjaus). WAV-tiedostot ladataan kerran
 * kokonaan ilman Range-pyyntöjä. Toisto (WAV-tila) ja mittausreferenssit (MP3- ja WAV-tila) lukevat samaa
 * muistikopiota. Latausvirhe näkyy heti, eikä toisto jää odottamaan raitaa, joka ei valmistu.
 */
interface Measurement { ms: number; reliable: boolean; mediaDiffMs: number; renderedDiffMs: number | null; tracks: { name: string; error?: string }[] }
interface Entry { ms: number; event: string; track?: string; attempt?: number; reason?: string; willRetry?: boolean }
interface Report { meta: { loading: string }; measurements: Measurement[]; events: Entry[] }

const AUDIO = '**/assets/audio/kaksiraitatesti/';
const KITARA_WAV = AUDIO + 'yksi-sointu-akustinen-kitara-0-120s.wav';
const WAVS = AUDIO + '*-0-120s.wav';
const KITARA_MP3 = AUDIO + 'yksi-sointu-akustinen-kitara.mp3';
const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' });
const pauseButton = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
const fileState = (page: Page, track: string) => page.locator(`.files [data-track="${track}"]`);
const report = (page: Page): Promise<Report> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): Report } }).kaksiraitatesti.report());
const hookSeek = (page: Page, seconds: number) =>
  page.evaluate(at => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(at), seconds);
const now = (page: Page) => page.evaluate(() => performance.now());
const events = async (page: Page, name: string) => (await report(page)).events.filter(item => item.event === name);
const serviceUnavailable = (route: Route) => route.fulfill({ status: 503, contentType: 'text/plain; charset=UTF-8', body: 'error code: 1102' });

/** Kirjaa sivun äänipyynnöt (osoite ja Range-otsake). */
function audioRequests(page: Page) {
  const list: { file: string; range: string | null }[] = [];
  page.on('request', request => {
    if (!request.url().includes('/assets/audio/')) return;
    list.push({ file: request.url().split('/').pop()!, range: request.headers()['range'] ?? null });
  });
  return list;
}

async function reliableAfter(page: Page, after: number): Promise<Measurement> {
  let found: Measurement | undefined;
  await expect.poll(async () => {
    found = (await report(page)).measurements.find(item => item.reliable && item.ms > after);
    return Boolean(found);
  }, { timeout: 25_000, intervals: [500] }).toBe(true);
  return found!;
}

test.describe('Kahden raidan testi: lataus ja latausvirheet', () => {
  // Jokainen WAV-sivu lataa 46 Mt ja purkaa sen. Sarjassa ajettuna ne eivät kuormita rinnakkaisia mittaustestejä.
  test.describe.configure({ mode: 'serial', timeout: 90_000 });

  test('WAV ladataan kerran ilman Rangea: käynnistys, mittaukset, kelaus ja jatko eivät tee äänipyyntöjä', async ({ page }) => {
    const requests = audioRequests(page);
    await page.goto('/kaksiraitatesti.html?lahde=wav&moottori=uusi&mittausvali=2000');
    await expect(page.locator('.mode')).toContainText('WAV (0–120 s, muistista)');
    await expect(page.locator('.files')).toHaveAttribute('data-ready', 'kyllä', { timeout: 20_000 });
    expect([...requests].sort((a, b) => a.file.localeCompare(b.file))).toEqual([
      { file: 'yksi-sointu-akustinen-kitara-0-120s.wav', range: null },
      { file: 'yksi-sointu-akustinen-tausta-0-120s.wav', range: null },
    ]);

    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    const seekAt = await now(page);
    await hookSeek(page, 30);
    const afterSeek = await reliableAfter(page, seekAt + 1500);
    // Muistista soitettu WAV mitataan samaa muistikopiota vastaan: renderöity ero = mediakellojen ero.
    expect(Math.abs(afterSeek.renderedDiffMs! - afterSeek.mediaDiffMs)).toBeLessThan(1.5);
    await pauseButton(page).click();
    const resumeAt = await now(page);
    await playButton(page).click();
    await reliableAfter(page, resumeAt + 1500);
    expect(requests).toHaveLength(2);
    expect((await report(page)).meta.loading).toBe('muisti');
  });

  test('HTTP 503 kahdesti: lataus uusitaan ja toisto toimii', async ({ page }) => {
    let calls = 0;
    await page.route(KITARA_WAV, route => (++calls <= 2 ? serviceUnavailable(route) : route.continue()));
    await page.goto('/kaksiraitatesti.html?lahde=wav&moottori=uusi');
    await expect(playButton(page)).toBeDisabled();
    await expect(fileState(page, 'kitara')).toHaveAttribute('data-state', 'valmis', { timeout: 20_000 });
    expect(calls).toBe(3);
    const failures = await events(page, 'lataus-yritys-epaonnistui');
    expect(failures.map(item => [item.track, item.attempt, item.reason, item.willRetry])).toEqual([
      ['kitara', 1, 'HTTP 503', true], ['kitara', 2, 'HTTP 503', true],
    ]);
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
  });

  test('pysyvä 503 yhdellä raidalla: virhe näkyy, toistoa ei aloiteta, Yritä uudelleen palauttaa', async ({ page }) => {
    await page.route(KITARA_WAV, serviceUnavailable);
    await page.goto('/kaksiraitatesti.html?lahde=wav&moottori=uusi');
    const alert = page.getByRole('alert').filter({ hasText: 'Äänitiedoston lataus epäonnistui' });
    await expect(alert).toContainText('kitara (HTTP 503 (3 yritystä))', { timeout: 20_000 });
    await expect(alert).toContainText('Toistoa ei voi aloittaa.');
    await expect(fileState(page, 'tausta')).toHaveAttribute('data-state', 'valmis');
    await expect(playButton(page)).toBeDisabled();
    expect(await events(page, 'toisto-alkoi')).toEqual([]);

    await page.unroute(KITARA_WAV);
    await alert.getByRole('button', { name: 'Yritä uudelleen' }).click();
    await expect(fileState(page, 'kitara')).toHaveAttribute('data-state', 'valmis', { timeout: 20_000 });
    await expect(alert).toHaveCount(0);
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
  });

  test('viivästynyt vastaus: Soita odottaa latausta näkyvästi, pysähtynyt yritys uusitaan aikarajan jälkeen', async ({ page }) => {
    let calls = 0;
    await page.route(KITARA_WAV, async route => {
      calls++;
      if (calls === 1) return; // Ensimmäinen pyyntö ei vastaa koskaan: sivun aikaraja keskeyttää sen.
      await new Promise(resolve => setTimeout(resolve, 1000)); // Hidas mutta aikarajan sisällä.
      await route.continue().catch(() => { /* Sivu on jo suljettu. */ });
    });
    await page.goto('/kaksiraitatesti.html?lahde=wav&moottori=uusi&latausaikaraja=2000');
    await expect(fileState(page, 'kitara')).toHaveAttribute('data-state', 'lataa');
    await expect(playButton(page)).toBeDisabled();
    await expect(fileState(page, 'kitara')).toHaveAttribute('data-state', 'valmis', { timeout: 20_000 });
    const failures = await events(page, 'lataus-yritys-epaonnistui');
    expect(failures.map(item => [item.track, item.reason, item.willRetry])).toEqual([['kitara', 'ei vastausta 2 s', true]]);
    await expect(playButton(page)).toBeEnabled();
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
  });

  for (const engine of ['uusi', 'nykyinen'] as const) {
    test(`verkosta soitettavan raidan latausvirhe (MP3, ${engine} moottori): virhe heti, ei odotusta, uusi Soita lataa uudelleen`, async ({ page }) => {
      await page.route(KITARA_MP3, serviceUnavailable);
      await page.goto(`/kaksiraitatesti.html?lahde=mp3${engine === 'uusi' ? '&moottori=uusi' : ''}`);
      const alert = page.getByRole('alert').filter({ hasText: 'Äänitiedoston lataus epäonnistui (kitara' });
      await expect(alert).toBeVisible({ timeout: 10_000 });
      const pressed = await now(page);
      await playButton(page).click();
      await expect(alert).toContainText('Paina Soita yrittääksesi uudelleen.');
      // Ei viiden sekunnin kelausodotusta eikä yksin soivaa taustaa.
      await expect.poll(async () => (await report(page)).events.some(item => item.ms > pressed && (item.event === 'latausvirhe' || item.event === 'pause-call'))).toBe(true);
      const settled = (await report(page)).events.find(item => item.ms > pressed && (item.event === 'latausvirhe' || item.event === 'pause-call'))!;
      expect(settled.ms - pressed).toBeLessThan(2000);
      expect(await events(page, 'toisto-alkoi')).toEqual([]);
      await expect(playButton(page)).toBeVisible();
      expect(await page.locator('audio').first().evaluate(element => (element as HTMLAudioElement).paused)).toBe(true);

      await page.unroute(KITARA_MP3);
      await playButton(page).click();
      await expect(pauseButton(page)).toBeVisible({ timeout: 10_000 });
      await expect(alert).toHaveCount(0);
    });
  }

  test('MP3-tila: mittausreferenssin latausvirhe ei estä toistoa eikä mittaus lataa uudelleen joka kerta', async ({ page }) => {
    const requests = audioRequests(page);
    await page.route(WAVS, serviceUnavailable);
    await page.goto('/kaksiraitatesti.html?lahde=mp3&mittausvali=1000');
    const alert = page.getByRole('alert').filter({ hasText: 'Mittausreferenssin lataus epäonnistui' });
    await expect(alert).toContainText('Toisto toimii, mutta mittaukset eivät.', { timeout: 20_000 });
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    // Mittaukset jatkuvat ja kirjaavat syyn, mutta eivät käynnistä uusia latauksia.
    await expect.poll(async () => (await report(page)).measurements
      .filter(item => item.tracks.some(track => track.error?.includes('ei latautunut'))).length, { timeout: 15_000 }).toBeGreaterThanOrEqual(3);
    // Kolme yritystä kummallekin WAVille latausvaiheessa, ei uusia pyyntöjä mittauksista.
    expect(requests.filter(item => item.file.endsWith('.wav'))).toHaveLength(6);
  });
});
