import { expect, test, type Page } from '@playwright/test';

const topicPath = '/oppi/savelnimet/index.html';
const intervalsPath = '/oppi/savelnimet/savelet-ja-intervallit.html';
const guitarPath = '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html';
const practicePath = '/oppi/savelnimet/siirra-yhta-sormea.html';
const topicName = 'Sävelnimet ja sointumerkinnät';
const readingKey = 'musiikin-kartta:luvut';
const backNavigation = (page: Page) => page.getByRole('navigation', { name: 'Paluunavigointi' });
const back = (page: Page) => backNavigation(page).getByRole('link');
const exactBack = (page: Page, name: string) => backNavigation(page).getByRole('link', { name, exact: true });
const topSteps = (page: Page) => page.locator('nav.study-steps.study-steps--top');
const bottomSteps = (page: Page) => page.locator('nav.study-steps.study-steps--bottom');
const nextStep = (page: Page, name: string) => topSteps(page).getByRole('link', { name, exact: true });

test('pääaiheen kortti avaa oman sivunsa ja selaimen paluu löytää kortin', async ({ page }) => {
  await page.goto('/index.html#oppimisaiheet');
  const card = page.getByRole('link', { name: new RegExp(topicName) });
  await expect(card).toHaveAttribute('href', 'oppi/savelnimet/index.html');
  await expect(page.getByRole('link', { name: 'Sävelet ja intervallit', exact: true })).toHaveCount(0);
  await expect(page.getByText('H- ja B-sävelnimet', { exact: true })).toHaveCount(0);
  await card.focus();
  await expect(card).toHaveCSS('outline-style', 'solid');
  await card.press('Enter');
  await expect(page).toHaveURL(topicPath);
  await expect(page.getByRole('heading', { level: 1, name: topicName })).toBeVisible();
  await page.getByRole('link', { name: /^Sävelet ja intervallit/ }).click();
  await expect(page).toHaveURL(intervalsPath);
  await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
  await expect(page.locator('.chapter')).toHaveCount(1);
  await expect(page.getByText(/^Soita A-kielen 3\. nauha \(C\), D-kielen/)).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Asteikot', exact: true })).toHaveCount(0);
  await page.goBack();
  await expect(page).toHaveURL(topicPath);
  await page.goBack();
  await expect(card).toBeFocused();
});

test('oppitunneilla on oma sisältö, toimiva ääni ja reitit aiheeseen', async ({ page }) => {
  await page.goto(topicPath);
  await page.getByRole('link', { name: /Kitaran kielet ja sointumerkinnät/ }).click();
  await expect(page).toHaveURL(guitarPath);
  await expect(page.getByRole('img', { name: /^C: paksu E-kieli/ })).toBeVisible();
  await expect(page.getByRole('img', { name: /^G: paksu E-kieli/ })).toBeVisible();
  await nextStep(page, 'Seuraava: Sävelet ja intervallit').click();
  await expect(page).toHaveURL(intervalsPath);
  const audio = page.locator('audio');
  await audio.evaluate(player => {
    const media = player as HTMLAudioElement;
    media.muted = true;
    return media.play();
  });
  await expect.poll(() => audio.evaluate(player => (player as HTMLAudioElement).currentTime)).toBeGreaterThan(0);
  const hNote = page.locator('#h-savelnimi');
  await expect(hNote).toContainText('H ja B');
  await hNote.getByRole('link', { name: 'Lue, mistä H-nimi tuli' }).click();
  await expect(page).toHaveURL('/book/h-savelnimen-alkupera.html');
  await expect(page.getByRole('link', { name: /^Christina Kwon · Saksalainen urkutabulatuuri/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sävelet ja intervallit Oppimiskartassa' }))
    .toHaveAttribute('href', '../oppi/savelnimet/savelet-ja-intervallit.html#h-savelnimi');
  await page.goBack();
  await expect(page).toHaveURL(intervalsPath);
  await nextStep(page, 'Seuraava: Siirrä yhtä sormea').click();
  await expect(page).toHaveURL(practicePath);
  await expect(page.getByRole('heading', { level: 1, name: /Siirrä yhtä sormea/ })).toBeVisible();
  await expect(page.getByText(/^Soita A-kielen 3\. nauha/)).toBeVisible();
  await exactBack(page, 'Sävelnimiin ja sointumerkintöihin').click();
  await expect(page).toHaveURL(topicPath);
  await exactBack(page, 'Oppimiskarttaan').click();
  await expect(page).toHaveURL('/index.html#aihe-nuotit');
  await expect(page.locator('#aihe-nuotit')).toBeFocused();
});

test('jatkaminen avaa uuden lukusivun ja jakaa lukumerkinnän teoriaoppaan kanssa', async ({ page }) => {
  await page.goto('/index.html');
  await page.evaluate(key => {
    localStorage.setItem(key, JSON.stringify(['pulssi-ja-komppi', 'sointukierrot', 'musiikki-on-kieli']));
  }, readingKey);
  await page.reload();
  await page.getByRole('link', { name: 'Jatka oppimista · Sävelet ja intervallit' }).click();
  await expect(page).toHaveURL(intervalsPath);
  await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await page.goto('/book/osa-2.html#savelet-ja-intervallit');
  await expect(page.locator('#savelet-ja-intervallit').getByRole('button', { name: /Luku tehty/ }))
    .toHaveAttribute('aria-pressed', 'true');
  await page.goto('/book/osa-2.html?aihe=aihe-nuotit#h-savelnimi');
  await expect(page.locator('#h-savelnimi')).toBeVisible();
  await page.getByRole('link', { name: 'Takaisin aiheeseen' }).click();
  await expect(page).toHaveURL(topicPath);
});

test('aihe, oppitunnit ja harjoitus mahtuvat 320 pikselin näyttöön', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  for (const url of [topicPath, intervalsPath, guitarPath, practicePath]) {
    await page.goto(url);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth), url).toBeLessThanOrEqual(320);
  }
});

const topics = [
  ['kitara', 'kitara', 'Kitaran perusteet', 'Kitaran perusteisiin'],
  ['rytmi', 'rytmi', 'Rytmi', 'Rytmiin'],
  ['nuotit', 'savelnimet', topicName, 'Sävelnimiin ja sointumerkintöihin'],
  ['korva', 'korva', 'Sävelkorva ja melodia', 'Sävelkorvaan ja melodiaan'],
  ['otelauta', 'otelauta', 'Otelauta', 'Otelautaan'],
  ['soinnut', 'soinnut', 'Soinnut ja harmonia', 'Sointuihin ja harmoniaan'],
  ['asteikot', 'asteikot', 'Asteikot ja moodit', 'Asteikkoihin ja moodeihin'],
  ['kappaleet', 'kappaleet', 'Kappaleet ja oma musiikki', 'Kappaleisiin ja omaan musiikkiin'],
] as const;

const guitarExercises = [
  ['savelesta-sointuun', 'Sävelestä sointuun'],
  ['vaihto-ja-sointukartta', 'Sointuvaihdot ja sointukartta'],
  ['sointukierrot', 'Neljä otetta ja ensimmäinen kappale'],
  ['soita-ensin-basso', 'Soita ensin basso'],
  ['mihin-kierto-paattyy', 'Mihin sointukierto päättyy?'],
].map(([slug, title]) => ({ path: '/oppi/kitara/' + slug + '.html', title }));

for (const [topicIndex, [anchor, slug, title, backName]] of topics.entries()) {
  test(title + ' · jokainen askel ja resurssi löytyy', async ({ page, request }) => {
    const map = '/index.html#aihe-' + anchor;
    const topic = '/oppi/' + slug + '/index.html';
    await page.goto(map);
    await page.locator('#aihe-' + anchor).click();
    await expect(page).toHaveURL(topic);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    let items = guitarExercises;
    if (slug === 'kitara') {
      await expect(page.locator('.study-choice, [data-study-total]')).toHaveCount(0);
    } else {
      await expect(page.getByText('Aloita tästä', { exact: true })).toBeVisible();
      await expect(back(page)).toHaveCount(1);
      await expect(exactBack(page, 'Oppimiskarttaan')).toHaveAttribute('href', '../../index.html#aihe-' + anchor);
      await expect(page.locator('a[href="../../index.html#aihe-' + anchor + '"]')).toHaveCount(1);
      await expect(page.locator('a.study-back')).toBeVisible();
      await expect(page.getByRole('link', { name: 'Teoriaoppaan kaikki osat' })).toHaveAttribute('href', '../../book/index.html');
      const choices = page.locator('a.study-choice');
      expect(await choices.count()).toBeGreaterThanOrEqual(2);
      items = await choices.evaluateAll(nodes => nodes.map(node => ({
        path: new URL((node as HTMLAnchorElement).href).pathname,
        title: node.querySelector('.study-title')!.textContent!.trim().replace(/^Harjoitus · /, ''),
      })));
    }
    const audio = new Set<string>();
    for (const [index, { path, title: itemTitle }] of items.entries()) {
      expect((await page.goto(path))?.ok(), path).toBe(true);
      await expect(page.getByRole('heading', { level: 1, name: itemTitle, exact: true }), path).toBeVisible();
      const number = String(index + 1).padStart(2, '0');
      const total = String(items.length).padStart(2, '0');
      await expect(page.locator('.study-meta'), path).toHaveText(new RegExp('^(Oppitunti|Harjoitus) ' + number + ' / ' + total));
      await expect(back(page), path).toHaveCount(1);
      await expect(exactBack(page, backName), path).toHaveAttribute('href', 'index.html');
      const backBeforeTitle = await backNavigation(page).evaluate(nav =>
        Boolean(nav.compareDocumentPosition(document.querySelector('h1')!) & Node.DOCUMENT_POSITION_FOLLOWING));
      expect(backBeforeTitle, path).toBe(true);

      const navigation = [topSteps(page), bottomSteps(page)];
      const names = await Promise.all(navigation.map(nav => nav.getAttribute('aria-label')));
      expect(names.every(Boolean), path).toBe(true);
      expect(new Set(names).size, path).toBe(2);
      const ordered = await page.locator('main').evaluate(main => {
        const precedes = (first: Element, second: Element) =>
          Boolean(first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING);
        const top = main.querySelector('.study-steps--top')!;
        const bottom = main.querySelector('.study-steps--bottom')!;
        const button = main.querySelector('.done-toggle')!;
        const goal = main.querySelector(':scope > .lead');
        const sources = main.querySelector('.sources');
        return precedes(main.querySelector('h1')!, top) && (!goal || precedes(goal, top)) &&
          precedes(top, button) && precedes(button, bottom) && (!sources || precedes(bottom, sources));
      });
      expect(ordered, path).toBe(true);

      const earlier = items[index - 1];
      const later = items[index + 1];
      const nextTopic = topics[topicIndex + 1];
      for (const nav of navigation) {
        const previous = nav.locator('a[rel="prev"]');
        if (earlier) {
          await expect(previous, path).toHaveAccessibleName('Edellinen: ' + earlier.title);
          await expect(previous, path).toHaveAttribute('href', earlier.path.split('/').at(-1)!);
        } else {
          await expect(previous, path).toHaveCount(0);
        }
        const next = nav.locator('a[rel="next"]');
        if (later) {
          await expect(next, path).toHaveAccessibleName('Seuraava: ' + later.title);
          await expect(next, path).toHaveAttribute('href', later.path.split('/').at(-1)!);
        } else if (nextTopic) {
          const [nextAnchor, nextSlug, nextTitle] = nextTopic;
          await expect(next, path).toHaveAccessibleName('Seuraava aihe: ' + nextTitle);
          await expect(next, path).toHaveAttribute('href', `../${nextSlug}/index.html?polku=aihe-${nextAnchor}`);
        } else {
          await expect(next, path).toHaveCount(0);
          await expect(nav.locator('.study-step-map'), path).toHaveAttribute('href', '../../index.html#aihe-' + anchor);
        }
      }
      await expect(bottomSteps(page).locator('.study-step-back'), path).toHaveAccessibleName(backName);
      await expect(bottomSteps(page).locator('.study-step-back'), path).toHaveAttribute('href', 'index.html');
      const media = await page.locator('audio source').evaluateAll(sources => sources.map(item => (item as HTMLSourceElement).src));
      media.forEach(src => audio.add(src));
      expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(page.viewportSize()!.width);
    }
    for (const resource of audio) {
      const response = await request.head(resource);
      expect(response.ok(), resource).toBe(true);
      expect(response.headers()['content-type'], resource).toMatch(/^(audio|video)\//);
      await response.dispose();
    }
    await bottomSteps(page).getByRole('link', { name: backName, exact: true }).click();
    await expect(page).toHaveURL(topic);
    if (slug === 'kitara') {
      await page.getByRole('link', { name: 'Siirry Oppimiskarttaan', exact: true }).first().click();
      await expect(page).toHaveURL('/index.html#oppimisaiheet');
    } else {
      await exactBack(page, 'Oppimiskarttaan').click();
      await expect(page).toHaveURL(map);
    }
  });
}

for (const [index, [, slug, title]] of topics.slice(0, -1).entries()) {
  const [nextAnchor, nextSlug, nextTitle] = topics[index + 1];
  test(title + ' · seuraava pääaihe avautuu ylhäältä ja alhaalta ilman suorituksia', async ({ page }) => {
    await page.goto('/oppi/' + slug + '/index.html');
    const choices = page.locator('.study-choice');
    const total = await choices.count();
    const lastUrl = slug === 'kitara'
      ? guitarExercises.at(-1)!.path
      : await choices.last().evaluate(link => (link as HTMLAnchorElement).href);
    const nextPath = '/oppi/' + nextSlug + '/index.html?polku=aihe-' + nextAnchor;
    const mapCard = page.locator('#aihe-' + nextAnchor);

    await page.goto('/index.html');
    if (index + 1 >= 3) await expect(mapCard).toBeHidden();
    await page.goto(lastUrl);
    for (const steps of [topSteps(page), bottomSteps(page)]) {
      const progress = steps.locator('[data-boundary-progress]');
      if (slug === 'kitara') await expect(progress).toHaveCount(0);
      else await expect(progress).toHaveText(`0/${total} sisältöä tehty`);
      await steps.getByRole('link', { name: 'Seuraava aihe: ' + nextTitle, exact: true }).click();
      await expect(page).toHaveURL(nextPath);
      await expect(page.getByRole('heading', { level: 1, name: nextTitle, exact: true })).toBeVisible();
      await page.goBack();
      await expect(page).toHaveURL(lastUrl);
    }
    expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBeNull();
    await page.goto('/index.html');
    await expect(mapCard).toBeVisible();
    await expect(mapCard.locator('.topic-status')).toHaveText(/^0\/\d+ sisältöä tehty$/);
    await page.reload();
    await expect(mapCard).toBeVisible();
  });
}

test('vanhan kitaratehtävän kuittaus säilyy palatessa ilman yhteistä suoritustilaa', async ({ page }) => {
  const chapter = '/oppi/kitara/sointukierrot.html';
  const practice = '/oppi/kitara/soita-ensin-basso.html';
  const last = '/oppi/kitara/mihin-kierto-paattyy.html';
  await page.goto(chapter);
  await page.getByRole('button', { name: 'Merkitse luku tehdyksi' }).click();
  await expect(page).toHaveURL(chapter);
  await nextStep(page, 'Seuraava: Soita ensin basso').press('Enter');
  await expect(page).toHaveURL(practice);
  await page.getByRole('button', { name: 'Merkitse harjoitus tehdyksi' }).click();
  await nextStep(page, 'Seuraava: Mihin sointukierto päättyy?').press('Enter');
  await expect(page).toHaveURL(last);

  const progress = page.locator('[data-boundary-progress]');
  await expect(progress).toHaveCount(0);
  await page.getByRole('button', { name: 'Merkitse oppitunti tehdyksi' }).click();
  await expect(page).toHaveURL(last);
  await expect(page.getByRole('button', { name: '✓ Oppitunti tehty' })).toHaveAttribute('aria-pressed', 'true');
  await bottomSteps(page).getByRole('link', { name: 'Edellinen: Soita ensin basso', exact: true }).click();
  await expect(page).toHaveURL(practice);
  await expect(page.getByRole('button', { name: '✓ Harjoitus tehty' })).toHaveAttribute('aria-pressed', 'true');
  await page.goBack();
  await expect(page).toHaveURL(last);
  await page.getByRole('button', { name: '✓ Oppitunti tehty' }).click();
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), readingKey))
    .toEqual(['sointukierrot', 'harjoitus:soita-ensin-basso']);
});

test('viimeinen sisältö tarjoaa paluun kartalle ja näyttää oppimispolun valmistumisen vasta kaikkien aiheiden jälkeen', async ({ page }) => {
  await page.goto('/index.html');
  const keys = await page.locator('.topic-card[data-study-items]').evaluateAll(cards => cards.map(card =>
    (card as HTMLElement).dataset.studyItems!.split(' ')));
  await page.goto('/oppi/kappaleet/index.html');
  const last = await page.locator('.study-choice').last().evaluate(link => (link as HTMLAnchorElement).href);
  await page.goto(last);

  const boundary = page.locator('[data-boundary-progress]');
  const path = page.locator('[data-path-progress]:visible');
  const topicDone = '✓ Aihe käyty läpi';
  const pathDone = '✓ Oppimispolku käyty läpi';
  const empty = `0/${keys.at(-1)!.length} sisältöä tehty`;
  await expect(boundary).toHaveText([empty, empty]);
  await expect(path).toHaveCount(0);

  for (const nav of [topSteps(page), bottomSteps(page)]) {
    await expect(nav.locator('[rel="next"]')).toHaveCount(0);
    await nav.getByRole('link', { name: 'Oppimiskarttaan', exact: true }).click();
    await expect(page).toHaveURL('/index.html#aihe-kappaleet');
    await expect(page.locator('#aihe-kappaleet')).toBeVisible();
    await page.goBack();
    await expect(page).toHaveURL(last);
  }

  await page.evaluate(({ key, ids }) => localStorage.setItem(key, JSON.stringify(ids)), { key: readingKey, ids: keys.at(-1)! });
  await page.reload();
  await expect(boundary).toHaveText([topicDone, topicDone]);
  await expect(path).toHaveCount(0);

  await page.evaluate(({ key, ids }) => localStorage.setItem(key, JSON.stringify(ids)), { key: readingKey, ids: keys.flat() });
  await page.reload();
  await expect(boundary).toHaveText([topicDone, topicDone]);
  await expect(path).toHaveText([pathDone, pathDone]);
  await page.locator('button.done-toggle').click();
  await expect(path).toHaveCount(0);
  const partial = `${keys.at(-1)!.length - 1}/${keys.at(-1)!.length} sisältöä tehty`;
  await expect(boundary).toHaveText([partial, partial]);
});

for (const width of [320, 390, 768, 1440]) {
  test('sisällön ylä- ja alanavigointi mahtuu leveydellä ' + width + ' px myös suurennetulla tekstillä', async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      '/oppi/kitara/savelesta-sointuun.html',
      '/oppi/kitara/vaihto-ja-sointukartta.html',
      '/oppi/kitara/sointukierrot.html',
      '/oppi/kitara/soita-ensin-basso.html',
      '/oppi/kitara/mihin-kierto-paattyy.html',
      '/oppi/rytmi/alas-ylos-yhdella-soinnulla.html',
      '/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html',
      '/oppi/kappaleet/oma-kappale.html',
      '/oppi/kappaleet/aanita-kahdeksan-tahtia.html',
    ]) {
      await page.goto(route);
      for (const scale of ['', '200%']) {
        const context = route + ' · ' + width + ' px · ' + (scale || '100%');
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, scale);
        const fits = await page.locator('.study-up, .study-steps--top, .study-steps--bottom').evaluateAll(navs =>
          navs.map(nav => {
            const navBox = nav.getBoundingClientRect();
            return [...nav.querySelectorAll('a')].every(link => {
              const box = link.getBoundingClientRect();
              const text = document.createRange();
              text.selectNodeContents(link);
              return box.height >= 44 && box.left >= navBox.left - 1 && box.right <= navBox.right + 1 &&
                [...text.getClientRects()].every(line =>
                  line.left >= box.left - 1 && line.right <= box.right + 1 &&
                  line.top >= box.top - 1 && line.bottom <= box.bottom + 1);
            });
          }));
        expect(fits, context).toEqual([true, true, true]);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), context).toBeLessThanOrEqual(width);
      }
    }
  });
}

for (const width of [320, 390, 768, 1024, 1440]) {
  test('kaikkien aiheiden sisältökortit kohdistuvat leveydellä ' + width + ' px myös suurennetulla tekstillä', async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const [, slug, title] of topics.slice(1)) {
      await page.goto('/oppi/' + slug + '/index.html');
      for (const scale of ['', '200%']) {
        const context = title + ' · ' + width + ' px · ' + (scale || '100%');
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, scale);
        expect(await page.evaluate(() => document.documentElement.scrollWidth), context).toBeLessThanOrEqual(width);

        const boxes = await page.locator('a.study-choice').evaluateAll(cards => cards.map(card => {
          const rect = card.getBoundingClientRect();
          const style = getComputedStyle(card);
          const parts = ['.study-number', '.study-title', '.study-description', '.study-arrow']
            .map(selector => card.querySelector(selector)!);
          const status = card.querySelector('[data-study-status]');
          const textFits = parts.every(part => {
            const range = document.createRange();
            range.selectNodeContents(part);
            return [...range.getClientRects()].every(line =>
              line.left >= rect.left - 1 && line.right <= rect.right + 1 &&
              line.top >= rect.top - 1 && line.bottom <= rect.bottom + 1);
          });
          return {
            size: [rect.width, rect.height],
            offsets: parts.flatMap(part => {
              const box = part.getBoundingClientRect();
              return [box.left - rect.left, box.top - rect.top];
            }),
            style: [style.backgroundColor, style.borderColor, style.borderRadius, style.padding],
            title: parts[1].textContent!.trim(),
            description: parts[2].textContent!.trim(),
            status: status?.textContent?.trim(),
            statusTop: status ? status.getBoundingClientRect().top - rect.top : null,
            textFits,
          };
        }));
        expect(boxes.length, context).toBeGreaterThanOrEqual(2);
        expect(boxes.some(box => box.title.startsWith('Harjoitus · ')), context).toBe(true);
        for (const box of boxes) {
          expect(box.status, context).toBe('Tekemättä');
          expect(box.statusTop!, context).toBeCloseTo(boxes[0].statusTop!, 0);
          expect(box.description, context).not.toBe('');
          expect(box.size[1], context).toBeGreaterThanOrEqual(44);
          box.size.forEach((value, index) => expect(value, context).toBeCloseTo(boxes[0].size[index], 0));
          box.offsets.forEach((value, index) => expect(value, context).toBeCloseTo(boxes[0].offsets[index], 0));
          expect(box.style, context).toEqual(boxes[0].style);
          expect(box.textFits, context).toBe(true);
        }
      }
    }
  });
}

test('ristiinlinkitys avaa saman opetussivun ja takaisinpaluu säilyttää lähtöaiheen', async ({ page }) => {
  await page.goto('/oppi/kitara/index.html');
  await page.getByRole('link', { name: 'Kitaran kielet ja sointumerkinnät', exact: true }).click();
  await expect(page).toHaveURL(guitarPath);
  await page.getByRole('button', { name: 'Merkitse oppitunti tehdyksi' }).click();
  await page.goBack();
  await expect(page).toHaveURL('/oppi/kitara/index.html');
  await expect(page.locator('[data-study-total]')).toHaveCount(0);
  await page.goto(topicPath);
  const guitarCard = page.locator('#valinta-kitaran-kielet-ja-sointumerkinnat');
  await expect(guitarCard.locator('[data-study-status]')).toHaveText('✓ Tehty');
  await expect(page.locator('[data-study-total]')).toHaveText('1/3 sisältöä tehty');
  await guitarCard.click();
  await expect(page).toHaveURL(guitarPath);
  await expect(page.getByRole('button', { name: '✓ Oppitunti tehty' })).toHaveAttribute('aria-pressed', 'true');
  await page.goto('/oppi/korva/intervallit.html');
  await page.getByRole('link', { name: /Kertaa intervallit/ }).click();
  await expect(page).toHaveURL(intervalsPath + '#savelet-ja-intervallit');
  await expect(page.getByRole('heading', { level: 1, name: 'Sävelet ja intervallit' })).toBeVisible();
});

test('vanhat ja virheelliset merkinnät eivät kaada sivua tai muutu sivua lukiessa', async ({ page }) => {
  await page.goto(topicPath);
  const total = page.locator('[data-study-total]');
  await expect(total).toHaveText('0/3 sisältöä tehty');
  await page.evaluate(key => {
    localStorage.setItem('musiikin-kartta:tehdyt', JSON.stringify(['osa-1#savelet-ja-intervallit', '__proto__']));
    localStorage.setItem(key, '{"katkennut":');
  }, readingKey);
  await page.reload();
  await expect(total).toHaveText('1/3 sisältöä tehty');
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe('{"katkennut":');
  await page.evaluate(key => localStorage.setItem(key, JSON.stringify(['tuleva-luku'])), readingKey);
  await page.goto('/index.html');
  await expect(page.getByRole('link', { name: /Jatka oppimista/ })).toHaveCount(0);
  expect(await page.evaluate(key => localStorage.getItem(key), readingKey)).toBe('["tuleva-luku"]');
});

test('äänitiedostojen katketessa ilmoitus näkyy ja harjoitukseen voi silti siirtyä', async ({ page }) => {
  await page.route('**/assets/audio/osa-2/duuri-ja-molli.*', route => route.abort());
  await page.goto(intervalsPath);
  await page.locator('audio').evaluate(element => {
    const player = element as HTMLAudioElement;
    player.muted = true;
    void player.play().catch(() => {});
  });
  await expect(page.getByRole('status')).toHaveText(/Ääniesimerkkiä ei voitu ladata/);
  await nextStep(page, 'Seuraava: Siirrä yhtä sormea').click();
  await expect(page).toHaveURL(practicePath);
});

test('Kitaran perusteiden uudet kuunteluesimerkit latautuvat ja soivat', async ({ page }) => {
  const examples = [
    ['vaihto-ja-sointukartta', [33.75]],
    ['mihin-kierto-paattyy', [15, 15]],
  ] as const;
  for (const [slug, durations] of examples) {
    await page.goto(`/oppi/kitara/${slug}.html`);
    const players = page.locator('main audio');
    await expect(players).toHaveCount(durations.length);
    for (const [index, duration] of durations.entries()) {
      const player = players.nth(index);
      await player.evaluate(async element => {
        const audio = element as HTMLAudioElement;
        audio.muted = true;
        await audio.play();
      });
      await expect.poll(() => player.evaluate(element => (element as HTMLAudioElement).currentTime)).toBeGreaterThan(0.05);
      expect(await player.evaluate(element => (element as HTMLAudioElement).duration)).toBeCloseTo(duration, 2);
      await player.evaluate(element => (element as HTMLAudioElement).pause());
    }
  }
});

test.describe('Oppimiskartta ilman JavaScriptiä', () => {
  test.use({ javaScriptEnabled: false });

  test('aiheesta toiseen ja viimeisestä aiheesta kartalle pääsee staattisilla linkeillä', async ({ page }) => {
    await page.goto(practicePath);
    await expect(topSteps(page).locator('[data-boundary-progress]')).toBeHidden();
    await nextStep(page, 'Seuraava aihe: Sävelkorva ja melodia').press('Enter');
    await expect(page).toHaveURL('/oppi/korva/index.html?polku=aihe-korva');
    await page.goBack();
    await expect(page).toHaveURL(practicePath);
    await bottomSteps(page).getByRole('link', { name: 'Seuraava aihe: Sävelkorva ja melodia', exact: true }).click();
    await expect(page.getByRole('heading', { level: 1, name: 'Sävelkorva ja melodia' })).toBeVisible();
    await page.goto('/oppi/kappaleet/aanita-kahdeksan-tahtia.html');
    await bottomSteps(page).getByRole('link', { name: 'Oppimiskarttaan', exact: true }).click();
    await expect(page).toHaveURL('/index.html#aihe-kappaleet');
    await expect(page.locator('#aihe-kappaleet')).toBeVisible();
  });

  test('staattiset linkit ja tehtävien ohjeet toimivat', async ({ page }) => {
    await page.goto(practicePath);
    const practiceBack = exactBack(page, 'Sävelnimiin ja sointumerkintöihin');
    await expect(practiceBack).toHaveAttribute('href', 'index.html');
    await expect(practiceBack).toHaveCSS('border-top-style', 'solid');
    await practiceBack.focus();
    await expect(practiceBack).toHaveCSS('outline-style', 'solid');
    await practiceBack.press('Enter');
    await expect(page).toHaveURL(topicPath);
    await exactBack(page, 'Oppimiskarttaan').click();
    await expect(page).toHaveURL('/index.html#aihe-nuotit');
    await page.locator('#aihe-nuotit').click();
    await expect(page).toHaveURL(topicPath);
    await expect(page.locator('[data-study-total]')).toBeHidden();
    await page.locator('#valinta-savelet-ja-intervallit').click();
    await expect(page).toHaveURL(intervalsPath);
    await expect(page.locator('audio[controls]')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Kromaattinen asteikko' })).toBeVisible();
    await nextStep(page, 'Seuraava: Siirrä yhtä sormea').click();
    await expect(page).toHaveURL(practicePath);
    await expect(page.getByText(/^Soita A-kielen 3\. nauha/)).toBeVisible();
    await practiceBack.click();
    await expect(page).toHaveURL(topicPath);
    await page.goto('/oppi/korva/mika-aste-soi.html');
    await expect(page.getByText(/Kysymysten soittaminen tarvitsee JavaScriptin/)).toBeVisible();
  });
});

test('korvaharjoitus toipuu äänilaitteen käynnistysvirheestä', async ({ page }) => {
  await page.addInitScript(() => {
    const NativeAudioContext = window.AudioContext;
    let attempts = 0;
    window.AudioContext = class extends NativeAudioContext {
      constructor(options?: AudioContextOptions) {
        if (attempts++ === 0) throw new Error('Simuloitu äänilaitteen virhe');
        super(options);
      }
    };
  });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/oppi/korva/mika-aste-soi.html');
  const newQuestion = page.getByRole('button', { name: 'Uusi kysymys' });
  const feedback = page.locator('.et-feedback');
  const answer = page.getByRole('group', { name: 'Vastausvaihtoehdot' }).getByRole('button').first();
  await newQuestion.click();
  await expect(feedback).toHaveText(/Ääni ei käynnistynyt/);
  await expect(answer).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Kuuntele uudelleen' })).toBeDisabled();
  await newQuestion.click();
  await expect(feedback).toBeEmpty();
  await expect(answer).toBeEnabled();
  await answer.click();
  await expect(feedback).toHaveText(/Oikein|Ei aivan/);
  await exactBack(page, 'Sävelkorvaan ja melodiaan').click();
  await expect(page).toHaveURL('/oppi/korva/index.html');
  expect(errors).toEqual([]);
});

test('tahtitaulukko ja korvaharjoituksen valitsin mahtuvat 320 pikseliin suurennetulla tekstillä', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });
  for (const path of [
    '/oppi/rytmi/pulssi-ja-komppi.html',
    '/oppi/kappaleet/kappale-asteina.html',
    '/oppi/korva/mika-aste-soi.html',
    '/oppi/korva/tunnista-sointutyyppi.html',
    '/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html',
  ]) {
    await page.goto(path);
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    expect(await page.evaluate(() => document.documentElement.scrollWidth), path).toBeLessThanOrEqual(320);
  }
  await page.goto('/oppi/rytmi/pulssi-ja-komppi.html');
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  const table = page.getByRole('region', { name: 'Alas–ylös-komppi yhdessä tahdissa' });
  expect(await table.evaluate(element => element.scrollWidth)).toBeGreaterThan(await table.evaluate(element => element.clientWidth));
  await table.focus();
  await expect(table).toBeFocused();
  await expect(table).toHaveCSS('outline-style', 'solid');
});
