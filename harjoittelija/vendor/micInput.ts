// Handles getUserMedia + AudioContext setup. One shared context per session.

export interface MicStream {
  context: AudioContext;
  source: MediaStreamAudioSourceNode;
  stream: MediaStream;
  stop: () => void;
}

export async function openMic(deviceId?: string): Promise<MicStream> {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('Mikrofoni tarvitsee HTTPS-yhteyden tai localhost-osoitteen ja sitä tukevan selaimen.');
  const constraints: MediaStreamConstraints = {
    audio: {
      deviceId: deviceId ? { exact: deviceId } : undefined,
      echoCancellation: false,
      noiseSuppression: false,
      autoGainControl: false,
      channelCount: 1,
    },
    video: false,
  };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  // Safari prefixes removed years ago; Chrome works with the standard ctor.
  let context: AudioContext | undefined;
  try {
    context = new AudioContext();
    await context.resume();
    const source = context.createMediaStreamSource(stream);
    const activeContext = context;
  return {
    context,
    source,
    stream,
    stop: () => {
      stream.getTracks().forEach((t) => t.stop());
      source.disconnect();
      activeContext.close().catch(() => {});
    },
  };
  } catch (error) {
    stream.getTracks().forEach(t => t.stop());
    await context?.close().catch(() => {});
    throw error;
  }
}

export async function listInputDevices(): Promise<MediaDeviceInfo[]> {
  const devices = await navigator.mediaDevices.enumerateDevices();
  return devices.filter((d) => d.kind === 'audioinput');
}
