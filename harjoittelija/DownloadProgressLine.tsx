/**
 * KOKEILU (issue #9, D2): latauksen etenemisrivi omana komponenttinaan. Tarkistaa tilan kerran sekunnissa ja
 * renderöityy vain, kun näytettävä teksti muuttuu. memo: kappalesoittimen renderöinnit (sointunäytön iskunvaihdot)
 * eivät renderöi tätä uudelleen, joten sointunäytön päivitykseen ei tule lisätyötä.
 */
import { memo, useEffect, useRef, useState } from 'react';
import type { BufferPlayerState } from './bufferPlayer';
import { DownloadProgressTracker, type DownloadDisplay, type DownloadStatus } from './downloadProgress';

const HIDDEN: DownloadDisplay = { visible: false, text: '', percent: null, announce: '' };
/** Tarkistusväli: riittää prosentin seuraamiseen, eikä kuormita pääsäiettä soiton aikana. */
export const DOWNLOAD_POLL_MS = 1000;

function DownloadProgressLineView({ read, state }: {
  /** Soittimen nykyinen lataustila ja soittimen tila (null, jos soitinta ei ole). */
  read: () => { status: DownloadStatus | null; state: BufferPlayerState } | null;
  /** Soittimen tila (näytetään "Ladataan kappaleen raitoja…", kunnes prosentti on tiedossa). */
  state: BufferPlayerState;
}) {
  const tracker = useRef(new DownloadProgressTracker());
  const [display, setDisplay] = useState<DownloadDisplay>(HIDDEN);
  const readRef = useRef(read);
  readRef.current = read;
  useEffect(() => {
    const id = setInterval(() => {
      const current = readRef.current();
      const next = tracker.current.update(current?.status ?? null, current?.state ?? 'tyhja', performance.now());
      setDisplay(previous => (previous.visible === next.visible && previous.text === next.text && previous.percent === next.percent
        && (next.announce === '' || previous.announce === next.announce) && (next.visible || previous.announce === '')
        ? previous : { ...next, announce: next.visible ? next.announce || previous.announce : '' }));
    }, DOWNLOAD_POLL_MS);
    return () => clearInterval(id);
  }, []);
  const loading = state === 'ladataan' || state === 'puretaan';
  return <>
    {loading && !(display.visible && display.percent !== null) && <p className="tools-note" role="status">
      {state === 'ladataan' ? 'Ladataan kappaleen raitoja…' : 'Valmistellaan raitoja soittoa varten…'}</p>}
    {display.visible && <div className="song-load">
      <span id="song-load-label">{display.text}</span>
      {display.percent !== null && <progress max={100} value={display.percent} aria-labelledby="song-load-label" />}
    </div>}
    <span className="sr-only" role="status">{display.announce}</span>
  </>;
}

/** Uudelleenrenderöinti vain soittimen tilan muuttuessa; read luetaan aina viimeisimmästä viittauksesta. */
export const DownloadProgressLine = memo(DownloadProgressLineView, (previous, next) => previous.state === next.state);
