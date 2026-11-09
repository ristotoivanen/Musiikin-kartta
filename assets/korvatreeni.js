// Korvaharjoitukset oppaan sivuille. Kysymys soi selaimessa harjoitustaustojen soittimilla
// (assets/harjoitustausta.js), ja vastaus tarkistetaan heti. Harjoitus käynnistyy elementistä,
// jolla on data-korvatreeni="aste", "sointu" tai "tehtava". Elementin sisällä oleva
// .et-fallback-teksti näkyy vain, jos skripti ei toimi (esimerkiksi tulostetussa oppaassa).
(() => {
  if (typeof backingTrack === 'undefined') return;

  const MAJOR = [0, 2, 4, 5, 7, 9, 11];
  // Duurisävellajit ja niiden sävelnimet oikein kirjoitettuina.
  const KEYS = [
    { name: 'C', pc: 0, notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'] },
    { name: 'D', pc: 2, notes: ['D', 'E', 'F♯', 'G', 'A', 'B', 'C♯'] },
    { name: 'E', pc: 4, notes: ['E', 'F♯', 'G♯', 'A', 'B', 'C♯', 'D♯'] },
    { name: 'F', pc: 5, notes: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'] },
    { name: 'G', pc: 7, notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F♯'] },
    { name: 'A', pc: 9, notes: ['A', 'B', 'C♯', 'D', 'E', 'F♯', 'G♯'] },
    { name: 'B♭', pc: 10, notes: ['B♭', 'C', 'D', 'E♭', 'F', 'G', 'A'] }
  ];
  const ROOTS = ['C', 'C♯', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
  const BEAT = 60 / 90;

  let context = null;
  let playing = null;

  function pick(list, avoid) {
    const choices = list.length > 1 && avoid !== undefined ? list.filter(item => item !== avoid) : list;
    return choices[Math.floor(Math.random() * choices.length)];
  }

  // Palauttaa voimakkuuden tasauskertoimen. Kun ratkaisulle annetaan kysymyksen kerroin,
  // ratkaisu soi samalla voimakkuudella kuin kysymys.
  async function play(events, duration, gain) {
    context ??= new AudioContext();
    if (context.state === 'suspended') await context.resume();
    const buffer = await backingTrack.renderScore({ events, duration: duration + 1.2, room: 1.4, reverb: .12, gain });
    playing?.stop();
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start();
    playing = source;
    return buffer.gain;
  }

  function chord(events, beat, pitches, beats, { velocity = .75, spread = .014, voice = 'clean' } = {}) {
    pitches.forEach((midi, i) => events.push({
      time: beat * BEAT + i * spread, midi, length: beats * BEAT - i * spread, voice, velocity, pan: 0
    }));
  }

  function note(events, beat, midi, beats, voice = 'lead', velocity = 1) {
    events.push({ time: beat * BEAT, midi, length: beats * BEAT, voice, velocity, pan: 0 });
  }

  // Sointu sävellajin asteelta (0 = I) lähelle keskikohtaa, basso alle.
  function degreeChord(tonic, degree) {
    const root = MAJOR[degree];
    const tones = [0, 2, 4].map(step => {
      const index = degree + step;
      return MAJOR[index % 7] + 12 * Math.floor(index / 7);
    });
    const pitches = tones.map(offset => {
      let midi = tonic + offset;
      while (midi < tonic + 2) midi += 12;
      while (midi >= tonic + 14) midi -= 12;
      return midi;
    }).sort((a, b) => a - b);
    let bass = tonic - 12 + root;
    if (bass > 50) bass -= 12;
    return { pitches, bass };
  }

  // Kadenssi soi hiljempaa kuin kysytty sävel, jotta sävel erottuu selvästi.
  function cadence(events, tonic) {
    [[0, 0, 1], [3, 1, 1], [4, 2, 1], [0, 3, 2]].forEach(([degree, beat, beats]) => {
      const { pitches, bass } = degreeChord(tonic, degree);
      chord(events, beat, pitches, beats, { velocity: .45 });
      note(events, beat, bass, beats, 'electric', .4);
    });
  }

  const exercises = {
    // Asteen tunnistus: kadenssi asettaa kodin, sitten soi yksi sävel.
    aste: {
      title: 'Kuule aste suhteessa kotiin',
      levels: [
        { label: 'Asteet 1, 3 ja 5', options: [0, 2, 4] },
        { label: 'Asteet 1–5', options: [0, 1, 2, 3, 4] },
        { label: 'Kaikki seitsemän astetta', options: [0, 1, 2, 3, 4, 5, 6] }
      ],
      answerLabel: degree => String(degree + 1),
      degreeOf: degree => degree + 1,
      ask(level, previous) {
        const key = pick(KEYS);
        const degree = pick(level.options, previous?.answer);
        // Kysytty sävel soi kitaran keskirekisterissä (F3–D♯5), koska korkeat sävelet
        // hiljenevät nopeasti ja jäisivät kadenssin alle.
        const tonic = 48 + key.pc;
        return { key, answer: degree, tonic, home: tonic + 12 <= 64 ? tonic + 12 : tonic };
      },
      prompt: q => 'Sävellaji on ' + q.key.name + '-duuri. Mikä aste soi kadenssin jälkeen?',
      sound(q) {
        const events = [];
        cadence(events, q.tonic);
        note(events, 5.2, q.home + MAJOR[q.answer], 2.5);
        return [events, 7.7 * BEAT];
      },
      // Vastauksen jälkeen sävel palaa kotiin askel kerrallaan lähimpään toonikaan.
      resolve(q) {
        const steps = q.answer <= 3 ? Array.from({ length: q.answer + 1 }, (_, i) => q.answer - i)
          : Array.from({ length: 8 - q.answer }, (_, i) => q.answer + i);
        const events = [];
        steps.forEach((degree, i) => {
          const offset = degree === 7 ? 12 : MAJOR[degree];
          note(events, i * .75, q.home + offset, i === steps.length - 1 ? 2 : .75);
        });
        return [events, (steps.length * .75 + 1.5) * BEAT];
      },
      explain: q => 'Sävel oli ' + (q.answer + 1) + '. aste, ' + q.key.name + '-duurissa ' + q.key.notes[q.answer] +
        '. Kuuntele, miten se palaa kotiin.'
    },

    // Sointutyypin tunnistus: sama perussävel, eri sointutyyppi.
    sointu: {
      title: 'Tunnista sointutyyppi',
      levels: [
        { label: 'Duuri vai molli', options: ['duuri', 'molli'] },
        { label: 'Duuri, 7 ja maj7', options: ['duuri', '7', 'maj7'] },
        { label: 'Kaikki viisi', options: ['duuri', 'molli', '7', 'maj7', 'm7'] }
      ],
      names: { duuri: 'Duuri', molli: 'Molli', '7': '7', maj7: 'maj7', m7: 'm7' },
      // Neljän kielen otteet, perussävel E-kielellä (kuten osan III luvussa 14).
      shapes: { duuri: [0, 12, 16, 19], molli: [0, 12, 15, 19], '7': [0, 10, 16, 19], maj7: [0, 11, 16, 19], m7: [0, 10, 15, 19] },
      answerLabel(type) { return this.names[type]; },
      ask(level, previous) {
        const fret = 3 + Math.floor(Math.random() * 7);
        return { root: 40 + fret, answer: pick(level.options, previous?.answer) };
      },
      prompt: q => 'Perussävel on ' + ROOTS[q.root % 12] + '. Mikä sointutyyppi soi?',
      sound(q) {
        const events = [];
        const pitches = this.shapes[q.answer].map(offset => q.root + offset);
        pitches.forEach((midi, i) => note(events, i * .6, midi, 3 - i * .6, 'clean', .8));
        chord(events, 3.2, pitches, 2.5, { velocity: .8 });
        return [events, 5.7 * BEAT];
      },
      explain(q) {
        const root = ROOTS[q.root % 12];
        const names = {
          duuri: root + '-duurisointu (' + root + ')', molli: root + '-mollisointu (' + root + 'm)',
          '7': 'dominanttiseptimisointu ' + root + '7', maj7: 'duuriseptimisointu ' + root + 'maj7',
          m7: 'molliseptimisointu ' + root + 'm7'
        };
        return 'Sointu oli ' + names[q.answer] + '.';
      }
    },

    // Soinnun tehtävä: ensin kotisointu I, sitten toinen sointu.
    tehtava: {
      title: 'Mikä sointu tulee kotisoinnun jälkeen?',
      levels: [
        { label: 'IV vai V', options: [3, 4] },
        { label: 'IV, V ja vi', options: [3, 4, 5] },
        { label: 'ii, IV, V ja vi', options: [1, 3, 4, 5] }
      ],
      numerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii°'],
      answerLabel(degree) { return this.numerals[degree]; },
      degreeOf: degree => degree + 1,
      ask(level, previous) {
        const key = pick(KEYS);
        return { key, tonic: 48 + key.pc, answer: pick(level.options, previous?.answer) };
      },
      prompt: q => 'Sävellaji on ' + q.key.name + '-duuri. Ensin soi I, sitten toinen sointu. Mikä se on?',
      sound(q) {
        const events = [];
        [[0, 0], [q.answer, 2]].forEach(([degree, beat]) => {
          const { pitches, bass } = degreeChord(q.tonic, degree);
          chord(events, beat, pitches, 2);
          note(events, beat, bass, 2, 'electric', .6);
        });
        return [events, 4 * BEAT];
      },
      resolve(q) {
        const events = [];
        [[0, 0], [q.answer, 1.5], [0, 3]].forEach(([degree, beat]) => {
          const { pitches, bass } = degreeChord(q.tonic, degree);
          chord(events, beat, pitches, degree === 0 && beat ? 2 : 1.5);
          note(events, beat, bass, 1.5, 'electric', .6);
        });
        return [events, 5 * BEAT];
      },
      explain(q) {
        const quality = [0, 3, 4].includes(q.answer) ? '' : 'm';
        return 'Sointu oli ' + this.numerals[q.answer] + ' eli ' + q.key.notes[q.answer] + quality +
          '. Kuuntele vielä I–' + this.numerals[q.answer] + '–I.';
      }
    }
  };

  function setup(root) {
    const exercise = exercises[root.dataset.korvatreeni];
    if (!exercise) return;
    root.querySelector('.et-fallback')?.remove();
    const id = root.id || 'korvatreeni';
    root.insertAdjacentHTML('beforeend',
      '<div class="et-bar">' +
        '<label class="et-level">Taso <select id="' + id + '-taso"></select></label>' +
        '<button type="button" class="et-new">Uusi kysymys</button>' +
        '<button type="button" class="et-again" disabled>Kuuntele uudelleen</button>' +
      '</div>' +
      '<p class="et-prompt" aria-live="polite">Paina <strong>Uusi kysymys</strong>. Kuuntele ja valitse vastaus.</p>' +
      '<div class="et-answers" role="group" aria-label="Vastausvaihtoehdot"></div>' +
      '<p class="et-feedback" aria-live="polite"></p>' +
      '<p class="et-score">Oikein ensimmäisellä yrityksellä 0/0</p>');
    const select = root.querySelector('select');
    const answers = root.querySelector('.et-answers');
    const prompt = root.querySelector('.et-prompt');
    const feedback = root.querySelector('.et-feedback');
    const score = root.querySelector('.et-score');
    const again = root.querySelector('.et-again');
    exercise.levels.forEach((level, index) => select.add(new Option(level.label, index)));
    let question = null, firstTry = true, right = 0, total = 0, streak = 0;

    function drawAnswers() {
      const level = exercise.levels[select.value];
      answers.replaceChildren(...level.options.map(option => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = exercise.answerLabel(option);
        button.dataset.value = option;
        if (exercise.degreeOf) {
          button.dataset.aste = exercise.degreeOf(option);
          button.classList.add('aste-' + exercise.degreeOf(option));
        }
        button.disabled = !question;
        button.addEventListener('click', () => answer(option, button));
        return button;
      }));
    }

    async function ask() {
      question = exercise.ask(exercise.levels[select.value], question);
      firstTry = true;
      drawAnswers();
      prompt.textContent = exercise.prompt(question);
      feedback.textContent = 'Soitetaan…';
      feedback.className = 'et-feedback';
      again.disabled = false;
      const asked = question;
      asked.gain = await play(...exercise.sound(asked));
      feedback.textContent = '';
    }

    async function answer(option, button) {
      if (!question || button.disabled) return;
      const correct = String(option) === String(question.answer);
      if (firstTry) {
        total++;
        if (correct) { right++; streak++; } else streak = 0;
        firstTry = false;
      }
      if (!correct) {
        button.classList.add('is-wrong');
        button.disabled = true;
        feedback.textContent = 'Ei aivan. Kuuntele uudelleen ja kokeile toista vaihtoehtoa.';
        feedback.className = 'et-feedback is-wrong';
      } else {
        button.classList.add('is-correct');
        answers.querySelectorAll('button').forEach(b => { b.disabled = true; });
        feedback.textContent = 'Oikein! ' + exercise.explain(question);
        feedback.className = 'et-feedback is-correct';
        if (exercise.resolve) await play(...exercise.resolve(question), question.gain);
      }
      score.textContent = 'Oikein ensimmäisellä yrityksellä ' + right + '/' + total + (streak > 1 ? ' · ' + streak + ' peräkkäin' : '');
    }

    root.querySelector('.et-new').addEventListener('click', ask);
    again.addEventListener('click', () => question && play(...exercise.sound(question)));
    select.addEventListener('change', () => { question = null; again.disabled = true; drawAnswers(); prompt.textContent = 'Taso vaihtui. Paina Uusi kysymys.'; });
    drawAnswers();
  }

  document.querySelectorAll('[data-korvatreeni]').forEach(setup);
})();
