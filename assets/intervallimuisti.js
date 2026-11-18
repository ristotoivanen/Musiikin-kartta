export const anchors = [0, 3, 4, 7, 12];

const spellingQuestions = [
  {
    prompt: 'Mikä intervalli A–A♯ on sävelkirjoituksen perusteella?',
    answers: ['ylinouseva priimi', 'A1'],
    explanation: 'A–A♯ on ylinouseva priimi. Sävelkirjain pysyy samana ja sävel nousee yhden puolisävelaskeleen.',
  },
  {
    prompt: 'Mikä intervalli A–B♭ on sävelkirjoituksen perusteella?',
    answers: ['pieni sekunti', 'm2'],
    explanation: 'A–B♭ on pieni sekunti. A ja B ovat peräkkäiset sävelkirjaimet ja sävelten väli on yksi puolisävelaskel.',
  },
  {
    prompt: 'Mikä intervalli D–F on sävelkirjoituksen perusteella?',
    answers: ['pieni terssi', 'm3'],
    explanation: 'D–F on pieni terssi. Kirjaimet D, E ja F muodostavat terssin. D–E on kaksi puolisävelaskelta ja E–F yksi, joten väli on pieni terssi (3 pa).',
  },
];

export function recallQuestions(intervals) {
  const anchorIntervals = anchors.map(pa => intervals.find(interval => interval.pa === pa));
  const otherIntervals = intervals.filter(({ pa }) => !anchors.includes(pa));
  const inBothDirections = group => group.flatMap((interval, index) => [
    distanceQuestion(interval),
    nameQuestion(group[(index + 2) % group.length]),
  ]);
  return [...inBothDirections(anchorIntervals), ...inBothDirections(otherIntervals), ...spellingQuestions];
}

function explanation({ pa, name, example }) {
  if (pa === 6) return '6 pa on tritonus. A–D♯ on ylinouseva kvartti ja A–E♭ vähennetty kvintti.';
  return `${name[0].toUpperCase() + name.slice(1)} on ${pa} pa. Esimerkki on ${example}.`;
}

function distanceQuestion(interval) {
  return {
    prompt: `Kuinka monta puolisävelaskelta? ${interval.name}`,
    answers: [String(interval.pa), `${interval.pa} pa`],
    explanation: explanation(interval),
  };
}

function nameQuestion(interval) {
  return {
    prompt: `Mikä on ${interval.pa} pa:n tavallinen intervallinimi?`,
    answers: [interval.name, ...interval.aliases],
    explanation: explanation(interval),
  };
}

const normalize = value => value.normalize('NFC').trim().replace(/\s+/g, ' ');

export function acceptsAnswer(answers, value) {
  const response = normalize(value);
  // Lyhenteissä m ja M erottavat pienen ja suuren intervallin.
  return answers.some(answer => /^(?:m|M)\d$/.test(answer)
    ? response === answer
    : response.toLocaleLowerCase('fi') === answer.toLocaleLowerCase('fi'));
}

function mount(section) {
  const intervals = Array.from(section.querySelectorAll('tr[data-pa]'), row => ({
    pa: Number(row.dataset.pa),
    name: row.cells[1].firstChild.textContent.trim(),
    example: row.cells[2].textContent.trim(),
    aliases: row.dataset.lyhenteet.split('|'),
  }));
  const questions = recallQuestions(intervals);
  const start = section.querySelector('[data-aloita]');
  const form = section.querySelector('[data-kysymys]');
  const counter = form.querySelector('[data-kysymysnumero]');
  const prompt = form.querySelector('[data-kehote]');
  const input = form.elements.namedItem('vastaus');
  const check = form.querySelector('[type="submit"]');
  const status = section.querySelector('[data-palaute]');
  const next = section.querySelector('[data-seuraava]');
  let index = 0;
  let correct = 0;

  function showQuestion() {
    status.textContent = '';
    counter.textContent = `Kysymys ${index + 1} / ${questions.length}`;
    prompt.textContent = questions[index].prompt;
    input.value = '';
    input.readOnly = false;
    check.disabled = false;
    next.hidden = true;
    form.hidden = false;
    input.focus();
  }

  // Pohjassa pysyvä Enter ei saa aktivoida painiketta fokuksen siirryttyä.
  section.querySelector('.intervallikysely').addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.repeat) event.preventDefault();
  });

  start.hidden = false;
  start.addEventListener('click', () => {
    index = 0;
    correct = 0;
    start.hidden = true;
    section.querySelector('details').open = false;
    showQuestion();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.readOnly || !input.value.trim()) return;

    const question = questions[index];
    const accepted = acceptsAnswer(question.answers, input.value);
    correct += Number(accepted);
    input.readOnly = true;
    check.disabled = true;
    next.textContent = index === questions.length - 1 ? 'Näytä tulos' : 'Seuraava kysymys';
    next.hidden = false;
    next.focus();
    status.textContent = `${accepted ? 'Oikein!' : 'Vastaus ei osunut.'} ${question.explanation}`;
  });
  next.addEventListener('click', () => {
    index += 1;
    if (index < questions.length) {
      showQuestion();
      return;
    }
    form.hidden = true;
    next.hidden = true;
    start.textContent = 'Kertaa uudelleen';
    start.hidden = false;
    start.focus();
    status.textContent = `Muistiharjoitus päättyi. Oikein ${correct} / ${questions.length}.`;
  });
}

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-intervallimuisti]').forEach(mount);
}
