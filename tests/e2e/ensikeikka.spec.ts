import { expect, test, type Page } from '@playwright/test';

const gamePath = '/pelit/ensikeikka/';
const progressKey = 'musiikin-kartta:ensikeikka';
const playing = /^Soitetaan · /;
const songs = [
  { id: 1, title: 'Löydä kotiin', ending: 'B', tempo: 100, resolution: /G♯.*A:han/, harmony: /E7.*Am/ },
  { id: 2, title: 'Uusi kotisävel', ending: 'C', tempo: 100, resolution: /F♯.*G:hen/, harmony: /D7.*G-duuri/ },
  { id: 3, title: 'Melodia löytää perille', ending: 'A', tempo: 108, resolution: /B nousee.*C:hen/, harmony: /G7.*C-duuri/ },
  { id: 4, title: 'Mollin maisemat', ending: 'B', tempo: 88, resolution: /D♯.*E:hen/, harmony: /B7.*Em/ },
  { id: 5, title: 'Ensimmäinen finaali', ending: 'C', tempo: 116, resolution: /C♯.*D:hen/, harmony: /A7.*D-duuri/ },
] as const;

type Playback = { offset: number; duration: number; hasAudio: boolean; stopped: boolean };

declare global {
  interface Window { ensikeikkaPlayback: Playback[] }
}

// Tallenna oikeiden Web Audio -solmujen kutsut. Selain tuottaa äänen ja lähettää ended-tapahtuman itse.
async function observePlayback(page: Page) {
  await page.addInitScript(() => {
    window.ensikeikkaPlayback = [];
    const observed = new WeakMap<AudioBufferSourceNode, Playback>();
    const start = AudioBufferSourceNode.prototype.start;
    const stop = AudioBufferSourceNode.prototype.stop;
    AudioBufferSourceNode.prototype.start = function (when, offset = 0, duration) {
      start.call(this, when, offset, duration);
      const buffer = this.buffer;
      if (!buffer) return;
      const firstSample = Math.round(offset * buffer.sampleRate);
      const hasAudio = buffer.getChannelData(0).subarray(firstSample, firstSample + 1024)
        .some(sample => Math.abs(sample) > 0.0001);
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
const playbackStatus = (page: Page) => page.getByRole('status');
const lastPlayback = (page: Page) => page.evaluate(() => window.ensikeikkaPlayback.at(-1));
const savedProgress = (page: Page) => page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? 'null'), progressKey);

for (const song of songs) {
  test(`Ensikeikka ${song.id}: ${song.title}, ratkaisu ja tallennettu suoritus`, async ({ page }) => {
    test.setTimeout(65000);
    await observePlayback(page);
    const previous = songs.slice(0, song.id - 1).map(entry => entry.id);
    await page.goto(`${gamePath}#keikkalista`);
    if (previous.length) {
      await page.evaluate(({ key, completed }) => {
        localStorage.setItem(key, JSON.stringify({ version: 1, completed }));
      }, { key: progressKey, completed: previous });
      await page.reload();
    }

    await expect(page.getByText(`${previous.length} / 5 kappaletta suoritettu`, { exact: true })).toBeVisible();
    await button(page, previous.length ? 'Jatka keikkaa 1' : 'Aloita keikka 1').click();
    await expect(page.getByRole('heading', { name: `Kappale ${song.id} – ${song.title}` })).toBeVisible();
    const explanation = page.getByText('Miksi tämä vastaus?', { exact: true });
    const unfinished = button(page, 'Kuuntele keskeneräinen kappale');
    const check = button(page, 'Tarkista valintani');
    await expect(check).toHaveCount(0);
    await expect(explanation).toHaveCount(0);
    await unfinished.click();
    await expect(playbackStatus(page)).toHaveText(playing);
    expect(await lastPlayback(page)).toMatchObject({ offset: 0, hasAudio: true });

    await expect(check).toBeVisible({ timeout: 16000 });
    await expect(check).toBeDisabled();
    await expect(explanation).toHaveCount(0);
    for (const ending of ['A', 'B', 'C']) await expect(button(page, `Lopetus ${ending}`)).toBeVisible();

    if (song.id === 5) {
      await button(page, 'Lopetus B').click();
      await expect(check).toBeEnabled({ timeout: 9000 });
      await check.click();
      await expect(page.getByRole('heading', { name: 'Ei vielä. Kokeile uudelleen!' })).toBeFocused();
      await expect(explanation).toHaveCount(0);
      await expect(page.getByText(/C♯|johtosävel/)).toHaveCount(0);
      expect(await savedProgress(page)).toEqual({ version: 1, completed: previous });
    }

    await button(page, `Lopetus ${song.ending}`).click();
    await expect(playbackStatus(page)).toHaveText(`Soitetaan · Lopetus ${song.ending}`);
    expect((await lastPlayback(page))?.offset).toBeCloseTo(8 * 60 / song.tempo);
    await expect(check).toBeDisabled();
    await expect(check).toBeEnabled({ timeout: 9000 });
    await check.click();
    const correct = page.getByRole('heading', { name: 'Oikein! Löysit kotiin!' });
    await expect(correct).toBeFocused();
    const excerpt = button(page, 'Kuuntele ratkaiseva kohta');
    await expect(explanation).toBeVisible();
    await expect(excerpt).toBeHidden();
    await explanation.click();
    await expect(page.getByText(song.resolution)).toBeVisible();
    await expect(page.getByText(song.harmony)).toBeVisible();
    await excerpt.click();
    await expect(playbackStatus(page)).toHaveText('Soitetaan · ratkaisevaa kohtaa');
    const recorded = await lastPlayback(page);
    expect(recorded).toMatchObject({ hasAudio: true, stopped: false });
    expect(recorded?.offset).toBeCloseTo(8 * 60 / song.tempo);
    expect(recorded?.duration).toBeCloseTo(16 * 60 / song.tempo + .36);
    await expect(excerpt).toBeVisible({ timeout: 9000 });
    await expect(correct).toBeVisible();
    const savedBeforePerformance = previous.length ? { version: 1, completed: previous } : null;
    expect(await savedProgress(page)).toEqual(savedBeforePerformance);

    await button(page, 'Soita valmis kappale').click();
    await expect(playbackStatus(page)).toHaveText(playing);
    expect(await lastPlayback(page)).toMatchObject({ offset: 0, hasAudio: true });
    const complete = song.id === 5 ? 'Keikka valmis!' : 'Kappale valmis!';
    await expect(page.getByRole('heading', { name: complete })).toBeFocused({ timeout: 16000 });
    expect(await savedProgress(page)).toEqual({ version: 1, completed: [...previous, song.id] });
    await expect(explanation).toBeVisible();
    const next = songs.find(entry => entry.id === song.id + 1);
    if (next) {
      await button(page, 'Seuraava kappale').click();
      await expect(page.getByRole('heading', { name: `Kappale ${next.id} – ${next.title}` })).toBeVisible();
    } else {
      await expect(button(page, 'Seuraava kappale')).toHaveCount(0);
      await expect(page.getByText('Suoritit 5 kappaletta.')).toBeVisible();
    }
  });
}

test('Ensikeikka keskeyttää äänen palatessa ja säilyttää valmiit kappaleet uudelleenlatauksessa', async ({ page }) => {
  await observePlayback(page);
  await page.goto(`${gamePath}#settilista`);
  await page.evaluate(key => {
    localStorage.setItem(key, JSON.stringify({ version: 1, completed: [1, 2, 3, 4, 5] }));
  }, progressKey);
  await page.reload();
  const setlist = page.getByRole('list', { name: 'Settilista' });
  await expect(setlist.getByText('Suoritettu', { exact: true })).toHaveCount(5);
  await button(page, 'Kuuntele kappale 5').click();
  await expect(page.getByRole('heading', { name: 'Keikka valmis!' })).toBeFocused();
  const explanation = page.getByText('Miksi tämä vastaus?', { exact: true });
  await explanation.click();
  await button(page, 'Kuuntele ratkaiseva kohta').click();
  await expect(playbackStatus(page)).toHaveText('Soitetaan · ratkaisevaa kohtaa');
  await explanation.click();
  await expect(playbackStatus(page)).toHaveText('Valmiina kuunteluun.');
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });

  const replay = button(page, 'Kuuntele uudelleen');
  await replay.click();
  await expect(playbackStatus(page)).toHaveText(playing);
  await button(page, 'Pysäytä').click();
  await expect(replay).toBeVisible();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });
  await replay.click();
  await expect(playbackStatus(page)).toHaveText(playing);
  await button(page, 'Palaa settilistaan').click();
  await expect(setlist).toBeVisible();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });

  await button(page, 'Harjoittele kappaletta 2').click();
  await button(page, 'Kuuntele keskeneräinen kappale').click();
  await expect(playbackStatus(page)).toHaveText(playing);
  await page.getByRole('link', { name: 'Takaisin keikkalistaan', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Kotikulmien keikat' })).toBeFocused();
  expect(await lastPlayback(page)).toMatchObject({ stopped: true });
  await expect(setlist.getByText('Suoritettu', { exact: true })).toHaveCount(5);
  expect(await savedProgress(page)).toEqual({ version: 1, completed: [1, 2, 3, 4, 5] });
});
