/**
 * #160 – kontrolloitu, sokkoutettu M0/M2-kuuntelutesti.
 *
 * Tämä tiedosto tekee A/B/C-tasovaihtoehdot samalle audiolähteelle.
 * Ei audioanalysaattoreita, automaattista optimointia tai lähetystä verkkoon.
 */
const $ = id => document.getElementById(id);

const baseline = Object.freeze({ m0: .30, steel: 2.4, backing: .55 });
const trials = Object.freeze({
  m0: Object.freeze({ mode: 'M0', control: 'm0Gain', values: Object.freeze([.20, .30, .40]), unit: '%',
    title: 'M0: E2-mallikitara suhteessa klikkiin',
    instruction: 'Vertaile kuivan E2:n iskua ja klikkiä. Sama lähtölasku ja sama soittokuvio jokaisella vaihtoehdolla.' }),
  steel: Object.freeze({ mode: 'M2', control: 'steelGain', values: Object.freeze([1.8, 2.4, 3.0]), unit: '×',
    title: 'M2: Steel-mallikitara samalla B-säestyksellä',
    instruction: 'Säestystaso pidetään samana. Vertaile, kuuluvatko E2-iskut selkeästi ilman että kitara peittää koko taustaa.' }),
  backing: Object.freeze({ mode: 'M2', control: 'm2BackingGain', values: Object.freeze([.40, .55, .70]), unit: '%',
    title: 'M2: B-säestys samalla Steel-mallikitaralla',
    instruction: 'Kitarataso pidetään samana. Vertaile, erottuvatko iskut säestyksestä ja kuuluuko myös musiikki.' }),
});

const names = ['A', 'B', 'C'];
const results = new Map();
let active = false;
let group = 'steel';
let options = null;
let heard = new Set();
let chosen = '';
let revealed = false;
let internalModeChange = false;

function shuffle(values) {
  const result = [...values];
  for (let i = result.length - 1; i > 0; i--) {
    const rand = new Uint32Array(1);
    crypto.getRandomValues(rand);
    const j = rand[0] % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return Object.fromEntries(names.map((n, i) => [n, result[i]]));
}

function setControl(id, value) {
  const element = $(id);
  if (!element) throw new Error('Äänisäädin puuttuu: ' + id);
  element.value = String(value);
  element.dispatchEvent(new Event('input', { bubbles: true }));
}

function resetControls() {
  setControl('m0Gain', baseline.m0);
  setControl('steelGain', baseline.steel);
  setControl('m2BackingGain', baseline.backing);
}

function hideManualGains(value) {
  $('m0GainControls').style.display = value ? 'none' : '';
  $('m2GainControls').style.display = value ? 'none' : '';
  $('bassControls').style.display = value ? 'none' : '';
}

function setTrialMode(mode) {
  const button = document.querySelector('[data-mode="' + mode + '"]');
  if (!button) throw new Error('Harjoitustila puuttuu: ' + mode);
  if (button.getAttribute('aria-pressed') !== 'true') {
    internalModeChange = true;
    try {
      button.click();
    } finally {
      internalModeChange = false;
    }
  }
  hideManualGains(true);
}

function setTrialStatus(message) {
  $('trialStatus').textContent = message;
}

function setGroup(next) {
  if (!Object.hasOwn(trials, next)) throw new Error('Tuntematon koe');
  $('stop').click();
  group = next;
  results.delete(group);
  $('trialResultNote').value = '';
  heard = new Set();
  chosen = '';
  revealed = false;
  options = shuffle(trials[group].values);
  $('trialTitle').textContent = trials[group].title;
  $('trialInstruction').textContent = trials[group].instruction;
  $('trialSelect').value = '';
  $('trialRevealResult').hidden = true;
  $('trialRevealResult').textContent = '';
  for (const button of document.querySelectorAll('[data-trial-option]')) {
    button.setAttribute('aria-pressed', 'false');
  }
  setTrialStatus('Vertaa A, B ja C. Jokainen käynnistyy samasta lähtölaskusta.');
  resetControls();
  setTrialMode(trials[group].mode);
}

function begin() {
  active = true;
  document.documentElement.dataset.balanceTrialActive = 'true';
  $('trialSetup').hidden = true;
  $('trialActive').hidden = false;
  $('trialResultNote').value = '';
  const selected = document.querySelector('input[name="trialGroup"]:checked');
  setGroup(selected?.value ?? 'steel');
}

function format(value, unit) {
  return unit === '%' ? Math.round(value * 100) + ' %' :
    value.toFixed(1).replace('.', ',') + ' ×';
}

function stopTrial() {
  if (!active) return;
  $('stop').click();
  active = false;
  delete document.documentElement.dataset.balanceTrialActive;
  $('trialSetup').hidden = false;
  $('trialActive').hidden = true;
  hideManualGains(false);
  resetControls();
  const currentMode = document.querySelector('[data-mode][aria-pressed="true"]')?.dataset.mode;
  $('m0GainControls').hidden = currentMode !== 'M0';
  $('m2GainControls').hidden = currentMode !== 'M2';
}

function playOption(letter) {
  if (!active || !options || !Object.hasOwn(options, letter)) return;
  const spec = trials[group];

  // Älä valitse eri aikakohtaa B-säestyksestä vain siksi, että vaihdetaan A/B/C.
  // Jokainen vaihtoehto alkaa uudestaan samasta lähtöhetkestä ja lähtölaskusta.
  $('stop').click();
  setTrialMode(spec.mode);
  resetControls();
  setControl(spec.control, options[letter]);
  heard.add(letter);
  for (const button of document.querySelectorAll('[data-trial-option]')) {
    button.setAttribute('aria-pressed', String(button.dataset.trialOption === letter));
  }
  setTrialStatus('Kuuntelet ' + letter + ':ää. Vaihtoehdot kuultu: ' +
    [...heard].sort().join(', ') + '. Voit soittaa saman uudelleen.');
  $('start').click();
}

function reveal() {
  if (!active || !options) return;
  chosen = $('trialSelect').value;
  if (!chosen) {
    setTrialStatus('Valitse A/B/C tai "ei selvää eroa" ennen paljastamista.');
    return;
  }
  if (heard.size !== 3) {
    setTrialStatus('Kuuntele ensin kaikki kolme vaihtoehtoa A, B ja C.');
    return;
  }
  revealed = true;
  const spec = trials[group];
  const labels = names.map(name => name + ': ' + format(options[name], spec.unit));
  const result = { group, selected: chosen, options: { ...options },
    listened: [...heard].sort(), notes: $('trialResultNote').value.trim(),
    manualApproval: false };
  results.set(group, result);
  $('trialRevealResult').hidden = false;
  $('trialRevealResult').textContent = labels.join(' · ') +
    ' · Valinta: ' + (chosen === 'none' ? 'ei selvää eroa' : chosen) +
    '. Tämä tallentuu vain tähän avoimeen sivuun.';
  setTrialStatus('Tasot paljastettu. Tämä on koe, ei hyväksytty miksaus.');
}

async function copyResults() {
  if (!results.size) {
    setTrialStatus('Paljasta ensin vähintään yhden kokeen tasot.');
    return;
  }
  const text = JSON.stringify({
    schema: 'mk-160-blind-balance-trial-v1',
    purpose: 'M0-M2-untested-balance-evaluation',
    calibration: 'NOT_APPROVED',
    tests: [...results.values()],
  }, null, 2);
  try {
    await navigator.clipboard.writeText(text);
    setTrialStatus('Tulokset kopioitu leikepöydälle. Voit liittää ne keskusteluun.');
  } catch {
    const output = $('trialCopyFallback');
    output.hidden = false;
    output.value = text;
    output.focus();
    output.select();
    setTrialStatus('Leikepöytä ei ollut käytettävissä. Kopioi näkyvä JSON käsin.');
  }
}

for (const button of document.querySelectorAll('[data-mode]')) {
  button.addEventListener('click', () => {
    if (active && !internalModeChange) stopTrial();
  });
}
$('trialBegin').addEventListener('click', begin);
$('trialEnd').addEventListener('click', stopTrial);
$('trialNewRound').addEventListener('click', () => setGroup(group));
$('trialReveal').addEventListener('click', reveal);
$('trialCopy').addEventListener('click', () => { void copyResults(); });
for (const button of document.querySelectorAll('[data-trial-option]')) {
  button.addEventListener('click', () => playOption(button.dataset.trialOption));
}
for (const radio of document.querySelectorAll('input[name="trialGroup"]')) {
  radio.addEventListener('change', () => {
    if (!active) return;
    if (radio.checked) setGroup(radio.value);
  });
}
