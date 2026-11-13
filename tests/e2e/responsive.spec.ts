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

  test('pentatoninen positio 2 ja positioiden yhdistäminen 320 px', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: 320, height: 800 });
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
      expect(samples.filter(s => !s.visible), `${active}: soiva sävel piilossa`).toEqual([]);
      await page.getByRole('button', { name: /■ Pysäytä/ }).first().click();
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
    await page.setViewportSize({ width: 320, height: 800 });
    await openPentatonic(page);
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
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
    await page.setViewportSize({ width: 320, height: 800 });
    await openPentatonic(page);
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    await page.waitForTimeout(500);
    await wheel(page, '.scale-journey .fret-scroll', 400);
    await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
    await expect(page.locator('.scale-journey td.playing')).toHaveCount(0);
    // Uusi soittopainallus 0,3 s:n kuluttua: alle 1,5 s ja käyttäjän 4 s tauon aikana. Uuden toiston
    // tunnistus perustuu toistotilaan, ei sävelten väliseen aikarajaan, joten seuranta alkaa heti.
    await page.waitForTimeout(300);
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    const samples = await collect(() => playingSample('.scale-journey'), 2000);
    expect(new Set(samples.map(s => s.key)).size).toBeGreaterThan(2);
    expect(samples.filter(s => !s.visible)).toEqual([]);
    await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
  });
});

test.describe('Liikkeen asetus ja työpöytä', () => {
  test('pehmeä vieritys oletuksena, välitön kun käyttäjä on valinnut vähennetyn liikkeen', async ({ browser }) => {
    for (const [motion, expected] of [['no-preference', 'smooth'], ['reduce', 'auto']] as const) {
      const context = await browser.newContext({ viewport: { width: 320, height: 800 } });
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
      await openModes(page);
      await page.getByRole('button', { name: '▶ Soita asteikko kerran' }).click();
      await expect.poll(() => page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls.length), { timeout: 4000 }).toBeGreaterThan(0);
      if (motion === 'reduce') {
        const behaviors = await page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls);
        expect(new Set(behaviors), motion).toEqual(new Set([expected]));
      } else {
        // Pehmeä vieritys vain osittain näkyvälle sävelelle; kokonaan piilossa oleva tuodaan heti.
        const samples = await collect(() => playingSample('.mode-journey'), 2600, 40);
        const behaviors = await page.evaluate(() => (window as unknown as { __scrolls: string[] }).__scrolls);
        // 320 px:ssä lähes jokainen siirto koskee kokonaan piilossa olevaa säveltä, joten välitön ('auto') on oikein.
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
    for (const width of [320, 360]) {
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

  test('vanha sävelharjoitus 320 px: apupiste ja vastaus tulevat näkyviin otelaudalla', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: 320, height: 800 });
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
    expect(anchor?.scrollable, 'otelauta on 320 px:ssä vieritettävä').toBe(true);
    expect(anchor?.visible, 'apupiste näkyvissä').toBe(true);
    await page.getByRole('button', { name: 'Näytä vastaus' }).click();
    const answer = await visibleIn('.practice-board .target .dot');
    expect(answer?.visible, 'vastaus näkyvissä').toBe(true);
  });

  test('sävelkorva 320 px: vihjepiste tulee näkyviin', async ({ page }) => {
    pageRef = page;
    await page.setViewportSize({ width: 320, height: 800 });
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
