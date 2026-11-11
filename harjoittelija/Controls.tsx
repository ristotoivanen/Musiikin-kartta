import { cloneElement, useId, type ReactElement } from 'react';
import { practiceArea, roundLength } from './engine';
import { CHORDS, INTERVALS, music, stringName } from './music';
import { PRACTICE, answerInput, ordered, type Hints, type Mode, type Settings } from './settings';

export const MODES: [Mode, string, string][] = [
  ['notes', 'Otelaudan sävelet', 'Etsi sävel annetulta kieleltä ja opi kaulan rakenne.'],
  ['ear-note', 'Tunnista kuultu sävel', 'Kuuntele sävel ja valitse sen nimi. Vertailusävel A auttaa kuulemaan välin.'],
  ['repeat', 'Kuule ja toista', 'Kuuntele sävel ja etsi se kitarasta.'],
  ['scale', 'Pentatoniikka ja asteikot', 'Yhdistä asteet, sävelnimet ja sormitusboksit.'],
  ['chord', 'Sointusävelet', 'Rakenna sointu sävel kerrallaan tai etsi yksittäisiä asteita.'],
  ['caged', 'CAGED', 'Etsi duurisoinnun sävelet viidestä siirrettävästä muodosta.'],
  ['interval', 'Kuule ja toista intervalli', 'Kuuntele kaksi säveltä ja etsi niistä jälkimmäinen.'],
];
export const modeTitle = (mode: string) => MODES.find(([id]) => id === mode)?.[1] ?? mode;

function Field({ label, children }: { label: string; children: ReactElement<{ id?: string }> }) {
  const id = useId();
  return <div className="field"><label htmlFor={id}>{label}</label>{cloneElement(children, { id })}</div>;
}
/** Valintaryhmä, jossa jokaisella vaihtoehdolla on lyhyt selitys. */
function Choice<T extends string>({ legend, name, value, options, onChange, disabled }: {
  legend: string; name: string; value: T; options: { value: T; title: string; summary: string }[]; onChange: (value: T) => void; disabled?: boolean;
}) {
  return <fieldset className="choice" disabled={disabled}><legend>{legend}</legend>
    <div className="choice-row">{options.map(option => <label key={option.value} className={option.value === value ? 'selected' : ''}>
      <input type="radio" name={name} value={option.value} checked={option.value === value} onChange={() => onChange(option.value)} />
      <span><strong>{option.title}</strong><small>{option.summary}</small></span>
    </label>)}</div>
  </fieldset>;
}

/** Lyhyt kuvaus valinnoista: näkyy asetusten yläpuolella ja kierroksen aikana. */
export function settingsSummary(s: Settings): string {
  const area = practiceArea(s), total = roundLength(s), input = answerInput(s);
  const how = input === 'mic' ? 'soita kitaralla' : input === 'board' ? 'vastaa otelaudalta' : input === 'note' ? 'vastaa sävelnimellä' : 'vastaa asteella';
  const where = area.fixed === 'shape' ? `${s.shape}-muoto, nauhat ${area.min}–${area.max}` : area.fixed === 'box' ? `boksi ${s.box}, nauhat ${area.min}–${area.max}` : `nauhat ${area.min}–${area.max}`;
  const strings = area.strings.length === 6 ? '' : ` · kielet ${area.strings.map(i => i + 1).join(', ')}`;
  return `${PRACTICE[s.hints].title} · ${how} · ${ordered(s) ? `yksi läpisoitto, ${total} säveltä` : total ? `${total} kysymystä` : 'vapaa harjoittelu'} · ${where}${strings}`;
}

export function Controls({ s, change, locked, problem }: { s: Settings; change: (s: Settings) => void; locked: boolean; problem: string | null }) {
  const group = useId();
  const set = <K extends keyof Settings>(key: K, value: Settings[K]) => change({ ...s, [key]: value });
  const area = practiceArea(s);
  const buttons = answerInput(s) === 'note' || answerInput(s) === 'degree';
  const usesRoot = ['scale','chord','caged'].includes(s.mode);
  const noteModes = ['notes','ear-note','repeat'].includes(s.mode);
  return <fieldset className="settings" disabled={locked}>
    <legend>Valitse harjoitus</legend>
    <div className="settings-grid">
      <Field label="Harjoitus"><select value={s.mode} onChange={e => set('mode', e.target.value as Mode)}>{MODES.map(([id, title]) => <option key={id} value={id}>{title}</option>)}</select></Field>
      <p className="mode-note">{MODES.find(([id]) => id === s.mode)![2]}</p>
    </div>
    {usesRoot && <div className="settings-grid">
      <Field label={s.mode === 'scale' ? 'Toonika' : 'Soinnun perussävel'}><select value={s.root} onChange={e => set('root', Number(e.target.value))}>{music.CHROM.map((n, i) => <option key={n} value={i}>{n}</option>)}</select></Field>
      {s.mode === 'scale' && <>
        <Field label="Asteikko"><select value={s.scale} onChange={e => set('scale', e.target.value)}>{Object.entries(music.SCALES).map(([id, sc]) => <option key={id} value={id}>{sc.name}</option>)}</select></Field>
        <Field label="Pentatoninen sormitusboksi"><select value={s.box} onChange={e => set('box', Number(e.target.value))}><option value="0">Ei boksia · koko valittu alue</option>{[1,2,3,4,5].map(n => <option key={n} value={n}>Boksi {n}</option>)}</select></Field>
        <Field label="Sävelten järjestys"><select value={s.order} onChange={e => set('order', e.target.value as Settings['order'])}><option value="random">Satunnainen</option><option value="up">Matalasta korkeaan</option><option value="down">Korkeasta matalaan</option></select></Field>
      </>}
      {s.mode === 'chord' && <>
        <Field label="Sointutyyppi"><select value={s.chord} onChange={e => set('chord', e.target.value as Settings['chord'])}>{Object.entries(CHORDS).map(([id, c]) => <option key={id} value={id}>{c.name}</option>)}</select></Field>
        <Field label="Harjoiteltava sointusävel"><select value={s.chordTone} onChange={e => set('chordTone', e.target.value)}><option value="build">Rakenna: 1 → 3 → 5{s.chord === 'dom7' ? ' → ♭7' : ''}</option><option value="random">Satunnainen sointusävel</option><option value="1">Perussävel · 1</option><option value="3">Terssi · {s.chord === 'min' ? '♭3' : '3'}</option><option value="5">Kvintti · 5</option>{s.chord === 'dom7' && <option value="7">Septimi · ♭7</option>}</select></Field>
      </>}
      {s.mode === 'caged' ? <Field label="CAGED-duurimuoto"><select value={s.shape} onChange={e => set('shape', e.target.value)}>{['C','A','G','E','D'].map(shape => <option key={shape} value={shape}>{shape}-muoto</option>)}</select></Field>
        : <Field label="Tehtävä"><select value={s.activity} onChange={e => set('activity', e.target.value as Settings['activity'])}><option value="play">Etsi aste otelaudalta</option><option value="degree">Tunnista sävelen aste</option></select></Field>}
    </div>}
    {s.mode === 'interval' && <fieldset className="plain"><legend>Harjoiteltavat intervallit</legend>
      <div className="check-row">{[1,2,3,4,5,6,7,8,9,10,11,12].map(iv => <label key={iv}><input type="checkbox" checked={s.intervals.includes(iv)} onChange={e => set('intervals', e.target.checked ? [...s.intervals, iv] : s.intervals.filter(v => v !== iv))} />{INTERVALS[iv]}</label>)}</div>
      <div className="settings-grid"><Field label="Intervallin suunta"><select value={s.direction} onChange={e => set('direction', e.target.value as Settings['direction'])}><option value="both">Nouseva ja laskeva</option><option value="up">Nouseva</option><option value="down">Laskeva</option></select></Field></div>
    </fieldset>}
    <Choice legend="Harjoittelutapa" name={`${group}-way`} value={s.hints} onChange={value => set('hints', value)}
      options={(['off','always','fade'] as Hints[]).map(value => ({ value, ...PRACTICE[value] }))} />
    {buttons ? <p className="tools-note" data-testid="input-note">Tässä tehtävässä vastataan painikkeilla. Mikrofonia ei tarvita.</p>
      : <Choice legend="Vastaustapa" name={`${group}-input`} value={s.input} onChange={value => set('input', value)} options={[
        { value: 'board', title: 'Napauta otelaudalta', summary: 'Vastaa ruudun otelaudalla. Toimii ilman kitaraa ja mikrofonia.' },
        { value: 'mic', title: 'Soita kitaralla', summary: 'Mikrofoni tai äänikortti kuuntelee sävelen. Testaa mikrofoni ensin.' },
      ]} />}
    <details><summary>Lisäasetukset: alue, kierroksen pituus ja tarkistus</summary>
      <div className="settings-grid">
        <Field label="Kierroksen pituus"><select value={s.rounds} disabled={ordered(s)} onChange={e => set('rounds', Number(e.target.value))}><option value="10">10 kysymystä</option><option value="20">20 kysymystä</option><option value="0">Vapaa harjoittelu</option></select></Field>
        {!buttons && <Field label="Vastausten tarkistus"><select value={ordered(s) ? 'pitch' : s.check} disabled={ordered(s)} onChange={e => set('check', e.target.value as Settings['check'])}><option value="class">Sävelnimi · mikä tahansa oktaavi kelpaa</option><option value="pitch">Tarkka sävelkorkeus · myös oktaavin on täsmättävä</option></select></Field>}
        <Field label="Sävelnimien kirjoitusasu"><select value={String(s.flats)} onChange={e => set('flats', e.target.value === 'true')}><option value="false">Ylennykset · C♯, D♯…</option><option value="true">Alennukset · D♭, E♭…</option></select></Field>
      </div>
      {ordered(s) && <p className="tools-note">Järjestyksessä soitettava asteikko käydään kerran läpi, ja jokaisen sävelen oktaavi tarkistetaan.</p>}
      {area.fixed ? <p className="tools-note" data-testid="area-note">{area.fixed === 'shape' ? `${s.shape}-muoto` : `Boksi ${s.box}`} määrää harjoitusalueen: nauhat {area.min}–{area.max}.</p> : <>
        <div className="check-row" role="group" aria-label="Nauha-alueen pikavalinnat">{[5,12,24].map(max => <button type="button" key={max} aria-pressed={s.min === 0 && s.max === max} onClick={() => change({ ...s, min: 0, max })}>Nauhat 0–{max}{max === 24 ? ' · koko otelauta' : ''}</button>)}</div>
        <div className="settings-grid">
          <Field label="Ensimmäinen nauha"><input type="number" min="0" max="24" value={s.min} onChange={e => set('min', Number(e.target.value))} /></Field>
          <Field label="Viimeinen nauha"><input type="number" min={s.min} max="24" value={s.max} onChange={e => set('max', Number(e.target.value))} /></Field>
        </div>
      </>}
      {area.fixed !== 'shape' && <fieldset className="plain"><legend>Harjoiteltavat kielet · 1 = ohut E</legend><div className="check-row">{stringName.map((name, i) => <label key={name}><input type="checkbox" checked={s.strings.includes(i)} onChange={e => set('strings', e.target.checked ? [...s.strings, i] : s.strings.filter(n => n !== i))} />{i + 1} · {name}</label>)}</div></fieldset>}
      <div className="check-row">
        {noteModes && <label><input type="checkbox" checked={s.accidentals} onChange={e => set('accidentals', e.target.checked)} /> Myös ylennetyt ja alennetut sävelet</label>}
        {s.mode === 'ear-note' && <label><input type="checkbox" checked={s.reference} onChange={e => set('reference', e.target.checked)} /> Soita ensin vertailusävel A</label>}
        <label><input type="checkbox" checked={s.weak} onChange={e => set('weak', e.target.checked)} /> Kysy useammin heikkoja ja vähän harjoiteltuja kohteita</label>
        <label><input type="checkbox" checked={s.advance} onChange={e => set('advance', e.target.checked)} /> Siirry oikean vastauksen jälkeen itse seuraavaan kysymykseen</label>
      </div>
    </details>
    {problem && <p className="error" role="alert" data-testid="setup-problem">{problem}</p>}
  </fieldset>;
}
