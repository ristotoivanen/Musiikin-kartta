// Kielinäyte valitaan kielen ja nauhan mukaan, myös kun kaksi kieltä soittaa saman MIDI-sävelen.
const strings = ['LowE', 'A', 'D', 'G', 'B', 'HighE'];
const tuning = [40, 45, 50, 55, 59, 64];
const pitches = ['C', 'Cs', 'D', 'Ds', 'E', 'F', 'Fs', 'G', 'Gs', 'A', 'As', 'B'];
const beat = 60 / 96;
const pairGap = 0.8;
const strumGap = 1.55;

export function guitarNote(string, fret, at = 0, duration = 0.6, gain = 0.45) {
  const midi = tuning[string] + fret;
  const note = pitches[midi % 12] + (Math.floor(midi / 12) - 1);
  return {
    sample: `INSGuitarSteel_String${strings[string]}_Vel02_${note}_01`,
    midi, at, duration, gain,
  };
}

export function strum(frets, at = 0, duration = 1.36, gain = 0.21) {
  let time = at;
  const notes = [];
  for (const [string, fret] of [...frets].entries()) {
    if (fret === 'x') continue;
    notes.push(guitarNote(string, Number(fret), time, duration, gain));
    time += 0.024;
  }
  return notes;
}

export function chordSequence(names, voicings) {
  const markers = names.map((value, index) => ({ value, at: index * strumGap, duration: 1.44 }));
  const events = markers.flatMap(({ value, at }) => strum(voicings[value], at));
  return { events, markers };
}

export function routePlan(origin) {
  const frets = origin === 'C' ? [3, 4, 5, 4, 3] : [5, 4, 3, 4, 5];
  const markers = frets.map((value, index) => ({ value, at: index * 0.55, duration: 0.48 }));
  return { events: markers.map(({ value, at, duration }) => guitarNote(1, value, at, duration)), markers };
}

export function intervalPair(string, fret, together = false, at = 0) {
  return together
    ? [guitarNote(string, 0, at, 1, 0.32), guitarNote(string, fret, at, 1, 0.32)]
    : [guitarNote(string, 0, at, 0.65), guitarNote(string, fret, at + pairGap, 0.75)];
}

export function intervalPlan(fret, together = false) {
  const events = intervalPair(2, fret, together);
  const markers = events.map(({ at, duration }, index) => ({ value: index ? fret : 0, at, duration }));
  if (together) return { events, markers: [{ value: [0, fret], at: 0, duration: 1 }] };
  return { events, markers };
}

export function transferPlan(fret) {
  return { events: [...intervalPair(2, 3), ...intervalPair(1, fret, false, 1.8)] };
}

function backing() {
  const events = [];
  for (let step = 0; step < 8; step++) {
    const at = step * beat;
    const downbeat = step % 2 === 0;
    events.push({ voice: downbeat ? 'kick' : 'snare', at, duration: 0.16, gain: 0.19 });
    events.push({ voice: 'hat', at: at + beat / 2, duration: 0.11, gain: 0.08 });
    if (downbeat) events.push({ voice: 'bass', midi: 38, at, duration: 0.52, gain: 0.21 });
  }
  return events;
}

export function melodyPlan(fret, dVoicing) {
  const notes = [3, fret, 5].map((position, index) => guitarNote(1, position, (index + 1) * beat, 0.54, 0.49));
  const ending = strum(dVoicing, 4 * beat, 1.2, 0.17);
  const markers = notes.map(({ at, duration }, value) => ({ at, duration, value }));
  markers.push({ at: 4 * beat, duration: 1.28, value: 'D' });
  return { events: [...backing(), ...notes, ...ending], markers, duration: 8 * beat };
}

export function riffPlan(fret) {
  const notes = [0, fret, 7, 0, 0, fret, 7, 0].map((position, index) => guitarNote(2, position, index * beat, 0.53, 0.49));
  const markers = notes.map(({ at, duration }, index) => ({ at, duration, value: index % 4 }));
  return { events: [...backing(), ...notes], markers, duration: 8 * beat };
}

function synthesize(ctx, { voice, midi = 0, duration }) {
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * duration), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  const frequency = 440 * 2 ** ((midi - 69) / 12);
  let seed = 123456;
  for (let i = 0; i < data.length; i++) {
    const t = i / ctx.sampleRate;
    let value = 0;
    if (voice === 'kick') {
      const phase = 48 * t + 40 * (1 - Math.exp(-30 * t)) / 30;
      value = Math.sin(2 * Math.PI * phase) * Math.exp(-19 * t) * 0.7;
    } else if (voice === 'bass') {
      for (let harmonic = 1; harmonic <= 7; harmonic++) {
        value += Math.sin(2 * Math.PI * frequency * harmonic * t + 0.13 * harmonic)
          * Math.exp(-t * (2.7 + 0.6 * harmonic)) / harmonic ** 1.2;
      }
      value *= 0.45;
    } else {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      value = (seed / 4294967296 * 2 - 1) * Math.exp(-t * (voice === 'hat' ? 38 : 24)) * 0.36;
      if (voice === 'snare') value += 0.14 * Math.sin(2 * Math.PI * 180 * t) * Math.exp(-32 * t);
    }
    data[i] = value;
  }
  return buffer;
}

const interrupted = 'Kuuntelu keskeytyi. Voit kuunnella uudelleen.';

export function createPlayer() {
  const base = new URL('./audio/soinnut/', import.meta.url);
  const formats = new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
  const buffers = new Map();
  let context;
  let session;

  async function bufferFor(ctx, event, signal) {
    const key = event.sample ?? event.voice;
    if (buffers.has(key)) return buffers.get(key);
    if (!event.sample) {
      const buffer = synthesize(ctx, event);
      buffers.set(key, buffer);
      return buffer;
    }
    for (const format of formats) {
      try {
        const response = await fetch(new URL(`${key}.${format}`, base), { signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.arrayBuffer();
        signal.throwIfAborted();
        // Vanhempi Safari tukee decodeAudioDatasta vain takaisinkutsumuotoa.
        const buffer = await new Promise((resolve, reject) => {
          ctx.decodeAudioData(data, resolve, reject)?.then?.(resolve, reject);
        });
        signal.throwIfAborted();
        buffers.set(key, buffer);
        return buffer;
      } catch (error) {
        if (signal.aborted || format === formats.at(-1)) throw error;
      }
    }
  }

  function stop(message = 'Pysäytetty.') {
    const previous = session;
    if (!previous) return;
    session = undefined;
    clearTimeout(previous.timeout);
    cancelAnimationFrame(previous.frame);
    previous.abort.abort();
    delete previous.button.dataset.playing;
    previous.highlight(-1);
    previous.status.textContent = message;
    if (!previous.bus) return;
    // A scheduled source can safely end on its own once its output is disconnected.
    previous.bus.disconnect();
    for (const source of previous.sources) source.stop();
  }

  function schedule(ctx, own, buffer, event) {
    const at = own.start + event.at;
    const duration = Math.min(event.duration, buffer.duration);
    const end = at + duration;
    const source = ctx.createBufferSource();
    const envelope = ctx.createGain();
    source.buffer = buffer;
    envelope.gain.setValueAtTime(0, at);
    envelope.gain.linearRampToValueAtTime(event.gain, at + 0.006);
    envelope.gain.setValueAtTime(event.gain, end - Math.min(0.13, duration / 3));
    envelope.gain.linearRampToValueAtTime(0, end);
    source.connect(envelope).connect(own.bus);
    source.onended = () => {
      own.sources.delete(source);
      source.disconnect();
      envelope.disconnect();
    };
    source.start(at);
    own.sources.add(source);
    source.stop(end);
  }

  async function play(button, plan, highlight = () => {}) {
    stop('');
    const status = button.closest('[data-aaniosio]').querySelector('[data-aanitila]');
    const own = { button, status, highlight, abort: new AbortController(), sources: new Set() };
    session = own;
    status.textContent = 'Valmistellaan ääntä…';
    own.timeout = setTimeout(() => {
      if (session === own) stop('Äänen valmistelu kesti liian kauan. Kokeile uudelleen.');
    }, 12000);

    let ctx;
    try {
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* Safari-lisäominaisuus */ }
      if (!context || context.state === 'closed') {
        const Audio = window.AudioContext || window.webkitAudioContext;
        context = new Audio();
        context.addEventListener('statechange', event => {
          if (session?.bus && event.target === context && context.state !== 'running') stop(interrupted);
        });
      }
      ctx = context;
      await ctx.resume();
      if (ctx.state !== 'running') throw new Error('AudioContext');
    } catch {
      if (session === own) stop('Ääntä ei saatu käynnistettyä. Kokeile uudelleen.');
      return;
    }
    if (session !== own) return;

    try {
      const { events, markers = [], duration = Math.max(...events.map(event => event.at + event.duration)) } = plan;
      const unique = new Map(events.map(event => [event.sample ?? event.voice, event]));
      const loaded = new Map(await Promise.all([...unique].map(async ([key, event]) =>
        [key, await bufferFor(ctx, event, own.abort.signal)])));
      if (session !== own) return;
      if (document.hidden || ctx.state !== 'running' || button.closest('details:not([open])')) {
        stop(interrupted);
        return;
      }
      clearTimeout(own.timeout);
      own.bus = ctx.createGain();
      own.bus.gain.value = 0.8;
      own.bus.connect(ctx.destination);
      own.start = ctx.currentTime + 0.075;
      for (const event of events) schedule(ctx, own, loaded.get(event.sample ?? event.voice), event);
      button.dataset.playing = '';
      status.textContent = 'Kuuntelu käynnissä.';
      let previous = -1;
      function followClock() {
        if (session !== own) return;
        const time = ctx.currentTime - own.start;
        if (time >= duration) {
          stop('Esimerkki päättyi. Voit kuunnella uudelleen.');
          return;
        }
        const index = markers.findIndex(marker => time >= marker.at && time < marker.at + marker.duration);
        if (index !== previous) {
          previous = index;
          highlight(index, markers[index]?.value);
        }
        own.frame = requestAnimationFrame(followClock);
      }
      followClock();
    } catch {
      if (session === own) stop('Ääniä ei voitu ladata tai soittaa. Kokeile uudelleen.');
    }
  }

  window.addEventListener('pagehide', () => stop(interrupted));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(interrupted);
  });
  document.addEventListener('toggle', ({ target }) => {
    if (session && target instanceof HTMLDetailsElement && !target.open && target.contains(session.button)) {
      stop(interrupted);
    }
  }, true);
  return { play, stop };
}
