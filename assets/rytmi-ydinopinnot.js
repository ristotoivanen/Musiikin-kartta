// Rytmi · Ydinopinnot (#116, hyväksytty suunnitteluprototyyppi v0.9)
//
// Neljän harjoituksen sivukohtainen toiminta: 01 Löydä pulssi ja ykkönen, 02 Hiljaisuus kuuluu
// rytmiin, 03 Sama musiikki, eri tuntuma ja 04 Valmistaudu seuraavaan osaan. Sivut muodostaa tools/oppimiskartta/rakenna.py, joka
// lataa tämän moduulin vain, kun sivulla on [data-rytmiharjoitus].
//
// Äänet ovat selaimessa Web Audiolla tuotettuja yksinkertaisia demoääniä (oskillaattorit ja kohina).
// Ne eivät ole äänitettyjä soitinääniä, eikä uusia äänitiedostoja ladata. Tämä pieni soitin on
// tarkoituksella erillään sivuston yhteisestä äänimoottorista eikä muuta sitä.
//
// Rakenne:
// - Puhtaat funktiot (exportit) kuvaavat rytmit tapahtumina. Samat tiedot piirtävät ruudukon ja
//   ajastavat äänet, joten näkyvä ja kuultava rytmi eivät voi erota (tests/rytmi-ydinopinnot.test.ts).
// - Toisto käynnistyy vain käyttäjän painalluksesta. Sivun piilottaminen tai sulkeminen pysäyttää
//   sen; paluu ei käynnistä ääntä itsestään.
// - Harjoituksen 03 versiovaihto (A/B/C) kesken toiston tapahtuu seuraavan tahdin alussa. Valittu
//   versio näkyy painikkeissa heti, mutta ruudukko näyttää aina tosiasiallisesti soivan version ja
//   vaihtuu samalla tahdin rajalla kuin ääni.

export const STEPS_PER_BAR = 8; // kahdeksasosat 4/4-tahdissa
export const LOOP_STEPS = 16; // kahden tahdin kierto (G-tahti, Em-tahti)
export const LOOKAHEAD = 0.16; // ajastusikkuna sekunteina
export const START_DELAY = 0.1;
export const TASKS = Object.freeze(['pulssi', 'hiljaisuus', 'tuntuma', 'osanvaihto']);
export const TRANSITIONS = Object.freeze({ A: 'A · D soi loppuun', B: 'B · Vaimenna D nelosella' });
export const SILENCE_MODES = Object.freeze({
  soi: 'A · Ääni jatkuu',
  vaimenna: 'B · Vaimenna',
  pois: 'C · Jätä isku pois'
});
export const GROOVES = Object.freeze({
  A: 'A · Painota 1 ja 3',
  B: 'B · Painota 2 ja 4',
  C: 'C · Iskujen välissä'
});
// Versio C: neljä komppiääntä tahdissa, osa iskujen välissä (1, 2:n ja, 3, 4:n ja).
const C_STEPS = Object.freeze([0, 3, 4, 7]);

export function tempoFor(task, example = 'rock') {
  if (task === 'pulssi') return example === 'soft' ? 108 : 96;
  return task === 'hiljaisuus' ? 72 : 96;
}

export function harmonyAt(loopStep) {
  return loopStep < STEPS_PER_BAR ? 'G' : 'Em';
}

/** D:n soinnin päättymiskohta B-versiossa on nelosiskun alku, ei uusi isku. */
export function transitionCells(mode) {
  return ['Soita D', 'Anna soida', 'Anna soida', mode === 'B' ? 'Vaimenna' : 'Anna soida'];
}

/** Harjoituksen 03 kitaran rytmi kahdeksasosina: soitetaanko, korostetaanko ja millä voimakkuudella. */
export function compLevel(mode, barStep) {
  const onBeat = barStep % 2 === 0;
  const beat = Math.floor(barStep / 2); // 0 = isku 1
  const played = mode === 'C' ? C_STEPS.includes(barStep) : onBeat;
  if (!played) return 0;
  if (mode === 'B') return beat === 1 || beat === 3 ? 0.18 : 0.065;
  if (mode === 'A') return beat === 0 || beat === 2 ? 0.18 : 0.065;
  return 0.12;
}

export function grooveCells(mode) {
  return Array.from({ length: STEPS_PER_BAR }, (_, step) => {
    const onBeat = step % 2 === 0;
    const beat = Math.floor(step / 2) + 1;
    const played = compLevel(mode, step) > 0;
    const emphasis = onBeat && ((mode === 'A' && (beat === 1 || beat === 3)) || (mode === 'B' && (beat === 2 || beat === 4)));
    return {
      label: onBeat ? String(beat) : 'ja',
      action: played ? (emphasis ? 'Korosta' : 'Soita') : 'Hiljaa',
      played,
      emphasis
    };
  });
}

/** Rumpu- ja bassotausta. Jatkuu kaikissa harjoituksissa koko toiston ajan. */
function backing(task, example, loopStep) {
  const barStep = loopStep % STEPS_PER_BAR;
  if (barStep % 2) return [{ type: 'noise', role: 'hi-hat', duration: 0.045, level: 0.025, highpass: 6000 }];
  const beat = barStep / 2;
  const bassFrequency = task === 'osanvaihto'
    ? (loopStep < STEPS_PER_BAR ? 73.42 : 98) // D2, G2: sama tausta molemmissa versioissa
    : (loopStep < STEPS_PER_BAR ? 98 : 82.4); // G2, E2
  const events = [];
  if (task === 'pulssi' && example === 'soft') {
    if (beat === 0 || beat === 2) events.push({ type: 'bass', role: 'basso', frequency: bassFrequency, level: 0.095 });
    if (beat === 1 || beat === 3) events.push({ type: 'noise', role: 'virveli', duration: 0.1, level: 0.065, highpass: 2000 });
    events.push({ type: 'tone', role: 'melodia', frequency: beat === 0 ? 440 : beat === 2 ? 392 : 330, duration: 0.19, level: 0.024, wave: 'sine' });
    return events;
  }
  if (beat === 0 || beat === 2) events.push({ type: 'kick', role: 'bassorumpu', level: beat === 0 ? 0.18 : 0.12 });
  if (beat === 1 || beat === 3) events.push({ type: 'noise', role: 'virveli', duration: 0.13, level: 0.09, highpass: 1800 });
  if (beat === 0 || beat === 2) events.push({ type: 'bass', role: 'basso', frequency: bassFrequency, level: 0.085 });
  events.push({ type: 'noise', role: 'hi-hat', duration: 0.035, level: 0.018, highpass: 6500 });
  return events;
}

/**
 * Yhden kahdeksasosan äänitapahtumat.
 * @param {string} task pulssi | hiljaisuus | tuntuma
 * @param {number} loopStep 0–15 kahden tahdin kierrossa
 * @param {{example?: string, revealed?: boolean, mode?: string}} options
 */
export function stepEvents(task, loopStep, { example = 'rock', revealed = false, mode = 'A', drumGap = false, taukoMode = 'soi' } = {}) {
  const barStep = loopStep % STEPS_PER_BAR;
  const onBeat = barStep % 2 === 0;
  const beat = Math.floor(barStep / 2);
  const harmony = harmonyAt(loopStep);
  const events = backing(task, example, loopStep).filter(event =>
    !(task === 'pulssi' && drumGap && loopStep >= STEPS_PER_BAR &&
      ['hi-hat', 'virveli', 'bassorumpu'].includes(event.role)));
  if (task === 'pulssi') {
    if (onBeat && beat === 0) events.push({ type: 'chord', role: 'harmonia', harmony, level: 0.075 });
    if (onBeat && revealed) events.push({ type: 'click', role: 'pulssivihje', strong: beat === 0 });
  } else if (task === 'hiljaisuus') {
    // Taputukset lakkaavat toisessa tahdissa, mutta musiikkitausta jatkuu.
    // A: sointi jatkuu; B: aktiivinen vaimennus nelosiskulla;
    // C: kolmosiskun jälkeen uutta ääntä ei lyödä nelosella, sointi silti jatkuu.
    if (onBeat && loopStep < STEPS_PER_BAR) events.push({ type: 'noise', role: 'taputus', duration: 0.095, level: 0.19, highpass: 1300 });
    const beatDuration = 60 / tempoFor('hiljaisuus');
    if (loopStep === STEPS_PER_BAR) {
      events.push({ type: 'held-chord', role: 'tauon-sointu', harmony: 'Em',
        duration: beatDuration * (taukoMode === 'vaimenna' ? 3 : taukoMode === 'pois' ? 2 : 4),
        level: 0.09 });
    } else if (taukoMode === 'pois' && loopStep === STEPS_PER_BAR + 4) {
      events.push({ type: 'held-chord', role: 'tauon-sointu', harmony: 'Em', duration: 2 * beatDuration, level: 0.09 });
    }
  } else if (task === 'tuntuma') {
    if (onBeat && beat === 0) events.push({ type: 'chord', role: 'harmonia', harmony, level: 0.045 });
    const level = compLevel(mode, barStep);
    if (level) events.push({ type: 'chord', role: 'komppi', harmony, level });
  } else if (task === 'osanvaihto' && loopStep % STEPS_PER_BAR === 0) {
    // D jatkuu A:ssa nelosiskun yli, B:ssä värähtely katkeaa juuri nelosella.
    // G alkaa seuraavan tahdin ykkösellä molemmissa. Taustaan ei puututa.
    const duration = (60 / tempoFor(task)) * (loopStep === 0 && mode === 'B' ? 3 : 4);
    events.push({ type: 'held-chord', role: 'osan-sointu', harmony: loopStep === 0 ? 'D' : 'G',
      duration, level: 0.09 });
  }
  return events;
}

/** Ruudukon solu, jota korostetaan: harjoituksessa 03 kahdeksasosat, muissa iskut. */
export function gridCell(task, loopStep) {
  const barStep = loopStep % STEPS_PER_BAR;
  if (task === 'tuntuma') return { bar: 0, index: barStep };
  return { bar: ['pulssi', 'hiljaisuus', 'osanvaihto'].includes(task) ? Math.floor(loopStep / STEPS_PER_BAR) : 0, index: Math.floor(barStep / 2) };
}

/** Toiston aikajana. Ei riipu selaimesta, joten ajastus ja versiovaihdot voidaan testata. */
export function createTransport({ task, tempo, begin, mode = 'A', drumGap = false, taukoMode = 'soi' }) {
  return {
    task, begin, mode, pending: null, step: 0, next: begin,
    drumGap, pendingDrumGap: null,
    taukoMode, pendingTaukoMode: null,
    stepDuration: 60 / tempo / 2,
    // Tosiasiallisesti soivan version muutokset: [{ time, step, mode }]
    switches: [{ time: begin, step: 0, mode }],
    // Rumpukatko ja soinnin vaimennus vaihtuvat vain kahden tahdin kierron rajalla.
    drumSwitches: [{ time: begin, step: 0, drumGap }],
    taukoSwitches: [{ time: begin, step: 0, taukoMode }]
  };
}

/** Pyydä uutta versiota. Se alkaa seuraavan, vielä ajastamattoman tahdin alussa. */
export function requestMode(transport, mode) {
  const current = transport.pending ?? transport.mode;
  if (mode === current) return false;
  transport.pending = mode === transport.mode ? null : mode;
  return true;
}

/** Pyydä A/B-rumpuversiota katkaisematta toistoa. Vaihto tapahtuu seuraavalla kierroksella. */
export function requestDrumGap(transport, drumGap) {
  if (transport.task !== 'pulssi') return false;
  if (drumGap === (transport.pendingDrumGap ?? transport.drumGap)) return false;
  transport.pendingDrumGap = drumGap === transport.drumGap ? null : drumGap;
  return true;
}

/** Valitse tauon A/B/C-äänimalli katkaisematta kuuntelua. */
export function requestTaukoMode(transport, mode) {
  if (transport.task !== 'hiljaisuus' || !Object.hasOwn(SILENCE_MODES, mode)) return false;
  if (mode === (transport.pendingTaukoMode ?? transport.taukoMode)) return false;
  transport.pendingTaukoMode = mode === transport.taukoMode ? null : mode;
  return true;
}

/** Ajasta kaikki kahdeksasosat, jotka alkavat ennen hetkeä horizon. */
export function scheduleUntil(transport, horizon, options = {}) {
  const scheduled = [];
  while (transport.next < horizon) {
    // Osanvaihdossa ero on D-tahdissa: uusi A/B alkaa vasta seuraavan D:n ykkösellä.
    const boundary = transport.task === 'osanvaihto' ? LOOP_STEPS : STEPS_PER_BAR;
    if (transport.step % boundary === 0 && transport.pending) {
      transport.mode = transport.pending;
      transport.pending = null;
      transport.switches.push({ time: transport.next, step: transport.step, mode: transport.mode });
    }
    // Vaihto ei saa muuttaa jo ajastetun tai kesken olevan kahden tahdin kierron rumpuja.
    if (transport.task === 'pulssi' && transport.step % LOOP_STEPS === 0 &&
        transport.pendingDrumGap !== null) {
      transport.drumGap = transport.pendingDrumGap;
      transport.pendingDrumGap = null;
      transport.drumSwitches.push({ time: transport.next, step: transport.step, drumGap: transport.drumGap });
    }
    // Tauko A/B/C vaikuttaa pitkään soivaan sointuun: ei kesken tahdin tai kierron vaihtoa.
    if (transport.task === 'hiljaisuus' && transport.step % LOOP_STEPS === 0 &&
        transport.pendingTaukoMode !== null) {
      transport.taukoMode = transport.pendingTaukoMode;
      transport.pendingTaukoMode = null;
      transport.taukoSwitches.push({ time: transport.next, step: transport.step, taukoMode: transport.taukoMode });
    }
    const loopStep = transport.step % LOOP_STEPS;
    const drumGap = transport.task === 'pulssi' ? transport.drumGap : options.drumGap;
    const taukoMode = transport.task === 'hiljaisuus' ? transport.taukoMode : options.taukoMode;
    for (const event of stepEvents(transport.task, loopStep, { ...options, mode: transport.mode, drumGap, taukoMode })) {
      scheduled.push({ ...event, time: transport.next, step: transport.step });
    }
    transport.step++;
    transport.next = transport.begin + transport.step * transport.stepDuration;
  }
  return scheduled;
}

/** Mikä kahdeksasosa ja versio kuuluu hetkellä time. Ennen alkua null. */
export function positionAt(transport, time) {
  if (time < transport.begin) return null;
  // Pieni toleranssi: liukulukuvirhe ei saa siirtää korostusta edelliseen soluun tahdin rajalla.
  const step = Math.floor((time - transport.begin) / transport.stepDuration + 1e-9);
  let mode = transport.switches[0].mode;
  for (const change of transport.switches) {
    if (change.step <= step) mode = change.mode;
  }
  let drumGap = transport.drumSwitches[0].drumGap;
  for (const change of transport.drumSwitches) {
    if (change.step <= step) drumGap = change.drumGap;
  }
  let taukoMode = transport.taukoSwitches[0].taukoMode;
  for (const change of transport.taukoSwitches) {
    if (change.step <= step) taukoMode = change.taukoMode;
  }
  return { step, loopStep: step % LOOP_STEPS, mode, drumGap, taukoMode,
    cell: gridCell(transport.task, step % LOOP_STEPS) };
}

/**
 * #163: piilotettuna vain ylemmän tahtirivin ensimmäinen ruutu välähtää
 * jokaisella neljäsosaiskulla (1, 2, 3, 4). Alempi rivi ei välähdä lainkaan.
 * Paljastettuna korostus seuraa kaikkia neljää erillistä ruutua.
 * Kello on sama ulostuloviiveellä korjattu AudioContext-aika kuin muissa ruudukoissa.
 * Reduced motion: ei nopeaa välähdystä, ensimmäinen ruutu näkyy koko iskun ajan.
 */
export function pulseCellAt(transport, time, revealed, reducedMotion = false) {
  const position = positionAt(transport, time);
  if (!position) return null;
  if (revealed) return position.cell;
  const beatStartStep = position.step - position.step % 2;
  const elapsed = time - (transport.begin + beatStartStep * transport.stepDuration);
  const visibleFor = reducedMotion
    ? 2 * transport.stepDuration
    : Math.min(0.18, transport.stepDuration);
  return elapsed < visibleFor ? { bar: 0, index: 0 } : null;
}

// ---------------------------------------------------------------------------------------------
// Selainosa
// ---------------------------------------------------------------------------------------------

const MESSAGES = {
  ready: 'Valmiina.',
  starting: 'Ääni käynnistyy…',
  playing: 'Malli soi. Kokeile halutessasi perässä.',
  stopped: 'Pysäytetty.',
  failed: 'Ääni ei käynnistynyt. Kokeile uudestaan.',
  unsupported: 'Tämä selain ei pysty soittamaan ääniesimerkkiä. Voit tehdä harjoituksen ruudukon ja ohjeen avulla.',
  interrupted: 'Toisto keskeytyi. Voit käynnistää sen uudelleen.'
};

let audio = null;
let noiseBuffer = null;
const stateListeners = new Set();

function audioContext() {
  const AudioContextClass = globalThis.AudioContext || globalThis.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audio || audio.state === 'closed') {
    // iPhonen äänetön tila mykistää Web Audion, ellei istunto ole toistotyyppiä (PR #130, 20.11.2026).
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* ei tukea */ }
    audio = new AudioContextClass();
    audio.addEventListener?.('statechange', () => { for (const listener of stateListeners) listener(); });
    noiseBuffer = audio.createBuffer(1, Math.ceil(audio.sampleRate * 0.22), audio.sampleRate);
    const samples = noiseBuffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
  }
  return audio;
}

function envelope(bus, time, duration, level) {
  const gain = audio.createGain();
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(Math.max(0.0002, level), time + 0.007);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  gain.connect(bus);
  return gain;
}

function tone(bus, time, frequency, duration, level, wave = 'sine') {
  const oscillator = audio.createOscillator();
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, time);
  oscillator.connect(envelope(bus, time, duration, level));
  oscillator.start(time);
  oscillator.stop(time + duration + 0.02);
}

const CHORDS = { G: [196, 246.94, 293.66], Em: [164.81, 196, 246.94], D: [146.83, 185, 220] };

function heldChord(bus, time, frequencies, duration, level) {
  // Tasaisesti soiva sointu: A:n loppu ja B:n nelosiskulle ajoitettu vaimennus
  // kuuluvat oikeasti, eivät ole vain vaihtuvaa tekstiä.
  frequencies.forEach((frequency, index) => {
    const oscillator = audio.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, time);
    const gain = audio.createGain();
    const amplitude = level / (index === 0 ? 3 : 4);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(amplitude, time + 0.02);
    gain.gain.setValueAtTime(amplitude, time + duration - 0.04);
    gain.gain.linearRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(gain);
    gain.connect(bus);
    oscillator.start(time);
    oscillator.stop(time + duration + 0.01);
  });
}

function play(bus, event) {
  const { time } = event;
  switch (event.type) {
    case 'kick': {
      const oscillator = audio.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(130, time);
      oscillator.frequency.exponentialRampToValueAtTime(48, time + 0.14);
      oscillator.connect(envelope(bus, time, 0.18, event.level));
      oscillator.start(time);
      oscillator.stop(time + 0.19);
      break;
    }
    case 'noise': {
      const source = audio.createBufferSource();
      source.buffer = noiseBuffer;
      const filter = audio.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = event.highpass;
      source.connect(filter);
      filter.connect(envelope(bus, time, event.duration, event.level));
      source.start(time);
      source.stop(time + Math.min(0.2, event.duration + 0.02));
      break;
    }
    case 'bass': tone(bus, time, event.frequency, 0.33, event.level, 'triangle'); break;
    case 'held-chord': heldChord(bus, time, CHORDS[event.harmony], event.duration, event.level); break;
    case 'tone': tone(bus, time, event.frequency, event.duration, event.level, event.wave); break;
    case 'click': tone(bus, time, event.strong ? 950 : 730, 0.065, event.strong ? 0.09 : 0.05); break;
    case 'chord':
      // Yksinkertainen kolmen sävelen synteesi, ei äänitetty kitara.
      CHORDS[event.harmony].forEach((frequency, i) =>
        tone(bus, time + i * 0.011, frequency, 0.22, event.level / (i === 0 ? 1.7 : 2.4), 'triangle'));
      break;
    default: break;
  }
}

function setPressed(buttons, isPressed) {
  for (const button of buttons) button.setAttribute('aria-pressed', String(isPressed(button)));
}

function setupExercise(root) {
  const task = root.dataset.rytmiharjoitus;
  if (!TASKS.includes(task)) return;
  const button = root.querySelector('[data-rytmi-toisto]');
  const status = root.querySelector('[data-rytmi-tila]');
  const exampleButtons = [...root.querySelectorAll('[data-esimerkki]')];
  const drumButtons = [...root.querySelectorAll('[data-rumpumalli]')];
  const silenceButtons = [...root.querySelectorAll('[data-tauko-mode]')];
  const grooveButtons = [...root.querySelectorAll('[data-versio]')];
  const reveal = root.querySelector('[data-rytmi-vihje]');
  const grooveGrid = root.querySelector('[data-rytmi-ruudukko="tuntuma"]');
  const isTransition = task === 'osanvaihto';
  const versionNames = isTransition ? TRANSITIONS : GROOVES;
  const reducedMotion = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
  const state = { example: 'rock', revealed: false, mode: 'A', drumGap: false, taukoMode: 'soi' };
  // Erillinen ruudunlukijan tilaviesti ei muuta soiton tilatekstin korkeutta eikä siirrä ruudukkoa.
  const pulseStatus = task === 'pulssi' ? document.createElement('span') : null;
  if (pulseStatus) {
    pulseStatus.className = 'rytmi-pulssi-status';
    pulseStatus.setAttribute('role', 'status');
    pulseStatus.setAttribute('aria-live', 'polite');
    root.append(pulseStatus);
  }
  let session = null;
  let starting = false;
  let token = 0;
  let frame = 0;
  let shownMode = null;

  for (const element of root.querySelectorAll('[data-rytmi-ohjaimet]')) element.hidden = false;
  const supported = Boolean(globalThis.AudioContext || globalThis.webkitAudioContext);
  status.textContent = supported ? MESSAGES.ready : MESSAGES.unsupported;
  button.disabled = !supported;

  function setButton(playing) {
    button.dataset.tila = playing ? 'soi' : 'valmis';
    button.innerHTML = playing
      ? '<span aria-hidden="true">■</span> Pysäytä'
      : '<span aria-hidden="true">▶</span> Kuuntele';
  }

  function cells(bar) {
    return [...root.querySelectorAll(`[data-rytmi-isku][data-tahti="${bar}"]`)];
  }

  function clearActive() {
    for (const cell of root.querySelectorAll('.rytmi-isku.is-active')) cell.classList.remove('is-active');
  }

  function drawGroove(mode) {
    if (!grooveGrid || mode === shownMode) return;
    shownMode = mode;
    grooveCells(mode).forEach((cell, index) => {
      const element = cells(0)[index];
      element.querySelector('.rytmi-isku-nimi').textContent = cell.label;
      element.querySelector('.rytmi-isku-teko').textContent = cell.action;
      element.classList.toggle('is-silent', !cell.played);
      element.classList.toggle('is-emphasis', cell.emphasis);
    });
    grooveGrid.setAttribute('aria-label', `Kitaran rytmi, versio ${mode}`);
    grooveGrid.dataset.versio = mode;
  }

  function drawTransition(mode) {
    if (!isTransition || mode === shownMode) return;
    shownMode = mode;
    transitionCells(mode).forEach((action, index) => {
      const cell = cells(0)[index];
      cell.querySelector('.rytmi-isku-teko').textContent = action;
      cell.classList.toggle('is-silent', index === 3 && mode === 'B');
    });
  }

  function drawSilence(mode = state.taukoMode) {
    if (task !== 'hiljaisuus') return;
    const secondBar = cells(1);
    const actions = ['Soita Em', 'Anna soida', mode === 'pois' ? 'Uusi isku' : 'Anna soida',
      mode === 'vaimenna' ? 'Vaimenna' : mode === 'pois' ? 'Ei uutta iskua' : 'Ääni jatkuu'];
    secondBar.forEach((cell, index) => {
      cell.querySelector('.rytmi-isku-teko').textContent = actions[index];
      cell.classList.toggle('is-silent', index === 3 && mode === 'vaimenna');
    });
  }

  function setDrumCaption(drumGap) {
    const caption = root.querySelector('[data-rummut-tahti]');
    if (caption) caption.textContent = drumGap
      ? 'Tahti 2 · Rummut vaikenevat, basso ja harmonia jatkavat'
      : 'Tahti 2 · Rummut kuuluvat edelleen';
  }

  function drawReveal() {
    if (task !== 'pulssi') return;
    [0, 1].forEach(bar => {
      cells(bar).forEach((element, index) => {
        const name = element.querySelector('.rytmi-isku-nimi');
        const action = element.querySelector('.rytmi-isku-teko');
        // visibility ei poista elementtejä asettelusta: kaikki 4 ruutua pysyvät saman kokoisina.
        name.textContent = state.revealed ? String(index + 1) : '•';
        name.style.visibility = state.revealed ? 'visible' : 'hidden';
        action.style.visibility = state.revealed ? 'visible' : 'hidden';
      });
    });
    // Tyhjät ruudut eivät ole ruudunlukijalle kahdeksan nimetöntä listakohtaa.
    for (const grid of root.querySelectorAll('.rytmi-ruudukko')) {
      grid.setAttribute('aria-hidden', String(!state.revealed));
    }
    clearActive();
    reveal.textContent = state.revealed ? 'Piilota pulssivihje' : 'Paljasta pulssi';
  }

  function draw() {
    frame = 0;
    if (!session) return;
    // Näytä se, mikä kuuluu nyt: ajastettu ääni tulee kaiuttimesta ulostuloviiveen jälkeen.
    const now = audio.currentTime - (audio.outputLatency || 0);
    const position = positionAt(session.transport, now);
    if (position) {
      drawGroove(position.mode);
      drawTransition(position.mode);
      const visualCell = task === 'pulssi'
        ? pulseCellAt(session.transport, now, state.revealed, Boolean(reducedMotion?.matches))
        : position.cell;
      const target = visualCell ? cells(visualCell.bar)[visualCell.index] : null;
      if (root.querySelector('.rytmi-isku.is-active') !== target) {
        clearActive();
        target?.classList.add('is-active');
      }
      if (task === 'hiljaisuus' && session.announcedTaukoMode !== position.taukoMode) {
        session.announcedTaukoMode = position.taukoMode;
        drawSilence(position.taukoMode);
        status.textContent = `Nyt soi ${SILENCE_MODES[position.taukoMode]}.`;
      }
      if (task === 'pulssi' && session.announcedDrumGap !== position.drumGap) {
        session.announcedDrumGap = position.drumGap;
        setDrumCaption(position.drumGap);
        status.textContent = position.drumGap
          ? 'Nyt soi B · Rummut tauolla.'
          : 'Nyt soi A · Rummut koko ajan.';
      }
      if ((task === 'tuntuma' || isTransition) && session.announced !== position.mode) {
        session.announced = position.mode;
        status.textContent = `Nyt soi ${versionNames[position.mode]}.`;
      }
    }
    frame = requestAnimationFrame(draw);
  }

  function stop(message = MESSAGES.stopped) {
    token++;
    const active = Boolean(session || starting);
    starting = false;
    if (session) {
      clearInterval(session.timer);
      const { bus } = session;
      try {
        const time = audio.currentTime;
        bus.gain.cancelScheduledValues(time);
        bus.gain.setValueAtTime(Math.max(0.0001, bus.gain.value), time);
        bus.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
        setTimeout(() => { try { bus.disconnect(); } catch { /* jo irti */ } }, 700);
      } catch { /* konteksti suljettu */ }
      session = null;
    }
    if (active) status.textContent = message;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    clearActive();
    button.disabled = !supported;
    button.removeAttribute('aria-busy');
    setButton(false);
    drawGroove(state.mode);
    drawTransition(state.mode);
    drawSilence(state.taukoMode);
    if (task === 'pulssi') setDrumCaption(state.drumGap);
  }

  async function start() {
    if (session || starting) return;
    const context = audioContext();
    if (!context) {
      status.textContent = MESSAGES.unsupported;
      return;
    }
    starting = true;
    const current = ++token;
    // Painikkeen hetkellinen disabled=true pudottaa näppäimistöfokuksen Chromessa.
    // Tuplakäynnistys estetään starting-tilalla, jolloin Enter voi myös pysäyttää.
    button.setAttribute('aria-busy', 'true');
    status.textContent = MESSAGES.starting;
    try {
      await context.resume();
      if (context.state !== 'running') throw new Error(context.state);
    } catch {
      if (current === token) {
        starting = false;
        button.removeAttribute('aria-busy');
        setButton(false);
        status.textContent = MESSAGES.failed;
      }
      return;
    }
    if (current !== token || !button.isConnected) return;
    starting = false;
    button.removeAttribute('aria-busy');
    const bus = context.createGain();
    bus.gain.value = 0.8;
    bus.connect(context.destination);
    const transport = createTransport({
      task, tempo: tempoFor(task, state.example), begin: context.currentTime + START_DELAY,
      mode: state.mode, drumGap: state.drumGap, taukoMode: state.taukoMode
    });
    const tick = () => {
      if (session?.transport !== transport) return;
      for (const event of scheduleUntil(transport, context.currentTime + LOOKAHEAD, state)) play(bus, event);
    };
    session = { transport, bus, timer: setInterval(tick, 25),
      announced: state.mode, announcedDrumGap: state.drumGap, announcedTaukoMode: state.taukoMode };
    tick();
    setButton(true);
    status.textContent = MESSAGES.playing;
    frame = requestAnimationFrame(draw);
  }

  button.addEventListener('click', () => (session ? stop() : start()));

  for (const choice of exampleButtons) {
    choice.addEventListener('click', () => {
      if (state.example === choice.dataset.esimerkki) return;
      state.example = choice.dataset.esimerkki;
      setPressed(exampleButtons, other => other === choice);
      // Uusi esimerkki alkaa alusta omalla tempollaan.
      if (session) {
        stop();
        start();
      }
    });
  }

  for (const choice of drumButtons) {
    choice.addEventListener('click', () => {
      const drumGap = choice.dataset.rumpumalli === 'katko';
      if (drumGap === state.drumGap) return;
      state.drumGap = drumGap;
      setPressed(drumButtons, button => (button.dataset.rumpumalli === 'katko') === drumGap);
      if (!session) {
        setDrumCaption(drumGap);
        return;
      }
      requestDrumGap(session.transport, drumGap);
      // Painike ilmaisee valinnan heti, mutta selitys seuraa tosiasiallisesti soivaa versiota.
      status.textContent = session.transport.pendingDrumGap !== null
        ? `Valittu ${drumGap ? 'B · Rummut tauolla' : 'A · Rummut koko ajan'}. Rummut vaihtuvat seuraavan kahden tahdin kierron alussa.`
        : `Nyt soi ${session.announcedDrumGap ? 'B · Rummut tauolla' : 'A · Rummut koko ajan'}.`;
    });
  }

  for (const choice of silenceButtons) {
    choice.addEventListener('click', () => {
      const mode = choice.dataset.taukoMode;
      if (mode === state.taukoMode) return;
      state.taukoMode = mode;
      setPressed(silenceButtons, button => button.dataset.taukoMode === mode);
      if (!session) {
        drawSilence();
        return;
      }
      requestTaukoMode(session.transport, mode);
      // Valinta näkyy heti, mutta soiva esimerkki ja ruudukko vaihtuvat yhdessä.
      status.textContent = session.transport.pendingTaukoMode !== null
        ? `Valittu ${SILENCE_MODES[mode]}. Esimerkki vaihtuu seuraavan kahden tahdin kierron alussa.`
        : `Nyt soi ${SILENCE_MODES[session.announcedTaukoMode]}.`;
    });
  }

  reveal?.addEventListener('click', () => {
    state.revealed = !state.revealed;
    drawReveal();
    // Tilasta ilmoitetaan vain käyttäjän valinnalla, ei jokaisesta animaatioruudusta.
    pulseStatus.textContent = state.revealed
      ? 'Pulssi paljastettu. Iskut 1–4 korostuvat vuorollaan molemmissa tahdeissa.'
      : 'Pulssi piilotettu. Vain ylemmän rivin ensimmäinen ruutu välähtää jokaisella iskulla.';
  });

  for (const choice of grooveButtons) {
    choice.addEventListener('click', () => {
      const mode = choice.dataset.versio;
      state.mode = mode;
      setPressed(grooveButtons, other => other.dataset.versio === mode);
      if (!session) {
        drawGroove(mode);
        drawTransition(mode);
        return;
      }
      requestMode(session.transport, mode);
      // Valittu versio ei vielä soi: ruudukko ja ilmoitus "Nyt soi" vaihtuvat vasta tahdin rajalla.
      status.textContent = session.transport.pending
        ? `Valittu ${versionNames[mode]}. Versio vaihtuu ${isTransition ? 'seuraavan D–G-kierron' : 'seuraavan tahdin'} alussa.`
        : `Nyt soi ${versionNames[session.announced]}.`;
    });
  }

  // Lukitus tai taustalle siirtyminen voi pysäyttää äänen (erityisesti iPhone). Näytä tila oikein
  // äläkä jatka toistoa itsestään.
  stateListeners.add(() => { if (session && audio.state !== 'running') stop(MESSAGES.interrupted); });
  const stopHidden = () => { if (document.hidden) stop(); };
  document.addEventListener('visibilitychange', stopHidden);
  window.addEventListener('pagehide', () => stop());
  // Aihesivun sisäinen oppitunti voi sulkeutua kesken soiton.
  const inlineCard = root.closest('details.study-inline');
  inlineCard?.addEventListener('toggle', () => {
    if (!inlineCard.open) stop();
  });

  setButton(false);
  if (reveal) drawReveal();
  if (task === 'pulssi') setDrumCaption(state.drumGap);
  drawGroove(state.mode);
  drawTransition(state.mode);
  drawSilence();
}

if (typeof document !== 'undefined') {
  for (const root of document.querySelectorAll('[data-rytmiharjoitus]')) setupExercise(root);
}
