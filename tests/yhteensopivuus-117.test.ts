/**
 * #117: jäädytetty yhteensopivuussopimus.
 *
 * Fixture on historiallinen: sen poistettuja URL:eja/ID:itä ei saa poistaa testistä
 * vain siksi, että uusi generaattori tai navigaatio ei enää käytä niitä.
 * Vanhat Tehty-kuittaukset eivät koskaan väitä Ydinopintojen osaamista.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { Script, createContext } from 'node:vm';
import { describe, expect, it } from 'vitest';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');
type Page = { url: string; id: string; kind: 'luku' | 'harjoitus' | 'oppitunti'; source: string };
type Part = { url: string; chapterIds: { id: string; number: number; title: string }[]; anchors: string[] };
type Contract = {
  baseline: { branch: string; sha: string };
  topics: { slug: string; anchor: string; url: string }[];
  pages: Page[];
  bookParts: Part[];
  moved: { from: string; to: string[] }[];
};
const contract = JSON.parse(read('tests/fixtures/issue-117-legacy-urls.json')) as Contract;
const edistyminen = read('assets/edistyminen.js');
const oldKey = 'musiikin-kartta:tehdyt';
const key = 'musiikin-kartta:luvut';

/** Selaimen minimisimulaatio: suorittaa nykyisen IIFE:n, ei omaa kopioitua migraatiota. */
function boot(data: Map<string, string>, id: string, kind: Page['kind'] = 'luku') {
  const attributes = new Map<string, string>();
  const handlers = new Map<string, () => void>();
  const button = {
    textContent: '', disabled: true,
    // PR #141: Ydinopintojen painike etsii data-study-mark-esivanhempaa; vanhalla sivulla sitä ei ole.
    closest() { return null; },
    setAttribute(name: string, value: string) { attributes.set(name, value); },
    addEventListener(name: string, fn: () => void) { handlers.set(name, fn); },
  };
  const main = {
    dataset: { studyItem: id, studyKind: kind },
    querySelector(name: string) { return name === '.done-toggle' ? button : null; },
  };
  const document = {
    querySelector(name: string) { return name === 'main[data-study-item]' ? main : null; },
    getElementById() { return null; },
  };
  const localStorage = {
    getItem(name: string) { return data.get(name) ?? null; },
    setItem(name: string, value: string) { data.set(name, value); },
  };
  const window = { addEventListener() { /* harjoitukselle ei tarvita eventtejä */ } };
  const context = createContext({ document, window, localStorage, location: {
    pathname: '/oppi/soinnut/harmoninen-kentta.html', search: '', hash: '',
  } });
  new Script(edistyminen, { filename: 'assets/edistyminen.js' }).runInContext(context);
  return {
    pressed: () => attributes.get('aria-pressed'),
    label: () => button.textContent,
    click: () => handlers.get('click')?.(),
    enabled: () => !button.disabled,
  };
}

describe('#117: 73 ennen uudistusta julkaistua sisältöosoitetta', () => {
  it('käyttää kiinteää 68 + 5 -sopimusta, ei vain nykyisen navigaation tuottamia URL:eja', () => {
    expect(contract.baseline.sha).toBe('5a8905694e0b29b306e473173ea8d3dde72eab53');
    expect(contract.pages).toHaveLength(73);
    const counts: Record<string, number> = {};
    for (const page of contract.pages) counts[page.url.split('/')[2]] = (counts[page.url.split('/')[2]] ?? 0) + 1;
    expect(counts).toEqual({ kitara: 5, rytmi: 4, savelnimet: 3, korva: 14,
      otelauta: 8, soinnut: 18, asteikot: 7, kappaleet: 14 });
    expect(new Set(contract.pages.map(page => page.url)).size).toBe(73);
    expect(new Set(contract.pages.map(page => page.id)).size).toBe(73);
    expect(contract.pages.filter(page => page.kind === 'luku')).toHaveLength(28);
    expect(contract.pages.filter(page => page.kind === 'harjoitus')).toHaveLength(41);
    expect(contract.pages.filter(page => page.kind === 'oppitunti')).toHaveLength(4);
  });

  it('jokainen vanha URL, oma suoritus-ID, laji ja kuittauspainike säilyy', () => {
    for (const page of contract.pages) {
      const path = page.url.slice(1);
      expect(existsSync(new URL(path, root)), path).toBe(true);
      const html = read(path);
      const main = html.match(/<main\b[^>]*>/)?.[0] ?? '';
      expect(main, path).toContain('data-study-item="' + page.id + '"');
      expect(main, path).toContain('data-study-kind="' + page.kind + '"');
      expect((html.match(/class="done-toggle"/g) ?? []).length, path).toBe(1);
      if (page.kind === 'luku') expect(main, path).toContain('data-theory-chapter="' + page.id + '"');
      else expect(main, path).not.toContain('data-theory-chapter=');
    }
  });

  it('kaikki 11 vanhaa book-URLia ja 28 lukua sekä PARTS-taulukon ankkurit säilyvät', () => {
    expect(contract.bookParts).toHaveLength(11);
    const ids = new Set<string>();
    const chapters = contract.bookParts.flatMap(part => part.chapterIds);
    expect(chapters).toHaveLength(28);
    expect(chapters.map(c => c.number).sort((a, b) => a - b)).toEqual(Array.from({ length: 28 }, (_, i) => i + 1));
    for (const part of contract.bookParts) {
      const path = part.url.slice(1);
      const html = read(path);
      const actual = [...html.matchAll(/<section class="chapter" id="([^"]+)"/g)].map(m => m[1]);
      expect(actual, path).toEqual(part.chapterIds.map(c => c.id));
      const pageIds = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
      for (const anchor of [...part.chapterIds.map(c => c.id), ...part.anchors]) {
        expect(pageIds.has(anchor), path + '#' + anchor).toBe(true);
        expect(ids.has(anchor), anchor + ' ei saa esiintyä monessa osassa').toBe(false);
        ids.add(anchor);
      }
    }
    const published = contract.pages.filter(page => page.kind === 'luku').map(page => page.id).sort();
    expect([...chapters.map(c => c.id)].sort()).toEqual(published);
    const routes = JSON.parse(read('index.html').match(/id="oppimisreitit">([^<]+)/)![1]) as Record<string, string>;
    expect(Object.keys(routes).sort()).toEqual(published);
    for (const chapter of chapters) {
      expect(routes[chapter.id], chapter.id).toBe(contract.pages.find(page => page.id === chapter.id)!.url.slice(1));
    }
  });

  it('aiheankkurit säilyvät etusivulla ja aiheen URL osoittaa entiseen kansioon', () => {
    expect(contract.topics).toHaveLength(8);
    const home = read('index.html');
    for (const t of contract.topics) {
      expect(home, t.anchor).toContain('id="' + t.anchor + '"');
      expect(home, t.anchor).toContain('href="' + t.url.slice(1) + '"');
      expect(existsSync(new URL(t.url.slice(1), root)), t.url).toBe(true);
    }
    expect(home).toContain('id="oppimisaiheet"');
    expect(home).toContain('href="pdf/musiikin-kartta.pdf"');
    expect(existsSync(new URL('book/index.html', root))).toBe(true);
    expect(existsSync(new URL('book/sanasto.html', root))).toBe(true);
    expect(existsSync(new URL('book/h-savelnimen-alkupera.html', root))).toBe(true);
  });

  it('vanha MOVED-migraatiokartta ei menetä yhtään ennestään tunnettua kohdetta', () => {
    expect(contract.moved).toHaveLength(23);
    const legacy = new Set(contract.pages.filter(p => p.kind === 'luku').map(p => p.id));
    for (const mapping of contract.moved) {
      expect(edistyminen).toContain("'" + mapping.from + "': [");
      const actual = edistyminen.match(new RegExp("'" + mapping.from + "': \\[([^\\]]+)\\]"))?.[1];
      expect(actual, mapping.from).toBeDefined();
      const ids = [...(actual ?? '').matchAll(/'([^']+)'/g)].map(m => m[1]);
      expect(ids, mapping.from).toEqual(mapping.to);
      for (const target of ids) expect(legacy.has(target), mapping.from + ' → ' + target).toBe(true);
    }
  });

  it('jokaisella 73 sisältöosoitteella on oikea ja yksilöitävä lähdekirjan kohta tai itsenäinen lähde', () => {
    for (const page of contract.pages) {
      if (page.source.startsWith('tools/')) {
        expect(existsSync(new URL(page.source, root)), page.url).toBe(true);
        continue;
      }
      const source = page.source.match(/^(book\/osa-\d+\.html)#([a-z0-9-]+)(?: \[(data-oppisisalto|excerpt)=([a-z0-9-]+)\])?$/);
      expect(source, page.url + ': lähteen pitäisi olla kirja + fragmentti + poimintatunniste').not.toBeNull();
      if (!source) continue;
      const [, bookPath, chapter, kind, slug] = source;
      const html = read(bookPath);
      if (kind === 'excerpt') {
        expect(html, page.url).toContain('id="' + chapter + '"');
        expect(html, page.url).toContain('<!-- oppisisalto:' + slug + ' -->');
        expect(html, page.url).toContain('<!-- /oppisisalto:' + slug + ' -->');
      } else {
        const anchors = [...html.matchAll(/<section class="chapter" id="([^"]+)"/g)]
          .map(match => ({ id: match[1], offset: match.index }));
        const found = anchors.find(anchor => anchor.id === chapter);
        expect(found, page.url + ': lähdeluku puuttuu').toBeDefined();
        if (kind === 'data-oppisisalto') {
          const mark = 'data-oppisisalto="' + slug + '"';
          const index = html.indexOf(mark);
          expect(index, page.url + ': kirjasta irrotettu harjoitus puuttuu').toBeGreaterThan(0);
          expect(html.lastIndexOf(mark), page.url + ': tunniste ei saa toistua').toBe(index);
          expect(anchors.filter(anchor => anchor.offset < index).at(-1)?.id, page.url).toBe(chapter);
        } else {
          expect(page.kind, page.url).toBe('luku');
          expect(page.id, page.url).toBe(chapter);
        }
      }
    }
  });

  it('julkaistun auditoidun matriisin pitää luetella kaikki jäädytetyt URLit ja tunnisteet', () => {
    const doc = read('docs/oppiminen/yhteensopivuus-117-2026-11-22.md');
    for (const page of contract.pages) {
      expect(doc, page.url).toContain('| `' + page.url + '` | `' + page.id + '` |');
    }
  });
});

describe('#117: tallennusmigraatio ja Ydinopintojen merkitys', () => {
  it('lukee vanhan viisiosaisen merkinnän ja kopioi yksittäisen sekä 1→2-mapin, poistamatta vanhaa', () => {
    const original = JSON.stringify(['osa-2#sointukierrot', 'osa-3#barre']);
    const data = new Map<string, string>([[oldKey, original]]);
    const study = boot(data, 'kappale-asteina');
    expect(study.enabled()).toBe(true);
    expect(study.pressed()).toBe('true');
    expect(study.label()).toContain('tehty');
    expect(JSON.parse(data.get(key)!)).toEqual(['sointukierrot', 'kappale-asteina', 'perussavel', 'barre']);
    expect(data.get(oldKey)).toBe(original);
  });

  it('uusi kelvollinen myös tyhjä tallenne menee aina vanhan edelle', () => {
    const data = new Map<string, string>([[oldKey, '["osa-2#sointukierrot"]'], [key, '[]']]);
    const study = boot(data, 'sointukierrot');
    expect(study.pressed()).toBe('false');
    expect(data.get(key)).toBe('[]');
    expect(data.get(oldKey)).toContain('osa-2#sointukierrot');
  });

  it('säilyttää tuntemattomat ja harjoitusmerkinnät muuttamatta niitä kirjan luvuiksi', () => {
    const array = ['harjoitus:kuuntele-pulssi', 'oppitunti:savelesta-sointuun', 'myohempi-tunniste'];
    const data = new Map<string, string>([[key, JSON.stringify(array)]]);
    const study = boot(data, 'harmoninen-kentta');
    expect(study.pressed()).toBe('false');
    study.click();
    expect(JSON.parse(data.get(key)!)).toEqual([...array, 'harmoninen-kentta']);
  });

  it('vanha Tehty ei automaattisesti kuittaa uuden Ydinopinnon Kokeiltu/osaamista', () => {
    const data = new Map<string, string>([[key, '["harmoninen-kentta","sointukierrot"]']]);
    const next = boot(data, 'harjoitus:kuule-ja-kokoa-sointu', 'harjoitus');
    expect(next.pressed()).toBe('false');
    expect(JSON.parse(data.get(key)!)).toEqual(['harmoninen-kentta', 'sointukierrot']);
    const old = boot(data, 'harmoninen-kentta');
    expect(old.pressed()).toBe('true');
    // Tässä ei arvioida taidon hallintaa, ainoastaan tunnisteiden riippumattomuus.
  });

  it('rikkinäisen uudemman tallenteen perintönäkymä ei vaivihkaa korvaa virheellistä JSONia', () => {
    const data = new Map<string, string>([[key, '{rikki'], [oldKey, '["osa-3#barre"]']]);
    const old = boot(data, 'barre');
    expect(old.pressed()).toBe('true');
    expect(data.get(key)).toBe('{rikki');
  });
});

describe('#117: Ydinopintojen Kokeiltu-tunnisteet pysyvät erillään vanhoista', () => {
  it('yksikään Kokeiltu-merkitty tai -laskettu tunniste ei käytä vanhaa suoritus-ID:tä', () => {
    const legacy = new Set(contract.pages.map(page => page.id));
    const files = (readdirSync(new URL('oppi/', root), { recursive: true }) as string[])
      .filter(name => name.endsWith('.html'));
    const attempts: string[] = [];
    for (const name of files) {
      const html = read('oppi/' + name);
      for (const m of html.matchAll(/data-study-attempt-status="([^"]+)"/g)) attempts.push(m[1]);
      for (const m of html.matchAll(/<(?:main|details)\b[^>]*>/g)) {
        if (!m[0].includes('data-study-mark="kokeiltu"')) continue;
        const id = m[0].match(/data-study-item="([^"]+)"/)?.[1];
        if (id) attempts.push(id);
      }
    }
    for (const id of attempts) expect(legacy.has(id), id + ' on vanha Tehty-tunniste').toBe(false);
  });
});
