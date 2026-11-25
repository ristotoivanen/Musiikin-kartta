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
    await expect(page).toHaveURL(/index\.html$/);
    await page.goto('/oppi/savelnimet/index.html');
    await page.locator('#aiemmat > summary').click();
    await page.getByRole('link', { name: /Sävelet ja intervallit/ }).first().click();
    await expect(page).toHaveURL(/oppi\/savelnimet\/savelet-ja-intervallit\.html$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('intervallit');
    await page.getByRole('link', { name: /Sävelnimiin ja sointumerkintöihin/ }).first().click();
    await expect(page).toHaveURL(/oppi\/savelnimet\/index\.html$/);
    await page.getByRole('link', { name: /Oppimiskarttaan/ }).first().click();
    await expect(page).toHaveURL(/index\.html#aihe-nuotit$/);
  });

  test('A: pelaaja löytää Ensikeikan heti, näkee harjoitettavan taidon ja palaa samaan aiheeseen Musapeleissä', async ({ page }) => {
    await page.goto('/musapelit.html');
    // Pelit näkyvät heti: ei tyhjiä aiheosioita ennen niitä.
    await expect(page.locator('.game-topic:visible')).toHaveCount(0);
    const card = page.locator('#pelit').getByRole('link', { name: /Ensikeikka/ });
    await expect(card).toBeInViewport();
    await expect(card).toContainText('Harjoittaa: kotisävelen ja fraasin lopetuksen kuuleminen');
    await expect(card).toHaveAttribute('href', 'pelit/ensikeikka/index.html?aihe=aihe-korva&tapa=pelit');
    await card.click();
    await expect(mainNav(page).getByRole('link', { name: 'Musapelit' })).toHaveAttribute('aria-current', 'true');
    await page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' }).click();
    await expect(page).toHaveURL(/musapelit\.html#aihe-korva$/);
    // Paluu näyttää aiheen pelit ja aktiivisen rajauksen; kaikkien pelien lista on piilossa.
    await expect(page.locator('#aihe-korva')).toBeVisible();
    await expect(page.locator('#aihe-korva').getByRole('link', { name: /Ensikeikka/ })).toBeVisible();
    await expect(page.locator('#pelit')).toBeHidden();
    await expect(page.getByRole('navigation', { name: 'Rajaa pelit aiheen mukaan' }).locator('[aria-current]')).toContainText('Sävelkorva ja melodia');
  });

  test('B: pelaaja rajaa Soinnut-aiheeseen ja löytää Tunnista avoin sointu ja Mikä sointu tulee?', async ({ page }) => {
    await page.goto('/musapelit.html');
    const filter = page.getByRole('navigation', { name: 'Rajaa pelit aiheen mukaan' });
    await expect(filter.getByRole('link', { name: /Kaikki pelit/ })).toHaveAttribute('aria-current', 'true');
    await filter.getByRole('link', { name: /Soinnut ja harmonia/ }).click();
    await expect(page).toHaveURL(/#aihe-soinnut$/);
    const topic = page.locator('#aihe-soinnut');
    await expect(topic.locator('.game-card')).toHaveCount(3);
    await expect(topic.getByRole('link', { name: /Tunnista avoin sointu/ })).toBeVisible();
    const chord = topic.getByRole('link', { name: /Mikä sointu tulee\?/ });
    await expect(chord).toContainText('06 Soinnut ja harmonia · 08 Kappaleet ja oma musiikki');
    await chord.click();
    // Sama sivu ja suoritustunniste kuin Kappaleet-aiheessa.
    await expect(page.locator('main')).toHaveAttribute('data-study-item', 'harjoitus:mika-sointu-tulee');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Musapelit: Soinnut ja harmonia');
    // Selaimen paluu palauttaa saman rajauksen.
    await page.goBack();
    await expect(page.locator('#aihe-soinnut')).toBeVisible();
    await filter.getByRole('link', { name: /Kaikki pelit/ }).click();
    await expect(page.locator('#pelit .game-card')).toHaveCount(9);
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

  test('oppimistapa jatkuu vain saman oppimistavan sivulle: toisen tavan sivulla on tavallinen navigointi', async ({ page }) => {
    await page.goto('/oppi/rytmi/alas-ylos-yhdella-soinnulla.html?tapa=kitara');
    const top = page.locator('.study-steps--top');
    // Seuraava (Kaksi sointua yhdessä tahdissa) on Kitaratreenissä, Edellinen (Löydä pulssi ja ykkönen) ei ole.
    await expect(top.locator('a[rel="next"]')).toHaveAttribute('href', /kaksi-sointua-yhdessa-tahdissa\.html\?tapa=kitara$/);
    await expect(top.locator('a[rel="prev"]')).toHaveAttribute('href', 'kuuntele-pulssi.html');
    await top.locator('a[rel="prev"]').click();
    await expect(page).toHaveURL(/oppi\/rytmi\/kuuntele-pulssi\.html$/);
    await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).toHaveAttribute('aria-current', 'true');
    await expect(mainNav(page).getByRole('link', { name: 'Kitaratreeni' })).not.toHaveAttribute('aria-current');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Rytmiin');
    await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
  });

  test('oppimistapaan kuulumaton sivu ei muutu, vaikka osoitteessa olisi ?tapa=', async ({ page }) => {
    await page.goto('/oppi/rytmi/kuuntele-pulssi.html?tapa=kitara');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Rytmiin');
    await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('.study-steps--bottom a[rel="next"]')).toHaveAttribute('href', 'alas-ylos-yhdella-soinnulla.html');
    await page.goto('/oppi/korva/mika-aste-soi.html?tapa=kitara');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Sävelkorvaan ja melodiaan');
  });

  test('sama sisältö kahdessa aiheessa palaa siihen aiheeseen, josta se avattiin', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-soinnut');
    await page.locator('#aihe-soinnut').getByRole('link', { name: /Mikä sointu tulee\?/ }).click();
    await expect(page).toHaveURL(/oppi\/kappaleet\/mika-sointu-tulee\.html\?aihe=aihe-soinnut&tapa=pelit$/);
    // Sama sivu ja suoritustunniste kuin Kappaleet-aiheessa.
    await expect(page.locator('main')).toHaveAttribute('data-study-item', 'harjoitus:mika-sointu-tulee');
    // Edellinen ja Seuraava eivät ole Musapeleissä, joten ne eivät saa parametria.
    await expect(page.locator('.study-steps--bottom a[rel="next"]')).toHaveAttribute('href', 'tee-sointukartta.html');
    await page.locator('.study-up').getByRole('link', { name: 'Musapelit: Soinnut ja harmonia' }).click();
    await expect(page).toHaveURL(/musapelit\.html#aihe-soinnut$/);
    await page.goto('/musapelit.html#aihe-kappaleet');
    await page.locator('#aihe-kappaleet').getByRole('link', { name: /Mikä sointu tulee\?/ }).click();
    await expect(page.locator('.study-up .study-back')).toHaveText('← Musapelit: Kappaleet ja oma musiikki');
  });

  test('Opi & oivalla: Tutki myös -linkistä avattu harjoitus palaa lähtöaiheeseen', async ({ page }) => {
    await page.goto('/oppi/soinnut/index.html');
    await page.getByRole('region', { name: 'Tutki myös' }).or(page.locator('section.study-group', { hasText: 'Tutki myös' }))
      .getByRole('link', { name: 'Mikä sointu tulee?' }).click();
    await expect(page).toHaveURL(/oppi\/kappaleet\/mika-sointu-tulee\.html\?aihe=aihe-soinnut$/);
    await expect(page.locator('main')).toHaveAttribute('data-study-item', 'harjoitus:mika-sointu-tulee');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Sointuihin ja harmoniaan');
    // Päävalikko ja Kappaleet-aiheen Edellinen/Seuraava pysyvät ennallaan.
    await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).toHaveAttribute('aria-current', 'true');
    await expect(page.locator('.study-steps--bottom a[rel="next"]')).toHaveAttribute('href', 'tee-sointukartta.html');
    await page.locator('.study-up .study-back').click();
    await expect(page).toHaveURL(/oppi\/soinnut\/index\.html$/);
  });

  test('lähtöaihe ohitetaan, jos sivu ei ole sen aiheen Tutki myös -listassa', async ({ page }) => {
    await page.goto('/oppi/kappaleet/mika-sointu-tulee.html?aihe=aihe-rytmi');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Kappaleisiin ja omaan musiikkiin');
    await page.goto('/oppi/kappaleet/mika-sointu-tulee.html');
    await expect(page.locator('.study-up .study-back')).toHaveText('← Kappaleisiin ja omaan musiikkiin');
    await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
  });

  test('oppimistapa vaatii sovelluksen oikean tilan: Riffikaiun peli ja harjoitus sekä harjoittelijan polut', async ({ page }) => {
    // Kitaratreeni ei ole voimassa Riffikaiun pelitilassa eikä harjoittelijan Musapelit-polulla.
    for (const path of ['/riffikaiku.html?tila=peli&aihe=aihe-korva&tapa=kitara', '/kitaraharjoittelija.html?polku=soinnut&aihe=aihe-soinnut&tapa=kitara']) {
      await page.goto(path);
      await expect(page.getByRole('link', { name: 'Takaisin aiheeseen' }), path).toBeVisible();
      await expect(page.getByRole('link', { name: /^Takaisin: Kitaratreeni/ }), path).toHaveCount(0);
    }
    // Pelitilassa päävalikko pysyy sivun omassa osiossa (Musapelit).
    await page.goto('/riffikaiku.html?tila=peli&aihe=aihe-korva&tapa=kitara');
    await expect(mainNav(page).getByRole('link', { name: 'Musapelit' })).toHaveAttribute('aria-current', 'true');
    await page.goto('/riffikaiku.html?tila=harjoitus&aihe=aihe-korva&tapa=kitara');
    await expect(page.getByRole('link', { name: 'Takaisin: Kitaratreeni: Sävelkorva ja melodia' })).toHaveAttribute('href', /kitaratreeni\.html#aihe-korva$/);
    await expect(mainNav(page).getByRole('link', { name: 'Kitaratreeni' })).toHaveAttribute('aria-current', 'true');
    await page.goto('/riffikaiku.html?tila=peli&aihe=aihe-korva&tapa=pelit');
    await expect(page.getByRole('link', { name: 'Takaisin: Musapelit: Sävelkorva ja melodia' })).toBeVisible();
    await page.goto('/kitaraharjoittelija.html?polku=asteikot&aihe=aihe-asteikot&tapa=kitara');
    await expect(page.getByRole('link', { name: 'Takaisin: Kitaratreeni: Asteikot ja moodit' })).toBeVisible();
    await page.goto('/kitaraharjoittelija.html?polku=soinnut&aihe=aihe-soinnut&tapa=pelit');
    await expect(page.getByRole('link', { name: 'Takaisin: Musapelit: Soinnut ja harmonia' })).toBeVisible();
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

  test('C: kitaristi valitsee Rytmin, avaa Alas–ylös yhdellä soinnulla ja palaa Kitaratreenin Rytmiin', async ({ page }) => {
    await page.goto('/kitaratreeni.html');
    // Harjoitukset eivät kuormita aloitusnäkymää: kaikki aiheet ovat kiinni.
    await expect(page.locator('details.train-topic[open]')).toHaveCount(0);
    await page.locator('#aihe-rytmi > summary').click();
    const rhythm = page.locator('#aihe-rytmi');
    await expect(rhythm).toHaveAttribute('open', '');
    await expect(rhythm.getByRole('heading', { name: /^Soita/ })).toBeVisible();
    await rhythm.getByRole('link', { name: 'Alas–ylös yhdellä soinnulla' }).click();
    await expect(page).toHaveURL(/oppi\/rytmi\/alas-ylos-yhdella-soinnulla\.html\?tapa=kitara$/);
    await page.locator('.study-up .study-back').click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-rytmi$/);
    await expect(page.locator('#aihe-rytmi')).toHaveAttribute('open', '');
    await expect(page.locator('#aihe-rytmi').getByRole('link', { name: 'Alas–ylös yhdellä soinnulla' })).toBeInViewport();
  });

  test('D: kitaristi löytää asteikkoharjoitukset, avaa rajatun Otelautaoppaan ja palaa oikeaan aiheeseen', async ({ page }) => {
    await page.goto('/kitaratreeni.html');
    await page.locator('#aihe-asteikot > summary').click();
    const scales = page.locator('#aihe-asteikot');
    await expect(scales.getByRole('link', { name: /Pentatoniset asteikot ja moodit/ })).toBeVisible();
    await expect(scales.locator('.train-list a')).toHaveCount(4);
    await scales.getByRole('link', { name: 'Otelautaopas · Asteikot ja moodit' }).click();
    await expect(page.locator('#scale-select')).toHaveValue('mp');
    await page.getByRole('link', { name: 'Takaisin: Kitaratreeni: Asteikot ja moodit' }).click();
    await expect(page).toHaveURL(/kitaratreeni\.html#aihe-asteikot$/);
    await expect(page.locator('#aihe-asteikot')).toHaveAttribute('open', '');
  });

  test('kitaristi löytää soittoharjoituksen ja avaa aiheeseen rajatun otelautatyökalun', async ({ page }) => {
    await page.goto('/kitaratreeni.html#aihe-otelauta');
    const topic = page.locator('#aihe-otelauta');
    await expect(topic).toHaveAttribute('open', '');
    await expect(topic.getByRole('link', { name: /Etsi sama sävel kaikilta kieliltä/ })).toHaveAttribute('href', 'oppi/otelauta/etsi-sama-savel.html?tapa=kitara');
    const helper = topic.getByRole('link', { name: 'Otelautaopas · Oktaavit' });
    await expect(helper).toHaveAttribute('href', 'otelautaopas-beta.html?toonikka=A&aihe=aihe-otelauta&tapa=kitara#oktaavit');
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
    await expect(rytmi).toBeVisible();
    await expect(rytmi).toContainText('Ei peliä tässä aiheessa. Kitaratreenissä on tästä aiheesta 2 harjoitusta.');
    await expect(rytmi.getByRole('link', { name: 'Kitaratreeni' })).toHaveAttribute('href', 'kitaratreeni.html#aihe-rytmi');
    await expect(rytmi.getByRole('link', { name: 'Näytä kaikki pelit' })).toHaveAttribute('href', '#pelit');
    await expect(page.getByText(/tulossa/i)).toHaveCount(0);
    // Tyhjää aihetta ei tarjota oletusnäkymän rajauksissa.
    await page.goto('/musapelit.html');
    await expect(page.getByRole('navigation', { name: 'Rajaa pelit aiheen mukaan' }).getByRole('link', { name: /Rytmi/ })).toHaveCount(0);
  });

  test('Soittopakki näyttää vain käytettävissä olevat työkalut', async ({ page }) => {
    await page.goto('/soittopakki.html');
    await expect(page.getByRole('heading', { level: 2 })).toHaveText(['Otelautaopas BETA', 'Viritin']);
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

test.describe('Opi & oivalla -päävalikkolinkki', () => {
  // Linkki avaa etusivun yläreunaan ilman fragmenttia, jolloin päävalikko on näkyvissä. Ei pakotettua vieritystä.
  const startPages = [
    ['/musapelit.html', 'Musapelit'],
    ['/kitaratreeni.html#aihe-asteikot', 'Kitaratreeni'],
    ['/soittopakki.html', 'Soittopakki'],
    ['/oppi/soinnut/septimisoinnut.html', 'oppitunti'],
    ['/book/osa-2.html', 'teoriaopas'],
  ] as const;
  for (const [path, name] of startPages) {
    test(`${name}: Opi & oivalla avaa etusivun yläreunaan ja päävalikko näkyy`, async ({ page }) => {
      await page.goto(path);
      // Käyttäjä on vierittänyt sivua; linkki napautetaan siirtämättä vierityskohtaa.
      await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
      await mainNav(page).getByRole('link', { name: 'Opi & oivalla' }).evaluate(link => (link as HTMLAnchorElement).click());
      await expect(page).toHaveURL(/\/index\.html$/);
      await expect(page.getByRole('heading', { level: 1, name: 'Oppimiskartta' })).toBeVisible();
      expect(await page.evaluate(() => window.scrollY)).toBe(0);
      await expect(mainNav(page)).toBeInViewport({ ratio: 1 });
    });
  }

  test('selaimen Takaisin palauttaa lähtösivun vierityskohdan', async ({ page }) => {
    await page.goto('/oppi/soinnut/septimisoinnut.html');
    await page.evaluate(() => window.scrollTo(0, 1500));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(1500);
    await mainNav(page).getByRole('link', { name: 'Opi & oivalla' }).evaluate(link => (link as HTMLAnchorElement).click());
    await expect(page).toHaveURL(/\/index\.html$/);
    await page.goBack();
    await expect(page).toHaveURL(/septimisoinnut\.html$/);
    // Browserin sivuhistoria saattaa palauttaa kohdan muutaman CSS-pikselin
    // päähän (esim. 1496/1500) fonttimittausten ja vieritysankkuroinnin takia.
    // Vaadi sama näkyvä kohta 8 px:n tarkkuudella; isompi hyppy on regressio.
    await expect.poll(() => page.evaluate(() => Math.abs(window.scrollY - 1500)))
      .toBeLessThanOrEqual(8);
  });

  test('tarkoitukselliset suorat kohdelinkit toimivat edelleen', async ({ page }) => {
    await page.goto('/index.html#oppimisaiheet');
    await expect(page.locator('#oppimisaiheet')).toBeInViewport();
    expect(await page.evaluate(() => window.scrollY)).toBeGreaterThan(0);
    await page.goto('/index.html#aihe-kappaleet');
    await expect(page.locator('#aihe-kappaleet')).toBeInViewport();
    // Työkalujen Takaisin aiheeseen -linkki ratkaistaan edelleen päävalikosta (brändilinkki).
    await page.goto('/otelautaharjoittelija.html?aihe=aihe-soinnut#soinnut');
    await expect(page.getByRole('link', { name: 'Takaisin aiheeseen' })).toHaveAttribute('href', /\/oppi\/soinnut\/index\.html$/);
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

  test('G: Kitaratreeni näppäimistöllä: aiheen avaus, harjoituksen valinta, suljetut aiheet eivät ole sarkainjärjestyksessä', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.goto('/kitaratreeni.html');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Siirry sisältöön' })).toBeFocused();
    for (let i = 0; i < 5; i++) await page.keyboard.press('Tab');
    await expect(mainNav(page).getByRole('link', { name: 'Soittopakki' })).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: /^Kitaraharjoittelija/ })).toBeFocused();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    const summary = page.locator('#aihe-rytmi > summary');
    await expect(summary).toBeFocused();
    expect(await summary.evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
    // Suljetun aiheen linkit ohitetaan: seuraava sarkain menee seuraavaan aiheeseen.
    await page.keyboard.press('Tab');
    await expect(page.locator('#aihe-nuotit > summary')).toBeFocused();
    await page.keyboard.press('Shift+Tab');
    await page.keyboard.press('Enter');
    await expect(page.locator('#aihe-rytmi')).toHaveAttribute('open', '');
    await page.keyboard.press('Tab');
    await expect(page.locator('#aihe-rytmi').getByRole('link', { name: 'Alas–ylös yhdellä soinnulla' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/alas-ylos-yhdella-soinnulla\.html\?tapa=kitara$/);
    // Välilyönti sulkee aiheen.
    await page.goBack();
    await page.locator('#aihe-asteikot > summary').focus();
    await page.keyboard.press('Space');
    await expect(page.locator('#aihe-asteikot')).toHaveAttribute('open', '');
    await page.keyboard.press('Space');
    await expect(page.locator('#aihe-asteikot')).not.toHaveAttribute('open', '');
  });

  test('G: Musapelien aiherajaus ja pelin avaus näppäimistöllä', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Sarkainnäppäin testataan työpöytäkoossa.');
    await page.goto('/musapelit.html');
    const chip = page.getByRole('navigation', { name: 'Rajaa pelit aiheen mukaan' }).getByRole('link', { name: /Otelauta/ });
    await chip.focus();
    expect(await chip.evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#aihe-otelauta$/);
    await expect(chip).toHaveAttribute('aria-current', 'true');
    // Fragmentti siirtää sarkainjärjestyksen aiheeseen: ensimmäinen kohde on aiheen linkki.
    await page.keyboard.press('Tab');
    await expect(page.locator('#aihe-otelauta').getByRole('link').first()).toBeFocused();
  });

  test.describe('ilman JavaScriptiä', () => {
    test.use({ javaScriptEnabled: false });
    test('F: pelit, aiherajaus ja harjoitukset toimivat ilman JavaScriptiä', async ({ page }) => {
      await page.goto('/musapelit.html');
      await expect(page.locator('#pelit .game-card')).toHaveCount(9);
      await expect(page.locator('#pelit .game-card').first()).toBeVisible();
      // Aiherajaus on CSS:n :target, ei JavaScript.
      await page.goto('/musapelit.html#aihe-soinnut');
      await expect(page.locator('#aihe-soinnut').getByRole('link', { name: /Tunnista avoin sointu/ })).toBeVisible();
      await expect(page.locator('#pelit')).toBeHidden();
      await page.locator('#aihe-soinnut').getByRole('link', { name: /Tunnista avoin sointu/ }).click();
      await expect(page).toHaveURL(/kitaraharjoittelija\.html\?polku=soinnut&aihe=aihe-soinnut&tapa=pelit$/);
      await page.goto('/kitaratreeni.html');
      await expect(page.locator('details.train-topic')).toHaveCount(8);
      // Natiivi details avautuu ilman JavaScriptiä.
      await page.locator('#aihe-rytmi > summary').click();
      await page.locator('#aihe-rytmi').getByRole('link', { name: /Alas–ylös yhdellä soinnulla/ }).click();
      await expect(page).toHaveURL(/oppi\/rytmi\/alas-ylos-yhdella-soinnulla\.html\?tapa=kitara$/);
      // Ilman JavaScriptiä paluu toimii kuten ennen: Oppimiskartan aiheeseen.
      await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
      await expect(page.locator('.study-steps--top a[rel="prev"]')).toHaveAttribute('href', 'kuuntele-pulssi.html');
      await expect(page.locator('.study-steps--top a[rel="next"]')).toHaveAttribute('href', 'kaksi-sointua-yhdessa-tahdissa.html');
      await expect(mainNav(page).getByRole('link', { name: 'Opi & oivalla' })).toHaveAttribute('aria-current', 'true');
      await expect(page.locator('.study-modes')).toHaveCount(0);
      // Lähtöaiheen paluu on JavaScript-parannus: ilman sitä paluu vie sivun omaan aiheeseen.
      await page.goto('/oppi/kappaleet/mika-sointu-tulee.html?aihe=aihe-soinnut');
      await expect(page.locator('.study-up .study-back')).toHaveAttribute('href', 'index.html');
      await page.goto('/soittopakki.html');
      await expect(page.getByRole('link', { name: 'Avaa Otelautaopas', exact: true })).toBeVisible();
    });
  });

  test('H: tulostettaessa harjoitukset ja pelit säilyvät ja navigointi piiloutuu', async ({ page }) => {
    await page.goto('/kitaratreeni.html');
    // Selain lähettää beforeprint-tapahtuman ennen tulostusta; emulateMedia ei lähetä sitä itse.
    await page.evaluate(() => window.dispatchEvent(new Event('beforeprint')));
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.site-top')).toBeHidden();
    await expect(page.locator('details.train-topic[open]')).toHaveCount(8);
    await expect(page.locator('#aihe-kappaleet').getByRole('link', { name: /Kappaleharjoittelija/ })).toBeVisible();
    await expect(page.locator('#aihe-soinnut .train-list li')).toHaveCount(9);
    await page.evaluate(() => window.dispatchEvent(new Event('afterprint')));
    await expect(page.locator('details.train-topic[open]')).toHaveCount(0);
    await page.goto('/musapelit.html#aihe-otelauta');
    await page.emulateMedia({ media: 'print' });
    await expect(page.locator('.game-filter')).toBeHidden();
    await expect(page.locator('#pelit .game-card')).toHaveCount(9);
    await expect(page.locator('#pelit')).toBeVisible();
  });

  test('E: suorat aihelinkit avaavat oikean sisällön', async ({ page }) => {
    await page.goto('/musapelit.html#aihe-soinnut');
    await expect(page.locator('#aihe-soinnut')).toBeInViewport();
    await expect(page.locator('#aihe-soinnut').getByRole('heading', { name: /Soinnut ja harmonia/ })).toBeVisible();
    await page.goto('/kitaratreeni.html#aihe-asteikot');
    await expect(page.locator('#aihe-asteikot')).toHaveAttribute('open', '');
    await expect(page.locator('#aihe-asteikot > summary')).toBeInViewport();
    await expect(page.locator('details.train-topic[open]')).toHaveCount(1);
    // Kaikki kahdeksan aiheankkuria säilyvät molemmissa näkymissä.
    for (const anchor of ['aihe-kitara', 'aihe-rytmi', 'aihe-nuotit', 'aihe-korva', 'aihe-otelauta', 'aihe-soinnut', 'aihe-asteikot', 'aihe-kappaleet']) {
      await page.goto('/musapelit.html#' + anchor);
      await expect(page.locator('#' + anchor), anchor).toBeVisible();
      await page.goto('/kitaratreeni.html#' + anchor);
      await expect(page.locator('#' + anchor), anchor).toHaveAttribute('open', '');
    }
  });

  test('200 % tekstikoko 320 px:ssä ei aiheuta vaakavieritystä Musapeleissä eikä Kitaratreenissä', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 800 });
    for (const path of ['/musapelit.html', '/musapelit.html#aihe-korva', '/kitaratreeni.html', '/kitaratreeni.html#aihe-kappaleet']) {
      await page.goto(path);
      await page.addStyleTag({ content: 'html { font-size: 200% !important; } body { font-size: 200%; }' });
      expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(320);
    }
  });

  for (const width of [430, 768]) {
    test(`Musapelit ja Kitaratreeni mahtuvat ${width} px leveyteen ja ensimmäinen peli näkyy heti`, async ({ page }) => {
      await page.setViewportSize({ width, height: 844 });
      for (const path of ['/musapelit.html', '/kitaratreeni.html', '/kitaratreeni.html#aihe-soinnut']) {
        await page.goto(path);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(width);
      }
      await page.goto('/musapelit.html');
      await expect(page.locator('#pelit .game-card').first()).toBeInViewport();
    });
  }
});

 test('Sointupaja beta löytyy Musapeleistä ja palaa samaan aiheeseen', async ({page})=>{
  await page.goto('/musapelit.html#aihe-soinnut');
  const card=page.locator('#aihe-soinnut').getByRole('link',{name:/Sointupaja/});
  await expect(card.locator('.mode-badge')).toHaveText('beta');
  await card.click();
  await expect(page).toHaveURL(/sointipaja-prototyyppi\.html\?aihe=aihe-soinnut&tapa=pelit$/);
  await expect(page.locator('h1')).toHaveText('Sointupaja beta');
  await expect(page.locator('h1 .mode-badge')).toHaveText('beta');
  await expect(page.locator('#prototype')).toBeVisible();
  await page.locator('#mode-challenge').click();
  await expect(page.locator('#challenge-setup')).toBeVisible();
  await page.getByRole('link',{name:'← Musapelit: Soinnut ja harmonia',exact:true}).click();
  await expect(page).toHaveURL(/musapelit\.html#aihe-soinnut$/);
  await expect(page.locator('#aihe-soinnut').getByRole('link',{name:/Tunnista avoin sointu/})).toBeVisible();
 });
