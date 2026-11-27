/* D2-simulaattorimittauksen sivuskripti. Ladataan vain paikallisen palvelin.mjs:n lisäämästä script-elementistä
 * (data-bundle). Skenaariot (?skenaario=…) ja raportit: README.md. Ei kuulu sovelluksen bundleen. */
(() => {
  const bundle = document.currentScript?.dataset.bundle;
  if (!bundle) return;

  const meters = new URLSearchParams(location.search).get('mittaus') !== 'pois';
  const trackIds = new WeakMap();
  const routes = new WeakMap();
  const sources = new WeakMap();
  const gains = new WeakMap();
  const contexts = new WeakSet();
  const recent = [];
  // Simulaattorivaljas: lisätty play, timeupdate, loadeddata ja canplaythrough.
  const events = ['loadstart', 'loadedmetadata', 'loadeddata', 'progress', 'canplay', 'canplaythrough', 'play', 'playing', 'waiting',
    'stalled', 'seeking', 'seeked', 'pause', 'ended', 'emptied', 'error', 'timeupdate'];
  let lastId = 0;

  function record(event, details = {}) {
    recent.push({ ms: Math.round(performance.now()), event, ...details });
    if (recent.length > 40000) recent.shift();
  }

  const known = new WeakMap();
  function track(element) {
    if (!(element instanceof HTMLAudioElement)) return null;
    const src = (element.getAttribute('src') ?? '').match(
      /\/yksi-sointu-kaksi-askelta-(akustinen|normaali)-(saestys|kitara|laulu)\.mp3$/,
    );
    // Muistilähde (blob:) ei kerro raitaa, joten tunniste säilytetään ensimmäisestä verkko-osoitteesta.
    if (!src) return known.get(element) ?? null;
    if (!trackIds.has(element)) trackIds.set(element, ++lastId);
    const info = { id: trackIds.get(element), version: src[1], track: src[2], blob: false };
    known.set(element, info);
    return info;
  }

  function ranges(timeRanges) {
    return Array.from({ length: timeRanges.length }, (_, index) => [
      timeRanges.start(index), timeRanges.end(index),
    ]);
  }

  function mediaState(element) {
    return {
      ...track(element), blob: (element.getAttribute('src') ?? '').startsWith('blob:'), preload: element.preload, time: element.currentTime, duration: element.duration,
      readyState: element.readyState, networkState: element.networkState,
      seeking: element.seeking, seekable: ranges(element.seekable), buffered: ranges(element.buffered),
      paused: element.paused, muted: element.muted, volume: element.volume, loop: element.loop,
      mediaError: element.error?.code ?? null,
    };
  }

  for (const event of events) {
    document.addEventListener(event, ({ target }) => {
      if (track(target)) record(event, mediaState(target));
    }, true);
  }

  for (const event of ['visibilitychange', 'pageshow', 'pagehide']) {
    window.addEventListener(event, () => record(event, { hidden: document.hidden }), true);
  }
  for (const event of ['click', 'input', 'change']) {
    document.addEventListener(event, ({ target }) => {
      const control = target.closest?.('.song-journey button, .song-journey input, .song-journey select');
      if (!control) return;
      record('control', {
        type: event, control: control.getAttribute('aria-label') ?? (control.id || control.textContent.trim()),
        ...(control instanceof HTMLInputElement ? { value: control.type === 'checkbox' ? control.checked : control.value } : {}),
      });
    }, true);
  }

  function observePromise(promise, event, details) {
    promise.then(
      () => record(event, { ...details(), result: 'fulfilled' }),
      error => record(event, { ...details(), result: 'rejected', reason: error?.name ?? 'Error' }),
    );
    return promise;
  }

  // Vaihe A: äänen alkuhetki Web Audio -graafissa. Jokainen play() virittää tunnistimen, joka etsii lähteen
  // analysaattorista ensimmäisen ei-hiljaisen näytteen ja muuntaa sen AudioContextin kelloon.
  const armed = new Map();
  const originalPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function (...args) {
    if (!track(this)) return originalPlay.apply(this, args);
    const route = routes.get(this);
    if (route?.pre) armed.set(this, { X: this.currentTime, playCtx: route.context.currentTime, playMs: performance.now() });
    record('play-call', mediaState(this));
    return observePromise(originalPlay.apply(this, args), 'play-result', () => mediaState(this));
  };
  const time = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, 'currentTime');
  Object.defineProperty(HTMLMediaElement.prototype, 'currentTime', {
    ...time,
    set(target) {
      if (track(this)) record('seek-write', { ...mediaState(this), target });
      return time.set.call(this, target);
    },
  });

  function addMeter(node) {
    if (!meters) return null;
    try {
      const analyser = node.context.createAnalyser();
      analyser.fftSize = 2048;
      connect.call(node, analyser);
      return { analyser, buffer: new Float32Array(analyser.fftSize) };
    } catch (error) {
      record('meter-error', { reason: error?.name });
      return null;
    }
  }

  function detectOnsets() {
    for (const [element, arm] of armed) {
      const route = routes.get(element); const info = track(element);
      if (!route?.pre || !info) { armed.delete(element); continue; }
      if (performance.now() - arm.playMs > 3000) { record('onset', { ...info, X: arm.X, onsetCtx: null }); armed.delete(element); continue; }
      const { analyser, buffer } = route.pre;
      analyser.getFloatTimeDomainData(buffer);
      const c = route.context.currentTime;
      const i = buffer.findIndex(v => Math.abs(v) > 1e-4);
      if (i < 0) continue;
      // Puskurin viimeinen näyte vastaa (lähes) kontekstin nykyhetkeä; ensimmäinen ääni oli (pituus − i) näytettä sitä ennen.
      const onsetCtx = c - (buffer.length - i) / route.context.sampleRate;
      record('onset', { ...info, X: arm.X, onsetCtx, playCtx: arm.playCtx, ctxNow: c, index: i,
        outputLatency: route.context.outputLatency ?? null, baseLatency: route.context.baseLatency ?? null,
        outTs: route.context.getOutputTimestamp ? route.context.getOutputTimestamp() : null });
      armed.delete(element);
    }
    requestAnimationFrame(detectOnsets);
  }
  requestAnimationFrame(detectOnsets);

  function energy(meter) {
    if (!meter || typeof meter.analyser.getFloatTimeDomainData !== 'function') return null;
    meter.analyser.getFloatTimeDomainData(meter.buffer);
    return Math.sqrt(meter.buffer.reduce((sum, sample) => sum + sample * sample, 0) / meter.buffer.length);
  }

  const connect = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (target, ...args) {
    const result = connect.call(this, target, ...args);
    const route = sources.get(this);
    if (route && target instanceof GainNode) {
      route.gain = target;
      gains.set(target, route);
    }
    const outputRoute = gains.get(this);
    if (outputRoute && target === this.context.destination) {
      outputRoute.destination = true;
      outputRoute.post ??= addMeter(this);
    }
    return result;
  };

  const contextPrototypes = new Set([window.AudioContext?.prototype, window.webkitAudioContext?.prototype]);
  for (const proto of contextPrototypes) {
    if (!proto) continue;
    const createSource = proto.createMediaElementSource;
    proto.createMediaElementSource = function (element) {
      if (!track(element)) return createSource.call(this, element);
      try {
        const source = createSource.call(this, element);
        const route = { context: this, pre: addMeter(source), post: null, gain: null, destination: false, pos: addPos(source) };
        sources.set(source, route);
        routes.set(element, route);
        record('source-created', track(element));
        if (!contexts.has(this)) {
          contexts.add(this);
          this.addEventListener('statechange', () => record('context-state', { state: this.state }));
        }
        return source;
      } catch (error) {
        record('source-error', { ...track(element), reason: error?.name });
        throw error;
      }
    };
    const resume = proto.resume;
    proto.resume = function (...args) {
      record('resume-call', { state: this.state });
      return observePromise(resume.apply(this, args), 'resume-result', () => ({ state: this.state }));
    };
  }

  // --- Simulaattorivaljas: renderöity kohta ristikorrelaatiolla referenssi-PCM:ää vasten (kuten testisivun mittaus.ts).
  const params = new URLSearchParams(location.search);
  const run = params.get('ajo') ?? 'x';
  const version = (params.get('kappale') ?? '').endsWith('akustinen') ? 'akustinen' : 'normaali';
  const REF_RATE = 48000, D = 16, PROBE = 8192, SEARCH = 1.5;
  const refs = {};
  function decimate(x) { const y = new Float32Array(Math.floor(x.length / D)); for (let i = 0; i < y.length; i++) { let s = 0; for (let k = 0; k < D; k++) s += x[i * D + k]; y[i] = s / D; } return y; }
  // Toimintoajo (pitka=1): referenssit kummallekin versiolle, jotta versionvaihdon jälkeinen kohta voidaan mitata.
  const scenario = params.get('skenaario');
  const long = params.get('pitka') === '1' || !!scenario;
  // viite=pois: ei referenssi-PCM:ää (noin 173 Mt), jotta muistimittaus kuvaa soitinta eikä valjasta.
  const refVersions = params.get('viite') === 'pois' ? [] : long ? ['normaali', 'akustinen'] : [version];
  for (const v of refVersions) for (const t of ['saestys', 'kitara', 'laulu']) {
    fetch(`/__ref/${v}-${t}.f32`).then(r => r.arrayBuffer()).then(b => {
      const full = new Float32Array(b); refs[`${v}-${t}`] = { full, dec: decimate(full) };
      record('ref-ready', { track: t, version: v, seconds: full.length / REF_RATE });
    }).catch(e => record('ref-error', { track: t, version: v, reason: String(e) }));
  }
  function addPos(node) {
    if (!meters) return null;
    try { const a = node.context.createAnalyser(); a.fftSize = PROBE; connect.call(node, a); return { a, buf: new Float32Array(PROBE) }; }
    catch (e) { record('pos-error', { reason: e?.name }); return null; }
  }
  function ncc(ref, probe, from, to) {
    // Normalisoitu ristikorrelaatio: palauttaa [paras lag, paras arvo, toiseksi paras (yli puolen proben päässä)].
    let pe = 0; for (const v of probe) pe += v * v;
    const scores = new Float32Array(Math.max(0, to - from + 1));
    let best = -2, bl = from;
    for (let lag = from; lag <= to; lag++) {
      let dot = 0, e = 0;
      for (let i = 0; i < probe.length; i++) { const r = ref[lag + i]; dot += probe[i] * r; e += r * r; }
      const v = e > 0 && pe > 0 ? dot / Math.sqrt(pe * e) : 0;
      scores[lag - from] = v; if (v > best) { best = v; bl = lag; }
    }
    let second = -2; for (let lag = from; lag <= to; lag++) if (Math.abs(lag - bl) > probe.length / 2 && scores[lag - from] > second) second = scores[lag - from];
    return [bl, best, second];
  }
  function measure() {
    for (const element of document.querySelectorAll('.song-player audio')) {
      const info = track(element); const route = routes.get(element);
      if (!info || !route?.pos || element.paused || !refs[`${info.version}-${info.track}`]) continue;
      const mediaTime = element.currentTime;
      route.pos.a.getFloatTimeDomainData(route.pos.buf);
      const probe = route.pos.buf; let rms = 0; for (const v of probe) rms += v * v; rms = Math.sqrt(rms / probe.length);
      if (rms < 1e-4) { record('render', { ...info, mediaTime, rms, rendered: null }); continue; }
      const ref = refs[`${info.version}-${info.track}`];
      const pd = decimate(probe);
      let best = null;
      for (const centre of [mediaTime, ...(hints.has(element) ? [hints.get(element)] : [])]) {
        const lo = Math.max(0, Math.floor((centre - SEARCH) * REF_RATE) - PROBE), hi = Math.min(ref.full.length - PROBE - 1, Math.floor((centre + SEARCH) * REF_RATE));
        if (hi <= lo) continue;
        const [cl, cbest, csecond] = ncc(ref.dec, pd, Math.floor(lo / D), Math.min(Math.floor(hi / D), ref.dec.length - pd.length - 1));
        const [fl, fbest] = ncc(ref.full, probe, Math.max(lo, cl * D - 2 * D), Math.min(hi, cl * D + 2 * D));
        if (!best || fbest > best.score) best = { rendered: (fl + PROBE) / REF_RATE, score: fbest, coarse: cbest, second: csecond };
      }
      if (!best) { record('render', { ...info, mediaTime, rms, rendered: null, reason: 'ikkuna' }); continue; }
      record('render', { ...info, mediaTime, rms, ...best, mMinusR: (mediaTime - best.rendered) * 1000, ctx: route.context.currentTime });
    }
  }
  const hints = new Map();
  let firstPlay = null;
  // D1-kokeilu: soittimen raitakohtaiset tulot ja aikajana (window.__kappaleD1).
  const d1Hook = () => window.__kappaleD1;
  const d1Analysers = new WeakMap();
  const D1_TRACKS = { backing: 'saestys', guitar: 'kitara', vocals: 'laulu' };
  let d1Hint = null;
  function d1Version() { return document.querySelector('#song-version-select')?.value === 'acoustic' ? 'akustinen' : 'normaali'; }
  function measureD1() {
    const hook = d1Hook(); if (!hook || !hook.player.playing) return;
    const { context, player } = hook;
    for (const [key, name] of Object.entries(D1_TRACKS)) {
      const input = player.inputs[key];
      let a = d1Analysers.get(input);
      if (!a) { a = context.createAnalyser(); a.fftSize = PROBE; input.connect(a); a.buf = new Float32Array(PROBE); d1Analysers.set(input, a); }
      a.getFloatTimeDomainData(a.buf);
      const c = context.currentTime; const expected = player.position(c); const version = d1Version();
      const ref = refs[`${version}-${name}`]; if (!ref) continue;
      // Muu kuin 48 kHz:n konteksti: näyte muunnetaan lineaarisesti 48 kHz:iin ennen vertailua referenssiin.
      let buf = a.buf;
      if (context.sampleRate !== REF_RATE) {
        const n = Math.floor(a.buf.length * REF_RATE / context.sampleRate), r = context.sampleRate / REF_RATE; buf = new Float32Array(n);
        for (let i = 0; i < n; i++) { const x = i * r, k = Math.floor(x), f = x - k; buf[i] = a.buf[k] * (1 - f) + (a.buf[Math.min(k + 1, a.buf.length - 1)] * f); }
      }
      const P = buf.length;
      let rms = 0; for (const v of buf) rms += v * v; rms = Math.sqrt(rms / P);
      if (rms < 1e-4) { record('render', { track: name, version, mediaTime: expected, rms, rendered: null, d1: true }); continue; }
      const pd = decimate(buf); let best = null;
      for (const centre of [expected, ...(d1Hint !== null ? [d1Hint] : [])]) {
        const lo = Math.max(0, Math.floor((centre - SEARCH) * REF_RATE) - P), hi = Math.min(ref.full.length - P - 1, Math.floor((centre + SEARCH) * REF_RATE));
        if (hi <= lo) continue;
        const [cl, cbest, csecond] = ncc(ref.dec, pd, Math.floor(lo / D), Math.min(Math.floor(hi / D), ref.dec.length - pd.length - 1));
        const [fl, fbest] = ncc(ref.full, buf, Math.max(lo, cl * D - 2 * D), Math.min(hi, cl * D + 2 * D));
        if (!best || fbest > best.score) best = { rendered: (fl + P) / REF_RATE, score: fbest, coarse: cbest, second: csecond };
      }
      if (best) record('render', { track: name, version, mediaTime: expected, rms, ...best, mMinusR: (expected - best.rendered) * 1000, ctx: c, d1: true });
    }
  }
  const d1Snapshot = () => { const h = d1Hook(); return h ? { state: h.player.state, duration: h.player.duration, bufferBytes: h.player.bufferBytes,
    levels: { backing: h.player.level('backing'), guitar: h.player.level('guitar'), vocals: h.player.level('vocals') }, contextState: h.context.state,
    outputLatency: h.context.outputLatency ?? null, baseLatency: h.context.baseLatency ?? null, events: h.player.events, lifecycle: h.lifecycle ?? null, currentTime: h.context.currentTime, session: navigator.audioSession ? { type: navigator.audioSession.type, state: navigator.audioSession.state } : null } : null; };
  const d1Log = [];
  const send = tag => fetch(`/__raportti?ajo=${encodeURIComponent(run)}&t=${tag}`, { method: 'POST', body: JSON.stringify({ current: snapshot(), events: recent, d1: d1Snapshot(), d1Log }) }).catch(() => {});
  const origPlay2 = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function (...args) {
    if (firstPlay === null && track(this)) {
      firstPlay = performance.now();
      if (!scenario) for (const s of long ? [30, 60, 90, 120, 150] : [2, 5, 10, 20, 30, 45, 60]) setTimeout(() => send(String(s)), s * 1000);
      else { const id = setInterval(() => { if (scenarioDone) clearInterval(id); else send('v' + Math.round((performance.now() - firstPlay) / 1000)); }, 30000); }
    }
    return origPlay2.apply(this, args);
  };
  if (!scenario) setInterval(() => { if (firstPlay !== null && performance.now() - firstPlay < (long ? 151000 : 61000)) measure(); }, 500);
  // --- F1-valjas: skenaario ohjaa sovelluksen omia ohjaimia ensimmäisen käyttäjän Soita-painalluksen jälkeen.
  let fastUntil = 0, scenarioDone = false;
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  if (scenario) (async () => {
    for (;;) {
      if (firstPlay !== null && !scenarioDone) { const s0 = performance.now(); measure(); measureD1(); record('mittaus-kesto', { ms2: Math.round(performance.now() - s0) }); }
      await sleep(performance.now() < fastUntil ? 120 : 250);
    }
  })();
  // Pääsäikeen jumit: sydämenlyönti 50 ms välein, yli 300 ms:n väli kirjataan.
  let beat = performance.now();
  setInterval(() => { const n = performance.now(); if (n - beat > 300) record('jumi', { gap: Math.round(n - beat) }); beat = n; }, 50);
  // MP3-latausten ajoitus muistiin (fetch) sekä Blob-URL:ien luonti ja vapautus.
  const originalFetch = window.fetch;
  window.fetch = function (input, init) {
    const url = String(input instanceof Request ? input.url : input);
    if (!/\.mp3$/.test(url)) return originalFetch.call(this, input, init);
    const t = /-(saestys|kitara|laulu)\.mp3$/.exec(url)?.[1];
    record('fetch-alku', { t });
    return originalFetch.call(this, input, init).then(response => {
      record('fetch-vastaus', { t, status: response.status });
      const blob = response.blob.bind(response);
      response.blob = () => blob().then(b => { record('fetch-valmis', { t, bytes: b.size }); return b; });
      return response;
    }, error => { record('fetch-virhe', { t, reason: String(error) }); throw error; });
  };
  const createUrl = URL.createObjectURL, revokeUrl = URL.revokeObjectURL;
  URL.createObjectURL = function (obj) { const u = createUrl.call(URL, obj); record('blob-luotu', { size: obj?.size }); return u; };
  URL.revokeObjectURL = function (u) { record('blob-vapautettu', {}); return revokeUrl.call(URL, u); };
  const originalLoad = HTMLMediaElement.prototype.load;
  HTMLMediaElement.prototype.load = function (...args) {
    if (track(this)) record('load-call', mediaState(this));
    return originalLoad.apply(this, args);
  };
  const ui = {
    play: () => document.querySelector('.song-play'),
    slider: () => document.querySelector('input[aria-label="Siirry kappaleessa"]'),
    check: text => [...document.querySelectorAll('.song-toggles label')].find(l => l.textContent.includes(text))?.querySelector('input'),
    version: () => document.querySelector('#song-version-select'),
  };
  const backingEl = () => [...document.querySelectorAll('.song-player audio')].find(e => track(e)?.track === 'saestys');
  const playingUI = () => !!ui.play()?.textContent.includes('Tauko');
  async function waitFor(cond, ms = 8000) { const s = performance.now(); while (!cond() && performance.now() - s < ms) await sleep(10); return cond(); }
  function setRange(input, value) {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, String(value));
    input.dispatchEvent(new Event('input', { bubbles: true })); input.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function op(kind, extra = {}) {
    fastUntil = performance.now() + 1800;
    const els = [...document.querySelectorAll('.song-player audio')];
    hints.clear(); if (extra.hint !== false) for (const e of els) hints.set(e, e.currentTime);
    const h = d1Hook(); d1Hint = h && extra.hint !== false ? h.player.position() : null;
    if (h) for (const e of h.player.events) if (!d1Log.includes(e)) d1Log.push(e);
    record('op', { kind, wall: Date.now(), times: els.map(e => [track(e)?.track, e.currentTime, e.paused]), ...extra, hint: undefined });
  }
  const click = el => el?.click();
  async function toggle(kind, extra) { op(kind, extra); click(ui.play()); }
  async function resume(extra = {}) { op('jatko', extra); click(ui.play()); const ok = await waitFor(playingUI); record('jatko-ui', { ok }); return ok; }
  const d1Pos = () => d1Hook()?.player.position() ?? 0;
  const d1State = () => d1Hook()?.player.state ?? null;
  function switchVersion() { const sel = ui.version(); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(sel, sel.value === 'normal' ? 'acoustic' : 'normal'); sel.dispatchEvent(new Event('change', { bubbles: true })); }
  const levels = () => { const h = d1Hook(); return h ? ['backing', 'guitar', 'vocals'].map(t => Math.round(h.player.level(t) * 1000) / 1000) : null; };
  const steps = {
    // Sovellusvaihto (PR #181 B7): raportti 2 s välein, kunnes pysäytetään; vaihto ja paluu tehdään käsin.
    async sovellusvaihto() {
      for (let k = 0; k < 150; k++) { await sleep(2000); send('sv' + k); }
    },
    // D1-prototyyppi: kaikki issue #9:n toiminnot, versionvaihto ja poistuminen latauksen ja purun aikana.
    async d1() {
      await sleep(8000);
      await toggle('tauko'); await sleep(3000); await resume({ pause: 3 }); await sleep(6000);
      await toggle('tauko'); await sleep(300); await resume({ pause: 0.3 }); await sleep(6000);
      for (let i = 0; i < 3; i++) { await toggle('tauko'); await sleep(1500); await resume({ pause: 1.5, toistuva: i }); await sleep(4000); }
      let p = d1Pos(); op('kelaus', { to: p + 20 }); setRange(ui.slider(), (p + 20).toFixed(1)); await sleep(6000);
      p = d1Pos(); op('kelaus-taakse', { to: p - 15 }); setRange(ui.slider(), (p - 15).toFixed(1)); await sleep(6000);
      p = d1Pos(); op('kelaus', { to: p + 20 }); setRange(ui.slider(), (p + 20).toFixed(1)); await sleep(400);
      op('kelaus2', { to: p + 25 }); setRange(ui.slider(), (p + 25).toFixed(1)); await sleep(6000);
      op('kitara-pois'); click(ui.check('Kitara')); await sleep(3000); op('kitara-paalle'); click(ui.check('Kitara')); await sleep(6000);
      op('laulu-pois'); click(ui.check('Laulu')); await sleep(1500); op('laulu-paalle'); click(ui.check('Laulu')); await sleep(6000);
      const volume = document.querySelector('input[aria-label="Äänenvoimakkuus"]');
      op('voimakkuus-50', { hint: false }); setRange(volume, 50); await sleep(1500); record('tasot', { volume: 50, levels: levels() });
      op('voimakkuus-100', { hint: false }); setRange(volume, 100); await sleep(1500); record('tasot', { volume: 100, levels: levels() });
      click(ui.check('looppina')); const d = d1Hook().player.duration; op('loop-kelaus', { to: d - 6 }); setRange(ui.slider(), (d - 6).toFixed(1));
      await waitFor(() => d1Pos() > 0 && d1Pos() < 3, 15000); op('loop-kierros', { hint: false }); await sleep(8000); click(ui.check('looppina'));
      await toggle('tauko'); await sleep(500);
      op('versionvaihto', { hint: false }); switchVersion(); await sleep(2000);
      op('versio-soita', { hint: false }); click(ui.play()); await waitFor(playingUI, 60000); await sleep(6000);
      await toggle('tauko'); await sleep(500);
      // Poistuminen soittimesta latauksen aikana ja purun aikana.
      switchVersion(); await sleep(1000);
      op('poistu-latauksessa', { hint: false }); click(ui.play()); await waitFor(() => d1State() === 'ladataan', 5000); record('tila', { state: d1State() });
      document.querySelector('.song-journey .back-link')?.click(); await sleep(8000);
      op('palaa', { hint: false }); [...document.querySelectorAll('button')].find(b => /Kappaleharjoittelu/.test(b.textContent))?.click(); await sleep(2500);
      op('poistu-purussa', { hint: false }); click(ui.play()); await waitFor(() => d1State() === 'puretaan', 30000); record('tila', { state: d1State() });
      document.querySelector('.song-journey .back-link')?.click(); await sleep(15000);
      op('lopuksi', { hint: false }); record('tila', { hook: !!d1Hook() });
    },
    // D2: soittimen oma palapurku (readRange: kalibrointi + kehysalue) vs. koko tiedoston purku, näyte näytteeltä.
    async tarkistus() {
      await toggle('tauko');
      const h = d1Hook(), out = [], v = d1Version(), names = { backing: 'saestys', guitar: 'kitara', vocals: 'laulu' };
      for (const t of ['backing', 'guitar', 'vocals']) {
        const url = `/assets/audio/kappaleet/yksi-sointu-kaksi-askelta-${v}/yksi-sointu-kaksi-askelta-${v}-${names[t]}.mp3`;
        let full = await h.context.decodeAudioData(await (await fetch(url)).arrayBuffer());
        const ref = [full.getChannelData(0), full.getChannelData(1)], L = full.length; full = null;
        for (const start of [0, 1, 575, 576, 1151, 480000, 480001, 4812345, L - 480000, L - 1000, L - 1]) {
          const len = Math.min(480000, L - start), seg = await h.player.readRange(t, start, len);
          let max = 0, worst = -1;
          for (let c = 0; c < 2; c++) for (let i = 0; i < len; i++) { const d = Math.abs(seg[c][i] - ref[c][start + i]); if (d > max) { max = d; worst = i; } }
          out.push({ t, start, len, max, worst });
        }
        record('tarkistus-raita', { t, L, playerDuration: h.player.duration });
      }
      record('tarkistus', { v, out, kalibrointi: h.player.events.filter(e => e.kind.startsWith('kalibr')) });
    },
    // D2: versionvaihto latauksen ja purun aikana. Vanha lataus perutaan, mitään ei jää soimaan, uusi versio soi.
    async latausvaihto() {
      await sleep(4000);
      const sourcesNow = () => { const h = d1Hook(); return h ? h.player.playing : null; };
      for (const [phase, state] of [['latauksessa', 'ladataan'], ['purussa', 'puretaan']]) {
        await toggle('tauko'); await sleep(300);
        switchVersion(); await sleep(500);
        op('soita-' + phase, { hint: false }); click(ui.play());
        const caught = await waitFor(() => d1State() === state, 30000);
        const before = ui.version()?.value;
        op('vaihto-' + phase, { hint: false, caught, before }); switchVersion(); await sleep(1500);
        record('vaihdon-jalkeen', { phase, caught, state: d1State(), playing: sourcesNow(), playingUI: playingUI(), version: ui.version()?.value });
        op('soita-uusi-' + phase, { hint: false }); click(ui.play());
        const ok = await waitFor(() => playingUI() && d1Hook()?.player.position() > 0.3, 60000);
        record('uusi-soi', { phase, ok, version: ui.version()?.value, duration: d1Hook()?.player.duration });
        await sleep(4000);
      }
      await toggle('tauko');
    },
    // Katselmointi: loopin kytkentä aivan kappaleen lopussa (0,35 / 0,15 / 0,05 s ennen loppua).
    async loopiloppu() {
      await sleep(3000);
      for (const margin of [0.35, 0.15, 0.05]) {
        const d = d1Hook().player.duration;
        if (ui.check('looppina').checked) click(ui.check('looppina'));
        op('loppuun', { hint: false, margin }); setRange(ui.slider(), (d - 2).toFixed(2));
        await waitFor(() => d1Pos() >= d - margin, 8000);
        op('loop-paalle', { hint: false, margin, pos: d1Pos() }); click(ui.check('looppina'));
        await sleep(1200); op('loopin-jalkeen', { margin }); await sleep(3500);
        record('loopiloppu', { margin, pos: d1Pos(), playing: playingUI(), state: d1State() });
      }
      click(ui.check('looppina')); await toggle('tauko');
    },
    // Katselmointi: kilpailutilanteet. Nopeat kelaukset, versionvaihdot, peruutus latauksessa, tauko/jatko-sarja.
    async kilpailu() {
      await sleep(4000);
      const targets = [20, 60, 100, 140, 30, 90, 45, 120, 75, 110];
      for (const t of targets) { setRange(ui.slider(), String(t)); await sleep(40); }
      op('kelaussarja', { hint: false }); await sleep(2500);
      record('kelaussarja', { pos: d1Pos(), odotettu: targets.at(-1), playing: playingUI() });
      await toggle('tauko'); await sleep(300);
      for (let i = 0; i < 5; i++) { switchVersion(); await sleep(80); }
      op('vaihtosarja', { hint: false, versio: ui.version()?.value }); click(ui.play());
      const ok1 = await waitFor(() => playingUI() && d1Pos() > 0.3, 60000);
      record('vaihtosarja', { ok: ok1, versio: ui.version()?.value, duration: d1Hook()?.player.duration });
      await sleep(3000); await toggle('tauko'); await sleep(300);
      for (let i = 0; i < 2; i++) { switchVersion(); await sleep(300); click(ui.play()); await sleep(60); switchVersion(); await sleep(300); }
      op('peruutussarja', { hint: false, versio: ui.version()?.value }); click(ui.play());
      const ok2 = await waitFor(() => playingUI() && d1Pos() > 0.3, 60000);
      record('peruutussarja', { ok: ok2, versio: ui.version()?.value, duration: d1Hook()?.player.duration, state: d1State() });
      await sleep(2000);
      for (let i = 0; i < 8; i++) { click(ui.play()); await sleep(60); }
      op('taukosarja', { hint: false }); await sleep(2500);
      record('taukosarja', { playing: playingUI(), state: d1State(), pos: d1Pos() });
      if (playingUI()) await toggle('tauko');
    },
    // D2: kylmäkäynnistys (ensimmäinen napautus → ääni) ja 8 s soittoa.
    async kylma() {
      await sleep(8000);
      // Virtalataus: soitetaan, kunnes taustalataus on valmis (odotukset ja alivuodot näkyvät soittimen tapahtumissa).
      await waitFor(() => (d1Hook()?.player.downloadProgress ?? 1) >= 1, 300000);
      record('lataus-valmis', { progress: d1Hook()?.player.downloadProgress, pos: d1Pos() });
      op('loppu', { hint: false }); await toggle('tauko');
    },
    // D2: 10 versionvaihtoa sivun sisällä (soitto jokaisen jälkeen), poistuminen ja paluu, loopin kierrokset ja pitkä soitto.
    async d2vaihdot() {
      await sleep(6000);
      for (let i = 0; i < 10; i++) {
        await toggle('tauko'); await sleep(300);
        op('versionvaihto', { hint: false, i }); switchVersion(); await sleep(800);
        const t0 = performance.now(); op('versio-soita', { hint: false, i }); click(ui.play());
        const ok = await waitFor(() => playingUI() && d1Hook()?.player.state === 'valmis' && d1Hook()?.player.position() > 0.2, 60000);
        record('vaihto-soi', { i, ok, ms: Math.round(performance.now() - t0), versio: ui.version()?.value });
        await sleep(6000);
      }
      await toggle('tauko'); await sleep(300);
      op('poistu', { hint: false }); document.querySelector('.song-journey .back-link')?.click(); await sleep(5000);
      op('palaa', { hint: false }); [...document.querySelectorAll('button')].find(b => /Kappaleharjoittelu/.test(b.textContent))?.click(); await sleep(1500);
      // Uusi AudioContext tarvitsee oikean napautuksen.
      ui.play()?.scrollIntoView({ block: 'center' }); await sleep(800);
      record('odottaa-napautusta', {}); send('odottaa'); await waitFor(playingUI, 180000);
      op('palaa-soi', { hint: false }); await sleep(5000);
      click(ui.check('looppina')); await sleep(300);
      for (let k = 0; k < 3; k++) {
        const d = d1Hook().player.duration; op('loop-kelaus', { to: d - 5, k }); setRange(ui.slider(), (d - 5).toFixed(1));
        await waitFor(() => d1Pos() > 0 && d1Pos() < 3, 15000); op('loop-kierros', { hint: false, k }); await sleep(5000);
      }
      op('pitka-alku', { hint: false });
      for (let k = 0; k < 18; k++) { await sleep(10000); record('pitka', { k, pos: d1Pos(), state: d1State() }); }
      click(ui.check('looppina'));
      op('lopuksi', { hint: false }); await toggle('tauko');
    },
    // Vaihe A: kylmäkäynnistys, kolme peräkkäistä taukoa ja jatkoa, nopea jatko ja kelaus soiton aikana.
    async aikajana() {
      await sleep(8000);
      for (let i = 0; i < 3; i++) { await toggle('tauko'); await sleep(2000); await resume({ pause: 2, toistuva: i }); await sleep(6000); }
      await toggle('tauko'); await sleep(300); await resume({ pause: 0.3 }); await sleep(6000);
      const p0 = backingEl().currentTime; op('kelaus', { to: p0 + 15 }); setRange(ui.slider(), (p0 + 15).toFixed(1)); await sleep(7000);
      await toggle('loppu');
    },
    async toiminnot() {
      await sleep(8000);
      // A: tavallinen tauko ja jatko
      await toggle('tauko'); await sleep(3000); await resume({ pause: 3 }); await sleep(7000);
      // B: nopea tauko ja jatko
      await toggle('tauko'); await sleep(300); await resume({ pause: 0.3 }); await sleep(7000);
      // C: kaksi peräkkäistä kelausta soiton aikana
      let p0 = backingEl().currentTime; op('kelaus', { to: p0 + 20 }); setRange(ui.slider(), (p0 + 20).toFixed(1));
      await sleep(400); op('kelaus2', { to: p0 + 25 }); setRange(ui.slider(), (p0 + 25).toFixed(1)); await sleep(8000);
      // D ja E: raidan pois- ja päällekytkentä
      op('kitara-pois'); click(ui.check('Kitara')); await sleep(3000); op('kitara-paalle'); click(ui.check('Kitara')); await sleep(7000);
      op('laulu-pois'); click(ui.check('Laulu')); await sleep(1000); op('laulu-paalle'); click(ui.check('Laulu')); await sleep(7000);
      // F: tauko heti käynnistyksen jälkeen (aiempi ~10,6 s:n jumi: load() ≤ 40 ms play():n täyttymisestä)
      await toggle('tauko'); await sleep(1000); op('jatko', { pause: 1 }); click(ui.play()); await waitFor(playingUI);
      op('pikatauko'); click(ui.play()); await sleep(1000); await resume({ pause: 1, pika: true }); await sleep(7000);
      // G: kelaus tauolla
      await toggle('tauko'); await sleep(500); p0 = backingEl().currentTime; op('kelaus-tauolla', { to: Math.max(1, p0 - 30) });
      setRange(ui.slider(), Math.max(1, p0 - 30).toFixed(1)); await sleep(1500); await resume({ pause: 2, kelattu: true }); await sleep(7000);
      // H: loopin kierros
      click(ui.check('looppina')); const d = backingEl().duration; op('loop-kelaus', { to: d - 6 }); setRange(ui.slider(), (d - 6).toFixed(1));
      await waitFor(() => backingEl().currentTime < 3 && backingEl().currentTime > 0, 15000); op('loop-kierros', { hint: false }); await sleep(8000);
      click(ui.check('looppina'));
      // I: versionvaihto ja käynnistys
      const sel = ui.version(); Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set.call(sel, sel.value === 'normal' ? 'acoustic' : 'normal');
      op('versionvaihto'); sel.dispatchEvent(new Event('change', { bubbles: true })); await sleep(1500);
      // Uudet audioelementit tarvitsevat oikean käyttäjän napautuksen (ohjelmallinen click → NotAllowedError).
      record('odottaa-napautusta', {}); send('odottaa'); await waitFor(playingUI, 120000);
      op('versio-soita', { hint: false }); await sleep(7000);
      await toggle('loppu');
    },
  };
  // --- M1: monisivuinen versionvaihtosarja. Tila säilyy sessionStoragessa sivulatausten yli.
  // Sivulta poistuttaessa kirjataan AudioContextin sulkeminen ja latausten peruutus seuraavan sivun luettavaksi.
  const m1Key = 'valjas-m1-' + run;
  const m1Log = (kind, extra = {}) => { try { const k = m1Key + '-poistuminen'; const list = JSON.parse(sessionStorage.getItem(k) || '[]'); list.push({ kind, wall: Date.now(), ...extra }); sessionStorage.setItem(k, JSON.stringify(list)); } catch {} };
  for (const proto of [window.AudioContext?.prototype].filter(Boolean)) {
    const close = proto.close;
    proto.close = function (...args) { m1Log('context-close', { state: this.state }); return close.apply(this, args).then(r => { m1Log('context-closed', { state: this.state }); return r; }); };
  }
  const abort = AbortController.prototype.abort;
  AbortController.prototype.abort = function (...args) { m1Log('abort'); return abort.apply(this, args); };
  window.addEventListener('pagehide', e => m1Log('pagehide', { persisted: e.persisted, hook: !!window.__kappaleD1 }));
  if (scenario === 'm1') (async () => {
    const total = Number(params.get('kierrokset') ?? '10');
    const st = JSON.parse(sessionStorage.getItem(m1Key) || 'null') ?? { vaihe: 0, tila: 'soitto' };
    const save = () => sessionStorage.setItem(m1Key, JSON.stringify(st));
    const exits = JSON.parse(sessionStorage.getItem(m1Key + '-poistuminen') || '[]');
    sessionStorage.removeItem(m1Key + '-poistuminen');
    record('m1-sivu', { vaihe: st.vaihe, tila: st.tila, siirtyma: st.vaihdettu ? Date.now() - st.vaihdettu : null, url: location.search, edellinen: exits,
      navigointi: performance.getEntriesByType('navigation')[0]?.duration ?? null });
    let sent = 0;
    // Raportin nimi yksilöidään vaiheella ja ajalla, koska jokainen sivu aloittaa omasta laskuristaan.
    const page = async tag => { await send(tag + '-' + st.vaihe + '-' + (sent++) + '-' + (Date.now() % 1000000)); };
    for (;;) {
      await sleep(1500);
      if (st.tila === 'lopuksi') { op('lopuksi', { hint: false }); await sleep(15000); await send('loppu'); sessionStorage.removeItem(m1Key); scenarioDone = true; return; }
      if (st.tila === 'palaa') {
        op('palaa', { hint: false }); [...document.querySelectorAll('button')].find(b => /Kappaleharjoittelu/.test(b.textContent))?.click();
        await sleep(2000); st.tila = 'palattu'; save();
      }
      // Soitto: ensimmäisellä sivulla käyttäjä napauttaa. Myöhemmin kokeillaan ohjelmallista painallusta; jos iOS vaatii
      // eleen, raportti kertoo odotuksen ja oikea napautus jatkaa.
      const s0 = performance.now();
      if (st.vaihe > 0 || st.tila === 'palattu' || st.tila === 'keskeytys') click(ui.play());
      if (st.tila === 'keskeytys') {
        // Versionvaihto kesken latauksen: lataus ja konteksti on suljettava.
        await waitFor(() => d1State() === 'ladataan', 5000); record('tila', { state: d1State() });
        st.tila = 'soitto'; st.vaihdettu = Date.now(); save(); op('versionvaihto-latauksessa', { hint: false });
        await page('sivu'); switchVersion(); await sleep(4000); continue;
      }
      await send('odottaa-' + st.vaihe + '-' + st.tila);
      const okPlay = await waitFor(playingUI, 180000);
      if (firstPlay === null) firstPlay = performance.now();
      record('m1-soi', { ok: okPlay, viive: Math.round(performance.now() - s0), vaihe: st.vaihe });
      if (st.tila === 'palattu') {
        await sleep(6000); st.tila = 'lopuksi'; save(); op('poistu-2', { hint: false }); await page('palattu');
        document.querySelector('.song-journey .back-link')?.click(); await sleep(4000); continue;
      }
      if (st.vaihe < total) {
        await sleep(6000);
        await toggle('tauko'); await sleep(1500); await resume({ pause: 1.5 }); await sleep(4000);
        const p = d1Pos(); op('kelaus', { to: p + 20 }); setRange(ui.slider(), (p + 20).toFixed(1)); await sleep(4000);
        op('kitara-pois'); click(ui.check('Kitara')); await sleep(1500); op('kitara-paalle'); click(ui.check('Kitara')); await sleep(3000);
        if (params.get('loop') === '1') {
          click(ui.check('looppina')); const d = d1Hook().player.duration; op('loop-kelaus', { to: d - 5 }); setRange(ui.slider(), (d - 5).toFixed(1));
          await waitFor(() => d1Pos() > 0 && d1Pos() < 3, 12000); op('loop-kierros', { hint: false }); await sleep(5000); click(ui.check('looppina'));
        }
        await toggle('tauko'); await sleep(500);
        st.vaihe++; st.vaihdettu = Date.now(); if (st.vaihe === total) st.tila = 'keskeytys'; save();
        op('versionvaihto', { vaihe: st.vaihe, hint: false }); await page('sivu');
        switchVersion(); await sleep(4000); continue;
      }
      st.tila = 'palaa'; save(); op('poistu', { hint: false }); await page('ennen-poistumista');
      document.querySelector('.song-journey .back-link')?.click(); await sleep(4000);
    }
  })();
  // Sointunäytön muutokset: näkyvä tahti ja isku sekä säestyksen kello muutoshetkellä (kytketään, kun React on piirtänyt).
  function observeDisplay() {
    const target = document.querySelector('.song-journey');
    if (!target) return false;
    let last = '';
    new MutationObserver(() => {
      const t = document.querySelector('.song-current-chord span')?.textContent ?? '';
      if (t && t !== last) { last = t; const b = backingEl(); record('naytto', { text: t, pos: b?.currentTime, versio: ui.version()?.value, paused: b?.paused }); }
    }).observe(target, { subtree: true, childList: true, characterData: true });
    record('naytto-kytketty', {});
    return true;
  }
  (async () => { while (!observeDisplay()) await sleep(200); })();
  if (scenario && scenario !== 'm1') (async () => {
    await waitFor(() => (firstPlay !== null || !!d1Hook()) && playingUI(), 600000);
    if (firstPlay === null) { firstPlay = performance.now(); const id = setInterval(() => { if (scenarioDone) clearInterval(id); else send('v' + Math.round((performance.now() - firstPlay) / 1000)); }, 30000); }
    record('skenaario-alku', { scenario });
    try { await steps[scenario](); } catch (e) { record('skenaario-virhe', { message: String(e) }); }
    scenarioDone = true; await sleep(500); send('loppu');
  })();

  function snapshot() {
    return {
      bundle, meters, hidden: document.hidden, audioSession: navigator.audioSession?.type ?? null,
      sessionState: navigator.audioSession?.state ?? null,
      mode: document.querySelector('.song-volume')?.dataset.volumeMode ?? null,
      playerMessage: document.querySelector('.song-player [role="alert"]')?.textContent ?? null,
      routeMessage: document.querySelector('.song-player [role="status"]')?.textContent ?? null,
      tracks: Array.from(document.querySelectorAll('.song-player audio'), element => {
        const route = routes.get(element);
        return {
          ...mediaState(element), context: route?.context.state ?? null, gain: route?.gain?.gain.value ?? null,
          destination: route?.destination ?? false, preRms: energy(route?.pre), postRms: energy(route?.post),
        };
      }),
    };
  }

  // Lokeissa säilyvät vain viimeiset tekniset tapahtumat ja RMS-luvut tämän välilehden muistissa.
  window.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('details');
    panel.id = 'kappaleen-aanidiagnostiikka';
    panel.style.cssText = 'padding:1rem;max-width:60rem;margin:auto;overflow-wrap:anywhere';
    panel.innerHTML = '<summary>Kappaleen äänidiagnostiikka · paikallinen</summary>' +
      '<p>Valitse raportti heti, kun huomaat puuttuvan raidan. Kopioi valittu teksti käsin.</p>' +
      '<button type="button">Valitse raportti</button><pre style="overflow:auto"></pre>' +
      '<textarea readonly hidden rows="8" aria-label="Diagnostiikkaraportti" style="width:100%"></textarea>';
    (document.querySelector('#guitar-practice') ?? document.querySelector('.song-player') ?? document.body).after(panel);
    panel.querySelector('button').addEventListener('click', () => {
      const report = panel.querySelector('textarea');
      report.value = JSON.stringify({ current: snapshot(), events: recent });
      report.hidden = false;
      report.focus();
      report.select();
      report.setSelectionRange(0, report.value.length);
    });
    function sample() {
      const state = snapshot();
      if (state.tracks.length) record('sample', state);
      if (panel.open) panel.querySelector('pre').textContent = JSON.stringify(state, null, 2);
    }
    panel.addEventListener('toggle', () => { if (panel.open) sample(); });
    setInterval(sample, 1000);
    // Simulaattorivaljas: Soita-painike näkyviin samaan kohtaan joka ajossa (napautus koordinaateilla).
    setTimeout(() => document.querySelector('.song-player button')?.scrollIntoView({ block: 'center' }), 600);
  });
})();
