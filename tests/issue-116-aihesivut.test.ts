import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// #116, vaihe 0: turvaverkko kahdeksan aiheen vaiheittaiselle laajennukselle.
// Sisällöt päätetään #115:ssä; testi ei ole toinen sisältörekisteri.
// #154:n vanhojen oppituntien inline-esitystä ei rajata tässä.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const exists = (path: string) => existsSync(new URL('../' + path, import.meta.url));
const topics = JSON.parse(read('tools/oppimiskartta/aiheet.json')).topics as Array<{
  slug: string;
  anchor: string;
  title: string;
  recap?: boolean;
  layout?: string;
  legacy?: { id: string };
  groups: Array<{
    id?: string;
    title: string;
    legacy?: boolean;
    inline?: boolean;
    attempts?: boolean;
    kind?: string;
    lessons: Array<{ standalone?: string }>;
  }>;
}>;

const topicSlugs = [
  'kitara', 'rytmi', 'savelnimet', 'korva',
  'otelauta', 'soinnut', 'asteikot', 'kappaleet',
] as const;

// #146:n inventoiman vanhan etenemissarjan lähtölaskurit, ei uusien Ydinopintojen määrä.
// Vanhojen tunnisteiden tarkempi pysyvyys kuuluu #117 / PR #150:lle.
const oldCounts: Record<string, number> = {
  rytmi: 4,
  savelnimet: 3,
  korva: 14,
  otelauta: 8,
  soinnut: 18,
  asteikot: 7,
  kappaleet: 14,
};

function homeIds(home: string, slug: string, anchor: string): string[] {
  const card = home.match(new RegExp(
    '<a class="topic-card" id="' + anchor + '" href="oppi/' + slug +
      '/index\\.html"([^>]*)>',
  ));
  expect(card, slug + ': etusivun aihekortti').not.toBeNull();
  const ids = card![1].match(/data-study-items="([^"]+)"/);
  return ids ? ids[1].split(' ') : [];
}

describe('#116: kahdeksan aihesivun vaiheistettu laajennus', () => {
  it('säilyttää kahdeksan aiheen järjestyksen ja etusivun reitit', () => {
    expect(topics.map(topic => topic.slug)).toEqual(topicSlugs);
    const home = read('index.html');
    for (const topic of topics) {
      expect(exists('oppi/' + topic.slug + '/index.html'), topic.slug).toBe(true);
      expect(home).toContain('id="' + topic.anchor + '" href="oppi/' + topic.slug + '/index.html"');
      expect(read('oppi/' + topic.slug + '/index.html')).toContain(topic.title);
    }
  });

  it('säilyttää 68 aiempaa etenemistunnistetta erillään Ydinopinnoista', () => {
    const home = read('index.html');
    const everyOldId: string[] = [];
    for (const topic of topics) {
      const ids = homeIds(home, topic.slug, topic.anchor);
      if (topic.recap) {
        expect(ids, 'Kitaran perusteet ei kuulu 68 sisällön laskuriin').toEqual([]);
        continue;
      }
      expect(ids, topic.slug + ': aiemmat sisällöt').toHaveLength(oldCounts[topic.slug]);
      const page = read('oppi/' + topic.slug + '/index.html');
      const shownIds = [...page.matchAll(/data-study-status="([^"]+)"/g)].map(match => match[1]);
      expect(shownIds, topic.slug + ': samat tunnisteet aihesivulla').toEqual(ids);
      everyOldId.push(...ids);
    }
    expect(everyOldId).toHaveLength(68);
    expect(new Set(everyOldId).size).toBe(68);
  });

  it('uuteen korttimalliin siirretyissä aiheissa Ydinopinnot on ensin ja Aiemmat erillään', () => {
    for (const topic of topics) {
      if (topic.recap || topic.layout !== 'kokonaisuudet') continue;

      const own = topic.groups.filter(group => !group.legacy);
      const previous = topic.groups.filter(group => group.legacy);
      expect(own.length, topic.slug + ': vähintään yksi valmis oma kokonaisuus').toBeGreaterThan(0);
      expect(topic.groups).toEqual([...own, ...previous]);
      expect(topic.groups[0].id, topic.slug).toBe('ydinopinnot');
      expect(topic.groups[0].title, topic.slug).toBe('Ydinopinnot');
      expect(topic.groups[0].inline, topic.slug).toBe(true);
      expect(topic.groups[0].attempts, topic.slug).toBe(true);
      expect(topic.groups[0].lessons.length, topic.slug).toBeGreaterThan(0);
      expect(topic.legacy?.id, topic.slug).toBe('aiemmat');

      const page = read('oppi/' + topic.slug + '/index.html');
      const first = page.indexOf('<details class="study-unit" id="ydinopinnot">');
      const former = page.indexOf('id="aiemmat"');
      expect(first, topic.slug + ': Ydinopinnot löytyvät').toBeGreaterThan(-1);
      expect(former, topic.slug + ': Aiemmat löytyvät').toBeGreaterThan(first);
      expect(page).toContain('data-study-total');
      expect(page).toContain('data-unit-progress');

      const old = homeIds(read('index.html'), topic.slug, topic.anchor);
      const newIds: string[] = [];
      for (const lesson of topic.groups[0].lessons) {
        expect(lesson.standalone, topic.slug + ': ydintunnilla oma sisältölähde').toBeTruthy();
        const slug = lesson.standalone!;
        const source = 'tools/oppimiskartta/sisallot/' + topic.slug + '/' + slug + '.html';
        const path = 'oppi/' + topic.slug + '/' + slug + '.html';
        expect(exists(source), source).toBe(true);
        expect(read(source).trim().length, source).toBeGreaterThan(0);
        expect(exists(path), path).toBe(true);
        expect(page).toContain('id="valinta-' + slug + '"');
        const kind = topic.groups[0].kind ?? 'oppitunti';
        const id = kind + ':' + slug;
        newIds.push(id);
        expect(page).toContain('data-study-attempt-status="' + id + '"');
        expect(read(path)).toContain('data-study-item="' + id + '"');
      }
      expect(newIds.some(id => old.includes(id)), topic.slug + ': ei ristiinkuittausta').toBe(false);
    }
  });

  it('keskeneräisiin aiheisiin ei luoda tyhjiä Ydinopintoja', () => {
    for (const topic of topics) {
      if (topic.recap || topic.layout === 'kokonaisuudet') continue;
      const page = read('oppi/' + topic.slug + '/index.html');
      expect(page).not.toContain('id="ydinopinnot"');
      expect(topic.groups.every(group => group.lessons.length > 0), topic.slug).toBe(true);
    }
  });
});
