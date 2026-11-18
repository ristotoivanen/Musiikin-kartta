import { test, expect, type Page } from '@playwright/test';

/**
 * Korjausehdokas (uusi moottori) kahden raidan testisivulla: jokainen siirto-operaatio aloitetaan
 * tyhjällä äänipuskurilla (load()) yhteisestä kohdasta, toiston aikana ei korjauskelauksia, ja tauko
 * jatkaa pysäytyskohdasta. Synteettisten raitojen kohdistus tunnetaan (kitara siirretty 40 ms).
 */
interface Measurement { ms: number; phase: string; reliable: boolean; mediaDiffMs: number; renderedDiffMs: number | null }
interface Entry { ms: number; event: string; track?: string; forced?: unknown; to?: number; from?: number; tausta?: number; target?: number }
interface Report { meta: { engine: string }; measurements: Measurement[]; events: Entry[] }

const URL = '/kaksiraitatesti.html?lahde=synteettinen&siirto=40&moottori=uusi&mittausvali=2000';
const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' });
const pauseButton = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
const report = (page: Page): Promise<Report> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): Report } }).kaksiraitatesti.report());
const hookSeek = (page: Page, ...targets: number[]) => page.evaluate(list => {
  const hook = (window as unknown as { kaksiraitatesti: { seek(seconds: number): void } }).kaksiraitatesti;
  for (const target of list) hook.seek(target);
}, targets);
const now = (page: Page) => page.evaluate(() => performance.now());

async function reliableAfter(page: Page, after: number): Promise<Measurement> {
  let found: Measurement | undefined;
  await expect.poll(async () => {
    found = (await report(page)).measurements.find(item => item.reliable && item.ms > after);
    return Boolean(found);
  }, { timeout: 20_000, intervals: [500] }).toBe(true);
  return found!;
}

/** Puhtaalla puskurilla renderöity ero = mediakellojen ero − sisällön siirto (40 ms). */
function expectClean(measurement: Measurement) {
  expect(Math.abs(measurement.renderedDiffMs! - measurement.mediaDiffMs + 40)).toBeLessThan(1.5);
}

const startsAfter = (data: Report, after: number) => data.events.filter(item => item.event === 'toisto-alkoi' && item.ms > after);

test.describe('Kahden raidan testi: uusi moottori (korjausehdokas)', () => {
  test.describe.configure({ timeout: 90_000 });

  test('käynnistys, kelaus ja Tauko → Soita: renderöity ero seuraa mediakelloja, ei korjauskelauksia', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('.mode')).toHaveAttribute('data-sync-mode', 'uusi-moottori');
    await playButton(page).click();
    expectClean(await reliableAfter(page, 0));

    const seekAt = await now(page);
    await page.getByRole('button', { name: 'Siirry kohtaan 0:30' }).click();
    expectClean(await reliableAfter(page, seekAt + 1500));

    await pauseButton(page).click();
    await expect(playButton(page)).toBeVisible();
    const resumeAt = await now(page);
    await playButton(page).click();
    expectClean(await reliableAfter(page, resumeAt + 1500));

    const data = await report(page);
    expect(data.meta.engine).toBe('uusi');
    // Ainoat kelaukset ovat aloituskelauksia: ei pakotettuja eikä jatkuvia korjauskelauksia.
    expect(data.events.filter(item => item.event === 'seek-write' && item.forced !== 'aloitus')).toEqual([]);
  });

  test('tavallinen Tauko → Soita jatkaa pysäytyskohdasta eikä palaa vanhaan kelauskohtaan', async ({ page }) => {
    await page.goto(URL);
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    await hookSeek(page, 20);
    await expect.poll(async () => startsAfter(await report(page), 0).length).toBe(2);
    await page.waitForTimeout(2500);
    await pauseButton(page).click();
    await expect(playButton(page)).toBeVisible();
    const paused = await page.locator('audio').first().evaluate(element => (element as HTMLAudioElement).currentTime);
    expect(paused).toBeGreaterThan(21.5);
    const resumeAt = await now(page);
    await playButton(page).click();
    await expect.poll(async () => startsAfter(await report(page), resumeAt).length).toBe(1);
    const [resumed] = startsAfter(await report(page), resumeAt);
    expect(Math.abs(resumed.tausta! - paused)).toBeLessThan(0.3);
    const backwards = (await report(page)).events.filter(item => item.event === 'seek-write' && item.ms > resumeAt && item.to! < paused - 0.5);
    expect(backwards).toEqual([]);
  });

  test('kelaus tauolla: seuraava Soita alkaa kelauskohdasta', async ({ page }) => {
    await page.goto(URL);
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    await pauseButton(page).click();
    await expect(playButton(page)).toBeVisible();
    await hookSeek(page, 40);
    const resumeAt = await now(page);
    await playButton(page).click();
    await expect.poll(async () => startsAfter(await report(page), resumeAt).length).toBe(1);
    expect(Math.abs(startsAfter(await report(page), resumeAt)[0].tausta! - 40)).toBeLessThan(0.3);
  });

  test('peräkkäiset kelaukset ja kelaus kesken aiemman kelauksen: vain viimeisin toteutuu', async ({ page }) => {
    await page.goto(URL);
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    const before = await now(page);
    await hookSeek(page, 10, 25, 40);
    await expect.poll(async () => startsAfter(await report(page), before).length).toBe(1);
    await page.waitForTimeout(1500);
    const data = await report(page);
    expect(startsAfter(data, before)).toHaveLength(1);
    expect(Math.abs(startsAfter(data, before)[0].tausta! - 40)).toBeLessThan(0.3);
    expect(data.events.filter(item => item.event === 'tuore-aloitus' && item.ms > before).map(item => item.target)).toEqual([10, 25, 40]);
    expectClean(await reliableAfter(page, before + 1500));
  });

  test('viivästynyt tai puuttuva seeked: toistoa ei aloiteta väärästä kohdasta', async ({ page }) => {
    await page.goto(URL);
    // Kitaran kelaus ei valmistu: seeking pysyy totena.
    await page.locator('audio').nth(1).evaluate(element => {
      Object.defineProperty(element, 'seeking', { configurable: true, get: () => true });
    });
    await playButton(page).click();
    await expect(page.getByRole('alert')).toContainText('Kelaus ei valmistunut', { timeout: 10_000 });
    await expect(playButton(page)).toBeVisible();
    const data = await report(page);
    expect(data.events.filter(item => item.event === 'toisto-alkoi')).toEqual([]);
    expect(data.events.some(item => item.event === 'kelaus-aikakatkaisu')).toBe(true);
    // Kelaus valmistuu: seuraava painallus soittaa.
    await page.locator('audio').nth(1).evaluate(element => { Reflect.deleteProperty(element, 'seeking'); });
    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    await expect(page.getByRole('alert')).toHaveCount(0);
  });
});
