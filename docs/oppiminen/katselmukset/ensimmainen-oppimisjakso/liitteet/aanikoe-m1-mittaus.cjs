// Kertakäyttöinen mittaus (MK-20261117-01, 18.11.2026). Aja beta-pohjaisessa työpuussa: node aanikoe-m1-mittaus.cjs
// Mittaa, kuinka kauan generaattorin E2-ääni soi kirjoitetun pituuden jälkeen tauon puolelle.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROME_EXECUTABLE || undefined }); const p = await b.newPage();
  await p.goto('file://' + __dirname + '/aanikoe-m1.html');
  for (const [voice, reverb] of [['clean', .14], ['clean', 0], ['crunch', .14], ['scratch', .14]]) for (const bpm of [60, 72]) {
    const beat = 60 / bpm;
    const parts = Object.assign(['guitar'], { voice, reverb });
    const g = await p.evaluate(([bpm, voice, reverb]) => window.build(bpm, Object.assign(['guitar'], { voice, reverb })), [bpm, voice, reverb]);
    const db = x => 20 * Math.log10(x + 1e-9);
    // peak level within the last note (beat 7)
    const s = Math.round(7 * beat * 200), e = Math.round(8 * beat * 200);
    const peak = Math.max(...g.rms.slice(s, e));
    const rest = Math.round(8 * beat * 200);
    const t = th => { const i = g.rms.slice(rest).findIndex(v => db(v) - db(peak) < th); return i * 5; };
    console.log(`${voice.padEnd(7)} reverb ${reverb} ${bpm} BPM: after rest start, -20 dB at ${t(-20)} ms, -40 dB at ${t(-40)} ms, -60 dB at ${t(-60)} ms (beat = ${Math.round(beat*1000)} ms)`);
  }
  await b.close();
})();
