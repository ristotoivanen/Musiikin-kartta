import { test, expect, type Page } from '@playwright/test';

// Yhteinen päävalikko, Musiikin teoria -aloitusnäkymä ja edistymisen jatkuvuus.
// Neljä pääosiota: Opi & oivalla avaa Oppimiskartan aihejaottelun, vaikka kirjan vanha teoriaindeksi säilyy.
// Sisältörekisteri: tools/oppimiskartta/sisaltorekisteri.json.
const MAIN_PAGES = [
  { path: '/index.html', active: 'teoria' },
  { path: '/book/index.html', active: 'teoria' },
  { path: '/book/osa-3.html', active: 'teoria' },
  { path: '/book/sanasto.html', active: 'teoria' },
  { path: '/musapelit.html', active: 'pelit' },
  { path: '/riffikaiku.html', active: 'pelit' },
  { path: '/pelit/ensikeikka/', active: 'pelit' },
  { path: '/kitaratreeni.html', active: 'kitara' },
  { path: '/kitaraharjoittelija.html', active: 'kitara' },
  { path: '/soittopakki.html', active: 'pakki' },
  { path: '/otelautaharjoittelija.html', active: 'pakki' },
] as const;
const LABELS = { teoria: /^Opi & oivalla$/, pelit: /^Musapelit$/, kitara: /^Kitaratreeni$/, pakki: /^Soittopakki$/ };
const mainNav = (page: Page) => page.getByRole('navigation', { name: 'Päävalikko' });
const expandTopicList = (page: Page) => page.locator('#topic-toggle').click();
const LUVUT = 'musiikin-kartta:luvut';
const HARJOITTELU = 'musiikin-kartta:harjoittelu';

test.describe('Yhteinen päävalikko', () => {
  for (const { path, active } of MAIN_PAGES) {
    test(`${path}: sama valikko ja oikea aktiivinen osio`, async ({ page }) => {
      await page.goto(path);
      const nav = mainNav(page);
      await expect(nav).toBeVisible();
      const links = nav.getByRole('link');
      await expect(links).toHaveCount(5);
      await expect(links.nth(0)).toHaveText('Musiikin kartta');
      await expect(links.nth(1)).toHaveText(LABELS.teoria);
      await expect(links.nth(2)).toHaveText(LABELS.pelit);
      await expect(links.nth(3)).toHaveText(LABELS.kitara);
      await expect(links.nth(4)).toHaveText(LABELS.pakki);
      const current = nav.locator('[aria-current]');
      await expect(current).toHaveCount(1);
      await expect(current).toHaveText(LABELS[active]);
      await expect(current).toHaveAttribute('aria-current', path === '/index.html' ? 'page' : /^(page|true)$/);
      await expect(links.nth(0)).not.toHaveAttribute('aria-current');
      // Aktiivinen osio erottuu violetilla taustalla, myös etusivulla.
      expect(await current.evaluate(el => getComputedStyle(el).backgroundColor)).toBe('rgb(75, 47, 214)');
    });
  }

  test('jokainen päävalikon linkki vie oikeaan pääosioon', async ({ page }) => {
    const targets = [
      [LABELS.teoria, /\/index[.]html$/, 'Oppimiskartta'],
      [LABELS.pelit, /\/musapelit\.html$/, 'Musapelit'],
      [LABELS.kitara, /\/kitaratreeni\.html$/, 'Kitaratreeni'],
      [LABELS.pakki, /\/soittopakki\.html$/, 'Soittopakki'],
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
    await expect(page).toHaveURL(/kitaratreeni\.html$/);
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
    await expect(nav.getByRole('link', { name: LABELS.teoria })).toHaveAttribute('href', 'index.html');
    await expect(nav.getByRole('link', { name: LABELS.pelit })).toHaveAttribute('href', 'musapelit.html');
    await expect(nav.getByRole('link', { name: LABELS.kitara })).toHaveAttribute('href', 'kitaratreeni.html');
    await expect(nav.getByRole('link', { name: LABELS.pakki })).toHaveAttribute('href', 'soittopakki.html');
    const continueBox = page.locator('#home-continue');
    await expect(continueBox.getByRole('link', { name: 'Jatka oppimista · Musiikki on kieli' }))
      .toHaveAttribute('href', 'oppi/korva/musiikki-on-kieli.html');
    await expect(continueBox.getByRole('link', { name: 'Jatka kitaraharjoittelua · viimeksi 7 vastattua kysymystä' })).toBeVisible();
    await nav.getByRole('link', { name: LABELS.teoria }).click();
    await expect(page).toHaveURL(/index[.]html$/);
    await expect(page.getByRole('heading', { level: 1, name: 'Oppimiskartta' })).toBeVisible();
  });

  test('aloitussuositus edeltää aihekortteja ja oppaan linkit ovat listan jälkeen', async ({ page }) => {
    await page.goto('/index.html');
    const recommendation = page.getByRole('link', { name: 'Kuuntele pulssi' });
    await expect(recommendation).toHaveAttribute('href', 'oppi/rytmi/kuuntele-pulssi.html');
    expect(await recommendation.evaluate(link => Boolean(link.compareDocumentPosition(document.querySelector('.topic-card')!)
      & Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);

    for (const href of ['book/index.html', 'pdf/musiikin-kartta.pdf', 'book/sanasto.html']) {
      const reference = page.locator('main a[href="' + href + '"]');
      await expect(reference).toBeVisible();
      expect(await reference.evaluate(link => {
        const lastCard = [...document.querySelectorAll('.topic-card')].at(-1)!;
        return Boolean(lastCard.compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING);
      })).toBe(true);
    }
  });

  test('vanha #harjoittelija-linkki ohjaa yhä otelautakarttaan', async ({ page }) => {
    await page.goto('/#harjoittelija');
    await expect(page).toHaveURL(/otelautaharjoittelija\.html$/);
  });
});

test.describe('Oppimiskartan navigointi ja paluu', () => {
  test('sointukartta aukeaa omasta aiheesta suoraan sointunäkymään', async ({ page }) => {
    await page.goto('/index.html#oppimisaiheet');
    await expandTopicList(page);
    await page.locator('#aihe-soinnut').click();
    await expect(page).toHaveURL('/oppi/soinnut/index.html');
    const chordMap = page.getByRole('link', { name: 'Tutki sointukarttaa' });
    await expect(chordMap).toHaveAttribute('href', '../../otelautaharjoittelija.html?aihe=aihe-soinnut#soinnut');
    await chordMap.click();
    await expect(page).toHaveURL('/otelautaharjoittelija.html?aihe=aihe-soinnut#soinnut');
    await expect(page.getByRole('button', { name: 'Soinnut', exact: true })).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
    await expect(page).toHaveURL('/oppi/soinnut/index.html');
  });

  test('opetussivun päävalikosta pääsee koko Oppimiskarttaan', async ({ page }) => {
    await page.goto('/index.html#aihe-soinnut');
    await page.locator('#aihe-soinnut').click();
    await page.locator('#valinta-septimisoinnut').click();
    await expect(page).toHaveURL('/oppi/soinnut/septimisoinnut.html');
    await mainNav(page).getByRole('link', { name: 'Opi & oivalla' }).click();
    await expect(page).toHaveURL('/index.html');
    await expect(page.locator('a.topic-card')).toHaveCount(8);
  });

  test('otelautatehtävä säilyttää harjoittelijan suoran reitin ja aiheen asiayhteyden', async ({ page }) => {
    await page.goto('/index.html#oppimisaiheet');
    await expandTopicList(page);
    await page.locator('#aihe-otelauta').click();
    await page.getByRole('link', { name: 'Etsi sävelet otelaudalta' }).click();
    await expect(page).toHaveURL('/kitaraharjoittelija.html?polku=otelauta&harjoitus=savelten-etsinta&aihe=aihe-otelauta');
    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
    await expect(page).toHaveURL('/oppi/otelauta/index.html');
  });

  test('Riffikaiun käyttötavat säilyttävät paluun Oppimiskartan aiheeseen', async ({ page }) => {
    const topic = '/oppi/korva/index.html';
    const start = '/riffikaiku.html?aihe=aihe-korva';
    const practice = '/riffikaiku.html?tila=harjoitus&aihe=aihe-korva';
    const game = '/riffikaiku.html?tila=peli&aihe=aihe-korva';
    const returnToTopic = page.getByRole('link', { name: 'Takaisin aiheeseen' });
    await page.goto(topic);
    await page.getByRole('link', { name: 'Riffikaiku · matki neljän sävelen riffi' }).click();
    await expect(page).toHaveURL(start);
    await page.getByTestId('mode-harjoitus').click();
    await expect(page).toHaveURL(practice);
    await expect(returnToTopic).toBeVisible();
    await page.getByRole('link', { name: 'Riffikaiku-peli – virtuaalikitara', exact: true }).click();
    await expect(page).toHaveURL(game);
    await expect(returnToTopic).toBeVisible();
    await page.getByRole('link', { name: 'Riffiharjoitus – oikea kitara', exact: true }).click();
    await expect(page).toHaveURL(practice);

    await page.getByRole('navigation', { name: 'Sijainti' }).getByRole('link', { name: 'Riffikaiku', exact: true }).click();
    await expect(page).toHaveURL(start);
    await page.getByTestId('mode-peli').click();
    await expect(page).toHaveURL(game);
    await returnToTopic.click();
    await expect(page).toHaveURL(topic);
  });

  test('vanha #osiot, teoriaoppaan hakemisto ja suorat aihelinkit toimivat', async ({ page }) => {
    await page.goto('/index.html#osiot');
    await expect(page.locator('#osiot')).toBeVisible();
    await page.getByRole('link', { name: '11-osaisen teoriaoppaan' }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Musiikin teoria' })).toBeVisible();
    await page.goto('/index.html#aihe-rytmi');
    await expect(page.locator('#aihe-rytmi')).toBeFocused();
    await page.locator('#aihe-rytmi').click();
    await expect(page).toHaveURL('/oppi/rytmi/index.html');
  });

  test('selaimen paluu aiheeseen näyttää luvun uuden lukumerkinnän', async ({ page }) => {
    await page.goto('/index.html');
    const rhythm = page.locator('#aihe-rytmi');
    await rhythm.click();
    const lesson = page.locator('#valinta-pulssi-ja-komppi');
    await lesson.click();
    await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
    await page.goBack();
    await expect(page).toHaveURL('/oppi/rytmi/index.html');
    await expect(lesson).toBeFocused();
    await expect(lesson.locator('[data-study-status]')).toHaveText('✓ Tehty');
    await expect(page.locator('[data-study-total]')).toHaveText('1/4 sisältöä tehty');
    await page.goBack();
    await expect(rhythm).toBeFocused();
    await expect(page.locator('#home-continue')).toContainText('Jatka oppimista · Neljä otetta ja ensimmäinen kappale');
    await page.goForward();
    await expect(page).toHaveURL('/oppi/rytmi/index.html');
    await page.reload();
    await expect(lesson.locator('[data-study-status]')).toHaveText('✓ Tehty');
  });

  test('selaimen paluu palauttaa oikean kortin vaikka osoitteessa olisi eri aihe', async ({ page }) => {
    await page.goto('/index.html#aihe-rytmi');
    await expect(page.locator('#aihe-rytmi')).toBeFocused();
    await expandTopicList(page);
    const chords = page.locator('#aihe-soinnut');
    await chords.press('Enter');
    await expect(page).toHaveURL('/oppi/soinnut/index.html');
    await page.goBack();
    await expect(page).toHaveURL('/index.html#aihe-rytmi');
    await expect(chords).toBeFocused();
    await expect(chords).toBeInViewport();
  });

  test('sivuvälimuistista palaaminen päivittää vanhasta tallenteesta jatkamisen', async ({ page }) => {
    await page.goto('/index.html');
    await page.evaluate(([luvut, harjoittelu]) => {
      localStorage.setItem(luvut, JSON.stringify(['pulssi-ja-komppi']));
      localStorage.setItem(harjoittelu, JSON.stringify({ version: 1, sessions: [{ count: 1 }] }));
      window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
    }, [LUVUT, HARJOITTELU]);
    const progress = page.locator('#home-continue');
    await expect(progress.getByRole('link', { name: /Jatka oppimista · Neljä otetta/ })).toBeVisible();
    await expect(progress.getByRole('link', { name: /1 vastattu kysymys/ })).toBeVisible();
  });

  test('pulssiesimerkin äänentoisto loppuu, kun palataan Rytmiin', async ({ page }) => {
    await page.goto('/index.html');
    await page.getByRole('link', { name: 'Kuuntele pulssi' }).click();
    await expect(page).toHaveURL('/oppi/rytmi/kuuntele-pulssi.html');
    const audio = page.locator('#pulssi-aanite audio');
    await audio.evaluate(player => {
      const media = player as HTMLAudioElement;
      media.muted = true;
      return media.play();
    });
    await expect.poll(() => audio.evaluate(player => (player as HTMLAudioElement).paused)).toBe(false);
    // Aiheeseen palataan yläreunan paluulinkistä; alareunassa on vain Edellinen/Seuraava (#54, 18.11.2026).
    await page.getByRole('navigation', { name: 'Paluunavigointi' })
      .getByRole('link', { name: 'Rytmiin', exact: true }).click();
    await expect(page).toHaveURL('/oppi/rytmi/index.html');
    await page.goBack();
    await expect.poll(() => audio.evaluate(player => (player as HTMLAudioElement).paused)).toBe(true);
  });

  test('kaikki aihekortit löytyvät sarkaimella ja fokus näkyy', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistön fokusrengas tarkistetaan työpöytäkoossa.');
    await page.goto('/index.html');
    await expandTopicList(page);
    await page.getByRole('link', { name: 'Kuuntele pulssi' }).focus();
    for (const card of await page.locator('a.topic-card').all()) {
      await page.keyboard.press('Tab');
      await expect(card).toBeFocused();
      await expect(card).toHaveCSS('outline-style', 'solid');
    }
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL('/oppi/kappaleet/index.html');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Siirry sisältöön' })).toBeFocused();
  });

  for (const [width, height] of [[320, 568], [360, 740], [390, 844], [568, 320], [768, 1024], [1024, 768], [1440, 900]]) {
    test('aihekortit ovat yhdessä sarakkeessa ja teksti mahtuu kokoon ' + width + ' × ' + height, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/index.html');
      const start = page.getByRole('link', { name: 'Kuuntele pulssi' });
      if (height > width) await expect(start).toBeInViewport();
      await expandTopicList(page);
      const cards = page.locator('a.topic-card:visible');
      for (const scale of ['', '200%']) {
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, scale);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        const boxes = await cards.evaluateAll(nodes => nodes.map(card => {
          const rect = card.getBoundingClientRect();
          const number = card.querySelector('.topic-number')!;
          const parts = [number, card.querySelector('.topic-title')!, card.querySelector('.topic-description')!, card.querySelector('.topic-arrow')!];
          const rows = parts.map(part => {
            const range = document.createRange();
            range.selectNodeContents(part);
            return [...range.getClientRects()].every(line =>
              line.left >= rect.left - 1 && line.right <= rect.right + 1 &&
              line.top >= rect.top - 1 && line.bottom <= rect.bottom + 1);
          });
          return {
            left: rect.left, top: rect.top, bottom: rect.bottom, width: rect.width, height: rect.height,
            offsets: parts.flatMap(part => {
              const box = part.getBoundingClientRect();
              return [box.left - rect.left, box.top - rect.top];
            }),
            numberBackground: getComputedStyle(number).backgroundColor,
            textFits: rows.every(Boolean),
          };
        }));
        expect(boxes).toHaveLength(8);
        for (const [index, box] of boxes.entries()) {
          expect(box.width).toBeCloseTo(boxes[0].width, 0);
          expect(box.height).toBeCloseTo(boxes[0].height, 0);
          expect(box.height).toBeGreaterThanOrEqual(44);
          expect(box.left).toBeCloseTo(boxes[0].left, 0);
          if (index > 0) expect(box.top).toBeGreaterThanOrEqual(boxes[index - 1].bottom);
          box.offsets.forEach((value, position) => expect(value).toBeCloseTo(boxes[0].offsets[position], 0));
          expect(box.numberBackground).not.toBe('rgba(0, 0, 0, 0)');
          expect(box.textFits).toBe(true);
        }
      }
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
    test(`Otelautaopas avautuu Soittopakista suoraan otelautaan ${width} px leveydellä`, async ({ page }) => {
      await page.setViewportSize({ width, height: 740 });
      await page.goto('/index.html');
      await mainNav(page).getByRole('link', { name: LABELS.pakki }).click();
      await expect(page).toHaveURL(/\/soittopakki\.html$/);
      await page.getByRole('link', { name: 'Avaa Otelautaopas' }).click();
      await expect(page).toHaveURL(/\/otelautaharjoittelija\.html$/);
      await expect(mainNav(page).getByRole('link', { name: LABELS.pakki })).toHaveAttribute('aria-current', 'true');
      await expect(page.getByRole('navigation', { name: 'Otelautaopas' })).toHaveCount(0);
      await expect(page.getByRole('heading', { name: 'Tutki otelautaa' })).toBeInViewport();
      await expect(page.locator('#board svg')).toBeVisible();
      expect(await page.locator('main').evaluate(el => el.scrollWidth)).toBeLessThanOrEqual(width);
    });
  }

  test('otelaudan harjoitukset löytyvät Kitaratreenin kautta Kitaraharjoittelijasta', async ({ page }) => {
    await page.goto('/otelautaharjoittelija.html');
    await mainNav(page).getByRole('link', { name: LABELS.kitara }).click();
    await page.getByRole('link', { name: /^Kitaraharjoittelija/ }).click();
    await expect(page).toHaveURL(/kitaraharjoittelija\.html$/);
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
    for (const name of [LABELS.teoria, LABELS.pelit, LABELS.kitara, LABELS.pakki]) {
      await mainNav(page).getByRole('link', { name }).click();
      await page.waitForLoadState('load');
    }
    expect(await page.evaluate(key => localStorage.getItem(key), HARJOITTELU)).toBe(before);
    expect(await page.evaluate(key => localStorage.getItem(key), LUVUT)).toBe('["otelauta"]');
  });
});
