import { expect, test, type Page } from '@playwright/test';

// #116, vaihe 2: Sävelkorva ja melodia -aihesivun Ydinopinnot ja aiempien 14 sisällön säilyminen.
// Äänitestit lukevat Web Audion ajoituksen ja ladatut näytteet; ne eivät todista äänenlaatua,
// iPhone/Safari-toistoa, oppijan sävelkorvaa eivätkä soittotaitoa oikealla kitaralla.

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
// Kiinteä Math.random: ensimmäinen tehtävä on luettelon ensimmäinen (0) tai viimeinen (0,99),
// ja "Uusi" siirtyy aina seuraavaan, koska sama tehtävä ei toistu peräkkäin.
const fixRandom = (page: Page, value: number) => page.addInitScript(v => { Math.random = () => v; }, value);
const starts = (page: Page) => page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'start'));
const clearLog = (page: Page) => page.evaluate(() => { window.__audioLog = []; });
const close = (actual: number, expected: number) => expect(Math.abs(actual - expected)).toBeLessThan(0.002);
const storage = (page: Page) => page.evaluate(key => localStorage.getItem(key), readingKey);
const noHorizontalScroll = (page: Page) =>
  page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth);
const samples = (page: Page) => {
  const files: string[] = [];
  page.on('response', response => {
    if (response.url().includes('/assets/audio/soinnut/')) files.push(response.url().split('/').pop()!.replace(/\.(m4a|ogg)$/, ''));
  });
  return files;
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
      for (const controls of await page.locator('[data-melodia-ohjaimet]').all()) await expect(controls).toBeHidden();
      await expect(page.getByRole('heading', { name: 'Mitä opit?' })).toBeVisible();
      await expect(page.getByRole('link', { name: /Takaisin aiheeseen/ })).toHaveAttribute('href', `index.html#valinta-${slug}`);
    }
  });
});

test.describe('01 · Ylös, alas vai sama?', () => {
  test('vastaaminen avautuu vasta kuuntelun alettua; ajoitus, palaute ja kuultu melodia vastaavat toisiaan', async ({ page }) => {
    await recordAudio(page);
    await fixRandom(page, 0);
    const files = samples(page);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const section = page.locator('[data-melodiaharjoitus="suunta"]');
    const status = section.locator('[data-melodia-tila]');
    const listen = section.locator('[data-melodia-kuuntele]');
    const feedback = section.locator('[data-melodia-palaute]');
    const reveal = section.locator('[data-melodia-kaari]');
    await expect(status).toHaveText('Paina Kuuntele melodia. Näytteet on äänitetty oikeasta akustisesta kitarasta.');
    await expect(section.getByRole('button', { name: 'Ylös' }).first()).toBeDisabled();
    await expect(section.getByRole('button', { name: 'Tarkista' })).toBeDisabled();
    // Vastaus ei näy ennen vastaamista.
    await expect(reveal).toBeHidden();
    await expect(reveal.locator('li')).toHaveCount(0);

    await listen.click();
    await expect(status).toHaveText('Melodia soi.');
    await expect(listen).toHaveText('■ Pysäytä');
    const log = await starts(page);
    expect(log).toHaveLength(3);
    log.forEach((entry, index) => close(entry.when - log[0].when, index * 0.7));
    expect([...new Set(files)].sort()).toEqual([
      'INSGuitarSteel_StringB_Vel02_B3_01', 'INSGuitarSteel_StringB_Vel02_D4_01', 'INSGuitarSteel_StringG_Vel02_G3_01',
    ]);
    await expect(status).not.toContainText(/G|B|D/);

    const first = section.locator('[data-suunta-vaihe="0"]');
    const second = section.locator('[data-suunta-vaihe="1"]');
    await expect(first.locator('button').first()).toBeEnabled();
    await first.getByRole('button', { name: 'Ylös' }).click();
    await expect(first.getByRole('button', { name: 'Ylös' })).toHaveAttribute('aria-pressed', 'true');
    await expect(section.getByRole('button', { name: 'Tarkista' })).toBeDisabled();
    await second.getByRole('button', { name: 'Ylös' }).click();
    await section.getByRole('button', { name: 'Tarkista' }).click();
    await expect(feedback).toHaveText('Oikein! Kuulit G → B → D. Melodia nousi G:stä hypyllä B:hen. Melodia nousi B:stä hypyllä D:hen.');
    await expect(feedback).toHaveClass(/is-answered/);
    await expect(feedback).not.toHaveClass(/is-error/);
    await expect(reveal.locator('li')).toHaveText(['GG-kieli, vapaa', 'BB-kieli, vapaa', 'DB-kieli, 3. nauha']);
    // Vastaus lukittu: painikkeet aria-disabled, toinen painallus ei muuta vastausta.
    await expect(first.getByRole('button', { name: 'Alas' })).toHaveAttribute('aria-disabled', 'true');
    await first.getByRole('button', { name: 'Alas' }).click({ force: true });
    await expect(first.getByRole('button', { name: 'Ylös' })).toHaveAttribute('aria-pressed', 'true');
    await expect(section.getByRole('button', { name: 'Tarkista' })).toHaveAttribute('aria-disabled', 'true');
    await expect(listen).toHaveText('▶ Kuuntele melodia', { timeout: 6000 });
    await expect(status).toHaveText('Esimerkki päättyi. Voit kuunnella uudelleen.');

    // Uusi melodia nollaa vastaukset, piilottaa edellisen vastauksen ja soittaa uuden melodian heti.
    await clearLog(page);
    await section.getByRole('button', { name: 'Uusi melodia' }).click();
    await expect(reveal).toBeHidden();
    await expect(feedback).toHaveText('');
    await expect(first.getByRole('button', { name: 'Ylös' })).toHaveAttribute('aria-pressed', 'false');
    await expect(status).toHaveText('Melodia soi.');
    await expect(listen).toHaveText('■ Pysäytä');
    expect(await starts(page)).toHaveLength(3);
    await expect(first.locator('button').first()).toBeEnabled();
    await first.getByRole('button', { name: 'Alas' }).click();
    await second.getByRole('button', { name: 'Ylös' }).click();
    await section.getByRole('button', { name: 'Tarkista' }).click();
    await expect(feedback).toHaveText(
      'Ei vielä aivan. Kuulit A → B → D. Sävelestä 1 säveleen 2 vastasit ”alas”. Melodia nousi A:sta askeleella B:hen. '
      + 'Sävelestä 2 säveleen 3 oikein: ylös. Kuuntele uudelleen ja seuraa juuri tätä kohtaa.');
    await expect(feedback).toHaveClass(/is-error/);
  });

  test('saman painikkeen toinen painallus pysäyttää äänen heti', async ({ page }) => {
    await recordAudio(page);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const listen = page.locator('[data-melodia-kuuntele]');
    const status = page.locator('[data-melodia-tila]');
    await listen.click();
    await expect(status).toHaveText('Melodia soi.');
    await clearLog(page);
    await listen.click();
    await expect(status).toHaveText('Kuuntelu pysäytetty. Voit kuunnella uudelleen.');
    await expect(listen).toHaveText('▶ Kuuntele melodia');
    const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop'));
    expect(stops).toHaveLength(3);
    for (const stop of stops) expect(stop.when).toBeLessThanOrEqual(stop.at + 0.026);
    expect(await starts(page)).toHaveLength(0);
    // Uudelleenkuuntelu toimii.
    await listen.click();
    await expect(status).toHaveText('Melodia soi.');
  });

  test('satunnaistus antaa eri melodian eri arvolla', async ({ page }) => {
    await fixRandom(page, 0.99);
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const section = page.locator('[data-melodiaharjoitus="suunta"]');
    await section.locator('[data-melodia-kuuntele]').click();
    await section.locator('[data-suunta-vaihe="0"]').getByRole('button', { name: 'Alas' }).click();
    await section.locator('[data-suunta-vaihe="1"]').getByRole('button', { name: 'Sama sävel' }).click();
    await section.getByRole('button', { name: 'Tarkista' }).click();
    await expect(section.locator('[data-melodia-palaute]')).toHaveText(/^Oikein! Kuulit E → C → C\. Melodia laski E:stä hypyllä C:hen\. Sävel C toistui\.$/);
  });

  test('latausvirhe näkyy, eikä vastaamista avata ilman kuunneltua ääntä', async ({ page }) => {
    await page.route('**/assets/audio/soinnut/*', route => route.fulfill({ status: 503, body: '' }));
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    await page.locator('[data-melodia-kuuntele]').click();
    await expect(page.locator('[data-melodia-tila]')).toHaveText('Ääniä ei voitu ladata. Kokeile uudelleen.');
    await expect(page.locator('[data-melodia-tila]')).toHaveClass(/is-error/);
    await expect(page.locator('[data-suunta-vaihe="0"] button').first()).toBeDisabled();
    await expect(page.locator('[data-melodia-kuuntele]')).toHaveText('▶ Kuuntele melodia');
  });

  test('näppäimistöllä: Enter kuuntelee, Space valitsee ja fokus näkyy', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await page.goto('/oppi/korva/ylos-alas-vai-sama.html');
    const listen = page.locator('[data-melodia-kuuntele]');
    await listen.focus();
    await expect(listen).toHaveCSS('outline-style', 'solid');
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-melodia-tila]')).toHaveText('Melodia soi.');
    const up = page.locator('[data-suunta-vaihe="0"] [data-suunta="ylos"]');
    await expect(up).toBeEnabled();
    await up.focus();
    await page.keyboard.press('Space');
    await expect(up).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-suunta-vaihe="0"] [data-suunta="alas"]')).toBeFocused();
    await page.locator('[data-suunta-vaihe="1"] [data-suunta="sama"]').focus();
    await page.keyboard.press('Enter');
    const check = page.getByRole('button', { name: 'Tarkista' });
    await check.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-melodia-palaute]')).toHaveText(/^(Oikein!|Ei vielä aivan\.)/);
    // Fokus ei putoa sivun alkuun, kun vastaus lukitaan.
    await expect(check).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-melodia-kaari]')).toBeVisible();
  });

  test('02: vastauspainike pitää näppäimistöfokuksen vastaamisen jälkeen', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Näppäimistö testataan työpöytäkoossa.');
    await page.goto('/oppi/korva/kotiin-vai-kesken.html');
    await page.locator('[data-melodia-kuuntele]').click();
    const answer = page.getByRole('button', { name: 'Palasi kotiin' });
    await expect(answer).toBeEnabled();
    await answer.focus();
    await page.keyboard.press('Space');
    await expect(page.locator('[data-melodia-palaute]')).toHaveText(/Kuuntele vertailun vuoksi molemmat loput\.$/);
    await expect(answer).toBeFocused();
    await expect(answer).toHaveAttribute('aria-disabled', 'true');
  });
});

test.describe('02 · Kotiin vai kesken?', () => {
  test('matala G ja melodia soivat; palaute ja vertailu kertovat, mihin melodia päättyi', async ({ page }) => {
    await recordAudio(page);
    await fixRandom(page, 0);
    const files = samples(page);
    await page.goto('/oppi/korva/kotiin-vai-kesken.html');
    const section = page.locator('[data-melodiaharjoitus="koti"]');
    const status = section.locator('[data-melodia-tila]');
    const feedback = section.locator('[data-melodia-palaute]');
    const answers = section.locator('[data-koti-vastaus]');
    await expect(answers.locator('button').first()).toBeDisabled();

    await section.getByRole('button', { name: 'Kuuntele kotisävel G' }).click();
    await expect(status).toHaveText('Kotisävel G soi matalalta ja keskeltä. Hyräile se.');
    let log = await starts(page);
    expect(log).toHaveLength(2);
    close(log[1].when, log[0].when);
    await expect(answers.locator('button').first()).toBeDisabled();

    await clearLog(page);
    await section.locator('[data-melodia-kuuntele]').click();
    await expect(status).toHaveText('Melodia soi. Kuuntele, mihin se pysähtyy.');
    log = await starts(page);
    // Matala G + seitsemän melodiasäveltä; matala G ja ensimmäinen melodiasävel alkavat yhtä aikaa.
    expect(log).toHaveLength(8);
    close(log[1].when, log[0].when);
    log.slice(1).forEach((entry, index) => close(entry.when - log[1].when, index * 0.45));
    expect(files).toContain('INSGuitarSteel_StringLowE_Vel02_G2_01');
    await expect(section.locator('[data-koti-vertailu]')).toBeHidden();

    await section.getByRole('button', { name: 'Jäi kesken' }).click();
    await expect(feedback).toHaveText('Ei tällä kertaa. Melodia palasi kotisävel G:hen, samannimiseen säveleen kuin alussa soinut matala G. Siksi loppu tuntuu valmiilta. Kuuntele vertailun vuoksi molemmat loput.');
    await expect(feedback).toHaveClass(/is-error/);
    await expect(section.getByRole('button', { name: 'Palasi kotiin' })).toHaveAttribute('aria-disabled', 'true');
    await expect(section.getByRole('button', { name: 'Jäi kesken' })).toHaveAttribute('aria-pressed', 'true');
    await expect(section.locator('[data-melodia-kaari] li strong')).toHaveText(['G', 'B', 'D', 'C', 'A', 'B', 'G']);
    await section.getByRole('button', { name: 'Kesken jäävä loppu' }).click();
    await expect(status).toHaveText('Kesken jäävä loppu soi.');

    await clearLog(page);
    await section.getByRole('button', { name: 'Uusi melodia' }).click();
    await expect(section.locator('[data-koti-vertailu]')).toBeHidden();
    // Uusi melodia soi heti: matala G + seitsemän säveltä.
    await expect(status).toHaveText('Melodia soi. Kuuntele, mihin se pysähtyy.');
    expect(await starts(page)).toHaveLength(8);
    await expect(answers.locator('button').first()).toBeEnabled();
    await section.getByRole('button', { name: 'Jäi kesken' }).click();
    await expect(feedback).toHaveText(/^Oikein\. Melodia pysähtyi A:han\. Se on asteikon toinen sävel/);
    await expect(feedback).not.toHaveClass(/is-error/);
  });
});

test.describe('03 · Kuule ja etsi kitaralta', () => {
  test('tapailu: paikat soittavat sävelensä, kolme viimeksi soitettua tarkistetaan ja palaute kertoo kitaran paikat', async ({ page }) => {
    await recordAudio(page);
    await fixRandom(page, 0);
    await page.goto('/oppi/korva/kuule-ja-etsi-kitaralta.html');
    const section = page.locator('[data-melodiaharjoitus="etsi"]');
    const board = section.locator('[data-etsi-paikat]');
    const slots = section.locator('[data-etsi-vastaus]');
    const feedback = section.locator('[data-melodia-palaute]');
    const check = section.getByRole('button', { name: 'Tarkista' });
    const empty = ['ei vielä soitettu', 'ei vielä soitettu', 'ei vielä soitettu'];
    // Aloitussäveltä ei ole valmiiksi täytetty: oppija tapailee koko kulun G:stä alkaen.
    await expect(slots).toHaveText(empty);
    await expect(section.getByRole('button', { name: 'Tyhjennä valinnat' })).toHaveCount(0);
    await expect(board.locator('button').first()).toBeDisabled();

    await section.locator('[data-melodia-kuuntele]').click();
    await expect(section.locator('[data-melodia-tila]')).toHaveText('Sävelkulku soi. Hyräile mukana.');
    const log = await starts(page);
    expect(log).toHaveLength(3);
    log.forEach((entry, index) => close(entry.when - log[0].when, index * 0.75));
    await expect(board.locator('button').first()).toBeEnabled();

    await clearLog(page);
    await board.locator('[data-paikka="G3"]').click();
    await expect(section.locator('[data-melodia-tila]')).toHaveText('G soi (G-kieli, vapaa).');
    expect(await starts(page)).toHaveLength(1);
    await expect(slots).toHaveText(['G · G-kieli, vapaa', 'ei vielä soitettu', 'ei vielä soitettu']);
    await expect(check).toBeDisabled();
    // Väärät kokeilut matkalla eivät haittaa: vain kolme viimeisintä jäävät näkyviin.
    for (const id of ['D4', 'C4', 'G3', 'A3', 'B3']) await board.locator(`[data-paikka="${id}"]`).click();
    await expect(slots).toHaveText(['G · G-kieli, vapaa', 'A · G-kieli, 2. nauha', 'B · B-kieli, vapaa']);
    await check.click();
    await expect(feedback).toHaveText('Oikein! Kuulit G → A → B. Melodia nousi G:stä askeleella A:han. Melodia nousi A:sta askeleella B:hen. '
      + 'Soita sama kitaralla: G-kieli, vapaa → G-kieli, 2. nauha → B-kieli, vapaa.');
    await expect(check).toHaveAttribute('aria-disabled', 'true');
    // Tarkistuksen jälkeen paikat soivat yhä, mutta tarkistettu vastaus pysyy.
    await board.locator('[data-paikka="D4"]').click();
    await expect(section.locator('[data-melodia-tila]')).toHaveText('D soi (B-kieli, 3. nauha).');
    await expect(slots).toHaveText(['G · G-kieli, vapaa', 'A · G-kieli, 2. nauha', 'B · B-kieli, vapaa']);

    await clearLog(page);
    await section.getByRole('button', { name: 'Uusi sävelkulku' }).click();
    await expect(slots).toHaveText(empty);
    // Uusi sävelkulku soi heti kerran, ja paikat ovat käytettävissä ilman erillistä kuuntelua.
    await expect(section.locator('[data-melodia-tila]')).toHaveText('Sävelkulku soi. Hyräile mukana.');
    expect(await starts(page)).toHaveLength(3);
    await expect(board.locator('button').first()).toBeEnabled();
    for (const id of ['G3', 'D4', 'A3']) await board.locator(`[data-paikka="${id}"]`).click();
    await check.click();
    await expect(feedback).toHaveText('Ei vielä aivan. Kuulit G → B → A. Sävel 1 oikein: G (G-kieli, vapaa). '
      + 'Sävel 2: soitit D, mutta kuului B (B-kieli, vapaa). Melodia nousi G:stä hypyllä B:hen. '
      + 'Sävel 3 oikein: A (G-kieli, 2. nauha). '
      + 'Soita koko kulku kitaralla: G-kieli, vapaa → B-kieli, vapaa → G-kieli, 2. nauha.');
    await expect(feedback).toHaveClass(/is-error/);
    await expect(section.locator('[data-melodia-kaari] li')).toHaveCount(3);
  });
});

test('aihesivulla oppitunnin sulkeminen kesken soiton pysäyttää äänen', async ({ page }) => {
  await recordAudio(page);
  await page.goto(`${topicPath}#valinta-kotiin-vai-kesken`);
  const card = page.locator('#valinta-kotiin-vai-kesken').locator('xpath=..');
  await expect(card).toHaveAttribute('open', '');
  const section = card.locator('[data-melodiaharjoitus="koti"]');
  await section.locator('[data-melodia-kuuntele]').click();
  await expect(section.locator('[data-melodia-tila]')).toHaveText('Melodia soi. Kuuntele, mihin se pysähtyy.');
  await clearLog(page);
  await page.locator('#valinta-kotiin-vai-kesken').click();
  await expect(card).not.toHaveAttribute('open', '');
  await expect(section.locator('[data-melodia-tila]')).toHaveText('Kuuntelu keskeytyi. Voit kuunnella uudelleen.');
  const stops = await page.evaluate(() => window.__audioLog.filter(entry => entry.type === 'stop'));
  expect(stops.length).toBeGreaterThanOrEqual(8);
});

test.describe('pienet näytöt ja suurennus', () => {
  for (const width of [320, 360, 390]) {
    test(`${width} px, 100 % ja 200 % teksti ilman vaakavieritystä; painikkeet vähintään 44 px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      await fixRandom(page, 0);
      await page.goto(`${topicPath}#valinta-ylos-alas-vai-sama`);
      await page.locator('#aiemmat > summary').click();
      await page.locator('#ydinopinnot > summary').click();
      for (const size of ['100%', '200%']) {
        await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
        expect(await noHorizontalScroll(page), `aihesivu ${width}px ${size}`).toBe(true);
      }
      for (const [slug] of lessons) {
        await page.goto(`/oppi/korva/${slug}.html`);
        const section = page.locator('[data-melodiaharjoitus]');
        await section.locator('[data-melodia-kuuntele]').click();
        for (const button of await section.locator('button:visible').all()) {
          const box = await button.boundingBox();
          expect(box!.height, `${slug}: ${await button.textContent()}`).toBeGreaterThanOrEqual(44);
          expect(box!.width).toBeGreaterThanOrEqual(44);
        }
        for (const size of ['100%', '200%']) {
          await page.evaluate(value => { document.documentElement.style.fontSize = value; }, size);
          expect(await noHorizontalScroll(page), `${slug} ${width}px ${size}`).toBe(true);
        }
      }
    });
  }

  test('1280 px ja 400 % teksti: kuultu melodia mahtuu ilman vaakavieritystä', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await fixRandom(page, 0);
    await page.goto('/oppi/korva/kotiin-vai-kesken.html');
    await page.locator('[data-melodia-kuuntele]').click();
    await page.getByRole('button', { name: 'Palasi kotiin' }).click();
    await page.evaluate(() => { document.documentElement.style.fontSize = '400%'; });
    expect(await noHorizontalScroll(page)).toBe(true);
    await expect(page.locator('[data-melodia-kaari] li')).toHaveCount(7);
  });
});
