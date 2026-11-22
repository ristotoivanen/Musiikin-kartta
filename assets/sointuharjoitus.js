// Soinnut ja harmonia (#116). PR #133:n sivukohtainen Meta Steel Guitar -toisto palvelee
// sekä G-pilottia että v0.5:tä. Sävel- ja aikatapahtumat pysyvät erillään näytepankista.
(() => {
  'use strict';
  const sections = document.querySelectorAll('[data-sointuharjoitus]');
  if (!sections.length) return;
  const base = new URL('audio/soinnut/', document.currentScript.src);

  // Nimi ilmaisee äänitetyn kielen ja sävelen. Esimerkeissä ei transponoida näytteitä.
  const OPEN_G = ['LowE:G2', 'A:B2', 'D:D3', 'G:G3', 'B:B3', 'HighE:G4'];
  const OPEN_EM = ['LowE:E2', 'A:B2', 'D:E3', 'G:G3', 'B:B3', 'HighE:E4'];
  const OPEN_E = OPEN_EM.map(note => note === 'G:G3' ? 'G:Gs3' : note);
  const SCALE = { G: 'G:G3', A: 'G:A3', B: 'B:B3', C: 'B:C4', D: 'D:D4', E: 'HighE:E4', 'F♯': 'HighE:Fs4' };
  const HARMONY = {
    G: ['LowE:G2', 'G:G3', 'B:B3', 'D:D4'],
    C: ['A:C3', 'G:G3', 'B:C4', 'HighE:E4'],
    D: ['D:D3', 'G:A3', 'B:D4', 'HighE:Fs4'],
    Dm: ['D:D3', 'G:A3', 'B:D4', 'HighE:F4'],
    Em: ['LowE:E2', 'D:E3', 'G:G3', 'B:B3'],
  };
  const TRIAD = [SCALE.G, SCALE.B, SCALE.D];
  const BAR = 2.25;

  function notes(pitches, duration, gain, interval = 0, at = 0) {
    return pitches.map((pitch, index) => ({ pitch, duration, gain, at: at + interval * index }));
  }

  const plans = {
    perakkain: notes(OPEN_G.slice(0, 3), 1.05, 0.48, 1.18),
    yhdessa: notes(OPEN_G.slice(0, 3), 3.10, 0.33),
    ote: notes(OPEN_G, 3.60, 0.19, 0.045),
    yksitellen: notes(TRIAD, 1.2, 0.48, 0.52),
    ydinYhdessa: notes(TRIAD, 1.9, 0.33),
    D: notes(HARMONY.D, 2.15, 0.23, 0.022),
    Dm: notes(HARMONY.Dm, 2.15, 0.23, 0.022),
    E: notes(OPEN_E, 2.15, 0.19, 0.023),
    Em: notes(OPEN_EM, 2.15, 0.19, 0.023),
  };
  const playingLabels = {
    perakkain: 'G, B ja D soivat peräkkäin.',
    yhdessa: 'G, B ja D soivat yhdessä.',
    ote: 'Kuulit G-soinnun kaikki kuusi kieltä.',
  };
  const ready = {
    kuuntele: 'Valitse kuuntelutapa. Näytteet on äänitetty oikeasta akustisesta kitarasta.',
    soita: 'Kuuntele, miltä kaikki kuusi kieltä kuulostavat yhdessä. Ääni on oikeasta kitaranäytteestä.',
    rakenna: 'Voit valita kolme säveltä haluamassasi järjestyksessä.',
    kokoa: 'Valitse esimerkki kuunneltavaksi.',
    arvaa: 'Valitse sointupari ja paina Tunnista.',
    paluu: 'Valitse ensin lopetus: G, C tai D.',
    asteet: 'Kuuntele neljä tahtia ja kokeile samaa kiertoa omalla kitaralla.',
    vihjeet: 'Valitse vihjeiden määrä ja aloita neljä neljän tahdin kierrosta.',
  };

  // AAC ensin, jos selain ilmoittaa tukevansa sitä. Verkkovirhe tai purkuvirhe kokeilee toista muotoa.
  const formats = new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
  const buffers = new Map();
  let audio;
  let session;

  function showStatus(status, message, error = false) {
    status.textContent = message;
    status.classList.toggle('is-error', error);
  }

  function stop(message) {
    const last = session;
    if (!last) return;
    session = null;
    clearTimeout(last.timeout);
    cancelAnimationFrame(last.frame);
    last.abort.abort();
    if (last.bus) {
      const now = audio.currentTime;
      const cutoff = now + 0.025;
      last.bus.gain.setValueAtTime(1, now);
      last.bus.gain.linearRampToValueAtTime(0, cutoff);
      for (const { source, envelope, when, end } of last.sources) {
        if (end > now && audio.state !== 'closed') source.stop(when > now ? 0 : Math.min(end, cutoff));
        if (audio.state !== 'running') {
          source.disconnect();
          envelope.disconnect();
        }
      }
      if (audio.state !== 'running') last.bus.disconnect();
    }
    delete last.trigger.dataset.playing;
    last.onPosition?.(-1);
    last.onStop?.();
    if (message) showStatus(last.status, message);
  }

  function context() {
    if (!audio || audio.state === 'closed') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) throw new Error('Web Audio ei ole käytettävissä');
      audio = new AudioContextClass();
      audio.addEventListener('statechange', () => {
        if (session?.bus && audio.state !== 'running') stop('Kuuntelu keskeytyi. Voit kuunnella uudelleen.');
      });
    }
    return audio;
  }

  function decode(ctx, data) {
    // Vanhempi Safari tukee vain takaisinkutsumuotoa.
    return new Promise((resolve, reject) => {
      const result = ctx.decodeAudioData(data, resolve, reject);
      result?.then?.(resolve, reject);
    });
  }

  async function sample(ctx, pitch, signal) {
    if (buffers.has(pitch)) return buffers.get(pitch);
    const [string, note] = pitch.split(':');
    const file = `INSGuitarSteel_String${string}_Vel02_${note}_01`;
    let failure;
    for (const format of formats) {
      try {
        const response = await fetch(new URL(`${file}.${format}`, base), { signal });
        if (!response.ok) throw new Error(`${pitch}: HTTP ${response.status}`);
        const buffer = await decode(ctx, await response.arrayBuffer());
        if (signal.aborted) throw signal.reason;
        buffers.set(pitch, buffer);
        return buffer;
      } catch (error) {
        if (signal.aborted) throw error;
        failure = error;
      }
    }
    throw failure;
  }

  function schedule(own, buffer, { at, duration, gain }) {
    const when = own.start + at;
    const end = when + duration + 0.02;
    const source = audio.createBufferSource();
    source.buffer = buffer;
    const envelope = audio.createGain();
    const fade = duration > 2 ? 0.55 : 0.22;
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.linearRampToValueAtTime(gain, when + 0.014);
    envelope.gain.setValueAtTime(gain, when + duration - fade);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    source.connect(envelope).connect(own.bus);
    const event = { source, envelope, when, end };
    own.sources.add(event);
    source.onended = () => {
      source.disconnect();
      envelope.disconnect();
      own.sources.delete(event);
      if (!own.sources.size) own.bus.disconnect();
    };
    source.start(when);
    source.stop(end);
  }

  async function play(trigger, status, plan, { label = 'Kuuntelu käynnissä.', onPosition, onStop } = {}) {
    stop();
    const own = { trigger, status, onPosition, onStop, abort: new AbortController(), sources: new Set() };
    session = own;
    showStatus(status, 'Ladataan kitaran ääninäytteitä…');
    own.timeout = setTimeout(() => {
      if (session !== own) return;
      stop();
      showStatus(status, 'Äänen käynnistys kesti liian kauan. Kokeile uudelleen.', true);
    }, 12000);

    let ctx;
    try {
      // Käyttäjäeleen aikana, ennen yhtään odotusta. audioSession on valinnainen Safari-rajapinta.
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* valinnainen */ }
      ctx = context();
      await ctx.resume();
    } catch {
      if (session === own) {
        stop();
        showStatus(status, 'Ääntä ei saatu käynnistettyä. Kokeile uudelleen.', true);
      }
      return;
    }
    if (session !== own) return;
    try {
      const pitches = [...new Set(plan.map(event => event.pitch))];
      const loaded = await Promise.all(pitches.map(pitch => sample(ctx, pitch, own.abort.signal)));
      if (session !== own) return;
      if (ctx.state !== 'running' || trigger.closest('details:not([open])')) {
        stop('Kuuntelu keskeytyi. Voit kuunnella uudelleen.');
        return;
      }
      clearTimeout(own.timeout);
      const loadedByPitch = new Map(pitches.map((pitch, index) => [pitch, loaded[index]]));
      own.bus = ctx.createGain();
      own.bus.connect(ctx.destination);
      own.start = ctx.currentTime + 0.10;
      const end = Math.max(...plan.map(event => event.at + event.duration + 0.02));
      for (const event of plan) schedule(own, loadedByPitch.get(event.pitch), event);
      trigger.dataset.playing = '';
      showStatus(status, label);
      function followClock() {
        if (session !== own) return;
        const elapsed = ctx.currentTime - own.start;
        if (elapsed >= end) {
          stop('Esimerkki päättyi. Voit kuunnella uudelleen.');
          return;
        }
        onPosition?.(elapsed);
        own.frame = requestAnimationFrame(followClock);
      }
      followClock();
    } catch {
      if (session === own) {
        stop();
        showStatus(status, 'Ääniä ei voitu ladata. Kokeile uudelleen.', true);
      }
    }
  }

  const silence = () => stop('Kuuntelu keskeytyi. Voit kuunnella uudelleen.');
  window.addEventListener('pagehide', silence);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) silence();
  });
  document.addEventListener('toggle', event => {
    const details = event.target;
    if (session && details instanceof HTMLDetailsElement && !details.open && details.contains(session.trigger)) silence();
  }, true);

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


  function setupTriad(section, playExample, stopExample) {
    const selected = new Set();
    const buttons = [...section.querySelectorAll('[data-savel]')];
    const selection = section.querySelector('[data-ydin-play="valinta"]');
    const count = section.querySelector('[data-maara]');
    const list = section.querySelector('[data-valinnat]');
    const hint = section.querySelector('[data-valintapalaute]');
    const initialHint = hint.textContent;
    for (const button of buttons) {
      button.addEventListener('click', () => {
        const note = button.dataset.savel;
        if (selected.has(note)) selected.delete(note);
        else if (selected.size < 3) selected.add(note);
        else {
          hint.textContent = 'Valitse enintään kolme säveltä. Poista ensin jokin nykyisistä.';
          return;
        }
        if (session?.trigger === selection) stopExample(ready.kokoa);
        button.setAttribute('aria-pressed', String(selected.has(note)));
        const ordered = Object.keys(SCALE).filter(item => selected.has(item));
        count.textContent = `${ordered.length}/3`;
        list.textContent = ordered.length ? ordered.join(' · ') : 'ei vielä';
        selection.disabled = ordered.length !== 3;
        hint.textContent = selection.disabled ? initialHint : ordered.join('') === 'GBD'
          ? 'Löysit G-duurisoinnun kolme säveltä. Kuuntele niitä yhdessä.'
          : 'Kuuntele tämän yhdistelmän sointi ja vertaa sitä muihin valintoihin.';
      });
    }
    section.querySelector('[data-ydin-play="yksitellen"]').addEventListener('click', event => playExample(event.currentTarget, plans.yksitellen));
    section.querySelector('[data-ydin-play="yhdessa"]').addEventListener('click', event => playExample(event.currentTarget, plans.ydinYhdessa));
    selection.addEventListener('click', () => {
      const pitches = Object.keys(SCALE).filter(note => selected.has(note)).map(note => SCALE[note]);
      playExample(selection, notes(pitches, 1.75, 0.33));
    });
  }

  function setupGuess(section, playExample, stopExample, showExerciseStatus) {
    const listening = section.querySelector('[data-arvaus-kuuntelu]');
    const question = section.querySelector('[data-arvaus-kysymys]');
    const heading = question.querySelector('[data-kysymys]');
    const prompt = question.querySelector('[data-kysymys-ohje]');
    const answers = section.querySelector('[data-arvaus-vastaus]');
    const choices = [...answers.querySelectorAll('button')];
    const feedback = section.querySelector('[data-arvauspalaute]');
    const firstPrompt = feedback.textContent;
    const diagrams = section.querySelector('[data-arvaus-kaaviot]');
    const originalD = section.querySelector('.chord-diagrams');
    const originalE = section.querySelector('[data-eem-kaaviot]');
    const chords = {
      D: originalD.children[0].cloneNode(true),
      Dm: originalD.children[1].cloneNode(true),
      E: originalE.children[0].cloneNode(true),
      Em: originalE.children[1].cloneNode(true),
    };
    const families = { D: ['D', 'Dm'], E: ['E', 'Em'] };
    const pairButtons = [...section.querySelectorAll('[data-arvaus-pari]')];
    const pairSelection = section.querySelector('.sointu-parin-valinta');
    const startButton = section.querySelector('[data-uusi-arvaus]');
    let family = 'D';
    let started = false;
    const fullName = { D: 'D-duuri', Dm: 'D-molli', E: 'E-duuri', Em: 'E-molli' };
    // #115: D/Dm ensin. F4 on oikea Vel02:n kitaranäyte,
    // ei F♯4-näytteen äänenkorkeuden muutoksesta tehty korvike.
    const ddmStatus = section.querySelector('[data-ddm-tila]');
    showStatus(ddmStatus, 'Valitse D-duuri tai D-molli kuunneltavaksi.');
    for (const button of section.querySelectorAll('[data-ddm-play]')) {
      button.addEventListener('click', () => {
        const chord = button.dataset.ddmPlay;
        play(button, ddmStatus, plans[chord], {
          label: `Kuulit ${chord === 'D' ? 'D-duurin' : 'D-mollin'}. Vertaa toiseen sointuun.`,
        });
      });
    }
    // Toinen kuunteluvaihe on itsenäinen: tunnistustehtävän vaihtelu ei piilota sitä.
    const eemStatus = section.querySelector('[data-eem-tila]');
    showStatus(eemStatus, 'Valitse E-duuri tai E-molli kuunneltavaksi.');
    for (const button of section.querySelectorAll('[data-eem-play]')) {
      button.addEventListener('click', () => {
        const chord = button.dataset.eemPlay;
        play(button, eemStatus, plans[chord], {
          label: `Kuulit ${chord === 'E' ? 'E-duurin' : 'E-mollin'}. Vertaa toiseen sointuun.`,
        });
      });
    }
    const listenButtons = [...listening.querySelectorAll('button')];
    let pair;
    let target;
    let answered = false;
    // Kumpikin pari vuorottelee omassa järjestyksessään: duuri → molli → duuri.
    // Sointu 1:n ja Sointu 2:n keskinäinen järjestys arvotaan joka kierroksella.
    const nextTargetByFamily = { D: 'D', E: 'E' };

    // Vertailut ovat erilliset kohdat 1 ja 2. Tunnistus alkaa ensimmäisellä
    // Tunnista-painalluksella. Vastauksen jälkeen vain yläpuolen parivalinta
    // aloittaa seuraavan kierroksen; vastauksia ei voi enää muuttaa.
    function chooseFamily(nextFamily) {
      // Ennen aloitusta valitaan pari. Aloituksen jälkeen kumpi tahansa
      // paripainike aloittaa uuden kierroksen myös ilman aiempaa vastausta.
      if (family === nextFamily && !started) return;
      stop();
      family = nextFamily;
      pair = null;
      answered = false;
      const names = families[family];
      pairButtons.forEach(button =>
        button.setAttribute('aria-pressed', String(button.dataset.arvausPari === family)));
      if (started) {
        // Kumpi tahansa parivalinta aloittaa uuden kierroksen,
        // mutta ei palauta ensimmäistä Tunnista-painiketta.
        startRound();
        showExerciseStatus(`Valittu ${names.join(' ja ')}. Kuuntele soinnut ja vastaa.`);
      } else {
        showExerciseStatus(`Valittu ${names.join(' ja ')}. Paina Tunnista.`);
      }
    }
    pairButtons.forEach(button =>
      button.addEventListener('click', () => chooseFamily(button.dataset.arvausPari)));
    for (const button of listenButtons) {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.arvaaKuuntele);
        const chord = pair[index];
        if (answered) {
          // Vasta kuuntelutehtävään vastaamisen jälkeen painettu kuuntelupainike
          // näyttää, oliko kyseessä kysytty sointu. Toinen painike pysyy neutraalina.
          listenButtons.forEach(choice => choice.classList.remove('is-correct', 'is-wrong'));
          nameListening(true);
          const correct = chord === target;
          button.classList.add(correct ? 'is-correct' : 'is-wrong');
          button.setAttribute('aria-label',
            `Kuuntele sointu ${index + 1}, ${fullName[chord]}, ${correct ? 'oikea vastaus' : 'väärä vastaus'}`);
        }
        playExample(button, plans[chord]);
      });
    }
    // Vastauksen jälkeen nimet näkyvät samoissa painikkeissa arvotussa järjestyksessä. Varattu
    // leveys (.sointu-varaus) pitää painikkeen koon samana nimettynä ja nimettömänä.
    function nameListening(reveal) {
      listenButtons.forEach((button, index) => {
        const number = index + 1;
        const chord = pair[Number(button.dataset.arvaaKuuntele)];
        button.querySelector('[data-arvaus-teksti]').textContent = reveal ? `Sointu ${number} · ${chord}` : `Sointu ${number}`;
        button.setAttribute('aria-label', reveal ? `Kuuntele sointu ${number}, ${fullName[chord]}` : `Kuuntele sointu ${number}`);
      });
    }
    function startRound(initiatedByUser = false) {
      stop();
      started = true;
      startButton.hidden = true;
      const selected = families[family];
      pair = Math.random() < 0.5 ? [...selected] : [...selected].reverse();
      target = nextTargetByFamily[family];
      nextTargetByFamily[family] = target === selected[0] ? selected[1] : selected[0];
      answered = false;
      diagrams.hidden = true;
      diagrams.replaceChildren();
      question.hidden = listening.hidden = answers.hidden = feedback.hidden = false;
      question.classList.add('is-active');
      heading.textContent = target === selected[0] ? 'Kumpi on duuri?' : 'Kumpi on molli?';
      prompt.textContent = 'Kuuntele soinnut 1 ja 2. Valitse sitten vastaus.';
      feedback.textContent = firstPrompt;
      feedback.classList.remove('is-error');
      choices.forEach(button => {
        button.removeAttribute('aria-disabled');
        button.removeAttribute('aria-label');
        button.classList.remove('is-correct', 'is-wrong');
      });
      listenButtons.forEach(button => button.classList.remove('is-correct', 'is-wrong'));
      nameListening(false);
      showExerciseStatus('Kuuntele sointu 1 ja sointu 2 ennen vastaamista.');
      // Ensimmäinen aloitus tuo
      // sointuparin valinnan JA kysymyksen samaan näkymään. Jos vierittäisimme
      // pelkkään kysymyskorttiin, D/Dm- ja E/Em-painikkeet jäisivät yläpuolelle.
      // Parin vaihto ei varasta fokusta.
      if (initiatedByUser) {
        heading.focus({ preventScroll: true });
        pairSelection.scrollIntoView({ block: 'start', behavior: 'instant' });
      }
    }
    startButton.addEventListener('click', () => startRound(true));
    for (const button of choices) {
      button.addEventListener('click', () => {
        if (answered) {
          // Vastauksen jälkeen molemmat vastauspainikkeet ovat lukittuja.
          // Uusi kysymys alkaa vain valitsemalla ylhäältä sointupari.
          return;
        }
        answered = true;
        stopExample();
        const selectedIndex = Number(button.dataset.vastaus);
        const correctIndex = pair.indexOf(target);
        const correct = selectedIndex === correctIndex;
        choices.forEach((choice, index) => {
          // Väritetään vain oppijan painama vaihtoehto. Oikea vastaus
          // kerrotaan myös palautteessa ilman toisen painikkeen korostamista.
          const isCorrect = index === selectedIndex && correct;
          const isWrong = index === selectedIndex && !correct;
          choice.classList.toggle('is-correct', isCorrect);
          choice.classList.toggle('is-wrong', isWrong);
          // Painikkeen näkyvä teksti ei muutu eikä siirrä muita ohjaimia.
          // Tulos on luettavissa myös kohdistamalla ruudunlukija painikkeeseen.
          choice.setAttribute('aria-disabled', 'true');
          if (isCorrect || isWrong) {
            choice.setAttribute('aria-label', `Sointu ${index + 1}, ${isCorrect ? 'oikea vastaus' : 'väärä vastaus'}`);
          } else {
            choice.setAttribute('aria-label', `Sointu ${index + 1}, vastaus annettu`);
          }
        });
        feedback.classList.toggle('is-error', !correct);
        const result = document.createElement('strong');
        result.className = 'sointu-arvaus-tulos';
        result.textContent = correct ? 'Oikein!' : 'Tällä kertaa ei.';
        feedback.replaceChildren(result, document.createTextNode(` Sointu 1 oli ${fullName[pair[0]]} ja sointu 2 oli ${fullName[pair[1]]}.`));
        pair.forEach((chord, index) => {
          const figure = chords[chord];
          figure.querySelector('figcaption').textContent = `Sointu ${index + 1} = ${chord}`;
          diagrams.append(figure);
        });
        nameListening(true);
        diagrams.hidden = false;
        showExerciseStatus('Palaute jää näkyviin. Valitse ylhäältä D / Dm tai E / Em aloittaaksesi uuden tehtävän.');
      });
    }
  }

  function setupProgression(section, playExample, stopExample, showExerciseStatus) {
    const playButton = section.querySelector('[data-kierto]');
    const endings = [...section.querySelectorAll('[data-lopetus]')];
    const nameButton = section.querySelector('[data-nayta-nimet]');
    const names = [...section.querySelectorAll('[data-kierron-nimi]')];
    // Neljäs sointu on oppijan oma valinta. Mitään lopetusta ei ole valittu valmiiksi.
    const sequence = ['G', 'C', 'D', null];
    let showNames = false;
    let active = -1;

    function draw(index) {
      active = index;
      names.forEach((name, position) => {
        name.textContent = showNames ? sequence[position] ?? '?' : position === 3 ? '?' : '•';
        if (position === index) name.parentElement.setAttribute('aria-current', 'step');
        else name.parentElement.removeAttribute('aria-current');
      });
    }
    function playLabel(playing) {
      playButton.querySelector('[data-kuuntele]').classList.toggle('sointu-piilossa', playing);
      playButton.querySelector('[data-pysayta]').classList.toggle('sointu-piilossa', !playing);
    }

    for (const button of endings) {
      button.addEventListener('click', () => {
        stopExample('Pysäytetty.');
        sequence[3] = button.dataset.lopetus;
        endings.forEach(ending => ending.setAttribute('aria-pressed', String(ending === button)));
        playButton.disabled = false;
        showExerciseStatus(`Lopetus ${sequence[3]} valittu. Kuuntele kierto.`);
        draw(-1);
      });
    }
    nameButton.addEventListener('click', () => {
      showNames = !showNames;
      nameButton.setAttribute('aria-expanded', String(showNames));
      nameButton.textContent = showNames ? 'Piilota sointujen nimet' : 'Näytä sointujen nimet';
      draw(active);
    });
    playButton.addEventListener('click', () => {
      if (session?.trigger === playButton) {
        stopExample('Pysäytetty.');
        return;
      }
      if (!sequence[3]) return;
      const plan = sequence.flatMap((chord, index) => notes(HARMONY[chord], 2.15, 0.23, 0.022, index * BAR));
      playLabel(true);
      playExample(playButton, plan, {
        onPosition: elapsed => {
          const index = Math.floor(elapsed / BAR);
          if (index !== active) draw(index);
        },
        onStop: () => playLabel(false),
      });
    });
  }


  function setupDegrees(section, playExample, stopExample) {
    const playButton = section.querySelector('[data-asteet-play]');
    const bars = [...section.querySelectorAll('[data-asteet-bar]')];
    const sequence = ['G', 'D', 'Em', 'C'];
    let active = -1;

    function draw(index) {
      if (index === active) return;
      active = index;
      bars.forEach((bar, position) => {
        if (position === index) bar.setAttribute('aria-current', 'step');
        else bar.removeAttribute('aria-current');
      });
    }

    playButton.addEventListener('click', () => {
      if (session?.trigger === playButton) {
        stopExample('Pysäytetty. Voit kuunnella uudelleen.');
        return;
      }
      const plan = sequence.flatMap((chord, index) =>
        notes(HARMONY[chord], 2.15, 0.23, 0.022, index * BAR));
      draw(-1);
      playButton.textContent = '■ Pysäytä';
      playExample(playButton, plan, {
        label: 'Kuuntele G–D–Em–C. Yksi sointu neljän iskun tahdissa.',
        onPosition: elapsed => draw(elapsed < 0 ? -1 : Math.min(3, Math.floor(elapsed / BAR))),
        onStop: () => { playButton.textContent = '▶ Kuuntele neljä tahtia'; },
      });
    });
  }


  function setupHints(section, playExample, stopExample, showExerciseStatus) {
    const buttons = [...section.querySelectorAll('[data-vihje-mode]')];
    const area = section.querySelector('[data-vihje-kartta]');
    const main = [...section.querySelectorAll('[data-vihje-teksti]')];
    const sub = [...section.querySelectorAll('[data-vihje-ala]')];
    const bars = [...section.querySelectorAll('[data-vihje-tahti]')];
    const hint = section.querySelector('[data-vihje-ohje]');
    const playButton = section.querySelector('[data-vihje-play]');
    const sequence = ['G', 'D', 'Em', 'C'];
    const degrees = ['I', 'V', 'vi', 'IV'];
    const modes = {
      soinnut: 'Soitettava sointu ja tahdin numero näkyvät.',
      asteet: 'Soinnun aste ja tahdin numero näkyvät.',
      tahdit: 'Vain tahdin numero näkyy. Muista soinnut itse.',
      ilman: 'Sointuvihjeet ja tahtikartta on piilotettu. Soita muistista.',
    };
    let mode = 'soinnut';
    let active = -1;

    function draw(position) {
      active = position;
      bars.forEach((bar, index) => {
        if (mode !== 'ilman' && index === position) bar.setAttribute('aria-current', 'step');
        else bar.removeAttribute('aria-current');
      });
    }

    function setMode(nextMode) {
      mode = nextMode;
      buttons.forEach(button =>
        button.setAttribute('aria-pressed', String(button.dataset.vihjeMode === mode)));
      area.hidden = mode === 'ilman';
      hint.textContent = modes[mode];
      main.forEach((item, index) => {
        item.textContent = mode === 'soinnut' ? sequence[index] :
          mode === 'asteet' ? degrees[index] : String(index + 1);
        sub[index].textContent = mode === 'tahdit' ? 'Tahti' : `Tahti ${index + 1}`;
      });
      draw(active);
    }

    buttons.forEach(button =>
      button.addEventListener('click', () => setMode(button.dataset.vihjeMode)));
    playButton.addEventListener('click', () => {
      if (session?.trigger === playButton) {
        stopExample('Pysäytetty. Voit kokeilla uudelleen.');
        return;
      }
      // Neljä itsenäistä kierrosta, sama 4/4-pulssi. Ei ylimääräistä
      // "tunnistettu oikein" -arviota tai pakollista etenemisjärjestystä.
      const plan = Array.from({ length: 4 }, (_, cycle) =>
        sequence.flatMap((chord, index) =>
          notes(HARMONY[chord], 2.15, 0.23, 0.022, (cycle * 4 + index) * BAR)),
      ).flat();
      playButton.textContent = '■ Pysäytä harjoitus';
      playExample(playButton, plan, {
        label: 'Harjoitus soi. Vaihda vihjeitä vapaasti.',
        onPosition: elapsed => draw(elapsed < 0 ? -1 : Math.min(3, Math.floor(elapsed / BAR) % 4)),
        onStop: () => { playButton.textContent = '▶ Aloita soittoharjoitus'; },
      });
    });
    setMode(mode);
  }

  for (const section of sections) {
    const kind = section.dataset.sointuharjoitus;
    const status = section.querySelector('[data-sointu-tila]');
    const playExample = (trigger, plan, options) => play(trigger, status, plan, options);
    const stopExample = message => {
      if (session?.status === status) stop(message);
    };
    const showExerciseStatus = message => showStatus(status, message);

    for (const controls of section.querySelectorAll('[data-sointu-ohjaimet]')) controls.hidden = false;
    showExerciseStatus(ready[kind]);
    for (const button of section.querySelectorAll('[data-soita]')) {
      button.addEventListener('click', () => playExample(button, plans[button.dataset.soita], { label: playingLabels[button.dataset.soita] }));
    }
    if (kind === 'rakenna') setupChordBuilder(section, status);
    if (kind === 'kokoa') setupTriad(section, playExample, stopExample);
    if (kind === 'arvaa') setupGuess(section, playExample, stopExample, showExerciseStatus);
    if (kind === 'paluu') setupProgression(section, playExample, stopExample, showExerciseStatus);
    if (kind === 'asteet') setupDegrees(section, playExample, stopExample);
    if (kind === 'vihjeet') setupHints(section, playExample, stopExample, showExerciseStatus);
  }
})();
