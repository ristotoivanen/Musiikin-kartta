import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Controls, MODES } from './Controls';
import { Board, resultSummary } from './Board';
import { Microphone, ReferencePlayer, micError } from './audio';
import { PracticeEngine, pool } from './engine';
import { CHORDS, INTERVALS, music, note, pc, type Position } from './music';
import { answerCheck, answerInput, fromURL, settingsURL, type Settings } from './settings';
import { ProgressStore, proficiency } from './storage';
import type { PitchFrame } from './vendor/pitchDetector';
import { listInputDevices } from './vendor/micInput';
import './style.css';

function createStore() { try { return new ProgressStore(localStorage); } catch { return new ProgressStore(); } }
function App() {
  const [store] = useState(createStore);
  const [s,setSettings] = useState(() => fromURL(location.search,store.data.settings));
  const engine = useRef<PracticeEngine>();
  const mic = useRef(new Microphone()), player = useRef(new ReferencePlayer());
  const operation = useRef(0), refresh = useState(0)[1];
  const [busy,setBusy] = useState(false), [playing,setPlaying] = useState(false), [micOn,setMicOn] = useState(false);
  const [frame,setFrame] = useState<PitchFrame|null>(null), [candidate,setCandidate] = useState<number|null>(null);
  const [message,setMessage] = useState('Valitse harjoitus ja aloita. Voit harjoitella myös ilman mikrofonia.');
  const [error,setError] = useState(''), [hint,setHint] = useState(false), [devices,setDevices] = useState<MediaDeviceInfo[]>([]);
  const [calibrating,setCalibrating] = useState(false);
  const calibratingRef = useRef(false), calibrationSamples = useRef<number[]>([]), calibrationRaf = useRef(0), calibrationTimer = useRef<ReturnType<typeof setTimeout>>();
  const draw = () => refresh(v => v+1);
  const e = engine.current, q = e?.question;
  const active = e?.phase === 'active';
  const locked = !!e && !['idle','done'].includes(e.phase) || busy || calibrating;

  function closeAudio() {
    operation.current++; mic.current.stop(); player.current.stop();
    setMicOn(false); setPlaying(false); setBusy(false); setFrame(null); setCandidate(null);
    calibratingRef.current = false; setCalibrating(false);
    cancelAnimationFrame(calibrationRaf.current); clearTimeout(calibrationTimer.current);
  }
  function saveSession(current: PracticeEngine, complete: boolean) {
    if (!current.results.length) return;
    store.session({ id: current.id, mode: current.settings.mode, count: current.results.length,
      first: current.results.filter(r => r.first).length, ms: current.results.reduce((a,r) => a+r.ms,0), at: Date.now(), complete });
  }
  function finish(complete = false) {
    closeAudio(); const current = engine.current;
    if (current) { current.stop(); saveSession(current,complete); }
    setMessage(complete ? 'Kierros valmis. Hyvää työtä! Katso tulokset ja valitse seuraava harjoitus.' : 'Harjoitus päättyi. Vastatut kysymykset on säilytetty.'); draw();
  }
  function respond(value: number, input: 'mic'|'board'|'note'|'degree', p?: Position) {
    const current = engine.current;
    if (!current || current.phase !== 'active') return;
    const status = current.answer(value,input,p);
    if (status === 'candidate') { setCandidate(value); return; }
    if (status === 'wrong') {
      setMessage(`Vastaus ei vielä osunut. ${input === 'degree' ? `Valitsit ${value === 0 ? '1' : value === 3 ? '♭3' : value === 4 ? '3' : value === 7 ? '5' : value === 10 ? '♭7' : 'toisen asteen'}.` : `Valitsit ${note(value,s.flats,true)}.`} Kokeile uudelleen tai avaa vihje.`);
    }
    if (status === 'correct') {
      mic.current.stop(); setMicOn(false); setCandidate(null); setFrame(null);
      saveSession(current,false);
      const target = current.question!;
      setMessage(`Oikein: ${note(target.midi,s.flats,current.settings.check === 'pitch')}${target.degree ? `, ${target.degree}. aste` : ''}. ${input === 'mic' ? 'Sävel vastasi tehtävää; kieltä tai nauhaa ei voida varmistaa mikrofonista.' : 'Jatka seuraavaan kysymykseen.'}`);
    }
    draw();
  }
  async function enableMic(current: PracticeEngine) {
    if (current.settings.input !== 'mic' || current.question?.choices !== 'position' || current.phase !== 'active') return;
    const token = operation.current;
    let lastFrameAt = 0;
    setBusy(true);
    try {
      const started = await mic.current.start(current.settings.device, {
        minRms: current.settings.minRms, minClarity: current.settings.clarity,
        stabilityMs: current.settings.stability, centsTolerance: current.settings.cents,
        onFrame: f => { const now = performance.now(); if (!f || now-lastFrameAt >= 120) { setFrame(f); lastFrameAt=now; } },
        onStableNote: event => { if (engine.current === current && !calibratingRef.current) respond(event.midi,'mic'); },
      }, () => {
        current.pause(); setMicOn(false); setError('Äänitulo katosi. Kytke laite takaisin ja jatka tai päätä kierros.'); draw();
      });
      if (started && token === operation.current) {
        setMicOn(true);
        const list = await navigator.mediaDevices.enumerateDevices().catch(() => []);
        if (token === operation.current) setDevices(list.filter(d => d.kind === 'audioinput'));
      }
    } catch (error) {
      if (token === operation.current) { current.pause(); setError(micError(error)); draw(); }
    } finally { if (token === operation.current) setBusy(false); }
  }
  async function playQuestion(current: PracticeEngine) {
    const sounds = current.question?.sound;
    if (!sounds?.length || current.phase !== 'active') return;
    closeAudio(); const token = operation.current;
    current.pause(); setPlaying(true); setMessage('Kuuntele. Vastaa äänen päätyttyä.'); draw();
    try {
      const completed = await player.current.play(sounds);
      if (!completed || token !== operation.current || current !== engine.current) return;
      current.resume(); setPlaying(false); setMessage('Nyt voit vastata. Voit kuunnella esimerkin uudelleen.'); draw();
      await enableMic(current);
    } catch (error) {
      if (token === operation.current) { setPlaying(false); setError(micError(error)); draw(); }
    }
  }
  async function prepareQuestion(current: PracticeEngine) {
    setHint(false); setCandidate(null); setError('');
    const automaticHint = current.question?.choices === 'position' && (s.hints === 'always' || s.hints === 'fade' && current.index <= 6);
    if (automaticHint) { setHint(true); current.hint(); }
    draw();
    if (current.question?.sound.length) await playQuestion(current); else await enableMic(current);
  }
  async function start() {
    closeAudio(); setError('');
    const current = new PracticeEngine(s,() => store.data.stats,r => { store.record(r); });
    try {
      current.start(); engine.current = current;
      setMessage('Etsi tehtävän sävel. Otelaudalla vastaus valitaan painamalla nauhan kohtaa.');
      await prepareQuestion(current);
    } catch (error) { current.stop(); engine.current = current; setError(micError(error)); draw(); }
  }
  async function next() {
    const current = engine.current;
    if (!current || current.phase !== 'feedback') return;
    try {
      current.next();
      if (current.phase as string === 'done') { finish(true); return; }
      setMessage('Seuraava sävel.'); await prepareQuestion(current);
    } catch (error) { finish(); setError(micError(error)); }
  }
  function pause() {
    closeAudio(); engine.current?.pause(); setMessage('Harjoitus on tauolla. Mikrofoni on suljettu.'); draw();
  }
  async function resume() {
    const current = engine.current;
    if (!current || current.phase !== 'paused') return;
    setError(''); current.resume(); setMessage('Harjoitus jatkuu.'); draw();
    if (current.question?.sound.length && (current.phase as string) === 'active') await playQuestion(current);
    else await enableMic(current);
  }
  async function calibrate() {
    closeAudio(); setError(''); setCalibrating(true); calibratingRef.current = true;
    const token = operation.current;
    setMessage('Kalibrointi: ole hiljaa kolme sekuntia. Kitaran säveliä ei arvioida.');
    try {
      const ok = await mic.current.start(s.device,{},() => { closeAudio(); setError('Äänitulo katosi kalibroinnin aikana.'); });
      if (!ok || token !== operation.current) return;
      setMicOn(true); calibrationSamples.current = [];
      const sample = () => {
        if (token !== operation.current) return;
        calibrationSamples.current.push(mic.current.loop!.getRms());
        calibrationRaf.current = requestAnimationFrame(sample);
      };
      sample();
      calibrationTimer.current = setTimeout(() => {
        if (token !== operation.current) return;
        const samples = calibrationSamples.current.sort((a,b) => a-b);
        const noise = samples[Math.floor(samples.length*.95)] ?? .002;
        const threshold = Math.min(.15,Math.max(.003,noise*3));
        closeAudio(); change({ ...s, minRms: threshold });
        setMessage(`Kalibrointi valmis. Äänikynnys on ${threshold.toFixed(3)}. ${noise > .04 ? 'Huone on äänekäs: vähennä taustamelua ja kalibroi uudelleen.' : 'Aloita harjoitus ja kokeile yhtä säveltä.'}`);
      },3000);
    } catch (error) { if (token === operation.current) { closeAudio(); setError(micError(error)); } }
  }
  function change(settings: Settings) { setSettings(settings); store.settings(settings); }
  useEffect(() => {
    let disposed = false;
    void listInputDevices().then(list => { if (!disposed) setDevices(list); }).catch(() => {});
    const hidden = () => { if (document.hidden) { closeAudio(); engine.current?.pause(); draw(); } };
    const leaving = () => { mic.current.stop(); player.current.stop(); operation.current++; engine.current?.pause(); };
    const returning = () => { setBusy(false); setPlaying(false); setMicOn(false); draw(); };
    document.addEventListener('visibilitychange',hidden); window.addEventListener('pagehide',leaving);
    window.addEventListener('pageshow',returning);
    return () => { disposed = true; leaving(); clearTimeout(calibrationTimer.current); cancelAnimationFrame(calibrationRaf.current); document.removeEventListener('visibilitychange',hidden); window.removeEventListener('pagehide',leaving); window.removeEventListener('pageshow',returning); };
  },[]);
  const reveal = () => { setHint(true); engine.current?.hint(); draw(); };
  const targets = q && hint ? q.choices === 'position' && s.mode !== 'notes' ? pool(s).filter(p => s.check === 'pitch' ? p.midi === q.midi : pc(p.midi) === pc(q.midi)) : [q.position] : [];
  const canAnswer = active && !busy && !playing;
  const currentMode = MODES.find(([id]) => id === s.mode)!;
  const relevant = Object.entries(store.data.stats).filter(([key]) => key.startsWith(`${answerInput(s)}:${answerCheck(s)}:solo:`) && key.includes(`:${s.mode}:`));
  const weakest = relevant.filter(([,st]) => st.attempts >= 3).sort((a,b) => proficiency(a[1])!-proficiency(b[1])!).slice(0,5);
  const total = Object.values(store.data.stats).reduce((n,st) => n+st.attempts,0);
  function describeItem(key: string): string {
    const parts = key.split(':');
    if (parts[3] === 'ear-note') return `Kuultu sävel ${note(Number(parts[4]),s.flats)}`;
    if (['notes','repeat'].includes(parts[3])) return `${['ohut E','B','G','D','A','paksu E'][Number(parts[4])]}-kieli, nauha ${parts[5]}`;
    if (parts[3] === 'interval') return `${INTERVALS[Number(parts[4])]} · ${parts[5] === 'up' ? 'nouseva' : 'laskeva'}`;
    if (parts[3] === 'chord') return `${note(Number(parts[4]))}${CHORDS[parts[5] as keyof typeof CHORDS]?.suffix ?? ''} · ${parts[6]} puoliaskelta perussävelestä`;
    return `${parts[3] === 'scale' ? music.SCALES[parts[5]]?.name : 'CAGED '+parts[5]} · ${note(Number(parts[4]))} · kieli ${Number(parts[6])+1}, nauha ${parts[7]}`;
  }
  return <>
    <div className="intro"><p className="eyebrow">KUUNTELE · LÖYDÄ · SOITA</p><h1>Harjoittele kitaralla</h1><p>Yhdistä oppaan teoria siihen, mitä kuulet ja soitat. Lyhyt kierros kerrallaan.</p></div>
    <Controls s={s} change={change} locked={locked} devices={devices} />
    <p className="tools-note">{currentMode[2]} {s.check === 'class' ? 'Sävelluokka: sama sävelnimi hyväksytään kaikissa oktaaveissa.' : 'Sävelkorkeus: myös oktaavin on vastattava tehtävää. Oktaaviylä-ääni voi aiheuttaa eriävän havainnon.'} Mikrofoni kuulee sävelkorkeuden, mutta ei tunnista kieltä tai nauhaa.</p>
    <section className="session-panel" aria-labelledby="session-title">
      <div className="session-top"><h2 id="session-title">{currentMode[1]}</h2><span>{e && e.phase !== 'idle' ? `${e.phase === 'done' ? 'Valmis' : 'Kysymys '+e.index}${s.rounds ? ' / '+s.rounds : ' · vapaa'}` : 'Valmis aloittamaan'}</span></div>
      <p className="question" id="question" aria-live="polite">{q && e?.phase !== 'done' ? q.prompt : 'Muutama minuutti keskittynyttä harjoittelua.'}</p>
      <div className="action-row">
        {!e || e.phase === 'done' ? <button className="primary" disabled={busy || calibrating} onClick={() => void start()}>Aloita harjoitus</button> : <>
          {e.phase === 'feedback' ? <button className="primary" onClick={() => void next()}>{s.rounds && e.index >= s.rounds ? 'Näytä kierroksen tulokset' : 'Seuraava kysymys'}</button> : e.phase === 'paused' && !playing ? <button className="primary" disabled={busy} onClick={() => void resume()}>Jatka harjoitusta</button> : <button onClick={pause}>Keskeytä hetkeksi</button>}
          <button onClick={() => finish()}>Päätä harjoitus</button>
        </>}
        {q?.sound.length && e?.phase !== 'done' ? <button disabled={!canAnswer} onClick={() => void playQuestion(e!)}>Kuuntele uudelleen</button> : null}
        {q && e?.phase !== 'done' && <button disabled={!canAnswer} aria-pressed={hint} onClick={() => hint ? setHint(false) : reveal()}>{hint ? 'Piilota vihje' : 'Näytä otelautavihje'}</button>}
      </div>
      <p className="feedback" role="status" aria-live="polite">{message}</p>
      {error && <p className="error" role="alert">{error}</p>}
      <p className="mic-status"><span className={micOn ? 'mic-dot on' : 'mic-dot'} />{busy ? 'Avataan mikrofonia… Voit perua päättämällä harjoituksen.' : micOn ? 'Mikrofoni käytössä · ääni käsitellään vain tässä selaimessa' : 'Mikrofoni suljettu'}{frame && ` · havainto ${note(frame.midi,s.flats,true)}, ${Math.round(frame.cents)} senttiä, varmuus ${Math.round(frame.clarity*100)} %`}</p>
      {candidate !== null && active && <div className="candidate"><p>Vakaa havainto: {note(candidate,s.flats,true)}. Se eroaa tehtävästä. Vaimenna kieli ja yritä uudelleen. Ylä-ääni tai resonanssi voi selittää eron.</p><button onClick={() => { e!.confirmWrong(); setCandidate(null); setMessage('Merkitsit oman soiton virheeksi. Etsi sama tehtäväsävel uudelleen.'); draw(); }}>Soitin väärän sävelen · kirjaa virhe</button><button onClick={() => setCandidate(null)}>Ohita havainto</button></div>}
      {q?.choices === 'note' && e?.phase !== 'done' && <div className="answer-choices" aria-label="Sävelnimet">{Array.from({length:12},(_,i) => <button key={i} disabled={!canAnswer} onClick={() => respond(i,'note')}>{note(i,s.flats)}</button>)}</div>}
      {q?.choices === 'degree' && e?.phase !== 'done' && <div className="answer-choices" aria-label="Asteet">{(s.mode === 'scale' ? music.scaleNotes(music.SCALES[s.scale]) : CHORDS[s.chord].tones).map(([iv,deg]) => <button key={iv} disabled={!canAnswer} onClick={() => respond(iv,'degree')}>{deg}</button>)}</div>}
      {q && e?.phase !== 'done' && (q.choices === 'position' || hint) && <><p className="tools-note">{s.mode === 'caged' && hint ? `${note(s.root)}-duuri · ${s.shape}-muoto: kaikki otteen sävelet näkyvät, tehtävän aste on vihreä.` : 'Otelaudalla voit liikkua nuolinäppäimillä ja vastata Enterillä.'} Vieritä otelautaa sivusuunnassa tarvittaessa.</p><Board min={s.min} max={s.max} strings={s.strings} targets={targets} contextTargets={s.mode === 'caged' && hint ? pool(s) : []} labels={hint && !(s.hints === 'fade' && e!.index > 3 && e!.index <= 6)} disabled={!canAnswer || q.choices !== 'position' || s.input === 'mic'} answer={p => respond(p.midi,'board',p)} /></>}
      {hint && q?.interval && s.mode === 'interval' ? <p>Intervalli: {INTERVALS[q.interval]}. Jälkimmäinen sävel: {note(q.midi,s.flats,true)}.</p> : null}
      <p className="tools-note">{e ? resultSummary(e.results) : 'Tulokset tallentuvat tähän selaimeen.'}{e?.results.some(r => r.hint) ? ' Vihjeellä ja ilman vihjettä annetut vastaukset tilastoidaan erikseen.' : ''}</p>
    </section>
    <div className="action-row"><button disabled={locked} onClick={() => void calibrate()}>Kalibroi hiljaisuuden äänikynnys</button>{calibrating && <button onClick={() => { closeAudio(); setMessage('Kalibrointi peruttu.'); }}>Peru kalibrointi</button>}<a href={settingsURL(s)}>Linkki tähän harjoitukseen</a><a href={`otelautaharjoittelija.html?toonikka=${encodeURIComponent(music.CHROM[s.root])}&asteikko=${s.scale}`}>Tutki asteikkoa otelaudalla</a></div>
    <section className="progress-panel" aria-labelledby="progress-title"><h2 id="progress-title">Näe oppimisesi</h2>
      <p>{total} vastattua kysymystä · {store.data.sessions.length} tallennettua harjoituskertaa. Osaamisarvio yhdistää ensimmäisen yrityksen tarkkuuden ja vastausnopeuden. Alle kolme vastausta on vasta alkuhavainto.</p>
      <p><strong>Seuraavaksi:</strong> {weakest.length ? 'Kertaa alla olevia kohteita. Heikkojen kohtien painotus käyttää vastaustavan ja tarkistustavan mukaisia tuloksia.' : 'Tee ensin lyhyt kierros ilman vihjeitä. Aloita nauhoista 0–5 ja laajenna aluetta, kun sävelet löytyvät varmasti.'}</p>
      {weakest.length > 0 && <ul>{weakest.map(([key,st]) => <li key={key}>{describeItem(key)} · {st.correct}/{st.attempts} heti oikein · {(st.totalMs/st.attempts/1000).toFixed(1)} s</li>)}</ul>}
      <details><summary>Otelaudan sävelharjoituksen osaamiskartta</summary><p>Kartta näyttää <strong>harjoiteltuja kohteita</strong> valitulla vastaustavalla ({s.input === 'mic' ? 'mikrofoni' : 'otelauta'}) ja tarkistuksella ({s.check === 'class' ? 'sävelluokka' : 'sävelkorkeus'}), ilman vihjeitä. Mikrofonivastaus ei todista, miltä kieleltä tai nauhalta sävel soitettiin.</p><p>· ei havaintoja · ? alle 3 vastausta · prosenttiluku = osaamisarvio. Vihreä ≥ 80 %, violetti ≥ 50 %, lämmin väri &lt; 50 %. Myös luvut kertovat tason.</p><Board min={s.min} max={s.max} strings={s.strings} stats={store.data.stats} currentInput={s.input} currentCheck={s.check} /></details>
      <details><summary>Viimeisimmät harjoituskerrat</summary>{store.data.sessions.length ? <ul>{store.data.sessions.slice(-10).reverse().map(session => <li key={session.id}>{new Date(session.at).toLocaleString('fi-FI')} · {MODES.find(([id]) => id === session.mode)?.[1]} · {session.first}/{session.count} heti oikein · keskimäärin {(session.ms/session.count/1000).toFixed(1)} s{session.complete ? ' · valmis kierros' : ' · osittainen kierros'}</li>)}</ul> : <p>Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä.</p>}</details>
      <button onClick={() => { const blob = new Blob([JSON.stringify(store.data,null,2)],{type:'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='musiikin-kartta-harjoittelu.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url),1000); }}>Lataa tulosten varmuuskopio</button>
      {store.warning && <p role="status" className="error">{store.warning}</p>}
    </section>
    <details className="privacy"><summary>Miten tunnistus ja tallennus toimivat?</summary><p>Mikrofoni käynnistyy vain aloittamalla mikrofoniharjoituksen tai kalibroinnin. Ääntä ei tallenneta eikä lähetetä palvelimelle. Kuuntelu suljetaan tauolla, vastauksen jälkeen, kierroksen lopussa ja sivulta poistuttaessa. Välilehden piilottaminen keskeyttää harjoituksen.</p><p>Sävel hyväksytään vain asetetun äänenvoimakkuuden, varmuuden, vireen ja vakausajan ylittyessä. Mikrofonin eriäviä havaintoja ei tilastoida ilman omaa vahvistustasi. Soita yksi sävel kerrallaan ja vaimenna se vastausten välillä. Kokonaisen sointuotteen oikeellisuutta ei arvioida.</p><p>Tulokset ja asetukset ovat vain tämän selaimen localStorage-tallennuksessa. Selaintietojen tyhjentäminen poistaa ne. Oppaan lukumerkinnät säilyvät erillisinä. Varmuuskopio sisältää harjoitustiedot, ei ääntä. Mikrofonikäyttö tarvitsee HTTPS:n tai paikallisen localhost-palvelimen.</p><p>Tunnistus on sovitettu <a href="https://github.com/dmb1107/fretecho">FretEchosta</a> (MIT) ja käyttää Pitchyä. <a href="harjoittelija/vendor/FretEcho-LICENSE.txt">FretEchon lisenssi</a> · <a href="assets/harjoittelija/THIRD-PARTY-NOTICES.txt">Riippuvuuksien lisenssit</a>.</p></details>
  </>;
}
createRoot(document.getElementById('guitar-practice')!).render(<App />);
