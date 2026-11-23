import { expect, test, type Page } from '@playwright/test';

// #170-viimeistely: tilaviesti tilanvaihdossa (A), Steel-pankin formaattimuisti (B),
// näppäimistöfokus (C) ja kapea näkymä / 200 % zoom (D). Testit ajetaan mykistettynä:
// ne todentavat ajastetut äänilähteet, ladatut tiedostot ja DOM-tilan, eivät kuultavaa ääntä.
const pages = [
  { name: 'alkuperäinen', path: '/testit/ensimmaiset-nelja-iskua.html' },
  { name: 'Steel', path: '/assets/soitinpankki/ensimmaiset-nelja-iskua-steel.html' },
];
const steelPath = pages[1].path;
const SWITCHED = 'Pysäytetty, koska vaihdoit harjoitusta. Paina Käynnistä, kun olet valmis.';

type Rec = { kind: string; dur: number; loop: boolean; stopAt?: number; ended?: boolean };

/** Kirjaa jokaisen ajastetun äänilähteen ja sen pysäytyksen. */
async function instrument(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __src: (Rec & { node: AudioScheduledSourceNode })[]; __ctx: AudioContext | null; AudioContext: typeof AudioContext };
    type Rec = { kind: string; dur: number; loop: boolean; stopAt?: number; ended?: boolean };
    w.__src = []; w.__ctx = null;
    const Base = window.AudioContext;
    w.AudioContext = class extends Base { constructor(o?: AudioContextOptions) { super(o); w.__ctx = this; } };
    const record = (node: AudioScheduledSourceNode) => {
      const buffer = (node as AudioBufferSourceNode).buffer;
      const rec = { node, kind: buffer ? 'buffer' : 'osc', dur: buffer?.duration ?? 0, loop: !!(node as AudioBufferSourceNode).loop } as Rec & { node: AudioScheduledSourceNode };
      node.addEventListener('ended', () => { rec.ended = true; });
      w.__src.push(rec);
    };
    for (const proto of [AudioScheduledSourceNode.prototype, AudioBufferSourceNode.prototype]) {
      if (!Object.prototype.hasOwnProperty.call(proto, 'start')) continue;
      const start = proto.start;
      proto.start = function (this: AudioScheduledSourceNode, ...args: number[]) { record(this); return (start as (...a: number[]) => void).apply(this, args); };
    }
    const stop = AudioScheduledSourceNode.prototype.stop;
    AudioScheduledSourceNode.prototype.stop = function (this: AudioScheduledSourceNode, when = 0) {
      const rec = w.__src.find(r => r.node === this);
      if (rec) rec.stopAt = when;
      return stop.call(this, when);
    };
  });
}

/** Lähteet, jotka voivat vielä tuottaa ääntä: ei päättynyt eikä pysäytetty jo menneeseen hetkeen. */
const live = (page: Page) => page.evaluate(() => {
  const w = window as unknown as { __src: Rec[]; __ctx: AudioContext | null };
  const now = w.__ctx ? w.__ctx.currentTime : 0;
  return w.__src.filter(r => !r.ended && (r.stopAt === undefined || r.stopAt > now + 0.001)).map(r => ({ kind: r.kind, dur: Math.round(r.dur), loop: r.loop }));
});
const started = (page: Page) => page.evaluate(() => (window as unknown as { __src: Rec[] }).__src.length);
const message = (page: Page) => page.locator('#message');

async function startAndWait(page: Page, pattern: RegExp) {
  await page.locator('#start').click();
  await expect(message(page)).toHaveText(pattern, { timeout: 20000 });
}

async function expectStoppedAfterSwitch(page: Page, mode: string) {
  await expect(message(page)).toHaveText(SWITCHED);
  await expect(message(page)).not.toHaveClass(/virhe/);
  await expect(page.locator(`[data-mode="${mode}"]`)).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#start')).toBeEnabled();
  await expect(page.locator('#phase')).toHaveText('Lähtölasku');
  await expect.poll(() => live(page)).toEqual([]);
  // Uusi tila ei käynnisty itsestään.
  const count = await started(page);
  await page.waitForTimeout(500);
  expect(await started(page)).toBe(count);
  await expect(message(page)).toHaveText(SWITCHED);
}

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

for (const { name, path } of pages) {
  test.describe(`${name}: A – tilaviesti tilanvaihdossa`, () => {
    test('M0 → M2, M2 → M3 ja M3 → M1 pysäyttävät äänen ja kertovat todellisen tilan', async ({ page }) => {
      test.setTimeout(60000);
      await instrument(page);
      await page.goto(path);
      await startAndWait(page, /Esimerkki soi/);
      await page.locator('[data-mode="M2"]').click();
      await expectStoppedAfterSwitch(page, 'M2');
      await startAndWait(page, /Musiikki soi/);
      await page.locator('[data-mode="M3"]').click();
      await expectStoppedAfterSwitch(page, 'M3');
      await startAndWait(page, /Musiikki soi: soita mukana/);
      await page.locator('[data-mode="M1"]').click();
      await expectStoppedAfterSwitch(page, 'M1');
      // Uusi tila käynnistyy normaalisti ilman erillistä Pysäytä-painallusta.
      await startAndWait(page, /Pulssi käy/);
      await expect.poll(async () => (await live(page)).length).toBeGreaterThan(0);
      await page.locator('#stop').click();
      await expect(message(page)).toHaveText('Pysäytetty');
    });

    test('tilan vaihto levossa ei väitä soittoa eikä jätä vanhaa viestiä', async ({ page }) => {
      await page.goto(path);
      await expect(message(page)).toHaveText('Valmis.');
      await page.locator('[data-mode="M3"]').click();
      await expect(message(page)).toHaveText('Valmis.');
    });

    test('nopeat tilanvaihdot soiton aikana eivät jätä päällekkäisiä ääniä', async ({ page }) => {
      await instrument(page);
      await page.goto(path);
      await page.locator('[data-mode="M3"]').click();
      await startAndWait(page, /Musiikki soi: soita mukana/);
      for (const mode of ['M2', 'M0', 'M3', 'M1', 'M2', 'M3']) await page.locator(`[data-mode="${mode}"]`).click();
      await expect.poll(() => live(page)).toEqual([]);
      await startAndWait(page, /Musiikki soi: soita mukana/);
      await page.waitForTimeout(800);
      expect(await live(page)).toEqual([{ kind: 'buffer', dur: 30, loop: true }]);
      await page.locator('#stop').click();
    });

    test('kesken jäänyt lataus ei palauta vanhan harjoituksen viestiä tai ääntä', async ({ page }) => {
      test.setTimeout(45000);
      await instrument(page);
      // Hidas verkko: kaikki äänitiedostot ja Steel-manifesti viipyvät.
      await page.route(/\/(audio\/.*\.(wav|ogg|m4a)|meta-steel-v1\.json)$/, async route => { await delay(1500); await route.continue(); });
      await page.goto(path);
      await page.locator('[data-mode="M2"]').click();
      await page.locator('#start').click();
      await expect(message(page)).toHaveText(/Ladataan/);
      await page.locator('[data-mode="M3"]').click();
      await expect(message(page)).toHaveText(SWITCHED);
      await startAndWait(page, /Musiikki soi: soita mukana/);
      // Vanhan M2-käynnistyksen lataukset valmistuvat tämän jälkeen: ne eivät saa vaihtaa viestiä eikä soittaa.
      await page.waitForTimeout(3500);
      await expect(message(page)).toHaveText(/Musiikki soi: soita mukana/);
      expect(await live(page)).toEqual([{ kind: 'buffer', dur: 30, loop: true }]);
      await page.locator('#stop').click();
    });

    test('kesken jääneen latauksen virhe ei pysäytä uutta harjoitusta', async ({ page }) => {
      test.setTimeout(45000);
      await instrument(page);
      await page.route(/e2-freepats-fsbs-clean-bridge-alku-2s\.wav$/, async route => { await delay(1200); await route.abort(); });
      await page.goto(path);
      await page.locator('#start').click(); // M0 alkaa ladata E2-näytettä, joka epäonnistuu viiveellä
      await page.locator('[data-mode="M1"]').click();
      await startAndWait(page, /Pulssi käy/);
      await page.waitForTimeout(2000);
      await expect(message(page)).toHaveText(/Pulssi käy/);
      await expect(message(page)).not.toHaveClass(/virhe/);
      await expect(page.locator('#start')).toBeDisabled();
      await expect.poll(async () => (await live(page)).filter(r => r.kind === 'osc').length).toBeGreaterThan(0);
      await page.locator('#stop').click();
    });
  });
}

test.describe('B – Steel-pankin formaattimuisti (Safari-kaltainen OGG-purkuvirhe simuloitu)', () => {
  /**
   * Simuloi iOS 27.2 Safarin OGG-virhettä. CI:n Linux-Chromium ei välttämättä
   * pura AAC/M4A:ta, joten muodon onnistumisen voi simuloida vain näissä
   * formaattivaihdon toimintalogiikan testeissä. Tämä EI testaa oikeaa
   * AAC-dekoodausta: se tarkistetaan erikseen oikeassa iOS Safarissa.
   */
  async function rejectFormats(page: Page, formats: ('ogg' | 'm4a')[], simulatedSuccess: ('ogg' | 'm4a')[] = []) {
    await page.addInitScript(({ rejected, simulated }: { rejected: string[]; simulated: string[] }) => {
      const original = BaseAudioContext.prototype.decodeAudioData;
      BaseAudioContext.prototype.decodeAudioData = function (this: BaseAudioContext, data: ArrayBuffer, ...rest: unknown[]) {
        const head = new TextDecoder('latin1').decode(new Uint8Array(data, 0, Math.min(12, data.byteLength)));
        const format = head.startsWith('OggS') ? 'ogg' : head.slice(4, 8) === 'ftyp' ? 'm4a' : 'other';
        if (rejected.includes(format)) return Promise.reject(new DOMException('Decoding failed', 'EncodingError'));
        if (simulated.includes(format)) {
          // Vain ohjauspolun testin kelvollinen 5 sekunnin AudioBuffer, ei oikea ääninäyte.
          return Promise.resolve(this.createBuffer(1, Math.round(5 * this.sampleRate), this.sampleRate));
        }
        return (original as (...a: unknown[]) => Promise<AudioBuffer>).call(this, data, ...rest);
      };
    }, { rejected: formats, simulated: simulatedSuccess });
  }
  function steelRequests(page: Page) {
    const list: string[] = [];
    page.on('request', req => { const m = req.url().match(/(steel-6-40\.(ogg|m4a)|meta-steel-v1\.json)$/); if (m) list.push(m[1]); });
    return list;
  }
  async function m2(page: Page, expected: RegExp) {
    await page.locator('[data-mode="M2"]').click();
    await startAndWait(page, expected);
    await page.locator('#stop').click();
    await expect(message(page)).toHaveText('Pysäytetty');
  }

  test('OGG toimii: toinen käynnistys käyttää välimuistia, ei uutta latausta', async ({ page, browserName }) => {
    const requests = steelRequests(page);
    await page.goto(steelPath);
    await m2(page, /Meta Steel -mallikitaraa/);
    const afterFirst = [...requests];
    if (browserName === 'chromium') expect(afterFirst).toEqual(['meta-steel-v1.json', 'steel-6-40.ogg']);
    await m2(page, /Meta Steel -mallikitaraa/);
    expect(requests).toEqual(afterFirst);
  });

  test('OGG-purku epäonnistuu, M4A toimii: OGG ladataan vain kerran sivuistunnossa', async ({ page }) => {
    await rejectFormats(page, ['ogg'], ['m4a']);
    const requests = steelRequests(page);
    await page.goto(steelPath);
    await m2(page, /Meta Steel -mallikitaraa/);
    await m2(page, /Meta Steel -mallikitaraa/);
    await m2(page, /Meta Steel -mallikitaraa/);
    expect(requests).toEqual(['meta-steel-v1.json', 'steel-6-40.ogg', 'steel-6-40.m4a']);
  });

  test('molemmat muodot epäonnistuvat: näkyvä FreePats-varatila, ei toistuvia turhia latauksia', async ({ page }) => {
    await rejectFormats(page, ['ogg', 'm4a']);
    const requests = steelRequests(page);
    await page.goto(steelPath);
    await m2(page, /Musiikki soi FreePats-varakitaralla: Meta Steelin lataus ei onnistunut/);
    await m2(page, /Musiikki soi FreePats-varakitaralla: Meta Steelin lataus ei onnistunut/);
    expect(requests).toEqual(['meta-steel-v1.json', 'steel-6-40.ogg', 'steel-6-40.m4a']);
  });

  test('pysäytys latauksen aikana: uusi käynnistys käyttää jo alkanutta latausta', async ({ page }) => {
    await instrument(page);
    await rejectFormats(page, ['ogg'], ['m4a']);
    const requests = steelRequests(page);
    await page.route(/steel-6-40\.(ogg|m4a)$/, async route => { await delay(700); await route.continue(); });
    await page.goto(steelPath);
    await page.locator('[data-mode="M2"]').click();
    await page.locator('#start').click();
    await expect(message(page)).toHaveText(/Ladataan Meta Steel/, { timeout: 15000 });
    await page.locator('#stop').click();
    await expect(message(page)).toHaveText('Pysäytetty');
    await startAndWait(page, /Meta Steel -mallikitaraa/);
    await page.waitForTimeout(1500);
    expect(requests).toEqual(['meta-steel-v1.json', 'steel-6-40.ogg', 'steel-6-40.m4a']);
    // Tasan yksi säestys ja 16 mallikitaran iskua: pysäytetty käynnistys ei ajastanut mitään.
    const now = await live(page);
    expect(now.filter(r => r.dur === 30)).toHaveLength(1);
    expect(now.filter(r => r.dur === 5)).toHaveLength(16);
    await page.locator('#stop').click();
  });
});

for (const { name, path } of pages) {
  test.describe(`${name}: C – näppäimistö ja fokus`, () => {
    const tab = (browserName: string, shift = false) => (browserName === 'webkit' ? 'Alt+' : '') + (shift ? 'Shift+' : '') + 'Tab';
    const active = (page: Page) => page.evaluate(() => document.activeElement?.id || (document.activeElement as HTMLElement)?.dataset?.mode || document.activeElement?.tagName);

    test('Enter Käynnistä-painikkeessa siirtää fokuksen Pysäytä-painikkeeseen; pysäytyksen jälkeen fokus säilyy', async ({ page, browserName }) => {
      await page.goto(path);
      await page.locator('[data-mode="M1"]').click();
      await page.focus('#start');
      await page.keyboard.press('Enter');
      expect(await active(page)).toBe('stop');
      await expect(message(page)).toHaveText(/Pulssi käy/);
      await page.keyboard.press('Enter');
      await expect(message(page)).toHaveText('Pysäytetty');
      expect(await active(page)).toBe('stop');
      await page.keyboard.press(tab(browserName, true));
      expect(await active(page)).toBe('start');
      await expect(page.locator('#start')).toBeEnabled();
      await page.keyboard.press('Space');
      expect(await active(page)).toBe('stop');
      await expect(message(page)).toHaveText(/Pulssi käy/);
      await page.keyboard.press('Space');
      await expect(message(page)).toHaveText('Pysäytetty');
    });

    test('toiston automaattinen loppu jättää fokuksen käytettävään Pysäytä-painikkeeseen', async ({ page, browserName }) => {
      test.setTimeout(60000);
      await page.goto(path);
      await page.focus('#start');
      await page.keyboard.press('Enter'); // M0, 20 iskua
      await expect(message(page)).toHaveText(/Esimerkki soi/, { timeout: 15000 });
      await expect(message(page)).toHaveText('Harjoitus päättyi.', { timeout: 30000 });
      expect(await active(page)).toBe('stop');
      await page.keyboard.press(tab(browserName, true));
      expect(await active(page)).toBe('start');
      await expect(page.locator('#start')).toBeEnabled();
    });

    test('fokusta ei siirretä, jos Käynnistä ei ollut fokuksessa (ei fokuksen varastamista)', async ({ page }) => {
      await page.goto(path);
      await page.focus('[data-mode="M2"]');
      await page.evaluate(() => (document.getElementById('start') as HTMLButtonElement).click());
      expect(await active(page)).toBe('M2');
      await page.evaluate(() => (document.getElementById('stop') as HTMLButtonElement).click());
    });
  });

  test.describe(`${name}: D – 200 % ja 150 % zoom (201 ja 268 CSS px)`, () => {
    for (const size of [{ width: 201, height: 357 }, { width: 268, height: 476 }]) {
      test(`${size.width}×${size.height}: ei vaakavieritystä, vihjeet ja painikkeet kokonaisina`, async ({ page }) => {
        await page.setViewportSize(size);
        await page.goto(path);
        // Näytä myös "Anna soida", joka on näkyvissä vain soiton aikana.
        await page.evaluate(() => document.querySelectorAll('.tile')[3].classList.add('current'));
        const layout = await page.evaluate(() => {
          const tiles = [...document.querySelectorAll<HTMLElement>('.tile')];
          return {
            scrollWidth: document.documentElement.scrollWidth,
            widest: Math.max(...[...document.body.querySelectorAll('*')].map(e => e.getBoundingClientRect().right)),
            clipped: tiles.flatMap((t, i) => [...t.children].filter(c => (c as HTMLElement).scrollWidth > (c as HTMLElement).clientWidth + 1 || c.getBoundingClientRect().right > t.getBoundingClientRect().right + 1).map(c => i + ':' + c.textContent)),
            columns: getComputedStyle(document.getElementById('timeline')!).gridTemplateColumns.split(' ').length,
            codeRight: Math.max(...[...document.querySelectorAll('code')].map(c => c.getBoundingClientRect().right)),
          };
        });
        expect(layout.scrollWidth).toBeLessThanOrEqual(size.width);
        expect(layout.widest).toBeLessThanOrEqual(size.width + 1);
        expect(layout.clipped).toEqual([]);
        expect(layout.columns).toBe(2);
        expect(layout.codeRight).toBeLessThanOrEqual(size.width);
        for (const target of [...await page.locator('.modes button').all(), page.locator('#start'), page.locator('#stop')]) {
          expect((await target.boundingBox())!.height).toBeGreaterThanOrEqual(44);
        }
        // Soiton aikana Pysäytä on näkyvissä, ja vaihe ja aikajana ovat vieritettävissä esiin.
        await page.locator('[data-mode="M1"]').click();
        await page.locator('#start').click();
        await expect(message(page)).toHaveText(/Pulssi käy/);
        await expect.poll(async () => { const b = await page.locator('#stop').boundingBox(); return !!b && b.y >= -1 && b.y + b.height <= size.height + 1; }, { timeout: 6000 }).toBe(true);
        await page.locator('#timeline').scrollIntoViewIfNeeded();
        await expect(page.locator('#phase')).toHaveText(/·/);
        await page.locator('#stop').click();
        await expect(message(page)).toHaveText('Pysäytetty');
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(size.width);
      });
    }

    test('320 px:ssä aikajana pysyy neljänä sarakkeena (kaksi tahtiriviä)', async ({ page }) => {
      await page.setViewportSize({ width: 320, height: 568 });
      await page.goto(path);
      expect(await page.evaluate(() => getComputedStyle(document.getElementById('timeline')!).gridTemplateColumns.split(' ').length)).toBe(4);
    });
  });
}
