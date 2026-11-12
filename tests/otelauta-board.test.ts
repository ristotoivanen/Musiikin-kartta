import { describe, expect, it } from 'vitest';
import '../assets/otelauta.js';

type Grip = (number | null)[];
type Chord = { name: string; base: [number, string][]; add: [number, string][] };
type BoardOptions = { grip?: Grip | null; muteFret?: number | null; label?: string };
const { renderBoard } = globalThis.MusicMapFretboard as unknown as {
  renderBoard(root: number, chord: Chord, fretCount: number, options?: BoardOptions): string;
};

const G = 7;
const gmaj7: Chord = { name: 'Gmaj7', base: [[0, '1'], [4, '3'], [7, '5'], [11, '7']], add: [] };
// Otteet kielille 1–6 eli ohuesta e-kielestä paksuun E-kieleen, kuten renderBoard ne lukee.
const gmaj7EShape: Grip = [null, 3, 4, 4, null, 3];

const gripNotes = (svg: string) => [...svg.matchAll(/data-string="(\d)" data-fret="(\d+)" data-degree="([^"]+)"/g)]
  .map(([, string, fret, degree]) => ({ string: Number(string), fret: Number(fret), degree }))
  .sort((a, b) => b.string - a.string);
const gripMutes = (svg: string) => [...svg.matchAll(/class="muted-mark grip-mute" data-string="(\d)" data-fret="(\d+)"/g)]
  .map(([, string, fret]) => ({ string: Number(string), fret: Number(fret) }))
  .sort((a, b) => b.string - a.string);
const count = (svg: string, text: string) => svg.split(text).length - 1;

describe('renderBoard ja siirrettävän otteen mykistetyt kielet', () => {
  it('näyttää vain otteen sävelet ja piirtää × otteen nauhalle, kun muteFret annetaan', () => {
    const svg = renderBoard(G, gmaj7, 17, { grip: gmaj7EShape, muteFret: 3, label: 'Gmaj7' });

    expect(gripNotes(svg)).toEqual([
      { string: 6, fret: 3, degree: '1' },
      { string: 4, fret: 4, degree: '7' },
      { string: 3, fret: 4, degree: '3' },
      { string: 2, fret: 3, degree: '5' },
    ]);
    expect(count(svg, 'r="11"')).toBe(4);
    expect(gripMutes(svg)).toEqual([{ string: 5, fret: 3 }, { string: 1, fret: 3 }]);
    // Kieliä ei himmennetä koko pituudeltaan, eikä satulan kohdalle tule toista ×-merkkiä.
    expect(svg).not.toContain('opacity=".35"');
    expect(count(svg, '<text class="muted-mark"')).toBe(0);
    expect(count(svg, 'stroke-dasharray="3 3"')).toBe(6);
    expect(svg).toContain('Soittamatta jäävät kielet: A, ohut e.');
  });

  it('vapaassa asemassa × korvaa vapaan kielen katkoviivan', () => {
    const am7b5: Chord = { name: 'Am7b5', base: [[0, '1'], [3, '♭3'], [6, '♭5'], [10, '♭7']], add: [] };
    const svg = renderBoard(9, am7b5, 17, { grip: [null, 1, 0, 1, 0, null], muteFret: 0 });

    expect(gripMutes(svg)).toEqual([{ string: 6, fret: 0 }, { string: 1, fret: 0 }]);
    expect(count(svg, 'stroke-dasharray="3 3"')).toBe(4);
    expect(gripNotes(svg).map(({ degree }) => degree)).toEqual(['1', '♭5', '♭7', '♭3']);
  });

  it('säilyttää kolmisointuotteiden satulan ×-merkit ja himmennetyt kielet ilman muteFret-asetusta', () => {
    const svg = renderBoard(G, gmaj7, 17, { grip: gmaj7EShape });

    expect(gripMutes(svg)).toEqual([]);
    expect(count(svg, '<text class="muted-mark" x="49"')).toBe(2);
    expect(count(svg, 'opacity=".35"')).toBe(2);
    expect(count(svg, 'stroke-dasharray="3 3"')).toBe(4);
  });

  it('ei lisää ote- tai mykistysmerkintöjä asteikko- ja sointusävelnäkymiin', () => {
    const svg = renderBoard(G, gmaj7, 17, { muteFret: 3 });

    expect(svg).not.toContain('data-string');
    expect(svg).not.toContain('muted-mark');
    expect(svg).not.toContain('grip-notes');
    expect(count(svg, 'r="11"')).toBeGreaterThan(4);
  });
});
