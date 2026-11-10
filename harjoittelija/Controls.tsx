import { cloneElement, useId, type ReactElement } from 'react';
import { CHORDS, INTERVALS, music, stringName } from './music';
import { sanitize, type Mode, type Settings } from './settings';
export const MODES: [Mode,string,string][] = [
  ['notes','Otelaudan sävelet','Löydä sävel valitulta kieleltä ja opi kaulan rakenne.'],
  ['ear-note','Tunnista kuultu sävel','Kuuntele yksi sävel ja valitse sen nimi. Tämä harjoittaa sävelmuistia ilman sävellajiviitettä.'],
  ['repeat','Kuule ja toista','Kuuntele sävel ja etsi se kitaralla.'],
  ['scale','Pentatoniikka ja asteikot','Yhdistä asteet, sävelnimet ja sormitusboksit.'],
  ['chord','Sointusävelet','Rakenna sointu yksi sävel kerrallaan tai etsi yksittäisiä asteita.'],
  ['caged','CAGED','Etsi saman duurisoinnun säveliä viidestä siirrettävästä muodosta.'],
  ['interval','Kuule ja toista intervalli','Kuuntele kaksi säveltä ja toista niistä jälkimmäinen.'],
];
function Field({ label, children }: { label: string; children: ReactElement<{ id?: string }> }) {
  const id = useId();
  return <div className="field"><label htmlFor={id}>{label}</label>{cloneElement(children,{id})}</div>;
}
export function Controls({ s, change, locked, devices }: { s: Settings; change: (s: Settings) => void; locked: boolean; devices: MediaDeviceInfo[] }) {
  const set = <K extends keyof Settings>(key: K, value: Settings[K]) => change(sanitize({ ...s, [key]: value }));
  return <fieldset className="settings" disabled={locked}>
    <legend>Harjoituksen asetukset</legend>
    <div className="settings-grid">
      <Field label="Harjoitus"><select value={s.mode} onChange={e => set('mode',e.target.value as Mode)}>{MODES.map(([id,title]) => <option key={id} value={id}>{title}</option>)}</select></Field>
      <Field label="Vastaustapa"><select value={s.input} onChange={e => set('input',e.target.value as Settings['input'])}><option value="board">Valitse otelaudalta</option><option value="mic">Soita mikrofoniin / äänikorttiin</option></select></Field>
      <Field label="Kierroksen pituus"><select value={s.rounds} onChange={e => set('rounds',Number(e.target.value))}><option value="10">10 kysymystä</option><option value="20">20 kysymystä</option><option value="0">Vapaa harjoittelu</option></select></Field>
      <Field label="Vastausten tarkistus"><select value={s.check} onChange={e => set('check',e.target.value as Settings['check'])}><option value="class">Sävelluokka · mikä tahansa oktaavi</option><option value="pitch">Sävelkorkeus · tarkka oktaavi</option></select></Field>
    </div>
    {s.mode === 'ear-note' && <p className="tools-note">Tässä tehtävässä vastaat aina sävelnimipainikkeilla. Mikrofoni ei käynnisty.</p>}
    {['scale','chord','caged'].includes(s.mode) && <div className="settings-grid">
      <Field label="Toonika / soinnun perussävel"><select value={s.root} onChange={e => set('root',Number(e.target.value))}>{music.CHROM.map((n,i) => <option key={n} value={i}>{n}</option>)}</select></Field>
      {s.mode === 'scale' && <>
        <Field label="Asteikko"><select value={s.scale} onChange={e => set('scale',e.target.value)}>{Object.entries(music.SCALES).map(([id,sc]) => <option key={id} value={id}>{sc.name}</option>)}</select></Field>
        <Field label="Pentatoninen sormitusboksi"><select value={s.box} onChange={e => set('box',Number(e.target.value))}><option value="0">Koko valittu alue</option>{[1,2,3,4,5].map(n => <option key={n} value={n}>Boksi {n}</option>)}</select></Field>
        <Field label="Sävelten järjestys"><select value={s.order} onChange={e => set('order',e.target.value as Settings['order'])}><option value="random">Satunnainen</option><option value="up">Matalasta korkeaan</option><option value="down">Korkeasta matalaan</option></select></Field>
      </>}
      {s.mode === 'chord' && <>
        <Field label="Sointutyyppi"><select value={s.chord} onChange={e => set('chord',e.target.value as Settings['chord'])}>{Object.entries(CHORDS).map(([id,c]) => <option key={id} value={id}>{c.name}</option>)}</select></Field>
        <Field label="Harjoiteltava sointusävel"><select value={s.chordTone} onChange={e => set('chordTone',e.target.value)}><option value="build">Rakenna: 1 → 3 → 5 → (♭7)</option><option value="random">Satunnainen sointusävel</option><option value="1">Perussävel · 1</option><option value="3">Terssi · 3 / ♭3</option><option value="5">Kvintti · 5</option>{s.chord === 'dom7' && <option value="7">Septimi · ♭7</option>}</select></Field>
      </>}
      {s.mode === 'caged' ? <Field label="CAGED-duurimuoto"><select value={s.shape} onChange={e => set('shape',e.target.value)}>{['C','A','G','E','D'].map(shape => <option key={shape}>{shape}</option>)}</select></Field> :
        <Field label="Tehtävä"><select value={s.activity} onChange={e => set('activity',e.target.value as Settings['activity'])}><option value="play">Etsi ja soita aste</option><option value="degree">Tunnista sävelen aste</option></select></Field>}
    </div>}
    <details><summary>Alue, vihjeet ja kertaus</summary>
      <fieldset><legend>Harjoiteltavat kielet · 1 = ohut E</legend><div className="check-row">{stringName.map((name,i) => <label key={name}><input type="checkbox" checked={s.strings.includes(i)} onChange={e => set('strings',e.target.checked ? [...s.strings,i] : s.strings.filter(n => n !== i))} />{i+1} · {name}</label>)}</div></fieldset>
      <div className="check-row">{[5,12,24].map(max => <button type="button" key={max} aria-pressed={s.min === 0 && s.max === max} onClick={() => change({ ...s,min:0,max })}>0–{max}{max === 24 ? ' · koko otelauta' : ''}</button>)}</div>
      <div className="settings-grid">
        <Field label="Ensimmäinen nauha"><input type="number" min="0" max="24" value={s.min} onChange={e => set('min',Number(e.target.value))} /></Field>
        <Field label="Viimeinen nauha"><input type="number" min={s.min} max="24" value={s.max} onChange={e => set('max',Number(e.target.value))} /></Field>
        <Field label="Otelaudan vihjeet"><select value={s.hints} onChange={e => set('hints',e.target.value as Settings['hints'])}><option value="always">Näytä aina</option><option value="fade">Vähennä: 3 avustettua, 3 ilman nimiä, sitten piiloon</option><option value="off">Piilota · avaa tarvittaessa</option></select></Field>
        <Field label="Sävelnimien kirjoitusasu"><select value={String(s.flats)} onChange={e => set('flats',e.target.value === 'true')}><option value="false">Ylennykset · C♯, D♯…</option><option value="true">Alennukset · D♭, E♭…</option></select></Field>
      </div>
      <div className="check-row"><label><input type="checkbox" checked={s.accidentals} onChange={e => set('accidentals',e.target.checked)} /> Myös ylennetyt ja alennetut sävelet sävelharjoituksissa</label><label><input type="checkbox" checked={s.weak} onChange={e => set('weak',e.target.checked)} /> Painota vähän harjoiteltuja ja heikkoja kohteita</label></div>
    </details>
    {s.mode === 'interval' && <details open><summary>Intervallien vaikeustaso</summary><div className="check-row">{[1,2,3,4,5,6,7,8,9,10,11,12].map(iv => <label key={iv}><input type="checkbox" checked={s.intervals.includes(iv)} onChange={e => set('intervals',e.target.checked ? [...s.intervals,iv] : s.intervals.filter(v => v !== iv))} />{INTERVALS[iv]}</label>)}</div><Field label="Intervallin suunta"><select value={s.direction} onChange={e => set('direction',e.target.value as Settings['direction'])}><option value="both">Molemmat</option><option value="up">Nouseva</option><option value="down">Laskeva</option></select></Field></details>}
    <details><summary>Mikrofonin asetukset</summary>
      <p>Valitse mikrofoni tai äänikortin soitintulo. Sammuta taustamusiikki ja vaimenna muut kielet. Soita yksi puhdas sävel, anna sen vakaantua ja vaimenna kieli ennen seuraavaa vastausta. Kalibroi hiljaisessa huoneessa.</p>
      <div className="settings-grid">
        <Field label="Äänitulo"><select value={s.device} onChange={e => set('device',e.target.value)}><option value="">Järjestelmän oletustulo</option>{devices.map((d,i) => <option key={d.deviceId} value={d.deviceId}>{d.label || `Äänitulo ${i+1}`}</option>)}</select></Field>
        <Field label={`Äänikynnys (RMS) · ${s.minRms.toFixed(3)}`}><input type="range" min="0.001" max="0.15" step="0.001" value={s.minRms} onChange={e => set('minRms',Number(e.target.value))} /></Field>
        <Field label={`Varmuuskynnys · ${Math.round(s.clarity*100)} %`}><input type="range" min="0.85" max="0.99" step="0.01" value={s.clarity} onChange={e => set('clarity',Number(e.target.value))} /></Field>
        <Field label={`Vakaa sävel vähintään · ${s.stability} ms`}><input type="range" min="120" max="800" step="20" value={s.stability} onChange={e => set('stability',Number(e.target.value))} /></Field>
        <Field label={`Vireen toleranssi · ±${s.cents} senttiä`}><input type="range" min="10" max="45" step="1" value={s.cents} onChange={e => set('cents',Number(e.target.value))} /></Field>
      </div>
    </details>
  </fieldset>;
}
