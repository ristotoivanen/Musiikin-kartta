import { test, expect, type Page } from '@playwright/test';

// Yhteinen päävalikko, Musiikin teoria -aloitusnäkymä ja edistymisen jatkuvuus.
// Ylävalikon Oppimiskartta avaa aihejaottelun, vaikka kirjan vanha teoriaindeksi säilyy.
const MAIN_PAGES = [
  { path: '/index.html', active: null },
  { path: '/book/index.html', active: 'teoria' },
  { path: '/book/osa-3.html', active: 'teoria' },
  { path: '/book/luku-4.html', active: 'teoria' },
  { path: '/aiheet/nuotit.html', active: 'teoria' },
  { path: '/book/sanasto.html', active: 'teoria' },
  { path: '/riffikaiku.html', active: 'kitara' },
  { path: '/pelit/ensikeikka/', active: 'kitara' },
  { path: '/otelautaharjoittelija.html', active: 'otelauta' },
  { path: '/kitaraharjoittelija.html', active: 'kitara' },
] as const;
const LABELS = { teoria: /^Oppimiskartta$/, otelauta: /^Otelautaopas$/, kitara: /^Kitaraharjoittelu$/ };
const mainNav = (page: Page) => page.getByRole('navigation', { name: 'Päävalikko' });
const LUVUT = 'musiikin-kartta:luvut';
const HARJOITTELU = 'musiikin-kartta:harjoittelu';

test.describe('Yhteinen päävalikko', () => {
  for (const { path, active } of MAIN_PAGES) {
    test(`${path}: sama valikko ja oikea aktiivinen osio`, async ({ page }) => {
      await page.goto(path);
      const nav = mainNav(page);
      await expect(nav).toBeVisible();
      const links = nav.getByRole('link');
      await expect(links).toHaveCount(4);
      await expect(links.nth(0)).toHaveText('Musiikin kartta');
      await expect(links.nth(1)).toHaveText(LABELS.teoria);
      await expect(links.nth(2)).toHaveText(LABELS.otelauta);
      await expect(links.nth(3)).toHaveText(LABELS.kitara);
      const current = nav.locator('[aria-current]');
      await expect(current).toHaveCount(1);
      if (active === null) await expect(current).toHaveText('Musiikin kartta');
      else await expect(current).toHaveText(LABELS[active]);
      // Aktiivinen osio erottuu violetilla taustalla.
      if (active !== null) expect(await current.evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(75, 47, 214)');
    });
  }

  test('jokainen päävalikon linkki vie oikeaan pääosioon', async ({ page }) => {
    const targets = [
      [LABELS.teoria, /\/index[.]html#oppimisaiheet$/, 'Musiikin kartta'],
      [LABELS.otelauta, /\/otelautaharjoittelija\.html$/, 'Otelautaopas'],
      [LABELS.kitara, /\/kitaraharjoittelija\.html$/, 'Kitaraharjoittelija'],
    ] as const;
    for (const start of ['/index.html', '/book/osa-5.html', '/riffikaiku.html', '/pelit/ensikeikka/']) {
      for (const [name, url, heading] of targets) {
        await page.goto(start);
        await mainNav(page).getByRole('link', { name }).click();
        await expect(page).toHaveURL(url);
        await expect(page.getByRole('heading', { level: 1, name: heading })).toBeVisible();
      }
      await page.goto(start);
      await mainNav(page).getByRole('link', { name: 'Musiikin kartta' }).click();
      await expect(page).toHaveURL(/\/index\.html$/);
    }
  });

  test('valikkoa käytetään näppäimistöllä ja fokus näkyy', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.goto('/book/index.html');
    await page.keyboard.press('Tab');
    await expect(mainNav(page).getByRole('link', { name: 'Musiikin kartta' })).toBeFocused();
    await page.keyboard.press('Tab');
    const theory = mainNav(page).getByRole('link', { name: LABELS.teoria });
    await expect(theory).toBeFocused();
    expect(await theory.evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await expect(mainNav(page).getByRole('link', { name: LABELS.kitara })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/kitaraharjoittelija\.html$/);
  });

  test('mobiilissa ei ole vaakavieritystä eivätkä valikon kohdat mene päällekkäin', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 740 });
    for (const { path } of MAIN_PAGES) {
      await page.goto(path);
      await expect(mainNav(page)).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(360);
      const boxes = await mainNav(page).getByRole('link').evaluateAll(links => links.map(link => link.getBoundingClientRect().toJSON()));
      for (let i = 0; i < boxes.length; i++) {
        expect(boxes[i].right, path).toBeLessThanOrEqual(360);
        for (let j = i + 1; j < boxes.length; j++) {
          const [a, b] = [boxes[i], boxes[j]];
          const overlap = a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom;
          expect(overlap, `${path}: valikon kohdat ${i} ja ${j}`).toBe(false);
        }
      }
      // Valikko ei ole kiinteä, joten se ei peitä harjoittelun painikkeita vierittäessä.
      expect(await page.locator('.site-top').evaluate(el => getComputedStyle(el).position)).toBe('static');
    }
  });
});

test.describe('Etusivu', () => {
  test('ylävalikon linkit ja etusivun jatkamismerkinnät säilyvät', async ({ page }) => {
    await page.addInitScript(([luvut, harjoittelu]) => {
      localStorage.setItem(luvut, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot']));
      localStorage.setItem(harjoittelu, JSON.stringify({ version: 3, sessions: [{ count: 7 }] }));
    }, [LUVUT, HARJOITTELU]);
    await page.goto('/index.html');
    const nav = mainNav(page);
    await expect(nav.getByRole('link', { name: LABELS.teoria })).toHaveAttribute('href', 'index.html#oppimisaiheet');
    await expect(nav.getByRole('link', { name: LABELS.otelauta })).toHaveAttribute('href', 'otelautaharjoittelija.html');
    await expect(nav.getByRole('link', { name: LABELS.kitara })).toHaveAttribute('href', 'kitaraharjoittelija.html');
    const continueBox = page.locator('#home-continue');
    await expect(continueBox.getByRole('link', { name: 'Jatka: luku 3 · Musiikki on kieli' }))
      .toHaveAttribute('href', 'book/luku-3.html');
    await expect(continueBox.getByRole('link', { name: 'Jatka kitaraharjoittelua · viimeksi 7 vastattua kysymystä' })).toBeVisible();
    await nav.getByRole('link', { name: LABELS.teoria }).click();
    await expect(page).toHaveURL(/index[.]html#oppimisaiheet$/);
    await expect(page.getByRole('heading', { level: 2, name: 'Oppimiskartta' })).toBeVisible();
  });

  test('vanha #harjoittelija-linkki ohjaa yhä otelautakarttaan', async ({ page }) => {
    await page.goto('/#harjoittelija');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html$/);
  });
});

test.describe('Oppimiskartan erilliset aihe- ja lukusivut', () => {
  test('kahdeksan aihekorttia avaavat omat sivunsa ja Sointukartan oikean näkymän', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('a.topic-card')).toHaveCount(8);
    await expect(page.locator('details.topic-card')).toHaveCount(0);
    await page.locator('#aihe-soinnut').click();
    await expect(page).toHaveURL(/aiheet\/soinnut[.]html$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Soinnut ja harmonia' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Teoria' })).toBeVisible();
    await page.getByRole('link', { name: 'Tutki sointukarttaa' }).click();
    await expect(page).toHaveURL(/otelautaharjoittelija[.]html[?]aihe=aihe-soinnut#soinnut$/);
    await expect(page.locator('[data-view="chords"]')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
    await expect(page).toHaveURL(/aiheet\/soinnut[.]html$/);
  });

  test('kaikki 28 lukua ovat omia sivuja ja H:n historia kuuluu opetustekstiin', async ({ page }) => {
    await page.goto('/aiheet/nuotit.html');
    await expect(page.getByRole('heading', { name: 'H- ja B-sävelnimet' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'H- ja B-sävelnimet' })).toHaveCount(0);
    await page.getByRole('link', { name: 'Sävelet ja intervallit' }).click();
    await expect(page).toHaveURL(/book\/luku-4[.]html[?]aihe=aihe-nuotit$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
    await expect(page.locator('#h-savelnimi')).toContainText('H');
    await expect(page.locator('#h-savelnimi').getByRole('link', { name: 'Lue, mistä H-nimi tuli' }))
      .toHaveAttribute('href', 'h-savelnimen-alkupera.html');
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).first().click();
    await expect(page).toHaveURL(/aiheet\/nuotit[.]html$/);
  });

  test('aiheista pääsee 28 yksittäiseen lukuun ja harjoitukset säilyttävät syvälinkit', async ({ page }) => {
    test.setTimeout(60000);
    const topics = ['kitara', 'rytmi', 'nuotit', 'korva', 'otelauta', 'soinnut', 'asteikot', 'kappaleet'];
    let chapters = 0;
    let resources = 0;
    for (const topic of topics) {
      await page.goto('/aiheet/' + topic + '.html');
      await expect(page.locator('[data-topic-page="' + topic + '"]')).toBeVisible();
      const links = page.locator('.resource-list a');
      const hrefs = await links.evaluateAll(elements => elements.map(el => (el as HTMLAnchorElement).href));
      resources += hrefs.length;
      for (const href of hrefs) {
        const url = new URL(href);
        expect(url.searchParams.get('aihe')).toBe('aihe-' + topic);
        if (url.pathname.match(/\/book\/luku-\d+[.]html$/)) chapters++;
      }
      await page.getByRole('link', { name: '← Oppimiskartta' }).click();
      await expect(page).toHaveURL(/index[.]html#oppimisaiheet$/);
    }
    expect(resources).toBe(41);
    expect(chapters).toBeGreaterThanOrEqual(28);
    for (let n = 1; n <= 28; n++) {
      const response = await page.goto('/book/luku-' + n + '.html');
      expect(response?.ok(), 'Luku ' + n).toBe(true);
      await expect(page.locator('article .chapter')).toHaveCount(1);
      await expect(page.getByRole('link', { name: 'Takaisin aiheeseen' })).toBeVisible();
    }
  });

  test('selaimen Takaisin palaa aihekohtaiselle sivulle ja edistyminen säilyy', async ({ page }) => {
    await page.goto('/index.html');
    await page.locator('#aihe-rytmi').click();
    await page.getByRole('link', { name: 'Pulssi ja komppi' }).click();
    await expect(page).toHaveURL(/book\/luku-1[.]html[?]aihe=aihe-rytmi$/);
    await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
    await expect(page.getByRole('button', { name: '✓ Luku tehty' })).toHaveAttribute('aria-pressed', 'true');
    await page.goBack();
    await expect(page).toHaveURL(/aiheet\/rytmi[.]html$/);
    await page.goBack();
    await expect(page).toHaveURL(/index[.]html$/);
    await expect(page.locator('#home-continue')).toContainText('Jatka: luku 2');
  });

  test('vanha #osiot ja #aihe-rytmi jäävät toimiviksi ankkureiksi', async ({ page }) => {
    await page.goto('/index.html#osiot');
    await expect(page.locator('#osiot')).toContainText('Oppimiskartta');
    await page.goto('/index.html#aihe-rytmi');
    await expect(page.locator('#aihe-rytmi')).toHaveAttribute('href', 'aiheet/rytmi.html');
    await page.locator('#aihe-rytmi').click();
    await expect(page).toHaveURL(/aiheet\/rytmi[.]html$/);
    await page.goto('/book/index.html');
    await expect(page.getByRole('heading', { level: 1, name: 'Musiikin teoria' })).toBeVisible();
  });

  test('sivuvälimuistista palaaminen päivittää etusivun jatkamismerkinnän', async ({ page }) => {
    await page.goto('/index.html');
    await page.evaluate(([luvut, harjoittelu]) => {
      localStorage.setItem(luvut, JSON.stringify(['pulssi-ja-komppi']));
      localStorage.setItem(harjoittelu, JSON.stringify({ version: 1, sessions: [{ count: 1 }] }));
      window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
    }, [LUVUT, HARJOITTELU]);
    await expect(page.locator('#home-continue').getByRole('link', { name: /Jatka: luku 2/ }))
      .toHaveAttribute('href', 'book/luku-2.html');
  });

  test('etusivun pulssiesimerkistä pääsee erilliseen lukusivuun ja takaisin aiheeseen', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('link', { name: 'Kuuntele pulssi' }).click();
    await expect(page).toHaveURL(/book\/luku-1[.]html#pulssi-aanite$/);
    await expect(page.locator('#pulssi-aanite audio')).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).first().click();
    await expect(page).toHaveURL(/aiheet\/rytmi[.]html$/);
  });

  test('kaikki kahdeksan aihekorttia toimivat näppäimistöllä', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistön fokusrengas tarkistetaan työpöytäkoossa.');
    await page.goto('/index.html');
    const links = page.locator('a.topic-card');
    await expect(links).toHaveCount(8);
    for (let index = 0; index < 8; index++) {
      const card = links.nth(index);
      await card.focus();
      await expect(card).toBeFocused();
      await page.keyboard.press('Enter');
      await expect(page).toHaveURL(/\/aiheet\/[a-z]+[.]html$/);
      await page.goBack();
    }
  });

  for (const [width, height] of [[320, 568], [360, 740], [390, 844], [568, 320], [768, 1024], [1280, 800]]) {
    test('aihekortti, aihekohtainen sivu ja päävalikko mahtuvat kokoon ' + width + ' × ' + height, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/index.html');
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await page.locator('#aihe-korva').click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      await page.addStyleTag({ content: '.main-nav li a, .resource-list a { font-size: 200% !important; }' });
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    });
  }
});

test.describe('Musiikin teoria -aloitusnäkymä', () => {
  test('neljä kokonaisuutta oikeassa järjestyksessä, kaikki suljettuina', async ({ page }) => {
    await page.goto('/book/');
    await expect(page.getByText('YMMÄRRÄ · KUUNTELE · SOITA')).toBeVisible();
    const groups = page.locator('details.group');
    await expect(groups).toHaveCount(4);
    await expect(groups.locator('summary strong')).toHaveText([
      'Musiikin perusteet', 'Otelauta ja sointujen hahmottaminen', 'Kuuntele, improvisoi ja soita', 'Syventävät ja jatko-osat',
    ]);
    await expect(groups.locator('summary .group-number')).toHaveText(['01', '02', '03', '04']);
    for (const group of await groups.all()) await expect(group).not.toHaveAttribute('open');
    // Pitkät kuvaukset ja lukuajat ovat piilossa, kunnes kokonaisuus avataan.
    await expect(page.getByText('Lukuaika noin 10 min', { exact: false })).toBeHidden();
  });

  test('kokonaisuus avautuu ja sulkeutuu hiirellä ja näppäimistöllä', async ({ page }) => {
    await page.goto('/book/index.html');
    const first = page.locator('#kokonaisuus-1');
    const summary = first.locator('summary');
    await summary.click();
    await expect(first).toHaveAttribute('open', '');
    await expect(first.locator('.part-list a')).toHaveCount(3);
    await expect(first.locator('.part-text strong')).toHaveText(['Rytmi, komppi ja ensimmäinen kappale', 'Sävelet ja kotisävel', 'Soinnut ja niiden tehtävät']);
    await summary.click();
    await expect(first).not.toHaveAttribute('open');
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(first).toHaveAttribute('open', '');
    await page.keyboard.press('Space');
    await expect(first).not.toHaveAttribute('open');
  });

  test('jokainen oppaan osa on saavutettavissa kokonaisuuksien kautta', async ({ page }) => {
    await page.goto('/book/index.html');
    for (let part = 1; part <= 11; part++) {
      await page.goto('/book/index.html');
      const link = page.locator(`[data-part="osa-${part}"] a`);
      await link.locator('xpath=ancestor::details').locator('summary').click();
      await link.click();
      await expect(page).toHaveURL(new RegExp(`/book/osa-${part}\\.html$`));
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(mainNav(page).locator('[aria-current]')).toHaveText(LABELS.teoria);
    }
  });

  test('ilman merkintöjä tarjotaan ensimmäistä osaa', async ({ page }) => {
    await page.goto('/book/index.html');
    const action = page.locator('#jatka').getByRole('link', { name: 'Aloita ensimmäisestä osasta' });
    await expect(action).toHaveAttribute('href', 'osa-1.html');
    await expect(page.locator('.part-status:not(:empty)')).toHaveCount(0);
    await expect(page.locator('.resume-bar')).toHaveCount(0);
  });

  test('tallennetut merkinnät näkyvät ja Jatka opiskelua vie seuraavaan lukuun', async ({ page }) => {
    await page.addInitScript(key => localStorage.setItem(key, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot', 'musiikki-on-kieli', 'harmoninen-kentta'])), LUVUT);
    await page.goto('/book/index.html');
    const card = page.locator('#jatka');
    await expect(card).toContainText('Jatka siitä, mihin jäit');
    await expect(card).toContainText('Osa 2 · Sävelet ja kotisävel');
    await expect(card).toContainText('Seuraavana luku 4 · Sävelet ja intervallit');
    await expect(card).toContainText('4/28 lukua merkitty tehdyiksi');
    expect(await card.locator('.resume-bar > span').evaluate(el => (el as HTMLElement).style.width)).toBe('14.3%');
    await expect(page.locator('#kokonaisuus-1 .group-progress')).toHaveText('4/9 lukua tehty');
    await expect(page.locator('#kokonaisuus-2 .group-progress')).toBeEmpty();
    await expect(page.locator('[data-part="osa-1"] .part-status')).toHaveText('✓ Valmis');
    await expect(page.locator('[data-part="osa-2"] .part-status')).toHaveText('1/3 lukua tehty');
    await expect(page.locator('[data-part="osa-3"] .part-status')).toHaveText('1/4 lukua tehty');
    await card.getByRole('link', { name: 'Jatka opiskelua' }).click();
    await expect(page).toHaveURL(/\/book\/osa-2\.html#savelet-ja-intervallit$/);
    await expect(page.locator('#savelet-ja-intervallit .done-toggle')).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#musiikki-on-kieli .done-toggle')).toHaveAttribute('aria-pressed', 'true');
  });

  test('vanhan tallennusmuodon merkinnät siirtyvät ja näkyvät uudessa näkymässä', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('musiikin-kartta:tehdyt', '["osa-1#musiikki-on-kieli"]'));
    await page.goto('/book/index.html');
    await expect(page.locator('[data-part="osa-2"] .part-status')).toHaveText('1/3 lukua tehty');
    expect(await page.evaluate(key => localStorage.getItem(key), LUVUT)).toBe('["musiikki-on-kieli"]');
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:tehdyt'))).toBe('["osa-1#musiikki-on-kieli"]');
  });

  test('luvun merkitseminen tehdyksi päivittää aloitusnäkymän ja historia toimii', async ({ page }) => {
    await page.goto('/book/index.html');
    await page.locator('#kokonaisuus-1 summary').click();
    await page.locator('[data-part="osa-1"] a').click();
    await page.locator('#pulssi-ja-komppi .done-toggle').click();
    await page.goBack();
    await expect(page).toHaveURL(/\/book\/index\.html$/);
    await page.reload();
    await expect(page.locator('#jatka')).toContainText('Seuraavana luku 2 · Neljä otetta ja ensimmäinen kappale');
    await page.goForward();
    await expect(page).toHaveURL(/\/book\/osa-1\.html$/);
  });

  test('avaus ilman ankkuria ei kaada skriptiä, ja ankkurin vaihto avaa kokonaisuuden myöhemmin', async ({ page }) => {
    // Mobiiliauditointi K6: ilman ankkuria skripti kaatui ennen hashchange-kuuntelijan rekisteröintiä.
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(key => localStorage.setItem(key, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot', 'musiikki-on-kieli'])), LUVUT);
    await page.goto('/book/index.html');
    await expect(page.locator('#jatka')).toContainText('Seuraavana luku 4 · Sävelet ja intervallit');
    await expect(page.locator('#jatka').getByRole('link', { name: 'Jatka opiskelua' })).toHaveAttribute('href', 'osa-2.html#savelet-ja-intervallit');
    await expect(page.locator('[data-part="osa-1"] .part-status')).toHaveText('✓ Valmis');
    await page.evaluate(() => { location.hash = 'kokonaisuus-3'; });
    await expect(page.locator('#kokonaisuus-3')).toHaveAttribute('open', '');
    await page.evaluate(() => { location.hash = 'lahtotaso'; });
    await expect(page.locator('#lahtotaso')).toHaveAttribute('open', '');
    expect(errors).toEqual([]);
  });

  test('suora linkki kokonaisuuteen avaa sen ja lähtötaso johtaa oikeaan sisältöön', async ({ page }) => {
    await page.goto('/book/index.html#kokonaisuus-3');
    await expect(page.locator('#kokonaisuus-3')).toHaveAttribute('open', '');
    await expect(page.locator('#kokonaisuus-1')).not.toHaveAttribute('open');
    await page.getByText('Valitse lähtötasosi').click();
    const picker = page.locator('#lahtotaso');
    await expect(picker.getByRole('link', { name: 'Aloitan alusta' })).toHaveAttribute('href', 'osa-1.html');
    await expect(picker.getByRole('link', { name: 'Osaan avoimet otteet' })).toHaveAttribute('href', 'osa-1.html#sointukierrot');
    await picker.getByRole('link', { name: 'Osaan barré-otteet' }).click();
    await expect(page).toHaveURL(/osa-6\.html#numerokartta$/);
    await expect(page.locator('#numerokartta')).toBeVisible();
  });

  test('lisämateriaalit on koottu omaan osioonsa', async ({ page }) => {
    await page.goto('/book/index.html');
    const extras = page.locator('section.extras');
    await expect(extras.getByRole('heading', { name: 'Lisämateriaalit' })).toBeVisible();
    await expect(extras.getByRole('link', { name: 'Koko opas tulostettavana PDF:nä' })).toHaveAttribute('href', '../pdf/musiikin-kartta.pdf');
    await expect(extras.getByRole('link', { name: 'Sanasto' })).toHaveAttribute('href', 'sanasto.html');
  });
});

test.describe('Vanhat osoitteet ja osioiden välinen jatkuvuus', () => {
  test('suorat luku- ja ankkurilinkit toimivat edelleen', async ({ page }) => {
    for (const [path, expected] of [
      ['/book/osa-7.html#basso', /osa-7\.html#basso$/],
      ['/book/osa-3.html#caged', /osa-6\.html#caged$/],
      ['/book/osa-1.html#harmoninen-kentta', /osa-3\.html#harmoninen-kentta$/],
      ['/book/sanasto.html', /sanasto\.html$/],
      ['/harjoitustaustat.html?toonikka=E&asteikko=dorian', /otelautaharjoittelija\.html\?toonikka=E&asteikko=dorian$/],
    ] as const) {
      await page.goto(path);
      await expect(page).toHaveURL(expected);
    }
  });

  for (const width of [320, 360, 390]) {
    test(`Otelautaopas avautuu suoraan otelautaan ${width} px leveydellä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 740 });
      await page.goto('/index.html');
      const guide = mainNav(page).getByRole('link', { name: LABELS.otelauta });
      await guide.click();
      await expect(page).toHaveURL(/\/otelautaharjoittelija\.html$/);
      await expect(guide).toHaveAttribute('aria-current', 'page');
      await expect(page.getByRole('navigation', { name: 'Otelautaopas' })).toHaveCount(0);
      await expect(page.getByRole('heading', { name: 'Tutki otelautaa' })).toBeInViewport();
      await expect(page.locator('#board svg')).toBeVisible();
      expect(await page.locator('main').evaluate(el => el.scrollWidth)).toBeLessThanOrEqual(width);
    });
  }

  test('otelaudan harjoitukset löytyvät Kitaraharjoittelusta', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    await mainNav(page).getByRole('link', { name: LABELS.kitara }).click();
    await page.getByRole('button', { name: /^Sävelkorva ja otelauta/ }).click();
    await expect(page.getByRole('heading', { name: 'Sävelkorva ja otelauta' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Sävelten etsintä/ })).toBeVisible();
  });

  test('suora otelaudan harjoituspolku toimii ja paluu siistii osoitteen', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    await page.goto('/kitaraharjoittelija.html?polku=otelauta');
    await expect(page).toHaveURL(/kitaraharjoittelija\.html\?polku=otelauta$/);
    await expect(page.getByRole('heading', { name: 'Sävelkorva ja otelauta' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Sävelten etsintä/ })).toBeVisible();
    await page.getByRole('button', { name: '← Oppimispolut' }).click();
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
    await expect(page).toHaveURL(/kitaraharjoittelija\.html$/);
    await page.goBack();
    await expect(page).toHaveURL(/otelautaharjoittelija\.html$/);
    await expect(page.locator('#board svg')).toBeVisible();
  });

  test('pääosioiden välillä siirtyminen ei muuta harjoittelu- eikä lukutietoja', async ({ page }) => {
    const practice = JSON.stringify({ version: 3, stats: {}, settings: {}, sessions: [{ count: 4 }] });
    await page.addInitScript(([luvut, harjoittelu, value]) => {
      if (!localStorage.getItem(harjoittelu)) {
        localStorage.setItem(harjoittelu, value);
        localStorage.setItem(luvut, '["otelauta"]');
      }
    }, [LUVUT, HARJOITTELU, practice]);
    await page.goto('/kitaraharjoittelija.html');
    const before = await page.evaluate(key => localStorage.getItem(key), HARJOITTELU);
    for (const name of [LABELS.teoria, LABELS.otelauta, LABELS.kitara]) {
      await mainNav(page).getByRole('link', { name }).click();
      await page.waitForLoadState('load');
    }
    expect(await page.evaluate(key => localStorage.getItem(key), HARJOITTELU)).toBe(before);
    expect(await page.evaluate(key => localStorage.getItem(key), LUVUT)).toBe('["otelauta"]');
  });
});
