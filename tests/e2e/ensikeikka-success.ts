import { expect, type Locator, type Page } from '@playwright/test';

const progressKey = 'musiikin-kartta:ensikeikka';
const saved = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);

/** Painaa painiketta näppäimistöllä työpöydällä ja kosketuksella puhelimessa. */
export async function press(page: Page, target: Locator, isMobile: boolean) {
  if (isMobile) await target.tap();
  else {
    await target.focus();
    await page.keyboard.press('Enter');
  }
}

/**
 * Oikean vastauksen jälkeinen yhtenäinen onnistumiskortti. Tarkistaa, että palaute ja avattu
 * selitys säilyvät, keskeytetty toisto ei valmista kappaletta, valmistumisilmoitus ja jatkopainikkeet
 * ilmestyvät samaan korttiin, fokus ei siirry, uudelleenkuuntelu ei muuta tallennetta ja jatkaminen
 * tapahtuu vain painalluksesta.
 */
export async function finishInSuccessCard(page: Page, { completion, primary, isMobile, thorough = true }: {
  completion: string;
  primary: string;
  isMobile: boolean;
  thorough?: boolean;
}) {
  const card = page.locator('.success-card');
  const successHeading = card.getByRole('heading', { level: 2 });
  await expect(successHeading).toBeVisible();
  const success = await successHeading.innerText();
  const explanation = card.locator('details.answer-explanation');
  const done = card.getByRole('heading', { level: 3, name: completion });
  const play = card.getByRole('button', { name: 'Soita valmis kappale' });
  const status = page.getByRole('status');
  const before = await saved(page);
  const url = page.url();

  if (await explanation.getAttribute('open') === null) {
    await press(page, card.getByText('Selitä, miksi tämä toimii', { exact: true }), isMobile);
  }
  await expect(explanation).toHaveAttribute('open', '');
  await expect(card.getByRole('button', { name: 'Kuuntele ratkaiseva kohta' })).toBeVisible();

  if (thorough) {
    // Keskeytetty toisto ei merkitse kappaletta valmiiksi.
    await press(page, play, isMobile);
    await expect(status).toHaveText(/^Soitetaan · valmista kappaletta/);
    await press(page, card.getByRole('button', { name: 'Pysäytä' }), isMobile);
    await expect(status).toHaveText('Valmiina kuunteluun.');
    await expect(done).toHaveCount(0);
    await expect(play).toBeVisible();
    expect(await saved(page)).toEqual(before);
  }

  await press(page, play, isMobile);
  await expect(status).toHaveText(/^Soitetaan · valmista kappaletta/);
  await expect(done).toBeVisible({ timeout: 30000 });

  // Sama kortti: palaute, avoin selitys ja jatkopainikkeet ovat yhdessä.
  await expect(successHeading).toHaveText(success);
  await expect(explanation).toHaveAttribute('open', '');
  const actions = card.locator('.song-actions button');
  await expect(actions.first()).toHaveText(primary);
  await expect(actions.first()).toHaveClass(/primary/);
  const again = card.getByRole('button', { name: 'Kuuntele uudelleen' });
  await expect(again).toBeVisible();
  await expect(again).not.toHaveClass(/primary/);
  await expect(page.locator('main h2')).toHaveCount(1);
  if (!isMobile) await expect(again).toBeFocused();
  const after = await saved(page);

  if (thorough) {
    // Uudelleenkuuntelu ei muuta suorituksia, eikä seuraava kappale käynnisty itsestään.
    await press(page, again, isMobile);
    await expect(status).toHaveText(/^Soitetaan · valmista kappaletta/);
    await press(page, card.getByRole('button', { name: 'Pysäytä' }), isMobile);
    await expect(done).toBeVisible();
    expect(await saved(page)).toEqual(after);
    await page.waitForTimeout(300);
    expect(page.url()).toBe(url);
  }
  return { before, after, primaryAction: actions.first() };
}
