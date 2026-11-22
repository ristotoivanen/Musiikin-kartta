import { loadSamples, playScore } from './audio.mjs';
import { scores } from './scores.mjs';

const status = document.querySelector('#status');
const stopButton = document.querySelector('#stop');
const state = document.querySelector('#context');
const cache = new Map();
let catalog;
let context;
let active;
let fading;

const mimeTypes = { ogg: 'audio/ogg; codecs="vorbis"', m4a: 'audio/mp4; codecs="mp4a.40.2"' };
const audioProbe = document.createElement('audio');
const formats = audioProbe.canPlayType(mimeTypes.ogg) ? ['ogg', 'm4a'] : ['m4a', 'ogg'];
const format = new Intl.NumberFormat('fi', { maximumFractionDigits: 1 });

function showMetrics(metrics, samples) {
    document.querySelector('#bytes').textContent = `${format.format(metrics.bytes)} B`;
    document.querySelector('#decode').textContent = `${format.format(metrics.decodeMs)} ms`;
    document.querySelector('#samples').textContent = samples ? `${samples.size} (${metrics.cached} muistista)` : '–';
    const codecs = samples && [...new Set([...samples.values()].map(sample => sample.format.toUpperCase()))];
    document.querySelector('#codec').textContent = codecs ? codecs.join(', ') : '–';
}

function stop(message, immediate = false) {
    const request = active;
    active = undefined;
    request?.controller.abort();
    fading?.stop(true);
    request?.playback?.stop(immediate);
    fading = immediate ? undefined : request?.playback;
    stopButton.disabled = true;
    if (message) status.textContent = message;
}

function audioContext() {
    try {
        if (navigator.audioSession) navigator.audioSession.type = 'playback';
    } catch { /* The audio session hint is optional. */ }
    if (!context) {
        const AudioEngine = window.AudioContext || window.webkitAudioContext;
        if (!AudioEngine) throw new Error('Selain ei tue Web Audiota.');
        context = new AudioEngine();
        state.textContent = context.state;
        context.addEventListener('statechange', () => {
            state.textContent = context.state;
            if (context.state !== 'running' && (fading || active?.playback ||
                (active && context.state === 'interrupted'))) {
                stop('Äänentoisto keskeytyi. Käynnistä koe uudelleen.', true);
            }
        });
    }
    return context;
}

async function resume(context, signal) {
    if (context.state === 'running') return;
    let timeout;
    let abort;
    try {
        await Promise.race([
            context.resume(),
            new Promise((_, reject) => {
                timeout = setTimeout(() => reject(new Error('Äänikonteksti ei käynnistynyt.')), 4000);
                abort = () => reject(signal.reason);
                signal.addEventListener('abort', abort, { once: true });
            }),
        ]);
    } finally {
        clearTimeout(timeout);
        signal.removeEventListener('abort', abort);
    }
}

async function play(button) {
    stop();
    const request = { controller: new AbortController() };
    const { signal } = request.controller;
    active = request;
    stopButton.disabled = false;
    const bankInput = document.querySelector('input[name="bank"]:checked');
    const events = scores[button.dataset.score];
    const metrics = { bytes: 0, decodeMs: 0, cached: 0 };
    showMetrics(metrics);
    status.textContent = 'Valmistellaan ääntä…';
    try {
        // Resume is called inside the user gesture, before any fetch or decode.
        const context = audioContext();
        await resume(context, signal);
        signal.throwIfAborted();
        if (!catalog) {
            const response = await fetch(new URL('manifest.json', import.meta.url), { signal });
            if (!response.ok) throw new Error(`Näyteluetteloa ei saatu (HTTP ${response.status}).`);
            catalog = (await response.json()).banks;
        }
        const bank = catalog[bankInput.value];
        const samples = await loadSamples(context, bank, events, formats, cache, signal, metrics);
        signal.throwIfAborted();
        if (context.state !== 'running') throw new Error('Äänikonteksti keskeytyi.');
        showMetrics(metrics, samples);
        request.playback = playScore(context, events, samples, bank.gain, {
            onEnd: () => {
                if (active === request) {
                    request.playback = undefined;
                    stop('Koe päättyi.');
                }
            },
        });
        status.textContent = `Toistetaan · ${bankInput.dataset.name} · ${button.textContent}`;
    } catch (error) {
        if (active !== request) return;
        showMetrics(metrics);
        stop(`Toisto ei käynnistynyt. ${error.message} Kokeile uudelleen.`, true);
    }
}

for (const button of document.querySelectorAll('[data-score]')) {
    button.addEventListener('click', () => void play(button));
}
document.querySelector('#banks').addEventListener('change', () => {
    stop('Pankki vaihdettu. Valitse kuuntelukoe.');
    showMetrics({ bytes: 0, decodeMs: 0 });
});
stopButton.addEventListener('click', () => stop('Pysäytetty.'));
document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(active ? 'Koe keskeytyi sivun siirryttyä taustalle.' : undefined, true);
});
window.addEventListener('pagehide', () => {
    stop(active ? 'Koe keskeytyi sivulta poistuttaessa.' : undefined, true);
});

const timing = scores.strum.map(event => Math.round(event.at * 1000)).join(' · ');
document.querySelector('#strum-timing').textContent = `${timing} ms`;
