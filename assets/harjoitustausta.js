const backingTrack = (() => {
  // Jokaisen moodin tausta edustaa musiikkisuuntaa, jossa moodi on tyypillinen.
  // Tahti merkitään asteella ja sointutyypillä: 5 voimasointu, 7 septimisointu ja
  // 9 nonisointu. Pelkkä aste on kolmisointu. Pentatonisten asteikkojen soinnut
  // rakennetaan seitsemänsävelisestä emoasteikosta.
  const presets = {
    mp: {
      style: 'Molliblues', bpm: 74, groove: 'minorBlues', harmony: 'aeolian',
      bars: ['1:7', '1:7', '1:7', '1:7', '4:7', '4:7', '1:7', '1:7', '5:7', '4:7', '1:7', '5:7'],
      context: 'Mollipentatoninen on bluesin ja rockin sooloasteikko. Tausta on hidas 12 tahdin molliblues, jossa urut soittavat toonikan sekä neljännen ja viidennen asteen molliseptimisointuja.',
      degree: '♭3', cue: 'Soita pieni fraasi alennetulta kolmannelta asteelta toonikaan.'
    },
    dorian: {
      style: 'Funk', bpm: 100, groove: 'funk',
      bars: ['1:7', '4:9', '1:7', '4:9'],
      context: 'Doorinen on funkin ja modaalisen jazzin moodi. Komppi vuorottelee molliseptimisoinnun ja neljännen asteen nonisoinnun välillä samaan tapaan kuin Santanan Oye Como Vassa.',
      degree: '6', cue: 'Kuuntele luonnollista kuudetta astetta neljännen asteen soinnun aikana.'
    },
    phrygian: {
      style: 'Metalliriffi', bpm: 112, groove: 'metal',
      bars: ['1:5', '1:5', '2:5', '1:5'],
      context: 'Fryygisen alennettu toinen aste on metallin tavaramerkki. Laukkaava riffi soi voimasoinnuilla toonikalla ja nousee välillä puolisävelaskeleen ylöspäin.',
      degree: '♭2', cue: 'Vuorottele alennettua toista astetta ja toonikaa.'
    },
    aeolian: {
      style: 'Mollirock', bpm: 92, groove: 'rock',
      bars: ['1', '6', '7', '1'],
      context: 'Aiolinen eli luonnollinen molli on rockin ja popin perusmolli. Kahdeksasosia soittava särökitara kulkee mollitoonikasta alennetun kuudennen ja seitsemännen asteen duurisointuihin.',
      degree: '♭6', cue: 'Soita alennettu kuudes aste toisen tahdin alussa.'
    },
    locrian: {
      style: 'Jännitteinen riffi', bpm: 84, groove: 'riff', pedal: true,
      bars: ['1:5', '1:5', '2:5', '1:5'],
      context: 'Lokrinen on kokonaisen kappaleen pohjana harvinainen, mutta sen tritonus kuuluu raskaan metallin riffeissä. Basso pitää toonikan paikallaan, kun kitara soittaa alennetun kvintin ja alennetun toisen asteen voimasointuja.',
      degree: '♭5', cue: 'Kuuntele alennetun kvintin jännite toonikaa vasten.'
    },
    majp: {
      style: 'Country', bpm: 108, groove: 'country', harmony: 'ionian',
      bars: ['1', '1', '4', '4', '1', '1', '5', '5'],
      context: 'Duuripentatoninen on countryn ja duurisävyisen bluesin melodia-asteikko. Basso vuorottelee perussävelen ja kvintin välillä, ja kierto kulkee toonikasta neljännen ja viidennen asteen sointuihin.',
      degree: '6', cue: 'Kokeile päättää fraasi kuudennelta asteelta kvintille.'
    },
    ionian: {
      style: 'Duuripop', bpm: 100, groove: 'pop',
      bars: ['1', '5', '6', '4'],
      context: 'Jooninen on tavallinen duuriasteikko. Kierto I–V–vi–IV on popin tunnetuimpia, ja sen kuulee esimerkiksi Beatlesin Let It Bessä.',
      degree: '7', cue: 'Soita seitsemäs aste toisen tahdin soinnun aikana ja nouse siitä toonikaan.'
    },
    lydian: {
      style: 'Elokuvamusiikki', bpm: 76, groove: 'film', pedal: true,
      bars: ['1:7', '2', '1:7', '2'],
      context: 'Lyydinen sopii elokuvamaisiin, leijuviin sävyihin, ja sen kuulee esimerkiksi Simpsonien tunnusmusiikissa. Harppu soittaa murtosointuja, ja toisen asteen duurisointu soi toonikkabasson yllä.',
      degree: '♯4', cue: 'Kokeile pitää korotettua neljättä astetta pitkänä basson päällä.'
    },
    mixolydian: {
      style: 'Klassinen rock', bpm: 100, groove: 'classicRock',
      bars: ['1', '7', '4', '1'],
      context: 'Miksolyydisen alennettu seitsemäs aste kuuluu rockin tutuimpiin sointukiertoihin. Kierto toonikasta alennetun seitsemännen ja neljännen asteen kautta takaisin on sama kuin Lynyrd Skynyrdin Sweet Home Alabamassa.',
      degree: '♭7', cue: 'Soita alennettu seitsemäs aste toisen tahdin alussa.'
    }
  };

  // Kuviot luetaan tahdin alusta askel kerrallaan. Suorassa kompissa askel on
  // kuudestoistaosa, shufflessa kahdeksasosatrioli.
  // Soinnut ja basso: X korostettu, x tavallinen ja m vaimennettu lyönti,
  // - jatkaa edellistä ja . on tauko. Basson merkit valitsevat soinnun sävelen:
  // R perussävel, 3 terssi, 5 kvintti, 7 septimi ja O oktaavi.
  // Rummut: X korostettu, x tavallinen, g haamulyönti ja o avoin hi-hat.
  const grooves = {
    minorBlues: {
      steps: 12, chordVoice: 'organ', center: 62, bassVoice: 'upright', reverb: .2, room: 2,
      cymbal: 'ride',
      chords: 'x-----x-----',
      bass:   'R-R5-57-75-5',
      kick:   'x.....x.....',
      snare:  '...x.....x..',
      hat:    'x.xx.xx.xx.x',
      fill:   '...x.....gxx'
    },
    funk: {
      steps: 16, chordVoice: 'scratch', center: 67, bassVoice: 'electric', reverb: .08, room: 1,
      chords: 'X..x..x...x.x.x.',
      bass:   'R-.R..O.R-5..7O.',
      kick:   'x..x......x..x..',
      snare:  '....X..g.g..X..g',
      hat:    'xxxxxxxxxxxxxxox',
      fill:   '....X..g.g..XgXX'
    },
    metal: {
      steps: 16, chordVoice: 'heavy', bassVoice: 'electric', bassDrive: 3, reverb: .06, room: 1.2,
      crash: true,
      chords: 'X-mmm-mmm-mmm-mm',
      bass:   'R-RRR-RRR-RRR-RR',
      kick:   'x.xxx.xxx.xxx.xx',
      snare:  '....X.......X...',
      hat:    'x.x.x.x.x.x.x.x.',
      fill:   '....X.......XXXX'
    },
    rock: {
      steps: 16, chordVoice: 'crunch', center: 60, bassVoice: 'electric', reverb: .1, room: 1.6,
      crash: true,
      chords: 'X-x-x-x-X-x-x-x-',
      bass:   'R-R-R-R-R-R-R-R-',
      kick:   'x.......x.x.....',
      snare:  '....X.......X...',
      hat:    'x.x.x.x.x.x.x.x.',
      fill:   '....X.......X.XX'
    },
    riff: {
      steps: 16, chordVoice: 'heavy', bassVoice: 'electric', bassDrive: 3, reverb: .1, room: 1.6,
      crash: true,
      chords: 'X-----m.m.X---m.',
      bass:   'R-----R.R.R---R.',
      kick:   'x.....x.x.x.....',
      snare:  '........X.......',
      hat:    'x...x...x...x...',
      fill:   '........X...XXXX'
    },
    country: {
      steps: 16, chordVoice: 'clean', center: 60, bassVoice: 'upright', reverb: .12, room: 1.5,
      brushes: true,
      chords: '....x-x-....x-x-',
      bass:   'R-------5-------',
      kick:   'x.......x.......',
      snare:  'ggggXgggggggXggg',
      hat:    '',
      fill:   'ggggXgggggggXgXX'
    },
    pop: {
      steps: 16, chordVoice: 'piano', center: 64, bassVoice: 'electric', reverb: .16, room: 1.8,
      chords: 'X-x-x-x-X-x-x-x-',
      bass:   'R---R---R-R-R---',
      kick:   'x.......x.x.....',
      snare:  '....X.......X...',
      hat:    'x.x.x.x.x.x.x.x.',
      fill:   '....X.......X.XX'
    },
    film: {
      steps: 16, chordVoice: 'pad', center: 60, bassVoice: 'bowed', reverb: .4, room: 3.2,
      soft: true,
      chords: 'x---------------',
      arp: { voice: 'harp', center: 74, order: [0, 1, 2, 3, 4, 3, 2, 1], pattern: 'x.x.x.x.x.x.x.x.' },
      bass:   'R---------------',
      kick:   'x.......x.......',
      snare:  '',
      hat:    ''
    },
    classicRock: {
      steps: 16, chordVoice: 'crunch', center: 60, bassVoice: 'electric', reverb: .12, room: 1.6,
      crash: true,
      chords: 'X-x-x-xx-x-x-x-x',
      bass:   'R-R-R-RR-R-R-R-R',
      kick:   'x.....x.x.......',
      snare:  '....X.......X...',
      hat:    'x.x.x.x.x.x.x.x.',
      fill:   '....X.......X.XX'
    }
  };

  const sawPartials = count => Array.from({ length: count }, (_, index) => 1 / (index + 1));

  // Kielisoittimet syntetisoidaan Karplus–Strong-menetelmällä, muut oskillaattoreilla.
  const chordVoices = {
    organ:   { source: 'wave', partials: [1, .8, .55, .4, 0, .25, 0, .2], attack: .015, release: .07,
               level: .09, tremolo: true, tone: 4200, send: .5 },
    piano:   { source: 'wave', partials: [1, .42, .28, .16, .1, .07, .04, .03], attack: .003, sustain: .2,
               decay: 1.1, release: .2, level: .12, bright: [5200, 1700, .35], send: .45, strum: .004 },
    pad:     { source: 'saw', detune: [-7, 7], attack: .7, release: 1.3, level: .035, tone: 1500,
               send: 1, spread: .45 },
    clean:   { source: 'string', damping: .996, brightness: .55, ring: .3, release: .07, level: .42,
               tone: 5000, pan: .3, send: .35, strum: .012 },
    scratch: { source: 'string', damping: .93, brightness: .5, ring: .02, release: .025, level: .85,
               tone: 4200, pan: -.3, send: .12, strum: .006 },
    crunch:  { source: 'string', damping: .997, brightness: .6, ring: .12, release: .05, level: .5,
               drive: 4, tone: 4600, double: .7, send: .2, out: .05, strum: .01 },
    heavy:   { source: 'string', damping: .998, brightness: .65, ring: .1, release: .04, level: .6,
               drive: 14, tone: 3800, double: .8, send: .12, out: .06, strum: .006,
               mute: { damping: .9, release: .015, ring: 0 } },
    harp:    { source: 'string', damping: .9985, brightness: .75, ring: 1.4, release: .6, level: .32,
               tone: 7000, pan: .2, send: 1 },
    // Kirjan esimerkkien melodiakitara erottuu säestyksestä kirkkaampana ja keskellä.
    lead:    { source: 'string', damping: .9975, brightness: .72, ring: .2, release: .12, level: .55,
               tone: 6500, pan: 0, send: .4 }
  };

  const bassVoices = {
    electric: { source: 'wave', partials: sawPartials(10), attack: .004, sustain: .55, decay: .7,
                release: .05, level: .3, bright: [1700, 520, .1] },
    upright:  { source: 'wave', partials: [1, .55, .32, .18, .1, .05], attack: .01, sustain: .25,
                decay: .55, release: .09, level: .28, bright: [1100, 450, .08] },
    bowed:    { source: 'saw', detune: [-5, 5], attack: .45, release: .9, level: .1, tone: 520, send: .4 }
  };

  const drumLevels = { X: 1, x: .78, g: .22, o: .7 };
  const chordLevels = { X: 1, x: .82, m: .72 };
  const targetRMS = .13;   // noin −18 dBFS
  const peakLimit = .89;   // noin −1 dBFS
  const tail = 3;          // Luupin yli soivat äänet taitetaan luupin alkuun.

  function chordSuffix(pitches, type) {
    if (type === '5') return pitches[1] === 6 ? '5♭5' : '5';
    const [, third, fifth, seventh, ninth] = pitches;
    const minor = third === 3;
    if (type === 'triad') return fifth === 6 ? '°' : minor ? 'm' : '';
    let symbol = minor ? 'm7' : '7';
    if (fifth === 6) symbol = 'm7♭5';
    else if (seventh === 11) symbol = minor ? 'm(maj7)' : 'maj7';
    if (type === '9') symbol = ninth === 14 ? symbol.replace('7', '9') : symbol + '(♭9)';
    return symbol;
  }

  function makeScore(rootPC, scaleId) {
    const { SCALES, scaleNotes, noteName } = fretboard;
    const preset = presets[scaleId];
    const notes = scaleNotes(SCALES[preset.harmony ?? scaleId]);
    const tonic = noteName(rootPC, 0, '1');
    const bars = preset.bars.map(symbol => {
      const [degree, type = 'triad'] = symbol.split(':');
      const index = Number(degree) - 1;
      const [root, label] = notes[index];
      // Pinoa terssejä moodin omista sävelistä.
      const step = count => {
        const position = index + count;
        return notes[position % notes.length][0] + 12 * Math.floor(position / notes.length) - root;
      };
      const pitches = type === '5' ? [0, step(4), 12] : [0, step(2), step(4)];
      if (type === '7' || type === '9') pitches.push(step(6));
      if (type === '9') pitches.push(step(8));
      const bass = preset.pedal ? 0 : root;
      const quality = chordSuffix(pitches, type);
      const chord = noteName(rootPC, root, label) + quality;
      return { root, type, pitches, bass, quality, chord, name: bass === root ? chord : chord + '/' + tonic };
    });
    return { bars, groove: grooves[preset.groove] };
  }

  function hits(pattern = '') {
    const result = [];
    for (let step = 0; step < pattern.length; step++) {
      const char = pattern[step];
      if (char === '.' || char === '-') continue;
      let length = 1;
      while (pattern[step + length] === '-') length++;
      result.push({ step, length, char });
    }
    return result;
  }

  const average = notes => notes.reduce((sum, note) => sum + note, 0) / notes.length;

  function shapes(classes) {
    return classes.flatMap((_, rotation) => {
      const closed = [...classes.slice(rotation), ...classes.slice(0, rotation).map(note => note + 12)];
      if (closed.length < 4) return [closed];
      const drop = [...closed];
      drop[drop.length - 2] -= 12;
      return [closed, drop.sort((a, b) => a - b)];
    });
  }

  function movement(from, to) {
    const nearest = (notes, note) => Math.min(...notes.map(other => Math.abs(other - note)));
    return to.reduce((sum, note) => sum + nearest(from, note), 0) +
      from.reduce((sum, note) => sum + nearest(to, note), 0);
  }

  // Valitse jokaiselle soinnulle käännös, joka liikkuu edellisestä mahdollisimman vähän.
  function voiceChords(bars, rootPC, center) {
    let previous = null;
    return bars.map(({ root, type, pitches }) => {
      const chordRoot = (rootPC + root) % 12;
      if (type === '5') {
        const low = 40 + (chordRoot - 4 + 12) % 12; // E2–E♭3 kuten kitaran matalilla kielillä
        return pitches.map(pitch => low + pitch);
      }
      const tones = type === '9' ? pitches.filter((_, index) => index !== 2) : pitches;
      const classes = [...new Set(tones.map(pitch => (chordRoot + pitch) % 12))].sort((a, b) => a - b);
      let best = null;
      let bestCost = Infinity;
      for (const shape of shapes(classes)) {
        const octave = 12 * Math.round((center - average(shape)) / 12);
        for (const shift of [octave - 12, octave, octave + 12]) {
          const notes = shape.map(note => note + shift);
          const cost = Math.abs(average(notes) - center) * .5 + (previous ? movement(previous, notes) : 0);
          if (cost < bestCost) {
            best = notes;
            bestCost = cost;
          }
        }
      }
      previous = best;
      return best;
    });
  }

  function bassPitch(char, bar) {
    if (char === 'O') return 12;
    if (char === 'R' || bar.bass !== bar.root) return 0;
    if (bar.type === '5') return char === '5' ? bar.pitches[1] : 0;
    return bar.pitches[{ 3: 1, 5: 2, 7: 3 }[char]] ?? 0;
  }

  function seeded(seed) {
    return () => {
      seed = seed + 0x6D2B79F5 | 0;
      let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function saturation(amount) {
    const curve = new Float32Array(1024);
    for (let i = 0; i < curve.length; i++) {
      const x = i / (curve.length - 1) * 2 - 1;
      curve[i] = Math.tanh(amount * x) / Math.tanh(amount);
    }
    return curve;
  }

  const hz = midi => 440 * 2 ** ((midi - 69) / 12);

  // Soittimet, efektit ja rummut yhteen OfflineAudioContextiin. Sekä harjoitustaustat
  // että kirjan ääniesimerkit käyttävät samoja soittimia.
  function createStudio(context, { room = 1.6, reverb: wet = .12, end, random, soft = false }) {
    const sampleRate = context.sampleRate;
    const master = context.createDynamicsCompressor();
    master.threshold.value = -20;
    master.knee.value = 10;
    master.ratio.value = 3.5;
    master.attack.value = .006;
    master.release.value = .18;
    master.connect(context.destination);

    const reverb = context.createConvolver();
    reverb.buffer = impulse(room);
    const reverbReturn = context.createGain();
    reverbReturn.gain.value = wet;
    reverb.connect(reverbReturn).connect(master);

    const noise = context.createBuffer(1, 3 * sampleRate, sampleRate);
    noise.getChannelData(0).forEach((_, i, data) => { data[i] = random() * 2 - 1; });

    function impulse(seconds) {
      const length = Math.round(seconds * sampleRate);
      const buffer = context.createBuffer(2, length, sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = buffer.getChannelData(channel);
        let smooth = 0;
        for (let i = 0; i < length; i++) {
          const time = i / sampleRate;
          smooth += .35 * (random() * 2 - 1 - smooth);
          data[i] = time < .012 ? 0 : smooth * Math.exp(-6.9 * time / seconds);
        }
      }
      return buffer;
    }

    function filter(type, frequency, q) {
      const node = context.createBiquadFilter();
      node.type = type;
      node.frequency.value = frequency;
      if (q !== undefined) node.Q.value = q;
      return node;
    }

    function gainNode(value) {
      const node = context.createGain();
      node.gain.value = value;
      return node;
    }

    function shaper(amount) {
      const node = context.createWaveShaper();
      node.curve = saturation(amount);
      node.oversample = '4x';
      return node;
    }

    function channel({ pan = 0, send = 0, level = 1, chain = [] } = {}) {
      const input = gainNode(level);
      const panner = context.createStereoPanner();
      panner.pan.value = pan;
      [input, ...chain, panner].reduce((from, to) => from.connect(to));
      panner.connect(master);
      if (send) panner.connect(gainNode(send)).connect(reverb);
      return input;
    }

    function tremolo() {
      const node = gainNode(.82);
      const lfo = context.createOscillator();
      lfo.frequency.value = 6.1;
      lfo.connect(gainNode(.18)).connect(node.gain);
      lfo.start(0);
      lfo.stop(end);
      return node;
    }

    function voiceChannel(voice, pan) {
      const chain = [];
      if (voice.drive) chain.push(gainNode(voice.drive), shaper(3), filter('highpass', 90));
      if (voice.tremolo) chain.push(tremolo());
      if (voice.tone) chain.push(filter('lowpass', voice.tone));
      return channel({ pan, send: voice.send ?? 0, level: voice.out ?? 1, chain });
    }

    function voiceOutputs(voice) {
      if (voice.double) return [-voice.double, voice.double].map(pan => voiceChannel(voice, pan));
      if (voice.spread) return [-voice.spread, voice.spread].map(pan => voiceChannel(voice, pan));
      return [voiceChannel(voice, voice.pan ?? 0)];
    }

    const waves = new Map();
    function waveFor(partials) {
      if (!waves.has(partials)) {
        waves.set(partials, context.createPeriodicWave(
          new Float32Array(partials.length + 1), new Float32Array([0, ...partials])));
      }
      return waves.get(partials);
    }

    function pluck(midi, seconds, { damping, brightness }) {
      const frequency = hz(midi);
      const period = Math.max(2, Math.round(sampleRate / frequency - .5));
      const length = Math.max(1, Math.ceil(seconds * sampleRate));
      const buffer = context.createBuffer(1, length, sampleRate);
      const data = buffer.getChannelData(0);
      const line = new Float32Array(period);
      let smooth = 0;
      for (let i = 0; i < period; i++) {
        smooth += brightness * (random() * 2 - 1 - smooth);
        line[i] = smooth;
      }
      const mean = average(line);
      const peak = Math.max(...line.map(value => Math.abs(value - mean))) || 1;
      line.forEach((value, i) => { line[i] = (value - mean) / peak; });
      let previous = 0;
      for (let i = 0, index = 0; i < length; i++) {
        const value = line[index];
        data[i] = value;
        line[index] = damping * .5 * (value + previous);
        previous = value;
        index = index + 1 === period ? 0 : index + 1;
      }
      // Viivelinja on puoli näytettä pitempi kuin kokonaisluku; korjaa vire toistonopeudella.
      return { buffer, rate: frequency * (period + .5) / sampleRate };
    }

    function envelope(time, length, voice, velocity) {
      const gain = context.createGain();
      const level = voice.level * velocity;
      const attack = Math.min(voice.attack ?? .002, length / 2);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(level, time + attack);
      if (voice.sustain !== undefined) gain.gain.setTargetAtTime(level * voice.sustain, time + attack, voice.decay / 3);
      gain.gain.setTargetAtTime(0, time + length, voice.release / 3);
      return gain;
    }

    function playTone(destination, voice, midi, time, written, velocity) {
      // Kielisoittimen sävel saa soida hetken kirjoitettua pidempään.
      const length = written + (voice.ring ?? 0);
      const stop = time + length + voice.release * 2;
      const gain = envelope(time, length, voice, velocity);
      gain.connect(destination);
      let input = gain;
      if (voice.bright) {
        const [from, to, seconds] = voice.bright;
        input = filter('lowpass', from);
        input.frequency.setValueAtTime(from, time);
        input.frequency.setTargetAtTime(to, time, seconds);
        input.connect(gain);
      }
      if (voice.source === 'string') {
        const { buffer, rate } = pluck(midi, length + voice.release * 2, voice);
        const source = context.createBufferSource();
        source.buffer = buffer;
        source.playbackRate.value = rate;
        source.connect(input);
        source.start(time);
        source.stop(stop);
        return;
      }
      (voice.detune ?? [0]).forEach(cents => {
        const oscillator = context.createOscillator();
        if (voice.source === 'saw') oscillator.type = 'sawtooth';
        else oscillator.setPeriodicWave(waveFor(voice.partials));
        oscillator.frequency.value = hz(midi);
        oscillator.detune.value = cents;
        oscillator.connect(input);
        oscillator.start(time);
        oscillator.stop(stop);
      });
    }

    function burst(destination, time, { length, level, highpass, bandpass, q = .8, attack = .001 }) {
      const source = context.createBufferSource();
      source.buffer = noise;
      let node = source;
      if (highpass) node = node.connect(filter('highpass', highpass));
      if (bandpass) node = node.connect(filter('bandpass', bandpass, q));
      const gain = context.createGain();
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(level, time + attack);
      gain.gain.setTargetAtTime(0, time + attack, length / 4);
      node.connect(gain).connect(destination);
      const duration = length * 1.5 + attack;
      source.start(time, random() * (noise.duration - duration));
      source.stop(time + duration);
    }

    const drums = channel({ send: .18 });
    const hats = channel({ pan: .25, send: .08 });
    const cymbals = channel({ pan: -.3, send: .3 });

    function kick(time, velocity) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.setValueAtTime(soft ? 90 : 150, time);
      oscillator.frequency.exponentialRampToValueAtTime(soft ? 50 : 46, time + .07);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(velocity * (soft ? .5 : .95), time + .003);
      gain.gain.setTargetAtTime(0, time + .003, soft ? .14 : .085);
      oscillator.connect(gain).connect(drums);
      oscillator.start(time);
      oscillator.stop(time + .7);
      // Napsahdus erottuu myös pienistä kaiuttimista.
      if (!soft) burst(drums, time, { length: .012, level: .3 * velocity, bandpass: 3200, q: .7 });
    }

    function snare(time, velocity) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(200, time);
      oscillator.frequency.exponentialRampToValueAtTime(165, time + .05);
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(.55 * velocity, time + .002);
      gain.gain.setTargetAtTime(0, time + .002, .035);
      oscillator.connect(gain).connect(drums);
      oscillator.start(time);
      oscillator.stop(time + .3);
      burst(drums, time, { length: .17, level: .72 * velocity, highpass: 1400, bandpass: 4200, q: .5 });
    }

    function brush(time, velocity) {
      burst(drums, time, { length: .1 + .1 * velocity, level: .55 * velocity, bandpass: 2600, q: .9, attack: .008 });
    }

    function hat(time, velocity, open) {
      burst(hats, time, { length: open ? .32 : .05, level: .32 * velocity, highpass: 7600 });
    }

    function ride(time, velocity) {
      burst(cymbals, time, { length: .45, level: .17 * velocity, highpass: 5500, bandpass: 8500, q: .6 });
    }

    function crash(time) {
      burst(cymbals, time, { length: 1.7, level: .32, highpass: 4500 });
    }

    // Lähtöiskun kapulaklikki; ensimmäinen isku korostetaan korkeammalla sävelellä.
    function click(time, velocity = 1, accent = false) {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = accent ? 1760 : 1320;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(.22 * velocity, time + .001);
      gain.gain.setTargetAtTime(0, time + .001, .012);
      oscillator.connect(gain).connect(drums);
      oscillator.start(time);
      oscillator.stop(time + .1);
      burst(drums, time, { length: .03, level: .5 * velocity, bandpass: 2600, q: 1.2 });
    }

    function bassChannel(voice, drive = 1) {
      return channel({
        send: voice.send ?? 0,
        chain: [gainNode(drive), shaper(1.5), filter('lowpass', voice.tone ?? 2800), filter('highpass', 32)]
      });
    }

    return {
      channel, gainNode, filter, shaper, voiceChannel, voiceOutputs, bassChannel, playTone,
      kick, snare, brush, hat, ride, crash, click
    };
  }

  function renderLoop(rootPC, score, bpm, { parts = ['drums', 'bass', 'chords'], normalize = true } = {}) {
    const { bars, groove } = score;
    const sampleRate = 44100;
    const barLength = 240 / bpm;
    const stepLength = barLength / groove.steps;
    const loopLength = bars.length * barLength;
    const end = loopLength + tail;
    const context = new OfflineAudioContext(2, Math.ceil(end * sampleRate), sampleRate);
    const random = seeded(7);
    const vary = (amount = .12) => 1 + (random() - .5) * amount;
    // Pieni ajoitusvaihtelu tekee kompista inhimillisemmän.
    const human = (time, amount = .008) => Math.max(0, time + (random() - .5) * amount);


    const { gainNode, shaper, filter, channel, voiceOutputs, playTone, kick, snare, brush, hat, ride, crash } =
      createStudio(context, { room: groove.room, reverb: groove.reverb, end, random, soft: groove.soft });
    const chordVoice = chordVoices[groove.chordVoice];
    const chordOutputs = voiceOutputs(chordVoice);
    const arpVoice = groove.arp && chordVoices[groove.arp.voice];
    const arpOutput = arpVoice && voiceOutputs(arpVoice)[0];
    const bassVoice = bassVoices[groove.bassVoice];
    const bassOutput = channel({
      send: bassVoice.send ?? 0,
      chain: [gainNode(groove.bassDrive ?? 1), shaper(1.5), filter('lowpass', bassVoice.tone ?? 2800), filter('highpass', 32)]
    });
    const voicings = voiceChords(bars, rootPC, groove.center ?? 60);
    const beatSteps = groove.steps / 4;

    bars.forEach((bar, index) => {
      const start = index * barLength;
      const at = step => start + step * stepLength;

      if (parts.includes('drums')) {
        if (groove.crash && index === 0) crash(start);
        hits(groove.kick).forEach(({ step, char }) => kick(human(at(step), .004), drumLevels[char] * vary()));
        const last = index === bars.length - 1;
        hits(last && groove.fill ? groove.fill : groove.snare).forEach(({ step, char }) => {
          (groove.brushes ? brush : snare)(human(at(step)), drumLevels[char] * vary());
        });
        hits(groove.hat).forEach(({ step, char }) => {
          const accent = step % beatSteps === 0 ? 1 : .68;
          const level = drumLevels[char] * accent * vary();
          if (groove.cymbal === 'ride') ride(human(at(step)), level);
          else hat(human(at(step)), level, char === 'o');
        });
      }

      if (parts.includes('bass')) {
        const low = 28 + (rootPC + bar.bass + 8) % 12; // E1–E♭2
        hits(groove.bass).forEach(({ step, length, char }) => {
          const duration = Math.max(length * stepLength - .02, .05);
          playTone(bassOutput, bassVoice, low + bassPitch(char, bar), human(at(step), .004), duration, vary(.1));
        });
      }

      if (parts.includes('chords')) {
        const notes = voicings[index];
        hits(groove.chords).forEach(({ step, length, char }) => {
          const voice = char === 'm' && chordVoice.mute ? { ...chordVoice, ...chordVoice.mute } : chordVoice;
          const strum = voice.strum ?? 0;
          // Iskut lyödään alaspäin, välit ylöspäin kuten kitaralla.
          const down = (step * 2 / beatSteps) % 2 === 0;
          const order = down ? notes : [...notes].reverse();
          const duration = Math.max(length * stepLength - .015, .04);
          const velocity = chordLevels[char] ?? 1;
          chordOutputs.forEach((output, take) => {
            const offset = chordVoice.double ? take * .011 : 0;
            order.forEach((midi, i) => {
              if (chordVoice.spread && i % 2 !== take) return;
              const time = human(at(step) + offset + i * strum, .004);
              playTone(output, voice, midi, time, duration - i * strum, velocity * vary(.1));
            });
          });
        });

        if (arpVoice) {
          const shift = 12 * Math.round((groove.arp.center - average(notes)) / 12);
          const ladder = [...notes, ...notes.map(note => note + 12)].map(note => note + shift);
          hits(groove.arp.pattern).forEach(({ step, length }, i) => {
            const midi = ladder[groove.arp.order[i % groove.arp.order.length] % ladder.length];
            playTone(arpOutput, arpVoice, midi, human(at(step), .004), length * stepLength, .75 + .25 * random());
          });
        }
      }
    });

    return context.startRendering().then(rendered => loopBuffer(rendered, loopLength, normalize));
  }

  // Taita luupin yli soivat hännät alkuun, jotta toisto on saumaton, ja tasaa voimakkuus.
  function loopBuffer(rendered, loopLength, normalize) {
    const length = Math.round(loopLength * rendered.sampleRate);
    const channels = [];
    let peak = 0;
    let power = 0;
    for (let c = 0; c < rendered.numberOfChannels; c++) {
      const source = rendered.getChannelData(c);
      const data = source.slice(0, length);
      for (let i = length; i < source.length; i++) data[i % length] += source[i];
      for (const value of data) {
        peak = Math.max(peak, Math.abs(value));
        power += value * value;
      }
      channels.push(data);
    }
    const rms = Math.sqrt(power / (length * channels.length));
    const gain = normalize && rms > 0 ? Math.min(targetRMS / rms, peakLimit / peak) : 1;
    const loop = new AudioBuffer({ length, numberOfChannels: channels.length, sampleRate: rendered.sampleRate });
    channels.forEach((data, c) => {
      if (gain !== 1) data.forEach((value, i) => { data[i] = value * gain; });
      loop.copyToChannel(data, c);
    });
    return loop;
  }

  // Kirjan ääniesimerkit: tapahtumat sekunteina. Esimerkki ei toistu luuppina, joten sen
  // loppuun jätetään häntä, ja voimakkuus tasataan samaan tasoon kuin harjoitustaustoissa.
  function renderScore({ events, duration, room = 1.5, reverb = .14, sampleRate = 44100, seed = 7, gain }) {
    const context = new OfflineAudioContext(2, Math.ceil(duration * sampleRate), sampleRate);
    const studio = createStudio(context, { room, reverb, end: duration, random: seeded(seed) });
    const voiceFor = name => chordVoices[name] ?? bassVoices[name];
    const outputs = new Map();
    function output(name, pan) {
      const key = name + '|' + (pan ?? '');
      if (!outputs.has(key)) {
        const voice = voiceFor(name);
        outputs.set(key, bassVoices[name] ? studio.bassChannel(voice, 1.6) : studio.voiceChannel(voice, pan ?? voice.pan ?? 0));
      }
      return outputs.get(key);
    }
    events.forEach(event => {
      if (event.drum) studio[event.drum](event.time, event.velocity ?? 1, event.accent);
      else studio.playTone(output(event.voice, event.pan), voiceFor(event.voice), event.midi, event.time, event.length, event.velocity ?? 1);
    });
    return context.startRendering().then(rendered => finishBuffer(rendered, gain));
  }

  // Mittaa voimakkuus vain kuuluvista kohdista, jotta tauot eivät nosta hiljaisen esimerkin tasoa liikaa.
  // Jos kerroin annetaan, tasoa ei mitata, vaan käytetään aiemman renderöinnin kerrointa. Näin
  // esimerkiksi korvaharjoituksen kysymys ja ratkaisu soivat samalla voimakkuudella. Käytetty
  // kerroin tallentuu palautetun puskurin gain-ominaisuuteen.
  function finishBuffer(rendered, fixedGain) {
    const channels = Array.from({ length: rendered.numberOfChannels }, (_, c) => rendered.getChannelData(c));
    const block = Math.round(rendered.sampleRate * .05);
    const powers = [];
    let peak = 0;
    for (let start = 0; start < rendered.length; start += block) {
      let sum = 0;
      let count = 0;
      channels.forEach(data => {
        for (let i = start; i < Math.min(start + block, data.length); i++) {
          sum += data[i] * data[i];
          peak = Math.max(peak, Math.abs(data[i]));
          count++;
        }
      });
      powers.push(sum / count);
    }
    const loudest = Math.max(...powers);
    const rms = Math.sqrt(average(powers.filter(power => power > loudest * 1e-4)));
    const gain = Math.min(fixedGain ?? targetRMS / rms, peakLimit / peak);
    const fade = Math.round(rendered.sampleRate * .05);
    channels.forEach(data => data.forEach((value, i) => {
      const left = data.length - i;
      data[i] = value * gain * (left < fade ? left / fade : 1);
    }));
    rendered.gain = gain;
    return rendered;
  }

  return { presets, makeScore, renderLoop, renderScore };
})();
