import { test, expect, type Page } from '@playwright/test';

const SONG = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta';

/** Ei oikeaa äänentoistoa: play-kutsut lasketaan. */
async function mockPlayback(page: Page) {
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = function () {
      this.dataset.playCount = String(Number(this.dataset.playCount ?? '0') + 1);
      return Promise.resolve();
    };
    HTMLMediaElement.prototype.pause = function () { /* Ei äänilaitetta selaintestissä. */ };
  });
}

const volumes = (page: Page) => page.locator('.song-player audio').evaluateAll(
  elements => elements.map(element => Math.round((element as HTMLAudioElement).volume * 1000) / 1000));

test.describe('Kappaleharjoittelijan yhteinen äänenvoimakkuus', () => {
  test('säädin muuttaa kaikkia kolmea raitaa toiston aikana ja säilyttää tasapainon, mykistyksen, loopin ja synkronoinnin', async ({ page }) => {
    await mockPlayback(page);
    await page.goto(SONG);
    const player = page.locator('.song-player');
    const slider = player.getByRole('slider', { name: 'Äänenvoimakkuus' });
    const streams = player.locator('audio');
    await expect(player.locator('.song-volume')).toHaveAttribute('data-volume-mode', 'element');
    await expect(slider).toHaveValue('100');
    await expect(player.locator('.song-volume output')).toHaveText('100 %');
    await expect.poll(() => volumes(page)).toEqual([0.85, 0.78, 0.78]);

    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    // Raidat ovat samassa kohdassa: säätö ei saa kelata tai käynnistää niitä uudelleen.
    await streams.evaluateAll(elements => elements.forEach(element => {
      Object.defineProperty(element, 'currentTime', { configurable: true, writable: true, value: 42 });
    }));
    await streams.first().dispatchEvent('timeupdate');

    await slider.fill('40');
    await expect(player.locator('.song-volume output')).toHaveText('40 %');
    await expect.poll(() => volumes(page)).toEqual([0.34, 0.312, 0.312]);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await expect(streams.first()).toHaveAttribute('data-play-count', '1');
    expect(await streams.evaluateAll(elements => elements.map(element => (element as HTMLAudioElement).currentTime))).toEqual([42, 42, 42]);
    await expect(player.locator('.song-time')).toContainText('0:42 /');

    await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
    await expect(streams.nth(1)).toHaveJSProperty('muted', true);
    await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
    for (let i = 0; i < 3; i++) await expect(streams.nth(i)).toHaveJSProperty('loop', true);
    await expect.poll(() => volumes(page)).toEqual([0.34, 0.312, 0.312]);
    await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).check();
    await expect(streams.nth(1)).toHaveJSProperty('muted', false);

    // Molemmat versiot: versionvaihto säilyttää asetuksen uusille raidoille.
    await page.getByRole('combobox', { name: 'Versio' }).selectOption('acoustic');
    await expect(streams.first()).toHaveAttribute('src', /akustinen-saestys\.mp3$/);
    await expect(slider).toHaveValue('40');
    await expect.poll(() => volumes(page)).toEqual([0.34, 0.312, 0.312]);

    // Tallentuu selaimeen ja palautuu.
    await page.reload();
    await expect(slider).toHaveValue('40');
    await expect.poll(() => volumes(page)).toEqual([0.34, 0.312, 0.312]);
    await slider.fill('0');
    await expect(player.locator('.song-volume output')).toHaveText('0 %');
    await expect.poll(() => volumes(page)).toEqual([0, 0, 0]);
  });

  test('iOS-tyylisessä selaimessa raidat kulkevat kerran GainNoden kautta käyttäjän painalluksesta', async ({ page }) => {
    await mockPlayback(page);
    await page.addInitScript(() => {
      // iOS Safari ohittaa elementin volume-arvon.
      Object.defineProperty(HTMLMediaElement.prototype, 'volume', { configurable: true, get: () => 1, set: () => {} });
      const log = { contexts: 0, resumes: 0, sources: [] as string[], gains: [] as { gain: { value: number } }[] };
      (window as unknown as { songAudio: typeof log }).songAudio = log;
      class FakeContext {
        state = 'suspended'; destination = {};
        constructor() { log.contexts++; }
        resume() { log.resumes++; this.state = 'running'; return Promise.resolve(); }
        close() { this.state = 'closed'; return Promise.resolve(); }
        createMediaElementSource(element: HTMLMediaElement & { routed?: boolean }) {
          if (element.routed) throw new Error('Elementti kytketty kahdesti');
          element.routed = true;
          log.sources.push(element.getAttribute('src') ?? '');
          return { connect: (node: unknown) => node };
        }
        createGain() {
          const node = { gain: { value: 1 }, connect: (target: unknown) => target };
          log.gains.push(node);
          return node;
        }
      }
      (window as unknown as { AudioContext: unknown }).AudioContext = FakeContext;
    });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    const slider = player.getByRole('slider', { name: 'Äänenvoimakkuus' });
    type Log = { contexts: number; resumes: number; sources: string[]; gains: { gain: { value: number } }[] };
    const audio = () => page.evaluate(() => {
      const log = (window as unknown as { songAudio: Log }).songAudio;
      return { contexts: log.contexts, resumes: log.resumes, sources: log.sources.length,
        gains: log.gains.map(node => Math.round(node.gain.value * 1000) / 1000) };
    });

    await expect(player.locator('.song-volume')).toHaveAttribute('data-volume-mode', 'webaudio');
    expect(await audio()).toEqual({ contexts: 0, resumes: 0, sources: 0, gains: [] });
    await slider.fill('60');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    expect(await audio()).toEqual({ contexts: 1, resumes: 1, sources: 3, gains: [0.51, 0.468, 0.468] });

    await slider.fill('50');
    await expect.poll(async () => (await audio()).gains).toEqual([0.425, 0.39, 0.39]);
    await page.getByRole('checkbox', { name: 'Laulu kuuluu' }).uncheck();
    await expect.poll(async () => (await audio()).gains).toEqual([0.425, 0.39, 0]);

    // Tauko ja uusi toisto eivät kytke raitoja uudelleen.
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    expect((await audio()).sources).toBe(3);

    // Toisen version uudet elementit kytketään kerran samaan kontekstiin.
    await page.getByRole('combobox', { name: 'Versio' }).selectOption('acoustic');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    const after = await audio();
    expect(after.contexts).toBe(1);
    expect(after.sources).toBe(6);
    expect(after.gains.slice(3)).toEqual([0.425, 0.39, 0]);
  });
});

test.describe('Skaalat ja moodit', () => {
  const panel = (page: Page) => page.locator('.song-scales-panel');
  const scaleSelect = (page: Page) => panel(page).getByRole('combobox', { name: 'Asteikko' });

  /** Sävelpisteiden asteet ja juurisävelten sävelluokat Otelautakartan SVG:stä. */
  const boardNotes = (page: Page) => panel(page).locator('.song-scale-board svg').evaluate(svg => {
    const open = [64, 59, 55, 50, 45, 40];
    const circles = [...svg.querySelectorAll('circle[r="11"]')];
    const at = (circle: Element) => {
      const x = Number(circle.getAttribute('cx')), y = Number(circle.getAttribute('cy'));
      const string = Math.round((y - 30) / 34), fret = x === 49 ? 0 : Math.round((x - 45) / 54);
      return (open[string] + fret) % 12;
    };
    const label = (circle: Element) => circle.nextElementSibling?.textContent ?? '';
    return {
      degrees: [...new Set(circles.map(label))].sort(),
      roots: circles.filter(circle => circle.getAttribute('fill') === '#4b2fd6').map(at),
      rootLabels: [...new Set(circles.filter(circle => circle.getAttribute('fill') === '#4b2fd6').map(label))],
      added: [...new Set(circles.filter(circle => circle.getAttribute('fill') === '#f0a13c').map(label))],
      pitchClasses: [...new Set(circles.map(at))].sort((a, b) => a - b),
    };
  });

  test('osio on aluksi suljettu, ei keskeytä toistoa ja näyttää kappaleen asteikot otelaudalla', async ({ page }) => {
    await mockPlayback(page);
    await page.goto(SONG);
    const details = page.locator('details.song-scales-collapse');
    const summary = details.locator(':scope > summary');
    await expect(summary).toHaveText('Skaalat ja moodit');
    await expect(details).not.toHaveAttribute('open', '');
    await expect(panel(page)).toBeHidden();
    // Sama taso kuin Soinnut ja sanat, ei sen sisällä.
    await expect(page.locator('.song-journey > details')).toHaveCount(2);
    await expect(page.locator('.song-journey > details > summary')).toHaveText(['Soinnut ja sanat', 'Skaalat ja moodit']);

    const player = page.locator('.song-player');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await summary.click();
    await expect(details).toHaveAttribute('open', '');
    await expect(panel(page)).toBeVisible();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await expect(scaleSelect(page).locator('option')).toHaveText([
      'G-mollipentatoninen', 'G-bluesasteikko', 'G-luonnollinen molli (aiolinen)',
    ]);
    await expect(panel(page).locator('.song-scale-notes span')).toHaveText('G · B♭ · C · D · F');
    let notes = await boardNotes(page);
    expect(notes.degrees).toEqual(['1', '4', '5', '♭3', '♭7'].sort());
    expect(notes.pitchClasses).toEqual([0, 2, 5, 7, 10]);
    expect(notes.roots.length).toBeGreaterThan(0);
    expect(new Set(notes.roots)).toEqual(new Set([7]));
    expect(notes.rootLabels).toEqual(['1']);
    expect(notes.added).toEqual([]);

    await scaleSelect(page).selectOption({ label: 'G-bluesasteikko' });
    await expect(panel(page).locator('.song-scale-notes span')).toHaveText('G · B♭ · C · D♭ · D · F');
    await expect(panel(page)).toContainText('jännite- ja ohitussävel');
    notes = await boardNotes(page);
    expect(notes.added).toEqual(['♭5']);
    expect(notes.pitchClasses).toEqual([0, 1, 2, 5, 7, 10]);

    await scaleSelect(page).selectOption({ label: 'G-luonnollinen molli (aiolinen)' });
    await expect(panel(page).locator('.song-scale-notes span')).toHaveText('G · A · B♭ · C · D · E♭ · F');
    notes = await boardNotes(page);
    expect(notes.pitchClasses).toEqual([0, 2, 3, 5, 7, 9, 10]);
    expect(new Set(notes.roots)).toEqual(new Set([7]));
    await expect(panel(page).getByRole('combobox', { name: /Sormitus/ }).locator('option')).toHaveCount(8);

    await summary.click();
    await expect(details).not.toHaveAttribute('open', '');
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await summary.click();
    await expect(scaleSelect(page)).toHaveValue('aeolian');
  });

  test('pentatonisen boksin voi vaihtaa, ja kapealla näytöllä otelauta vierii boksin kohdalle', async ({ page }, testInfo) => {
    await page.goto(SONG);
    await page.locator('details.song-scales-collapse > summary').click();
    const box = panel(page).getByRole('combobox', { name: 'Pentatoninen boksi' });
    const board = panel(page).locator('.song-scale-board');
    await expect(box.locator('option')).toHaveText(['Koko otelauta', 'Boksi 1', 'Boksi 2', 'Boksi 3', 'Boksi 4', 'Boksi 5']);
    await expect(board.locator('.box-highlight')).toHaveCount(0);
    await box.selectOption({ label: 'Boksi 2' });
    await expect(board.locator('.box-highlight[data-box="2"]')).not.toHaveCount(0);
    await expect(board.locator('.box-highlight[data-box="1"]')).toHaveCount(0);
    await box.selectOption({ label: 'Boksi 4' });
    await expect(board.locator('.box-highlight[data-box="4"]')).not.toHaveCount(0);

    const viewport = page.viewportSize()!.width;
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewport);
    for (const control of [scaleSelect(page), box]) {
      const bounds = (await control.boundingBox())!;
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport);
    }
    if (testInfo.project.name === 'phone') {
      const scroll = await board.evaluate(element => ({ width: element.scrollWidth, client: element.clientWidth, left: element.scrollLeft }));
      expect(scroll.width).toBeGreaterThan(scroll.client);
      expect(scroll.left).toBeGreaterThan(0);
      const boardBox = (await board.boundingBox())!;
      const highlight = (await board.locator('.box-highlight').first().boundingBox())!;
      expect(highlight.x).toBeGreaterThanOrEqual(boardBox.x - 1);
      expect(highlight.x + highlight.width).toBeLessThanOrEqual(boardBox.x + boardBox.width + 1);
    }
  });
});
