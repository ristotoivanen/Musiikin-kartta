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

// Satunnaislukufunktion paluuarvo muutetaan väliin [0, 1). Virheellinen arvo (NaN, ääretön tai
// välin ulkopuolinen) ei saa tuottaa tyhjää tehtävää, joten se rajataan tai korvataan nollalla.
function unit(random) {
  const value = Number(random());
  if (!Number.isFinite(value)) return 0;
  return Math.min(Math.max(value, 0), 1 - Number.EPSILON);
}

function weighted(items, random) {
  const total = items.reduce((sum, [, weight]) => sum + weight, 0);
  let roll = unit(random) * total;
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
  // Kaksi samansuuntaista hyppyä (vähintään pieni terssi) vain, jos ne yhdessä kattavat enintään
  // pienen sekstin (8 puoliaskelta). Tällöin ne ovat käytännössä murtosointu, esim. G–B–D tai B–D–G.
  if (Math.abs(before) >= 3 && Math.abs(step) >= 3 && Math.sign(step) === Math.sign(before) && Math.abs(before + step) > 8) return 'kaksi hyppyä liian laajalle';
  // Kvartin tai kvintin hypyn jälkeen melodia palaa askeleella vastakkaiseen suuntaan.
  if (Math.abs(before) >= 5 && (step === 0 || Math.sign(step) === Math.sign(before) || Math.abs(step) > 2)) return 'hyppy ilman paluuta';
  return null;
}

// Tason kaikki vaatimukset yhdessä paikassa: sekä arvonta että vararatkaisu hyväksyvät melodian
// vain, jos tämä palauttaa null. Palauttaa ensimmäisen rikotun vaatimuksen kuvauksen.
export function melodyProblem(melody, { length, pool, start = null, semitones = true, endOnChordTone = false }) {
  const ids = POOLS[pool];
  if (!Array.isArray(melody) || !melody.length) return 'tyhjä melodia';
  if (melody.length !== length) return `pituus ${melody.length}, vaadittu ${length}`;
  for (const id of melody) if (!ids?.includes(id)) return `sävel ${id} ei kuulu säveljoukkoon`;
  if (start && melody[0] !== start) return `lähtösävel ${melody[0]}, vaadittu ${start}`;
  if (endOnChordTone && !CHORD_TONES.has(NOTES[melody.at(-1)].name)) return 'ei pääty sointusäveleen';
  for (let index = 1; index < melody.length; index++) {
    const problem = moveProblem(melody[index - 2] ?? null, melody[index - 1], melody[index], { semitones });
    if (problem) return `siirtymä ${index}: ${problem}`;
  }
  // Enintään yksi toistettu sävel koko melodiassa.
  if (melody.filter((id, index) => index && id === melody[index - 1]).length > 1) return 'useampi kuin yksi toistettu sävel';
  // Pidemmässä melodiassa on vähintään kaksi eri liikettä (ylös, alas, sama), joten se ei ole pelkkä nousu tai lasku.
  if (length >= 4 && new Set(contourOf(melody)).size < 2) return 'vain yhdenlaisia liikkeitä';
  return null;
}

// Kaikki tason sallitut melodiat, aina samassa järjestyksessä (syvyyshaku). Vararatkaisun ja
// testien perusta; tasot ovat pieniä (enintään 10 säveltä, 5 säveltä pitkä melodia).
const allowedCache = new Map();
export function allowedMelodies(level) {
  const key = JSON.stringify([level.length, level.pool, level.start ?? null, level.semitones ?? true, level.endOnChordTone ?? false]);
  if (allowedCache.has(key)) return allowedCache.get(key);
  const ids = POOLS[level.pool];
  const found = [];
  const extend = notes => {
    if (notes.length === level.length) {
      if (!melodyProblem(notes, level)) found.push(notes);
      return;
    }
    for (const id of ids) {
      const prefix = [...notes, id];
      const index = prefix.length - 1;
      if (index && moveProblem(prefix[index - 2] ?? null, prefix[index - 1], id, { semitones: level.semitones ?? true })) continue;
      extend(prefix);
    }
  };
  for (const first of level.start ? [level.start] : ids) if (ids.includes(first)) extend([first]);
  allowedCache.set(key, Object.freeze(found));
  return allowedCache.get(key);
}

// Vararatkaisu, kun arvonta ei tuota sallittua melodiaa: valitaan tason sallituista melodioista
// (satunnaisluvulla, mutta aina sallittu). Jos taso ei salli yhtään melodiaa, ei palauteta
// virheellistä tehtävää vaan heitetään virhe.
export function fallbackMelody(level, random = Math.random, avoid = null) {
  const allowed = allowedMelodies(level);
  if (!allowed.length) throw new RangeError(`Tasolle ei ole sallittua melodiaa: ${JSON.stringify(level)}`);
  const others = avoid ? allowed.filter(melody => melody.join() !== avoid.join()) : allowed;
  const pool = others.length ? others : allowed;
  return [...pool[Math.min(pool.length - 1, Math.floor(unit(random) * pool.length))]];
}

export const MELODY_ATTEMPTS = 500;

export function generateMelody(level, random = Math.random, attempts = MELODY_ATTEMPTS) {
  const { length, pool, start = null, semitones = true } = level;
  const ids = POOLS[pool];
  const chordStarts = ids.filter(id => CHORD_TONES.has(NOTES[id].name));
  for (let attempt = 0; attempt < attempts; attempt++) {
    const choices = unit(random) < 0.6 ? chordStarts : ids;
    const first = start ?? choices[Math.floor(unit(random) * choices.length)];
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
    if (!melodyProblem(notes, level)) return notes;
  }
  return fallbackMelody(level, random);
}

// Uusi tehtävä ei ole sama kuin edellinen. Jos arvonta ei onnistu poikkeamaan edellisestä
// (esim. poikkeava satunnaislukujakauma), valitaan toinen sallittu melodia.
export function freshMelody(level, previous, random = Math.random) {
  for (let attempt = 0; attempt < 20; attempt++) {
    const melody = generateMelody(level, random);
    if (!previous || melody.join() !== previous.join()) return melody;
  }
  return fallbackMelody(level, random, previous);
}

// Arvo uusi tehtävä niin, ettei sama toistu heti peräkkäin. Edellinen jätetään pois vaihtoehdoista
// ja loput arvotaan tasaisesti (ei siirretä edellisen osumaa viereiselle, mikä kaksinkertaistaisi sen todennäköisyyden).
export function pickIndex(length, previous = -1, random = Math.random) {
  const excluded = length > 1 && previous >= 0 && previous < length;
  const choices = excluded ? length - 1 : length;
  const index = Math.floor(unit(random) * choices);
  return excluded && index >= previous ? index + 1 : index;
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
export const COUNT_WORDS = Object.freeze(['', 'yhdessä', 'kahdessa', 'kolmessa', 'neljässä', 'viidessä']);
const said = value => value ? DIRECTION_LABELS[value] : 'ei vastausta';

export function contourFeedback(motif, answers) {
  const { correct, steps } = checkContour(motif, answers);
  if (correct) return `Oikein! Kaikki ${steps.length} vaihtoa osuivat.`;
  const right = steps.filter(step => step.ok).length;
  const misses = steps.flatMap((step, index) => step.ok ? []
    : [`vaihto ${index + 1}: kuului ${said(step.expected)}, vastasit ${said(step.given)}`]);
  return `${right}/${steps.length} oikein. ${capitalize(misses.join('; '))}.`;
}

// Suuntakuvake: kaksi sävelpistettä. x = aika (vasemmalta oikealle), y = korkeus (SVG:ssä pienempi y on ylempänä).
export const ICON = Object.freeze({ width: 32, height: 20, left: 6, right: 26, high: 5, low: 15, middle: 10 });
export function directionPoints(value) {
  const { left, right, high, low, middle } = ICON;
  if (value === 'ylos') return { from: [left, low], to: [right, high] };
  if (value === 'alas') return { from: [left, high], to: [right, low] };
  return { from: [left, middle], to: [right, middle] };
}

// Melodian muoto oikeilla sävelkorkeuksilla: puoliaskel = 4 yksikköä pystysuunnassa.
export function shapePoints(melody, { step = 44, unit = 4, pad = 8 } = {}) {
  const midis = melody.map(id => NOTES[id].midi);
  const top = Math.max(...midis);
  const bottom = Math.min(...midis);
  return {
    width: pad * 2 + (melody.length - 1) * step,
    height: pad * 2 + (top - bottom) * unit,
    points: midis.map((midi, index) => [pad + index * step, pad + (top - midi) * unit]),
  };
}

// ---------------------------------------------------------------------------------------------
// 02 · Kotiin vai kesken? Saman melodian kaksi loppua: toinen palaa kotisävel G:hen, toinen päättyy
// johonkin muuhun G-duurin säveleen. Kuulokokemus on vertaileva, ei yksiselitteisesti oikea tai
// väärä. Melodiat on kirjoitettu G-duuriin (jokaisessa C, osassa myös F♯). Ei loppuja E:hen (voi
// kuulostaa e-mollin kodilta) eikä B:hen (G-soinnun terssi, liian vakaa vertailuun). Kahdeksaa
// melodiaparia ei muuteta ilman omistajan kuuntelutestiä (pareja 4 ja 8 arvioidaan erikseen).
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

// Uusi kierros: eri melodia kuin edellisellä (ei pelkkää loppujen järjestyksen vaihtoa), jonka
// jälkeen loppujen järjestys arvotaan erikseen. Palauttaa kierrosindeksin 0–15.
export function pickRound(previous = -1, random = Math.random) {
  const phrase = pickIndex(ENDING_PHRASES.length, previous < 0 ? -1 : Math.floor(previous / 2), random);
  return phrase * 2 + (unit(random) < 0.5 ? 0 : 1);
}

// Eteneminen ei riipu valitusta lopusta: ensimmäiset kaksi tarkistettua vertailua soivat
// tukiäänellä, seuraavat ilman. Uudelleenkuuntelu ja saman tehtävän toistuva tarkistus eivät
// kasvata määrää; sen kirjaa kutsuja kerran tehtävää kohden (Tarkista valinta lukitaan).
export const SUPPORTED_COMPARISONS = 2;
export const endingLevel = checked => checked >= SUPPORTED_COMPARISONS ? 1 : 0;

// Musiikillinen kuvaus lopusta, joka ei palaa G:hen. Ei ehdottomia väitteitä: kuvaus kertoo sävelen
// etäisyyden kyseisen melodian kotisäveleen G ja sen, miltä se voi kuulostaa tässä melodiassa.
const OPEN_ENDINGS = Object.freeze({
  A: { into: 'A:han', character: 'voi kuulostaa pysähdykseltä, josta melodia vielä jatkaisi' },
  C: { into: 'C:hen', character: 'voi kuulostaa vakaalta pysähdykseltä, vaikka se ei ole kotisävel' },
  'F♯': { into: 'F♯:ään', character: 'voi vetää voimakkaasti kotisäveleen' },
  D: { into: 'D:hen', character: 'sopii G-sointuun, mutta voi jättää melodian odottamaan jatkoa' },
});
const SPAN_WORDS = Object.freeze({ 1: 'puoliaskeleen', 2: 'askeleen', 5: 'kvartin', 7: 'kvintin' });

// Lopun etäisyys melodian kotisäveleen G, esim. "askeleen G:n yläpuolelle". Oktaavi (G3 tai G4)
// on kyseisen melodian oma, joten suunta lasketaan sen mukaan eikä sävelnimestä.
export function endingSpan(phrase) {
  const difference = NOTES[phrase.kesken].midi - NOTES[phrase.koti].midi;
  return `${SPAN_WORDS[Math.abs(difference)]} G:n ${difference > 0 ? 'yläpuolelle' : 'alapuolelle'}`;
}

// Vertaileva palaute: ei oikein/väärin-arviota. Kertoo valitun lopun, kumpi palaa G:hen ja miten
// toinen loppu eroaa. Kaikki päättelyt tehdään vain tästä melodiasta.
export function endingFeedback(round, answer) {
  const home = round.order.indexOf('koti');
  const open = 1 - home;
  const ending = OPEN_ENDINGS[NOTES[round.phrase.kesken].name];
  const other = `Loppu ${open + 1} päättyy ${ending.into}, ${endingSpan(round.phrase)}, ja ${ending.character}.`;
  const choice = answer === home
    ? `Loppu ${home + 1} oli sinun valintasi. Se palaa G:hen, melodian suunniteltuun kotisäveleen.`
    : `Loppu ${open + 1} oli sinun valintasi. Loppu ${home + 1} palaa G:hen, melodian suunniteltuun kotisäveleen.`;
  return { chosen: answer, home, text: `${choice} ${other} Kuuntele vielä, miten loput eroavat toisistaan.` };
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

// Sama sävelnimi eri oktaavissa (esim. G3 ja G4) on eri sävelkorkeus ja siksi väärä vastaus, mutta
// pelkkä nimi ("kuului G, soitit G") ei kerro sitä. Palauttaa tarkennuksen vain silloin, kun
// annettu sävel on sama nimi eri oktaavissa; muuten null. Sävelkorkeuden vertailu on midi-luvuissa.
export const OCTAVE_WORDS = Object.freeze({ 1: 'oktaavia', 2: 'kaksi oktaavia' });
export function octaveHint(expected, given) {
  if (!expected || !given || expected === given || NOTES[expected].name !== NOTES[given].name) return null;
  const difference = NOTES[given].midi - NOTES[expected].midi;
  if (difference % 12 !== 0) return null;
  const higher = difference > 0;
  const octaves = Math.abs(difference) / 12;
  const phrase = `${OCTAVE_WORDS[octaves] ?? `${octaves} oktaavia`} ${higher ? 'korkeampi' : 'matalampi'}`;
  return { higher, octaves, phrase, text: `${capitalize(phrase)}.` };
}

export function echoFeedback(motif, chosen) {
  const { correct, steps } = checkEcho(motif, chosen);
  if (correct) return `Oikein! ${names(motif)}. Soita sama oikealla kitaralla.`;
  const wrong = steps.filter(step => !step.ok);
  const octaves = wrong.filter(step => octaveHint(step.expected, step.given)).length;
  const base = `${steps.length - wrong.length}/${steps.length} oikein. ${capitalize(COUNT_WORDS[wrong.length])} sävelessä oli eroa.`;
  if (!octaves) return base;
  return `${base} ${octaves === wrong.length
    ? (octaves === 1 ? 'Sävelnimi oli oikein, mutta oktaavi eri.' : 'Sävelnimet olivat oikein, mutta oktaavit eri.')
    : 'Osassa sävelnimi oli oikein, mutta oktaavi eri.'}`;
}

// Vastausketju: vain säveltoisto, joka on oikeasti ehtinyt kuulua, kirjautuu vastaukseen.
// Painallus saa ensin tiketin (press); se vahvistetaan (confirm) vasta, kun soitin on todennut
// äänen alkaneen. Vanhentunut tiketti ei kirjaudu: uusi painallus mitätöi aiemmat, uusi tehtävä
// (reset) mitätöi kaikki ja tarkistuksen jälkeen (lock) ketju ei enää muutu. Vahvistukset
// hyväksytään vain painallusjärjestyksessä.
export function createEchoChain(size = 3) {
  let generation = 0;
  let pressed = 0;
  let confirmed = 0;
  let total = 0;
  let locked = false;
  let notes = [];
  let width = size;
  return {
    reset(nextSize = width) {
      generation++;
      pressed = 0;
      confirmed = 0;
      total = 0;
      locked = false;
      notes = [];
      width = nextSize;
    },
    lock() { locked = true; },
    press(id) { return { generation, serial: ++pressed, id }; },
    confirm(ticket) {
      if (locked || ticket.generation !== generation || ticket.serial <= confirmed || ticket.serial !== pressed) return false;
      confirmed = ticket.serial;
      total++;
      notes = recentNotes([...notes, ticket.id], width);
      return true;
    },
    // Montako painallusta on kirjautunut tässä tehtävässä (testausta ja tilatietoa varten).
    get count() { return total; },
    get notes() { return [...notes]; },
  };
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

// Napautetun yksittäisen sävelen toisto alkaa lyhyellä viiveellä (muut toistot: 0,10 s), ja sävel
// katsotaan kuulluksi vasta, kun äänikello on edennyt näin paljon sen alusta ilman keskeytystä
// (vahvistuma 12 ms + varaa). Pelkkä painallus tai ajastettu Web Audio -kutsu ei riitä todisteeksi.
export const TAP_LEAD = 0.03;
export const AUDIBLE_AFTER = 0.05;
const SAMPLE_TIMEOUT_MS = 20000;

function createPlayer(base) {
  // AAC ensin, jos selain ilmoittaa tukevansa sitä. Verkko- tai purkuvirhe kokeilee toista muotoa.
  const formats = new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
  const buffers = new Map();
  // Käynnissä olevat lataukset: sama näyte ladataan kerran, vaikka sitä pyytäisivät esilataus ja painallus.
  const loading = new Map();
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

  // Lataus ei kuulu yksittäiselle toistolle: keskeytetty toisto lopettaa vain odottamisen, ja
  // valmistunut näyte jää välimuistiin seuraavaa painallusta varten. Virhe poistaa latauksen
  // luettelosta, jolloin seuraava painallus yrittää uudelleen.
  function load(ctx, pitch) {
    if (buffers.has(pitch)) return Promise.resolve(buffers.get(pitch));
    if (loading.has(pitch)) return loading.get(pitch);
    const [string, id] = pitch.split(':');
    const file = `INSGuitarSteel_String${string}_Vel02_${id}_01`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SAMPLE_TIMEOUT_MS);
    const request = (async () => {
      let failure;
      for (const format of formats) {
        try {
          const response = await fetch(new URL(`${file}.${format}`, base), { signal: controller.signal });
          if (!response.ok) throw new Error(`${pitch}: HTTP ${response.status}`);
          const buffer = await decode(ctx, await response.arrayBuffer());
          buffers.set(pitch, buffer);
          return buffer;
        } catch (error) {
          failure = error;
          if (controller.signal.aborted) break;
        }
      }
      throw failure;
    })().finally(() => {
      clearTimeout(timer);
      loading.delete(pitch);
    });
    loading.set(pitch, request);
    return request;
  }

  // Odota latausta, mutta lopeta odotus heti, kun toisto keskeytetään.
  function until(promise, signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(signal.reason ?? new Error('keskeytetty'));
        return;
      }
      const onAbort = () => reject(signal.reason ?? new Error('keskeytetty'));
      signal.addEventListener('abort', onAbort, { once: true });
      promise.then(resolve, reject).finally(() => signal.removeEventListener('abort', onAbort));
    });
  }

  // Esilataa näytteet välimuistiin (käyttäjän eleestä, ei sivun latauksessa). Epäonnistunut
  // esilataus ei näy oppijalle; painallus yrittää samaa näytettä uudelleen.
  function preload(pitches) {
    let ctx;
    try { ctx = context(); } catch { return; }
    for (const pitch of new Set(pitches)) load(ctx, pitch).catch(() => {});
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
  // onStart: ääni on ladattu ja ajastettu. onAudible: äänikello on edennyt audibleAfter sekuntia
  // ensimmäisen sävelen alusta ilman keskeytystä (sävel on ehtinyt kuulua); kutsutaan enintään kerran.
  // onPosition(sekunnit) kertoo toistokohdan; -1 = toisto päättyi.
  async function play(trigger, status, plan, { toggle = false, onStart, onAudible, onStop, onPosition, lead = 0.1, audibleAfter = AUDIBLE_AFTER } = {}) {
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
      const loaded = await Promise.all(pitches.map(pitch => until(load(ctx, pitch), own.abort.signal)));
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
      own.start = ctx.currentTime + lead;
      const end = planEnd(plan) + 0.02;
      for (const event of plan) schedule(own, byPitch.get(event.pitch), event);
      show(status);
      // Vasta kun äänet on ladattu ja ajastettu: epäonnistunut lataus ei avaa vastaamista.
      onStart?.();
      let audible = !onAudible;
      const follow = () => {
        if (session !== own) return;
        const elapsed = ctx.currentTime - own.start;
        if (elapsed >= end) {
          stop();
          return;
        }
        if (!audible && elapsed >= audibleAfter && ctx.state === 'running') {
          audible = true;
          onAudible();
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

  return { play, stop, show, preload };
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


// ---------------------------------------------------------------------------------------------
// Kuvat: sävelpisteet ja viivat. Aika kulkee vasemmalta oikealle, korkeampi sävel on ylempänä.
// Ensimmäinen piste on ontto, jotta kulkusuunta erottuu ilman värejä.

const SVG = 'http://www.w3.org/2000/svg';

function svgNode(tag, attributes = {}) {
  const node = document.createElementNS(SVG, tag);
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, String(value));
  return node;
}

function directionIcon(value) {
  const { from, to } = directionPoints(value);
  const svg = svgNode('svg', { class: 'melodia-suunta-kuva', viewBox: `0 0 ${ICON.width} ${ICON.height}`, 'aria-hidden': 'true', focusable: 'false' });
  svg.append(svgNode('line', { x1: from[0], y1: from[1], x2: to[0], y2: to[1] }),
    svgNode('circle', { class: 'melodia-alku', cx: from[0], cy: from[1], r: 3.5 }),
    svgNode('circle', { cx: to[0], cy: to[1], r: 3.5 }));
  return svg;
}

// Melodian todellinen muoto: pisteet sävelkorkeuden mukaan, virheelliset vaihdot katkoviivalla ja ✗:llä.
function melodyShape(melody, wrong = new Set()) {
  const { width, height, points } = shapePoints(melody);
  const svg = svgNode('svg', { class: 'melodia-muoto-kuva', viewBox: `0 0 ${width} ${height + 14}`, role: 'img' });
  svg.style.setProperty('--savelia', String(melody.length));
  const moves = contourOf(melody);
  svg.setAttribute('aria-label', `Melodian muoto: ${moves.map((move, index) => `vaihto ${index + 1} ${DIRECTION_LABELS[move]}${wrong.has(index) ? ' (vastauksesi poikkesi)' : ''}`).join(', ')}`);
  points.slice(1).forEach(([x, y], index) => {
    const [x0, y0] = points[index];
    const line = svgNode('line', { x1: x0, y1: y0, x2: x, y2: y });
    if (wrong.has(index)) {
      line.setAttribute('class', 'is-virhe');
      const mark = svgNode('text', { x: (x0 + x) / 2, y: height + 12, 'text-anchor': 'middle', class: 'melodia-merkki' });
      mark.textContent = `✗ ${index + 1}`;
      svg.append(mark);
    }
    svg.append(line);
  });
  points.forEach(([x, y], index) => svg.append(svgNode('circle', { cx: x, cy: y, r: 5, class: index ? '' : 'melodia-alku' })));
  return svg;
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Vertailu kortteina: ylhäällä kuultu malli, alla oppijan vastaus (”sinä”). Merkinnät vain vastauksessa.
// Kortit rivittyvät, joten pitkäkin kulku mahtuu kapeaan näkymään ja suurennettuna.
// heardNote / yoursNote / hint ovat valinnaisia lisärivejä (esim. kitaran paikka ja oktaavi), joita
// näytetään vain, kun ne tarvitaan. Ne sisältyvät myös kortin saavutettavaan nimeen.
function compareCards(caption, items) {
  const list = element('ol', 'melodia-vertailu');
  list.setAttribute('aria-label', caption);
  list.append(...items.map(({ number, heard, heardText, heardNote, yours, yoursText, yoursNote, hint, ok }) => {
    const item = element('li', yours ? (ok ? 'is-oikein' : 'is-virhe') : '');
    item.append(element('span', 'melodia-vertailu-nro', number));
    const top = element('span', 'melodia-kuului');
    top.append(...heard);
    if (heardNote) top.append(element('span', 'melodia-pieni-teksti', capitalize(heardNote)));
    item.append(top);
    if (yours) {
      const bottom = element('span', 'melodia-sina');
      bottom.append(element('span', 'melodia-pieni-teksti', 'sinä'), ...yours);
      if (yoursNote) bottom.append(element('span', 'melodia-pieni-teksti', capitalize(yoursNote)));
      if (hint) bottom.append(element('span', 'melodia-oktaavi', hint.text));
      bottom.append(element('span', 'melodia-merkki', ok ? '✓' : '✗'));
      item.append(bottom);
    }
    const heardName = heardNote ? `${heardText}, ${heardNote}` : heardText;
    const yoursName = [yoursText, yoursNote, hint?.phrase].filter(Boolean).join(', ');
    item.setAttribute('aria-label', `${number}: kuului ${heardName}${yours ? `, ${ok ? 'oikein' : `vastasit ${yoursName}`}` : ''}`);
    return item;
  }));
  return list;
}

function renderNames(list, notes) {
  list.replaceChildren(...notes.map((id, index) =>
    element('li', '', `${index + 1}. ${NOTES[id].name} · ${position(id)}`)));
}

// Yhteinen kulku: Kuuntele → kokeile tai valitse → Tarkista → palaute → Seuraava (soi heti).
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
      const item = element('li', value ? '' : 'is-empty');
      if (value) item.append(directionIcon(value));
      else item.append(element('span', '', '?'));
      item.setAttribute('aria-label', `Vaihto ${index + 1}: ${value ? DIRECTION_LABELS[value] : 'ei vielä valittu'}`);
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
    const wrong = new Set(result.steps.flatMap((step, index) => step.ok ? [] : [index]));
    flow.shape.replaceChildren(
      melodyShape(motif, wrong),
      compareCards('Sävelvaihdot: kuultu ja vastauksesi', result.steps.map((step, index) => ({
        number: `Vaihto ${index + 1}`,
        heard: [directionIcon(step.expected)], heardText: DIRECTION_LABELS[step.expected],
        yours: [directionIcon(step.given)], yoursText: DIRECTION_LABELS[step.given], ok: step.ok,
      }))));
    renderNames(flow.names, motif);
    draw();
  });
  flow.newTask();
}

function setupEndings(section, player) {
  const flow = setupFlow(section, player);
  const answers = [...section.querySelectorAll('[data-loppu]')];
  const check = section.querySelector('[data-melodia-tarkista]');
  // Eteneminen ei riipu valinnasta: vain tarkistettujen vertailujen määrä (vain tämän sivun muistissa).
  const progress = { checked: 0 };
  let index = -1;
  let round = null;
  let selected = null;
  let playing = -1;
  let checked = false;
  const drone = () => LEVELS.koti[endingLevel(progress.checked)].drone;

  // Soiva ja valittu ovat eri tiloja: soiva = data-soi + ”▶ soi”, valittu = aria-pressed + ”✓ valittu”.
  // Tarkistuksen jälkeen kotiin palaava loppu nimetään (”palaa G:hen”) ilman oikein/väärin-merkintää.
  const paint = () => answers.forEach((button, which) => {
    const parts = [];
    if (which === selected) parts.push('✓ valittu');
    if (checked && round.order[which] === 'koti') parts.push('palaa G:hen');
    if (which === playing) parts.push('▶ soi');
    button.querySelector('[data-loppu-tila]').textContent = parts.join(' · ');
    button.toggleAttribute('data-soi', which === playing);
    button.setAttribute('aria-pressed', String(which === selected));
    button.classList.toggle('is-kotiin', checked && round.order[which] === 'koti');
  });
  const follow = which => time => {
    const now = time < 0 ? -1 : which;
    if (now !== playing) {
      playing = now;
      paint();
    }
  };

  flow.newTask = () => {
    index = pickRound(index);
    round = endingRound(index);
    selected = null;
    playing = -1;
    checked = false;
    flow.task.hidden = true;
    flow.info.textContent = drone() ? 'Matala G soi taustalla tukiäänenä.' : 'Ilman tukiääntä.';
    check.hidden = true;
    lock([check], false);
    flow.reset();
    paint();
  };
  flow.listen.addEventListener('click', () => {
    const { plan, marks } = bothEndingsPlan(round, drone());
    player.play(flow.listen, flow.status, plan, {
      toggle: true,
      onStart: () => { flow.task.hidden = false; },
      onPosition: time => follow(time >= marks[1] ? 1 : 0)(time),
    });
  });
  // Lopun painallus soittaa sen ja valitsee sen alustavasti. Tarkistus vasta Tarkista valinta -painikkeesta.
  answers.forEach((button, which) => {
    button.addEventListener('click', () => {
      if (!checked) {
        selected = which;
        check.hidden = false;
        paint();
      }
      player.play(button, flow.status, versionPlan(round.versions[which], drone()), { onPosition: follow(which) });
    });
  });
  check.addEventListener('click', () => {
    // Sama tehtävä tarkistetaan ja lasketaan vain kerran.
    if (checked || selected === null) return;
    checked = true;
    progress.checked++;
    const result = endingFeedback(round, selected);
    lock([check], true);
    const change = progress.checked === SUPPORTED_COMPARISONS ? ' Seuraavaksi ilman tukiääntä.' : '';
    // Vertaileva palaute ei ole virhe eikä onnistuminen, joten se näytetään aina neutraalina.
    flow.answered(result.text + change, true);
    flow.shape.replaceChildren(...round.versions.map((notes, which) => element('li', '',
      `Loppu ${which + 1}: ${names(notes)}${round.order[which] === 'koti' ? ' (palaa G:hen)' : ''}`)));
    paint();
  });
  section.querySelector('[data-koti-savel]')?.addEventListener('click', event => {
    player.play(event.currentTarget, flow.status, HOME_TONE_PLAN);
  });
  flow.newTask();
}

function setupEcho(section, player) {
  const flow = setupFlow(section, player);
  const board = section.querySelector('[data-etsi-paikat]');
  const slots = section.querySelector('[data-etsi-vastaus]');
  const check = section.querySelector('[data-melodia-tarkista]');
  const solution = section.querySelector('[data-etsi-ratkaisu]');
  const own = section.querySelector('[data-etsi-oma]');
  let state = { level: 0, streak: 0 };
  let motif = null;
  // Vastausketjussa on vain sävelet, jotka ovat ehtineet kuulua (ks. createEchoChain).
  const chain = createEchoChain();
  let tried = [];
  let checked = false;
  let pool = null;

  const draw = () => {
    const chosen = chain.notes;
    slots.replaceChildren(...motif.map((_, index) => {
      const id = chosen[index];
      const item = element('li', id ? '' : 'is-empty', id ? NOTES[id].name : '?');
      item.setAttribute('aria-label', `Sävel ${index + 1}: ${id ? `${NOTES[id].name}, ${position(id)}` : 'ei vielä soitettu'}`);
      return item;
    }));
    slots.dataset.kuultu = String(chain.count);
    check.hidden = chosen.length !== motif.length;
    lock([check, solution], checked);
  };
  // Oikean kulun järjestysnumerot ruudukon paikoille (sama paikka voi olla kulussa useasti).
  const markBoard = melody => {
    for (const button of board.querySelectorAll('[data-paikka]')) {
      const id = button.dataset.paikka;
      const order = melody.flatMap((note, index) => note === id ? [index + 1] : []);
      button.querySelector('.melodia-numero')?.remove();
      button.classList.toggle('is-kulussa', order.length > 0);
      button.setAttribute('aria-label', `${NOTES[id].name}, ${position(id)}${order.length ? `, sävel ${order.join(' ja ')} kulussa` : ''}`);
      if (order.length) button.append(element('span', 'melodia-numero', order.join('·')));
    }
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
          // Painallus saa tiketin; se kirjautuu vastausketjuun vasta, kun sävel on ehtinyt kuulua.
          // Keskeytynyt, epäonnistunut tai vanhentunut painallus ei kirjaudu. Tarkistuksen jälkeen
          // paikkoja voi yhä kuunnella, mutta tarkistettu vastaus pysyy.
          const ticket = checked ? null : chain.press(id);
          player.play(button, flow.status, singleNotePlan(id), {
            lead: TAP_LEAD,
            onAudible: ticket && (() => { if (chain.confirm(ticket)) draw(); }),
          });
        });
        line.append(button);
      }
      return line;
    });
    board.replaceChildren(header, ...rows);
  };
  const reveal = (text, correct, steps) => {
    checked = true;
    chain.lock();
    flow.answered(text, correct);
    const answered = steps[0].given !== undefined;
    flow.shape.replaceChildren(
      compareCards('Sävelkulku: kuultu ja soittamasi', steps.map((step, index) => {
        // Sama sävelnimi eri oktaavissa: näytä tarkennus (kitaran paikka ja oktaavi) vain tällä kortilla.
        const hint = answered && step.given ? octaveHint(step.expected, step.given) : null;
        return {
          number: `Sävel ${index + 1}`,
          heard: [element('strong', '', NOTES[step.expected].name)], heardText: NOTES[step.expected].name,
          heardNote: hint ? position(step.expected) : null,
          yours: answered ? [element('strong', '', step.given ? NOTES[step.given].name : '–')] : null,
          yoursText: step.given ? NOTES[step.given].name : 'ei säveltä',
          yoursNote: hint ? position(step.given) : null, hint, ok: step.ok,
        };
      })),
      element('p', 'melodia-pieni', `Kitaralla: ${motif.map(position).join(' → ')}`));
    markBoard(motif);
    draw();
  };

  flow.newTask = () => {
    const level = LEVELS.etsi[state.level];
    motif = freshMelody(level, motif);
    chain.reset(motif.length);
    tried = [];
    checked = false;
    flow.task.hidden = true;
    flow.info.textContent = `${motif.length} säveltä · ${level.start ? 'alkaa vapaalta G-kieleltä' : 'lähtösävel vaihtelee'}`;
    if (pool !== level.pool) {
      pool = level.pool;
      buildBoard();
    }
    markBoard([]);
    own.hidden = true;
    flow.reset();
    draw();
  };
  flow.listen.addEventListener('click', () => {
    // Esilataa käyttäjän eleestä (ei sivun latauksessa) ensin kuultavan melodian sävelet ja sitten koko
    // nykyinen sävelalue samaan näytevälimuistiin.
    player.preload([...motif, ...POOLS[pool]].map(id => NOTES[id].sample));
    player.play(flow.listen, flow.status, melodyPlan(motif, TIMING.etsi), {
      toggle: true, onStart: () => { flow.task.hidden = false; },
    });
  });
  check.addEventListener('click', () => {
    if (checked) return;
    // Arvioidaan täsmälleen näkyvä ja vahvistettu vastausketju.
    tried = chain.notes;
    const result = checkEcho(motif, tried);
    state = adapt(state, result.correct, LEVELS.etsi.length);
    reveal(echoFeedback(motif, tried) + (LEVEL_TEXT[state.change] ?? ''), result.correct, result.steps);
    own.hidden = result.correct;
  });
  // Oikealla kitaralla etsinyt katsoo sävelkulun; se ei ole vastaus eikä muuta tasoa.
  solution.addEventListener('click', () => {
    if (checked) return;
    reveal(`Sävelkulku: ${names(motif)}. Vertaa omaan soittoosi. Tätä ei lasketa vastaukseksi.`, true,
      motif.map(id => ({ expected: id })));
    flow.feedback.classList.remove('is-answered');
  });
  own.addEventListener('click', () => {
    player.play(own, flow.status, melodyPlan(tried, TIMING.etsi));
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
