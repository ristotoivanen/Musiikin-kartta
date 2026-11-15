/** Riffiharjoituksen mikrofoniosat: tilarivi (MicBar) ja valmistelu-, viritin- ja diagnostiikkapaneeli (MicPanel). */
import type { RefObject } from 'react';
import type { Heard, MicController, MicState } from './mic';
import { DeviceSelect, DiagnosticsView, TunerView } from './MicTools';
import type { PracticePanel, RiffPractice } from './practice';
import { CHECK_MIDI, noteName } from './riffs';

const CLOSED_TEXT = {
  user: '',
  background: 'Mikrofoni suljettiin, koska välilehti siirtyi taustalle.',
  'mic-lost': 'Yhteys mikrofoniin katkesi (laite irrotettiin tai selain pysäytti äänen). Tarkista laite.',
} as const;

/** Mikrofonin kuulema tila lyhyesti. ”Alle kynnyksen” ei tarkoita, ettei kieli soisi: taso on vain liian matala. */
export function heardText(m: MicState): string {
  if (m.calibrating) return 'mittaa taustakohinaa';
  if (m.muted === 'model') return 'tauolla mallin ajan';
  if (m.muted === 'settling') return 'odottaa, että malli hiljenee';
  const h: Heard | null = m.heard;
  if (!h) return 'ei vielä analyysia';
  if (h.status === 'silent') return 'alle äänikynnyksen';
  if (h.status === 'pitch' && h.midi !== undefined) return noteName(h.midi);
  if (h.status === 'off-pitch' && h.midi !== undefined) return `${noteName(h.midi)}, epävireinen`;
  return 'ääntä, ei selvää säveltä';
}

/** Mikrofonin tilarivi: aina näkyvissä harjoituksessa. Harjoittelu toimii myös ilman mikrofonia. */
export function MicBar({ m, practice }: { m: MicState; practice: RiffPractice }) {
  const closed = m.closed ? CLOSED_TEXT[m.closed] : '';
  return <div className={`riff-micbar ${m.status}`} data-testid="mic-bar">
    {m.status === 'on' && <>
      <p className="riff-mic-line"><strong>Mikrofoni käytössä</strong> · {m.micInfo?.label || 'äänitulo'}</p>
      <p className="riff-heard">Mikrofoni kuulee: <strong data-testid="heard">{heardText(m)}</strong></p>
      <div className="riff-actions compact">
        <button type="button" onClick={() => practice.openPanel('mic')}>Mikrofoni ja viritys</button>
        <button type="button" onClick={() => practice.closeMic()}>Sulje mikrofoni</button>
      </div>
    </>}
    {m.status === 'permission' && <>
      <p className="riff-status" role="status">Pyydetään mikrofonilupaa…</p>
      <p className="riff-help">Salli mikrofoni selaimen kysymyksestä. Voit myös harjoitella ilman mikrofonia.</p>
      <div className="riff-actions compact"><button type="button" onClick={() => practice.closeMic()}>Jatka ilman mikrofonia</button></div>
    </>}
    {m.status === 'error' && <>
      <p className="riff-status bad" role="alert" data-testid="riff-error">{m.error}</p>
      <div className="riff-actions compact">
        <button type="button" onClick={() => practice.openPanel('mic')}>Yritä mikrofonia uudelleen</button>
        <button type="button" onClick={() => practice.closeMic()}>Jatka ilman mikrofonia</button>
      </div>
    </>}
    {m.status === 'off' && <>
      {closed && <p className="riff-status bad" role="status" data-testid="mic-closed">{closed}</p>}
      <p className="riff-mic-line"><strong>Mikrofoni ei ole käytössä.</strong> Voit harjoitella ilman sitä: kuuntele, opettele ja tarkista soittosi korvalla.</p>
      <div className="riff-actions compact">
        <button type="button" onClick={() => practice.openPanel('mic')}>{m.closed ? 'Ota mikrofoni uudelleen käyttöön' : 'Ota mikrofoni käyttöön'}</button>
        <button type="button" onClick={() => practice.openPanel('tuner')}>Viritin</button>
      </div>
    </>}
  </div>;
}

const PANEL_TITLE: Record<PracticePanel, string> = { mic: 'Mikrofonin valmistelu', tuner: 'Viritin', diagnostics: 'Mikrofonin diagnostiikka' };

/** Valmistelu, viritin ja diagnostiikka. Mikään näistä ei anna vastauksia harjoitukseen. */
export function MicPanel({ m, mic, practice, panel, headingRef }: { m: MicState; mic: MicController; practice: RiffPractice; panel: PracticePanel; headingRef: RefObject<HTMLHeadingElement> }) {
  return <div className="riff-panel" data-testid={panel === 'mic' ? 'mic-setup' : 'tools'}>
    <h2 tabIndex={-1} ref={headingRef}>{PANEL_TITLE[panel]}</h2>
    <div className="riff-tools-switch" role="group" aria-label="Mikrofonin työkalut">
      {(['mic', 'tuner', 'diagnostics'] as const).map(p => <button key={p} type="button" aria-pressed={panel === p} onClick={() => practice.openPanel(p)}>
        {p === 'mic' ? 'Valmistelu' : p === 'tuner' ? 'Viritin' : 'Diagnostiikka'}</button>)}
    </div>
    {m.status === 'permission' && <p className="riff-status" role="status">Pyydetään mikrofonilupaa… Salli mikrofoni selaimen kysymyksestä.</p>}
    {m.status === 'error' && <p className="riff-status bad" role="alert" data-testid="riff-error">{m.error}</p>}
    {m.status === 'off' && <p className="riff-status" role="status">{m.closed && m.closed !== 'user' ? CLOSED_TEXT[m.closed] + ' ' : ''}Mikrofoni ei ole auki.</p>}
    {(m.status === 'error' || m.status === 'off') && <div className="riff-actions"><button type="button" className="primary" onClick={() => void mic.start()}>Avaa mikrofoni</button></div>}
    <DeviceSelect s={m} mic={mic} />
    {m.calibrating && <p className="riff-status" role="status" data-testid="calibrating">Pidä kielet hiljaa hetki: mitataan taustakohinaa…</p>}
    {panel === 'mic' && <>
      <h3>Mikrofonin testi</h3>
      {!m.calibrating && <p>Soita <strong>vapaa B-kieli ({noteName(CHECK_MIDI)})</strong>, toiseksi ohuin kieli, ja anna sen soida hetki. Testi on vapaaehtoinen.</p>}
      <p className="riff-heard">Mikrofoni kuulee: <strong data-testid="heard">{m.status === 'on' ? heardText(m) : 'mikrofoni ei ole auki'}</strong></p>
      {m.notice && !m.calibrating && <p className={`riff-feedback ${m.notice.tone}`} role="status" data-testid="feedback">{m.notice.text}</p>}
    </>}
    {panel !== 'mic' && m.notice && !m.calibrating && m.notice.tone === 'bad' && <p className="riff-feedback bad" role="status">{m.notice.text}</p>}
    {panel === 'tuner' && <TunerView s={m} mic={mic} />}
    {panel === 'diagnostics' && <DiagnosticsView s={m} />}
    <div className="riff-actions">
      <button type="button" className="primary" onClick={() => practice.closePanel()}>{m.status === 'on' ? 'Valmis – takaisin harjoitukseen' : 'Takaisin harjoitukseen'}</button>
      {m.status === 'on' && <button type="button" onClick={() => mic.calibrate()} disabled={m.calibrating}>Mittaa taustakohina uudelleen</button>}
      {m.status === 'on' && <button type="button" onClick={() => practice.closeMic()}>Sulje mikrofoni</button>}
    </div>
    <details className="riff-limits">
      <summary>Mitä mikrofoni tunnistaa – ja mitä ei</summary>
      <ul>
        <li>Mikrofoni kuulee vain <strong>sävelkorkeuden</strong>. Se ei tunnista, miltä kieleltä tai millä sormella soitat.</li>
        <li>Soita yksi kieli kerrallaan. Yhtä aikaa soivat kielet ja pitkään soimaan jäävät kielet sotkevat tunnistusta – vaimenna tarvittaessa.</li>
        <li>Sama sävel kahdesti: vaimenna kieli hetkeksi välissä, jotta toinen näppäys erottuu.</li>
        <li>Matalat kielet ja ylä-äänet voivat näkyä oktaavin eri sävelenä. Siitä kerrotaan erikseen, eikä sitä lasketa virheeksi.</li>
        <li>Hiljainen soitto, taustamelu, kannettavan sisäinen mikrofoni ja vahvistamaton sähkökitara heikentävät tunnistusta. Äänikortin soitintulo tai lähellä oleva mikrofoni toimii parhaiten.</li>
        <li>Mallin ääni kaiuttimesta ei vastaa puolestasi: kuuntelu on tauolla mallin ajan. Kuulokkeet auttavat silti.</li>
        <li>Ääntä ei tallenneta eikä lähetetä mihinkään. Analyysi tehdään vain tässä selaimessa.</li>
      </ul>
    </details>
  </div>;
}
