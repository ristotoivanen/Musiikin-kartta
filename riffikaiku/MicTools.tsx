/** Mikrofonin aputyökalut: äänitulon valinta, diagnostiikka ja viritin. Vain näyttävät tilaa; eivät vastaa peliin. */
import type { ReactNode } from 'react';
import { toDb } from '../harjoittelija/vendor/pitchDetector';
import { noteName, type Diagnostics, type GameState, type RiffGame } from './game';
import type { HoldReason } from './pluck';
import { IN_TUNE_CENTS, OPEN_TUNING, type TunerReading } from './tuner';

const fi = (value: number, digits = 1) => value.toFixed(digits).replace('.', ',');
const db = (rms: number) => { const v = Math.round(toDb(rms)); return `${v < 0 ? '−' : ''}${Math.abs(v)} dB`; };
const signed = (cents: number) => (cents > 0 ? '+' : cents < 0 ? '−' : '±') + fi(Math.abs(cents), 0);

export function DeviceSelect({ s, game }: { s: GameState; game: RiffGame }) {
  const known = s.devices.some(d => d.id === s.device);
  return <div className="riff-device">
    <label htmlFor="riff-device">Äänitulo</label>
    <select id="riff-device" value={known || !s.device ? s.device : ''} onChange={e => game.setDevice(e.target.value)}>
      <option value="">Järjestelmän oletus</option>
      {s.devices.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
    </select>
    <p className="riff-help" data-testid="mic-device">
      {s.micInfo ? <>Käytössä: <strong>{s.micInfo.label || 'nimetön äänitulo'}</strong> · {s.micInfo.channels} {s.micInfo.channels === 1 ? 'kanava' : 'kanavaa'} · {fi(s.micInfo.sampleRate / 1000, 1)} kHz</> : 'Mikrofoni ei ole auki.'}
      {s.micInfo?.fallback && <> · Valittua laitetta ei löytynyt, joten käytössä on järjestelmän oletus.</>}
    </p>
    {!s.devices.length && s.micInfo && <p className="riff-help">Selain ei ilmoittanut laitteita. Valitse laite tarvittaessa järjestelmän ääniasetuksista ja valitse sitten ”Järjestelmän oletus” uudelleen.</p>}
  </div>;
}

const STATUS_TEXT = {
  silent: 'Taso on äänikynnyksen alapuolella.',
  unclear: 'Ääntä tulee, mutta selkeää sävelkorkeutta ei löydy (selkeys alle 94 %).',
  'out-of-range': 'Taajuus on kitaran alueen ulkopuolella.',
  'off-pitch': 'Sävel tunnistettiin, mutta se on yli ±35 senttiä vireestä.',
  pitch: 'Sävelkorkeus tunnistettu.',
} as const;
const REASON_TEXT: Record<HoldReason, string> = {
  silent: 'Ei ääntä kynnyksen yläpuolella.', unclear: 'Ei selkeää säveltä.', 'out-of-range': 'Taajuus alueen ulkopuolella.',
  'off-pitch': 'Liian epävireinen.',
  'waiting-new-pluck': 'Sama sävel soi yhä: odotetaan uutta näppäystä tai lyhyttä vaimennusta.',
  harmonic: 'Edellisen sävelen ylä-ääni tai oktaavi: ei uusi näppäily ilman uutta aluketta.',
  'too-quiet-for-change': 'Eri sävel, mutta liian hiljainen (myötäresonanssi?): ei uusi näppäily ilman aluketta.',
  stabilizing: 'Sävel vakautuu.',
};
const ARMED_TEXT = { quiet: 'hiljaisuuden jälkeen', onset: 'uusi aluke', 'pitch-change': 'sävelen vaihto' } as const;
const ROUTE_TEXT = { game: 'riffiyritykseen', 'mic-check': 'mikrofonitestiin', 'not-routed': 'ei välitetty (ei vastausvuoroa)' } as const;

/** Viisi erillistä vaihetta: ääni → sävelkorkeus → vakaus → uusi näppäily → välitys pelille. */
export function DiagnosticsView({ s }: { s: GameState }) {
  const d: Diagnostics | null = s.diag;
  if (!d) return <p className="riff-help" data-testid="diag">Odotetaan mikrofonin ensimmäisiä analyysitietoja…</p>;
  const f = d.frame, p = d.pluck, sound = f.rms >= d.minRms;
  const level = Math.max(0, Math.min(100, (toDb(f.rms) + 60) / 60 * 100));
  const threshold = Math.max(0, Math.min(100, (toDb(d.minRms) + 60) / 60 * 100));
  const stage = (ok: boolean, title: string, body: ReactNode, id: string) =>
    <li className={ok ? 'ok' : 'no'} data-testid={`diag-${id}`}><strong><span aria-hidden="true">{ok ? '●' : '○'}</span> {title}</strong><span>{body}</span></li>;
  return <div className="riff-diag" data-testid="diag">
    <div className="riff-meter" role="meter" aria-label="Äänitaso" aria-valuemin={-60} aria-valuemax={0} aria-valuenow={Math.round(toDb(f.rms))}>
      <span className="fill" style={{ width: level + '%' }} /><span className="threshold" style={{ left: threshold + '%' }} title="Äänikynnys" />
    </div>
    <ol className="riff-stages">
      {stage(sound, '1. Ääntä mikrofonista', <>{db(f.rms)} (kynnys {db(d.minRms)}){f.levels.length > 1 ? ` · kanavat ${f.levels.map(db).join(' / ')}, analysoidaan kanavaa ${f.channel + 1}` : ''}{f.peak > .98 ? ' · leikkautuu: pienennä gainia' : ''}</>, 'level')}
      {stage(f.status === 'pitch' || f.status === 'off-pitch', '2. Sävelkorkeus', f.frequency
        ? <>{fi(f.frequency)} Hz · {f.midi !== undefined ? `${noteName(f.midi)} (MIDI ${f.midi})` : '–'} · {f.cents !== undefined ? `${signed(f.cents)} snt` : ''} · selkeys {Math.round((f.clarity ?? 0) * 100)} %</>
        : <>{STATUS_TEXT[f.status]}{f.clarity ? ` Selkeys ${Math.round(f.clarity * 100)} %.` : ''}</>, 'pitch')}
      {stage(!!p.candidate && p.reason === 'stabilizing' || !!p.last && p.reason === null, '3. Vakaa sävel',
        p.candidate ? <>{noteName(p.candidate.midi)}: {Math.round(p.candidate.heldMs)} / 240 ms</> : p.reason ? REASON_TEXT[p.reason] : '–', 'stable')}
      {stage(p.armed, '4. Uusi näppäily', <>{p.armed ? `Valmis hyväksymään (${ARMED_TEXT[p.armedBy!]}).` : p.reason ? REASON_TEXT[p.reason] : 'Odotetaan uutta näppäystä.'}
        {p.last && <> Viimeisin: <strong>{noteName(p.last.midi)}</strong> ({ARMED_TEXT[p.last.armedBy]}), näppäilyjä {p.count}.</>}</>, 'pluck')}
      {stage(d.routed.last?.route === 'game', '5. Välitetty pelille', d.routed.last
        ? <>{noteName(d.routed.last.midi)} → {ROUTE_TEXT[d.routed.last.route]} · yhteensä {d.routed.count}</> : 'Ei vielä näppäilyjä.', 'routed')}
    </ol>
    <p className="riff-help">Taustakohina {s.noise ? `${db(s.noise.noise)} → äänikynnys ${db(s.minRms)}` : `ei mitattu, oletuskynnys ${db(s.minRms)}`}. Diagnostiikka ei lähetä mitään peliin.</p>
  </div>;
}

const TUNER_TEXT = {
  'no-signal': 'Näppää kieli ja anna sen soida.',
  unreliable: 'Epävarma havainto – näppää kieli uudelleen ja anna soida. Viritysohjetta ei anneta.',
  far: '', flat: 'Liian matala – kiristä kieltä hieman.', 'in-tune': 'Vireessä!', sharp: 'Liian korkea – löysää kieltä hieman.',
} as const;

export function TunerView({ s, game }: { s: GameState; game: RiffGame }) {
  const r: TunerReading | null = s.tuner;
  const cents = r?.cents ?? 0, show = r && ['flat', 'in-tune', 'sharp'].includes(r.status);
  const needle = 50 + Math.max(-50, Math.min(50, cents));
  return <div className="riff-tuner" data-testid="tuner">
    <fieldset className="riff-strings"><legend>Kieli</legend>
      <button type="button" aria-pressed={s.tunerTarget === null} onClick={() => game.setTunerTarget(null)}>Auto</button>
      {OPEN_TUNING.map(string => <button key={string.midi} type="button" aria-pressed={s.tunerTarget === string.midi} onClick={() => game.setTunerTarget(string.midi)}>
        <strong>{string.name}</strong><small>{string.number}. kieli</small></button>)}
    </fieldset>
    <div className={`riff-tuner-readout ${r?.status ?? 'no-signal'}`} role="status" data-testid="tuner-status" data-status={r?.status ?? 'no-signal'}>
      <p className="target">{r ? <>Tavoite <strong>{r.target.name}</strong> ({fi(440 * 2 ** ((r.target.midi - 69) / 12), 2)} Hz){r.auto ? ', valittu automaattisesti' : ''}</> : 'Näppää kieli.'}</p>
      <p className="value" data-testid="tuner-cents">{show ? `${signed(cents)} senttiä` : '–'}</p>
      <div className="riff-tuner-scale" aria-hidden="true">
        <span className="zone" style={{ left: `${50 - IN_TUNE_CENTS}%`, width: `${IN_TUNE_CENTS * 2}%` }} />
        {show && <span className="needle" style={{ left: needle + '%' }} />}
        <span className="label left">−50</span><span className="label mid">0</span><span className="label right">+50</span>
      </div>
      <p className="advice" data-testid="tuner-advice">{r?.status === 'far' && r.heardMidi !== undefined
        ? `Kuulen ${noteName(r.heardMidi)} (${fi(r.frequency!)} Hz), mikä on yli puolisävelaskeleen päässä kielestä ${r.target.name}. Tarkista, että soitat oikeaa kieltä.`
        : TUNER_TEXT[r?.status ?? 'no-signal']}</p>
      {r?.frequency && r.status !== 'far' && <p className="riff-help" data-testid="tuner-frequency">Mitattu {fi(r.frequency, 2)} Hz{r.heardMidi !== undefined ? ` · lähin sävel ${noteName(r.heardMidi)}` : ''}</p>}
    </div>
    <p className="riff-help">A4 = 440 Hz. Vihreä alue on ±{IN_TUNE_CENTS} senttiä. Viritin käyttää samaa sävelentunnistusta kuin peli, mutta sen lukemat eivät koskaan mene peliin.</p>
  </div>;
}
