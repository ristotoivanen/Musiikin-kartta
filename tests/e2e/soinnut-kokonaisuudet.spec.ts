import { expect, test, type Page } from '@playwright/test';

// #116: Soinnut ja harmonia -aihesivun avattavat oppimiskokonaisuudet, kolme uutta harjoitusta ja
// aiempien 18 sisällön säilyminen. Äänitestit mittaavat ajoituksen Web Audion kutsuista; ne eivät
// todista äänenlaatua eivätkä iPhone/Safari-toimivuutta (fyysinen laitetesti on erillinen ehto).

const topicPath = '/oppi/soinnut/index.html';
const readingKey = 'musiikin-kartta:luvut';
const newLessons = [
  ['kuule-mika-on-sointu', 'Kuule, mikä on sointu'],
  ['rakenna-g-duurisointu', 'Rakenna G-duurisointu'],
  ['kokeile-g-sointua-kitaralla', 'Kokeile G-sointua kitaralla'],
] as const;
// Aiemmat 18 sisältöä: osoite ja suoritustunniste kuten betassa ennen #116:ta.
const legacy = [
  ['harmoninen-kentta', 'harmoninen-kentta'], ['kolme-sointua-g-duurista', 'harjoitus:kolme-sointua-g-duurista'],
  ['kaikuluotain', 'harjoitus:kaikuluotain'], ['roomalaiset-numerot', 'roomalaiset-numerot'],
  ['siirra-kierto-d-duuriin', 'harjoitus:siirra-kierto-d-duuriin'], ['sointujen-tehtavat', 'sointujen-tehtavat'],
  ['laula-paluu', 'harjoitus:laula-paluu'], ['kvinttiympyra', 'kvinttiympyra'],
  ['siirra-keskelle-d', 'harjoitus:siirra-keskelle-d'], ['barre', 'barre'],
  ['etsi-barresointu', 'harjoitus:etsi-barresointu'], ['rakenna-barre', 'harjoitus:rakenna-barre'],
  ['siirra-kierto-c-duuriin', 'harjoitus:siirra-kierto-c-duuriin'], ['septimisoinnut', 'septimisoinnut'],
  ['lisaa-septimi', 'harjoitus:lisaa-septimi'], ['soita-septimisoinnut', 'harjoitus:soita-septimisoinnut'],
  ['ii-v-i', 'ii-v-i'], ['ii-v-i-kahdessa-savellajissa', 'harjoitus:ii-v-i-kahdessa-savellajissa'],
] as const;

const core = (page: Page) => page.locator('details#miten-sointu-muodostuu');
const pilotPath = topicPath + '#miten-sointu-muodostuu';
const earlier = (page: Page) => page.locator('details#aiemmat');
const storage = (page: Page) => page.evaluate(key => localStorage.getItem(key), readingKey);
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);

test.describe('aihesivu', () => {
  test('uusi kokonaisuus on auki, aiemmat 18 sisältöä yhden suljetun osion alla', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.getByRole('heading', { level: 1, name: 'Soinnut ja harmonia' })).toBeVisible();
    await expect(core(page)).toBeHidden();
    await page.goto(pilotPath);
    const units = page.locator('details.study-unit');
    await expect(units).toHaveCount(3);
    await expect(core(page)).toHaveAttribute('open', '');
    await expect(core(page).locator('summary')).toHaveText(/^01 Miten sointu muodostuu\?3 sisältöä/);
    await expect(core(page).locator('.study-choice')).toHaveCount(3);
    for (const [slug, title] of newLessons) {
      await expect(core(page).getByRole('link', { name: new RegExp(title) })).toHaveAttribute('href', `${slug}.html`);
    }
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await expect(earlier(page).locator('summary')).toHaveText(/^Aiemmat oppitunnit ja harjoitukset18 sisältöä/);
    // Kummallakin kokonaisuudella on oma laskurinsa otsikkorivillä; uusia ei lasketa aiempiin.
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('0/18 aiemmista sisällöistä tehty');
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('0/3 sisältöä tehty');
    await expect(core(page).locator('summary .study-unit-count')).toBeHidden();
    await expect(core(page).locator('[data-study-status]')).toHaveCount(0);
    await expect(core(page).locator('[data-study-intro-status]')).toHaveText(['Tekemättä', 'Tekemättä', 'Tekemättä']);
    const links = earlier(page).locator('.study-choice');
    await expect(links).toHaveCount(18);
    expect(await links.evaluateAll(all => all.map(a => a.getAttribute('href'))))
      .toEqual(legacy.map(([slug]) => `${slug}.html`));
    await expect(earlier(page).locator('.study-group h2')).toHaveText([
      'Rakenna sointuja asteikosta', 'Ymmärrä sointujen tehtävät ja liike', 'Soita siirrettävillä otteilla', 'Syvenny septimisointuihin',
    ]);
    // Uusi kokonaisuus tulee ennen aiempia, työkalut ja Tutki myös säilyvät.
    const order = await page.locator('details.study-unit, section.study-group > h2').evaluateAll(all =>
      all.map(node => node.id || node.textContent));
    expect(order.slice(0, 3)).toEqual(['ydinopinnot', 'miten-sointu-muodostuu', 'aiemmat']);
    await expect(page.getByRole('link', { name: 'Harjoittele sointuja ja sointusäveliä' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Mikä sointu tulee?' })).toBeVisible();
  });

  test('avaaminen näppäimistöllä ei muuta suoritusmerkintöjä eikä siirry sivulta', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await page.goto(topicPath);
    await page.evaluate(key => localStorage.setItem(key, JSON.stringify(['harmoninen-kentta', 'harjoitus:laula-paluu'])), readingKey);
    await page.reload();
    const before = await storage(page);
    const summary = earlier(page).locator('summary');
    await summary.focus();
    await expect(summary).toBeFocused();
    await expect(summary).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(earlier(page)).toHaveAttribute('open', '');
    await expect(earlier(page).getByRole('link', { name: /Harmoninen kenttä/ })).toBeVisible();
    await page.keyboard.press('Space');
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await expect(page).toHaveURL(topicPath);
    expect(await storage(page)).toBe(before);
  });

  test('aiemmat suoritusmerkinnät näkyvät ennallaan, uusia ei merkitä niiden perusteella', async ({ page }) => {
    await page.goto(topicPath);
    const old = legacy.map(([, id]) => id);
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids.slice(0, 7))), [readingKey, old] as const);
    await page.reload();
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('7/18 aiemmista sisällöistä tehty');
    await expect(earlier(page).locator('summary .study-unit-count')).toBeHidden();
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids)), [readingKey, old] as const);
    await page.reload();
    await earlier(page).locator('summary').click();
    for (const [slug] of legacy) {
      await expect(page.locator(`#valinta-${slug} .study-status`)).toHaveText('✓ Tehty');
    }
    // Sama laskenta kuin ennen (18/18), mutta teksti ei väitä koko aihetta suoritetuksi.
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');
    // Vanhat merkinnät eivät kuittaa uusia harjoituksia.
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('0/3 sisältöä tehty');
    await expect(core(page).locator('[data-study-intro-status]')).toHaveText(['Tekemättä', 'Tekemättä', 'Tekemättä']);
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(old);
    await page.goto('/index.html#aihe-soinnut');
    await expect(page.locator('#aihe-soinnut .topic-status')).toHaveText('✓ Aiemmat sisällöt tehty');
  });

  test('uuden oppitunnin merkintä tallentuu omaan tunnisteeseensa eikä muuta aiempien laskuria', async ({ page }) => {
    await page.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    await page.getByRole('button', { name: 'Merkitse oppitunti tehdyksi' }).click();
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(['oppitunti:kuule-mika-on-sointu']);
    await page.goto(topicPath);
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('1/3 sisältöä tehty');
    await expect(page.locator('#valinta-kuule-mika-on-sointu [data-study-intro-status]')).toHaveText('✓ Tehty');
    await expect(page.locator('#valinta-rakenna-g-duurisointu [data-study-intro-status]')).toHaveText('Tekemättä');
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('0/18 aiemmista sisällöistä tehty');
    await page.goto('/index.html#aihe-soinnut');
    await expect(page.locator('#aihe-soinnut .topic-status')).toHaveText('0/18 aiemmista sisällöistä tehty');
  });

  test('kaikki kolme uutta tehtyinä: kokonaisuus valmis, aiemmat ennallaan, toisen välilehden muutos päivittyy', async ({ page, context }) => {
    await page.goto(topicPath);
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids)),
      [readingKey, newLessons.map(([slug]) => `oppitunti:${slug}`)] as const);
    await page.reload();
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('3/3 sisältöä tehty');
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveClass(/is-done/);
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('0/18 aiemmista sisällöistä tehty');
    const other = await context.newPage();
    await other.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    await other.getByRole('button', { name: '✓ Oppitunti tehty' }).click();
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('2/3 sisältöä tehty');
    await expect(page.locator('#valinta-kuule-mika-on-sointu [data-study-intro-status]')).toHaveText('Tekemättä');
  });

  test('jokainen uuden kortin tilarivi päivittyy kerran muutosta kohti (yksi kirjoittaja)', async ({ page, context }) => {
    await page.goto(topicPath);
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('0/3 sisältöä tehty');
    // Laske tilarivien tekstinvaihdot: edistyminen.js (PR #111:n jälkeen) tai kokonaisuudet.js, ei molemmat.
    await page.evaluate(() => {
      const rows = [...document.querySelectorAll('[data-study-intro-status]')];
      (window as unknown as { __writes: number[] }).__writes = rows.map(() => 0);
      rows.forEach((row, index) => new MutationObserver(records => {
        (window as unknown as { __writes: number[] }).__writes[index] += records.filter(record => record.type === 'childList').length;
      }).observe(row, { childList: true }));
    });
    const other = await context.newPage();
    await other.goto('/oppi/soinnut/rakenna-g-duurisointu.html');
    await other.getByRole('button', { name: 'Merkitse oppitunti tehdyksi' }).click();
    await expect(core(page).locator('summary [data-unit-progress]')).toHaveText('1/3 sisältöä tehty');
    await expect(page.locator('#valinta-rakenna-g-duurisointu [data-study-intro-status]')).toHaveText('✓ Tehty');
    expect(await page.evaluate(() => (window as unknown as { __writes: number[] }).__writes)).toEqual([1, 1, 1]);
  });

  test('paluu aiemmasta sisällöstä avaa osion ja kohdistaa valittuun linkkiin', async ({ page }) => {
    await page.goto(topicPath);
    await earlier(page).locator('summary').click();
    await earlier(page).getByRole('link', { name: /Etsi barré-sointu/ }).click();
    await expect(page).toHaveURL(/oppi\/soinnut\/etsi-barresointu\.html$/);
    await expect(page.locator('main')).toHaveAttribute('data-study-item', 'harjoitus:etsi-barresointu');
    await page.goBack();
    await expect(page).toHaveURL(topicPath);
    await expect(earlier(page)).toHaveAttribute('open', '');
    await expect(page.locator('#valinta-etsi-barresointu')).toBeFocused();
  });

  test('suora linkki osioon tai aiempaan sisältöön avaa sen', async ({ page }) => {
    await page.goto(`${topicPath}#aiemmat`);
    await expect(earlier(page)).toHaveAttribute('open', '');
    await page.goto(`${topicPath}#valinta-septimisoinnut`);
    await expect(earlier(page)).toHaveAttribute('open', '');
    await expect(page.locator('#valinta-septimisoinnut')).toBeInViewport();
  });

  test('vanhat suorat osoitteet, tunnisteet ja Edellinen/Seuraava toimivat', async ({ page }) => {
    for (const [slug, id] of legacy) {
      const response = await page.goto(`/oppi/soinnut/${slug}.html`);
      expect(response?.status(), slug).toBe(200);
      await expect(page.locator('main')).toHaveAttribute('data-study-item', id);
      await expect(page.locator('.study-up .study-back')).toHaveText('← Sointuihin ja harmoniaan');
    }
    await page.goto('/oppi/soinnut/harmoninen-kentta.html');
    await expect(page.locator('.study-meta')).toHaveText('Oppitunti 01 / 18 Teoriaoppaan luku 6');
    await expect(page.locator('.study-steps--top a[rel="prev"]')).toHaveCount(0);
    await expect(page.locator('.study-steps--top a[rel="next"]')).toHaveAttribute('href', 'kolme-sointua-g-duurista.html');
    await page.goto('/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html');
    await expect(page.locator('.study-steps--top a[rel="next"]')).toHaveText(/Seuraava aihe: Asteikot ja moodit/);
    // Vanha teoriaoppaan ankkuri ohjautuu edelleen oikeaan oppituntiin.
    await page.goto('/book/osa-3.html#harmoninen-kentta');
    await expect(page.locator('#harmoninen-kentta')).toBeVisible();
  });

  test('uusilla harjoituksilla on omat tunnisteet ja polku 1 → 2 → 3', async ({ page }) => {
    for (const [index, [slug, title]] of newLessons.entries()) {
      await page.goto(`/oppi/soinnut/${slug}.html`);
      await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
      await expect(page.locator('main')).toHaveAttribute('data-study-item', `oppitunti:${slug}`);
      await expect(page.locator('.study-meta')).toHaveText(`Oppitunti 0${index + 1} / 03 01 · Miten sointu muodostuu?`);
      await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
    }
    await page.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    await expect(page.locator('.study-steps--top a[rel="prev"]')).toHaveCount(0);
    await page.locator('.study-steps--top a[rel="next"]').click();
    await expect(page).toHaveURL(/rakenna-g-duurisointu\.html$/);
    await page.locator('.study-steps--top a[rel="next"]').click();
    await expect(page).toHaveURL(/kokeile-g-sointua-kitaralla\.html$/);
    // Kokonaisuuden viimeisestä oppitunnista palataan aihesivulle, ei jatketa aiempiin sisältöihin.
    await expect(page.locator('.study-steps a[rel="next"]')).toHaveCount(0);
    await page.locator('.study-steps--bottom').getByRole('link', { name: 'Palaa aihesivulle: Soinnut ja harmonia' }).click();
    await expect(page).toHaveURL(`${topicPath}#miten-sointu-muodostuu`);
    await expect(core(page)).toHaveAttribute('open', '');
    await expect(earlier(page)).not.toHaveAttribute('open', '');
  });
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('kaikki sisältölinkit löytyvät ja osiot aukeavat', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.locator('.study-choice')).toHaveCount(24);
    await earlier(page).locator('summary').click();
    await expect(earlier(page).getByRole('link', { name: /Septimisoinnut/ }).first()).toBeVisible();
  });

  test('harjoitukset kertovat periaatteen ja knoppitieto aukeaa', async ({ page }) => {
    await page.goto('/oppi/soinnut/rakenna-g-duurisointu.html');
    await expect(page.getByText(/G-duurin kolmisointu on G–B–D, asteikon 1\., 3\. ja 5\. sävel/)).toBeVisible();
    await expect(page.locator('[data-sointu-ohjaimet]')).toBeHidden();
    await page.goto('/oppi/soinnut/kokeile-g-sointua-kitaralla.html');
    await expect(page.getByRole('img', { name: /^G: paksu E-kieli 3\. nauha/ })).toBeVisible();
    await page.locator('.study-knoppi summary').click();
    await expect(page.getByText('G · B · D · G · B · G')).toBeVisible();
  });
});

test.describe('harjoitukset', () => {
  test('Rakenna G-duurisointu antaa palautteen ja selityksen', async ({ page }) => {
    await page.goto('/oppi/soinnut/rakenna-g-duurisointu.html');
    const status = page.locator('[data-sointu-tila]');
    await expect(status).toHaveText('Voit valita kolme säveltä haluamassasi järjestyksessä.');
    const note = (name: string) => page.getByRole('group', { name: /Valitse kolme säveltä/ }).getByRole('button', { name, exact: true });
    await expect(page.getByRole('group', { name: /Valitse kolme säveltä/ }).getByRole('button')).toHaveCount(7);
    await note('G').click();
    await note('A').click();
    await expect(note('G')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Tarkista valinta' }).click();
    await expect(status).toHaveText('Valitse tasan kolme säveltä ja tarkista sitten.');
    await note('C').click();
    await page.getByRole('button', { name: 'Tarkista valinta' }).click();
    await expect(status).toHaveText(/^Ei vielä\./);
    await expect(page.locator('[data-selitys]')).toBeHidden();
    await page.getByRole('button', { name: 'Tyhjennä' }).click();
    await expect(page.locator('[data-maara]')).toHaveText('0/3');
    for (const name of ['D', 'B', 'G']) await note(name).click();
    await expect(page.locator('[data-valinnat]')).toHaveText('G · B · D');
    await page.getByRole('button', { name: 'Tarkista valinta' }).click();
    await expect(status).toHaveText('Oikein: G, B ja D. Kolmisointu rakentuu asteikon 1., 3. ja 5. sävelestä.');
    await expect(page.getByRole('heading', { name: 'G-duurin kolmisointu on G–B–D' })).toBeVisible();
    // Oikea vastaus ei merkitse oppituntia tehdyksi.
    await expect(page.locator('.done-toggle')).toHaveAttribute('aria-pressed', 'false');
    expect(await storage(page)).toBeNull();
    await expect(note('F ylennetty')).toHaveText('F♯');
  });

  test('ⓘ Knoppitieto on suljettu, kortin oikeassa yläkulmassa eikä vaikuta ääneen', async ({ page }) => {
    await recordAudio(page);
    await page.goto('/oppi/soinnut/kokeile-g-sointua-kitaralla.html');
    const card = page.locator('.study-knoppi-host');
    const knoppi = page.locator('details.study-knoppi');
    const toggle = knoppi.locator('summary');
    await expect(knoppi).not.toHaveAttribute('open', '');
    await expect(page.getByText('G · B · D · G · B · G')).toBeHidden();
    await expect(toggle).toHaveAccessibleName(/G-soinnun kielten sävelet/);
    const [box, area] = [await card.boundingBox(), await toggle.boundingBox()];
    expect(box && area).toBeTruthy();
    expect(area!.width).toBeGreaterThanOrEqual(44);
    expect(area!.height).toBeGreaterThanOrEqual(44);
    expect(box!.x + box!.width - (area!.x + area!.width)).toBeLessThan(16);
    expect(area!.y - box!.y).toBeLessThan(16);
    await toggle.click();
    await expect(page.locator('.sointu-kielet')).toHaveText('G · B · D · G · B · G');
    await expect(page.locator('.study-knoppi-sisalto')).not.toContainText('H');
    await toggle.click();
    await expect(page.getByText('G · B · D · G · B · G')).toBeHidden();
    expect(await page.evaluate(() => window.__audioLog.length)).toBe(0);
    expect(await storage(page)).toBeNull();
  });
});

declare global {
  interface Window {
    __audioLog: { type: 'start' | 'stop'; when: number; at: number; duration?: number }[];
  }
}

// Kirjaa Web Audion lähteiden ajoitus. Ääni ei kuulu (Playwright käynnistää Chromen ilman äänilähtöä).
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

const starts = (page: Page) => page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'start'));
const sizeOf = (button: import('@playwright/test').Locator) => button.evaluate(element => {
  const { width, height } = element.getBoundingClientRect();
  return { width, height };
});
const close = (actual: number, expected: number) => expect(Math.abs(actual - expected)).toBeLessThan(0.002);

test.describe('kitaranäytteet', () => {
  test('peräkkäin 3 × 1,05 s ja yhdessä 3,1 s oikeista AAC-näytteistä', async ({ page }) => {
    await recordAudio(page);
    const files: string[] = [];
    page.on('response', response => {
      if (response.url().includes('/assets/audio/soinnut/')) files.push(`${response.status()} ${response.url().split('/').pop()}`);
    });
    await page.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    const status = page.locator('[data-sointu-tila]');
    await expect(status).toHaveText('Valitse kuuntelutapa. Näytteet on äänitetty oikeasta akustisesta kitarasta.');
    await page.getByRole('button', { name: '▶ Sävelet peräkkäin' }).click();
    await expect(status).toHaveText('G, B ja D soivat peräkkäin.');
    let log = await starts(page);
    expect(log).toHaveLength(3);
    const first = log[0].when;
    log.forEach((entry, index) => {
      close(entry.when - first, index * 1.18);
      expect(entry.duration).toBeGreaterThan(4.9);
    });
    // 0,10 s:n aloitusviive lasketaan currentTime-arvosta, joka etenee 128 näytteen jaksoissa
    // (noin 3 ms) ennen kuin start() kirjautuu; sallitaan siksi muutaman jakson ero.
    expect(first - log[0].at).toBeGreaterThan(0.085);
    expect(first - log[0].at).toBeLessThanOrEqual(0.1001);
    const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop').map(entry => entry.when));
    stops.slice(0, 3).forEach((when, index) => close(when - log[index].when, 1.05 + 0.02));
    expect(files.sort()).toEqual([
      '200 INSGuitarSteel_StringA_Vel02_B2_01.m4a', '200 INSGuitarSteel_StringD_Vel02_D3_01.m4a', '200 INSGuitarSteel_StringLowE_Vel02_G2_01.m4a',
    ]);
    await expect(status).toHaveText('Esimerkki päättyi. Voit kuunnella uudelleen.', { timeout: 6000 });

    await page.evaluate(() => { window.__audioLog = []; });
    await page.getByRole('button', { name: '▶ Sävelet yhdessä' }).click();
    await expect(status).toHaveText('G, B ja D soivat yhdessä.');
    log = await starts(page);
    expect(log).toHaveLength(3);
    log.forEach(entry => close(entry.when, log[0].when));
    const together = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop').map(entry => entry.when));
    together.slice(0, 3).forEach(when => close(when - log[0].when, 3.10 + 0.02));
    // Näytteet ladataan sivulla vain kerran.
    expect(files).toHaveLength(3);
  });

  test('koko G-ote: kuusi kieltä 45 ms välein, soi 3,6 s; uusi esimerkki katkaisee edellisen', async ({ page }) => {
    await recordAudio(page);
    await page.goto('/oppi/soinnut/kokeile-g-sointua-kitaralla.html');
    const status = page.locator('[data-sointu-tila]');
    await page.getByRole('button', { name: '▶ Kuuntele koko G-sointu' }).click();
    await expect(status).toHaveText('Kuulit G-soinnun kaikki kuusi kieltä.');
    const log = await starts(page);
    expect(log).toHaveLength(6);
    log.forEach((entry, index) => close(entry.when - log[0].when, index * 0.045));
    close(log[5].when - log[0].when, 0.225);
    const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop').map(entry => entry.when));
    stops.slice(0, 6).forEach((when, index) => close(when - log[index].when, 3.60 + 0.02));
    // Uusi painallus pysäyttää soivat lähteet heti ja aloittaa alusta.
    await page.evaluate(() => { window.__audioLog = []; });
    await page.getByRole('button', { name: '▶ Kuuntele koko G-sointu' }).click();
    await expect(status).toHaveText('Kuulit G-soinnun kaikki kuusi kieltä.');
    const second = await page.evaluate(() => window.__audioLog);
    expect(second.filter(entry => entry.type === 'stop' && entry.when <= entry.at + 0.026)).toHaveLength(6);
    expect(second.filter(entry => entry.type === 'start')).toHaveLength(6);
    await expect(status).toHaveText('Esimerkki päättyi. Voit kuunnella uudelleen.', { timeout: 6000 });
  });

  test('AAC:n puuttuessa käytetään OGG:tä, ja latausvirhe kerrotaan', async ({ page }) => {
    await recordAudio(page);
    await page.route('**/assets/audio/soinnut/*.m4a', route => route.fulfill({ status: 404, body: '' }));
    await page.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    const status = page.locator('[data-sointu-tila]');
    await page.getByRole('button', { name: '▶ Sävelet yhdessä' }).click();
    await expect(status).toHaveText('G, B ja D soivat yhdessä.');
    expect(await starts(page)).toHaveLength(3);
    await page.unroute('**/assets/audio/soinnut/*.m4a');

    await page.route('**/assets/audio/soinnut/*', route => route.fulfill({ status: 404, body: '' }));
    await page.goto('/oppi/soinnut/kokeile-g-sointua-kitaralla.html');
    await page.getByRole('button', { name: '▶ Kuuntele koko G-sointu' }).click();
    const error = page.locator('[data-sointu-tila]');
    await expect(error).toHaveText('Ääniä ei voitu ladata. Kokeile uudelleen.');
    await expect(error).toHaveClass(/is-error/);
  });

  test('sivun piilottaminen pysäyttää äänen', async ({ page }) => {
    await recordAudio(page);
    await page.goto('/oppi/soinnut/kuule-mika-on-sointu.html');
    await page.getByRole('button', { name: '▶ Sävelet yhdessä' }).click();
    await expect(page.locator('[data-sointu-tila]')).toHaveText('G, B ja D soivat yhdessä.');
    await page.evaluate(() => {
      window.__audioLog = [];
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    const log = await page.evaluate(() => window.__audioLog);
    expect(log.filter(entry => entry.type === 'stop' && entry.when <= entry.at + 0.026)).toHaveLength(3);
  });
});

test.describe('pienet näytöt ja suurennettu teksti', () => {
  const pages = [topicPath, ...newLessons.map(([slug]) => `/oppi/soinnut/${slug}.html`)];
  for (const width of [320, 360, 390]) {
    test(`${width} px ja 200 % teksti ilman vaakavieritystä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      for (const path of pages) {
        await page.goto(path);
        await page.evaluate(() => document.querySelectorAll('details').forEach(details => { details.open = true; }));
        expect(await noHorizontalScroll(page), `${path} ${width}px`).toBe(true);
        await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
        expect(await noHorizontalScroll(page), `${path} ${width}px 200 %`).toBe(true);
      }
    });
  }
});

test.describe('aiempien sisältöjen tilateksti (progress_text)', () => {
  const allOld = legacy.map(([, id]) => id);
  const notWhole = /Aihe käyty läpi/;

  test('kaikki 18 aiempaa tehty, uusia ei: etusivu, Aiemmat-osio ja vanhan sarjan viimeinen sivu', async ({ page }) => {
    await page.goto('/index.html');
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids)), [readingKey, allOld] as const);

    // Etusivu: laskuri kertoo kuvaavansa aiempia sisältöjä, ja sama teksti on linkin saavutettavassa nimessä.
    await page.goto('/index.html#aihe-soinnut');
    const card = page.locator('#aihe-soinnut');
    await expect(card.locator('.topic-status')).toHaveText('✓ Aiemmat sisällöt tehty');
    await expect(card).toHaveAccessibleName(/✓ Aiemmat sisällöt tehty/);
    await expect(card).not.toHaveAccessibleName(notWhole);
    // Muiden aiheiden oletusteksti säilyy.
    await expect(page.locator('#aihe-rytmi .topic-status')).toHaveText('0/4 sisältöä tehty');

    // Aihesivu: Aiemmat-osion otsikossa sama teksti, uusi kokonaisuus 0/3 ja kortit tekemättä.
    await page.goto(topicPath);
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');
    await expect(earlier(page).locator('summary')).toHaveAccessibleName(/^Aiemmat oppitunnit ja harjoitukset.*✓ Aiemmat sisällöt tehty$/);
    await expect(page.locator('#ydinopinnot').locator('summary [data-unit-progress]')).toHaveText('0/3 kokeiltu');
    await expect(page.locator('#ydinopinnot').locator('summary')).toHaveAccessibleName(/0\/3 kokeiltu$/);
    await expect(page.locator('#ydinopinnot').locator('[data-study-attempt-status]')).toHaveText(['Kokeilematta', 'Kokeilematta', 'Kokeilematta']);
    await expect(page.getByText(notWhole)).toHaveCount(0);

    // Vanhan sarjan viimeinen sivu: ylä- ja alareunan tila samalla tekstillä, alareunan tila ilmoitetaan (aria-live).
    await page.goto('/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html');
    const boundary = page.locator('[data-boundary-progress]');
    await expect(boundary).toHaveText(['✓ Aiemmat sisällöt tehty', '✓ Aiemmat sisällöt tehty']);
    await expect(boundary.nth(1)).toHaveAttribute('aria-live', 'polite');
    await expect(page.getByText(notWhole)).toHaveCount(0);
    await expect(page.locator('.study-steps--top a[rel="next"]')).toHaveText(/Seuraava aihe: Asteikot ja moodit/);

    // Laskenta ja tallenne ennallaan.
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(allOld);
  });

  test('osittain tehty: x/18 aiemmista sisällöistä kaikissa kolmessa kohdassa', async ({ page }) => {
    await page.goto('/index.html');
    await page.evaluate(([key, ids]) => localStorage.setItem(key, JSON.stringify(ids)), [readingKey, allOld.slice(0, 17)] as const);
    await page.goto('/index.html#aihe-soinnut');
    await expect(page.locator('#aihe-soinnut .topic-status')).toHaveText('17/18 aiemmista sisällöistä tehty');
    await page.goto(topicPath);
    await expect(earlier(page).locator('summary [data-study-total]')).toHaveText('17/18 aiemmista sisällöistä tehty');
    await page.goto('/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html');
    await expect(page.locator('[data-boundary-progress]')).toHaveText(['17/18 aiemmista sisällöistä tehty', '17/18 aiemmista sisällöistä tehty']);
    // Viimeisen sisällön merkitseminen päivittää tilan heti samalla sivulla.
    await page.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' }).click();
    await expect(page.locator('[data-boundary-progress]')).toHaveText(['✓ Aiemmat sisällöt tehty', '✓ Aiemmat sisällöt tehty']);
  });
});

const ydinPages = [
  ['kuule-ja-kokoa-sointu', 'Kuule ja kokoa sointu'],
  ['yksi-savel-muuttaa-sointua', 'Yksi sävel muuttaa sointua'],
  ['mihin-kappale-haluaa-palata', 'Mihin kappale haluaa palata?'],
] as const;
const ydinPath = (index: number) => `/oppi/soinnut/${ydinPages[index][0]}.html`;

test.describe('Ydinopinnot v0.5', () => {
  test('kolme korttia, suorat reitit, navigointi ja itsenäinen kokeiltu-merkintä', async ({ page }) => {
    await page.goto(topicPath);
    const unit = page.locator('#ydinopinnot');
    const summary = unit.locator('summary');
    await expect(unit).not.toHaveAttribute('open', '');
    await expect(unit.locator('.study-choice').first()).toBeHidden();
    await summary.click();
    await expect(unit.locator('.study-choice').first()).toBeVisible();
    await summary.click();
    await expect(unit).not.toHaveAttribute('open', '');
    await expect(page.locator('.study-units > details').first()).toHaveId('ydinopinnot');
    await expect(core(page)).toBeHidden();
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await expect(unit.locator('[data-unit-progress]')).toHaveText('0/3 kokeiltu');
    expect(await storage(page)).toBeNull();
    await page.evaluate(key => localStorage.setItem(key, JSON.stringify(['oppitunti:kuule-mika-on-sointu', 'harmoninen-kentta'])), readingKey);
    await page.goto(topicPath + '#ydinopinnot');
    await expect(unit).toHaveAttribute('open', '');
    for (const [index, [slug, title]] of ydinPages.entries()) {
      await expect(unit.getByRole('link', { name: new RegExp(title) })).toHaveAttribute('href', slug + '.html');
      await page.goto(ydinPath(index));
      await expect(page.locator('main')).toHaveAttribute('data-study-item', 'harjoitus:' + slug);
      await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
      await expect(page.locator('[data-study-unit]')).toHaveText(`Harjoitus 0${index + 1} / 03 Ydinopinnot`);
      await page.locator('.study-up a').click();
      await expect(page).toHaveURL(topicPath + '#ydinopinnot');
    }
    await unit.getByRole('link', { name: /Kuule ja kokoa sointu/ }).click();
    await page.getByRole('button', { name: 'Merkitse kokeilluksi' }).click();
    await expect(page.getByRole('button', { name: '✓ Kokeiltu' })).toHaveAttribute('aria-pressed', 'true');
    await page.goBack();
    await expect(unit.locator('[data-unit-progress]')).toHaveText('1/3 kokeiltu');
    await expect(page.locator('#valinta-kuule-ja-kokoa-sointu')).toBeFocused();
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('1/18 aiemmista sisällöistä tehty');
    await page.locator('#valinta-kuule-ja-kokoa-sointu').click();
    await page.getByRole('button', { name: '✓ Kokeiltu' }).click();
    expect(JSON.parse(await storage(page) ?? '[]')).toEqual(['oppitunti:kuule-mika-on-sointu', 'harmoninen-kentta']);
    for (const index of [1, 2]) {
      await page.locator('.study-steps--bottom [rel="next"]').click();
      await expect(page).toHaveURL(ydinPath(index));
    }
    await page.locator('.study-steps--bottom').getByRole('link', { name: /Palaa alkuun/ }).click();
    await expect(page).toHaveURL(ydinPath(0));
  });

  test('asteikon mikä tahansa kolmen sävelen valinta soi ja G–B–D käyttää samaa rekisteriä molemmissa esimerkeissä', async ({ page }) => {
    await recordAudio(page);
    const files = new Set<string>();
    page.on('response', response => {
      if (response.ok() && response.url().includes('/assets/audio/soinnut/')) {
        files.add(response.url().split('/').pop()!.replace(/\.(m4a|ogg)$/, ''));
      }
    });
    await page.goto(ydinPath(0));
    const single = page.getByRole('button', { name: 'Sävelet yksitellen' });
    const both = page.getByRole('button', { name: 'Sävelet yhdessä' });
    const selection = page.getByRole('button', { name: 'Kuuntele valintasi' });
    const note = (name: string) => page.getByRole('group', { name: 'Valitse kolme säveltä' }).getByRole('button', { name, exact: true });
    await expect(selection).toBeDisabled();
    const box = await sizeOf(single);
    await single.click();
    await expect(single).toHaveAttribute('data-playing', '');
    expect(await sizeOf(single)).toEqual(box);
    const first = await starts(page);
    expect(first).toHaveLength(3);
    first.forEach((source, index) => close(source.when - first[0].when, index * 0.52));
    expect([...files].sort()).toEqual([
      'INSGuitarSteel_StringB_Vel02_B3_01', 'INSGuitarSteel_StringD_Vel02_D4_01', 'INSGuitarSteel_StringG_Vel02_G3_01',
    ]);
    await both.click();
    await expect(both).toHaveAttribute('data-playing', '');
    await expect(single).not.toHaveAttribute('data-playing', '');
    const second = (await starts(page)).slice(3);
    expect(second).toHaveLength(3);
    second.forEach(source => close(source.when, second[0].when));
    expect(files.size).toBe(3);

    for (const name of ['A', 'E', 'F ylennetty']) await note(name).click();
    await note('B').click();
    await expect(page.locator('[data-maara]')).toHaveText('3/3');
    await expect(page.locator('[data-valinnat]')).toHaveText('A · E · F♯');
    await expect(note('B')).toHaveAttribute('aria-pressed', 'false');
    await selection.click();
    await expect(selection).toHaveAttribute('data-playing', '');
    expect(files.size).toBe(6);
    await note('E').click();
    await expect(selection).toBeDisabled();
    await expect(selection).not.toHaveAttribute('data-playing', '');
    for (const name of ['A', 'F ylennetty', 'G', 'B', 'D']) await note(name).click();
    await expect(page.locator('[data-valintapalaute]')).toHaveText(/Löysit G-duurisoinnun kolme säveltä/);
    await expect(page.locator('.done-toggle')).toHaveAttribute('aria-pressed', 'false');
    expect(await storage(page)).toBeNull();
  });

  test('arvauksessa kuuntelu ja vastaus ovat erillisiä, järjestys ja kysymys arvotaan', async ({ page, isMobile }) => {
    await recordAudio(page);
    await page.goto(ydinPath(1));
    const charts = page.locator('[data-arvaus-kaaviot]');
    const tip = page.locator('details.study-knoppi');
    await expect(charts.getByRole('img')).toHaveCount(2);
    const normal = page.getByRole('group', { name: 'Kuuntele soinnut' });
    await normal.getByRole('button', { name: 'E', exact: true }).click();
    await expect(normal.getByRole('button', { name: 'E', exact: true })).toHaveAttribute('data-playing', '');
    await tip.locator('summary').click();
    await page.evaluate(() => {
      const values = [0.9, 0.1, 0.1, 0.9];
      Math.random = () => values.shift() ?? 0;
    });
    await page.getByRole('button', { name: 'Arvaa' }).click();
    await expect(page.getByRole('heading', { name: 'Kumpi on molli?' })).toBeFocused();
    await expect(charts).toBeHidden();
    await expect(tip).toBeHidden();
    await expect(normal).toBeHidden();
    const listen = page.getByRole('button', { name: 'Kuuntele sointu 1' });
    const bounds = await sizeOf(listen);
    if (isMobile) await listen.click();
    else {
      await page.keyboard.press('Tab');
      await expect(listen).toBeFocused();
      await expect(listen).toHaveCSS('outline-style', 'solid');
      await page.keyboard.press('Enter');
    }
    await expect(listen).toHaveAttribute('data-playing', '');
    expect(await sizeOf(listen)).toEqual(bounds);
    const reply = page.getByRole('group', { name: 'Vastaa' });
    await reply.getByRole('button', { name: 'Sointu 1' }).click();
    await expect(page.locator('[data-arvauspalaute]')).toHaveText('Oikein! Sointu 1 oli E-molli ja sointu 2 oli E-duuri.');
    await expect(charts.locator('figcaption')).toHaveText(['Sointu 1 = Em', 'Sointu 2 = E']);
    await expect(reply.getByRole('button', { name: 'Sointu 1' })).toHaveAttribute('aria-disabled', 'true');
    expect(await storage(page)).toBeNull();

    await page.getByRole('button', { name: 'Uusi arvaus' }).click();
    await expect(page.getByRole('heading', { name: 'Kumpi on duuri?' })).toBeFocused();
    await expect(charts).toBeHidden();
    await reply.getByRole('button', { name: 'Sointu 2' }).click();
    await expect(page.locator('[data-arvauspalaute]')).toHaveText('Tällä kertaa ei. Sointu 1 oli E-duuri ja sointu 2 oli E-molli.');
    await expect(charts.locator('figcaption')).toHaveText(['Sointu 1 = E', 'Sointu 2 = Em']);
    expect(await storage(page)).toBeNull();
  });

  test('kierron neljä sointua seuraavat äänikelloa ja vaihto sekä piilotus katkaisevat toiston', async ({ page }) => {
    await recordAudio(page);
    await page.goto(ydinPath(2));
    const play = page.locator('[data-kierto]');
    const path = page.locator('#sointukierto');
    const names = path.locator('strong');
    await expect(names).toHaveText(['•', '•', '•', '?']);
    const bounds = await sizeOf(play);
    await play.click();
    await expect(play).toHaveAccessibleName(/Pysäytä/);
    expect(await sizeOf(play)).toEqual(bounds);
    await expect(path.locator('li').nth(0)).toHaveAttribute('aria-current', 'step');
    const log = await starts(page);
    expect(log).toHaveLength(16);
    log.forEach((source, index) => close(source.when - log[0].when, Math.floor(index / 4) * 2.25 + (index % 4) * 0.022));
    await expect(path.locator('li').nth(1)).toHaveAttribute('aria-current', 'step');
    await page.getByRole('button', { name: 'Näytä sointujen nimet' }).click();
    await expect(names).toHaveText(['G', 'C', 'D', 'G']);
    await expect(path.locator('[aria-current]')).toHaveCount(1);

    for (const ending of ['C', 'D']) {
      await page.getByRole('button', { name: 'Lopetus ' + ending }).click();
      await expect(play).toHaveAccessibleName(/Kuuntele/);
      await expect(path.locator('[aria-current]')).toHaveCount(0);
      await expect(names).toHaveText(['G', 'C', 'D', ending]);
      await play.click();
      await expect(path.locator('li').nth(0)).toHaveAttribute('aria-current', 'step');
    }
    expect(await starts(page)).toHaveLength(48);
    await page.evaluate(() => {
      Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
      document.dispatchEvent(new Event('visibilitychange'));
    });
    await expect(play).toHaveAccessibleName(/Kuuntele/);
    await expect(path.locator('[aria-current]')).toHaveCount(0);
    expect(await storage(page)).toBeNull();
  });

  test('vanhentunut lataus ei käynnistä ääntä ja virheestä voi yrittää uudelleen', async ({ page }) => {
    await recordAudio(page);
    let release!: () => void;
    const hold = new Promise<void>(resolve => { release = resolve; });
    await page.route('**/assets/audio/soinnut/*', async route => {
      await hold;
      await route.abort().catch(() => {});
    });
    await page.goto(ydinPath(2));
    const request = page.waitForRequest('**/assets/audio/soinnut/*');
    const play = page.locator('[data-kierto]');
    await play.click();
    await request;
    await play.click();
    await expect(play).toHaveAccessibleName(/Kuuntele/);
    release();
    await page.unrouteAll({ behavior: 'wait' });
    expect(await starts(page)).toHaveLength(0);

    await page.route('**/assets/audio/soinnut/*', route => route.fulfill({ status: 503, body: '' }));
    await play.click();
    await expect(page.locator('[data-sointu-tila]')).toHaveText('Ääniä ei voitu ladata. Kokeile uudelleen.');
    await expect(play).toHaveAccessibleName(/Kuuntele/);
    await page.unrouteAll({ behavior: 'wait' });
    await play.click();
    await expect(page.locator('[data-sointu-tila]')).toHaveText('Kuuntelu käynnissä.');
    expect(await starts(page)).toHaveLength(16);
  });

  for (const width of [320, 375, 390, 768, 1200]) {
    test(`v0.5 sopii ${width} px:iin myös 200 % tekstillä ja yksi ⓘ ei siirrä kuuntelupainiketta`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const url of [topicPath + '#ydinopinnot', ...ydinPages.map((_, index) => ydinPath(index))]) {
        await page.goto(url);
        for (const size of ['100%', '200%']) {
          await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
          const testCase = `${url}, ${width}px, ${size}`;
          const tip = page.locator('details.study-knoppi');
          if (await tip.count()) {
            const button = page.locator('[data-sointu-ohjaimet] button').first();
            const summary = tip.locator('summary');
            await summary.scrollIntoViewIfNeeded();
            const before = await button.evaluate(element => element.getBoundingClientRect().top + window.scrollY);
            await expect(summary).toHaveCSS('width', '44px');
            await expect(summary).toHaveCSS('height', '44px');
            if (await tip.evaluate(element => (element as HTMLDetailsElement).open)) await summary.click();
            await summary.click();
            await expect(tip).toHaveAttribute('open', '');
            const after = await button.evaluate(element => element.getBoundingClientRect().top + window.scrollY);
            expect(Math.abs(after - before), testCase).toBeLessThan(1);
          }
          expect(await noHorizontalScroll(page), testCase).toBe(true);
        }
      }
    });
  }
});
