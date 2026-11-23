import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

// #170-viimeistely: Meta Steel -pankin formaattivalinta ja välimuisti.
// iOS 27.2 Safari ilmoittaa canPlayType('audio/ogg; codecs="vorbis"') = "probably", mutta
// decodeAudioData(OGG) epäonnistuu. Purkuvirhe pitää muistaa, eikä OGG:tä saa hakea uudelleen.

const modulePath = '../assets/soitinpankki/steel-sampler.mjs';
const { SteelSampleBank } = await import(modulePath as string);
const { createM2SteelEvents } = await import('../assets/soitinpankki/m2-steel-model.mjs' as string);
const manifest = JSON.parse(readFileSync(new URL('../assets/soitinpankki/meta-steel-v1.json', import.meta.url), 'utf8'));
const MANIFEST_URL = 'https://localhost/assets/soitinpankki/meta-steel-v1.json';
const otherEvent = [{ string: 5, midi: 45, layer: 'Vel02', at: 0, releaseAt: 1, fade: 0.1 }];

type Options = { decodes?: (format: string) => boolean; httpFail?: (path: string) => boolean; delayMs?: number };

function setup({ decodes = () => true, httpFail = () => false, delayMs = 0 }: Options = {}) {
  const fetched: string[] = [];
  const decodeCalls: string[] = [];
  const fetcher = async (url: URL) => {
    const path = new URL(url).pathname;
    fetched.push(path.split('/').pop()!);
    if (delayMs) await new Promise(r => setTimeout(r, delayMs));
    if (path.endsWith('.json')) return { ok: true, status: 200, json: async () => manifest };
    if (httpFail(path)) return { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) };
    const format = path.split('.').pop()!;
    const bytes = new TextEncoder().encode(format);
    return { ok: true, status: 200, arrayBuffer: async () => bytes.buffer };
  };
  const context = {
    currentTime: 0,
    async decodeAudioData(array: ArrayBuffer) {
      const format = new TextDecoder().decode(array);
      decodeCalls.push(format);
      if (!decodes(format)) throw new DOMException('Decoding failed', 'EncodingError');
      return { duration: 5, format };
    },
  };
  const bank = new SteelSampleBank(context, MANIFEST_URL, { fetcher, formats: ['ogg', 'm4a'] });
  return { bank, fetched, decodeCalls };
}

const audioFetches = (list: string[]) => list.filter(f => !f.endsWith('.json'));

describe('Meta Steel -pankin formaatit ja välimuisti', () => {
  it('OGG toimii: käytetään OGG:tä, eikä toista käynnistystä varten ladata mitään uudelleen', async () => {
    const { bank, fetched } = setup();
    const first = await bank.prepare(createM2SteelEvents());
    expect(first.samples.get('6:40:Vel02').format).toBe('ogg');
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg']);
    const second = await bank.prepare(createM2SteelEvents());
    expect(second.samples.get('6:40:Vel02').format).toBe('ogg');
    expect(second.stats.cacheHits).toBe(1);
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg']);
    expect(fetched.filter(f => f.endsWith('.json'))).toHaveLength(1);
  });

  it('OGG-purku epäonnistuu, M4A toimii: OGG:tä ei haeta enää uudelleen saman istunnon aikana', async () => {
    const { bank, fetched, decodeCalls } = setup({ decodes: f => f !== 'ogg' });
    const first = await bank.prepare(createM2SteelEvents());
    expect(first.samples.get('6:40:Vel02').format).toBe('m4a');
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
    // Uusi M2-käynnistys: puretun M4A:n välimuisti, ei verkkoa eikä purkua.
    const second = await bank.prepare(createM2SteelEvents());
    expect(second.samples.get('6:40:Vel02').format).toBe('m4a');
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
    expect(decodeCalls).toEqual(['ogg', 'm4a']);
    // Toinenkin näyte ohittaa purkautumattomaksi todetun OGG:n suoraan.
    const other = await bank.prepare(otherEvent);
    expect(other.samples.get('5:45:Vel02').format).toBe('m4a');
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a', 'steel-5-45.m4a']);
  });

  it('molemmat muodot epäonnistuvat: prepare hylätään (sivu siirtyy näkyvään varatilaan), eikä uusi yritys lataa turhaan', async () => {
    const { bank, fetched } = setup({ decodes: () => false });
    await expect(bank.prepare(createM2SteelEvents())).rejects.toThrow(/Näytettä 6:40:Vel02 ei voitu ladata: M4A-purku epäonnistui/);
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
    await expect(bank.prepare(createM2SteelEvents())).rejects.toThrow(/ei purkaudu tässä selaimessa/);
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
  });

  it('HTTP-virhe ei merkitse muotoa purkautumattomaksi', async () => {
    const { bank, fetched } = setup({ httpFail: p => p.endsWith('steel-6-40.ogg') });
    expect((await bank.prepare(createM2SteelEvents())).samples.get('6:40:Vel02').format).toBe('m4a');
    expect((await bank.prepare(otherEvent)).samples.get('5:45:Vel02').format).toBe('ogg');
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a', 'steel-5-45.ogg']);
  });

  it('samanaikaiset käynnistykset jakavat saman haun ja purun', async () => {
    const { bank, fetched, decodeCalls } = setup({ decodes: f => f !== 'ogg', delayMs: 5 });
    const [a, b] = await Promise.all([bank.prepare(createM2SteelEvents()), bank.prepare(createM2SteelEvents())]);
    expect(a.samples.get('6:40:Vel02')).toBe(b.samples.get('6:40:Vel02'));
    expect(fetched.filter(f => f.endsWith('.json'))).toHaveLength(1);
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
    expect(decodeCalls).toEqual(['ogg', 'm4a']);
  });

  it('pysäytys latauksen aikana hylkää vain kyseisen pyynnön; valmis näyte jää välimuistiin', async () => {
    const { bank, fetched } = setup({ decodes: f => f !== 'ogg', delayMs: 20 });
    const controller = new AbortController();
    const stopped = bank.prepare(createM2SteelEvents(), { signal: controller.signal });
    setTimeout(() => controller.abort(), 5);
    await expect(stopped).rejects.toMatchObject({ name: 'AbortError' });
    // Uusi käynnistys heti: odottaa samaa jo käynnissä olevaa latausta, ei aloita uutta.
    const restarted = await bank.prepare(createM2SteelEvents());
    expect(restarted.samples.get('6:40:Vel02').format).toBe('m4a');
    expect(fetched.filter(f => f.endsWith('.json'))).toHaveLength(1);
    expect(audioFetches(fetched)).toEqual(['steel-6-40.ogg', 'steel-6-40.m4a']);
  });

  it('ei säädä sävelkorkeutta, aloituskohtaa eikä tasoa: arvot tulevat manifestista sellaisinaan', async () => {
    const { bank } = setup({ decodes: f => f !== 'ogg' });
    const clip = (await bank.prepare(createM2SteelEvents())).samples.get('6:40:Vel02');
    const entry = manifest.samples.find((s: { string: number; midi: number }) => s.string === 6 && s.midi === 40);
    expect(clip.rate).toBe(2 ** ((entry.playbackSemitones ?? 0) / 12));
    expect(clip.onset).toBe(entry.files.m4a.onsetMs / 1000);
  });
});
