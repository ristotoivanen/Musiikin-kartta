import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { releaseAudio } from '../harjoittelija/audio';
import { BrowserAudio } from './audioAdapter';
import { RiffGame } from './game';
import { Riffikaiku } from './Riffikaiku';
import { RiffStore } from './store';
import '../harjoittelija/style.css';
import './style.css';

function storage(): Storage | undefined { try { return localStorage; } catch { return undefined; } }

function App() {
  const [game] = useState(() => new RiffGame(new BrowserAudio(), new RiffStore(storage())));
  useEffect(() => () => { game.stop(); }, [game]);
  return <Riffikaiku game={game} />;
}

window.addEventListener('pagehide', () => releaseAudio());
const root = document.getElementById('riffikaiku');
if (root) createRoot(root).render(<StrictMode><App /></StrictMode>);
