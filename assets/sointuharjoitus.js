// Soinnut ja harmonia: Miten sointu muodostuu? (#116)
//
// Kolmen harjoituksen sivukohtainen toiminta: kuuntele G–B–D peräkkäin ja yhdessä, rakenna
// G-duurisointu asteikosta ja kuuntele koko G-ote. Sivut muodostaa tools/oppimiskartta/rakenna.py,
// joka lataa tämän tiedoston vain, kun sivulla on [data-sointuharjoitus].
//
// Äänet ovat oikean teräskielisen kitaran näytteitä hakemistosta assets/audio/soinnut/
// (Meta Open Sound · Meta Steel Guitar, CC0 1.0; ks. LAHTEET.md). Tämä pieni Web Audio -soitin
// on tarkoituksella erillään sivuston yhteisestä äänimoottorista eikä muuta sitä.
//
// Toisto käynnistyy vain käyttäjän painalluksesta. Uusi esimerkki katkaisee edellisen; lyhyillä
// esimerkeillä ei ole erillistä Pysäytä-painiketta. Ääni pysähtyy, kun sivu piilotetaan tai suljetaan.
(() => {
  'use strict';
  const sections = [...document.querySelectorAll('[data-sointuharjoitus]')];
  if (!sections.length) return;
  const base = new URL('audio/soinnut/', document.currentScript?.src ?? location.href);

  // Pedagogiset kestot sekunteina (pilotin käyttäjäarvio 20.11.2026): sävelille aikaa erottua,
  // yhteissoinnille aikaa soida. Kuuden kielen ote soi kielestä toiseen 45 ms:n välein.
  const TIMING = Object.freeze({
    noteLength: 1.05, noteInterval: 1.18, triadLength: 3.10, chordLength: 3.60,
    stringInterval: 0.045, startDelay: 0.10
  });
  // G-ote 320003 paksusta E-kielestä ohueen e-kieleen.
  const STRINGS = [
    { string: '6. E', pitch: 'G2', file: 'INSGuitarSteel_StringLowE_Vel02_G2_01' },
    { string: '5. A', pitch: 'B2', file: 'INSGuitarSteel_StringA_Vel02_B2_01' },
    { string: '4. D', pitch: 'D3', file: 'INSGuitarSteel_StringD_Vel02_D3_01' },
    { string: '3. G', pitch: 'G3', file: 'INSGuitarSteel_StringG_Vel02_G3_01' },
    { string: '2. B', pitch: 'B3', file: 'INSGuitarSteel_StringB_Vel02_B3_01' },
    { string: '1. e', pitch: 'G4', file: 'INSGuitarSteel_StringHighE_Vel02_G4_01' }
  ];
  const EXAMPLES = {
    perakkain: { notes: STRINGS.slice(0, 3), playing: 'G, B ja D soivat peräkkäin.' },
    yhdessa: { notes: STRINGS.slice(0, 3), playing: 'G, B ja D soivat yhdessä.' },
    ote: { notes: STRINGS, playing: 'Kuulit G-soinnun kaikki kuusi kieltä.' }
  };
  const READY = {
    kuuntele: 'Valitse kuuntelutapa. Näytteet on äänitetty oikeasta akustisesta kitarasta.',
    soita: 'Kuuntele, miltä kaikki kuusi kieltä kuulostavat yhdessä. Ääni on oikeasta kitaranäytteestä.',
    rakenna: 'Voit valita kolme säveltä haluamassasi järjestyksessä.'
  };

  // AAC (M4A) ensin, jos selain ilmoittaa tukevansa sitä; muuten OGG Vorbis. Toinen muoto on varalla,
  // jos ensimmäisen lataus tai purku epäonnistuu.
  const formats = (() => {
    try {
      return new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
    } catch {
      return ['m4a', 'ogg'];
    }
  })();

  let audio = null;
  let sources = [];
  let timer = 0;
  let version = 0;
  let loading = null;
  const buffers = new Map();

  function context() {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audio || audio.state === 'closed') audio = new AudioContextClass();
    return audio;
  }

  function stop() {
    clearTimeout(timer);
    timer = 0;
    loading?.abort();
    loading = null;
    for (const source of sources) {
      try { source.stop(); } catch { /* jo pysähtynyt */ }
    }
    sources = [];
  }

  function decode(data) {
    // Vanhempi Safari tukee vain takaisinkutsumuotoa.
    return new Promise((resolve, reject) => {
      const result = audio.decodeAudioData(data, resolve, reject);
      result?.then?.(resolve, reject);
    });
  }

  async function sample(note, signal) {
    if (buffers.has(note.file)) return buffers.get(note.file);
    let failure = null;
    for (const format of formats) {
      try {
        const response = await fetch(new URL(`${note.file}.${format}`, base), { signal });
        if (!response.ok) throw new Error(`${note.pitch}: HTTP ${response.status}`);
        const buffer = await decode(await response.arrayBuffer());
        buffers.set(note.file, buffer);
        return buffer;
      } catch (error) {
        if (signal.aborted) throw error;
        failure = error;
      }
    }
    throw failure;
  }

  function schedule(buffer, when, duration, volume) {
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const envelope = audio.createGain();
    // Kitaran oma luonnollinen sammuminen kuuluu; häivytys vasta soittokeston lopussa.
    const fade = duration > 2 ? 0.55 : 0.22;
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.linearRampToValueAtTime(volume, when + 0.014);
    envelope.gain.setValueAtTime(volume, when + duration - fade);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    source.connect(envelope).connect(audio.destination);
    source.start(when);
    source.stop(when + duration + 0.02);
    sources.push(source);
  }

  async function play(kind, status) {
    stop();
    const mine = ++version;
    const example = EXAMPLES[kind];
    status.classList.remove('is-error');
    if (!context()) {
      status.textContent = 'Selaimesi ei tue Web Audiota.';
      return;
    }
    // resume() kutsutaan heti painalluksen aikana, jotta iPhone sallii äänen.
    try {
      await audio.resume();
    } catch {
      status.textContent = 'Ääntä ei saatu käynnistettyä.';
      return;
    }
    if (mine !== version) return;
    const controller = new AbortController();
    loading = controller;
    status.textContent = 'Ladataan oikean kitaran ääninäytteitä…';
    let loaded;
    try {
      loaded = await Promise.all(example.notes.map(note => sample(note, controller.signal)));
    } catch {
      if (mine !== version || controller.signal.aborted) return;
      stop();
      status.textContent = 'Ääniä ei voitu ladata. Lataa sivu uudelleen ja kokeile uudestaan.';
      status.classList.add('is-error');
      return;
    }
    if (mine !== version || controller.signal.aborted) return;
    loading = null;
    const start = audio.currentTime + TIMING.startDelay;
    let soundingUntil;
    if (kind === 'perakkain') {
      loaded.forEach((buffer, index) => schedule(buffer, start + index * TIMING.noteInterval, TIMING.noteLength, 0.48));
      soundingUntil = (loaded.length - 1) * TIMING.noteInterval + TIMING.noteLength;
    } else if (kind === 'yhdessa') {
      loaded.forEach(buffer => schedule(buffer, start, TIMING.triadLength, 0.33));
      soundingUntil = TIMING.triadLength;
    } else {
      loaded.forEach((buffer, index) => schedule(buffer, start + index * TIMING.stringInterval, TIMING.chordLength, 0.19));
      soundingUntil = (loaded.length - 1) * TIMING.stringInterval + TIMING.chordLength;
    }
    status.textContent = example.playing;
    timer = setTimeout(() => {
      if (mine !== version) return;
      stop();
      status.textContent = 'Esimerkki päättyi. Voit kuunnella uudelleen.';
    }, (TIMING.startDelay + soundingUntil + 0.18) * 1000);
  }

  function silence() {
    version++;
    stop();
    if (audio?.state === 'running') audio.suspend().catch(() => {});
  }
  window.addEventListener('pagehide', silence);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) silence();
  });

  function setupChordBuilder(section, status) {
    const order = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];
    const buttons = [...section.querySelectorAll('[data-savel]')];
    const chosen = new Set();
    const list = section.querySelector('[data-valinnat]');
    const count = section.querySelector('[data-maara]');
    const explanation = section.querySelector('[data-selitys]');
    const reset = message => {
      status.textContent = message;
      status.classList.remove('is-error');
      explanation.hidden = true;
    };
    const update = () => {
      const values = order.filter(note => chosen.has(note));
      list.textContent = values.length ? values.map(note => note.replace('#', '♯')).join(' · ') : 'ei vielä valintoja';
      count.textContent = `${values.length}/3`;
      for (const button of buttons) {
        const on = chosen.has(button.dataset.savel);
        button.classList.toggle('is-selected', on);
        button.setAttribute('aria-pressed', String(on));
      }
    };
    for (const button of buttons) {
      button.addEventListener('click', () => {
        const note = button.dataset.savel;
        if (chosen.has(note)) chosen.delete(note);
        else chosen.add(note);
        update();
        reset('Voit tarkistaa, kun olet valinnut kolme säveltä.');
      });
    }
    section.querySelector('[data-tyhjenna]').addEventListener('click', () => {
      chosen.clear();
      update();
      reset('Valinnat tyhjennetty. Kokeile uudelleen.');
    });
    section.querySelector('[data-tarkista]').addEventListener('click', () => {
      const correct = chosen.size === 3 && ['G', 'B', 'D'].every(note => chosen.has(note));
      explanation.hidden = !correct;
      status.classList.toggle('is-error', !correct);
      if (chosen.size !== 3) status.textContent = 'Valitse tasan kolme säveltä ja tarkista sitten.';
      else if (correct) status.textContent = 'Oikein: G, B ja D. Kolmisointu rakentuu asteikon 1., 3. ja 5. sävelestä.';
      else status.textContent = 'Ei vielä. Aloita G:stä ja laske siitä joka toinen asteikkosävel. Voit yrittää uudelleen.';
      if (correct) {
        const instant = matchMedia('(prefers-reduced-motion: reduce)').matches;
        explanation.scrollIntoView({ block: 'nearest', behavior: instant ? 'instant' : 'smooth' });
      }
    });
    update();
  }

  for (const section of sections) {
    const status = section.querySelector('[data-sointu-tila]');
    for (const controls of section.querySelectorAll('[data-sointu-ohjaimet]')) controls.hidden = false;
    status.textContent = READY[section.dataset.sointuharjoitus] ?? '';
    for (const button of section.querySelectorAll('[data-soita]')) {
      button.addEventListener('click', () => play(button.dataset.soita, status));
    }
    if (section.dataset.sointuharjoitus === 'rakenna') setupChordBuilder(section, status);
  }
})();
