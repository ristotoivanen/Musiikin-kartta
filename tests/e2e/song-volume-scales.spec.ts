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
  test('säädin muuttaa kaikkia kolmea raitaa toiston aikana ja säilyttää tasapainon, mykistyksen, loopin ja synkronoinnin', async ({ page, isMobile }) => {
    // Työpöydän volume-tila. Puhelinprojekti käyttää iPhonen user agentia, joten se käyttää GainNode-tilaa (testattu alla).
    test.skip(isMobile, 'Puhelinprojektissa (iPhone-tunniste) käytetään GainNode-tilaa.');
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

    await summary.click();
    await expect(details).not.toHaveAttribute('open', '');
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await summary.click();
    await expect(scaleSelect(page)).toHaveValue('aeolian');
  });

  test('Sormitusboksit ja näyttöasetukset: monivalinta, rajaus ja 5 ↔ 7 boksia toiston jatkuessa', async ({ page }, testInfo) => {
    await mockPlayback(page);
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await page.locator('details.song-scales-collapse > summary').click();

    const settings = panel(page).locator('details.song-box-settings');
    const summary = settings.locator(':scope > summary');
    const boxesGroup = settings.getByRole('group', { name: 'Näytettävät sormitusboksit' });
    const box = (number: number) => boxesGroup.getByRole('checkbox', { name: 'Boksi ' + number, exact: true });
    const only = settings.getByRole('checkbox', { name: 'Näytä vain valittujen boksien sävelet' });
    const board = panel(page).locator('.song-scale-board');
    const dots = board.locator('svg circle[r="11"]');

    // Alivalikko on aluksi suljettu, eikä vanhaa pudotusvalikkoa ole.
    await expect(summary).toHaveText('Sormitusboksit ja näyttöasetukset');
    await expect(settings).not.toHaveAttribute('open', '');
    await expect(boxesGroup).toBeHidden();
    await expect(panel(page).getByRole('combobox')).toHaveCount(1);
    await expect(panel(page).getByText(/Pentatoninen boksi|Koko otelauta/)).toHaveCount(0);
    // Alivalikko on otelaudan alapuolella.
    expect((await settings.boundingBox())!.y).toBeGreaterThan((await board.boundingBox())!.y);

    await summary.click();
    await expect(settings).toHaveAttribute('open', '');
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await expect(settings.getByText('Pentatoniset boksit (5)')).toBeVisible();
    await expect(boxesGroup.getByRole('checkbox')).toHaveCount(5);
    // Ei valintaa: koko asteikko näkyy, eikä rajausta voi kytkeä.
    await expect(only).toBeDisabled();
    await expect(board.locator('.box-highlight')).toHaveCount(0);
    const all = await dots.count();
    expect(all).toBeGreaterThan(30);

    // Monivalinta: molemmat boksit korostuvat, koko asteikko pysyy näkyvissä.
    await box(1).check();
    await box(3).check();
    await expect(board.locator('.box-highlight[data-box="1"]')).not.toHaveCount(0);
    await expect(board.locator('.box-highlight[data-box="3"]')).not.toHaveCount(0);
    await expect(board.locator('.box-highlight[data-box="2"]')).toHaveCount(0);
    await expect(dots).toHaveCount(all);
    await expect(only).toBeEnabled();

    // Rajaus: vain valittujen boksien sävelet. Juurisävel G pysyy korostettuna.
    await only.check();
    const limited = await dots.count();
    expect(limited).toBeLessThan(all);
    expect(limited).toBeGreaterThanOrEqual(24);
    expect((await boardNotes(page)).roots.every(pc => pc === 7)).toBe(true);
    expect((await boardNotes(page)).roots.length).toBeGreaterThan(0);
    await box(3).uncheck();
    await expect(dots).toHaveCount(12);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    // Bluesasteikko käyttää samoja viittä boksia, ja D♭ näkyy boksin rajauksessa.
    await scaleSelect(page).selectOption({ label: 'G-bluesasteikko' });
    await expect(box(1)).toBeChecked();
    await expect(boxesGroup.getByRole('checkbox')).toHaveCount(5);
    await expect(dots).toHaveCount(14);
    expect((await boardNotes(page)).added).toEqual(['♭5']);

    // Luonnollinen molli: seitsemän 3NPS-sormitusta omilla valinnoillaan.
    await scaleSelect(page).selectOption({ label: 'G-luonnollinen molli (aiolinen)' });
    await expect(settings.getByText('3NPS: kolme säveltä per kieli (7)')).toBeVisible();
    await expect(boxesGroup.getByRole('checkbox')).toHaveCount(7);
    for (let number = 1; number <= 7; number++) await expect(box(number)).not.toBeChecked();
    await expect(only).toBeDisabled();
    await expect(board.locator('.box-highlight')).toHaveCount(0);
    expect(await dots.count()).toBeGreaterThan(40);
    await box(7).check();
    await box(2).check();
    await expect(board.locator('.box-highlight[data-box="7"]')).not.toHaveCount(0);
    await only.check();
    await box(7).uncheck();
    await expect(dots).toHaveCount(18);

    // Paluu pentatoniseen palauttaa sen omat valinnat; sulkeminen ei nollaa asetuksia.
    await scaleSelect(page).selectOption({ label: 'G-mollipentatoninen' });
    await expect(boxesGroup.getByRole('checkbox')).toHaveCount(5);
    await expect(box(1)).toBeChecked();
    await expect(dots).toHaveCount(12);
    await summary.click();
    await expect(boxesGroup).toBeHidden();
    await expect(dots).toHaveCount(12);
    await summary.click();
    await expect(box(1)).toBeChecked();
    await expect(only).toBeChecked();
    await box(1).uncheck();
    await expect(only).toBeDisabled();
    await expect(dots).toHaveCount(all);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    const viewport = page.viewportSize()!.width;
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(viewport);
    for (const control of [box(1), box(5), only]) {
      const bounds = (await control.locator('xpath=..').boundingBox())!;
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport);
      expect(bounds.height).toBeGreaterThanOrEqual(44);
    }
    if (testInfo.project.name === 'phone') {
      await box(4).check();
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

const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.7 Mobile/15E148 Safari/604.1';

test.describe('iPhone: äänenvoimakkuus GainNoden kautta (issue #9)', () => {
  // Nykyinen iOS: volume-arvo tallentuu ja luetaan takaisin, mutta ei vaikuta ääneen.
  // Ennen korjausta lukutesti valitsi siksi element-tilan, eikä säädin muuttanut ääntä (fyysinen iPhone 13.11.2026).
  test.use({ userAgent: IPHONE_UA });

  test('säädin muuttaa todellista ääntä 100 %, 50 % ja 0 %, ja raidat pysyvät tahdissa ja kytkettävinä', async ({ page }) => {
    test.setTimeout(60000);
    await page.addInitScript(() => {
      // iOS-käytös: volume tallentuu, mutta todellinen taso pysyy 1:ssä.
      const stored = new WeakMap<HTMLMediaElement, number>();
      Object.defineProperty(HTMLMediaElement.prototype, 'volume', { configurable: true,
        get(this: HTMLMediaElement) { return stored.get(this) ?? 1; },
        set(this: HTMLMediaElement, value: number) { stored.set(this, value); } });
      // Mittauspisteet: signaali ennen GainNodea (lähde) ja sen jälkeen (kohti kaiuttimia).
      const probes: { src: string; pre: AnalyserNode; post?: AnalyserNode; gain?: GainNode }[] = [];
      (window as unknown as { probes: typeof probes }).probes = probes;
      const create = AudioContext.prototype.createMediaElementSource;
      AudioContext.prototype.createMediaElementSource = function (this: AudioContext, element: HTMLMediaElement) {
        const source = create.call(this, element);
        const pre = this.createAnalyser(); pre.fftSize = 2048; source.connect(pre);
        probes.push({ src: element.getAttribute('src') ?? '', pre });
        (source as unknown as { probe: unknown }).probe = probes.at(-1);
        return source;
      };
      const connect = AudioNode.prototype.connect as (this: AudioNode, ...args: unknown[]) => unknown;
      AudioNode.prototype.connect = function (this: AudioNode, ...args: unknown[]) {
        const target = args[0];
        if (this instanceof GainNode && target === this.context.destination) {
          const post = this.context.createAnalyser(); post.fftSize = 2048;
          const probe = probes.find(p => !p.post);
          if (probe) { probe.post = post; probe.gain = this; }
          connect.call(this, post);
        }
        return connect.apply(this, args);
      } as typeof AudioNode.prototype.connect;
    });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    const slider = player.getByRole('slider', { name: 'Äänenvoimakkuus' });
    await expect(player.locator('.song-volume')).toHaveAttribute('data-volume-mode', 'webaudio');
    await slider.fill('100');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await expect.poll(() => page.evaluate(() => (window as unknown as { probes: unknown[] }).probes.length)).toBe(3);

    /** Toteutunut vahvistus = signaalin RMS GainNoden jälkeen / ennen, keskiarvo äänekkäistä näytteistä. */
    const measuredGains = () => page.evaluate(async () => {
      const probes = (window as unknown as { probes: { src: string; pre: AnalyserNode; post?: AnalyserNode }[] }).probes;
      const rms = (node: AnalyserNode) => { const data = new Float32Array(node.fftSize); node.getFloatTimeDomainData(data); return Math.sqrt(data.reduce((s, v) => s + v * v, 0) / data.length); };
      const sums = probes.map(() => ({ ratio: 0, n: 0, pre: 0 }));
      for (let i = 0; i < 20; i++) {
        probes.forEach((probe, k) => {
          const pre = rms(probe.pre), post = probe.post ? rms(probe.post) : NaN;
          sums[k].pre = Math.max(sums[k].pre, pre);
          if (pre > 0.001) { sums[k].ratio += post / pre; sums[k].n++; }
        });
        await new Promise(resolve => setTimeout(resolve, 60));
      }
      return probes.map((probe, k) => ({ track: probe.src.replace(/.*-(saestys|kitara|laulu)\.mp3$/, '$1'),
        gain: sums[k].n ? Math.round(sums[k].ratio / sums[k].n * 100) / 100 : null, signal: sums[k].pre > 0.001 }));
    });
    /**
     * Mitattu todellinen vahvistus säestykselle ja kitaralle (soivat introssa) sekä kaikkien kolmen
     * GainNode-taso. Laulu alkaa vasta noin 14 sekunnin kohdalla, joten sen taso luetaan GainNodesta.
     */
    const levels = async () => {
      const [backing, guitar] = await measuredGains();
      const gainNodes = await page.evaluate(() => (window as unknown as { probes: { gain?: GainNode }[] }).probes
        .map(p => Math.round((p.gain?.gain.value ?? NaN) * 1000) / 1000));
      return { saestys: backing.gain, kitara: guitar.gain, gainNodes };
    };
    // Kaksi analysaattoria luetaan peräkkäin, ja äänisäie voi edetä välissä yhden 128 näytteen jakson:
    // mitatulle signaalisuhteelle sallitaan ±0,03. GainNode-arvot tarkistetaan tarkasti.
    const near = (a: number | null, b: number) => a !== null && Math.abs(a - b) <= 0.03;
    const expectLevels = (saestys: number, kitara: number, gainNodes: number[]) => expect.poll(async () => {
      const l = await levels();
      return { saestys: near(l.saestys, saestys) ? saestys : l.saestys, kitara: near(l.kitara, kitara) ? kitara : l.kitara, gainNodes: l.gainNodes };
    }).toEqual({ saestys, kitara, gainNodes });
    const signals = (await measuredGains()).map(g => g.signal);
    expect(signals.slice(0, 2), 'säestyksessä ja kitarassa on ääntä ennen GainNodea').toEqual([true, true]);

    // Raidan tasapaino 0,85 / 0,78 / 0,78 kerrottuna säätimellä: mitattu signaali ja GainNode-arvot.
    await expectLevels(0.85, 0.78, [0.85, 0.78, 0.78]);
    await slider.fill('50');
    await expectLevels(0.425, 0.39, [0.425, 0.39, 0.39]);
    await slider.fill('0');
    await expectLevels(0, 0, [0, 0, 0]);
    expect((await measuredGains()).slice(0, 2).map(g => g.signal), '0 %: lähteissä on yhä ääntä, mutta ulostulo on hiljaa').toEqual([true, true]);
    await slider.fill('100');
    await expectLevels(0.85, 0.78, [0.85, 0.78, 0.78]);

    // Tahdistus ja kytkentä eivät muutu: raidat etenevät yhdessä, kitara pysähtyy ja palaa tahtiin.
    const times = () => player.locator('audio').evaluateAll(els => els.map(e => ({ t: (e as HTMLAudioElement).currentTime, paused: (e as HTMLAudioElement).paused })));
    let now = await times();
    expect(Math.max(...now.map(x => x.t)) - Math.min(...now.map(x => x.t))).toBeLessThan(0.15);
    await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).uncheck();
    await expect.poll(async () => (await times())[1].paused).toBe(true);
    await page.getByRole('checkbox', { name: 'Kitara kuuluu' }).check();
    await expect.poll(async () => (await times())[1].paused).toBe(false);
    // Takaisin kytketty raita kelataan taustan kohtaan. Kelaus vaatii HTTP Range -tuen: paikallinen
    // python-palvelin ei tue sitä (raita alkaisi alusta), Vite ja Cloudflare Pages tukevat.
    const range = await page.evaluate(async src => (await fetch(src, { headers: { Range: 'bytes=0-1' }, cache: 'no-store' })).status,
      await player.locator('audio').first().getAttribute('src') ?? '');
    if (range === 206) {
      await page.waitForTimeout(2500);
      now = await times();
      expect(Math.max(...now.map(x => x.t)) - Math.min(...now.map(x => x.t)), 'kitara palasi tahtiin').toBeLessThan(0.3);
    } else {
      test.info().annotations.push({ type: 'rajoitus', description: 'Palvelin ei tue Rangea: takaisin kytketyn raidan tahdistusta ei mitattu.' });
    }
    await expectLevels(0.85, 0.78, [0.85, 0.78, 0.78]);

    // Tauko ja uusi toisto eivät kytke raitoja uudelleen (yksi lähde per elementti).
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    expect(await page.evaluate(() => (window as unknown as { probes: unknown[] }).probes.length)).toBe(3);
    await expect(player.locator('.backing-error')).toHaveCount(0);
    await player.getByRole('button', { name: '■ Tauko' }).click();
  });

  test('jos GainNode-kytkentä epäonnistuu, käyttäjälle kerrotaan eikä virhe jää piiloon', async ({ page }) => {
    await mockPlayback(page);
    await page.addInitScript(() => {
      AudioContext.prototype.createMediaElementSource = function () { throw new DOMException('Kytkentä estetty', 'InvalidStateError'); };
    });
    await page.goto(SONG);
    const player = page.locator('.song-player');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('status').filter({ hasText: 'Äänenvoimakkuutta ei voi säätää' })).toContainText('Kytkentä estetty');
  });
});
