// Kirjan ääniesimerkit nuotteina ja otteina. Generaattori (index.html) renderöi ne
// harjoitustaustojen soittimilla, joten kaikki esimerkit kuulostavat samalta kitaralta.
const aanet = (() => {
  const LETTERS = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const OPEN = [40, 45, 50, 55, 59, 64]; // E A D G B e
  const TAIL = 1.6;

  // Avo-otteet paksusta E-kielestä ohueen e-kieleen kuten kirjassa. x jätetään soittamatta.
  const SHAPES = {
    G: '3 2 0 0 0 3', Em: '0 2 2 0 0 0', C: 'x 3 2 0 1 0', D: 'x x 0 2 3 2',
    Am: 'x 0 2 2 1 0', A: 'x 0 2 2 2 0', Dm: 'x x 0 2 3 1', E7: '0 2 0 1 0 0',
    F: 'x x 3 2 1 1', G7: '3 2 0 0 0 1'
  };

  function midi(name) {
    const match = /^([A-G])([♯#♭b]?)(-?\d)$/.exec(name);
    if (!match) throw new Error('Tuntematon sävel ' + name);
    const accidental = { '♯': 1, '#': 1, '♭': -1, b: -1 }[match[2]] ?? 0;
    return 12 * (Number(match[3]) + 1) + LETTERS[match[1]] + accidental;
  }

  function frets(shape) {
    return (SHAPES[shape] ?? shape).split(' ').map(part => part === 'x' ? null : Number(part));
  }

  class Score {
    constructor({ bpm, room = 1.5, reverb = .14 }) {
      this.beat = 60 / bpm;
      this.room = room;
      this.reverb = reverb;
      this.events = [];
      this.end = 0;
    }

    push(event) {
      this.events.push(event);
      this.end = Math.max(this.end, event.time + (event.length ?? .3));
      return this;
    }

    note(beat, name, beats, { voice = 'lead', velocity = .9, pan } = {}) {
      return this.push({ time: beat * this.beat, midi: midi(name), length: beats * this.beat, voice, velocity, pan });
    }

    bass(beat, name, beats, options = {}) {
      return this.note(beat, name, beats, { voice: 'electric', ...options });
    }

    // Soittaa otteen kielet alaspäin paksusta ohueen tai ylöspäin ohuesta paksuun.
    strum(beat, shape, beats, { voice = 'clean', velocity = .75, up = false, strings, capo = 0, pan = -.2, spread = .012 } = {}) {
      let notes = frets(shape)
        .map((fret, string) => ({ fret, string }))
        .filter(({ fret, string }) => fret !== null && (!strings || strings.includes(string)));
      if (up) notes = notes.reverse();
      notes.forEach(({ fret, string }, i) => this.push({
        time: beat * this.beat + i * spread, midi: OPEN[string] + fret + capo,
        length: beats * this.beat - i * spread, voice, velocity, pan
      }));
      return this;
    }

    // Näppää otteesta yhden kielen (0 = paksu E-kieli … 5 = ohut e-kieli).
    pick(beat, shape, string, beats, { voice = 'clean', velocity = .8, capo = 0, pan = -.2 } = {}) {
      const fret = frets(shape)[string];
      return this.push({ time: beat * this.beat, midi: OPEN[string] + fret + capo, length: beats * this.beat, voice, velocity, pan });
    }

    drum(beat, drum, velocity = 1, accent = false) {
      return this.push({ time: beat * this.beat, drum, velocity, accent });
    }

    countIn(beats = 4) {
      for (let i = 0; i < beats; i++) this.drum(i, 'click', 1, i === 0);
      return beats;
    }

    melody(start, notes, options) {
      notes.forEach(([beat, name, beats]) => this.note(start + beat, name, beats, options));
      return this;
    }

    render() {
      return backingTrack.renderScore({ events: this.events, duration: this.end + TAIL, room: this.room, reverb: this.reverb });
    }
  }

  // Am- ja C-taustan kuvio: sointu ykkösellä, basso kolmosella, kaksi kieltä nelosella ja yksi sen perään.
  function minorPattern(score, bar, shape) {
    const start = bar * 4;
    const [low, middle, top, upper] = shape === 'C' ? [1, 2, 3, 4] : [1, 2, 4, 3];
    score.strum(start, shape, 2, { strings: [low, middle, top], velocity: .7 });
    score.pick(start + 2, shape, low, 1);
    score.strum(start + 3, shape, .5, { strings: [middle, top], velocity: .6 });
    score.pick(start + 3.5, shape, upper, .5, { velocity: .6 });
  }

  function lightDrums(score, bar) {
    const start = bar * 4;
    score.drum(start, 'kick', .5).drum(start + 2, 'kick', .42);
    for (let i = 0; i < 8; i++) score.drum(start + i / 2, 'hat', i % 2 ? .22 : .35);
  }

  // Valot ikkunassa -kappaleen kertosäkeen melodia G-duurissa (tahdin iskut 0–3).
  const CHORUS = [
    [[0, 'G4', 1], [1, 'A4', 1], [2, 'B4', 1], [3, 'D5', 1]],
    [[0, 'F♯4', 2], [2, 'A4', 1], [3, 'D5', 1]],
    [[0, 'B4', 1], [1, 'G4', 1], [2, 'E4', 1], [3, 'G4', 1]],
    [[1, 'E4', 2], [3, 'E4', 1]]
  ];

  function transpose(name, steps) {
    const value = midi(name) + steps;
    const names = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
    return names[value % 12] + (Math.floor(value / 12) - 1);
  }

  // Paluumatkan melodia: A-osassa sävelet tulevat kakkosella ja kolmosen jälkeen.
  const RETURN_A = [
    [[1, 'E4', 1.5], [2.5, 'G4', 2.5]],
    [[1, 'E4', 1.5], [2.5, 'C4', 2.5]],
    [[1, 'D4', 1.5], [2.5, 'G4', 2.5]],
    [[1, 'F♯4', 1.5], [2.5, 'E4', 2.5]]
  ];
  const RETURN_B = [
    [[0, 'B4', 1.5], [1.5, 'D5', 1], [2.5, 'G4', 1.5]],
    [[0, 'F♯4', 2.5], [2.5, 'D4', .5], [3, 'F♯4', 1]],
    [[0, 'G4', 1.5], [1.5, 'E4', 1], [2.5, 'C4', 1.5]],
    [[0, 'B4', 1], [1, 'A4', 1], [2, 'G4', 4]]
  ];
  const RETURN_A_CHORDS = ['Em', 'C', 'G', 'D'];
  const RETURN_B_CHORDS = ['G', 'D', 'C', 'G'];
  const BASS_STRING = { Em: 0, G: 0, C: 1, D: 2 };
  const BASS_NOTE = { Em: 'E2', C: 'C3', G: 'G2', D: 'D3' };

  // A-osan näppäily: bassokieli ykkösellä, sitten G-, B- ja e-kieli yksi kerrallaan.
  function returnPicking(score, start, { withBass = true } = {}) {
    RETURN_A_CHORDS.forEach((chord, bar) => {
      const at = start + bar * 4;
      if (withBass) score.pick(at, chord, BASS_STRING[chord], 4, { velocity: .85 });
      [3, 4, 5].forEach((string, i) => score.pick(at + 1 + i, chord, string, 3 - i, { velocity: .62 }));
      score.melody(at, RETURN_A[bar]);
    });
  }

  const examples = [
    {
      file: 'osa-1/fraasin-loppu',
      build() {
        const s = new Score({ bpm: 120 });
        s.strum(0, 'C', 6.5, { velocity: .5 });
        s.melody(0, [[0, 'C4', 1], [1, 'D4', 1], [2, 'E4', 1], [3, 'G4', 2.5]]);
        s.strum(7, 'C', 8, { velocity: .5 });
        s.melody(7, [[0, 'C4', 1], [1, 'D4', 1], [2, 'E4', 1], [3, 'G4', 1], [4, 'C5', 3]]);
        return s;
      }
    },
    {
      file: 'osa-1/duuri-ja-molli',
      build() {
        const s = new Score({ bpm: 140 });
        // A-kielen 3. nauha (C), D-kielen 2. tai 1. nauha (E tai E♭) ja vapaa G-kieli.
        [['x 3 2 0 x x', 0], ['x 3 1 0 x x', 8]].forEach(([shape, start]) => {
          [1, 2, 3].forEach((string, i) => s.pick(start + i, shape, string, 3 - i, { pan: 0, velocity: .85 }));
          s.strum(start + 3, shape, 3.5, { pan: 0, velocity: .8 });
        });
        return s;
      }
    },
    {
      file: 'osa-1/asteikot',
      build() {
        const s = new Score({ bpm: 144 });
        const major = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
        const minor = ['C4', 'D4', 'E♭4', 'F4', 'G4', 'A♭4', 'B♭4', 'C5'];
        [[major, 0], [minor, 11]].forEach(([notes, start]) => notes.forEach((name, i) => {
          s.note(start + i, name, i === 7 ? 2.5 : 1, { voice: 'clean', pan: 0, velocity: .85 });
        }));
        return s;
      }
    },
    {
      file: 'osa-1/sointujen-tehtavat',
      build() {
        const s = new Score({ bpm: 100 });
        [['C', 0], ['F', 2], ['G7', 4], ['C', 6], ['Am', 11], ['Dm', 13], ['E7', 15], ['Am', 17]].forEach(([chord, beat]) => {
          const last = beat === 6 || beat === 17;
          s.strum(beat, chord, last ? 4 : 2, { pan: 0, velocity: .78 });
        });
        return s;
      }
    },
    {
      file: 'osa-2/valot-ikkunassa',
      build() {
        const s = new Score({ bpm: 88 });
        let bar = s.countIn(4) / 4;
        const verse = () => ['G', 'Em', 'C', 'D'].forEach(chord => {
          const at = bar++ * 4;
          s.pick(at, chord, { G: 0, Em: 0, C: 1, D: 2 }[chord], 4, { velocity: .8 });
          [3, 4, 5].forEach((string, i) => s.pick(at + 1 + i, chord, string, 3 - i, { velocity: .62 }));
        });
        const chorus = () => ['G', 'D', 'Em', 'C'].forEach((chord, i) => {
          const at = bar++ * 4;
          s.strum(at, chord, 2, { velocity: .78 }).strum(at + 2, chord, 2, { velocity: .66 });
          s.melody(at, CHORUS[i]);
        });
        verse(); chorus(); verse(); chorus();
        const end = bar * 4;
        s.strum(end, 'D', 2, { velocity: .78 }).strum(end + 2, 'D', 2, { velocity: .66 });
        s.melody(end, [[0, 'F♯4', 1], [1, 'A4', 1], [2, 'D5', 2]]);
        s.strum(end + 4, 'G', 6, { velocity: .8 });
        s.note(end + 4, 'G4', 6);
        return s;
      }
    },
    {
      file: 'osa-2/kaksi-kotisavelta',
      build() {
        const s = new Score({ bpm: 88 });
        const excerpt = (start, chords, melody) => chords.forEach((chord, bar) => {
          const at = start + bar * 4;
          const last = bar === chords.length - 1;
          s.strum(at, chord, last ? 6 : 2, { velocity: .75 });
          if (!last) s.strum(at + 2, chord, 2, { velocity: .62 });
          s.melody(at, melody[bar]);
        });
        excerpt(0, ['G', 'Em', 'C', 'D', 'G'], [
          [[0, 'G4', 2], [2, 'B4', 2]], [[0, 'G4', 2], [2, 'E4', 2]],
          [[0, 'E4', 2], [2, 'G4', 2]], [[0, 'F♯4', 2], [2, 'A4', 2]], [[0, 'G4', 6]]
        ]);
        excerpt(24, ['Em', 'C', 'G', 'D', 'Em'], [
          [[0, 'B4', 2], [2, 'G4', 2]], [[0, 'E4', 2], [2, 'G4', 2]],
          [[0, 'G4', 2], [2, 'B4', 2]], [[0, 'A4', 2], [2, 'F♯4', 2]], [[0, 'E4', 6]]
        ]);
        return s;
      }
    },
    {
      file: 'osa-2/kertosae-kapolla',
      build() {
        const s = new Score({ bpm: 88 });
        [0, 2].forEach((capo, round) => ['G', 'D', 'Em', 'C'].forEach((chord, i) => {
          const at = (round * 4 + i) * 4;
          s.strum(at, chord, 2, { capo, velocity: .78 }).strum(at + 2, chord, i === 3 && round === 1 ? 5 : 2, { capo, velocity: .66 });
          CHORUS[i].forEach(([beat, name, beats]) => s.note(at + beat, transpose(name, capo), beats));
        }));
        return s;
      }
    },
    {
      file: 'osa-3/septimisoinnut',
      build() {
        const s = new Score({ bpm: 72 });
        ['x 3 5 4 5 x', 'x 5 7 5 6 x', 'x 7 9 7 8 x', 'x 8 10 9 10 x', '3 x 3 4 3 x', '5 x 5 5 5 x', '7 x 7 7 6 x', '8 x 9 9 8 x']
          .forEach((shape, i) => s.strum(i * 2, shape, i === 7 ? 5 : 2, { pan: 0, velocity: .8 }));
        return s;
      }
    },
    {
      file: 'osa-3/yksi-savel-kerrallaan',
      build() {
        const s = new Score({ bpm: 80 });
        ['8 x 9 9 8 x', '8 x 8 9 8 x', '8 x 8 8 8 x', '8 x 8 8 7 x'].forEach((shape, i) => {
          const start = i * 4.5;
          [0, 2, 3, 4].forEach((string, n) => s.pick(start + n / 2, shape, string, 2.25 - n / 2, { pan: 0, velocity: .85 }));
          s.strum(start + 2.25, shape, 2.25, { pan: 0, velocity: .8 });
        });
        return s;
      }
    },
    {
      file: 'osa-3/samat-viisi-savelta',
      build() {
        const s = new Score({ bpm: 84 });
        const tune = [
          [[1, 'G4', .5], [1.5, 'A4', .5], [2, 'G4', 1.5], [3.5, 'E4', .5]],
          [[0, 'D4', 1], [1, 'C4', 1], [2, 'D4', 1], [3, 'E4', 1.5]]
        ];
        ['Am', 'Am', 'C', 'C'].forEach((chord, bar) => {
          minorPattern(s, bar, chord);
          s.melody(bar * 4, tune[bar % 2]);
        });
        return s;
      }
    },
    {
      file: 'osa-3/am-harjoitustausta',
      build() {
        const s = new Score({ bpm: 84 });
        const start = s.countIn(4) / 4;
        for (let bar = start; bar < start + 8; bar++) {
          minorPattern(s, bar, 'Am');
          lightDrums(s, bar);
        }
        return s;
      }
    },
    {
      file: 'osa-3/aiolinen-ja-doorinen',
      build() {
        const s = new Score({ bpm: 84 });
        for (let bar = 0; bar < 5; bar++) minorPattern(s, bar, 'Am');
        // B-kieleltä 5–6–5 tai 5–7–5 ja päätös D-kielen 7. nauhan A:han.
        [[0, 'F4'], [1, 'F4'], [3, 'F♯4'], [4, 'F♯4']].forEach(([bar, sixth]) => {
          s.melody(bar * 4, [[0, 'E4', 1], [1, sixth, 1], [2, 'E4', 1], [3, 'A3', 1.8]]);
        });
        return s;
      }
    },
    {
      file: 'osa-4/vertaa-intervalleja',
      build() {
        const s = new Score({ bpm: 80 });
        ['E3', 'F♯3', 'A3'].forEach((name, i) => {
          s.note(i * 3, 'D3', 1, { voice: 'clean', pan: 0 }).note(i * 3 + 1, name, 1.4, { voice: 'clean', pan: 0 });
        });
        return s;
      }
    },
    {
      file: 'osa-4/intervalliharjoitus',
      build() {
        const s = new Score({ bpm: 80 });
        ['D4', 'A3', 'B3'].forEach((name, i) => {
          s.note(i * 3, 'G3', 1, { voice: 'clean', pan: 0 }).note(i * 3 + 1, name, 1.4, { voice: 'clean', pan: 0 });
        });
        return s;
      }
    },
    {
      file: 'osa-4/kuuntele-basso',
      build() {
        const s = new Score({ bpm: 84 });
        const chords = ['Em', 'C', 'G', 'D'];
        chords.forEach((chord, bar) => s.bass(bar * 4, BASS_NOTE[chord], 3.8, { velocity: .95 }));
        chords.forEach((chord, bar) => {
          const at = 18 + bar * 4;
          s.bass(at, BASS_NOTE[chord], 3.8, { velocity: .72 });
          s.strum(at, chord, 2, { strings: [2, 3, 4, 5], velocity: .75 }).strum(at + 2, chord, 2, { strings: [2, 3, 4, 5], velocity: .65 });
        });
        return s;
      }
    },
    {
      file: 'osa-4/duuri-vai-molli',
      build() {
        const s = new Score({ bpm: 84 });
        [['D', 0], ['Dm', 3], ['Am', 7.5], ['A', 10.5]].forEach(([chord, beat]) => s.strum(beat, chord, 2, { pan: 0, velocity: .8 }));
        return s;
      }
    },
    {
      file: 'osa-4/paluumatka',
      build() {
        const s = new Score({ bpm: 84 });
        const start = s.countIn(4);
        RETURN_A_CHORDS.forEach((chord, bar) => s.bass(start + bar * 4, BASS_NOTE[chord], 3.9, { velocity: .6 }));
        returnPicking(s, start, { withBass: false });
        // B-osassa melodia nousee ja kitara soittaa soinnun jokaisella iskulla.
        RETURN_B_CHORDS.forEach((chord, bar) => {
          const at = start + 16 + bar * 4;
          const last = bar === 3;
          s.bass(at, BASS_NOTE[chord], last ? 6 : 3.9, { velocity: .6 });
          if (last) s.strum(at, chord, 6, { velocity: .75 });
          else for (let beat = 0; beat < 4; beat++) s.strum(at + beat, chord, 1, { velocity: beat ? .6 : .72 });
          s.melody(at, RETURN_B[bar]);
        });
        return s;
      }
    },
    {
      file: 'osa-5/em-c-tausta',
      build() {
        const s = new Score({ bpm: 84 });
        const start = s.countIn(4) / 4;
        for (let bar = start; bar < start + 8; bar++) {
          const chord = (bar - start) % 2 ? 'C' : 'Em';
          s.strum(bar * 4, chord, 2, { velocity: .72 }).strum(bar * 4 + 2, chord, 2, { velocity: .6 });
          lightDrums(s, bar);
        }
        return s;
      }
    },
    {
      file: 'osa-5/paluumatka-nappaily',
      build() {
        const s = new Score({ bpm: 84 });
        returnPicking(s, 0);
        return s;
      }
    },
    {
      file: 'osa-5/paluumatka-komppi',
      build() {
        const s = new Score({ bpm: 84 });
        RETURN_A_CHORDS.forEach((chord, bar) => {
          for (let beat = 0; beat < 4; beat++) s.strum(bar * 4 + beat, chord, 1, { velocity: beat ? .6 : .72 });
          s.melody(bar * 4, RETURN_A[bar]);
        });
        return s;
      }
    }
  ];

  return { examples, midi };
})();
