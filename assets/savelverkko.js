(() => {
  "use strict";
  const board = globalThis.MusicMapFretboard;
  const OPEN = [...board.OPEN_PITCHES].reverse(); // paksu E, A, D, G, B, ohut e
  const STRINGS = [...board.STRING_NAMES].reverse();
  const FULL_STRINGS = [
    "paksu E-kieli",
    "A-kieli",
    "D-kieli",
    "G-kieli",
    "B-kieli",
    "ohut e-kieli",
  ];
  const NAMES = [
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
    "A",
    "A♯",
    "B",
  ];
  const NATURALS = [0, 2, 4, 5, 7, 9, 11];
  const XHEAD = board.neckStyle.rail,
    Y0 = 64,
    ROW = 50,
    HEIGHT = 358;
  // Sisäinen kielinumero kasvaa paksusta ohuimpaan, tabulatuurin rivit päinvastoin.
  const TAB_ROWS = [5, 4, 3, 2, 1, 0];
  const stringY = (s) => Y0 + TAB_ROWS.indexOf(s) * ROW;
  let CELL = 46;
  const fretX = (f) => (f === 0 ? XHEAD / 2 : XHEAD + (f - 0.5) * CELL);
  const boardWidth = () => XHEAD + S.maxFret * CELL;
  const cellSize = (width) =>
    Math.max(46, Math.floor((width - XHEAD) / S.maxFret));
  let scrollOffset = 0;

  const modes = ["tutki", "sama-korkeus", "oktaavi", "muisti"];
  const lesson = () => {
    const key =
      location.hash.slice(1) ||
      new URLSearchParams(location.search).get("harjoitus");
    return modes.includes(key) ? key : "tutki";
  };
  const S = {
    mode: lesson(),
    maxFret: 12,
    pc: 0,
    active: null,
    lastPair: null,
    wrong: null,
    task: null,
    order: "random",
    explorePc: 0,
    view: "full",
    trace: null,
    focus: null,
    muted: false,
    playing: null,
    guitar: false,
    checked: false,
    feedback: "",
    warn: false,
  };
  const $ = (id) => document.getElementById(id);
  const pcs = (m) => m % 12;
  const nn = (m) => NAMES[pcs(m)] + (Math.floor(m / 12) - 1);
  const loc = (c) => `${STRINGS[c.s]}/${c.f}`;
  const longLoc = (c) =>
    `${FULL_STRINGS[c.s]}, ${c.f === 0 ? "vapaa kieli" : c.f + ". nauha"}`;
  const colour = (m) =>
    ["#e4b678", "#e8c781", "#74d5ba", "#9ebff2", "#d7b2e7"][
      Math.floor(m / 12) - 3
    ] || "#c6dbe7";
  const guided = () => S.mode === "oktaavi" || S.mode === "sama-korkeus";
  const sessions = new Map();
  const bag = [];
  let lastDraw = null;
  function drawPitch(first = false) {
    if (S.order === "ordered") {
      S.pc = first
        ? NATURALS[0]
        : NATURALS[(NATURALS.indexOf(S.pc) + 1) % NATURALS.length];
    } else {
      if (!bag.length) {
        bag.push(...NATURALS);
        for (let i = bag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [bag[i], bag[j]] = [bag[j], bag[i]];
        }
        if (bag[bag.length - 1] === lastDraw) {
          const j = Math.floor(Math.random() * (bag.length - 1));
          [bag[j], bag[bag.length - 1]] = [bag[bag.length - 1], bag[j]];
        }
      }
      S.pc = bag.pop();
    }
    lastDraw = S.pc;
    if (S.mode === "muisti") sessions.clear();
  }
  function memory() {
    const key = S.pc + "/" + S.maxFret;
    if (!sessions.has(key))
      sessions.set(key, {
        found: new Set(),
        aided: new Set(),
        clues: new Set(),
      });
    return sessions.get(key);
  }
  let cells = [],
    byId = new Map(),
    buttons = new Map();
  const matches = (pc = S.pc) => cells.filter((c) => pcs(c.m) === pc);
  function following() {
    return S.mode === "tutki" && S.view !== "full";
  }
  function liveEdge(edge) {
    return { a: byId.get(edge.a.id), b: byId.get(edge.b.id), type: edge.type };
  }
  function traceShift(fromPc, toPc) {
    let delta = toPc - fromPc;
    if (delta > 6) delta -= 12;
    if (delta < -6) delta += 12;
    return { fromPc, delta };
  }
  function traceEdges(nodes) {
    return getEdges(nodes).filter((edge) => edge.type === S.view);
  }
  function traceCaption() {
    if (!S.trace)
      return "Vaihda säveltä ja seuraa, miten paikat siirtyvät samoilla kielillä.";
    const { fromPc, delta } = S.trace,
      steps = Math.abs(delta);
    return `${NAMES[fromPc]} → ${NAMES[S.pc]} · ${steps} ${steps === 1 ? "nauha" : "nauhaa"} kohti ${delta > 0 ? "runkoa" : "satulaa"}. Harmaat ääriviivat näyttävät edellisen sävelen paikat ja yhteydet.`;
  }
  function visible() {
    if (S.mode === "tutki") return matches();
    if (S.mode === "muisti")
      return matches().filter((c) => memory().found.has(c.id));
    const ids = new Set([...S.task.previous, S.task.a.id, ...S.task.found]);
    return Array.from(ids, (id) => byId.get(id));
  }
  function tell(text, warn = false) {
    S.feedback = text;
    S.warn = warn;
  }
  function relation(a, b) {
    const d = b.m - a.m;
    if (!d) return "sama korkeus";
    const amount = Math.abs(d) / 12;
    const n =
      amount === 1
        ? "oktaavi"
        : amount === 2
          ? "kaksi oktaavia"
          : amount === 3
            ? "kolme oktaavia"
            : "neljä oktaavia";
    return n + (d > 0 ? " ylempänä" : " alempana");
  }
  function isShape(a, b) {
    const low = a.m < b.m ? a : b,
      high = low === a ? b : a;
    return (
      high.m - low.m === 12 &&
      high.s === low.s + 2 &&
      high.f - low.f === (low.s < 2 ? 2 : 3)
    );
  }
  function movement(a, b) {
    const ds = b.s - a.s,
      df = b.f - a.f;
    const strings = [
      "",
      "yksi kieli",
      "kaksi kieltä",
      "kolme kieltä",
      "neljä kieltä",
      "viisi kieltä",
    ][Math.abs(ds)];
    const frets = [
      "",
      "yksi nauha",
      "kaksi nauhaa",
      "kolme nauhaa",
      "neljä nauhaa",
      "viisi nauhaa",
    ];
    const steps = [];
    if (ds)
      steps.push(`${strings} ${ds > 0 ? "ohuempaan" : "paksumpaan"} suuntaan`);
    if (df)
      steps.push(
        `${frets[Math.abs(df)] || Math.abs(df) + " nauhaa"} kohti ${df > 0 ? "runkoa" : "satulaa"}`,
      );
    if (!ds) return `Pysy samalla kielellä ja siirry ${steps[0]}.`;
    return `Siirry ${steps.join(" ja ")}.`;
  }
  const sample = (items) => items[Math.floor(Math.random() * items.length)];
  // Practice exactly the yellow connections displayed by the complete map.
  function octaveRoute(notes, avoidId) {
    const remaining = getEdges(notes).filter((e) => e.type === "octave");
    const route = [];
    let previous = null;
    while (remaining.length) {
      const groups = new Map();
      function add(a, b, edge) {
        if (!groups.has(a.id)) groups.set(a.id, { a, targets: [], edges: [] });
        const group = groups.get(a.id);
        group.targets.push(b);
        group.edges.push(edge);
      }
      for (const edge of remaining) {
        add(edge.a, edge.b, edge);
        add(edge.b, edge.a, edge);
      }
      const options = [...groups.values()];
      const both = options.filter(
        ({ a, targets }) =>
          targets.some((b) => b.m < a.m) && targets.some((b) => b.m > a.m),
      );
      let choices = both.length ? both : options;
      if (!previous && avoidId) {
        const other = choices.filter((o) => o.a.id !== avoidId);
        if (other.length) choices = other;
      }
      if (previous) {
        const distance = ({ a }) =>
          Math.min(
            ...previous.targets.map(
              (b) => Math.abs(a.f - b.f) + Math.abs(a.s - b.s),
            ),
          );
        const nearest = Math.min(...choices.map(distance));
        choices = choices.filter((o) => distance(o) === nearest);
      }
      const group = sample(choices);
      route.push({
        a: group.a,
        targets: group.targets.sort((a, b) => a.m - b.m),
      });
      for (const edge of group.edges)
        remaining.splice(remaining.indexOf(edge), 1);
      previous = group;
    }
    return route;
  }
  function makeTask({ avoidId } = {}) {
    if (!guided()) {
      S.task = null;
      return;
    }
    const task = {
      stage: 0,
      found: new Set(),
      aided: new Set(),
      clues: new Set(),
      previous: new Set(),
      answered: 0,
      assisted: 0,
      get done() {
        return (
          this.found.size === this.targets.length &&
          this.stage === this.stageCount - 1
        );
      },
    };
    const notes = matches();
    S.task = task;
    if (S.mode === "oktaavi") {
      task.links = octaveRoute(notes, avoidId);
      task.stageCount = task.links.length;
      task.totalLinks = task.links.reduce(
        (total, group) => total + group.targets.length,
        0,
      );
      task.completedLinks = [];
      setLink();
    } else {
      const levels = [...new Set(notes.map((c) => c.m))].sort((a, b) => a - b);
      if (Math.random() < 0.5) levels.reverse();
      task.levels = levels;
      task.stageCount = levels.length;
      setAnchor(sample(notes.filter((c) => c.m === levels[0])));
    }
    task.firstId = task.a.id;
  }
  function setLink() {
    const task = S.task,
      link = task.links[task.stage];
    task.a = byId.get(link.a.id);
    task.targets = link.targets.map((c) => byId.get(c.id));
    task.found.clear();
    S.focus = task.a.id;
  }
  function setAnchor(anchor) {
    const task = S.task;
    task.a = anchor;
    task.found.clear();
    task.targets = unisons(anchor);
    // A single playable position is confirmed by playing the marked note.
    if (!task.targets.length) task.targets = [anchor];
    S.focus = anchor.id;
  }
  function advanceStage(last) {
    const task = S.task;
    const completed = [task.a, ...task.targets];
    for (const c of completed) task.previous.add(c.id);
    task.stage++;
    task.clues.clear();
    if (task.links) setLink();
    else {
      const options = matches().filter((c) => c.m === task.levels[task.stage]);
      const linked = options.filter((n) =>
        completed.some((c) => isShape(c, n)),
      );
      const choices = linked.length ? linked : options;
      choices.sort((a, b) => Math.abs(a.f - last.f) - Math.abs(b.f - last.f));
      setAnchor(choices[0]);
    }
    S.active = null;
    locate(S.task.a);
    if ($("board-scroll").contains(document.activeElement))
      buttons.get(S.task.a.id)?.focus({ preventScroll: true });
  }
  function nextTarget() {
    return S.task.targets.find((c) => !S.task.found.has(c.id));
  }
  function prompt() {
    if (S.mode === "muisti")
      return `Etsi kaikki ${NAMES[S.pc]}-sävelen paikat. Voit aloittaa miltä kieleltä tahansa.`;
    if (following()) {
      const rule =
        S.view === "octave"
          ? "Keltaisen katkoviivan päissä on yhden oktaavin ero."
          : "Vihreä viiva yhdistää paikat, joissa soi täsmälleen sama sävelkorkeus.";
      return `Pisteet näyttävät kaikki ${NAMES[S.pc]}-sävelen paikat. ${rule}`;
    }
    if (S.mode === "tutki")
      return "Napauta paikkaa nähdäksesi sen yhteydet. Vaihda säveltä laudalta tai kirjaimesta.";
    const { a, targets } = S.task;
    if (S.task.done)
      return S.task.links
        ? "Kaikki oktaaviparit löytyivät. Seuraa keltaisia katkoviivoja parista toiseen."
        : "Kaikki korkeudet löytyivät. Seuraa vihreää viivaa saman korkuisten sävelten välillä.";
    if (S.task.links) {
      const start = `Soita ${nn(a.m)} kohdasta ${loc(a)}.`;
      const pending = targets.filter((c) => !S.task.found.has(c.id));
      if (pending.length > 1)
        return `${start} Etsi oktaavi alempaa ja oktaavi ylempää. Voit aloittaa kummasta tahansa.`;
      const side = pending[0].m > a.m ? "ylempää" : "alempaa";
      return `${start} Etsi ${targets.length > 1 ? "vielä " : ""}oktaavi ${side}.`;
    }
    if (targets[0].id === a.id)
      return `${nn(a.m)} löytyy tällä nauha-alueella vain kohdasta ${loc(a)}. Soita merkitty sävel napauttamalla sitä.`;
    return `Lähtö on ${nn(a.m)} kohdassa ${loc(a)}. Etsi kaikki muut ${nn(a.m)}-paikat. Aiemmat löydöt jäävät laudalle.`;
  }
  function resetView(options) {
    stopAudio();
    S.active = null;
    S.lastPair = null;
    S.wrong = null;
    S.focus = null;
    S.checked = false;
    S.guitar = false;
    S.trace = null;
    makeTask(options);
    tell("");
  }
  function startMode(mode, writeHash = true) {
    if (!modes.includes(mode)) mode = "tutki";
    if (S.mode === "tutki") S.explorePc = S.pc;
    S.mode = mode;
    if (mode === "tutki") S.pc = S.explorePc;
    else drawPitch(true);
    resetView();
    render();
    if (writeHash && location.hash !== "#" + mode) {
      try {
        history.replaceState(null, "", "#" + mode);
      } catch {
        location.hash = mode;
      }
    }
  }
  function selectPc(pc) {
    if (S.mode !== "tutki" || S.pc === pc) return;
    const trace = following() ? traceShift(S.pc, pc) : null;
    S.pc = pc;
    resetView();
    if (trace) S.trace = trace;
    render();
    if (trace) animateShift();
  }
  function unisons(c) {
    return matches()
      .filter((n) => n.id !== c.id && n.m === c.m)
      .sort((a, b) => Math.abs(a.f - c.f) - Math.abs(b.f - c.f));
  }
  function neighbors(c) {
    if (!c) return [];
    const all = matches().filter((n) => n.id !== c.id);
    const octaves = [12, -12]
      .map(
        (delta) =>
          all
            .filter((n) => n.m - c.m === delta)
            .sort((a, b) => {
              const cost = (n) =>
                (delta && !isShape(c, n) ? 10 : 0) +
                Math.abs(n.f - c.f) +
                Math.abs(n.s - c.s) * 0.8;
              return cost(a) - cost(b);
            })[0],
      )
      .filter(Boolean);
    return [...unisons(c), ...octaves];
  }
  let audioContext = null,
    currentVoices = [],
    timers = [],
    soundEpoch = 0,
    runningSeries = false;
  function stopAudio() {
    soundEpoch++;
    runningSeries = false;
    S.playing = null;
    timers.forEach(clearTimeout);
    timers = [];
    for (const voice of currentVoices) {
      try {
        voice.stop();
      } catch {}
    }
    currentVoices = [];
  }
  async function playNotes(notes, series = false) {
    stopAudio();
    if (S.muted || !notes.length) return;
    const stamp = soundEpoch;
    try {
      try {
        if (navigator.audioSession) navigator.audioSession.type = "playback";
      } catch {}
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error();
      if (!audioContext || audioContext.state === "closed")
        audioContext = new Audio();
      if (audioContext.state !== "running") await audioContext.resume();
      if (stamp !== soundEpoch) return;
      const start = audioContext.currentTime + 0.025;
      runningSeries = series;
      notes.forEach((c, i) => {
        sound(c.m, audioContext, start + 0.58 * i, 0.48);
        if (series)
          timers.push(
            setTimeout(
              () => {
                if (stamp === soundEpoch) {
                  S.playing = c.id;
                  paintVoices();
                }
              },
              25 + 580 * i,
            ),
          );
      });
      if (series) {
        paintVoices();
        timers.push(
          setTimeout(
            () => {
              if (stamp === soundEpoch) {
                runningSeries = false;
                S.playing = null;
                paintVoices();
              }
            },
            Math.max(1, (notes.length - 1) * 580 + 550),
          ),
        );
      }
    } catch {
      if (stamp === soundEpoch) {
        const msg =
          "Äänentoisto ei käynnistynyt. Kokeile äänipainiketta uudelleen.";
        if (S.guitar) $("answer").textContent = msg;
        else {
          tell(msg, true);
          render();
        }
      }
    }
  }

  function getEdges(nodes) {
    // Vain saman soivan korkeuden yhteydet ovat yhtenäisiä (unisono).
    // Oktaavit näkyvät erillisinä katkoviivoina, ensisijaisesti kitaran
    // toistuvissa kahden kielen siirtymissä (+2 nauhaa; G/B-rajalla +3).
    const byMidi = new Map();
    for (const c of nodes) {
      if (!byMidi.has(c.m)) byMidi.set(c.m, []);
      byMidi.get(c.m).push(c);
    }
    const mids = [...byMidi.keys()].sort((a, b) => a - b),
      edges = [];
    const dist = (a, b) => Math.abs(a.x - b.x) * 1.15 + Math.abs(a.y - b.y);
    // Kevyt minimiyhdistävä verkko: kaikki samalla korkeudella soivat paikat
    // liittyvät toisiinsa mutta jokaista pistettä ei yhdistetä jokaiseen.
    for (const m of mids) {
      const group = byMidi.get(m),
        used = new Set([group[0].id]);
      while (used.size < group.length) {
        let best = null;
        for (const a of group)
          if (used.has(a.id))
            for (const b of group)
              if (!used.has(b.id)) {
                const d = dist(a, b);
                if (!best || d < best.d) best = { a, b, d, type: "unison" };
              }
        if (!best) break;
        edges.push(best);
        used.add(best.b.id);
      }
    }
    // Yhdistä kaikki selkeät oktaavimuodot, jotta pelaaja näkee
    // toistuvan kaksi kieltä ylös ja 2/3 nauhaa oikealle -rakenteen.
    // Jos kahden vierekkäisen oktaaviryhmän välillä ei ole tällaista
    // muotoa, yhdistä ryhmät yhdellä fyysisesti läheisimmällä yhteydellä.
    for (let k = 0; k < mids.length - 1; k++) {
      const lower = mids[k],
        upper = mids[k + 1];
      if (upper - lower !== 12) continue;
      const lows = byMidi.get(lower),
        highs = byMidi.get(upper);
      const patterns = [];
      for (const a of lows)
        for (const b of highs) {
          if (b.s !== a.s + 2) continue;
          const fretShift = a.s >= 2 ? 3 : 2;
          if (b.f === a.f + fretShift)
            patterns.push({ a, b, type: "octave", pattern: true });
        }
      if (patterns.length) {
        edges.push(...patterns);
      } else {
        let best = null;
        for (const a of lows)
          for (const b of highs) {
            const d = dist(a, b);
            if (!best || d < best.d)
              best = { a, b, d, type: "octave", pattern: false };
          }
        if (best) edges.push(best);
      }
    }
    return edges;
  }

  function backgroundSVG() {
    const w = boardWidth();
    const surface = board.neckSurface({
      count: S.maxFret,
      cell: CELL,
      row: ROW,
      firstY: Y0,
    });
    return `<svg class="fret-svg" aria-hidden="true" width="${w}" height="${HEIGHT}" viewBox="0 0 ${w} ${HEIGHT}">${surface}</svg>`;
  }

  function sound(midi, ctx, when = null, seconds = 0.48) {
    if (!ctx) return;
    const t = when ?? ctx.currentTime;
    const hz = 440 * Math.pow(2, (midi - 69) / 12);
    const partials = [
      [1, 0.29, "sine"],
      [2, 0.085, "triangle"],
      [3, 0.028, "sine"],
    ];
    for (const [ratio, amp, wave] of partials) {
      const osc = ctx.createOscillator(),
        gain = ctx.createGain();
      osc.type = wave;
      osc.frequency.setValueAtTime(hz * ratio, t);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(amp, t + 0.011);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + seconds);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.onended = () => {
        osc.disconnect();
        gain.disconnect();
        currentVoices = currentVoices.filter((v) => v !== osc);
      };
      osc.start(t);
      osc.stop(t + seconds + 0.015);
      currentVoices.push(osc);
    }
  }

  function edgePath(edge) {
    let { a, b } = edge;
    if (scrollOffset && (a.f === 0 || b.f === 0)) {
      const fretted = a.f === 0 ? b : a;
      if (fretted.x < scrollOffset + XHEAD) return "";
      if (a.f === 0) a = { ...a, x: scrollOffset + fretX(0) };
      if (b.f === 0) b = { ...b, x: scrollOffset + fretX(0) };
    }
    if (edge.type === "octave" && isShape(a, b)) {
      const low = a.m < b.m ? a : b,
        high = low === a ? b : a;
      return `M ${low.x} ${low.y} V ${high.y} H ${high.x}`;
    }
    const dx = b.x - a.x,
      dy = b.y - a.y;
    return `M ${a.x} ${a.y} L ${a.x + dx * 0.4} ${a.y + dy * 0.09} L ${a.x + dx * 0.6} ${a.y + dy * 0.91} L ${b.x} ${b.y}`;
  }
  function drawEdges(nodes) {
    let edges;
    if (following()) edges = traceEdges(nodes);
    else if (S.mode === "oktaavi") {
      edges = S.task.completedLinks.map(liveEdge);
    } else if (S.mode === "muisti") {
      const found = memory().found;
      edges = getEdges(matches()).filter(
        (e) => found.has(e.a.id) && found.has(e.b.id),
      );
    } else {
      edges = getEdges(nodes);
      if (S.mode === "sama-korkeus")
        edges = edges.filter((e) => e.type === "unison");
    }
    const active = byId.get(S.active),
      exploreAll = S.mode === "tutki" && !following();
    const local = exploreAll ? neighbors(active) : [];
    const keys = new Set();
    function key(a, b) {
      return [a.id, b.id].sort().join(":");
    }
    for (const n of local) {
      const k = key(active, n);
      keys.add(k);
      if (!edges.some((e) => key(e.a, e.b) === k))
        edges.push({
          a: active,
          b: n,
          type: active.m === n.m ? "unison" : "octave",
        });
    }
    if (exploreAll && S.lastPair && active) {
      const from = byId.get(S.lastPair);
      if (
        from &&
        [0, 12].includes(Math.abs(from.m - active.m)) &&
        from.id !== active.id
      ) {
        const k = key(from, active);
        keys.add(k);
        if (!edges.some((e) => key(e.a, e.b) === k))
          edges.push({
            a: from,
            b: active,
            type: active.m === from.m ? "unison" : "octave",
          });
      }
    }
    const paths = [],
      openPaths = [];
    for (const e of edges) {
      const emphasis = local.length
        ? keys.has(key(e.a, e.b))
          ? " em"
          : " dim"
        : "";
      const path = `<path class="edge ${e.type}${emphasis}" data-a="${e.a.id}" data-b="${e.b.id}" d="${edgePath(e)}"/>`;
      (e.a.f === 0 || e.b.f === 0 ? openPaths : paths).push(path);
    }
    showTrace(
      paths.join("") + '<g id="open-lines">' + openPaths.join("") + "</g>",
    );
  }
  function showTrace(paths) {
    let before = "",
      moving = "",
      labels = "";
    if (following() && S.trace) {
      const { fromPc, delta } = S.trace;
      const old = matches(fromPc),
        edges = traceEdges(old);
      const outline = (nodes, lines) =>
        lines.map((e) => `<path d="${edgePath(e)}"/>`).join("") +
        nodes.map((c) => `<circle cx="${c.x}" cy="${c.y}" r="16"/>`).join("");
      const openEdges = edges.filter((e) => e.a.f === 0 || e.b.f === 0);
      const frettedEdges = edges.filter((e) => e.a.f > 0 && e.b.f > 0);
      before = `<g class="trace-old">${outline(
        old.filter((c) => c.f > 0),
        frettedEdges,
      )}<g id="old-open-lines">${outline([], openEdges)}</g></g>`;
      labels =
        '<g class="trace-labels">' +
        old
          .filter((c) => c.f > 0)
          .map(
            (c) => `<text x="${c.x}" y="${c.y}" dy=".35em">${nn(c.m)}</text>`,
          )
          .join("") +
        "</g>";
      // At the nut and last fret, only animate positions that stay on the board.
      const move = (c) => byId.get(`${c.s}/${c.f + delta}`);
      const moved = old.map(move).filter(Boolean);
      const movedEdges = edges
        .filter((e) => move(e.a) && move(e.b))
        .map((e) => ({ a: move(e.a), b: move(e.b), type: e.type }));
      moving = `<g class="trace-moving" id="trace-moving">${outline(moved, movedEdges)}</g>`;
    }
    $("edges").innerHTML = before + paths + moving + labels;
  }
  function animateShift() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    $("trace-moving")?.animate?.(
      [
        { transform: `translateX(${-S.trace.delta * CELL}px)`, opacity: 0.9 },
        { transform: "translateX(0px)", opacity: 0 },
      ],
      { duration: 580, easing: "ease-in-out" },
    );
  }
  function updateViewport() {
    const v = $("board-scroll");
    if (!v.clientWidth) return;
    const first = Math.max(
      1,
      Math.min(S.maxFret, Math.ceil(v.scrollLeft / CELL + 0.5)),
    );
    const last = Math.min(
      S.maxFret,
      Math.floor((v.scrollLeft + v.clientWidth - XHEAD) / CELL + 0.5),
    );
    if (scrollOffset !== v.scrollLeft) {
      scrollOffset = v.scrollLeft;
      $("rail-links").setAttribute(
        "viewBox",
        `${scrollOffset} 0 ${XHEAD} ${HEIGHT}`,
      );
      drawEdges(visible());
    }
    $("viewport").textContent =
      `Näkyvissä nauhat ${first}–${Math.max(first, last)}`;
    $("jumps").hidden = v.scrollWidth <= v.clientWidth + 1;
    $("jumps").querySelector('[data-jump="24"]').hidden = S.maxFret < 24;
  }
  function scrollFret(f, smooth = false) {
    const v = $("board-scroll");
    const left = f === 0 ? 0 : fretX(f) - (v.clientWidth + XHEAD) / 2;
    v.scrollTo({
      left: Math.max(0, left),
      behavior:
        smooth && !matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "smooth"
          : "auto",
    });
  }
  function locate(c) {
    if (c.f === 0) return;
    const v = $("board-scroll");
    if (
      c.x - 22 < v.scrollLeft + XHEAD ||
      c.x + 22 > v.scrollLeft + v.clientWidth
    )
      scrollFret(c.f);
  }
  function buildBoard() {
    CELL = cellSize($("board-scroll").clientWidth);
    scrollOffset = $("board-scroll").scrollLeft;
    cells = [];
    byId.clear();
    buttons.clear();
    for (let s = 0; s < 6; s++)
      for (let f = 0; f <= S.maxFret; f++) {
        const c = {
          s,
          f,
          id: `${s}/${f}`,
          m: OPEN[s] + f,
          x: fretX(f),
          y: stringY(s),
        };
        cells.push(c);
        byId.set(c.id, c);
      }
    const track = $("board-track"),
      w = boardWidth();
    track.style.width = `${w}px`;
    track.innerHTML =
      backgroundSVG() +
      `<svg id="edges" class="link-svg" aria-hidden="true" width="${w}" height="${HEIGHT}" viewBox="0 0 ${w} ${HEIGHT}"></svg>`;
    const rail = document.createElement("div");
    rail.className = "string-key";
    rail.style.width = XHEAD + "px";
    rail.innerHTML = `<svg id="rail-links" class="rail-links" aria-hidden="true" width="${XHEAD}" height="${HEIGHT}" viewBox="${scrollOffset} 0 ${XHEAD} ${HEIGHT}"><use class="trace-old" href="#old-open-lines"/><use href="#open-lines"/></svg>`;
    track.append(rail);
    for (const c of [...cells].sort((a, b) => a.y - b.y || a.f - b.f)) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "fret-note";
      b.dataset.id = c.id;
      b.tabIndex = -1;
      if (!c.f) {
        b.dataset.open = "";
        b.title = "Soita " + longLoc(c);
      }
      b.style.width = (c.f ? CELL : XHEAD) + "px";
      b.style.left = c.x + "px";
      b.style.top = c.y + "px";
      b.style.setProperty("--pitch-color", colour(c.m));
      b.addEventListener("click", (e) => {
        if (e.detail > 0 && ignoreBoardClick) return;
        choose(c);
      });
      b.addEventListener("keydown", (e) => {
        const offsets = {
          ArrowLeft: [0, -1],
          ArrowRight: [0, 1],
          ArrowUp: [1, 0],
          ArrowDown: [-1, 0],
        };
        const d = offsets[e.key];
        if (!d) return;
        e.preventDefault();
        const target = byId.get(`${c.s + d[0]}/${c.f + d[1]}`);
        if (target) {
          S.focus = target.id;
          b.tabIndex = -1;
          const t = buttons.get(target.id);
          t.tabIndex = 0;
          t.focus({ preventScroll: true });
          locate(target);
        }
      });
      (c.f === 0 ? rail : track).appendChild(b);
      buttons.set(c.id, b);
    }
  }
  function choose(c) {
    if (S.guitar) return;
    if (following() && NATURALS.includes(pcs(c.m))) {
      const changed = pcs(c.m) !== S.pc;
      const trace = changed ? traceShift(S.pc, pcs(c.m)) : S.trace;
      S.pc = pcs(c.m);
      S.trace = trace;
      S.wrong = null;
      S.active = c.id;
      S.focus = c.id;
      playNotes([c]);
      tell(longLoc(c) + " · " + nn(c.m));
      render();
      if (changed) animateShift();
      return;
    }
    const previous = byId.get(S.active);
    S.focus = c.id;
    S.wrong = null;
    playNotes([c]);
    if (S.mode === "tutki") {
      if (!NATURALS.includes(pcs(c.m))) {
        S.wrong = c.id;
        tell(
          `${longLoc(c)}: ${nn(c.m)}. Valitse luonnollinen sävel nähdäksesi sen verkon.`,
          true,
        );
      } else {
        S.pc = pcs(c.m);
        S.active = c.id;
        S.lastPair =
          previous && pcs(previous.m) === S.pc && c.id !== previous.id
            ? previous.id
            : null;
        tell(
          S.lastPair
            ? `${loc(previous)} → ${loc(c)}: ${relation(previous, c)} (${nn(previous.m)} → ${nn(c.m)}).`
            : `${longLoc(c)}: ${nn(c.m)}. Valitse toinen piste tai kuuntele alla oleva pari.`,
        );
      }
    } else if (S.mode === "muisti") {
      const m = memory();
      if (pcs(c.m) !== S.pc) {
        S.wrong = c.id;
        tell(`${loc(c)} on ${nn(c.m)}. Etsi ${NAMES[S.pc]}.`, true);
      } else if (m.found.has(c.id)) {
        S.active = c.id;
        tell(`${loc(c)}: ${nn(c.m)}. Tämä paikka on jo verkossa.`);
      } else {
        m.found.add(c.id);
        if (m.clues.has(c.id)) m.aided.add(c.id);
        S.active = c.id;
        const pair =
          previous && pcs(previous.m) === S.pc
            ? `, ${relation(previous, c)} kuin ${loc(previous)}`
            : "";
        tell(
          `${loc(c)}: ${nn(c.m)}${pair}.` +
            (m.found.size === matches().length ? " Verkko valmis." : ""),
        );
      }
    } else {
      const { a, found, targets } = S.task;
      if (found.has(c.id)) tell(`${loc(c)} (${nn(c.m)}) on jo merkitty.`);
      else if (targets.some((n) => n.id === c.id)) markTarget(c);
      else if (c.id === a.id) tell(prompt());
      else if (S.task.done)
        tell(`${loc(c)}: ${nn(c.m)}. Koko verkko on valmis.`);
      else if (S.task.links && targets.some((target) => target.m === c.m)) {
        const wanted = targets.find((target) => target.m === c.m);
        tell(
          found.has(wanted.id)
            ? `${loc(c)} soi samalla korkeudella kuin jo löytynyt ${nn(c.m)}. ${prompt()}`
            : `${loc(c)} on oikea oktaavi (${nn(c.m)}). Etsi sama korkeus myös kieleltä ${STRINGS[wanted.s]}.`,
        );
      } else if (S.task.links && c.m === a.m) {
        tell(
          `${loc(c)} on ${nn(c.m)}, sama korkeus kuin kohdassa ${loc(a)}. ${prompt()}`,
        );
      } else {
        S.wrong = S.task.previous.has(c.id) ? null : c.id;
        const why =
          pcs(c.m) === S.pc
            ? c.m === a.m
              ? "Sävelkorkeus on sama kuin lähtöpaikassa."
              : `Se on ${relation(a, c)} kuin lähtösävel.`
            : "";
        const goal = S.task.links
          ? `Etsi ${targets
              .filter((t) => !found.has(t.id))
              .map((t) => nn(t.m) + " kieleltä " + STRINGS[t.s])
              .join(" ja ")}.`
          : `Etsi korkeutta ${nn(a.m)}.`;
        tell(
          [`${loc(c)} soi korkeudella ${nn(c.m)}.`, why, goal]
            .filter(Boolean)
            .join(" "),
          true,
        );
      }
    }
    render();
  }
  function markTarget(c, revealed = false) {
    const task = S.task;
    task.found.add(c.id);
    S.active = c.id;
    S.wrong = null;
    const aided = revealed || task.clues.has(c.id);
    task.answered++;
    if (aided) {
      task.assisted++;
      task.aided.add(c.id);
    }
    if (task.links)
      task.completedLinks.push({ a: task.a, b: c, type: "octave" });
    const lead = revealed
      ? "Näytetty paikka."
      : aided
        ? "Löysit paikan vihjeen avulla."
        : "Löysit paikan.";
    const left = task.targets.length - task.found.size;
    const more =
      left === 0
        ? "Kaikki paikat löytyivät."
        : left === 1
          ? "Yksi paikka vielä."
          : `Vielä ${left} paikkaa.`;
    if (left === 0) {
      const result = task.links
        ? task.targets.length > 1
          ? `Molemmat oktaavit löytyivät kohdasta ${loc(task.a)}.`
          : `${loc(c)} soi oktaavia ${c.m > task.a.m ? "ylempänä" : "alempana"}.`
        : `${nn(task.a.m)} on valmis.`;
      if (task.done)
        tell(`${result} Kierros on valmis. Voit kuunnella löytämäsi yhteydet.`);
      else {
        advanceStage(c);
        tell(
          `${result} Seuraava lähtöpaikka on ${loc(task.a)} (${nn(task.a.m)}).`,
        );
      }
    } else if (task.links) {
      const next = nextTarget();
      tell(
        `${lead} ${loc(c)} (${nn(c.m)}) on ${relation(task.a, c)}. Pysy lähtöpaikassa ${loc(task.a)} ja etsi vielä ${nn(next.m)}.`,
      );
    } else
      tell(
        `${lead} ${loc(c)} soi samalla korkeudella kuin ${loc(task.a)} (${nn(c.m)}). ${more}`,
      );
  }
  function memoryTarget() {
    return matches().find((c) => !memory().found.has(c.id));
  }
  function hint() {
    if (guided()) {
      const c = nextTarget();
      if (!c) return;
      S.task.clues.add(c.id);
      tell(
        c.id === S.task.a.id
          ? "Napauta renkaalla merkittyä lähtöpaikkaa."
          : (S.task.links ? nn(c.m) + " · " : "") + movement(S.task.a, c),
      );
    } else {
      const c = memoryTarget();
      if (!c) return;
      const m = memory(),
        anchor = visible()
          .slice()
          .sort((a, b) => Math.abs(a.m - c.m) - Math.abs(b.m - c.m))[0];
      m.clues.add(c.id);
      tell(
        `Tutki tätä kieltä: ${FULL_STRINGS[c.s]}.` +
          (anchor
            ? ` Etsimäsi ${NAMES[S.pc]} on ${relation(anchor, c)} verrattuna kohtaan ${loc(anchor)}.`
            : ""),
      );
    }
    render();
  }
  function reveal(all = false) {
    if (guided()) {
      const c = nextTarget();
      if (!c) return;
      const stage = S.task.stage;
      markTarget(c, true);
      if (stage === S.task.stage) locate(byId.get(c.id));
    } else {
      const m = memory(),
        rest = matches().filter((c) => !m.found.has(c.id)),
        shown = all ? rest : rest.slice(0, 1);
      for (const c of shown) {
        m.found.add(c.id);
        m.aided.add(c.id);
      }
      S.wrong = null;
      if (shown.length === 1) {
        S.active = shown[0].id;
        tell(`Paljastettu paikka: ${loc(shown[0])} (${nn(shown[0].m)}).`);
        locate(shown[0]);
      } else tell("Loput paikat on näytetty. Voit kuunnella verkon.");
    }
    render();
  }
  function nextTask(sameNote = false) {
    const avoidId = sameNote ? S.task.firstId : null;
    if (!sameNote) drawPitch();
    resetView({ avoidId });
    render();
    if (guided()) locate(S.task.a);
  }
  function guitarExample() {
    const edges = traceEdges(matches());
    const picked = edges.find(
      (e) => e.a.id === S.active || e.b.id === S.active,
    );
    const edge =
      picked ||
      edges.sort((u, v) => Math.max(u.a.f, u.b.f) - Math.max(v.a.f, v.b.f))[0];
    return edge.b.id === S.active ? { a: edge.b, b: edge.a } : edge;
  }
  function guitarAnchor() {
    if (following()) return guitarExample().a;
    return guided()
      ? S.task.a
      : byId.get(S.active) ||
          matches()
            .slice()
            .sort((a, b) => a.f - b.f)[0];
  }
  function toggleGuitar(show) {
    stopAudio();
    S.guitar = show;
    S.checked = false;
    render();
    if (show)
      $("reference").disabled ? $("check").focus() : $("reference").focus();
    else $("guitar").focus();
  }
  function checkGuitar() {
    S.checked = true;
    if (guided())
      for (const c of S.task.targets)
        if (!S.task.found.has(c.id)) S.task.clues.add(c.id);
    if (S.mode === "muisti")
      for (const c of matches())
        if (!memory().found.has(c.id)) memory().clues.add(c.id);
    render();
  }

  function paintVoices() {
    for (const [id, button] of buttons)
      button.classList.toggle("is-playing", id === S.playing);
    let playLabel = following() ? "Kuuntele kuvio" : "Kuuntele verkko";
    if (guided()) {
      playLabel = "Kuuntele lähtösävel";
      if (S.task.found.size || S.task.previous?.size)
        playLabel = "Kuuntele merkityt paikat";
    }
    $("play").textContent = runningSeries ? "Pysäytä" : playLabel;
  }
  function groupText(nodes) {
    const sorted = nodes.slice().sort((a, b) => a.m - b.m || a.s - b.s),
      groups = new Map();
    for (const c of sorted) {
      if (!groups.has(c.m)) groups.set(c.m, []);
      groups.get(c.m).push(loc(c));
    }
    return [...groups]
      .map(([m, ls]) => `${nn(m)}: ${ls.join(" · ")}`)
      .join(" / ");
  }
  function showProgress(solved, m) {
    const task = S.task,
      list = $("directions");
    list.replaceChildren();
    list.hidden = S.mode !== "oktaavi" || solved;
    if (!list.hidden) {
      for (const target of task.targets) {
        const item = document.createElement("li"),
          found = task.found.has(target.id);
        const side = target.m < task.a.m ? "Alempi" : "Ylempi";
        item.textContent =
          `${side} · ${nn(target.m)} · ${FULL_STRINGS[target.s]}` +
          (found ? " · ✓ löydetty" : "");
        if (found) item.className = "found";
        list.append(item);
      }
    }
    const box = $("round-result");
    box.hidden = !solved;
    if (!solved) return;
    const total = task ? task.answered : m.found.size;
    const aided = task ? task.assisted : m.aided.size;
    const title =
      S.mode === "oktaavi"
        ? "Kaikki oktaaviyhteydet löytyivät!"
        : "Kaikki sävelpaikat löytyivät!";
    const unit =
      S.mode === "oktaavi" ? "yhteyttä" : task ? "tehtävää" : "paikkaa";
    const summary =
      `${total}/${total} ${unit} · ${total - aided} itse` +
      (aided ? ` · ${aided} avustettuna` : " · kaikki oikein");
    if ($("result-title").textContent !== title)
      $("result-title").textContent = title;
    if ($("result-count").textContent !== summary)
      $("result-count").textContent = summary;
  }
  function render() {
    const g = guided(),
      m = memory(),
      all = matches(),
      nodes = visible(),
      marks = new Set(nodes.map((c) => c.id));
    $("explore-setting").hidden = S.mode !== "tutki";
    $("explore-view").value = S.view;
    $("key-unison").hidden =
      S.mode === "oktaavi" || (following() && S.view === "octave");
    $("key-octave").hidden =
      S.mode === "sama-korkeus" || (following() && S.view === "unison");
    $("key-previous").hidden = !(following() && S.trace);
    $("trace-caption").hidden = !following();
    $("trace-caption").textContent = following() ? traceCaption() : "";
    $("mode").value = S.mode;
    $("picker").hidden = S.mode !== "tutki";
    $("order-setting").hidden = S.mode === "tutki";
    $("order").value = S.order;
    $("short").setAttribute("aria-pressed", String(S.maxFret === 12));
    $("long").setAttribute("aria-pressed", String(S.maxFret === 24));
    $("mute").setAttribute("aria-pressed", String(!S.muted));
    $("mute").textContent = S.muted ? "Ääni pois" : "Ääni päällä";
    $("heading").textContent = {
      tutki: `${NAMES[S.pc]} otelaudalla`,
      muisti: `Löydä kaikki ${NAMES[S.pc]}-sävelet`,
      oktaavi: `Etsi ${NAMES[S.pc]}-sävelen oktaavit`,
      "sama-korkeus": `Etsi sama korkeus · ${NAMES[S.pc]}`,
    }[S.mode];
    const solved = g
      ? S.task.done
      : S.mode === "muisti" && m.found.size === all.length;
    showProgress(solved, m);
    $("instruction").hidden = solved;
    $("instruction").textContent = prompt();
    $("meter").textContent =
      S.mode === "muisti"
        ? `${m.found.size}/${all.length} paikkaa · ${m.found.size - m.aided.size} itse`
        : S.mode === "tutki"
          ? `${all.length} paikkaa · ${new Set(all.map((c) => c.m)).size} korkeutta`
          : S.mode === "oktaavi"
            ? `Oktaaviyhteydet ${S.task.answered}/${S.task.totalLinks}`
            : `Korkeus ${S.task.stage + 1}/${S.task.stageCount} · ${nn(S.task.a.m)} · Paikat ${nodes.filter((c) => c.m === S.task.a.m).length}/${all.filter((c) => c.m === S.task.a.m).length}`;
    for (const b of $("picker").children)
      b.setAttribute("aria-pressed", String(Number(b.dataset.pc) === S.pc));
    $("task-area").hidden = S.guitar;
    $("board-panel").hidden = S.guitar;
    $("info").hidden = S.guitar;
    $("guitar-panel").hidden = !S.guitar;
    if (S.guitar) {
      const anchor = guitarAnchor();
      if (following()) {
        const { a, b } = guitarExample();
        $("guitar-task").textContent =
          `Soita ${nn(a.m)} kohdasta ${loc(a)} ja ${nn(b.m)} kohdasta ${loc(b)}. ` +
          (S.view === "unison"
            ? "Kuuntele, miten korkeus pysyy samana kielen vaihtuessa."
            : "Kuuntele oktaavin hyppy. Palaa sitten lähtösäveleen.");
      } else if (g && S.task.done)
        $("guitar-task").textContent = S.task.links
          ? "Soita muistamasi oktaaviparit omalla kitarallasi."
          : "Soita yksi korkeus kerrallaan kaikista muistamistasi paikoista.";
      else if (S.mode === "oktaavi") {
        const remaining = S.task.targets.filter((c) => !S.task.found.has(c.id));
        const goals = remaining.map(
          (c) => nn(c.m) + " (" + FULL_STRINGS[c.s] + ")",
        );
        $("guitar-task").textContent =
          prompt() + " Soita " + goals.join(" ja ") + ".";
      } else if (S.mode === "sama-korkeus")
        $("guitar-task").textContent =
          `Soita ${nn(anchor.m)} kohdasta ${loc(anchor)}. Etsi omalta kitaraltasi kaikki tämän korkuiset sävelet valitulta nauha-alueelta.`;
      else
        $("guitar-task").textContent = g
          ? prompt()
          : S.mode === "muisti"
            ? `Etsi omalta kitaralta niin monta ${NAMES[S.pc]}-säveltä kuin muistat. Aloita haluamaltasi kieleltä.`
            : `Soita ${nn(anchor.m)} kohdasta ${loc(anchor)}. Etsi sille toinen paikka samalla korkeudella tai yhden oktaavin päästä.`;
      $("reference").disabled = S.muted;
      let answer = "";
      if (S.checked) {
        if (following() || (g && S.task.done)) answer = groupText(nodes);
        else if (g) {
          const { a, targets } = S.task;
          answer = groupText([a, ...targets.filter((c) => c.id !== a.id)]);
        } else answer = groupText(all);
      }
      $("answer").textContent = answer;
      $("check").disabled = S.checked;
      return;
    }
    const firstFocus = S.focus || (g ? S.task.a.id : `${TAB_ROWS[0]}/0`);
    for (const c of cells) {
      const b = buttons.get(c.id),
        marked = marks.has(c.id),
        wrong = S.wrong === c.id;
      const selected = g ? S.task.a.id === c.id : S.active === c.id;
      const assisted =
        marked &&
        (S.mode === "muisti" ? m.aided.has(c.id) : g && S.task.aided.has(c.id));
      b.className =
        "fret-note" +
        (marked ? " is-visible" : "") +
        (selected ? " is-selected" : "") +
        (wrong ? " is-wrong" : "") +
        (assisted ? " is-assisted" : "");
      const ghost = following() && S.trace && pcs(c.m) === S.trace.fromPc;
      const open = c.f === 0;
      b.classList.toggle("is-ghost", Boolean(open && ghost && !wrong));
      if (open) {
        const octave = marked || wrong || ghost ? Math.floor(c.m / 12) - 1 : "";
        b.textContent = STRINGS[c.s] + octave;
      } else b.textContent = marked || wrong ? nn(c.m) : "";
      b.tabIndex = c.id === firstFocus ? 0 : -1;
      const noteLabel = ghost
        ? `, edellisen kuvion ${nn(c.m)}`
        : marked || wrong
          ? `, ${nn(c.m)}`
          : "";
      b.setAttribute(
        "aria-label",
        longLoc(c) +
          noteLabel +
          (selected ? ", lähtöpaikka" : "") +
          (assisted ? ", avustettu" : ""),
      );
    }
    drawEdges(nodes);
    paintVoices();
    const related = $("neighbors");
    related.replaceChildren();
    const active = byId.get(S.active);
    if (active && S.mode === "tutki" && !following()) {
      for (const n of neighbors(active)) {
        const button = document.createElement("button");
        button.textContent = `${relation(active, n)} · ${loc(n)}`;
        button.setAttribute(
          "aria-label",
          `Vertaa paria ${loc(active)} ja ${loc(n)}: ${relation(active, n)}`,
        );
        button.onclick = () => {
          S.lastPair = n.id;
          tell(
            `${loc(active)} (${nn(active.m)}) → ${loc(n)} (${nn(n.m)}): ${relation(active, n)}.`,
          );
          $("feedback").textContent = S.feedback;
          $("feedback").classList.remove("warn");
          drawEdges(nodes);
          locate(n);
          playNotes([active, n], true);
        };
        related.append(button);
      }
    }
    $("feedback").textContent =
      S.feedback ||
      (S.mode === "tutki"
        ? "Valitse otelaudalta yksi piste kuullaksesi sävelen."
        : g
          ? `Lähtöpaikka ${loc(S.task.a)} on merkitty renkaalla.`
          : "Ensimmäinen löytö aloittaa verkon.");
    $("feedback").classList.toggle("warn", S.warn);
    $("next").hidden = S.mode === "tutki";
    $("next").textContent =
      S.order === "random"
        ? "Arvo uusi sävel"
        : `Seuraava sävel · ${NAMES[NATURALS[(NATURALS.indexOf(S.pc) + 1) % NATURALS.length]]}`;
    $("next").classList.toggle("primary", solved);
    $("same-note").hidden = S.mode !== "oktaavi" || !solved;
    $("hint").hidden = S.mode === "tutki" || solved;
    $("reveal").hidden = S.mode === "tutki" || solved;
    $("reveal").textContent = "Näytä yksi paikka";
    $("all").hidden = S.mode !== "muisti" || solved;
    $("reset").hidden = S.mode !== "muisti" || !m.found.size;
    $("play").disabled = S.muted || !nodes.length;
    const groups = $("groups");
    groups.replaceChildren();
    for (const midi of [...new Set(nodes.map((c) => c.m))].sort(
      (a, b) => a - b,
    )) {
      const row = document.createElement("div");
      row.className = "group";
      const label = document.createElement("b");
      label.style.color = colour(midi);
      label.textContent = nn(midi);
      const positions = document.createElement("span");
      positions.textContent = nodes
        .filter((c) => c.m === midi)
        .map(
          (c) =>
            loc(c) +
            (S.mode === "muisti" && m.aided.has(c.id) ? " (avustettu)" : ""),
        )
        .join(" · ");
      row.append(label, positions);
      groups.append(row);
    }
    if (!nodes.length) groups.textContent = "Löytämäsi paikat näkyvät tässä.";
    updateViewport();
  }
  for (const pc of NATURALS) {
    const b = document.createElement("button");
    b.type = "button";
    b.dataset.pc = pc;
    b.textContent = NAMES[pc];
    b.setAttribute("aria-label", "Valitse " + NAMES[pc]);
    b.onclick = () => selectPc(pc);
    $("picker").append(b);
  }
  $("explore-view").onchange = (e) => {
    S.view = e.target.value;
    resetView();
    render();
  };
  $("mode").onchange = (e) => {
    startMode(e.target.value);
    if (guided()) locate(S.task.a);
  };
  window.addEventListener("hashchange", () => {
    if (lesson() !== S.mode) {
      startMode(lesson(), false);
      if (guided()) locate(S.task.a);
    }
  });
  $("order").onchange = (e) => {
    S.order = e.target.value;
    bag.length = 0;
    drawPitch(true);
    resetView();
    render();
    if (guided()) locate(S.task.a);
  };
  function setRange(n) {
    if (S.maxFret === n) return;
    S.maxFret = n;
    buildBoard();
    resetView();
    if (guided())
      tell(
        `Uusi ${NAMES[S.pc]}-verkko nauhoilla 0–${n}. Lähtö on ${loc(S.task.a)} (${nn(S.task.a.m)}).`,
      );
    render();
    if (guided()) scrollFret(S.task.a.f);
    else $("board-scroll").scrollLeft = 0;
  }
  $("short").onclick = () => setRange(12);
  $("long").onclick = () => setRange(24);
  $("mute").onclick = () => {
    stopAudio();
    S.muted = !S.muted;
    render();
  };
  const scroller = $("board-scroll");
  let touchOrigin = null,
    ignoreBoardClick = false;
  scroller.addEventListener(
    "pointerdown",
    (e) => {
      ignoreBoardClick = false;
      touchOrigin =
        e.pointerType === "mouse"
          ? null
          : { id: e.pointerId, x: e.clientX, y: e.clientY };
    },
    { passive: true },
  );
  scroller.addEventListener(
    "pointermove",
    (e) => {
      if (
        touchOrigin &&
        touchOrigin.id === e.pointerId &&
        Math.hypot(e.clientX - touchOrigin.x, e.clientY - touchOrigin.y) > 9
      )
        ignoreBoardClick = true;
    },
    { passive: true },
  );
  scroller.addEventListener(
    "pointercancel",
    () => {
      touchOrigin = null;
      ignoreBoardClick = true;
    },
    { passive: true },
  );
  scroller.addEventListener(
    "pointerup",
    () => {
      touchOrigin = null;
    },
    { passive: true },
  );
  scroller.addEventListener("scroll", updateViewport, { passive: true });
  new ResizeObserver(() => {
    const v = $("board-scroll");
    if (!v.clientWidth) return;
    const size = cellSize(v.clientWidth);
    if (size !== CELL) {
      const focused = v.contains(document.activeElement);
      buildBoard();
      render();
      if (focused && S.focus)
        buttons.get(S.focus)?.focus({ preventScroll: true });
    }
    updateViewport();
  }).observe($("board-scroll"));
  for (const b of $("jumps").children) {
    b.setAttribute(
      "aria-label",
      b.dataset.jump === "0"
        ? "Siirry satulaan"
        : "Siirry nauhalle " + b.dataset.jump,
    );
    b.onclick = () => scrollFret(Number(b.dataset.jump), true);
  }
  $("play").onclick = () => {
    if (runningSeries) {
      stopAudio();
      paintVoices();
      return;
    }
    const nodes = visible();
    const notes =
      following() && S.view === "octave"
        ? traceEdges(nodes).flatMap((e) => [e.a, e.b])
        : S.mode === "sama-korkeus"
          ? nodes
          : nodes.sort((a, b) => a.m - b.m || a.f - b.f);
    playNotes(notes, true);
  };
  $("next").onclick = () => nextTask();
  $("same-note").onclick = () => nextTask(true);
  $("guitar").onclick = () => toggleGuitar(true);
  $("back").onclick = () => toggleGuitar(false);
  $("reference").onclick = () => playNotes([guitarAnchor()]);
  $("check").onclick = checkGuitar;
  $("hint").onclick = hint;
  $("reveal").onclick = () => reveal();
  $("all").onclick = () => reveal(true);
  $("reset").onclick = () => {
    const m = memory();
    m.found.clear();
    m.aided.clear();
    m.clues.clear();
    resetView();
    render();
  };
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAudio();
      paintVoices();
    }
  });
  window.addEventListener("pagehide", stopAudio);
  buildBoard();
  startMode(lesson(), false);
  if (guided()) locate(S.task.a);
})();
