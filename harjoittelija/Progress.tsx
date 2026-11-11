import { useRef, useState } from 'react';
import { MasteryMap } from './Board';
import { modeTitle } from './Controls';
import { summarize } from './engine';
import { describeItem, statRows } from './feedback';
import { PRACTICE, answerCheck, answerInput, type Settings } from './settings';
import { accuracy, averageMs, proficiency, type ProgressStore, type Session } from './storage';

const seconds = (ms: number) => (ms / 1000).toFixed(1).replace('.', ',') + ' s';
const INPUT_NAME: Record<string, string> = { mic: 'mikrofoni', board: 'otelauta', note: 'sävelnimet', degree: 'asteet' };

function sessionLine(session: Session): string {
  const solo = session.solo === undefined ? `${session.first}/${session.count} heti oikein`
    : session.solo ? `itsenäisesti ${session.soloFirst ?? 0}/${session.solo} heti oikein${session.count > session.solo ? ` · ${session.count - session.solo} vihjeen kanssa` : ''}`
      : `${session.count} vastausta vihjeen kanssa`;
  return `${new Date(session.at).toLocaleString('fi-FI', { dateStyle: 'short', timeStyle: 'short' })} · ${modeTitle(session.mode)}${session.hints ? ` · ${PRACTICE[session.hints].title}` : ''} · ${solo} · keskimäärin ${seconds(session.ms / Math.max(1, session.count))}${session.complete ? '' : ' · keskeytetty'}`;
}

export function Progress({ store, s, locked, changed }: { store: ProgressStore; s: Settings; locked: boolean; changed: () => void }) {
  const [note, setNote] = useState('');
  const file = useRef<HTMLInputElement>(null);
  const { recent, sessions, stats } = store.data;
  const input = answerInput(s), check = answerCheck(s);
  // Yhteenveto harjoituksittain viimeisimmistä tallennetuista vastauksista.
  const byMode = [...new Set(recent.map(r => r.mode))].map(mode => {
    const rows = recent.filter(r => r.mode === mode);
    return { mode, ...summarize(rows), last: Math.max(...rows.map(r => r.at)) };
  }).sort((a, b) => b.last - a.last);
  const weakest = statRows(stats)
    .filter(row => !row.guided && row.mode === s.mode && row.input === input && row.check === check && row.stat.attempts >= 3)
    .map(row => ({ ...row, score: proficiency(row.stat)!, text: describeItem(row.item, s.flats) }))
    .filter(row => row.text && row.score < .8)
    .sort((a, b) => a.score - b.score).slice(0, 5);
  const total = statRows(stats).reduce((n, row) => n + row.stat.attempts, 0);

  function download() {
    const blob = new Blob([JSON.stringify(store.data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'musiikin-kartta-harjoittelu.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function restore(chosen: File | undefined) {
    if (!chosen) return;
    try {
      const text = await chosen.text();
      if (total && !window.confirm('Varmuuskopio korvaa tämän selaimen nykyiset harjoitustulokset ja asetukset. Jatketaanko?')) return;
      store.restore(text);
      setNote('Varmuuskopio palautettu.'); changed();
    } catch { setNote('Tiedostoa ei voitu lukea. Valitse tästä harjoittelijasta ladattu varmuuskopio.'); }
    finally { if (file.current) file.current.value = ''; }
  }
  function clear() {
    if (!window.confirm('Poistetaanko kaikki harjoitustulokset ja tilastot tästä selaimesta? Asetukset säilyvät. Tätä ei voi perua.')) return;
    store.clearProgress(); setNote('Harjoitustulokset poistettu.'); changed();
  }

  return <section className="progress-panel" aria-labelledby="progress-title"><h2 id="progress-title">Edistymisesi</h2>
    {total === 0 ? <p>Kun vastaat ensimmäiseen kysymykseen, näet tässä, mitä osaat jo ja mitä kannattaa kerrata. Tulokset tallentuvat vain tähän selaimeen.</p> : <>
      <p>{total} vastattua kysymystä · {sessions.length} harjoituskertaa. <strong>Itsenäisesti</strong> tarkoittaa vastausta ilman vihjettä, <strong>heti oikein</strong> oikeaa vastausta ensimmäisellä yrityksellä.</p>
      <div className="fret-scroll"><table className="summary-table"><caption>Viimeisimmät vastaukset harjoituksittain</caption>
        <thead><tr><th scope="col">Harjoitus</th><th scope="col">Vastauksia</th><th scope="col">Itsenäisesti heti oikein</th><th scope="col">Vihjeen kanssa</th><th scope="col">Keskiaika</th></tr></thead>
        <tbody>{byMode.map(row => <tr key={row.mode}><th scope="row">{modeTitle(row.mode)}</th><td>{row.count}</td>
          <td>{row.solo ? `${row.soloFirst}/${row.solo} · ${Math.round(row.soloFirst / row.solo * 100)} %` : '–'}</td><td>{row.guided}</td><td>{seconds(row.ms / row.count)}</td></tr>)}</tbody>
      </table></div>
    </>}
    <h3>Seuraavaksi</h3>
    {weakest.length ? <>
      <p>Nämä kohteet ovat harjoituksessa {modeTitle(s.mode)} vielä epävarmoja. Kun asetus ”Kysy useammin heikkoja kohteita” on päällä, ne tulevat vastaan muita useammin.</p>
      <ul>{weakest.map(row => <li key={row.key}>{row.text} · viime aikoina {Math.round(accuracy(row.stat) * 100)} % heti oikein · {seconds(averageMs(row.stat))}</li>)}</ul>
    </> : <p>{total ? `Harjoituksessa ${modeTitle(s.mode)} ei ole vielä kohteita, joista olisi vähintään kolme itsenäistä vastausta ja jotka olisivat epävarmoja. Jatka samalla alueella tai laajenna sitä.` : 'Aloita otelaudan sävelistä nauhoilla 0–5. Laajenna aluetta, kun sävelet löytyvät varmasti.'}</p>}
    <details><summary>Otelaudan sävelten osaamiskartta</summary>
      <p>Kartta näyttää harjoituksen Otelaudan sävelet itsenäiset vastaukset nykyisellä vastaustavalla ({INPUT_NAME[s.input]}) ja tarkistuksella ({s.check === 'class' ? 'sävelnimi' : 'tarkka sävelkorkeus'}). Mikrofonivastaus kertoo, että soitit oikean sävelen, ei sitä, miltä kieleltä.</p>
      <p>Luku on osaamisarvio 0–100: heti oikein -osuus (65 %) ja nopeus (35 %), viimeisimmät vastaukset painottuvat. · = ei vastauksia, ? = alle kolme vastausta. Vihreä vähintään 80, violetti vähintään 50, ruskea alle 50.</p>
      <MasteryMap area={{ strings: s.strings, min: s.min, max: s.max, fixed: '' }} stats={stats} input={s.input} check={s.check} flats={s.flats} />
    </details>
    <details><summary>Viimeisimmät harjoituskerrat</summary>{sessions.length ? <ul>{sessions.slice(-10).reverse().map(session => <li key={session.id}>{sessionLine(session)}</li>)}</ul> : <p>Ensimmäisen vastauksen jälkeen harjoituskerta näkyy tässä.</p>}</details>
    <details><summary>Varmuuskopio ja tietojen poisto</summary>
      <p>Tulokset ovat vain tämän selaimen muistissa. Lataa varmuuskopio, jos haluat siirtää ne toiseen selaimeen tai säilyttää ne selaintietojen tyhjennyksen yli.</p>
      <div className="action-row">
        <button type="button" onClick={download}>Lataa varmuuskopio</button>
        <button type="button" disabled={locked} onClick={() => file.current?.click()}>Palauta varmuuskopio</button>
        <input ref={file} type="file" accept="application/json,.json" hidden aria-label="Varmuuskopiotiedosto" onChange={e => void restore(e.target.files?.[0])} />
        <button type="button" disabled={locked || !total} onClick={clear}>Poista harjoitustulokset</button>
      </div>
      {note && <p role="status">{note}</p>}
    </details>
    {store.warning && <p role="status" className="error">{store.warning}</p>}
  </section>;
}
