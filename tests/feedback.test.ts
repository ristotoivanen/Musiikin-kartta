import { describe, it, expect } from 'vitest';
import { generate, type Question } from '../harjoittelija/engine';
import { candidateText, correctText, describeItem, instruction, statRows, wrongText } from '../harjoittelija/feedback';
import { at } from '../harjoittelija/music';
import { defaults, type Settings } from '../harjoittelija/settings';

const notes: Settings = { ...defaults, strings: [3], min: 2, max: 2 };
const noteQuestion = generate(notes, 0);

describe('tehtäväohje ja palaute', () => {
  it('ohje kertoo vastaustavan eikä väitä mikrofonin tunnistavan kieltä', () => {
    expect(instruction(notes, noteQuestion)).toBe('Napauta oikeaa kohtaa otelaudalla.');
    expect(instruction({ ...notes, input: 'mic' }, noteQuestion)).toContain('ei kieltä tai nauhaa');
    expect(instruction({ ...defaults, mode: 'ear-note', input: 'mic' }, generate({ ...defaults, mode: 'ear-note' }, 0))).toBe('Valitse sävelnimi.');
    expect(instruction({ ...defaults, mode: 'scale', activity: 'degree' }, generate({ ...defaults, mode: 'scale', activity: 'degree' }, 0))).toBe('Valitse aste.');
  });
  it('sävelharjoituksen palaute ei mainitse astetta', () => {
    expect(noteQuestion.prompt).toBe('Etsi E D-kieleltä.');
    expect(correctText(notes, noteQuestion, 'board', 52, at(3, 2))).toBe('Oikein! E on D-kielellä: 2. nauha.');
    expect(correctText({ ...notes, input: 'mic' }, noteQuestion, 'mic', 64)).toBe('Oikein! Soitit sävelen E4.');
    expect(correctText(notes, noteQuestion, 'board', 52, at(3, 2))).not.toContain('aste');
    const open = generate({ ...defaults, strings: [5], min: 0, max: 0 }, 0);
    expect(correctText(defaults, open, 'board', 40, at(5, 0))).toBe('Oikein! E on paksulla E-kielellä: vapaa kieli.');
  });
  it('väärän vastauksen palaute kertoo, mitä valittiin ja mitä haetaan', () => {
    const s: Settings = { ...defaults, strings: [3, 4], min: 0, max: 12 };
    const q = { ...noteQuestion, position: at(3, 2) };
    expect(wrongText(s, q, 'board', 53, at(3, 3))).toBe('Tuo on F. Etsi E.');
    expect(wrongText(s, q, 'board', 52, at(4, 7))).toBe('Tuo on A-kieli. Etsi sävel D-kieleltä.');
    expect(wrongText({ ...s, check: 'pitch' }, { ...q, name: 'E3', check: 'pitch' }, 'board', 64, at(3, 14))).toBe('Oikea sävelnimi, mutta eri oktaavi. Etsi E3.');
  });
  it('asteikon ja soinnun palaute käyttää asteita ja sävellajin kirjoitusasua', () => {
    const s: Settings = { ...defaults, mode: 'scale', root: 9, scale: 'mp', box: 1 };
    const q: Question = { ...generate(s, 0), midi: 48, interval: 3, degree: '♭3', name: 'C', position: at(2, 5) };
    expect(correctText(s, q, 'board', 48, at(2, 5))).toBe('Oikein! ♭3. aste on C.');
    expect(wrongText(s, q, 'board', 50, at(2, 7))).toBe('Tuo on D eli 4. aste. Etsi ♭3. aste.');
    expect(wrongText(s, q, 'board', 49, at(2, 6))).toBe('Tuo on C♯, joka ei kuulu asteikkoon. Etsi ♭3. aste.');
    expect(wrongText(s, q, 'degree', 7)).toBe('Ei 5. aste. Yritä uudelleen tai pyydä vihje.');
    const degree = { ...q, choices: 'degree' as const };
    expect(correctText({ ...s, activity: 'degree' }, degree, 'degree', 3)).toBe('Oikein! C on ♭3. aste.');
    const caged: Settings = { ...defaults, mode: 'caged', root: 0, shape: 'E' };
    const third: Question = { ...generate(caged, 0), midi: 64, interval: 4, degree: '3', name: 'E', position: at(2, 9) };
    expect(wrongText(caged, third, 'board', 64, at(0, 12))).toBe('Oikea sävel, mutta muodon ulkopuolelta. Etsi 3. aste sen sisältä.');
  });
  it('intervallin ja kuullun sävelen palaute nimeää ratkaisun vasta oikean vastauksen jälkeen', () => {
    const s: Settings = { ...defaults, mode: 'interval', max: 12, intervals: [4], direction: 'up' };
    const q = generate(s, 0);
    expect(correctText(s, q, 'board', q.midi, q.position)).toMatch(/^Oikein! [A-G]♯?\d → [A-G]♯?\d on suuri terssi ylöspäin\.$/);
    expect(wrongText(s, q, 'board', q.midi + 1, at(q.position.string, q.position.fret + 1))).not.toContain(q.name);
    const ear = generate({ ...defaults, mode: 'ear-note' }, 0);
    expect(wrongText({ ...defaults, mode: 'ear-note' }, ear, 'note', (ear.midi + 2) % 12)).toMatch(/^Ei [A-G]♯?\. Kuuntele uudelleen/);
    expect(correctText({ ...defaults, mode: 'ear-note' }, ear, 'note', ear.midi % 12)).toBe(`Oikein! Sävel oli ${ear.name}.`);
  });
  it('mikrofonin eriävä havainto ei paljasta vastausta eikä kirjaudu virheeksi', () => {
    const s: Settings = { ...defaults, mode: 'repeat', input: 'mic', max: 12, check: 'pitch' };
    const q = generate(s, 0);
    const other = candidateText(s, q, q.midi + 1);
    expect(other).toContain('ei kirjattu virheeksi'); expect(other).not.toContain(q.name);
    expect(candidateText(s, q, q.midi + 12)).toContain('oikea sävelnimi, mutta eri oktaavi');
  });
});

describe('tilastokohteiden kuvaukset', () => {
  it.each([
    ['notes:5:3', 'paksu E-kieli, 3. nauha'], ['notes:0:0', 'ohut E-kieli, vapaa kieli'],
    ['ear-note:1:ref', 'Kuultu sävel C♯ (vertailusävelen kanssa)'], ['ear-note:10', 'Kuultu sävel A♯'],
    ['repeat:52', 'Kuule ja toista: E3'], ['interval:7:up', 'puhdas kvintti ylöspäin'], ['interval:3:down', 'pieni terssi alaspäin'],
    ['chord:7:dom7:10:play', 'G7-sointu: ♭7. aste'], ['chord:9:min:3:degree', 'A-mollisointu: ♭3. aste (asteen tunnistus)'],
    ['scale:9:mp:3:play', 'A-mollipentatoninen: ♭3. aste'], ['scale:3:dorian:9:degree', 'E♭-doorinen: 6. aste (asteen tunnistus)'],
    ['caged:0:E:4', 'C-duuri, E-muoto: 3. aste'],
  ])('%s → %s', (item, text) => expect(describeItem(item)).toBe(text));
  it('lukee myös version 2 kohdeavaimet', () => {
    expect(describeItem('repeat:5:3')).toBe('Kuule ja toista: paksu E-kieli, 3. nauha');
    expect(describeItem('scale:9:mp:2:5:play')).toBe('A-mollipentatoninen: G-kieli, 5. nauha');
    expect(describeItem('caged:0:E:1:8')).toBe('C-duuri, E-muoto: B-kieli, 8. nauha');
  });
  it('tuntematon avain ei kaada näkymää', () => {
    for (const item of ['', 'old', 'notes:x:y', 'scale:9:nope:3:play', 'chord:0:sus:0:play', 'interval:99:up', 'caged:0:X:0', '__proto__']) expect(describeItem(item)).toBeNull();
    expect(statRows({ old: { attempts: 1, correct: 1, errors: 0, totalMs: 1, lastSeen: 1 }, 'board:class:solo:notes:5:3': { attempts: 2, correct: 1, errors: 1, totalMs: 9, lastSeen: 1 } }))
      .toEqual([expect.objectContaining({ input: 'board', check: 'class', guided: false, item: 'notes:5:3', mode: 'notes' })]);
  });
});
