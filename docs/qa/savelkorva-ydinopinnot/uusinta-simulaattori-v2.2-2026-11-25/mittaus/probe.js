// Auditoinnin mittausskripti: ei muuta sivun toimintaa, vain kirjaa tapahtumia.
(() => {
  const q = [];
  const send = () => {
    if (!q.length) return;
    const body = JSON.stringify(q.splice(0));
    fetch('/__log', { method: 'POST', body, keepalive: true }).catch(() => {});
  };
  window.__evs = [];
  const ev = (type, data = {}) => { const e = { type, ...data, pt: Math.round(performance.now()) }; q.push(e); window.__evs.push(e); };
  const abUrl = new WeakMap(); const bufUrl = new WeakMap();
  window.__ev = ev;
  setInterval(send, 300);
  addEventListener('error', e => ev('error', { msg: String(e.message), src: e.filename, line: e.lineno }));
  addEventListener('unhandledrejection', e => ev('rejection', { msg: String(e.reason && (e.reason.message || e.reason)) }));
  for (const level of ['error', 'warn']) {
    const orig = console[level];
    console[level] = (...a) => { ev('console.' + level, { msg: a.map(String).join(' ') }); orig.apply(console, a); };
  }
  const of = window.fetch;
  window.fetch = async (...a) => {
    const url = String(a[0] && a[0].url || a[0]);
    try {
      const r = await of(...a);
      if (url.includes('/audio/')) { const ab = r.arrayBuffer.bind(r); r.arrayBuffer = async () => { const b = await ab(); abUrl.set(b, url.split('_Vel02_')[0].split('String')[1] + ':' + url.split('_Vel02_')[1].split('_')[0]); return b; }; }
      if (!url.includes('/__')) ev('fetch', { url: url.replace(location.origin, ''), status: r.status });
      return r;
    } catch (err) { ev('fetch-fail', { url, msg: String(err && err.name) }); throw err; }
  };
  const AC = window.AudioContext;
  // HILJAINEN TILA: kaikki ulostulo ohjataan nollavahvistuksen kautta (kello ja ajoitus säilyvät). Ei kuuntelua.
  const origConnect = AudioNode.prototype.connect;
  AudioNode.prototype.connect = function (dest, ...r) {
    if (window.__silent && typeof AudioDestinationNode !== 'undefined' && dest instanceof AudioDestinationNode) {
      const c = this.context; if (!c.__mute) { c.__mute = c.createGain(); c.__mute.gain.value = 0; origConnect.call(c.__mute, dest); }
      return origConnect.call(this, c.__mute, ...r);
    }
    return origConnect.call(this, dest, ...r);
  };
  if (AC) {
    const p = AC.prototype;
    const dec = p.decodeAudioData;
    p.decodeAudioData = function (data, ok, bad) {
      const size = data && data.byteLength;
      const pitch = data && abUrl.get(data);
      const wrapOk = b => { if (pitch) bufUrl.set(b, pitch); ev('decode-ok', { pitch, size, dur: +b.duration.toFixed(3), sr: b.sampleRate, ch: b.numberOfChannels }); ok && ok(b); };
      const wrapBad = e => { ev('decode-fail', { size, msg: String(e) }); bad && bad(e); };
      return dec.call(this, data, wrapOk, wrapBad);
    };
    const cbs = p.createBufferSource;
    p.createBufferSource = function () {
      const s = cbs.call(this);
      const st = s.start.bind(s);
      s.start = (when, ...r) => {
        ev('source-start', { pitch: s.buffer && bufUrl.get(s.buffer), when: +(+when).toFixed(3), now: +this.currentTime.toFixed(3), state: this.state, dur: s.buffer && +s.buffer.duration.toFixed(3), rate: s.playbackRate.value, detune: s.detune ? s.detune.value : null });
        return st(when, ...r);
      };
      const sp = s.stop.bind(s);
      s.stop = (when, ...r) => { ev('source-stop', { pitch: s.buffer && bufUrl.get(s.buffer), when: +(+when||0).toFixed(3), now: +this.currentTime.toFixed(3) }); return sp(when, ...r); };
      return s;
    };
    const res = p.resume;
    p.resume = function () { ev('ctx-resume', { state: this.state }); return res.call(this).then(v => { ev('ctx-resumed', { state: this.state, sr: this.sampleRate }); return v; }, e => { ev('ctx-resume-fail', { msg: String(e) }); throw e; }); };
    window.AudioContext = function (...a) { const c = new AC(...a); window.__ctx = c; ev('ctx-new', { state: c.state, sr: c.sampleRate }); c.addEventListener('statechange', () => ev('ctx-state', { state: c.state })); return c; };
    window.AudioContext.prototype = p;
  }
  // Tilakuva harjoituksesta.
  window.__snap = () => {
    const s = document.querySelector('[data-sointuharjoitus="arvaa"]');
    if (!s) return null;
    const r = el => { const b = el.getBoundingClientRect(); return [Math.round(b.left), Math.round(b.top), Math.round(b.width), Math.round(b.height)]; };
    const btn = el => ({ text: el.textContent.trim().replace(/\s+/g, ' ').slice(0, 40), label: el.getAttribute('aria-label'), disabled: el.disabled, ariaDis: el.getAttribute('aria-disabled'), cls: el.className, playing: el.hasAttribute('data-playing'), bg: getComputedStyle(el).backgroundColor, color: getComputedStyle(el).color, rect: r(el) });
    const fb = s.querySelector('[data-arvauspalaute]');
    const st = s.querySelector('[data-sointu-tila]');
    return {
      scrollY: Math.round(scrollY), vw: innerWidth, vh: innerHeight, docW: document.documentElement.scrollWidth,
      pairs: [...s.querySelectorAll('[data-arvaus-pari]')].map(b => ({ ...btn(b), pressed: b.getAttribute('aria-pressed') })),
      start: { hidden: s.querySelector('[data-uusi-arvaus]').hidden },
      qHidden: s.querySelector('[data-arvaus-kysymys]').hidden,
      heading: s.querySelector('[data-kysymys]').textContent,
      listen: [...s.querySelectorAll('[data-arvaa-kuuntele]')].map(btn),
      answers: [...s.querySelectorAll('[data-vastaus]')].map(btn),
      feedback: { text: fb.textContent, cls: fb.className, color: getComputedStyle(fb).color, hidden: fb.hidden },
      status: { text: st.textContent, color: getComputedStyle(st).color },
      diagrams: [...s.querySelectorAll('[data-arvaus-kaaviot] figure')].map(f => ({ cap: f.querySelector('figcaption').textContent, code: f.querySelector('code').textContent, rect: r(f) })),
      diagHidden: s.querySelector('[data-arvaus-kaaviot]').hidden,
      focus: document.activeElement && (document.activeElement.getAttribute('aria-label') || document.activeElement.textContent.trim().slice(0, 30)),
      pairSel: r(s.querySelector('.sointu-parin-valinta')),
      ctx: window.__ctx && window.__ctx.state,
    };
  };
  // Komentojono: auditoija lähettää JS-lausekkeita paikallisen välityspalvelimen kautta.
  setInterval(async () => {
    let cmds = [];
    try { cmds = await (await of('/__cmd')).json(); } catch { return; }
    for (const c of cmds) {
      let out;
      try { out = await (0, eval)(c.js); } catch (e) { out = { err: String(e) }; }
      of('/__result', { method: 'POST', body: JSON.stringify({ id: c.id, out }) });
    }
  }, 250);
  addEventListener('click', e => {
    const t = e.target.closest('button');
    if (t) ev('click', { trusted: e.isTrusted, text: t.textContent.trim().replace(/\s+/g, ' ').slice(0, 30) });
  }, true);
})();
