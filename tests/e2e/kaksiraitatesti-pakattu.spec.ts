import { test, expect, type Page } from '@playwright/test';

/**
 * Pakatut toistotiedostot (MK-20261118-03): AAC 192 kbit/s ja MP3 CBR 192 kbit/s, koodattu samoista
 * lähde-WAVeista. Ne ladataan kerran ja soitetaan muistista kuten WAV-tila (H2). Mittausreferenssit (WAV)
 * ladataan vasta toistotiedostojen jälkeen. Renderöity kohdistus mitataan WAV-referenssiä vastaan.
 */
interface Track { name: string; mediaMinusRenderedMs: number | null }
interface Measurement { ms: number; reliable: boolean; mediaDiffMs: number; renderedDiffMs: number | null; tracks: Track[] }
interface Entry { ms: number; event: string; track?: string; url?: string; kind?: string; tausta?: number }
interface Report { meta: { length: string }; measurements: Measurement[]; events: Entry[] }

const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' });
const pauseButton = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
// K1: Tauko näkyy jo kesken aloituksen. Soiminen tarkistetaan painikkeen tilasta (sama kuin ennen K1:tä Tauko näkyvissä).
const playingButton = (page: Page) => page.locator('.player button.play[data-tila="soi"]');
const report = (page: Page): Promise<Report> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): Report } }).kaksiraitatesti.report());
const hookSeek = (page: Page, seconds: number) =>
  page.evaluate(at => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(at), seconds);
const now = (page: Page) => page.evaluate(() => performance.now());

function audioRequests(page: Page) {
  const list: { file: string; range: string | null; at: number }[] = [];
  page.on('request', request => {
    if (!request.url().includes('/assets/audio/')) return;
    list.push({ file: request.url().split('/').pop()!, range: request.headers()['range'] ?? null, at: Date.now() });
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

const SOURCES = [
  { source: 'aac', files: ['yksi-sointu-akustinen-tausta-0-120s.m4a', 'yksi-sointu-akustinen-kitara-0-120s.m4a'] },
  { source: 'mp3cbr', files: ['yksi-sointu-akustinen-tausta-0-120s-cbr192.mp3', 'yksi-sointu-akustinen-kitara-0-120s-cbr192.mp3'] },
] as const;
const REFERENCES = ['yksi-sointu-akustinen-tausta-0-120s.wav', 'yksi-sointu-akustinen-kitara-0-120s.wav'];

test.describe('Kahden raidan testi: pakatut toistotiedostot', () => {
  // Sivut lataavat myös 46 Mt:n WAV-referenssit: sarjassa ajettuna ne eivät kuormita muita mittaustestejä.
  test.describe.configure({ mode: 'serial', timeout: 120_000 });

  for (const { source, files } of SOURCES) {
    test(`${source}: kerran ladattu, renderöity ero = mediakellot aloituksessa, kelauksessa, jatkossa ja kahdessa peräkkäisessä kelauksessa`, async ({ page }) => {
      const requests = audioRequests(page);
      await page.goto(`/kaksiraitatesti.html?lahde=${source}&moottori=uusi&mittausvali=2000`);
      await expect(page.locator('.files').first()).toHaveAttribute('data-ready', 'kyllä', { timeout: 20_000 });
      await expect(page.locator('.files.refs')).toHaveAttribute('data-ready', 'kyllä', { timeout: 30_000 });
      // Toistotiedostot ensin, referenssit vasta niiden jälkeen; ei Range-pyyntöjä.
      expect(requests.map(item => item.range)).toEqual([null, null, null, null]);
      expect(requests.slice(0, 2).map(item => item.file).sort()).toEqual([...files].sort());
      expect(requests.slice(2).map(item => item.file).sort()).toEqual([...REFERENCES].sort());
      const data = await report(page);
      const primaryDone = data.events.filter(item => item.event === 'lataus-valmis' && item.kind === 'ensisijainen').map(item => item.ms);
      const referenceStart = data.events.filter(item => item.event === 'lataus-alku' && item.kind === 'referenssi').map(item => item.ms);
      expect(primaryDone).toHaveLength(2);
      expect(Math.min(...referenceStart)).toBeGreaterThanOrEqual(Math.max(...primaryDone));

      const checks: { phase: string; measurement: Measurement }[] = [];
      await playButton(page).click();
      await expect(playingButton(page)).toBeVisible();
      // Intro (0–14 s) on pelkkää kitaraa: aloitusjakson luotettava mittaus vaatii taustan ääntä.
      checks.push({ phase: 'aloitus', measurement: await reliableAfter(page, 0) });
      let at = await now(page);
      await hookSeek(page, 60);
      checks.push({ phase: 'kelaus', measurement: await reliableAfter(page, at + 1500) });
      await pauseButton(page).click();
      at = await now(page);
      await playButton(page).click();
      checks.push({ phase: 'jatko', measurement: await reliableAfter(page, at + 1500) });
      at = await now(page);
      await hookSeek(page, 30);
      await page.waitForTimeout(300);
      await hookSeek(page, 90);
      checks.push({ phase: 'kaksoiskelaus', measurement: await reliableAfter(page, at + 2000) });
      const starts = (await report(page)).events.filter(item => item.event === 'toisto-alkoi' && item.ms > at);
      expect(Math.abs(starts.at(-1)!.tausta! - 90)).toBeLessThan(0.3);

      for (const { phase, measurement } of checks) {
        // Raitojen todellinen kohdistus: renderöity ero = mediakellojen ero (ei pelkkä currentTime).
        expect(Math.abs(measurement.renderedDiffMs! - measurement.mediaDiffMs), phase).toBeLessThan(1.5);
        expect(Math.abs(measurement.renderedDiffMs!), phase).toBeLessThan(25);
        const common = measurement.tracks.map(track => track.mediaMinusRenderedMs);
        test.info().annotations.push({ type: `${source} ${phase}`, description: `renderöity ${measurement.renderedDiffMs!.toFixed(1)} ms, media ${measurement.mediaDiffMs.toFixed(1)} ms, media−renderöity ${common.map(value => value?.toFixed(0)).join(' / ')} ms` });
      }
      // Ei uusia verkkopyyntöjä kelauksissa tai jatkossa.
      expect(requests).toHaveLength(4);
    });
  }

  test('koko kappale (AAC 3:53): kerran ladattu, kelaus loppupuolelle ilman verkkopyyntöjä', async ({ page }) => {
    const requests = audioRequests(page);
    await page.goto('/kaksiraitatesti.html?lahde=aac&pituus=koko&moottori=uusi');
    await expect(page.locator('.mode')).toContainText('AAC 192 kbit/s (koko kappale, muistista)');
    await expect(page.locator('.files').first()).toHaveAttribute('data-ready', 'kyllä', { timeout: 20_000 });
    await playButton(page).click();
    await expect(playingButton(page)).toBeVisible();
    expect(await page.locator('audio').first().evaluate(element => (element as HTMLAudioElement).duration)).toBeGreaterThan(233);
    const before = requests.length;
    await hookSeek(page, 220);
    await expect.poll(async () => (await report(page)).events.filter(item => item.event === 'toisto-alkoi').length).toBe(2);
    const started = (await report(page)).events.filter(item => item.event === 'toisto-alkoi').at(-1)!;
    expect(Math.abs(started.tausta! - 220)).toBeLessThan(0.3);
    expect(requests.length).toBe(before);
    expect(requests.slice(0, 2).map(item => item.file).sort()).toEqual(['yksi-sointu-akustinen-kitara-koko.m4a', 'yksi-sointu-akustinen-tausta-koko.m4a']);
    expect(requests.every(item => item.range === null)).toBe(true);
  });
});
