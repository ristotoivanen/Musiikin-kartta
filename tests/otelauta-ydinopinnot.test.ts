import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  FIND_ALL_TARGETS, LANDMARKS, MAX_FRET, NATURALS, OCTAVE_ROUNDS, ROOT_ROUNDS, ROOT_STRINGS, STRINGS, UNISON_ROUNDS,
  checkFindAll, checkOctave, checkRootFind, checkRootName, checkUnison, frequency, landmarkHint, noteName,
  octaveGroups, pitchAt, pitchName, positionsOf, relationWords, rootAnswer, shortPosition, unisonAnswer,
} from '../assets/otelauta-ydinopinnot.js';

// Otelaudan Ydinopinnot (#116, vaihe 3). Musiikillinen tieto tarkistetaan riippumattomasta
// taulukosta (teoriaoppaan osa 5: Sävelet E- ja A-kielellä), ei pelkästään moduulin omilla funktioilla.
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
type Position = [string, number];

// book/osa-5.html#e-ja-a-kielen-nauhat, nauhat 0–12.
const E_STRING = ['E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E'];
const A_STRING = ['A', 'B♭', 'B', 'C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A'];

describe('vakiovire ja sävelkorkeudet', () => {
  it('vapaat kielet ovat E2–A2–D3–G3–B3–E4 paksusta ohueen', () => {
    expect(STRINGS.map(string => string.id)).toEqual(['E', 'A', 'D', 'G', 'B', 'e']);
    expect(STRINGS.map(string => pitchName(string.open))).toEqual(['E2', 'A2', 'D3', 'G3', 'B3', 'E4']);
  });

  it('vierekkäisten kielten väli on viisi puoliaskelta, G–B neljä', () => {
    const gaps = STRINGS.slice(1).map((string, index) => string.open - STRINGS[index].open);
    expect(gaps).toEqual([5, 5, 5, 4, 5]);
  });

  it('E- ja A-kielen nimet vastaavat teoriaoppaan taulukkoa', () => {
    expect(Array.from({ length: 13 }, (_, fret) => noteName(pitchAt('E', fret)))).toEqual(E_STRING);
    expect(Array.from({ length: 13 }, (_, fret) => noteName(pitchAt('A', fret)))).toEqual(A_STRING);
  });

  it('taajuudet: A4 = 440 Hz, vapaa paksu E-kieli E2 ≈ 82,41 Hz, nauha 12 kaksinkertaistaa taajuuden', () => {
    expect(frequency(69)).toBe(440);
    expect(frequency(pitchAt('E', 0))).toBeCloseTo(82.407, 3);
    expect(frequency(pitchAt('A', 0))).toBeCloseTo(110, 6);
    for (const string of STRINGS) {
      expect(frequency(pitchAt(string.id, 12)) / frequency(pitchAt(string.id, 0))).toBeCloseTo(2, 10);
    }
  });

  it('nauhat rajataan välille 0–12', () => {
    expect(MAX_FRET).toBe(12);
    expect(() => pitchAt('E', 13)).toThrow();
    expect(() => pitchAt('E', -1)).toThrow();
    expect(() => pitchAt('X', 0)).toThrow();
  });

  it('samanniminen sävel ei ole sama korkeus: A2, A3 ja A4 erotetaan', () => {
    expect(pitchName(pitchAt('A', 0))).toBe('A2');
    expect(pitchName(pitchAt('E', 5))).toBe('A2');
    expect(pitchName(pitchAt('G', 2))).toBe('A3');
    expect(pitchName(pitchAt('e', 5))).toBe('A4');
    expect(relationWords(12)).toBe('oktaavia korkeampi');
    expect(relationWords(-12)).toBe('oktaavia matalampi');
    expect(relationWords(24)).toBe('kaksi oktaavia korkeampi');
    expect(relationWords(0)).toBe('yhtä korkea');
    expect(relationWords(1)).toBe('puoliaskelen korkeampi');
    expect(relationWords(-2)).toBe('kaksi puoliaskelta matalampi');
  });
});

describe('01 · Sama sävel toiselta kieleltä', () => {
  it('jokainen vastaus on yhtä korkea sävel paksummalla naapurikielellä', () => {
    const answers = UNISON_ROUNDS.map(round => {
      const from = STRINGS.findIndex(string => string.id === round.from[0]);
      expect(STRINGS[from - 1].id, 'paksumpi naapuri').toBe(round.to);
      const answer = unisonAnswer(round);
      expect(answer.midi).toBe(pitchAt(...(round.from as Position)));
      expect(pitchAt(answer.string, answer.fret)).toBe(answer.midi);
      return shortPosition(answer.string, answer.fret);
    });
    expect(answers).toEqual(['E 5', 'A 5', 'D 5', 'G 4', 'E 8', 'G 7']);
  });

  it('palaute erottaa oikean, oktaavin, väärän kielen ja väärän nauhan', () => {
    const first = UNISON_ROUNDS[0];
    expect(checkUnison(first, 'E', 5)).toMatchObject({ ok: true, kind: 'oikein' });
    expect(checkUnison(first, 'E', 5).message).toContain('A2');
    expect(checkUnison(first, 'A', 0)).toMatchObject({ ok: false, kind: 'lahto' });
    expect(checkUnison(first, 'D', 7)).toMatchObject({ ok: false, kind: 'vaara-kieli' });
    const wrong = checkUnison(first, 'E', 7);
    expect(wrong).toMatchObject({ ok: false, kind: 'eri' });
    expect(wrong.message).toContain('B2');
    expect(wrong.message).toContain('kaksi nauhaa alemmas');
    // Toisen kielen sama korkeus tunnistetaan hyväksi havainnoksi, mutta tehtävä pyytää E-kieltä.
    const vapaaA = UNISON_ROUNDS[1]; // vapaa D → A 5; myös E 10 soi D3
    expect(checkUnison(vapaaA, 'E', 10)).toMatchObject({ ok: false, kind: 'toinen-kieli' });
    expect(checkUnison(UNISON_ROUNDS[4], 'E', 8).ok).toBe(true); // A 3 = C3 → E 8 = C3
    const d = UNISON_ROUNDS[5]; // B 3 = D4 → G 7
    expect(checkUnison(d, 'G', 7).ok).toBe(true);
    expect(checkUnison(d, 'G', 7).message).toContain('neljä nauhaa');
    expect(checkUnison(UNISON_ROUNDS[2], 'D', 5).message).toContain('viisi nauhaa');
  });

  it('oktaavivirhe nimetään oktaaviksi', () => {
    // Samanniminen mutta oktaavin päässä oleva sävel ei kelpaa yhtä korkeaksi.
    const octave = checkUnison({ from: ['D', 7], to: 'A' }, 'A', 0); // D 7 = A3, A 0 = A2
    expect(octave).toMatchObject({ ok: false, kind: 'oktaavi' });
    expect(octave.message).toContain('oktaavia matalampi');
  });
});

describe('02 · Kuule ja löydä oktaavi', () => {
  it('jokaisessa tehtävässä on oktaavia matalampi, yhtä korkea ja oktaavia korkeampi paikka', () => {
    for (const round of OCTAVE_ROUNDS) {
      const ref = pitchAt(...(round.ref as Position));
      const diffs = round.places.map(place => pitchAt(...(place as Position)) - ref);
      expect(diffs).toEqual([-12, 0, 12]);
      const names = round.places.map(place => noteName(pitchAt(...(place as Position))));
      expect(new Set(names).size).toBe(1);
      expect(names[0]).toBe(noteName(ref));
      // Yhtä korkea paikka on eri kielellä kuin lähtösävel (unisono, ei sama kohta).
      expect(round.places[1][0]).not.toBe(round.ref[0]);
      expect(new Set(round.places.map(place => place[0])).size).toBe(3);
    }
  });

  it('arvoitussävelet ja niiden suhteet', () => {
    expect(OCTAVE_ROUNDS.map(round => pitchName(pitchAt(...(round.places[round.answer] as Position)))))
      .toEqual(['A4', 'G2', 'C4', 'D5', 'E2', 'F3']);
    expect(OCTAVE_ROUNDS.map(round => round.answer)).toEqual([2, 0, 1, 2, 0, 1]);
  });

  it('palaute nimeää arvoitussävelen paikan ja korkeuden', () => {
    const round = OCTAVE_ROUNDS[0];
    const right = checkOctave(round, 2);
    expect(right.ok).toBe(true);
    expect(right.message).toContain('ohuen e-kielen 5. nauha (A4), oktaavia korkeampi');
    const wrong = checkOctave(round, 1);
    expect(wrong.ok).toBe(false);
    expect(wrong.message).toContain('D 7 (A3), on yhtä korkea');
  });
});

describe('03 · Etsi perussävel E- ja A-kieleltä', () => {
  it('vastaukset', () => {
    expect(ROOT_STRINGS).toEqual(['E', 'A']);
    expect(ROOT_ROUNDS.map(round => rootAnswer(round))).toEqual([[3], [3], 'A', 'D', [10], 'C', [10], 'E']);
    for (const round of ROOT_ROUNDS) {
      if (round.type === 'nimea') expect(NATURALS).toContain(rootAnswer(round));
      else expect(NATURALS).toContain(round.note);
    }
  });

  it('kiintopisteet 0, 3, 5, 7 ja 12', () => {
    expect(LANDMARKS).toEqual([0, 3, 5, 7, 12]);
    expect(LANDMARKS.map(fret => E_STRING[fret])).toEqual(['E', 'G', 'A', 'B', 'E']);
    expect(LANDMARKS.map(fret => A_STRING[fret])).toEqual(['A', 'C', 'D', 'E', 'A']);
    expect(landmarkHint('E', 8)).toContain('paksun E-kielen 7. nauha on B');
    expect(landmarkHint('A', 5)).toContain('0 A, 3 C, 5 D, 7 E, 12 A');
  });

  it('palaute', () => {
    expect(checkRootFind(ROOT_ROUNDS[0], 'E', 3).ok).toBe(true);
    expect(checkRootFind(ROOT_ROUNDS[0], 'A', 10)).toMatchObject({ ok: false, kind: 'vaara-kieli' });
    expect(checkRootFind(ROOT_ROUNDS[4], 'E', 8).message).toContain('ylempää');
    expect(checkRootFind(ROOT_ROUNDS[4], 'E', 12).message).toContain('alempaa');
    expect(checkRootName(ROOT_ROUNDS[5], 'C').ok).toBe(true);
    expect(checkRootName(ROOT_ROUNDS[5], 'B')).toMatchObject({ ok: false });
  });
});

describe('04 · Liiku otelaudalla', () => {
  const list = (name: string) => positionsOf(name).map(position => `${shortPosition(position.string, position.fret)}=${pitchName(position.midi)}`);

  it('kaikki D:t ja F:t nauhoilla 0–12', () => {
    expect(FIND_ALL_TARGETS).toEqual(['D', 'F']);
    expect(list('D')).toEqual(['E 10=D3', 'A 5=D3', 'vapaa D=D3', 'D 12=D4', 'G 7=D4', 'B 3=D4', 'e 10=D5']);
    expect(list('F')).toEqual(['E 1=F2', 'A 8=F3', 'D 3=F3', 'G 10=F4', 'B 6=F4', 'e 1=F4']);
  });

  it('oktaaviryhmät erottavat saman nimen eri korkeudet', () => {
    const groups = octaveGroups(positionsOf('D'));
    expect([...groups.keys()]).toEqual(['D3', 'D4', 'D5']);
    expect(groups.get('D3')!.map(position => position.string)).toEqual(['E', 'A', 'D']);
  });

  it('palaute kertoo unisonon, uuden korkeuden ja lopun', () => {
    const found = new Set<string>();
    const first = checkFindAll('D', found, 'A', 5);
    expect(first).toMatchObject({ ok: true, kind: 'uusi' });
    expect(first.message).toContain('Uusi korkeus: D3');
    found.add('A5');
    expect(checkFindAll('D', found, 'D', 0).message).toContain('Sama korkeus kuin A 5');
    expect(checkFindAll('D', found, 'A', 5)).toMatchObject({ ok: false, kind: 'jo' });
    expect(checkFindAll('D', found, 'B', 5)).toMatchObject({ ok: false, kind: 'vaara' });
    const all = positionsOf('D').map(position => `${position.string}${position.fret}`);
    const last = checkFindAll('D', new Set(all.slice(0, -1)), 'e', 10);
    expect(last).toMatchObject({ ok: true, kind: 'valmis' });
    expect(last.message).toContain('D3 × 3, D4 × 3, D5 × 1');
  });
});

describe('sisältölähteet ja muodostetut sivut', () => {
  const lessons = ['sama-savel-toiselta-kielelta', 'kuule-oktaavi', 'perussavel-e-ja-a-kielelta', 'liiku-otelaudalla'];
  const kinds = ['unisono', 'oktaavi', 'perussavel', 'liiku'];
  const source = (slug: string) => read(`tools/oppimiskartta/sisallot/otelauta/${slug}.html`);

  it('tekstiversion vastaukset vastaavat moduulin laskemia vastauksia', () => {
    const unison = UNISON_ROUNDS.map((round, index) => {
      const answer = unisonAnswer(round);
      return `${index + 1}. ${shortPosition(answer.string, answer.fret)}`;
    }).join(' · ');
    expect(source(lessons[0])).toContain(unison);

    const octave = OCTAVE_ROUNDS.map((round, index) =>
      `${index + 1}. ${round.places.map(place => pitchName(pitchAt(...(place as Position)))).join(', ')}`).join(' · ');
    expect(source(lessons[1])).toContain(octave);

    const roots = ROOT_ROUNDS.map((round, index) => {
      const answer = rootAnswer(round);
      return `${index + 1}. ${Array.isArray(answer) ? `${round.type === 'etsi' ? round.string : ''} ${answer[0]}` : answer}`;
    }).join(' · ');
    expect(source(lessons[2])).toContain(roots);

    const groups = (name: string) => [...octaveGroups(positionsOf(name))].map(([pitch, items]) => {
      const places = items.map(item => shortPosition(item.string, item.fret).replace(/^vapaa (\S+)$/, 'vapaa $1-kieli'));
      const joined = places.length > 1 ? `${places.slice(0, -1).join(', ')} ja ${places.at(-1)}` : places[0];
      return `${joined} (${pitch})`;
    }).join(' · ');
    expect(source(lessons[3])).toContain(groups('D'));
    expect(source(lessons[3])).toContain(groups('F'));
  });

  it('jokainen harjoitus on havaittava tehtävä eikä väitä mitattua soittoa', () => {
    lessons.forEach((slug, index) => {
      const html = source(slug);
      expect(html).toContain(`data-otelautaharjoitus="${kinds[index]}"`);
      expect(html).toContain('data-otelauta-sovellus hidden');
      expect(html).toContain('Kokeile kitaralla');
      expect(html).toContain('Tämä sivu ei kuuntele soittoasi.');
      expect(html).toContain('Tehtävät tekstinä ja vastaukset');
      expect(html).not.toMatch(/soitit oikein|osaat nyt/i);
    });
  });

  it('aihesivulla Ydinopinnot ensin, neljä uutta harjoitusta ja aiemmat kahdeksan sisältöä ennallaan', () => {
    const page = read('oppi/otelauta/index.html');
    const core = page.indexOf('<details class="study-unit" id="ydinopinnot">');
    const legacy = page.indexOf('<details class="study-unit study-unit--legacy" id="aiemmat">');
    expect(core).toBeGreaterThan(-1);
    expect(legacy).toBeGreaterThan(core);
    const newIds = [...page.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(match => match[1]);
    expect(newIds).toEqual(lessons.map(slug => `harjoitus:${slug}`));
    const oldIds = [...page.matchAll(/data-study-status="([^"]+)"/g)].map(match => match[1]);
    expect(oldIds).toEqual([
      'otelauta', 'harjoitus:etsi-a-ilman-asteikkokuviota', 'harjoitus:etsi-sama-savel',
      'perussavel', 'harjoitus:etsi-savel-kahdelta-kielelta', 'harjoitus:nimea-savel',
      'caged', 'harjoitus:soita-c-kahdesta-kohdasta',
    ]);
    expect(newIds.some(id => oldIds.includes(id))).toBe(false);
    const hrefs = [...page.slice(legacy).matchAll(/class="study-choice" id="valinta-([^"]+)" href="([^"]+)"/g)].map(match => [match[1], match[2]]);
    expect(hrefs).toEqual([
      'otelauta', 'etsi-a-ilman-asteikkokuviota', 'etsi-sama-savel', 'perussavel',
      'etsi-savel-kahdelta-kielelta', 'nimea-savel', 'caged', 'soita-c-kahdesta-kohdasta',
    ].map(slug => [slug, `${slug}.html`]));
    // Sisällöt ja tekstiversio löytyvät aihesivulta ilman JavaScriptiä.
    for (const kind of kinds) expect(page).toContain(`data-otelautaharjoitus="${kind}"`);
    expect(page.match(/Tehtävät tekstinä ja vastaukset/g)).toHaveLength(4);
    expect(page).toMatch(/assets\/otelauta-ydinopinnot\.js\?v=[a-f0-9]{10}/);
    expect(page).toMatch(/assets\/otelauta-ydinopinnot\.css\?v=[a-f0-9]{10}/);
    // Etusivun aihekortti laskee yhä vain aiemmat kahdeksan sisältöä.
    const home = read('index.html');
    const card = home.match(/<a class="topic-card" id="aihe-otelauta"[^>]*data-study-items="([^"]+)"/);
    expect(card![1].split(' ')).toEqual(oldIds);
  });

  it('omat sivut käyttävät keskittymistilaa ja kokeiltu-merkintää; vanhat sivut eivät lataa uutta moduulia', () => {
    for (const slug of lessons) {
      const page = read(`oppi/otelauta/${slug}.html`);
      expect(page).toContain(`data-study-item="harjoitus:${slug}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
      expect(page).toContain('study-page--focus');
      expect(page).toContain(`href="index.html#valinta-${slug}"`);
      expect(page).toContain('otelauta-ydinopinnot.js');
    }
    for (const slug of ['otelauta', 'etsi-a-ilman-asteikkokuviota', 'etsi-sama-savel', 'perussavel',
      'etsi-savel-kahdelta-kielelta', 'nimea-savel', 'caged', 'soita-c-kahdesta-kohdasta']) {
      const page = read(`oppi/otelauta/${slug}.html`);
      expect(page, slug).not.toContain('otelauta-ydinopinnot');
      expect(page, slug).toContain('Merkitse ');
    }
  });
});
