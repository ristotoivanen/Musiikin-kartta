// Sävelkorva ja melodia · Ydinopinnot (#116, vaihe 2)
//
// Kolmen harjoituksen sivukohtainen toiminta: 01 Ylös, alas vai sama? (melodian suunta),
// 02 Kotiin vai kesken? (kotisävel ja melodian loppu) ja 03 Kuule ja etsi kitaralta (kolmen
// sävelen kulku G- ja B-kieleltä tapaillen). Sivut muodostaa tools/oppimiskartta/rakenna.py, joka lataa
// tämän moduulin vain, kun sivulla on [data-melodiaharjoitus].
//
// Äänet ovat Soinnut ja harmonia -aiheen jo repossa olevia Meta Steel Guitar -kielinäytteitä
// (assets/audio/soinnut/, CC0 1.0, lähteet LAHTEET.md). Uusia äänitiedostoja ei tuoda eikä
// säveliä transponoida: jokainen näkyvä paikka (kieli ja nauha) soi täsmälleen sillä kielellä
// äänitetystä näytteestä. Tämä pieni soitin on tarkoituksella erillään sivuston yhteisestä
// äänimoottorista ja Sointujen soittimesta eikä muuta niitä.
//
// Rakenne:
// - Puhtaat funktiot (exportit) kuvaavat melodiat, oikeat vastaukset ja palautteen. Samat tiedot
//   ajastavat äänet ja kirjoittavat palautteen, joten kuultu ja selitetty melodia eivät voi erota
//   (tests/melodia-ydinopinnot.test.ts).
// - Kuultava vastaus pysyy vain muistissa: sitä ei kirjoiteta sivulle, saavutettavaan nimeen tai
//   data-attribuuttiin ennen kuin oppija on vastannut.
// - Toisto käynnistyy vain käyttäjän painalluksesta, ja saman painikkeen toinen painallus
//   pysäyttää. Kortin sulkeminen, sivun piilottaminen tai sulkeminen pysäyttää äänen; paluu ei
//   käynnistä ääntä itsestään.

const STRING_NAMES = Object.freeze({ LowE: 'paksu E-kieli', G: 'G-kieli', B: 'B-kieli', HighE: 'ohut e-kieli' });

function note(id, name, midi, string, fret) {
  return Object.freeze({ id, name, midi, string, fret, sample: `${string}:${id}` });
}

// Ensimmäisen position G-duurisävelet kolmelta ohuimmalta kieleltä sekä matala kotisävel G.
export const NOTES = Object.freeze({
  G2: note('G2', 'G', 43, 'LowE', 3),
  G3: note('G3', 'G', 55, 'G', 0),
  A3: note('A3', 'A', 57, 'G', 2),
  B3: note('B3', 'B', 59, 'B', 0),
  C4: note('C4', 'C', 60, 'B', 1),
  D4: note('D4', 'D', 62, 'B', 3),
  E4: note('E4', 'E', 64, 'HighE', 0),
  Fs4: note('Fs4', 'F♯', 66, 'HighE', 2),
  G4: note('G4', 'G', 67, 'HighE', 3),
});

// Sävelnimen sisäheitto (G:hen, A:han, F♯:ään) palautetta varten.
const ILLATIVE = Object.freeze({ G: 'G:hen', A: 'A:han', B: 'B:hen', C: 'C:hen', D: 'D:hen', E: 'E:hen', 'F♯': 'F♯:ään' });
const ELATIVE = Object.freeze({ G: 'G:stä', A: 'A:sta', B: 'B:stä', C: 'C:stä', D: 'D:stä', E: 'E:stä', 'F♯': 'F♯:stä' });

export function position(id) {
  const { string, fret } = NOTES[id];
  return `${STRING_NAMES[string]}, ${fret ? `${fret}. nauha` : 'vapaa'}`;
}

export function direction(from, to) {
  const difference = NOTES[to].midi - NOTES[from].midi;
  return difference > 0 ? 'ylos' : difference < 0 ? 'alas' : 'sama';
}

// Askel = puoli- tai kokonaisaskel (1–2 puoliaskelta), hyppy = vähintään pieni terssi.
export function moveKind(from, to) {
  const distance = Math.abs(NOTES[to].midi - NOTES[from].midi);
  return distance === 0 ? 'sama' : distance <= 2 ? 'askel' : 'hyppy';
}

export const DIRECTION_LABELS = Object.freeze({ ylos: 'ylös', alas: 'alas', sama: 'sama sävel' });

export const names = notes => notes.map(id => NOTES[id].name).join(' → ');

// 01 · Kahdeksan suuntayhdistelmää, kukin vähintään kahdesta eri lähtösävelestä. Ei puoliaskelia,
// jotta ensimmäisen harjoituksen ero kuuluu selvästi.
export const CONTOUR_MOTIFS = Object.freeze([
  ['G3', 'B3', 'D4'], ['A3', 'B3', 'D4'], ['C4', 'D4', 'E4'],
  ['D4', 'B3', 'G3'], ['E4', 'C4', 'A3'], ['E4', 'D4', 'C4'],
  ['G3', 'D4', 'B3'], ['A3', 'E4', 'C4'], ['C4', 'E4', 'D4'],
  ['D4', 'G3', 'B3'], ['E4', 'A3', 'C4'], ['D4', 'C4', 'E4'],
  ['G3', 'G3', 'D4'], ['B3', 'B3', 'D4'],
  ['D4', 'D4', 'B3'], ['E4', 'E4', 'C4'],
  ['G3', 'B3', 'B3'], ['A3', 'D4', 'D4'],
  ['D4', 'A3', 'A3'], ['E4', 'C4', 'C4'],
].map(motif => Object.freeze(motif)));

export function contourOf(motif) {
  return motif.slice(1).map((id, index) => direction(motif[index], id));
}

export function checkContour(motif, answers) {
  const expected = contourOf(motif);
  const steps = expected.map((value, index) => ({ expected: value, given: answers[index] ?? null, ok: answers[index] === value }));
  return { correct: steps.every(step => step.ok), steps };
}

// Lause, joka kertoo yhden siirtymän: "Melodia laski B:stä askeleella A:han."
export function moveSentence(from, to) {
  const [a, b] = [NOTES[from].name, NOTES[to].name];
  const kind = moveKind(from, to);
  if (kind === 'sama') return `Sävel ${a} toistui.`;
  const verb = direction(from, to) === 'ylos' ? 'nousi' : 'laski';
  return `Melodia ${verb} ${ELATIVE[a]} ${kind === 'askel' ? 'askeleella' : 'hypyllä'} ${ILLATIVE[b]}.`;
}

export function contourFeedback(motif, answers) {
  const { correct, steps } = checkContour(motif, answers);
  const heard = `Kuulit ${names(motif)}.`;
  const moves = motif.slice(1).map((id, index) => moveSentence(motif[index], id));
  if (correct) return `Oikein! ${heard} ${moves.join(' ')}`;
  const parts = steps.map((step, index) => {
    const where = `Sävelestä ${index + 1} säveleen ${index + 2}`;
    return step.ok
      ? `${where} oikein: ${DIRECTION_LABELS[step.expected]}.`
      : `${where} vastasit ”${DIRECTION_LABELS[step.given]}”. ${moves[index]}`;
  });
  return `Ei vielä aivan. ${heard} ${parts.join(' ')} Kuuntele uudelleen ja seuraa juuri tätä kohtaa.`;
}

// 02 · Neljä G-duurimelodiaa, joilla on kaksi loppua: kotiin (G) tai kesken. Kaikissa on C ja F♯
// tai ne alkavat G–B–D-sävelistä, ja matala G soi alussa kodin merkkinä.
export const HOME_PHRASES = Object.freeze([
  { start: ['G3', 'B3', 'D4', 'C4', 'A3', 'B3'], koti: 'G3', kesken: 'A3' },
  { start: ['D4', 'G4', 'Fs4', 'E4', 'C4', 'E4'], koti: 'G4', kesken: 'Fs4' },
  { start: ['G3', 'A3', 'B3', 'G3', 'C4', 'B3', 'A3'], koti: 'G3', kesken: 'C4' },
  { start: ['B3', 'C4', 'D4', 'B3', 'E4', 'D4', 'C4'], koti: 'G3', kesken: 'A3' },
].map(phrase => Object.freeze({ ...phrase, start: Object.freeze(phrase.start) })));
export const HOME_ROUNDS = HOME_PHRASES.length * 2;

export function homeRound(index) {
  const phrase = HOME_PHRASES[Math.floor(index / 2)];
  const ending = index % 2 ? 'kesken' : 'koti';
  return { phrase, ending, notes: [...phrase.start, phrase[ending]] };
}

const DEGREE_TEXT = Object.freeze({
  A: 'Se on asteikon toinen sävel, kokonaisaskel kotisävel G:n yläpuolella, ja jää odottamaan paluuta.',
  C: 'Se on asteikon neljäs sävel. Loppu jää ilmaan ja tuntuu jatkuvan.',
  'F♯': 'Se on asteikon seitsemäs sävel, vain puoliaskel kotisävel G:n alapuolella, ja vetää vahvasti kotiin.',
});

export function homeFeedback(phrase, ending, answer) {
  const correct = answer === ending;
  const last = NOTES[phrase[ending]].name;
  const lead = correct ? 'Oikein.' : 'Ei tällä kertaa.';
  const what = ending === 'koti'
    ? `Melodia palasi kotisävel G:hen, samannimiseen säveleen kuin alussa soinut matala G. Siksi loppu tuntuu valmiilta.`
    : `Melodia pysähtyi ${ILLATIVE[last]}. ${DEGREE_TEXT[last]}`;
  return { correct, text: `${lead} ${what} Kuuntele vertailun vuoksi molemmat loput.` };
}

// 03 · Kolmen sävelen kulut alkavat aina vapaalta G-kieleltä. Sävelet 2 ja 3 löytyvät
// G- ja B-kielen ensimmäisistä nauhoista (G, A, B, C, D).
export const ECHO_POSITIONS = Object.freeze(['G3', 'A3', 'B3', 'C4', 'D4']);
export const ECHO_MOTIFS = Object.freeze([
  ['G3', 'A3', 'B3'], ['G3', 'B3', 'A3'], ['G3', 'B3', 'D4'], ['G3', 'D4', 'B3'],
  ['G3', 'A3', 'G3'], ['G3', 'B3', 'G3'], ['G3', 'D4', 'C4'], ['G3', 'C4', 'B3'],
  ['G3', 'B3', 'C4'], ['G3', 'G3', 'B3'], ['G3', 'A3', 'C4'], ['G3', 'C4', 'D4'],
].map(motif => Object.freeze(motif)));

// Tapailu: oppija voi painaa paikkoja vapaasti. Vastaukseksi tulkitaan kolme viimeksi soitettua.
export function recentNotes(history, size = 3) {
  return history.slice(-size);
}

export function checkEcho(motif, chosen) {
  const steps = motif.map((id, index) => ({ expected: id, given: chosen[index] ?? null, ok: chosen[index] === id }));
  return { correct: steps.every(step => step.ok), steps };
}

export function echoFeedback(motif, chosen) {
  const { correct, steps } = checkEcho(motif, chosen);
  const route = motif.map(position).join(' → ');
  const moves = motif.slice(1).map((id, index) => moveSentence(motif[index], id));
  if (correct) return `Oikein! Kuulit ${names(motif)}. ${moves.join(' ')} Soita sama kitaralla: ${route}.`;
  const parts = steps.map((step, index) => {
    const label = `Sävel ${index + 1}`;
    const heard = `${NOTES[step.expected].name} (${position(step.expected)})`;
    if (step.ok) return `${label} oikein: ${heard}.`;
    const given = step.given ? `soitit ${NOTES[step.given].name}, mutta ` : '';
    if (index === 0) return `${label}: ${given}kulku alkaa ${heard}.`;
    return `${label}: ${given}kuului ${heard}. ${moves[index - 1]}`;
  });
  return `Ei vielä aivan. Kuulit ${names(motif)}. ${parts.join(' ')} Soita koko kulku kitaralla: ${route}.`;
}

// Arvo uusi tehtävä niin, ettei sama toistu heti peräkkäin.
export function pickIndex(length, previous = -1, random = Math.random) {
  const index = Math.min(length - 1, Math.floor(random() * length));
  return length > 1 && index === previous ? (index + 1) % length : index;
}

// Ajastetut sävelet: { pitch, at, duration, gain } sekunteina toiston alusta.
export const TIMING = Object.freeze({
  suunta: { ioi: 0.7, duration: 0.8, last: 1.3, gain: 0.42 },
  koti: { ioi: 0.45, duration: 0.55, last: 1.8, gain: 0.4 },
  etsi: { ioi: 0.75, duration: 0.85, last: 1.3, gain: 0.42 },
});

export function melodyPlan(notes, { ioi, duration, last, gain }) {
  return notes.map((id, index) => ({
    pitch: NOTES[id].sample, at: index * ioi, duration: index === notes.length - 1 ? last : duration, gain,
  }));
}

export function planEnd(plan) {
  return Math.max(...plan.map(event => event.at + event.duration));
}

export const BASS_GAIN = 0.2;

// Kotiharjoituksen melodia: matala G soi alussa kodin merkkinä ja hiipuu melodian loppuun.
export function homePlan(notes) {
  const melody = melodyPlan(notes, TIMING.koti);
  const bass = { pitch: NOTES.G2.sample, at: 0, duration: Math.min(4.8, planEnd(melody)), gain: BASS_GAIN };
  return [bass, ...melody];
}

export const HOME_TONE_PLAN = Object.freeze([
  { pitch: NOTES.G2.sample, at: 0, duration: 2.2, gain: BASS_GAIN },
  { pitch: NOTES.G3.sample, at: 0, duration: 2.2, gain: 0.4 },
]);

export function singleNotePlan(id) {
  return [{ pitch: NOTES[id].sample, at: 0, duration: 1.1, gain: 0.42 }];
}

// ---------------------------------------------------------------------------------------------
// Selaimen toiminta

const MESSAGES = Object.freeze({
  loading: 'Ladataan kitaran ääninäytteitä…',
  ended: 'Esimerkki päättyi. Voit kuunnella uudelleen.',
  stopped: 'Kuuntelu pysäytetty. Voit kuunnella uudelleen.',
  interrupted: 'Kuuntelu keskeytyi. Voit kuunnella uudelleen.',
  slow: 'Äänen käynnistys kesti liian kauan. Kokeile uudelleen.',
  blocked: 'Ääntä ei saatu käynnistettyä. Kokeile uudelleen.',
  failed: 'Ääniä ei voitu ladata. Kokeile uudelleen.',
});

const STOP_LABEL = '<span aria-hidden="true">■</span> Pysäytä';

function createPlayer(base) {
  // AAC ensin, jos selain ilmoittaa tukevansa sitä. Verkko- tai purkuvirhe kokeilee toista muotoa.
  const formats = new Audio().canPlayType('audio/mp4; codecs="mp4a.40.2"') ? ['m4a', 'ogg'] : ['ogg', 'm4a'];
  const buffers = new Map();
  let audio;
  let session = null;

  const show = (status, message, error = false) => {
    status.textContent = message;
    status.classList.toggle('is-error', error);
  };

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
      for (const { source, when, end } of last.sources) {
        if (end > now && audio.state !== 'closed') source.stop(when > now ? 0 : Math.min(end, cutoff));
      }
    }
    if (last.toggle) last.trigger.innerHTML = last.markup;
    delete last.trigger.dataset.playing;
    last.onStop?.();
    if (message) show(last.status, message);
  }

  function context() {
    if (!audio || audio.state === 'closed') {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) throw new Error('Web Audio ei ole käytettävissä');
      audio = new AudioContextClass();
      audio.addEventListener('statechange', () => {
        if (session?.bus && audio.state !== 'running') stop(MESSAGES.interrupted);
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
    const [string, id] = pitch.split(':');
    const file = `INSGuitarSteel_String${string}_Vel02_${id}_01`;
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
    envelope.gain.linearRampToValueAtTime(gain, when + 0.012);
    envelope.gain.setValueAtTime(gain, when + Math.max(0.02, duration - fade));
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

  // toggle: saman painikkeen painallus soiton aikana pysäyttää (Kuuntele ↔ Pysäytä).
  async function play(trigger, status, plan, { label = 'Kuuntelu käynnissä.', toggle = false, onStart, onStop } = {}) {
    if (toggle && session?.trigger === trigger) {
      stop(MESSAGES.stopped);
      return;
    }
    stop();
    const own = { trigger, status, toggle, onStop, markup: trigger.innerHTML, abort: new AbortController(), sources: new Set() };
    session = own;
    trigger.dataset.playing = '';
    if (toggle) trigger.innerHTML = STOP_LABEL;
    show(status, MESSAGES.loading);
    own.timeout = setTimeout(() => {
      if (session !== own) return;
      stop();
      show(status, MESSAGES.slow, true);
    }, 12000);

    let ctx;
    try {
      // Käyttäjäeleen aikana ennen yhtään odotusta. audioSession on valinnainen Safari-rajapinta.
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch { /* valinnainen */ }
      ctx = context();
      await ctx.resume();
    } catch {
      if (session === own) {
        stop();
        show(status, MESSAGES.blocked, true);
      }
      return;
    }
    if (session !== own) return;
    try {
      const pitches = [...new Set(plan.map(event => event.pitch))];
      const loaded = await Promise.all(pitches.map(pitch => sample(ctx, pitch, own.abort.signal)));
      if (session !== own) return;
      if (ctx.state !== 'running' || trigger.closest('details:not([open])')) {
        stop(MESSAGES.interrupted);
        return;
      }
      clearTimeout(own.timeout);
      const byPitch = new Map(pitches.map((pitch, index) => [pitch, loaded[index]]));
      own.bus = ctx.createGain();
      own.bus.connect(ctx.destination);
      own.start = ctx.currentTime + 0.10;
      const end = planEnd(plan) + 0.02;
      for (const event of plan) schedule(own, byPitch.get(event.pitch), event);
      show(status, label);
      // Vasta kun äänet on ladattu ja ajastettu: epäonnistunut lataus ei avaa vastaamista.
      onStart?.();
      const follow = () => {
        if (session !== own) return;
        if (ctx.currentTime - own.start >= end) {
          stop(MESSAGES.ended);
          return;
        }
        own.frame = requestAnimationFrame(follow);
      };
      follow();
    } catch {
      if (session === own) {
        stop();
        show(status, MESSAGES.failed, true);
      }
    }
  }

  const silence = () => stop(MESSAGES.interrupted);
  window.addEventListener('pagehide', silence);
  document.addEventListener('visibilitychange', () => { if (document.hidden) silence(); });
  // Aihesivun sisäinen oppitunti tai lisätieto voi sulkeutua kesken soiton.
  document.addEventListener('toggle', event => {
    const details = event.target;
    if (session && details instanceof HTMLDetailsElement && !details.open && details.contains(session.trigger)) silence();
  }, true);

  return { play, stop, show };
}

// Vastauksen jälkeen painike lukitaan aria-disabled-tilaan eikä disabled-tilaan, jotta juuri
// painettu painike säilyttää näppäimistöfokuksen (ei pudotusta sivun alkuun).
function lock(buttons, locked) {
  for (const button of buttons) {
    if (locked) button.setAttribute('aria-disabled', 'true');
    else button.removeAttribute('aria-disabled');
  }
}

function pressOnly(buttons, chosen) {
  for (const button of buttons) button.setAttribute('aria-pressed', String(button === chosen));
}

// Näytä kuultu melodia vasta vastauksen jälkeen: sävelnimi, kitaran paikka ja korkeus.
function renderContour(list, notes) {
  const lowest = Math.min(...notes.map(id => NOTES[id].midi));
  list.classList.toggle('is-pitka', notes.length > 4);
  list.replaceChildren(...notes.map((id, index) => {
    const item = document.createElement('li');
    item.style.setProperty('--taso', String(NOTES[id].midi - lowest));
    const name = document.createElement('strong');
    name.textContent = NOTES[id].name;
    const where = document.createElement('span');
    where.textContent = position(id);
    item.append(name, where);
    item.setAttribute('aria-label', `Sävel ${index + 1}: ${NOTES[id].name}, ${position(id)}`);
    return item;
  }));
}

function setupContour(section, player) {
  const status = section.querySelector('[data-melodia-tila]');
  const listen = section.querySelector('[data-melodia-kuuntele]');
  const groups = [...section.querySelectorAll('[data-suunta-vaihe]')];
  const check = section.querySelector('[data-melodia-tarkista]');
  const feedback = section.querySelector('[data-melodia-palaute]');
  const reveal = section.querySelector('[data-melodia-kaari]');
  const list = reveal.querySelector('ol');
  let index = -1;
  let answers = [];
  let checked = false;

  const update = () => {
    check.disabled = !checked && (answers.filter(Boolean).length !== groups.length || groups[0].disabled);
    lock([check], checked);
  };
  const round = () => {
    index = pickIndex(CONTOUR_MOTIFS.length, index);
    answers = groups.map(() => null);
    checked = false;
    for (const group of groups) {
      group.disabled = true;
      pressOnly(group.querySelectorAll('[data-suunta]'), null);
      lock(group.querySelectorAll('[data-suunta]'), false);
    }
    feedback.textContent = '';
    feedback.classList.remove('is-error', 'is-answered');
    reveal.hidden = true;
    list.replaceChildren();
    update();
  };

  listen.addEventListener('click', () => {
    player.play(listen, status, melodyPlan(CONTOUR_MOTIFS[index], TIMING.suunta), {
      label: 'Melodia soi.', toggle: true,
      onStart: () => { if (!checked) for (const group of groups) group.disabled = false; update(); },
    });
  });
  groups.forEach((group, step) => {
    const buttons = group.querySelectorAll('[data-suunta]');
    for (const button of buttons) {
      button.addEventListener('click', () => {
        if (checked) return;
        answers[step] = button.dataset.suunta;
        pressOnly(buttons, button);
        update();
      });
    }
  });
  check.addEventListener('click', () => {
    if (checked) return;
    const motif = CONTOUR_MOTIFS[index];
    const result = checkContour(motif, answers);
    checked = true;
    for (const group of groups) lock(group.querySelectorAll('[data-suunta]'), true);
    feedback.textContent = contourFeedback(motif, answers);
    feedback.classList.add('is-answered');
    feedback.classList.toggle('is-error', !result.correct);
    renderContour(list, motif);
    reveal.hidden = false;
    update();
  });
  section.querySelector('[data-melodia-uusi]').addEventListener('click', () => {
    player.stop();
    round();
    // Uusi tehtävä soi heti kerran saman painalluksen aikana (käyttäjän ele, ei automaattinen toisto).
    listen.click();
  });
  round();
  player.show(status, 'Paina Kuuntele melodia. Näytteet on äänitetty oikeasta akustisesta kitarasta.');
}

function setupHome(section, player) {
  const status = section.querySelector('[data-melodia-tila]');
  const listen = section.querySelector('[data-melodia-kuuntele]');
  const answerGroup = section.querySelector('[data-koti-vastaus]');
  const answers = [...answerGroup.querySelectorAll('[data-koti]')];
  const feedback = section.querySelector('[data-melodia-palaute]');
  const compare = section.querySelector('[data-koti-vertailu]');
  const reveal = section.querySelector('[data-melodia-kaari]');
  const list = reveal.querySelector('ol');
  let index = -1;
  let answered = false;

  const round = () => {
    index = pickIndex(HOME_ROUNDS, index);
    answered = false;
    answerGroup.disabled = true;
    pressOnly(answers, null);
    lock(answers, false);
    feedback.textContent = '';
    feedback.classList.remove('is-error', 'is-answered');
    compare.hidden = true;
    reveal.hidden = true;
    list.replaceChildren();
  };

  section.querySelector('[data-koti-savel]').addEventListener('click', event => {
    player.play(event.currentTarget, status, HOME_TONE_PLAN, { label: 'Kotisävel G soi matalalta ja keskeltä. Hyräile se.' });
  });
  listen.addEventListener('click', () => {
    player.play(listen, status, homePlan(homeRound(index).notes), {
      label: 'Melodia soi. Kuuntele, mihin se pysähtyy.', toggle: true,
      onStart: () => { if (!answered) answerGroup.disabled = false; },
    });
  });
  for (const button of answers) {
    button.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const { phrase, ending, notes } = homeRound(index);
      const result = homeFeedback(phrase, ending, button.dataset.koti);
      pressOnly(answers, button);
      lock(answers, true);
      feedback.textContent = result.text;
      feedback.classList.add('is-answered');
      feedback.classList.toggle('is-error', !result.correct);
      renderContour(list, notes);
      reveal.hidden = false;
      compare.hidden = false;
    });
  }
  for (const button of compare.querySelectorAll('[data-koti-vertaa]')) {
    button.addEventListener('click', () => {
      const { phrase } = homeRound(index);
      const ending = button.dataset.kotiVertaa;
      player.play(button, status, homePlan([...phrase.start, phrase[ending]]), {
        label: ending === 'koti' ? 'Kotiin päättyvä loppu soi.' : 'Kesken jäävä loppu soi.',
      });
    });
  }
  section.querySelector('[data-melodia-uusi]').addEventListener('click', () => {
    player.stop();
    round();
    // Uusi tehtävä soi heti kerran saman painalluksen aikana (käyttäjän ele, ei automaattinen toisto).
    listen.click();
  });
  round();
  player.show(status, 'Kuuntele ensin kotisävel tai suoraan melodia. Näytteet on äänitetty oikeasta akustisesta kitarasta.');
}

function setupEcho(section, player) {
  const status = section.querySelector('[data-melodia-tila]');
  const listen = section.querySelector('[data-melodia-kuuntele]');
  const board = section.querySelector('[data-etsi-paikat]');
  const buttons = [...board.querySelectorAll('[data-paikka]')];
  const slots = [...section.querySelectorAll('[data-etsi-vastaus]')];
  const check = section.querySelector('[data-melodia-tarkista]');
  const feedback = section.querySelector('[data-melodia-palaute]');
  const reveal = section.querySelector('[data-melodia-kaari]');
  const list = reveal.querySelector('ol');
  let index = -1;
  let history = [];
  let checked = false;

  const draw = () => {
    const chosen = recentNotes(history, slots.length);
    slots.forEach((slot, step) => {
      const id = chosen[step];
      slot.textContent = id ? `${NOTES[id].name} · ${position(id)}` : 'ei vielä soitettu';
      slot.classList.toggle('is-empty', !id);
    });
    check.disabled = !checked && (board.disabled || chosen.length !== slots.length);
    lock([check], checked);
  };
  const round = () => {
    index = pickIndex(ECHO_MOTIFS.length, index);
    history = [];
    checked = false;
    board.disabled = true;
    feedback.textContent = '';
    feedback.classList.remove('is-error', 'is-answered');
    reveal.hidden = true;
    list.replaceChildren();
    draw();
  };

  listen.addEventListener('click', () => {
    player.play(listen, status, melodyPlan(ECHO_MOTIFS[index], TIMING.etsi), {
      label: 'Sävelkulku soi. Hyräile mukana.', toggle: true,
      onStart: () => { if (!checked) board.disabled = false; draw(); },
    });
  });
  for (const button of buttons) {
    button.addEventListener('click', () => {
      const id = button.dataset.paikka;
      player.play(button, status, singleNotePlan(id), { label: `${NOTES[id].name} soi (${position(id)}).` });
      // Tarkistuksen jälkeen paikkoja voi yhä kuunnella, mutta tarkistettu vastaus pysyy näkyvissä.
      if (checked) return;
      history = recentNotes([...history, id], slots.length);
      draw();
    });
  }
  check.addEventListener('click', () => {
    if (checked) return;
    const motif = ECHO_MOTIFS[index];
    const chosen = recentNotes(history, slots.length);
    const result = checkEcho(motif, chosen);
    checked = true;
    feedback.textContent = echoFeedback(motif, chosen);
    feedback.classList.add('is-answered');
    feedback.classList.toggle('is-error', !result.correct);
    renderContour(list, motif);
    reveal.hidden = false;
    draw();
  });
  section.querySelector('[data-melodia-uusi]').addEventListener('click', () => {
    player.stop();
    round();
    // Uusi tehtävä soi heti kerran saman painalluksen aikana (käyttäjän ele, ei automaattinen toisto).
    listen.click();
  });
  round();
  player.show(status, 'Paina Kuuntele sävelkulku. Näytteet on äänitetty oikeasta akustisesta kitarasta.');
}

if (typeof document !== 'undefined') {
  const sections = document.querySelectorAll('[data-melodiaharjoitus]');
  if (sections.length) {
    const player = createPlayer(new URL('audio/soinnut/', import.meta.url));
    const setups = { suunta: setupContour, koti: setupHome, etsi: setupEcho };
    for (const section of sections) {
      setups[section.dataset.melodiaharjoitus]?.(section, player);
      for (const hidden of section.querySelectorAll('[data-melodia-ohjaimet]')) hidden.hidden = false;
    }
  }
}
