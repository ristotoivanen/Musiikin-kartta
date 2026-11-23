import { expect, test, type Locator, type Page } from '@playwright/test';

// Otelaudan Ydinopinnot (#116, vaihe 3). Testit todentavat käyttöliittymän, palautteen, tunnisteet,
// näppäimistön, reflow'n ja Web Audio -kutsujen taajuudet mykistetyssä selaimessa. Ne eivät todenna
// äänenlaatua, fyysistä iPhonea/Androidia, ruudunlukijan puhetta eivätkä soittoa oikealla kitaralla.

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
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);

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

test.describe('aihesivu', () => {
  test('Ydinopinnot ensin, aiemmat kahdeksan sisältöä entisillä osoitteilla, molemmat oletuksena suljettuina', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.getByRole('heading', { level: 1, name: 'Otelauta' })).toBeVisible();
    await expect(page.locator('.lead')).toContainText('Missä sävel on kitaralla?');
    await expect(page.locator('details.study-unit')).toHaveCount(2);
    await expect(core(page)).not.toHaveAttribute('open', '');
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await core(page).locator(':scope > summary').click();
    await expect(core(page).locator(':scope > summary')).toContainText('4 sisältöä');
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('0/4 kokeiltu');
    await expect(core(page).getByText('Aloita tästä', { exact: true })).toBeVisible();
    for (const [slug, title] of lessons) {
      const summary = page.locator(`#valinta-${slug}`);
      await expect(summary).toContainText(title);
      await summary.click();
      await expect(summary.locator('xpath=..').getByRole('link', { name: 'Avaa omalla sivullaan' })).toHaveAttribute('href', `${slug}.html`);
      await summary.click();
    }
    await earlier(page).locator(':scope > summary').click();
    await expect(core(page)).not.toHaveAttribute('open', '');
    await expect(earlier(page).locator(':scope > summary')).toContainText('Aiemmat oppitunnit ja harjoitukset');
    await expect(earlier(page).locator(':scope > summary')).toContainText('8 sisältöä');
    expect(await earlier(page).locator('a.study-choice').evaluateAll(all => all.map(a => [a.id, a.getAttribute('href')])))
      .toEqual(legacy.map(([slug]) => [`valinta-${slug}`, `${slug}.html`]));
    await expect(page.getByRole('link', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Tutki otelautakarttaa' })).toBeVisible();
    expect(await noHorizontalScroll(page)).toBe(true);
  });

  test('vanhat merkinnät säilyvät; uusi kokeilu tallentuu omalla tunnisteellaan eikä muuta aiempaa laskuria', async ({ page }) => {
    await page.goto(topicPath);
    const old = ['otelauta', 'harjoitus:etsi-sama-savel', 'harmoninen-kentta'];
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(old)]);
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const mark = page.locator('.done-toggle');
    await expect(mark).toHaveText('Merkitse kokeilluksi');
    await mark.click();
    await expect(mark).toHaveText('✓ Kokeiltu');
    await expect(mark).toHaveAttribute('aria-pressed', 'true');
    const saved = JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!);
    expect(saved).toEqual([...old, 'harjoitus:kuule-oktaavi']);

    await page.goto(topicPath);
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('1/4 kokeiltu');
    await expect(core(page).locator('#valinta-kuule-oktaavi [data-study-attempt-status]')).toHaveText('✓ Kokeiltu');
    await expect(core(page).locator('#valinta-liiku-otelaudalla [data-study-attempt-status]')).toHaveText('Kokeilematta');
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('2/8 aiemmista sisällöistä tehty');
    await expect(earlier(page).locator('[data-study-status="otelauta"]')).toHaveText('✓ Tehty');
    await expect(earlier(page).locator('[data-study-status="harjoitus:etsi-sama-savel"]')).toHaveText('✓ Tehty');

    await page.goto('/index.html');
    await expect(page.locator('#aihe-otelauta .topic-status')).toHaveText('2/8 aiemmista sisällöistä tehty');
  });

  test('oma sivu palaa aihesivun saman harjoituksen korttiin', async ({ page }) => {
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    await expect(page.locator('main.study-page--focus')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1, name: 'Etsi perussävel E- ja A-kieleltä' })).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin aiheeseen: Otelauta' }).click();
    await expect(page).toHaveURL(/\/oppi\/otelauta\/index\.html#valinta-perussavel-e-ja-a-kielelta$/);
    await expect(page.locator('#valinta-perussavel-e-ja-a-kielelta')).toBeFocused();
    await expect(core(page)).toHaveAttribute('open', '');
  });
});

test.describe('01 · Sama sävel toiselta kieleltä', () => {
  test('palaute, oikea vastaus, näytetty vastaus ja yhteenveto', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    await expect(root.locator('[data-otelauta-tila]')).toBeHidden();
    await expect(root.locator('.otelauta-tehtava')).toHaveText('Vapaa A-kieli soi A2. Etsi yhtä korkea A paksulta E-kieleltä.');
    await expect(cell(root, 'A', 0)).toHaveAccessibleName('vapaa A-kieli, lähtösävel A2');

    await cell(root, 'E', 7).click();
    await expect(feedback(root)).toContainText('soi B2, kaksi puoliaskelta korkeampi kuin A2. Siirry kaksi nauhaa alemmas');
    await expect(feedback(root)).toHaveAttribute('role', 'status');
    await expect(cell(root, 'E', 7)).toHaveAccessibleName(/kokeiltu, B2/);
    await cell(root, 'E', 5).click();
    await expect(feedback(root)).toContainText('Oikein! Paksun E-kielen 5. nauha ja vapaa A-kieli soivat molemmat A2.');
    // Kuultu sävel vastaa valittua paikkaa: E 7 = B2 ≈ 123,47 Hz, E 5 = A2 = 110 Hz.
    await expect.poll(() => frequencies(page)).toEqual([123.47, 110]);

    const next = root.getByRole('button', { name: 'Seuraava tehtävä →' });
    await next.click();
    await expect(root.locator('.otelauta-tehtava')).toBeFocused();
    await expect(root.locator('.otelauta-kierros')).toHaveText('Tehtävä 2/6');
    await cell(root, 'A', 5).click();
    await next.click();
    await cell(root, 'D', 5).click();
    await next.click();
    // G–B-poikkeus: G 5 on puoliaskelen liian korkea.
    await cell(root, 'G', 5).click();
    await expect(feedback(root)).toContainText('C4, puoliaskelen korkeampi kuin B3');
    await root.getByRole('button', { name: 'Vihje' }).click();
    await expect(feedback(root)).toContainText('G- ja B-kielen väli: neljä nauhaa');
    await cell(root, 'G', 4).click();
    await expect(feedback(root)).toContainText('neljä nauhaa ylempänä');
    await next.click();
    await root.getByRole('button', { name: 'Näytä vastaus' }).click();
    await expect(feedback(root)).toContainText('Vastaus: paksun E-kielen 8. nauha.');
    await next.click();
    await cell(root, 'G', 7).click();
    await expect(root.locator('.otelauta-tehtava')).toHaveText('Kaikki tehtävät tehty.');
    await expect(feedback(root)).toContainText('Valmis: 6 tehtävää. Ensimmäisellä yrityksellä 3, useammalla yrityksellä 1, vihjeen avulla 1, vastaus näytettiin 1.');
    await root.getByRole('button', { name: 'Aloita alusta' }).click();
    await expect(root.locator('.otelauta-kierros')).toHaveText('Tehtävä 1/6');
  });

  test('ääni otelaudalla voidaan kytkeä pois', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    const toggle = root.getByRole('button', { name: 'Ääni otelaudalla' });
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await cell(root, 'E', 5).click();
    await expect(feedback(root)).toContainText('Oikein!');
    expect(await frequencies(page)).toEqual([]);
    await root.getByRole('button', { name: 'Kuuntele molemmat' }).click();
    await expect.poll(() => frequencies(page)).toEqual([110, 110]);
  });

  test('näppäimistö: otelaudalla on yksi sarkainpysähdys ja nuolinäppäimet', async ({ page }) => {
    await page.goto('/oppi/otelauta/sama-savel-toiselta-kielelta.html');
    const root = exercise(page, 'unisono');
    await root.getByRole('button', { name: 'Ääni otelaudalla' }).focus();
    await page.keyboard.press('Tab');
    await expect(cell(root, 'E', 0)).toBeFocused();
    await expect(root.locator('table[role="grid"] button[tabindex="0"]')).toHaveCount(1);
    for (let i = 0; i < 5; i++) await page.keyboard.press('ArrowDown');
    await expect(cell(root, 'E', 5)).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(cell(root, 'A', 5)).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.press('Enter');
    await expect(feedback(root)).toContainText('Oikein!');
    await page.keyboard.press('Tab');
    await expect(root.getByRole('button', { name: 'Seuraava tehtävä →' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(root.locator('.otelauta-tehtava')).toBeFocused();
    // Uudessa tehtävässä laudalla on yhä tasan yksi sarkainpysähdys.
    await expect(root.locator('table[role="grid"] button[tabindex="0"]')).toHaveCount(1);
  });
});

test.describe('02 · Kuule ja löydä oktaavi', () => {
  test('arvoitussävel, vastaus ja vertailu', async ({ page }) => {
    await recordFrequencies(page);
    await page.goto('/oppi/otelauta/kuule-oktaavi.html');
    const root = exercise(page, 'oktaavi');
    await expect(root.locator('.otelauta-tehtava')).toContainText('Lähtösävel: G-kielen 2. nauha (A3).');
    // Ennen vastausta arvoitussäveltä ei paljasteta paikan nimessä.
    await expect(root.locator('[data-kieli="e"][data-nauha="5"]')).toHaveAccessibleName('ohuen e-kielen 5. nauha, paikka 3');
    await expect(root.getByRole('button', { name: /Kuuntele paikka/ })).toHaveCount(0);
    await root.getByRole('button', { name: 'Kuuntele lähtösävel' }).click();
    await root.getByRole('button', { name: 'Kuuntele arvoitussävel' }).click();
    await expect.poll(() => frequencies(page)).toEqual([220, 440]);
    await root.getByRole('button', { name: 'Paikka 2 · D 7' }).click();
    await expect(feedback(root)).toContainText('Arvoitussävel oli paikka 3: ohuen e-kielen 5. nauha (A4), oktaavia korkeampi');
    await expect(feedback(root)).toContainText('D 7 (A3), on yhtä korkea');
    await expect(root.locator('[data-kieli="e"][data-nauha="5"]')).toHaveAccessibleName(/A4, oktaavia korkeampi, arvoitussävel/);
    await root.getByRole('button', { name: 'Kuuntele paikka 1' }).click();
    await expect.poll(() => frequencies(page)).toEqual([220, 440, 110]);
    await root.getByRole('button', { name: 'Seuraava tehtävä →' }).click();
    await expect(root.locator('.otelauta-tehtava')).toBeFocused();
    await root.getByRole('button', { name: 'Paikka 1 · E 3' }).click();
    await expect(feedback(root)).toContainText('Oikein! Arvoitussävel oli paikka 1: paksun E-kielen 3. nauha (G2), oktaavia matalampi');
  });
});

test.describe('03 · Etsi perussävel E- ja A-kieleltä', () => {
  test('etsi- ja nimeä-tehtävät', async ({ page }) => {
    await page.goto('/oppi/otelauta/perussavel-e-ja-a-kielelta.html');
    const root = exercise(page, 'perussavel');
    await expect(root.locator('thead th[data-kieli]')).toHaveText(['E', 'A']);
    await expect(root.locator('.otelauta-tehtava')).toHaveText('Etsi G paksulta E-kieleltä.');
    await cell(root, 'A', 3).click();
    await expect(feedback(root)).toContainText('Etsi G paksulta E-kieleltä.');
    await cell(root, 'E', 3).click();
    await expect(feedback(root)).toContainText('Oikein! Paksun E-kielen 3. nauha on G (G2).');
    const next = root.getByRole('button', { name: 'Seuraava tehtävä →' });
    await next.click();
    await cell(root, 'A', 3).click();
    await next.click();
    await expect(root.locator('.otelauta-tehtava')).toHaveText('Mikä sävel soi paksun E-kielen 5. nauhalla? Valitse sävelen nimi.');
    const names = root.getByRole('group', { name: 'Valitse sävelen nimi' });
    await names.getByRole('button', { name: 'G', exact: true }).click();
    await expect(feedback(root)).toContainText('ei ole G');
    await expect(names.getByRole('button', { name: 'G', exact: true })).toHaveAttribute('aria-disabled', 'true');
    await names.getByRole('button', { name: 'A', exact: true }).click();
    await expect(feedback(root)).toContainText('Oikein! Paksun E-kielen 5. nauha on A.');
  });
});

test.describe('04 · Liiku otelaudalla', () => {
  test('kaikki D:t oktaaveittain ja siirtyminen F:ään', async ({ page }) => {
    await page.goto('/oppi/otelauta/liiku-otelaudalla.html');
    const root = exercise(page, 'liiku');
    await expect(root.locator('.otelauta-tehtava')).toContainText('Etsi kaikki D-sävelet nauhoilta 0–12. Niitä on 7.');
    await cell(root, 'B', 5).click();
    await expect(feedback(root)).toContainText('soi E, ei D. Tällä kielellä lähin D on alempana');
    await cell(root, 'A', 5).click();
    await expect(feedback(root)).toContainText('Uusi korkeus: D3. Löydetty 1/7.');
    await cell(root, 'D', 0).click();
    await expect(feedback(root)).toContainText('Sama korkeus kuin A 5.');
    await root.getByRole('button', { name: 'Vihje: näytä yksi paikka' }).click();
    await expect(feedback(root)).toContainText('Vihje: tutki merkittyä paikkaa E 10.');
    for (const [string, fret] of [['E', 10], ['D', 12], ['G', 7], ['B', 3], ['e', 10]] as const) await cell(root, string, fret).click();
    await expect(feedback(root)).toContainText('Kaikki 7 D-säveltä löytyi nauhoilta 0–12. Korkeudet: D3 × 3, D4 × 3, D5 × 1.');
    await expect(feedback(root)).toContainText('Vihjeitä käytit 1.');
    await expect(root.locator('.otelauta-loydot li')).toHaveText(['D3: E 10, A 5, vapaa D', 'D4: D 12, G 7, B 3', 'D5: e 10']);
    await expect(root.getByRole('button', { name: 'Kuuntele löydetyt matalimmasta korkeimpaan' })).toBeVisible();
    await root.getByRole('button', { name: 'Seuraava tehtävä →' }).click();
    await expect(root.locator('.otelauta-tehtava')).toContainText('Etsi kaikki F-sävelet nauhoilta 0–12. Niitä on 6.');
    await expect(root.locator('.otelauta-loydot li')).toHaveCount(0);
  });
});

test.describe('aihesivun sisäiset harjoitukset', () => {
  test('neljä harjoitusta toimivat samalla sivulla toisistaan riippumatta', async ({ page }) => {
    await page.goto(topicPath);
    await core(page).locator(':scope > summary').click();
    await page.locator('#valinta-sama-savel-toiselta-kielelta').click();
    const first = exercise(page, 'unisono');
    await cell(first, 'E', 5).click();
    await expect(feedback(first)).toContainText('Oikein!');
    await page.locator('#valinta-liiku-otelaudalla').click();
    await expect(page.locator('#valinta-sama-savel-toiselta-kielelta').locator('xpath=..')).not.toHaveAttribute('open', '');
    const last = exercise(page, 'liiku');
    await cell(last, 'A', 5).click();
    await expect(feedback(last)).toContainText('Löydetty 1/7');
    expect(await noHorizontalScroll(page)).toBe(true);
  });
});

for (const width of [320, 360, 390]) {
  test(`${width} px: aihesivu ja harjoitukset ilman sivun vaakavieritystä`, async ({ page }) => {
    await page.setViewportSize({ width, height: 700 });
    await page.goto(topicPath);
    await core(page).locator(':scope > summary').click();
    await page.locator('#valinta-sama-savel-toiselta-kielelta').click();
    expect(await noHorizontalScroll(page)).toBe(true);
    const inline = exercise(page, 'unisono').locator('.otelauta-kehys');
    expect(await inline.evaluate(node => node.scrollWidth <= node.clientWidth + 1), 'aihesivun lauta').toBe(true);
    for (const [slug, , kind] of lessons) {
      await page.goto(`/oppi/otelauta/${slug}.html`);
      expect(await noHorizontalScroll(page), slug).toBe(true);
      // Otelauta mahtuu kokonaan; kosketuskohteet ovat vähintään 24 px (AA) ja korkeudeltaan 44 px.
      const frame = exercise(page, kind).locator('.otelauta-kehys');
      const fits = await frame.evaluate(node => node.scrollWidth <= node.clientWidth + 1);
      expect(fits, slug).toBe(true);
      const sizes = await exercise(page, kind).locator('.otelauta-lauta td > :is(button, span)').evaluateAll(nodes =>
        nodes.map(node => node.getBoundingClientRect()).map(rect => [Math.round(rect.width), Math.round(rect.height)]));
      expect(sizes.every(([w, h]) => w >= 24 && h >= 44), slug).toBe(true);
    }
  });
}

test('200 % tekstikoko 360 px leveydellä: sivu rivittyy, otelaudan vieritys pysyy laudan sisällä', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 700 });
  for (const [slug, , kind] of lessons) {
    await page.goto(`/oppi/otelauta/${slug}.html`);
    await page.addStyleTag({ content: 'html { font-size: 200% !important; }' });
    expect(await noHorizontalScroll(page), slug).toBe(true);
    const root = exercise(page, kind);
    await expect(root.locator('.otelauta-tehtava')).toBeVisible();
    const frame = root.locator('.otelauta-kehys');
    const box = await frame.boundingBox();
    expect(box!.x + box!.width, slug).toBeLessThanOrEqual(361);
    // Kaukaisin kieli on saavutettavissa laudan omalla vierityksellä.
    const far = root.locator('.otelauta-lauta tbody tr').first().locator('td').last().locator('button, span').first();
    await far.scrollIntoViewIfNeeded();
    await expect(far).toBeInViewport();
  }
});

test('ilman JavaScriptiä: sisällöt, tekstitehtävät ja vanhat linkit löytyvät', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(topicPath);
  await page.locator('details#ydinopinnot > summary').click();
  for (const [slug, title] of lessons) {
    await page.locator(`#valinta-${slug}`).click();
    const card = page.locator(`#valinta-${slug}`).locator('xpath=..');
    await expect(card.getByText('Virtuaali', { exact: false }).or(card.getByText('Kuuntelutehtävä tarvitsee JavaScriptin', { exact: false })).first()).toBeVisible();
    await card.getByText('Tehtävät tekstinä ja vastaukset').click();
    await expect(card.getByText('Katso vastaukset')).toBeVisible();
    await expect(card.locator('[data-otelauta-sovellus]')).toBeHidden();
    await expect(card.getByRole('heading', { name: /Kokeile kitaralla/ })).toBeVisible();
    expect(title.length).toBeGreaterThan(0);
  }
  await page.locator('details#aiemmat > summary').click();
  for (const [slug] of legacy) await expect(page.locator(`#valinta-${slug}`)).toHaveAttribute('href', `${slug}.html`);
  await page.goto('/oppi/otelauta/liiku-otelaudalla.html');
  await expect(page.locator('[data-otelauta-tila]')).toBeVisible();
  await expect(page.locator('.otelauta-lauta')).toHaveCount(0);
  await context.close();
});

test('aiemmat kahdeksan sivua avautuvat ennallaan ilman uutta moduulia', async ({ page }) => {
  for (const [slug, id] of legacy) {
    const response = await page.goto(`/oppi/otelauta/${slug}.html`);
    expect(response?.ok(), slug).toBe(true);
    await expect(page.locator('main'), slug).toHaveAttribute('data-study-item', id);
    await expect(page.locator('.done-toggle'), slug).toContainText('tehdyksi');
    await expect(page.locator('[data-otelautaharjoitus]'), slug).toHaveCount(0);
  }
});
