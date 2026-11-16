import { expect, test, type Page } from '@playwright/test';
import { finishInSuccessCard } from './ensikeikka-success';

const gamePath = '/pelit/ensikeikka/';
const progressKey = 'musiikin-kartta:ensikeikka';
const firstGig = [1, 2, 3, 4, 5];
const tempo = { 6: 96, 7: 88, 8: 84, 9: 112 } as const;
const excerpt = (song: keyof typeof tempo) => ({ 6: 4, 7: 4, 8: 5, 9: 6 })[song] * 4 * 60 / tempo[song];

type Playback = { offset: number; duration: number; hasAudio: boolean; stopped: boolean };
declare global {
  interface Window { ensikeikkaPlayback: Playback[] }
}

async function observePlayback(page: Page) {
  await page.addInitScript(() => {
    // Normaali eteneminen arpoo Ensitreenien lopetusjärjestyksen. Nämä testit kiinnittävät alkuperäisen
    // järjestyksen (0,999), ellei testi aseta omaa arvoa. Arvottua järjestystä testaa
    // ensikeikka-lopetusjarjestys.spec.ts.
    if (!('ensikeikkaRandom' in window)) Math.random = () => .999;
    window.ensikeikkaPlayback = [];
    const observed = new WeakMap<AudioBufferSourceNode, Playback>();
    const start = AudioBufferSourceNode.prototype.start;
    const stop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.start = function (when, offset = 0, duration) {
      start.call(this, when, offset, duration);
      const buffer = this.buffer;
      if (!buffer) return;
      const first = Math.round(offset * buffer.sampleRate);
      const hasAudio = buffer.getChannelData(0).subarray(first, first + 4096).some(sample => Math.abs(sample) > .0001);
      const playback = { offset, duration: buffer.duration, hasAudio, stopped: false };
      observed.set(this, playback);
      window.ensikeikkaPlayback.push(playback);
    };
    AudioBufferSourceNode.prototype.stop = function (when) {
      stop.call(this, when);
      const playback = observed.get(this);
      if (playback) playback.stopped = true;
    };
  });
}

const button = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const status = (page: Page) => page.getByRole('status');
const lastPlayback = (page: Page) => page.evaluate(() => window.ensikeikkaPlayback.at(-1));
const saved = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);
const retry = (page: Page) => page.getByRole('heading', { name: 'Ei vielä. Kokeile uudelleen!' });

/**
 * Harjoittelu arpoo lopetusten järjestyksen Math.randomilla. Testi asettaa arvon itse:
 * 0 tuottaa järjestyksen B, C, A (näkyvä A = lopetus B, näkyvä B = C, näkyvä C = A)
 * ja 0,999 alkuperäisen järjestyksen.
 */
async function controlRandom(page: Page, value: number) {
  await page.addInitScript(initial => {
    const box = window as unknown as { ensikeikkaRandom: number };
    box.ensikeikkaRandom = initial;
    Math.random = () => box.ensikeikkaRandom;
  }, value);
}
const setRandom = (page: Page, value: number) =>
  page.evaluate(next => { (window as unknown as { ensikeikkaRandom: number }).ensikeikkaRandom = next; }, value);

async function start(page: Page, completed: number[] | null, hash = '#keikkalista') {
  await observePlayback(page);
  await page.goto(`${gamePath}${hash}`);
  if (completed) {
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [progressKey, JSON.stringify({ version: 1, completed })]);
    await page.reload();
  }
}

/** Valitse lopetus ja odota, että se on kuultu loppuun asti. */
async function hear(page: Page, ending: string) {
  await button(page, `Lopetus ${ending}`).click();
  await expect(status(page)).toHaveText(`Soitetaan · Lopetus ${ending}`);
  await expect(button(page, 'Tarkista valintani')).toBeEnabled({ timeout: 10000 });
}

/** Soittaa valmiin kappaleen samassa onnistumiskortissa. `thorough` lisää keskeytys- ja uudelleenkuuntelutarkistukset. */
async function perform(page: Page, completion: string, primary: string, { isMobile = false, thorough = false } = {}) {
  await finishInSuccessCard(page, { completion, primary, isMobile, thorough });
  expect(await page.evaluate(() => window.ensikeikkaPlayback.some(item => item.offset === 0 && item.hasAudio))).toBe(true);
}

test('Keikka 2 on lukittu ensikertalaiselle, mutta sen kappaleita voi kokeilla tallentamatta', async ({ page }) => {
  test.setTimeout(70000);
  await controlRandom(page, 0);
  await start(page, null);
  const card = page.getByRole('region', { name: 'Keikka 2 – Kotikulmien toinen ilta' });
  await expect(card.getByText('0 / 4 kappaletta suoritettu')).toBeVisible();
  await expect(card.getByText('Tavallisesti keikka 2 avautuu, kun keikka 1 on suoritettu.')).toBeVisible();
  await expect(card.getByRole('button', { name: 'Aloita keikka 2' })).toHaveCount(0);
  await expect(card.getByRole('button', { name: 'Kokeile kappaleita' })).toHaveAccessibleDescription('Vapaa harjoittelu: mitään ei tallenneta.');
  await card.getByRole('button', { name: 'Kokeile kappaleita' }).click();
  await expect(card.getByText('Avautuu keikan 1 jälkeen')).toHaveCount(3);
  await expect(card.getByText('Voit aloittaa tästä suoraan')).toHaveCount(1);
  await expect(card.getByRole('button', { name: 'Aloita suoraan kappaleesta 6' })).toBeVisible();
  await card.getByRole('button', { name: 'Kokeile kappaletta 6 vapaasti' }).click();
  await expect(page).toHaveURL(/#harjoitus-6$/);
  await expect(page.getByRole('heading', { name: 'Kappale 6 – Melodia jatkaa matkaa' })).toBeVisible();
  await expect(page.getByText('Ensikeikka · Harjoittelu')).toBeVisible();
  await expect(page.getByText(/Vapaa harjoittelu: tulos ei tallennu/)).toBeVisible();

  // Sekoitettu järjestys B, C, A: kotisävel (lopetus B) näkyy nyt kirjaimella A.
  await hear(page, 'A');
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Löysit kotiin!' })).toBeFocused();
  await perform(page, 'Harjoittelu valmis', 'Harjoittele seuraavaa kappaletta');
  expect(await saved(page)).toBeNull();
  await button(page, 'Harjoittele seuraavaa kappaletta').click();
  await expect(page).toHaveURL(/#harjoitus-7$/);
  await expect(page.getByRole('heading', { name: 'Kappale 7 – Basso kertoo suunnan' })).toBeVisible();
  await page.getByRole('link', { name: 'Takaisin keikkalistaan' }).click();
  await expect(card.getByText('0 / 4 kappaletta suoritettu')).toBeVisible();
  await expect(page.getByRole('region', { name: 'Keikka 1 – Ensimmäinen esiintyminen' }).getByText('0 / 5 kappaletta suoritettu')).toBeVisible();
});

test('Kappale 6: läheiset lopetukset ja selittävä palaute', async ({ page, isMobile }) => {
  test.setTimeout(70000);
  await start(page, firstGig);
  await button(page, 'Aloita keikka 2').click();
  await expect(page).toHaveURL(/#kappale-6$/);
  await expect(page.getByRole('heading', { name: 'Kuuntele kappale ja valitse lopetus' })).toBeFocused();
  await expect(page.getByText('Selitä, miksi tämä toimii')).toHaveCount(0);
  await hear(page, 'A');
  expect((await lastPlayback(page))?.offset).toBeCloseTo(excerpt(6));
  await button(page, 'Tarkista valintani').click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/sopii bändin viimeiseen sointuun.*Hyräile basson viimeinen sävel/)).toBeVisible();
  await page.getByText('Vihje', { exact: true }).click();
  await button(page, 'Näytä tarkempi vihje').click();
  await expect(page.getByText(/Hyräile basson viimeinen sävel\. Valitse lopetus/)).toBeVisible();
  await expect(button(page, 'Näytä tarkempi vihje')).toHaveCount(0);

  await hear(page, 'B');
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Löysit kotiin!' })).toBeFocused();
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/G laskeutuu askeleen F:ään/)).toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: firstGig });
  await perform(page, 'Kappale valmis', 'Seuraava kappale', { isMobile, thorough: true });
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6] });
  await button(page, 'Seuraava kappale').click();
  await expect(page).toHaveURL(/#kappale-7$/);
});

test('Kappale 7: melodia pysyy samana ja basson voi kuunnella erikseen', async ({ page, isMobile }) => {
  test.setTimeout(70000);
  await start(page, [...firstGig, 6]);
  await expect(page.getByRole('region', { name: 'Keikka 2 – Kotikulmien toinen ilta' }).getByText('1 / 4 kappaletta suoritettu')).toBeVisible();
  await button(page, 'Jatka keikkaa 2').click();
  await expect(page.getByRole('heading', { name: 'Kuuntele bassoa ja valitse lopetus' })).toBeFocused();
  await expect(page.getByText(/Melodia päättyy joka lopetuksessa samaan säveleen/)).toBeVisible();
  const bass = button(page, 'Kuuntele vain basso');
  await expect(bass).toBeDisabled();

  await button(page, 'Kuuntele keskeneräinen kappale').click();
  await expect(status(page)).toHaveText('Soitetaan · Keskeneräinen kappale');
  await hear(page, 'A');
  await bass.click();
  await expect(status(page)).toHaveText('Soitetaan · Lopetus A · vain basso');
  const isolated = await lastPlayback(page);
  expect(isolated?.offset).toBeCloseTo(excerpt(7));
  expect(isolated?.hasAudio).toBe(true);
  await button(page, 'Pysäytä basso').click();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });
  await button(page, 'Tarkista valintani').click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/basso kääntyy viime hetkellä alaspäin/)).toBeVisible();

  await hear(page, 'C');
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Bändi palasi kotiin!' })).toBeFocused();
  await perform(page, 'Kappale valmis', 'Seuraava kappale', { isMobile, thorough: true });
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6, 7] });
});

test('Kappale 8: piste ja kysymys tunnistetaan, eikä toimivaa loppua leimata vääräksi', async ({ page, isMobile }) => {
  test.setTimeout(90000);
  await start(page, [...firstGig, 6, 7]);
  await button(page, 'Jatka keikkaa 2').click();
  await expect(page.getByRole('heading', { name: 'Kuuntele lopetukset ja tunnista niiden erot' })).toBeFocused();
  const check = button(page, 'Tarkista valintani');
  await expect(check).toBeDisabled();
  await button(page, 'Piste: lopetus C').click();
  await button(page, 'Kysymys: lopetus A').click();
  await expect(button(page, 'Piste: lopetus C')).toHaveAttribute('aria-pressed', 'true');
  await expect(check).toBeDisabled();
  await expect(page.getByText('Kuuntele valitsemasi lopetukset loppuun ennen tarkistusta.')).toBeVisible();
  // Sama kuunteluperiaate kuin valintatehtävässä: soiva lopetus pysähtyy uudesta painalluksesta.
  await button(page, 'Lopetus A').click();
  await expect(button(page, 'Lopetus A')).toHaveAccessibleDescription('Soi');
  await button(page, 'Lopetus A').click();
  await expect(status(page)).toHaveText('Valmiina kuunteluun.');
  await expect(button(page, 'Lopetus A')).toHaveAccessibleDescription('Kuuntele');
  await expect(button(page, 'Piste: lopetus C')).toHaveAttribute('aria-pressed', 'true');

  for (const ending of ['A', 'C']) {
    await button(page, `Lopetus ${ending}`).click();
    await expect(status(page)).toHaveText(`Soitetaan · Lopetus ${ending}`);
    await expect(button(page, `Lopetus ${ending}`)).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  }
  await expect(check).toBeEnabled();
  await check.click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText('Toinen tunnistus on jo oikein. Korjaa vielä yksi.')).toBeVisible();
  await expect(page.getByText(/Lopetuksessa C bändi on kotona, mutta kuuntele melodiaa/)).toBeVisible();

  await button(page, 'Piste: lopetus B').click();
  await expect(retry(page)).toHaveCount(0);
  await expect(check).toBeDisabled();
  await button(page, 'Lopetus B').click();
  await expect(button(page, 'Lopetus B')).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Tunnistit molemmat loput!' })).toBeFocused();
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/Lopetus A on avoin lopetus/)).toBeVisible();
  await perform(page, 'Kappale valmis', 'Seuraava kappale', { isMobile, thorough: true });
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6, 7, 8] });
});

test('Kappale 9: kaksivaiheinen encore ja Kotikulmien toisen illan valmistuminen', async ({ page, isMobile }) => {
  test.setTimeout(90000);
  await start(page, [...firstGig, 6, 7, 8, 42]);
  await button(page, 'Jatka keikkaa 2').click();
  await expect(page.getByRole('heading', { name: 'Vaihe 1/2: Valitse melodian lopetus' })).toBeFocused();
  await hear(page, 'C');
  await button(page, 'Kuuntele vain melodia').click();
  await expect(status(page)).toHaveText('Soitetaan · Lopetus C · vain melodia');
  await button(page, 'Tarkista valintani').click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/hankaa bändin viimeistä sointua vasten/)).toBeVisible();
  await hear(page, 'A');
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Melodia löysi kotiin.' })).toBeFocused();
  await expect(page.getByText('Selitä, miksi tämä toimii')).toHaveCount(0);

  await button(page, 'Jatka vaiheeseen 2').click();
  await expect(page.getByRole('heading', { name: 'Vaihe 2/2: Miksi lopetus toimii?' })).toBeFocused();
  const check = button(page, 'Tarkista valintani');
  const leap = button(page, 'Basso pysyy samassa sävelessä ja hyppää viime hetkellä kotisävelelle.');
  await leap.click();
  await expect(leap).toHaveAttribute('aria-pressed', 'true');
  await expect(check).toBeDisabled();
  await expect(page.getByText('Kuuntele basso erikseen ennen tarkistusta.')).toBeVisible();
  await button(page, 'Kuuntele vain basso').click();
  await expect(status(page)).toHaveText('Soitetaan · vain basso');
  expect((await lastPlayback(page))?.offset).toBeCloseTo(excerpt(9));
  await expect(check).toBeEnabled({ timeout: 10000 });
  await check.click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/Pysyykö se paikallaan/)).toBeVisible();

  await button(page, 'Basso nousee askel kerrallaan kotisävelelle samalla, kun melodia laskeutuu sinne.').click();
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Kuulit, miksi loppu toimii.' })).toBeFocused();
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6, 7, 8, 42] });
  // Ensitreenit ovat valmiit, joten ensisijainen jatko on Ensikeikka. Esiintymisalue valmistuu vasta sen jälkeen.
  await perform(page, 'Kotikulmien toinen ilta suoritettu!', 'Aloita Ensikeikka', { isMobile, thorough: true });
  await expect(page.getByText('Suoritit 4 kappaletta.')).toBeVisible();
  await expect(page.getByText(/Esiintymisalue suoritettu/)).toHaveCount(0);
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6, 7, 8, 9, 42] });

  await button(page, 'Palaa settilistaan').click();
  await expect(page).toHaveURL(/#keikka-2$/);
  await expect(page.getByRole('heading', { name: 'Keikka 2 – Kotikulmien toinen ilta' })).toBeFocused();
  await expect(page.getByRole('list', { name: 'Keikan 2 settilista' }).getByText('Suoritettu', { exact: true })).toHaveCount(4);
  await expect(page.getByRole('region', { name: 'Ensikeikka – Kotikulman keikka' }).getByRole('button', { name: 'Aloita Ensikeikka' })).toBeVisible();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
});

test('Tallenteen tilanteet: vanha versio, keskeneräiset ja valmiit keikat', async ({ page }) => {
  const gigCard = (id: 1 | 2) => page.getByRole('region', { name: id === 1 ? 'Keikka 1 – Ensimmäinen esiintyminen' : 'Keikka 2 – Kotikulmien toinen ilta' });
  const cases = [
    { completed: [1, 2], first: '2 / 5', second: '0 / 4', action: 'Jatka keikkaa 1', locked: true },
    { completed: firstGig, first: '5 / 5', second: '0 / 4', action: 'Aloita keikka 2', locked: false },
    { completed: [...firstGig, 6, 7], first: '5 / 5', second: '2 / 4', action: 'Jatka keikkaa 2', locked: false },
    { completed: [...firstGig, 6, 7, 8, 9], first: '5 / 5', second: '4 / 4', action: 'Harjoittele keikka 2 uudelleen', locked: false },
    // Vanhan version ulkopuolinen tai epäjärjestyksessä oleva tallenne ei avaa kappaleita väärin.
    { completed: [1, 2, 3, 4, 5, 7], first: '5 / 5', second: '0 / 4', action: 'Aloita keikka 2', locked: false },
  ];
  await start(page, null);
  for (const { completed, first, second, action, locked } of cases) {
    await page.evaluate(([key, value]) => localStorage.setItem(key, value), [progressKey, JSON.stringify({ version: 1, completed })]);
    await page.reload();
    await expect(gigCard(1).getByText(`${first} kappaletta suoritettu`)).toBeVisible();
    await expect(gigCard(2).getByText(`${second} kappaletta suoritettu`)).toBeVisible();
    await expect(page.getByRole('button', { name: action })).toBeVisible();
    await expect(gigCard(2).getByText(/Tavallisesti keikka 2 avautuu/)).toHaveCount(locked ? 1 : 0);
    expect(await saved(page)).toEqual({ version: 1, completed });
  }
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
  // Ensitreenit valmiina: Ensikeikka avautuu, mutta esiintymisalue valmistuu vasta sen jälkeen.
  await page.evaluate(([key, value]) => localStorage.setItem(key, value), [progressKey, JSON.stringify({ version: 1, completed: [...firstGig, 6, 7, 8, 9] })]);
  await page.reload();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Aloita Ensikeikka' })).toBeVisible();
  await expect(gigCard(1).getByText('Keikka suoritettu', { exact: false })).toBeVisible();
  await page.evaluate(([key, value]) => localStorage.setItem(key, value), [progressKey, JSON.stringify({ version: 1, completed: [...firstGig, 6, 7, 8, 9, 10, 11, 12] })]);
  await page.reload();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toBeVisible();
});

test('Suorat osoitteet ja selaimen takaisin-painike', async ({ page }) => {
  await start(page, firstGig, '#keikka-2');
  await expect(page.getByRole('heading', { name: 'Keikka 2 – Kotikulmien toinen ilta' })).toBeFocused();
  await expect(page.getByRole('list', { name: 'Keikan 2 settilista' })).toBeVisible();

  await page.goto(`${gamePath}#kappale-9`);
  await page.reload();
  await expect(page).toHaveURL(/#keikka-2$/);
  await expect(page.getByRole('heading', { name: 'Keikka 2 – Kotikulmien toinen ilta' })).toBeFocused();

  await page.goto(`${gamePath}#keikkalista`);
  await button(page, 'Aloita keikka 2').click();
  await expect(page).toHaveURL(/#kappale-6$/);
  await button(page, 'Kuuntele keskeneräinen kappale').click();
  await expect(status(page)).toHaveText(/^Soitetaan · /);
  await page.goBack();
  await expect(page).toHaveURL(/#keikkalista$/);
  await expect(page.getByRole('heading', { level: 1, name: 'Kotikulmien keikat' })).toBeFocused();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });
  await page.goForward();
  await expect(page.getByRole('heading', { name: 'Kappale 6 – Melodia jatkaa matkaa' })).toBeVisible();
  await page.getByRole('link', { name: 'Takaisin keikkalistaan' }).click();
  await button(page, 'Takaisin Ensikeikan alkuun').click();
  await expect(page.getByRole('heading', { level: 1, name: 'Ensikeikka (beta)' })).toBeFocused();
  await page.goBack();
  await expect(page.getByRole('heading', { level: 1, name: 'Kotikulmien keikat' })).toBeFocused();
  await page.goto(`${gamePath}#harjoitus-3`);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Kappale 3 – Melodia löytää perille' })).toBeVisible();
  await expect(page.getByText('Ensikeikka · Harjoittelu')).toBeVisible();
});

for (const song of [8, 9] as const) {
  test(`Kappaleen ${song} tehtävä mahtuu kapeaan puhelinnäkymään ja toimii näppäimistöllä`, async ({ page, isMobile }) => {
    test.setTimeout(60000);
    if (isMobile) await page.setViewportSize({ width: 320, height: 640 });
    await start(page, [...firstGig, 6, 7, ...(song === 9 ? [8] : [])]);
    await button(page, 'Jatka keikkaa 2').click();
    if (song === 9) {
      await hear(page, 'A');
      await button(page, 'Tarkista valintani').click();
      const next = button(page, 'Jatka vaiheeseen 2');
      await next.focus();
      await page.keyboard.press('Enter');
      await expect(page.getByRole('heading', { name: 'Vaihe 2/2: Miksi lopetus toimii?' })).toBeFocused();
    }
    const region = page.getByRole('region', { name: 'Kappaleen tehtävä' });
    const controls = await region.getByRole('button').evaluateAll(buttons => buttons.map(item => item.getBoundingClientRect().toJSON()));
    expect(controls.length).toBeGreaterThan(5);
    for (const control of controls) {
      expect(control.left).toBeGreaterThanOrEqual(0);
      expect(control.right).toBeLessThanOrEqual(page.viewportSize()!.width);
      expect(control.height).toBeGreaterThanOrEqual(44);
    }
    expect(await page.evaluate(() => document.querySelector('main')!.scrollWidth)).toBeLessThanOrEqual(page.viewportSize()!.width);
    const choice = song === 8 ? button(page, 'Kysymys: lopetus A')
      : button(page, 'Basso laskeutuu askel kerrallaan kotisävelelle samaan suuntaan kuin melodia.');
    await choice.focus();
    await page.keyboard.press(isMobile ? 'Enter' : 'Space');
    await expect(choice).toHaveAttribute('aria-pressed', 'true');
  });
}

test('Koko käyttäjäpolku: tyhjästä tallenteesta molemmat keikat valmiiksi', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Pitkä polku ajetaan kerran työpöytänäkymässä; kappalekohtaiset testit kattavat puhelimen.');
  test.setTimeout(300000);
  await start(page, null, '');
  await button(page, 'Kotikulmien keikat').click();
  await button(page, 'Aloita keikka 1').click();
  for (const [song, ending] of [[1, 'B'], [2, 'C'], [3, 'A'], [4, 'B'], [5, 'C'], [6, 'B'], [7, 'C']] as const) {
    await expect(page).toHaveURL(new RegExp(`#kappale-${song}$`));
    await hear(page, ending);
    await button(page, 'Tarkista valintani').click();
    await perform(page, song === 5 ? 'Keikka valmis!' : 'Kappale valmis', song === 5 ? 'Aloita keikka 2' : 'Seuraava kappale');
    await button(page, song === 5 ? 'Aloita keikka 2' : 'Seuraava kappale').click();
  }
  await expect(page).toHaveURL(/#kappale-8$/);
  for (const ending of ['A', 'B']) {
    await button(page, `Lopetus ${ending}`).click();
    await expect(button(page, `Lopetus ${ending}`)).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  }
  await button(page, 'Piste: lopetus B').click();
  await button(page, 'Kysymys: lopetus A').click();
  await button(page, 'Tarkista valintani').click();
  await perform(page, 'Kappale valmis', 'Seuraava kappale');
  await button(page, 'Seuraava kappale').click();
  await hear(page, 'A');
  await button(page, 'Tarkista valintani').click();
  await button(page, 'Jatka vaiheeseen 2').click();
  await button(page, 'Kuuntele vain basso').click();
  await button(page, 'Basso nousee askel kerrallaan kotisävelelle samalla, kun melodia laskeutuu sinne.').click();
  await expect(button(page, 'Tarkista valintani')).toBeEnabled({ timeout: 10000 });
  await button(page, 'Tarkista valintani').click();
  await perform(page, 'Kotikulmien toinen ilta suoritettu!', 'Aloita Ensikeikka');
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
  await button(page, 'Palaa settilistaan').click();
  await expect(page.getByRole('button', { name: 'Aloita Ensikeikka' })).toBeVisible();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
  await page.getByRole('button', { name: 'Takaisin Ensikeikan alkuun' }).click();
  await expect(page.getByText('Keikka 2: suoritettu')).toBeVisible();
});

test('Kokenut pelaaja aloittaa suoraan keikasta 2, ja suoritus tallentuu koskematta keikkaan 1', async ({ page }) => {
  test.setTimeout(70000);
  await start(page, [1, 2]);
  const first = page.getByRole('region', { name: 'Keikka 1 – Ensimmäinen esiintyminen' });
  const second = page.getByRole('region', { name: 'Keikka 2 – Kotikulmien toinen ilta' });
  const direct = second.getByRole('button', { name: 'Aloita suoraan keikasta 2' });
  await expect(direct).toHaveAccessibleDescription(/Suoritukset tallentuvat\. Keikka 1 pysyy ennallaan/);
  await expect(first.getByRole('button', { name: 'Jatka keikkaa 1' })).toHaveClass(/primary/);
  await expect(direct).not.toHaveClass(/primary/);
  await direct.click();
  await expect(page).toHaveURL(/#kappale-6$/);
  await expect(page.getByText('Suoritus tallentuu keikan etenemiseen.')).toBeVisible();
  await expect(page.getByText('Keikka 2 – Kotikulmien toinen ilta')).toBeVisible();
  await hear(page, 'B');
  await button(page, 'Tarkista valintani').click();
  await perform(page, 'Kappale valmis', 'Seuraava kappale');
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 6] });
  await expect(page.getByText(/Suoritus tallentuu/)).toHaveCount(0);

  await page.getByRole('link', { name: 'Takaisin settilistaan' }).click();
  await expect(first.getByText('2 / 5 kappaletta suoritettu')).toBeVisible();
  await expect(second.getByText('1 / 4 kappaletta suoritettu')).toBeVisible();
  await expect(second.getByText(/Tavallisesti keikka 2 avautuu/)).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Jatka keikkaa 1' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Jatka keikkaa 2' })).toBeVisible();
  await page.reload();
  await expect(second.getByText('1 / 4 kappaletta suoritettu')).toBeVisible();
  await expect(page.getByText('Esiintymisalue suoritettu!')).toHaveCount(0);
});

test('Suoraan aloitettu keikka 2 valmistuu ilman, että esiintymisalue merkitään valmiiksi', async ({ page }) => {
  test.setTimeout(90000);
  await start(page, [6, 7, 8]);
  await button(page, 'Jatka keikkaa 2').click();
  await hear(page, 'A');
  await button(page, 'Tarkista valintani').click();
  await button(page, 'Jatka vaiheeseen 2').click();
  await button(page, 'Kuuntele vain basso').click();
  await button(page, 'Basso nousee askel kerrallaan kotisävelelle samalla, kun melodia laskeutuu sinne.').click();
  await expect(button(page, 'Tarkista valintani')).toBeEnabled({ timeout: 10000 });
  await button(page, 'Tarkista valintani').click();
  await perform(page, 'Kotikulmien toinen ilta suoritettu!', 'Palaa settilistaan');
  await expect(page.getByText(/Keikka 1 on vielä soittamatta/)).toBeVisible();
  await expect(page.getByText(/Esiintymisalue suoritettu/)).toHaveCount(0);
  expect(await saved(page)).toEqual({ version: 1, completed: [6, 7, 8, 9] });
});

test('Harjoittelu sekoittaa lopetukset kierroksittain, mutta palaute puhuu valitusta lopetuksesta', async ({ page }) => {
  test.setTimeout(90000);
  await controlRandom(page, 0);
  await start(page, [...firstGig, 6], '#keikka-2');
  await page.getByRole('button', { name: 'Kokeile kappaletta 8 vapaasti' }).click();
  // Järjestys B, C, A: piste (B) näkyy A:na, terssiloppu (C) B:nä ja kysymys (A) C:nä.
  for (const ending of ['A', 'B', 'C']) {
    await button(page, `Lopetus ${ending}`).click();
    await expect(button(page, `Lopetus ${ending}`)).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  }
  await setRandom(page, .999);
  await button(page, 'Piste: lopetus B').click();
  await button(page, 'Kysymys: lopetus C').click();
  await button(page, 'Tarkista valintani').click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText('Piste: Lopetuksessa B bändi on kotona, mutta kuuntele melodiaa. Soiko se samaa säveltä kuin basso?')).toBeVisible();
  await expect(page.getByText('Toinen tunnistus on jo oikein. Korjaa vielä yksi.')).toBeVisible();
  // Järjestys ei muutu saman tehtävän aikana, vaikka satunnaisluku vaihtuu.
  await button(page, 'Kysymys: lopetus B').click();
  await button(page, 'Piste: lopetus C').click();
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByText(/Piste: Kuuntele lopetus C uudelleen/)).toBeVisible();
  await expect(page.getByText(/Kysymys: Lopetuksessa B bändi palaa kotiin/)).toBeVisible();
  await button(page, 'Piste: lopetus A').click();
  await button(page, 'Kysymys: lopetus C').click();
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByText('Lopetus A päättyy pisteeseen ja lopetus C kysymykseen. Kumpikin on toimiva tapa päättää fraasi, mutta eri tarkoitukseen.')).toBeVisible();
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/^Lopetus A päättyy kotiin:.*Lopetus C on avoin lopetus.*Lopetuksessa B bändi on kotona/)).toBeVisible();
  expect(await saved(page)).toEqual({ version: 1, completed: [...firstGig, 6] });

  // Uusi kierros arpoo uuden järjestyksen (nyt alkuperäinen A, B, C).
  await page.getByRole('link', { name: 'Takaisin keikkalistaan' }).click();
  await page.getByRole('button', { name: 'Kokeile kappaletta 8 vapaasti' }).click();
  await button(page, 'Lopetus C').click();
  await expect(button(page, 'Lopetus C')).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  await button(page, 'Lopetus A').click();
  await expect(button(page, 'Lopetus A')).toHaveAccessibleDescription('Kuultu', { timeout: 10000 });
  await button(page, 'Piste: lopetus C').click();
  await button(page, 'Kysymys: lopetus A').click();
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByText('Piste: Lopetuksessa C bändi on kotona, mutta kuuntele melodiaa. Soiko se samaa säveltä kuin basso?')).toBeVisible();
});

test('Normaali eteneminen ja suoraan avattu harjoitus arpovat järjestyksen (tehtävä #78)', async ({ page }) => {
  await controlRandom(page, 0);
  await start(page, [...firstGig, 6]);
  await page.goto(`${gamePath}#kappale-7`);
  await page.reload();
  await expect(page.getByText('Suoritus tallentuu keikan etenemiseen.')).toBeVisible();
  // Järjestyksessä B, C, A kotiin palaava lopetus (tunniste C) näkyy kirjaimella B.
  await hear(page, 'B');
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Bändi palasi kotiin!' })).toBeFocused();
  await page.goto(`${gamePath}#harjoitus-6`);
  await page.reload();
  await hear(page, 'C');
  await button(page, 'Tarkista valintani').click();
  // Järjestyksessä B, C, A näkyvä C on terssiloppu (tunniste A), ei kotisävel.
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/Se ei kuitenkaan ole sama sävel, jota basso soittaa lopussa/)).toBeVisible();
});
