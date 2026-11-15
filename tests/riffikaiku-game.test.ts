// Riffikaiku-peli – virtuaalikitara: tilakone sovitinrajapinnan kautta. Oikean kitaran harjoitus
// testataan tiedostossa riffikaiku-practice.test.ts ja signaaliketju tiedostossa riffikaiku-pipeline.test.ts.
import { afterEach, describe, it, expect, vi } from 'vitest';
import { RiffGame, gameSummary } from '../riffikaiku/game';
import { LEVELS, TUTORIAL } from '../riffikaiku/riffs';
import { RiffStore } from '../riffikaiku/store';
import { fakeAudio, flush, memoryStorage } from './riffikaikuFakes';

afterEach(() => { vi.useRealTimers(); });

function setup({ tutorialDone = false } = {}) {
  const audio = fakeAudio(), storage = memoryStorage();
  const store = new RiffStore(storage);
  if (tutorialDone) store.finishTutorial();
  const game = new RiffGame(audio, store, () => 0);
  const finishModel = async () => { audio.models.shift()!.resolve(true); await flush(); };
  /** Kuuntele riffi → malli loppuun → vuoro. */
  const listenToTurn = async () => { game.listen(); await finishModel(); expect(game.getState().phase).toBe('listening'); };
  const playBoard = (notes: number[]) => notes.forEach(m => game.tap(m));
  return { audio, storage, store, game, finishModel, listenToTurn, playBoard, s: () => game.getState() };
}
const KT1 = LEVELS[0].riffs.map(r => r.midi), KT2 = LEVELS[1].riffs.map(r => r.midi);

async function toListening(t: ReturnType<typeof setup>) {
  t.game.play();
  expect(t.s().phase).toBe('ready');
  await t.listenToTurn();
}
const record = (store: RiffStore, riff: string, patch: Partial<Parameters<RiffStore['record']>[0]> = {}) =>
  store.record({ riff, input: 'board', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1, ...patch });

describe('aloitus ja opastus', () => {
  it('home → ready (malli vain pyynnöstä) → model-playing → listening → success; ei mikrofonia', async () => {
    const t = setup();
    expect(t.s()).toMatchObject({ phase: 'home', tutorial: true });
    t.game.play();
    expect(t.s()).toMatchObject({ phase: 'ready', tutorial: true, riff: TUTORIAL, modelPlaying: false });
    expect(t.audio.models).toHaveLength(0);
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'model-playing', modelPlaying: true });
    expect(t.audio.models[0].notes).toEqual([59, 60]);
    await t.finishModel();
    expect(t.s().phase).toBe('listening');
    t.playBoard([59, 60]);
    expect(t.s()).toMatchObject({ phase: 'success', index: 2 });
    expect(t.store.data.tutorialDone).toBe(true);
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'ready', tutorial: false, riff: { id: 'b-kaari' }, level: { name: 'Kotitreeni 1' } });
    expect(t.audio.calls).not.toContain('open');
  });

  it('pelin valikko kesken riffin: kaikki pysähtyy, edistyminen säilyy, Pelaa jatkaa samasta riffistä', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.playBoard(KT1[0]); t.game.next();
    t.game.listen();
    t.game.home();
    expect(t.s()).toMatchObject({ phase: 'home', modelPlaying: false, passedInRun: ['b-kaari'], riff: { id: 'b-vaihto' } });
    expect(t.audio.calls.at(-1)).toBe('stop-model');
    t.game.play();
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-vaihto' }, riffNumber: 2 });
  });
});

describe('vastausvuoro', () => {
  it('jokainen painallus soi ja on yksi syötetapahtuma: toistuva sävel (Kotitreeni 2, A3–A3–G3–B3)', async () => {
    const t = setup({ tutorialDone: true });
    t.store.startLevel('board', 2);
    t.game.play();
    await t.listenToTurn(); t.playBoard(KT2[0]); t.game.next();
    expect(t.s().riff.midi).toEqual([57, 57, 55, 59]);
    await t.listenToTurn();
    t.audio.plucks.length = 0;
    expect(t.game.tap(57)).toBe('right'); expect(t.s().index).toBe(1);
    expect(t.game.tap(57)).toBe('right'); expect(t.s().index).toBe(2);
    t.game.tap(55); t.game.tap(59);
    expect(t.s().phase).toBe('success');
    expect(t.audio.plucks).toEqual([57, 57, 55, 59]);
  });

  it('ready-vaiheessa otelauta soi mutta ei vastaa; mallin aikana lukittu', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    expect(t.game.tap(59)).toBe('free');
    expect(t.s().index).toBe(0);
    t.game.listen();
    expect(t.game.tap(59)).toBeNull();
    expect(t.audio.plucks).toEqual([59]);
  });

  it('väärä painallus punaiseksi paljastamatta oikeaa, väärä oktaavi on väärä, korjaus keltainen', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.game.tap(59);
    expect(t.game.tap(64)).toBe('wrong');
    expect(t.s()).toMatchObject({ index: 1, marks: ['green', 'red', 'pending', 'pending'], feedback: { tone: 'bad', text: 'Väärä sävel. Kokeile uudelleen.' } });
    t.game.tap(72);
    expect(t.s().feedback!.text).not.toContain('C4');
    t.game.tap(60);
    expect(t.s().marks[1]).toBe('yellow');
    t.game.tap(62); t.game.tap(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], failedAttempts: 1 });
    expect(t.store.data.results.at(-1)).toMatchObject({ riff: 'b-kaari', input: 'board', wrong: 2, octave: 1, passed: false });
  });

  it('mallisoiton virhe ei estä pelaamista', async () => {
    const t = setup({ tutorialDone: true });
    t.audio.playModel = () => Promise.reject(new Error('reference-audio-not-running'));
    t.game.play(); t.game.listen(); await flush();
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false });
    expect(t.s().feedback!.text).toContain('äänimoottori ei käynnistynyt');
  });
});

describe('epäonnistunut kokonainen yritys: ei automaattista uusintaa, vapaa kokeilu, Yritä uudelleen', () => {
  function failOnBoard(t: ReturnType<typeof setup>, wrongAt = 1) {
    t.s().riff.midi.forEach((m, i) => { if (i === wrongAt) t.game.tap(m + 2); t.game.tap(m); });
    expect(t.s().phase).toBe('retry');
  }

  it('tulos jää näkyviin: ei mallia eikä uutta yritystä itsestään, vaikka aikaa kuluu', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup({ tutorialDone: true });
    t.game.play(); t.game.listen(); t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    failOnBoard(t);
    await vi.advanceTimersByTimeAsync(60000);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], index: 4, failedAttempts: 1 });
    expect(t.audio.calls.filter(c => c === 'model')).toHaveLength(1);
  });

  it('vapaa kokeilu: sävelet soivat, mutta tulos, pallukat ja laskurit eivät muutu', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    failOnBoard(t);
    const results = t.store.data.results.length;
    t.audio.plucks.length = 0;
    for (const m of [64, 59, 60, 60, 62]) expect(t.game.tap(m)).toBe('free');
    expect(t.audio.plucks).toEqual([64, 59, 60, 60, 62]);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['green', 'yellow', 'green', 'green'], index: 4, failedAttempts: 1 });
    expect(t.store.data.results).toHaveLength(results);
  });

  it('mallia voi kuunnella rajattomasti: pallukat ja vaihe säilyvät, kuuntelun voi pysäyttää', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    failOnBoard(t);
    for (let i = 0; i < 3; i++) {
      t.game.listen();
      expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: true, marks: ['green', 'yellow', 'green', 'green'] });
      await t.finishModel();
      expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: false });
    }
    t.game.listen(); t.game.listen(); // pysäytys
    expect(t.s()).toMatchObject({ phase: 'retry', modelPlaying: false, marks: ['green', 'yellow', 'green', 'green'] });
  });

  it('Yritä uudelleen: uusi arvioitava yritys ensimmäisestä sävelestä, värit nollataan, muistivihjeet säilyvät, ei mallia', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    for (let i = 0; i < 3; i++) { failOnBoard(t, 1); if (i < 2) t.game.retry(); }
    expect(t.s()).toMatchObject({ failedAttempts: 3, marks: ['green', 'yellow', 'green', 'green'] });
    expect(t.s().feedback!.text).toContain('Muistivihjeet ovat käytössä');
    t.game.retry();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 0, marks: ['pending', 'pending', 'pending', 'pending'], memory: [59, null, 62, 60], failedAttempts: 3 });
    expect(t.audio.models).toHaveLength(0);
    t.game.tap(60);
    expect(t.s().marks[0]).toBe('red');
    t.game.tap(59); t.game.tap(60); t.game.tap(62); t.game.tap(60);
    expect(t.s()).toMatchObject({ phase: 'retry', marks: ['yellow', 'green', 'green', 'green'], failedAttempts: 4 });
    t.game.retry();
    t.playBoard(KT1[0]);
    expect(t.s().phase).toBe('success');
    expect(t.store.data.results.map(r => r.passed)).toEqual([false, false, false, false, true]);
  });

  it('muistivihjeet ovat riffikohtaisia ja nollautuvat seuraavassa riffissä', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    for (let i = 0; i < 3; i++) { t.game.tap(64); t.playBoard(KT1[0]); t.game.retry(); }
    expect(t.s().memory).toEqual([null, 60, 62, 60]);
    t.game.listen(); await t.finishModel();
    expect(t.s().memory).toEqual([null, 60, 62, 60]); // kuuntelu ei poista
    t.playBoard(KT1[0]);
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-vaihto' }, failedAttempts: 0, memory: [null, null, null, null] });
  });
});

describe('Kuuntele riffi kesken yrityksen ei nollaa etenemistä', () => {
  it('vihreä, punainen, paikka ja laskuri säilyvät; pelaaminen jatkuu samasta kohdasta', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.game.tap(59); t.game.tap(64);
    const before = { marks: t.s().marks, index: t.s().index };
    expect(before.marks).toEqual(['green', 'red', 'pending', 'pending']);
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'model-playing', modelPlaying: true, ...before });
    await t.finishModel();
    expect(t.s()).toMatchObject({ phase: 'listening', ...before });
    t.game.tap(60);
    expect(t.s().marks).toEqual(['green', 'yellow', 'pending', 'pending']);
  });

  it('Pysäytä kuuntelu: malli katkeaa, tila säilyy, eikä myöhään päättyvä malli muuta mitään', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.game.tap(59);
    t.game.listen();
    const model = t.audio.models[0];
    t.game.listen();
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false, index: 1, marks: ['green', 'pending', 'pending', 'pending'] });
    expect(t.audio.calls.at(-1)).toBe('stop-model');
    model.resolve(true); await flush();
    expect(t.s()).toMatchObject({ phase: 'listening', index: 1 });
  });

  it('taustavälilehti mallin aikana: malli pysähtyy, vuoro jatkuu nollaamatta', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play(); t.game.listen();
    t.game.hidden();
    expect(t.s()).toMatchObject({ phase: 'listening', modelPlaying: false, index: 0 });
    t.game.tap(59);
    expect(t.s().index).toBe(1);
  });
});

describe('virheetön riffi: pelaaja valitsee jatkon; tähdet ja ennätykset', () => {
  it('kaikki vihreät → läpäisy, ei automaattista mallia eikä siirtoa; Soita uudelleen ja Seuraava riffi', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', marks: ['green', 'green', 'green', 'green'], achievement: { flawless: true, firstPass: true, firstStar: true } });
    expect(t.s().feedback!.text).toContain('Sait tähden');
    await flush();
    expect(t.audio.models).toHaveLength(0);
    expect(t.store.run('board').passed).toEqual(['b-kaari']);
    t.game.listen(); await t.finishModel();
    expect(t.s().phase).toBe('success');
    expect(t.game.tap(64)).toBe('free');
    t.game.playAgain();
    expect(t.s()).toMatchObject({ phase: 'listening', riff: { id: 'b-kaari' }, marks: ['pending', 'pending', 'pending', 'pending'], index: 0, achievement: null });
    expect(t.audio.models).toHaveLength(0);
    t.playBoard(KT1[0]);
    // Toinen virheetön: ei uutta ”ensimmäistä” saavutusta.
    expect(t.s().achievement).toMatchObject({ firstPass: false, firstStar: false, newBest: false });
    t.game.next();
    expect(t.s()).toMatchObject({ phase: 'ready', riffNumber: 2, passedInRun: ['b-kaari'] });
  });

  it('vihjeen kanssa läpäisy ei anna tähteä; uusi yritys ilman vihjettä antaa', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.game.toggleHint();
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', achievement: { firstPass: true, firstStar: false } });
    expect(t.s().feedback!.text).toContain('ilman vihjettä, niin saat tähden');
    expect(t.game.record('b-kaari')).toMatchObject({ passed: true, star: false });
    t.game.toggleHint();
    t.game.playAgain();
    t.playBoard(KT1[0]);
    expect(t.s().achievement).toMatchObject({ firstStar: true });
    expect(t.game.record('b-kaari')).toMatchObject({ passed: true, star: true, best: 0 });
  });

  it('uusi ennätys: vähemmän vääriä säveliä kuin aiemmin', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.game.tap(64); t.game.tap(64); t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'retry', achievement: { newBest: false, wrong: 2 } });
    t.game.retry();
    t.game.tap(64); t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'retry', achievement: { newBest: true, wrong: 1 } });
    expect(t.s().feedback!.text).toContain('Uusi ennätys: vain yksi väärä sävel');
    t.game.retry();
    t.playBoard(KT1[0]);
    expect(t.s()).toMatchObject({ phase: 'success', achievement: { newBest: true, wrong: 0, firstPass: true } });
    expect(t.game.record('b-kaari').best).toBe(0);
  });
});

describe('kotitreenit: suoritus, jatko, uusinta ja palautus', () => {
  async function playLevel(t: ReturnType<typeof setup>, riffs: number[][]) {
    for (const riff of riffs) { await t.listenToTurn(); t.playBoard(riff); expect(t.s().phase).toBe('success'); t.game.next(); }
  }

  it('Kotitreeni 1 → onnittelu; ei automaattista siirtoa; Jatka avaa Kotitreeni 2:n (G-kieli)', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    await playLevel(t, KT1);
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 1 }, completedLevels: [1], unlockedLevels: [1, 2] });
    expect(t.audio.models).toHaveLength(0);
    t.game.continueLevel();
    expect(t.s()).toMatchObject({ phase: 'ready', level: { number: 2, strings: [2], instruction: 'Soita riffi G-kieleltä.' }, riffNumber: 1, riff: { id: 'g-nousu' } });
  });

  it('Pelaa uudelleen: sama kotitreeni alusta, suoritus säilyy', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    await playLevel(t, KT1);
    t.game.repeatLevel();
    expect(t.s()).toMatchObject({ phase: 'ready', level: { number: 1 }, riffNumber: 1, completedLevels: [1], passedInRun: [] });
  });

  it('viimeinen kotitreeni: ei olematonta seuraavaa; voi palata Kotitreeni 1:een', async () => {
    const t = setup({ tutorialDone: true });
    for (const r of LEVELS[0].riffs) record(t.store, r.id);
    t.store.startLevel('board', 2);
    t.game.play();
    await playLevel(t, KT2);
    expect(t.s()).toMatchObject({ phase: 'level-complete', level: { number: 2 }, completedLevels: [1, 2] });
    t.game.continueLevel();
    expect(t.s().phase).toBe('level-complete');
    t.game.repeatLevel(1);
    expect(t.s()).toMatchObject({ level: { number: 1 }, riff: { id: 'b-kaari' } });
  });

  it('tallennettu eteneminen palautuu uudessa pelissä; suoritettu kierros näyttää onnittelun uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    t.game.play();
    await playLevel(t, KT1);
    t.game.continueLevel();
    await t.listenToTurn(); t.playBoard(KT2[0]);
    t.game.home();
    const again = new RiffGame(fakeAudio(), new RiffStore(t.storage));
    expect(again.getState()).toMatchObject({ phase: 'home', level: { number: 2 }, riffNumber: 2, riff: { id: 'g-toisto' }, completedLevels: [1], passedInRun: ['g-nousu'] });
    expect(gameSummary(new RiffStore(t.storage))).toMatchObject({ passed: 4, stars: 4, total: 6, completed: [1], started: true });
    const u = setup({ tutorialDone: true });
    u.game.play();
    for (const [i, riff] of KT1.entries()) { await u.listenToTurn(); u.playBoard(riff); if (i < 2) u.game.next(); }
    u.game.home();
    const later = new RiffGame(fakeAudio(), new RiffStore(u.storage));
    later.play();
    expect(later.getState()).toMatchObject({ phase: 'level-complete', level: { number: 1 } });
  });

  it('kotitreenin valinta pelin valikosta: lukittu ei avaudu, nykyinen jatkuu, suoritetun voi pelata uudelleen', async () => {
    const t = setup({ tutorialDone: true });
    await toListening(t);
    t.playBoard(KT1[0]);
    t.game.home();
    expect(t.s()).toMatchObject({ phase: 'home', unlockedLevels: [1] });
    t.game.chooseLevel(2);
    expect(t.s().phase).toBe('home');
    t.game.chooseLevel(1);
    expect(t.s()).toMatchObject({ phase: 'ready', riff: { id: 'b-vaihto' }, riffNumber: 2 });
    for (const r of LEVELS[0].riffs) record(t.store, r.id);
    t.game.home();
    expect(t.s().unlockedLevels).toEqual([1, 2]);
    t.game.chooseLevel(1, true);
    expect(t.s()).toMatchObject({ riff: { id: 'b-kaari' }, completedLevels: [1] });
  });

  it('vanhat mikrofonipelin tulokset eivät näy pelin läpäisyinä', () => {
    const t = setup({ tutorialDone: true });
    for (const r of LEVELS[0].riffs) record(t.store, r.id, { input: 'mic' });
    expect(gameSummary(t.store)).toMatchObject({ passed: 0, stars: 0, completed: [] });
    expect(new RiffGame(fakeAudio(), t.store).getState()).toMatchObject({ completedLevels: [], unlockedLevels: [1] });
  });
});
