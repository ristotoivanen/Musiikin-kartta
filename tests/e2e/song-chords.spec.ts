import { test, expect } from '@playwright/test';

test('akustisen kappaleen soinnut seuraavat aikajanaa ja tahtiin voi hypätä', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
  await expect(panel.getByRole('combobox',{name:'Harjoitustaso'})).toHaveValue('1');
  await expect(panel.locator('.song-current-chord strong')).toHaveText('Gm');
  await panel.locator('.song-fade-customize summary').click();
  await expect(panel.getByRole('combobox',{name:'Gm: piilotusvaihe'})).toHaveValue('4');
  await expect(panel.getByRole('combobox',{name:'C: piilotusvaihe'})).toHaveValue('1');
});


test('koko sanoitus avautuu sointuasetuksista ja toimii molemmilla versioilla', async ({page}) => {
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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

test('Soinnut ja sanat -osion saa piiloon avaamatta tai pysäyttämättä soitinta', async ({page}) => {
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = function () { return Promise.resolve(); };
    HTMLMediaElement.prototype.pause = function () { /* Selaintesti ei vaadi äänilaitetta. */ };
  });
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
  const disclosure=page.locator('details.song-chart-collapse');
  const summary=disclosure.locator(':scope > summary');
  const panel=disclosure.locator('.song-chord-panel');
  await expect(disclosure).toHaveAttribute('open','');
  await expect(panel).toBeVisible();
  await expect(summary).toHaveText('Soinnut ja sanat');
  await panel.getByRole('combobox',{name:'Harjoitustaso'}).selectOption('2');

  const player=page.locator('.song-player');
  await player.getByRole('button',{name:'▶ Soita kappale'}).click();
  await expect(player.getByRole('button',{name:'■ Tauko'})).toBeVisible();

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
  await page.goto('/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-akustinen');
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
