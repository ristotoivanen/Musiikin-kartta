import { test, expect } from '@playwright/test';

test.describe('Uudet oppimispolut', () => {
  test('etusivulla näkyy kolme polkua eikä vanhaa pudotusvalikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
    for (const title of ['Sävelkorva ja otelauta', 'Skaalat ja moodit', 'Soinnut ja musiikin rakenne']) {
      await expect(page.getByRole('button', { name: new RegExp(title) })).toBeVisible();
    }
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
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

  test('sointupolku tarjoaa vanhan sointusävelharjoituksen ilman kaikkien harjoitusten valikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
    await expect(page.getByText(/Rakenna C-duurisointua/)).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1');
    await expect(page.getByRole('heading', { name: 'Sointusävelet' })).toBeVisible();
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
