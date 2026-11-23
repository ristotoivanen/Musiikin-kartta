// Sävelkorva ja melodia · Ydinopinnot (#116, vaihe 2)
//
// Kolmen harjoituksen sivukohtainen toiminta: 01 Ylös, alas vai sama? (melodian suunta),
// 02 Kotiin vai kesken? (kumpi kahdesta lopusta kuulostaa valmiimmalta) ja 03 Kuule ja etsi
// kitaralta (lyhyen sävelkulun tapailu). Sivut muodostaa tools/oppimiskartta/rakenna.py, joka lataa
// tämän moduulin vain, kun sivulla on [data-melodiaharjoitus].
//
// Äänet ovat Soinnut ja harmonia -aiheen jo repossa olevia Meta Steel Guitar -kielinäytteitä
// (assets/audio/soinnut/, CC0 1.0, lähteet LAHTEET.md). Uusia äänitiedostoja ei tuoda eikä
// säveliä transponoida: jokainen näkyvä paikka (kieli ja nauha) soi täsmälleen sillä kielellä
// äänitetystä näytteestä. Tämä pieni soitin on tarkoituksella erillään sivuston yhteisestä
// äänimoottorista ja Sointujen soittimesta eikä muuta niitä.
//
// Rakenne:
// - Puhtaat funktiot (exportit) tuottavat melodiat, oikeat vastaukset, palautteen ja vaikeustason
//   muutokset. Samat tiedot ajastavat äänet ja kirjoittavat palautteen, joten kuultu ja selitetty
//   melodia eivät voi erota (tests/melodia-ydinopinnot.test.ts).
// - Melodiat 01 ja 03 syntyvät säännöistä (askeleet, hypyt, hypyn jälkeinen paluu, ei tritonusta),
//   joten vastaussarjaa ei voi opetella ulkoa. Loput 02 on kirjoitettu käsin ja tarkistettu.
// - Vaikeus kasvaa kahden peräkkäisen oikean vastauksen jälkeen ja kevenee kahden peräkkäisen
//   virheen jälkeen. Ei pisteitä, ei lukkoja; ensimmäinen tehtävä on aina helpoin.
// - Kuultava vastaus pysyy vain muistissa: sitä ei kirjoiteta sivulle, saavutettavaan nimeen tai
//   data-attribuuttiin ennen kuin oppija on vastannut.
// - Toisto käynnistyy vain käyttäjän painalluksesta, ja saman painikkeen toinen painallus
//   pysäyttää. Kortin sulkeminen, sivun piilottaminen tai sulkeminen pysäyttää äänen; paluu ei
//   käynnistä ääntä itsestään.

const STRING_NAMES = Object.freeze({ LowE: 'paksu E-kieli', D: 'D-kieli', G: 'G-kieli', B: 'B-kieli', HighE: 'ohut e-kieli' });
const STRING_SHORT = Object.freeze({ D: 'D', G: 'G', B: 'B', HighE: 'e' });

function note(id, name, midi, string, fret) {
  return Object.freeze({ id, name, midi, string, fret, sample: `${string}:${id}` });
}

// Ensimmäisen position G-duurisävelet D-, G-, B- ja ohuelta e-kieleltä sekä matala kotisävel G.
// F♯3 (D-kielen 4. nauha) puuttuu näytteistä, joten sitä ei käytetä.
export const NOTES = Object.freeze({
  G2: note('G2', 'G', 43, 'LowE', 3),
  D3: note('D3', 'D', 50, 'D', 0),
  E3: note('E3', 'E', 52, 'D', 2),
  G3: note('G3', 'G', 55, 'G', 0),
  A3: note('A3', 'A', 57, 'G', 2),
  B3: note('B3', 'B', 59, 'B', 0),
  C4: note('C4', 'C', 60, 'B', 1),
  D4: note('D4', 'D', 62, 'B', 3),
  E4: note('E4', 'E', 64, 'HighE', 0),
  Fs4: note('Fs4', 'F♯', 66, 'HighE', 2),
  G4: note('G4', 'G', 67, 'HighE', 3),
});

export function position(id) {
  const { string, fret } = NOTES[id];
  return `${STRING_NAMES[string]}, ${fret ? `${fret}. nauha` : 'vapaa'}`;
}

export function direction(from, to) {
  const difference = NOTES[to].midi - NOTES[from].midi;
  return difference > 0 ? 'ylos' : difference < 0 ? 'alas' : 'sama';
}

// Askel = puoli- tai kokonaisaskel (1–2 puoliaskelta), hyppy = vähintään pieni terssi.
export function moveKind(from, to) {
  const distance = Math.abs(NOTES[to].midi - NOTES[from].midi);
  return distance === 0 ? 'sama' : distance <= 2 ? 'askel' : 'hyppy';
}

export const DIRECTION_LABELS = Object.freeze({ ylos: 'ylös', alas: 'alas', sama: 'sama' });
export const ARROWS = Object.freeze({ ylos: '↑', alas: '↓', sama: '=' });

export const names = notes => notes.map(id => NOTES[id].name).join(' → ');

export function contourOf(motif) {
  return motif.slice(1).map((id, index) => direction(motif[index], id));
}

// ---------------------------------------------------------------------------------------------
// Melodiageneraattori (01 ja 03)

// Sävelvarastot matalimmasta korkeimpaan. Askel varastossa = seuraava asteikon sävel.
export const POOLS = Object.freeze({
  gb: Object.freeze(['G3', 'A3', 'B3', 'C4', 'D4']),
  gbe: Object.freeze(['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'Fs4', 'G4']),
  dgbe: Object.freeze(['D3', 'E3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'Fs4', 'G4']),
});
const CHORD_TONES = new Set(['G', 'B', 'D']);
// Liike asteikon askelina ja sen paino: askeleet yleisimpiä, hypyt enintään kvintti.
const MOVES = Object.freeze([[0, 1], [1, 4], [-1, 4], [2, 2], [-2, 2], [3, 1], [-3, 1], [4, 1], [-4, 1]]);

function weighted(items, random) {
  const total = items.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = random() * total;
  for (const [value, weight] of items) {
    roll -= weight;
    if (roll < 0) return value;
  }
  return items.at(-1)[0];
}

// Sääntö yhdelle siirtymälle. Palauttaa syyn, jos siirtymä ei ole sallittu.
export function moveProblem(previous, current, next, { semitones = true } = {}) {
  const step = NOTES[next].midi - NOTES[current].midi;
  const before = previous ? NOTES[current].midi - NOTES[previous].midi : 0;
  if (Math.abs(step) === 6) return 'tritonus';
  if (Math.abs(step) > 7) return 'liian suuri hyppy';
  if (!semitones && Math.abs(step) === 1) return 'puoliaskel';
  if (step === 0 && before === 0 && previous) return 'kolme samaa';
  // Kaksi samansuuntaista hyppyä vain murtosointuna (esim. G–B–D, B–D–G), yhteensä enintään seksti.
  if (Math.abs(before) >= 3 && Math.abs(step) >= 3 && Math.sign(step) === Math.sign(before) && Math.abs(before + step) > 8) return 'kaksi hyppyä liian laajalle';
  // Kvartin tai kvintin hypyn jälkeen melodia palaa askeleella vastakkaiseen suuntaan.
  if (Math.abs(before) >= 5 && (step === 0 || Math.sign(step) === Math.sign(before) || Math.abs(step) > 2)) return 'hyppy ilman paluuta';
  return null;
}

export function generateMelody({ length, pool, start = null, semitones = true, endOnChordTone = false }, random = Math.random) {
  const ids = POOLS[pool];
  const chordStarts = ids.filter(id => CHORD_TONES.has(NOTES[id].name));
  for (let attempt = 0; attempt < 500; attempt++) {
    const choices = random() < 0.6 ? chordStarts : ids;
    const first = start ?? choices[Math.min(choices.length - 1, Math.floor(random() * choices.length))];
    const notes = [first];
    let repeats = 0;
    for (let index = 1; index < length; index++) {
      const here = ids.indexOf(notes[index - 1]);
      const options = MOVES.filter(([move]) => {
        const target = ids[here + move];
        if (!target || (move === 0 && repeats >= 1)) return false;
        return !moveProblem(notes[index - 2], notes[index - 1], target, { semitones });
      });
      if (!options.length) break;
      const move = weighted(options, random);
      if (move === 0) repeats++;
      notes.push(ids[here + move]);
    }
    if (notes.length !== length) continue;
    if (endOnChordTone && !CHORD_TONES.has(NOTES[notes.at(-1)].name)) continue;
    // Pidemmässä melodiassa suunta vaihtuu vähintään kerran.
    if (length >= 4 && new Set(contourOf(notes)).size < 2) continue;
    return notes;
  }
  return ids.slice(0, length);
}

// Uusi tehtävä ei ole sama kuin edellinen.
export function freshMelody(level, previous, random = Math.random) {
  let melody;
  for (let attempt = 0; attempt < 20; attempt++) {
    melody = generateMelody(level, random);
    if (!previous || melody.join() !== previous.join()) return melody;
  }
  return melody;
}

// Arvo uusi tehtävä niin, ettei sama toistu heti peräkkäin.
export function pickIndex(length, previous = -1, random = Math.random) {
  const index = Math.min(length - 1, Math.floor(random() * length));
  return length > 1 && index === previous ? (index + 1) % length : index;
}

// ---------------------------------------------------------------------------------------------
// Vaikeustasot

export const LEVELS = Object.freeze({
  suunta: Object.freeze([
    { length: 3, pool: 'gbe', semitones: false },
    { length: 4, pool: 'gbe' },
    { length: 5, pool: 'gbe', endOnChordTone: true },
  ]),
  koti: Object.freeze([{ drone: true }, { drone: false }]),
  etsi: Object.freeze([
    { length: 3, pool: 'gb', start: 'G3' },
    { length: 3, pool: 'gbe' },
    { length: 4, pool: 'dgbe', endOnChordTone: true },
    { length: 5, pool: 'dgbe', endOnChordTone: true },
  ]),
});

// Kaksi peräkkäistä oikeaa → seuraava taso; kaksi peräkkäistä virhettä → edellinen taso.
export function adapt({ level, streak }, correct, count) {
  const next = correct ? Math.max(0, streak) + 1 : Math.min(0, streak) - 1;
  if (next >= 2 && level + 1 < count) return { level: level + 1, streak: 0, change: 'ylos' };
  if (next <= -2 && level > 0) return { level: level - 1, streak: 0, change: 'alas' };
  return { level, streak: next, change: null };
}

// ---------------------------------------------------------------------------------------------
// 01 · Ylös, alas vai sama?

export function checkContour(motif, answers) {
  const expected = contourOf(motif);
  const steps = expected.map((value, index) => ({ expected: value, given: answers[index] ?? null, ok: answers[index] === value }));
  return { correct: steps.every(step => step.ok), steps };
}

const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);
const arrow = value => value ? `${ARROWS[value]} ${DIRECTION_LABELS[value]}` : 'ei vastausta';

export function contourFeedback(motif, answers) {
  const { correct, steps } = checkContour(motif, answers);
  if (correct) return `Oikein! ${steps.map(step => ARROWS[step.expected]).join(' ')}`;
  const right = steps.filter(step => step.ok).length;
  const misses = steps.flatMap((step, index) => step.ok ? []
    : [`vaihto ${index + 1}: kuului ${arrow(step.expected)}, vastasit ${arrow(step.given)}`]);
  return `${right}/${steps.length} oikein. ${capitalize(misses.join('; '))}.`;
}

// ---------------------------------------------------------------------------------------------
// 02 · Kotiin vai kesken? Saman melodian kaksi loppua: toinen palaa kotisävel G:hen, toinen jää
// kesken. Melodiat on kirjoitettu G-duuriin (jokaisessa C, osassa myös F♯), ja loput on valittu
// niin, että koti-G kuulostaa valmiimmalta myös ilman tukiääntä. Ei loppuja E:hen (voi kuulostaa
// e-mollin kodilta) eikä B:hen (G-soinnun terssi, liian vakaa vertailuun).
export const ENDING_PHRASES = Object.freeze([
  { start: ['G3', 'B3', 'D4', 'C4', 'A3', 'B3'], koti: 'G3', kesken: 'A3' },
  { start: ['D4', 'G4', 'Fs4', 'E4', 'C4', 'E4'], koti: 'G4', kesken: 'Fs4' },
  { start: ['G3', 'A3', 'B3', 'G3', 'C4', 'B3', 'A3'], koti: 'G3', kesken: 'D4' },
  { start: ['B3', 'C4', 'D4', 'B3', 'E4', 'D4', 'C4'], koti: 'G3', kesken: 'A3' },
  { start: ['G4', 'Fs4', 'E4', 'D4', 'C4', 'B3', 'A3'], koti: 'G3', kesken: 'C4' },
  { start: ['G3', 'B3', 'D4', 'C4', 'E4', 'D4', 'E4', 'Fs4'], koti: 'G4', kesken: 'D4' },
  { start: ['G3', 'D4', 'C4', 'B3', 'C4', 'A3'], koti: 'G3', kesken: 'D4' },
  { start: ['E4', 'C4', 'A3', 'B3', 'D4', 'C4', 'B3'], koti: 'G3', kesken: 'A3' },
].map(phrase => Object.freeze({ ...phrase, start: Object.freeze(phrase.start) })));
export const ENDING_ROUNDS = ENDING_PHRASES.length * 2;

// Kierros = melodia + järjestys (kumpi loppu soi ensin).
export function endingRound(index) {
  const phrase = ENDING_PHRASES[Math.floor(index / 2)];
  const order = index % 2 ? ['kesken', 'koti'] : ['koti', 'kesken'];
  return { phrase, order, versions: order.map(kind => [...phrase.start, phrase[kind]]) };
}

const OPEN_TEXT = Object.freeze({
  A: 'jää A:han, askeleen G:n yläpuolelle, ja odottaa vielä paluuta.',
  C: 'jää C:hen, joka tässä melodiassa pyrkii vielä jatkamaan alaspäin.',
  'F♯': 'jää F♯:ään, puoliaskeleen G:n alapuolelle, ja vetää vahvasti kotiin.',
  D: 'pysähtyy D:hen. Se sopii G-sointuun, mutta jättää melodian kysymykseksi.',
});

export function endingFeedback(round, answer) {
  const home = round.order.indexOf('koti');
  const open = 1 - home;
  const rest = `Loppu ${open + 1} ${OPEN_TEXT[NOTES[round.phrase.kesken].name]}`;
  if (answer === home) return { correct: true, text: `Oikein! Loppu ${home + 1} palaa kotisävel G:hen ja kuulostaa siksi tässä valmiimmalta. ${rest}` };
  return { correct: false, text: `Tässä melodiassa loppu ${home + 1} kuulostaa valmiimmalta: se palaa kotisävel G:hen. ${rest}` };
}

// ---------------------------------------------------------------------------------------------
// 03 · Kuule ja etsi kitaralta

// Tapailu: oppija voi painaa paikkoja vapaasti. Vastaukseksi tulkitaan viimeksi soitetut.
export function recentNotes(history, size = 3) {
  return history.slice(-size);
}

export function checkEcho(motif, chosen) {
  const steps = motif.map((id, index) => ({ expected: id, given: chosen[index] ?? null, ok: chosen[index] === id }));
  return { correct: steps.every(step => step.ok), steps };
}

export function echoFeedback(motif, chosen) {
  const { correct, steps } = checkEcho(motif, chosen);
  if (correct) return `Oikein! ${names(motif)}. Soita sama oikealla kitaralla.`;
  const right = steps.filter(step => step.ok).length;
  const misses = steps.flatMap((step, index) => step.ok ? []
    : [`sävel ${index + 1}: kuului ${NOTES[step.expected].name}, soitit ${step.given ? NOTES[step.given].name : '–'}`]);
  return `${right}/${steps.length} oikein. ${capitalize(misses.join('; '))}.`;
}

// Kitaran paikat ruudukkona: kielet ohuimmasta paksuimpaan (kuten tabulatuurissa), nauhat 0–3.
export function boardRows(pool) {
  const ids = POOLS[pool];
  return ['HighE', 'B', 'G', 'D']
    .map(string => ({ string, label: STRING_SHORT[string], cells: [0, 1, 2, 3].map(fret =>
      ids.find(id => NOTES[id].string === string && NOTES[id].fret === fret) ?? null) }))
    .filter(row => row.cells.some(Boolean));
}

// ---------------------------------------------------------------------------------------------
// Ajastetut sävelet: { pitch, at, duration, gain } sekunteina toiston alusta.

export const TIMING = Object.freeze({
  suunta: { ioi: 0.62, duration: 0.75, last: 1.2, gain: 0.42 },
  koti: { ioi: 0.45, duration: 0.55, last: 1.6, gain: 0.4 },
  etsi: { ioi: 0.7, duration: 0.8, last: 1.2, gain: 0.42 },
});
export const SAMPLE_SECONDS = 5.0;
export const BASS_GAIN = 0.2;
export const VERSION_GAP = 0.9;

export function melodyPlan(notes, { ioi, duration, last, gain }, offset = 0) {
  return notes.map((id, index) => ({
    pitch: NOTES[id].sample, at: offset + index * ioi, duration: index === notes.length - 1 ? last : duration, gain,
  }));
}

export function planEnd(plan) {
  return Math.max(...plan.map(event => event.at + event.duration));
}

// Yksi melodia: tukiääni (matala G) soi halutessa alussa ja hiipuu ennen näytteen loppua.
export function versionPlan(notes, drone, offset = 0) {
  const melody = melodyPlan(notes, TIMING.koti, offset);
  if (!drone) return melody;
  const bass = { pitch: NOTES.G2.sample, at: offset, duration: Math.min(4.8, planEnd(melody) - offset), gain: BASS_GAIN };
  return [bass, ...melody];
}

// Molemmat loput peräkkäin; marks kertoo, milloin kumpikin alkaa (korostusta varten).
export function bothEndingsPlan(round, drone) {
  const first = versionPlan(round.versions[0], drone);
  const second = planEnd(first) + VERSION_GAP;
  return { plan: [...first, ...versionPlan(round.versions[1], drone, second)], marks: [0, second] };
}

export const HOME_TONE_PLAN = Object.freeze([
  { pitch: NOTES.G2.sample, at: 0, duration: 2.2, gain: BASS_GAIN },
  { pitch: NOTES.G3.sample, at: 0, duration: 2.2, gain: 0.4 },
]);

export function singleNotePlan(id) {
  return [{ pitch: NOTES[id].sample, at: 0, duration: 1.1, gain: 0.42 }];
}

// ---------------------------------------------------------------------------------------------
// Selaimen toiminta

const MESSAGES = Object.freeze({
  loading: 'Ladataan kitaran ääniä…',
  interrupted: 'Kuuntelu keskeytyi. Voit kuunnella uudelleen.',
  slow: 'Äänen käynnistys kesti liian kauan. Kokeile uudelleen.',
  blocked: 'Ääntä ei saatu käynnistettyä. Kokeile uudelleen.',
  failed: 'Ääniä ei voitu ladata. Kokeile uudelleen.',
});

const STOP_LABEL = '<span aria-hidden="true">■</span> Pysäytä';
const LEVEL_TEXT = Object.freeze({ ylos: ' Seuraavaksi hieman vaikeampi.', alas: ' Seuraavaksi hieman helpompi.' });

function createPlayer(base) {
  // AAC ensin, jos selain ilmoittaa tukevansa sitä. Verkko- tai purkuvirhe kokeilee toista muotoa.
  const formats = new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
  const buffers = new Map();
  let audio;
  let session = null;

  const show = (status, message = '', error = false) => {
    status.textContent = message;
    status.classList.toggle('is-error', error);
  };

  // Tavallinen loppuminen tai pysäytys ei tuota tilaviestiä; vain keskeytys ja virheet kerrotaan.
  function stop(message = '') {
    const last = session;
    if (!last) return;
    session = null;
    clearTimeout(last.timeout);
    clearTimeout(last.slowLoad);
    cancelAnimationFrame(last.frame);
    last.abort.abort();
    if (last.bus) {
      const now = audio.currentTime;
      const cutoff = now + 0.025;
      last.bus.gain.setValueAtTime(1, now);
      last.bus.gain.linearRampToValueAtTime(0, cutoff);
      for (const { source, when, end } of last.sources) {
        if (end > now && audio.state !== 'closed') source.stop(when > now ? 0 : Math.min(end, cutoff));
      }
    }
    if (last.toggle) last.trigger.innerHTML = last.markup;
    delete last.trigger.dataset.playing;
    last.onPosition?.(-1);
    last.onStop?.();
    show(last.status, message);
  }

  function context() {
    if (!audio || audio.state === 'closed') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) throw new Error('Web Audio ei ole käytettävissä');
      audio = new AudioContextClass();
      audio.addEventListener('statechange', () => {
        if (session?.bus && audio.state !== 'running') stop(MESSAGES.interrupted);
      });
    }
    return audio;
  }

  function decode(ctx, data) {
    // Vanhempi Safari tukee vain takaisinkutsumuotoa.
    return new Promise((resolve, reject) => {
      const result = ctx.decodeAudioData(data, resolve, reject);
      result?.then?.(resolve, reject);
    });
  }

  async function sample(ctx, pitch, signal) {
    if (buffers.has(pitch)) return buffers.get(pitch);
    const [string, id] = pitch.split(':');
    const file = `INSGuitarSteel_String${string}_Vel02_${id}_01`;
    let failure;
    for (const format of formats) {
      try {
        const response = await fetch(new URL(`${file}.${format}`, base), { signal });
        if (!response.ok) throw new Error(`${pitch}: HTTP ${response.status}`);
        const buffer = await decode(ctx, await response.arrayBuffer());
        if (signal.aborted) throw signal.reason;
        buffers.set(pitch, buffer);
        return buffer;
      } catch (error) {
        if (signal.aborted) throw error;
        failure = error;
      }
    }
    throw failure;
  }

  function schedule(own, buffer, { at, duration, gain }) {
    const when = own.start + at;
    const end = when + duration + 0.02;
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const envelope = audio.createGain();
    const fade = duration > 2 ? 0.55 : 0.22;
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.linearRampToValueAtTime(gain, when + 0.012);
    envelope.gain.setValueAtTime(gain, when + Math.max(0.02, duration - fade));
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    source.connect(envelope).connect(own.bus);
    const event = { source, envelope, when, end };
    own.sources.add(event);
    source.onended = () => {
      source.disconnect();
      envelope.disconnect();
      own.sources.delete(event);
      if (!own.sources.size) own.bus.disconnect();
    };
    source.start(when);
    source.stop(end);
  }

  // toggle: saman painikkeen painallus soiton aikana pysäyttää (Kuuntele ↔ Pysäytä).
  // onPosition(sekunnit) kertoo toistokohdan; -1 = toisto päättyi.
  async function play(trigger, status, plan, { toggle = false, onStart, onStop, onPosition } = {}) {
    if (toggle && session?.trigger === trigger) {
      stop();
      return;
    }
    stop();
    const own = { trigger, status, toggle, onStop, onPosition, markup: trigger.innerHTML, abort: new AbortController(), sources: new Set() };
    session = own;
    trigger.dataset.playing = '';
    if (toggle) trigger.innerHTML = STOP_LABEL;
    show(status);
    // Latausviesti vain, jos ensimmäinen lataus kestää.
    own.slowLoad = setTimeout(() => { if (session === own && !own.bus) show(status, MESSAGES.loading); }, 400);
    own.timeout = setTimeout(() => {
      if (session !== own) return;
      stop();
      show(status, MESSAGES.slow, true);
    }, 12000);

    let ctx;
    try {
      // Käyttäjäeleen aikana ennen yhtään odotusta. audioSession on valinnainen Safari-rajapinta.
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* valinnainen */ }
      ctx = context();
      await ctx.resume();
    } catch {
      if (session === own) {
        stop();
        show(status, MESSAGES.blocked, true);
      }
      return;
    }
    if (session !== own) return;
    try {
      const pitches = [...new Set(plan.map(event => event.pitch))];
      const loaded = await Promise.all(pitches.map(pitch => sample(ctx, pitch, own.abort.signal)));
      if (session !== own) return;
      if (ctx.state !== 'running' || trigger.closest('details:not([open])')) {
        stop(MESSAGES.interrupted);
        return;
      }
      clearTimeout(own.timeout);
      clearTimeout(own.slowLoad);
      const byPitch = new Map(pitches.map((pitch, index) => [pitch, loaded[index]]));
      own.bus = ctx.createGain();
      own.bus.connect(ctx.destination);
      own.start = ctx.currentTime + 0.10;
      const end = planEnd(plan) + 0.02;
      for (const event of plan) schedule(own, byPitch.get(event.pitch), event);
      show(status);
      // Vasta kun äänet on ladattu ja ajastettu: epäonnistunut lataus ei avaa vastaamista.
      onStart?.();
      const follow = () => {
        if (session !== own) return;
        const elapsed = ctx.currentTime - own.start;
        if (elapsed >= end) {
          stop();
          return;
        }
        onPosition?.(elapsed);
        own.frame = requestAnimationFrame(follow);
      };
      follow();
    } catch {
      if (session === own) {
        stop();
        show(status, MESSAGES.failed, true);
      }
    }
  }

  const silence = () => stop(MESSAGES.interrupted);
  window.addEventListener('pagehide', silence);
  document.addEventListener('visibilitychange', () => { if (document.hidden) silence(); });
  // Aihesivun sisäinen oppitunti tai lisätieto voi sulkeutua kesken soiton.
  document.addEventListener('toggle', event => {
    const details = event.target;
    if (session && details instanceof HTMLDetailsElement && !details.open && details.contains(session.trigger)) silence();
  }, true);

  return { play, stop, show };
}

// Vastauksen jälkeen painike lukitaan aria-disabled-tilaan eikä disabled-tilaan, jotta juuri
// painettu painike säilyttää näppäimistöfokuksen (ei pudotusta sivun alkuun).
function lock(buttons, isLocked) {
  for (const button of buttons) {
    if (isLocked) button.setAttribute('aria-disabled', 'true');
    else button.removeAttribute('aria-disabled');
  }
}

const locked = button => button.getAttribute('aria-disabled') === 'true';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Melodian muoto: korkeampi sävel nousee korkeammalle; nuoli kertoo vaihdon suunnan.
// marks: 01:ssä vaihtojen tulokset, 03:ssa (markNotes) sävelten tulokset.
function renderShape(list, notes, { marks = [], withNames = false, markNotes = false } = {}) {
  const lowest = Math.min(...notes.map(id => NOTES[id].midi));
  list.replaceChildren(...notes.map((id, index) => {
    const item = element('li');
    item.style.setProperty('--taso', String(NOTES[id].midi - lowest));
    const move = index ? contourOf([notes[index - 1], id])[0] : null;
    const mark = markNotes ? marks[index] : (index ? marks[index - 1] : null);
    item.append(element('span', 'melodia-nuoli', move ? ARROWS[move] : '•'));
    if (withNames) item.append(element('strong', '', NOTES[id].name), element('span', 'melodia-paikka', position(id)));
    if (mark && !mark.ok) {
      item.classList.add('is-virhe');
      item.append(element('span', 'melodia-merkki', '✗'));
    }
    const parts = [`Sävel ${index + 1}`];
    if (move) parts.push(`vaihto ${DIRECTION_LABELS[move]}`);
    if (withNames) parts.push(`${NOTES[id].name}, ${position(id)}`);
    if (mark && !mark.ok) parts.push('vastauksesi poikkesi');
    item.setAttribute('aria-label', parts.join(', '));
    return item;
  }));
}

function renderNames(list, notes) {
  list.replaceChildren(...notes.map((id, index) =>
    element('li', '', `${index + 1}. ${NOTES[id].name} · ${position(id)}`)));
}

// Yhteinen kulku: Kuuntele → vastaa → palaute → Seuraava (soi heti).
function setupFlow(section, player) {
  const flow = {
    status: section.querySelector('[data-melodia-tila]'),
    listen: section.querySelector('[data-melodia-kuuntele]'),
    next: section.querySelector('[data-melodia-seuraava]'),
    task: section.querySelector('[data-melodia-tehtava]'),
    info: section.querySelector('[data-melodia-taso]'),
    feedback: section.querySelector('[data-melodia-palaute]'),
    reveal: section.querySelector('[data-melodia-kaari]'),
  };
  flow.shape = flow.reveal.querySelector('[data-melodia-muoto]');
  flow.names = flow.reveal.querySelector('[data-melodia-savelet]');
  flow.reset = () => {
    flow.feedback.textContent = '';
    flow.feedback.classList.remove('is-error', 'is-answered');
    flow.reveal.hidden = true;
    flow.shape.replaceChildren();
    flow.names?.replaceChildren();
    if (document.activeElement === flow.next) flow.listen.focus();
    flow.next.hidden = true;
  };
  flow.answered = (text, correct) => {
    flow.feedback.textContent = text;
    flow.feedback.classList.add('is-answered');
    flow.feedback.classList.toggle('is-error', !correct);
    flow.reveal.hidden = false;
    flow.next.hidden = false;
  };
  flow.next.addEventListener('click', () => {
    player.stop();
    flow.newTask();
    // Uusi tehtävä soi heti kerran saman painalluksen aikana (käyttäjän ele, ei automaattinen toisto).
    flow.listen.click();
  });
  return flow;
}

function setupContour(section, player) {
  const flow = setupFlow(section, player);
  const slots = section.querySelector('[data-suunta-vastaus]');
  const pad = [...section.querySelectorAll('[data-suunta]')];
  const erase = section.querySelector('[data-suunta-poista]');
  const check = section.querySelector('[data-melodia-tarkista]');
  let state = { level: 0, streak: 0 };
  let motif = null;
  let answers = [];
  let checked = false;

  const draw = () => {
    const count = motif.length - 1;
    slots.replaceChildren(...Array.from({ length: count }, (_, index) => {
      const value = answers[index];
      const item = element('li', value ? '' : 'is-empty', value ? ARROWS[value] : '_');
      item.setAttribute('aria-label', `Vaihto ${index + 1}: ${value ? DIRECTION_LABELS[value] : 'tyhjä'}`);
      return item;
    }));
    const full = answers.length === count;
    lock(pad, checked || full);
    lock([erase], checked || !answers.length);
    check.hidden = !full;
    lock([check], checked);
  };
  flow.newTask = () => {
    motif = freshMelody(LEVELS.suunta[state.level], motif);
    answers = [];
    checked = false;
    flow.task.hidden = true;
    flow.info.textContent = `${motif.length} säveltä · ${motif.length - 1} vaihtoa`;
    flow.reset();
    draw();
  };

  flow.listen.addEventListener('click', () => {
    player.play(flow.listen, flow.status, melodyPlan(motif, TIMING.suunta), {
      toggle: true, onStart: () => { flow.task.hidden = false; },
    });
  });
  for (const button of pad) {
    button.addEventListener('click', () => {
      if (locked(button)) return;
      answers.push(button.dataset.suunta);
      draw();
    });
  }
  erase.addEventListener('click', () => {
    if (locked(erase)) return;
    answers.pop();
    draw();
  });
  check.addEventListener('click', () => {
    if (checked) return;
    const result = checkContour(motif, answers);
    checked = true;
    state = adapt(state, result.correct, LEVELS.suunta.length);
    flow.answered(contourFeedback(motif, answers) + (LEVEL_TEXT[state.change] ?? ''), result.correct);
    renderShape(flow.shape, motif, { marks: result.steps });
    renderNames(flow.names, motif);
    draw();
  });
  flow.newTask();
}

function setupEndings(section, player) {
  const flow = setupFlow(section, player);
  const answers = [...section.querySelectorAll('[data-loppu]')];
  const replays = [...section.querySelectorAll('[data-loppu-kuuntele]')];
  let state = { level: 0, streak: 0 };
  let index = -1;
  let round = null;
  let answered = false;
  const drone = () => LEVELS.koti[state.level].drone;
  const highlight = playing => answers.forEach((button, which) => button.toggleAttribute('data-soi', which === playing));

  flow.newTask = () => {
    index = pickIndex(ENDING_ROUNDS, index);
    round = endingRound(index);
    answered = false;
    flow.task.hidden = true;
    flow.info.textContent = drone() ? 'Matala G soi taustalla kotisävelen tukena.' : 'Ilman tukiääntä.';
    lock(answers, false);
    answers.forEach(button => button.setAttribute('aria-pressed', 'false'));
    flow.reset();
  };
  flow.listen.addEventListener('click', () => {
    const { plan, marks } = bothEndingsPlan(round, drone());
    player.play(flow.listen, flow.status, plan, {
      toggle: true,
      onStart: () => { flow.task.hidden = false; },
      onPosition: time => highlight(time < 0 ? -1 : time >= marks[1] ? 1 : 0),
    });
  });
  replays.forEach((button, which) => {
    button.addEventListener('click', () => {
      player.play(button, flow.status, versionPlan(round.versions[which], drone()), {
        onPosition: time => highlight(time < 0 ? -1 : which),
      });
    });
  });
  section.querySelector('[data-koti-savel]').addEventListener('click', event => {
    player.play(event.currentTarget, flow.status, HOME_TONE_PLAN);
  });
  answers.forEach((button, which) => {
    button.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const result = endingFeedback(round, which);
      state = adapt(state, result.correct, LEVELS.koti.length);
      button.setAttribute('aria-pressed', 'true');
      lock(answers, true);
      const change = state.change === 'ylos' ? ' Seuraavaksi ilman tukiääntä.'
        : state.change === 'alas' ? ' Seuraavaksi tukiääni taas mukana.' : '';
      flow.answered(result.text + change, result.correct);
      flow.shape.replaceChildren(...round.versions.map((notes, which) => element('li', '',
        `Loppu ${which + 1}: ${names(notes)}${round.order[which] === 'koti' ? ' (kotiin)' : ''}`)));
    });
  });
  flow.newTask();
}

function setupEcho(section, player) {
  const flow = setupFlow(section, player);
  const board = section.querySelector('[data-etsi-paikat]');
  const slots = section.querySelector('[data-etsi-vastaus]');
  const check = section.querySelector('[data-melodia-tarkista]');
  const solution = section.querySelector('[data-etsi-ratkaisu]');
  let state = { level: 0, streak: 0 };
  let motif = null;
  let history = [];
  let checked = false;
  let pool = null;

  const draw = () => {
    const chosen = recentNotes(history, motif.length);
    slots.replaceChildren(...motif.map((_, index) => {
      const id = chosen[index];
      const item = element('li', id ? '' : 'is-empty', id ? NOTES[id].name : '_');
      item.setAttribute('aria-label', `Sävel ${index + 1}: ${id ? `${NOTES[id].name}, ${position(id)}` : 'ei vielä soitettu'}`);
      return item;
    }));
    check.hidden = chosen.length !== motif.length;
    lock([check, solution], checked);
  };
  const buildBoard = () => {
    const header = element('div', 'melodia-otelauta-rivi melodia-otelauta-otsikko');
    header.setAttribute('aria-hidden', 'true');
    header.append(element('span', '', ''), ...['0', '1', '2', '3'].map(fret => element('span', '', fret)));
    const rows = boardRows(pool).map(row => {
      const line = element('div', 'melodia-otelauta-rivi');
      line.setAttribute('role', 'group');
      line.setAttribute('aria-label', STRING_NAMES[row.string]);
      line.append(element('span', 'melodia-kieli', row.label));
      for (const id of row.cells) {
        if (!id) {
          line.append(element('span', 'melodia-tyhja'));
          continue;
        }
        const button = element('button', '', NOTES[id].name);
        button.type = 'button';
        button.dataset.paikka = id;
        button.setAttribute('aria-label', `${NOTES[id].name}, ${position(id)}`);
        button.addEventListener('click', () => {
          player.play(button, flow.status, singleNotePlan(id));
          // Tarkistuksen jälkeen paikkoja voi yhä kuunnella, mutta tarkistettu vastaus pysyy.
          if (checked) return;
          history = recentNotes([...history, id], motif.length);
          draw();
        });
        line.append(button);
      }
      return line;
    });
    board.replaceChildren(header, ...rows);
  };

  flow.newTask = () => {
    const level = LEVELS.etsi[state.level];
    motif = freshMelody(level, motif);
    history = [];
    checked = false;
    flow.task.hidden = true;
    flow.info.textContent = `${motif.length} säveltä · ${level.start ? 'alkaa vapaalta G-kieleltä' : 'lähtösävel vaihtelee'}`;
    if (pool !== level.pool) {
      pool = level.pool;
      buildBoard();
    }
    flow.reset();
    draw();
  };
  flow.listen.addEventListener('click', () => {
    player.play(flow.listen, flow.status, melodyPlan(motif, TIMING.etsi), {
      toggle: true, onStart: () => { flow.task.hidden = false; },
    });
  });
  check.addEventListener('click', () => {
    if (checked) return;
    const chosen = recentNotes(history, motif.length);
    const result = checkEcho(motif, chosen);
    checked = true;
    state = adapt(state, result.correct, LEVELS.etsi.length);
    flow.answered(echoFeedback(motif, chosen) + (LEVEL_TEXT[state.change] ?? ''), result.correct);
    renderShape(flow.shape, motif, { marks: result.steps, withNames: true, markNotes: true });
    draw();
  });
  // Oikealla kitaralla harjoitteleva katsoo ratkaisun; tämä ei ole vastaus eikä muuta tasoa.
  solution.addEventListener('click', () => {
    if (checked) return;
    checked = true;
    flow.answered(`Ratkaisu: ${names(motif)}. Vertaa omaan soittoosi.`, true);
    flow.feedback.classList.remove('is-answered');
    renderShape(flow.shape, motif, { withNames: true });
    draw();
  });
  flow.newTask();
}

if (typeof document !== 'undefined') {
  const sections = document.querySelectorAll('[data-melodiaharjoitus]');
  if (sections.length) {
    const player = createPlayer(new URL('audio/soinnut/', import.meta.url));
    const setups = { suunta: setupContour, koti: setupEndings, etsi: setupEcho };
    for (const section of sections) {
      setups[section.dataset.melodiaharjoitus]?.(section, player);
      for (const hidden of section.querySelectorAll('[data-melodia-ohjaimet]')) hidden.hidden = false;
      section.querySelector('[data-melodia-tila]').textContent = '';
    }
  }
}
