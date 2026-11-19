// Sävelet ja intervallit -oppitunnin harjoitukset. Kaikki välien nimet, lyhenteet ja
// sävelesimerkit luetaan sivun intervallitaulukosta (tr[data-pa]). Tämä moduuli lisää niihin
// vain opetustekstit, harjoitusten järjestyksen ja vihjeet. Mitään ei tallenneta.
//
// Oppitunnin järjestys: opettelukortit, tuettu monivalinta, taulukko ja lopuksi kirjoitettava
// 29 kysymyksen muistamistesti.

export const anchors = [0, 3, 4, 7, 12];
// Ankkurien jälkeen muut välit opetellaan pareittain.
export const pairs = [[1, 2], [5, 6], [8, 9], [10, 11]];
export const cardOrder = [...anchors, ...pairs.flat()];

const groupNames = new Map([
  ...anchors.map(pa => [pa, 'Ankkuri']),
  [1, 'Pari: sekunnit'], [2, 'Pari: sekunnit'],
  [5, 'Pari: kvartti ja tritonus'], [6, 'Pari: kvartti ja tritonus'],
  [8, 'Pari: sekstit'], [9, 'Pari: sekstit'],
  [10, 'Pari: septimit'], [11, 'Pari: septimit'],
]);

// Opettelukortin lyhyt selitys. Jokainen selitys sitoo välin aiemmin opittuun ankkuriin.
export const cardExplanations = {
  0: 'Kaksi säveltä samalla korkeudella. Kitaralla soitat saman nauhan uudelleen. Priimi on lähtökohta, josta muut välit lasketaan.',
  3: 'Mollisoinnun terssi. Luvun alun C–E♭ on pieni terssi.',
  4: 'Duurisoinnun terssi. Se on puolisävelaskeleen leveämpi kuin pieni terssi. Luvun alun C–E on suuri terssi.',
  7: 'C-duurissa ja C-mollissa C:stä ylempään G:hen on seitsemän puolisävelaskelta eli puhdas kvintti. G voi myös olla soinnun alin sävel. Suuri ja pieni terssi muodostavat yhdessä kvintin.',
  12: 'Sama sävelnimi ylempänä. A-kielellä ylempi A soi 12. nauhalla.',
  1: 'Puolisävelaskel eli viereinen nauha. A–B♭ on pieni sekunti. A–A♯ on yhtä kaukana, mutta sen nimi on ylinouseva priimi, koska sävelkirjain pysyy samana.',
  2: 'Kokosävelaskel eli kahden nauhan siirto. Kaksi suurta sekuntia peräkkäin muodostavat suuren terssin.',
  5: 'Kokosävelaskelta kapeampi kuin kvintti. Kitaran vierekkäiset kielet on useimmiten viritetty kvartin päähän toisistaan, esimerkiksi E- ja A-kieli.',
  6: 'Puolisävelaskeleen kapeampi kuin kvintti. Tritonus jakaa oktaavin kahteen yhtä suureen osaan. Sävelkirjoituksen mukaan A–D♯ on ylinouseva kvartti ja A–E♭ vähennetty kvintti.',
  8: 'Puolisävelaskeleen leveämpi kuin kvintti. Pieni ja suuri seksti eroavat puolisävelaskeleella.',
  9: 'Pienen terssin verran kapeampi kuin oktaavi.',
  10: 'Kokosävelaskelta kapeampi kuin oktaavi. Pieni ja suuri septimi eroavat puolisävelaskeleella.',
  11: 'Puolisävelaskeleen kapeampi kuin oktaavi.',
};

// Monivalinnan vihjeet muistuttavat aiemmin opituista väleistä (viitteet). Vihjeissä nimetyt
// välit ovat aina viitteitä, eikä viite ole koskaan vastausvaihtoehto. Näin vihje ei sulje pois
// yhtään vaihtoehtoa nimeämällä sen. Vihjeissä ei ole numeroita eikä kysytyn välin sävelparia,
// ja nimikysymyksen vihje ei nimeä kysyttyä väliä. Säännöt tarkistetaan vihjeen tekstistä
// testissä tests/intervallimuisti.test.ts.
// etaisyys = vihje kysymykseen "Kuinka monta puolisävelaskelta on …?"
// nimi = vihje kysymykseen "Mikä on … pa:n tavallinen intervallinimi?"
export const hints = {
  0: {
    viitteet: [12],
    etaisyys: 'Priimi tarkoittaa ensimmäistä. Muista, että oktaavissa sama sävelnimi toistuu ylempänä.',
    nimi: 'Vertaa oktaaviin: siinä sama sävelnimi toistuu ylempänä. Tässä välissä sävel ei nouse lainkaan.',
  },
  3: {
    viitteet: [4],
    etaisyys: 'Pieni terssi on puolisävelaskeleen kapeampi kuin suuri terssi. Muista luvun alun mollisointu C–E♭–G.',
    nimi: 'Mollisoinnussa tämä on alimman ja keskimmäisen sävelen väli, kuten luvun alun C–E♭. Duurisoinnussa vastaava väli on puolisävelaskeleen leveämpi.',
  },
  4: {
    viitteet: [3],
    etaisyys: 'Suuri terssi on puolisävelaskeleen leveämpi kuin pieni terssi. Muista luvun alun duurisointu C–E–G.',
    nimi: 'Duurisoinnussa tämä on alimman ja keskimmäisen sävelen väli, kuten luvun alun C–E. Mollisoinnussa vastaava väli on puolisävelaskeleen kapeampi.',
  },
  7: {
    viitteet: [12],
    etaisyys: 'Kvintti ulottuu C-duuri- ja C-mollisoinnuissa perussävelestä C ylempään G:hen. Voimasoinnussa soivat perussävel, kvintti ja usein myös oktaavi.',
    nimi: 'Luvun alun C–G on sama väli C-duurissa ja C-mollissa, kun lasket C:stä ylöspäin. Voimasoinnussa tämä väli on oktaavia kapeampi.',
  },
  12: {
    viitteet: [0],
    etaisyys: 'Oktaavissa sama sävelnimi toistuu ylempänä, toisin kuin priimissä. Laske A-kielen nauhat vapaasta kielestä siihen nauhaan, jossa A soi uudelleen.',
    nimi: 'Sama sävelnimi soi ylempänä, kuten kromaattisen harjoituksen lopussa. Priimissä sävel ei nouse lainkaan.',
  },
  1: {
    viitteet: [3],
    etaisyys: 'Pieni sekunti on kokosävelaskelta kapeampi kuin pieni terssi.',
    nimi: 'Tämä väli on kokosävelaskelta kapeampi kuin pieni terssi.',
  },
  2: {
    viitteet: [4],
    etaisyys: 'Kun soitat suuren sekunnin ja sen päälle toisen samanlaisen, päädyt suureen terssiin.',
    nimi: 'Kaksi tällaista väliä peräkkäin muodostavat suuren terssin.',
  },
  5: {
    viitteet: [7],
    etaisyys: 'Puhdas kvartti on kokosävelaskelta kapeampi kuin kvintti. Kitaran vierekkäiset kielet on useimmiten viritetty tämän välin päähän toisistaan.',
    nimi: 'Kitaran E- ja A-kielen vapaat sävelet ovat tämän välin päässä toisistaan. Kvintistä tämä väli on kokosävelaskelta kapeampi.',
  },
  6: {
    viitteet: [7, 12],
    etaisyys: 'Tritonus on puolisävelaskeleen kapeampi kuin kvintti.',
    nimi: 'Tämä väli on puolisävelaskeleen kapeampi kuin kvintti ja jakaa oktaavin kahteen yhtä suureen osaan. Sävelkirjoituksen mukaan sillä on useampi nimi.',
  },
  8: {
    viitteet: [7],
    etaisyys: 'Pieni seksti on puolisävelaskeleen leveämpi kuin kvintti.',
    nimi: 'Lähde kvintistä ja nouse vielä puolisävelaskel.',
  },
  9: {
    viitteet: [12, 3],
    etaisyys: 'Suuri seksti on pienen terssin verran kapeampi kuin oktaavi.',
    nimi: 'Laske oktaavista alaspäin pienen terssin verran.',
  },
  10: {
    viitteet: [12],
    etaisyys: 'Pieni septimi on kokosävelaskelta kapeampi kuin oktaavi.',
    nimi: 'Laske oktaavista alaspäin kokosävelaskel.',
  },
  11: {
    viitteet: [12],
    etaisyys: 'Suuri septimi on puolisävelaskeleen kapeampi kuin oktaavi.',
    nimi: 'Laske oktaavista alaspäin puolisävelaskel.',
  },
};

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

/** Opettelukortit korttijärjestyksessä: ensin ankkurit, sitten parit. */
export function learningCards(intervals) {
  return cardOrder.map(pa => {
    const interval = intervals.find(row => row.pa === pa);
    return {
      pa,
      name: interval.name,
      otherNames: interval.otherNames ?? '',
      abbreviation: interval.aliases.filter(alias => /^[mMPAd]\d+$/.test(alias)).join(' tai '),
      example: interval.example,
      group: groupNames.get(pa),
      explanation: cardExplanations[pa],
    };
  });
}

/**
 * Vastausvaihtoehtojen joukko: oikea vastaus ja kolme sitä lähintä väliä samasta joukosta.
 * Vihjeen viitevälit eivät ole koskaan vaihtoehtoja. Näyttöjärjestys sekoitetaan erikseen.
 */
export function choiceOptions(pa, pool) {
  const references = hints[pa].viitteet;
  const distractors = pool.filter(other => other !== pa && !references.includes(other))
    .sort((a, b) => Math.abs(a - pa) - Math.abs(b - pa) || a - b)
    .slice(0, 3);
  return [pa, ...distractors].sort((a, b) => a - b);
}

/** Fisher–Yates-sekoitus uuteen taulukkoon. random palauttaa luvun väliltä [0, 1). */
export function shuffled(values, random = Math.random) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Tuetun monivalinnan 26 kysymystä: ankkurit ensin, sitten muut välit, kumpaankin suuntaan.
 * Vaihtoehtojen järjestys arvotaan kerran kierrosta kohden, joten se ei vaihdu kesken kysymyksen.
 */
export function choiceQuestions(intervals, random = Math.random) {
  const byPa = new Map(intervals.map(interval => [interval.pa, interval]));
  const everyInterval = intervals.map(({ pa }) => pa);
  const toDistance = (pa, pool, phase) => {
    const interval = byPa.get(pa);
    return {
      kind: 'etaisyys', pa, phase,
      prompt: `Kuinka monta puolisävelaskelta on ${interval.name}?`,
      options: shuffled(choiceOptions(pa, pool), random).map(value => ({ value: String(value), label: `${value} pa` })),
      answer: String(pa),
      hint: hints[pa].etaisyys,
      explanation: explanation(interval),
    };
  };
  const toName = (pa, pool, phase) => ({
    kind: 'nimi', pa, phase,
    prompt: `Mikä on ${pa} pa:n tavallinen intervallinimi?`,
    options: shuffled(choiceOptions(pa, pool), random).map(value => ({ value: String(value), label: byPa.get(value).name })),
    answer: String(pa),
    hint: hints[pa].nimi,
    explanation: explanation(byPa.get(pa)),
  });
  const inBothDirections = (group, pool, phase) => group.flatMap((pa, index) => [
    toDistance(pa, pool, phase),
    toName(group[(index + 2) % group.length], pool, phase),
  ]);
  return [
    ...inBothDirections(anchors, anchors, 'Ankkurit'),
    ...inBothDirections(pairs.flat(), everyInterval, 'Muut välit'),
  ];
}

function readIntervals(section) {
  return Array.from(section.querySelectorAll('tr[data-pa]'), row => {
    const [first, ...rest] = Array.from(row.cells[1].childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .map(node => node.textContent.trim())
      .filter(Boolean);
    return {
      pa: Number(row.dataset.pa),
      name: first,
      otherNames: rest.join(' '),
      example: row.cells[2].textContent.trim(),
      aliases: row.dataset.lyhenteet.split('|'),
    };
  });
}

// Kun painike katoaa napsautuksesta, sen alla oleva sisältö siirtyy osoittimen kohdalle.
// Kaksoisnapsautuksen toinen napsautus (detail > 1) ei saa avata taulukkoa, merkitä lukua
// tehdyksi tai siirtää sivulta. Yksittäiset napsautukset ja näppäimistö toimivat normaalisti.
let repeatedClickGuard = 0;
function guardVanishingButton(button) {
  button.addEventListener('click', () => { repeatedClickGuard = performance.now() + 600; });
}
if (typeof document !== 'undefined') {
  document.addEventListener('click', event => {
    if (event.detail > 1 && performance.now() < repeatedClickGuard) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
}

// Pohjassa pysyvä Enter ei saa aktivoida painiketta fokuksen siirryttyä.
function ignoreRepeatedEnter(element) {
  element.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.repeat) event.preventDefault();
  });
}

function distanceText(pa) {
  return pa === 1 ? '1 puolisävelaskel (1 pa)' : `${pa} puolisävelaskelta (${pa} pa)`;
}

function drawTrack(track, pa) {
  track.setAttribute('aria-label', pa === 0
    ? 'Etäisyys kuvana: sävel ei nouse lainkaan.'
    : `Etäisyys kuvana: ${pa} oktaavin 12 puolisävelaskeleesta.`);
  track.replaceChildren(...Array.from({ length: 13 }, (_, step) => {
    const cell = document.createElement('span');
    if (step === 0) cell.className = 'lahto';
    if (step > 0 && step <= pa) cell.className = step === pa ? 'kohde' : 'kuljettu';
    if (pa === 0 && step === 0) cell.className = 'lahto kohde';
    return cell;
  }));
}

function mountCards(section, intervals) {
  const root = section.querySelector('[data-kortit]');
  if (!root) return;
  const cards = learningCards(intervals);
  const part = name => root.querySelector(`[data-${name}]`);
  const content = part('korttisisalto');
  const number = part('korttinumero');
  const name = part('korttinimi');
  const abbreviation = part('korttilyhenne');
  const otherNames = part('korttimuutnimet');
  const answer = part('korttivastaus');
  const distance = part('korttietaisyys');
  const notes = part('korttisavelet');
  const track = part('korttimatka');
  const text = part('korttiselitys');
  const reveal = part('korttinayta');
  const previous = part('korttiedellinen');
  const next = part('korttiseuraava');
  const practice = part('muistittelu');
  let index = 0;
  let hiding = false;
  let revealed = true;

  function render() {
    const card = cards[index];
    const last = index === cards.length - 1;
    number.textContent = `Kortti ${index + 1} / ${cards.length} · ${card.group}${last ? ' · viimeinen kortti' : ''}`;
    name.textContent = card.name[0].toUpperCase() + card.name.slice(1);
    abbreviation.textContent = card.abbreviation ? `(${card.abbreviation})` : '';
    const show = !hiding || revealed;
    // Tritonuksen lisänimet kertovat sävelkirjoituksesta, joten ne piilotetaan vastauksen mukana.
    otherNames.textContent = show && card.otherNames ? `Myös ${card.otherNames}.` : '';
    otherNames.hidden = !(show && card.otherNames);
    // Muistittelutilassa vastausta ei ole sivulla lainkaan ennen näyttämistä.
    answer.hidden = !show;
    distance.textContent = show ? distanceText(card.pa) : '';
    notes.textContent = show ? `A:sta ylöspäin: ${card.example}` : '';
    text.textContent = show ? card.explanation : '';
    if (show) drawTrack(track, card.pa);
    else {
      track.replaceChildren();
      track.removeAttribute('aria-label');
    }
    reveal.hidden = show;
    previous.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(last));
  }

  function move(step) {
    const target = index + step;
    if (target < 0 || target >= cards.length) return;
    index = target;
    revealed = !hiding;
    render();
  }

  ignoreRepeatedEnter(root);
  guardVanishingButton(reveal);
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  reveal.addEventListener('click', () => {
    revealed = true;
    render();
    (index === cards.length - 1 ? previous : next).focus();
  });
  practice.addEventListener('click', () => {
    hiding = !hiding;
    revealed = !hiding;
    practice.setAttribute('aria-pressed', String(hiding));
    render();
  });
  render();
  root.hidden = false;
  // Ilmoitukset vasta käyttäjän toimista, ei sivun latautuessa.
  content.setAttribute('aria-live', 'polite');
}

function mountChoice(section, intervals) {
  const box = section.querySelector('.intervallivalinta');
  if (!box) return;
  let questions = choiceQuestions(intervals);
  const start = box.querySelector('[data-valinta-aloita]');
  const form = box.querySelector('[data-valinta]');
  const fieldset = form.querySelector('fieldset');
  const counter = form.querySelector('[data-valinta-numero]');
  const prompt = form.querySelector('[data-valinta-kysymys]');
  const options = form.querySelector('[data-vaihtoehdot]');
  const hint = form.querySelector('[data-vihje]');
  const hintButton = form.querySelector('[data-vihjenappi]');
  const check = form.querySelector('[type="submit"]');
  const status = box.querySelector('[data-valinta-palaute]');
  const next = box.querySelector('[data-valinta-seuraava]');
  hint.id = 'intervallivalinnan-vihje';
  hintButton.setAttribute('aria-controls', hint.id);
  let index = 0;
  let correct = 0;
  let answered = false;

  function showHint(visible) {
    hint.hidden = !visible;
    hint.textContent = visible ? questions[index].hint : '';
    hintButton.setAttribute('aria-expanded', String(visible));
    hintButton.textContent = visible ? 'Piilota vihje' : 'Näytä vihje';
  }

  function showQuestion() {
    const question = questions[index];
    answered = false;
    counter.textContent = `Kysymys ${index + 1} / ${questions.length} · ${question.phase}`;
    prompt.textContent = question.prompt;
    options.replaceChildren(...question.options.map(option => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'intervallivalinta';
      input.value = option.value;
      const text = document.createElement('span');
      text.className = 'vaihtoehto';
      text.textContent = option.label;
      label.append(input, ' ', text);
      return label;
    }));
    fieldset.disabled = false;
    showHint(false);
    hintButton.hidden = false;
    check.disabled = false;
    status.textContent = '';
    next.hidden = true;
    form.hidden = false;
    options.querySelector('input').focus();
  }

  ignoreRepeatedEnter(box);
  guardVanishingButton(start);
  guardVanishingButton(next);
  start.hidden = false;
  start.addEventListener('click', () => {
    // Uusi kierros arpoo vaihtoehdoille uuden järjestyksen.
    questions = choiceQuestions(intervals);
    index = 0;
    correct = 0;
    start.hidden = true;
    showQuestion();
  });
  hintButton.addEventListener('click', () => showHint(hint.hidden));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (answered) return;
    const question = questions[index];
    const chosen = form.elements.namedItem('intervallivalinta').value;
    if (!chosen) {
      status.textContent = 'Valitse ensin yksi vaihtoehto.';
      return;
    }
    answered = true;
    const accepted = chosen === question.answer;
    correct += Number(accepted);
    const right = question.options.find(option => option.value === question.answer);
    for (const label of options.querySelectorAll('label')) {
      const { value } = label.querySelector('input');
      const mark = value === question.answer ? 'oikea vastaus' : value === chosen ? 'valintasi' : '';
      if (!mark) continue;
      label.classList.add(value === question.answer ? 'oikea' : 'vaara');
      const note = document.createElement('span');
      note.className = 'merkinta';
      note.textContent = ` – ${mark}`;
      label.querySelector('.vaihtoehto').append(note);
    }
    fieldset.disabled = true;
    check.disabled = true;
    hintButton.hidden = true;
    next.textContent = index === questions.length - 1 ? 'Näytä tulos' : 'Seuraava kysymys';
    next.hidden = false;
    next.focus();
    status.textContent = accepted
      ? `Oikein! ${question.explanation}`
      : `Ei vielä. Oikea vastaus on ${right.label}. ${question.explanation}`;
  });
  next.addEventListener('click', () => {
    index += 1;
    if (index < questions.length) {
      showQuestion();
      return;
    }
    form.hidden = true;
    next.hidden = true;
    start.textContent = 'Aloita monivalinta alusta';
    start.hidden = false;
    start.focus();
    status.textContent = `Monivalinta päättyi. Oikein ${correct} / ${questions.length}. `
      + 'Kun valinnat sujuvat, kertaa taulukko ja tee lopuksi muistamistesti.';
  });
}

function mountRecall(section, intervals) {
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

  ignoreRepeatedEnter(section.querySelector('.intervallikysely'));
  guardVanishingButton(start);
  guardVanishingButton(next);

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

function mount(section) {
  const intervals = readIntervals(section);
  mountCards(section, intervals);
  mountChoice(section, intervals);
  mountRecall(section, intervals);
}

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-intervallimuisti]').forEach(mount);
}
