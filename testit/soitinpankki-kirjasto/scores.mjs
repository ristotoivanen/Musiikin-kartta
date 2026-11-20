const beat = 60 / 72;
const note = (string, midi, at, releaseAt, fade = .15) =>
  ({ string, midi, layer: 'Vel02', at, releaseAt, fade });
const g = [[6, 43], [5, 47], [4, 50], [3, 55], [2, 59], [1, 67]];

export const scores = {
  e2: [0, 1, 2, 3].map(i => note(6, 40, i * beat, (i + 1) * beat)),
  triad: g.slice(0, 3).map(([string, midi]) => note(string, midi, 0, 2.95)),
  strum: g.map(([string, midi], i) => note(string, midi, i * .045, 3.45 + i * .045)),
  melody: [[6, 43], [5, 45], [5, 47], [4, 50], [3, 55], [2, 59]].map(([string, midi], i) => {
    const times = [0, .48, .96, 1.44, 2.65, 3.45];
    const lengths = [.24, .24, .24, .65, .42, .85];
    return note(string, midi, times[i], times[i] + lengths[i]);
  }),
  // M2: neljän iskun sisäänlasku + 4 x (neljä iskua ja neljä taukoa).
  // Tausta ladataan käyttäjän omasta paikallisesta tiedostosta.
  m2: Array.from({ length: 4 }, (_, cycle) =>
    Array.from({ length: 4 }, (_, stroke) => {
      const at = (4 + cycle * 8 + stroke) * beat;
      return note(6, 40, at, at + beat);
    })).flat(),
};
