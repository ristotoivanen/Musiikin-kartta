import { test, expect, type Page } from '@playwright/test';
import { analyzeReport, evaluateH3, type Report } from '../../harjoittelija/kaksiraitatesti/raporttianalyysi';

/**
 * Raporttianalyysi oikeaa testisivun raporttia vastaan (MK-20261119-01). Ajetaan H3:n järjestys:
 * Soita → kelaus 1:00 → tauko ja jatko → kaksi kelausta 1:00:aan samassa tehtävässä (varma kilpatilanne).
 * Chromium ei toista iOS:n puskurikäytöstä: testi todentaa raporttimuodon ja jaksotuksen, ei laitetta.
 */
const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' });
const pauseButton = (page: Page) => page.getByRole('button', { name: '■ Tauko' });
const report = (page: Page): Promise<Report> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): Report } }).kaksiraitatesti.report());
const now = (page: Page) => page.evaluate(() => performance.now());

async function reliableAfter(page: Page, after: number) {
  await expect.poll(async () => (await report(page)).measurements.some(item => item.reliable && (item.captureMs ?? item.ms) > after),
    { timeout: 25_000, intervals: [500] }).toBe(true);
}

test.describe('Kahden raidan testi: raporttianalyysi', () => {
  test.describe.configure({ mode: 'serial', timeout: 120_000 });

  test('AAC: raportti v2 jaksottuu H3:n järjestykseen, ja kilpatilanteen kaksoiskelaus tunnistetaan', async ({ page }) => {
    await page.goto('/kaksiraitatesti.html?lahde=aac&moottori=uusi&mittausvali=2000');
    await expect(page.locator('.files').first()).toHaveAttribute('data-ready', 'kyllä', { timeout: 20_000 });
    await expect(page.locator('.files.refs')).toHaveAttribute('data-ready', 'kyllä', { timeout: 30_000 });

    await playButton(page).click();
    await expect(pauseButton(page)).toBeVisible();
    await reliableAfter(page, 0);
    let at = await now(page);
    await page.getByRole('button', { name: 'Siirry kohtaan 1:00' }).click();
    await reliableAfter(page, at + 1500);
    await pauseButton(page).click();
    await page.waitForTimeout(500);
    at = await now(page);
    await playButton(page).click();
    await reliableAfter(page, at + 1500);
    at = await now(page);
    // Kaksi kelausta ennen kuin ensimmäinen ehtii alkaa soida.
    await page.evaluate(() => {
      const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
      hook.seek(60);
      hook.seek(60);
    });
    await reliableAfter(page, at + 1500);
    await pauseButton(page).click();

    const data = await report(page);
    // Raportti talteen, jotta työkalun (tools/kaksiraitatesti-raportti.mts) voi ajaa aitoa raporttia vastaan.
    await test.info().attach('raportti.json', { body: JSON.stringify(data), contentType: 'application/json' });
    expect(data.meta.reportVersion).toBe(2);
    expect(data.measurements.every(item => typeof item.captureMs === 'number' && typeof item.request === 'number')).toBe(true);
    expect(data.measurements.every(item => item.output && 'baseLatency' in item.output)).toBe(true);

    const analysis = analyzeReport(data);
    expect(analysis.segments.map(item => item.kind)).toEqual(['käynnistys', 'kelaus', 'jatko', 'kaksoiskelaus']);
    expect(analysis.segments[3].superseded).toHaveLength(1);
    expect(analysis.unassigned).toHaveLength(0);
    const verdicts = Object.fromEntries(evaluateH3(data, analysis).map(item => [item.id, item.verdict]));
    // A1 riippuu verkosta ja D käyttäjän kuulokuvasta: niitä ei arvioida tässä.
    expect(verdicts).toMatchObject({ A2: 'täyttyy', B1: 'täyttyy', B2: 'täyttyy', B3: 'täyttyy', B4: 'täyttyy', C1: 'täyttyy', C2: 'täyttyy', D: 'ei todennettu' });
    for (const segment of analysis.segments) {
      test.info().annotations.push({
        type: `jakso ${segment.index} ${segment.kind}`,
        description: `luotettavia ${segment.reliable.length}, M − R ${segment.mediaMinusRendered.map(item => `${item.track} ${item.medianMs?.toFixed(1)}`).join(' / ')} ms, ulostuloarvio ${segment.outputEstimateMs?.toFixed(1) ?? '–'} ms`,
      });
    }
  });
});
