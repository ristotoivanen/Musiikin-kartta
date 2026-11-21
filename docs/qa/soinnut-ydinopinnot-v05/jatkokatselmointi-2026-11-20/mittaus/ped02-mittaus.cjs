// PED-02: renderöi 01:n "Sävelet yksitellen" -esimerkin sointuharjoitus.js:n kaavalla offline-tilassa
// ja mittaa kunkin sävelen kuuluvan alueen. Ei soita mitään kaiuttimista.
const path = require('path');
const fs = require('fs');
const wt = process.argv[2];
const out = process.argv[3];
const { chromium } = require(path.join(wt, 'node_modules', 'playwright'));

(async () => {
  const browser = await chromium.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--mute-audio', '--disable-audio-output'],
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8765/oppi/soinnut/kuule-ja-kokoa-sointu.html');
  const result = await page.evaluate(async () => {
    const SR = 48000;
    const base = new URL('../../assets/audio/soinnut/', location.href);
    const pitches = { G: 'G:G3', B: 'B:B3', D: 'D:D4' };
    const decodeCtx = new OfflineAudioContext(1, 1, SR);
    const buffers = {};
    for (const [name, pitch] of Object.entries(pitches)) {
      const [string, note] = pitch.split(':');
      const res = await fetch(new URL(`INSGuitarSteel_String${string}_Vel02_${note}_01.ogg`, base));
      buffers[name] = await decodeCtx.decodeAudioData(await res.arrayBuffer());
    }
    const sampleInfo = Object.fromEntries(Object.entries(buffers).map(([k, b]) => [k, +b.duration.toFixed(3)]));

    // Sama verhokäyrä kuin assets/sointuharjoitus.js:n schedule()-funktiossa.
    async function render(events, total) {
      const ctx = new OfflineAudioContext(1, Math.ceil(total * SR), SR);
      for (const { name, at, duration, gain } of events) {
        const src = ctx.createBufferSource();
        src.buffer = buffers[name];
        const env = ctx.createGain();
        const fade = duration > 2 ? 0.55 : 0.22;
        env.gain.setValueAtTime(0.0001, at);
        env.gain.linearRampToValueAtTime(gain, at + 0.014);
        env.gain.setValueAtTime(gain, at + duration - fade);
        env.gain.exponentialRampToValueAtTime(0.0001, at + duration);
        src.connect(env).connect(ctx.destination);
        src.start(at);
        src.stop(at + duration + 0.02);
      }
      return (await ctx.startRendering()).getChannelData(0);
    }
    const frame = 0.01;
    function rmsDb(data) {
      const n = Math.round(frame * SR);
      const out = [];
      for (let i = 0; i < data.length; i += n) {
        let s = 0;
        for (let j = i; j < Math.min(i + n, data.length); j++) s += data[j] * data[j];
        out.push(10 * Math.log10(s / n + 1e-12));
      }
      return out;
    }
    const variants = {
      nykyinen: { interval: 0.52, duration: 1.2, gain: 0.48 },
      vaihtoehtoA_erillaan: { interval: 0.70, duration: 0.62, gain: 0.48 },
      vaihtoehtoB_pilotin_tahti: { interval: 1.18, duration: 1.05, gain: 0.48 },
    };
    const report = { sampleInfo, frame, variants: {} };
    const wavs = {};
    for (const [key, v] of Object.entries(variants)) {
      const names = ['G', 'B', 'D'];
      const events = names.map((name, i) => ({ name, at: i * v.interval, duration: v.duration, gain: v.gain }));
      const total = events.at(-1).at + v.duration + 0.3;
      const voices = [];
      for (const e of events) voices.push(rmsDb(await render([e], total)));
      const peak = Math.max(...voices.flat());
      // Kuuluva = kehys enintään 30 dB koko esimerkin huipun alapuolella (n. 3 % amplitudista).
      const threshold = peak - 30;
      const spans = voices.map((db, i) => {
        const on = db.map(x => x > threshold);
        const first = on.indexOf(true), last = on.lastIndexOf(true);
        return { name: names[i], alkaa: +(first * frame).toFixed(2), loppuu: +((last + 1) * frame).toFixed(2) };
      });
      const overlap = (a, b) => Math.max(0, Math.min(a.loppuu, b.loppuu) - Math.max(a.alkaa, b.alkaa));
      const all3 = Math.max(0, Math.min(...spans.map(s => s.loppuu)) - Math.max(...spans.map(s => s.alkaa)));
      // Täysi voimakkuus (ennen häivytystä) koodin mukaan.
      const fade = v.duration > 2 ? 0.55 : 0.22;
      report.variants[key] = {
        ...v,
        aloitukset_s: events.map(e => +e.at.toFixed(2)),
        kesto_koodissa_s: v.duration,
        kokonaiskesto_s: +(events.at(-1).at + v.duration).toFixed(2),
        kuuluvat_alueet: spans,
        paallekkain_GB_s: +overlap(spans[0], spans[1]).toFixed(2),
        paallekkain_BD_s: +overlap(spans[1], spans[2]).toFixed(2),
        kaikki_kolme_s: +all3.toFixed(2),
        paallekkain_koodissa_s: +Math.max(0, v.duration - v.interval).toFixed(2),
        tasainen_paallekkain_ennen_haivytysta_s: +Math.max(0, v.duration - fade - v.interval).toFixed(2),
      };
      const mix = await render(events, total);
      wavs[key] = Array.from(mix);
    }
    // Vertailuksi "Sävelet yhdessä" (ydinYhdessa: 1,9 s, gain 0,33, ei porrastusta).
    const together = await render(['G', 'B', 'D'].map(name => ({ name, at: 0, duration: 1.9, gain: 0.33 })), 2.2);
    wavs.yhdessa_nykyinen = Array.from(together);
    return { report, wavs, SR };
  });
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'ped02-mittaus.json'), JSON.stringify(result.report, null, 2));
  for (const [name, data] of Object.entries(result.wavs)) {
    const n = data.length;
    const buf = Buffer.alloc(44 + n * 2);
    buf.write('RIFF', 0); buf.writeUInt32LE(36 + n * 2, 4); buf.write('WAVE', 8);
    buf.write('fmt ', 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(1, 22);
    buf.writeUInt32LE(result.SR, 24); buf.writeUInt32LE(result.SR * 2, 28); buf.writeUInt16LE(2, 32); buf.writeUInt16LE(16, 34);
    buf.write('data', 36); buf.writeUInt32LE(n * 2, 40);
    for (let i = 0; i < n; i++) buf.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(data[i] * 32767))), 44 + i * 2);
    fs.writeFileSync(path.join(out, `01-${name}.wav`), buf);
  }
  console.log(JSON.stringify(result.report, null, 2));
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
