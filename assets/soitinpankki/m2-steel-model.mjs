/**
 * #158: PR #130:n M2:n tapahtumasopimus Meta Steel -mallikitaralle.
 *
 * Tämä EI ota käyttöön omaa audiokelloa, ei käsittele M3 B -säestystä
 * eikä muuta PR #130:n sivua. Kutsuva harjoitus omistaa AudioContextin,
 * sisäänlaskun, backing-bufferin, toiston pysäytyksen ja käyttöliittymän.
 */
import { scheduleSteelNotes } from './steel-sampler.mjs';

export const M2_BEAT_SECONDS = 60 / 72;
export const M2_COUNT_IN_BEATS = 4;
export const M2_MUSIC_BEATS = 32;
export const M2_BACKING_GAIN = 0.62;
export const M2_FADE_SECONDS = 0.150;
export const M2_BACKING_SHA256 = 'd93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897';

export function createM2SteelEvents() {
  return Array.from({ length: 4 }, (_, round) =>
    Array.from({ length: 4 }, (_, beat) => {
      const at = (M2_COUNT_IN_BEATS + round * 8 + beat) * M2_BEAT_SECONDS;
      return Object.freeze({
        string: 6, midi: 40, layer: 'Vel02', at,
        releaseAt: at + M2_BEAT_SECONDS, fade: M2_FADE_SECONDS,
      });
    })).flat();
}

/**
 * Kutsuja käyttää SteelSampleBank.prepare(createM2SteelEvents()) ennen soittoa.
 * startAt on sama yhteinen AudioContext-aikaleima, jolla säestys käynnistyy.
 * Säestys soitetaan siihen samaan aikaan ja gain=0.62; M2 mallikitara on
 * erikseen säädettävä, eikä lopullista miksaustasoa ole vielä hyväksytty.
 */
export function scheduleM2SteelModel(context, prepared, {
  startAt,
  gainMultiplier = 1,
  output = context.destination,
  onEnd,
} = {}) {
  if (!prepared || !prepared.samples || !prepared.manifest) {
    throw new TypeError('Valmisteltu Meta Steel -äänipankki puuttuu.');
  }
  if (!Number.isFinite(gainMultiplier) || gainMultiplier <= 0 || gainMultiplier > 3) {
    throw new RangeError('Mallikitaran voimakkuuskertoimen on oltava 0–3.');
  }
  if (!Number.isFinite(prepared.manifest.referenceGain) ||
      prepared.manifest.referenceGain <= 0) {
    throw new Error('Äänipankin vertailutaso puuttuu.');
  }
  return scheduleSteelNotes(context, createM2SteelEvents(), prepared.samples, {
    startAt, output, gain: prepared.manifest.referenceGain * gainMultiplier, onEnd,
  });
}
