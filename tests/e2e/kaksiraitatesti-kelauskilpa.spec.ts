import { readFileSync } from 'node:fs';
import { test, expect, type Page, type Route } from '@playwright/test';

/**
 * Kelauksen kilpatilanteiden toistotestit (MK-20261119-03, juurisyyanalyysi).
 * T1–T3 todensivat korjausta edeltävän moottorin viat V1 ja V2 (merkitty test.fail). Korjaus K1–K3 on tehty, ja ne
 * menevät nyt läpi sellaisinaan. T4–T7 kattavat korjauksen muut tilasiirtymät (tauko ja kelaus kesken aloituksen,
 * peräkkäiset kelaukset aloituksen aikana ja latausvirhe kelauksessa).
 * Synteettinen aineisto soi muistista, joten verkko ei vaikuta ajoitukseen.
 */
const URL = '/kaksiraitatesti.html?lahde=synteettinen&moottori=uusi&mittaus=pois';
interface Entry { ms: number; event: string; request?: number; tausta?: number | string; kitara?: number | string; to?: number; target?: number; value?: boolean; reason?: string; vaihe?: string }
const events = (page: Page): Promise<Entry[]> =>
  page.evaluate(() => (window as unknown as { kaksiraitatesti: { report(): { events: Entry[] } } }).kaksiraitatesti.report().events);
const playButton = (page: Page) => page.getByRole('button', { name: '▶ Soita' }).first();

async function startPlaying(page: Page) {
  await page.goto(URL);
  await playButton(page).click();
  await expect.poll(async () => (await events(page)).some(item => item.event === 'toisto-alkoi')).toBe(true);
  await page.waitForTimeout(500);
}

const lastStart = async (page: Page) => (await events(page)).filter(item => item.event === 'toisto-alkoi').at(-1);
const now = (page: Page) => page.evaluate(() => performance.now());
const after = async (page: Page, t0: number, name: string) => (await events(page)).filter(item => item.ms > t0 && item.event === name);
/** Testisoittimen painikkeen tila (K1): soi, aloittaa tai tauko. */
const mainButton = (page: Page) => page.locator('.player button.play');
/** Aikakatkaisumerkinnät: nykyisen aloituksen kelaus-aikakatkaisu tai minkä tahansa aloituksen kelattu: aikakatkaisu. */
const timeouts = async (page: Page, t0: number) => (await events(page)).filter(item => item.ms > t0
  && (item.event === 'kelaus-aikakatkaisu' || (item.event === 'kelattu' && (item.tausta === 'aikakatkaisu' || item.kitara === 'aikakatkaisu'))));

/** Palvelee tiedoston Range-pyynnön (206) tai kokonaan (200). */
function fulfillRange(route: Route, file: string) {
  const body = readFileSync(file);
  const match = /bytes=(\d+)-(\d*)/.exec(route.request().headers()['range'] ?? '');
  const headers = { 'Accept-Ranges': 'bytes', 'Content-Type': 'audio/mpeg' };
  if (!match) return route.fulfill({ status: 200, headers, body });
  const start = Number(match[1]);
  const end = match[2] ? Math.min(Number(match[2]), body.length - 1) : body.length - 1;
  return route.fulfill({ status: 206, headers: { ...headers, 'Content-Range': `bytes ${start}-${end}/${body.length}` }, body: body.subarray(start, end + 1) });
}

async function pausedAt(page: Page) {
  await startPlaying(page);
  await page.getByRole('button', { name: '■ Tauko' }).first().click();
  await expect(mainButton(page)).toHaveAttribute('data-tila', 'tauko');
  await page.waitForTimeout(300);
}

/** Asettaa sivulle ketjun: jokaisen aloituksen ensimmäinen loadstart tekee seuraavan kelauksen listasta. */
const chainSeeksOnLoadstart = (page: Page, targets: number[]) => page.evaluate(list => {
  const backing = document.querySelector('audio')!;
  const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
  const next = () => {
    const at = list.shift();
    if (at === undefined) return;
    backing.addEventListener('loadstart', () => { hook.seek(at); next(); }, { once: true });
  };
  next();
}, targets);

test.describe('Kahden raidan testi: kelauksen kilpatilanteet (toistotestit)', () => {
  test.describe.configure({ timeout: 30_000 });

  test('T1: kelaus kesken Soita-aloituksen käynnistää toiston kelauskohdasta', async ({ page }) => {
    await startPlaying(page);
    await page.getByRole('button', { name: '■ Tauko' }).first().click();
    await page.waitForTimeout(300);
    // Kelaus tehdään, kun jatkon load() on alkanut mutta toisto ei vielä soi (deterministinen kohta).
    await page.evaluate(() => document.querySelector('audio')!.addEventListener('loadstart',
      () => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(40), { once: true }));
    await playButton(page).click();
    await expect.poll(async () => Number((await lastStart(page))?.tausta), { timeout: 4000 }).toBeCloseTo(40, 0);
  });

  test('T2: ohitettu aloitus lopettaa odotuksen eikä kirjaa aikakatkaisua', async ({ page }) => {
    await startPlaying(page);
    const t0 = await page.evaluate(() => performance.now());
    await page.evaluate(() => {
      const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
      hook.seek(20); hook.seek(40); hook.seek(50);
    });
    await expect.poll(async () => Number((await lastStart(page))?.tausta)).toBeCloseTo(50, 0);
    await page.waitForTimeout(5600);
    const stale = (await events(page)).filter(item => item.ms > t0 && item.event === 'kelattu' && (item.tausta === 'aikakatkaisu' || item.kitara === 'aikakatkaisu'));
    expect(stale).toEqual([]);
  });

  test('T3 (WebKit-hypoteesin malli): pause-tapahtuma kesken kelausaloituksen ei saa estää seuraavaa kelausta', async ({ page }) => {
    await startPlaying(page);
    await page.evaluate(() => {
      const backing = document.querySelector('audio')!;
      const hook = (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti;
      backing.addEventListener('loadstart', () => {
        // Chromium poistaa jonossa olevan pause-tapahtuman load()-kutsussa (HTML-spesifikaatio). Lähetetään se itse,
        // annetaan Reactin piirtää ja kelataan sitten uudelleen ennen kuin ensimmäinen aloitus soi.
        backing.dispatchEvent(new Event('pause'));
        queueMicrotask(() => hook.seek(40));
      }, { once: true });
      hook.seek(20);
    });
    await expect.poll(async () => Number((await lastStart(page))?.tausta), { timeout: 4000 }).toBeCloseTo(40, 0);
  });

  test('T4: tauko kesken aloituksen pysäyttää aloituksen, eikä aikakatkaisua kirjata; seuraava Soita jatkaa kohteesta', async ({ page }) => {
    await pausedAt(page);
    const t0 = await now(page);
    // Tauko painetaan, kun jatkon load() on alkanut mutta toisto ei vielä soi.
    await page.evaluate(() => document.querySelector('audio')!.addEventListener('loadstart',
      () => (document.querySelector('.player button.play') as HTMLButtonElement).click(), { once: true }));
    await playButton(page).click();
    await expect.poll(async () => (await after(page, t0, 'pause-call')).length).toBe(1);
    const start = (await after(page, t0, 'tuore-aloitus'))[0];
    expect(start).toBeDefined();
    await page.waitForTimeout(5600);
    expect(await after(page, t0, 'toisto-alkoi')).toEqual([]);
    expect(await timeouts(page, t0)).toEqual([]);
    expect((await after(page, t0, 'aloitus-ohitettu')).map(item => item.request)).toEqual([start.request]);
    expect((await after(page, t0, 'toistoaikomus')).map(item => item.value)).toEqual([true, false]);
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'tauko');
    await expect(mainButton(page)).toHaveText('▶ Soita');
    expect(await page.locator('audio').first().evaluate(element => (element as HTMLAudioElement).paused)).toBe(true);

    await playButton(page).click();
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'soi');
    expect(Number((await lastStart(page))?.tausta)).toBeCloseTo(Number(start.target), 1);
  });

  test('T5: kelaus tauolla kirjaa kelaus-tauolla, ei aloita toistoa, ja Soita jatkaa kelauskohdasta', async ({ page }) => {
    await pausedAt(page);
    const t0 = await now(page);
    await page.evaluate(() => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(30));
    await expect.poll(async () => (await after(page, t0, 'kelaus-tauolla')).map(item => item.to)).toEqual([30]);
    await page.waitForTimeout(500);
    expect(await after(page, t0, 'tuore-aloitus')).toEqual([]);
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'tauko');
    await playButton(page).click();
    await expect.poll(async () => Number((await lastStart(page))?.tausta)).toBeCloseTo(30, 0);
    expect(await timeouts(page, t0)).toEqual([]);
  });

  for (const from of ['soitosta', 'aloituksesta'] as const) {
    test(`T6 (${from}): peräkkäiset kelaukset aloituksen aikaikkunassa, viimeinen kohde voittaa`, async ({ page }) => {
      if (from === 'soitosta') await startPlaying(page); else await pausedAt(page);
      const t0 = await now(page);
      // Jokainen kelaus tehdään edellisen aloituksen loadstart-hetkellä, jolloin aloitus on kesken eikä toisto soi.
      await chainSeeksOnLoadstart(page, from === 'soitosta' ? [30, 50] : [20, 30, 50]);
      if (from === 'soitosta') await page.evaluate(() => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(20));
      else await playButton(page).click();
      await expect.poll(async () => Number((await lastStart(page))?.tausta), { timeout: 4000 }).toBeCloseTo(50, 0);
      await expect(mainButton(page)).toHaveAttribute('data-tila', 'soi');
      const starts = await after(page, t0, 'tuore-aloitus');
      const begun = await after(page, t0, 'toisto-alkoi');
      expect(begun.map(item => item.request)).toEqual([starts.at(-1)!.request]);
      const skipped = (await after(page, t0, 'aloitus-ohitettu')).map(item => item.request).sort();
      expect(skipped).toEqual(starts.slice(0, -1).map(item => item.request).sort());
      await page.waitForTimeout(5600);
      expect(await timeouts(page, t0)).toEqual([]);
      expect((await lastStart(page))?.request).toBe(starts.at(-1)!.request);
    });
  }

  test('T7: latausvirhe kelauksessa lopettaa toistoaikomuksen, ja uusi Soita käynnistää toiston kelauskohdasta', async ({ page }) => {
    // Paikallinen testipalvelin ei tue Range-pyyntöjä, ja reititys poistaa selaimen välimuistin käytöstä. Ilman
    // Rangea verkosta soitettava MP3 ei ole kelattavissa, joten reitti palvelee MP3:t Range-tuella kuten Pages.
    let failGuitar = false;
    await page.route('**/assets/audio/kaksiraitatesti/yksi-sointu-akustinen-*.mp3', (route: Route) => {
      const name = route.request().url().split('/').pop()!;
      if (failGuitar && name.includes('kitara')) return route.fulfill({ status: 503, contentType: 'text/plain; charset=UTF-8', body: 'error code: 1102' });
      return fulfillRange(route, 'assets/audio/kaksiraitatesti/' + name);
    });
    await page.goto('/kaksiraitatesti.html?lahde=mp3&moottori=uusi&mittaus=pois');
    await playButton(page).click();
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'soi', { timeout: 15_000 });
    await page.waitForTimeout(500);
    failGuitar = true;
    const t0 = await now(page);
    await page.evaluate(() => (window as unknown as { kaksiraitatesti: { seek(s: number): void } }).kaksiraitatesti.seek(40));
    // Soiton aikana virhe tulee elementin error-tapahtumasta (pause('latausvirhe')), tauolta aloitettaessa
    // freshStartin latausvirhe-haarasta. Kummassakin aikomus päättyy syyllä latausvirhe.
    await expect.poll(async () => (await after(page, t0, 'toistoaikomus')).at(-1), { timeout: 10_000 })
      .toMatchObject({ value: false, reason: 'latausvirhe' });
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'tauko');
    await expect(page.getByRole('alert').filter({ hasText: 'Äänitiedoston lataus epäonnistui (kitara' })).toBeVisible();
    await page.waitForTimeout(5600);
    expect(await after(page, t0, 'toisto-alkoi')).toEqual([]);
    expect(await timeouts(page, t0)).toEqual([]);
    expect(await page.locator('audio').first().evaluate(element => (element as HTMLAudioElement).paused)).toBe(true);

    failGuitar = false;
    await playButton(page).click();
    await expect(mainButton(page)).toHaveAttribute('data-tila', 'soi', { timeout: 15_000 });
    expect(Number((await lastStart(page))?.tausta)).toBeCloseTo(40, 0);
    expect(await timeouts(page, t0)).toEqual([]);
  });
});

test.describe('Kahden raidan testi: kelaussarja-ajuri (&koe=kelaussarja)', () => {
  test('T8: 24 nopeaa kaksois- ja kolmoiskelaussarjaa soitosta ja kesken aloituksen päätyvät viimeiseen kohteeseen', async ({ page }, info) => {
    test.skip(info.project.name === 'phone', 'Sama ajuri ja moottori; ajetaan kerran, koska koe kestää noin minuutin.');
    test.setTimeout(150_000);
    await page.goto('/kaksiraitatesti.html?lahde=synteettinen&koe=kelaussarja&mittaus=pois');
    await page.getByRole('button', { name: 'Aja kelaussarjat (24)' }).click();
    await expect(page.locator('output.bursts')).toHaveAttribute('data-tila', 'valmis', { timeout: 140_000 });
    const results = (await events(page)).filter(item => item.event === 'kelaussarja-tulos') as unknown as
      { sarja: number; tila: string; tulos: string; aikakatkaisuja: number; ohitettuja: number; aloituksia: number }[];
    expect(results).toHaveLength(24);
    expect(results.filter(item => item.tulos !== 'ok')).toEqual([]);
    // Pitkillä väleillä edellinen aloitus ehtii soida ennen seuraavaa kelausta; lyhyillä se ohitetaan (K2).
    // Kummassakaan ei kirjata aikakatkaisuja, ja ohitettuja on vähemmän kuin aloituksia.
    for (const item of results) {
      expect(item.aikakatkaisuja).toBe(0);
      expect(item.ohitettuja).toBeLessThan(item.aloituksia);
    }
    expect(results.some(item => item.ohitettuja > 0)).toBe(true);
    await expect(page.locator('output.bursts')).toContainText('valmis: ok 24/24');
  });
});
