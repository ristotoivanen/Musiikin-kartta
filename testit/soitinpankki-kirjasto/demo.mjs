import { SteelSampleBank, scheduleSteelNotes } from '../../assets/soitinpankki/steel-sampler.mjs';
import { scores } from './scores.mjs';

const status = document.querySelector('#status');
const stopButton = document.querySelector('#stop');
const details = document.querySelector('#details');
const fileInput = document.querySelector('#backing');
const gainInput = document.querySelector('#model-gain');
const gainValue = document.querySelector('#gain-value');
gainInput.addEventListener('input', () => { gainValue.textContent = Number(gainInput.value).toFixed(1).replace('.', ',') + ' ×'; });
let context;
let bank;
let active;
let generation = 0;
const expectedBackingSha = 'd93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897';

function stop(message = 'Pysäytetty.', immediate = false) {
  generation++;
  const prior = active;
  active = null;
  prior?.controller.abort();
  prior?.player?.stop(immediate);
  if (prior?.backing) {
    try { prior.backing.stop(); } catch { /* Jo pysähtynyt. */ }
    prior.backing.disconnect();
    prior.backingGain?.disconnect();
  }
  stopButton.disabled = true;
  if (message) status.textContent = message;
}

function audioContext() {
  if (!context) {
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; }
    catch { /* Safarin valinnainen soittoistunnon vihje. */ }
    const Engine = window.AudioContext || window.webkitAudioContext;
    if (!Engine) throw new Error('Selain ei tue Web Audiota.');
    context = new Engine();
    context.addEventListener('statechange', () => {
      if (context.state !== 'running' && active?.player) stop('Äänentoisto keskeytyi.', true);
    });
  }
  return context;
}

async function resume(ctx, signal) {
  if (ctx.state === 'running') return;
  let timeout;
  let abort;
  try {
    await Promise.race([
      ctx.resume(),
      new Promise((_, reject) => {
        timeout = setTimeout(() => reject(new Error('Äänikonteksti ei käynnistynyt neljässä sekunnissa.')), 4000);
        abort = () => reject(signal.reason);
        signal.addEventListener('abort', abort, { once: true });
      }),
    ]);
  } finally {
    clearTimeout(timeout);
    signal.removeEventListener('abort', abort);
  }
  if (ctx.state !== 'running') throw new Error('Äänikonteksti ei käynnistynyt.');
}

async function run(name) {
  stop('', true);
  const request = { controller: new AbortController() };
  const token = generation;
  active = request;
  stopButton.disabled = false;
  status.textContent = 'Valmistellaan ääntä…';
  try {
    const ctx = audioContext();
    // resume aloitetaan suoraan käyttäjän painalluksesta, ennen latauksia.
    await resume(ctx, request.controller.signal);
    if (token !== generation) return;
    if (!bank) bank = new SteelSampleBank(ctx,
      new URL('../../assets/soitinpankki/meta-steel-v1.json', import.meta.url));
    const prepared = await bank.prepare(scores[name], { signal: request.controller.signal });
    if (token !== generation || ctx.state !== 'running') return;
    let backingBuffer;
    if (name === 'm2') {
      const file = fileInput.files[0];
      if (!file) throw new Error('Valitse ensin hyväksytty M3 B -WAV omalta laitteeltasi.');
      const bytes = await file.arrayBuffer();
      const digest = await crypto.subtle.digest('SHA-256', bytes);
      const sha = Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, '0')).join('');
      if (sha !== expectedBackingSha) {
        throw new Error('Taustan SHA-256 ei vastaa hyväksyttyä M3 B -WAV-tiedostoa.');
      }
      backingBuffer = await ctx.decodeAudioData(bytes);
      if (Math.abs(backingBuffer.duration - 30.4) > 0.1) {
        throw new Error('Taustan kesto ei vastaa 30,4 sekuntia.');
      }
      if (token !== generation) return;
    }
    const startAt = ctx.currentTime + .15;
    request.player = scheduleSteelNotes(ctx, scores[name], prepared.samples, {
      gain: prepared.manifest.referenceGain * (name === 'm2' ? Number(gainInput.value) : 1),
      startAt,
      onEnd: () => {
        if (name !== 'm2' && active === request) stop('Koe päättyi.');
      },
    });
    if (backingBuffer) {
      request.backing = ctx.createBufferSource();
      request.backing.buffer = backingBuffer;
      // Sama B-taustan taso kuin PR #130:n nykyisessä M2-esikatselussa.
      request.backingGain = ctx.createGain();
      request.backingGain.gain.value = 0.62;
      request.backing.connect(request.backingGain);
      request.backingGain.connect(ctx.destination);
      request.backing.start(startAt);
      request.backing.onended = () => {
        if (active === request) stop('Koe päättyi.');
      };
    }
    details.textContent = `${prepared.samples.size} näytettä · ${prepared.stats.bytes} B · purku ${Math.round(prepared.stats.decodeMs)} ms · ${prepared.stats.cacheHits} muistista`;
    status.textContent = 'Toistetaan Meta Steel -äänillä.';
  } catch (error) {
    if (active === request) stop(`Toisto ei käynnistynyt: ${error.message}`, true);
  }
}

for (const button of document.querySelectorAll('[data-score]')) {
  button.addEventListener('click', () => { void run(button.dataset.score); });
}
document.querySelector('#m2').addEventListener('click', () => { void run('m2'); });
stopButton.addEventListener('click', () => stop());
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stop('Koe keskeytyi sivun siirryttyä taustalle.', true);
});
window.addEventListener('pagehide', () => stop('', true));
