import { expect, test } from '@playwright/test';

const path = '/testit/soitinpankki/';
const audio = (url: string) => url.includes('/soitinpankki/audio/');

test('vain valitun kokeen näytteet ladataan, puretaan ja käytetään uudelleen', async ({ page }) => {
    const requests: string[] = [];
    page.on('request', request => {
        if (audio(request.url())) requests.push(new URL(request.url()).pathname.split('/').at(-1)!);
    });
    await page.goto(path);
    const play = page.getByRole('button', { name: 'Kuuntele neljä iskua' });
    const stop = page.getByRole('button', { name: 'Pysäytä' });
    const status = page.getByRole('status');
    await expect(stop).toBeDisabled();
    expect(requests).toEqual([]);

    await play.focus();
    await page.keyboard.press('Enter');
    await expect(status).toHaveText(/Toistetaan · Meta Steel Guitar/);
    await expect(page.locator('#samples')).toHaveText('1 (0 muistista)');
    await expect(page.locator('#context')).toHaveText('running');
    await expect(page.locator('#bytes')).not.toHaveText('0 B');
    expect(requests).toEqual([expect.stringMatching(/^steel-6-40\.(ogg|m4a)$/)]);

    await play.click();
    await expect(status).toHaveText(/Toistetaan/);
    await expect(page.locator('#bytes')).toHaveText('0 B');
    await expect(page.locator('#decode')).toHaveText('0 ms');
    await expect(page.locator('#samples')).toHaveText('1 (1 muistista)');
    expect(requests).toHaveLength(1);

    await page.getByRole('radio', { name: /B · Meta Nylon/ }).check();
    await expect(status).toHaveText(/Pankki vaihdettu/);
    await expect(stop).toBeDisabled();
    await page.getByRole('button', { name: 'Kolmisointu yhdessä' }).click();
    await expect(status).toHaveText(/Toistetaan · Meta Nylon Guitar/);
    expect(requests.slice(1).map(name => name.split('.')[0]).sort())
        .toEqual(['nylon-4-50', 'nylon-5-47', 'nylon-6-43']);

    await page.getByRole('button', { name: 'Kuusi kieltä' }).click();
    await expect(page.locator('#samples')).toHaveText('6 (3 muistista)');
    await expect(page.locator('#strum-timing')).toHaveText('0 · 45 · 90 · 135 · 180 · 225 ms');
    await expect(status).toHaveText('Koe päättyi.', { timeout: 7000 });
    await expect(stop).toBeDisabled();

    await page.getByRole('radio', { name: /C · FreePats/ }).check();
    await page.getByRole('button', { name: /Kuuntele melodia/ }).click();
    await expect(status).toHaveText(/Toistetaan · FreePats/);
    await expect(page.locator('#samples')).toHaveText('6 (0 muistista)');
    await stop.click();
    await expect(status).toHaveText('Pysäytetty.');
});

test('pysäytys ja pankinvaihto estävät keskeneräisen latauksen toiston', async ({ page }) => {
    let starts = 0;
    await page.exposeFunction('recordSampleStart', () => { starts += 1; });
    await page.addInitScript(() => {
        const start = AudioBufferSourceNode.prototype.start;
        AudioBufferSourceNode.prototype.start = function (...args) {
            void (window as Window & { recordSampleStart?: () => Promise<void> }).recordSampleStart?.();
            return start.apply(this, args);
        };
    });

    let release = () => {};
    const gate = new Promise<void>(resolve => { release = resolve; });
    await page.route('**/audio/steel-6-40.*', async route => {
        await gate;
        await route.continue().catch(() => {});
    });
    const request = page.waitForRequest(request => audio(request.url()));
    await page.goto(path);
    await page.getByRole('button', { name: /Kuuntele neljä/ }).click();
    await request;
    const status = page.getByRole('status');
    await expect(status).toHaveText('Valmistellaan ääntä…');
    expect(starts).toBe(0);

    await page.getByRole('button', { name: 'Pysäytä' }).click();
    await expect(status).toHaveText('Pysäytetty.');
    await page.getByRole('radio', { name: /B · Meta Nylon/ }).check();
    release();
    await page.getByRole('button', { name: /Kuuntele neljä/ }).click();
    await expect(status).toHaveText(/Toistetaan · Meta Nylon Guitar/);
    await expect.poll(() => starts).toBe(4);
    await page.evaluate(() => {
        Object.defineProperty(document, 'hidden', { configurable: true, value: true });
        document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(status).toHaveText(/siirryttyä taustalle/);
    await expect(page.getByRole('button', { name: 'Pysäytä' })).toBeDisabled();
});

test('lataus- ja purkuvirheen jälkeen soitto käyttää varamuotoa tai kertoo virheen', async ({ page }) => {
    await page.goto(path);
    const oggFirst = await page.evaluate(() =>
        !!document.createElement('audio').canPlayType('audio/ogg; codecs="vorbis"'));
    let failBoth = true;
    await page.route('**/audio/steel-6-40.*', async route => {
        if (route.request().url().endsWith(oggFirst ? '.ogg' : '.m4a')) {
            await route.fulfill({ status: 200, body: 'virheellinen äänitiedosto' });
        } else if (failBoth) {
            await route.fulfill({ status: 503 });
        } else {
            await route.continue();
        }
    });
    const play = page.getByRole('button', { name: /Kuuntele neljä/ });
    const status = page.getByRole('status');
    await play.click();
    await expect(status).toHaveText(/Toisto ei käynnistynyt.*HTTP 503/);
    await expect(page.getByRole('button', { name: 'Pysäytä' })).toBeDisabled();

    failBoth = false;
    await play.click();
    await expect(status).toHaveText(/Toistetaan/);
    await expect(page.locator('#codec')).toHaveText(oggFirst ? 'M4A' : 'OGG');
    await expect(page.locator('#samples')).toHaveText('1 (0 muistista)');
});

test('OfflineAudioContext todentaa iskut, 150 ms vaimennuksen, harjauksen ja pysäytyksen', async ({ page }) => {
    await page.goto(path);
    const output = await page.evaluate(async () => {
        const audioModule = new URL('audio.mjs', location.href).href;
        const scoreModule = new URL('scores.mjs', location.href).href;
        const { playScore, sampleKey } = await import(audioModule);
        const { scores } = await import(scoreModule);
        const rate = 48000;
        const lead = 0.1;
        const onset = 0.018;
        async function render(name: string, stopAt?: number) {
            const context = new OfflineAudioContext(1, rate * 5, rate);
            const buffer = context.createBuffer(1, rate * 5, rate);
            buffer.getChannelData(0).fill(1, Math.round(rate * onset));
            const samples = new Map(scores[name].map((event: { string: number; midi: number }) =>
                [sampleKey(event), { buffer, onset, rate: 1 }]));
            const playback = playScore(context, scores[name], samples, 0.1, { lead });
            const paused = stopAt !== undefined && context.suspend(lead + stopAt).then(async () => {
                playback.stop();
                await context.resume();
            });
            const result = await context.startRendering();
            await paused;
            const pcm = result.getChannelData(0);
            return (at: number) => pcm[Math.round((lead + at) * rate)];
        }

        const beat = 60 / 72;
        const e2 = await render('e2');
        const strum = await render('strum');
        const triad = await render('triad');
        const separate = await render('separate');
        const melody = await render('melody');
        const stopped = await render('e2', 0.2);
        return {
            before: e2(-0.001),
            attacks: [0, 1, 2, 3].map(i => e2(i * beat + 0.002)),
            choke: e2(beat - 0.003),
            sustained: e2(4 * beat - 0.002),
            fadeMid: e2(4 * beat + 0.075),
            afterFade: e2(4 * beat + 0.151),
            strum: Array.from({ length: 6 }, (_, i) => strum(i * 0.045 + 0.002)),
            beforeStrum: Array.from({ length: 6 }, (_, i) => strum(i * 0.045 - 0.002)),
            triad: triad(0.002),
            gap: separate(1.10),
            separate: [0, 1.18, 2.36].map(at => separate(at + 0.002)),
            melody: [0, 0.48, 0.96, 1.44, 2.65, 3.45].map(at => melody(at + 0.002)),
            stopped: [0.19, 0.211, 0.235, beat + 0.002, 3 * beat + 0.002].map(stopped),
        };
    });

    expect(output.before).toBe(0);
    output.attacks.forEach(level => expect(level).toBeCloseTo(0.1, 4));
    expect(output.choke).toBeCloseTo(0.05, 3);
    expect(output.sustained).toBeCloseTo(0.1, 4);
    expect(output.fadeMid).toBeCloseTo(0.05, 3);
    expect(output.afterFade).toBe(0);
    output.strum.forEach((level, i) => expect(level).toBeCloseTo(0.1 * (i + 1), 4));
    output.beforeStrum.forEach((level, i) => expect(level).toBeCloseTo(0.1 * i, 4));
    expect(output.triad).toBeCloseTo(0.3, 4);
    expect(output.gap).toBe(0);
    [...output.separate, ...output.melody].forEach(level => expect(level).toBeCloseTo(0.1, 4));
    expect(output.stopped[0]).toBeCloseTo(0.1, 4);
    expect(output.stopped[1]).toBeGreaterThan(0.01);
    expect(output.stopped[1]).toBeLessThan(0.09);
    expect(output.stopped.slice(2)).toEqual([0, 0, 0]);
});

test('kapea näkymä, tekstisuurennus ja näppäimistö eivät estä käyttöä', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto(path);
    await page.addStyleTag({ content: ':root { font-size: 200%; }' });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(320);
    const play = page.getByRole('button', { name: 'Sävelet erikseen' });
    await expect(play).toBeVisible();
    expect((await play.boundingBox())?.height).toBeGreaterThanOrEqual(44);
    await page.getByRole('radio', { name: /A · Meta Steel/ }).focus();
    await page.keyboard.press('ArrowRight');
    await expect(page.getByRole('radio', { name: /B · Meta Nylon/ })).toBeChecked();
    await play.focus();
    await page.keyboard.press('Space');
    await expect(page.getByRole('status')).toHaveText(/Toistetaan · Meta Nylon Guitar/);
});

test('kaikkien pankkien OGG- ja AAC-tiedostot puretaan ja soivat', async ({ page }) => {
    await page.goto(path);
    const summaries = await page.evaluate(async () => {
        const audioModule = new URL('audio.mjs', location.href).href;
        const scoreModule = new URL('scores.mjs', location.href).href;
        const { loadSamples, playScore, sampleKey } = await import(audioModule);
        const { scores } = await import(scoreModule);
        const { banks } = await (await fetch('./manifest.json')).json();
        const results = [];
        for (const [id, bank] of Object.entries<{ gain: number }>(banks)) {
            for (const format of ['ogg', 'm4a']) {
                const context = new OfflineAudioContext(1, 48000 * 5, 48000);
                const needed = [...scores.e2, ...scores.strum, ...scores.melody];
                const metrics = { bytes: 0, decodeMs: 0, cached: 0 };
                const samples = await loadSamples(context, bank, needed, [format], new Map(),
                    new AbortController().signal, metrics);
                const durations = needed.map(event => {
                    const sample = samples.get(sampleKey(event));
                    return (sample.buffer.duration - sample.onset) / sample.rate - (event.releaseAt - event.at + event.fade);
                });
                playScore(context, scores.strum, samples, bank.gain);
                const pcm = (await context.startRendering()).getChannelData(0);
                let peak = 0;
                let tail = 0;
                for (let i = 0; i < pcm.length; i += 1) {
                    peak = Math.max(peak, Math.abs(pcm[i]));
                    if (i >= 4 * 48000) tail = Math.max(tail, Math.abs(pcm[i]));
                }
                results.push({ id, format, count: samples.size, bytes: metrics.bytes, peak, tail,
                    shortestMargin: Math.min(...durations) });
            }
        }
        return results;
    });

    expect(summaries).toHaveLength(6);
    for (const result of summaries) {
        const label = `${result.id} / ${result.format}`;
        expect(result.count, label).toBe(8);
        expect(result.bytes, label).toBeGreaterThan(0);
        expect(result.shortestMargin, label).toBeGreaterThan(0);
        expect(result.peak, label).toBeGreaterThan(0.02);
        expect(result.peak, label).toBeLessThan(0.85);
        expect(result.tail, label).toBe(0);
    }
});
