import {
  chordSequence, createPlayer, intervalPair, intervalPlan, melodyPlan, riffPlan, routePlan, transferPlan,
} from './savelnimet-aanet.js';

const intervals = {
  3: { note: 'F', name: 'Pieni terssi', detail: 'Kolme puoliaskelta. D, E ja F ovat kolme sävelnimeä.' },
  4: { note: 'F♯', name: 'Suuri terssi', detail: 'Neljä puoliaskelta. D, E ja F♯ ovat kolme sävelnimeä.' },
  7: { note: 'A', name: 'Puhdas kvintti', detail: 'Seitsemän puoliaskelta. D, E, F, G ja A ovat viisi sävelnimeä.' },
  12: { note: 'D', name: 'Puhdas oktaavi', detail: 'Kaksitoista puoliaskelta. Sama sävelnimi, oktaavia korkeammalla.' },
};
const melodyFeedback = {
  3: 'C toistuu ennen nousua D:hen.',
  4: 'C♯/D♭ kulkee puoliaskelin C:stä D:hen.',
  5: 'D saavutetaan jo toisella sävelellä.',
};
const riffDistance = { 3: 'pienen terssin', 4: 'suuren terssin', 12: 'oktaavin' };

function select(button) {
  for (const peer of button.parentElement.querySelectorAll('[aria-pressed]')) {
    peer.setAttribute('aria-pressed', String(peer === button));
  }
}

function mark(elements, isActive) {
  elements.forEach((element, index) => element.classList.toggle('soi', isActive(element, index)));
}

function highlightSteps(button) {
  const steps = button.closest('[data-aaniosio]').querySelectorAll('[data-askel]');
  return (_index, value) => mark(steps, (_element, index) => index === value);
}

function markFrets(frets, ...active) {
  mark(frets, element => active.includes(Number(element.dataset.nauha)));
}

function chords(root, player) {
  const diagrams = root.querySelectorAll('[data-sointu]');
  const voicings = Object.fromEntries([...diagrams].map(diagram =>
    [diagram.dataset.sointu, diagram.querySelector('code').textContent]));
  for (const button of root.querySelectorAll('[data-soita-soinnut]')) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const section = button.closest('[data-aaniosio]');
      const localDiagrams = section.querySelectorAll('[data-sointu]');
      const steps = highlightSteps(button);
      const names = button.dataset.soitaSoinnut.split(' ');
      player.play(button, chordSequence(names, voicings), (index, name) => {
        mark(localDiagrams, diagram => diagram.dataset.sointu === name);
        steps(index, index);
      });
    });
  }
}

function accidentals(root, player) {
  const center = root.querySelector('[data-reitin-keskisavel]');
  const frets = root.querySelectorAll('[data-nauha]');
  for (const button of root.querySelectorAll('[data-reitti]')) {
    button.addEventListener('click', () => {
      const origin = button.dataset.reitti;
      center.textContent = origin === 'C' ? 'C♯' : 'D♭';
      select(button);
      player.play(button, routePlan(origin), (_index, fret) => markFrets(frets, fret));
    });
  }
  let melodyFret = 4;
  const melody = root.querySelector('[data-vaihteleva]');
  for (const button of root.querySelectorAll('[data-melodia]')) {
    button.addEventListener('click', () => {
      player.stop('');
      select(button);
      melodyFret = Number(button.dataset.melodia);
      melody.textContent = button.textContent;
      root.querySelector('[data-melodiapalaute]').textContent = melodyFeedback[melodyFret];
    });
  }
  const play = root.querySelector('[data-soita-melodia]');
  const ending = root.querySelector('[data-lopetus]');
  const steps = highlightSteps(play);
  play.addEventListener('click', () => player.play(play, melodyPlan(melodyFret, 'xx0232'), (index, value) => {
    steps(index, value);
    ending.classList.toggle('soi', value === 'D');
  }));
}

function intervalExplorer(root, player) {
  let fret = 3;
  const frets = [...root.querySelectorAll('[data-nauha]')];
  const reveal = root.querySelector('[data-intervallivastaus]');
  reveal.hidden = false;
  function draw() {
    const entry = intervals[fret];
    for (const cell of frets.slice(1)) {
      const selected = Number(cell.dataset.nauha) === fret;
      cell.classList.toggle('valittu', selected);
      cell.querySelector('strong').textContent = selected ? reveal.open ? entry.note : '?' : '';
    }
    reveal.querySelector('[data-intervallinimi]').textContent = `D–${entry.note} · ${entry.name}`;
    reveal.querySelector('[data-intervalliselitys]').textContent = entry.detail;
    reveal.querySelector('summary').textContent = reveal.open ? 'Piilota intervallin nimi' : 'Paljasta intervallin nimi';
  }
  function hear(button, together = false) {
    player.play(button, intervalPlan(fret, together), (_index, value) => markFrets(frets, ...(Array.isArray(value) ? value : [value])));
  }
  for (const button of root.querySelectorAll('[data-intervalli]')) {
    button.addEventListener('click', () => {
      fret = Number(button.dataset.intervalli);
      select(button);
      draw();
      hear(button);
    });
  }
  const repeat = root.querySelector('[data-toista-intervalli]');
  repeat.addEventListener('click', () => hear(repeat));
  const together = root.querySelector('[data-intervalli-yhdessa]');
  together.addEventListener('click', () => hear(together, true));
  reveal.addEventListener('toggle', draw);
  draw();
}

function intervalTransfer(root, player) {
  for (const button of root.querySelectorAll('[data-kuuntele-tersseja]')) {
    button.addEventListener('click', () => player.play(button, { events: intervalPair(2, Number(button.dataset.kuunteleTersseja)) }));
  }
  let answer;
  const check = root.querySelector('[data-tarkista]');
  const feedback = root.querySelector('[data-siirtopalaute]');
  feedback.hidden = false;
  for (const button of root.querySelectorAll('[data-vastaus]')) {
    button.addEventListener('click', () => {
      answer = Number(button.dataset.vastaus);
      select(button);
      check.disabled = false;
      feedback.textContent = answer === 3 ? 'Valitsit A–C. Tarkista valinta tai kuuntele toinen väli.'
        : 'Valitsit A–C♯. Tarkista valinta tai kuuntele toinen väli.';
      player.play(button, { events: intervalPair(1, answer) });
    });
  }
  check.addEventListener('click', () => {
    feedback.textContent = answer === 3 ? 'Oikein. D–F ja A–C ovat pieniä terssejä, kolme puoliaskelta.'
      : 'A–C♯ on suuri terssi, neljä puoliaskelta. Etsittävä pieni terssi on yhden puoliaskelen pienempi.';
    player.play(check, transferPlan(answer));
  });
}

function intervalRiff(root, player) {
  let fret = 3;
  const note = root.querySelector('[data-vaihteleva]');
  const feedback = root.querySelector('[data-riffipalaute]');
  for (const button of root.querySelectorAll('[data-riffi]')) {
    button.addEventListener('click', () => {
      player.stop('');
      fret = Number(button.dataset.riffi);
      select(button);
      note.textContent = button.textContent;
      feedback.textContent = `Toinen sävel on ${riffDistance[fret]} päässä lähtösävelestä.`;
    });
  }
  const play = root.querySelector('[data-soita-riffi]');
  play.addEventListener('click', () => player.play(play, riffPlan(fret), highlightSteps(play)));
}

const lessons = {
  sointumerkki: chords,
  ylennys: accidentals,
  intervallit(root, player) {
    intervalExplorer(root, player);
    intervalTransfer(root, player);
    intervalRiff(root, player);
  },
};

const roots = document.querySelectorAll('[data-savelnimiopinto]');
if (roots.length) {
  const player = createPlayer();
  for (const root of roots) {
    lessons[root.dataset.savelnimiopinto](root, player);
    for (const controls of root.querySelectorAll('[data-ohjaimet]')) controls.hidden = false;
    for (const stop of root.querySelectorAll('[data-pysayta]')) stop.addEventListener('click', () => player.stop());
  }
}
