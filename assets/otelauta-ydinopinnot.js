// Otelauta · Ydinopinnot (#116, vaihe 3)
//
// Neljän harjoituksen sivukohtainen toiminta: 01 Sama sävel toiselta kieleltä, 02 Kuule ja löydä
// oktaavi, 03 Etsi perussävel E- ja A-kieleltä ja 04 Liiku otelaudalla. Sivut muodostaa
// tools/oppimiskartta/rakenna.py, joka lataa tämän moduulin vain, kun sivulla on
// [data-otelautaharjoitus].
//
// Tämä on tarkoituksella pieni, vain näiden harjoitusten oma otelauta. Se ei käytä eikä muuta
// Otelautaoppaan (assets/otelauta.js) tai Kitaraharjoittelijan yhteistä otelautaa.
//
// Rakenne:
// - Puhtaat funktiot ja tehtävädata (exportit) laskevat jokaisen sävelen kielestä ja nauhasta.
//   Samat funktiot tuottavat näkyvän palautteen ja soivan taajuuden, joten näkyvä ja kuultava
//   sävel eivät voi erota (tests/otelauta-ydinopinnot.test.ts).
// - Äänet ovat selaimessa Web Audiolla tuotettuja yksinkertaisia demoääniä, eivät äänitteitä.
//   Toisto alkaa vain käyttäjän painalluksesta; uusi toisto, sivun piilottaminen ja oppitunnin
//   sulkeminen pysäyttävät edellisen.
// - Mikrofonia ei käytetä. Virtuaaliotelaudan oikea vastaus ei todista soittoa oikealla kitaralla.
// - Mitään ei tallenneta. "Merkitse kokeilluksi" on generaattorin yhteinen merkintä.

export const NOTE_NAMES = Object.freeze(['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B']);
export const NATURALS = Object.freeze(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
export const MAX_FRET = 12;

// Vakiovire paksuimmasta ohuimpaan, soivina MIDI-sävelinä: E2 A2 D3 G3 B3 E4.
export const STRINGS = Object.freeze([
  { id: 'E', label: 'E', name: 'paksu E-kieli', genitive: 'paksun E-kielen', from: 'paksulta E-kieleltä', open: 40 },
  { id: 'A', label: 'A', name: 'A-kieli', genitive: 'A-kielen', from: 'A-kieleltä', open: 45 },
  { id: 'D', label: 'D', name: 'D-kieli', genitive: 'D-kielen', from: 'D-kieleltä', open: 50 },
  { id: 'G', label: 'G', name: 'G-kieli', genitive: 'G-kielen', from: 'G-kieleltä', open: 55 },
  { id: 'B', label: 'B', name: 'B-kieli', genitive: 'B-kielen', from: 'B-kieleltä', open: 59 },
  { id: 'e', label: 'e', name: 'ohut e-kieli', genitive: 'ohuen e-kielen', from: 'ohuelta e-kieleltä', open: 64 },
].map(string => Object.freeze(string)));

const BY_ID = Object.freeze(Object.fromEntries(STRINGS.map((string, index) => [string.id, { ...string, index }])));

export function stringInfo(id) {
  const string = BY_ID[id];
  if (!string) throw new Error(`Tuntematon kieli ${id}`);
  return string;
}

export function pitchAt(string, fret) {
  if (!Number.isInteger(fret) || fret < 0 || fret > MAX_FRET) throw new Error(`Nauha ${fret} ei ole välillä 0–${MAX_FRET}`);
  return stringInfo(string).open + fret;
}

export function noteName(midi) {
  return NOTE_NAMES[((midi % 12) + 12) % 12];
}

/** Soiva sävelkorkeus tieteellisellä merkinnällä: C4 = keski-C, paksu vapaa E-kieli = E2. */
export function pitchName(midi) {
  return noteName(midi) + (Math.floor(midi / 12) - 1);
}

export function frequency(midi) {
  return 440 * 2 ** ((midi - 69) / 12);
}

/** Lyhyt merkintä kuten teoriaoppaassa: E 5 = paksun E-kielen 5. nauha, e 5 = ohuen e-kielen. */
export function shortPosition(string, fret) {
  return fret === 0 ? `vapaa ${stringInfo(string).label}` : `${stringInfo(string).label} ${fret}`;
}

export function longPosition(string, fret) {
  const info = stringInfo(string);
  return fret === 0 ? `vapaa ${info.name}` : `${info.genitive} ${fret}. nauha`;
}

const capital = text => text.charAt(0).toUpperCase() + text.slice(1);
const NUMBER_WORDS = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi', 'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän', 'kymmenen', 'yksitoista', 'kaksitoista'];
/** "yksi nauha", "kaksi nauhaa" (nominatiivi ja partitiivi). */
export function countWords(count, one, many) {
  return `${NUMBER_WORDS[count] ?? count} ${count === 1 ? one : many}`;
}
/** Määrän ilmaus vertailussa: "puoliaskelen", "kaksi puoliaskelta" / "yhden nauhan", "kaksi nauhaa". */
export function amountWords(count, oneGenitive, many) {
  return count === 1 ? oneGenitive : `${NUMBER_WORDS[count] ?? count} ${many}`;
}

/** Kaikki annetun sävelnimen paikat valituilla kielillä nauhoilla 0–12, paksusta kielestä alkaen. */
export function positionsOf(name, strings = STRINGS.map(string => string.id)) {
  const result = [];
  for (const string of strings) {
    for (let fret = 0; fret <= MAX_FRET; fret++) {
      const midi = pitchAt(string, fret);
      if (noteName(midi) === name) result.push({ string, fret, midi });
    }
  }
  return result;
}

/** Toisen sävelen suhde ensimmäiseen (puoliaskelina). Sanallinen muoto palautteeseen. */
export function relationWords(diff) {
  if (diff === 0) return 'yhtä korkea';
  const direction = diff > 0 ? 'korkeampi' : 'matalampi';
  const octaves = Math.abs(diff) / 12;
  if (Number.isInteger(octaves)) return `${amountWords(octaves, 'oktaavia', 'oktaavia')} ${direction}`;
  return `${amountWords(Math.abs(diff), 'puoliaskelen', 'puoliaskelta')} ${direction}`;
}

// ---------------------------------------------------------------------------------------------
// 01 · Sama sävel toiselta kieleltä (unisono)

// Jokaisessa tehtävässä etsitään yhtä korkea sävel paksummalta naapurikieleltä.
export const UNISON_ROUNDS = Object.freeze([
  { from: ['A', 0], to: 'E' },
  { from: ['D', 0], to: 'A' },
  { from: ['G', 0], to: 'D' },
  { from: ['B', 0], to: 'G' },
  { from: ['A', 3], to: 'E' },
  { from: ['B', 3], to: 'G' },
].map(round => Object.freeze(round)));

export function unisonAnswer(round) {
  const target = pitchAt(...round.from);
  return { string: round.to, fret: target - stringInfo(round.to).open, midi: target };
}

export function unisonRule(round) {
  const [string, fret] = round.from;
  const answer = unisonAnswer(round);
  const steps = answer.fret - fret;
  if (string === 'B' && round.to === 'G') {
    return `G- ja B-kielen väli on vain neljä nauhaa. Siksi sama sävel on G-kielellä neljä nauhaa ylempänä kuin B-kielellä (${shortPosition(string, fret)} → ${shortPosition(answer.string, answer.fret)}).`;
  }
  return `Paksummalla naapurikielellä sama sävel on ${NUMBER_WORDS[steps]} nauhaa ylempänä (${shortPosition(string, fret)} → ${shortPosition(answer.string, answer.fret)}).`;
}

export function unisonPrompt(round) {
  const [string, fret] = round.from;
  const midi = pitchAt(string, fret);
  return `${capital(longPosition(string, fret))} soi ${pitchName(midi)}. Etsi yhtä korkea ${noteName(midi)} ${stringInfo(round.to).from}.`;
}

export function checkUnison(round, string, fret) {
  const [fromString, fromFret] = round.from;
  const target = pitchAt(fromString, fromFret);
  const tapped = pitchAt(string, fret);
  const place = capital(longPosition(string, fret));
  const wanted = stringInfo(round.to).from;
  if (string === fromString && fret === fromFret) {
    return { ok: false, kind: 'lahto', message: `Tämä on lähtösävel. Etsi sama ${noteName(target)} ${wanted}.` };
  }
  if (string !== round.to) {
    if (tapped === target) {
      return { ok: false, kind: 'toinen-kieli', message: `${place} soi myös ${pitchName(target)}. Hyvä havainto! Etsi tässä tehtävässä sama korkeus ${wanted}.` };
    }
    return { ok: false, kind: 'vaara-kieli', message: `${place} soi ${pitchName(tapped)}. Etsi sävel ${wanted}.` };
  }
  const diff = tapped - target;
  if (diff === 0) {
    return { ok: true, kind: 'oikein', message: `Oikein! ${place} ja ${longPosition(fromString, fromFret)} soivat molemmat ${pitchName(target)}. ${unisonRule(round)}` };
  }
  if (diff % 12 === 0) {
    return { ok: false, kind: 'oktaavi', message: `${place} soi ${pitchName(tapped)}: sama sävelnimi, mutta ${relationWords(diff)}. Etsi yhtä korkea ${pitchName(target)}.` };
  }
  const steps = Math.abs(diff);
  return {
    ok: false,
    kind: 'eri',
    message: `${place} soi ${pitchName(tapped)}, ${relationWords(diff)} kuin ${pitchName(target)}. Siirry ${countWords(steps, 'nauha', 'nauhaa')} ${diff > 0 ? 'alemmas kohti satulaa' : 'ylemmäs kohti runkoa'}.`,
  };
}

// ---------------------------------------------------------------------------------------------
// 02 · Kuule ja löydä oktaavi

// Jokaisessa tehtävässä on oktaavia matalampi, yhtä korkea ja oktaavia korkeampi paikka eri kielillä.
// "answer" on arvoitussävelen paikan indeksi.
export const OCTAVE_ROUNDS = Object.freeze([
  { ref: ['G', 2], places: [['E', 5], ['D', 7], ['e', 5]], answer: 2 },
  { ref: ['D', 5], places: [['E', 3], ['G', 0], ['e', 3]], answer: 0 },
  { ref: ['G', 5], places: [['A', 3], ['B', 1], ['e', 8]], answer: 1 },
  { ref: ['B', 3], places: [['D', 0], ['G', 7], ['e', 10]], answer: 2 },
  { ref: ['D', 2], places: [['E', 0], ['A', 7], ['e', 0]], answer: 0 },
  { ref: ['D', 3], places: [['E', 1], ['A', 8], ['e', 1]], answer: 1 },
].map(round => Object.freeze(round)));

export function octavePrompt(round) {
  const [string, fret] = round.ref;
  const midi = pitchAt(string, fret);
  return `Lähtösävel: ${longPosition(string, fret)} (${pitchName(midi)}). Kuuntele arvoitussävel. Se soi yhdestä merkitystä paikasta. Onko se matalampi, yhtä korkea vai korkeampi, ja missä se on?`;
}

export function placeRelation(round, index) {
  const ref = pitchAt(...round.ref);
  return relationWords(pitchAt(...round.places[index]) - ref);
}

export function checkOctave(round, choice) {
  const answer = round.places[round.answer];
  const midi = pitchAt(...answer);
  const solved = `Arvoitussävel oli paikka ${round.answer + 1}: ${longPosition(...answer)} (${pitchName(midi)}), ${placeRelation(round, round.answer)} kuin lähtösävel.`;
  if (choice === round.answer) return { ok: true, kind: 'oikein', message: `Oikein! ${solved} Kuuntele nyt myös muut paikat ja vertaa.` };
  const chosen = round.places[choice];
  return {
    ok: false,
    kind: 'vaara',
    message: `${solved} Valitsemasi paikka ${choice + 1}, ${shortPosition(...chosen)} (${pitchName(pitchAt(...chosen))}), on ${placeRelation(round, choice)} kuin lähtösävel. Kuuntele kaikki kolme paikkaa ja vertaa.`,
  };
}

// ---------------------------------------------------------------------------------------------
// 03 · Etsi perussävel E- ja A-kieleltä

export const ROOT_STRINGS = Object.freeze(['E', 'A']);
export const LANDMARKS = Object.freeze([0, 3, 5, 7, 12]);

export const ROOT_ROUNDS = Object.freeze([
  { type: 'etsi', note: 'G', string: 'E' },
  { type: 'etsi', note: 'C', string: 'A' },
  { type: 'nimea', at: ['E', 5] },
  { type: 'nimea', at: ['A', 5] },
  { type: 'etsi', note: 'D', string: 'E' },
  { type: 'nimea', at: ['E', 8] },
  { type: 'etsi', note: 'G', string: 'A' },
  { type: 'nimea', at: ['A', 7] },
].map(round => Object.freeze(round)));

export function landmarkList(string) {
  return LANDMARKS.map(fret => `${fret} ${noteName(pitchAt(string, fret))}`).join(', ');
}

export function rootAnswer(round) {
  if (round.type === 'nimea') return noteName(pitchAt(...round.at));
  return positionsOf(round.note, [round.string]).map(position => position.fret);
}

export function rootPrompt(round) {
  if (round.type === 'nimea') return `Mikä sävel soi ${stringInfo(round.at[0]).genitive} ${round.at[1]}. nauhalla? Valitse sävelen nimi.`;
  return `Etsi ${round.note} ${stringInfo(round.string).from}.`;
}

/** Vihje lähimmästä kiintopisteestä nauhan alapuolella. */
export function landmarkHint(string, fret, subject = 'Kysytty paikka') {
  const base = Math.max(...LANDMARKS.filter(mark => mark <= fret));
  const baseName = noteName(pitchAt(string, base));
  const list = `${capital(stringInfo(string).genitive)} kiintopisteet: ${landmarkList(string)}.`;
  if (base === fret) return `Etsitty paikka on kiintopiste. ${list}`;
  const steps = fret - base;
  return `Lähde kiintopisteestä: ${longPosition(string, base)} on ${baseName}. ${subject} on siitä ${amountWords(steps, 'yhden nauhan', 'nauhaa')} ylempänä eli ${amountWords(steps, 'puoliaskelen', 'puoliaskelta')} korkeampi. Muista: E–F ja B–C ovat vierekkäisillä nauhoilla.`;
}

export function rootHint(round) {
  if (round.type === 'nimea') return landmarkHint(...round.at);
  return landmarkHint(round.string, rootAnswer(round)[0], round.note);
}

export function checkRootName(round, name) {
  const correct = rootAnswer(round);
  const place = longPosition(...round.at);
  if (name === correct) return { ok: true, kind: 'oikein', message: `Oikein! ${capital(place)} on ${correct}.` };
  return { ok: false, kind: 'vaara', message: `${capital(place)} ei ole ${name}. ${landmarkHint(...round.at)}` };
}

export function checkRootFind(round, string, fret) {
  const midi = pitchAt(string, fret);
  const place = capital(longPosition(string, fret));
  if (string !== round.string) {
    return { ok: false, kind: 'vaara-kieli', message: `${place} on ${noteName(midi)}. Etsi ${round.note} ${stringInfo(round.string).from}.` };
  }
  if (noteName(midi) === round.note) {
    return { ok: true, kind: 'oikein', message: `Oikein! ${place} on ${round.note} (${pitchName(midi)}).` };
  }
  const nearest = rootAnswer(round).reduce((best, candidate) =>
    Math.abs(candidate - fret) < Math.abs(best - fret) ? candidate : best);
  return {
    ok: false,
    kind: 'eri',
    message: `${place} on ${noteName(midi)}, ei ${round.note}. Kokeile ${nearest > fret ? 'ylempää kohti runkoa' : 'alempaa kohti satulaa'}.`,
  };
}

// ---------------------------------------------------------------------------------------------
// 04 · Liiku otelaudalla

export const FIND_ALL_TARGETS = Object.freeze(['D', 'F']);

/** Löydetyt paikat korkeuksittain matalimmasta alkaen, esim. D3: E 10, A 5, vapaa D. */
export function octaveGroups(positions) {
  const groups = new Map();
  for (const position of [...positions].sort((a, b) => a.midi - b.midi || stringInfo(a.string).index - stringInfo(b.string).index)) {
    const key = pitchName(position.midi);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(position);
  }
  return groups;
}

export function groupSummary(positions) {
  return [...octaveGroups(positions)].map(([pitch, items]) => `${pitch} × ${items.length}`).join(', ');
}

export function checkFindAll(target, found, string, fret) {
  const midi = pitchAt(string, fret);
  const place = capital(longPosition(string, fret));
  const all = positionsOf(target);
  if (noteName(midi) !== target) {
    const frets = all.filter(position => position.string === string).map(position => position.fret);
    const nearest = frets.reduce((best, candidate) => Math.abs(candidate - fret) < Math.abs(best - fret) ? candidate : best);
    return {
      ok: false,
      kind: 'vaara',
      message: `${place} soi ${noteName(midi)}, ei ${target}. Tällä kielellä lähin ${target} on ${nearest > fret ? 'ylempänä kohti runkoa' : 'alempana kohti satulaa'}.`,
    };
  }
  const key = `${string}${fret}`;
  if (found.has(key)) return { ok: false, kind: 'jo', message: `${place} (${pitchName(midi)}) on jo löydetty.` };
  const earlier = all.filter(position => found.has(`${position.string}${position.fret}`) && position.midi === midi);
  const count = found.size + 1;
  const pitch = pitchName(midi);
  const unison = earlier.length
    ? `Sama korkeus kuin ${earlier.map(position => shortPosition(position.string, position.fret)).join(' ja ')}.`
    : `Uusi korkeus: ${pitch}.`;
  const done = count === all.length;
  const tail = done
    ? ` Kaikki ${all.length} ${target}-säveltä löytyi nauhoilta 0–12. Korkeudet: ${groupSummary(all)}.`
    : ` Löydetty ${count}/${all.length}.`;
  return { ok: true, kind: done ? 'valmis' : 'uusi', message: `${place}: ${pitch}. ${unison}${tail}` };
}

// ---------------------------------------------------------------------------------------------
// Ääni: yksinkertainen näppäilyä muistuttava demoääni (ei äänitettä).

let audio;
let playback = null;

function audioContext() {
  if (typeof window === 'undefined') return null;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audio || audio.state === 'closed') audio = new AudioContextClass();
  return audio;
}

export function stopSound() {
  const current = playback;
  playback = null;
  if (!current || !audio) return;
  const now = audio.currentTime;
  try {
    current.bus.gain.cancelScheduledValues(now);
    current.bus.gain.setValueAtTime(current.bus.gain.value, now);
    current.bus.gain.linearRampToValueAtTime(0, now + 0.03);
    for (const node of current.sources) node.stop(now + 0.04);
  } catch { /* jo pysähtynyt */ }
  clearTimeout(current.timer);
  current.onEnd?.();
}

/**
 * Soita sävelet [{ midi, at }] sekunteina toiston alusta. Palauttaa true, jos toisto alkoi.
 * Uusi toisto pysäyttää edellisen, joten päällekkäisiä haamuääniä ei synny.
 */
export async function playNotes(notes, onEnd) {
  const context = audioContext();
  if (!context) return false;
  stopSound();
  try {
    await context.resume();
  } catch {
    return false;
  }
  if (context.state !== 'running') return false;
  const bus = context.createGain();
  bus.gain.value = 0.9;
  bus.connect(context.destination);
  const harmonics = [0, 1, 0.5, 0.32, 0.2, 0.12, 0.08, 0.05];
  const wave = context.createPeriodicWave(new Float32Array(harmonics.length), Float32Array.from(harmonics));
  const begin = context.currentTime + 0.04;
  const duration = 1.5;
  const sources = [];
  for (const { midi, at = 0 } of notes) {
    const when = begin + at;
    const hz = frequency(midi);
    const oscillator = context.createOscillator();
    oscillator.setPeriodicWave(wave);
    oscillator.frequency.setValueAtTime(hz, when);
    const filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(9000, hz * 10), when);
    filter.frequency.exponentialRampToValueAtTime(Math.max(500, hz * 2), when + duration);
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.exponentialRampToValueAtTime(0.32, when + 0.008);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    oscillator.connect(filter).connect(envelope).connect(bus);
    oscillator.start(when);
    oscillator.stop(when + duration + 0.05);
    sources.push(oscillator);
  }
  const length = Math.max(...notes.map(note => note.at ?? 0)) + duration;
  const own = { bus, sources, onEnd, timer: 0 };
  own.timer = setTimeout(() => {
    if (playback === own) {
      playback = null;
      onEnd?.();
    }
  }, (length + 0.1) * 1000);
  playback = own;
  return true;
}

// ---------------------------------------------------------------------------------------------
// Käyttöliittymä

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === false || value === null || value === undefined) continue;
    if (key === 'text') node.textContent = value;
    else if (key === 'className') node.className = value;
    else node.setAttribute(key, value === true ? '' : String(value));
  }
  node.append(...children.filter(Boolean));
  return node;
}

function button(label, attrs = {}) {
  return el('button', { type: 'button', ...attrs, text: label });
}

let boardCount = 0;

/**
 * Pystysuora otelauta kuten sointukaaviossa: paksu E vasemmalla, nauhat 0–12 riveinä.
 * Vuorovaikutteisessa laudassa on yksi sarkainpysähdys; nuolinäppäimet siirtävät kohdistusta.
 */
function createBoard({ strings, interactive, label, onSelect }) {
  const id = `otelauta-ohje-${++boardCount}`;
  const help = el('p', { className: 'otelauta-ohje', id, text: interactive
    ? 'Valitse paikka napauttamalla. Näppäimistöllä nuolinäppäimet siirtävät otelaudalla, Enter tai välilyönti valitsee.'
    : 'Merkityt paikat näkyvät otelaudalla. Vastaa alla olevilla painikkeilla.' });
  const table = el('table', { className: 'otelauta-lauta', 'aria-label': label, 'aria-describedby': id, ...(interactive ? { role: 'grid' } : {}) });
  table.style.setProperty('--kielia', String(strings.length));
  if (strings.length < 4) table.style.maxWidth = '15rem';
  const head = el('tr', {}, el('th', { scope: 'col' }, el('span', { className: 'study-sr', text: 'Nauha' })));
  for (const string of strings) {
    head.append(el('th', { scope: 'col', abbr: stringInfo(string).name, 'data-kieli': string, text: stringInfo(string).label }));
  }
  const body = el('tbody');
  const cells = new Map();
  for (let fret = 0; fret <= MAX_FRET; fret++) {
    const dots = fret === 12 ? '••' : [3, 5, 7, 9].includes(fret) ? '•' : '';
    const row = el('tr', { 'data-nauha': fret },
      el('th', { scope: 'row' }, el('span', { text: String(fret) }), dots ? el('span', { className: 'otelauta-piste', 'aria-hidden': 'true', text: dots }) : null));
    for (const string of strings) {
      const base = longPosition(string, fret);
      const mark = el('span', { className: 'otelauta-merkki', 'aria-hidden': 'true' });
      const target = interactive
        ? el('button', { type: 'button', tabindex: '-1', 'data-kieli': string, 'data-nauha': fret, 'aria-label': base }, mark)
        : el('span', { className: 'otelauta-paikka', 'data-kieli': string, 'data-nauha': fret, role: 'img', 'aria-label': base }, mark);
      cells.set(`${string}${fret}`, { target, mark, base });
      row.append(el('td', { 'data-kieli': string, className: `otelauta-kieli-${STRINGS.findIndex(item => item.id === string)}` }, target));
    }
    body.append(row);
  }
  table.append(el('thead', {}, head), body);
  const frame = el('div', { className: 'otelauta-kehys' }, table);
  const wrapper = el('div', { className: 'otelauta-laudan-alue' }, help, frame);

  let current = cells.get(`${strings[0]}0`).target;
  if (interactive) {
    current.tabIndex = 0;
    table.addEventListener('click', event => {
      const target = event.target instanceof Element ? event.target.closest('button[data-kieli]') : null;
      if (!target) return;
      focusCell(target, false);
      onSelect(target.dataset.kieli, Number(target.dataset.nauha));
    });
    table.addEventListener('keydown', event => {
      const target = event.target instanceof Element ? event.target.closest('button[data-kieli]') : null;
      if (!target) return;
      let column = strings.indexOf(target.dataset.kieli);
      let fret = Number(target.dataset.nauha);
      switch (event.key) {
        case 'ArrowLeft': column = Math.max(0, column - 1); break;
        case 'ArrowRight': column = Math.min(strings.length - 1, column + 1); break;
        case 'ArrowUp': fret = Math.max(0, fret - 1); break;
        case 'ArrowDown': fret = Math.min(MAX_FRET, fret + 1); break;
        case 'Home': column = 0; break;
        case 'End': column = strings.length - 1; break;
        case 'PageUp': fret = 0; break;
        case 'PageDown': fret = MAX_FRET; break;
        default: return;
      }
      event.preventDefault();
      focusCell(cells.get(`${strings[column]}${fret}`).target, true);
    });
    // Varmistus, jos ohjelma vaihtaa kohdistettavan solun.
    frame.tabIndex = -1;
  } else {
    // Lukulaudan voi vierittää näppäimistöllä, jos se ei mahdu kapeaan näkymään.
    frame.tabIndex = 0;
    frame.setAttribute('role', 'region');
    frame.setAttribute('aria-label', label);
  }

  function focusCell(target, move) {
    if (current !== target) {
      current.tabIndex = -1;
      target.tabIndex = 0;
      current = target;
    }
    if (move) target.focus();
  }

  function clear() {
    for (const cell of cells.values()) {
      cell.target.className = cell.target.className.split(' ').filter(name => !name.startsWith('is-')).join(' ');
      cell.mark.textContent = '';
      cell.target.setAttribute('aria-label', cell.base);
    }
  }

  function mark(string, fret, { text = '', kind, label: extra }) {
    const cell = cells.get(`${string}${fret}`);
    if (!cell) return;
    cell.target.classList.add(`is-${kind}`);
    cell.mark.textContent = text;
    cell.target.setAttribute('aria-label', extra ? `${cell.base}, ${extra}` : cell.base);
  }

  function unmark(string, fret, kind) {
    const cell = cells.get(`${string}${fret}`);
    if (!cell || !cell.target.classList.contains(`is-${kind}`)) return;
    cell.target.classList.remove(`is-${kind}`);
    cell.mark.textContent = '';
    cell.target.setAttribute('aria-label', cell.base);
  }

  return { element: wrapper, clear, mark, unmark };
}

function exerciseShell(root) {
  const app = root.querySelector('[data-otelauta-sovellus]');
  const fallbackStatus = root.querySelector('[data-otelauta-tila]');
  const counter = el('p', { className: 'otelauta-kierros' });
  const prompt = el('p', { className: 'otelauta-tehtava', tabindex: '-1' });
  const feedback = el('p', { className: 'otelauta-palaute', role: 'status', 'aria-live': 'polite' });
  const sound = el('p', { className: 'otelauta-aanitila', role: 'status', 'aria-live': 'polite' });
  const next = button('Seuraava tehtävä →', { className: 'otelauta-ensisijainen', hidden: true });
  const restart = button('Aloita alusta', { hidden: true });
  const progress = { firstTry: 0, retried: 0, hinted: 0, shown: 0 };
  return { app, fallbackStatus, counter, prompt, feedback, sound, next, restart, progress };
}

function setFeedback(shell, result) {
  shell.feedback.textContent = result.message;
  shell.feedback.dataset.tulos = result.ok ? 'oikein' : 'yrita';
}

async function sound(shell, notes) {
  const started = await playNotes(notes);
  shell.sound.textContent = started ? '' : 'Ääntä ei voitu toistaa. Tarkista äänet tai jatka ilman ääntä.';
  return started;
}

function summaryText(total, progress) {
  return `Valmis: ${total} tehtävää. Ensimmäisellä yrityksellä ${progress.firstTry}, useammalla yrityksellä ${progress.retried}, vihjeen avulla ${progress.hinted}, vastaus näytettiin ${progress.shown}. Voit aloittaa alusta tai kokeilla samaa oikealla kitaralla alla olevien ohjeiden mukaan.`;
}

function finishRounds(shell, total) {
  shell.counter.textContent = `${total}/${total} tehty`;
  shell.prompt.textContent = 'Kaikki tehtävät tehty.';
  // Yhteenveto tilaviestiin, jotta ruudunlukija kuulee sen viimeisen vastauksen palautteen yhteydessä.
  shell.feedback.textContent = `${shell.feedback.textContent} ${summaryText(total, shell.progress)}`.trim();
  shell.next.hidden = true;
  shell.restart.hidden = false;
}

function soundToggle() {
  const toggle = button('Ääni otelaudalla', { 'aria-pressed': 'true', className: 'otelauta-aani' });
  toggle.addEventListener('click', () => {
    const on = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(on));
    if (!on) stopSound();
  });
  return { element: toggle, get on() { return toggle.getAttribute('aria-pressed') === 'true'; } };
}

function setupUnison(root, shell) {
  const rounds = UNISON_ROUNDS;
  let index = 0;
  let state;
  const audioToggle = soundToggle();
  const board = createBoard({
    strings: STRINGS.map(string => string.id), interactive: true,
    label: 'Otelauta, nauhat 0–12. Etsi yhtä korkea sävel.',
    onSelect: (string, fret) => {
      const round = rounds[index];
      if (audioToggle.on) sound(shell, [{ midi: pitchAt(string, fret) }]);
      if (state.solved) return;
      const result = checkUnison(round, string, fret);
      setFeedback(shell, result);
      if (!result.ok) {
        state.misses++;
        if (result.kind !== 'lahto') board.mark(string, fret, { kind: 'yritys', text: noteName(pitchAt(string, fret)), label: `kokeiltu, ${pitchName(pitchAt(string, fret))}` });
        return;
      }
      solve(string, fret);
    },
  });
  const listenRef = button('Kuuntele lähtösävel');
  const listenBoth = button('Kuuntele molemmat', { hidden: true });
  const hint = button('Vihje');
  const show = button('Näytä vastaus');

  function solve(string, fret) {
    state.solved = true;
    if (state.misses === 0 && !state.hint && !state.shown) shell.progress.firstTry++;
    else if (state.shown) shell.progress.shown++;
    else if (state.hint) shell.progress.hinted++;
    else shell.progress.retried++;
    const midi = pitchAt(string, fret);
    board.mark(string, fret, { kind: 'oikein', text: pitchName(midi), label: `sama korkeus, ${pitchName(midi)}` });
    listenBoth.hidden = false;
    hint.hidden = true;
    show.hidden = true;
    shell.counter.textContent = `${index + 1}/${rounds.length} tehty`;
    if (index + 1 < rounds.length) shell.next.hidden = false;
    else finishRounds(shell, rounds.length);
  }

  function start(number) {
    index = number;
    state = { solved: false, misses: 0, hint: false, shown: false };
    const round = rounds[index];
    board.clear();
    const [string, fret] = round.from;
    board.mark(string, fret, { kind: 'lahto', text: pitchName(pitchAt(string, fret)), label: `lähtösävel ${pitchName(pitchAt(string, fret))}` });
    shell.counter.textContent = `Tehtävä ${index + 1}/${rounds.length}`;
    shell.prompt.textContent = unisonPrompt(round);
    shell.feedback.textContent = '';
    delete shell.feedback.dataset.tulos;
    listenBoth.hidden = true;
    hint.hidden = false;
    show.hidden = false;
    shell.next.hidden = true;
    shell.restart.hidden = true;
  }

  listenRef.addEventListener('click', () => sound(shell, [{ midi: pitchAt(...rounds[index].from) }]));
  listenBoth.addEventListener('click', () => {
    const answer = unisonAnswer(rounds[index]);
    sound(shell, [{ midi: pitchAt(...rounds[index].from) }, { midi: answer.midi, at: 0.9 }]);
  });
  hint.addEventListener('click', () => {
    state.hint = true;
    shell.feedback.textContent = 'Vihje: vierekkäiset kielet on viritetty niin, että paksummalla naapurikielellä sama sävel on viisi nauhaa ylempänä. Poikkeus on G- ja B-kielen väli: neljä nauhaa.';
  });
  show.addEventListener('click', () => {
    state.shown = true;
    const answer = unisonAnswer(rounds[index]);
    setFeedback(shell, { ok: true, message: `Vastaus: ${longPosition(answer.string, answer.fret)}. ${unisonRule(rounds[index])}` });
    solve(answer.string, answer.fret);
  });
  shell.next.addEventListener('click', () => {
    start(index + 1);
    shell.prompt.focus();
  });
  shell.restart.addEventListener('click', () => {
    Object.assign(shell.progress, { firstTry: 0, retried: 0, hinted: 0, shown: 0 });
    start(0);
    shell.prompt.focus();
  });
  shell.app.append(
    shell.counter, shell.prompt,
    el('div', { className: 'otelauta-toiminnot' }, listenRef, listenBoth, audioToggle.element),
    board.element, shell.feedback, shell.sound,
    el('div', { className: 'otelauta-toiminnot' }, hint, show, shell.next, shell.restart));
  start(0);
}

function setupOctave(root, shell) {
  const rounds = OCTAVE_ROUNDS;
  let index = 0;
  let state;
  const board = createBoard({
    strings: STRINGS.map(string => string.id), interactive: false,
    label: 'Otelauta, nauhat 0–12: lähtösävel ja kolme merkittyä paikkaa',
  });
  const listenRef = button('Kuuntele lähtösävel');
  const listenMystery = button('Kuuntele arvoitussävel', { className: 'otelauta-ensisijainen' });
  const answers = el('div', { className: 'otelauta-toiminnot otelauta-vastaukset', role: 'group', 'aria-label': 'Missä arvoitussävel soi?' });
  const compare = el('div', { className: 'otelauta-toiminnot', role: 'group', 'aria-label': 'Vertaa paikkoja', hidden: true });

  function start(number) {
    index = number;
    state = { answered: false };
    const round = rounds[index];
    board.clear();
    const [string, fret] = round.ref;
    board.mark(string, fret, { kind: 'lahto', text: pitchName(pitchAt(string, fret)), label: `lähtösävel ${pitchName(pitchAt(string, fret))}` });
    round.places.forEach(([placeString, placeFret], place) => {
      board.mark(placeString, placeFret, { kind: 'paikka', text: String(place + 1), label: `paikka ${place + 1}` });
    });
    answers.replaceChildren(...round.places.map(([placeString, placeFret], place) => {
      const choice = button(`Paikka ${place + 1} · ${shortPosition(placeString, placeFret)}`, { 'data-paikka': place });
      choice.addEventListener('click', () => answer(place));
      return choice;
    }));
    compare.replaceChildren(...round.places.map(([placeString, placeFret], place) => {
      const listen = button(`Kuuntele paikka ${place + 1}`);
      listen.addEventListener('click', () => sound(shell, [{ midi: pitchAt(placeString, placeFret) }]));
      return listen;
    }));
    compare.hidden = true;
    answers.hidden = false;
    shell.counter.textContent = `Tehtävä ${index + 1}/${rounds.length}`;
    shell.prompt.textContent = octavePrompt(round);
    shell.feedback.textContent = '';
    delete shell.feedback.dataset.tulos;
    shell.next.hidden = true;
    shell.restart.hidden = true;
  }

  function answer(place) {
    if (state.answered) return;
    state.answered = true;
    const round = rounds[index];
    const result = checkOctave(round, place);
    if (result.ok) shell.progress.firstTry++;
    setFeedback(shell, result);
    round.places.forEach(([placeString, placeFret], other) => {
      const midi = pitchAt(placeString, placeFret);
      board.unmark(placeString, placeFret, 'paikka');
      board.mark(placeString, placeFret, {
        kind: other === round.answer ? 'oikein' : 'paljastettu',
        text: pitchName(midi),
        label: `paikka ${other + 1}, ${pitchName(midi)}, ${placeRelation(round, other)}${other === round.answer ? ', arvoitussävel' : ''}`,
      });
    });
    for (const choice of answers.querySelectorAll('button')) {
      choice.setAttribute('aria-disabled', 'true');
      if (Number(choice.dataset.paikka) === place) choice.setAttribute('aria-pressed', 'true');
    }
    compare.hidden = false;
    shell.counter.textContent = `${index + 1}/${rounds.length} tehty`;
    if (index + 1 < rounds.length) shell.next.hidden = false;
    else {
      shell.restart.hidden = false;
      shell.feedback.textContent += ` Oikein ${shell.progress.firstTry}/${rounds.length}.`;
    }
  }

  listenRef.addEventListener('click', () => sound(shell, [{ midi: pitchAt(...rounds[index].ref) }]));
  listenMystery.addEventListener('click', () => {
    const round = rounds[index];
    sound(shell, [{ midi: pitchAt(...round.places[round.answer]) }]);
  });
  shell.next.addEventListener('click', () => {
    start(index + 1);
    shell.prompt.focus();
  });
  shell.restart.addEventListener('click', () => {
    Object.assign(shell.progress, { firstTry: 0, retried: 0, hinted: 0, shown: 0 });
    start(0);
    shell.prompt.focus();
  });

  shell.app.append(
    shell.counter, shell.prompt,
    el('div', { className: 'otelauta-toiminnot' }, listenRef, listenMystery),
    board.element, answers, shell.feedback, shell.sound, compare,
    el('div', { className: 'otelauta-toiminnot' }, shell.next, shell.restart));
  start(0);
}

function setupRoot(root, shell) {
  const rounds = ROOT_ROUNDS;
  let index = 0;
  let state;
  const audioToggle = soundToggle();
  const board = createBoard({
    strings: ROOT_STRINGS, interactive: true,
    label: 'Paksu E-kieli ja A-kieli, nauhat 0–12',
    onSelect: (string, fret) => {
      if (audioToggle.on) sound(shell, [{ midi: pitchAt(string, fret) }]);
      const round = rounds[index];
      if (state.solved || round.type !== 'etsi') return;
      const result = checkRootFind(round, string, fret);
      setFeedback(shell, result);
      if (!result.ok) {
        state.misses++;
        board.mark(string, fret, { kind: 'yritys', text: noteName(pitchAt(string, fret)), label: `kokeiltu, ${noteName(pitchAt(string, fret))}` });
        return;
      }
      solve(string, fret);
    },
  });
  const names = el('div', { className: 'otelauta-nimet', role: 'group', 'aria-label': 'Valitse sävelen nimi' },
    ...NATURALS.map(name => {
      const choice = button(name, { 'data-nimi': name });
      choice.addEventListener('click', () => chooseName(name, choice));
      return choice;
    }));
  const hint = button('Vihje');
  const show = button('Näytä vastaus');

  function solve(string, fret) {
    state.solved = true;
    if (state.misses === 0 && !state.hint && !state.shown) shell.progress.firstTry++;
    else if (state.shown) shell.progress.shown++;
    else if (state.hint) shell.progress.hinted++;
    else shell.progress.retried++;
    const midi = pitchAt(string, fret);
    board.mark(string, fret, { kind: 'oikein', text: noteName(midi), label: `${noteName(midi)}, oikein` });
    for (const choice of names.querySelectorAll('button')) choice.setAttribute('aria-disabled', 'true');
    hint.hidden = true;
    show.hidden = true;
    shell.counter.textContent = `${index + 1}/${rounds.length} tehty`;
    if (index + 1 < rounds.length) shell.next.hidden = false;
    else finishRounds(shell, rounds.length);
  }

  function chooseName(name, choice) {
    const round = rounds[index];
    if (state.solved || round.type !== 'nimea' || choice.getAttribute('aria-disabled') === 'true') return;
    if (audioToggle.on) sound(shell, [{ midi: pitchAt(...round.at) }]);
    const result = checkRootName(round, name);
    setFeedback(shell, result);
    if (!result.ok) {
      state.misses++;
      choice.setAttribute('aria-disabled', 'true');
      return;
    }
    choice.setAttribute('aria-pressed', 'true');
    solve(...round.at);
  }

  function start(number) {
    index = number;
    state = { solved: false, misses: 0, hint: false, shown: false };
    const round = rounds[index];
    board.clear();
    if (round.type === 'nimea') {
      board.mark(...round.at, { kind: 'kysytty', text: '?', label: 'kysytty paikka' });
    }
    names.hidden = round.type !== 'nimea';
    for (const choice of names.querySelectorAll('button')) {
      choice.removeAttribute('aria-disabled');
      choice.setAttribute('aria-pressed', 'false');
    }
    shell.counter.textContent = `Tehtävä ${index + 1}/${rounds.length}`;
    shell.prompt.textContent = rootPrompt(round);
    shell.feedback.textContent = '';
    delete shell.feedback.dataset.tulos;
    hint.hidden = false;
    show.hidden = false;
    shell.next.hidden = true;
    shell.restart.hidden = true;
  }

  hint.addEventListener('click', () => {
    state.hint = true;
    shell.feedback.textContent = 'Vihje: ' + rootHint(rounds[index]);
  });
  show.addEventListener('click', () => {
    state.shown = true;
    const round = rounds[index];
    if (round.type === 'nimea') {
      setFeedback(shell, { ok: true, message: `Vastaus: ${longPosition(...round.at)} on ${rootAnswer(round)}. ${rootHint(round)}` });
      solve(...round.at);
    } else {
      const fret = rootAnswer(round)[0];
      setFeedback(shell, { ok: true, message: `Vastaus: ${round.note} on ${longPosition(round.string, fret)}. ${rootHint(round)}` });
      solve(round.string, fret);
    }
  });
  shell.next.addEventListener('click', () => {
    start(index + 1);
    shell.prompt.focus();
  });
  shell.restart.addEventListener('click', () => {
    Object.assign(shell.progress, { firstTry: 0, retried: 0, hinted: 0, shown: 0 });
    start(0);
    shell.prompt.focus();
  });

  shell.app.append(
    shell.counter, shell.prompt,
    el('div', { className: 'otelauta-toiminnot' }, audioToggle.element),
    board.element, names, shell.feedback, shell.sound,
    el('div', { className: 'otelauta-toiminnot' }, hint, show, shell.next, shell.restart));
  start(0);
}

function setupFindAll(root, shell) {
  const targets = FIND_ALL_TARGETS;
  let index = 0;
  let found;
  let hinted;
  const audioToggle = soundToggle();
  const list = el('ul', { className: 'otelauta-loydot', 'aria-label': 'Löydetyt paikat korkeuksittain' });
  const board = createBoard({
    strings: STRINGS.map(string => string.id), interactive: true,
    label: 'Otelauta, nauhat 0–12. Etsi kaikki paikat.',
    onSelect: (string, fret) => {
      if (audioToggle.on) sound(shell, [{ midi: pitchAt(string, fret) }]);
      const target = targets[index];
      if (found.size === positionsOf(target).length) return;
      const result = checkFindAll(target, found, string, fret);
      setFeedback(shell, result);
      if (!result.ok) return;
      found.set(`${string}${fret}`, { string, fret, midi: pitchAt(string, fret) });
      board.unmark(string, fret, 'vihje');
      board.mark(string, fret, { kind: 'oikein', text: pitchName(pitchAt(string, fret)), label: `löydetty, ${pitchName(pitchAt(string, fret))}` });
      drawList();
      if (result.kind === 'valmis') complete();
    },
  });
  const hint = button('Vihje: näytä yksi paikka');
  const listenAll = button('Kuuntele löydetyt matalimmasta korkeimpaan', { hidden: true });

  function drawList() {
    list.replaceChildren(...[...octaveGroups(found.values())].map(([pitch, items]) =>
      el('li', {}, el('strong', { text: `${pitch}: ` }), items.map(item => shortPosition(item.string, item.fret)).join(', '))));
  }

  function complete() {
    hint.hidden = true;
    listenAll.hidden = false;
    shell.counter.textContent = `${index + 1}/${targets.length} säveltä tehty`;
    shell.feedback.textContent += ` Vihjeitä käytit ${hinted}.`;
    if (index + 1 < targets.length) shell.next.hidden = false;
    else shell.restart.hidden = false;
  }

  function start(number) {
    index = number;
    found = new Map();
    hinted = 0;
    board.clear();
    drawList();
    const target = targets[index];
    shell.counter.textContent = `Sävel ${index + 1}/${targets.length}`;
    shell.prompt.textContent = `Etsi kaikki ${target}-sävelet nauhoilta 0–12. Niitä on ${positionsOf(target).length}. Huomaa, mitkä niistä soivat yhtä korkealta.`;
    shell.feedback.textContent = '';
    delete shell.feedback.dataset.tulos;
    hint.hidden = false;
    listenAll.hidden = true;
    shell.next.hidden = true;
    shell.restart.hidden = true;
  }

  hint.addEventListener('click', () => {
    const missing = positionsOf(targets[index]).find(position => !found.has(`${position.string}${position.fret}`));
    if (!missing) return;
    hinted++;
    board.mark(missing.string, missing.fret, { kind: 'vihje', text: '?', label: 'vihje: tutki tätä paikkaa' });
    shell.feedback.textContent = `Vihje: tutki merkittyä paikkaa ${shortPosition(missing.string, missing.fret)}. Valitse se, niin kuulet ja näet sen korkeuden.`;
  });
  listenAll.addEventListener('click', () => {
    const notes = [...found.values()].sort((a, b) => a.midi - b.midi).map((position, order) => ({ midi: position.midi, at: order * 0.55 }));
    sound(shell, notes);
  });
  shell.next.addEventListener('click', () => {
    start(index + 1);
    shell.prompt.focus();
  });
  shell.restart.addEventListener('click', () => {
    start(0);
    shell.prompt.focus();
  });

  shell.app.append(
    shell.counter, shell.prompt,
    el('div', { className: 'otelauta-toiminnot' }, audioToggle.element),
    board.element, shell.feedback, shell.sound, list,
    el('div', { className: 'otelauta-toiminnot' }, hint, listenAll, shell.next, shell.restart));
  start(0);
}

const SETUP = { unisono: setupUnison, oktaavi: setupOctave, perussavel: setupRoot, liiku: setupFindAll };

export function setupExercise(root) {
  const setup = SETUP[root.dataset.otelautaharjoitus];
  const shell = exerciseShell(root);
  if (!setup || !shell.app) return;
  setup(root, shell);
  shell.app.hidden = false;
  if (shell.fallbackStatus) shell.fallbackStatus.hidden = true;
  // Aihesivun sisäinen oppitunti voi sulkeutua kesken äänen.
  const inline = root.closest('details.study-inline');
  inline?.addEventListener('toggle', () => { if (!inline.open) stopSound(); });
}

if (typeof document !== 'undefined') {
  for (const root of document.querySelectorAll('[data-otelautaharjoitus]')) setupExercise(root);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopSound(); });
  window.addEventListener('pagehide', () => stopSound());
}
