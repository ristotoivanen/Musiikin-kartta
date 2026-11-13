import { test, expect, type Page } from '@playwright/test';

// Yhteinen päävalikko, Musiikin teoria -aloitusnäkymä ja edistymisen jatkuvuus.
// Mobiiliprojektissa teorian linkin teksti on lyhyempi ("Teoria"), joten se haetaan säännöllisellä lausekkeella.
const MAIN_PAGES = [
  { path: '/index.html', active: null },
  { path: '/book/index.html', active: 'teoria' },
  { path: '/book/osa-3.html', active: 'teoria' },
  { path: '/book/sanasto.html', active: 'teoria' },
  { path: '/otelautaharjoittelija.html', active: 'otelauta' },
  { path: '/kitaraharjoittelija.html', active: 'kitara' },
] as const;
const LABELS = { teoria: /teoria/i, otelauta: /^Otelautaopas$/, kitara: /^Kitaraharjoittelu$/ };
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
      [LABELS.teoria, /\/book\/(index\.html)?$/, 'Musiikin teoria'],
      [LABELS.otelauta, /\/otelautaharjoittelija\.html$/, 'Otelautaopas'],
      [LABELS.kitara, /\/kitaraharjoittelija\.html$/, 'Kitaraharjoittelija'],
    ] as const;
    for (const start of ['/index.html', '/book/osa-5.html', '/kitaraharjoittelija.html']) {
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
  test('kolme painiketta vievät pääosioihin ja jatkamislinkit säilyvät', async ({ page }) => {
    await page.addInitScript(([luvut, harjoittelu]) => {
      localStorage.setItem(luvut, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot']));
      localStorage.setItem(harjoittelu, JSON.stringify({ version: 3, sessions: [{ count: 7 }] }));
    }, [LUVUT, HARJOITTELU]);
    await page.goto('/');
    const hero = page.locator('.hero-actions');
    await expect(hero.getByRole('link')).toHaveText(['Musiikin teoria', 'Tutki otelautaa', 'Harjoittele kitaralla']);
    await expect(hero.getByRole('link', { name: 'Musiikin teoria' })).toHaveAttribute('href', 'book/index.html');
    await expect(hero.getByRole('link', { name: 'Tutki otelautaa' })).toHaveAttribute('href', 'otelautaharjoittelija.html');
    await expect(hero.getByRole('link', { name: 'Harjoittele kitaralla' })).toHaveAttribute('href', 'kitaraharjoittelija.html');
    await expect(page.getByRole('link', { name: 'Jatka: luku 3 · Musiikki on kieli' })).toHaveAttribute('href', 'book/osa-2.html#musiikki-on-kieli');
    await expect(page.getByRole('link', { name: 'Jatka kitaraharjoittelua · viimeksi 7 vastattua kysymystä' })).toBeVisible();
    await hero.getByRole('link', { name: 'Musiikin teoria' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Musiikin teoria' })).toBeVisible();
  });

  test('vanha #harjoittelija-linkki ohjaa yhä otelautakarttaan', async ({ page }) => {
    await page.goto('/#harjoittelija');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html$/);
  });
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

  test('Otelautaoppaan alavalikko avaa otelaudan harjoitukset ja polulta palaaminen siistii osoitteen', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    const sub = page.getByRole('navigation', { name: 'Otelautaopas' });
    await expect(sub.getByRole('link', { name: 'Otelautakartta' })).toHaveAttribute('aria-current', 'page');
    await sub.getByRole('link', { name: 'Otelaudan harjoitukset' }).click();
    await expect(page).toHaveURL(/kitaraharjoittelija\.html\?polku=otelauta$/);
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
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
