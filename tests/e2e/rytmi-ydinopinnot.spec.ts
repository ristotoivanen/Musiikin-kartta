import { expect, test, type Page } from '@playwright/test';

// Rytmin Ydinopinnot (#116, v0.9). Testit ajetaan mykistetyssä Chromiumissa: ne todentavat käyttöliittymän,
// ajoituksen tilat ja Web Audion kutsujen tapahtumisen, eivät äänenlaatua, kuultavaa tahdistusta
// eivätkä iPhone/Safari-toimintaa (fyysinen laitetesti on erillinen ehto).

const topicPath = '/oppi/rytmi/index.html';
const readingKey = 'musiikin-kartta:luvut';
const lessons = [
  ['loyda-pulssi-ja-ykkonen', 'Löydä pulssi ja ykkönen', 'Kokeile myös itse'],
  ['hiljaisuus-kuuluu-rytmiin', 'Hiljaisuus kuuluu rytmiin', 'Kokeile myös kitaralla'],
  ['sama-musiikki-eri-tuntuma', 'Sama musiikki, eri tuntuma', 'Kokeile myös äänten eri paikkoja'],
] as const;
const legacy = [
  ['pulssi-ja-komppi', 'pulssi-ja-komppi'], ['kuuntele-pulssi', 'harjoitus:kuuntele-pulssi'],
  ['alas-ylos-yhdella-soinnulla', 'harjoitus:alas-ylos-yhdella-soinnulla'],
  ['kaksi-sointua-yhdessa-tahdissa', 'harjoitus:kaksi-sointua-yhdessa-tahdissa'],
] as const;

const core = (page: Page) => page.locator('details#ydinopinnot');
const earlier = (page: Page) => page.locator('details#aiemmat');
const card = (page: Page) => page.locator('.rytmi-harjoitus');
const info = (page: Page) => page.locator('details.rytmi-lisa');
const playButton = (page: Page) => page.locator('[data-rytmi-toisto]');
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
const box = async (page: Page, selector: string) => (await page.locator(selector).first().boundingBox())!;

test.describe('aihesivu', () => {
  test('Ydinopinnot ensin, aiemmat neljä sisältöä entisillä osoitteilla, molemmat oletuksena suljettuina', async ({ page }) => {
    await page.goto(topicPath);
    await expect(page.locator('details.study-unit')).toHaveCount(2);
    // Omistajan päätös 20.11.2026: Ydinopinnot on oletuksena suljettu.
    await expect(core(page)).not.toHaveAttribute('open', '');
    await core(page).locator('summary').click();
    await expect(core(page)).toHaveAttribute('open', '');
    await expect(core(page).locator('summary')).toContainText('Ydinopinnot');
    await expect(core(page).locator('summary')).toContainText('3 sisältöä');
    for (const [slug, title] of lessons) {
      await expect(core(page).getByRole('link', { name: new RegExp(title) })).toHaveAttribute('href', `${slug}.html`);
    }
    await expect(earlier(page)).not.toHaveAttribute('open', '');
    await expect(earlier(page).locator('summary')).toContainText('Aiemmat oppitunnit ja harjoitukset');
    expect(await earlier(page).locator('.study-choice').evaluateAll(all => all.map(a => [a.id, a.getAttribute('href')])))
      .toEqual(legacy.map(([slug]) => [`valinta-${slug}`, `${slug}.html`]));
    await expect(page.getByText('(valinnainen)')).toHaveCount(0);
    expect(await noHorizontalScroll(page)).toBe(true);
  });

  test('vanhat merkinnät säilyvät, uusi kokeilu tallentuu omalla tunnisteellaan', async ({ page }) => {
    await page.goto(topicPath);
    const old = ['pulssi-ja-komppi', 'harjoitus:kuuntele-pulssi', 'harmoninen-kentta'];
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(old)]);
    await page.goto(`/oppi/rytmi/${lessons[1][0]}.html`);
    const mark = page.locator('.done-toggle');
    await expect(mark).toHaveText('Merkitse kokeilluksi');
    await expect(mark).toHaveAttribute('aria-pressed', 'false');
    await mark.click();
    await expect(mark).toHaveText('✓ Kokeiltu');
    await expect(mark).toHaveAttribute('aria-pressed', 'true');
    const saved = JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!);
    expect(saved).toEqual([...old, 'oppitunti:hiljaisuus-kuuluu-rytmiin']);

    await page.goto(topicPath);
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('1/3 kokeiltu');
    await expect(core(page).locator('#valinta-hiljaisuus-kuuluu-rytmiin [data-study-attempt-status]')).toHaveText('✓ Kokeiltu');
    // Aiempien laskuri: kaksi neljästä kuten ennenkin; uutta kokeilua ei lasketa aiempiin.
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('2/4 aiemmista sisällöistä tehty');
    await earlier(page).locator('summary').click();
    await expect(page.locator('#valinta-kuuntele-pulssi [data-study-status]')).toHaveText('✓ Tehty');

    // Merkinnän voi perua.
    await page.goto(`/oppi/rytmi/${lessons[1][0]}.html`);
    await page.locator('.done-toggle').click();
    await expect(page.locator('.done-toggle')).toHaveText('Merkitse kokeilluksi');
    expect(JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!)).toEqual(old);
  });
});

test.describe('aiempien sisältöjen laskuri (progress_text, sama kuin Soinnuissa)', () => {
  const allOld = legacy.map(([, id]) => id);

  test('kaikki neljä aiempaa tehty, Ydinopintoja ei kokeiltu: aihesivu, etusivun kortti ja vanhan sarjan viimeinen sivu', async ({ page }) => {
    await page.goto(topicPath);
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(allOld)]);
    await page.reload();
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('0/3 kokeiltu');
    for (const [slug] of lessons) {
      await expect(core(page).locator(`#valinta-${slug} [data-study-attempt-status]`)).toHaveText('Kokeilematta');
    }
    await page.goto('/index.html');
    await expect(page.locator('#aihe-rytmi .topic-status')).toHaveText('✓ Aiemmat sisällöt tehty');
    await page.goto(`/oppi/rytmi/${legacy[3][0]}.html`);
    await expect(page.locator('[data-boundary-progress]').first()).toHaveText('✓ Aiemmat sisällöt tehty');
    expect(JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!)).toEqual(allOld);
  });

  test('aiemmin tallennetut oppitunti-merkinnät näkyvät Kokeiltuina, yhden lisäys ja peruminen', async ({ page }) => {
    // Ennen yhteistä mekanismia tallennetut merkinnät: samat avaimet ja tunnisteet, ei migraatiota.
    const saved = [...allOld, 'oppitunti:loyda-pulssi-ja-ykkonen', 'harmoninen-kentta'];
    await page.goto(topicPath);
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(saved)]);
    await page.reload();
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('1/3 kokeiltu');
    await expect(core(page).locator('[data-study-attempt-status]')).toHaveText(['✓ Kokeiltu', 'Kokeilematta', 'Kokeilematta']);
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('✓ Aiemmat sisällöt tehty');

    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    await page.getByRole('button', { name: 'Merkitse kokeilluksi' }).click();
    await page.goto(topicPath);
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('2/3 kokeiltu');
    await expect(core(page).locator('[data-study-attempt-status]')).toHaveText(['✓ Kokeiltu', 'Kokeilematta', '✓ Kokeiltu']);
    expect(JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!))
      .toEqual([...saved, 'oppitunti:sama-musiikki-eri-tuntuma']);

    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    await page.getByRole('button', { name: '✓ Kokeiltu' }).click();
    await page.goto(topicPath);
    await expect(core(page).locator('[data-unit-progress]')).toHaveText('1/3 kokeiltu');
    expect(JSON.parse((await page.evaluate(key => localStorage.getItem(key), readingKey))!)).toEqual(saved);
    // Sointujen etenemistieto (harmoninen-kentta) ja Rytmin aiemmat merkinnät pysyvät ennallaan.
    await page.goto('/oppi/soinnut/index.html');
    await expect(page.locator('[data-study-status="harmoninen-kentta"]')).toHaveText('✓ Tehty');
  });

  test('osittain tehty: x/4 aiemmista sisällöistä kaikissa kolmessa kohdassa', async ({ page }) => {
    await page.goto(topicPath);
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [readingKey, JSON.stringify(allOld.slice(0, 3))]);
    await page.reload();
    await expect(earlier(page).locator('[data-study-total]')).toHaveText('3/4 aiemmista sisällöistä tehty');
    await page.goto('/index.html');
    await expect(page.locator('#aihe-rytmi .topic-status')).toHaveText('3/4 aiemmista sisällöistä tehty');
    await page.goto(`/oppi/rytmi/${legacy[3][0]}.html`);
    await expect(page.locator('[data-boundary-progress]').first()).toHaveText('3/4 aiemmista sisällöistä tehty');
  });
});

test.describe('suljettu Ydinopinnot ja paluu', () => {
  test('paluu harjoituksesta avaa Ydinopinnot ja kohdistaa valittuun linkkiin', async ({ page }) => {
    await page.goto(topicPath);
    await core(page).locator('summary').click();
    const lesson = page.locator('#valinta-hiljaisuus-kuuluu-rytmiin');
    await lesson.click();
    await expect(page).toHaveURL(/hiljaisuus-kuuluu-rytmiin/);
    await page.goBack();
    await expect(core(page)).toHaveAttribute('open', '');
    await expect(lesson).toBeFocused();
  });

  test('viimeisen harjoituksen ”Palaa aihesivulle” avaa Ydinopinnot', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    await page.locator('.study-steps--bottom').getByRole('link', { name: /Palaa aihesivulle: Rytmi/ }).click();
    await expect(page).toHaveURL(/index\.html#ydinopinnot$/);
    await expect(core(page)).toHaveAttribute('open', '');
    await expect(core(page).getByRole('link', { name: /Löydä pulssi ja ykkönen/ })).toBeVisible();
  });
});

test.describe('harjoitussivut', () => {
  for (const [slug, title, infoTitle] of lessons) {
    test(`${title}: ⓘ oikeassa yläkulmassa, sisältö kohtien 1 ja 2 jälkeen, mikään ei siirry`, async ({ page }) => {
      await page.goto(`/oppi/rytmi/${slug}.html`);
      await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
      const summary = info(page).locator('summary');
      await expect(summary).toHaveAccessibleName(new RegExp(infoTitle));
      // Kuvake ilman näkyvää tekstiä, kortin oikeassa yläkulmassa.
      await expect(summary.locator('.study-knoppi-merkki')).toHaveText('i');
      await expect(summary.locator('.study-sr')).toHaveCSS('width', '1px');
      const cardBox = (await card(page).boundingBox())!;
      const iconBox = (await summary.boundingBox())!;
      expect(cardBox.x + cardBox.width - (iconBox.x + iconBox.width)).toBeLessThan(16);
      expect(iconBox.y - cardBox.y).toBeLessThan(16);
      expect(iconBox.width).toBeGreaterThanOrEqual(44);
      expect(iconBox.height).toBeGreaterThanOrEqual(44);
      await expect(info(page)).not.toHaveAttribute('open', '');

      const fixed = ['[data-rytmi-toisto]', '.rytmi-ruudukko', '.rytmi-kokeile'];
      const before = await Promise.all(fixed.map(selector => box(page, selector)));
      await summary.click();
      await expect(info(page)).toHaveAttribute('open', '');
      const after = await Promise.all(fixed.map(selector => box(page, selector)));
      after.forEach((rect, index) => {
        expect(rect.y, fixed[index]).toBeCloseTo(before[index].y, 0);
        expect(rect.x, fixed[index]).toBeCloseTo(before[index].x, 0);
      });
      const content = info(page).locator('.study-knoppi-sisalto');
      await expect(content).toBeVisible();
      const tryIt = await box(page, '.rytmi-kokeile');
      expect((await content.boundingBox())!.y).toBeGreaterThan(tryIt.y + tryIt.height - 1);
      // Avaaminen ei käynnistä ääntä eikä muuta merkintää.
      await expect(playButton(page)).toHaveAccessibleName('Kuuntele');
      await expect(page.locator('.done-toggle')).toHaveAttribute('aria-pressed', 'false');
      await summary.click();
      await expect(info(page)).not.toHaveAttribute('open', '');
      await expect(page.getByText('(valinnainen)')).toHaveCount(0);
      expect(await noHorizontalScroll(page)).toBe(true);
    });
  }

  test('03: avautuvat kohdat 3 ja 4 tässä järjestyksessä', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    await info(page).locator('summary').click();
    await expect(info(page).locator('h3')).toHaveText(['3 · Kokeile myös äänten eri paikkoja', '4 · Kokeile myös kitaralla']);
    await expect(info(page).getByRole('button', { name: 'C · Iskujen välissä' })).toBeVisible();
  });

  test('ⓘ ja Kuuntele toimivat näppäimistöllä', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await page.goto(`/oppi/rytmi/${lessons[0][0]}.html`);
    const summary = info(page).locator('summary');
    await summary.focus();
    await expect(summary).toBeFocused();
    await expect(summary).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(info(page)).toHaveAttribute('open', '');
    await expect(summary).toBeFocused();
    await page.keyboard.press('Space');
    await expect(info(page)).not.toHaveAttribute('open', '');
    // Sarkainjärjestys: kuuntelupainike tulee ennen ⓘ-kuvaketta (kuvake on DOMissa kohdan 2 jälkeen).
    await playButton(page).focus();
    await page.keyboard.press('Enter');
    await expect(playButton(page)).toHaveAccessibleName('Pysäytä');
    await page.keyboard.press('Enter');
    await expect(playButton(page)).toHaveAccessibleName('Kuuntele');
    await expect(page.locator('[data-rytmi-tila]')).toHaveText('Pysäytetty.');
  });

  test('01: pulssivihje näyttää iskujen numerot ja piilottaa ne', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[0][0]}.html`);
    const names = page.locator('.rytmi-isku-nimi');
    await expect(names).toHaveText(['•', '•', '•', '•']);
    await page.getByRole('button', { name: 'Paljasta pulssi' }).click();
    await expect(names).toHaveText(['1', '2', '3', '4']);
    await page.getByRole('button', { name: 'Piilota pulssivihje' }).click();
    await expect(names).toHaveText(['•', '•', '•', '•']);
  });
});

test.describe('toisto', () => {
  test('yksi tilan mukaan vaihtuva painike, nopeat painallukset eivät jätä toistoa päälle', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[1][0]}.html`);
    const button = playButton(page);
    await expect(page.locator('[data-rytmi-toisto]')).toHaveCount(1);
    await expect(button).not.toHaveAttribute('aria-pressed', /.*/);
    await button.click();
    await expect(button).toHaveAccessibleName('Pysäytä');
    await expect(page.locator('[data-rytmi-tila]')).toHaveText('Malli soi. Kokeile halutessasi perässä.');
    await expect(page.locator('.rytmi-isku.is-active')).toHaveCount(1);
    // Seitsemän painallusta soivasta tilasta: pysäytä, käynnistä, … pysäytä.
    for (let i = 0; i < 7; i++) await button.click();
    await expect(button).toHaveAccessibleName('Kuuntele');
    await expect(page.locator('.rytmi-isku.is-active')).toHaveCount(0);
    // Sivun piilotus pysäyttää toiston, eikä paluu käynnistä sitä itsestään.
    await button.click();
    await expect(button).toHaveAccessibleName('Pysäytä');
    await page.evaluate(() => window.dispatchEvent(new PageTransitionEvent('pagehide')));
    await expect(button).toHaveAccessibleName('Kuuntele');
    await page.waitForTimeout(300);
    await expect(button).toHaveAccessibleName('Kuuntele');
  });

  test('02: korostus kulkee tahdin 1 iskuilta tahdin 2 iskuille', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[1][0]}.html`);
    await playButton(page).click();
    const bars = new Set<string>();
    for (let i = 0; i < 40 && bars.size < 2; i++) {
      const bar = await page.locator('.rytmi-isku.is-active').getAttribute('data-tahti').catch(() => null);
      if (bar) bars.add(bar);
      await page.waitForTimeout(150);
    }
    expect([...bars].sort()).toEqual(['0', '1']);
    await playButton(page).click();
  });

  test('03: kesken tahdin valittu versio näkyy valittuna, ruudukko vaihtuu vasta tahdin rajalla', async ({ page }) => {
    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    const grid = page.locator('[data-rytmi-ruudukko="tuntuma"]');
    const status = page.locator('[data-rytmi-tila]');
    // Ilman toistoa valinta päivittää ruudukon heti.
    await page.getByRole('button', { name: 'B · Painota 2 ja 4' }).click();
    await expect(grid).toHaveAttribute('data-versio', 'B');
    await expect(grid.locator('.rytmi-isku-teko')).toHaveText(['Soita', 'Hiljaa', 'Korosta', 'Hiljaa', 'Soita', 'Hiljaa', 'Korosta', 'Hiljaa']);
    await page.getByRole('button', { name: 'A · Tasaiset vedot' }).click();
    await expect(grid).toHaveAttribute('data-versio', 'A');

    await playButton(page).click();
    await expect(page.locator('.rytmi-isku.is-active')).toHaveCount(1);
    // Odota kohtaan, jossa tahtia on jäljellä (aktiivinen solu 2–4), ja valitse B.
    await expect.poll(async () => Number(await page.locator('.rytmi-isku.is-active').evaluate(cell =>
      [...cell.parentElement!.children].indexOf(cell))), { timeout: 5000 }).toBeGreaterThanOrEqual(2);
    const index = await page.locator('.rytmi-isku.is-active').evaluate(cell => [...cell.parentElement!.children].indexOf(cell));
    expect(index).toBeLessThanOrEqual(5);
    await page.getByRole('button', { name: 'B · Painota 2 ja 4' }).click();
    await expect(page.getByRole('button', { name: 'B · Painota 2 ja 4' })).toHaveAttribute('aria-pressed', 'true');
    await expect(status).toHaveText('Valittu B · Painota 2 ja 4. Versio vaihtuu seuraavan tahdin alussa.');
    // Sama tahti jatkuu A:na.
    await expect(grid).toHaveAttribute('data-versio', 'A');
    // Vaihto tapahtuu tahdin ensimmäisellä kahdeksasosalla.
    await expect(grid).toHaveAttribute('data-versio', 'B', { timeout: 4000 });
    const firstActive = await page.locator('.rytmi-isku.is-active').evaluate(cell => [...cell.parentElement!.children].indexOf(cell));
    expect(firstActive).toBeLessThanOrEqual(1);
    await expect(status).toHaveText('Nyt soi B · Painota 2 ja 4.');
    await playButton(page).click();
  });

  test('ilman Web Audiota painike on pois käytöstä ja tila kerrotaan', async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, 'AudioContext', { value: undefined });
      Object.defineProperty(window, 'webkitAudioContext', { value: undefined });
    });
    await page.goto(`/oppi/rytmi/${lessons[0][0]}.html`);
    await expect(playButton(page)).toBeDisabled();
    await expect(page.locator('[data-rytmi-tila]')).toContainText('ei pysty soittamaan');
  });
});

test.describe('ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });
  test('sisältö ja linkit löytyvät, toisto-ohjaimet piilossa', async ({ page }) => {
    await page.goto(topicPath);
    await core(page).locator('summary').click();
    await expect(core(page).getByRole('link', { name: /Löydä pulssi ja ykkönen/ })).toBeVisible();
    await earlier(page).locator('summary').click();
    await expect(earlier(page).getByRole('link', { name: /Pulssi ja komppi/ })).toBeVisible();
    await page.goto(`/oppi/rytmi/${lessons[2][0]}.html`);
    await expect(playButton(page)).toBeHidden();
    await expect(page.getByRole('button', { name: 'A · Tasaiset vedot' })).toBeHidden();
    await expect(page.locator('[data-rytmi-tila]')).toHaveText('Ääniesimerkki tarvitsee JavaScriptin ja selaimen äänituen.');
    await expect(page.getByText('Tempo ja soinnut pysyvät samoina')).toBeVisible();
    await expect(page.locator('.rytmi-isku')).toHaveCount(8);
  });
});

for (const width of [320, 375, 390, 768, 1200]) {
  test(`asettelu ${width} px: ei vaakavieritystä, ruudukon tekstit mahtuvat`, async ({ page, isMobile }) => {
    test.skip(isMobile, 'Leveydet asetetaan tässä testissä.');
    await page.setViewportSize({ width, height: 900 });
    for (const path of [topicPath, ...lessons.map(([slug]) => `/oppi/rytmi/${slug}.html`)]) {
      await page.goto(path);
      await page.evaluate(() => document.querySelectorAll('details').forEach(details => { (details as HTMLDetailsElement).open = true; }));
      expect(await noHorizontalScroll(page), `${path} ${width}`).toBe(true);
      const overflow = await page.locator('.rytmi-isku, .rytmi-harjoitus button').evaluateAll(nodes =>
        nodes.filter(node => node.scrollWidth > node.clientWidth + 1).map(node => node.textContent));
      expect(overflow, `${path} ${width}`).toEqual([]);
      const small = await page.locator('.rytmi-harjoitus button:visible, .rytmi-lisa summary').evaluateAll(nodes =>
        nodes.map(node => node.getBoundingClientRect()).filter(rect => rect.height < 44).length);
      expect(small, `${path} ${width}`).toBe(0);
    }
  });
}
