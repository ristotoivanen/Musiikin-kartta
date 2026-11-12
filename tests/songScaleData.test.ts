import { describe, expect, it } from 'vitest';
import { music } from '../harjoittelija/music';
import { CHORD_TONES, SONG_SCALES, boxCount, scalePitchClasses, songBoxes, songChords, songScaleNotes } from '../harjoittelija/songScaleData';

const scale = (id: string) => SONG_SCALES.find(item => item.id === id)!.scale;

describe('Yksi sointu, kaksi askelta: kappaleeseen sopivat asteikot', () => {
  it('tarjoaa vain G-mollipentatonisen, G-bluesin ja G-luonnollisen mollin oikeilla sävelillä', () => {
    expect(SONG_SCALES.map(item => item.title)).toEqual([
      'G-mollipentatoninen', 'G-bluesasteikko', 'G-luonnollinen molli (aiolinen)',
    ]);
    expect(songScaleNotes(scale('mp'))).toEqual(['G', 'B♭', 'C', 'D', 'F']);
    expect(songScaleNotes(scale('blues'))).toEqual(['G', 'B♭', 'C', 'D♭', 'D', 'F']);
    expect(songScaleNotes(scale('aeolian'))).toEqual(['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F']);
    expect(SONG_SCALES.map(item => item.system)).toEqual(['pentatonic', 'pentatonic', '3nps']);
  });

  it('perustuu molempien versioiden todellisiin sointuihin', () => {
    expect(songChords().sort()).toEqual(['B♭', 'C', 'Dm', 'E♭', 'F', 'Gm']);
    const aeolian = scalePitchClasses(scale('aeolian'));
    // Kaikki sointusävelet kuuluvat G-mollin asteikkoon paitsi kitarasoolon C-soinnun E.
    const outside = songChords().flatMap(chord => CHORD_TONES[chord].filter(pc => !aeolian.includes(pc)).map(pc => chord + ':' + pc));
    expect(outside).toEqual(['C:4']);
    // Pentatonisessa ei ole E:tä eikä E♭:ta, joten se ei hankaa E♭- eikä C-sointua vastaan.
    const pentatonic = scalePitchClasses(scale('mp'));
    expect(pentatonic.every(pc => aeolian.includes(pc))).toBe(true);
    expect(pentatonic).not.toContain(3);
    expect(pentatonic).not.toContain(4);
    // G-doorisen E olisi ristiriidassa toistuvan E♭-soinnun kanssa, joten sitä ei tarjota.
    expect(scalePitchClasses(music.SCALES.dorian)).toContain(4);
    expect(SONG_SCALES.some(item => item.scale === music.SCALES.dorian)).toBe(false);
  });

  it('bluessävel D♭ on merkitty lisäsäveleksi eikä asteikon perussäveleksi', () => {
    expect(scale('blues').add).toEqual([[6, '♭5']]);
    expect(scale('blues').base).toBe(music.SCALES.mp.base);
  });
});

describe('Skaalat ja moodit: sormitusboksit', () => {
  const choice = (id: string) => SONG_SCALES.find(item => item.id === id)!;
  const pcAt = (string: number, fret: number) => (music.OPEN_PITCHES[string] + fret) % 12;
  const FRETS = 17;
  /** Boksin rajauksessa näkyvät asteikon sävelet: sama ehto kuin renderBoardin onlyBoxNotes. */
  const notesIn = (id: string, strings: number[][]) => strings.map((frets, string) => {
    const pcs = scalePitchClasses(choice(id).scale);
    const out: number[] = [];
    for (let fret = frets[0]; fret <= frets[frets.length - 1]; fret++) if (pcs.includes(pcAt(string, fret))) out.push(fret);
    return out;
  });

  it('G-mollipentatonisen viisi boksia sisältävät kaksi asteikon säveltä joka kielellä ja ketjuuntuvat', () => {
    expect(boxCount('pentatonic')).toBe(5);
    const boxes = songBoxes(choice('mp'), [1, 2, 3, 4, 5], FRETS);
    expect(boxes.map(box => box.number)).toEqual([1, 2, 3, 4, 5]);
    // Boksi 1 alkaa G:stä paksun E-kielen 3. nauhalta.
    expect(boxes[0].positions[0].strings).toEqual([[3, 6], [3, 6], [3, 5], [3, 5], [3, 5], [3, 6]]);
    const pcs = scalePitchClasses(choice('mp').scale);
    for (const box of boxes) for (const position of box.positions.filter(item => !item.partial)) {
      position.strings.forEach((frets, string) => {
        expect(frets).toHaveLength(2);
        expect(frets.every(fret => pcs.includes(pcAt(string, fret)))).toBe(true);
      });
      expect(notesIn('mp', position.strings).every(frets => frets.length === 2)).toBe(true);
    }
    // Seuraava boksi alkaa edellisen ylemmistä sävelistä.
    const first = boxes.map(box => box.positions.find(item => !item.partial)!);
    for (let i = 0; i < 4; i++) {
      // Boksi voi kiertyä oktaavin alemmas, joten vertaa nauhoja oktaavin sisällä.
      expect(first[i + 1].strings.map(frets => frets[0] % 12)).toEqual(first[i].strings.map(frets => frets[1] % 12));
    }
  });

  it('G-bluesasteikon bokseissa lisäsävel D♭ säilyy rajauksessa eikä mukaan tule asteikon ulkopuolisia säveliä', () => {
    const plain = songBoxes(choice('mp'), [1, 2, 3, 4, 5], FRETS);
    const blues = songBoxes(choice('blues'), [1, 2, 3, 4, 5], FRETS);
    const dFlat = 1;
    blues.forEach((box, index) => {
      const position = box.positions.find(item => !item.partial)!;
      const base = plain[index].positions.find(item => !item.partial)!;
      const shown = notesIn('blues', position.strings);
      expect(shown.flatMap((frets, string) => frets.map(fret => pcAt(string, fret))).filter(pc => pc === dFlat).length,
        'boksi ' + box.number).toBeGreaterThanOrEqual(1);
      position.strings.forEach((frets, string) => {
        // Levennys on enintään yksi nauha ylöspäin ja vain D♭:n kohdalle.
        expect(frets[0]).toBe(base.strings[string][0]);
        expect(frets[1]).toBeLessThanOrEqual(base.strings[string][1] + 1);
        if (frets[1] !== base.strings[string][1]) expect(pcAt(string, frets[1])).toBe(dFlat);
        expect(shown[string].length).toBeGreaterThanOrEqual(2);
        expect(shown[string].length).toBeLessThanOrEqual(3);
      });
    });
    // Boksi 1: D♭ A-kielen 4. nauhalla ja G-kielen 6. nauhalla.
    expect(notesIn('blues', blues[0].positions[0].strings)).toEqual([[3, 6], [3, 6], [3, 5, 6], [3, 5], [3, 4, 5], [3, 6]]);
  });

  it('viisi G-bluesboksia vastaavat vakiintuneita bluesbokseja, ja jokainen D♭ kuuluu johonkin boksiin', () => {
    const blues = songBoxes(choice('blues'), [1, 2, 3, 4, 5], FRETS);
    const shown = blues.map(box => notesIn('blues', box.positions[0].strings));
    // Kielet ohuesta e:stä paksuun E:hen. D♭ on aina kahden kokosävelaskeleen C–D välissä tai nauhan niiden yllä.
    expect(shown).toEqual([
      [[3, 6], [3, 6], [3, 5, 6], [3, 5], [3, 4, 5], [3, 6]],
      [[6, 8, 9], [6, 8], [5, 6, 7], [5, 8], [5, 8], [6, 8, 9]],
      [[8, 9, 10], [8, 11], [7, 10], [8, 10, 11], [8, 10], [8, 9, 10]],
      [[10, 13], [11, 13, 14], [10, 12], [10, 11, 12], [10, 13], [10, 13]],
      [[1, 3], [1, 2, 3], [0, 3], [0, 3], [1, 3, 4], [1, 3]],
    ]);
    const bluesPcs = scalePitchClasses(choice('blues').scale);
    const covered = new Set<string>();
    blues.forEach(box => box.positions.forEach(position => {
      // Boksi on soitettavissa: enintään viiden nauhan alue, D♭ enintään kerran kielellä.
      expect(position.end - position.start).toBeLessThanOrEqual(4);
      notesIn('blues', position.strings).forEach((frets, string) => {
        expect(frets.every(fret => bluesPcs.includes(pcAt(string, fret)))).toBe(true);
        expect(frets.filter(fret => pcAt(string, fret) === 1).length).toBeLessThanOrEqual(1);
        frets.forEach(fret => covered.add(string + ':' + fret));
      });
    }));
    // Yksikään otelaudan D♭ ei jää kaikkien boksien ulkopuolelle (nauhat 1–16, joille boksit ulottuvat).
    for (let string = 0; string < 6; string++) for (let fret = 1; fret <= 16; fret++) {
      if (pcAt(string, fret) === 1) expect(covered.has(string + ':' + fret), `kieli ${string}, nauha ${fret}`).toBe(true);
    }
  });

  it('G-luonnollisen mollin seitsemän 3NPS-sormitusta sisältävät kolme asteikon säveltä joka kielellä', () => {
    expect(boxCount('3nps')).toBe(7);
    const boxes = songBoxes(choice('aeolian'), [1, 2, 3, 4, 5, 6, 7], FRETS);
    expect(boxes).toHaveLength(7);
    const pcs = scalePitchClasses(choice('aeolian').scale);
    boxes.forEach((box, index) => {
      const position = box.positions.find(item => !item.partial)!;
      position.strings.forEach((frets, string) => {
        expect(frets).toHaveLength(3);
        expect(frets.every(fret => pcs.includes(pcAt(string, fret)))).toBe(true);
      });
      // Sormitus n alkaa asteikon n:nnestä sävelestä paksulla E-kielellä.
      expect(pcAt(5, position.strings[5][0])).toBe(pcs[index]);
      expect(notesIn('aeolian', position.strings).every(frets => frets.length === 3)).toBe(true);
    });
  });

  it('ilman valintaa ei ole bokseja, ja toisen järjestelmän numerot eivät kelpaa', () => {
    expect(songBoxes(choice('mp'), [], FRETS)).toEqual([]);
    expect(songBoxes(choice('mp'), [6, 7], FRETS)).toEqual([]);
    expect(songBoxes(choice('blues'), [0, 5, 6], FRETS).map(box => box.number)).toEqual([5]);
    expect(songBoxes(choice('aeolian'), [7, 8], FRETS).map(box => box.number)).toEqual([7]);
  });
});
