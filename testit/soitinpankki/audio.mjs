export const sampleKey = ({ string, midi }) => `${string}:${midi}`;

export async function loadSamples(context, bank, events, formats, cache, signal, metrics) {
    const wanted = new Set(events.map(sampleKey));
    const selected = bank.samples.filter(sample => wanted.has(sampleKey(sample)));
    if (selected.length !== wanted.size) throw new Error('Pankista puuttuu kokeen näyte.');

    const samples = await Promise.all(selected.map(async sample => {
        const key = sampleKey(sample);
        let lastError;
        for (const format of formats) {
            signal.throwIfAborted();
            const info = sample.files[format];
            const cached = cache.get(info.path);
            if (cached) {
                metrics.cached += 1;
                return [key, cached];
            }
            try {
                const response = await fetch(new URL(info.path, import.meta.url), { signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.arrayBuffer();
                metrics.bytes += data.byteLength;
                const start = performance.now();
                let buffer;
                try {
                    buffer = await context.decodeAudioData(data);
                } finally {
                    metrics.decodeMs += performance.now() - start;
                }
                signal.throwIfAborted();
                const clip = { buffer, onset: info.onsetMs / 1000, format,
                    rate: 2 ** (sample.playbackSemitones / 12) };
                cache.set(info.path, clip);
                return [key, clip];
            } catch (error) {
                signal.throwIfAborted();
                lastError = error;
            }
        }
        throw new Error(`Näyte ${sample.pitch} jäi lataamatta (${lastError?.message ?? 'ei tiedostomuotoa'}).`);
    }));
    return new Map(samples);
}

export function playScore(context, events, samples, gain, {
    lead = 0.1, output = context.destination, onEnd = () => {},
} = {}) {
    const master = context.createGain();
    master.gain.value = gain;
    master.connect(output);
    const voices = new Set();
    const start = context.currentTime + lead;
    const nextByString = new Map();
    let stopped = false;

    // Look ahead on each string. A short release ends exactly at the replacement attack.
    for (const event of [...events].reverse()) {
        const sample = samples.get(sampleKey(event));
        const strike = start + event.at;
        const next = nextByString.get(event.string) ?? Infinity;
        nextByString.set(event.string, strike);
        const release = start + event.releaseAt;
        const end = Math.min(release + event.fade, next);
        const fadeAt = Math.min(release, next - 0.006);
        const source = context.createBufferSource();
        const envelope = context.createGain();
        const begins = strike - sample.onset / sample.rate;
        source.buffer = sample.buffer;
        source.playbackRate.value = sample.rate;
        envelope.gain.setValueAtTime(1, begins);
        envelope.gain.setValueAtTime(1, fadeAt);
        envelope.gain.linearRampToValueAtTime(0, end);
        source.connect(envelope);
        envelope.connect(master);
        const voice = { source, begins, end };
        voices.add(voice);
        source.onended = () => {
            source.disconnect();
            envelope.disconnect();
            voices.delete(voice);
            if (voices.size === 0) {
                master.disconnect();
                if (!stopped) onEnd();
            }
        };
        source.start(begins);
        source.stop(end);
    }

    return {
        start,
        stop(immediate = false) {
            if (stopped && !immediate) return;
            stopped = true;
            const now = context.currentTime;
            const end = immediate ? now : now + 0.025;
            if (immediate) master.disconnect();
            else {
                master.gain.setValueAtTime(gain, now);
                master.gain.linearRampToValueAtTime(0, end);
            }
            for (const voice of voices) {
                const stopAt = voice.begins >= now ? now : end;
                voice.source.stop(Math.min(voice.end, stopAt));
            }
        },
    };
}
