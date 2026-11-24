import { expect, test, type Page } from '@playwright/test';

const topic = '/oppi/savelnimet/';
const chord = 'mita-sointumerkki-kertoo';
const route = 'mita-ylennys-ja-alennus-tarkoittavat';
const intervals = 'mita-intervallit-tarkoittavat';
const focus = (slug: string) => topic + slug + '.html';
const anchored = (slug: string) => topic + 'index.html#valinta-' + slug;
const chooser = (page: Page, slug: string) => page.locator('#valinta-' + slug);
const card = (page: Page, slug: string) => page.locator('details.study-inline').filter({ has: chooser(page, slug) });
const clip = (string: string, pitch: string) => `INSGuitarSteel_String${string}_Vel02_${pitch}_01`;

type AudioTrace = { starts: { clip: string | undefined; time: number; clock: number }[]; cancellations: number };

async function traceAudio(page: Page) {
  await page.addInitScript(() => {
    const trace: AudioTrace = { starts: [], cancellations: 0 };
    Object.assign(window, { notePracticeTrace: trace });
    const payloads = new WeakMap<ArrayBuffer, string>();
    const buffers = new WeakMap<AudioBuffer, string>();
    const arrayBuffer = Response.prototype.arrayBuffer;
    Response.prototype.arrayBuffer = async function () {
      const data = await arrayBuffer.call(this);
      const sample = this.url.match(/\/(INSGuitarSteel[^/]+)\.(m4a|ogg)$/)?.[1];
      if (sample) payloads.set(data, sample);
      return data;
    };
    const ctx = BaseAudioContext.prototype;
    const decode = ctx.decodeAudioData;
    ctx.decodeAudioData = function (data, onSuccess, onError) {
      const sample = payloads.get(data);
      return decode.call(this, data, buffer => {
        if (sample) buffers.set(buffer, sample);
        onSuccess?.(buffer);
      }, onError);
    };
    const create = ctx.createBufferSource;
    ctx.createBufferSource = function () {
      const source = create.call(this);
      const start = source.start.bind(source);
      source.start = (time, offset, duration) => {
        start(time, offset, duration);
        trace.starts.push({ clip: source.buffer ? buffers.get(source.buffer) : undefined, time: time ?? 0, clock: this.currentTime });
      };
      const stop = source.stop.bind(source);
      source.stop = (time) => {
        if (time === undefined) trace.cancellations++;
        stop(time);
      };
      return source;
    };
  });
}

const audio = (page: Page) => page.evaluate(() => (window as unknown as { notePracticeTrace: AudioTrace }).notePracticeTrace);
const played = async (page: Page) => (await audio(page)).starts.flatMap(event => event.clip ? [event.clip] : []);
async function resetTrace(page: Page) {
  await page.evaluate(() => {
    (window as unknown as { notePracticeTrace: AudioTrace }).notePracticeTrace.starts.length = 0;
  });
}

test('sointukaaviot ja todelliset kielinäytteet vastaavat toisiaan', async ({ page }) => {
  await traceAudio(page);
  await page.goto(focus(chord));
  const root = page.locator('[data-savelnimiopinto]');
  const chords = {
    D: ['xx0232', '1', [clip('B', 'D4'), clip('HighE', 'Fs4')]],
    Dsus4: ['xx0233', '1', [clip('B', 'D4'), clip('HighE', 'G4')]],
    D7: ['xx0212', '2', [clip('B', 'C4'), clip('HighE', 'Fs4')]],
    Dmaj7: ['xx0222', '2', [clip('B', 'Cs4'), clip('HighE', 'Fs4')]],
  } as const;
  for (const [name, [frets, string, end]] of Object.entries(chords)) {
    await resetTrace(page);
    const diagram = root.locator(`[data-sointu="${name}"]`);
    await expect(diagram.getByRole('img', { name: new RegExp(`^${name}, muuttuva sävel kielellä ${string}`) })).toBeVisible();
    await expect(diagram.locator('code')).toHaveText(frets);
    await expect(diagram.locator('circle.muuttuva-savel')).toHaveCount(1);
    await diagram.getByRole('button', { name: 'Kuuntele ' + name, exact: true }).click();
    await expect.poll(() => played(page)).toEqual([clip('D', 'D3'), clip('G', 'A3'), ...end]);
    const [first, second] = (await audio(page)).starts;
    expect(second.time - first.time).toBeCloseTo(0.024, 5);
  }
  await resetTrace(page);
  const series = root.getByRole('button', { name: 'Kuuntele D–Dsus4–D' });
  await series.click();
  await expect.poll(() => played(page)).toHaveLength(12);
  await expect(root.locator('[data-sointu="Dsus4"]')).toHaveClass(/soi/);
  await series.locator('..').getByRole('button', { name: 'Pysäytä' }).click();
  await expect(series).not.toHaveAttribute('data-playing');
  await expect(root.locator('.soi')).toHaveCount(0);
});

test('C- ja D-reitit soivat oikeassa järjestyksessä ja keskimmäinen nimi säilyy', async ({ page }) => {
  await traceAudio(page);
  await page.goto(focus(route));
  const section = page.locator('[data-reitti="C"]').locator('xpath=ancestor::section');
  const center = section.locator('[data-reitin-keskisavel]');
  const active = section.locator('[data-nauha].soi');
  await expect(section.getByRole('button')).toHaveText(['Aloita C:stä', 'Aloita D:stä']);
  await expect(center).toHaveText('C♯ / D♭');
  await section.getByRole('button', { name: 'Aloita C:stä' }).click();
  await expect.poll(() => played(page)).toEqual(['C3', 'Cs3', 'D3', 'Cs3', 'C3'].map(pitch => clip('A', pitch)));
  await expect(active).toHaveAttribute('data-nauha', '3');
  await expect(active).toHaveAttribute('data-nauha', '4');
  await expect(center).toHaveText('C♯');
  await resetTrace(page);
  await section.getByRole('button', { name: 'Aloita D:stä' }).click();
  await expect.poll(() => played(page)).toEqual(['D3', 'Cs3', 'C3', 'Cs3', 'D3'].map(pitch => clip('A', pitch)));
  expect((await audio(page)).cancellations).toBeGreaterThan(0);
  await expect(active).toHaveAttribute('data-nauha', '5');
  await expect(active).toHaveAttribute('data-nauha', '4');
  await expect(center).toHaveText('D♭');
  await expect(section.getByRole('status')).toContainText('Esimerkki päättyi.');
  await expect(active).toHaveCount(0);
  await expect(center).toHaveText('D♭');
});

test('hidas reitti tai suljetun kortin lataus ei voi käynnistää vanhaa ääntä', async ({ page }) => {
  await traceAudio(page);
  let release = () => {};
  const gate = new Promise<void>(resolve => { release = resolve; });
  let blocked = false;
  await page.route('**/*StringA_Vel02_C3_01.*', async request => {
    if (!blocked) {
      blocked = true;
      await gate;
    }
    await request.continue().catch(() => {});
  });
  await page.goto(anchored(route));
  const c = page.getByRole('button', { name: 'Aloita C:stä' });
  const d = page.locator('[data-reitti="D"]');
  try {
    await c.click();
    await expect.poll(() => blocked).toBe(true);
    await d.click();
    await expect.poll(() => played(page)).toEqual(['D3', 'Cs3', 'C3', 'Cs3', 'D3'].map(pitch => clip('A', pitch)));
  } finally {
    release();
  }
  await chooser(page, intervals).click();
  await expect(card(page, route)).not.toHaveAttribute('open');
  await expect(d).not.toHaveAttribute('data-playing');
  expect((await audio(page)).cancellations).toBeGreaterThan(0);
  expect(await played(page)).toHaveLength(5);

  let releaseSample = () => {};
  const sampleGate = new Promise<void>(resolve => { releaseSample = resolve; });
  let pending = false;
  await page.route('**/*StringD_Vel02_F3_01.*', async request => {
    pending = true;
    await sampleGate;
    await request.continue().catch(() => {});
  });
  try {
    await page.getByRole('button', { name: '3. nauha', exact: true }).click();
    await expect.poll(() => pending).toBe(true);
    await chooser(page, intervals).click();
    await expect(card(page, intervals)).not.toHaveAttribute('open');
    await expect(card(page, intervals).locator('[data-aanitila]').first()).toContainText('Kuuntelu keskeytyi.');
  } finally {
    releaseSample();
  }
  await chooser(page, route).click();
  await d.click();
  await expect.poll(() => played(page)).toEqual([
    ...['D3', 'Cs3', 'C3', 'Cs3', 'D3'].map(pitch => clip('A', pitch)),
    ...['D3', 'Cs3', 'C3', 'Cs3', 'D3'].map(pitch => clip('A', pitch)),
  ]);
});

test('äänen käynnistysvirhe, verkkovirhe ja keskeytys sallivat uuden yrityksen', async ({ page }) => {
  await page.addInitScript(() => {
    const resume = AudioContext.prototype.resume;
    let first = true;
    AudioContext.prototype.resume = function () {
      if (first) {
        first = false;
        return Promise.reject(new Error('Testin käynnistysvirhe'));
      }
      return resume.call(this);
    };
  });
  const samples = '**/assets/audio/soinnut/INSGuitarSteel*';
  await page.route(samples, request => request.abort());
  await page.goto(focus(route));
  const c = page.getByRole('button', { name: 'Aloita C:stä' });
  const status = page.locator('[data-aanitila]').first();
  await c.click();
  await expect(status).toContainText('Ääntä ei saatu käynnistettyä. Kokeile uudelleen.');
  await c.click();
  await expect(status).toContainText('Ääniä ei voitu ladata tai soittaa. Kokeile uudelleen.');
  await page.unroute(samples);
  await c.click();
  await expect(c).toHaveAttribute('data-playing');
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
    Reflect.deleteProperty(document, 'hidden');
  });
  await expect(c).not.toHaveAttribute('data-playing');
  await expect(status).toContainText('Kuuntelu keskeytyi.');
  await c.click();
  await expect(c).toHaveAttribute('data-playing');
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
  await expect(c).not.toHaveAttribute('data-playing');
});

test('A-kielen kolme melodiavalintaa vaihtavat vain keskimmäisen sävelen', async ({ page }) => {
  await traceAudio(page);
  await page.goto(focus(route));
  const section = page.locator('[data-soita-melodia]').locator('xpath=ancestor::section');
  for (const [label, pitch] of [['C', 'C3'], ['C♯/D♭', 'Cs3'], ['D', 'D3']]) {
    await resetTrace(page);
    await section.getByRole('button', { name: label, exact: true }).click();
    await expect(section.locator('[data-vaihteleva]')).toHaveText(label);
    await section.getByRole('button', { name: 'Kuuntele oma versiosi' }).click();
    await expect.poll(() => played(page)).toEqual([
      clip('A', 'C3'), clip('A', pitch), clip('A', 'D3'),
      clip('D', 'D3'), clip('G', 'A3'), clip('B', 'D4'), clip('HighE', 'Fs4'),
    ]);
    await section.getByRole('button', { name: 'Pysäytä' }).click();
  }
});

test('D-kielen neljä intervallia, paljastus ja yhtäaikainen kuuntelu', async ({ page }) => {
  await traceAudio(page);
  await page.goto(focus(intervals));
  const answer = page.locator('[data-intervallivastaus]');
  await expect(answer.locator('[data-intervallinimi]')).toBeHidden();
  for (const [fret, name, pitch] of [
    [3, 'Pieni terssi', 'F3'], [4, 'Suuri terssi', 'Fs3'], [7, 'Puhdas kvintti', 'A3'], [12, 'Puhdas oktaavi', 'D4'],
  ] as const) {
    await resetTrace(page);
    await page.getByRole('button', { name: fret + '. nauha', exact: true }).click();
    await expect.poll(() => played(page)).toEqual([clip('D', 'D3'), clip('D', pitch)]);
    await expect(page.locator(`[data-nauha="${fret}"]`)).toHaveClass(/valittu/);
    if (fret === 3) await answer.getByText('Paljasta intervallin nimi').click();
    await expect(answer.locator('[data-intervallinimi]')).toContainText(name);
  }
  await resetTrace(page);
  await answer.getByRole('button', { name: 'Kuuntele sävelet yhtä aikaa' }).click();
  await expect.poll(() => played(page)).toEqual([clip('D', 'D3'), clip('D', 'D4')]);
  const starts = (await audio(page)).starts;
  expect(starts[0].time).toBe(starts[1].time);
  await answer.getByText('Piilota intervallin nimi').click();
  await expect(answer.locator('[data-intervallinimi]')).toBeHidden();
});

test('siirtotehtävän palaute ja riffin kolme versiota vastaavat soitettuja säveliä', async ({ page }) => {
  await traceAudio(page);
  await page.goto(focus(intervals));
  const check = page.getByRole('button', { name: 'Tarkista valinta' });
  await expect(check).toBeDisabled();
  for (const [choice, pitch, feedback] of [
    ['A–C♯', 'Cs3', 'yhden puoliaskelen pienempi'], ['A–C', 'C3', 'ovat pieniä terssejä'],
  ]) {
    await page.getByRole('button', { name: 'Kuuntele ' + choice, exact: true }).click();
    await expect.poll(() => played(page)).toContain(clip('A', pitch));
    await resetTrace(page);
    await check.click();
    await expect(page.locator('[data-siirtopalaute]')).toContainText(feedback);
    await expect.poll(() => played(page)).toEqual([clip('D', 'D3'), clip('D', 'F3'), clip('A', 'A2'), clip('A', pitch)]);
    await resetTrace(page);
  }
  const section = page.locator('[data-soita-riffi]').locator('xpath=ancestor::section');
  for (const [choice, pitch] of [['F', 'F3'], ['F♯', 'Fs3'], ['Ylempi D', 'D4']]) {
    await resetTrace(page);
    await section.getByRole('button', { name: choice, exact: true }).click();
    await expect(section.locator('[data-vaihteleva]')).toHaveText(choice);
    await section.getByRole('button', { name: 'Kuuntele riffisi' }).click();
    await expect.poll(() => played(page)).toEqual(['D3', pitch, 'A3', 'D3', 'D3', pitch, 'A3', 'D3'].map(note => clip('D', note)));
    await section.getByRole('button', { name: 'Pysäytä' }).click();
  }
});

test('näppäimistö, keskittymistila, paluu ja vanhat merkinnät', async ({ page }) => {
  await page.addInitScript(() => {
    const key = 'musiikin-kartta:luvut';
    if (localStorage.getItem(key) === null) localStorage.setItem(key, '["savelet-ja-intervallit"]');
  });
  await page.goto(topic + 'index.html');
  const unit = page.locator('#ydinopinnot');
  const summary = unit.locator(':scope > summary');
  await expect(unit).not.toHaveAttribute('open');
  await summary.focus();
  await expect(summary).toHaveCSS('outline-style', 'solid');
  await page.keyboard.press('Enter');
  await chooser(page, chord).press('Enter');
  await expect(card(page, chord)).toHaveAttribute('open');
  await chooser(page, route).press('Enter');
  await expect(card(page, chord)).not.toHaveAttribute('open');
  await expect(card(page, route)).toHaveAttribute('open');
  await card(page, route).getByRole('button', { name: 'Merkitse kokeilluksi' }).press('Space');
  await expect(unit.locator('[data-unit-progress]')).toContainText('1/3');
  await card(page, route).getByRole('link', { name: 'Avaa omalla sivullaan' }).click();
  await expect(page).toHaveURL(focus(route));
  await expect(page.locator('.site-top')).toHaveCount(0);
  await expect(page.locator('.done-toggle')).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('link', { name: 'Takaisin aiheeseen: Sävelnimet ja sointumerkinnät' }).click();
  await expect(page).toHaveURL(anchored(route));
  await expect(card(page, route)).toHaveAttribute('open');
  await page.reload();
  await expect(card(page, route).locator('.done-toggle')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#aiemmat > summary').click();
  const legacy = page.locator('#valinta-savelet-ja-intervallit');
  await expect(legacy.locator('[data-study-status]')).toHaveText('✓ Tehty');
  await legacy.click();
  await expect(page.locator('#savelet-ja-intervallit .done-toggle')).toHaveAttribute('aria-pressed', 'true');
});

for (const colorScheme of ['light', 'dark'] as const) {
  test(`leveys 320/360/390 px, 200 % teksti ja 400 % reflow · ${colorScheme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    for (const [width, scale] of [[320, 1], [360, 1], [390, 1], [320, 2]]) {
      await page.setViewportSize({ width, height: 800 });
      for (const slug of [chord, route, intervals]) {
        await page.goto(anchored(slug));
        const root = card(page, slug);
        await expect(root).toHaveAttribute('open');
        await expect(page.locator('html')).toHaveCSS('color-scheme', colorScheme);
        if (scale === 2) await page.addStyleTag({ content: 'html { font-size: 200%; }' });
        const skip = slug === chord ? root.getByText('Huomaa, mikä muuttui') : root.locator('.study-knoppi > summary');
        await skip.first().click();
        expect(await page.evaluate(() => document.documentElement.scrollWidth), slug).toBeLessThanOrEqual(width);
        expect(await root.getByRole('button').evaluateAll(buttons => Math.min(...buttons.map(button => button.getBoundingClientRect().height)))).toBeGreaterThanOrEqual(44);
      }
    }
  });
}

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('natiivit avaukset, kuvat, teoria ja aiemmat linkit ovat saatavilla', async ({ page }) => {
    await page.goto(topic + 'index.html');
    await page.locator('#ydinopinnot > summary').click();
    await chooser(page, chord).click();
    await expect(card(page, chord).getByRole('img', { name: /^Dsus4,/ })).toBeVisible();
    await card(page, chord).getByText('Huomaa, mikä muuttui').click();
    await expect(card(page, chord).getByText(/terssin tilalla soi kvartti/)).toBeVisible();
    await chooser(page, intervals).click();
    await card(page, intervals).getByRole('link', { name: 'Avaa omalla sivullaan' }).click();
    await expect(page).toHaveURL(focus(intervals));
    await expect(page.getByText(/7. nauhan A puhtaan kvintin/)).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin aiheeseen: Sävelnimet ja sointumerkinnät' }).click();
    await page.locator('#aiemmat > summary').click();
    await expect(page.locator('#aiemmat .study-choice')).toHaveCount(3);
    await page.locator('#valinta-savelet-ja-intervallit').click();
    await expect(page.locator('audio[controls]')).toBeVisible();
  });
});
