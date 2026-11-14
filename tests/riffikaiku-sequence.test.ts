// Riffikaiun puhdas säveljonon tarkistaja, suojavaihe, riffit ja tallennus. Ei ääntä.
import { describe, it, expect } from 'vitest';
import { MEMORY_AFTER_FAILED, OutputSettler, SequenceChecker, SequencePractice } from '../riffikaiku/sequence';
import { ALL_STRINGS, CHECK_MIDI, LEVELS, OPEN_STRINGS, RIFFS, TUTORIAL, levelOf, playableOn, riffById } from '../riffikaiku/riffs';
import { RIFF_STORAGE_KEY, RiffStore, decodeRiffData, type RiffResult } from '../riffikaiku/store';
import { music } from '../harjoittelija/music';
import { STORAGE_KEY } from '../harjoittelija/storage';

const mic = (checker: SequenceChecker, midi: number, round = checker.round) => checker.feed({ midi, round, input: 'mic' });

describe('SequenceChecker', () => {
  it('[59,60,62,60]: neljä oikeaa tapahtumaa järjestyksessä → yksi valmis kierros', () => {
    const c = new SequenceChecker([59, 60, 62, 60], 1, 'mic');
    expect([59, 60, 62].map(m => mic(c, m))).toEqual([
      { type: 'accepted', index: 0, midi: 59, complete: false, mark: 'green' },
      { type: 'accepted', index: 1, midi: 60, complete: false, mark: 'green' },
      { type: 'accepted', index: 2, midi: 62, complete: false, mark: 'green' },
    ]);
    expect(mic(c, 60)).toEqual({ type: 'accepted', index: 3, midi: 60, complete: true, mark: 'green' });
    expect(c.complete).toBe(true); expect(c.next).toBeNull();
    // Valmiin jonon jälkeen mikään ei muuta tulosta.
    expect(mic(c, 60)).toEqual({ type: 'ignored', reason: 'complete' });
    expect(c.index).toBe(4); expect(c.wrongCount).toBe(0);
  });

  it('[59,62,60,62,60]: väärä kohta ei etene, sama kohta voidaan yrittää uudelleen', () => {
    const c = new SequenceChecker([59, 60, 62, 60], 1, 'mic');
    const events = [59, 62, 60, 62, 60].map(m => mic(c, m));
    expect(events.map(e => e.type)).toEqual(['accepted', 'wrong', 'accepted', 'accepted', 'accepted']);
    expect(events[1]).toEqual({ type: 'wrong', index: 1, expected: 60, played: 62, octave: false });
    expect(c.complete).toBe(true); expect(c.wrongCount).toBe(1);
  });

  it('väärä sävel ei koskaan siirrä indeksiä, vaikka niitä tulisi monta', () => {
    const c = new SequenceChecker([59, 60, 62, 60], 1, 'board');
    for (const m of [64, 65, 67, 55, 61]) expect(c.feed({ midi: m, round: 1, input: 'board' }).type).toBe('wrong');
    expect(c.index).toBe(0); expect(c.wrongCount).toBe(5);
  });

  it('A–A–C–A [57,57,60,57]: toistuva sävel vaatii kaksi erillistä tapahtumaa', () => {
    const c = new SequenceChecker([57, 57, 60, 57], 1, 'mic');
    expect(mic(c, 57)).toMatchObject({ type: 'accepted', index: 0 });
    expect(c.index).toBe(1);
    expect(mic(c, 57)).toMatchObject({ type: 'accepted', index: 1 });
    expect(mic(c, 60)).toMatchObject({ type: 'accepted', index: 2 });
    expect(mic(c, 57)).toMatchObject({ type: 'accepted', index: 3, complete: true });
  });

  it('väärä oktaavi on väärä sävel: odotettu A3 (57), soitettu A4 (69) tai A2 (45) → punainen, ei etene', () => {
    const c = new SequenceChecker([57, 57, 60, 57], 1, 'mic');
    expect(mic(c, 69)).toEqual({ type: 'wrong', index: 0, expected: 57, played: 69, octave: true });
    expect(mic(c, 45)).toEqual({ type: 'wrong', index: 0, expected: 57, played: 45, octave: true });
    expect(c.index).toBe(0); expect(c.wrongCount).toBe(2); expect(c.octaveCount).toBe(2);
    expect(c.marks[0]).toBe('red');
    mic(c, 57);
    expect(c.marks[0]).toBe('yellow');
  });

  it('vanhan kierroksen ja väärän syötetavan vastaus ohitetaan', () => {
    const c = new SequenceChecker([59, 60], 7, 'mic');
    expect(c.feed({ midi: 59, round: 6, input: 'mic' })).toEqual({ type: 'ignored', reason: 'stale-round' });
    expect(c.feed({ midi: 59, round: 7, input: 'board' })).toEqual({ type: 'ignored', reason: 'wrong-input' });
    expect(c.index).toBe(0);
  });

  it('vihje kirjataan kierrokselle eikä sitä voi perua', () => {
    const c = new SequenceChecker([59], 1, 'mic');
    expect(c.hintUsed).toBe(false); c.useHint(); expect(c.hintUsed).toBe(true);
  });

  it('tyhjä tai murtolukuinen jono hylätään', () => {
    expect(() => new SequenceChecker([], 1, 'mic')).toThrow();
    expect(() => new SequenceChecker([59.5], 1, 'mic')).toThrow();
  });
});

describe('SequencePractice: kokonaisyritykset ja muistivihjeet', () => {
  /** Soittaa yrityksen: 'g' = oikein heti, 'y' = ensin väärä (+1 puolisävel), sitten oikein. */
  function attempt(p: SequencePractice, round: number, pattern: string) {
    const a = p.start(round);
    [...pattern].forEach((kind, i) => {
      if (kind === 'y') a.feed({ midi: p.expected[i] + 1, round, input: p.input });
      a.feed({ midi: p.expected[i], round, input: p.input });
    });
    return { attempt: a, passed: p.finish() };
  }
  const riff = [59, 60, 62, 60];

  it('1. ja 2. epäonnistunut kokonaisyritys eivät avaa muistivihjeitä; 3. avaa', () => {
    expect(MEMORY_AFTER_FAILED).toBe(3);
    const p = new SequencePractice(riff, 'board');
    expect(p.memory).toEqual([null, null, null, null]);
    expect(attempt(p, 1, 'gyyg').passed).toBe(false);
    expect(p.failedAttempts).toBe(1); expect(p.memoryActive).toBe(false); expect(p.memory).toEqual([null, null, null, null]);
    attempt(p, 2, 'yyyg');
    expect(p.failedAttempts).toBe(2); expect(p.memory).toEqual([null, null, null, null]);
    attempt(p, 3, 'yygy');
    expect(p.failedAttempts).toBe(3); expect(p.memoryActive).toBe(true);
    // Paikat 1, 3 ja 4 on joskus soitettu heti oikein; paikka 2 ei koskaan.
    expect(p.memory).toEqual([59, null, 62, 60]);
  });
  it('yksittäiset väärät näppäilyt ja kesken aloitettu alusta eivät kasvata kokonaisyritysten laskuria', () => {
    const p = new SequencePractice(riff, 'mic');
    const a = p.start(1);
    for (let i = 0; i < 5; i++) a.feed({ midi: 70, round: 1, input: 'mic' });
    expect(p.failedAttempts).toBe(0);
    a.feed({ midi: 59, round: 1, input: 'mic' });
    p.start(2); // kesken alusta
    expect(p.failedAttempts).toBe(0);
    expect(p.finish()).toBe(false); // keskeneräinen yritys ei ole kokonaisyritys
    expect(p.failedAttempts).toBe(0);
  });
  it('muisti on paikkakohtainen: sama sävel (C4 paikoissa 2 ja 4) muistetaan erikseen', () => {
    const p = new SequencePractice(riff, 'board');
    attempt(p, 1, 'ggyy'); attempt(p, 2, 'ggyy'); attempt(p, 3, 'ggyy');
    expect(p.memory).toEqual([59, 60, null, null]);
  });
  it('muistivihjeet eivät hyväksy mitään: uusi yritys alkaa harmaana ja värit tulevat soitosta', () => {
    const p = new SequencePractice(riff, 'board');
    for (let r = 1; r <= 3; r++) attempt(p, r, 'gggy');
    const a = p.start(4);
    expect(a.marks).toEqual(['pending', 'pending', 'pending', 'pending']); expect(a.index).toBe(0);
    expect(p.memory).toEqual([59, 60, 62, null]);
    a.feed({ midi: 61, round: 4, input: 'board' });
    expect(a.marks[0]).toBe('red');
    for (const m of riff) a.feed({ midi: m, round: 4, input: 'board' });
    expect(a.marks).toEqual(['yellow', 'green', 'green', 'green']);
    expect(p.finish()).toBe(false); expect(p.failedAttempts).toBe(4);
  });
  it('virheetön yritys läpäisee eikä kasvata laskuria; uusi yritys palauttaa etenemisen alkuun', () => {
    const p = new SequencePractice(riff, 'mic');
    attempt(p, 1, 'gyyg');
    const next = p.start(2);
    expect(next.index).toBe(0); expect(next.marks.every(m => m === 'pending')).toBe(true);
    for (const m of riff) next.feed({ midi: m, round: 2, input: 'mic' });
    expect(p.finish()).toBe(true); expect(p.failedAttempts).toBe(1);
  });
});

describe('OutputSettler: mallisoiton jälkeinen suojavaihe', () => {
  it('ei valmistu pelkällä ajastimella, jos ääntä kuuluu: tarvitaan hiljaisuus', () => {
    const s = new OutputSettler(250, 150, 1500); s.start(0);
    for (let t = 0; t <= 1400; t += 20) expect(s.feed(false, t)).toBe('settling');
  });
  it('valmistuu, kun minimiaika on kulunut ja tulo on ollut hiljaa 150 ms', () => {
    const s = new OutputSettler(250, 150, 1500); s.start(0);
    // Häntä soi 300 ms, sitten hiljaista.
    let t = 0, result = 'settling';
    for (; t <= 300; t += 20) expect(s.feed(false, t)).toBe('settling');
    for (; result === 'settling'; t += 20) result = s.feed(true, t);
    expect(result).toBe('ready-quiet'); expect(t - 20).toBeGreaterThanOrEqual(450);
  });
  it('hiljainen alku ei ohita minimiaikaa', () => {
    const s = new OutputSettler(250, 150, 1500); s.start(0);
    expect(s.feed(true, 0)).toBe('settling'); expect(s.feed(true, 200)).toBe('settling');
    expect(s.feed(true, 260)).toBe('ready-quiet');
  });
  it('jatkuva ääni päättää vaiheen aikarajalla (NoteGate vaatii silti uuden alukkeen)', () => {
    const s = new OutputSettler(250, 150, 1500); s.start(0);
    expect(s.feed(false, 1499)).toBe('settling'); expect(s.feed(false, 1500)).toBe('ready-timeout');
    expect(s.feed(true, 2000)).toBe('settling'); // ei käynnissä
  });
});


describe('SequenceChecker: pallukat (vihreä / punainen / keltainen)', () => {
  const board = (c: SequenceChecker, midi: number) => c.feed({ midi, round: c.round, input: 'board' });
  it('kaikki heti oikein → kaikki vihreitä, virheetön', () => {
    const c = new SequenceChecker([59, 60, 62, 60], 1, 'board');
    expect(c.marks).toEqual(['pending', 'pending', 'pending', 'pending']);
    expect(board(c, 59)).toMatchObject({ type: 'accepted', mark: 'green' });
    expect(c.marks).toEqual(['green', 'pending', 'pending', 'pending']);
    for (const m of [60, 62, 60]) board(c, m);
    expect(c.marks).toEqual(['green', 'green', 'green', 'green']);
    expect(c.flawless).toBe(true);
  });
  it('väärä sävel muuttaa nykyisen kohdan punaiseksi; korjaus tekee siitä keltaisen; riffin saa soittaa loppuun', () => {
    const c = new SequenceChecker([59, 60, 62, 60], 1, 'board');
    board(c, 59); board(c, 64);
    expect(c.marks).toEqual(['green', 'red', 'pending', 'pending']);
    board(c, 65);
    expect(c.marks).toEqual(['green', 'red', 'pending', 'pending']);
    expect(board(c, 60)).toMatchObject({ type: 'accepted', index: 1, mark: 'yellow' });
    board(c, 62);
    expect(board(c, 60)).toMatchObject({ type: 'accepted', complete: true, mark: 'green' });
    expect(c.marks).toEqual(['green', 'yellow', 'green', 'green']);
    expect(c.complete).toBe(true); expect(c.flawless).toBe(false);
  });
  it('ohjeen esimerkki C4–D4–E4–D4: C4, G4, D4, E4, D4 → vihreä–keltainen–vihreä–vihreä, ei läpäisyä', () => {
    const c = new SequenceChecker([60, 62, 64, 62], 1, 'board');
    board(c, 60); expect(c.marks).toEqual(['green', 'pending', 'pending', 'pending']); expect(c.index).toBe(1);
    board(c, 67); expect(c.marks).toEqual(['green', 'red', 'pending', 'pending']); expect(c.index).toBe(1);
    board(c, 62); expect(c.marks).toEqual(['green', 'yellow', 'pending', 'pending']); expect(c.index).toBe(2);
    board(c, 64); board(c, 62);
    expect(c.marks).toEqual(['green', 'yellow', 'green', 'green']);
    expect(c.complete).toBe(true); expect(c.flawless).toBe(false);
    const again = new SequenceChecker([60, 62, 64, 62], 2, 'board');
    for (const m of [60, 62, 64, 62]) board(again, m);
    expect(again.marks).toEqual(['green', 'green', 'green', 'green']); expect(again.flawless).toBe(true);
  });
  it('useita vääriä samassa kohdassa; vihreä pysyy vihreänä ja keltainen keltaisena saman yrityksen ajan', () => {
    const c = new SequenceChecker([59, 60, 62], 1, 'board');
    board(c, 59);
    for (const m of [64, 65, 55]) expect(board(c, m)).toMatchObject({ type: 'wrong', index: 1 });
    expect(c.index).toBe(1); expect(c.wrongCount).toBe(3);
    board(c, 60);
    // Väärä sävel seuraavassa kohdassa ei muuta aiempia paikkoja.
    board(c, 64);
    expect(c.marks).toEqual(['green', 'yellow', 'red']);
    board(c, 62);
    expect(c.marks).toEqual(['green', 'yellow', 'yellow']);
    expect(board(c, 59)).toEqual({ type: 'ignored', reason: 'complete' });
    expect(c.marks).toEqual(['green', 'yellow', 'yellow']);
  });
  it('sama logiikka mikrofonille ja otelaudalle', () => {
    const a = new SequenceChecker([59, 60], 1, 'mic'), b = new SequenceChecker([59, 60], 1, 'board');
    for (const m of [59, 62, 60]) { mic(a, m); board(b, m); }
    expect(a.marks).toEqual(b.marks); expect(a.marks).toEqual(['green', 'yellow']);
  });
});

describe('tasot ja riffit', () => {
  it('avoimet kielet ovat samat kuin otelautakirjastossa', () => {
    expect([...OPEN_STRINGS]).toEqual(music.OPEN_PITCHES);
  });
  it('neljä tasoa × kolme neljän sävelen riffiä, tunnisteet uniikit, ehdotetut paikat vastaavat säveliä', () => {
    expect(LEVELS.map(l => l.number)).toEqual([1, 2, 3, 4]);
    expect(LEVELS.map(l => l.riffs.length)).toEqual([3, 3, 3, 3]);
    expect(new Set(RIFFS.map(r => r.id)).size).toBe(12);
    for (const r of RIFFS) {
      expect(r.midi, r.id).toHaveLength(4);
      expect(r.midi, r.id).toEqual(r.spots.map(p => music.OPEN_PITCHES[p.string] + p.fret));
      expect(levelOf(r.id)!.riffs).toContain(r);
    }
  });
  it('kielet: tasot 1–2 vain B-kieli, taso 3 kaksi kieltä, taso 4 koko otelauta', () => {
    expect(LEVELS.map(l => l.strings)).toEqual([[1], [1], [1, 2], ALL_STRINGS]);
    expect(LEVELS[0].instruction).toBe('Soita B-kielellä (toiseksi ohuin kieli).');
  });
  it('jokaisen riffin kaikki sävelet ja ehdotetut paikat löytyvät tason virtuaaliotelaudalta (nauhat 0–5)', () => {
    for (const level of LEVELS) for (const r of level.riffs) {
      for (const midi of r.midi) expect(playableOn(midi, level.strings), `${r.id} ${midi}`).toBe(true);
      for (const p of r.spots) {
        expect(level.strings, r.id).toContain(p.string);
        expect(p.fret >= 0 && p.fret <= 5, r.id).toBe(true);
      }
    }
    // Opastus soitetaan tason 1 otelaudalla.
    expect(TUTORIAL.midi.every(m => playableOn(m, LEVELS[0].strings))).toBe(true);
  });
  it('taso 1 alkaa B3–C4–D4–C4 (B-kieli 0-1-3-1); A–A–C–A on tasolla 3; vaikeus kasvaa', () => {
    expect(LEVELS[0].riffs[0]).toMatchObject({ id: 'b-kaari', midi: [59, 60, 62, 60] });
    expect(LEVELS[0].riffs[0].spots).toEqual([0, 1, 3, 1].map(fret => ({ string: 1, fret })));
    expect(LEVELS[2].riffs.some(r => r.midi.join() === '57,57,60,57')).toBe(true);
    // Tason 1 askeleet ovat pieniä (enintään 2 puolisävelaskelta), tasolla 2 hypyt ovat isompia.
    const maxStep = (r: { midi: number[] }) => Math.max(...r.midi.slice(1).map((m, i) => Math.abs(m - r.midi[i])));
    expect(Math.max(...LEVELS[0].riffs.map(maxStep))).toBeLessThanOrEqual(2);
    expect(Math.max(...LEVELS[1].riffs.map(maxStep))).toBeGreaterThan(2);
    expect(TUTORIAL.midi).toEqual([59, 60]); expect(CHECK_MIDI).toBe(59);
    expect(riffById('opastus')).toBe(TUTORIAL); expect(riffById('ei-ole')).toBeUndefined();
    expect(playableOn(64, [1])).toBe(true); expect(playableOn(65, [1])).toBe(false); expect(playableOn(55, [1])).toBe(false);
  });
});

function memoryStorage(initial: Record<string, string> = {}) {
  const map = new Map(Object.entries(initial));
  return { map, getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => { map.set(k, v); } };
}
const result = (patch: Partial<RiffResult>): RiffResult => ({ riff: 'b-kaari', input: 'mic', hint: false, wrong: 0, octave: 0, replays: 0, ms: 5000, at: 1, passed: true, ...patch });
const passLevel = (store: RiffStore, input: 'mic' | 'board', level: number) =>
  LEVELS[level - 1].riffs.map(r => store.record(result({ riff: r.id, input })).levelComplete);

describe('RiffStore: tasot ja oma tallennus', () => {
  it('taso läpäistään kolmella virheettömällä riffillä; keltaisilla soitettu yritys ei riitä', () => {
    const store = new RiffStore(memoryStorage());
    expect(store.run('board')).toEqual({ level: 1, passed: [] });
    expect(store.currentRiff('board')!.id).toBe('b-kaari');
    expect(store.record(result({ riff: 'b-kaari', input: 'board', passed: false, wrong: 1 })).levelComplete).toBe(false);
    expect(store.currentRiff('board')!.id).toBe('b-kaari');
    expect(store.record(result({ riff: 'b-kaari', input: 'board' })).levelComplete).toBe(false);
    expect(store.currentRiff('board')!.id).toBe('b-vaihto');
    expect(store.record(result({ riff: 'b-vaihto', input: 'board' })).levelComplete).toBe(false);
    expect(store.record(result({ riff: 'b-lasku', input: 'board' })).levelComplete).toBe(true);
    expect(store.currentRiff('board')).toBeNull();
    expect(store.completedLevels('board')).toEqual([1]);
    // Ei automaattista siirtoa: taso pysyy, kunnes pelaaja valitsee.
    expect(store.run('board').level).toBe(1);
    expect(store.data.stats.board['b-kaari']).toMatchObject({ done: 2, passed: 1, solo: 1 });
  });
  it('seuraava taso ja tason uusinta: läpäisy säilyy, uusi kierros alkaa ensimmäisestä riffistä', () => {
    const store = new RiffStore(memoryStorage());
    passLevel(store, 'board', 1);
    store.startLevel('board', 2);
    expect(store.currentRiff('board')!.id).toBe('b-kumpu');
    expect(passLevel(store, 'board', 2)).toEqual([false, false, true]);
    store.startLevel('board', 2);
    expect(store.run('board')).toEqual({ level: 2, passed: [] });
    expect(store.completedLevels('board')).toEqual([1, 2]);
    // Uusinta voi läpäistä tason uudelleen; läpäisy ei monistu.
    expect(passLevel(store, 'board', 2)).toEqual([false, false, true]);
    expect(store.completedLevels('board')).toEqual([1, 2]);
    store.startLevel('board', 9);
    expect(store.run('board').level).toBe(2);
  });
  it('toisen tason riffi tai sama riffi uudelleen ei kasvata kierrosta', () => {
    const store = new RiffStore(memoryStorage());
    store.record(result({ riff: 'b-kumpu', input: 'mic' }));
    store.record(result({ riff: 'b-kaari', input: 'mic' }));
    store.record(result({ riff: 'b-kaari', input: 'mic' }));
    expect(store.run('mic')).toEqual({ level: 1, passed: ['b-kaari'] });
  });
  it('mikrofonin ja otelaudan tasot ja tulokset pysyvät erillään', () => {
    const store = new RiffStore(memoryStorage());
    passLevel(store, 'board', 1);
    store.record(result({ input: 'mic', hint: true }));
    expect(store.completedLevels('board')).toEqual([1]); expect(store.completedLevels('mic')).toEqual([]);
    expect(store.run('mic')).toEqual({ level: 1, passed: ['b-kaari'] });
    expect(store.data.stats.mic['b-kaari']).toEqual({ done: 1, passed: 1, solo: 0, lastAt: 1 });
    expect(store.data.stats.board['b-kaari']).toEqual({ done: 1, passed: 1, solo: 1, lastAt: 1 });
    expect(store.data.results.map(r => r.input)).toEqual(['board', 'board', 'board', 'mic']);
    expect(store.data.results.map(r => r.level)).toEqual([1, 1, 1, 1]);
  });
  it('uusi sivulataus palauttaa tason, kierroksen, läpäistyt tasot ja otelautavalinnan; v3-data ei muutu', () => {
    const v3 = JSON.stringify({ version: 3, settings: {}, stats: { 'mic:class:solo:notes:1:0': { attempts: 1, correct: 1, errors: 0, totalMs: 1, lastSeen: 1 } }, recent: [], sessions: [] });
    const storage = memoryStorage({ [STORAGE_KEY]: v3 });
    const store = new RiffStore(storage);
    store.finishTutorial(); store.setInput('board'); store.setFullBoard(true);
    passLevel(store, 'board', 1); store.startLevel('board', 2);
    store.record(result({ riff: 'b-kumpu', input: 'board' }));
    const again = new RiffStore(storage);
    expect(again.data).toMatchObject({ tutorialDone: true, input: 'board', fullBoard: true });
    expect(again.run('board')).toEqual({ level: 2, passed: ['b-kumpu'] });
    expect(again.completedLevels('board')).toEqual([1]);
    expect(again.currentRiff('board')!.id).toBe('b-toisto');
    expect(storage.map.get(STORAGE_KEY)).toBe(v3);
    expect([...storage.map.keys()].sort()).toEqual([STORAGE_KEY, RIFF_STORAGE_KEY].sort());
    expect(RIFF_STORAGE_KEY).toBe('musiikin-kartta:riffikaiku:v1');
  });
  it('0.1-version tallennus (ilman tasokenttiä) luetaan: tilastot säilyvät, taso 1 alkaa', () => {
    const old = JSON.stringify({ version: 1, tutorialDone: true, input: 'mic', stats: { mic: { 'b-kaari': { done: 2, solo: 1, lastAt: 5 } }, board: {} },
      results: [{ riff: 'b-kaari', input: 'mic', hint: false, wrong: 0, octave: 0, replays: 0, ms: 1, at: 5 }] });
    const store = new RiffStore(memoryStorage({ [RIFF_STORAGE_KEY]: old }));
    expect(store.data).toMatchObject({ tutorialDone: true, fullBoard: false, run: { mic: { level: 1, passed: [] } }, levels: { mic: [], board: [] } });
    expect(store.data.stats.mic['b-kaari']).toEqual({ done: 2, solo: 1, lastAt: 5 });
    expect(store.data.results).toHaveLength(1);
  });
  it('opastus ei ole tasotulos', () => {
    const store = new RiffStore(memoryStorage());
    expect(store.record(result({ riff: 'opastus' })).levelComplete).toBe(false);
    expect(store.data.tutorialDone).toBe(true); expect(store.data.results).toEqual([]);
  });
  it('rikkinäinen, tuntematon tai heittävä tallennus ei kaada peliä', () => {
    expect(decodeRiffData('{rikki')).toMatchObject({ version: 1, tutorialDone: false });
    expect(decodeRiffData(JSON.stringify({ version: 9, tutorialDone: true })).tutorialDone).toBe(false);
    const bad = decodeRiffData(JSON.stringify({ version: 1, input: 'x', stats: { mic: { a: { done: 1, solo: 2, lastAt: 0 }, b: { done: 2, solo: 1, lastAt: 3 } } },
      results: [{ riff: 1 }, result({})], run: { mic: { level: 7, passed: [] }, board: { level: 2, passed: ['b-kumpu', 'b-kaari', 'x'] } }, levels: { mic: [1, 1, 9], board: 'x' } }));
    expect(bad.input).toBe('mic'); expect(Object.keys(bad.stats.mic)).toEqual(['b']); expect(bad.results).toHaveLength(1);
    expect(bad.run).toEqual({ mic: { level: 1, passed: [] }, board: { level: 2, passed: ['b-kumpu'] } });
    expect(bad.levels).toEqual({ mic: [1], board: [] });
    const throwing = { getItem: () => { throw new Error('estetty'); }, setItem: () => { throw new Error('estetty'); } };
    const store = new RiffStore(throwing);
    expect(() => passLevel(store, 'mic', 1)).not.toThrow();
    expect(store.completedLevels('mic')).toEqual([1]);
  });
});
