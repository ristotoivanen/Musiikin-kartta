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
    await mixer.getByRole('button', { name: '▶ Soita' }).click();
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

  test('sointupolku tarjoaa vanhan sointusävelharjoituksen ilman kaikkien harjoitusten valikkoa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Soinnut ja musiikin rakenne/ }).click();
    await expect(page.getByText(/Rakenna C-duurisointua/)).toBeVisible();
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveCount(0);
    await page.getByRole('button', { name: 'Aloita harjoitus' }).click();
    await expect(page.getByTestId('round-status')).toContainText('Kysymys 1');
    await expect(page.getByRole('heading', { name: 'Sointusävelet' })).toBeVisible();
  });

  test('sävelkorvan polku käyttää olemassa olevaa kuule ja toista -harjoitusta', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
    await expect(page.getByRole('heading', { name: 'Kuule ja toista' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Aloita harjoitus' })).toBeVisible();
  });

  test('oppaan vanha ?tila=-linkki ohittaa polun valinnan', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html?tila=scale&toonikka=A&asteikko=mp&boksi=1');
    await expect(page.getByRole('combobox', { name: 'Harjoitus' })).toHaveValue('scale');
    await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toHaveCount(0);
  });
});
