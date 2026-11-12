import { test, expect, type Page } from '@playwright/test';

const ACOUSTIC_LINK = '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen';

/** Soinnut ja sanat on oletuksena suljettu. */
async function openChart(page: Page) {
  await page.locator('details.song-chart-collapse > summary').click();
  await expect(page.locator('.song-chord-panel')).toBeVisible();
}

/** Simuloi säestysraidan etenemistä ilman oikeaa äänentoistoa. */
async function setSongTime(page: Page, seconds: number) {
  await page.locator('.song-player audio').first().evaluate((element, time) => {
    Object.defineProperty(element, 'currentTime', { configurable: true, writable: true, value: time });
    element.dispatchEvent(new Event('timeupdate'));
  }, seconds);
}

test('akustisen kappaleen soinnut seuraavat aikajanaa ja tahtiin voi hypätä', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  await expect(panel.getByRole('heading',{name:'Harjoituskartta'})).toBeVisible();
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  await expect(jump).toHaveValue('intro');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');

  // Seek toimii ilman oikeita MP3-tiedostoja (äänitoisto ei ole tämän testin kohde).
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await jump.selectOption('bridge');
  await expect(jump).toHaveValue('bridge');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  expect(await backing.evaluate(el => (el as HTMLAudioElement).currentTime)).toBe(122);
  await panel.getByRole('button',{name:/^Tahti 7: E♭/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('E♭');
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 7');

  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  await expect(panel.getByRole('heading',{name:'Harjoituskartta'})).toBeVisible();
  await expect(panel.locator('.song-bar-grid .song-measure')).toHaveCount(4);
  await expect(jump).toHaveValue('intro');
  await page.getByRole('combobox',{name:'Versio'}).selectOption('acoustic');
  await expect(jump).toHaveValue('intro');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
});

test('osio- ja tahtihyppy säilyvät, kun säestys ei vielä voi kelata', async ({page}) => {
  await page.route('**/*.mp3', route => route.abort());
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  const player=page.locator('.song-player');
  const backing=player.locator('audio').first();
  await backing.evaluate(element => {
    const audio = element as HTMLAudioElement;
    let currentTime = 0;
    Object.defineProperties(audio, {
      readyState: { configurable:true, value:HTMLMediaElement.HAVE_NOTHING },
      duration: { get:() => audio.readyState === HTMLMediaElement.HAVE_NOTHING ? NaN : 212 },
      seekable: { get:() => ({
        length:audio.readyState === HTMLMediaElement.HAVE_NOTHING ? 0 : 1,
        start:() => 0, end:() => 212,
      }) },
      currentTime: {
        get:() => currentTime,
        set:(time: number) => {
          if (audio.readyState === HTMLMediaElement.HAVE_NOTHING) {
            throw new DOMException('Metadata puuttuu', 'InvalidStateError');
          }
          currentTime = time;
          queueMicrotask(() => audio.dispatchEvent(new Event('timeupdate')));
        },
      },
    });
  });

  const panel=page.locator('.song-chord-panel');
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  const lyrics=panel.locator('.song-section-lyrics');
  await jump.selectOption('bridge');
  await backing.dispatchEvent('timeupdate');
  await expect(jump).toHaveValue('bridge');
  await expect(player.locator('.song-time')).toContainText('1:51 /');
  await expect(lyrics).toHaveCount(0);

  await panel.getByRole('button',{name:/^Tahti 4: C/}).click();
  await backing.dispatchEvent('timeupdate');
  await expect(backing).toHaveJSProperty('currentTime', 0);
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 4');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('C');

  await backing.evaluate(audio => {
    Object.defineProperty(audio, 'readyState', { value:HTMLMediaElement.HAVE_CURRENT_DATA });
    audio.dispatchEvent(new Event('loadedmetadata'));
  });
  await expect(backing).toHaveJSProperty('currentTime', 121.5);

  const setMediaTime = (time: number) => backing.evaluate((element, time) => {
    (element as HTMLAudioElement).currentTime = time;
  }, time);
  await setMediaTime(138.99);
  await expect(jump).toHaveValue('bridge');
  await expect(lyrics).toHaveCount(0);
  await setMediaTime(139);
  await expect(jump).toHaveValue('verse3');
  await expect(lyrics).toContainText('Pidän tauon, annan soida');
});

test('kertosäkeen ohimenevä basso ja outrossa epävarma Dm erotetaan soinnuista', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('chorus1');
  await expect(panel.getByText('Basso: (F), isku 4')).toBeVisible();
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('outro');
  await expect(panel.getByText('Mahdollinen (Dm?)')).toHaveCount(2);
  await panel.getByRole('button',{name:/^Tahti 2: Gm/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
});

test('sähköisen version osiot, loppukertosäe ja tahtihypyt pysyvät omassa aikajanassa', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el=>{
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await expect(jump.locator('option')).toHaveCount(9);
  await expect(jump.locator('option')).not.toContainText(['Välisoitto']);
  await jump.selectOption('verse2');
  await expect(jump).toHaveValue('verse2');
  expect(await backing.evaluate(el => (el as HTMLAudioElement).currentTime)).toBe(63);
  await jump.selectOption('chorus3');
  await expect(panel.locator('.song-measure')).toHaveCount(8);
  await expect(panel.locator('.song-measure').nth(4)).toContainText('B♭');
  await panel.getByRole('button',{name:/^Tahti 5: B♭ F/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('B♭');
  await expect(panel.locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 5');
  await jump.selectOption('outro');
  await expect(panel.locator('.song-measure')).toHaveCount(4);
  await expect(panel.getByText(/Viimeinen Gm jää soimaan/)).toBeVisible();
  await expect(panel.locator('.song-measure small')).toHaveCount(0);
  expect(await backing.evaluate(el => (el as HTMLAudioElement).currentTime)).toBe(195);
});


test('sointuja voi häivyttää harjoitustasoittain ja paljastaa vain nykyisen vihjeen', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  const level=panel.getByRole('combobox',{name:'Harjoitustaso'});
  const current=panel.locator('.song-current-chord strong');
  const show=panel.getByRole('checkbox',{name:'Näytä soinnut'});
  await expect(level).toHaveValue('0');
  await expect(show).toBeChecked();
  await expect(current).toHaveText('Gm');

  await level.selectOption('1');
  await expect(current).toHaveText('?');
  await expect(panel.getByText('Piilossa 2/6 sointua')).toBeVisible();
  await expect(panel.getByRole('button',{name:/^Tahti 1: sointu piilossa sointu piilossa/})).toHaveCount(1);
  await expect(panel.locator('.song-measure').first().locator('strong')).toHaveText(['?','?']);

  await panel.getByRole('button',{name:'Paljasta sointu'}).click();
  await expect(current).toHaveText('Gm');
  await panel.getByRole('button',{name:'Piilota vihje'}).click();
  await expect(current).toHaveText('?');

  await level.selectOption('2');
  await expect(panel.getByText('Piilossa 4/6 sointua')).toBeVisible();
  await level.selectOption('3');
  await expect(panel.getByText('Piilossa 5/6 sointua')).toBeVisible();
  await level.selectOption('4');
  await expect(panel.getByText('Piilossa 6/6 sointua')).toBeVisible();
  await expect(panel.locator('.song-measure-chords strong')).toHaveText(['?','?','?','?','?','?']);
  await expect(panel.getByRole('combobox',{name:'Harjoiteltava osa'})).toHaveValue('intro');

  await show.uncheck();
  await expect(level).toBeDisabled();
  await expect(current).toHaveText('?');
  await show.check();
  await expect(level).toHaveValue('4');
  await level.selectOption('0');
  await expect(current).toHaveText('Gm');
});

test('sointujen piilotusjärjestystä voi muokata ja valinnat säilyvät versiota vaihtaessa', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  const level=panel.getByRole('combobox',{name:'Harjoitustaso'});
  await panel.locator('.song-fade-customize summary').click();
  await panel.getByRole('combobox',{name:'Gm: piilotusvaihe'}).selectOption('4');
  await panel.getByRole('combobox',{name:'C: piilotusvaihe'}).selectOption('1');
  await level.selectOption('1');
  await expect(panel.getByText('Piilossa 2/6 sointua')).toBeVisible();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');

  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  await expect(level).toHaveValue('1');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('bridge');
  await panel.getByRole('button',{name:/^Tahti 4: sointu piilossa/}).click();
  await expect(panel.locator('.song-current-chord strong')).toHaveText('?');

  await page.reload({waitUntil:'domcontentloaded'});
  await expect(page.getByRole('heading',{name:'Yksi sointu, kaksi askelta'})).toBeVisible();
  // Käyttäjän valitsema versio säilyy uudelleenlatauksessa, eikä sitä vaihdeta automaattisesti.
  await expect(page.getByRole('combobox',{name:'Versio'})).toHaveValue('normal');
  await expect(page).toHaveURL(/kappale=yksi-sointu-kaksi-askelta-normaali/);
  await openChart(page);
  await expect(panel.getByRole('combobox',{name:'Harjoitustaso'})).toHaveValue('1');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.locator('.song-fade-customize summary').click();
  await expect(panel.getByRole('combobox',{name:'Gm: piilotusvaihe'})).toHaveValue('4');
  await expect(panel.getByRole('combobox',{name:'C: piilotusvaihe'})).toHaveValue('1');
});


test('koko sanoitus avautuu sointuasetuksista ja toimii molemmilla versioilla', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  const lyrics=panel.getByRole('checkbox',{name:'Näytä koko sanoitus'});
  const full=panel.locator('.song-all-lyrics');
  const part=panel.locator('.song-section-lyrics');
  expect(await lyrics.isChecked()).toBe(false);
  await expect(full).toHaveCount(0);
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el => {
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('verse1');
  await expect(part).toBeVisible();
  await lyrics.check();
  await expect(full.getByRole('heading',{name:'Koko kappaleen sanat'})).toBeVisible();
  await expect(full.locator('.song-lyrics-stanza')).toHaveCount(7);
  // Sanoitus luetaan ensin vasen palsta ylhäältä alas, sitten oikea.
  const columns=full.locator('.song-lyrics-column');
  await expect(columns).toHaveCount(2);
  await expect(columns.nth(0).locator('h5')).toHaveText(['Säkeistö 1','Kertosäe 1','Säkeistö 2']);
  await expect(columns.nth(1).locator('h5')).toHaveText(['Kertosäe 2','Väliosa (laulu)','Kertosäe 3','Outro']);
  const [leftBox,rightBox]=[await columns.nth(0).boundingBox(),await columns.nth(1).boundingBox()];
  if ((page.viewportSize()?.width ?? 1000) <= 650) {
    expect(rightBox!.y).toBeGreaterThanOrEqual(leftBox!.y+leftBox!.height-1);
  } else {
    expect(rightBox!.x).toBeGreaterThan(leftBox!.x);
  }
  await expect(full.getByText('Aamu piirtää viivan seinään')).toBeVisible();
  await expect(full.getByText('Pidän tauon, annan soida')).toBeVisible();
  await expect(full.getByText('Yksi sointu, kaksi askelta')).toHaveCount(4);
  await expect(part).toHaveCount(0);

  await page.getByRole('combobox',{name:'Versio'}).selectOption('normal');
  await expect(lyrics).toBeChecked();
  await expect(full.locator('.song-lyrics-stanza')).toHaveCount(7);
  await expect(full.getByText('Ei tarvitse kiirehtiä')).toBeVisible();

  await lyrics.uncheck();
  await expect(full).toHaveCount(0);
  await expect(part).toHaveCount(0); // Vaihdon jälkeen intro, jossa ei ole laulua.
  await panel.getByRole('combobox',{name:'Harjoiteltava osa'}).selectOption('chorus1');
  await expect(part.getByText('sama riffi palaa taas')).toBeVisible();
});

test('Soinnut ja sanat on aluksi suljettu, ja sen saa auki ja kiinni pysäyttämättä soitinta', async ({page}) => {
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
    HTMLMediaElement.prototype.pause = function () { /* Selaintesti ei vaadi äänilaitetta. */ };
  });
  await page.goto(ACOUSTIC_LINK);
  const disclosure=page.locator('details.song-chart-collapse');
  const summary=disclosure.locator(':scope > summary');
  const panel=disclosure.locator('.song-chord-panel');
  await expect(disclosure).not.toHaveAttribute('open','');
  await expect(panel).toBeHidden();
  await expect(summary).toHaveText('Soinnut ja sanat');

  const player=page.locator('.song-player');
  await player.getByRole('button',{name:'▶ Soita kappale'}).click();
  await expect(player.getByRole('button',{name:'■ Tauko'})).toBeVisible();
  // Avaaminen kesken toiston ei pysäytä soitinta.
  await summary.click();
  await expect(disclosure).toHaveAttribute('open','');
  await expect(panel).toBeVisible();
  await expect(player.getByRole('button',{name:'■ Tauko'})).toBeVisible();
  await panel.getByRole('combobox',{name:'Harjoitustaso'}).selectOption('2');

  await summary.click();
  await expect(disclosure).not.toHaveAttribute('open','');
  await expect(panel).toBeHidden();
  await expect(player.getByRole('button',{name:'■ Tauko'})).toBeVisible();

  await summary.click();
  await expect(disclosure).toHaveAttribute('open','');
  await expect(panel).toBeVisible();
  await expect(panel.getByRole('combobox',{name:'Harjoitustaso'})).toHaveValue('2');
  await expect(player.getByRole('button',{name:'■ Tauko'})).toBeVisible();
});

test('soolon aikana ei näytetä väliosan laulunsanoja, vaan vasta seuraavassa lauluosassa', async ({page}) => {
  await page.goto(ACOUSTIC_LINK);
  await openChart(page);
  const panel=page.locator('.song-chord-panel');
  const backing=page.locator('.song-player audio').first();
  await backing.evaluate(el => {
    Object.defineProperty(el,'currentTime',{configurable:true,writable:true,value:0});
  });
  const jump=panel.getByRole('combobox',{name:'Harjoiteltava osa'});
  for (const version of ['acoustic','normal']) {
    await page.getByRole('combobox',{name:'Versio'}).selectOption(version);
    await jump.selectOption('bridge');
    await expect(jump.locator('option:checked')).toContainText('Kitarasoolo');
    await expect(panel.locator('.song-section-lyrics')).toHaveCount(0);
    await jump.selectOption('verse3');
    await expect(jump.locator('option:checked')).toContainText('Väliosa');
    await expect(panel.locator('.song-section-lyrics')).toContainText('Pidän tauon, annan soida');
  }
  await expect(panel.getByText('Paina tahtia hypätäksesi sen alkuun')).toHaveCount(0);
});

test.describe('Seuraavan kappaleenosan sointuennakko', () => {
  const ahead = (page: Page) => page.locator('.song-chord-panel .song-ahead');
  const current = (page: Page) => page.locator('.song-chord-panel .song-current-chord strong');
  const activeBar = (page: Page) => page.locator('.song-chord-panel .song-measure.active .song-measure-number');
  const jump = (page: Page) => page.getByRole('combobox', { name: 'Harjoiteltava osa' });

  // Säkeistö 1:n 7. ja viimeinen tahti sekä kertosäkeen alku (songChart.ts:n tahtirajat).
  const versions = [
    { version: 'acoustic', link: ACOUSTIC_LINK, bar7: 36, lastBar: 39.4, beforeChorus: 42.9, chorus: 43 },
    { version: 'normal', link: '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali',
      bar7: 35.2, lastBar: 38.6, beforeChorus: 41.9, chorus: 42 },
  ] as const;

  for (const { version, link, bar7, lastBar, beforeChorus, chorus } of versions) {
    test(`${version}: seuraavan osan ensimmäinen sointu näkyy vain edellisen osan viimeisessä tahdissa`, async ({ page }) => {
      await page.goto(link);
      await expect(page.getByRole('combobox', { name: 'Versio' })).toHaveValue(version);
      await openChart(page);

      await setSongTime(page, 0.2);
      await expect(ahead(page)).toHaveCount(0);
      await setSongTime(page, bar7);
      await expect(activeBar(page)).toHaveText('Tahti 7');
      await expect(ahead(page)).toHaveCount(0);

      await setSongTime(page, lastBar);
      await expect(activeBar(page)).toHaveText('Tahti 8');
      await expect(ahead(page)).toHaveText('Seuraava sointu B♭');
      await expect(ahead(page).locator('strong')).toHaveText('B♭');

      // Korostus pysyy nykyisessä tahdissa oikeaan soittohetkeen asti.
      await setSongTime(page, beforeChorus);
      await expect(jump(page)).toHaveValue('verse1');
      await expect(activeBar(page)).toHaveText('Tahti 8');
      await expect(current(page)).toHaveText('Gm');
      await expect(ahead(page)).toHaveText('Seuraava sointu B♭');

      await setSongTime(page, chorus);
      await expect(jump(page)).toHaveValue('chorus1');
      await expect(activeBar(page)).toHaveText('Tahti 1');
      await expect(current(page)).toHaveText('B♭');
      await expect(ahead(page)).toHaveCount(0);
    });
  }

  test('kelaus, osahyppy ja versionvaihto päivittävät ennakon tahtirajojen mukaan', async ({ page }) => {
    await page.goto(ACOUSTIC_LINK);
    await openChart(page);
    // Intron viimeinen tahti: säkeistö alkaa samalla Gm:llä.
    await setSongTime(page, 11);
    await expect(ahead(page).locator('strong')).toHaveText('Gm');
    await setSongTime(page, 5);
    await expect(ahead(page)).toHaveCount(0);

    await jump(page).selectOption('bridge');
    await expect(current(page)).toHaveText('Gm');
    await expect(ahead(page)).toHaveCount(0);
    await page.getByRole('button', { name: /^Tahti 8: F/ }).click();
    await expect(ahead(page).locator('strong')).toHaveText('Gm');

    await page.getByRole('combobox', { name: 'Versio' }).selectOption('normal');
    await expect(jump(page)).toHaveValue('intro');
    await expect(ahead(page)).toHaveCount(0);
  });

  test('viimeisessä osassa ennakkoa ei ole ilman looppia, loopissa näkyy intron sointu', async ({ page }) => {
    await page.goto(ACOUSTIC_LINK);
    await openChart(page);
    await setSongTime(page, 223);
    await expect(jump(page)).toHaveValue('outro');
    await expect(activeBar(page)).toHaveText('Tahti 7');
    await expect(ahead(page)).toHaveCount(0);

    await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
    await expect(ahead(page)).toHaveText('Seuraava sointu Gm');
    // Loopin alkaessa uudelleen ennakko poistuu.
    await setSongTime(page, 0.2);
    await expect(jump(page)).toHaveValue('intro');
    await expect(ahead(page)).toHaveCount(0);
  });

  test('ennakko ei paljasta harjoitustason piilottamaa sointua', async ({ page }) => {
    await page.goto(ACOUSTIC_LINK);
    await openChart(page);
    const level = page.getByRole('combobox', { name: 'Harjoitustaso' });
    await setSongTime(page, 39.4);
    await level.selectOption('1'); // Gm ja F piiloon, B♭ näkyy.
    await expect(ahead(page).locator('strong')).toHaveText('B♭');
    await level.selectOption('2'); // Myös B♭ ja E♭ piiloon.
    await expect(ahead(page).locator('strong')).toHaveText('?');
    await expect(ahead(page)).not.toContainText('B♭');
    await level.selectOption('0');
    await page.getByRole('checkbox', { name: 'Näytä soinnut' }).uncheck();
    await expect(ahead(page).locator('strong')).toHaveText('?');
  });
});

test.describe('Sointumerkintöjen esitystapa', () => {
  const panel = (page: Page) => page.locator('.song-chord-panel');
  const display = (page: Page) => panel(page).getByRole('group', { name: 'Sointumerkinnät' });
  const choose = (page: Page, name: string) => display(page).locator('label', { hasText: name }).click();
  const current = (page: Page) => panel(page).locator('.song-current-chord strong');
  const bars = (page: Page) => panel(page).locator('.song-measure-chords strong');
  const jump = (page: Page) => panel(page).getByRole('combobox', { name: 'Harjoiteltava osa' });

  for (const [version, link] of [['acoustic', ACOUSTIC_LINK],
    ['normal', '/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-normaali']] as const) {
    test(`${version}: power-soinnut näkyvät tahtikartassa, soivassa soinnussa ja ennakossa ajoituksen muuttumatta`, async ({ page }, testInfo) => {
      await page.goto(link);
      await openChart(page);
      await expect(display(page).getByRole('radio', { name: 'Täydet soinnut' })).toBeChecked();
      await expect(bars(page)).toHaveText(['Gm', 'F', 'Gm', 'B♭', 'F', 'Gm']);
      await expect(current(page)).toHaveText('Gm');

      await choose(page, 'Power-soinnut');
      await expect(display(page).getByRole('radio', { name: 'Power-soinnut' })).toBeChecked();
      await expect(bars(page)).toHaveText(['G5', 'F5', 'G5', 'B♭5', 'F5', 'G5']);
      await expect(current(page)).toHaveText('G5');
      await expect(panel(page).getByRole('button', { name: /^Tahti 3: B♭5 F5\./ })).toHaveCount(1);

      // Kelaus ja osan vaihtuminen: sama ajoitus kuin täysillä soinnuilla.
      const lastBar = version === 'acoustic' ? 39.4 : 38.6, chorus = version === 'acoustic' ? 43 : 42;
      await setSongTime(page, lastBar);
      await expect(panel(page).locator('.song-measure.active .song-measure-number')).toHaveText('Tahti 8');
      await expect(current(page)).toHaveText('G5');
      await expect(panel(page).locator('.song-ahead')).toHaveText('Seuraava sointu B♭5');
      await setSongTime(page, chorus);
      await expect(jump(page)).toHaveValue('chorus1');
      await expect(current(page)).toHaveText('B♭5');
      await expect(bars(page).first()).toHaveText('B♭5');
      await jump(page).selectOption('bridge');
      await expect(bars(page)).toHaveText(['G5', 'D5', 'F5', 'C5', 'G5', 'D5', 'E♭5', 'F5']);

      // Valinta säilyy, kun osio suljetaan ja avataan.
      const summary = page.locator('details.song-chart-collapse > summary');
      await summary.click();
      await expect(panel(page)).toBeHidden();
      await summary.click();
      await expect(display(page).getByRole('radio', { name: 'Power-soinnut' })).toBeChecked();
      await expect(bars(page).first()).toHaveText('G5');

      if (testInfo.project.name === 'phone') {
        const width = page.viewportSize()!.width;
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
        const box = (await display(page).boundingBox())!;
        expect(box.x).toBeGreaterThanOrEqual(0);
        expect(box.x + box.width).toBeLessThanOrEqual(width);
      }

      await choose(page, 'Täydet soinnut');
      await expect(bars(page)).toHaveText(['Gm', 'Dm', 'F', 'C', 'Gm', 'Dm', 'E♭', 'F']);
    });
  }

  test('power-soinnuissa piilotus, vihje, epävarmuusmerkintä, loop-ennakko ja versionvaihto toimivat', async ({ page }) => {
    await page.goto(ACOUSTIC_LINK);
    await openChart(page);
    await choose(page, 'Power-soinnut');
    const level = panel(page).getByRole('combobox', { name: 'Harjoitustaso' });

    // Epävarma Dm? näkyy muodossa D5?; basson kulkuääni F on sävel, ei sointu.
    await setSongTime(page, 202);
    await expect(jump(page)).toHaveValue('outro');
    await expect(panel(page).getByText('Mahdollinen (D5?)')).toHaveCount(2);
    await setSongTime(page, 44);
    await expect(jump(page)).toHaveValue('chorus1');
    await expect(panel(page).getByText('Basso: (F), isku 4')).toBeVisible();

    // Loopissa viimeisen tahdin ennakko näyttää intron soinnun power-merkintänä.
    await setSongTime(page, 223);
    await page.getByRole('checkbox', { name: 'Soita looppina' }).check();
    await expect(panel(page).locator('.song-ahead')).toHaveText('Seuraava sointu G5');

    // Taso 1 piilottaa Gm:n ja F:n: merkintä on ?, ei G5 tai F5. Vihje paljastaa power-merkinnän.
    await setSongTime(page, 0.2);
    await level.selectOption('1');
    await expect(current(page)).toHaveText('?');
    await expect(bars(page)).toHaveText(['?', '?', '?', 'B♭5', '?', '?']);
    await expect(panel(page).getByText('Piilossa 2/6 sointua')).toBeVisible();
    await panel(page).getByRole('button', { name: 'Paljasta sointu' }).click();
    await expect(current(page)).toHaveText('G5');
    await setSongTime(page, 11);
    await expect(panel(page).locator('.song-ahead strong')).toHaveText('?');
    await expect(panel(page).locator('.song-ahead')).not.toContainText('G5');

    // Versionvaihto säilyttää esitystavan ja palaa alkuun.
    await page.getByRole('combobox', { name: 'Versio' }).selectOption('normal');
    await expect(display(page).getByRole('radio', { name: 'Power-soinnut' })).toBeChecked();
    await expect(jump(page)).toHaveValue('intro');
    await level.selectOption('0');
    await expect(bars(page)).toHaveText(['G5', 'F5', 'G5', 'B♭5', 'F5', 'G5']);
  });
});
