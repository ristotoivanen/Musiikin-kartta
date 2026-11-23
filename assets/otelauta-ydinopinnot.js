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
// - Puhtaat funktiot laskevat jokaisen sävelen kielestä ja nauhasta. Samat funktiot tuottavat
//   näkyvän palautteen ja soivan taajuuden, joten näkyvä ja kuultava sävel eivät voi erota.
// - Tehtävägeneraattorit (generate*) arpovat tehtävät kaikista kelvollisista kieli- ja
//   nauhapaikoista 0–12. Satunnaislähde annetaan parametrina, joten testit voivat käydä läpi
//   kaikki tapaukset ja tuhansia siemeniä (tests/otelauta-ydinopinnot.test.ts).
// - Äänet ovat selaimessa Web Audiolla tuotettuja yksinkertaisia demoääniä, eivät äänitteitä.
//   Toisto alkaa vain käyttäjän painalluksesta; uusi toisto, sivun piilottaminen ja oppitunnin
//   sulkeminen pysäyttävät edellisen.
// - Mikrofonia ei käytetä. Virtuaaliotelaudan oikea vastaus ei todista soittoa oikealla kitaralla.
// - Mitään ei tallenneta. "Merkitse kokeilluksi" on Ydinopintojen yhteinen merkintä.

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
// Satunnaisuus. Testit antavat siemenen, selain käyttää aikaleimaa.

/** Toistettava näennäissatunnainen luku väliltä [0, 1) (mulberry32). */
export function createRandom(seed = Date.now()) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6D2B79F5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function pick(rand, list) {
  if (!list.length) throw new Error('Tyhjä valintajoukko');
  return list[Math.floor(rand() * list.length)];
}

export function shuffle(rand, list) {
  const result = [...list];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(rand() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

/** Kaikki 6 × 13 = 78 paikkaa paksusta kielestä ohueen. */
export const ALL_POSITIONS = Object.freeze(STRINGS.flatMap(string =>
  Array.from({ length: MAX_FRET + 1 }, (_, fret) => Object.freeze({ string: string.id, fret, midi: string.open + fret }))));

export function positionsOfPitch(midi, strings = STRINGS.map(string => string.id)) {
  return ALL_POSITIONS.filter(position => position.midi === midi && strings.includes(position.string));
}

const samePosition = (a, b) => Boolean(a && b) && a[0] === b[0] && a[1] === b[1];

/** Siirron kuvaus kahden paikan välillä, esim. "kaksi kieltä ohuemmalle, kaksi nauhaa ylemmäs". */
export function shapeWords(from, to) {
  const strings = stringInfo(to[0]).index - stringInfo(from[0]).index;
  const frets = to[1] - from[1];
  const parts = [];
  if (strings) parts.push(`${countWords(Math.abs(strings), 'kieli', 'kieltä')} ${strings > 0 ? 'ohuemmalle' : 'paksummalle'}`);
  parts.push(frets ? `${countWords(Math.abs(frets), 'nauha', 'nauhaa')} ${frets > 0 ? 'ylemmäs' : 'alemmas'}` : 'sama nauha');
  return parts.join(', ');
}

// ---------------------------------------------------------------------------------------------
// 01 · Sama sävel toiselta kieleltä (unisono naapurikielellä)

// Opettava ensimmäinen esimerkki; sen jälkeen tehtävät arvotaan.
export const UNISON_EXAMPLE = Object.freeze({ from: Object.freeze(['A', 0]), to: 'E' });

/** Kaikki kelvolliset tehtävät: lähtöpaikka ja naapurikieli, jolla yhtä korkea sävel on nauhoilla 0–12. */
export function unisonCandidates() {
  const result = [];
  STRINGS.forEach((from, index) => {
    for (const to of [STRINGS[index - 1], STRINGS[index + 1]]) {
      if (!to) continue;
      for (let fret = 0; fret <= MAX_FRET; fret++) {
        const answer = from.open + fret - to.open;
        if (answer >= 0 && answer <= MAX_FRET) result.push(Object.freeze({ from: Object.freeze([from.id, fret]), to: to.id }));
      }
    }
  });
  return result;
}
const UNISON_ALL = Object.freeze(unisonCandidates());

export function unisonAnswer(round) {
  const target = pitchAt(...round.from);
  return { string: round.to, fret: target - stringInfo(round.to).open, midi: target };
}

/** Ylittääkö tehtävä G- ja B-kielen välin (neljä nauhaa, ei viisi). */
export function crossesGB(round) {
  return new Set([round.from[0], round.to, 'G', 'B']).size === 2;
}

/**
 * Arpoo seuraavan tehtävän. Ei toista kolmen edellisen lähtöpaikkaa eikä edellisen kieliparia, ja
 * G–B-poikkeus tulee vähintään joka neljännessä tehtävässä.
 */
export function generateUnisonRound(rand, history = []) {
  const recent = history.slice(-3);
  const last = history.at(-1);
  let pool = UNISON_ALL.filter(round =>
    !recent.some(previous => samePosition(previous.from, round.from)) &&
    !(last && last.from[0] === round.from[0] && last.to === round.to) &&
    !(last && unisonAnswer(last).midi === unisonAnswer(round).midi));
  if (history.length >= 3 && !recent.some(crossesGB)) pool = pool.filter(crossesGB);
  return pick(rand, pool);
}

export function unisonPrompt(round, example = false) {
  const [string, fret] = round.from;
  const pitch = pitchName(pitchAt(string, fret));
  const to = stringInfo(round.to);
  if (example) return `${capital(longPosition(string, fret))} soi ${pitch}. Sama ${pitch} löytyy ${to.from} viisi nauhaa ylempää. Valitse se.`;
  return `${capital(longPosition(string, fret))} soi ${pitch}. Etsi sama ${pitch} ${to.from}.`;
}

export function unisonHint(round) {
  const thicker = stringInfo(round.to).index < stringInfo(round.from[0]).index;
  const gap = crossesGB(round) ? 'neljä' : 'viisi';
  return `Vihje: ${crossesGB(round) ? 'G- ja B-kielen välillä' : 'naapurikielellä'} sama korkeus on ${gap} nauhaa ${thicker ? 'ylempänä paksummalla' : 'alempana ohuemmalla'} kielellä.`;
}

export function checkUnison(round, string, fret) {
  const [fromString, fromFret] = round.from;
  const target = pitchAt(fromString, fromFret);
  const tapped = pitchAt(string, fret);
  const wanted = stringInfo(round.to).from;
  if (string === fromString && fret === fromFret) {
    return { ok: false, kind: 'lahto', message: `Tämä on lähtösävel. Etsi ${wanted}.` };
  }
  if (string !== round.to) {
    if (tapped === target) return { ok: false, kind: 'toinen-kieli', message: `Sekin on ${pitchName(target)}, mutta etsi ${wanted}.` };
    return { ok: false, kind: 'vaara-kieli', message: `${capital(shortPosition(string, fret))}: ${pitchName(tapped)}. Etsi ${wanted}.` };
  }
  const diff = tapped - target;
  if (diff === 0) {
    const extra = crossesGB(round) ? ' G- ja B-kielen väli on neljä nauhaa.' : '';
    return { ok: true, kind: 'oikein', message: `Oikein. Molemmat ovat ${pitchName(target)}.${extra}` };
  }
  if (diff % 12 === 0) {
    return { ok: false, kind: 'oktaavi', message: `${pitchName(tapped)} on ${relationWords(diff)}. Etsi ${pitchName(target)}.` };
  }
  return {
    ok: false,
    kind: 'eri',
    message: `${pitchName(tapped)} – liian ${diff > 0 ? 'korkea' : 'matala'}. Siirry ${countWords(Math.abs(diff), 'nauha', 'nauhaa')} ${diff > 0 ? 'alemmas' : 'ylemmäs'}.`,
  };
}

// ---------------------------------------------------------------------------------------------
// 02 · Kuule ja löydä oktaavi: A) kuule suhde, B) löydä paikka

export const OCTAVE_RELATIONS = Object.freeze({ alempi: -12, sama: 0, ylempi: 12 });
export const RELATION_LABELS = Object.freeze({ alempi: 'Oktaavia matalampi', sama: 'Yhtä korkea', ylempi: 'Oktaavia korkeampi' });

/** Lähtöpaikat, joille löytyy oktaavia matalampi, yhtä korkea (toisella kielellä) ja oktaavia korkeampi paikka. */
export function octaveReferences() {
  return ALL_POSITIONS.filter(position =>
    positionsOfPitch(position.midi - 12).length > 0 &&
    positionsOfPitch(position.midi + 12).length > 0 &&
    positionsOfPitch(position.midi).some(other => other.string !== position.string));
}
const OCTAVE_REFS = Object.freeze(octaveReferences());

/**
 * Arpoo tehtävän: lähtösävel, arvoitussävelen suhde ja kolme numeroitua paikkaa eri kielillä
 * satunnaisessa järjestyksessä. Sama suhde ei toistu kolmesti peräkkäin.
 */
export function generateOctaveRound(rand, history = []) {
  const lastTwo = history.slice(-2).map(round => round.relation);
  const relations = Object.keys(OCTAVE_RELATIONS).filter(key => !(lastTwo.length === 2 && lastTwo.every(previous => previous === key)));
  const relation = pick(rand, relations);
  const last = history.at(-1);
  for (let attempt = 0; attempt < 100; attempt++) {
    const ref = pick(rand, OCTAVE_REFS.filter(position => !last || position.midi !== pitchAt(...last.ref)));
    const chosen = {};
    const used = new Set();
    let valid = true;
    for (const key of shuffle(rand, Object.keys(OCTAVE_RELATIONS))) {
      const options = positionsOfPitch(ref.midi + OCTAVE_RELATIONS[key])
        .filter(position => !used.has(position.string) && !(position.string === ref.string && position.fret === ref.fret))
        .filter(position => key !== 'sama' || position.string !== ref.string);
      if (!options.length) { valid = false; break; }
      const place = pick(rand, options);
      chosen[key] = [place.string, place.fret];
      used.add(place.string);
    }
    if (!valid) continue;
    const order = shuffle(rand, Object.keys(OCTAVE_RELATIONS));
    return Object.freeze({
      ref: Object.freeze([ref.string, ref.fret]),
      relation,
      places: Object.freeze(order.map(key => Object.freeze({ key, position: Object.freeze(chosen[key]) }))),
      answer: order.indexOf(relation),
    });
  }
  throw new Error('Oktaavitehtävää ei voitu muodostaa');
}

export function mysteryPitch(round) {
  return pitchAt(...round.ref) + OCTAVE_RELATIONS[round.relation];
}

export function checkOctaveRelation(round, relation) {
  const label = RELATION_LABELS[round.relation].toLowerCase();
  if (relation === round.relation) return { ok: true, kind: 'oikein', message: `Oikein: ${label}. Missä se soi?` };
  return { ok: false, kind: 'vaara', message: `Arvoitussävel oli ${label}. Missä se soi?` };
}

export function checkOctavePlace(round, index) {
  const ref = pitchAt(...round.ref);
  const answer = round.places[round.answer].position;
  const shape = shapeWords(round.ref, answer);
  if (index === round.answer) {
    return { ok: true, kind: 'oikein', message: `Oikein. Paikka ${index + 1}, ${shortPosition(...answer)}: ${pitchName(mysteryPitch(round))} (lähtösävelestä ${shape}).` };
  }
  const chosen = round.places[index].position;
  const midi = pitchAt(...chosen);
  return {
    ok: false,
    kind: 'vaara',
    message: `Paikka ${index + 1} on ${pitchName(midi)}, ${relationWords(midi - ref)} kuin lähtösävel. Arvoitussävel oli paikka ${round.answer + 1}, ${shortPosition(...answer)} (${pitchName(mysteryPitch(round))}).`,
  };
}

// ---------------------------------------------------------------------------------------------
// 03 · Etsi perussävel E- ja A-kieleltä

export const ROOT_STRINGS = Object.freeze(['E', 'A']);
export const LANDMARKS = Object.freeze([0, 3, 5, 7, 12]);
export const ACCIDENTALS = Object.freeze(['C♯', 'E♭', 'F♯', 'A♭', 'B♭']);
/** Ylennetyt ja alennetut sävelet tulevat mukaan vasta näin monen tehtävän jälkeen. */
export const CHROMATIC_FROM = 4;

export function landmarkList(string) {
  return LANDMARKS.map(fret => `${fret} ${noteName(pitchAt(string, fret))}`).join(' · ');
}

/** Lähin kiintopiste; tasatilanteessa alempi. */
export function nearestLandmark(fret) {
  return LANDMARKS.reduce((best, mark) => Math.abs(mark - fret) < Math.abs(best - fret) ? mark : best);
}

/** Päättelyn selitys: "Löydät sen B:n vierestä (7. nauha)." */
export function landmarkReason(string, fret) {
  const mark = nearestLandmark(fret);
  const name = noteName(pitchAt(string, mark));
  const distance = fret - mark;
  if (!distance) return 'Se on kiintopiste.';
  const at = mark === 0 ? 'vapaa kieli' : `${mark}. nauha`;
  if (Math.abs(distance) === 1) return `Löydät sen ${name}:n vierestä (${at}).`;
  return `Se on ${countWords(Math.abs(distance), 'nauha', 'nauhaa')} ${name}:n ${distance > 0 ? 'yläpuolella' : 'alapuolella'} (${at}).`;
}

export function generateRootRound(rand, index = 0, history = []) {
  const types = history.slice(-2).map(round => round.type);
  const type = types.length === 2 && types[0] === types[1] ? (types[0] === 'etsi' ? 'nimea' : 'etsi') : pick(rand, ['etsi', 'nimea']);
  const last = history.at(-1);
  if (type === 'nimea') {
    const options = ALL_POSITIONS.filter(position => ROOT_STRINGS.includes(position.string) && position.fret > 0 &&
      NATURALS.includes(noteName(position.midi)) && !(last?.at && samePosition(last.at, [position.string, position.fret])));
    const position = pick(rand, options);
    return Object.freeze({ type, at: Object.freeze([position.string, position.fret]) });
  }
  const chromatic = index >= CHROMATIC_FROM && rand() < 0.4;
  const notes = (chromatic ? ACCIDENTALS : NATURALS).filter(note => note !== last?.note);
  return Object.freeze({ type, note: pick(rand, notes), string: pick(rand, ROOT_STRINGS) });
}

export function rootAnswer(round) {
  if (round.type === 'nimea') return noteName(pitchAt(...round.at));
  return positionsOf(round.note, [round.string]).map(position => position.fret);
}

export function rootPrompt(round) {
  if (round.type === 'nimea') return `Mikä sävel soi ${stringInfo(round.at[0]).genitive} ${round.at[1]}. nauhalla?`;
  return `Etsi ${round.note} ${stringInfo(round.string).from}.`;
}

export function rootHint(round) {
  const string = round.type === 'nimea' ? round.at[0] : round.string;
  const on = string === 'E' ? 'paksulla E-kielellä' : 'A-kielellä';
  let text = `kiintopisteet ${on}: ${landmarkList(string)}. Luonnollisten sävelten välissä on yksi nauha, paitsi E–F ja B–C.`;
  if (round.type === 'etsi' && ACCIDENTALS.includes(round.note)) {
    const pc = NOTE_NAMES.indexOf(round.note);
    text += ` ${round.note} on ${NOTE_NAMES[(pc + 11) % 12]}:n ja ${NOTE_NAMES[(pc + 1) % 12]}:n välissä.`;
  }
  return `Vihje: ${text}`;
}

export function checkRootName(round, name) {
  const correct = rootAnswer(round);
  const [string, fret] = round.at;
  if (name === correct) return { ok: true, kind: 'oikein', message: `Oikein. ${capital(longPosition(string, fret))} on ${correct}. ${landmarkReason(string, fret)}` };
  const mark = nearestLandmark(fret);
  const at = mark === 0 ? 'vapaa kieli' : `${mark}. nauha`;
  return { ok: false, kind: 'vaara', message: `Ei ${name}. Lähin kiintopiste: ${at} on ${noteName(pitchAt(string, mark))}.` };
}

export function checkRootFind(round, string, fret) {
  const midi = pitchAt(string, fret);
  if (string !== round.string) return { ok: false, kind: 'vaara-kieli', message: `Etsi ${stringInfo(round.string).from}.` };
  if (noteName(midi) === round.note) {
    return { ok: true, kind: 'oikein', message: `Oikein. ${capital(longPosition(string, fret))} on ${round.note}. ${landmarkReason(string, fret)}` };
  }
  const nearest = rootAnswer(round).reduce((best, candidate) => Math.abs(candidate - fret) < Math.abs(best - fret) ? candidate : best);
  return { ok: false, kind: 'eri', message: `${capital(shortPosition(string, fret))} on ${noteName(midi)}. ${round.note} on ${nearest > fret ? 'ylempänä' : 'alempana'}.` };
}

// ---------------------------------------------------------------------------------------------
// 04 · Liiku otelaudalla: kaikki saman sävelen paikat

export const FIND_LEVELS = Object.freeze({
  ea: Object.freeze({ label: 'E- ja A-kieli', strings: ROOT_STRINGS, notes: NATURALS }),
  kaikki: Object.freeze({ label: 'Kaikki kuusi kieltä', strings: Object.freeze(STRINGS.map(string => string.id)), notes: NATURALS }),
  kromaattinen: Object.freeze({ label: 'Kaikki kielet, myös ♯ ja ♭', strings: Object.freeze(STRINGS.map(string => string.id)), notes: NOTE_NAMES }),
});

export function generateFindTarget(rand, level, history = []) {
  const notes = FIND_LEVELS[level].notes.filter(note => !history.slice(-2).includes(note));
  return pick(rand, notes);
}

export function findPositions(target, level) {
  return positionsOf(target, FIND_LEVELS[level].strings);
}

const positionKey = position => `${position.string}${position.fret}`;

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

export function checkFindAll(target, found, string, fret, level = 'kaikki') {
  const midi = pitchAt(string, fret);
  const all = findPositions(target, level);
  if (noteName(midi) !== target) {
    const frets = all.filter(position => position.string === string).map(position => position.fret);
    const nearest = frets.reduce((best, candidate) => Math.abs(candidate - fret) < Math.abs(best - fret) ? candidate : best);
    return { ok: false, kind: 'vaara', message: `${capital(shortPosition(string, fret))} on ${noteName(midi)}. Tällä kielellä ${target} on ${nearest > fret ? 'ylempänä' : 'alempana'}.` };
  }
  const key = `${string}${fret}`;
  if (found.has(key)) return { ok: false, kind: 'jo', message: `${capital(shortPosition(string, fret))} on jo löydetty.` };
  const earlier = all.filter(position => found.has(positionKey(position)) && position.midi === midi);
  const count = found.size + 1;
  const pitch = pitchName(midi);
  const unison = earlier.length ? `sama korkeus kuin ${earlier.map(position => shortPosition(position.string, position.fret)).join(' ja ')}` : 'uusi korkeus';
  if (count === all.length) {
    return { ok: true, kind: 'valmis', message: `${pitch}, ${unison}. Kaikki ${all.length} löytyi! Korkeudet: ${groupSummary(all)}.` };
  }
  return { ok: true, kind: 'uusi', message: `${pitch}, ${unison}. Löydetty ${count}/${all.length}.` };
}

/**
 * Vaiheittainen vihje: 1) millä kielellä paikka on, 2) päättely löydetystä paikasta tai kiintopisteestä,
 * 3) paikka merkitään. Palauttaa { message, mark }.
 */
export function findHint(target, found, level, step) {
  const all = findPositions(target, level);
  const missing = all.filter(position => !found.has(positionKey(position)));
  if (!missing.length) return { message: 'Kaikki on jo löydetty.', mark: null };
  const foundPositions = all.filter(position => found.has(positionKey(position)));
  // Päättelyyn sopivin puuttuva paikka: sama korkeus naapurikielellä, tuttu oktaavimuoto
  // (kaksi tai kolme kieltä, enintään kolme nauhaa) tai muu oktaavi löydetystä paikasta.
  let best = null;
  for (const position of missing) {
    for (const source of foundPositions) {
      const strings = Math.abs(stringInfo(position.string).index - stringInfo(source.string).index);
      const frets = Math.abs(position.fret - source.fret);
      const octave = Math.abs(position.midi - source.midi) === 12;
      const score = position.midi === source.midi && strings === 1 ? 0
        : octave && (strings === 2 || strings === 3) && frets <= 3 ? 1
          : octave ? 2 : 9;
      if (!best || score < best.score) best = { score, position, source };
    }
  }
  const chosen = best && best.score < 9 ? best.position : missing.find(position => ROOT_STRINGS.includes(position.string)) ?? missing[0];
  if (step <= 1) return { message: `Vihje: ${target} löytyy vielä ${stringInfo(chosen.string).from}.`, mark: null };
  if (step === 2) {
    if (best && best.score < 9) {
      const kind = best.score === 0 ? 'sama korkeus' : 'oktaavi';
      return { message: `Vihje: lähde paikasta ${shortPosition(best.source.string, best.source.fret)}. ${capital(kind)} on ${shapeWords([best.source.string, best.source.fret], [chosen.string, chosen.fret])}.`, mark: null };
    }
    if (ROOT_STRINGS.includes(chosen.string)) {
      return { message: `Vihje: kiintopisteet ${chosen.string === 'E' ? 'paksulla E-kielellä' : 'A-kielellä'}: ${landmarkList(chosen.string)}.`, mark: null };
    }
  }
  return { message: `Vihje: tutki merkittyä paikkaa ${shortPosition(chosen.string, chosen.fret)}.`, mark: [chosen.string, chosen.fret] };
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
 * Pystysuora otelauta kuten sointukaaviossa: paksu E vasemmalla, satula ylhäällä, nauhat 0–12 riveinä.
 * Yksi sarkainpysähdys; nuolinäppäimet siirtävät kohdistusta. Kapealla näytöllä lauta levitetään
 * näkymän reunoihin asti, jotta kuusi kieltä saa vähintään 44 px leveät kosketuskohteet.
 */
function createBoard({ strings, label, onSelect }) {
  const id = `otelauta-ohje-${++boardCount}`;
  const help = el('p', { className: 'otelauta-ohje study-sr', id, text: 'Nuolinäppäimet siirtävät otelaudalla, Enter tai välilyönti valitsee.' });
  const table = el('table', { className: 'otelauta-lauta', role: 'grid', 'aria-label': label, 'aria-describedby': id });
  table.style.setProperty('--kielia', String(strings.length));
  if (strings.length < 4) table.classList.add('otelauta-lauta--kapea');
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
      const target = el('button', { type: 'button', tabindex: '-1', 'data-kieli': string, 'data-nauha': fret, 'aria-label': base }, mark);
      cells.set(`${string}${fret}`, { target, mark, base });
      row.append(el('td', { 'data-kieli': string, className: `otelauta-kieli-${stringInfo(string).index}` }, target));
    }
    body.append(row);
  }
  table.append(el('thead', {}, head), body);
  const frame = el('div', { className: 'otelauta-kehys' }, table);
  const wrapper = el('div', { className: 'otelauta-laudan-alue' }, help, frame);

  let current = cells.get(`${strings[0]}0`).target;
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

  function focusCell(target, move) {
    if (current !== target) {
      current.tabIndex = -1;
      target.tabIndex = 0;
      current = target;
    }
    if (move) target.focus();
  }

  // Kapea näyttö: lauta ulottuu kortin ja sivun reunatäytteiden yli 4 px:n päähän näkymän reunasta.
  // Mitataan kääreestä, jonka leveys ei riipu laudan marginaaleista. Ei vaikutusta yli 480 px:ssä.
  function fit() {
    frame.style.marginInline = '';
    const area = wrapper.getBoundingClientRect();
    const viewport = document.documentElement.clientWidth;
    if (!area.width || viewport > 480 || strings.length < 4) return;
    frame.style.marginInline = `${Math.min(0, 4 - area.left)}px ${Math.min(0, 4 - (viewport - area.right))}px`;
  }
  if (typeof ResizeObserver === 'function') new ResizeObserver(fit).observe(wrapper);
  window.addEventListener('resize', fit);

  function clear() {
    for (const cell of cells.values()) {
      for (const name of [...cell.target.classList]) if (name.startsWith('is-')) cell.target.classList.remove(name);
      cell.mark.textContent = '';
      cell.target.setAttribute('aria-label', cell.base);
    }
  }

  function mark(string, fret, { text = '', kind, label: extra }) {
    const cell = cells.get(`${string}${fret}`);
    if (!cell) return;
    for (const name of [...cell.target.classList]) if (name.startsWith('is-')) cell.target.classList.remove(name);
    cell.target.classList.add(`is-${kind}`);
    cell.mark.textContent = text;
    cell.target.setAttribute('aria-label', extra ? `${cell.base}, ${extra}` : cell.base);
  }

  function focusAt(string, fret) {
    const cell = cells.get(`${string}${fret}`);
    if (cell) focusCell(cell.target, false);
  }

  return { element: wrapper, clear, mark, focusAt, fit };
}

/** Yhteinen runko: tehtävärivi, säätimet, lauta ja tahmea palautepaneeli. */
function exerciseShell(root) {
  const shell = {
    app: root.querySelector('[data-otelauta-sovellus]'),
    counter: el('span', { className: 'otelauta-kierros' }),
    prompt: el('p', { className: 'otelauta-tehtava', tabindex: '-1' }),
    feedback: el('p', { className: 'otelauta-palaute', role: 'status', 'aria-live': 'polite' }),
    sound: el('p', { className: 'otelauta-aanitila', role: 'status', 'aria-live': 'polite' }),
    actions: el('div', { className: 'otelauta-toiminnot' }),
    next: button('Uusi tehtävä →', { className: 'otelauta-ensisijainen', hidden: true }),
    soundOn: true,
  };
  const toggle = button('Ääni', { 'aria-pressed': 'true', className: 'otelauta-aani' });
  toggle.addEventListener('click', () => {
    shell.soundOn = toggle.getAttribute('aria-pressed') !== 'true';
    toggle.setAttribute('aria-pressed', String(shell.soundOn));
    if (!shell.soundOn) stopSound();
  });
  shell.toggle = toggle;
  shell.header = el('div', { className: 'otelauta-otsake' }, shell.prompt, el('div', { className: 'otelauta-sivupalkki' }, shell.counter, toggle));
  shell.panel = el('div', { className: 'otelauta-paneeli' }, shell.feedback, shell.sound, shell.actions);
  return shell;
}

function setFeedback(shell, result) {
  shell.feedback.textContent = result.message;
  if (result.ok === undefined) delete shell.feedback.dataset.tulos;
  else shell.feedback.dataset.tulos = result.ok ? 'oikein' : 'yrita';
  // Ennen ensimmäistä palautetta paneeli on laudan alla eikä peitä mitään.
  shell.panel.classList.add('is-tahmea');
}

function clearFeedback(shell) {
  shell.feedback.textContent = '';
  delete shell.feedback.dataset.tulos;
  shell.panel.classList.remove('is-tahmea');
}

async function sound(shell, notes, { force = false } = {}) {
  if (!shell.soundOn && !force) return false;
  const started = await playNotes(notes);
  shell.sound.textContent = started ? '' : 'Ääntä ei voitu toistaa. Tarkista äänet tai jatka ilman ääntä.';
  return started;
}

function wireNext(shell, start) {
  shell.next.addEventListener('click', () => {
    start();
    shell.prompt.focus();
  });
}

const rand = createRandom();

function setupUnison(root, shell) {
  const history = [];
  let round;
  let state;
  const board = createBoard({
    strings: STRINGS.map(string => string.id),
    label: 'Otelauta, nauhat 0–12',
    onSelect: (string, fret) => {
      sound(shell, [{ midi: pitchAt(string, fret) }]);
      if (state.solved) return;
      const result = checkUnison(round, string, fret);
      setFeedback(shell, result);
      if (!result.ok) {
        if (result.kind !== 'lahto') board.mark(string, fret, { kind: 'yritys', text: pitchName(pitchAt(string, fret)), label: `kokeiltu, ${pitchName(pitchAt(string, fret))}` });
        return;
      }
      solve(string, fret);
    },
  });
  const listen = button('▶ Lähtösävel');
  const hint = button('Vihje');
  const show = button('Näytä vastaus', { className: 'otelauta-toissijainen' });

  function solve(string, fret) {
    state.solved = true;
    const midi = pitchAt(string, fret);
    board.mark(string, fret, { kind: 'oikein', text: pitchName(midi), label: `sama korkeus, ${pitchName(midi)}` });
    hint.hidden = true;
    show.hidden = true;
    shell.next.hidden = false;
  }

  function start() {
    round = history.length ? generateUnisonRound(rand, history) : UNISON_EXAMPLE;
    history.push(round);
    state = { solved: false };
    board.clear();
    const [string, fret] = round.from;
    const pitch = pitchName(pitchAt(string, fret));
    board.mark(string, fret, { kind: 'lahto', text: pitch, label: `lähtösävel ${pitch}` });
    board.focusAt(string, fret);
    shell.counter.textContent = history.length === 1 ? 'Esimerkki' : `Tehtävä ${history.length}`;
    shell.prompt.textContent = unisonPrompt(round, history.length === 1);
    clearFeedback(shell);
    hint.hidden = false;
    show.hidden = false;
    shell.next.hidden = true;
  }

  listen.addEventListener('click', () => sound(shell, [{ midi: pitchAt(...round.from) }], { force: true }));
  hint.addEventListener('click', () => setFeedback(shell, { message: unisonHint(round) }));
  show.addEventListener('click', () => {
    const answer = unisonAnswer(round);
    setFeedback(shell, { ok: true, message: `Vastaus: ${shortPosition(answer.string, answer.fret)} (${pitchName(answer.midi)}). ${unisonHint(round).replace('Vihje: ', '')}` });
    solve(answer.string, answer.fret);
  });
  wireNext(shell, start);
  shell.actions.append(hint, show, shell.next);
  shell.app.append(shell.header, el('div', { className: 'otelauta-toiminnot' }, listen), board.element, shell.panel);
  start();
}

function setupOctave(root, shell) {
  const history = [];
  let round;
  let state;
  let textMode = false;
  const board = createBoard({
    strings: STRINGS.map(string => string.id),
    label: 'Otelauta, nauhat 0–12',
    onSelect: (string, fret) => {
      if (state.step === 'paikka') {
        const index = round.places.findIndex(place => samePosition(place.position, [string, fret]));
        if (index < 0) {
          setFeedback(shell, { message: 'Valitse jokin numeroiduista paikoista 1–3.' });
          return;
        }
        choosePlace(index);
        return;
      }
      sound(shell, [{ midi: pitchAt(string, fret) }]);
    },
  });
  const listenRef = button('▶ Lähtösävel');
  const listenMystery = button('▶ Arvoitussävel', { className: 'otelauta-ensisijainen' });
  const listenRow = el('div', { className: 'otelauta-toiminnot' }, listenRef, listenMystery);
  const relationRow = el('div', { className: 'otelauta-toiminnot otelauta-suhteet', role: 'group', 'aria-label': 'Arvoitussävel on' },
    ...Object.keys(OCTAVE_RELATIONS).map(key => {
      const choice = button(RELATION_LABELS[key], { 'data-suhde': key });
      choice.addEventListener('click', () => chooseRelation(key, choice));
      return choice;
    }));
  const placeRow = el('div', { className: 'otelauta-toiminnot', role: 'group', 'aria-label': 'Missä arvoitussävel soi?' });
  const textToggle = button('Ei ääntä? Tekstiversio', { className: 'otelauta-linkki', 'aria-pressed': 'false' });
  const modeNote = el('p', { className: 'otelauta-tila-huomautus', hidden: true, text: 'Tekstiversio: päättelet korkeuden sävelmerkinnästä. Se ei harjoita kuulemista.' });

  function promptText() {
    const ref = pitchName(pitchAt(...round.ref));
    if (textMode) return `Lähtösävel on ${ref}. Arvoitussävel on ${pitchName(mysteryPitch(round))}. Onko se matalampi, yhtä korkea vai korkeampi?`;
    return `Kuuntele lähtösävel (${ref}) ja arvoitussävel. Onko arvoitussävel matalampi, yhtä korkea vai korkeampi?`;
  }

  function start() {
    round = generateOctaveRound(rand, history);
    history.push(round);
    state = { step: 'suhde' };
    board.clear();
    const pitch = pitchName(pitchAt(...round.ref));
    board.mark(...round.ref, { kind: 'lahto', text: pitch, label: `lähtösävel ${pitch}` });
    shell.counter.textContent = `Tehtävä ${history.length}`;
    shell.prompt.textContent = promptText();
    clearFeedback(shell);
    for (const choice of relationRow.querySelectorAll('button')) {
      choice.removeAttribute('aria-disabled');
      choice.setAttribute('aria-pressed', 'false');
    }
    relationRow.hidden = false;
    placeRow.hidden = true;
    listenMystery.hidden = textMode;
    shell.next.hidden = true;
  }

  function chooseRelation(key, choice) {
    if (state.step !== 'suhde') return;
    const result = checkOctaveRelation(round, key);
    choice.setAttribute('aria-pressed', 'true');
    for (const other of relationRow.querySelectorAll('button')) other.setAttribute('aria-disabled', 'true');
    state = { step: 'paikka', relationOk: result.ok };
    setFeedback(shell, result);
    round.places.forEach(({ position }, index) => board.mark(...position, { kind: 'paikka', text: String(index + 1), label: `paikka ${index + 1}` }));
    placeRow.replaceChildren(...round.places.map(({ position }, index) => {
      const place = button(`${index + 1} · ${shortPosition(...position)}`);
      place.addEventListener('click', () => choosePlace(index));
      return place;
    }));
    placeRow.hidden = false;
    shell.prompt.textContent = 'Missä arvoitussävel soi? Valitse paikka 1, 2 tai 3.';
  }

  function choosePlace(index) {
    if (state.step !== 'paikka') return;
    state.step = 'valmis';
    const result = checkOctavePlace(round, index);
    setFeedback(shell, result);
    const ref = pitchAt(...round.ref);
    round.places.forEach(({ position }, other) => {
      const midi = pitchAt(...position);
      board.mark(...position, {
        kind: other === round.answer ? 'oikein' : 'paljastettu',
        text: pitchName(midi),
        label: `paikka ${other + 1}, ${pitchName(midi)}, ${relationWords(midi - ref)}${other === round.answer ? ', arvoitussävel' : ''}`,
      });
    });
    for (const place of placeRow.querySelectorAll('button')) place.setAttribute('aria-disabled', 'true');
    shell.prompt.textContent = 'Napauta paikkoja ja vertaa korkeuksia.';
    sound(shell, [{ midi: ref }, { midi: mysteryPitch(round), at: 0.8 }]);
    shell.next.hidden = false;
  }

  listenRef.addEventListener('click', () => sound(shell, [{ midi: pitchAt(...round.ref) }], { force: true }));
  listenMystery.addEventListener('click', async () => {
    const started = await sound(shell, [{ midi: mysteryPitch(round) }], { force: true });
    if (!started) shell.sound.textContent += ' Voit käyttää tekstiversiota.';
  });
  textToggle.addEventListener('click', () => {
    textMode = !textMode;
    textToggle.setAttribute('aria-pressed', String(textMode));
    modeNote.hidden = !textMode;
    if (state.step === 'suhde') {
      shell.prompt.textContent = promptText();
      listenMystery.hidden = textMode;
    }
  });
  wireNext(shell, start);
  shell.actions.append(placeRow, shell.next);
  shell.app.append(shell.header, modeNote, listenRow, relationRow, board.element, shell.panel, el('p', { className: 'otelauta-vaihto' }, textToggle));
  start();
}

function setupRoot(root, shell) {
  const history = [];
  let round;
  let state;
  const board = createBoard({
    strings: ROOT_STRINGS,
    label: 'Paksu E-kieli ja A-kieli, nauhat 0–12',
    onSelect: (string, fret) => {
      sound(shell, [{ midi: pitchAt(string, fret) }]);
      if (state.solved || round.type !== 'etsi') return;
      const result = checkRootFind(round, string, fret);
      setFeedback(shell, result);
      if (!result.ok) {
        board.mark(string, fret, { kind: 'yritys', text: noteName(pitchAt(string, fret)), label: `kokeiltu, ${noteName(pitchAt(string, fret))}` });
        return;
      }
      solve(string, fret);
    },
  });
  const names = el('div', { className: 'otelauta-nimet', role: 'group', 'aria-label': 'Sävelen nimi' },
    ...NATURALS.map(name => {
      const choice = button(name, { 'data-nimi': name });
      choice.addEventListener('click', () => chooseName(name, choice));
      return choice;
    }));
  const hint = button('Vihje');
  const show = button('Näytä vastaus', { className: 'otelauta-toissijainen' });

  function solve(string, fret) {
    state.solved = true;
    board.mark(string, fret, { kind: 'oikein', text: noteName(pitchAt(string, fret)), label: `${noteName(pitchAt(string, fret))}, oikein` });
    for (const choice of names.querySelectorAll('button')) choice.setAttribute('aria-disabled', 'true');
    hint.hidden = true;
    show.hidden = true;
    shell.next.hidden = false;
  }

  function chooseName(name, choice) {
    if (state.solved || round.type !== 'nimea' || choice.getAttribute('aria-disabled') === 'true') return;
    sound(shell, [{ midi: pitchAt(...round.at) }]);
    const result = checkRootName(round, name);
    setFeedback(shell, result);
    if (!result.ok) {
      choice.setAttribute('aria-disabled', 'true');
      return;
    }
    choice.setAttribute('aria-pressed', 'true');
    solve(...round.at);
  }

  function start() {
    round = generateRootRound(rand, history.length, history);
    history.push(round);
    state = { solved: false };
    board.clear();
    if (round.type === 'nimea') {
      board.mark(...round.at, { kind: 'kysytty', text: '?', label: 'kysytty paikka' });
      board.focusAt(...round.at);
    }
    names.hidden = round.type !== 'nimea';
    for (const choice of names.querySelectorAll('button')) {
      choice.removeAttribute('aria-disabled');
      choice.setAttribute('aria-pressed', 'false');
    }
    shell.counter.textContent = `Tehtävä ${history.length}`;
    shell.prompt.textContent = rootPrompt(round);
    clearFeedback(shell);
    hint.hidden = false;
    show.hidden = false;
    shell.next.hidden = true;
  }

  hint.addEventListener('click', () => setFeedback(shell, { message: rootHint(round) }));
  show.addEventListener('click', () => {
    if (round.type === 'nimea') {
      setFeedback(shell, { ok: true, message: `Vastaus: ${rootAnswer(round)}. ${landmarkReason(...round.at)}` });
      solve(...round.at);
    } else {
      const fret = rootAnswer(round)[0];
      setFeedback(shell, { ok: true, message: `Vastaus: ${shortPosition(round.string, fret)}. ${landmarkReason(round.string, fret)}` });
      solve(round.string, fret);
    }
  });
  wireNext(shell, start);
  shell.actions.append(hint, show, shell.next);
  shell.app.append(shell.header, names, board.element, shell.panel);
  start();
}

function setupFindAll(root, shell) {
  const history = [];
  let level = 'ea';
  let target;
  let found;
  let hintStep;
  let board;
  const boardSlot = el('div');
  const list = el('ul', { className: 'otelauta-loydot', 'aria-label': 'Löydetyt paikat korkeuksittain' });
  const select = el('select', { id: `otelauta-laajuus-${++boardCount}` },
    ...Object.entries(FIND_LEVELS).map(([key, value]) => el('option', { value: key, text: value.label })));
  const levelRow = el('p', { className: 'otelauta-laajuus' }, el('label', { for: select.id, text: 'Laajuus' }), select);
  const hint = button('Vihje');
  const listenAll = button('▶ Kuuntele löydetyt', { hidden: true });

  function makeBoard() {
    board = createBoard({
      strings: FIND_LEVELS[level].strings,
      label: `Otelauta, ${FIND_LEVELS[level].label}, nauhat 0–12`,
      onSelect: (string, fret) => {
        sound(shell, [{ midi: pitchAt(string, fret) }]);
        const all = findPositions(target, level);
        if (found.size === all.length) return;
        const result = checkFindAll(target, found, string, fret, level);
        setFeedback(shell, result);
        if (!result.ok) return;
        found.set(`${string}${fret}`, { string, fret, midi: pitchAt(string, fret) });
        board.mark(string, fret, { kind: 'oikein', text: pitchName(pitchAt(string, fret)), label: `löydetty, ${pitchName(pitchAt(string, fret))}` });
        drawList();
        if (result.kind === 'valmis') complete();
      },
    });
    boardSlot.replaceChildren(board.element);
  }

  function drawList() {
    list.replaceChildren(...[...octaveGroups(found.values())].map(([pitch, items]) =>
      el('li', {}, el('strong', { text: `${pitch}: ` }), items.map(item => shortPosition(item.string, item.fret)).join(', '))));
  }

  function complete() {
    hint.hidden = true;
    listenAll.hidden = false;
    shell.next.hidden = false;
    const done = history.filter(entry => entry.level === level).length;
    if (level === 'ea' && done >= 2) shell.feedback.textContent += ' Valmis laajempaan? Valitse laajuudeksi kaikki kuusi kieltä.';
  }

  function start() {
    target = generateFindTarget(rand, level, history.map(entry => entry.target));
    history.push({ target, level });
    found = new Map();
    hintStep = 0;
    board.clear();
    drawList();
    shell.counter.textContent = `Sävel ${history.length}`;
    shell.prompt.textContent = `Etsi kaikki ${target}-sävelet. Niitä on ${findPositions(target, level).length}.`;
    clearFeedback(shell);
    hint.hidden = false;
    listenAll.hidden = true;
    shell.next.hidden = true;
  }

  select.addEventListener('change', () => {
    level = select.value;
    makeBoard();
    start();
  });
  hint.addEventListener('click', () => {
    hintStep++;
    const result = findHint(target, found, level, hintStep);
    setFeedback(shell, { message: result.message });
    if (result.mark) board.mark(...result.mark, { kind: 'vihje', text: '?', label: 'vihje: tutki tätä paikkaa' });
  });
  listenAll.addEventListener('click', () => {
    const notes = [...found.values()].sort((a, b) => a.midi - b.midi).map((position, order) => ({ midi: position.midi, at: order * 0.55 }));
    sound(shell, notes, { force: true });
  });
  wireNext(shell, start);
  shell.next.textContent = 'Uusi sävel →';
  shell.actions.append(hint, listenAll, shell.next);
  makeBoard();
  shell.app.append(shell.header, levelRow, boardSlot, shell.panel, list);
  start();
}

const SETUP = { unisono: setupUnison, oktaavi: setupOctave, perussavel: setupRoot, liiku: setupFindAll };

export function setupExercise(root) {
  const setup = SETUP[root.dataset.otelautaharjoitus];
  const shell = exerciseShell(root);
  if (!setup || !shell.app) return;
  setup(root, shell);
  shell.app.hidden = false;
  // Ilman JavaScriptiä näkyvä tekstiversio ja ilmoitus piilotetaan, kun vuorovaikutteinen harjoitus toimii.
  for (const fallback of root.querySelectorAll('[data-otelauta-tila], [data-otelauta-teksti]')) fallback.hidden = true;
  const inline = root.closest('details.study-inline');
  inline?.addEventListener('toggle', () => { if (!inline.open) stopSound(); });
}

if (typeof document !== 'undefined') {
  for (const root of document.querySelectorAll('[data-otelautaharjoitus]')) setupExercise(root);
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopSound(); });
  window.addEventListener('pagehide', () => stopSound());
}
