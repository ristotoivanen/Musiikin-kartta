import { test, expect } from '@playwright/test';

test.describe('Uudet oppimispolut', () => {
  test('etusivulla näkyy neljä polkua eikä vanhaa pudotusvalikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
    for (const title of ['Sävelkorva ja otelauta', 'Skaalat ja moodit', 'Soinnut ja musiikin rakenne', 'Kappaleharjoittelu']) {
      await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible();
    }
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'Harjoitustaustat' })).toHaveCount(0);
    await expect(page.getByText('Muut harjoitukset ja vanhat asetukset')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Avaa kaikki harjoitukset' })).toHaveCount(0);
  });

  test('mallikappale avautuu normaalina versiona, ja kitaran sekä laulun saa erikseen pois ilman toiston katkaisua', async ({ page }) => {
    await page.addInitScript(() => {
      HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
      HTMLMediaElement.prototype.pause = function () { /* Ei audiolaitetta selaintestissä */ };
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();

    await expect(page.getByRole('heading', { name: 'Yksi sointu, kaksi askelta' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Versio' })).toHaveValue('normal');
    await expect(page.getByRole('combobox', { name: 'Versio' }).locator('option')).toHaveText(['Normaali versio', 'Akustinen versio']);
    await expect(page.getByText('Avaa sointukartta nähdäksesi soinnut ja sanat tai harjoitellaksesi sointuja muistista. Voit myös mykistää mallikitaran tai laulun ja toistaa kappaletta looppina.')).toBeVisible();
    await expect(page.getByText('Miten harjoittelen tämän kappaleen kanssa?')).toHaveCount(0);
    await expect(page.getByText(/Kitara ja laulu ovat aluksi päällä|Soita itsenäisesti kappaleen mukana/)).toHaveCount(0);
    await expect(page.locator('details.song-chart-collapse')).not.toHaveAttribute('open', '');
    const player = page.locator('.song-player');
    await expect(player.getByText('Normaali versio · 3:32')).toBeVisible();
    const streams = player.locator('audio');
    await expect(streams).toHaveCount(3);
    const base = 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-';
    await expect(streams.nth(0)).toHaveAttribute('src', base + 'saestys.mp3');
    await expect(streams.nth(1)).toHaveAttribute('src', base + 'kitara.mp3');
    await expect(streams.nth(2)).toHaveAttribute('src', base + 'laulu.mp3');

    const guitar = page.getByRole('checkbox', { name: 'Kitara kuuluu' });
    const vocals = page.getByRole('checkbox', { name: 'Laulu kuuluu' });
    const loop = page.getByRole('checkbox', { name: 'Soita looppina' });
    await expect(guitar).toBeChecked();
    await expect(vocals).toBeChecked();
    await expect(loop).not.toBeChecked();

    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await guitar.uncheck();
    await expect(streams.nth(1)).toHaveJSProperty('muted', true);
    await expect(streams.nth(2)).toHaveJSProperty('muted', false);
    await vocals.uncheck();
    await expect(streams.nth(2)).toHaveJSProperty('muted', true);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await guitar.check();
    await expect(streams.nth(1)).toHaveJSProperty('muted', false);
    await loop.check();
    for (let i = 0; i < 3; i++) await expect(streams.nth(i)).toHaveJSProperty('loop', true);
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await player.getByRole('button', { name: '■ Tauko' }).click();
    await expect(player.getByRole('button', { name: '▶ Soita kappale' })).toBeVisible();
  });

  test('kappaleen versiota vaihtaessa soitin pysähtyy ja kelaa alkuun, eikä soita ilman uutta painallusta', async ({ page }) => {
    await page.addInitScript(() => {
      HTMLMediaElement.prototype.play = function () {
        this.dataset.playCount = String(Number(this.dataset.playCount ?? '0') + 1);
        return Promise.resolve();
      };
      HTMLMediaElement.prototype.pause = function () {
        this.dataset.pauseCount = String(Number(this.dataset.pauseCount ?? '0') + 1);
      };
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();

    const version = page.getByRole('combobox', { name: 'Versio' });
    const player = page.locator('.song-player');
    const streams = player.locator('audio');
    const guitar = page.getByRole('checkbox', { name: 'Kitara kuuluu' });
    const vocals = page.getByRole('checkbox', { name: 'Laulu kuuluu' });
    const loop = page.getByRole('checkbox', { name: 'Soita looppina' });

    await expect(version).toHaveValue('normal');
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await guitar.uncheck();
    await vocals.uncheck();
    await loop.check();
    // Simuloidaan eteneminen ennen versionvaihtoa myös ilman oikeita MP3-tiedostoja.
    await streams.nth(0).evaluate(element => {
      Object.defineProperty(element, 'currentTime', { configurable: true, writable: true, value: 42 });
      element.dispatchEvent(new Event('timeupdate'));
    });
    await expect(player.locator('.song-time')).toContainText('0:42 /');

    await version.selectOption('acoustic');
    await expect(version).toHaveValue('acoustic');
    await expect(player.getByRole('button', { name: '▶ Soita kappale' })).toBeVisible();
    await expect(player.locator('.song-time')).toContainText('0:00 /');
    await expect(player.getByText('Akustinen versio · 3:53')).toBeVisible();
    const base = 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-akustinen/yksi-sointu-kaksi-askelta-akustinen-';
    await expect(streams).toHaveCount(3);
    await expect(streams.nth(0)).toHaveAttribute('src', base + 'saestys.mp3');
    await expect(streams.nth(1)).toHaveAttribute('src', base + 'kitara.mp3');
    await expect(streams.nth(2)).toHaveAttribute('src', base + 'laulu.mp3');
    await expect(streams.nth(0)).not.toHaveAttribute('data-play-count', '1');
    await expect(guitar).not.toBeChecked();
    await expect(vocals).not.toBeChecked();
    await expect(loop).toBeChecked();
    await expect(streams.nth(1)).toHaveJSProperty('muted', true);
    await expect(streams.nth(2)).toHaveJSProperty('muted', true);
    for (let i = 0; i < 3; i++) await expect(streams.nth(i)).toHaveJSProperty('loop', true);

    // Soitto alkaa vasta manuaalisella painalluksella.
    await player.getByRole('button', { name: '▶ Soita kappale' }).click();
    await expect(streams.nth(0)).toHaveAttribute('data-play-count', '1');
    await expect(player.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await version.selectOption('normal');
    await expect(player.getByRole('button', { name: '▶ Soita kappale' })).toBeVisible();
    await expect(version).toHaveValue('normal');
    await expect(streams.nth(0)).toHaveAttribute('src', 'assets/audio/kappaleet/yksi-sointu-kaksi-askelta-normaali/yksi-sointu-kaksi-askelta-normaali-saestys.mp3');
    await expect(streams.nth(0)).not.toHaveAttribute('data-play-count', '1');
  });

  test('mallikappaleen suora linkki kunnioittaa siinä nimettyä versiota', async ({ page }) => {
    const version = page.getByRole('combobox', { name: 'Versio' });
    for (const [slug, expected] of [
      ['yksi-sointu-kaksi-askelta-akustinen', 'acoustic'],
      ['yksi-sointu-kaksi-askelta-normaali', 'normal'],
      ['yksi-sointu-kaksi-askelta', 'normal'],
    ] as const) {
      await page.goto('/kitaraharjoittelija.html?kappale=' + slug);
      await expect(page.getByRole('heading', { name: 'Yksi sointu, kaksi askelta' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toHaveCount(0);
      await expect(version).toHaveValue(expected);
    }
    await page.getByRole('button', { name: '← Oppimispolut' }).click();
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
  });

  test('käyttäjän valitsemaa versiota ei vaihdeta automaattisesti kesken harjoittelun', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
    const version = page.getByRole('combobox', { name: 'Versio' });
    await expect(version).toHaveValue('normal');
    await version.selectOption('acoustic');
    // Ilman kappalelinkkiä osoitteeseen ei lisätä versiota.
    await expect(page).not.toHaveURL(/kappale=/);
    await page.locator('details.song-chart-collapse > summary').click();
    await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
    await expect(version).toHaveValue('acoustic');
    await page.getByRole('button', { name: '← Oppimispolut' }).click();
    await page.getByRole('button', { name: /Kappaleharjoittelu/ }).click();
    await expect(version).toHaveValue('acoustic');
    await expect(page.locator('.song-player audio').first()).toHaveAttribute('src', /akustinen-saestys\.mp3$/);

    // Kappalelinkillä avattu sivu pitää linkin samassa versiossa kuin valinnan.
    await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
    await version.selectOption('normal');
    await expect(page).toHaveURL(/kappale=yksi-sointu-kaksi-askelta-normaali/);
    await page.reload();
    await expect(version).toHaveValue('normal');
    await expect(page.locator('.song-player audio').first()).toHaveAttribute('src', /normaali-saestys\.mp3$/);
  });

  test('ensimmäisen skaalaposition vaiheet avautuvat järjestyksessä ja eteneminen tallentuu', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'A-mollipentatoninen · positio 1' })).toBeVisible();
    await expect(page.getByRole('button', { name: /Soita muistista/ })).toBeDisabled();
    await expect(page.getByRole('region', { name: 'Otelaudan vastausruudukko' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita ylös ja alas' })).toBeVisible();
    await page.reload();
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita ylös ja alas' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    // Muistiharjoitus ei anna otelaudan nuotteja oletuksena.
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await expect(page.getByRole('button', { name: 'Näytä koko kuvio' })).toHaveCount(0);
    await page.getByRole('button', { name: 'Näytä pohjasävelet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(3);
    await page.getByRole('button', { name: 'Piilota pohjasävelet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);

    // Koko muoto löytyy vain palaamalla edelliseen opetukseen.
    await page.getByRole('button', { name: '← Palaa edelliseen opetukseen' }).click();
    await expect(page.getByRole('heading', { name: 'Soita ylös ja alas' })).toBeVisible();
    await expect(page.locator('.practice-board .dot')).toHaveCount(12);
    await page.getByRole('button', { name: /Soita muistista/ }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('2');
  });

  test('asteikon ylös-alas-harjoituksessa mallin saa loopille, pysäytys ja vaiheenvaihto katkaisevat sen', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    const loop = page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' });
    await expect(loop).toBeVisible();
    await loop.click();
    const stop = page.getByRole('button', { name: '■ Pysäytä asteikon toisto' });
    await expect(stop).toHaveAttribute('aria-pressed', 'true');
    await expect(page.getByRole('status')).toContainText('Jatkuva toisto käynnissä');

    await stop.click();
    await expect(loop).toHaveAttribute('aria-pressed', 'false');

    await loop.click();
    await expect(stop).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await page.getByRole('button', { name: /Soita ylös ja alas/ }).click();
    await expect(page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' })).toHaveAttribute('aria-pressed', 'false');
  });

  test('asteikon toisto näyttää soivan sävelen otelaudalla mutta ei paljasta muistiharjoitusta', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();

    // Kuuntele ja tutustu: jatkuva mallisoitto ja liikkuva otelautakorostus.
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    const highlight = page.locator('.practice-board td.playing button');
    await expect(highlight).toHaveCount(1);
    await expect(page.getByRole('status')).toContainText('Jatkuva toisto käynnissä · Nyt soi:');
    const initial = await highlight.getAttribute('data-string') + ':' + await highlight.getAttribute('data-fret');
    await expect.poll(async () => {
      const current = page.locator('.practice-board td.playing button');
      return await current.getAttribute('data-string') + ':' + await current.getAttribute('data-fret');
    }, { timeout: 3500 }).not.toBe(initial);

    await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
    await expect(highlight).toHaveCount(0);

    // Sormitusharjoituksessa sama toisto korostaa soitettavat kohdat.
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    await expect(highlight).toHaveCount(1);

    // Muistiharjoituksessa otelauta on piilossa myös silloin, kun malliääni soi.
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    await expect(page.getByRole('button', { name: '■ Pysäytä asteikon toisto' })).toBeVisible();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: '■ Pysäytä asteikon toisto' }).click();
  });

  test('muistiharjoituksen tempo säätyy 5 BPM:n askelin kesken toiston ja säilyy reloadissa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('group', { name: 'Asteikon toiston tempo' })).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('group', { name: 'Asteikon toiston tempo' })).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    const output = page.locator('.scale-tempo output');
    await expect(output).toHaveText('75 BPM');
    await page.getByRole('button', { name: 'Nopeuta tempoa 5 BPM' }).click();
    await page.getByRole('button', { name: 'Nopeuta tempoa 5 BPM' }).click();
    await expect(output).toHaveText('85 BPM');
    await page.getByRole('button', { name: '▶ Toista asteikkoa jatkuvasti' }).click();
    const stop = page.getByRole('button', { name: '■ Pysäytä asteikon toisto' });
    await expect(stop).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('button', { name: 'Hidasta tempoa 5 BPM' }).click();
    await expect(output).toHaveText('80 BPM');
    await expect(stop).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);

    await page.reload();
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('heading', { name: 'Soita muistista' })).toBeVisible();
    await expect(output).toHaveText('80 BPM');
    await page.getByRole('button', { name: 'Palauta 75 BPM' }).click();
    await expect(output).toHaveText('75 BPM');
  });

  test('improvisaatioharjoituksen kolme sävelnäyttöä näyttävät position 1 oikeat sävelet ilman vaikutusta ääneen', async ({ page }, testInfo) => {
    await page.addInitScript(() => {
      HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
      HTMLMediaElement.prototype.pause = function () { /* Testissä ei äänilaitetta. */ };
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    // Vanhaan asteikon sävelharjoitukseen ei ole enää näkyvää linkkiä.
    await expect(page.getByText(/Vanha asteikon sävelharjoitus|vanha asteikkoharjoitus/i)).toHaveCount(0);
    for (let i = 0; i < 3; i++) await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(page.getByRole('heading', { name: 'Improvisoi taustan päälle' })).toBeVisible();

    const hints = page.getByRole('group', { name: 'Sävelvihjeet otelaudalla' });
    const radio = (name: string) => hints.getByRole('radio', { name });
    // Käyttäjä painaa näkyvää segmenttiä; varsinainen radiopainike on sen sisällä.
    const choose = (name: string) => hints.locator('label', { hasText: name }).click();
    // Merkinnät kielinumeroittain (0 = ohut e, 5 = paksu E) ja nauhoittain.
    const marks = () => page.locator('.practice-board td.target button, .practice-board td.shape button').evaluateAll(buttons =>
      buttons.map(button => ({
        at: button.getAttribute('data-string') + ':' + button.getAttribute('data-fret'),
        label: button.textContent ?? '',
        root: button.closest('td')!.classList.contains('target'),
      })).sort((a, b) => a.at.localeCompare(b.at)));
    const roots = ['0:5', '3:7', '5:5'];

    await expect(radio('Vain pohjasävelet')).toBeChecked();
    let shown = await marks();
    expect(shown.map(mark => mark.at)).toEqual(roots);
    expect(shown.every(mark => mark.label === 'A' && mark.root)).toBe(true);

    await choose('Koko pentatoninen');
    shown = await marks();
    expect(shown).toEqual([
      { at: '0:5', label: 'A', root: true }, { at: '0:8', label: 'C', root: false },
      { at: '1:5', label: 'E', root: false }, { at: '1:8', label: 'G', root: false },
      { at: '2:5', label: 'C', root: false }, { at: '2:7', label: 'D', root: false },
      { at: '3:5', label: 'G', root: false }, { at: '3:7', label: 'A', root: true },
      { at: '4:5', label: 'D', root: false }, { at: '4:7', label: 'E', root: false },
      { at: '5:5', label: 'A', root: true }, { at: '5:8', label: 'C', root: false },
    ]);
    await expect(page.getByText(/A-pohjasävelet on korostettu/)).toBeVisible();

    // Tausta ja mallifraasi toimivat jokaisella näytöllä.
    const mixer = page.locator('.backing-track-mixer');
    await mixer.getByRole('button', { name: '▶ Soita' }).click();
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await choose('Ei sävelvihjeitä');
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await page.getByRole('button', { name: '▶ Mallifraasi' }).click();
    await expect(page.getByRole('alert')).toHaveCount(0);
    await choose('Vain pohjasävelet');
    await expect(page.locator('.practice-board .dot')).toHaveCount(3);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    // Kapealla näytöllä nauha 8 on vierityksen takana: vihje kertoo sen, ja nauhan saa näkyviin vierittämällä.
    const scroller = page.locator('.fret-scroll');
    const hint = page.locator('.fret-scroll-hint');
    if (testInfo.project.name === 'phone') {
      await expect(hint).toContainText('nauhoja on lisää');
      const fret8 = page.locator('.practice-board button[data-string="0"][data-fret="8"]');
      await scroller.evaluate(element => { element.scrollLeft = element.scrollWidth; });
      await expect(hint).toContainText('vasemmalla');
      const [cell, view] = [(await fret8.boundingBox())!, (await scroller.boundingBox())!];
      expect(cell.x).toBeGreaterThanOrEqual(view.x);
      expect(cell.x + cell.width).toBeLessThanOrEqual(view.x + view.width + 1);
      await scroller.evaluate(element => { element.scrollLeft = 0; });
      await expect(hint).toContainText('oikealla');
      expect((await page.locator('.practice-board .dot').first().boundingBox())!.width).toBeGreaterThanOrEqual(24);
    } else {
      await expect(hint).toHaveCount(0);
    }

    if (testInfo.project.name === 'phone') {
      const width = page.viewportSize()!.width;
      expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
      for (const name of ['Vain pohjasävelet', 'Koko pentatoninen', 'Ei sävelvihjeitä']) {
        const box = (await hints.locator('label', { hasText: name }).boundingBox())!;
        expect(box.x + box.width).toBeLessThanOrEqual(width);
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    }

    // Muistiharjoitus 3/4 alkaa edelleen ilman vihjeitä, ja paluu improvisointiin palauttaa oletuksen.
    await choose('Ei sävelvihjeitä');
    await page.getByRole('button', { name: /Soita muistista/ }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(0);
    await expect(hints).toHaveCount(0);
    await page.getByRole('button', { name: 'Näytä pohjasävelet' }).click();
    await expect(page.locator('.practice-board .dot')).toHaveCount(3);
    await page.getByRole('button', { name: /Improvisoi taustan päälle/ }).click();
    await expect(radio('Vain pohjasävelet')).toBeChecked();
    await expect(page.locator('.practice-board .dot')).toHaveCount(3);
  });

  test('improvisointitaustassa kaksi raitaa kulkee yhdessä ja mallikitaran saa mykistettyä', async ({ page }) => {
    await page.addInitScript(() => {
      // Ei vaadi varsinaisia MP3-tiedostoja selaintestille: varmistaa UI:n ohjauksen.
      HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
      HTMLMediaElement.prototype.pause = function () { /* Testissä ei äänilaitetta. */ };
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    for (let i = 0; i < 3; i++) {
      await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    }
    await expect(page.getByRole('heading', { name: 'Improvisoi taustan päälle' })).toBeVisible();
    const mixer = page.locator('.backing-track-mixer');
    const tracks = mixer.locator('audio');
    await expect(tracks).toHaveCount(2);
    await expect(tracks.nth(0)).toHaveAttribute('src', 'assets/audio/harjoittelija/am-vamp-without-guitar.mp3');
    await expect(tracks.nth(1)).toHaveAttribute('src', 'assets/audio/harjoittelija/am-vamp-electric-guitar.mp3');

    const guitar = mixer.getByRole('checkbox', { name: 'Mallikitara pois' });
    await expect(guitar).not.toBeChecked();
    await expect(tracks.nth(1)).toHaveJSProperty('muted', true);
    const loop = mixer.getByRole('checkbox', { name: 'Soita looppina' });
    await expect(loop).not.toBeChecked();
    await expect(tracks.nth(0)).toHaveJSProperty('loop', false);
    await expect(tracks.nth(1)).toHaveJSProperty('loop', false);
    await mixer.getByRole('button', { name: '▶ Soita' }).click();
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await loop.check();
    await expect(tracks.nth(0)).toHaveJSProperty('loop', true);
    await expect(tracks.nth(1)).toHaveJSProperty('loop', true);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await loop.uncheck();
    await expect(tracks.nth(0)).toHaveJSProperty('loop', false);
    await expect(tracks.nth(1)).toHaveJSProperty('loop', false);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await guitar.check();
    await expect(mixer.getByRole('checkbox', { name: 'Mallikitara päällä' })).toBeChecked();
    await expect(tracks.nth(1)).toHaveJSProperty('muted', false);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();
    await mixer.getByRole('checkbox', { name: 'Mallikitara päällä' }).uncheck();
    await expect(tracks.nth(1)).toHaveJSProperty('muted', true);
    await expect(mixer.getByRole('button', { name: '■ Tauko' })).toBeVisible();

    await mixer.getByRole('button', { name: '■ Tauko' }).click();
    await expect(mixer.getByRole('button', { name: '▶ Soita' })).toBeVisible();
  });

  test('teoria löytyy heti harjoituksen alusta ja vaihtuu harjoituksen mukaan', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=ear-note');
    const theory = page.getByRole('link', { name: /Lue tämän harjoituksen teoria/ });
    await expect(theory).toBeVisible();
    await expect(theory).toHaveAttribute('href', 'book/osa-7.html#intervallit');

    await page.getByRole('combobox', { name: 'Harjoitus' }).selectOption('notes');
    await expect(theory).toHaveAttribute('href', 'book/osa-5.html#otelauta');
    await expect(theory).toHaveCount(1);

    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    await expect(page.getByRole('link', { name: /Lue tämän harjoituksen teoria/ }))
      .toHaveAttribute('href', 'book/osa-5.html#otelauta');

    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await expect(page.getByRole('link', { name: /Lue tämän harjoituksen teoria/ }))
      .toHaveAttribute('href', 'book/osa-8.html#pentatoniikka');
  });

  test('sointupolun ensimmäinen harjoitus tunnistaa neljä avointa sointua', async ({ page }) => {
    // Fisher–Yates-arvonnan vaihdot osuvat samaan indeksiin: C on testin aloitussointu.
    await page.addInitScript(() => { Math.random = () => 0.999999; });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
    await expect(page.getByRole('heading', { name: 'Tunnista avoin sointu' })).toBeVisible();
    await expect(page.getByRole('link', { name: /Lue tämän harjoituksen teoria/ }))
      .toHaveAttribute('href', 'book/osa-6.html#caged');
    await expect(page.getByRole('radio', { name: /4 sointua/ })).toBeChecked();
    await expect(page.getByRole('radio', { name: /7 sointua/ })).not.toBeChecked();
    await expect(page.getByRole('heading', { name: 'Mikä avoin sointu?' })).toBeVisible();
    await expect(page.getByText('Sointu 1 / 4')).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);

    const board = page.locator('.chord-journey .practice-board');
    const choices = page.getByRole('group', { name: 'Valitse soinnun nimi' });
    await expect(choices.locator('button')).toHaveCount(4);
    await expect(board.locator('.dot')).toHaveCount(5);
    await expect(board.locator('tbody tr').last().locator('th')).toContainText('×');
    await expect(board.locator('button[data-string="1"][data-fret="1"] .dot')).toHaveText('●');
    await expect(board.locator('button[data-string="0"][data-fret="0"] .dot')).toHaveText('○');

    await choices.getByRole('button', { name: 'D', exact: true }).click();
    await expect(page.getByTestId('chord-feedback')).toContainText('Ei aivan');
    await choices.getByRole('button', { name: 'C', exact: true }).click();
    await expect(page.getByTestId('chord-feedback')).toContainText('Oikein! Tämä on C-sointu');
    await page.getByRole('button', { name: 'Seuraava sointu →' }).click();
    await expect(page.getByText('Sointu 2 / 4')).toBeVisible();
    await expect(board.locator('.dot')).toHaveCount(6);

    await choices.getByRole('button', { name: 'G', exact: true }).click();
    await page.getByRole('button', { name: 'Seuraava sointu →' }).click();
    await expect(page.getByText('Sointu 3 / 4')).toBeVisible();
    await choices.getByRole('button', { name: 'D', exact: true }).click();
    await page.getByRole('button', { name: 'Seuraava sointu →' }).click();
    await expect(page.getByText('Sointu 4 / 4')).toBeVisible();
    await choices.getByRole('button', { name: 'Em', exact: true }).click();
    await page.getByRole('button', { name: 'Näytä yhteenveto' }).click();
    await expect(page.getByRole('heading', { name: 'Avosointukierros valmis' })).toBeVisible();
    await expect(page.getByText('Vääriä valintoja yhteensä 1.')).toBeVisible();

    await page.getByRole('radio', { name: /7 sointua/ }).check();
    await expect(page.getByText('Sointu 1 / 7')).toBeVisible();
    await expect(choices.locator('button')).toHaveCount(7);
    await expect(choices.getByRole('button', { name: 'Am', exact: true })).toBeVisible();
    await expect(choices.getByRole('button', { name: 'A', exact: true })).toBeVisible();
  });

  test('vanhat sointusävelharjoitukset säilyvät linkeillä', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=chord&toonikka=C&sointu=maj');
    await expect(page.getByRole('heading', { name: 'Sointusävelet' })).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveValue('chord');
  });

  test('sävelkorvan ensimmäinen harjoitus etsii nimetyn sävelen kaikki sijainnit ilman ääntä', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('button', { name: /Sävelkorva ja otelauta/ })).toContainText('Etsi sävelet otelaudalta');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();

    await expect(page.getByRole('heading', { name: 'Etsi sävelet otelaudalta' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Etsi kaikki C-sävelet' })).toBeVisible();
    await expect(page.getByText('Löydetty 0 / 3')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Kuuntele uudelleen' })).toHaveCount(0);
    await expect(page.locator('.note-journey .practice-board .dot')).toHaveCount(0);

    const board = page.locator('.note-journey .practice-board');
    const firstString = board.locator('tbody tr').first();
    const lastString = board.locator('tbody tr').last();
    await expect(firstString.locator('th')).toContainText('ohuin');
    await expect(lastString.locator('th')).toContainText('paksuin');
    await expect(firstString).toHaveAttribute('style', /--string-thickness: 1.25px/);
    await expect(lastString).toHaveAttribute('style', /--string-thickness: 3.5px/);

    // C löytyy B-kielen 1. nauhalta, G-kielen 5. nauhalta ja A-kielen 3. nauhalta.
    await board.locator('button[data-string="1"][data-fret="1"]').click();
    await expect(page.getByText('Löydetty 1 / 3')).toBeVisible();
    await expect(board.locator('.dot')).toHaveCount(1);
    await board.locator('button[data-string="0"][data-fret="0"]').click();
    await expect(page.getByTestId('note-feedback')).toContainText('Valitsit sävelen E');

    await page.getByRole('button', { name: 'Näytä vihje' }).click();
    await expect(board.locator('.anchor .dot')).toHaveCount(1);
    await page.getByRole('button', { name: 'Piilota vihje' }).click();
    await expect(board.locator('.anchor .dot')).toHaveCount(0);

    await board.locator('button[data-string="2"][data-fret="5"]').click();
    await board.locator('button[data-string="4"][data-fret="3"]').click();
    await expect(page.getByText('Löydetty 3 / 3')).toBeVisible();
    await expect(board.locator('.dot')).toHaveCount(3);
    await page.getByRole('button', { name: 'Seuraava sävel →' }).click();
    await expect(page.getByRole('heading', { name: 'Etsi kaikki D-sävelet' })).toBeVisible();
    await expect(page.getByText('Löydetty 0 / 3')).toBeVisible();
  });

  test('sävelten etsintä jatkaa automaattisesti vain, kun valinta on käytössä', async ({ page }) => {
    await page.clock.install();
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();

    const autoAdvance = page.getByRole('checkbox', { name: 'Jatka automaattisesti' });
    await expect(autoAdvance).not.toBeChecked();
    await autoAdvance.check();

    const board = page.locator('.note-journey .practice-board');
    await board.locator('button[data-string="1"][data-fret="1"]').click();
    await board.locator('button[data-string="2"][data-fret="5"]').click();
    await board.locator('button[data-string="4"][data-fret="3"]').click();
    await expect(page.getByText('Löydetty 3 / 3')).toBeVisible();
    await expect(page.getByTestId('note-feedback')).toContainText('Löysit kaikki 3 C-säveltä');
    await expect(page.getByText('Siirrytään automaattisesti seuraavaan säveleen…')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Seuraava sävel →' })).toHaveCount(0);

    await page.clock.fastForward(1201);
    await expect(page.getByRole('heading', { name: 'Etsi kaikki D-sävelet' })).toBeVisible();
    await expect(page.getByText('Löydetty 0 / 3')).toBeVisible();
    await expect(autoAdvance).toBeChecked();

    // Kun automatiikka otetaan pois, loppuun löydetty sävel ei vaihdu itsestään.
    await autoAdvance.uncheck();
    await board.locator('button[data-string="1"][data-fret="3"]').click();
    await board.locator('button[data-string="3"][data-fret="0"]').click();
    await board.locator('button[data-string="4"][data-fret="5"]').click();
    await expect(page.getByText('Löydetty 3 / 3')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Seuraava sävel →' })).toBeVisible();
    await page.clock.fastForward(1600);
    await expect(page.getByRole('heading', { name: 'Etsi kaikki D-sävelet' })).toBeVisible();
  });

  test('automaattisen etenemisen voi perua onnistumisen jälkeen', async ({ page }) => {
    await page.clock.install();
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    const autoAdvance = page.getByRole('checkbox', { name: 'Jatka automaattisesti' });
    await autoAdvance.check();
    const board = page.locator('.note-journey .practice-board');
    await board.locator('button[data-string="1"][data-fret="1"]').click();
    await board.locator('button[data-string="2"][data-fret="5"]').click();
    await board.locator('button[data-string="4"][data-fret="3"]').click();
    await expect(page.getByText('Siirrytään automaattisesti seuraavaan säveleen…')).toBeVisible();
    await autoAdvance.uncheck();
    await page.clock.fastForward(1500);
    await expect(page.getByRole('heading', { name: 'Etsi kaikki C-sävelet' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Seuraava sävel →' })).toBeVisible();
  });

  test('vanha Kuule ja toista säilyy erillisenä kuunteluharjoituksena', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=repeat');
    await expect(page.getByRole('heading', { name: 'Kuule ja toista' })).toBeVisible();
  });

  test('oppaan vanha ?tila=-linkki ohittaa polun valinnan', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&boksi=1');
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveValue('scale');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toHaveCount(0);
  });
});
