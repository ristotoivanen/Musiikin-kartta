import { describe, it, expect } from 'vitest';
import { ProgressStore, STORAGE_KEY, accuracy, averageMs, decode, proficiency, weight, type Result } from '../harjoittelija/storage';
import { defaults } from '../harjoittelija/settings';

const result: Result = { id: 'a:1', item: 'notes:5:3', mode: 'notes', input: 'mic', check: 'class', expected: 43, played: 43, first: true, errors: 0, ms: 1000, hint: false, hintLevel: 0, mismatches: 0, at: 1234, position: '5:3' };
function storage(initial: Record<string, string> = {}) {
  const values = { ...initial };
  return { values, getItem: (key: string) => values[key] ?? null, setItem: (key: string, value: string) => { values[key] = value; } };
}
const v2 = (settings: object, extra: object = {}) => JSON.stringify({ version: 2, settings,
  stats: { 'board:class:solo:notes:5:3': { attempts: 4, correct: 3, errors: 1, totalMs: 8000, lastSeen: 99 } },
  recent: [{ ...result, id: 'old:1' }], sessions: [{ id: 'old', mode: 'notes', count: 4, first: 3, ms: 8000, at: 99, complete: true }], ...extra });

describe('versioitu selaintallennus', () => {
  it('tallentaa version 3 ja lukee sen takaisin muuttamatta oppaan lukumerkintöjä', () => {
    const mem = storage({ 'musiikin-kartta:tehdyt': '["osa-3#otelauta"]' });
    const store = new ProgressStore(mem); store.record(result); store.record(result); store.settings({ ...defaults, max: 12 });
    expect(JSON.parse(mem.values[STORAGE_KEY]).version).toBe(3);
    const loaded = new ProgressStore(mem);
    expect(loaded.data.stats['mic:class:solo:notes:5:3']).toMatchObject({ attempts: 1, correct: 1, totalMs: 1000, ema: 1, emaMs: 1000 });
    expect(loaded.data.recent[0]).toMatchObject({ hintLevel: 0, mismatches: 0 });
    expect(loaded.data.settings.max).toBe(12); expect(loaded.data.notice).toBeUndefined();
    expect(mem.values['musiikin-kartta:tehdyt']).toBe('["osa-3#otelauta"]');
  });
  it('v2:n automaattinen vihjeoletus vaihtuu tapaan Testaa osaamistasi, muu säilyy', () => {
    const raw = v2({ hints: 'fade', max: 12, input: 'mic', minRms: .02, device: 'usb' });
    const mem = storage({ [STORAGE_KEY]: raw });
    const store = new ProgressStore(mem);
    expect(store.data.settings).toMatchObject({ hints: 'off', max: 12, input: 'mic', minRms: .02, device: 'usb' });
    expect(store.data.notice).toBe('hints-default');
    expect(store.data.stats['board:class:solo:notes:5:3']).toMatchObject({ attempts: 4, correct: 3, errors: 1, totalMs: 8000 });
    expect(store.data.recent).toHaveLength(1); expect(store.data.sessions).toHaveLength(1);
    // Pelkkä lukeminen ei kirjoita mitään: vanha tallenne on tallessa, kunnes jotain muuttuu.
    expect(mem.values[STORAGE_KEY]).toBe(raw);
    store.record(result);
    const saved = JSON.parse(mem.values[STORAGE_KEY]);
    expect(saved).toMatchObject({ version: 3, notice: 'hints-default' }); expect(saved.recent).toHaveLength(2);
    store.dismissNotice();
    expect(new ProgressStore(mem).data.notice).toBeUndefined();
    expect(new ProgressStore(mem).data.settings.hints).toBe('off');
  });
  it('v2:ssa tietoisesti valittu Näytä aina tai Piilota säilyy ilman ilmoitusta', () => {
    expect(decode(v2({ hints: 'always' }))).toMatchObject({ settings: { hints: 'always' } });
    expect(decode(v2({ hints: 'always' })).notice).toBeUndefined();
    expect(decode(v2({ hints: 'off' })).notice).toBeUndefined();
    expect(decode(v2({}))).toMatchObject({ settings: { hints: 'off' }, notice: 'hints-default' });
  });
  it('v3:ssa valittu Vähennä vihjeitä on käyttäjän oma valinta ja säilyy', () => {
    const mem = storage(); const store = new ProgressStore(mem);
    store.settings({ ...defaults, hints: 'fade' });
    expect(new ProgressStore(mem).data.settings.hints).toBe('fade'); expect(new ProgressStore(mem).data.notice).toBeUndefined();
  });
  it('migroi v1:n muuttamatta vanhaa ennen tallennusta', () => {
    const raw = JSON.stringify({ version: 1, stats: { old: { attempts: 3, correct: 2, totalMs: 2000, lastSeen: 123 } }, settings: { max: 12 } });
    expect(decode(raw)).toMatchObject({ version: 3, stats: { old: { errors: 0, attempts: 3 } }, settings: { max: 12, hints: 'off' }, recent: [], sessions: [] });
  });
  it.each([
    '{broken', JSON.stringify({ version: 99, stats: {} }), JSON.stringify({ version: 2, stats: { bad: { attempts: -1 } } }),
    JSON.stringify({ version: 3, stats: {}, sessions: [{ id: 'x', mode: 'notes', count: 2, first: 5, ms: 1, at: 1, complete: true }] }),
    JSON.stringify({ version: 3, stats: { odd: { attempts: 2, correct: 1, totalMs: 10, lastSeen: 1, ema: 4 } } }),
    JSON.stringify([1, 2]),
  ])('säilyttää lukukelvottoman tai tulevan version %s', raw => {
    const mem = storage({ [STORAGE_KEY]: raw }); const store = new ProgressStore(mem); store.record(result); store.settings(defaults);
    expect(mem.values[STORAGE_KEY]).toBe(raw); expect(store.warning).not.toBe(''); expect(store.data.recent).toHaveLength(1);
  });
  it('kiintiövirhe ei kadota tämän käynnin vastauksia', () => {
    const store = new ProgressStore({ getItem: () => null, setItem: () => { throw new Error('quota'); } });
    store.record(result); expect(store.warning).toContain('vain sivun'); expect(store.data.recent).toHaveLength(1);
  });
  it('erottaa vihjeet, vastaustavat ja tarkistukset omiin tilastoihinsa', () => {
    const store = new ProgressStore(storage());
    store.record(result); store.record({ ...result, id: 'a:2', hint: true, hintLevel: 1 }); store.record({ ...result, id: 'a:3', input: 'board' }); store.record({ ...result, id: 'a:4', check: 'pitch' });
    expect(Object.keys(store.data.stats).sort()).toEqual(['board:class:solo:notes:5:3', 'mic:class:guided:notes:5:3', 'mic:class:solo:notes:5:3', 'mic:pitch:solo:notes:5:3']);
    expect(store.data.stats['mic:class:solo:notes:5:3'].attempts).toBe(1);
  });
  it('laskee oikeat, väärät, virheet ja ajan oikein', () => {
    const store = new ProgressStore(storage());
    store.record({ ...result, id: 'b:1', first: true, errors: 0, ms: 1000 });
    store.record({ ...result, id: 'b:2', first: false, errors: 2, ms: 5000 });
    store.record({ ...result, id: 'b:3', first: false, errors: 1, ms: 3000 });
    expect(store.data.stats['mic:class:solo:notes:5:3']).toMatchObject({ attempts: 3, correct: 1, errors: 3, totalMs: 9000, lastSeen: 1234 });
  });
  it('pitää kierroksesta vain uusimman tilan ja itsenäisten vastausten määrän', () => {
    const store = new ProgressStore(storage());
    const session = { id: 'a', mode: 'notes', count: 1, first: 1, ms: 1000, at: 1, complete: false, solo: 1, soloFirst: 1, hints: 'off' as const };
    store.session(session); store.session({ ...session, count: 10, first: 8, solo: 7, soloFirst: 6, complete: true });
    expect(store.data.sessions).toHaveLength(1); expect(store.data.sessions[0]).toMatchObject({ count: 10, solo: 7, soloFirst: 6, complete: true });
  });
  it('historia on rajattu, kohdetilastot kumuloituvat', () => {
    const store = new ProgressStore(storage());
    for (let i = 0; i < 520; i++) store.record({ ...result, id: `c:${i}` });
    for (let i = 0; i < 210; i++) store.session({ id: `s${i}`, mode: 'notes', count: 1, first: 1, ms: 1, at: i, complete: true });
    expect(store.data.recent).toHaveLength(500); expect(store.data.sessions).toHaveLength(200);
    expect(store.data.stats['mic:class:solo:notes:5:3'].attempts).toBe(520);
  });
});

describe('osaamisarvio ja heikkojen kohteiden painotus', () => {
  it('arvio yhdistää heti oikein -osuuden ja nopeuden', () => {
    expect(proficiency()).toBeNull(); expect(weight()).toBe(3);
    expect(proficiency({ attempts: 4, correct: 4, totalMs: 4000, lastSeen: 1, errors: 0 })).toBe(1);
    expect(weight({ attempts: 4, correct: 4, totalMs: 4000, lastSeen: 1, errors: 0 })).toBe(.25);
    expect(proficiency({ attempts: 4, correct: 0, totalMs: 40000, lastSeen: 1, errors: 4 })).toBe(0);
    expect(weight({ attempts: 4, correct: 0, totalMs: 40000, lastSeen: 1, errors: 4 })).toBe(3.25);
    // Aina oikein mutta hitaasti (8 s) antaa 65 %: tarkkuus ilman nopeuspisteitä.
    expect(proficiency({ attempts: 4, correct: 4, totalMs: 32000, lastSeen: 1, errors: 0 })).toBeCloseTo(.65);
    expect(proficiency({ attempts: 4, correct: 4, totalMs: 4 * 5250, lastSeen: 1, errors: 0 })).toBeCloseTo(.825);
    expect(weight({ attempts: 2, correct: 2, totalMs: 2000, lastSeen: 1, errors: 0 })).toBe(3);
  });
  it('arvio seuraa viimeisimpiä vastauksia: vanhat virheet eivät paina loputtomasti', () => {
    const store = new ProgressStore(storage());
    for (let i = 0; i < 6; i++) store.record({ ...result, id: `w:${i}`, first: false, errors: 1, ms: 7000 });
    const key = 'mic:class:solo:notes:5:3';
    expect(proficiency(store.data.stats[key])).toBeLessThan(.1);
    for (let i = 0; i < 8; i++) store.record({ ...result, id: `r:${i}`, first: true, errors: 0, ms: 2000 });
    const stat = store.data.stats[key];
    expect(stat.correct / stat.attempts).toBeCloseTo(8 / 14);
    expect(accuracy(stat)).toBeGreaterThan(.9); expect(averageMs(stat)).toBeLessThan(2500);
    expect(proficiency(stat)).toBeGreaterThan(.9);
    expect(weight(stat)).toBeLessThan(.6);
  });
  it('v2-tilasto ilman liukuvaa arviota käyttää kokonaislukuja', () => {
    const stat = decode(v2({})).stats['board:class:solo:notes:5:3'];
    expect(accuracy(stat)).toBe(.75); expect(averageMs(stat)).toBe(2000); expect(proficiency(stat)).toBeCloseTo(.75 * .65 + .35);
  });
});

describe('varmuuskopio ja tietojen poisto', () => {
  it('palauttaa kelvollisen varmuuskopion ja hylkää virheellisen muuttamatta nykyisiä tietoja', () => {
    const mem = storage(); const store = new ProgressStore(mem);
    store.record(result);
    const backup = JSON.stringify(store.data);
    store.record({ ...result, id: 'a:9' }); store.settings({ ...defaults, max: 24 });
    for (const bad of ['', '   ', '{nope', JSON.stringify({ version: 99, stats: {} })]) expect(() => store.restore(bad)).toThrow();
    expect(store.data.recent).toHaveLength(2); expect(store.data.settings.max).toBe(24);
    store.restore(backup);
    expect(store.data.recent).toHaveLength(1); expect(store.data.settings.max).toBe(defaults.max);
    expect(new ProgressStore(mem).data.recent).toHaveLength(1);
    store.restore(v2({ hints: 'fade' }));
    expect(store.data).toMatchObject({ version: 3, notice: 'hints-default', settings: { hints: 'off' } });
  });
  it('tulosten poisto säilyttää asetukset', () => {
    const mem = storage(); const store = new ProgressStore(mem);
    store.settings({ ...defaults, max: 12, hints: 'always' }); store.record(result); store.session({ id: 'a', mode: 'notes', count: 1, first: 1, ms: 1, at: 1, complete: true });
    store.clearProgress();
    expect(store.data).toMatchObject({ stats: {}, recent: [], sessions: [], settings: { max: 12, hints: 'always' } });
    expect(new ProgressStore(mem).data.recent).toHaveLength(0);
  });
});
