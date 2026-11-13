import { describe, expect, it } from 'vitest';
import { melodyPieces, clipSound, comparePositions, type MelodyClip } from '../harjoittelija/melodyData';
import { music, pc, positionKey } from '../harjoittelija/music';
import { bridgePositions } from '../harjoittelija/scaleBridgeData';

const allParts = (id: keyof typeof melodyPieces) => {
  const piece = melodyPieces[id];
  return [piece.fragments[0], piece.fragments[1], piece.whole, ...(piece.bonus ? [piece.bonus] : [])];
};
function verifyClip(clip: MelodyClip, permitted: number[]) {
  expect(clip.beats % 4).toBe(0);
  expect(clip.events[0].beat).toBe(0);
  expect(clip.events.at(-1)!.beat + clip.events.at(-1)!.duration).toBe(clip.beats);
  for (let i = 0; i < clip.events.length; i++) {
    const e = clip.events[i];
    expect(e.duration).toBeGreaterThan(0);
    if (i) expect(e.beat).toBe(clip.events[i - 1].beat + clip.events[i - 1].duration);
    if (e.position) {
      expect(e.position.midi).toBe(music.OPEN_PITCHES[e.position.string] + e.position.fret);
      expect(permitted).toContain(pc(e.position.midi));
    }
  }
  expect(clipSound(clip).length).toBeGreaterThan(0);
  expect(clipSound(clip).every(e => e.duration > 0)).toBe(true);
}
describe('Rytmilliset pentatonisen ja joonisen pilottimelodiat', () => {
  it.each(Object.keys(melodyPieces) as (keyof typeof melodyPieces)[])('%s sävelpaikat, tauot ja rytmit ovat eheitä', id => {
    const piece = melodyPieces[id];
    for (const clip of allParts(id)) verifyClip(clip, piece.permitted);
    expect(piece.whole.beats).toBe(piece.fragments[0].beats + piece.fragments[1].beats +
      (id === 'wayfaring' || id === 'wayfaring-p2' ? 8 : 0));
  });
  it('Wayfaring Strangerin perinnemelodian inkipit on täsmälleen 1 1 5 5 4 / 5 4 3 1 1 / 3 4 4 1 3', () => {
    const w = melodyPieces.wayfaring;
    const scale = [9, 0, 2, 4, 7]; // A C D E G
    const degree = (midi: number) => ({ 9: 1, 0: 3, 2: 4, 4: 5, 7: 7 }[pc(midi)]!);
    const incipit = clipSound(w.whole).map(e => degree(e.midi));
    expect(incipit).toEqual([1, 1, 5, 5, 4, 5, 4, 3, 1, 1, 3, 4, 4, 1, 3]);
    expect(new Set(clipSound(w.whole).map(e => pc(e.midi)))).toEqual(new Set([9, 0, 2, 4]));
    expect(scale).toHaveLength(5);
    const box = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [1])[0].positions[0];
    const allowed = new Set(box.strings.flatMap((frets, string) =>
      frets.map(fret => positionKey({ string, fret }))));
    expect(w.whole.events.filter(e => e.position).every(e => allowed.has(positionKey(e.position!)))).toBe(true);
    expect(w.whole.beats).toBe(24);
  });
  it('Ukko Nooan alku vastaa lähdenuottia ja pysyy C-joonisen yhden oktaavin positiossa', () => {
    const n = melodyPieces.nooa;
    const notes = clipSound(n.whole).map(e => e.midi);
    expect(notes).toEqual([48, 48, 48, 52, 50, 50, 50, 53, 52, 52, 50, 50, 48]);
    expect(n.whole.beats).toBe(16);
    expect(clipSound(n.whole).map(e => e.duration)).toEqual([...Array(12).fill(1), 4]);
    const oneOctave = new Set([
      '4:3', '4:5', '3:2', '3:3', '3:5', '2:2', '2:4', '2:5',
    ]);
    expect(n.whole.events.filter(e => e.position)
      .every(e => oneOctave.has(positionKey(e.position!)))).toBe(true);
    expect(clipSound(n.bonus!).map(e => pc(e.midi))).toContain(11); // B
    expect(clipSound(n.bonus!).at(-1)!.midi).toBe(60); // C4
  });
  it('oma siirtymämotiivi yhdistää fyysisesti pentatonisen positiot 1 ja 2', () => {
    const bridge = melodyPieces['pentatonic-bridge'];
    const union = new Set(bridgePositions.map(positionKey));
    const positions = bridge.whole.events.filter(e => e.position).map(e => e.position!);
    expect(bridge.whole.beats).toBe(16);
    expect(positions.every(p => union.has(positionKey(p)))).toBe(true);
    expect(positions.some(p => p.fret === 5)).toBe(true);
    expect(positions.some(p => p.fret === 10)).toBe(true);
    expect(bridge.source).toBe('');
  });

});

/** A-mollipentatonisen position kaikki fyysiset paikat samasta kirjastosta kuin harjoitusotelauta. */
const boxKeys = (n: number) => {
  const box = music.fingeringBoxes(9, music.SCALES.mp, 'pentatonic', [n])[0].positions[0];
  return { keys: new Set(box.strings.flatMap((frets, string) => frets.map(fret => positionKey({ string, fret })))), start: box.start, end: box.end };
};
const sounding = (clip: MelodyClip) => clip.events.filter(e => e.position).map(e => e.position!);
const NAMES = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const named = (midi: number) => NAMES[pc(midi)] + (Math.floor(midi / 12) - 1);

describe('Pentatonisen positioiden 2 ja 3 melodiat (issue #31)', () => {
  it('positioiden todelliset rajat nykyisestä asteikkokirjastosta', () => {
    expect([boxKeys(2).start, boxKeys(2).end]).toEqual([7, 10]);
    expect([boxKeys(3).start, boxKeys(3).end]).toEqual([9, 13]);
  });

  it('Wayfaring Stranger positiossa 2: samat sävelkorkeudet ja rytmi kuin positiossa 1, ei oktaavisiirtoa', () => {
    const p1 = melodyPieces.wayfaring, p2 = melodyPieces['wayfaring-p2'];
    for (const [a, b] of [[p1.fragments[0], p2.fragments[0]], [p1.fragments[1], p2.fragments[1]], [p1.whole, p2.whole]] as const) {
      expect(clipSound(b)).toEqual(clipSound(a));            // MIDI, iskut ja kestot
      expect(b.events.map(e => [e.beat, e.duration, e.position === null]))
        .toEqual(a.events.map(e => [e.beat, e.duration, e.position === null])); // tauot samoissa kohdissa
    }
    expect(clipSound(p2.whole).map(e => named(e.midi))).toEqual(
      ['A3', 'A3', 'E4', 'E4', 'D4', 'E4', 'D4', 'C4', 'A3', 'A3', 'C4', 'D4', 'D4', 'A3', 'C4']);
    const { keys } = boxKeys(2);
    expect(sounding(p2.whole).every(p => keys.has(positionKey(p))), 'kaikki paikat position 2 boksissa').toBe(true);
    // Kieli + nauha jokaiselle sävelelle.
    const map = Object.fromEntries(sounding(p2.whole).map(p => [named(p.midi), `${p.string}:${p.fret}`]));
    expect(map).toEqual({ A3: '3:7', C4: '3:10', D4: '2:7', E4: '2:9' });
    expect(p2.whole.beats).toBe(24);
    expect(clipSound(p2.whole).at(-1)!.duration).toBe(4);
  });

  it('position 1 ja 2 vertailu: E4 ja C4 vaihtavat kieltä, A3 ja D4 pysyvät', () => {
    const rows = comparePositions(melodyPieces.wayfaring.whole, melodyPieces['wayfaring-p2'].whole);
    expect(rows.map(r => [named(r.midi), r.from && `${r.from.string}:${r.from.fret}`, `${r.to.string}:${r.to.fret}`, r.moved])).toEqual([
      ['E4', '1:5', '2:9', true], ['D4', '2:7', '2:7', false], ['C4', '2:5', '3:10', true], ['A3', '3:7', '3:7', false],
    ]);
  });

  it('Korkea vastaus: oma 4 tahdin melodia position 3 sävelpaikoissa, päättyy A:han', () => {
    const high = melodyPieces['high-answer'];
    const { keys } = boxKeys(3);
    expect(sounding(high.whole).every(p => keys.has(positionKey(p))), 'kaikki paikat position 3 boksissa').toBe(true);
    expect(clipSound(high.whole).map(e => named(e.midi))).toEqual(
      ['A4', 'C5', 'D5', 'C5', 'A4', 'G4', 'E5', 'D5', 'C5', 'A4', 'G4', 'E4', 'A4']);
    expect(clipSound(high.whole).map(e => e.duration)).toEqual([1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2]);
    expect(sounding(high.whole).map(p => `${p.string}:${p.fret}`)).toEqual(
      ['1:10', '1:13', '0:10', '1:13', '1:10', '2:12', '0:12', '0:10', '1:13', '1:10', '2:12', '2:9', '1:10']);
    expect(high.fragments.map(f => f.beats)).toEqual([8, 8]);
    expect(high.whole.beats).toBe(16);
    // Tahtirajat: jokainen tahti alkaa sävelellä, eikä mikään sävel ylitä tahtiviivaa.
    for (const e of high.whole.events) expect(Math.floor(e.beat / 4)).toBe(Math.floor((e.beat + e.duration - 1e-9) / 4));
    for (const bar of [0, 4, 8, 12]) expect(high.whole.events.some(e => e.beat === bar && e.position)).toBe(true);
    // Kysymys jää G:hen (♭7), vastaus ratkeaa pohjasävel A:han; ylin sävel E5 aloittaa vastauksen.
    expect(pc(clipSound(high.fragments[0]).at(-1)!.midi)).toBe(7);
    expect(pc(clipSound(high.whole).at(-1)!.midi)).toBe(9);
    expect(Math.max(...clipSound(high.whole).map(e => e.midi))).toBe(clipSound(high.fragments[1])[0].midi);
    expect(high.source).toBe('');
    // Soitettavuus: fraasin sisällä peräkkäiset sävelet viereisillä kielillä ja enintään neljän
    // nauhan päässä. Fraasien rajalla (puolinuotti G4 → E5) hypätään B-kielen yli samalla 12. nauhalla.
    for (const fragment of high.fragments) {
      const s = sounding(fragment);
      for (let i = 1; i < s.length; i++) {
        expect(Math.abs(s[i].string - s[i - 1].string)).toBeLessThanOrEqual(1);
        expect(Math.abs(s[i].fret - s[i - 1].fret)).toBeLessThanOrEqual(4);
      }
    }
    const [end, start] = [sounding(high.fragments[0]).at(-1)!, sounding(high.fragments[1])[0]];
    expect([end.fret, start.fret, Math.abs(end.string - start.string)]).toEqual([12, 12, 2]);
  });
});
