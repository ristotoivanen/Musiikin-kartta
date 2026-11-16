import { expect, test, type Locator, type Page } from '@playwright/test';

/*
 * Ensitreenien (kappaleet 1–9) normaali eteneminen arpoo lopetusten näkyvän A/B/C-järjestyksen
 * jokaiselle uudelle yritykselle. Testi kiinnittää satunnaisluvun: 0 tuottaa järjestyksen B, C, A
 * (näkyvä A = lopetus B, näkyvä B = lopetus C, näkyvä C = lopetus A) ja 0,999 alkuperäisen järjestyksen.
 * Pitkiä soittoja ei odoteta: testi päättää toiston kutsumalla ääniolion ended-käsittelijää.
 */
const gamePath = '/pelit/ensikeikka/';
const progressKey = 'musiikin-kartta:ensikeikka';

declare global {
  interface Window { ensikeikkaSources: AudioBufferSourceNode[]; ensikeikkaRandom: number }
}

async function setup(page: Page, completed: number[] | null, hash: string, random: number) {
  await page.addInitScript(value => {
    window.ensikeikkaSources = [];
    const start = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (...args) {
      start.apply(this, args);
      window.ensikeikkaSources.push(this);
    };
    window.ensikeikkaRandom = value;
    Math.random = () => window.ensikeikkaRandom;
  }, random);
  await page.goto(`${gamePath}#keikkalista`);
  await page.evaluate(([key, value]) => value === null ? localStorage.removeItem(key) : localStorage.setItem(key, value),
    [progressKey, completed === null ? null : JSON.stringify({ version: 1, completed })] as const);
  // Täysi lataus, jotta peli lukee juuri asetetun tallenteen ja aloittaa uuden yrityksen.
  await page.goto('about:blank');
  await page.goto(`${gamePath}${hash}`);
}

const button = (page: Page, name: string) => page.getByRole('button', { name, exact: true });
const status = (page: Page) => page.getByRole('status').first();
const saved = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);
const retry = (page: Page) => page.getByRole('heading', { name: 'Ei vielä. Kokeile uudelleen!' });
const setRandom = (page: Page, value: number) => page.evaluate(next => { window.ensikeikkaRandom = next; }, value);

async function press(page: Page, target: Locator, isMobile: boolean) {
  if (isMobile) await target.tap();
  else {
    await target.focus();
    await page.keyboard.press('Space');
  }
}

/** Odottaa, että toisto soi, ja päättää sen kuin se olisi soinut loppuun. */
async function playToEnd(page: Page, label: string) {
  await expect(status(page)).toHaveText(`Soitetaan · ${label}`);
  await page.evaluate(() => window.ensikeikkaSources.at(-1)!.onended?.(new Event('ended')));
  await expect(status(page)).toHaveText('Valmiina kuunteluun.');
}

async function hear(page: Page, letter: string, isMobile: boolean) {
  await press(page, button(page, `Lopetus ${letter}`), isMobile);
  await playToEnd(page, `Lopetus ${letter}`);
}

test('Kappale 1: eteneminen arpoo järjestyksen, ja palaute ja ratkaisu seuraavat lopetusta', async ({ page, isMobile }) => {
  await setup(page, null, '#kappale-1', 0);
  const check = button(page, 'Tarkista valintani');

  // Keskeytetty kuuntelu ei kuittaa lopetusta kuulluksi eikä muuta järjestystä.
  await press(page, button(page, 'Lopetus C'), isMobile);
  await expect(status(page)).toHaveText('Soitetaan · Lopetus C');
  await press(page, button(page, 'Lopetus C'), isMobile);
  await expect(status(page)).toHaveText('Valmiina kuunteluun.');
  await expect(check).toBeDisabled();

  // Näkyvä C on alkuperäinen lopetus A: sen oma palaute.
  await hear(page, 'C', isMobile);
  await check.click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText(/Tämä sävel hankaa bändin loppusointua vasten/)).toBeVisible();

  // Uusi satunnaisluku ei vaikuta käynnissä olevaan yritykseen (vihjeet, uusi valinta, tarkistus).
  await setRandom(page, .999);
  await page.getByText('Vihje', { exact: true }).click();
  await button(page, 'Näytä tarkempi vihje').click();
  await hear(page, 'B', isMobile);
  await check.click();
  await expect(page.getByText(/Melodia hyppää tässä kauas/)).toBeVisible();

  // Oikea lopetus (alkuperäinen B) näkyy nyt kirjaimella A.
  await hear(page, 'A', isMobile);
  await check.click();
  await expect(page.getByRole('heading', { name: 'Oikein! Löysit kotiin!' })).toBeFocused();
  expect(await saved(page)).toBeNull();
  await button(page, 'Soita valmis kappale').click();
  await playToEnd(page, 'valmista kappaletta');
  expect(await saved(page)).toEqual({ version: 1, completed: [1] });
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/Melodian G♯ nousee puoliaskelen A:han/)).toBeVisible();

  // Uudelleenkuuntelu ei arvo uutta järjestystä eikä muuta tallennetta.
  await button(page, 'Kuuntele uudelleen').click();
  await playToEnd(page, 'valmista kappaletta');
  expect(await saved(page)).toEqual({ version: 1, completed: [1] });
});

test('Kappale 8: tunnistuksen palaute ja selitys nimeävät lopetukset näkyvillä kirjaimilla', async ({ page, isMobile }) => {
  await setup(page, [1, 2, 3, 4, 5, 6, 7], '#kappale-8', 0);
  for (const letter of ['A', 'B', 'C']) await hear(page, letter, isMobile);
  // Piste on alkuperäinen B (näkyvä A), kysymys alkuperäinen A (näkyvä C).
  await press(page, button(page, 'Piste: lopetus B'), isMobile);
  await press(page, button(page, 'Kysymys: lopetus C'), isMobile);
  await button(page, 'Tarkista valintani').click();
  await expect(retry(page)).toBeFocused();
  await expect(page.getByText('Toinen tunnistus on jo oikein. Korjaa vielä yksi.')).toBeVisible();
  await expect(page.getByText(/Lopetuksessa B bändi on kotona, mutta kuuntele melodiaa/)).toBeVisible();

  await press(page, button(page, 'Piste: lopetus A'), isMobile);
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Tunnistit molemmat loput!' })).toBeFocused();
  await expect(page.getByText('Lopetus A päättyy pisteeseen ja lopetus C kysymykseen.', { exact: false })).toBeVisible();
  await button(page, 'Soita valmis kappale').click();
  await playToEnd(page, 'valmista kappaletta');
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5, 6, 7, 8] });
  await page.getByText('Selitä, miksi tämä toimii').click();
  await expect(page.getByText(/Lopetus A päättyy kotiin.*Lopetus C on avoin lopetus.*Lopetuksessa B bändi on kotona/)).toBeVisible();
});

test('Kappale 9: järjestys säilyy vaiheesta toiseen, ja uudelleenlataus aloittaa uuden yrityksen', async ({ page, isMobile }) => {
  const done = [1, 2, 3, 4, 5, 6, 7, 8];
  await setup(page, done, '#kappale-9', 0);
  // Alkuperäinen A (oikea) näkyy kirjaimella C.
  await hear(page, 'C', isMobile);
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Melodia löysi kotiin.' })).toBeFocused();
  await setRandom(page, .999);
  await button(page, 'Jatka vaiheeseen 2').click();
  await expect(page.getByRole('heading', { name: 'Vaihe 2/2: Miksi lopetus toimii?' })).toBeFocused();

  // Bänditreenien näkymässä käynti ei aloita uutta yritystä: vaihe ja järjestys säilyvät muistissa.
  await page.evaluate(() => { window.location.hash = '#keikkalista'; });
  await expect(page.getByRole('heading', { name: 'Bänditreenit', level: 1 })).toBeVisible();
  await page.evaluate(() => { window.location.hash = '#kappale-9'; });
  await expect(page.getByRole('heading', { name: 'Vaihe 2/2: Miksi lopetus toimii?' })).toBeVisible();

  // Uudelleenlataus: keskeneräinen yritys alkaa alusta uudella arvonnalla (nyt alkuperäinen järjestys).
  await setup(page, done, '#kappale-9', .999);
  await expect(page.getByRole('heading', { name: 'Vaihe 1/2: Valitse melodian lopetus' })).toBeVisible();
  await hear(page, 'A', isMobile);
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Melodia löysi kotiin.' })).toBeFocused();
  expect(await saved(page)).toEqual({ version: 1, completed: done });
});

test('Harjoittelu arpoo edelleen jokaisella kierroksella eikä tallenna', async ({ page }) => {
  await setup(page, [1, 2, 3, 4, 5], '#harjoitus-3', 0);
  // Kappaleen 3 oikea lopetus on alkuperäinen A, joka näkyy järjestyksessä B, C, A kirjaimella C.
  await hear(page, 'C', false);
  await button(page, 'Tarkista valintani').click();
  await expect(page.getByRole('heading', { name: 'Oikein! Löysit kotiin!' })).toBeFocused();
  expect(await saved(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5] });
});
