import { expect, test } from '@playwright/test';

const url = '/testit/perustaidot-minitunnit.html';

test('yksi harjoituskortti, valinnan mukaan muuttuvat ohjeet ja yksi toistopainike', async ({ page }) => {
  await page.goto(url);
  await expect(page.locator('#exercise')).toBeVisible();
  await expect(page.locator('#exercise-title')).toHaveText('Löydä pulssi ja ykkönen');
  await expect(page.locator('#modes')).toBeHidden();
  await expect(page.getByRole('button', { name: 'Kitaran mukana' })).toHaveCount(0);
  await expect(page.locator('#stages')).toBeHidden();
  await expect(page.locator('#play')).toHaveText('▶ Aloita');
  await expect(page.locator('audio:visible')).toHaveCount(0);
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(page.getByRole('button', { name: 'Taputa rytmi' })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: 'Vaimennetut kielet' }).click();
  await expect(page.locator('#instruction')).toContainText('Vaimenna kielet');
  await expect(page.locator('#modes')).toBeHidden();
  await page.getByRole('button', { name: 'Yksi sointu', exact: true }).click();
  await expect(page.locator('#instruction')).toContainText('mikä tahansa tuttu sointu');
  await expect(page.locator('#basic')).toHaveText('Oma sointu');
  await expect(page.getByRole('button', { name: 'G-komppi', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect(page.locator('#chord-now')).toHaveText('1. sointu → 2. sointu');
  await page.getByRole('button', { name: 'G–D-malli' }).click();
  await expect(page.locator('#chord-now')).toHaveText('G → D');
});

test('jatkuva pulssi ylittää luuppirajan ja harjoituksen vaihto pysäyttää', async ({ page }) => {
  await page.goto(url);
  const card = page.locator('#exercise');
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.beat.on')).toHaveCount(1);
  // Pulssin kahden tahdin jakso on noin 5,71 s. Odota yli kaksi jaksoa.
  await page.waitForTimeout(12500);
  await expect(card).toHaveAttribute('data-state', 'playing');
  await expect(page.locator('.beat.on')).toHaveCount(1);
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(card).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing');
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
});

test('äänilatauksen peruminen ei käynnistä vanhaa harjoitusta', async ({ page }) => {
  await page.route('**/pulssi-ja-komppi.wav', async route => {
    await new Promise(resolve => setTimeout(resolve, 800));
    await route.continue();
  });
  await page.goto(url);
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'loading');
  await page.locator('#play').click();
  await page.waitForTimeout(1500);
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
});

test('320 px ja 200 prosentin tekstikoko, ei vaakavieritystä', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto(url);
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await page.getByRole('button', { name: 'Kaksi sointua', exact: true }).click();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole('button', { name: 'Aloita' })).toBeVisible();
});

test('ohjeet ja alkuperäinen äänite ilman JavaScriptiä', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:8765' + url);
    await expect(page.getByRole('heading', { name: 'Löydä pulssi ja ykkönen' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pidä komppikäsi liikkeessä' })).toBeVisible();
    await expect(page.locator('audio')).toBeVisible();
    await expect(page.locator('#exercise')).toBeHidden();
  } finally {
    await context.close();
  }
});

test('nuolet vaihtavat taputuskuvion vasta tahtirajalla ilman toiston uudelleenkäynnistystä', async ({ page }) => {
  test.setTimeout(60000);
  await page.addInitScript(() => {
    const starts = { count: 0 };
    Object.defineProperty(window, 'prototypeAudioStarts', { value: starts });
    const original = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (...args: Parameters<AudioBufferSourceNode['start']>) {
      starts.count++;
      return original.apply(this, args);
    };
  });
  await page.goto(url);
  const guide = page.locator('#clap-guide');
  const card = page.locator('#exercise');
  const labels = page.locator('.beat small');
  const next = page.getByRole('button', { name: 'Seuraava taputuskuvio' });
  const prev = page.getByRole('button', { name: 'Edellinen taputuskuvio' });
  await expect(labels).toHaveText(['Taputa', 'Taputa', 'Taputa', 'Taputa']);
  await next.click();
  await expect(guide).toHaveAttribute('data-pattern', '1');
  await expect(labels).toHaveText(['Taputa', 'Vain jalka', 'Taputa', 'Vain jalka']);
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.beat.on')).toHaveCount(1);
  // Kuvio ei vaihdu itsestään edes yli neljän tahdin jälkeen.
  await page.waitForTimeout(12000);
  await expect(guide).toHaveAttribute('data-pattern', '1');
  await expect(card).toHaveAttribute('data-state', 'playing');
  await expect(page.locator('.beat.on')).toHaveCount(1);
  await next.click();
  await expect(guide).toHaveAttribute('data-pattern', '2', { timeout: 4000 });
  await expect(labels).toHaveText(['Vain jalka', 'Taputa', 'Vain jalka', 'Taputa']);
  await next.click();
  await expect(guide).toHaveAttribute('data-pattern', '3', { timeout: 4000 });
  await expect(labels).toHaveText(['Taputa', 'Vain jalka', 'Vain jalka', 'Vain jalka']);
  await prev.click();
  await expect(guide).toHaveAttribute('data-pattern', '2', { timeout: 4000 });
  await page.getByRole('button', { name: 'Kaikki iskut', exact: true }).click();
  await expect(guide).toHaveAttribute('data-pattern', '0', { timeout: 4000 });
  await expect(labels).toHaveText(['Taputa', 'Taputa', 'Taputa', 'Taputa']);
  await expect(page.locator('#clap-position')).toHaveText('1 / 4');
  await expect(card).toHaveAttribute('data-state', 'playing');
  await expect.poll(() => page.evaluate(() => (window as unknown as { prototypeAudioStarts: { count: number } }).prototypeAudioStarts.count)).toBe(1);
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'idle');
  await expect(guide).toHaveAttribute('data-pattern', '0');
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(guide).toBeVisible();
  await expect(guide).toHaveAttribute('data-pattern', '0');
  await page.getByRole('button', { name: 'Vaimennetut kielet' }).click();
  await expect(guide).toBeHidden();
  await expect(page.locator('#clap-nav')).toBeHidden();
});

test('odottava taputusvalinta peruutetaan palaamalla nykyiseen kuvioon', async ({ page }) => {
  await page.goto(url);
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.beat.on').first()).toBeVisible();
  // Molemmat painallukset samassa JS-tehtävässä, jotta tahtiraja ei voi osua väliin.
  await page.evaluate(() => {
    document.getElementById('clap-forward')?.click();
  });
  const guide = page.locator('#clap-guide');
  // Varmista peruutus erillisellä atomisella sarjalla alkaen valitusta kuviosta.
  await expect(guide).toHaveAttribute('data-pattern', '1', { timeout: 4000 });
  await page.evaluate(() => {
    document.getElementById('clap-forward')?.click();
    document.getElementById('clap-prev')?.click();
  });
  await expect(guide).toHaveAttribute('data-pending', '');
  await expect(guide).toHaveAttribute('data-pattern', '1');
  await page.waitForTimeout(3200);
  await expect(guide).toHaveAttribute('data-pattern', '1');
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing');
});

test('neljä yksilöllistä taputuskuviota, nuolten kierto ja suora perusrytmi ennen toistoa', async ({ page }) => {
  await page.goto(url);
  const guide = page.locator('#clap-guide');
  const labels = page.locator('.beat small');
  const prev = page.getByRole('button', { name: 'Edellinen taputuskuvio' });
  const next = page.getByRole('button', { name: 'Seuraava taputuskuvio' });
  const all = page.getByRole('button', { name: 'Kaikki iskut', exact: true });
  const seen = new Set<string>();
  for (let i = 0; i < 4; i++) {
    await expect(guide).toHaveAttribute('data-pattern', String(i));
    await expect(page.locator('#clap-position')).toHaveText(String(i+1) + ' / 4');
    seen.add((await labels.allTextContents()).join('|'));
    await next.click();
  }
  expect(seen.size).toBe(4);
  await expect(guide).toHaveAttribute('data-pattern', '0');
  await prev.click();
  await expect(guide).toHaveAttribute('data-pattern', '3');
  await all.click();
  await expect(guide).toHaveAttribute('data-pattern', '0');
  await expect(all).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'idle');
});

test('taputus vain numeroiskuilla, ja-tavut näkyvät kompin hahmottamiseksi', async ({ page }) => {
  test.setTimeout(60000);
  await page.addInitScript(() => {
    const starts: { offset: number | undefined; rate: number; loopStart: number; loopEnd: number }[] = [];
    Object.defineProperty(window, 'prototypeSources', { value: starts });
    const original = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (...args: Parameters<AudioBufferSourceNode['start']>) {
      starts.push({ offset: args[1], rate: this.playbackRate.value, loopStart: this.loopStart, loopEnd: this.loopEnd });
      return original.apply(this, args);
    };
  });
  await page.goto(url);
  await expect(page.locator('#strum-explanation')).toBeHidden();
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  await expect(page.locator('#strum-explanation')).toBeVisible();
  await expect(page.locator('#strum-explanation')).toContainText('Älä napauta jalalla uudelleen');
  await expect(page.locator('#strum-hand')).toContainText('Ja-tavuilla ei taputeta');
  await expect(page.locator('.beat')).toHaveCount(4);
  await expect(page.locator('.half b')).toHaveText(['1', 'ja', '2', 'ja', '3', 'ja', '4', 'ja']);
  await expect(page.locator('#strum-foot')).toContainText('alas numeroilla (1, 2, 3, 4), ylös ja-tavuilla');
  await expect(page.locator('.half .foot')).toHaveCount(0);
  await expect(page.locator('.half.tap-target b')).toHaveText(['1', '2', '3', '4']);
  const next = page.getByRole('button', { name: 'Seuraava taputuskuvio' });
  const guide = page.locator('#clap-guide');
  await next.click();
  await expect(page.locator('.half.tap-target b')).toHaveText(['1', '3']);
  await next.click();
  await expect(page.locator('.half.tap-target b')).toHaveText(['2', '4']);
  await next.click();
  await expect(page.locator('.half.tap-target b')).toHaveText(['1']);
  await expect(page.locator('.half.tap-target b').filter({hasText:'ja'})).toHaveCount(0);
  await expect(page.locator('.half .foot')).toHaveCount(0);
  await page.getByRole('button', { name: 'Peruspulssi' }).click();
  await expect(page.locator('.half.tap-target b')).toHaveText(['1', '2', '3', '4']);
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.half.now')).toHaveCount(1);
  await expect(page.locator('.beat.on .mark')).toHaveText('Nyt');
  await expect.poll(() => page.locator('.half.now b').textContent(), {timeout: 4000}).toBe('ja');
  await next.click();
  await expect(guide).toHaveAttribute('data-pattern', '1', {timeout: 4000});
  await next.click();
  await expect(guide).toHaveAttribute('data-pattern', '2', {timeout: 4000});
  await expect(page.locator('.half.tap-target b')).toHaveText(['2', '4']);
  const starts = await page.evaluate(() => (window as unknown as { prototypeSources: {offset:number;rate:number;loopStart:number;loopEnd:number}[] }).prototypeSources);
  expect(starts).toHaveLength(1);
  expect(starts[0].offset).toBe(0);
  expect(starts[0].rate).toBe(1);
  expect(starts[0].loopStart).toBe(0);
  expect(starts[0].loopEnd).toBeCloseTo(8*60/84, 3);
  await page.locator('#play').click();
  await expect(page.locator('.half.now')).toHaveCount(0);
  await page.getByRole('button', { name: 'Vaimennetut kielet' }).click();
  await expect(page.locator('.half .direction')).toHaveText(['↓', '↑', '↓', '↑', '↓', '↑', '↓', '↑']);
  await expect(guide).toBeHidden();
  await page.getByRole('button', { name: 'Löydä pulssi ja ykkönen' }).click();
  await expect(page.locator('#strum-explanation')).toBeHidden();
  await expect(page.locator('.half')).toHaveCount(0);
  await expect(guide).toHaveAttribute('data-pattern', '0');
});

test('aktiivinen isku ei siirrä jalan ohjetta eikä taputusmerkkiä', async ({ page }) => {
  await page.goto(url);
  await page.getByRole('button', { name: 'Pidä komppikäsi liikkeessä' }).click();
  for (const width of [720, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    if (width === 320) await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    const movement = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('.beat')];
      const items = [...document.querySelectorAll('.beat, .half, .clap-symbol, .tap-label')];
      const measure = () => items.map(el => {
        const r = el.getBoundingClientRect();
        return [r.x, r.y, r.width, r.height];
      });
      const original = measure();
      let max = 0;
      for (const card of cards) {
        card.classList.add('on');
        for (const half of card.querySelectorAll('.half')) {
          half.classList.add('now');
          const current = measure();
          current.forEach((r, i) => r.forEach((v, j) => { max = Math.max(max, Math.abs(v - original[i][j])); }));
          half.classList.remove('now');
        }
        card.classList.remove('on');
      }
      return max;
    });
    expect(movement).toBeLessThanOrEqual(0.5);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});
