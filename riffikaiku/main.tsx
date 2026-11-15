import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { releaseAudio } from '../harjoittelija/audio';
import { BrowserAudio } from './audioAdapter';
import { RiffGame } from './game';
import { GameView } from './GameView';
import { MicController } from './mic';
import { modeFrom, pageTitle, type Mode } from './modes';
import { RiffPractice } from './practice';
import { PracticeView } from './PracticeView';
import { StartPage } from './StartPage';
import { RiffStore } from './store';
import '../harjoittelija/style.css';
import './style.css';

function storage(): Storage | undefined { try { return localStorage; } catch { return undefined; } }

function Game({ store }: { store: RiffStore }) {
  const [game] = useState(() => new RiffGame(new BrowserAudio(), store));
  useEffect(() => () => { game.dispose(); }, [game]);
  return <GameView game={game} />;
}
function Practice({ store }: { store: RiffStore }) {
  const [practice] = useState(() => { const audio = new BrowserAudio(); return new RiffPractice(audio, new MicController(audio, store), store); });
  useEffect(() => () => { practice.dispose(); }, [practice]);
  return <PracticeView practice={practice} />;
}

/** Käyttötapa valitaan osoitteesta (?tila=harjoitus | peli); ilman sitä aloitussivu. */
function App({ mode }: { mode: Mode | null }) {
  const [store] = useState(() => new RiffStore(storage()));
  useEffect(() => { document.title = pageTitle(mode); }, [mode]);
  if (mode === 'harjoitus') return <Practice store={store} />;
  if (mode === 'peli') return <Game store={store} />;
  return <StartPage store={store} />;
}

window.addEventListener('pagehide', () => releaseAudio());
const root = document.getElementById('riffikaiku');
if (root) createRoot(root).render(<StrictMode><App mode={modeFrom(location.search)} /></StrictMode>);
