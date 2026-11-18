import { test, expect, type Page } from '@playwright/test';

// Neljä pääosiota ja yhteinen Oppimiskartta käyttäjän näkökulmasta.
// Sisältö: tools/oppimiskartta/sisaltorekisteri.json → rakenna-osiot.py.
const mainNav = (page: Page) => page.getByRole('navigation', { name: 'Päävalikko' });
const LUVUT = 'musiikin-kartta:luvut';
const HARJOITTELU = 'musiikin-kartta:harjoittelu';

test.describe('Kolme oppimistapaa ja Soittopakki', () => {
  test('aloittelija löytää intervallit teoriasta, aloittaa ja palaa aihekarttaan', async ({ page }) => {
    await page.goto('/index.html');
    await mainNav(page).getByRole('link', { name: 'Opi & oivalla' }).click();
    await expect(page).toHaveURL(/index\.html#oppimisaiheet$/);
    await page.goto('/oppi/savelnimet/index.html');
    await page.getByRole('link', { name: /Sävelet ja intervallit/ }).first().click();
    await expect(page).toHaveURL(/oppi\/savelnimet\/savelet-ja-intervallit\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('intervallit');
    await page.getByRole('link', { name: /Sävelnimiin ja sointumerkintöihin/ }).first().click();
    await expect(page).toHaveURL(/oppi\/savelnimet\/index\.html$/);
    await page.getByRole('link', { name: /Oppimiskarttaan/ }).first().click();
    await expect(page).toHaveURL(/index\.html#aihe-nuotit$/);
  });

  test('pelaaja löytää pelin, näkee harjoitettavan taidon ja palaa samaan aiheeseen Musapeleissä', async ({ page }) => {
    await page.goto('/musapelit.html');
    const topic = page.locator('#aihe-korva');
    const card = topic.getByRole('link', { name: /Ensikeikka/ });
    await expect(card).toContainText('Harjoittaa: kotisävelen ja fraasin lopetuksen kuuleminen');
    await expect(card).toHaveAttribute('href', 'pelit/ensikeikka/index.html?aihe=aihe-korva&tapa=pelit');
    await card.click();
    await expect(mainNav(page).getByRole('link', { name: 'Musapelit' })).toHaveAttribute('aria-current', 'true');
    await page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' }).click();
    await expect(page).toHaveURL(/musapelit\.html#aihe-korva$/);
  });

  test('Musapeleistä avattu kuuntelutehtävä palaa Musapeleihin', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-korva');
    await page.locator('#aihe-korva').getByRole('link', { name: /Mikä aste soi\?/ }).click();
    await expect(page).toHaveURL(/oppi\/korva\/mika-aste-soi\.html\?tapa=pelit$/);
    await expect(mainNav(page).getByRole('link', { name: 'Musapelit' })).toHaveAttribute('aria-current', 'true');
    await page.locator('.study-up').getByRole('link', { name: 'Musapelit: Sävelkorva ja melodia' }).click();
    await expect(page).toHaveURL(/musapelit\.html#aihe-korva$/);
  });

  test('Kitaratreenistä avattu harjoitus palaa Kitaratreeniin ja Edellinen/Seuraava pitää oppimistavan', async ({ page }) => {
    await page.goto('/kitaratreeni.html#aihe-rytmi');
    await page.locator('#aihe-rytmi').getByRole('link', { name: /Alas–ylös yhdellä soinnulla/ }).click();
    await expect(page).toHaveURL(/alas-ylos-yhdella-soinnulla\.html\?tapa=kitara$/);
    await expect(mainNav(page).getByRole('link', { name: 'Kitaratreeni' })).toHaveAttribute('aria-current', 'true');
    await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).not.toHaveAttribute('aria-current');
    const bottom = page.locator('.study-steps--bottom');
    await expect(bottom.locator('a[rel="next"]')).toHaveAttribute('href', /kaksi-sointua-yhdessa-tahdissa\.html\?tapa=kitara$/);
    await bottom.locator('a[rel="next"]').click();
    await expect(page.locator('.study-up .study-back')).toHaveText('← Kitaratreeni: Rytmi');
    await page.locator('.study-up .study-back').click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-rytmi$/);
  });

  test('vanha suora osoite ilman oppimistapaa toimii kuten ennen', async ({ page }) => {
    await page.goto('/oppi/rytmi/alas-ylos-yhdella-soinnulla.html');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Rytmiin');
    await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
    await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('.study-steps--bottom a[rel="next"]')).toHaveAttribute('href', 'kaksi-sointua-yhdessa-tahdissa.html');
    await page.goto('/pelit/ensikeikka/index.html?aihe=aihe-korva');
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
    await expect(page).toHaveURL(/oppi\/korva\/index\.html$/);
  });

  test('Oppimiskartan aihesivulla voi vaihtaa saman aiheen peleihin ja kitaratreeniin', async ({ page }) => {
    await page.goto('/oppi/korva/index.html');
    const modes = page.locator('.study-modes');
    await expect(modes).toHaveText('Sama aihe: Musapelit (4) · Kitaratreeni (7)');
    await page.goto('/oppi/rytmi/index.html');
    await expect(page.locator('.study-modes')).toHaveText('Sama aihe: Musapelit (ei peliä) · Kitaratreeni (2)');
    await page.locator('.study-modes').getByRole('link', { name: 'Kitaratreeni' }).click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-rytmi$/);
  });

  test('pitkän sivun alareunassa on vain Edellinen/Seuraava ja yläreunan paluu löytyy näppäimistöllä', async ({ page, isMobile }) => {
    await page.goto('/oppi/soinnut/septimisoinnut.html');
    const bottom = page.locator('.study-steps--bottom');
    await expect(bottom.getByRole('link')).toHaveText([/^← Edellinen:/, /^Seuraava:/]);
    await expect(page.locator('.study-up .study-back')).toHaveText('← Sointuihin ja harmoniaan');
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await expect(page.locator('.study-up .study-back')).toBeFocused();
  });

  test('kitaristi löytää soittoharjoituksen ja avaa aiheeseen rajatun otelautatyökalun', async ({ page }) => {
    await page.goto('/kitaratreeni.html');
    const topic = page.locator('#aihe-otelauta');
    await expect(topic.getByRole('link', { name: /Etsi sama sävel kaikilta kieliltä/ })).toHaveAttribute('href', 'oppi/otelauta/etsi-sama-savel.html?tapa=kitara');
    const helper = topic.getByRole('link', { name: 'Otelautaopas · Oktaavit' });
    await expect(helper).toHaveAttribute('href', 'otelautaharjoittelija.html?toonikka=A&aihe=aihe-otelauta&tapa=kitara#oktaavit');
    await helper.click();
    await expect(page.getByRole('button', { name: 'Oktaavit', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('link', { name: 'Takaisin: Kitaratreeni: Otelauta' }).click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-otelauta$/);
  });

  test('oppimistapaa vaihdetaan saman aiheen kohdalle ilman uutta navigointia', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-korva');
    await page.locator('#aihe-korva').getByRole('link', { name: 'Kitaratreeni' }).click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-korva$/);
    await expect(page.locator('#aihe-korva')).toBeInViewport();
    await page.locator('#aihe-korva').getByRole('link', { name: 'Opi & oivalla' }).click();
    await expect(page).toHaveURL(/oppi\/korva\/index\.html$/);
  });

  test('aihe ilman peliä ohjaa olemassa olevaan sisältöön eikä näytä tulossa-kortteja', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-rytmi');
    const rytmi = page.locator('#aihe-rytmi');
    await expect(rytmi).toContainText('Ei peliä tässä aiheessa.');
    await expect(rytmi.getByRole('link', { name: 'Kitaratreenistä' })).toHaveAttribute('href', 'kitaratreeni.html#aihe-rytmi');
    await expect(page.getByText(/tulossa/i)).toHaveCount(0);
  });

  test('Soittopakki näyttää vain käytettävissä olevat työkalut', async ({ page }) => {
    await page.goto('/soittopakki.html');
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(['Otelautaopas', 'Viritin']);
    await expect(page.getByText('Metronomi')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Avaa Riffiharjoitus ja viritin' })).toHaveAttribute('href', 'riffikaiku.html?tila=harjoitus');
    await page.getByRole('link', { name: 'Sointukartta' }).click();
    await expect(page.getByRole('button', { name: 'Soinnut', exact: true })).toHaveAttribute('aria-pressed', 'true');
  });

  test('palaavan käyttäjän tallennukset säilyvät uusissa näkymissä', async ({ page }) => {
    const practice = JSON.stringify({ version: 3, sessions: [{ count: 7 }] });
    await page.addInitScript(([luvut, harjoittelu, value]) => {
      if (!sessionStorage.getItem('alustettu')) {
        sessionStorage.setItem('alustettu', '1');
        localStorage.setItem(luvut, '["pulssi-ja-komppi","harjoitus:alas-ylos-yhdella-soinnulla"]');
        localStorage.setItem(harjoittelu, value);
      }
    }, [LUVUT, HARJOITTELU, practice]);
    await page.goto('/index.html');
    const before = await page.evaluate(() => JSON.stringify(Object.entries(localStorage).sort()));
    for (const path of ['/musapelit.html', '/kitaratreeni.html', '/soittopakki.html', '/oppi/rytmi/index.html']) await page.goto(path);
    await expect(page.locator('[data-study-status="harjoitus:alas-ylos-yhdella-soinnulla"]')).toHaveText('✓ Tehty');
    expect(await page.evaluate(() => JSON.stringify(Object.entries(localStorage).sort()))).toBe(before);
  });

  test('vanhat suorat osoitteet toimivat edelleen', async ({ page }) => {
    for (const [path, heading] of [
      ['/otelautaharjoittelija.html?toonikka=A&asteikko=dorian', 'Otelautaopas'],
      ['/kitaraharjoittelija.html?polku=kappaleet', 'Yksi sointu, kaksi askelta'],
      ['/oppi/korva/index.html', 'Sävelkorva ja melodia'],
      ['/book/osa-2.html', 'Sävelet ja intervallit'],
    ] as const) {
      await page.goto(path);
      await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
    }
    await page.goto('/#harjoittelija');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html$/);
  });
});

test.describe('Pääosiot puhelimessa, näppäimistöllä, ilman JavaScriptiä ja tulostettaessa', () => {
  for (const width of [320, 360, 390]) {
    test(`päävalikko ja näkymät mahtuvat ${width} px leveyteen`, async ({ page }) => {
      await page.setViewportSize({ width, height: 740 });
      for (const path of ['/index.html', '/musapelit.html', '/kitaratreeni.html', '/soittopakki.html', '/oppi/korva/index.html', '/book/osa-2.html']) {
        await page.goto(path);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(width);
        const links = mainNav(page).getByRole('listitem').getByRole('link');
        await expect(links).toHaveCount(4);
        for (const link of await links.all()) {
          const box = (await link.boundingBox())!;
          expect(box.height, path).toBeGreaterThanOrEqual(44);
          expect(box.x + box.width, path).toBeLessThanOrEqual(width);
        }
        // 2 × 2 -ruudukko: kaksi riviä, molemmilla kaksi osiota.
        const rows = new Set(await Promise.all((await links.all()).map(async l => Math.round((await l.boundingBox())!.y))));
        expect(rows.size, path).toBe(2);
      }
    });
  }

  test('näppäimistöllä pääsee sisältöön ja aiheen pikavalinta siirtää fokuksen aiheeseen', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.goto('/kitaratreeni.html');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Siirry sisältöön' })).toBeFocused();
    for (let i = 0; i < 5; i++) await page.keyboard.press('Tab');
    await expect(mainNav(page).getByRole('link', { name: 'Soittopakki' })).toBeFocused();
    const jump = page.getByRole('navigation', { name: 'Aiheet' }).getByRole('link', { name: /Asteikot ja moodit/ });
    await jump.focus();
    expect(await jump.evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#aihe-asteikot$/);
    await page.keyboard.press('Tab');
    await expect(page.locator('#aihe-asteikot a').first()).toBeFocused();
  });

  test.describe('ilman JavaScriptiä', () => {
    test.use({ javaScriptEnabled: false });
    test('näkymät ja suorat linkit toimivat', async ({ page }) => {
      await page.goto('/kitaratreeni.html');
      await expect(page.locator('section.mode-topic')).toHaveCount(8);
      await page.locator('#aihe-rytmi').getByRole('link', { name: /Alas–ylös yhdellä soinnulla/ }).click();
      await expect(page).toHaveURL(/oppi\/rytmi\/alas-ylos-yhdella-soinnulla\.html\?tapa=kitara$/);
      // Ilman JavaScriptiä paluu toimii kuten ennen: Oppimiskartan aiheeseen.
      await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
      await page.goto('/soittopakki.html');
      await expect(page.getByRole('link', { name: 'Avaa Otelautaopas' })).toBeVisible();
    });
  });

  test('tulostettaessa aiheiden sisältö säilyy ja navigointi piiloutuu', async ({ page }) => {
    await page.goto('/kitaratreeni.html');
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.site-top')).toBeHidden();
    await expect(page.getByRole('navigation', { name: 'Aiheet' })).toBeHidden();
    await expect(page.locator('#aihe-kappaleet').getByRole('link', { name: /Kappaleharjoittelija/ })).toBeVisible();
    await expect(page.locator('#aihe-soinnut .mode-list li')).toHaveCount(9);
  });
});
