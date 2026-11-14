import { expect, test } from '@playwright/test';

// Äänilaitetta ei avata testissä. Tarkistetaan todellinen AudioContextille annettu
// sävelkorkeus, myös väärissä vastauksissa ja eri oktaaveissa.
test('otelautaharjoitus soittaa jokaisen valitun kieli-nauha-paikan sävelen', async ({ page }) => {
  await page.addInitScript(() => {
    const frequencies: number[] = [];
    const state = window as Window & { __noteJourneyFrequencies: number[]; __noteJourneyStops: number };
    state.__noteJourneyFrequencies = frequencies;
    state.__noteJourneyStops = 0;
    class FakeAudioContext {
      state = 'running';
      currentTime = 0;
      destination = {};
      createGain() {
        return {
          gain: {
            setValueAtTime() {},
            linearRampToValueAtTime() {},
            exponentialRampToValueAtTime() {},
          },
          connect() {},
          disconnect() { state.__noteJourneyStops++; },
        };
      }
      createOscillator() {
        const frequency = { value: 0 };
        return {
          frequency,
          setPeriodicWave() {},
          connect() {},
          start() { frequencies.push(frequency.value); },
          stop() {},
        };
      }
      createPeriodicWave() { return {}; }
    }
    Object.defineProperty(window, 'AudioContext', { configurable: true, value: FakeAudioContext });
  });

  await page.goto('/kitaraharjoittelija.html');
  await page.getByRole('button', { name: /Sävelkorva ja otelauta/ }).click();
  await page.getByRole('button', { name: /Sävelten etsintä/ }).click();
  await expect(page.getByText('Valitsemasi sävel myös soi.')).toBeVisible();
  const board = page.locator('.note-journey .practice-board');
  const frequencies = () => page.evaluate(() =>
    (window as Window & { __noteJourneyFrequencies: number[] }).__noteJourneyFrequencies);

  // B-kielen 1. nauha: C4 = MIDI 60, oikea vastaus.
  await board.locator('button[data-string="1"][data-fret="1"]').click();
  await expect.poll(frequencies).toHaveLength(1);
  expect((await frequencies())[0]).toBeCloseTo(261.626, 2);
  await expect(page.getByText('Löydetty 1 / 3')).toBeVisible();

  // Ohut vapaa e: E4 = MIDI 64, väärä vastaus; silti kuuluu painetun paikan ääni.
  await board.locator('button[data-string="0"][data-fret="0"]').click();
  await expect.poll(frequencies).toHaveLength(2);
  expect((await frequencies())[1]).toBeCloseTo(329.628, 2);
  await expect(page.getByTestId('note-feedback')).toContainText('Valitsit sävelen E');
  await expect(page.getByText('Löydetty 1 / 3')).toBeVisible();

  // A-kielen 3. nauha: C3 = MIDI 48; sama sävelnimi mutta oktaavia matalampi.
  await board.locator('button[data-string="4"][data-fret="3"]').click();
  await expect.poll(frequencies).toHaveLength(3);
  expect((await frequencies())[2]).toBeCloseTo(130.813, 2);
  await expect(page.getByText('Löydetty 2 / 3')).toBeVisible();

  // Uudelleen painettu löytynyt sijainti ei kerrytä tulosta, mutta sävel kuuluu.
  await board.locator('button[data-string="4"][data-fret="3"]').click();
  await expect.poll(frequencies).toHaveLength(4);
  expect((await frequencies())[3]).toBeCloseTo(130.813, 2);
  await expect(page.getByText('Löydetty 2 / 3')).toBeVisible();

  // Harjoituksesta poistuminen pysäyttää myös viimeisen soittoäänen.
  await page.getByRole('button', { name: /Harjoitusvalikko/ }).click();
  await expect(page.getByRole('heading', { name: 'Mitä haluat harjoitella?' })).toBeVisible();
  const stops = await page.evaluate(() =>
    (window as Window & { __noteJourneyStops: number }).__noteJourneyStops);
  expect(stops).toBeGreaterThanOrEqual(4);
});
