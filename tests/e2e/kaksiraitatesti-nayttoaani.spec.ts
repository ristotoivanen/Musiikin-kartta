import { test, expect, type Page } from '@playwright/test';
import { beepStarts } from '../../harjoittelija/kaksiraitatesti/synteettinen';
import { summarizeTrials, type Trial } from '../../harjoittelija/kaksiraitatesti/nayttoaani';
import { analyzeReport, type Report } from '../../harjoittelija/kaksiraitatesti/raporttianalyysi';

/**
 * H4: näyttö–ääni-säätökoe (MK-20261119-02). Chromium todentaa kulun, kirjauksen ja välähdyksen ajoituksen
 * suhteessa mediakelloon. Se ei todenna kuultavaa ääntä eikä laitteen näyttöä: ne mitataan iPhonella.
 */
const URL = '/kaksiraitatesti.html?koe=nayttoaani';
const panel = (page: Page) => page.locator('section.av');
const toggle = (page: Page) => panel(page).locator('.av-ops button.play');
type FullReport = Report & { nayttoaani: { trials: Trial[]; pageLoadId: string; version: number } | null };
const report = (page: Page): Promise<FullReport> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): FullReport } }).kaksiraitatesti.report());
const flashes = (page: Page) => panel(page).locator('.av-flash').getAttribute('data-flashes').then(Number);

/** Odottaa, että nykyisessä jaksossa on näkynyt välähdyksiä ja M − R -mittaus on tehty. */
async function readyToSave(page: Page) {
  await expect.poll(() => flashes(page), { timeout: 10_000 }).toBeGreaterThanOrEqual(3);
  const before = (await report(page)).measurements.length;
  await expect.poll(async () => (await report(page)).measurements.length, { timeout: 10_000 }).toBeGreaterThan(before);
  await expect(panel(page).getByRole('button', { name: 'Samaan aikaan – tallenna' })).toBeEnabled();
}

test.describe('Kahden raidan testi: H4 näyttö–ääni-säätökoe', () => {
  test.describe.configure({ mode: 'serial', timeout: 90_000 });

  test('välähdys seuraa mediakelloa: currentTime − säätö osuu merkkiääneen yhden piirtovälin tarkkuudella', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('.mode')).toContainText('H4 näyttö–ääni-säätökoe');
    await panel(page).getByRole('slider').fill('200');
    // Kirjataan currentTime jokaisella välähdyksen alulla.
    await page.evaluate(() => {
      const box = document.querySelector('.av-flash')!;
      const audio = document.querySelector('audio')!;
      const seen: number[] = [];
      (window as unknown as { seen: number[] }).seen = seen;
      new MutationObserver(() => { if ((box as HTMLElement).dataset.on === 'kyllä') seen.push(audio.currentTime); })
        .observe(box, { attributes: true, attributeFilter: ['data-on'] });
    });
    await toggle(page).click();
    await expect.poll(() => page.evaluate(() => (window as unknown as { seen: number[] }).seen.length), { timeout: 15_000 }).toBeGreaterThanOrEqual(8);
    const seen = await page.evaluate(() => (window as unknown as { seen: number[] }).seen);
    const beeps = beepStarts(240 * 24000, 24000).map(start => start / 24000);
    // Viive = currentTime välähdyksessä − (lähin aiempi merkkiääni + 200 ms). Piirtoväli on noin 17 ms.
    const lags = seen.map(time => {
      const shifted = time - 0.2;
      const beep = beeps.filter(value => value <= shifted + 1e-6).at(-1)!;
      return (shifted - beep) * 1000;
    });
    expect(Math.min(...lags)).toBeGreaterThanOrEqual(-1);
    expect(lags.sort((a, b) => a - b)[Math.floor(lags.length / 2)]).toBeLessThan(40);
    test.info().annotations.push({ type: 'välähdyksen viive mediakellosta', description: lags.map(value => value.toFixed(1)).join(', ') + ' ms' });
  });

  test('käynnistys, jatko ja kelaus tallentuvat omina tilanteinaan M − R rinnalla, ja kokeet säilyvät uudelleenlatauksessa', async ({ page }) => {
    await page.goto(URL);
    await page.evaluate(() => sessionStorage.clear());
    await page.reload();
    await expect(panel(page).locator('.av-step')).toHaveAttribute('data-next', 'käynnistys');
    const save = panel(page).getByRole('button', { name: 'Samaan aikaan – tallenna' });
    await expect(save).toBeDisabled();

    await toggle(page).click();
    await readyToSave(page);
    await panel(page).getByRole('slider').fill('-120');
    await save.click();
    await expect(panel(page).locator('.av-saved')).toContainText('käynnistys, d = -120 ms');
    await expect(panel(page).locator('.av-step')).toHaveAttribute('data-next', 'jatko');

    // Jatko: Tauko → Soita.
    await toggle(page).click();
    await page.waitForTimeout(500);
    await toggle(page).click();
    await expect(panel(page)).toHaveAttribute('data-situation', 'jatko');
    await readyToSave(page);
    await panel(page).getByRole('slider').fill('40');
    await save.click();
    // Toinen tallennus samassa jaksossa ei ole uusi operaatio.
    await save.click();
    await expect(panel(page).locator('.av-saved')).toContainText('sama jakso');
    await expect(panel(page).locator('.av-step')).toHaveAttribute('data-next', 'kelaus');

    await panel(page).getByRole('button', { name: 'Siirry kohtaan 1:30' }).click();
    await expect(panel(page)).toHaveAttribute('data-situation', 'kelaus');
    await readyToSave(page);
    await save.click();

    const data = await report(page);
    expect(data.nayttoaani?.version).toBe(1);
    const trials = data.nayttoaani!.trials;
    expect(trials.map(item => [item.situation, item.sameOperation])).toEqual([['käynnistys', false], ['jatko', false], ['jatko', true], ['kelaus', false]]);
    expect(trials[0].offsetMs).toBe(-120);
    expect(trials[3].operationTarget).toBe(90);
    for (const item of trials) {
      // Alkuperäinen M − R -mittaus rinnalla (synteettisessä molemmissa raidoissa on ääntä alusta asti).
      expect(item.mediaMinusRendered.tausta.count + item.mediaMinusRendered.kitara.count, item.situation).toBeGreaterThan(0);
      expect(item.output).toBe('iPhonen kaiutin');
      expect(item.frames.count).toBeGreaterThan(30);
    }
    // Jaksoanalyysi tunnistaa samat tilanteet raportin tapahtumista.
    expect(analyzeReport(data).segments.map(item => item.kind)).toEqual(['käynnistys', 'jatko', 'kelaus']);
    const [summary] = summarizeTrials(trials);
    expect(summary.situations.map(item => item.operations)).toEqual([1, 1, 1]);
    await test.info().attach('raportti.json', { body: JSON.stringify(data), contentType: 'application/json' });

    // Alkuperäinen käynnistys vaatii uuden sivun: kokeet säilyvät, ja protokolla jatkaa kierrokselle 2.
    await toggle(page).click();
    await page.reload();
    await expect(panel(page).locator('.av-step')).toHaveAttribute('data-next', 'käynnistys');
    await expect(panel(page).locator('.av-step')).toContainText('käynnistys 2/5');
    const after = await report(page);
    expect(after.nayttoaani!.trials).toHaveLength(4);
    expect(after.nayttoaani!.pageLoadId).not.toBe(data.nayttoaani!.pageLoadId);
  });

  test('iPhone 16 Pron leveydellä ei vaakavieritystä, ja välähdys, säädin ja tallennus näkyvät ilman vieritystä', async ({ page }) => {
    for (const viewport of [{ width: 402, height: 874 }, { width: 375, height: 667 }]) {
      await page.setViewportSize(viewport);
      await page.goto(URL);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${viewport.width} px`).toBeLessThanOrEqual(0);
      const box = await panel(page).locator('.av-flash').boundingBox();
      expect(box!.height).toBeGreaterThan(100);
      if (viewport.height >= 874) {
        const store = await panel(page).getByRole('button', { name: 'Samaan aikaan – tallenna' }).boundingBox();
        expect(store!.y + store!.height).toBeLessThan(viewport.height);
      }
    }
  });
});
