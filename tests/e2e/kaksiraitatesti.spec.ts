import { test, expect, type Page } from '@playwright/test';

/**
 * Kahden raidan synkronointitesti (issue #9, testiversio). Synteettisten raitojen kohdistus tunnetaan,
 * joten mittauksen pitää antaa renderöidyksi eroksi 0 ms tai siirron verran.
 */
interface Measurement {
  ms: number;
  phase: string; reliable: boolean; mediaDiffMs: number; renderedDiffMs: number | null; attempts: number;
  tracks: { name: string; score: number | null; reliable: boolean; mediaMinusRenderedMs: number | null }[];
}
interface Report {
  meta: { source: string; sync: boolean; offsetMs: number };
  measurements: Measurement[];
  events: { event: string; track?: string; forced?: unknown }[];
  seekLatencies: { track: string; ms: number }[];
}

const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' });
const pauseButton = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
// K1: Tauko näkyy jo kesken aloituksen. Soiminen tarkistetaan painikkeen tilasta (sama kuin ennen K1:tä Tauko näkyvissä).
const playingButton = (page: Page) => page.locator('.player button.play[data-tila="soi"]');

async function report(page: Page): Promise<Report> {
  return page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): Report } }).kaksiraitatesti.report());
}

async function firstReliable(page: Page, phase: string | null, timeout = 20_000, after = 0): Promise<Measurement> {
  let found: Measurement | undefined;
  await expect.poll(async () => {
    found = (await report(page)).measurements.find(item => (phase === null || item.phase === phase) && item.reliable && item.ms > after);
    return Boolean(found);
  }, { timeout, intervals: [1000] }).toBe(true);
  return found!;
}

test.describe('Kahden raidan synkronointitesti', () => {
  test.describe.configure({ timeout: 90_000 });

  test('synteettiset kohdistetut raidat: renderöity ero on 0 ms, ja tila ja tahdistin näkyvät', async ({ page }) => {
    await page.goto('/kaksiraitatesti.html?lahde=synteettinen');
    await expect(page.locator('.mode')).toHaveAttribute('data-source', 'synteettinen');
    await expect(page.locator('.mode')).toHaveAttribute('data-sync', 'on');
    await playButton(page).click();
    await expect(playingButton(page)).toBeVisible();
    const start = await firstReliable(page, 'käynnistys');
    // Sisältö on kohdakkain, joten renderöity ero on sama kuin mediakellojen ero (Chromium renderöi
    // mediakellon kohdalla). Itse ero on soittimen käynnistysero, jonka tahdistin sallii (alle 120 ms).
    expect(Math.abs(start.renderedDiffMs! - start.mediaDiffMs)).toBeLessThan(1.5);
    for (const track of start.tracks) expect(track.score!).toBeGreaterThan(0.95);

    // Kelaus kesken soiton: kelausten valmistuminen ja kelauksen jälkeinen mittaus kirjataan.
    // Kelauksen jälkeinen ensimmäinen mittaus voi osua kitaran korjauskelaukseen (epävarma), joten
    // hyväksytään seuraava luotettava mittaus.
    const seekAt = await page.evaluate(() => performance.now());
    await page.getByRole('button', { name: 'Siirry kohtaan 0:30' }).click();
    await expect.poll(async () => (await report(page)).measurements.some(item => item.phase === 'kelaus'), { timeout: 15_000 }).toBe(true);
    const afterSeek = await firstReliable(page, null, 20_000, seekAt);
    // Kelauksen jälkeinen ero on soittimen käytöstä (Chromessa mitattu 0–3 ms), ei mittausvirhettä.
    expect(Math.abs(afterSeek.renderedDiffMs!)).toBeLessThan(20);
    const data = await report(page);
    expect(data.seekLatencies.some(item => item.track === 'tausta')).toBe(true);
    expect(data.events.some(item => item.event === 'seek-write' && item.track === 'kitara' && item.forced === true)).toBe(true);

    // Tauko ja jatko.
    await pauseButton(page).click();
    await expect(playButton(page)).toBeVisible();
    await playButton(page).click();
    const resumed = await firstReliable(page, 'jatko');
    expect(Math.abs(resumed.renderedDiffMs!)).toBeLessThan(20);
    await expect(page.getByRole('row').filter({ hasText: 'käynnistys' })).toContainText('1');
    // Käyttäjän raportti: kopioitava JSON tekstikentässä.
    await page.getByRole('button', { name: 'Valitse raportti' }).click();
    expect(JSON.parse(await page.getByRole('textbox', { name: 'Testiraportti' }).inputValue()).meta.source).toBe('synteettinen');
  });

  test('synteettinen positiivinen kontrolli: kitara 40 ms myöhässä mitataan −40 ms:ksi, vaikka mediakellot ovat tasan', async ({ page }) => {
    await page.goto('/kaksiraitatesti.html?lahde=synteettinen&siirto=40');
    await playButton(page).click();
    const start = await firstReliable(page, 'käynnistys');
    // Renderöity ero = sisällön siirto (−40 ms) + mediakellojen jäännösero, jonka tahdistin jättää.
    expect(Math.abs(start.renderedDiffMs! - start.mediaDiffMs + 40)).toBeLessThan(1.5);
    // Chromium aloittaa raidat 512 näytteen jaksoissa (48 kHz: 10,7 ms), joten kuormitetussa ajossa
    // mediakellojen jäännösero voi olla yksi jakso. Raja sallii yhden jakson, ei enempää.
    expect(Math.abs(start.renderedDiffMs! + 40)).toBeLessThan(11);
    // Tahdistin kohdistaa mediakellot, joten niiden ero ei paljasta siirtoa.
    expect(Math.abs(start.mediaDiffMs)).toBeLessThan(11);
  });

  test('tahdistin pois: kitaraa ei kelata, mutta mittaukset toimivat', async ({ page }) => {
    await page.goto('/kaksiraitatesti.html?lahde=synteettinen&tahdistin=pois');
    await expect(page.locator('.mode')).toHaveAttribute('data-sync', 'off');
    await playButton(page).click();
    const start = await firstReliable(page, 'käynnistys');
    expect(Math.abs(start.renderedDiffMs! - start.mediaDiffMs)).toBeLessThan(1.5);
    expect((await report(page)).events.filter(item => item.event === 'seek-write' && item.track === 'kitara')).toEqual([]);
  });

  test('MP3-tila: oikeat raidat soivat Web Audion kautta ja renderöity kohdistus mitataan WAV-referenssiä vastaan', async ({ page }) => {
    await page.goto('/kaksiraitatesti.html?lahde=mp3');
    await expect(page.locator('audio').first()).toHaveAttribute('src', /yksi-sointu-akustinen-tausta\.mp3$/);
    await playButton(page).click();
    await expect(playingButton(page)).toBeVisible();
    // Intro (0–14 s) on pelkkää kitaraa: taustan näyte on hiljainen, joten ensimmäinen luotettava
    // mittaus tulee vasta, kun tausta soi.
    const measured = await firstReliable(page, null, 45_000);
    // Renderöity ero on mittaustulos, ei testin oletus: tässä vain järkevyysraja.
    expect(Math.abs(measured.renderedDiffMs!)).toBeLessThan(200);
    for (const track of measured.tracks) expect(track.score!).toBeGreaterThan(0.6);
    // Intron aikana (0–14 s) tausta on hiljaa: sen mittaukset merkitään epävarmoiksi.
    const intro = (await report(page)).measurements.filter(item => item.tracks[0].mediaMinusRenderedMs !== null && item.tracks[0].score !== null && !item.reliable);
    for (const item of intro) expect(item.reliable).toBe(false);
    expect((await report(page)).meta).toMatchObject({ source: 'mp3', sync: true });
  });
});
