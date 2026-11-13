import { test, expect } from '@playwright/test';

test.describe('Melodiaharjoitusten näkyvyys ja otelautakorostus', () => {
  test('pentatonisessa ensimmäinen kuuntelu on vain asteikko, melodia avautuu vasta sormituksessa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Wayfaring Stranger/ });
    await expect(melody).toHaveCount(0);
    await expect(page.getByRole('button', { name: /Toista asteikkoa jatkuvasti/ })).toBeVisible();

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toBeVisible();
    const summary = melody.locator('summary');
    await expect(summary).toContainText('Valinnainen melodiaharjoitus');
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await summary.click();
    await expect(melody.getByRole('heading', { name: 'Wayfaring Stranger' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await melody.getByRole('button', { name: 'Osa B' }).click();
    await expect(melody.locator('.practice-board')).toBeVisible();
    await summary.click();
    await expect(melody.locator('.practice-board')).toHaveCount(0);

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.getByRole('group', { name: 'Valitse melodiaharjoituksen osa' })).toHaveCount(0);
    await expect(melody.getByRole('button', { name: 'Osa A' })).toHaveCount(0);
    await expect(melody.getByRole('button', { name: 'Osa B' })).toHaveCount(0);
    await expect(melody.getByText('6 tahtia yhdistetyssä melodiassa')).toBeVisible();
    await expect(melody.getByRole('button', { name: '▶ Kuuntele koko melodia kerran' })).toBeVisible();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä otelaudan sävelvihjeet' }).click();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
    await expect(melody.locator('.melody-tab')).toBeVisible();

    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toHaveCount(0); // ei tuplakappaletta improvisoinnissa
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('3');
  });

  test('C-joonisen ensimmäisessä vaiheessa vain asteikko ja Ukko Nooa avautuu seuraavassa', async ({ page }) => {
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    await expect(melody).toHaveCount(0);
    await expect(page.locator('.practice-board .dot')).toHaveCount(8);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toBeVisible();
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await melody.locator('summary').click();
    await expect(melody.getByRole('heading', { name: 'Ukko Nooa' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Oma B → C -lisä' })).toBeVisible();
    await expect(melody.getByRole('button', { name: 'Näytä tabulatuuri' })).toBeVisible();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.getByRole('group', { name: 'Valitse melodiaharjoituksen osa' })).toHaveCount(0);
    await expect(melody.getByText('4 tahtia yhdistetyssä melodiassa')).toBeVisible();
    await expect(melody.getByRole('button', { name: '▶ Kuuntele koko melodia kerran' })).toBeVisible();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toHaveCount(0); // vertailussa ei ole kappaleharjoitusta
    await expect(page.getByRole('heading', { name: 'Vertaile sävelkeskuksia' })).toBeVisible();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();

    await expect(melody).toHaveCount(0); // muistivaiheessa jo koko Ukko Nooa
    await expect(page.getByRole('button', { name: '▶ Käynnistä sointupulssi' })).toBeVisible();
    expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:moodipolku:ionian:v1'))).toBe('4');
  });

  test('oma positionvaihtomelodia on suljettu, mutta improvisaatio ja asteikko säilyvät', async ({ page }) => {
    await page.addInitScript(() => {
      const defaults = {
        'musiikin-kartta:skaalapolku:v1': '4',
        'musiikin-kartta:skaalapolku:position-2:v1': '4',
        'musiikin-kartta:skaalapolku:bridge-1-2:v1': '1',
        'musiikin-kartta:skaalapolku:active-position:v1': 'bridge',
      };
      for (const [key, value] of Object.entries(defaults)) localStorage.setItem(key, value);
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Siirtymä kahden position välillä/ });
    await expect(melody).toBeVisible();
    await expect(melody.locator('.practice-board')).toHaveCount(0);
    await expect(page.getByRole('button', { name: '▶ Toista koko asteikko jatkuvasti' })).toBeVisible();
    await melody.locator('summary').click();
    await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody.locator('summary')).toContainText('melodia muistista');
    await melody.locator('summary').click();
    await expect(melody.getByRole('group', { name: 'Valitse melodiaharjoituksen osa' })).toHaveCount(0);
    await expect(melody.getByRole('button', { name: '▶ Kuuntele koko melodia kerran' })).toBeVisible();
    await expect(melody.getByText('4 tahtia yhdistetyssä melodiassa')).toBeVisible();
    await expect(melody.locator('.melody-tab')).toHaveCount(0);
    await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    await expect(melody).toHaveCount(0);
    await expect(page.locator('.backing-track-mixer')).toBeVisible();
  });

  test('avattu melodia korostaa soivan nauhan keltaisella ja pysähtyy kertatoistoon', async ({ page }) => {
    await page.clock.install();
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Moodit' }).click();
    await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
    const melody = page.getByRole('region', { name: /Melodiaharjoitus: Ukko Nooa/ });
    await melody.locator('summary').click();
    const play = melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' });
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    await page.clock.fastForward(180);
    await expect(melody.locator('.practice-board .playing .dot')).toHaveCount(1);
    await page.clock.fastForward(7500);
    await expect(play).toBeVisible();
    await expect(melody.locator('.practice-board .playing')).toHaveCount(0);
    await play.click();
    await expect(melody.getByRole('button', { name: '■ Pysäytä melodia' })).toBeVisible();
    await melody.locator('summary').click(); // sulkeminen pysäyttää myös äänen
    await melody.locator('summary').click();
    await expect(play).toBeVisible();
  });
});

// Issue #31: positioiden 2 ja 3 melodiat samalla MelodyPractice-rakenteella ja samassa
// opetusjärjestyksessä kuin positiossa 1.
test.describe('Pentatonisen positioiden 2 ja 3 melodiset harjoitukset', () => {
  const cases = [
    { position: '2', key: 'musiikin-kartta:skaalapolku:position-2:v1', title: 'Wayfaring Stranger · positio 2', bars: '6 tahtia',
      storage: { 'musiikin-kartta:skaalapolku:v1': '4' } },
    { position: '3', key: 'musiikin-kartta:skaalapolku:position-3:v1', title: 'Korkea vastaus', bars: '4 tahtia',
      storage: { 'musiikin-kartta:skaalapolku:v1': '4', 'musiikin-kartta:skaalapolku:position-2:v1': '4', 'musiikin-kartta:skaalapolku:bridge-1-2:v1': '4' } },
  ];
  for (const c of cases) {
    test(`positio ${c.position}: kuuntele → A/B → koko melodia muistista → improvisointi ilman melodiaa`, async ({ page }) => {
      await page.clock.install();
      await page.addInitScript(([storage, position]) => {
        if (sessionStorage.getItem('alustettu')) return;
        sessionStorage.setItem('alustettu', '1');
        for (const [k, v] of Object.entries(storage)) localStorage.setItem(k, v);
        localStorage.setItem('musiikin-kartta:skaalapolku:active-position:v1', position);
      }, [c.storage, c.position] as const);
      await page.goto('/kitaraharjoittelija.html');
      await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
      await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
      await expect(page.getByRole('heading', { name: `A-mollipentatoninen · positio ${c.position}` })).toBeVisible();
      const melody = page.getByRole('region', { name: `Melodiaharjoitus: ${c.title}` });

      // 1. Kuuntele ja tutustu: vain asteikko.
      await expect(page.locator('.melody-practice')).toHaveCount(0);
      await expect(page.getByRole('button', { name: /Toista asteikkoa jatkuvasti/ })).toBeVisible();

      // 2. Soita ylös ja alas: avattava A/B-harjoitus, tabulatuuri piilossa.
      await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
      await expect(melody).toBeVisible();
      await expect(melody.locator('summary').first()).toContainText('Valinnainen melodiaharjoitus');
      await expect(melody.locator('.practice-board')).toHaveCount(0);
      await melody.locator('summary').first().click();
      await expect(melody.getByRole('button', { name: 'Osa A' })).toHaveAttribute('aria-pressed', 'true');
      await expect(melody.getByRole('button', { name: 'Osa B' })).toBeVisible();
      await expect(melody.locator('.melody-tab')).toHaveCount(0);
      await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);
      if (c.position === '2') {
        // Vertailu positioon 1 on suljettu avattava osa: neljä säveltä, kaksi vaihtaa kieltä.
        const compare = melody.locator('details.melody-compare');
        await expect(compare.locator('table')).toBeHidden();
        await compare.locator('summary').click();
        await expect(compare.locator('tbody tr')).toHaveCount(4);
        await expect(compare.locator('tbody tr.moved')).toHaveCount(2);
        await expect(compare.locator('tbody tr').first()).toContainText('E4');
        await expect(compare.locator('tbody tr').first()).toContainText('B-kieli, 5. nauha');
        await expect(compare.locator('tbody tr').first()).toContainText('G-kieli, 9. nauha');
      } else {
        await expect(melody.locator('details.melody-compare')).toHaveCount(0);
      }
      // Kertatoisto: soiva sävel korostuu ja toisto pysähtyy itsestään.
      const play = melody.getByRole('button', { name: '▶ Kuuntele valittu melodia kerran' });
      await play.click();
      await page.clock.fastForward(200);
      await expect(melody.locator('.practice-board .playing .dot')).toHaveCount(1);
      await expect(melody.locator('.melody-now')).toContainText(/Nyt soi [A-G]/);
      await page.clock.fastForward(9000);
      await expect(play).toBeVisible();
      await expect(melody.locator('.practice-board .playing')).toHaveCount(0);
      await melody.getByRole('button', { name: 'Näytä tabulatuuri' }).click();
      await expect(melody.locator('.melody-tab')).toBeVisible();

      // 3. Soita muistista: koko melodia, ei A/B-valintaa, vihjeet ja tabulatuuri piilossa.
      await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
      await expect(melody.locator('summary').first()).toContainText('melodia muistista');
      await melody.locator('summary').first().click();
      await expect(melody.getByRole('group', { name: 'Valitse melodiaharjoituksen osa' })).toHaveCount(0);
      await expect(melody.getByText(`${c.bars} yhdistetyssä melodiassa`)).toBeVisible();
      await expect(melody.locator('.melody-tab')).toHaveCount(0);
      await expect(melody.locator('.practice-board .dot')).toHaveCount(0);
      await expect(melody.locator('details.melody-compare')).toHaveCount(0);
      const whole = melody.getByRole('button', { name: '▶ Kuuntele koko melodia kerran' });
      await whole.click();
      await page.clock.fastForward(200);
      await expect(melody.locator('.practice-board .playing .dot'), 'soivan sävelen korostus säilyy').toHaveCount(1);
      await expect(melody.locator('.practice-board .dot')).toHaveCount(1);
      await melody.getByRole('button', { name: '■ Pysäytä melodia' }).click();
      await melody.getByRole('button', { name: 'Näytä otelaudan sävelvihjeet' }).click();
      await expect(melody.locator('.practice-board .dot')).not.toHaveCount(0);

      // 4. Improvisoi: ei melodiaharjoitusta, tausta näkyy.
      await page.getByRole('button', { name: /Harjoiteltu, seuraava vaihe/ }).click();
      await expect(page.locator('.melody-practice')).toHaveCount(0);
      await expect(page.locator('.backing-track-mixer')).toBeVisible();
      expect(await page.evaluate(key => localStorage.getItem(key), c.key)).toBe('3');
      // Position 1 eteneminen säilyy.
      expect(await page.evaluate(() => localStorage.getItem('musiikin-kartta:skaalapolku:v1'))).toBe('4');
    });
  }

  test('360 px: positioiden 2 ja 3 melodian otelauta mahtuu näkyviin', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.addInitScript(() => {
      for (const [k, v] of Object.entries({ 'musiikin-kartta:skaalapolku:v1': '4', 'musiikin-kartta:skaalapolku:position-2:v1': '4',
        'musiikin-kartta:skaalapolku:bridge-1-2:v1': '4', 'musiikin-kartta:skaalapolku:position-3:v1': '1' })) localStorage.setItem(k, v);
      localStorage.setItem('musiikin-kartta:skaalapolku:active-position:v1', '3');
    });
    await page.goto('/kitaraharjoittelija.html');
    await page.getByRole('button', { name: /Skaalat ja moodit/ }).click();
    await page.locator('.scale-tracks .learning-card').filter({ hasText: 'Pentatoniset' }).click();
    const melody = page.getByRole('region', { name: 'Melodiaharjoitus: Korkea vastaus' });
    await melody.locator('summary').first().click();
    const box = melody.locator('.fret-scroll');
    await expect(box).toBeVisible();
    expect(await box.evaluate(el => el.scrollWidth <= el.clientWidth + 1)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
});
