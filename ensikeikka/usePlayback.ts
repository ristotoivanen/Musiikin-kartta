import { useEffect, useRef, useState } from 'react';
import { TakePlayer } from './audio';

export function usePlayback() {
  const player = useRef<TakePlayer | null>(null);
  const request = useRef(0);
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState('Valmiina kuunteluun.');

  function stop() {
    request.current++;
    player.current?.stop();
    setActive(false);
    setStatus('Valmiina kuunteluun.');
  }

  useEffect(() => {
    const onVisibility = () => { if (document.hidden) stop(); };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', stop);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', stop);
      request.current++;
      player.current?.dispose();
      player.current = null;
    };
  }, []);

  function play(label: string, render: (rate: number) => Float32Array, offset: number, onComplete?: () => void) {
    if (document.hidden) return;
    const id = ++request.current;
    setActive(true);
    setStatus(`Käynnistyy… ${label}`);
    player.current ??= new TakePlayer();
    player.current.playSamples(render, offset, completed => {
      if (id !== request.current) return;
      stop();
      if (completed) onComplete?.();
      else setStatus('Toisto keskeytyi. Voit yrittää uudelleen.');
    }).then(() => {
      if (id === request.current) setStatus(`Soitetaan · ${label}`);
    }).catch(() => {
      if (id !== request.current) return;
      setActive(false);
      setStatus('Ääni ei käynnistynyt. Yritä uudelleen.');
    });
  }

  return { active, status, stop, play };
}
