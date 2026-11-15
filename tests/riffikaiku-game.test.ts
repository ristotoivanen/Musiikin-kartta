// Riffikaiku-peli – virtuaalikitara: tilakone sovitinrajapinnan kautta. Kulku: Kuuntele → Harjoittele
// vapaasti → Nyt riffataan! → Palaute → Jatka. Oikean kitaran harjoitus testataan tiedostossa
// riffikaiku-practice.test.ts ja signaaliketju tiedostossa riffikaiku-pipeline.test.ts.
import { afterEach, describe, it, expect, vi } from 'vitest';
import { RiffGame, gameSummary } from '../riffikaiku/game';
import { GUIDANCE, LEVELS, TUTORIAL, type Guidance, type Level } from '../riffikaiku/riffs';
import { RiffStore } from '../riffikaiku/store';
import { fakeAudio, flush, memoryStorage } from './riffikaikuFakes';

afterEach(() => { vi.useRealTimers(); });

function setup({ tutorialDone = false } = {}) {
  const audio = fakeAudio(), storage = memoryStorage();
  const store = new RiffStore(storage);
  if (tutorialDone) store.finishTutorial();
  const game = new RiffGame(audio, store, () => 0);
  const finishModel = async () => { audio.models.shift()!.resolve(true); await flush(); };
  const playBoard = (notes: number[]) => notes.forEach(m => game.tap(m));
  /** Riffi auki (malli soi heti) → malli loppuun → Nyt riffataan! */
  const toTake = async () => { if (game.getState().modelPlaying) await finishModel(); game.startTake(); expect(game.getState().phase).toBe('take'); };
  return { audio, storage, store, game, finishModel, playBoard, toTake, s: () => game.getState() };
}
const KT1 = LEVELS[0].riffs.map(r => r.midi), KT2 = LEVELS[1].riffs.map(r => r.midi);
const record = (store: RiffStore, riff: string, patch: Partial<Parameters<RiffStore['record']>[0]> = {}) =>
  store.record({ riff, input: 'board', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1, ...patch });
/** Opastustason vaihto testin ajaksi: taso tulee datasta, ei tasonumerosta. */
function withGuidance(level: number, guidance: Guidance) {
  const l = LEVELS[level - 1] as Level, before = l.guidance;
  l.guidance = guidance;
  return () => { l.guidance = before; };
}

describe('riffin aloitus: malli soi heti', () => {
  it('Aloita peli avaa opastuksen harjoitteluun ja soittaa mallin ilman erillistä kuuntelupainallusta', async () => {
    const t = setup();
    expect(t.s()).toMatchObject({ phase: 'home' });
    expect(t.audio.models).toHaveLength(0); // ei ääntä ennen pelaajan valintaa
    t.game.play();
    expect(t.s()).toMatchObject({ phase: 'practice', tutorial: true, riff: TUTORIAL, modelPlaying: true, notesShown: true, guidance: 'guided' });
    expect(t.audio.models).toHaveLength(1);
    expect(t.audio.models[0].notes).toEqual([59, 60]);
    t.audio.models[0].onNote(1);
    expect(t.s().playing).toBe(1);
    await t.finishModel();
    // Mallin jälkeen pelaaja jää harjoitteluun: vuoro ei ala itsestään.
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: false, playing: null });
    expect(t.audio.calls).not.toContain('open');
  });

  it('Seuraava riffi, Aloita kotitreeni ja Harjoittele lisää soittavat mallin kerran; Yritä uudelleen ja Nyt riffataan! eivät', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake();
    t.playBoard(KT1[0]);
    expect(t.s().phase).toBe('success');
    const models = () => t.audio.calls.filter(c => c === 'model').length;
    expect(models()).toBe(1);
    t.game.retry();
    expect(t.s().phase).toBe('take'); expect(models()).toBe(1);
    t.playBoard(KT1[0]);
    t.game.practiceMore();
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: true }); expect(models()).toBe(2);
    t.game.startTake(); t.playBoard(KT1[0]);
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'practice', riff: { id: 'b-vaihto' }, modelPlaying: true }); expect(models()).toBe(3);
    expect(t.audio.models).toHaveLength(1); // edelliset mallit pysäytettiin, ei päällekkäisiä soittoja
  });

  it('automaattinen toisto estetty: selkeä ohje, harjoittelu jatkuu ja Kuuntele riffi toimii käsin', async () => {
    const t = setup({ tutorialDone: true });
    const play = t.audio.playModel;
    t.audio.playModel = () => Promise.reject(new Error('reference-audio-not-running'));
    t.game.play(); await flush();
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: false });
    expect(t.s().audioError).toContain('paina Kuuntele riffi');
    expect(t.game.tap(59)).toBe('free');
    t.audio.playModel = play;
    t.game.listen();
    expect(t.s()).toMatchObject({ modelPlaying: true, audioError: '' });
    await t.finishModel();
    expect(t.s().phase).toBe('practice');
  });

  it('pelin luonti ei soita mitään (StrictMode-uudelleenrenderöinti ei voi käynnistää mallia)', () => {
    const t = setup({ tutorialDone: true });
    new RiffGame(t.audio, t.store, () => 0);
    expect(t.audio.models).toHaveLength(0);
  });
});

describe('vapaa harjoittelu', () => {
  it('kuuntelun toisto ja pysäytys; myöhään päättyvä pysäytetty malli ei muuta mitään', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    const first = t.audio.models[0];
    t.game.listen(); // pysäytys
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: false });
    expect(t.audio.calls.at(-1)).toBe('stop-reference');
    first.resolve(true); await flush();
    for (let i = 0; i < 3; i++) { t.game.listen(); expect(t.s().modelPlaying).toBe(true); await t.finishModel(); }
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: false, index: 0 });
  });

  it('otelaudan naputtelu soi, mutta ei muuta pallukoita, tilastoja eikä tuloksia', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.finishModel();
    const before = JSON.stringify(t.store.data);
    for (const m of [...KT1[0], 64, 59, 60]) expect(t.game.tap(m)).toBe('free');
    expect(t.audio.plucks).toEqual([...KT1[0], 64, 59, 60]);
    expect(t.s()).toMatchObject({ phase: 'practice', index: 0, marks: ['pending', 'pending', 'pending', 'pending'] });
    expect(JSON.stringify(t.store.data)).toBe(before);
  });

  it('malli ja omat näppäilyt eivät pysäytä toisiaan: painallus mallin aikana soi, malli jatkuu', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    t.audio.calls.length = 0;
    expect(t.game.tap(62)).toBe('free');
    expect(t.audio.plucks).toEqual([62]);
    expect(t.audio.calls).toEqual([]); // ei stop-model eikä stop-reference
    expect(t.s().modelPlaying).toBe(true);
    t.audio.models[0].onNote(2);
    expect(t.s().playing).toBe(2);
    // Mallin pysäytys pysäyttää vain mallin (stopReference), ei pelaajan säveltä.
    t.game.listen();
    expect(t.audio.calls).toEqual(['stop-reference']);
  });

  it('sävelet ja paikat voi piilottaa ja näyttää; harjoittelun apu ei estä tähteä', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    expect(t.s().notesShown).toBe(true); // opastettu taso: valmiiksi näkyvissä
    t.game.toggleNotes(); expect(t.s().notesShown).toBe(false);
    t.game.toggleNotes(); expect(t.s().notesShown).toBe(true);
    await t.toTake();
    expect(t.s()).toMatchObject({ notesShown: false, hint: false }); // otossa vastaukset piilossa
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', achievement: { firstStar: true } });
    expect(t.store.data.results.at(-1)).toMatchObject({ hint: false, passed: true });
  });
});

describe('Nyt riffataan!: arvioitava otto', () => {
  it('pysäyttää mallin, aloittaa uuden oton; ensimmäinen oton painallus on ensimmäinen tarkistettava sävel', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    t.playBoard([59, 60, 62]); // harjoittelua mallin aikana
    t.game.startTake();
    expect(t.s()).toMatchObject({ phase: 'take', modelPlaying: false, index: 0, marks: ['pending', 'pending', 'pending', 'pending'] });
    expect(t.audio.calls.at(-1)).toBe('stop-reference');
    expect(t.audio.models).toHaveLength(0);
    t.game.listen(); // mallia ei soiteta kesken oton
    expect(t.s().modelPlaying).toBe(false);
    expect(t.game.tap(60)).toBe('wrong'); // ensimmäinen odotettu on B3: harjoittelun C4 ei ole vastaus
    expect(t.s().marks).toEqual(['red', 'pending', 'pending', 'pending']);
    t.playBoard([59, 60, 62, 60]);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['yellow', 'green', 'green', 'green'] });
    expect(t.store.data.results).toHaveLength(1);
  });

  it('väärä sävel punaiseksi paljastamatta oikeaa, väärä oktaavi on väärä, korjaus keltainen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake();
    t.game.tap(59);
    expect(t.game.tap(64)).toBe('wrong');
    expect(t.s()).toMatchObject({ index: 1, marks: ['green', 'red', 'pending', 'pending'], feedback: { tone: 'bad', text: 'Väärä sävel. Kokeile uudelleen.' } });
    t.game.tap(72);
    expect(t.s().feedback!.text).not.toContain('C4');
    t.game.tap(60); t.game.tap(62); t.game.tap(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], failedAttempts: 1 });
    expect(t.store.data.results.at(-1)).toMatchObject({ riff: 'b-kaari', input: 'board', wrong: 2, octave: 1, passed: false });
  });

  it('Harjoittele vielä kesken oton: ei kirjausta, ei epäonnistumista, aiemmat läpäisyt säilyvät; uusi otto alkaa alusta', async () => {
    const t = setup({ tutorialDone: true });
    record(t.store, 'b-kaari'); // aiempi läpäisy: peli avaa seuraavan riffin (b-vaihto C4–B3–C4–D4)
    t.game.play(); await t.toTake();
    expect(t.s().riff.id).toBe('b-vaihto');
    t.game.tap(60); t.game.tap(64);
    const models = t.audio.calls.filter(c => c === 'model').length;
    t.game.practiceMore();
    expect(t.s()).toMatchObject({ phase: 'practice', index: 0, marks: ['pending', 'pending', 'pending', 'pending'], failedAttempts: 0, modelPlaying: false });
    expect(t.audio.calls.filter(c => c === 'model').length).toBe(models); // kesken oton palatessa malli ei soi itsestään
    expect(t.store.data.results).toHaveLength(1);
    expect(t.store.data.stats.board['b-kaari']).toMatchObject({ done: 1, passed: 1 });
    expect(t.game.tap(62)).toBe('free');
    t.game.startTake();
    expect(t.s()).toMatchObject({ phase: 'take', index: 0, marks: ['pending', 'pending', 'pending', 'pending'] });
    t.playBoard(KT1[1]);
    expect(t.s().phase).toBe('success');
    expect(t.store.data.results).toHaveLength(2);
    expect(t.store.run('board').passed).toEqual(['b-kaari', 'b-vaihto']);
  });

  it('otossa pyydetty vihje kirjataan eikä anna tähteä; seuraava otto ilman vihjettä antaa', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake();
    t.game.toggleHint();
    expect(t.s().hint).toBe(true);
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', achievement: { firstPass: true, firstStar: false } });
    expect(t.s().feedback!.text).toContain('ilman otossa pyydettyä vihjettä');
    expect(t.store.data.results.at(-1)).toMatchObject({ hint: true });
    t.game.retry();
    expect(t.s().hint).toBe(false);
    t.playBoard(KT1[0]);
    expect(t.s().achievement).toMatchObject({ firstStar: true });
    expect(t.game.record('b-kaari')).toMatchObject({ passed: true, star: true, best: 0 });
  });

  it('harjoittelun kuuntelukerrat kirjataan seuraavan oton tulokseen (replays), automaattinen toisto ei', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.finishModel();
    t.game.listen(); await t.finishModel();
    t.game.listen(); await t.finishModel();
    t.game.startTake(); t.playBoard(KT1[0]);
    expect(t.store.data.results.at(-1)).toMatchObject({ replays: 2 });
  });
});

describe('tulos ja jatko', () => {
  function failTake(t: ReturnType<typeof setup>, wrongAt = 1) {
    t.s().riff.midi.forEach((m, i) => { if (i === wrongAt) t.game.tap(m + 2); t.game.tap(m); });
    expect(t.s().phase).toBe('retry');
  }

  it('epäonnistunut otto: tulos jää näkyviin, ei automaattista mallia; vapaa kokeilu ei muuta; mallin voi kuunnella', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup({ tutorialDone: true });
    t.game.play(); t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    t.game.startTake(); failTake(t);
    await vi.advanceTimersByTimeAsync(60000);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], index: 4, failedAttempts: 1 });
    expect(t.audio.calls.filter(c => c === 'model')).toHaveLength(1);
    for (const m of [64, 59]) expect(t.game.tap(m)).toBe('free');
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: true, marks: ['green', 'yellow', 'green', 'green'] });
    t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    expect(t.store.data.results).toHaveLength(1);
  });

  it('muistivihjeet kolmannen epäonnistuneen oton jälkeen (opastettu taso); Harjoittele vielä ei kasvata laskuria', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake();
    for (let i = 0; i < 3; i++) { failTake(t, 1); t.game.retry(); if (i === 0) { t.game.tap(70); t.game.practiceMore(); t.game.startTake(); } }
    expect(t.s()).toMatchObject({ phase: 'take', failedAttempts: 3, memory: [59, null, 62, 60], marks: ['pending', 'pending', 'pending', 'pending'] });
    t.playBoard(KT1[0]);
    expect(t.s().phase).toBe('success');
    t.game.retry();
    expect(t.s()).toMatchObject({ failedAttempts: 0, memory: [null, null, null, null] }); // läpäisyn jälkeen uusi sarja
  });

  it('muistivihjeet eivät paljasta vaikeaa kohtaa eivätkä paikkoja; ne eivät estä tähteä, otossa pyydetty Vihje estää', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake();
    for (let i = 0; i < 3; i++) { failTake(t, 1); t.game.retry(); }
    // Vain heti oikein soitetut kohdat näkyvät; korjattu (keltainen) kohta 2 jää piiloon. Ei sävelvihjettä eikä paikkoja.
    expect(t.s()).toMatchObject({ phase: 'take', memory: [59, null, 62, 60], notesShown: false, hint: false });
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', achievement: { firstPass: true, firstStar: true } });
    expect(t.store.data.results.at(-1)).toMatchObject({ hint: false, passed: true });
    const u = setup({ tutorialDone: true });
    u.game.play(); await u.toTake();
    for (let i = 0; i < 3; i++) { failTake(u, 1); u.game.retry(); }
    u.game.toggleHint(); u.playBoard(KT1[0]);
    expect(u.s()).toMatchObject({ phase: 'success', achievement: { firstPass: true, firstStar: false } });
  });

  it('Seuraava riffi vasta läpäisyn jälkeen; kolmannen jälkeen onnittelunäkymä', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    for (const [i, riff] of KT1.entries()) {
      expect(t.s()).toMatchObject({ phase: 'practice', riffNumber: i + 1 });
      await t.toTake(); failTake(t);
      t.game.next(); expect(t.s().phase).toBe('retry'); // ei seuraavaa ilman läpäisyä
      t.game.retry(); t.playBoard(riff);
      t.game.next();
    }
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 1 }, completedLevels: [1] });
  });

  it('pelin valikko kesken riffin: kaikki pysähtyy, edistyminen säilyy, Pelaa jatkaa samasta riffistä', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake(); t.playBoard(KT1[0]); t.game.next();
    t.game.home();
    expect(t.s()).toMatchObject({ phase: 'home', modelPlaying: false, passedInRun: ['b-kaari'], riff: { id: 'b-vaihto' } });
    expect(t.audio.calls.at(-1)).toBe('stop-model');
    t.game.play();
    expect(t.s()).toMatchObject({ phase: 'practice', riff: { id: 'b-vaihto' }, riffNumber: 2 });
  });

  it('riffin vaihto kesken mallin: vanhan mallin myöhäiset tapahtumat ohitetaan', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); await t.toTake(); t.playBoard(KT1[0]);
    t.game.listen();
    const old = t.audio.models[0];
    t.game.next();
    old.onNote(3); old.resolve(true); await flush();
    expect(t.s()).toMatchObject({ riff: { id: 'b-vaihto' }, modelPlaying: true, playing: null });
    t.game.dispose();
    expect(t.s().modelPlaying).toBe(false);
    expect(t.audio.calls.at(-1)).toBe('stop-model');
  });

  it('taustavälilehti mallin aikana: malli pysähtyy, harjoittelu säilyy', () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    t.game.hidden();
    expect(t.s()).toMatchObject({ phase: 'practice', modelPlaying: false });
  });
});

describe('opastus ja kotitreenit', () => {
  it('opastus: harjoittele → otto → läpäisy → Aloita Kotitreeni 1; keltaisilla opastus voidaan yrittää uudelleen', async () => {
    const t = setup();
    t.game.play(); await t.toTake();
    t.playBoard([60, 59, 60]);
    expect(t.s()).toMatchObject({ phase: 'retry', tutorial: true });
    t.game.practiceMore();
    expect(t.s()).toMatchObject({ phase: 'practice', tutorial: true });
    t.game.startTake(); t.playBoard([59, 60]);
    expect(t.s()).toMatchObject({ phase: 'success', tutorial: true });
    expect(t.store.data.tutorialDone).toBe(true);
    t.game.retry(); expect(t.s().phase).toBe('success'); // opastuksen läpäisyn jälkeen vain eteenpäin
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'practice', tutorial: false, riff: { id: 'b-kaari' } });
  });

  it('Kotitreeni 2: toistuva sävel kahdella painalluksella uudessa kulussa', async () => {
    const t = setup({ tutorialDone: true });
    t.store.startLevel('board', 2);
    t.game.play(); await t.toTake(); t.playBoard(KT2[0]); t.game.next();
    expect(t.s().riff.midi).toEqual([57, 57, 55, 59]);
    await t.toTake();
    t.audio.plucks.length = 0;
    expect(t.game.tap(57)).toBe('right'); expect(t.game.tap(57)).toBe('right');
    t.game.tap(55); t.game.tap(59);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([57, 57, 55, 59]);
  });

  it('Kotitreeni 1 → onnittelu → Jatka avaa Kotitreeni 2:n harjoitteluun mallin kanssa; tallennus palautuu', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    for (const riff of KT1) { await t.toTake(); t.playBoard(riff); t.game.next(); }
    expect(t.s()).toMatchObject({ phase: 'level-complete', completedLevels: [1], unlockedLevels: [1, 2] });
    expect(t.audio.models).toHaveLength(0);
    t.game.continueLevel();
    expect(t.s()).toMatchObject({ phase: 'practice', level: { number: 2 }, riff: { id: 'g-nousu' }, modelPlaying: true });
    await t.toTake(); t.playBoard(KT2[0]);
    t.game.home();
    const again = new RiffGame(fakeAudio(), new RiffStore(t.storage));
    expect(again.getState()).toMatchObject({ phase: 'home', level: { number: 2 }, riff: { id: 'g-toisto' }, completedLevels: [1], passedInRun: ['g-nousu'] });
    expect(gameSummary(new RiffStore(t.storage))).toMatchObject({ passed: 4, stars: 4, total: 6, completed: [1] });
  });

  it('kotitreenin valinta: lukittu ei avaudu, suoritetun voi pelata uudelleen; vanhat mikrofonitulokset eivät ole läpäisyjä', () => {
    const t = setup({ tutorialDone: true });
    t.game.chooseLevel(2);
    expect(t.s().phase).toBe('home');
    for (const r of LEVELS[0].riffs) record(t.store, r.id);
    t.game.home();
    t.game.chooseLevel(1, true);
    expect(t.s()).toMatchObject({ phase: 'practice', riff: { id: 'b-kaari' }, completedLevels: [1] });
    const u = setup({ tutorialDone: true });
    for (const r of LEVELS[0].riffs) record(u.store, r.id, { input: 'mic' });
    expect(gameSummary(u.store)).toMatchObject({ passed: 0, stars: 0, completed: [] });
  });
});

describe('opastustaso datasta (guided / memory / challenge)', () => {
  it('nykyiset kotitreenit ovat aloittelijaystävällisiä (guided)', () => {
    expect(LEVELS.map(l => l.guidance)).toEqual(['guided', 'guided']);
    expect(GUIDANCE.guided).toMatchObject({ autoplay: true, showNotes: true, memoryHints: true });
  });

  it('memory: malli soi, mutta sävelet avataan erikseen; muistivihjeet käytössä', async () => {
    const restore = withGuidance(1, 'memory');
    try {
      const t = setup({ tutorialDone: true });
      t.game.play();
      expect(t.s()).toMatchObject({ phase: 'practice', guidance: 'memory', notesShown: false, modelPlaying: true });
      t.game.toggleNotes(); expect(t.s().notesShown).toBe(true);
      await t.toTake();
      for (let i = 0; i < 3; i++) { t.game.tap(64); t.playBoard(KT1[0]); t.game.retry(); }
      expect(t.s().memory).toEqual([null, 60, 62, 60]);
    } finally { restore(); }
  });

  it('challenge: sävelet piilossa ja ei automaattisia muistivihjeitä; harjoitteluun pääsee silti', async () => {
    const restore = withGuidance(1, 'challenge');
    try {
      const t = setup({ tutorialDone: true });
      t.game.play();
      expect(t.s()).toMatchObject({ guidance: 'challenge', notesShown: false });
      await t.toTake();
      for (let i = 0; i < 3; i++) { t.game.tap(64); t.playBoard(KT1[0]); t.game.retry(); }
      expect(t.s()).toMatchObject({ failedAttempts: 3, memory: [null, null, null, null] });
      t.game.practiceMore();
      expect(t.s().phase).toBe('practice');
      t.game.toggleNotes(); expect(t.s().notesShown).toBe(true);
    } finally { restore(); }
  });
});
