import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { expect, it } from 'vitest';
import { CHORDS, INTERVALS, noteToMidi, spell } from '../harjoittelija/music';

const root = new URL('../', import.meta.url);
const read = (path: string) => readFileSync(new URL(path, root), 'utf8');

it('generoidun Oppimiskartan CSS ja edistymisskripti viittaavat oikeaan sisältöversioon', () => {
  const pages = readdirSync(new URL('oppi/', root), { withFileTypes: true }).filter(dir => dir.isDirectory())
    .flatMap(dir => readdirSync(new URL(`oppi/${dir.name}/`, root))
      .filter(name => name.endsWith('.html')).map(name => `oppi/${dir.name}/${name}`));
  expect(pages.length).toBeGreaterThan(8);
  for (const page of pages) {
    const html = read(page);
    const refs = [...html.matchAll(/(?:href|src)="([^"]+(?:\.css|\/edistyminen\.js)(?:\?[^"]*)?)"/g)].map(match => match[1]);
    expect(refs.some(ref => ref.includes('/edistyminen.js')), page).toBe(true);
    expect(refs.filter(ref => ref.includes('.css')).length, page).toBeGreaterThanOrEqual(3);
    for (const ref of refs) {
      const asset = new URL(ref, new URL(page, root));
      const version = asset.searchParams.get('v');
      asset.search = '';
      const digest = createHash('sha256').update(readFileSync(asset)).digest('hex').slice(0, 10);
      expect(version, `${page} → ${ref}`).toBe(digest);
    }
  }
});

it('sama puolisävelmäärä säilyttää eri kirjoitusasut myös harjoittelijan laskennassa', () => {
  const pairs = [
    { distance: 1, degrees: ['1', '2'], names: ['A♯', 'B♭'] },
    { distance: 6, degrees: ['4', '5'], names: ['D♯', 'E♭'] },
  ];
  for (const { distance, degrees, names } of pairs) {
    const written = degrees.map(degree => spell(9, distance, degree));
    expect(written).toEqual(names);
    const octave = distance === 1 ? 3 : 4;
    const played = written.map(note => noteToMidi(note.replace('♯', '#').replace('♭', 'b') + octave));
    expect(played.map(pitch => pitch - noteToMidi('A3'))).toEqual([distance, distance]);
  }
  expect(INTERVALS[6]).toBe('tritonus');
  const chordNotes = (type: 'maj' | 'min') => CHORDS[type].tones.map(([distance, degree]) => spell(0, distance, degree));
  expect(chordNotes('maj')).toEqual(['C', 'E', 'G']);
  expect(chordNotes('min')).toEqual(['C', 'E♭', 'G']);
});
