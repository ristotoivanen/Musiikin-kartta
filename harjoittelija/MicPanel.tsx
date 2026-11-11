import { useId } from 'react';
import { meterLevel, micReading, type MicInfo, type MicPhase, type MicReading } from './audio';
import { note } from './music';
import type { Settings } from './settings';
import { toDb, type AnalysisFrame, type StableNoteEvent } from './vendor/pitchDetector';

export type MicUi = { phase: MicPhase; purpose: 'none' | 'test' | 'round'; info?: MicInfo; error?: string };
/** Viimeisin sävelhavainto. Näytetään hetken himmennettynä, ettei lukema välky. */
export type Heard = { midi: number; frequency: number; cents: number; clarity: number; tuned: boolean; at: number };

const TITLES: Record<MicReading, string> = {
  off: 'Mikrofoni ei ole käytössä.',
  requesting: 'Pyydetään mikrofonilupaa… Hyväksy selaimen kysymys.',
  silent: 'Mikrofoni kuuntelee, mutta ääntä ei kuulu.',
  noise: 'Ääntä kuuluu, mutta säveltä ei tunnisteta.',
  untuned: 'Sävel kuuluu, mutta vire on liian kaukana lähimmästä sävelestä.',
  pitch: 'Sävel tunnistettu.',
  error: 'Mikrofoni ei toimi.',
};
const fi = (value: number, digits = 1) => value.toFixed(digits).replace('.', ',').replace('-', '−');
const signed = (value: number) => { const cents = Math.round(value); return (cents > 0 ? '+' : cents < 0 ? '−' : '±') + Math.abs(cents); };
export const deviceText = (info?: MicInfo) => info ? (info.label || 'Järjestelmän oletustulo') : '';

function advice(reading: MicReading, s: Settings, info: MicInfo | undefined, clipping: boolean): string[] {
  if (clipping) return ['Signaali on liian voimakas ja leikkautuu. Laske äänikortin gain-säädintä, kunnes mittari ei käy täydessä.'];
  switch (reading) {
    case 'silent': return [
      'Soita yksi kieli selvästi ja katso, liikkuuko äänitason mittari.',
      `Tarkista äänitulo: nyt käytössä ${deviceText(info)}. Vaihda laite Mikrofonin asetuksista.`,
      'Äänikortti: kytke kitara soitintuloon (INST), käännä gain-säädintä ylemmäs ja avaa kitaran volume.',
      'Jos mittari liikkuu mutta jää kynnysviivan alle, mittaa taustakohina tai laske äänikynnystä.',
    ];
    case 'noise': return [
      'Soita vain yhtä kieltä ja vaimenna muut kädellä.',
      'Sammuta taustamusiikki ja muut äänet. Kaiuttimista kuuluva ääni sekoittaa tunnistusta.',
      'Soita hieman voimakkaammin ja anna sävelen soida hetki.',
    ];
    case 'untuned': return [`Viritä kitara. Sävel hyväksytään, kun poikkeama on enintään ±${s.cents} senttiä.`];
    case 'pitch': return [`Mikrofoni toimii. Harjoituksessa sävel hyväksytään, kun se soi vakaana ${s.stability} ms.`];
    default: return [];
  }
}

/** Äänitason mittari −60…0 dBFS. Pystyviiva on äänikynnys, jonka yli soitetun sävelen pitää nousta. */
export function LevelMeter({ frame, threshold }: { frame: AnalysisFrame | null; threshold: number }) {
  const rms = frame?.rms ?? 0, db = toDb(rms);
  const state = (frame?.peak ?? 0) >= .98 ? 'clip' : rms >= threshold ? 'over' : 'under';
  return <div className={`meter ${state}`} role="meter" aria-label="Äänitaso" aria-valuemin={-60} aria-valuemax={0}
    aria-valuenow={Math.round(Math.max(-60, db))} aria-valuetext={`${fi(Math.max(-60, db), 0)} desibeliä${rms >= threshold ? ', yli äänikynnyksen' : ', alle äänikynnyksen'}`}>
    <div className="meter-fill" style={{ width: `${meterLevel(rms) * 100}%` }} />
    <div className="meter-threshold" style={{ left: `${meterLevel(threshold) * 100}%` }} title="Äänikynnys" />
  </div>;
}

/** Tiivis mikrofonin tila harjoituksen aikana: taso ja viimeksi kuultu sävel. */
export function MicLive({ mic, frame, heard, s, now }: { mic: MicUi; frame: AnalysisFrame | null; heard: Heard | null; s: Settings; now: number }) {
  const reading = micReading(mic.phase, frame);
  const fresh = heard && now - heard.at < 1500 ? heard : null;
  const text = reading === 'pitch' || reading === 'untuned' || fresh
    ? fresh ? `Kuulen: ${note(fresh.midi, s.flats, true)} · ${signed(fresh.cents)} senttiä${fresh.tuned ? '' : ' · viritä'}` : 'Kuulen sävelen'
    : reading === 'noise' ? 'Ääntä kuuluu, sävel ei vielä selvä' : reading === 'silent' ? 'Kuuntelen… soita sävel' : TITLES[reading];
  return <div className={`mic-live ${reading}`}>
    <span className="mic-dot" aria-hidden="true" />
    <span className="mic-live-text" data-testid="mic-live">{text}</span>
    {mic.phase === 'on' && <LevelMeter frame={frame} threshold={s.minRms} />}
  </div>;
}

export function MicPanel({ mic, frame, heard, accepted, now, s, change, devices, locked, calibrating, calibration, onTest, onStop, onCalibrate }: {
  mic: MicUi; frame: AnalysisFrame | null; heard: Heard | null; accepted: StableNoteEvent | null; now: number;
  s: Settings; change: (s: Settings) => void; devices: MediaDeviceInfo[]; locked: boolean;
  calibrating: boolean; calibration: string; onTest: () => void; onStop: () => void; onCalibrate: () => void;
}) {
  const id = useId();
  const reading = micReading(mic.phase, frame);
  const testing = mic.purpose === 'test' && mic.phase !== 'off' && mic.phase !== 'error';
  const on = mic.phase === 'on';
  const fresh = heard && now - heard.at < 1500 ? heard : null;
  const live = fresh && (reading === 'pitch' || reading === 'untuned');
  const clipping = on && (frame?.peak ?? 0) >= .98;
  const tips = mic.phase === 'error' ? [] : advice(reading, s, mic.info, clipping);
  const knownDevice = !s.device || devices.some(d => d.deviceId === s.device);
  const set = <K extends keyof Settings>(key: K, value: Settings[K]) => change({ ...s, [key]: value });
  return <section className="mic-panel" aria-labelledby={`${id}-title`}>
    <div className="session-top"><h2 id={`${id}-title`}>Mikrofoni</h2>
      <span>{s.input === 'mic' ? 'Valittu vastaustavaksi' : 'Ei tarvita otelautavastauksissa'}</span></div>
    <p className={`mic-state ${reading}`} data-testid="mic-state" data-reading={reading}>
      <span className="mic-dot" aria-hidden="true" />{mic.phase === 'error' ? mic.error : TITLES[reading]}
      {reading === 'pitch' && fresh ? ` ${note(fresh.midi, s.flats, true)}.` : ''}
    </p>
    {/* Ruudunlukijalle ilmoitetaan vain tilan vaihtuminen, ei jokaista kuultua säveltä. */}
    <p className="sr-only" role="status" aria-live="polite">{mic.phase === 'on' ? `Mikrofoni kuuntelee: ${deviceText(mic.info)}.` : mic.phase === 'error' ? mic.error : TITLES[mic.phase]}</p>
    {mic.phase === 'off' && <p className="tools-note">Testi näyttää, kuuleeko selain kitarasi ja tunnistuuko sävel. Ääni käsitellään vain tässä selaimessa: sitä ei tallenneta eikä lähetetä. Testi ei vaikuta harjoitustuloksiin.</p>}
    {on && <dl className="mic-readout">
      <div><dt>Äänitulo</dt><dd data-testid="mic-device">{deviceText(mic.info)}{mic.info && mic.info.channels > 1 ? ` · kanava ${(frame?.channel ?? 0) + 1}/${mic.info.channels}` : ''}
        {mic.info?.fallback ? ' · valittua laitetta ei löytynyt, käytössä oletustulo' : ''}</dd></div>
      <div><dt>Äänitaso</dt><dd><LevelMeter frame={frame} threshold={s.minRms} /><span className="meter-value" data-testid="mic-level">{fi(Math.max(-60, toDb(frame?.rms ?? 0)), 0)} dB</span></dd></div>
      <div className={live ? '' : 'stale'}><dt>Sävel</dt><dd className="mic-note" data-testid="mic-note">{fresh ? note(fresh.midi, s.flats, true) : '–'}</dd></div>
      <div className={live ? '' : 'stale'}><dt>Taajuus</dt><dd data-testid="mic-frequency">{fresh ? `${fi(fresh.frequency)} Hz` : '–'}</dd></div>
      <div className={live ? '' : 'stale'}><dt>Vire</dt><dd data-testid="mic-cents">{fresh ? <>{signed(fresh.cents)} senttiä
        <span className={`cents ${fresh.tuned ? 'in' : 'out'}`} aria-hidden="true"><span style={{ left: `${50 + Math.max(-50, Math.min(50, fresh.cents))}%` }} /></span></> : '–'}</dd></div>
      <div className={live ? '' : 'stale'}><dt>Tunnistuksen varmuus</dt><dd data-testid="mic-clarity">{fresh ? `${Math.round(fresh.clarity * 100)} %` : frame?.clarity !== undefined && reading === 'noise' ? `${Math.round(frame.clarity * 100)} % · alle rajan ${Math.round(s.clarity * 100)} %` : '–'}</dd></div>
    </dl>}
    {on && accepted && now - accepted.timestamp < 4000 && <p className="mic-accepted" data-testid="mic-accepted">Vakaa sävel {note(accepted.midi, s.flats, true)} kelpaisi vastaukseksi.</p>}
    {tips.length > 0 && on && <ul className="mic-advice">{tips.map(tip => <li key={tip}>{tip}</li>)}</ul>}
    {mic.phase === 'error' && <p className="tools-note">Voit harjoitella ilman mikrofonia valitsemalla vastaustavaksi otelaudan.</p>}
    {calibration && <p className="tools-note" role="status">{calibration}</p>}
    <div className="action-row">
      {testing ? <button type="button" onClick={onStop}>Lopeta testi</button>
        : <button type="button" className={s.input === 'mic' && mic.phase !== 'on' ? 'primary' : ''} disabled={locked} onClick={onTest}>Testaa mikrofoni</button>}
      {testing && on && <button type="button" disabled={calibrating} onClick={onCalibrate}>{calibrating ? 'Mitataan… ole hiljaa' : 'Mittaa taustakohina'}</button>}
    </div>
    {locked && mic.purpose !== 'test' && <p className="tools-note">Mikrofonitesti on käytettävissä, kun harjoitus ei ole käynnissä.</p>}
    <details><summary>Mikrofonin asetukset</summary>
      <fieldset className="plain" disabled={locked}>
        <div className="settings-grid">
          <div className="field"><label htmlFor={`${id}-device`}>Äänitulo</label>
            <select id={`${id}-device`} value={s.device} onChange={e => set('device', e.target.value)}>
              <option value="">Järjestelmän oletustulo</option>
              {!knownDevice && <option value={s.device}>Aiemmin valittu laite</option>}
              {devices.map((d, i) => <option key={d.deviceId} value={d.deviceId}>{d.label || `Äänitulo ${i + 1}`}</option>)}
            </select></div>
          <div className="field"><label htmlFor={`${id}-rms`}>Äänikynnys · {fi(toDb(s.minRms), 0)} dB</label>
            <input id={`${id}-rms`} type="range" min="0.001" max="0.15" step="0.001" value={s.minRms} onChange={e => set('minRms', Number(e.target.value))} /></div>
          <div className="field"><label htmlFor={`${id}-clarity`}>Varmuuskynnys · {Math.round(s.clarity * 100)} %</label>
            <input id={`${id}-clarity`} type="range" min="0.85" max="0.99" step="0.01" value={s.clarity} onChange={e => set('clarity', Number(e.target.value))} /></div>
          <div className="field"><label htmlFor={`${id}-stability`}>Vakaa sävel vähintään · {s.stability} ms</label>
            <input id={`${id}-stability`} type="range" min="120" max="800" step="20" value={s.stability} onChange={e => set('stability', Number(e.target.value))} /></div>
          <div className="field"><label htmlFor={`${id}-cents`}>Vireen toleranssi · ±{s.cents} senttiä</label>
            <input id={`${id}-cents`} type="range" min="10" max="45" step="1" value={s.cents} onChange={e => set('cents', Number(e.target.value))} /></div>
        </div>
        <p className="tools-note">{devices.length ? 'Valitse äänikortin soitintulo, jos kitara on kytketty siihen.' : 'Laitteet näkyvät luettelossa, kun olet sallinut mikrofonin kerran.'} Oletusarvot sopivat useimmille. Jos hiljaiset sävelet eivät rekisteröidy, laske äänikynnystä. Jos taustamelu häiritsee, mittaa taustakohina testin aikana.</p>
      </fieldset>
    </details>
  </section>;
}
