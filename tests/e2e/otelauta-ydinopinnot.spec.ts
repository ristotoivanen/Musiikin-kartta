import { expect, test, type Locator, type Page } from '@playwright/test';
import { FIND_LEVELS, LANDMARKS, STRINGS, findPositions, frequency, noteName, pitchAt, positionsOf, unisonAnswer } from '../../assets/otelauta-ydinopinnot.js';

// Otelaudan Ydinopinnot (#116, vaihe 3). Tehtävät arvotaan, joten testi lukee tehtävän näkyvästä
// sisällöstä ja laskee vastauksen samalla moduulilla. 02:n arvoitussävel tunnistetaan soitetusta
// taajuudesta (Web Audio -kutsut), ei DOM:iin vuotavasta vastauksesta. Testit eivät todenna
// äänenlaatua, fyysisiä laitteita, ruudunlukijan puhetta eivätkä soittoa oikealla kitaralla.

const topicPath = '/oppi/otelauta/index.html';
const readingKey = 'musiikin-kartta:luvut';
const lessons = [
  ['sama-savel-toiselta-kielelta', 'Sama sävel toiselta kieleltä', 'unisono'],
  ['kuule-oktaavi', 'Kuule ja löydä oktaavi', 'oktaavi'],
  ['perussavel-e-ja-a-kielelta', 'Etsi perussävel E- ja A-kieleltä', 'perussavel'],
  ['liiku-otelaudalla', 'Liiku otelaudalla', 'liiku'],
] as const;
const legacy = [
  ['otelauta', 'otelauta'],
  ['etsi-a-ilman-asteikkokuviota', 'harjoitus:etsi-a-ilman-asteikkokuviota'],
  ['etsi-sama-savel', 'harjoitus:etsi-sama-savel'],
  ['perussavel', 'perussavel'],
  ['etsi-savel-kahdelta-kielelta', 'harjoitus:etsi-savel-kahdelta-kielelta'],
  ['nimea-savel', 'harjoitus:nimea-savel'],
  ['caged', 'caged'],
  ['soita-c-kahdesta-kohdasta', 'harjoitus:soita-c-kahdesta-kohdasta'],
] as const;

const core = (page: Page) => page.locator('details#ydinopinnot');
const earlier = (page: Page) => page.locator('details#aiemmat');
const exercise = (page: Page, kind: string) => page.locator(`[data-otelautaharjoitus="${kind}"]`);
const cell = (scope: Locator, string: string, fret: number) => scope.locator(`button[data-kieli="${string}"][data-nauha="${fret}"]`);
const feedback = (scope: Locator) => scope.locator('.otelauta-palaute');
const prompt = (scope: Locator) => scope.locator('.otelauta-tehtava');
// Uusi tehtävä -painike on laudan yläpuolella ja ratkaisun jälkeen myös laudan alla.
const next = (scope: Locator) => scope.getByRole('button', { name: /^Uusi (tehtävä|sävel) →$/ }).first();
const nextBottom = (scope: Locator) => scope.locator('.otelauta-alatoiminnot').getByRole('button', { name: /^Uusi (tehtävä|sävel) →$/ });
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
const stringFrom = (text: string) => STRINGS.find(string => text.includes(` ${string.from}.`))!.id;

async function marked(scope: Locator, kind: string) {
  const target = scope.locator(`button.is-${kind}`).first();
  return [await target.getAttribute('data-kieli'), Number(await target.getAttribute('data-nauha'))] as [string, number];
}

/** Kirjaa oskillaattorien taajuudet, jotta kuultava sävel voidaan verrata näkyvään. */
async function recordFrequencies(page: Page) {
  await page.addInitScript(() => {
    const played: number[] = [];
    (window as unknown as { __taajuudet: number[] }).__taajuudet = played;
    const original = BaseAudioContext.prototype.createOscillator;
    BaseAudioContext.prototype.createOscillator = function (this: BaseAudioContext) {
      const oscillator = original.call(this);
      const set = oscillator.frequency.setValueAtTime.bind(oscillator.frequency);
      oscillator.frequency.setValueAtTime = (value: number, time: number) => {
        played.push(Math.round(value * 100) / 100);
        return set(value, time);
      };
      return oscillator;
    };
  });
}
const frequencies = (page: Page) => page.evaluate(() => (window as unknown as { __taajuudet: number[] }).__taajuudet);
const hz = (midi: number) => Math.round(frequency(midi) * 100) / 100;

async function solveUnison(root: Locator) {
  const [string, fret] = await marked(root, 'lahto');
  const to = stringFrom((await prompt(root).textContent())!);
  const answer = unisonAnswer({ from: [string, fret], to });
  await cell(root, answer.string, answer.fret).click();
  return answer;
}

test.describe('aihesivu', () => {
  test('Ydinopinnot ensin, aiemmat kahdeksan sisältöä entisillä osoitteilla, molemmat oletuksena suljettuina', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.getByRole('heading', { level: 1, name: 'Otelauta' })).toBeVisible();
    await expect(page.locator('details.study-unit')).toHaveCount(2);
    await expect(core(page)).not.toHaveAttribute('open', '');
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await core(page).locator(':scope > summary').click();
    await expect(core(page).locator(':scope > summary')).toContainText('4 sisältöä');
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('0/4 kokeiltu');
    for (const [slug, title] of lessons) {
      const summary = page.locator(`#valinta-${slug}`);
      await expect(summary).toContainText(title);
      await summary.click();
      await expect(summary.locator('xpath=..').getByRole('link', { name: 'Avaa omalla sivullaan' })).toHaveAttribute('href', `${slug}.html`);
      await summary.click();
    }
    await earlier(page).locator(':scope > summary').click();
    await expect(earlier(page).locator(':scope > summary')).toContainText('8 sisältöä');
    expect(await earlier(page).locator('a.study-choice').evaluateAll(all => all.map(a => [a.id, a.getAttribute('href')])))
      .toEqual(legacy.map(([slug]) => [`valinta-${slug}`, `${slug}.html`]));
    await expect(page.getByRole('link', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    expect(await noHorizontalScroll(page)).toBe(true);
  });

  test('vanhat merkinnät säilyvät; uusi kokeilu tallentuu omalla tunnisteellaan', async ({ page }) => {
    await page.goto(topicPath);
    const old = ['otelauta', 'harjoitus:etsi-sama-savel', 'harmoninen-kentta'];
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(old)]);
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const mark = page.locator('.done-toggle');
    await expect(mark).toHaveText('Merkitse kokeilluksi');
    await mark.click();
    await expect(mark).toHaveText('✓ Kokeiltu');
    expect(JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!)).toEqual([...old, 'harjoitus:kuule-oktaavi']);
    await page.goto(topicPath);
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('1/4 kokeiltu');
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('2/8 aiemmista sisällöistä tehty');
    await page.goto('/index.html');
    await expect(page.locator('#aihe-otelauta .topic-status')).toHaveText('2/8 aiemmista sisällöistä tehty');
  });

  test('oma sivu palaa aihesivun saman harjoituksen korttiin', async ({ page }) => {
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    await expect(page.locator('main.study-page--focus')).toHaveCount(1);
    await page.getByRole('link', { name: 'Takaisin aiheeseen: Otelauta' }).click();
    await expect(page).toHaveURL(/\/oppi\/otelauta\/index\.html#valinta-perussavel-e-ja-a-kielelta$/);
    await expect(page.locator('#valinta-perussavel-e-ja-a-kielelta')).toBeFocused();
  });
});

test.describe('01 · Sama sävel toiselta kieleltä', () => {
  test('esimerkki, palaute ja vaihtelevat uudet tehtävät', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    await expect(root.locator('[data-otelauta-tila]')).toBeHidden();
    await expect(root.locator('[data-otelauta-teksti]')).toBeHidden();
    await expect(prompt(root)).toHaveText('Vapaa A-kieli soi A2. Sama A2 löytyy paksulta E-kieleltä viisi nauhaa kohti tallaa. Valitse se.');
    await expect(root.locator('.otelauta-kierros')).toHaveText('Esimerkki');
    await expect(cell(root, 'A', 0)).toHaveAccessibleName('vapaa A-kieli, lähtösävel A2');
    await cell(root, 'E', 7).click();
    await expect(feedback(root)).toHaveText('B2 – liian korkea. Siirry kaksi nauhaa kohti satulaa.');
    // Suunta ja nauhamäärä näkyvät myös napautetussa ruudussa (satula ylhäällä: ↑ = kohti satulaa).
    await expect(cell(root, 'E', 7)).toHaveText('↑2');
    await expect(cell(root, 'E', 7)).toHaveAccessibleName(/siirry kaksi nauhaa kohti satulaa/);
    await cell(root, 'E', 5).click();
    await expect(feedback(root)).toHaveText('Oikein. Molemmat ovat A2.');
    await expect.poll(() => frequencies(page)).toEqual([hz(47), hz(45)]);
    await expect(next(root)).toBeVisible();

    const prompts = new Set<string>();
    for (let index = 2; index <= 9; index++) {
      await next(root).click();
      await expect(prompt(root)).toBeFocused();
      await expect(root.locator('.otelauta-kierros')).toHaveText(`Tehtävä ${index}`);
      prompts.add((await prompt(root).textContent())!);
      if (index === 3) {
        await root.getByRole('button', { name: 'Vihje' }).click();
        await expect(feedback(root)).toContainText('Vihje:');
        await root.getByRole('button', { name: 'Näytä vastaus' }).click();
        await expect(feedback(root)).toContainText('Vastaus:');
        // Näytetty vastaus ei saa omin voimin ratkaistun tehtävän onnistumismerkintää.
        await expect(feedback(root)).not.toHaveAttribute('data-tulos', 'oikein');
        await expect(root.locator('button.is-naytetty')).toHaveCount(1);
        await expect(root.locator('button.is-oikein')).toHaveCount(0);
        continue;
      }
      const answer = await solveUnison(root);
      await expect(feedback(root)).toContainText(`Oikein. Molemmat ovat`);
      await expect(cell(root, answer.string, answer.fret)).toHaveClass(/is-oikein/);
    }
    // Kahdeksan arvottua tehtävää eivät ole yksi ja sama tehtävä.
    expect(prompts.size).toBeGreaterThanOrEqual(6);
  });

  test('näppäimistö: yksi sarkainpysähdys laudalla, nuolet ja Enter', async ({ page }) => {
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    // Sarkainjärjestys: tehtävä → toiminnot (Vihje, Näytä vastaus) → lauta → Uusi tehtävä laudan alla.
    await root.getByRole('button', { name: 'Näytä vastaus' }).focus();
    await page.keyboard.press('Tab');
    await expect(cell(root, 'A', 0)).toBeFocused();
    await expect(root.locator('table[role="grid"] button[tabindex="0"]')).toHaveCount(1);
    await page.keyboard.press('ArrowLeft');
    await expect(cell(root, 'E', 0)).toBeFocused();
    for (let i = 0; i < 5; i++) await page.keyboard.press('ArrowDown');
    await expect(cell(root, 'E', 5)).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(feedback(root)).toHaveText('Oikein. Molemmat ovat A2.');
    await page.keyboard.press('Tab');
    await expect(nextBottom(root)).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(prompt(root)).toBeFocused();
    await expect(root.locator('table[role="grid"] button[tabindex="0"]')).toHaveCount(1);
  });

  test('äänen voi kytkeä pois', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    const toggle = root.getByRole('button', { name: 'Ääni' });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await cell(root, 'E', 5).click();
    await expect(feedback(root)).toHaveText('Oikein. Molemmat ovat A2.');
    expect(await frequencies(page)).toEqual([]);
    await root.getByRole('button', { name: '▶ Lähtösävel' }).click();
    await expect.poll(() => frequencies(page)).toEqual([110]);
  });
});

test.describe('02 · Kuule ja löydä oktaavi', () => {
  test('kuule suhde, löydä paikka; vastaus ei näy ennen ratkaisua', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    for (let round = 1; round <= 4; round++) {
      if (round > 1) {
        await next(root).click();
        await expect(prompt(root)).toBeFocused();
      }
      await expect(root.locator('.is-paikka')).toHaveCount(0);
      const [refString, refFret] = await marked(root, 'lahto');
      const ref = pitchAt(refString, refFret);
      const before = (await frequencies(page)).length;
      await root.getByRole('button', { name: '▶ Arvoitussävel' }).click();
      await expect.poll(async () => (await frequencies(page)).length).toBe(before + 1);
      const heard = (await frequencies(page)).at(-1)!;
      const diff = [-12, 0, 12].find(delta => hz(ref + delta) === heard)!;
      expect(diff, 'arvoitussävel on täsmälleen oktaavi tai unisono').not.toBeUndefined();
      const label = { [-12]: 'Oktaavia matalampi', 0: 'Yhtä korkea', 12: 'Oktaavia korkeampi' }[diff]!;
      await root.getByRole('button', { name: label }).click();
      await expect(feedback(root)).toHaveText(`Oikein: ${label.toLowerCase()}. Missä se soi?`);
      // Kolme numeroitua paikkaa, joiden saavutettava nimi ei paljasta vastausta.
      const places = root.locator('button.is-paikka');
      await expect(places).toHaveCount(3);
      let answer = -1;
      for (let index = 0; index < 3; index++) {
        const target = places.nth(index);
        const name = (await target.getAttribute('aria-label'))!;
        expect(name).toMatch(/, paikka [123]$/);
        const midi = pitchAt((await target.getAttribute('data-kieli'))!, Number(await target.getAttribute('data-nauha')));
        if (midi === ref + diff) answer = Number(name.slice(-1));
      }
      expect(answer).toBeGreaterThan(0);
      await root.getByRole('button', { name: new RegExp(`^${answer} · `) }).click();
      await expect(feedback(root)).toContainText(`Oikein. Paikka ${answer},`);
      await expect(root.locator('button.is-oikein')).toHaveCount(1);
      await expect(root.locator('button.is-paljastettu')).toHaveCount(2);
    }
  });

  test('väärä suhde paljastaa oikean, mutta paikka valitaan silti itse', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await root.getByRole('button', { name: '▶ Arvoitussävel' }).click();
    await expect.poll(async () => (await frequencies(page)).length).toBe(1);
    const [refString, refFret] = await marked(root, 'lahto');
    const heard = (await frequencies(page))[0];
    const diff = [-12, 0, 12].find(delta => hz(pitchAt(refString, refFret) + delta) === heard)!;
    const wrong = diff === 0 ? 'Oktaavia korkeampi' : 'Yhtä korkea';
    await root.getByRole('button', { name: wrong }).click();
    await expect(feedback(root)).toContainText('Arvoitussävel oli');
    await expect(root.locator('button.is-oikein')).toHaveCount(0);
    await root.locator('button.is-paikka').first().click();
    await expect(root.locator('button.is-oikein')).toHaveCount(1);
  });

  test('tekstiversio on nimetty päättelyksi eikä kuunteluksi', async ({ page }) => {
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await root.getByRole('button', { name: 'Ei ääntä? Tekstiversio' }).click();
    await expect(root.getByText('Tekstiversio: päättelet korkeuden sävelmerkinnästä. Se ei harjoita kuulemista.')).toBeVisible();
    await expect(prompt(root)).toContainText('Arvoitussävel on');
    await expect(root.getByRole('button', { name: '▶ Arvoitussävel' })).toBeHidden();
  });
});

test.describe('03 · Etsi perussävel E- ja A-kieleltä', () => {
  test('etsi- ja nimeä-tehtävät vaihtelevat ja palaute selittää kiintopisteen', async ({ page }) => {
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    const root = exercise(page, 'perussavel');
    await expect(root.locator('thead th[data-kieli]')).toHaveText(['E', 'A']);
    await expect(root.locator('.otelauta-kiintopisteet')).toBeHidden();
    const types = new Set<string>();
    for (let round = 1; round <= 8; round++) {
      if (round > 1) await next(root).click();
      const text = (await prompt(root).textContent())!;
      if (text.startsWith('Mikä sävel')) {
        types.add('nimea');
        const [string, fret] = await marked(root, 'kysytty');
        const name = noteName(pitchAt(string, fret));
        const wrong = ['C', 'D', 'E', 'F', 'G', 'A', 'B'].find(other => other !== name)!;
        const names = root.getByRole('group', { name: 'Sävelen nimi' });
        await names.getByRole('button', { name: wrong, exact: true }).click();
        await expect(feedback(root)).toHaveText(LANDMARKS.includes(fret)
          ? `Ei ${wrong}. Tämä on kiintopiste, joka kannattaa muistaa. Vihje näyttää kiintopisteet.`
          : `Ei ${wrong}. Päättele lähimmästä kiintopisteestä ja laske nauhat siitä.`);
        await names.getByRole('button', { name, exact: true }).click();
        await expect(feedback(root)).toContainText(`on ${name}.`);
      } else {
        types.add('etsi');
        const [, note, from] = text.match(/^Etsi (\S+) (.+)\.$/)!;
        const string = STRINGS.find(item => item.from === from)!.id;
        await root.getByRole('button', { name: 'Vihje' }).click();
        await expect(feedback(root)).toContainText('Vihje: kiintopisteet');
        const fret = positionsOf(note, [string])[0].fret;
        await cell(root, string, fret).click();
        await expect(feedback(root)).toContainText(`Oikein. `);
        await expect(feedback(root)).toContainText(` on ${note}. `);
      }
    }
    expect(types.size).toBe(2);
  });
});

test.describe('04 · Liiku otelaudalla', () => {
  test('kaikki paikat, unisonot ja oktaavit; laajuuden voi valita suoraan', async ({ page }) => {
    await page.goto('/oppi/otelauta/liiku-otelaudalla.html');
    const root = exercise(page, 'liiku');
    const select = root.getByLabel('Laajuus');
    await expect(select).toHaveValue('ea');
    await expect(root.locator('thead th[data-kieli]')).toHaveText(['E', 'A']);
    for (const level of ['ea', 'kaikki', 'kromaattinen'] as const) {
      if (level !== 'ea') await select.selectOption(level);
      await expect(root.locator('thead th[data-kieli]')).toHaveCount(FIND_LEVELS[level].strings.length);
      const target = (await prompt(root).textContent())!.match(/^Etsi kaikki (\S+)-sävelet .+, nauhat 0–12\. Niitä on \d+\.$/)![1];
      expect(FIND_LEVELS[level].notes).toContain(target);
      const positions = findPositions(target, level);
      await expect(prompt(root)).toContainText(`Niitä on ${positions.length}.`);
      const wrong = positionsOf(FIND_LEVELS[level].notes.find(note => note !== target)!, FIND_LEVELS[level].strings)[0];
      await cell(root, wrong.string, wrong.fret).click();
      await expect(feedback(root)).toContainText(`Tällä kielellä ${target} löytyy`);
      await root.getByRole('button', { name: 'Vihje' }).click();
      await expect(feedback(root)).toContainText(`Vihje: ${target} löytyy vielä`);
      for (const position of positions) await cell(root, position.string, position.fret).click();
      await expect(feedback(root)).toContainText(`Kaikki ${positions.length} löytyi!`);
      await expect(root.locator('.otelauta-loydot li')).toHaveCount(new Set(positions.map(position => position.midi)).size);
      await expect(next(root)).toBeVisible();
    }
    await next(root).click();
    await expect(prompt(root)).toBeFocused();
    await expect(root.locator('.otelauta-loydot li')).toHaveCount(0);
  });
});

test('aihesivun neljä harjoitusta toimivat samalla sivulla toisistaan riippumatta', async ({ page }) => {
  await page.goto(topicPath);
  await core(page).locator(':scope > summary').click();
  await page.locator('#valinta-sama-savel-toiselta-kielelta').click();
  const first = exercise(page, 'unisono');
  await cell(first, 'E', 5).click();
  await expect(feedback(first)).toHaveText('Oikein. Molemmat ovat A2.');
  await page.locator('#valinta-liiku-otelaudalla').click();
  const last = exercise(page, 'liiku');
  const target = (await prompt(last).textContent())!.match(/^Etsi kaikki (\S+)-sävelet .+, nauhat 0–12\. Niitä on \d+\.$/)![1];
  const position = findPositions(target, 'ea')[0];
  await cell(last, position.string, position.fret).click();
  await expect(feedback(last)).toContainText('Löydetty 1/');
  expect(await noHorizontalScroll(page)).toBe(true);
});

for (const width of [320, 375, 390, 402, 430]) {
  test(`${width} px: kuusi kieltä mahtuu, solut vähintään 44 × 44 px, ei sivun vaakavieritystä`, async ({ page }) => {
    await page.setViewportSize({ width, height: 700 });
    await page.goto(topicPath);
    await core(page).locator(':scope > summary').click();
    await page.locator('#valinta-sama-savel-toiselta-kielelta').click();
    expect(await noHorizontalScroll(page)).toBe(true);
    for (const root of [exercise(page, 'unisono')]) {
      const frame = root.locator('.otelauta-kehys');
      expect(await frame.evaluate(node => node.scrollWidth <= node.clientWidth + 1), 'aihesivun lauta').toBe(true);
    }
    for (const [slug, , kind] of lessons) {
      await page.goto(`/oppi/otelauta/${slug}.html`);
      expect(await noHorizontalScroll(page), slug).toBe(true);
      const root = exercise(page, kind);
      // 02: lauta tulee näkyviin vasta paikanetsintävaiheessa.
      if (kind === 'oktaavi') await root.getByRole('button', { name: 'Yhtä korkea' }).click();
      const frame = root.locator('.otelauta-kehys');
      // Laudan levitys kapeaan näkymään tehdään ResizeObserverilla ensimmäisen asettelun jälkeen.
      await expect.poll(() => frame.evaluate(node => node.scrollWidth <= node.clientWidth + 1), { message: slug }).toBe(true);
      const box = await frame.boundingBox();
      expect(box!.x, slug).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width, slug).toBeLessThanOrEqual(width);
      const sizes = await root.locator('.otelauta-lauta td > button').evaluateAll(nodes =>
        nodes.map(node => node.getBoundingClientRect()).map(rect => [rect.width, rect.height]));
      expect(sizes.every(([w, h]) => w >= 44 && h >= 44), `${slug}: ${Math.min(...sizes.map(([w]) => w))}`).toBe(true);
    }
  });
}

/**
 * Auditointi PR #179 (24.11.2026): palautepaneeli ei saa peittää otelautaa, merkittyjä paikkoja,
 * kuuntelu- ja toimintopainikkeita eikä fokusta. Jokainen olennainen kohde vieritetään näkyviin ja
 * sen keskipisteessä on oltava kohde itse (elementFromPoint), ei paneeli tai muu elementti.
 */
async function obscured(root: Locator) {
  return root.evaluate(async (section: Element) => {
    const panel = section.querySelector('.otelauta-paneeli')!;
    const board = section.querySelector('.otelauta-lauta')!;
    const targets = [
      ...section.querySelectorAll('.otelauta-lauta button'),
      ...section.querySelectorAll('.otelauta-sovellus button:not([hidden])'),
      ...section.querySelectorAll('.otelauta-sovellus select'),
    ].filter(node => (node as HTMLElement).offsetParent !== null);
    const problems: string[] = [];
    const panelBox = panel.getBoundingClientRect();
    const boardBox = board.getBoundingClientRect();
    if (panelBox.top < boardBox.bottom - 1 && panelBox.bottom > boardBox.top + 1) problems.push('paneeli leikkaa otelautaa');
    for (const target of targets) {
      target.scrollIntoView({ block: 'center', inline: 'nearest' });
      await new Promise(resolve => requestAnimationFrame(() => resolve(null)));
      const box = target.getBoundingClientRect();
      const x = box.left + box.width / 2;
      const y = box.top + box.height / 2;
      const hit = document.elementFromPoint(x, y);
      if (!hit || !(hit === target || target.contains(hit))) {
        problems.push(`${(target as HTMLElement).getAttribute('aria-label') ?? target.textContent?.trim()} peittyy: ${hit?.className || hit?.tagName}`);
      }
    }
    return problems;
  });
}

for (const [label, width, height] of [['pysty 390 × 640', 390, 640], ['pysty 320 × 568', 320, 568], ['vaaka 844 × 390', 844, 390]] as const) {
  test(`palautepaneeli ei peitä otelautaa eikä olennaisia kohteita (${label})`, async ({ page }) => {
    await page.setViewportSize({ width, height });
    // 01: väärä ja oikea yritys, lähtösävel, valittu paikka.
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    let root = exercise(page, 'unisono');
    await cell(root, 'E', 9).click();
    await cell(root, 'E', 5).click();
    await expect(feedback(root)).toHaveText('Oikein. Molemmat ovat A2.');
    expect(await obscured(root), '01').toEqual([]);
    await next(root).click();
    await cell(root, 'E', 12).click();
    expect(await obscured(root), '01 uusi').toEqual([]);
    // 02: vaihe B, kolme paikkaa ja kuuntelupainikkeet.
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    root = exercise(page, 'oktaavi');
    await root.getByRole('button', { name: 'Yhtä korkea' }).click();
    await expect(root.locator('button.is-paikka')).toHaveCount(3);
    expect(await obscured(root), '02 B').toEqual([]);
    // 03: väärä nimi tai väärä paikka.
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    root = exercise(page, 'perussavel');
    await cell(root, 'A', 11).click();
    await root.getByRole('button', { name: 'Vihje' }).click();
    expect(await obscured(root), '03').toEqual([]);
    // 04: löydöt ja väärä yritys koko laudalla.
    await page.goto('/oppi/otelauta/liiku-otelaudalla.html');
    root = exercise(page, 'liiku');
    await root.getByLabel('Laajuus').selectOption('kaikki');
    const target = (await prompt(root).textContent())!.match(/^Etsi kaikki (\S+)-sävelet/)![1];
    const positions = findPositions(target, 'kaikki');
    for (const position of positions.slice(0, 3)) await cell(root, position.string, position.fret).click();
    const wrong = positionsOf(FIND_LEVELS.kaikki.notes.find(note => note !== target)!)[5];
    await cell(root, wrong.string, wrong.fret).click();
    await expect(root.locator('button.is-yritys')).toHaveCount(1);
    expect(await obscured(root), '04').toEqual([]);
    // Näppäimistöfokus: viimeinen laudan ruutu ei jää minkään alle.
    await cell(root, 'e', 12).focus();
    const focusVisible = await cell(root, 'e', 12).evaluate(node => {
      const box = node.getBoundingClientRect();
      const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
      return hit === node || node.contains(hit);
    });
    expect(focusVisible).toBe(true);
    expect(await noHorizontalScroll(page)).toBe(true);
  });
}

for (const [label, width, size] of [['200 % tekstikoko', 360, '200%'], ['400 %:n reflow (320 px)', 320, '100%']] as const) {
  test(`${label}: sivu rivittyy ja laudan kaikki kielet ovat saavutettavissa`, async ({ page }) => {
    await page.setViewportSize({ width, height: 700 });
    for (const [slug, , kind] of lessons) {
      await page.goto(`/oppi/otelauta/${slug}.html`);
      await page.addStyleTag({ content: `html { font-size: ${size} !important; }` });
      await page.evaluate(() => window.dispatchEvent(new Event('resize')));
      expect(await noHorizontalScroll(page), slug).toBe(true);
      const root = exercise(page, kind);
      await expect(prompt(root)).toBeVisible();
      if (kind === 'oktaavi') await root.getByRole('button', { name: 'Yhtä korkea' }).click();
      const far = root.locator('.otelauta-lauta tbody tr').first().locator('td').last().locator('button');
      await far.scrollIntoViewIfNeeded();
      await expect(far).toBeInViewport();
    }
  });
}

test('ilman JavaScriptiä: sisällöt, tekstiversiot ja vanhat linkit löytyvät', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(topicPath);
  await page.locator('details#ydinopinnot > summary').click();
  for (const [slug] of lessons) {
    await page.locator(`#valinta-${slug}`).click();
    const card = page.locator(`#valinta-${slug}`).locator('xpath=..');
    await expect(card.locator('[data-otelauta-tila]')).toBeVisible();
    await card.locator('[data-otelauta-teksti] > summary').click();
    await expect(card.getByText('Katso vastaukset')).toBeVisible();
    await expect(card.locator('[data-otelauta-sovellus]')).toBeHidden();
    await expect(card.getByRole('heading', { name: /Kokeile kitaralla/ })).toBeVisible();
  }
  await page.locator('details#aiemmat > summary').click();
  for (const [slug] of legacy) await expect(page.locator(`#valinta-${slug}`)).toHaveAttribute('href', `${slug}.html`);
  await context.close();
});

test('aiemmat kahdeksan sivua avautuvat ennallaan ilman uutta moduulia', async ({ page }) => {
  for (const [slug, id] of legacy) {
    const response = await page.goto(`/oppi/otelauta/${slug}.html`);
    expect(response?.ok(), slug).toBe(true);
    await expect(page.locator('main'), slug).toHaveAttribute('data-study-item', id);
    await expect(page.locator('[data-otelautaharjoitus]'), slug).toHaveCount(0);
  }
});

// Kierros 2 (uusintatesti N1/N2, löydös 6): palaute siellä, missä oppija toimii; ei hyppyjä.
test.describe('palaute aktiivisen vastausalueen lähellä (390 × 664)', () => {
  test.use({ viewport: { width: 390, height: 664 } });

  test('02: vaihe A ilman lautaa, suhteen palaute heti vastauspainikkeiden alla, sitten lauta', async ({ page }) => {
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await expect(root.locator('.otelauta-laudan-alue')).toBeHidden();
    const relations = root.getByRole('group', { name: 'Arvoitussävel on' });
    await relations.scrollIntoViewIfNeeded();
    const scroll = await page.evaluate(() => window.scrollY);
    await relations.getByRole('button', { name: 'Yhtä korkea' }).click();
    await expect(feedback(root)).toBeInViewport();
    const gap = await root.evaluate(section => section.querySelector('.otelauta-palaute')!.getBoundingClientRect().top
      - section.querySelector('.otelauta-suhteet')!.getBoundingClientRect().bottom);
    expect(gap).toBeGreaterThanOrEqual(0);
    expect(gap).toBeLessThan(40);
    expect(await page.evaluate(() => window.scrollY)).toBe(scroll);
    await expect(root.locator('.otelauta-laudan-alue')).toBeVisible();
    // Paikan valinnan palaute ja Uusi tehtävä ovat paikkapainikkeiden vieressä.
    await root.getByRole('group', { name: 'Missä arvoitussävel soi?' }).getByRole('button').first().click();
    await expect(feedback(root)).toBeInViewport();
    await expect(next(root)).toBeInViewport();
  });

  test('03 nimeä: palaute sävelnimipainikkeiden alla ilman vieritystä', async ({ page }) => {
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    const root = exercise(page, 'perussavel');
    for (let guard = 0; guard < 12 && !(await prompt(root).textContent())!.startsWith('Mikä sävel'); guard++) {
      await root.getByRole('button', { name: 'Näytä vastaus' }).click();
      await next(root).click();
    }
    const names = root.getByRole('group', { name: 'Sävelen nimi' });
    await names.evaluate(node => node.scrollIntoView({ block: 'center' }));
    const scroll = await page.evaluate(() => window.scrollY);
    const [string, fret] = await marked(root, 'kysytty');
    const wrong = ['C', 'D', 'E', 'F', 'G', 'A', 'B'].find(name => name !== noteName(pitchAt(string, fret)))!;
    await names.getByRole('button', { name: wrong, exact: true }).click();
    await expect(feedback(root)).toBeInViewport();
    await expect(feedback(root)).toContainText(`Ei ${wrong}.`);
    expect(await page.evaluate(() => window.scrollY)).toBe(scroll);
  });

  for (const [slug, kind] of [['sama-savel-toiselta-kielelta', 'unisono'], ['liiku-otelaudalla', 'liiku']] as const) {
    test(`${kind}: laudan alaosan napautus ei siirrä ruutua, ja ruudussa näkyy tulos`, async ({ page }) => {
      await page.goto(`/oppi/otelauta/${slug}.html`);
      const root = exercise(page, kind);
      if (kind === 'liiku') await root.getByLabel('Laajuus').selectOption('kaikki');
      const target = kind === 'liiku' ? (await prompt(root).textContent())!.match(/^Etsi kaikki (\S+)-sävelet/)![1] : 'A';
      const low = kind === 'liiku'
        ? findPositions(target, 'kaikki').filter(position => position.fret >= 7).at(-1)!
        : { string: 'E', fret: 10 };
      const tapped = cell(root, low.string, low.fret);
      await tapped.evaluate(node => node.scrollIntoView({ block: 'center' }));
      const before = await tapped.evaluate(node => node.getBoundingClientRect().top);
      await tapped.click();
      await expect(feedback(root)).not.toBeEmpty();
      const after = await tapped.evaluate(node => node.getBoundingClientRect().top);
      expect(Math.abs(after - before)).toBeLessThanOrEqual(1);
      await expect(tapped).toBeInViewport();
      await expect(tapped.locator('.otelauta-merkki')).not.toBeEmpty();
      if (kind === 'unisono') await expect(tapped).toHaveText('↑5');
      if (kind === 'liiku') {
        await expect(root.locator('.otelauta-laskuri')).toBeInViewport();
        await expect(root.locator('.otelauta-laskuri')).toHaveText(`Löydetty 1/${findPositions(target, 'kaikki').length}`);
      }
    });
  }

  test('04: viimeinen löytö (valmistuminen) ei siirrä napautettua ruutua eikä jätä sitä ruudun ulkopuolelle', async ({ page }) => {
    await page.goto('/oppi/otelauta/liiku-otelaudalla.html');
    const root = exercise(page, 'liiku');
    const target = (await prompt(root).textContent())!.match(/^Etsi kaikki (\S+)-sävelet/)![1];
    const all = findPositions(target, 'ea');
    // Viimeiseksi laudan alimpana oleva paikka: valmistuminen näyttää uudet painikkeet laudan yläpuolella.
    const ordered = [...all].sort((a, b) => a.fret - b.fret);
    for (const position of ordered.slice(0, -1)) await cell(root, position.string, position.fret).click();
    const last = ordered.at(-1)!;
    const tapped = cell(root, last.string, last.fret);
    await tapped.evaluate(node => node.scrollIntoView({ block: 'center' }));
    const before = await tapped.evaluate(node => node.getBoundingClientRect().top);
    await tapped.click();
    await expect(root.locator('.otelauta-laskuri')).toHaveText(`✓ Kaikki ${all.length} löytyi`);
    await expect(root.getByRole('button', { name: '▶ Kuuntele löydetyt' })).toBeVisible();
    const after = await tapped.evaluate(node => node.getBoundingClientRect().top);
    expect(Math.abs(after - before)).toBeLessThanOrEqual(1);
    await expect(tapped).toBeInViewport();
  });

  test('02: paikan valinta laudan alaosasta kertoo tuloksen ruudussa ja laudan alla, ruutu ei siirry', async ({ page }) => {
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await root.getByRole('button', { name: 'Yhtä korkea' }).click();
    const places = await root.locator('button.is-paikka').evaluateAll(nodes => nodes.map(node => [node.getAttribute('data-kieli'), Number(node.getAttribute('data-nauha'))] as [string, number]));
    const [string, fret] = places.sort((a, b) => b[1] - a[1])[0];
    const tapped = cell(root, string, fret);
    await tapped.evaluate(node => node.scrollIntoView({ block: 'center' }));
    const before = await tapped.evaluate(node => node.getBoundingClientRect().top);
    await tapped.click();
    const after = await tapped.evaluate(node => node.getBoundingClientRect().top);
    expect(Math.abs(after - before)).toBeLessThanOrEqual(1);
    await expect(tapped.locator('.otelauta-merkki')).toHaveText(/^[✓✗]/);
    await expect(tapped).toHaveAccessibleName(/valittu, (oikein|väärin)/);
    const note = root.locator('.otelauta-lautahuomio');
    await expect(note).toHaveText(/^[✓✗] Paikka \d: /);
    await expect(note).toBeInViewport();
    // Ennen valintaa ei vastausta eikä tulosriviä.
  });

  test('02: tulosrivi on piilossa ennen paikan valintaa', async ({ page }) => {
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await expect(root.locator('.otelauta-lautahuomio')).toBeHidden();
    await root.getByRole('button', { name: 'Yhtä korkea' }).click();
    await expect(root.locator('.otelauta-lautahuomio')).toBeHidden();
  });

  test('Uusi tehtävä laudan alta tuo uuden tehtävälauseen näkyviin ja fokukseen', async ({ page }) => {
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    await cell(root, 'E', 5).click();
    await nextBottom(root).scrollIntoViewIfNeeded();
    await nextBottom(root).click();
    await expect(prompt(root)).toBeFocused();
    await expect(prompt(root)).toBeInViewport();
    await expect(root.locator('.otelauta-kierros')).toHaveText('Tehtävä 2');
    await expect(nextBottom(root)).toBeHidden();
  });
});
