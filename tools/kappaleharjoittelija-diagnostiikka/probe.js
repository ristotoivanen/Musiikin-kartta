/* Ladataan vain paikallisen diagnostiikkapalvelimen lisäämästä script-elementistä. */
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
  const events = ['loadstart', 'loadedmetadata', 'progress', 'canplay', 'playing', 'waiting',
    'stalled', 'seeking', 'seeked', 'pause', 'ended', 'emptied', 'error'];
  let lastId = 0;

  function record(event, details = {}) {
    recent.push({ ms: Math.round(performance.now()), event, ...details });
    if (recent.length > 480) recent.shift();
  }

  function track(element) {
    if (!(element instanceof HTMLAudioElement)) return null;
    const src = (element.getAttribute('src') ?? '').match(
      /\/yksi-sointu-kaksi-askelta-(akustinen|normaali)-(saestys|kitara|laulu)\.mp3$/,
    );
    if (!src) return null;
    if (!trackIds.has(element)) trackIds.set(element, ++lastId);
    return { id: trackIds.get(element), version: src[1], track: src[2] };
  }

  function ranges(timeRanges) {
    return Array.from({ length: timeRanges.length }, (_, index) => [
      timeRanges.start(index), timeRanges.end(index),
    ]);
  }

  function mediaState(element) {
    return {
      ...track(element), preload: element.preload, time: element.currentTime, duration: element.duration,
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

  const originalPlay = HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play = function (...args) {
    if (!track(this)) return originalPlay.apply(this, args);
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
        const route = { context: this, pre: addMeter(source), post: null, gain: null, destination: false };
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
    document.querySelector('#guitar-practice').after(panel);
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
  });
})();
