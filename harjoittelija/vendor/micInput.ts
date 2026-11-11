// Handles getUserMedia + AudioContext setup.
// Adapted from FretEcho (MIT, see FretEcho-LICENSE.txt). Musiikin kartan muutokset:
// kaksikanavainen äänikortti avataan molemmilla kanavilla, laitteen nimi ja kanavamäärä
// palautetaan käyttöliittymälle, äänikontekstin käynnistymiselle on aikaraja ja kutsuja
// voi antaa sivun yhteisen äänikontekstin, jota ei suljeta mikrofonin mukana.

export interface MicStream {
  context: AudioContext;
  source: MediaStreamAudioSourceNode;
  stream: MediaStream;
  /** Selaimen ilmoittama laitteen nimi; tyhjä, jos selain ei kerro sitä. */
  label: string;
  deviceId: string;
  channelCount: number;
  stop: () => void;
}

const RESUME_TIMEOUT_MS = 4000;

/** Virhe, jonka viesti on jo käyttäjälle kirjoitettu suomenkielinen ohje. */
export class MicSetupError extends Error {
  override name = 'MicSetupError';
}

/**
 * provide: sivun yhteinen äänikonteksti. Se haetaan vasta luvan saamisen jälkeen eikä sitä
 * suljeta pysäytettäessä. Ilman sitä mikrofonille luodaan oma konteksti, joka suljetaan.
 */
export async function openMic(deviceId?: string, provide?: () => AudioContext): Promise<MicStream> {
  if (!navigator.mediaDevices?.getUserMedia) throw new MicSetupError('Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.');
  const constraints: MediaStreamConstraints = {
    audio: {
      deviceId: deviceId ? { exact: deviceId } : undefined,
      // Selaimen puheenkäsittely vääristäisi kitaran sävelkorkeuden ja vaimentaisi soivan sävelen.
      echoCancellation: false,
      noiseSuppression: false,
      autoGainControl: false,
      // Äänikortin soitintulo voi olla toinen kanava; mono-pyyntö summaisi kanavat puoleen tasoon.
      channelCount: { ideal: 2 },
    },
    video: false,
  };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  let context: AudioContext | undefined;
  try {
    context = provide ? provide() : new AudioContext();
    if (context.state !== 'running') {
      let timer: ReturnType<typeof setTimeout> | undefined;
      await Promise.race([
        context.resume(),
        new Promise((_, reject) => { timer = setTimeout(() => reject(new MicSetupError('Äänen käsittely ei käynnistynyt. Napauta painiketta uudelleen tai lataa sivu.')), RESUME_TIMEOUT_MS); }),
      ]).finally(() => clearTimeout(timer));
    }
    const source = context.createMediaStreamSource(stream);
    const activeContext = context;
    const track = stream.getAudioTracks?.()[0] ?? stream.getTracks()[0];
    const settings = track?.getSettings?.() ?? {};
    return {
      context,
      source,
      stream,
      label: track?.label ?? '',
      deviceId: settings.deviceId ?? '',
      channelCount: settings.channelCount ?? 1,
      stop: () => {
        stream.getTracks().forEach((t) => t.stop());
        source.disconnect();
        if (!provide) activeContext.close().catch(() => {});
      },
    };
  } catch (error) {
    stream.getTracks().forEach(t => t.stop());
    if (!provide) await context?.close().catch(() => {});
    throw error;
  }
}

/** Äänitulot, joilla on tunniste. Ennen mikrofonilupaa selain ei paljasta laitteita. */
export async function listInputDevices(): Promise<MediaDeviceInfo[]> {
  if (!navigator.mediaDevices?.enumerateDevices) return [];
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((d) => d.kind === 'audioinput' && d.deviceId);
}
