// Käyttäjälle näytettävät tehtäväohjeet ja palautteet. Puhtaita funktioita, jotta ne voi testata.
import { CHORDS, INTERVALS, chordLabel, fretName, music, note, pc, rootName, spell, stringFrom, stringName, stringOn, type Position } from './music';
import { accepts, pool, type AnswerInput, type Question } from './engine';
import type { Settings } from './settings';
import type { Stat } from './storage';

const tonesOf = (s: Settings): [number, string][] =>
  s.mode === 'scale' ? music.scaleNotes(music.SCALES[s.scale]) : CHORDS[s.mode === 'caged' ? 'maj' : s.chord].tones as [number, string][];
const degreeOf = (s: Settings, interval: number) => tonesOf(s).find(([iv]) => iv === interval)?.[1];
const isDegreeMode = (s: Settings) => s.mode === 'scale' || s.mode === 'chord' || s.mode === 'caged';
const way = (q: Question) => q.direction === 'up' ? 'ylöspäin' : 'alaspäin';

/** Miten tähän kysymykseen vastataan. */
export function instruction(s: Settings, q: Question): string {
  if (q.choices === 'note') return 'Valitse sävelnimi.';
  if (q.choices === 'degree') return 'Valitse aste.';
  return s.input === 'mic'
    ? 'Soita sävel kitaralla. Mikrofoni kuulee sävelkorkeuden, ei kieltä tai nauhaa.'
    : 'Napauta oikeaa kohtaa otelaudalla.';
}
export function correctText(s: Settings, q: Question, input: AnswerInput, value: number, position?: Position): string {
  if (q.choices === 'degree') return `Oikein! ${spell(s.root, q.interval!, q.degree!)} on ${q.degree}. aste.`;
  if (isDegreeMode(s)) return `Oikein! ${q.degree}. aste on ${spell(s.root, q.interval!, q.degree!)}.`;
  if (s.mode === 'interval') return `Oikein! ${note(q.reference!, s.flats, true)} → ${q.name} on ${INTERVALS[q.interval!]} ${way(q)}.`;
  if (s.mode === 'notes') {
    if (input === 'board' && position) return `Oikein! ${note(position.midi, s.flats)} on ${stringOn[position.string]}: ${fretName(position.fret)}.`;
    return `Oikein! Soitit sävelen ${note(value, s.flats, true)}.`;
  }
  return `Oikein! Sävel oli ${q.name}.`;
}
export function wrongText(s: Settings, q: Question, input: AnswerInput, value: number, position?: Position): string {
  if (input === 'note') return `Ei ${note(value, s.flats)}. Kuuntele uudelleen ja yritä vielä.`;
  if (input === 'degree') return `Ei ${degreeOf(s, value) ?? '?'}. aste. Yritä uudelleen tai pyydä vihje.`;
  if (!position) return 'Vastaus ei osunut. Yritä uudelleen.';
  const sameClass = pc(position.midi) === pc(q.midi);
  if (s.mode === 'notes') {
    if (position.string !== q.position.string) return `Tuo on ${stringName[position.string]}-kieli. Etsi sävel ${stringFrom[q.position.string]}.`;
    if (sameClass) return `Oikea sävelnimi, mutta eri oktaavi. Etsi ${q.name}.`;
    return `Tuo on ${note(position.midi, s.flats)}. Etsi ${q.name}.`;
  }
  if (isDegreeMode(s)) {
    const interval = pc(position.midi - s.root), degree = degreeOf(s, interval);
    const group = s.mode === 'scale' ? 'asteikkoon' : 'sointuun';
    if (!degree) return `Tuo on ${note(position.midi, s.flats)}, joka ei kuulu ${group}. Etsi ${q.degree}. aste.`;
    if (sameClass && q.check === 'pitch' && position.midi !== q.midi) return `Oikea aste, mutta eri oktaavi. Etsi ${q.name}.`;
    if (sameClass) return `Oikea sävel, mutta ${s.mode === 'caged' ? 'muodon' : s.box ? 'boksin' : 'harjoitusalueen'} ulkopuolelta. Etsi ${q.degree}. aste sen sisältä.`;
    return `Tuo on ${spell(s.root, interval, degree)} eli ${degree}. aste. Etsi ${q.degree}. aste.`;
  }
  if (sameClass) return `Oikea sävelnimi, mutta eri oktaavi. Kuuntele uudelleen.`;
  return `Tuo on ${note(position.midi, s.flats, true)}. Kuuntele uudelleen ja etsi oikea sävel.`;
}
/** Mikrofonin vakaa havainto, joka ei vastaa tehtävää. Ei paljasta oikeaa vastausta. */
export function candidateText(s: Settings, q: Question, midi: number): string {
  const heard = note(midi, s.flats, true);
  if (pc(midi) === pc(q.midi)) return `Kuulin sävelen ${heard}: oikea sävelnimi, mutta eri oktaavi. Soita uudelleen. Tätä ei kirjattu virheeksi.`;
  return `Kuulin sävelen ${heard}. Se ei vastaa tehtävää. Vaimenna kielet ja soita uudelleen. Tätä ei kirjattu virheeksi.`;
}
/** Onko napautettu kohta oikean sävelen väärä esiintymä (esim. boksin ulkopuolella). */
export const nearMiss = (s: Settings, q: Question, p: Position) => pc(p.midi) === pc(q.midi) && !accepts(s, q, p);

/** Tilastoavaimen kohde luettavana tekstinä. Tuntematon tai vanha muoto palauttaa null. */
export function describeItem(item: string, flats = false): string | null {
  const parts = item.split(':');
  const n = (i: number) => Number(parts[i]);
  const ok = (...indexes: number[]) => indexes.every(i => Number.isInteger(n(i)));
  const place = (string: number, fret: number) => stringName[string] ? `${stringName[string]}-kieli, ${fretName(fret)}` : null;
  switch (parts[0]) {
    case 'notes': return ok(1, 2) ? place(n(1), n(2)) : null;
    case 'ear-note': return ok(1) ? `Kuultu sävel ${note(n(1), flats)}${parts[2] === 'ref' ? ' (vertailusävelen kanssa)' : ''}` : null;
    case 'repeat':
      if (parts.length === 2 && ok(1)) return `Kuule ja toista: ${note(n(1), flats, true)}`;
      return ok(1, 2) && place(n(1), n(2)) ? `Kuule ja toista: ${place(n(1), n(2))}` : null;
    case 'interval': return ok(1) && INTERVALS[n(1)] ? `${INTERVALS[n(1)]} ${parts[2] === 'up' ? 'ylöspäin' : 'alaspäin'}` : null;
    case 'chord': {
      const chord = parts[2] as keyof typeof CHORDS;
      if (!ok(1, 3) || !CHORDS[chord]) return null;
      const degree = CHORDS[chord].tones.find(([iv]) => iv === n(3))?.[1];
      return degree ? `${chordLabel(n(1), chord)}: ${degree}. aste${parts[4] === 'degree' ? ' (asteen tunnistus)' : ''}` : null;
    }
    case 'scale': {
      const scale = music.SCALES[parts[2]];
      if (!ok(1) || !scale) return null;
      const title = `${rootName(n(1))}-${scale.name}`;
      if (parts.length === 5 && ok(3)) {
        const degree = music.scaleNotes(scale).find(([iv]) => iv === n(3))?.[1];
        return degree ? `${title}: ${degree}. aste${parts[4] === 'degree' ? ' (asteen tunnistus)' : ''}` : null;
      }
      return ok(3, 4) && place(n(3), n(4)) ? `${title}: ${place(n(3), n(4))}` : null;
    }
    case 'caged': {
      if (!ok(1) || !'CAGED'.includes(parts[2] ?? '?')) return null;
      const title = `${rootName(n(1))}-duuri, ${parts[2]}-muoto`;
      if (parts.length === 4 && ok(3)) {
        const degree = CHORDS.maj.tones.find(([iv]) => iv === n(3))?.[1];
        return degree ? `${title}: ${degree}. aste` : null;
      }
      return ok(3, 4) && place(n(3), n(4)) ? `${title}: ${place(n(3), n(4))}` : null;
    }
    default: return null;
  }
}
export type StatRow = { key: string; input: string; check: string; guided: boolean; item: string; mode: string; stat: Stat };
/** Purkaa tilastoavaimen ”vastaustapa:tarkistus:solo|guided:kohde”. */
export function statRows(stats: Record<string, Stat>): StatRow[] {
  return Object.entries(stats).flatMap(([key, stat]) => {
    const [input, check, hint, ...rest] = key.split(':');
    if (!rest.length || !['solo','guided'].includes(hint)) return [];
    return [{ key, input, check, guided: hint === 'guided', item: rest.join(':'), mode: rest[0], stat }];
  });
}
/** Harjoitusalueen koko käyttöliittymän yhteenvetoa varten. */
export const poolSize = (s: Settings) => pool(s).length;
