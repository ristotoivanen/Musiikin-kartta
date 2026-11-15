// Riffiharjoitus – oikea kitara: harjoituksen ohjain (practice.ts) ja mikrofonin ohjain (mic.ts)
// sovitinrajapinnan kautta. Mikrofonin tapahtumat ovat valmiiksi tulkittuja (näppäily ja analyysikehys);
// signaaliketju synteettisellä kitaralla testataan tiedostossa riffikaiku-pipeline.test.ts.
// Nämä EIVÄT ole oikealla kitaralla tehtyjä kokeita: ks. riffikaiku/HYVAKSYNTAKOKEET.md.
import { afterEach, describe, it, expect, vi } from 'vitest';
import type { AnalysisFrame, FrameStatus } from '../harjoittelija/vendor/pitchDetector';
import { MicController } from '../riffikaiku/mic';
import type { PluckState } from '../riffikaiku/pluck';
import { REPEAT_HINT_MS, RiffPractice, UNSURE_MS } from '../riffikaiku/practice';
import { LEVELS, RIFFS } from '../riffikaiku/riffs';
import { RiffStore } from '../riffikaiku/store';
import { fakeAudio, flush, memoryStorage } from './riffikaikuFakes';

afterEach(() => { vi.useRealTimers(); });

const PLUCK_IDLE: PluckState = { armed: false, armedBy: null, candidate: null, reason: null, last: null, count: 0 };

function setup(storage = memoryStorage()) {
  const audio = fakeAudio();
  const store = new RiffStore(storage);
  let now = 0;
  const mic = new MicController(audio, store, () => now);
  const practice = new RiffPractice(audio, mic, store);
  const h = () => audio.handlers.at(-1)!;
  const frame = (status: FrameStatus, midi?: number, rms = status === 'silent' ? .0005 : .1, frequency?: number, pluck = PLUCK_IDLE) => {
    now += 20;
    h().onFrame({ status, rms, peak: rms, channel: 0, levels: [rms], midi, frequency, clarity: frequency ? .98 : undefined } as AnalysisFrame, pluck);
  };
  const stable = (midi: number, handlers = h()) => handlers.onStable({ midi, frequency: 0, cents: 0, clarity: .99, timestamp: now, heldMs: 240, armedBy: 'onset' });
  const calibrate = () => { for (let i = 0; i < 60 && mic.getState().calibrating; i++) frame('silent'); };
  const finishModel = async () => { audio.models.shift()!.resolve(true); await flush(); };
  /** Kaiutin hiljenee: suojavaihe päättyy kehysten perusteella. */
  const settle = () => { for (let i = 0; i < 30 && mic.getState().muted === 'settling'; i++) frame('silent'); };
  /** Mikrofoni käyttöön valmistelupaneelista, kohina mitataan ja paneeli suljetaan. */
  const micOn = async () => { practice.openPanel('mic'); await flush(); calibrate(); practice.closePanel(); };
  return { audio, storage, store, mic, practice, h, frame, stable, calibrate, finishModel, settle, micOn,
    s: () => practice.getState(), m: () => mic.getState(), tick: (ms: number) => { now += ms; } };
}
const FIRST = LEVELS[0].riffs[0]; // B3–C4–D4–C4

describe('harjoitusvalikko ja vaiheet ilman mikrofonia', () => {
  it('kaikki harjoitukset ovat auki; vaiheiden välillä voi liikkua; mikrofonia ei avata ilman valintaa', () => {
    const t = setup();
    expect(t.s()).toMatchObject({ view: 'home', panel: null });
    t.practice.openRiff('g-hyppy'); // Kotitreeni 2 ilman Kotitreeni 1:tä
    expect(t.s()).toMatchObject({ view: 'riff', riff: { id: 'g-hyppy' }, level: { number: 2 }, riffNumber: 3, step: 'listen' });
    for (const step of ['learn', 'recall', 'listen', 'recall'] as const) { t.practice.setStep(step); expect(t.s().step).toBe(step); }
    expect(t.audio.calls).not.toContain('open');
    expect(t.m().status).toBe('off');
    expect(t.store.data.practice.last).toEqual({ riff: 'g-hyppy', step: 'recall' });
  });

  it('mallin kuuntelu ja pysäytys; malli ei soi itsestään', async () => {
    const t = setup();
    t.practice.openRiff(FIRST.id);
    expect(t.audio.models).toHaveLength(0);
    t.practice.listen();
    expect(t.s()).toMatchObject({ modelPlaying: true });
    expect(t.audio.models[0].notes).toEqual(FIRST.midi);
    t.audio.models[0].onNote(2);
    expect(t.s().playing).toBe(2);
    t.practice.listen();
    expect(t.s()).toMatchObject({ modelPlaying: false, playing: null });
    t.practice.listen(); await t.finishModel();
    expect(t.s().modelPlaying).toBe(false);
  });

  it('Kuuntele ja Opettele: otelaudan painallus soi mutta ei arvioi; Kokeile muistista -vaiheessa otelauta ei soi', () => {
    const t = setup();
    t.practice.openRiff(FIRST.id);
    expect(t.practice.tap(59)).toBe(true);
    t.practice.setStep('learn');
    expect(t.practice.tap(60)).toBe(true);
    t.practice.setStep('recall');
    expect(t.practice.tap(62)).toBe(false);
    expect(t.audio.plucks).toEqual([59, 60]);
    expect(t.s()).toMatchObject({ index: 0, found: [false, false, false, false] });
  });

  it('itse kuittaus ilman mikrofonia ja ilman läpäisyä; voi perua; seuraavaan riffiin pääsee aina', () => {
    const t = setup();
    t.practice.openRiff(FIRST.id);
    t.practice.toggleMarked();
    expect(t.s().progress.marked).toHaveProperty(FIRST.id);
    expect(Object.keys(t.store.data.practice.marked)).toEqual([FIRST.id]);
    t.practice.toggleMarked();
    expect(t.store.data.practice.marked).toEqual({});
    t.practice.moveRiff(1);
    expect(t.s().riff.id).toBe('b-vaihto');
    for (let i = 0; i < RIFFS.length; i++) t.practice.moveRiff(1);
    expect(t.s().riff.id).toBe(RIFFS.at(-1)!.id);
    t.practice.moveRiff(-1);
    expect(t.s().riff.id).toBe(RIFFS.at(-2)!.id);
    // Ilman mikrofonia muistista-vaiheen sävelet saa näkyviin tarkistusta varten.
    t.practice.setStep('recall'); t.practice.toggleReveal();
    expect(t.s().revealed).toBe(true);
  });

  it('Jatka avaa viimeksi harjoitellun riffin ja vaiheen myös uudella sivulatauksella', () => {
    const t = setup();
    t.practice.openRiff('g-toisto', 'learn');
    const again = setup(t.storage);
    again.practice.continueLast();
    expect(again.s()).toMatchObject({ view: 'riff', riff: { id: 'g-toisto' }, step: 'learn' });
  });
});

describe('mikrofonin valmistelu', () => {
  it('lupa vasta valinnasta → kohinan mittaus → B-kielen testi; testi on vapaaehtoinen', async () => {
    const t = setup();
    t.practice.openRiff(FIRST.id);
    t.practice.openPanel('mic');
    expect(t.m().status).toBe('permission');
    await flush();
    expect(t.m()).toMatchObject({ status: 'on', calibrating: true, view: 'check', micInfo: { label: 'MacBook Pron mikrofoni' } });
    t.stable(59);
    expect(t.m().check).toBe('waiting'); // kohinan mittauksen aikana ei testivastausta
    t.calibrate();
    expect(t.m()).toMatchObject({ calibrating: false, minRms: .003, notice: { text: 'Soita vapaa B-kieli (B3) ja anna sen soida hetki.' } });
    t.stable(55);
    expect(t.m()).toMatchObject({ check: 'other' });
    expect(t.m().notice!.text).toContain('Kuulin G3');
    t.stable(59);
    expect(t.m()).toMatchObject({ check: 'ok', notice: { text: 'Kuulin B3. Mikrofoni toimii.' } });
    // Testin näppäilyt eivät mene harjoitukseen.
    expect(t.s()).toMatchObject({ index: 0, last: null });
    t.practice.closePanel();
    expect(t.m().view).toBe('practice');
  });

  it('evätty lupa → selkeä virhe; harjoittelu jatkuu ilman mikrofonia', async () => {
    const t = setup();
    t.audio.fail = Object.assign(new Error('x'), { name: 'NotAllowedError' });
    t.practice.openRiff(FIRST.id);
    t.practice.openPanel('mic'); await flush();
    expect(t.m().status).toBe('error'); expect(t.m().error).toContain('Mikrofonilupa evättiin');
    t.practice.closeMic();
    expect(t.m()).toMatchObject({ status: 'off', error: '' });
    expect(t.s()).toMatchObject({ view: 'riff', panel: null });
    t.practice.setStep('learn');
    expect(t.practice.tap(59)).toBe(true);
  });

  it('myöhässä saapuva lupavastaus ohitetaan, jos käyttäjä ehti sulkea', async () => {
    const t = setup();
    t.audio.hold = () => {};
    t.practice.openPanel('mic'); await flush();
    t.practice.closeMic();
    t.audio.hold(); await flush();
    expect(t.m().status).toBe('off');
  });

  it('äänitulon vaihto: vanha virta suljetaan, uusi avataan, kohina mitataan uudelleen; vanhan virran tapahtumat ohitetaan', async () => {
    const t = setup();
    t.practice.openPanel('mic'); await flush(); t.calibrate();
    expect(t.m().devices.map(d => d.label)).toEqual(['MacBook Pron mikrofoni', 'Scarlett Solo 4th Gen']);
    const old = t.h();
    t.mic.setDevice('usb'); await flush();
    expect(t.audio.devices).toEqual(['', 'usb']);
    expect(t.audio.calls.filter(c => c === 'close')).toHaveLength(1);
    expect(t.m()).toMatchObject({ device: 'usb', calibrating: true, micInfo: { label: 'Scarlett Solo 4th Gen', channels: 2 } });
    expect(t.store.data.device).toBe('usb');
    t.stable(59, old); old.onEnded();
    expect(t.m()).toMatchObject({ status: 'on', check: 'waiting' });
    t.calibrate(); t.stable(59);
    expect(t.m().check).toBe('ok');
  });

  it('meluisa kohinan mittaus: oletuskynnys ja ohje', async () => {
    const t = setup();
    t.practice.openPanel('mic'); await flush();
    for (let i = 0; i < 60 && t.m().calibrating; i++) t.frame('unclear', undefined, .08);
    expect(t.m()).toMatchObject({ calibrating: false, minRms: .01, noise: { loud: true }, notice: { tone: 'bad' } });
  });

  it('viritin: jatkuva lukema kehyksistä; näppäilyt eivät mene harjoitukseen', async () => {
    const t = setup();
    t.practice.openRiff(FIRST.id); t.practice.setStep('recall');
    t.practice.openPanel('tuner'); await flush(); t.calibrate();
    const hz = 110 * 2 ** (-20 / 1200);
    for (let i = 0; i < 15; i++) t.frame('pitch', 45, .1, hz);
    expect(t.m().tuner).toMatchObject({ status: 'flat', target: { name: 'A2' } });
    t.mic.setTunerTarget(40);
    for (let i = 0; i < 15; i++) t.frame('pitch', 45, .1, hz);
    expect(t.m().tuner).toMatchObject({ status: 'far', target: { name: 'E2' } });
    t.stable(59);
    expect(t.s()).toMatchObject({ index: 0, last: null });
    t.practice.closePanel();
    t.stable(59);
    expect(t.s()).toMatchObject({ index: 1 });
  });

  it('diagnostiikka näyttää vaiheet ja välityksen; ei anna vastauksia', async () => {
    const t = setup();
    t.practice.openRiff(FIRST.id); t.practice.setStep('recall');
    t.practice.openPanel('diagnostics'); await flush(); t.calibrate();
    for (let i = 0; i < 6; i++) t.frame('pitch', 59, .1, 246.94);
    expect(t.m().diag).toMatchObject({ frame: { status: 'pitch', midi: 59 }, minRms: .003 });
    t.stable(59);
    t.frame('silent'); t.frame('silent'); t.frame('silent'); t.frame('silent'); t.frame('silent');
    expect(t.m().diag?.routed.last).toMatchObject({ midi: 59, route: 'not-routed' });
    expect(t.s().index).toBe(0);
  });
});

describe('Kokeile muistista: opastava palaute', () => {
  async function recall(t: ReturnType<typeof setup>, riff = FIRST.id) {
    await t.micOn();
    t.practice.openRiff(riff, 'recall');
    expect(t.mic.listening).toBe(true);
  }

  it('oikea sävel oikeassa kohdassa → eteneminen; koko riffi → kuultu kokonaan, ei pakota mihinkään', async () => {
    const t = setup();
    await recall(t);
    t.stable(59);
    expect(t.s()).toMatchObject({ index: 1, found: [true, false, false, false], last: { midi: 59, verdict: 'right' }, feedback: { tone: 'good', text: 'B3 – oikea sävel oikeassa kohdassa (1/4).' } });
    for (const m of [60, 62, 60]) t.stable(m);
    expect(t.s()).toMatchObject({ complete: true, index: 4, feedback: { tone: 'done' } });
    expect(t.s().feedback!.text).toContain('Mikrofoni kuuli koko riffin oikeassa järjestyksessä: B3 – C4 – D4 – C4');
    expect(t.store.data.practice.heard).toEqual({ [FIRST.id]: 1 });
    // Kuultu kokonaan ei ole itse kuittaus eikä pelin läpäisy.
    expect(t.store.data.practice.marked).toEqual({});
    expect(t.store.data.results).toEqual([]);
    expect(t.store.data.stats.mic).toEqual({});
    // Valmiin kierroksen jälkeen soitto vain näkyy.
    t.stable(64);
    expect(t.s()).toMatchObject({ last: { midi: 64, verdict: 'free' }, index: 4 });
    t.practice.restartRecall();
    expect(t.s()).toMatchObject({ complete: false, index: 0, found: [false, false, false, false] });
    expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('väärä sävel: kerrotaan kuultu sävel, kohta odottaa – ei virhepistettä eikä oikean paljastusta', async () => {
    const t = setup();
    await recall(t);
    t.stable(59); t.stable(64);
    expect(t.s()).toMatchObject({ index: 1, found: [true, false, false, false], last: { verdict: 'wrong' }, feedback: { tone: 'info' } });
    expect(t.s().feedback!.text).toBe('Kuulin E4. Tähän kohtaan (2/4) kuuluu toinen sävel. Kokeile uudelleen, kuuntele malli tai pyydä vihje.');
    expect(t.s().feedback!.text).not.toContain('C4');
    t.stable(60);
    expect(t.s()).toMatchObject({ index: 2, found: [true, true, false, false] });
  });

  it('oktaaviero kerrotaan erikseen ja mahdollisena ylä-äänenä', async () => {
    const t = setup();
    await recall(t);
    t.stable(71);
    expect(t.s()).toMatchObject({ index: 0, last: { midi: 71, verdict: 'octave' }, feedback: { tone: 'near' } });
    expect(t.s().feedback!.text).toContain('sävelnimi on oikea, mutta korkeus on eri oktaavissa');
    expect(t.s().feedback!.text).toContain('ylä-äänen');
  });

  it('vihje pyynnöstä: seuraava sävel ja ehdotettu paikka; katoaa, kun kohta soitetaan', async () => {
    const t = setup();
    await recall(t);
    t.stable(59);
    t.practice.showNextHint();
    expect(t.s()).toMatchObject({ nextHint: true, feedback: { tone: 'hint', text: 'Seuraava sävel (2/4): C4 – B-kieli, 1. nauha.' } });
    t.stable(60);
    expect(t.s()).toMatchObject({ nextHint: false, index: 2 });
  });

  it('epävarma tunnistus (epäselvä tai epävireinen ääni) ohjeena, ei virheenä', async () => {
    const t = setup();
    await recall(t);
    const frames = Math.ceil(UNSURE_MS / 20) + 2;
    for (let i = 0; i < frames; i++) t.frame('unclear', undefined, .1);
    expect(t.s()).toMatchObject({ index: 0, feedback: { tone: 'uncertain' } });
    expect(t.s().feedback!.text).toContain('Tätä ei lasketa virheeksi');
    t.frame('silent');
    for (let i = 0; i < frames; i++) t.frame('off-pitch', 62, .1);
    expect(t.s().feedback!.text).toContain('lähin sävel on D4, mutta vire on yli 35 senttiä sivussa');
    expect(t.s()).toMatchObject({ index: 0, found: [false, false, false, false] });
    // Hiljainen kohina (alle kynnyksen) ei tuota ilmoitusta.
    const u = setup();
    await recall(u);
    for (let i = 0; i < frames; i++) u.frame('unclear', undefined, .001);
    expect(u.s().feedback).toBeNull();
  });

  it('toistuva sama sävel: jos sama sävel soi yhä odotetun toiston kohdalla, ohje vaimentaa kieli', async () => {
    const t = setup();
    await recall(t, 'g-toisto'); // A3–A3–G3–B3
    t.stable(57);
    const waiting: PluckState = { ...PLUCK_IDLE, reason: 'waiting-new-pluck', last: { midi: 57, at: 0, armedBy: 'onset' } };
    for (let i = 0; i < Math.ceil(REPEAT_HINT_MS / 20) + 2; i++) t.frame('pitch', 57, .1, 220, waiting);
    expect(t.s()).toMatchObject({ index: 1, feedback: { tone: 'hint' } });
    expect(t.s().feedback!.text).toContain('vaimenna kieli hetkeksi');
    t.stable(57);
    expect(t.s().index).toBe(2);
  });

  it('mallin ja suojavaiheen aikana kuultu ei vastaa; eteneminen säilyy kuuntelun yli', async () => {
    const t = setup();
    await recall(t);
    t.stable(59);
    t.practice.listen();
    expect(t.m().muted).toBe('model');
    expect(t.audio.calls.slice(-2)).toEqual(['pause', 'model']);
    t.stable(60);
    expect(t.s().index).toBe(1);
    await t.finishModel();
    expect(t.m().muted).toBe('settling');
    for (let i = 0; i < 10; i++) t.frame('pitch', 60);
    t.stable(60);
    expect(t.s().index).toBe(1);
    t.settle();
    expect(t.m().muted).toBeNull(); expect(t.audio.calls.at(-1)).toBe('rearm');
    t.stable(60);
    expect(t.s()).toMatchObject({ index: 2, found: [true, true, false, false] });
  });

  it('suojavaihe päättyy aikarajaan, jos kehyksiä ei tule', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
    const t = setup();
    t.practice.openPanel('mic'); await vi.advanceTimersByTimeAsync(0); t.calibrate(); t.practice.closePanel();
    t.practice.openRiff(FIRST.id, 'recall');
    t.practice.listen();
    t.audio.models.shift()!.resolve(true); await vi.advanceTimersByTimeAsync(0);
    expect(t.m().muted).toBe('settling');
    await vi.advanceTimersByTimeAsync(1800);
    expect(t.m().muted).toBeNull(); expect(t.audio.calls.at(-1)).toBe('rearm');
  });

  it('vaiheiden vaihto ei hävitä muistista-kierroksen etenemistä; opettele-vaihe ei arvioi', async () => {
    const t = setup();
    await recall(t);
    t.stable(59); t.stable(60);
    t.practice.setStep('learn');
    t.stable(62);
    expect(t.s()).toMatchObject({ step: 'learn', index: 2, last: { midi: 62, verdict: 'free' } });
    t.practice.setStep('listen'); t.practice.setStep('recall');
    expect(t.s()).toMatchObject({ index: 2, found: [true, true, false, false] });
    t.practice.home(); t.practice.openRiff(FIRST.id, 'recall');
    expect(t.s().index).toBe(2);
    t.practice.openRiff('b-vaihto', 'recall');
    expect(t.s().index).toBe(0);
  });
});

describe('mikrofonin irtoaminen ja taustavälilehti', () => {
  it('laitteen irrotus: mikrofoni pois, syy näkyy, harjoitus ja eteneminen säilyvät; uudelleen käyttöön', async () => {
    const t = setup();
    await t.micOn();
    t.practice.openRiff(FIRST.id, 'recall');
    t.stable(59);
    const old = t.h();
    old.onEnded();
    expect(t.m()).toMatchObject({ status: 'off', closed: 'mic-lost', micInfo: null });
    expect(t.s()).toMatchObject({ view: 'riff', step: 'recall', index: 1 });
    t.stable(60, old);
    expect(t.s().index).toBe(1);
    t.practice.openPanel('mic'); await flush(); t.calibrate(); t.practice.closePanel();
    expect(t.m()).toMatchObject({ status: 'on', closed: null });
    t.stable(60);
    expect(t.s().index).toBe(2);
  });

  it('taustavälilehti: malli pysähtyy ja mikrofoni suljetaan; harjoitus jatkuu ilman mikrofonia', async () => {
    const t = setup();
    await t.micOn();
    t.practice.openRiff(FIRST.id, 'recall');
    t.stable(59);
    t.practice.listen();
    t.practice.hidden();
    expect(t.s()).toMatchObject({ modelPlaying: false, index: 1 });
    expect(t.m()).toMatchObject({ status: 'off', closed: 'background' });
    expect(t.audio.calls.slice(-2)).toEqual(['close', 'stop-model']);
    t.practice.toggleMarked();
    expect(t.store.data.practice.marked).toHaveProperty(FIRST.id);
  });
});

describe('tallennus: harjoitus ja peli erillään', () => {
  it('vanhat mikrofonipelin tulokset säilyvät, mutta niitä ei muuteta harjoituskuittauksiksi', () => {
    const storage = memoryStorage();
    const old = new RiffStore(storage);
    old.finishTutorial();
    for (const r of LEVELS[0].riffs) old.record({ riff: r.id, input: 'mic', hint: false, passed: true, wrong: 0, octave: 0, replays: 0, ms: 1, at: 1 });
    const before = JSON.parse(storage.map.get('musiikin-kartta:riffikaiku:v1')!);
    delete before.practice; // 0.3-tallennuksessa ei ollut harjoituskenttää
    storage.setItem('musiikin-kartta:riffikaiku:v1', JSON.stringify(before));
    const t = setup(storage);
    expect(t.store.data.practice).toEqual({ marked: {}, heard: {}, last: null });
    expect(t.store.data.levels.mic).toEqual([1]);
    expect(t.practice.legacyMicPasses()).toBe(3);
    t.practice.openRiff(FIRST.id); t.practice.toggleMarked();
    const saved = JSON.parse(storage.map.get('musiikin-kartta:riffikaiku:v1')!);
    expect(saved).toMatchObject({ version: 1, structure: 'kotitreenit', levels: { mic: [1], board: [] }, practice: { marked: { [FIRST.id]: expect.any(Number) } } });
    expect(saved.stats.mic[FIRST.id]).toMatchObject({ done: 1, passed: 1 });
  });
});
