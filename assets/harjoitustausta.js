const backingTrack = (() => {
  const presets = {
    mp: {
      style: 'Molliblues', bpm: 84, groove: 'shuffle', bars: [1, 1, 1, 1], seventh: true,
      context: 'Mollipentatoninen on blues- ja rocksoolojen perusasteikko. Tässä yksi molliseptimisointu jättää tilaa lyhyille fraaseille.',
      degree: '♭3', cue: 'Soita pieni fraasi alennetulta kolmannelta asteelta toonikaan.'
    },
    dorian: {
      style: 'Funk', bpm: 100, groove: 'funk', bars: [1, 1, 4, 1],
      context: 'Doorista kuulee funkissa ja modaalisessa jazzissa. Synkopoitu komppi vaihtaa mollitoonikasta neljännen asteen duurisointuun.',
      degree: '6', cue: 'Kuuntele luonnollista kuudetta astetta neljännen asteen soinnun aikana.'
    },
    phrygian: {
      style: 'Metalliriffi', bpm: 110, groove: 'metal', bars: [1, 1, 2, 1],
      context: 'Fryygisen alennettu toinen aste on tuttu metalliriffeistä. Sointu liikahtaa puolisävelaskelen toonikan yläpuolelle ja palaa takaisin.',
      degree: '♭2', cue: 'Vuorottele alennettua toista astetta ja toonikaa.'
    },
    aeolian: {
      style: 'Mollirock', bpm: 92, groove: 'rock', bars: [1, 6, 7, 1],
      context: 'Aiolinen eli luonnollinen molli on yleinen rockissa ja popissa. Tässä mollisointua seuraavat alennetun kuudennen ja seitsemännen asteen duurisoinnut.',
      degree: '♭6', cue: 'Soita alennettu kuudes aste toisen tahdin alussa.'
    },
    locrian: {
      style: 'Jännitteinen riffi', bpm: 78, groove: 'riff', bars: [1, 1, 2, 1], pedal: true, seventh: true,
      context: 'Lokrinen on kokonaisen kappaleen pohjana harvinainen. Jazzissa sitä voi kokeilla m7♭5-soinnun päällä. Tässä basso pitää toonikan paikallaan.',
      degree: '♭5', cue: 'Kuuntele alennetun kvintin jännite toonikaa vasten.'
    },
    majp: {
      style: 'Country', bpm: 104, groove: 'country', bars: [1, 1, 1, 1],
      context: 'Duuripentatoninen on tavallinen countryssä ja duurisävyisessä bluesissa. Basson ja sointujen vuorottelu antaa tilaa melodialle.',
      degree: '6', cue: 'Kokeile päättää fraasi kuudennelta asteelta kvintille.'
    },
    ionian: {
      style: 'Duuripop', bpm: 104, groove: 'pop', bars: [1, 4, 5, 1],
      context: 'Jooninen on tavallinen duuriasteikko. Pop-kompissa neljäs ja viides sointu johdattavat takaisin toonikaan.',
      degree: '7', cue: 'Soita seitsemänneltä asteelta toonikaan kahden viimeisen tahdin vaihteessa.'
    },
    lydian: {
      style: 'Elokuvamainen säestys', bpm: 76, groove: 'pad', bars: [1, 2, 1, 2], pedal: true,
      context: 'Lyydinen sopii elokuvamaisiin, leijuviin sävyihin. Toisen asteen duurisointu soi toonikkabasson yllä.',
      degree: '♯4', cue: 'Kokeile pitää korotettua neljättä astetta pitkänä basson päällä.'
    },
    mixolydian: {
      style: 'Bluesrock', bpm: 96, groove: 'shuffle', bars: [1, 7, 4, 1],
      context: 'Miksolyydisen alennettu seitsemäs aste kuuluu monissa rockin sointukierroissa. Tässä sen duurisoinnusta palataan neljännen asteen kautta toonikaan.',
      degree: '♭7', cue: 'Soita alennettu seitsemäs aste toisen tahdin alussa.'
    }
  };

  // Iskut lasketaan tahdin alusta. Basson toinen luku valitsee soinnun sävelen.
  const grooves = {
    shuffle: { voice: 'keys', length: .48, chords: [0, 1.67, 2, 3.67],
      bass: [[0, 0], [1, 2], [2, 1], [3, 2]], kicks: [0, 2], hatStep: 2 / 3 },
    funk: { voice: 'pluck', length: .19, chords: [0, .75, 1.5, 2.75, 3.5],
      bass: [[0, 0], [.75, 0], [1.5, 2], [2, 0], [3.25, 1]], kicks: [0, 1.5, 2.75], hatStep: .5 },
    metal: { voice: 'grit', length: .24, chords: [0, .5, 1.5, 2, 2.5, 3.25],
      bass: [[0, 0], [.5, 0], [1.5, 0], [2, 0], [2.5, 0], [3.25, 0]], kicks: [0, .5, 2, 2.5], hatStep: .5 },
    rock: { voice: 'grit', length: 1.2, chords: [0, 1.5, 2.5],
      bass: [[0, 0], [1, 0], [2, 2], [3, 0]], kicks: [0, 2, 2.5], hatStep: .5 },
    riff: { voice: 'grit', length: .38, chords: [0, .75, 2, 3.5],
      bass: [[0, 0], [.75, 0], [2, 0], [3.5, 0]], kicks: [0, .75, 2], hatStep: 1 },
    country: { voice: 'pluck', length: .48, chords: [1, 1.5, 3, 3.5],
      bass: [[0, 0], [2, 2]], kicks: [0, 2], hatStep: .5 },
    pop: { voice: 'keys', length: .68, chords: [0, 1, 2, 2.5, 3.5],
      bass: [[0, 0], [1, 0], [2, 2], [3, 0]], kicks: [0, 1, 2, 3], hatStep: .5 },
    pad: { voice: 'pad', length: 3.98, chords: [0],
      bass: [[0, 0], [2, 0]], kicks: [0], hatStep: 2, soft: true }
  };

  function makeScore(rootPC, scaleId) {
    const { SCALES, scaleNotes, noteName, CHROM } = fretboard;
    const preset = presets[scaleId];
    const notes = scaleNotes(SCALES[scaleId]);
    const interval = degree => notes.find(([, label]) => label === degree)[0];
    const bars = preset.bars.map(degree => {
      const [root, label] = notes[degree - 1];
      const pitches = notes.length === 5
        ? [0, interval(scaleId === 'mp' ? '♭3' : '3'), 7]
        : [0, 2, 4].map(step => (notes[(degree - 1 + step) % 7][0] - root + 12) % 12);
      const diminished = pitches[2] === 6;
      let suffix = pitches[1] === 3 ? 'm' : '';
      if (diminished) suffix = '°';
      if (preset.seventh && degree === 1) {
        pitches.push(interval('♭7'));
        suffix = diminished ? 'm7♭5' : 'm7';
      }
      const name = noteName(rootPC, root, label) + suffix;
      return {
        pitches,
        root,
        bass: preset.pedal ? 0 : root,
        name: preset.pedal && root ? name + '/' + CHROM[rootPC] : name
      };
    });
    return { bars, groove: grooves[preset.groove] };
  }

  const voices = {
    bass:  { harmonics: [1, .34, .12],         attack: .008, level: .23 },
    keys:  { harmonics: [1, .32, .18, .12],    attack: .008, level: .079 },
    pluck: { harmonics: [1, .46, .24, .12],    attack: .004, level: .090 },
    grit:  { harmonics: [1, .5, .35, .2, .1], attack: .008, level: .076, sustain: .35 },
    pad:   { harmonics: [1, .19, .07],         attack: .125, level: .070, sustain: .72 }
  };

  function renderLoop(rootPC, score, bpm) {
    const beat = 60 / bpm;
    const barLength = 4 * beat;
    const sampleRate = 44100;
    const context = new OfflineAudioContext(1, Math.round(score.bars.length * barLength * sampleRate), sampleRate);
    const mix = context.createGain();
    mix.gain.value = .78;
    mix.connect(context.destination);
    const waves = Object.fromEntries(Object.entries(voices).map(([name, { harmonics }]) => [
      name, context.createPeriodicWave(new Float32Array(harmonics.length + 1), new Float32Array([0, ...harmonics]))
    ]));
    const noise = context.createBuffer(1, Math.ceil(.15 * sampleRate), sampleRate);
    const samples = noise.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = 2 * Math.random() - 1;

    function shape(source, time, length, level, attack, sustain) {
      const gain = context.createGain();
      const end = time + length;
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(level, time + Math.min(attack, length / 3));
      if (sustain) {
        gain.gain.exponentialRampToValueAtTime(level * sustain, end - Math.min(.22, length / 2));
      }
      gain.gain.exponentialRampToValueAtTime(.0001, end);
      source.connect(gain).connect(mix);
      source.start(time);
      source.stop(end);
    }

    function tone(midi, time, length, name, accent = 1) {
      const voice = voices[name];
      const osc = context.createOscillator();
      osc.setPeriodicWave(waves[name]);
      osc.frequency.value = 440 * 2 ** ((midi - 69) / 12);
      shape(osc, time, length, voice.level * accent, voice.attack, voice.sustain);
    }

    function kick(time, soft) {
      const osc = context.createOscillator();
      osc.frequency.setValueAtTime(125, time);
      osc.frequency.exponentialRampToValueAtTime(45, time + .075);
      shape(osc, time, .17, soft ? .16 : .37, .004);
    }

    function percussion(time, snare, level) {
      const source = context.createBufferSource();
      source.buffer = noise;
      const filter = context.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = snare ? 1250 : 6400;
      const gain = context.createGain();
      const length = snare ? .1 : .055;
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(level, time + .002);
      gain.gain.exponentialRampToValueAtTime(.0001, time + length);
      source.connect(filter).connect(gain).connect(mix);
      source.start(time);
      source.stop(time + length);
    }

    const { groove, bars } = score;
    bars.forEach(({ pitches, root, bass }, index) => {
      const start = index * barLength;
      const chordMidi = 48 + (rootPC + root) % 12;
      const bassMidi = 28 + (rootPC + bass + 8) % 12; // E1–E♭2
      groove.chords.forEach((at, hit) => {
        pitches.forEach((pitch, string) => {
          const spread = groove.voice === 'pad' ? 0 : string * .011;
          const length = Math.min(groove.length, 4 - at) * beat - spread;
          tone(chordMidi + pitch, start + at * beat + spread, length, groove.voice, hit % 2 === 0 ? 1 : .76);
        });
      });
      groove.bass.forEach(([at, chordTone], i) => {
        const next = groove.bass[i + 1]?.[0] ?? 4;
        const length = Math.min(next - at, groove.soft ? 1.85 : .72) * beat;
        tone(bassMidi + pitches[chordTone], start + at * beat, length, 'bass');
      });
      groove.kicks.forEach(at => kick(start + at * beat, groove.soft));
      if (!groove.soft) [1, 3].forEach(at => percussion(start + at * beat, true, .18));
      if (!groove.soft && index === bars.length - 1) percussion(start + 3.75 * beat, true, .07);
      const hats = groove.hatStep === 2 / 3 ? [0, 2 / 3, 1, 5 / 3, 2, 8 / 3, 3, 11 / 3]
        : Array.from({ length: 4 / groove.hatStep }, (_, i) => i * groove.hatStep);
      hats.forEach((at, i) => percussion(start + at * beat, false, groove.soft ? .03 : (i % 2 === 0 ? .095 : .05)));
    });
    return context.startRendering();
  }

  return { presets, makeScore, renderLoop };
})();
