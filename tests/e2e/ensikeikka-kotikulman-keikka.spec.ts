import { expect, test, type Locator, type Page } from '@playwright/test';

/*
 * Ensikeikka – Kotikulman keikka (kappaleet 10–12). Pitkiä soittoja ei odoteta: kun oikea toisto
 * on käynnistynyt, testi päättää sen kutsumalla ääniolion ended-käsittelijää. Sovellus käsittelee
 * sen kuten luonnollisen loppumisen. Kokonaisen soiton odottamista testaavat Ensitreenien testit.
 */
const gamePath = '/pelit/ensikeikka/';
const progressKey = 'musiikin-kartta:ensikeikka';
const ensitreenit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Playback = { offset: number; duration: number; hasAudio: boolean; stopped: boolean };
declare global {
  interface Window { ensikeikkaPlayback: Playback[]; ensikeikkaSources: AudioBufferSourceNode[]; ensikeikkaRandom: number }
}

async function setup(page: Page, completed: number[] | null, hash: string, random?: number) {
  await page.addInitScript(fixed => {
    window.ensikeikkaPlayback = [];
    window.ensikeikkaSources = [];
    const observed = new WeakMap<AudioBufferSourceNode, Playback>();
    const start = AudioBufferSourceNode.prototype.start;
    const stop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.start = function (when, offset = 0, duration) {
      start.call(this, when, offset, duration);
      const buffer = this.buffer;
      if (!buffer) return;
      const first = Math.round(offset * buffer.sampleRate);
      const hasAudio = buffer.getChannelData(0).subarray(first, first + 8192).some(sample => Math.abs(sample) > .0001);
      const playback = { offset, duration: buffer.duration, hasAudio, stopped: false };
      observed.set(this, playback);
      window.ensikeikkaPlayback.push(playback);
      window.ensikeikkaSources.push(this);
    };
    AudioBufferSourceNode.prototype.stop = function (when) {
      stop.call(this, when);
      const playback = observed.get(this);
      if (playback) playback.stopped = true;
    };
    if (fixed !== null) {
      window.ensikeikkaRandom = fixed;
      Math.random = () => window.ensikeikkaRandom;
    }
  }, random ?? null);
  await page.goto(`${gamePath}#keikkalista`);
  await page.evaluate(([key, value]) => value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value),
    [progressKey, completed === null ? null : JSON.stringify({ version: 1, completed })] as const);
  // Täysi lataus, jotta peli lukee juuri asetetun tallenteen (hash-siirtymä säilyttäisi vanhan tilan).
  await page.goto('about:blank');
  await page.goto(`${gamePath}${hash}`);
}

const button = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const status = (page: Page) => page.getByRole('status');
const saved = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);
const lastPlayback = (page: Page) => page.evaluate(() => window.ensikeikkaPlayback.at(-1));
const retry = (page: Page) => page.getByRole('heading', { name: 'Ei vielä. Kokeile uudelleen!' });

/** Painaa näppäimistöllä työpöydällä ja kosketuksella puhelimessa. */
async function press(page: Page, target: Locator, isMobile: boolean) {
  if (isMobile) await target.tap();
  else {
    await target.focus();
    await page.keyboard.press('Space');
  }
}

/** Odottaa, että toisto soi, ja päättää sen kuin se olisi soinut loppuun. */
async function playToEnd(page: Page, label: string | RegExp) {
  await expect(status(page)).toHaveText(typeof label === 'string' ? `Soitetaan · ${label}` : label);
  await page.evaluate(() => {
    const source = window.ensikeikkaSources.at(-1)!;
    source.onended?.(new Event('ended'));
  });
  await expect(status(page)).toHaveText('Valmiina kuunteluun.');
}

test('Ensikeikka näkyy Ensitreenien jälkeen omana korttinaan, ja sen voi aloittaa suoraan', async ({ page }) => {
  await setup(page, null, '');
  await expect(page.getByText('Ensikeikka: avautuu keikkojen 1 ja 2 jälkeen tai suoraan aloittamalla')).toBeVisible();
  await button(page, 'Kotikulmien keikat').click();
  const card = page.getByRole('region', { name: 'Ensikeikka – Kotikulman keikka' });
  await expect(card.getByText('0 / 3 vaihetta suoritettu')).toBeVisible();
  await expect(card.getByText('Tavallisesti Ensikeikka avautuu, kun Ensitreenit eli keikat 1 ja 2 on suoritettu.')).toBeVisible();
  const direct = card.getByRole('button', { name: 'Aloita suoraan Ensikeikasta' });
  await expect(direct).toHaveAccessibleDescription(/Suoritukset tallentuvat, ja Ensitreenit pysyvät ennallaan/);
  await direct.click();
  await expect(page).toHaveURL(/#kappale-10$/);
  await expect(page.getByText('Ensikeikka – Kotikulman keikka', { exact: true })).toBeVisible();
  await page.goBack();
  await expect(page).toHaveURL(/#keikkalista$/);

  await setup(page, ensitreenit, '#keikka-3');
  await expect(page.getByRole('heading', { name: 'Ensikeikka – Kotikulman keikka' })).toBeFocused();
  await expect(page.getByRole('list', { name: 'Ensikeikan settilista' })).toBeVisible();
  await expect(card.getByRole('button', { name: 'Aloita Ensikeikka' })).toBeVisible();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
});

test('Soundcheck: vertaile versioita, käytä erilliskuuntelua vihjeenä ja tunnista muutos', async ({ page, isMobile }) => {
  test.setTimeout(60000);
  // Satunnaisluku 0,5 arpoo joka kierrokselle soinnut: sama osa voi muuttua useammin kuin kerran.
  await setup(page, ensitreenit, '#kappale-10', .5);
  await expect(page.getByRole('heading', { name: 'Soundcheck 1/3: Mikä muuttui?' })).toBeFocused();
  const check = button(page, 'Tarkista valintani');
  const [v1, v2] = [button(page, 'Versio 1'), button(page, 'Versio 2')];
  await press(page, button(page, 'Basso'), isMobile);
  await expect(button(page, 'Basso')).toHaveAttribute('aria-pressed', 'true');
  await expect(check).toBeDisabled();
  await expect(page.getByText('Kuuntele molemmat versiot loppuun ennen tarkistusta.')).toBeVisible();

  // Keskeytetty kuuntelu ei kuittaa versiota kuulluksi.
  await press(page, v1, isMobile);
  await expect(v1).toHaveAccessibleDescription('Soi');
  await press(page, v1, isMobile);
  await expect(status(page)).toHaveText('Valmiina kuunteluun.');
  await expect(v1).toHaveAccessibleDescription('Kuuntele');
  expect(await lastPlayback(page)).toMatchObject({ stopped: true, offset: 0, hasAudio: true });

  await press(page, v1, isMobile);
  await playToEnd(page, 'Versio 1');
  await press(page, v2, isMobile);
  await playToEnd(page, 'Versio 2');
  await expect(v2).toHaveAccessibleDescription('Kuultu');
  await expect(check).toBeEnabled();
  await check.click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/Basso soittaa molemmissa versioissa samat sävelet/)).toBeVisible();

  // Vihje: tarkin taso avaa osien erilliskuuntelun.
  await page.getByText('Vihje', { exact: true }).click();
  await expect(page.getByRole('group', { name: 'Vertaa osia erikseen' })).toHaveCount(0);
  await button(page, 'Näytä tarkempi vihje').click();
  await button(page, 'Vertaa vain sointuja').click();
  await expect(status(page)).toHaveText('Soitetaan · Versiot peräkkäin · vain soinnut');
  const pair = await lastPlayback(page);
  expect(pair?.hasAudio).toBe(true);
  expect(pair?.duration).toBeGreaterThan(14);
  await button(page, 'Pysäytä').click();

  await press(page, button(page, 'Soinnut'), isMobile);
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Soinnut muuttuivat.' })).toBeFocused();
  await button(page, 'Jatka vaiheeseen 2').click();

  await expect(page.getByRole('heading', { name: 'Soundcheck 2/3: Mikä muuttui?' })).toBeFocused();
  await expect(check).toBeDisabled();
  await button(page, 'Kuuntele molemmat peräkkäin').click();
  await playToEnd(page, 'Versiot peräkkäin');
  await press(page, button(page, 'Soinnut'), isMobile);
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Soinnut muuttuivat.' })).toBeFocused();
  await button(page, 'Jatka vaiheeseen 3').click();

  await expect(page.getByRole('heading', { name: 'Soundcheck 3/3: Mikä muuttui?' })).toBeFocused();
  await button(page, 'Kuuntele molemmat peräkkäin').click();
  await playToEnd(page, 'Versiot peräkkäin');
  await press(page, button(page, 'Melodia'), isMobile);
  await check.click();
  await expect(page.getByText(/Melodia on molemmissa versioissa sama/)).toBeVisible();
  await press(page, button(page, 'Soinnut'), isMobile);
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Soinnut muuttuivat.' })).toBeFocused();
  expect(await saved(page)).toEqual({ version: 1, completed: ensitreenit });
  await button(page, 'Soita valmis kappale').click();
  await playToEnd(page, 'valmista kappaletta');
  await expect(page.locator('.success-card').getByRole('heading', { level: 3, name: 'Soundcheck valmis' })).toBeVisible();
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/sama osa voi muuttua useammin kuin kerran.*Ensimmäisellä kierroksella E-duurissa.*Toisella kierroksella D-duurissa.*Kolmannella kierroksella C-duurissa/))
    .toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: [...ensitreenit, 10] });
  await button(page, 'Seuraava kappale').click();
  await expect(page).toHaveURL(/#kappale-11$/);
});

test('Ensimmäinen biisi: valinta ratkeaa soittamalla koko kappale, ja palaute tulee esityksen jälkeen', async ({ page, isMobile }) => {
  test.setTimeout(60000);
  await setup(page, [...ensitreenit, 10], '#kappale-11');
  await expect(page.getByRole('heading', { name: 'Kuuntele alku ja valitse jatko' })).toBeFocused();
  await expect(page.getByText(/Bändin tavoite:.*Päätetään se kotiin/)).toBeVisible();
  const perform = button(page, 'Soita kappale valitulla jatkolla');
  const [one, two] = [button(page, 'Jatko 1'), button(page, 'Jatko 2')];
  await expect(perform).toBeDisabled();

  await button(page, 'Kuuntele alku').click();
  await expect(status(page)).toHaveText('Soitetaan · Kappaleen alku');
  expect((await lastPlayback(page))?.duration).toBeCloseTo(4 * 4 * 60 / 100, 1);
  await press(page, one, isMobile);
  await expect(one).toHaveAttribute('aria-pressed', 'true');
  await playToEnd(page, 'Jatko 1');
  expect((await lastPlayback(page))?.duration).toBeCloseTo(5 * 4 * 60 / 100 + .36, 1);
  await expect(perform).toBeDisabled();
  await press(page, two, isMobile);
  await playToEnd(page, 'Jatko 2');
  await press(page, one, isMobile);
  await press(page, one, isMobile);
  await expect(one).toHaveAttribute('aria-pressed', 'true');
  await expect(perform).toBeEnabled();

  // Keskeytetty esitys ei anna palautetta eikä valmista kappaletta.
  await perform.click();
  await expect(status(page)).toHaveText('Soitetaan · Kappale jatkolla 1');
  await button(page, 'Pysäytä esitys').click();
  await expect(retry(page)).toHaveCount(0);

  await perform.click();
  await playToEnd(page, 'Kappale jatkolla 1');
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/säkeistö jäi kysymykseen, vaikka bändi halusi päättää sen kotiin/)).toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: [...ensitreenit, 10] });

  await press(page, two, isMobile);
  await press(page, two, isMobile);
  await expect(retry(page)).toHaveCount(0);
  await perform.click();
  await playToEnd(page, 'Kappale jatkolla 2');
  await expect(page.getByRole('heading', { name: 'Oikein! Säkeistö päättyi kotiin.' })).toBeFocused();
  await expect(page.locator('.success-card').getByRole('heading', { level: 3, name: 'Kappale valmis' })).toBeVisible();
  await expect(button(page, 'Soita valmis kappale')).toHaveCount(0);
  expect(await saved(page)).toEqual({ version: 1, completed: [...ensitreenit, 10, 11] });
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/Jatko 2 toistaa alun aiheen.*Jatko 1 tuo uuden melodian/)).toBeVisible();
});

test('Harjoittelu arpoo toisen biisin ja numeroi jatkot uudelleen', async ({ page }) => {
  await setup(page, null, '#harjoitus-11', 0);
  // Satunnaisluku 0: harjoittelun versio (a-molli) ja järjestys B, A, joten avoin jatko on Jatko 2.
  await expect(page.getByText(/Bändin tavoite:.*Kertosäe tulee heti perään/)).toBeVisible();
  for (const name of ['Jatko 1', 'Jatko 2']) {
    await button(page, name).click();
    await playToEnd(page, name);
  }
  await button(page, 'Soita kappale valitulla jatkolla').click();
  await playToEnd(page, 'Kappale jatkolla 2');
  await expect(page.getByRole('heading', { name: 'Oikein! Säkeistö jäi kysymykseen.' })).toBeFocused();
  await expect(page.getByText('Harjoittelu valmis')).toBeVisible();
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/Jatko 2 tuo uuden melodian.*Jatko 1 toistaa alun aiheen/)).toBeVisible();
  expect(await saved(page)).toBeNull();
});

test('Illan viimeinen kappale: basso vie uuteen kotiin, ja lopuksi soivat keikan biisit', async ({ page, isMobile }) => {
  test.setTimeout(60000);
  await setup(page, [...ensitreenit, 10, 11], '#kappale-12');
  await expect(page.getByRole('heading', { name: 'Vaihe 1/2: Mihin basso vie?' })).toBeFocused();
  const check = button(page, 'Tarkista valintani');
  const same = button(page, 'Basso palaa samaan kotiin, ja kertosäe toistuu samalta korkeudelta.');
  await press(page, same, isMobile);
  await expect(check).toBeDisabled();
  await button(page, 'Kuuntele vain basso').click();
  await expect(status(page)).toHaveText('Soitetaan · vain basso');
  // Ratkaiseva kohta on rajattu tahteihin 4–8 (viisi tahtia) ilman siirtymää.
  expect(await lastPlayback(page)).toMatchObject({ offset: 0, hasAudio: true });
  expect((await lastPlayback(page))?.duration).toBeCloseTo(5 * 4 * 60 / 104, 1);
  await playToEnd(page, 'vain basso');
  await check.click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/vertaa sen ensimmäistä ja viimeistä säveltä/)).toBeVisible();
  await press(page, button(page, 'Basso nousee pienin askelin uuteen, korkeampaan kotiin, ja kertosäe toistuu korkeammalta.'), isMobile);
  await check.click();
  await button(page, 'Jatka vaiheeseen 2').click();

  await expect(page.getByRole('heading', { name: 'Vaihe 2/2: Valitse melodian lopetus' })).toBeFocused();
  await press(page, button(page, 'Lopetus A'), isMobile);
  await playToEnd(page, 'Lopetus A');
  await check.click();
  await expect(page.getByText(/Tämä oli kappaleen koti ennen nousua/)).toBeVisible();
  await press(page, button(page, 'Lopetus B'), isMobile);
  await playToEnd(page, 'Lopetus B');
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Melodia löysi uuden kodin.' })).toBeFocused();
  await button(page, 'Soita valmis kappale').click();
  await playToEnd(page, 'valmista kappaletta');
  const card = page.locator('.success-card');
  await expect(card.getByRole('heading', { level: 3, name: 'Ensikeikka soitettu!' })).toBeVisible();
  await expect(card.getByText('Suoritit soundcheckin ja kaksi keikkabiisiä.')).toBeVisible();
  await expect(card.getByText(/Keikan biisit soivat valmiina peräkkäin oikeilla ratkaisuilla.*Soundcheck ei kuulu esitykseen/)).toBeVisible();
  await expect(card.getByText(/Esiintymisalue suoritettu!/)).toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: [...ensitreenit, 10, 11, 12] });

  const finale = card.getByRole('button', { name: 'Kuuntele keikan biisit' });
  await finale.click();
  await expect(status(page)).toHaveText('Soitetaan · keikan biisit');
  const set = await lastPlayback(page);
  // Ensimmäinen biisi (noin 20 s), viimeinen kappale (noin 26 s) ja aplodit, ei soundcheckia.
  expect(set?.duration).toBeGreaterThan(40);
  expect(set?.duration).toBeLessThan(60);
  expect(set?.hasAudio).toBe(true);
  await card.getByRole('button', { name: 'Pysäytä keikan biisit' }).click();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });
  expect(await saved(page)).toEqual({ version: 1, completed: [...ensitreenit, 10, 11, 12] });

  // Uudelleenlatauksen jälkeen sama esitys on yhä tarjolla eikä riipu istunnon tilasta.
  await setup(page, [...ensitreenit, 10, 11, 12], '#kappale-12');
  await expect(card.getByText('Suoritit soundcheckin ja kaksi keikkabiisiä.')).toBeVisible();
  await card.getByRole('button', { name: 'Kuuntele keikan biisit' }).click();
  expect((await lastPlayback(page))?.duration).toBeCloseTo(set!.duration, 3);
  await card.getByRole('button', { name: 'Pysäytä keikan biisit' }).click();
  await page.goto(`${gamePath}#keikka-3`);
  await expect(page.getByRole('region', { name: 'Ensikeikka – Kotikulman keikka' }).getByText('3 / 3 vaihetta suoritettu · Keikka suoritettu'))
    .toBeVisible();
});

test('Soundcheckin harjoittelu arpoo uudet kierrokset, ja sama osa voi toistua', async ({ page }) => {
  // Satunnaisluku 0 arpoo joka kierrokselle basson.
  await setup(page, null, '#harjoitus-10', 0);
  for (const step of [1, 2, 3]) {
    await expect(page.getByRole('heading', { name: `Soundcheck ${step}/3: Mikä muuttui?` })).toBeFocused();
    await button(page, 'Kuuntele molemmat peräkkäin').click();
    await playToEnd(page, 'Versiot peräkkäin');
    await button(page, 'Basso').click();
    await button(page, 'Tarkista valintani').click();
    await expect(page.getByRole('heading', { name: 'Oikein! Basso muuttui.' })).toBeFocused();
    if (step < 3) await button(page, `Jatka vaiheeseen ${step + 1}`).click();
  }
  expect(await saved(page)).toBeNull();
});

for (const width of [320, 360, 390]) {
  test(`${width} px: Ensikeikan tehtävät mahtuvat näkymään`, async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Kapeat leveydet puhelinnäkymässä.');
    await page.setViewportSize({ width, height: 740 });
    for (const hash of ['#kappale-10', '#harjoitus-11', '#harjoitus-12']) {
      await setup(page, ensitreenit, hash);
      await expect(page.getByRole('region', { name: 'Kappaleen tehtävä' })).toBeVisible();
      const controls = await page.getByRole('region', { name: 'Kappaleen tehtävä' }).getByRole('button')
        .evaluateAll(buttons => buttons.map(item => item.getBoundingClientRect().toJSON()));
      expect(controls.length).toBeGreaterThan(3);
      for (const control of controls) {
        expect(control.left).toBeGreaterThanOrEqual(0);
        expect(control.right).toBeLessThanOrEqual(width);
        expect(control.height).toBeGreaterThanOrEqual(44);
      }
      expect(await page.evaluate(() => document.querySelector('main')!.scrollWidth)).toBeLessThanOrEqual(width);
    }
  });
}
