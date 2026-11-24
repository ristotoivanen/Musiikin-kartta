import { expect, test } from '@playwright/test';

const url = '/oppi/kitara/index.html';
const summary = '#perustaitojen-minitunnit > summary';

test('yksi harjoituskortti, valinnan mukaan muuttuvat ohjeet ja yksi toistopainike', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await expect(page.locator('#exercise')).toBeVisible();
  await expect(page.locator('#exercise-title')).toHaveText('Löydä pulssi ja ykkönen');
  await expect(page.locator('#modes')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Kitaran mukana' })).toHaveCount(0);
  await expect(page.locator('#stages')).toBeHidden();
  await expect(page.locator('#play')).toHaveText('▶ Aloita');
  await expect(page.locator('audio:visible')).toHaveCount(0);
  await page.locator('#minitunti-strum > summary').click();
  await expect(page.getByRole('button', { name: 'Taputa rytmi' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#stages button')).toHaveCount(2);
  await page.getByRole('button', { name: 'Kokeile omalla kitaralla' }).click();
  await expect(page.locator('#instruction')).toContainText('Vaimenna kielet');
  await expect(page.locator('#instruction')).toContainText('valitse tuttu sointu');
  await expect(page.locator('#clap-current')).toHaveText('Soita kaikilla iskuilla');
  await expect(page.locator('.half.tap-target .tap-label')).toHaveText(['Soita','Soita','Soita','Soita']);
  await expect(page.locator('.half:not(.tap-target) .tap-label')).toHaveText(['Ei osumaa','Ei osumaa','Ei osumaa','Ei osumaa']);
  await expect(page.locator('#brushing')).toBeVisible();
});

test('jatkuva pulssi ylittää luuppirajan ja harjoituksen vaihto pysäyttää', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  const card = page.locator('#exercise');
  await page.locator('#play').click();
  await expect(card).toHaveAttribute('data-state', 'playing', { timeout: 15000 });
  await expect(page.locator('.beat.on')).toHaveCount(1);
  // Pulssin kahden tahdin jakso on noin 5,71 s. Odota yli kaksi jaksoa.
  await page.waitForTimeout(12500);
  await expect(card).toHaveAttribute('data-state', 'playing');
  await expect(page.locator('.beat.on')).toHaveCount(1);
  await page.locator('#minitunti-strum > summary').click();
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
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
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
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.locator('#minitunti-strum > summary').click();
  await page.getByRole('button', { name: 'Kokeile omalla kitaralla' }).click();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await expect(page.getByRole('button', { name: 'Aloita' })).toBeVisible();
});

test('ohjeet ja alkuperäinen äänite ilman JavaScriptiä', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(url);
    await page.locator(summary).click();
    await expect(page.getByRole('heading', { name: 'Löydä pulssi ja ykkönen' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Pulssista komppiin' })).toBeVisible();
    for (const [name, extension] of [['Avaa alkuperäinen äänite', 'm4a'], ['WAV', 'wav']]) {
      const link = page.getByRole('link', { name, exact: true });
      const href = await link.getAttribute('href');
      expect(href).toMatch(new RegExp('pulssi-ja-komppi\\.' + extension + '$'));
      const response = await page.request.head(new URL(href!, page.url()).href);
      expect(response.ok()).toBe(true);
    }
    await expect(page.locator('audio')).toHaveCount(0);
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
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
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
  await page.locator('#minitunti-strum > summary').click();
  await expect(guide).toBeVisible();
  await expect(guide).toHaveAttribute('data-pattern', '0');
  await page.getByRole('button', { name: 'Kokeile omalla kitaralla' }).click();
  await expect(guide).toBeVisible();
  await expect(page.locator('#clap-nav')).toBeVisible();
});

test('odottava taputusvalinta peruutetaan palaamalla nykyiseen kuvioon', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
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
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
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
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await expect(page.locator('#strum-explanation')).toBeHidden();
  await page.locator('#minitunti-strum > summary').click();
  await expect(page.locator('#strum-explanation')).toBeVisible();
  await expect(page.locator('#strum-foot + #beats')).toHaveCount(1);
  await expect(page.locator('#strum-foot')).toBeVisible();
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
  await page.getByRole('button', { name: 'Kokeile omalla kitaralla' }).click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing');
  await expect(guide).toHaveAttribute('data-pattern', '2');
  await expect(page.locator('.half.tap-target b')).toHaveText(['2', '4']);
  await expect(page.locator('.half.tap-target .tap-label')).toHaveText(['Soita', 'Soita']);
  await expect(page.locator('.half:not(.tap-target) .tap-label')).toHaveText(Array(6).fill('Ei osumaa'));
  await expect(page.locator('.half .direction')).toHaveText(['↓', '↑', '↓', '↑', '↓', '↑', '↓', '↑']);
  await page.getByRole('button', { name: 'Seuraava soittokuvio' }).click();
  await expect(guide).toHaveAttribute('data-pattern', '3', {timeout: 4000});
  await expect(page.locator('.half.tap-target b')).toHaveText(['1']);
  await expect.poll(() => page.evaluate(() => (window as unknown as { prototypeSources: unknown[] }).prototypeSources.length)).toBe(1);
  await page.getByRole('button', { name: 'Taputa rytmi' }).click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing');
  await expect(guide).toHaveAttribute('data-pattern', '3');
  await expect(page.locator('.half.tap-target .tap-label')).toHaveText(['Taputa']);
  await page.locator('#play').click();
  await expect(page.locator('.half.now')).toHaveCount(0);
  await page.locator('#minitunti-pulse > summary').click();
  await expect(page.locator('#strum-explanation')).toBeHidden();
  await expect(page.locator('#strum-foot')).toBeHidden();
  await expect(page.locator('.half')).toHaveCount(0);
  await expect(guide).toHaveAttribute('data-pattern', '0');
});

test('aktiivinen isku ei siirrä jalan ohjetta eikä taputusmerkkiä', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await page.locator('#minitunti-strum > summary').click();
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

test('minitunnit ovat oletuksena kiinni sivun lopussa ja sulkeminen pysäyttää toiston', async ({ page }) => {
  await page.goto(url);
  const section=page.locator('#perustaitojen-minitunnit');
  await expect(section).not.toHaveAttribute('open','');
  await expect(page.locator('#exercise')).toBeHidden();
  await expect(page.locator('.recap-sections + #perustaitojen-minitunnit + .recap-next')).toHaveCount(1);
  await expect(page.locator('.recap-help')).toHaveCount(0);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','playing',{timeout:15000});
  await page.locator(summary).click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','idle');
  await page.locator(summary).click();
  await expect(page.locator('#exercise')).toBeHidden();
  await page.locator('#minitunti-pulse > summary').click();
  await expect(page.locator('#play')).toHaveText('▶ Aloita');
  await expect(page.locator('.beat.on')).toHaveCount(0);
});
test('suora ankkuri avaa harjoitusosion ja skriptivirhe jättää ohjeet näkyviin', async ({ page }) => {
  await page.route('**/perustaitojen-minitunnit.js*', route=>route.abort());
  await page.goto(url+'#perustaitojen-minitunnit');
  await expect(page.locator('#perustaitojen-minitunnit')).toHaveAttribute('open','');
  await expect(page.locator('#minitunti-fallback')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Avaa alkuperäinen äänite' })).toBeVisible();
  await expect(page.locator('audio')).toHaveCount(0);
  await expect(page.locator('#exercise')).toBeHidden();
});

test('minitunnit käyttävät Ydinopintojen yhteistä plus–miinus-avausta', async ({ page }) => {
  await page.goto(url);
  const section = page.locator('#perustaitojen-minitunnit');
  const heading = section.locator(':scope > summary');
  await expect(section).toHaveClass(/\bstudy-unit\b/);
  await expect(section.locator(':scope > .study-unit-body')).toHaveCount(1);
  await expect(heading.locator('.study-unit-title')).toHaveText('Perustaitojen minitunnit');
  await expect(section.locator('[data-unit-progress]')).toHaveCount(0);
  const marker = () => heading.evaluate(el => getComputedStyle(el, '::after').content);
  expect(await marker()).toContain('+');
  await heading.focus();
  await page.keyboard.press('Enter');
  await expect(section).toHaveAttribute('open', '');
  expect(await marker()).toContain('−');
  await expect(page.locator('#exercise')).toBeHidden();
  await expect(page.locator('#minitunti-pulse')).not.toHaveAttribute('open','');
  await expect(page.locator('#minitunti-strum')).not.toHaveAttribute('open','');
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'idle');
  await page.keyboard.press('Enter');
  await expect(section).not.toHaveAttribute('open', '');
  expect(await marker()).toContain('+');
  await expect(page.locator('#exercise')).toBeHidden();
});

test('omat avattavat minitunnit: vain yksi auki, sulkupainike pysäyttää ja palauttaa kohdistuksen', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  const pulse=page.locator('#minitunti-pulse');
  const strum=page.locator('#minitunti-strum');
  await expect(page.locator('#lessons > li')).toHaveCount(2);
  await expect(page.locator('#exercise')).toBeHidden();
  await pulse.locator('summary').first().click();
  await expect(pulse).toHaveAttribute('open','');
  await expect(pulse.locator('#exercise')).toBeVisible();
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','playing',{timeout:15000});
  await strum.locator('summary').first().click();
  await expect(pulse).not.toHaveAttribute('open','');
  await expect(strum).toHaveAttribute('open','');
  await expect(strum.locator('#exercise')).toBeVisible();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','idle');
  await expect(page.locator('#exercise')).toHaveCount(1);
  await strum.getByRole('button',{name:'Aloita'}).click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','playing',{timeout:15000});
  await strum.getByRole('button',{name:'Sulje minitunti'}).click();
  await expect(strum).not.toHaveAttribute('open','');
  await expect(page.locator('#exercise')).toHaveAttribute('data-state','idle');
  await expect(strum.locator('summary').first()).toBeFocused();
});

test('nopea sulku ja uudelleenavaus eivät jätä pulssia taustalle', async ({ page }) => {
  await page.goto(url);
  await page.locator(summary).click();
  const heading = page.locator('#minitunti-pulse > summary');
  await heading.click();
  await page.locator('#play').click();
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'playing', { timeout: 15000 });

  await heading.evaluate(el => {
    const summary = el as HTMLElement;
    summary.click();
    summary.click();
  });
  await expect(page.locator('#minitunti-pulse')).toHaveAttribute('open', '');
  await expect(page.locator('#exercise')).toHaveAttribute('data-state', 'idle');
  await expect(page.locator('.beat.on')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Aloita' })).toBeVisible();
});

test('rytmin Nyt-merkki ei liikuta iskukortteja toiston aikana 320 px / 200 %', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto(url);
  await page.locator(summary).click();
  await page.locator('#minitunti-pulse > summary').click();
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.locator('#play').click();
  const { active, movement } = await page.locator('#beats').evaluate(async grid => {
    const beats = [...grid.querySelectorAll('.beat')];
    const offsets = () => {
      const top = grid.getBoundingClientRect().top;
      return beats.flatMap(beat => {
        const rect = beat.getBoundingClientRect();
        return [rect.top - top, rect.height];
      });
    };
    const original = offsets();
    const active = new Set<number>();
    let movement = 0;
    const end = performance.now() + 4000;
    while (active.size < 4 && performance.now() < end) {
      await new Promise(requestAnimationFrame);
      const beat = beats.findIndex(el => el.querySelector('.mark')?.textContent === 'Nyt');
      if (beat >= 0) active.add(beat);
      offsets().forEach((value, i) => { movement = Math.max(movement, Math.abs(value - original[i])); });
    }
    return { active: active.size, movement };
  });
  expect(active).toBe(4);
  expect(movement).toBeLessThanOrEqual(0.5);
});

test('jonoon asetettu ja käyttöön vaihtuva rytmikuvio pysyvät samassa kohdassa 320 px / 200 %', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto(url + '#minitunti-strum');
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  await page.locator('#play').click();
  const guide = page.locator('#clap-guide');
  const layout = () => page.locator('#exercise').evaluate(panel => {
    const top = panel.getBoundingClientRect().top;
    return ['#strum-foot', '#beats', '#clap-nav', '#play'].map(selector => {
      const rect = panel.querySelector(selector)!.getBoundingClientRect();
      return [rect.top - top, rect.height];
    });
  });
  const baseline = await layout();
  await expect(page.locator('.beat.on')).toHaveCount(1);
  await page.getByRole('button', { name: 'Edellinen taputuskuvio' }).click();
  await expect(guide).toHaveAttribute('data-pending', '3');
  expect(await layout()).toEqual(baseline);
  await expect(guide).toHaveAttribute('data-pattern', '3', { timeout: 4000 });
  expect(await layout()).toEqual(baseline);
});

test('tulosteessa näkyvät staattiset ohjeet vaikka näyttöversiossa minitunnit ovat kiinni', async ({ page }) => {
  await page.goto(url);
  const fallbackHeading = page.locator('#minitunti-fallback').getByRole('heading', { name: 'Pulssista komppiin' });
  await expect(fallbackHeading).toBeHidden();
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
  await expect(fallbackHeading).toBeVisible();
  await expect(page.locator('#play')).toBeHidden();
});
