import { expect, test, type Page } from '@playwright/test';
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
import * as melodia from '../../assets/melodia-ydinopinnot.js';

// #116, vaihe 2: Sävelkorva ja melodia -aihesivun Ydinopinnot ja aiempien 14 sisällön säilyminen.
// Sivulle syötetään sama siemennetty satunnaislukugeneraattori kuin testille, joten testi laskee
// moduulin omilla funktioilla saman melodian, palautteen ja tason kuin sivu. Äänitestit lukevat
// Web Audion ajoituksen; ne eivät todista äänenlaatua, iPhone/Safari-toistoa, oppijan sävelkorvaa
// eivätkä soittotaitoa oikealla kitaralla.

type Melody = string[];
const topicPath = '/oppi/korva/index.html';
const readingKey = 'musiikin-kartta:luvut';
const lessons = [
  ['ylos-alas-vai-sama', 'Ylös, alas vai sama?'],
  ['kotiin-vai-kesken', 'Kotiin vai kesken?'],
  ['kuule-ja-etsi-kitaralta', 'Kuule ja etsi kitaralta'],
] as const;
// Aiemmat 14 sisältöä: osoite ja suoritustunniste kuten betassa ennen tätä muutosta.
const legacy = [
  ['musiikki-on-kieli', 'musiikki-on-kieli'], ['taydenna-fraasi', 'harjoitus:taydenna-fraasi'],
  ['savellajin-tunnistaminen', 'savellajin-tunnistaminen'], ['vaihda-kotisavelta', 'harjoitus:vaihda-kotisavelta'],
  ['intervallit', 'intervallit'], ['mika-aste-soi', 'harjoitus:mika-aste-soi'],
  ['etsi-jalkimmainen-savel', 'harjoitus:etsi-jalkimmainen-savel'], ['basso', 'basso'],
  ['kuuntele-bassolinja', 'harjoitus:kuuntele-bassolinja'], ['soinnut', 'soinnut'],
  ['kumpi-on-molli', 'harjoitus:kumpi-on-molli'], ['tunnista-sointutyyppi', 'harjoitus:tunnista-sointutyyppi'],
  ['septimi-korvalla', 'septimi-korvalla'], ['kolme-c-sointua', 'harjoitus:kolme-c-sointua'],
] as const;

declare global {
  interface Window {
    __audioLog: { type: 'start' | 'stop'; when: number; at: number; duration?: number }[];
  }
}

async function recordAudio(page: Page) {
  await page.addInitScript(() => {
    window.__audioLog = [];
    const start = AudioBufferSourceNode.prototype.start;
    const stop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.start = function (when = 0, ...rest: number[]) {
      window.__audioLog.push({ type: 'start', when, at: this.context.currentTime, duration: this.buffer?.duration });
      return start.call(this, when, ...rest);
    };
    AudioBufferSourceNode.prototype.stop = function (when = 0) {
      window.__audioLog.push({ type: 'stop', when, at: this.context.currentTime });
      return stop.call(this, when);
    };
  });
}

// mulberry32: sama siemen sivulla ja testissä → sama satunnaislukujono.
function mulberry(seed: number) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}
const seedPage = (page: Page, seed: number) => page.addInitScript(([source, start]) => {
  Math.random = new Function(`return (${source})(${start})`)();
}, [mulberry.toString(), seed] as const);

const starts = (page: Page) => page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'start'));
// Pysäytä-teksti vaihtuu heti painalluksesta; äänet ajastetaan vasta, kun näytteet on ladattu.
const scheduled = async (page: Page, count: number) => {
  await expect.poll(async () => (await starts(page)).length).toBe(count);
  return starts(page);
};
const clearLog = (page: Page) => page.evaluate(() => { window.__audioLog = []; });
const close = (actual: number, expected: number) => expect(Math.abs(actual - expected)).toBeLessThan(0.002);
const storage = (page: Page) => page.evaluate(key => localStorage.getItem(key), readingKey);
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
const parts = (page: Page, kind: string) => {
  const section = page.locator(`[data-melodiaharjoitus="${kind}"]`);
  return {
    section,
    listen: section.locator('[data-melodia-kuuntele]'),
    next: section.locator('[data-melodia-seuraava]'),
    task: section.locator('[data-melodia-tehtava]'),
    info: section.locator('[data-melodia-taso]'),
    status: section.locator('[data-melodia-tila]'),
    feedback: section.locator('[data-melodia-palaute]'),
    reveal: section.locator('[data-melodia-kaari]'),
    shape: section.locator('[data-melodia-muoto]'),
    dots: section.locator('[data-melodia-muoto] svg.melodia-muoto-kuva circle'),
    cards: section.locator('ol.melodia-vertailu > li'),
    heard: section.locator('ol.melodia-vertailu .melodia-kuului'),
    yours: section.locator('ol.melodia-vertailu .melodia-sina'),
    check: section.locator('[data-melodia-tarkista]'),
  };
};
const labels = (locator: import('@playwright/test').Locator) => locator.evaluateAll(all => all.map(node => node.getAttribute('aria-label')));
// Suuntakuvakkeen viiva: [x1, y1, x2, y2]. SVG:ssä pienempi y on ylempänä.
const iconLines = (locator: import('@playwright/test').Locator) => locator.evaluateAll(all => all.map(node => {
  const line = node.querySelector('.melodia-suunta-kuva line');
  return line ? ['x1', 'y1', 'x2', 'y2'].map(name => Number(line.getAttribute(name))) : null;
}));
const iconOf = (value: string) => { const { from, to } = melodia.directionPoints(value); return [...from, ...to]; };
const answerContour = async (page: Page, directions: string[]) => {
  for (const value of directions) await page.locator(`[data-suunta="${value}"]`).click();
};
const tap = async (page: Page, melody: Melody) => {
  for (const id of melody) await page.locator(`[data-paikka="${id}"]`).click();
};

test.describe('aihesivu', () => {
  test('Ydinopinnot ensin, kolme harjoitusta; aiemmat 14 suljettuna neljässä ryhmässä', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.getByRole('heading', { level: 1, name: 'Sävelkorva ja melodia' })).toBeVisible();
    await expect(page.locator('.lead')).toHaveText(/^Melodia nousee, laskee ja palaa kotiin\./);
    const units = page.locator('details.study-unit');
    await expect(units).toHaveCount(2);
    expect(await units.evaluateAll(all => all.map(node => node.id))).toEqual(['ydinopinnot', 'aiemmat']);
    const core = page.locator('#ydinopinnot');
    const earlier = page.locator('#aiemmat');
    await expect(core).not.toHaveAttribute('open');
    await expect(earlier).not.toHaveAttribute('open');
    await expect(core.locator(':scope > summary [data-unit-progress]')).toHaveText('0/3 kokeiltu');
    await expect(earlier.locator(':scope > summary [data-study-total]')).toHaveText('0/14 aiemmista sisällöistä tehty');

    await core.locator(':scope > summary').click();
    await expect(core.locator('.study-start')).toHaveText('Aloita tästä');
    const titles = core.locator('details.study-inline .study-title');
    await expect(titles).toHaveText(lessons.map(([, title]) => title));
    await expect(core.locator('[data-study-attempt-status]')).toHaveText(['Kokeilematta', 'Kokeilematta', 'Kokeilematta']);

    await earlier.locator(':scope > summary').click();
    await expect(earlier.locator('.study-group h2')).toHaveText([
      'Kotisävel ja fraasin loppu', 'Asteet ja sävelvälit korvalla', 'Bassolinjan kuuleminen', 'Duuri, molli ja septimi korvalla',
    ]);
    const links = earlier.locator('.study-choice');
    expect(await links.evaluateAll(all => all.map(a => a.getAttribute('href')))).toEqual(legacy.map(([slug]) => `${slug}.html`));
    await expect(earlier.locator('.study-number')).toHaveText(legacy.map((_, index) => String(index + 1).padStart(2, '0')));
    // Työkalut ja Tutki myös säilyvät.
    await expect(page.getByRole('link', { name: 'Ensikeikka · etsi melodialle lopetus' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Riffikaiku · matki neljän sävelen riffi' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sävelet ja intervallit' })).toBeVisible();
  });

  test('vanhat merkinnät säilyvät eivätkä kuittaa uusia; uusi merkintä tallentuu omaan tunnisteeseensa', async ({ page }) => {
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    await page.getByRole('button', { name: 'Merkitse kokeilluksi' }).click();
    await expect(page.getByRole('button', { name: '✓ Kokeiltu' })).toBeVisible();
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(['harjoitus:ylos-alas-vai-sama']);
    await page.goto(topicPath);
    await expect(page.locator('#ydinopinnot [data-unit-progress]')).toHaveText('1/3 kokeiltu');
    await expect(page.locator('#aiemmat [data-study-total]')).toHaveText('0/14 aiemmista sisällöistä tehty');

    const old = legacy.map(([, id]) => id);
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids)), [readingKey, old] as const);
    await page.reload();
    await expect(page.locator('#aiemmat [data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');
    await expect(page.locator('#ydinopinnot [data-unit-progress]')).toHaveText('0/3 kokeiltu');
    await page.locator('#aiemmat > summary').click();
    for (const [slug] of legacy) await expect(page.locator(`#valinta-${slug} .study-status`)).toHaveText('✓ Tehty');
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(old);
    await page.goto('/index.html#aihe-korva');
    await expect(page.locator('#aihe-korva .topic-status')).toHaveText('✓ Aiemmat sisällöt tehty');
  });

  test('aiemmat 14 osoitetta, tunnistetta ja Edellinen/Seuraava-ketju toimivat ennallaan', async ({ page }) => {
    // 14 sivua peräkkäin; WebKit odottaa load-tapahtumassa myös äänitteiden latausta.
    test.setTimeout(90000);
    for (const [index, [slug, id]] of legacy.entries()) {
      const response = await page.goto(`/oppi/korva/${slug}.html`, { waitUntil: 'domcontentloaded' });
      expect(response?.status(), slug).toBe(200);
      await expect(page.locator('main')).toHaveAttribute('data-study-item', id);
      await expect(page.locator('.study-meta').first()).toContainText(`${String(index + 1).padStart(2, '0')} / 14`);
      await expect(page.locator('.study-back')).toHaveAttribute('href', 'index.html');
      const next = page.locator('.study-steps--top a[rel="next"]');
      await expect(next).toHaveAttribute('href', index < legacy.length - 1 ? `${legacy[index + 1][0]}.html` : '../otelauta/index.html?polku=aihe-otelauta');
    }
  });
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('kaikki 14 aiempaa ja 3 uutta sisältöä löytyvät linkkeinä; ääniohjaimet eivät näy', async ({ page }) => {
    await page.goto(topicPath);
    const hrefs = await page.locator('#aiemmat .study-choice').evaluateAll(all => all.map(a => a.getAttribute('href')));
    expect(hrefs).toEqual(legacy.map(([slug]) => `${slug}.html`));
    for (const [slug] of lessons) {
      await expect(page.locator(`#ydinopinnot a[href="${slug}.html"]`)).toHaveText('Avaa omalla sivullaan');
    }
    for (const [slug, title] of lessons) {
      await page.goto(`/oppi/korva/${slug}.html`);
      await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
      await expect(page.locator('[data-melodia-tila]')).toHaveText('Ääniesimerkki tarvitsee JavaScriptin ja selaimen äänituen.');
      for (const controls of await page.locator('[data-melodia-ohjaimet], [data-melodia-tehtava]').all()) await expect(controls).toBeHidden();
      await expect(page.getByRole('heading', { name: 'Mitä opit?' })).toBeVisible();
      await expect(page.getByRole('link', { name: /Takaisin aiheeseen/ })).toHaveAttribute('href', `index.html#valinta-${slug}`);
    }
  });
});

test.describe('01 · Ylös, alas vai sama?', () => {
  test('alussa vain Kuuntele; helppo ensimmäinen tehtävä, palaute ja muoto; kaksi oikeaa pidentää melodiaa', async ({ page }) => {
    await recordAudio(page);
    await seedPage(page, 11);
    const random = mulberry(11);
    const levels = melodia.LEVELS.suunta;
    const first: Melody = melodia.freshMelody(levels[0], null, random);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const p = parts(page, 'suunta');
    // Ensimmäinen näkymä: otsikko, yksi ohjelause ja yksi painike.
    await expect(p.section.locator('button:visible')).toHaveCount(1);
    await expect(p.listen).toHaveText('▶ Kuuntele');
    await expect(p.task).toBeHidden();
    await expect(p.status).toHaveText('');

    await p.listen.click();
    await expect(p.listen).toHaveText('■ Pysäytä');
    const log = await scheduled(page, 3);
    log.forEach((entry, index) => close(entry.when - log[0].when, index * melodia.TIMING.suunta.ioi));
    await expect(p.task).toBeVisible();
    await expect(p.info).toHaveText('3 säveltä · 2 vaihtoa');
    // Vastaus ei näy ennen tarkistusta.
    await expect(p.reveal).toBeHidden();
    await expect(p.dots).toHaveCount(0);
    await expect(p.section.locator('ol.melodia-vertailu')).toHaveCount(0);
    const slots = p.section.locator('[data-suunta-vastaus] li');
    expect(await labels(slots)).toEqual(['Vaihto 1: ei vielä valittu', 'Vaihto 2: ei vielä valittu']);
    await expect(p.check).toBeHidden();
    // Vastauspainikkeiden kuvat: ylös = loppupiste ylempänä, alas = alempana, sama = samalla tasolla.
    expect(await iconLines(page.locator('[data-suunta]'))).toEqual(['ylos', 'alas', 'sama'].map(iconOf));

    const right = melodia.contourOf(first);
    await answerContour(page, right);
    // Vastausketju käyttää samaa kuvaa kuin painikkeet.
    expect(await iconLines(slots)).toEqual(right.map(iconOf));
    expect(await labels(slots)).toEqual(right.map((value: string, index: number) => `Vaihto ${index + 1}: ${melodia.DIRECTION_LABELS[value]}`));
    await expect(page.locator('[data-suunta="ylos"]')).toHaveAttribute('aria-disabled', 'true');
    await p.check.click();
    await expect(p.feedback).toHaveText(melodia.contourFeedback(first, right));
    await expect(p.feedback).toHaveText('Oikein! Kaikki 2 vaihtoa osuivat.');
    // Melodian muoto: kolme pistettä oikeilla korkeuksilla, ei virheviivoja; vertailussa sama kuva.
    await expect(p.dots).toHaveCount(3);
    const ys = await p.dots.evaluateAll(all => all.map(node => Number(node.getAttribute('cy'))));
    const midis = first.map(id => melodia.NOTES[id].midi);
    ys.slice(1).forEach((y, index) => expect(Math.sign(ys[index] - y)).toBe(Math.sign(midis[index + 1] - midis[index])));
    await expect(p.section.locator('.is-virhe')).toHaveCount(0);
    expect(await iconLines(p.heard)).toEqual(right.map(iconOf));
    expect(await iconLines(p.yours)).toEqual(right.map(iconOf));
    await expect(p.yours.locator('.melodia-merkki')).toHaveText(['✓', '✓']);
    await p.section.getByText('Näytä sävelet ja kitaran paikat').click();
    await expect(p.section.locator('[data-melodia-savelet] li')).toHaveText(first.map((id, index) => `${index + 1}. ${melodia.NOTES[id].name} · ${melodia.position(id)}`));
    await expect(p.check).toHaveAttribute('aria-disabled', 'true');

    // Seuraava: uusi melodia soi heti. Väärä vastaus merkitään kohtaan, jossa virhe tapahtui.
    const second: Melody = melodia.freshMelody(levels[0], first, random);
    await clearLog(page);
    await p.next.click();
    await expect(p.listen).toHaveText('■ Pysäytä');
    await scheduled(page, 3);
    await expect(p.next).toBeHidden();
    await expect(p.reveal).toBeHidden();
    const wrong = melodia.contourOf(second);
    wrong[0] = wrong[0] === 'ylos' ? 'alas' : 'ylos';
    await answerContour(page, wrong);
    await p.check.click();
    await expect(p.feedback).toHaveText(melodia.contourFeedback(second, wrong));
    await expect(p.feedback).toHaveText(/^1\/2 oikein\. Vaihto 1: kuului /);
    await expect(p.feedback).toHaveClass(/is-error/);
    // Kuultu rivi näyttää oikean suunnan, oma rivi valitun; vain oma rivi merkitään ✗:llä.
    expect(await iconLines(p.heard)).toEqual(melodia.contourOf(second).map(iconOf));
    expect(await iconLines(p.yours)).toEqual(wrong.map(iconOf));
    await expect(p.yours.locator('.melodia-merkki')).toHaveText(['✗', '✓']);
    await expect(p.cards.nth(0)).toHaveClass(/is-virhe/);
    await expect(p.heard.nth(0).locator('.melodia-merkki')).toHaveCount(0);
    await expect(p.shape.locator('line.is-virhe')).toHaveCount(1);
    await expect(p.shape.locator('svg text')).toHaveText('✗ 1');

    // Kaksi peräkkäistä oikeaa → neljän sävelen melodiat.
    let previous = second;
    for (const round of [1, 2]) {
      const melody: Melody = melodia.freshMelody(levels[0], previous, random);
      await p.next.click();
      await expect(p.task).toBeVisible();
      await answerContour(page, melodia.contourOf(melody));
      await p.check.click();
      await expect(p.feedback).toHaveText(melodia.contourFeedback(melody, melodia.contourOf(melody)) + (round === 2 ? ' Seuraavaksi hieman vaikeampi.' : ''));
      previous = melody;
    }
    const longer: Melody = melodia.freshMelody(levels[1], previous, random);
    await clearLog(page);
    await p.next.click();
    await expect(p.info).toHaveText('4 säveltä · 3 vaihtoa');
    await scheduled(page, 4);
    await answerContour(page, melodia.contourOf(longer));
    await p.check.click();
    await expect(p.feedback).toHaveText('Oikein! Kaikki 3 vaihtoa osuivat.');
    await expect(p.dots).toHaveCount(4);
    await expect(p.heard).toHaveCount(3);
  });

  test('⌫ poistaa viimeisimmän; Tarkista näkyy vasta, kun kaikki vaihdot on merkitty', async ({ page }) => {
    await seedPage(page, 3);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const p = parts(page, 'suunta');
    await p.listen.click();
    const slots = p.section.locator('[data-suunta-vastaus] li');
    const erase = page.getByRole('button', { name: 'Poista viimeisin' });
    await expect(erase).toHaveAttribute('aria-disabled', 'true');
    await page.getByRole('button', { name: 'Sama sävel' }).click();
    expect(await labels(slots)).toEqual(['Vaihto 1: sama', 'Vaihto 2: ei vielä valittu']);
    await expect(p.check).toBeHidden();
    await erase.click();
    expect(await labels(slots)).toEqual(['Vaihto 1: ei vielä valittu', 'Vaihto 2: ei vielä valittu']);
    await page.getByRole('button', { name: 'Alas: matalampi sävel' }).click();
    await page.getByRole('button', { name: 'Ylös: korkeampi sävel' }).click();
    expect(await iconLines(slots)).toEqual(['alas', 'ylos'].map(iconOf));
    await expect(p.check).toBeVisible();
    await erase.click();
    await expect(p.check).toBeHidden();
  });

  test('saman painikkeen toinen painallus pysäyttää äänen heti', async ({ page }) => {
    await recordAudio(page);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const p = parts(page, 'suunta');
    await p.listen.click();
    await scheduled(page, 3);
    // Soittotila on luettava myös, kun osoitin (tai puhelimen napautus) jää painikkeen päälle.
    await p.listen.hover();
    await expect(p.listen).toHaveCSS('background-color', 'rgb(35, 65, 51)');
    await clearLog(page);
    await p.listen.click();
    await expect(p.listen).toHaveText('▶ Kuuntele');
    const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop'));
    expect(stops).toHaveLength(3);
    for (const stop of stops) expect(stop.when).toBeLessThanOrEqual(stop.at + 0.026);
    await scheduled(page, 0);
    await expect(p.status).toHaveText('');
    // Uudelleenkuuntelu toimii, eikä soitto käynnisty päällekkäin.
    await p.listen.click();
    await expect(p.listen).toHaveText('■ Pysäytä');
    await scheduled(page, 3);
  });

  test('latausvirhe näkyy, eikä tehtävää avata ilman kuunneltua ääntä', async ({ page }) => {
    await page.route('**/assets/audio/soinnut/*', route => route.fulfill({ status: 503, body: '' }));
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const p = parts(page, 'suunta');
    await p.listen.click();
    await expect(p.status).toHaveText('Ääniä ei voitu ladata. Kokeile uudelleen.');
    await expect(p.status).toHaveClass(/is-error/);
    await expect(p.task).toBeHidden();
    await expect(p.listen).toHaveText('▶ Kuuntele');
  });

  test('näppäimistöllä koko kierros: Enter kuuntelee, Space vastaa, fokus säilyy ja Seuraava palaa Kuuntele-painikkeeseen', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await seedPage(page, 5);
    const first: Melody = melodia.freshMelody(melodia.LEVELS.suunta[0], null, mulberry(5));
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const p = parts(page, 'suunta');
    await p.listen.focus();
    await expect(p.listen).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(p.task).toBeVisible();
    for (const value of melodia.contourOf(first)) {
      await page.locator(`[data-suunta="${value}"]`).focus();
      await page.keyboard.press('Space');
    }
    await p.check.focus();
    await page.keyboard.press('Enter');
    await expect(p.feedback).toHaveText(/^Oikein! /);
    // Fokus ei putoa sivun alkuun, kun vastaus lukitaan.
    await expect(p.check).toBeFocused();
    await p.next.focus();
    await page.keyboard.press('Enter');
    await expect(p.listen).toBeFocused();
    await expect(p.listen).toHaveText('■ Pysäytä');
  });
});

test.describe('02 · Kotiin vai kesken?', () => {
  test('Loppu 1/2 soittaa ja valitsee; valintaa voi vaihtaa; vasta Tarkista valinta tarkistaa', async ({ page }) => {
    await recordAudio(page);
    await seedPage(page, 21);
    const random = mulberry(21);
    let index = melodia.pickIndex(melodia.ENDING_ROUNDS, -1, random);
    let round = melodia.endingRound(index);
    await page.goto('/oppi/korva/kotiin-vai-kesken.html');
    const p = parts(page, 'koti');
    const answers = p.section.locator('[data-loppu]');
    const state = (which: number) => answers.nth(which).locator('[data-loppu-tila]');
    await expect(p.section.locator('button:visible')).toHaveCount(1);
    await expect(p.listen).toHaveText('▶ Kuuntele molemmat');

    await p.listen.click();
    await expect(p.task).toBeVisible();
    await expect(p.info).toHaveText('Matala G soi taustalla kotisävelen tukena.');
    const length = round.versions[0].length;
    await scheduled(page, 2 * (length + 1));
    // Soiva loppu korostuu (myös tekstinä), mutta mitään ei ole valittu.
    await expect(answers.nth(0)).toHaveAttribute('data-soi', '');
    await expect(state(0)).toHaveText('▶ soi');
    await expect(answers.nth(1)).not.toHaveAttribute('data-soi', '');
    for (const which of [0, 1]) await expect(answers.nth(which)).toHaveAttribute('aria-pressed', 'false');
    // Tehtävänäkymässä ei ole erillisiä ▶ 1 / ▶ 2 / Kotisävel G -painikkeita, eikä Tarkista näy ennen valintaa.
    await expect(p.task.locator('button:visible')).toHaveText(['Loppu 1 ▶ soi', 'Loppu 2']);
    await expect(p.check).toBeHidden();

    const home = round.order.indexOf('koti');
    // Valitse ensin toinen: soi ja valitaan, mutta ei tarkisteta.
    await clearLog(page);
    await answers.nth(1 - home).click();
    await scheduled(page, length + 1);
    await expect(answers.nth(1 - home)).toHaveAttribute('aria-pressed', 'true');
    await expect(answers.nth(1 - home)).toHaveAttribute('data-soi', '');
    await expect(state(1 - home)).toHaveText('✓ valittu · ▶ soi');
    await expect(p.feedback).toHaveText('');
    await expect(p.check).toBeVisible();
    await expect(p.check).toHaveText('Tarkista valinta');
    // Nopeat painallukset: vain viimeisin soi, edellinen pysäytetään.
    await answers.nth(home).click();
    await answers.nth(1 - home).click();
    await answers.nth(home).click();
    await expect(answers.nth(home)).toHaveAttribute('data-soi', '');
    await expect(answers.nth(1 - home)).not.toHaveAttribute('data-soi', '');
    await expect(answers.nth(home)).toHaveAttribute('aria-pressed', 'true');
    await expect(answers.nth(1 - home)).toHaveAttribute('aria-pressed', 'false');
    await expect(state(1 - home)).toHaveText('');
    await expect(p.feedback).toHaveText('');
    // Kuuntelun päätyttyä soi-tila poistuu, valinta jää.
    await expect(answers.nth(home)).not.toHaveAttribute('data-soi', '', { timeout: 8000 });
    await expect(state(home)).toHaveText('✓ valittu');

    await p.check.click();
    await expect(p.feedback).toHaveText(melodia.endingFeedback(round, home).text);
    await expect(state(home)).toHaveText('✓ valmiimpi');
    await expect(answers.nth(home)).toHaveClass(/is-valmiimpi/);
    await expect(p.check).toHaveAttribute('aria-disabled', 'true');
    await p.section.getByText('Näytä loppujen sävelet').click();
    await expect(p.shape.locator('li')).toHaveText(round.versions.map((notes: Melody, which: number) =>
      `Loppu ${which + 1}: ${melodia.names(notes)}${round.order[which] === 'koti' ? ' (kotiin)' : ''}`));
    // Tarkistuksen jälkeen lopun painallus vain soittaa; valinta ja palaute pysyvät.
    await answers.nth(1 - home).click();
    await expect(answers.nth(1 - home)).toHaveAttribute('data-soi', '');
    await expect(answers.nth(home)).toHaveAttribute('aria-pressed', 'true');
    await expect(p.feedback).toHaveText(melodia.endingFeedback(round, home).text);

    // Toinen oikea vastaus → seuraavaksi ilman tukiääntä.
    index = melodia.pickIndex(melodia.ENDING_ROUNDS, index, random);
    round = melodia.endingRound(index);
    await p.next.click();
    await expect(p.feedback).toHaveText('');
    await expect(p.check).toBeHidden();
    for (const which of [0, 1]) await expect(answers.nth(which)).toHaveAttribute('aria-pressed', 'false');
    await answers.nth(round.order.indexOf('koti')).click();
    await p.check.click();
    await expect(p.feedback).toHaveText(`${melodia.endingFeedback(round, round.order.indexOf('koti')).text} Seuraavaksi ilman tukiääntä.`);

    index = melodia.pickIndex(melodia.ENDING_ROUNDS, index, random);
    round = melodia.endingRound(index);
    await clearLog(page);
    await p.next.click();
    await expect(p.info).toHaveText('Ilman tukiääntä.');
    await scheduled(page, 2 * round.versions[0].length);
    // Kotisävel löytyy ⓘ-lisätiedosta.
    await p.section.locator('.study-knoppi > summary').click();
    await clearLog(page);
    await p.section.getByRole('button', { name: 'Kuuntele kotisävel G' }).click();
    await scheduled(page, 2);
    const wrong = 1 - round.order.indexOf('koti');
    await answers.nth(wrong).click();
    await p.check.click();
    await expect(p.feedback).toHaveText(melodia.endingFeedback(round, wrong).text);
    await expect(p.feedback).toHaveText(/^Tässä melodiassa loppu [12] kuulostaa valmiimmalta/);
    await expect(p.feedback).toHaveClass(/is-error/);
    await expect(state(wrong)).toHaveText(/^✗ valintasi/);
    await expect(state(1 - wrong)).toHaveText(/^✓ valmiimpi/);
  });

  test('näppäimistöllä: Space valitsee lopun, Enter tarkistaa ja fokus säilyy', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await page.goto('/oppi/korva/kotiin-vai-kesken.html');
    const p = parts(page, 'koti');
    await p.listen.focus();
    await page.keyboard.press('Enter');
    await expect(p.task).toBeVisible();
    const second = p.section.getByRole('button', { name: /^Loppu 2/ });
    await second.focus();
    await page.keyboard.press('Space');
    await expect(second).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('Tab');
    await expect(p.check).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(p.feedback).not.toHaveText('');
    await expect(p.check).toBeFocused();
  });
});

test.describe('03 · Kuule ja etsi kitaralta', () => {
  test('tapailu, lyhyt palaute ja Kuului/Sinä-vertailu, Näytä sävelkulku ja laajeneva sävelalue', async ({ page }) => {
    await recordAudio(page);
    await seedPage(page, 31);
    const random = mulberry(31);
    const levels = melodia.LEVELS.etsi;
    const first: Melody = melodia.freshMelody(levels[0], null, random);
    await page.goto('/oppi/korva/kuule-ja-etsi-kitaralta.html');
    const p = parts(page, 'etsi');
    const slots = p.section.locator('[data-etsi-vastaus] li');
    const board = p.section.locator('[data-paikka]');
    const own = p.section.getByRole('button', { name: 'Oma kulkusi' });
    await expect(p.section.locator('button:visible')).toHaveCount(1);

    await p.listen.click();
    const log = await scheduled(page, 3);
    log.forEach((entry, index) => close(entry.when - log[0].when, index * melodia.TIMING.etsi.ioi));
    await expect(p.info).toHaveText('3 säveltä · alkaa vapaalta G-kieleltä');
    await expect(board).toHaveCount(5);
    await expect(p.section.locator('.melodia-kieli')).toHaveText(['B', 'G']);
    await expect(page.getByRole('button', { name: 'A, G-kieli, 2. nauha' })).toBeVisible();
    await expect(slots).toHaveText(['?', '?', '?']);
    await expect(p.check).toBeHidden();
    await expect(p.section.getByRole('button', { name: 'Näytä sävelkulku' })).toBeVisible();

    // Väärät kokeilut matkalla eivät haittaa: kolme viimeisintä ratkaisevat.
    await clearLog(page);
    await tap(page, ['D4', 'C4', ...first]);
    // Nopea painallus korvaa edellisen, vielä latautuvan sävelen; vähintään viimeisin soi.
    await expect.poll(async () => (await starts(page)).length).toBeGreaterThan(0);
    await expect(slots).toHaveText(first.map(id => melodia.NOTES[id].name));
    await p.check.click();
    await expect(p.feedback).toHaveText(melodia.echoFeedback(first, first));
    await expect(p.heard).toHaveText(first.map(id => melodia.NOTES[id].name));
    await expect(p.yours.locator('.melodia-merkki')).toHaveText(['✓', '✓', '✓']);
    await expect(own).toBeHidden();
    // Oikeat paikat numeroidaan ruudukkoon.
    for (const [at, id] of first.entries()) {
      await expect(page.locator(`[data-paikka="${id}"] .melodia-numero`)).toContainText(String(at + 1));
    }
    await expect(p.shape).toContainText(`Kitaralla: ${first.map(melodia.position).join(' → ')}`);

    // Oikealla kitaralla etsinyt: Näytä sävelkulku ei ole vastaus eikä muuta tasoa.
    const second: Melody = melodia.freshMelody(levels[0], first, random);
    await p.next.click();
    await expect(p.section.locator('.melodia-numero')).toHaveCount(0);
    await p.section.getByRole('button', { name: 'Näytä sävelkulku' }).click();
    await expect(p.feedback).toHaveText(`Sävelkulku: ${melodia.names(second)}. Vertaa omaan soittoosi. Tätä ei lasketa vastaukseksi.`);
    await expect(p.heard).toHaveText(second.map(id => melodia.NOTES[id].name));
    await expect(p.yours).toHaveCount(0);

    // Toinen oikea vastaus → vaihtuva lähtösävel ja G-, B- ja e-kieli.
    const third: Melody = melodia.freshMelody(levels[0], second, random);
    await p.next.click();
    await tap(page, third);
    await p.check.click();
    await expect(p.feedback).toHaveText(`${melodia.echoFeedback(third, third)} Seuraavaksi hieman vaikeampi.`);
    const fourth: Melody = melodia.freshMelody(levels[1], third, random);
    await p.next.click();
    await expect(p.info).toHaveText('3 säveltä · lähtösävel vaihtelee');
    await expect(board).toHaveCount(8);
    await expect(p.section.locator('.melodia-kieli')).toHaveText(['e', 'B', 'G']);
    const guess = [...fourth];
    guess[1] = fourth[1] === 'G4' ? 'E4' : 'G4';
    await tap(page, guess);
    await p.check.click();
    await expect(p.feedback).toHaveText('2/3 oikein. Yhdessä sävelessä oli eroa.');
    // Malli (Kuului) pysyy oikeana; vain oma rivi merkitään.
    await expect(p.heard).toHaveText(fourth.map(id => melodia.NOTES[id].name));
    await expect(p.yours.locator('strong')).toHaveText(guess.map(id => melodia.NOTES[id].name));
    await expect(p.yours.locator('.melodia-merkki')).toHaveText(['✓', '✗', '✓']);
    await expect(p.heard.locator('.melodia-merkki')).toHaveCount(0);
    await expect(p.section.locator('ol.melodia-vertailu > li.is-virhe')).toHaveCount(1);
    expect(await labels(p.cards)).toEqual(fourth.map((id, at) => `Sävel ${at + 1}: kuului ${melodia.NOTES[id].name}, ${guess[at] === id ? 'oikein' : `vastasit ${melodia.NOTES[guess[at]].name}`}`));
    // Oma kulku vertailuksi.
    await clearLog(page);
    await own.click();
    await scheduled(page, 3);
    // Tarkistuksen jälkeen paikat soivat yhä, mutta vastaus pysyy.
    await clearLog(page);
    await page.locator('[data-paikka="G3"]').click();
    await scheduled(page, 1);
    await expect(slots).toHaveText(guess.map(id => melodia.NOTES[id].name));
  });
});

test('aihesivulla oppitunnin sulkeminen kesken soiton pysäyttää äänen', async ({ page }) => {
  await recordAudio(page);
  await page.goto(`${topicPath}#valinta-kotiin-vai-kesken`);
  const card = page.locator('#valinta-kotiin-vai-kesken').locator('xpath=..');
  await expect(card).toHaveAttribute('open', '');
  const p = parts(page, 'koti');
  await p.listen.click();
  await expect.poll(async () => (await starts(page)).length).toBeGreaterThan(0);
  await clearLog(page);
  await page.locator('#valinta-kotiin-vai-kesken').click();
  await expect(card).not.toHaveAttribute('open', '');
  await expect(p.status).toHaveText('Kuuntelu keskeytyi. Voit kuunnella uudelleen.');
  const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop'));
  expect(stops.length).toBeGreaterThanOrEqual(12);
});

// Tuo jokainen harjoitus vastauksen jälkeiseen tilaan, jossa näkyvissä on eniten sisältöä.
async function answerAll(page: Page, slug: string) {
  await page.locator('[data-melodia-kuuntele]').click();
  if (slug === 'ylos-alas-vai-sama') {
    await answerContour(page, ['ylos', 'alas']);
    await page.locator('[data-melodia-tarkista]').click();
    await page.getByText('Näytä sävelet ja kitaran paikat').click();
  } else if (slug === 'kotiin-vai-kesken') {
    await page.locator('[data-loppu="0"]').click();
    await page.locator('[data-melodia-tarkista]').click();
    await page.getByText('Näytä loppujen sävelet').click();
  } else {
    await tap(page, ['A3', 'B3', 'D4']);
    await page.locator('[data-melodia-tarkista]').click();
  }
}

test.describe('pienet näytöt ja suurennus', () => {
  for (const width of [320, 360, 390]) {
    test(`${width} px, 100 % ja 200 % teksti ilman vaakavieritystä; painikkeet vähintään 44 px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await seedPage(page, 7);
      await page.goto(`${topicPath}#valinta-ylos-alas-vai-sama`);
      await page.locator('#aiemmat > summary').click();
      await page.locator('#ydinopinnot > summary').click();
      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await noHorizontalScroll(page), `aihesivu ${width}px ${size}`).toBe(true);
      }
      for (const [slug] of lessons) {
        await page.goto(`/oppi/korva/${slug}.html`);
        await answerAll(page, slug);
        const section = page.locator('[data-melodiaharjoitus]');
        for (const button of await section.locator('button:visible').all()) {
          const box = await button.boundingBox();
          expect(box!.height, `${slug}: ${await button.textContent()}`).toBeGreaterThanOrEqual(44);
          expect(box!.width, `${slug}: ${await button.textContent()}`).toBeGreaterThanOrEqual(44);
        }
        for (const size of ['100%', '200%']) {
          await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
          expect(await noHorizontalScroll(page), `${slug} ${width}px ${size}`).toBe(true);
        }
      }
    });
  }

  test('1280 px ja 400 % teksti: kaikki kolme vastattuna ilman vaakavieritystä', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await seedPage(page, 7);
    for (const [slug] of lessons) {
      await page.goto(`/oppi/korva/${slug}.html`);
      await answerAll(page, slug);
      await page.evaluate(() => { document.documentElement.style.fontSize = '400%'; });
      expect(await noHorizontalScroll(page), slug).toBe(true);
    }
  });
});
