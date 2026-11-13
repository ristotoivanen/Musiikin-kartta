import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react';

/** Kuinka kauan käyttäjän oma vieritys pitää automaattisen seurannan tauolla. */
export const MANUAL_PAUSE_MS = 4000;
/** Väli, joka jätetään aktiivisen kohdan ja näkyvän alueen reunan väliin. */
const EDGE_MARGIN = 12;
/**
 * Varajärjestely komponenteille, jotka eivät kerro toistotilaa (`playback`): tätä pidempi tauko
 * aktiivisessa kohdassa tulkitaan uudeksi toistoksi. Kaikki nykyiset mallisoitot kertovat tilan.
 */
const NEW_PLAYBACK_GAP_MS = 1500;

type View = { left: number; right: number; scrollLeft: number; maxScroll: number; stickyLeft: number };
type Span = { left: number; right: number };

/**
 * Laskee vaakavierityksen, joka tuo kohteen näkyvälle alueelle mahdollisimman pienellä siirrolla.
 * Palauttaa null, jos kohde on jo kokonaan näkyvissä. `stickyLeft` on vasemman reunan kiinnitetyn
 * sarakkeen (esimerkiksi kielten nimien) leveys: sen alle jäävä kohta ei näy käyttäjälle.
 */
export function followTarget(view: View, target: Span): number | null {
  const visibleLeft = view.left + view.stickyLeft, visibleRight = view.right;
  let delta = 0;
  if (target.left < visibleLeft) delta = target.left - visibleLeft - EDGE_MARGIN;
  else if (target.right > visibleRight) delta = target.right - visibleRight + EDGE_MARGIN;
  if (delta === 0) return null;
  const next = Math.max(0, Math.min(view.maxScroll, view.scrollLeft + delta));
  return Math.abs(next - view.scrollLeft) < 1 ? null : next;
}

/** Onko kohde kokonaan näkyvän alueen ulkopuolella? Silloin siirto tehdään heti, ei pehmeästi. */
export function fullyHidden(view: View, target: Span): boolean {
  return target.right <= view.left + view.stickyLeft || target.left >= view.right;
}

/**
 * Pitää vierityskehyksen aktiivisen kohdan (esimerkiksi mallisoiton soivan sävelen) näkyvissä.
 *
 * - Vierittää vain kehyksen vaakasuunnassa, ei koskaan sivua (ei scrollIntoView-kutsua).
 * - Liikkuu vain, kun aktiivinen kohta on menossa näkyvän alueen ulkopuolelle.
 * - Kokonaan piilossa oleva kohta tuodaan näkyviin heti. Osittain näkyvä siirretään pehmeästi,
 *   paitsi jos käyttäjä on valinnut vähennetyn liikkeen (prefers-reduced-motion), jolloin aina heti.
 * - Käyttäjän kosketus, hiiren painallus, rulla tai näppäimistö kehyksessä keskeyttää seurannan
 *   siksi ajaksi, kun sormi tai painike on alhaalla, ja MANUAL_PAUSE_MS sen jälkeen.
 * - Uusi toisto palauttaa seurannan heti. Se tunnistetaan `playback`-tilasta: tila vaihtuu
 *   tyhjästä toistoksi tai toistotyypistä toiseen (esimerkiksi pysäytys ja uusi käynnistys
 *   puolessa sekunnissa). Lyhyet välit sävelten välissä eivät kumoa käyttäjän taukoa.
 */
export function useFollowScroll(box: RefObject<HTMLElement | null>, activeSelector: string, activeKey: string,
  { stickySelector, enabled = true, playback }: { stickySelector?: string; enabled?: boolean; playback?: string | boolean | null } = {}) {
  const pausedUntil = useRef(0);
  const holding = useRef(false);
  const previousKey = useRef('');
  const endedAt = useRef(0);
  const previousPlayback = useRef<string | boolean | null | undefined>(playback);

  useEffect(() => {
    const el = box.current;
    if (!el || !enabled) return;
    const pause = () => { pausedUntil.current = Date.now() + MANUAL_PAUSE_MS; };
    const down = () => { holding.current = true; pause(); };
    const up = () => { if (holding.current) { holding.current = false; pause(); } };
    const key = (event: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) pause();
    };
    el.addEventListener('pointerdown', down, { passive: true });
    el.addEventListener('touchstart', down, { passive: true });
    el.addEventListener('wheel', pause, { passive: true });
    el.addEventListener('keydown', key);
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    window.addEventListener('touchend', up, { passive: true });
    window.addEventListener('touchcancel', up, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('touchstart', down);
      el.removeEventListener('wheel', pause);
      el.removeEventListener('keydown', key);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('touchend', up);
      window.removeEventListener('touchcancel', up);
    };
  }, [box, enabled]);

  // Uusi toisto: tila vaihtui tyhjästä toistoksi tai toistosta toiseen. Ei nollata, jos käyttäjä pitää kiinni.
  useLayoutEffect(() => {
    const started = playback !== undefined && Boolean(playback) && playback !== previousPlayback.current;
    previousPlayback.current = playback;
    if (started && !holding.current) pausedUntil.current = 0;
  }, [playback]);

  // Ennen piirtoa: uusi soiva kohta ei välähdä piilossa ennen vieritystä.
  useLayoutEffect(() => {
    if (playback === undefined) {
      const started = previousKey.current === '' && activeKey !== '' && Date.now() - endedAt.current > NEW_PLAYBACK_GAP_MS;
      if (started && !holding.current) pausedUntil.current = 0;
    }
    if (previousKey.current !== '' && activeKey === '') endedAt.current = Date.now();
    previousKey.current = activeKey;
    const el = box.current;
    if (!el || !enabled || !activeKey) return;
    if (holding.current || Date.now() < pausedUntil.current) return;
    const target = el.querySelector<HTMLElement>(activeSelector);
    if (!target) return;
    const frame = el.getBoundingClientRect(), rect = target.getBoundingClientRect();
    const sticky = stickySelector ? el.querySelector<HTMLElement>(stickySelector) : null;
    const stickyLeft = sticky && getComputedStyle(sticky).position === 'sticky' ? sticky.getBoundingClientRect().width : 0;
    const view = { left: frame.left, right: frame.left + el.clientWidth, scrollLeft: el.scrollLeft,
      maxScroll: el.scrollWidth - el.clientWidth, stickyLeft };
    const next = followTarget(view, rect);
    if (next === null) return;
    const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const instant = reduce || fullyHidden(view, rect);
    if (typeof el.scrollTo === 'function') el.scrollTo({ left: next, behavior: instant ? 'auto' : 'smooth' });
    else el.scrollLeft = next;
  }, [box, activeSelector, activeKey, stickySelector, enabled, playback]);
}
