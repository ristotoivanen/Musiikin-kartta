import { test, expect, type Page } from '@playwright/test';

// Mobiiliauditoinnin K1: soiva sävel ja tabulatuurin soiva kohta pysyvät näkyvissä, mutta käyttäjän
// oma vieritys saa tilapäisen etusijan. Testit mittaavat sijainteja näytöllä, eivät pelkkiä luokkia.
// Asetukset määritellään tässä tiedostossa itse, joten tiedosto ajetaan vain desktop-projektissa.
test.skip(({ isMobile }) => isMobile, 'Näyttöko\'ot ja kosketus määritellään tässä tiedostossa itse.');

const PHONES = [320, 360, 390, 430];
const PAUSE_MS = 4000;

/** visible: piste kokonaan näkyvissä; gone: piste kokonaan näkyvän alueen ulkopuolella. */
type Sample = { visible: boolean; gone?: boolean; key: string; scrollLeft: number; scrollY: number } | null;

/**
 * Näkyykö soiva sävelpiste kokonaan vierityskehyksessä, kiinnitetyn kielisarakkeen jälkeen?
 * Mitataan pistettä (.dot), jonka käyttäjä näkee, ei solun reunoja: pikselin murto-osan
 * pyöristys vierityksen ääripäissä ei saa näkyä virheenä.
 */
function playingSample(scope: string): Promise<Sample> {
  return pageRef.evaluate(scope => {
    const cell = document.querySelector(scope + ' .practice-board td.playing');
    if (!cell) return null;
    const box = cell.closest('.fret-scroll') as HTMLElement;
    const frame = box.getBoundingClientRect();
    const head = box.querySelector('tbody th')!.getBoundingClientRect().width;
    const r = (cell.querySelector('.dot') ?? cell).getBoundingClientRect();
    const button = cell.querySelector('button')!;
    return { visible: r.left >= frame.left + head - 1 && r.right <= frame.left + box.clientWidth + 1,
      gone: r.right <= frame.left + head || r.left >= frame.left + box.clientWidth,
      key: button.dataset.string + ':' + button.dataset.fret, scrollLeft: Math.round(box.scrollLeft), scrollY: Math.round(scrollY) };
  }, scope);
}
/** Tabulatuurin soivan sarakkeen näkyvyys omassa vierityskehyksessään. */
function tabSample(): Promise<Sample> {
  return pageRef.evaluate(() => {
    const cell = document.querySelector('td.melody-playing');
    if (!cell) return null;
    const box = cell.closest('.melody-tab-scroll') as HTMLElement;
    const frame = box.getBoundingClientRect(), r = cell.getBoundingClientRect();
    return { visible: r.left >= frame.left - 1 && r.right <= frame.left + box.clientWidth + 1,
      gone: r.right <= frame.left || r.left >= frame.left + box.clientWidth,
      key: String([...cell.parentElement!.children].indexOf(cell)), scrollLeft: Math.round(box.scrollLeft), scrollY: Math.round(scrollY) };
  });
}
let pageRef: Page;
async function collect(sample: () => Promise<Sample>, ms: number, every = 120) {
  const out: NonNullable<Sample>[] = [];
  const end = Date.now() + ms;
  while (Date.now() < end) { const s = await sample(); if (s) out.push(s); await pageRef.waitForTimeout(every); }
  return out;
}

async function openPentatonic(page: Page) {
  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
  await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
}
async function openModes(page: Page) {
  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
  await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
}
async function openNooa(page: Page, tab = false) {
  // Moodipolun eteneminen tallentuu: jokainen kierros alkaa ensimmäisestä vaiheesta.
  await page.goto('/kitaraharjoittelija.html');
  await page.evaluate(() => localStorage.clear());
  await openModes(page);
  await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
  const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
  await melody.locator('summary').click();
  if (tab) await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
  return melody;
}
/**
 * K2:n jälkeen 4–6 nauhan positiot mahtuvat 320 px:n näyttöön kokonaan, joten seurantaa ja
 * käyttäjän omaa vieritystä testataan leveimmällä polun alueella (positiot 1 + 2, nauhat 5–10)
 * 280 px:n näytöllä (esimerkiksi Galaxy Z Fold -kansinäyttö), jossa otelauta yhä vierii.
 */
const NARROWEST = 280;
async function openBridge(page: Page) {
  await page.addInitScript(() => {
    localStorage.setItem('musiikin-kartta:skaalapolku:v1', '4');
    localStorage.setItem('musiikin-kartta:skaalapolku:position-2:v1', '4');
    localStorage.setItem('musiikin-kartta:skaalapolku:bridge-1-2:v1', '0');
    localStorage.setItem('musiikin-kartta:skaalapolku:active-position:v1', 'bridge');
  });
  await openPentatonic(page);
}
const BRIDGE_PLAY = '▶ Toista koko asteikko jatkuvasti';
const BRIDGE_STOP = /■ Pysäytä/;
/** Käyttäjä vierittää kehystä hiiren rullalla (sama keskeytys kuin kosketuksella tai näppäimistöllä). */
async function wheel(page: Page, selector: string, dx: number) {
  const box = page.locator(selector).first();
  await box.scrollIntoViewIfNeeded();
  const r = (await box.boundingBox())!;
  await page.mouse.move(r.x + r.width - 30, r.y + r.height / 2);
  await page.mouse.wheel(dx, 0);
  await page.waitForTimeout(150);
}

test.describe('Soiva sävel pysyy näkyvissä puhelimessa (vähennetty liike: välitön vieritys)', () => {
  // Vähennetty liike asetetaan sivulle suoraan: test.use({ reducedMotion }) ei välity tällä kokoonpanolla.
  test.use({ hasTouch: true });
  test.beforeEach(({ page }) => page.emulateMedia({ reducedMotion: 'reduce' }));
  for (const width of PHONES) {
    test(`${width} px: moodit, pentatoniset positiot ja Ukko Nooa`, async ({ page }) => {
      pageRef = page;
      await page.setViewportSize({ width, height: 800 });

      // Moodit: C-joonisen kertasoitto, alue nauhat 2–5. Ennen korjausta piilossa 8–9/14 näytteessä.
      await openModes(page);
      await page.getByRole('button', { name: '▶ Soita asteikko kerran' }).click();
      const modes = await collect(() => playingSample('.mode-journey'), 2600);
      expect(modes.length).toBeGreaterThan(8);
      expect(new Set(modes.map(s => s.key)).size, 'useita eri säveliä').toBeGreaterThan(3);
      expect(modes.filter(s => !s.visible), 'moodien soiva sävel piilossa').toEqual([]);
      expect(new Set(modes.map(s => s.scrollY)).size, 'sivu ei vieri pystysuunnassa').toBe(1);
      // Teksti kertoo sävelen, kielen ja nauhan samasta kohdasta kuin otelauta.
      const status = await page.locator('.mode-journey [role="status"]').filter({ hasText: 'Nyt soi' }).textContent();
      const cell = await page.locator('.mode-journey td.playing button').getAttribute('aria-label');
      expect(status).toMatch(/^\s*Nyt soi: [A-G][#♯b♭]?\d · (ohut E|B|G|D|A|paksu E)-kieli, nauha \d+\.\s*$/);
      const [, stringPart, fret] = status!.match(/· (.+)-kieli, nauha (\d+)/)!;
      expect(cell).toContain(`${stringPart}-kieli`);
      expect(cell).toContain(fret === '0' ? 'vapaa kieli' : `${fret}. nauha`);
      await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();

      // Pentatoninen positio 1 (nauhat 5–8): jatkuva toisto.
      await openPentatonic(page);
      await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
      const penta = await collect(() => playingSample('.scale-journey'), 3000);
      expect(new Set(penta.map(s => s.key)).size).toBeGreaterThan(3);
      expect(penta.filter(s => !s.visible), 'pentatonisen soiva sävel piilossa').toEqual([]);
      expect(new Set(penta.map(s => s.scrollY)).size).toBe(1);
      await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();

      // Ukko Nooa: melodian otelauta on kapeampi (kortin sisällä). Ennen korjausta 320 px: 14/14 piilossa.
      const melody = await openNooa(page);
      await melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' }).click();
      const nooa = await collect(() => playingSample('.melody-practice'), 3000);
      expect(nooa.length).toBeGreaterThan(8);
      expect(nooa.filter(s => !s.visible), 'melodian soiva sävel piilossa').toEqual([]);
    });
  }

  test('pentatoninen positio 2 ja positioiden yhdistäminen 280 ja 320 px', async ({ page }) => {
    pageRef = page;
    for (const width of [NARROWEST, 320]) {
    await page.setViewportSize({ width, height: 800 });
    for (const [active, button, progress] of [['2', '▶ Toista asteikkoa jatkuvasti', '0'], ['bridge', '▶ Toista koko asteikko jatkuvasti', '0']] as const) {
      await page.addInitScript(([a, p]) => {
        localStorage.setItem('musiikin-kartta:skaalapolku:v1', '4');
        localStorage.setItem('musiikin-kartta:skaalapolku:position-2:v1', a === '2' ? p : '4');
        localStorage.setItem('musiikin-kartta:skaalapolku:bridge-1-2:v1', '0');
        localStorage.setItem('musiikin-kartta:skaalapolku:active-position:v1', a);
      }, [active, progress]);
      await openPentatonic(page);
      await page.getByRole('button', { name: button }).click();
      const samples = await collect(() => playingSample('.scale-journey'), 3000);
      expect(new Set(samples.map(s => s.key)).size, active).toBeGreaterThan(3);
      expect(samples.filter(s => !s.visible), `${width} ${active}: soiva sävel piilossa`).toEqual([]);
      await page.getByRole('button', { name: /■ Pysäytä/ }).first().click();
    }
    }
  });

  test('tabulatuurin soiva kohta pysyy näkyvissä 320–430 px', async ({ page }) => {
    pageRef = page;
    for (const width of PHONES) {
      await page.setViewportSize({ width, height: 800 });
      const melody = await openNooa(page, true);
      await melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' }).click();
      const tab = await collect(tabSample, 3500);
      expect(new Set(tab.map(s => s.key)).size, `${width}: useita sarakkeita`).toBeGreaterThan(3);
      expect(tab.filter(s => !s.visible), `${width}: tabulatuurin soiva kohta piilossa`).toEqual([]);
      await melody.getByRole('button', { name: '■ Pysäytä melodia' }).click();
    }
  });
});

test.describe('Käyttäjän oma vieritys saa tilapäisen etusijan', () => {
  test.beforeEach(({ page }) => page.emulateMedia({ reducedMotion: 'reduce' }));

  test('otelauta: vieritys pysyy käyttäjän valitsemassa kohdassa, ja seuranta palaa tauon jälkeen', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: NARROWEST, height: 800 });
    await openBridge(page);
    await page.getByRole('button', { name: BRIDGE_PLAY }).click();
    await page.waitForTimeout(500);
    // Käyttäjä vierittää otelaudan oikeaan reunaan, jolloin osa soivista sävelistä jää vasemmalle piiloon.
    await wheel(page, '.scale-journey .fret-scroll', 400);
    const chosen = (await playingSample('.scale-journey'))!.scrollLeft;
    expect(chosen).toBeGreaterThan(0);
    const during = await collect(() => playingSample('.scale-journey'), PAUSE_MS - 900);
    expect(new Set(during.map(s => s.key)).size, 'sävel vaihtuu tauon aikana').toBeGreaterThan(2);
    expect(during.every(s => s.scrollLeft === chosen), 'otelauta ei palaa itsestään tauon aikana').toBe(true);
    expect(during.some(s => !s.visible), 'käyttäjä näkee valitsemansa kohdan, vaikka soiva sävel on piilossa').toBe(true);
    // Tauon jälkeen seuranta palaa: soiva sävel tulee näkyviin, ja sen jälkeen se pysyy näkyvissä.
    await page.waitForTimeout(1200);
    const after = await collect(() => playingSample('.scale-journey'), 2500);
    expect(after.filter(s => !s.visible), 'seuranta palasi').toEqual([]);
  });

  test('tabulatuuri: käyttäjän vieritys pysyy, ja seuranta palaa', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: 320, height: 800 });
    const melody = await openNooa(page, true);
    await melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' }).click();
    await page.waitForTimeout(400);
    await wheel(page, '.melody-tab-scroll', 600);
    const chosen = (await tabSample())!.scrollLeft;
    expect(chosen).toBeGreaterThan(0);
    const during = await collect(tabSample, 2500);
    expect(during.every(s => s.scrollLeft === chosen), 'tabulatuuri ei palaa itsestään').toBe(true);
    expect(during.some(s => !s.visible), 'soiva kohta jäi käyttäjän vierityksen vuoksi piiloon').toBe(true);
  });

  test('tauko ja jatkaminen: uusi toisto palauttaa seurannan heti', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: NARROWEST, height: 800 });
    await openBridge(page);
    await page.getByRole('button', { name: BRIDGE_PLAY }).click();
    await page.waitForTimeout(500);
    await wheel(page, '.scale-journey .fret-scroll', 400);
    expect((await page.locator('.scale-journey .fret-scroll').evaluate(el => el.scrollLeft)), 'käyttäjä vieritti').toBeGreaterThan(0);
    await page.getByRole('button', { name: BRIDGE_STOP }).first().click();
    await expect(page.locator('.scale-journey td.playing')).toHaveCount(0);
    // Uusi soittopainallus 0,3 s:n kuluttua: alle 1,5 s ja käyttäjän 4 s tauon aikana. Uuden toiston
    // tunnistus perustuu toistotilaan, ei sävelten väliseen aikarajaan, joten seuranta alkaa heti.
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: BRIDGE_PLAY }).click();
    const samples = await collect(() => playingSample('.scale-journey'), 2000);
    expect(new Set(samples.map(s => s.key)).size).toBeGreaterThan(2);
    expect(samples.filter(s => !s.visible)).toEqual([]);
    await page.getByRole('button', { name: BRIDGE_STOP }).first().click();
  });
});

test.describe('Liikkeen asetus ja työpöytä', () => {
  test('pehmeä vieritys oletuksena, välitön kun käyttäjä on valinnut vähennetyn liikkeen', async ({ browser }) => {
    for (const [motion, expected] of [['no-preference', 'smooth'], ['reduce', 'auto']] as const) {
      const context = await browser.newContext({ viewport: { width: NARROWEST, height: 800 } });
      const page = await context.newPage();
      await page.emulateMedia({ reducedMotion: motion });
      expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(motion === 'reduce');
      pageRef = page;
      await page.addInitScript(() => {
        const w = window as unknown as { __scrolls: string[] };
        w.__scrolls = [];
        const original = Element.prototype.scrollTo;
        Element.prototype.scrollTo = function (this: Element, ...args: unknown[]) {
          const options = args[0] as ScrollToOptions | undefined;
          if (this.classList.contains('fret-scroll') && options && typeof options === 'object') w.__scrolls.push(String(options.behavior));
          return (original as (...a: unknown[]) => void).apply(this, args);
        } as typeof Element.prototype.scrollTo;
      });
      await openBridge(page);
      await page.getByRole('button', { name: BRIDGE_PLAY }).click();
      await expect.poll(() => page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls.length), { timeout: 6000 }).toBeGreaterThan(0);
      if (motion === 'reduce') {
        const behaviors = await page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls);
        expect(new Set(behaviors), motion).toEqual(new Set([expected]));
      } else {
        // Pehmeä vieritys vain osittain näkyvälle sävelelle; kokonaan piilossa oleva tuodaan heti.
        const samples = await collect(() => playingSample('.scale-journey'), 2600, 40);
        const behaviors = await page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls);
        // Kapeassa näkymässä osa siirroista koskee kokonaan piilossa olevaa säveltä, joten välitön ('auto') on oikein.
        expect(behaviors.length, motion).toBeGreaterThan(0);
        expect(behaviors.every(b => b === expected || b === 'auto'), motion).toBe(true);
        expect(samples.filter(s => s.gone), 'soiva sävel ei ole koskaan kokonaan piilossa').toEqual([]);
        // Osittain piilossa enintään pehmeän siirron ajan (noin 0,4 s = 10 peräkkäistä 40 ms:n näytettä).
        let streak = 0, worst = 0;
        for (const s of samples) { streak = s.visible ? 0 : streak + 1; worst = Math.max(worst, streak); }
        expect(worst, 'osittain piilossa olon pisin jakso näytteinä').toBeLessThanOrEqual(10);
      }
      await context.close();
    }
  });

  test('pehmeä vieritys: soiva sävel ei jää kokonaan piiloon (moodit, positio 1, Ukko Nooa, tabulatuuri)', async ({ page }) => {
    pageRef = page;
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    for (const width of [NARROWEST, 320, 360]) {
      await page.setViewportSize({ width, height: 800 });
      await openModes(page);
      await page.getByRole('button', { name: '▶ Soita asteikko kerran' }).click();
      const modes = await collect(() => playingSample('.mode-journey'), 2400, 40);
      expect(modes.filter(s => s.gone), `${width}: moodit`).toEqual([]);
      await openPentatonic(page);
      await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
      const penta = await collect(() => playingSample('.scale-journey'), 2400, 40);
      expect(penta.filter(s => s.gone), `${width}: positio 1`).toEqual([]);
      await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
      const melody = await openNooa(page, true);
      await melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' }).click();
      const board: NonNullable<Sample>[] = [], tab: NonNullable<Sample>[] = [];
      const end = Date.now() + 2400;
      while (Date.now() < end) {
        const b = await playingSample('.melody-practice'), c = await tabSample();
        if (b) board.push(b); if (c) tab.push(c);
        await page.waitForTimeout(40);
      }
      expect(board.filter(s => s.gone), `${width}: Ukko Nooa otelauta`).toEqual([]);
      expect(tab.filter(s => s.gone), `${width}: Ukko Nooa tabulatuuri`).toEqual([]);
    }
  });

  for (const width of [768, 1440]) {
    test(`${width} px: otelauta mahtuu kokonaan, ei vieritä, eikä sen leveys muutu`, async ({ page }) => {
      pageRef = page;
      await page.setViewportSize({ width, height: 900 });
      await openPentatonic(page);
      const before = await page.locator('.scale-journey .fret-scroll').evaluate(el => ({ w: el.clientWidth, sw: el.scrollWidth }));
      expect(before.sw).toBeLessThanOrEqual(before.w);
      await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
      const samples = await collect(() => playingSample('.scale-journey'), 2500);
      expect(samples.every(s => s.visible && s.scrollLeft === 0)).toBe(true);
      expect(new Set(samples.map(s => s.scrollY)).size).toBe(1);
      expect(await page.locator('.scale-journey .fret-scroll').evaluate(el => el.clientWidth)).toBe(before.w);
      await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
      // Moodit: sama alue näkyy kokonaan ilman vieritystä.
      await openModes(page);
      await page.getByRole('button', { name: '▶ Soita asteikko kerran' }).click();
      const modes = await collect(() => playingSample('.mode-journey'), 1500);
      expect(modes.every(s => s.visible && s.scrollLeft === 0)).toBe(true);
    });
  }
});

test.describe('Harjoitustehtävien vihjeet keskitetään edelleen (ei mallisoittoa)', () => {
  test.beforeEach(({ page }) => page.emulateMedia({ reducedMotion: 'reduce' }));

  test('vanha sävelharjoitus 280 px: apupiste ja vastaus tulevat näkyviin otelaudalla', async ({ page }) => {
    pageRef = page;
    // 320 px:ssä nauhat 0–5 mahtuvat K2:n jälkeen kokonaan; keskitys testataan vierivällä otelaudalla.
    await page.setViewportSize({ width: NARROWEST, height: 800 });
    // Kiinteä arvonta: sama kysymysjärjestys joka ajossa.
    await page.addInitScript(() => { let seed = 7; Math.random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646; });
    await page.goto('/kitaraharjoittelija.html?vanha=1');
    await page.getByRole('button', { name: /^Aloita (harjoitus|uusi kierros)$/ }).click();
    const visibleIn = (selector: string) => page.evaluate(selector => {
      const dot = document.querySelector(selector); if (!dot) return null;
      const box = dot.closest('.fret-scroll') as HTMLElement; const f = box.getBoundingClientRect();
      const head = box.querySelector('tbody th')!.getBoundingClientRect().width; const r = dot.getBoundingClientRect();
      return { visible: r.left >= f.left + head - 1 && r.right <= f.left + box.clientWidth + 1, scrollLeft: Math.round(box.scrollLeft), scrollable: box.scrollWidth > box.clientWidth };
    }, selector);
    await page.getByRole('button', { name: 'Näytä vihje', exact: true }).click();
    const anchor = await visibleIn('.practice-board .anchor .dot');
    expect(anchor?.scrollable, 'otelauta on 280 px:ssä vieritettävä').toBe(true);
    expect(anchor?.visible, 'apupiste näkyvissä').toBe(true);
    await page.getByRole('button', { name: 'Näytä vastaus' }).click();
    const answer = await visibleIn('.practice-board .target .dot');
    expect(answer?.visible, 'vastaus näkyvissä').toBe(true);
  });

  test('sävelkorva 280 px: vihjepiste tulee näkyviin', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: NARROWEST, height: 800 });
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    await page.getByRole('button', { name: 'Näytä vihje' }).click();
    const r = await page.evaluate(() => {
      const dot = document.querySelector('.practice-board .anchor .dot')!; const box = dot.closest('.fret-scroll') as HTMLElement;
      const f = box.getBoundingClientRect(); const head = box.querySelector('tbody th')!.getBoundingClientRect().width; const d = dot.getBoundingClientRect();
      return d.left >= f.left + head - 1 && d.right <= f.left + box.clientWidth + 1;
    });
    expect(r).toBe(true);
  });
});

// ---------------------------------------------------------------------------------------------
// Mobiiliauditoinnin K2–K5 ja K7. Mittaukset tehdään näytöllä näkyvistä elementeistä.
// ---------------------------------------------------------------------------------------------

const PENTA_STORAGE = {
  'musiikin-kartta:skaalapolku:v1': '4', 'musiikin-kartta:skaalapolku:position-2:v1': '4',
  'musiikin-kartta:skaalapolku:bridge-1-2:v1': '4',
};
/** Otelaudan mitat: mahtuuko koko nauha-alue kehykseen, ja ovatko solut ja merkinnät ennallaan. */
function boardFit(page: Page, scope: string) {
  return page.evaluate(scope => {
    const box = document.querySelector(scope + ' .fret-scroll') as HTMLElement;
    const head = box.querySelector('tbody th') as HTMLElement;
    const cell = box.querySelector('tbody tr:not(.unused) td') as HTMLElement;
    const dot = box.querySelector('.dot') as HTMLElement | null;
    const frame = box.getBoundingClientRect();
    return {
      fits: box.scrollWidth <= box.clientWidth + 1, clientWidth: box.clientWidth, scrollWidth: box.scrollWidth,
      head: Math.round(head.getBoundingClientRect().width), cellW: Math.round(cell.getBoundingClientRect().width),
      cellH: Math.round(cell.getBoundingClientRect().height), dotFont: dot ? parseFloat(getComputedStyle(dot).fontSize) : null,
      dotW: dot ? Math.round(dot.getBoundingClientRect().width) : null,
      headText: head.innerText.trim(), headLabel: head.getAttribute('aria-label'),
      pageOverflow: document.documentElement.scrollWidth - innerWidth, frameLeft: Math.round(frame.left),
    };
  }, scope);
}

test.describe('K2: otelauta mahtuu kapeaan näyttöön', () => {
  for (const width of PHONES) {
    test(`${width} px: pentatoniset positiot 1–3, yhdistäminen ja melodia mahtuvat ilman vieritystä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      // Kunkin position ensimmäinen vaihe (otelauta näkyy), aiemmat vaiheet harjoiteltuina.
      const setups: Record<string, Record<string, string>> = {
        '1': { 'musiikin-kartta:skaalapolku:v1': '0' },
        '2': { 'musiikin-kartta:skaalapolku:position-2:v1': '0' },
        '3': { 'musiikin-kartta:skaalapolku:position-3:v1': '0' },
        bridge: { 'musiikin-kartta:skaalapolku:bridge-1-2:v1': '0' },
      };
      for (const active of ['1', '2', '3', 'bridge']) {
        await page.addInitScript(([storage, a]) => {
          localStorage.clear();
          for (const [k, v] of Object.entries(storage)) localStorage.setItem(k, v);
          localStorage.setItem('musiikin-kartta:skaalapolku:active-position:v1', a);
        }, [{ ...PENTA_STORAGE, ...setups[active] }, active] as const);
        await openPentatonic(page);
        const fit = await boardFit(page, '.scale-journey .journey-lesson');
        expect(fit.fits, `${active}: kaikki nauhat näkyvät (${fit.scrollWidth}/${fit.clientWidth})`).toBe(true);
        expect(fit.head, 'kielisarake kapea').toBeLessThanOrEqual(34);
        expect(fit.headText, 'vain kielen kirjain näkyy').toMatch(/^[eBGDAE]$/);
        expect(fit.headLabel, 'ruudunlukija saa koko nimen').toMatch(/kieli: /);
        expect(fit.cellW, 'nauhan leveys vähintään 40 px').toBeGreaterThanOrEqual(40);
        expect(fit.cellH, 'rivikorkeus ennallaan kosketukselle').toBeGreaterThanOrEqual(46);
        expect(fit.dotFont, 'sävelmerkintöjen tekstikoko ennallaan').toBe(13);
        expect(fit.pageOverflow, 'sivu ei vieri vaakasuunnassa').toBeLessThanOrEqual(0);
      }
      // Melodian otelauta ei kavennu sisäkkäisten reunusten vuoksi.
      await page.addInitScript(() => localStorage.clear());
      await openPentatonic(page);
      await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
      const melody = page.getByRole('region', { name: /Melodiaharjoitus: Wayfaring Stranger/ });
      await melody.locator('summary').click();
      await expect(melody.locator('.fret-scroll')).toBeVisible();
      const fit = await boardFit(page, '.melody-practice');
      expect(fit.fits, `melodian otelauta ${fit.scrollWidth}/${fit.clientWidth}`).toBe(true);
      expect(fit.clientWidth, 'melodian otelaudalla lähes koko näytön leveys').toBeGreaterThanOrEqual(width - 30);
    });
  }

  test('320 px: C-soinnun kaikki merkinnät näkyvät, ja sävelkorvan nauhat 0–5 mahtuvat', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    await page.addInitScript(() => { Math.random = () => 0.999999; });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
    const chord = await boardFit(page, '.chord-journey');
    expect(chord.fits, 'sointuotteen nauhat 0–3 näkyvät').toBe(true);
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    const ear = await boardFit(page, '.note-journey');
    expect(ear.fits, `sävelkorvan nauhat 0–5 (${ear.scrollWidth}/${ear.clientWidth})`).toBe(true);
  });

  for (const width of [768, 1440]) {
    test(`${width} px: työpöydän ja tabletin kielisarake ennallaan`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await openPentatonic(page);
      const fit = await boardFit(page, '.scale-journey .journey-lesson');
      expect(fit.head).toBe(105);
      expect(fit.headText).toMatch(/^1 · e\s*ohuin$/);
      expect(fit.fits).toBe(true);
    });
  }
});

/** WCAG-kontrasti selaimen laskemista väreistä (läpinäkymätön tausta). */
function contrastOf(page: Page, selector: string, backgroundSelector?: string) {
  return page.evaluate(([selector, bgSel]) => {
    const rgb = (c: string) => c.match(/[\d.]+/g)!.slice(0, 3).map(Number);
    const lum = (c: string) => { const [r, g, b] = rgb(c).map(v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }); return .2126 * r + .7152 * g + .0722 * b; };
    const el = document.querySelector(selector) as HTMLElement;
    let bgEl: HTMLElement | null = bgSel ? document.querySelector(bgSel) as HTMLElement : el;
    while (bgEl && /rgba\(0, 0, 0, 0\)|transparent/.test(getComputedStyle(bgEl).backgroundColor)) bgEl = bgEl.parentElement;
    const fg = getComputedStyle(el).color, bg = getComputedStyle(bgEl ?? document.body).backgroundColor;
    const [a, b] = [lum(fg), lum(bg)].sort((x, y) => y - x);
    return { ratio: Math.round((a + .05) / (b + .05) * 100) / 100, fg, bg };
  }, [selector, backgroundSelector ?? null] as const);
}

test.describe('K3: vaalean teeman kontrastit', () => {
  for (const scheme of ['light', 'dark'] as const) {
    test(`${scheme}: soiva tahti, painettu painike hover-tilassa ja virheellinen valinta`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.setViewportSize({ width: 1000, height: 900 });
      await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
      await page.locator('details.song-chart-collapse > summary').click();
      for (const part of ['.song-measure.active .song-measure-number', '.song-measure.active strong.now']) {
        const c = await contrastOf(page, part, '.song-measure.active');
        expect(c.ratio, `${part}: ${c.fg} / ${c.bg}`).toBeGreaterThanOrEqual(4.5);
      }
      // Painettu painike hiiren alla: tausta ja teksti pysyvät tummana ja vaaleana.
      await openPentatonic(page);
      const play = page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' });
      await play.click();
      const stop = page.getByRole('button', { name: '■ Pysäytä asteikon toisto' });
      await stop.hover();
      const pressed = await contrastOf(page, '.scale-journey .action-row button[aria-pressed="true"]');
      expect(pressed.ratio, `${pressed.fg} / ${pressed.bg}`).toBeGreaterThanOrEqual(4.5);
      await stop.click();
      // Tavallisen painikkeen hover-tila.
      await play.hover();
      const normal = await contrastOf(page, '.scale-journey .action-row button');
      expect(normal.ratio, `${normal.fg} / ${normal.bg}`).toBeGreaterThanOrEqual(4.5);
    });
  }

  test('light: virheellisen valinnan merkintä erottuu tummalla otelaudalla', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.setViewportSize({ width: 1000, height: 900 });
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    await page.evaluate(() => {
      const cell = document.querySelector('.practice-board td:not(.open-fret)')!;
      cell.classList.add('wrong'); cell.querySelector('button')!.innerHTML = '<span class="dot">F</span>';
    });
    const c = await contrastOf(page, '.practice-board td.wrong .dot');
    expect(c.ratio, `${c.fg} / ${c.bg}`).toBeGreaterThanOrEqual(4.5);
  });
});

test.describe('K4: kappaleharjoittelu puhelimessa', () => {
  test('390 × 844: soitin ja soiva sointu samassa ruudussa, asetukset avattavissa', async ({ browser }) => {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const page = await context.newPage();
    await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
    await page.locator('details.song-chart-collapse > summary').click();
    const settings = page.locator('details.song-chart-settings');
    await expect(settings).not.toHaveAttribute('open', '');
    await expect(settings.locator('> summary')).toContainText('Kaikki soinnut näkyvät');
    const m = await page.evaluate(() => {
      const top = (el: Element | null) => el!.getBoundingClientRect().top + scrollY;
      const play = document.querySelector('.song-play')!, chord = document.querySelector('.song-current-chord')!;
      const bars = document.querySelector('.song-bar-grid')!;
      const range = document.querySelector('.song-player-controls input[type="range"]')!;
      return { span: bars.getBoundingClientRect().bottom + scrollY - top(play), chordBeforeSettings: top(chord) < top(document.querySelector('.song-chart-settings')),
        range: range.getBoundingClientRect().height, svg: document.querySelector('.song-scale-board svg')?.getBoundingClientRect().width ?? null };
    });
    expect(m.span, 'soittopainikkeesta soivan osan tahtien loppuun').toBeLessThanOrEqual(844);
    expect(m.chordBeforeSettings).toBe(true);
    expect(m.range, 'kelausliukusäätimen kosketusalue').toBeGreaterThanOrEqual(44);
    await settings.locator('> summary').click();
    await page.getByRole('combobox', { name: 'Harjoitustaso' }).selectOption('1');
    await expect(settings.locator('> summary')).toContainText('Taso 1 · piilossa 2/6');
    // Asteikkokuva ei pienene lukukelvottomaksi: vieritettävä 680 px:n kehys.
    await page.locator('details.song-scales-collapse > summary').click();
    const svg = await page.locator('.song-scale-board svg').evaluate(el => el.getBoundingClientRect().width);
    expect(svg).toBeGreaterThanOrEqual(680);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
    await context.close();
  });
});

test.describe('K5 ja K7: vaaka-asento ja kosketuskohteet', () => {
  for (const [width, height] of [[844, 390], [740, 360]] as const) {
    test(`${width} × ${height}: soittopainike ja koko mallisoiton otelauta mahtuvat samaan ruutuun`, async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width, height }, isMobile: true, hasTouch: true });
      const page = await context.newPage();
      await openPentatonic(page);
      const m = await page.evaluate(() => {
        const button = [...document.querySelectorAll('.scale-journey .action-row button')].find(b => /Toista asteikkoa/.test(b.textContent!))!;
        const board = document.querySelector('.scale-journey .practice-board')!;
        const nav = [...document.querySelectorAll('.main-nav li a')].map(a => a.getBoundingClientRect().height);
        const cell = board.querySelector('td')!.getBoundingClientRect().height;
        return { span: board.getBoundingClientRect().bottom - button.getBoundingClientRect().top, nav: Math.min(...nav), cell };
      });
      expect(m.span, 'painikkeen yläreunasta otelaudan alareunaan').toBeLessThanOrEqual(height);
      expect(m.nav, 'päävalikon linkit kosketuslaitteella').toBeGreaterThanOrEqual(44);
      expect(m.cell, 'mallisoiton otelaudan rivi').toBeGreaterThanOrEqual(34);
      // Vastattava otelauta (sävelkorva) pitää täyden kosketuskorkeuden.
      await page.goto('/kitaraharjoittelija.html?polku=otelauta');
      const answer = await page.locator('.note-journey .practice-board td').first().evaluate(el => el.getBoundingClientRect().height);
      expect(answer).toBeGreaterThanOrEqual(46);
      await context.close();
    });
  }
});
