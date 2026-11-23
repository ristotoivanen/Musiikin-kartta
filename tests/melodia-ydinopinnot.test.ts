import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import {
  BASS_GAIN, CONTOUR_MOTIFS, ECHO_MOTIFS, ECHO_POSITIONS, HOME_PHRASES, HOME_ROUNDS, HOME_TONE_PLAN, NOTES, TIMING,
  checkContour, checkEcho, contourFeedback, contourOf, direction, echoFeedback, homeFeedback, homePlan, homeRound,
  melodyPlan, moveKind, moveSentence, pickIndex, planEnd, position, singleNotePlan,
// @ts-expect-error Testattu selainmoduuli palvellaan suoraan JavaScriptinä.
} from '../assets/melodia-ydinopinnot.js';

// #116, vaihe 2: Sävelkorva ja melodia -aiheen Ydinopinnot. Testit tarkistavat, että kuultava
// melodia, näkyvä kitaran paikka ja palaute kuvaavat samaa asiaa. Ne eivät todista äänenlaatua,
// iPhone/Safari-toistoa eivätkä oppijan sävelkorvaa tai soittotaitoa.

type Note = { id: string; name: string; midi: number; string: string; fret: number; sample: string };
type Event = { pitch: string; at: number; duration: number; gain: number };
const read = (path: string) => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const exists = (path: string) => existsSync(new URL('../' + path, import.meta.url));
const notes = NOTES as Record<string, Note>;
const OPEN_STRINGS: Record<string, number> = { LowE: 40, A: 45, D: 50, G: 55, B: 59, HighE: 64 };
const PITCH_CLASSES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const G_MAJOR = new Set(['G', 'A', 'B', 'C', 'D', 'E', 'F♯']);
const SAMPLE_SECONDS = 5.0; // LAHTEET.md: 5,0 s:n näytteet, loppuun 0,4 s:n häivytys
const lessons = ['ylos-alas-vai-sama', 'kotiin-vai-kesken', 'kuule-ja-etsi-kitaralta'];
const legacy = [
  ['musiikki-on-kieli', 'musiikki-on-kieli'], ['taydenna-fraasi', 'harjoitus:taydenna-fraasi'],
  ['savellajin-tunnistaminen', 'savellajin-tunnistaminen'], ['vaihda-kotisavelta', 'harjoitus:vaihda-kotisavelta'],
  ['intervallit', 'intervallit'], ['mika-aste-soi', 'harjoitus:mika-aste-soi'],
  ['etsi-jalkimmainen-savel', 'harjoitus:etsi-jalkimmainen-savel'], ['basso', 'basso'],
  ['kuuntele-bassolinja', 'harjoitus:kuuntele-bassolinja'], ['soinnut', 'soinnut'],
  ['kumpi-on-molli', 'harjoitus:kumpi-on-molli'], ['tunnista-sointutyyppi', 'harjoitus:tunnista-sointutyyppi'],
  ['septimi-korvalla', 'septimi-korvalla'], ['kolme-c-sointua', 'harjoitus:kolme-c-sointua'],
] as const;
const sequence = (values: number[]) => { let index = 0; return () => values[index++ % values.length]; };

describe('kuultava sävel ja näkyvä kitaran paikka vastaavat toisiaan', () => {
  it('jokainen sävel soi oman kielensä ja nauhansa äänitetystä näytteestä', () => {
    for (const note of Object.values(notes)) {
      expect(note.midi, note.id).toBe(OPEN_STRINGS[note.string] + note.fret);
      expect(note.name, note.id).toBe(PITCH_CLASSES[note.midi % 12]);
      expect(note.sample).toBe(`${note.string}:${note.id}`);
      for (const format of ['m4a', 'ogg']) {
        const file = `assets/audio/soinnut/INSGuitarSteel_String${note.string}_Vel02_${note.id}_01.${format}`;
        expect(exists(file), file).toBe(true);
      }
    }
  });

  it('paikan nimi kertoo kielen ja nauhan; vapaa kieli nimetään vapaaksi', () => {
    expect(position('G3')).toBe('G-kieli, vapaa');
    expect(position('A3')).toBe('G-kieli, 2. nauha');
    expect(position('C4')).toBe('B-kieli, 1. nauha');
    expect(position('Fs4')).toBe('ohut e-kieli, 2. nauha');
    expect(position('G2')).toBe('paksu E-kieli, 3. nauha');
  });

  it('harjoituksen 03 painikkeet näyttävät saman nimen ja paikan, jonka ne soittavat, matalimmasta korkeimpaan', () => {
    const html = read('tools/oppimiskartta/sisallot/korva/kuule-ja-etsi-kitaralta.html');
    const buttons = [...html.matchAll(/data-paikka="(\w+)"><strong>([^<]+)<\/strong> <span>([^<]+)<\/span>/g)];
    expect(buttons.map(([, id]) => id)).toEqual(ECHO_POSITIONS);
    for (const [, id, name, where] of buttons) {
      expect(name).toBe(notes[id].name);
      expect(where).toBe(position(id));
    }
    const midis = (ECHO_POSITIONS as string[]).map(id => notes[id].midi);
    expect(midis).toEqual([...midis].sort((a, b) => a - b));
  });

  it('suunta ja askel/hyppy lasketaan sävelkorkeudesta, ei sävelnimestä', () => {
    expect([direction('G3', 'B3'), direction('D4', 'B3'), direction('B3', 'B3')]).toEqual(['ylos', 'alas', 'sama']);
    // G3 → G4 on sama sävelnimi, mutta oktaavin hyppy ylös.
    expect([direction('G3', 'G4'), moveKind('G3', 'G4')]).toEqual(['ylos', 'hyppy']);
    expect([moveKind('B3', 'C4'), moveKind('G3', 'A3'), moveKind('A3', 'C4')]).toEqual(['askel', 'askel', 'hyppy']);
    expect(moveSentence('B3', 'A3')).toBe('Melodia laski B:stä askeleella A:han.');
    expect(moveSentence('G3', 'D4')).toBe('Melodia nousi G:stä hypyllä D:hen.');
    expect(moveSentence('E4', 'Fs4')).toBe('Melodia nousi E:stä askeleella F♯:ään.');
    expect(moveSentence('D4', 'D4')).toBe('Sävel D toistui.');
  });
});

describe('01 · Ylös, alas vai sama?', () => {
  it('kaikki kahdeksan suuntayhdistelmää ovat mukana vähintään kahdesti; ei puoliaskelia', () => {
    const counts = new Map<string, number>();
    for (const motif of CONTOUR_MOTIFS as string[][]) {
      expect(motif).toHaveLength(3);
      const key = contourOf(motif).join('-');
      counts.set(key, (counts.get(key) ?? 0) + 1);
      for (let index = 1; index < motif.length; index++) {
        expect(Math.abs(notes[motif[index]].midi - notes[motif[index - 1]].midi), motif.join()).not.toBe(1);
      }
    }
    const expected = ['ylos', 'alas', 'sama'].flatMap(a => ['ylos', 'alas', 'sama'].map(b => `${a}-${b}`)).filter(key => key !== 'sama-sama');
    expect([...counts.keys()].sort()).toEqual(expected.sort());
    for (const [key, count] of counts) expect(count, key).toBeGreaterThanOrEqual(2);
    expect(new Set((CONTOUR_MOTIFS as string[][]).map(motif => motif.join())).size).toBe(CONTOUR_MOTIFS.length);
  });

  it('oikea vastaus vaatii molemmat siirtymät; palaute nimeää kuullut sävelet ja virheen kohdan', () => {
    const motif = ['G3', 'D4', 'B3'];
    expect(checkContour(motif, ['ylos', 'alas']).correct).toBe(true);
    expect(checkContour(motif, ['ylos', null]).correct).toBe(false);
    expect(checkContour(motif, ['ylos', 'sama']).steps.map((step: { ok: boolean }) => step.ok)).toEqual([true, false]);
    expect(contourFeedback(motif, ['ylos', 'alas']))
      .toBe('Oikein! Kuulit G → D → B. Melodia nousi G:stä hypyllä D:hen. Melodia laski D:stä hypyllä B:hen.');
    const wrong = contourFeedback(motif, ['ylos', 'sama']);
    expect(wrong).toMatch(/^Ei vielä aivan\. Kuulit G → D → B\./);
    expect(wrong).toContain('Sävelestä 1 säveleen 2 oikein: ylös.');
    expect(wrong).toContain('Sävelestä 2 säveleen 3 vastasit ”sama sävel”. Melodia laski D:stä hypyllä B:hen.');
    expect(wrong).not.toMatch(/osaat|hallitset|taito/i);
  });

  it('kaikkien melodioiden oikea vastaus tunnistetaan oikeaksi ja jokainen väärä vääräksi', () => {
    const options = ['ylos', 'alas', 'sama'];
    for (const motif of CONTOUR_MOTIFS as string[][]) {
      const right = contourOf(motif);
      for (const first of options) {
        for (const second of options) {
          const answer = [first, second];
          expect(checkContour(motif, answer).correct).toBe(answer.join() === right.join());
        }
      }
    }
  });
});

describe('02 · Kotiin vai kesken?', () => {
  it('melodiat ovat G-duurissa, kotiloppu on G ja keskeneräinen loppu jokin muu sävel', () => {
    for (const phrase of HOME_PHRASES as { start: string[]; koti: string; kesken: string }[]) {
      for (const id of [...phrase.start, phrase.koti, phrase.kesken]) expect(G_MAJOR.has(notes[id].name), id).toBe(true);
      expect(notes[phrase.koti].name).toBe('G');
      expect(notes[phrase.kesken].name).not.toBe('G');
      // C erottaa G-duurin D-duurista; matala G (bassossa ja usein ensimmäisenä) antaa kodin.
      expect(phrase.start.some(id => notes[id].name === 'C'), phrase.start.join()).toBe(true);
      expect(notes[phrase.start.at(-1)!].name).not.toBe(notes[phrase.kesken].name);
    }
  });

  it('kahdeksan kierrosta: jokainen melodia kummallakin lopulla', () => {
    expect(HOME_ROUNDS).toBe(8);
    const rounds = Array.from({ length: HOME_ROUNDS }, (_, index) => homeRound(index));
    expect(rounds.filter(round => round.ending === 'koti')).toHaveLength(4);
    for (const round of rounds) {
      expect(round.notes).toEqual([...round.phrase.start, round.phrase[round.ending]]);
    }
  });

  it('palaute kertoo, mihin säveleen melodia pysähtyi ja miksi', () => {
    const [first, second, third] = HOME_PHRASES;
    expect(homeFeedback(first, 'koti', 'koti').correct).toBe(true);
    expect(homeFeedback(first, 'koti', 'koti').text).toMatch(/^Oikein\. Melodia palasi kotisävel G:hen/);
    expect(homeFeedback(first, 'kesken', 'koti')).toEqual({
      correct: false,
      text: 'Ei tällä kertaa. Melodia pysähtyi A:han. Se on asteikon toinen sävel, kokonaisaskel kotisävel G:n yläpuolella, ja jää odottamaan paluuta. Kuuntele vertailun vuoksi molemmat loput.',
    });
    expect(homeFeedback(second, 'kesken', 'kesken').text).toContain('Melodia pysähtyi F♯:ään. Se on asteikon seitsemäs sävel, vain puoliaskel');
    expect(homeFeedback(third, 'kesken', 'kesken').text).toContain('Melodia pysähtyi C:hen. Se on asteikon neljäs sävel.');
  });

  it('matala G soi alussa ja hiipuu ennen näytteen loppua; melodian viimeinen sävel on pisin', () => {
    for (let index = 0; index < HOME_ROUNDS; index++) {
      const plan = homePlan(homeRound(index).notes) as Event[];
      expect(plan[0]).toMatchObject({ pitch: 'LowE:G2', at: 0, gain: BASS_GAIN });
      expect(plan[0].duration).toBeLessThanOrEqual(4.8);
      const melody = plan.slice(1);
      expect(melody.map(event => event.pitch)).toEqual(homeRound(index).notes.map((id: string) => notes[id].sample));
      expect(melody.at(-1)!.duration).toBe(TIMING.koti.last);
      expect(planEnd(plan)).toBeLessThan(5.2);
    }
    expect((HOME_TONE_PLAN as Event[]).map(event => event.pitch)).toEqual(['LowE:G2', 'G:G3']);
  });
});

describe('03 · Kuule ja etsi kitaralta', () => {
  it('kaikki kulut alkavat vapaalta G-kieleltä ja loput sävelet löytyvät viidestä paikasta', () => {
    const keys = new Set<string>();
    for (const motif of ECHO_MOTIFS as string[][]) {
      expect(motif[0]).toBe('G3');
      expect(motif).toHaveLength(3);
      for (const id of motif.slice(1)) expect(ECHO_POSITIONS).toContain(id);
      keys.add(motif.join());
    }
    expect(keys.size).toBe(ECHO_MOTIFS.length);
    // Sekä nousevia, laskevia että samaa säveltä toistavia siirtymiä.
    const moves = new Set((ECHO_MOTIFS as string[][]).flatMap(motif => contourOf(motif)));
    expect(moves).toEqual(new Set(['ylos', 'alas', 'sama']));
  });

  it('tarkistus vertaa säveliä 2 ja 3; palaute antaa kitaran paikat', () => {
    const motif = ['G3', 'B3', 'A3'];
    expect(checkEcho(motif, ['B3', 'A3']).correct).toBe(true);
    expect(checkEcho(motif, ['A3', 'B3']).correct).toBe(false);
    expect(echoFeedback(motif, ['B3', 'A3'])).toBe(
      'Oikein! Kuulit G → B → A. Melodia nousi G:stä hypyllä B:hen. Melodia laski B:stä askeleella A:han. '
      + 'Soita sama kitaralla: G-kieli, vapaa → B-kieli, vapaa → G-kieli, 2. nauha.');
    const wrong = echoFeedback(motif, ['B3', 'C4']);
    expect(wrong).toContain('Sävel 2 oikein: B (B-kieli, vapaa).');
    expect(wrong).toContain('Sävel 3: valitsit C, mutta kuului A (G-kieli, 2. nauha). Melodia laski B:stä askeleella A:han.');
    expect(wrong).toMatch(/Soita koko kulku kitaralla: G-kieli, vapaa → B-kieli, vapaa → G-kieli, 2\. nauha\.$/);
  });
});

describe('toisto ja satunnaistus', () => {
  it('uusi tehtävä ei ole sama kuin edellinen, ja jokainen vaihtoehto voi tulla valituksi', () => {
    for (const length of [CONTOUR_MOTIFS.length, HOME_ROUNDS, ECHO_MOTIFS.length]) {
      const seen = new Set<number>();
      for (let step = 0; step < length; step++) {
        const random = sequence([(step + .5) / length]);
        const index = pickIndex(length, -1, random);
        seen.add(index);
        expect(pickIndex(length, index, sequence([(step + .5) / length]))).not.toBe(index);
      }
      expect(seen.size).toBe(length);
    }
    expect(pickIndex(5, -1, () => 0.999999)).toBe(4);
    expect(pickIndex(5, -1, () => 1)).toBe(4);
  });

  it('melodian sävelet tulevat tasaisesti ja mahtuvat ääninäytteen pituuteen', () => {
    for (const [name, timing] of Object.entries(TIMING) as [string, typeof TIMING.suunta][]) {
      const plan = melodyPlan(['G3', 'B3', 'D4'], timing) as Event[];
      expect(plan.map(event => event.at), name).toEqual([0, timing.ioi, 2 * timing.ioi].map(value => expect.closeTo(value, 9)));
      expect(plan.map(event => event.duration)).toEqual([timing.duration, timing.duration, timing.last]);
      for (const event of plan) expect(event.duration).toBeLessThan(SAMPLE_SECONDS);
    }
    expect(singleNotePlan('C4')).toEqual([{ pitch: 'B:C4', at: 0, duration: 1.1, gain: 0.42 }]);
  });
});

describe('aihesivu ja tunnisteet', () => {
  const topic = read('oppi/korva/index.html');

  it('Ydinopinnot on ensin; 14 aiempaa sisältöä säilyvät samoissa osoitteissa, tunnisteissa ja järjestyksessä', () => {
    expect(topic).toMatch(/<div class="study-units">\s+<details class="study-unit" id="ydinopinnot">/);
    const statuses = [...topic.matchAll(/data-study-status="([^"]+)"/g)].map(([, id]) => id);
    expect(statuses).toEqual(legacy.map(([, id]) => id));
    const legacyPart = topic.slice(topic.indexOf('id="aiemmat"'), topic.indexOf('<h2>Harjoittelijat ja työkalut</h2>'));
    expect([...legacyPart.matchAll(/class="study-choice" id="valinta-([^"]+)" href="([^"]+)"/g)].map(([, slug, href]) => [slug, href]))
      .toEqual(legacy.map(([slug]) => [slug, `${slug}.html`]));
    expect([...legacyPart.matchAll(/<section class="study-group"><h2>([^<]+)<\/h2>/g)].map(([, title]) => title)).toEqual([
      'Kotisävel ja fraasin loppu', 'Asteet ja sävelvälit korvalla', 'Bassolinjan kuuleminen', 'Duuri, molli ja septimi korvalla',
    ]);
    expect(topic).toMatch(/<details class="study-unit study-unit--legacy" id="aiemmat">\n\s+<summary><span class="study-unit-title">Aiemmat oppitunnit ja harjoitukset<\/span><span class="study-unit-count">14 sisältöä<\/span>/);
    for (const [slug, id] of legacy) {
      const html = read(`oppi/korva/${slug}.html`);
      expect(html).toContain(`data-study-item="${id}"`);
      // Vanhoille sivuille ei tule uutta melodiamoduulia.
      expect(html).not.toContain('melodia-ydinopinnot');
    }
    const last = read('oppi/korva/kolme-c-sointua.html').match(/data-topic-items="([^"]+)"/)![1].split(' ');
    expect(last).toEqual(legacy.map(([, id]) => id));
  });

  it('uusilla harjoituksilla on omat Kokeiltu-tunnisteet, jotka eivät kuulu aiempiin laskureihin', () => {
    const ids = lessons.map(slug => 'harjoitus:' + slug);
    expect([...topic.matchAll(/data-study-attempt-status="([^"]+)"/g)].map(([, id]) => id)).toEqual(ids);
    const home = read('index.html').match(/href="oppi\/korva\/index.html" data-study-items="([^"]+)"/)![1].split(' ');
    expect(home).toEqual(legacy.map(([, id]) => id));
    const path = read('oppi/kappaleet/aanita-kahdeksan-tahtia.html').match(/data-path-items="([^"]+)"/)![1].split(' ');
    for (const id of ids) {
      expect(home).not.toContain(id);
      expect(path).not.toContain(id);
    }
    lessons.forEach((slug, index) => {
      const html = read(`oppi/korva/${slug}.html`);
      expect(html).toContain(`data-study-item="${ids[index]}" data-study-kind="harjoitus" data-study-mark="kokeiltu"`);
      expect(html).toContain('aria-pressed="false" disabled>Merkitse kokeilluksi');
      expect(html).toContain(`href="index.html#valinta-${slug}"`);
      expect(html).toMatch(/<link rel="stylesheet" href="\.\.\/\.\.\/assets\/melodia-ydinopinnot\.css\?v=[0-9a-f]{10}">/);
      expect(html).toMatch(/<script type="module" src="\.\.\/\.\.\/assets\/melodia-ydinopinnot\.js\?v=[0-9a-f]{10}"><\/script>/);
      expect(topic).toContain(`<details class="study-inline" name="ydinopinnot-harjoitukset" data-study-item="${ids[index]}"`);
      expect(topic).toContain(`href="${slug}.html" data-return-topic="valinta-${slug}">Avaa omalla sivullaan</a>`);
    });
  });

  it('vastaus ei näy sivulla ennen vastaamista ja merkinnät eivät väitä taitoa todistetuksi', () => {
    for (const slug of lessons) {
      const html = read(`oppi/korva/${slug}.html`);
      // Kuultu melodia piirretään vasta vastauksen jälkeen; lista on aluksi tyhjä ja piilossa.
      expect(html).toMatch(/<div class="melodia-kaari" data-melodia-kaari hidden>\s*<h3>[^<]+<\/h3>\s*<ol aria-label="[^"]+"><\/ol>/);
      expect(html).not.toMatch(/data-(oikea|vastaus-oikein|melodia-savelet)=/);
      expect(html).toContain('Sivu ei kuuntele omaa soittoasi tai hyräilyäsi. ”Kokeiltu” ei ole osaamistesti.');
      // Ohjaimet näkyvät vasta, kun JavaScript on käynnistänyt harjoituksen.
      expect(html).toContain('<p class="melodia-tila" data-melodia-tila role="status" aria-live="polite">Ääniesimerkki tarvitsee JavaScriptin ja selaimen äänituen.</p>');
      expect(html.match(/data-melodia-ohjaimet hidden/g)!.length).toBeGreaterThan(0);
      expect(html).not.toMatch(/data-melodia-ohjaimet(?! hidden)/);
      // Kansainvälinen sävelnimistö: ei H-nimeä tämän aiheen uusissa sisällöissä.
      expect(read(`tools/oppimiskartta/sisallot/korva/${slug}.html`)).not.toMatch(/\bH\b|\bH-/);
    }
  });

  it('muiden aiheiden sivut eivät lataa melodiamoduulia', () => {
    for (const file of ['oppi/rytmi/index.html', 'oppi/soinnut/index.html', 'oppi/soinnut/kuule-ja-kokoa-sointu.html', 'oppi/savelnimet/index.html']) {
      expect(read(file), file).not.toContain('melodia-ydinopinnot');
    }
  });
});
