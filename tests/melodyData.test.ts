import { describe, expect, it } from 'vitest';
import { melodyPieces, clipSound, type MelodyClip } from '../harjoittelija/melodyData';
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
      (id === 'wayfaring' ? 8 : 0));
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
