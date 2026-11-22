import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const root = new URL('../', import.meta.url);
const text = (path:string) => readFileSync(new URL(path, root), 'utf8');
const original = text('testit/ensimmaiset-nelja-iskua.html');
const qa = text('assets/soitinpankki/m2-koe.html');
const manifest = JSON.parse(text('assets/soitinpankki/meta-steel-v1.json'));

describe('#160 – M2 Steel -harjoitusvertailun rajaus', () => {
  it('alkuperäinen #130:n M0/M1/M3 ja B-säestys säilyvät samanlaisina', () => {
    expect(original).toContain("if(mode==='M2')model=await getReal()");
    expect(original).toContain("const AUDIO_DIR='../assets/audio/ensimmaiset-nelja-iskua/'");
    expect(original).toContain("src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;");
    expect(original).toContain("if(mode==='M2'){for(let round=0;round<4;round++)");
    expect(qa).toContain("src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;");
    expect(qa).toContain("const AUDIO_DIR='../audio/ensimmaiset-nelja-iskua/'");
    expect(qa).toContain("em-komppi-b-m3-hillitty-basso.wav");
    expect(qa).toContain("if(mode==='M2')model=await getSteelM2()");
    expect(qa).toContain("steelM2Player=model.schedule(ac,model.prepared");
    expect(qa).toContain("if(steelM2Player){steelM2Player.stop(true);steelM2Player=null}");
    expect(qa).not.toContain("if(mode==='M2')model=await getReal()");
  });

  it('alkuperäisen B-WAV:n SHA-256 täsmää hyväksyttyyn arvoon', () => {
    const source = readFileSync(new URL(
      'assets/audio/ensimmaiset-nelja-iskua/em-komppi-b-m3-hillitty-basso.wav', root));
    const sha = createHash('sha256').update(source).digest('hex');
    expect(sha).toBe('d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897');
  });

  it('kaikki 8 hyväksyttyä Steel-näytettä vastaavat 16 paikallisen assetin tarkisteita', () => {
    expect(manifest.samples).toHaveLength(8);
    for (const note of manifest.samples) {
      expect(note.layer).toBe('Vel02');
      for (const format of ['ogg','m4a']) {
        const asset = note.files[format];
        const buf = readFileSync(new URL('assets/soitinpankki/'+asset.path, root));
        expect(buf.length).toBe(asset.bytes);
        expect(createHash('sha256').update(buf).digest('hex')).toBe(asset.sha256);
      }
    }
  });

  it('näyttää väliaikaiset M0/M2-koearvot ilman miksauksen hyväksyntäväitettä', () => {
    expect(qa).toMatch(/id="m0Gain"[^>]*value="0\.3"/);
    expect(qa).toMatch(/id="steelGain"[^>]*value="2\.4"/);
    expect(qa).toMatch(/id="m2BackingGain"[^>]*value="0\.55"/);
    expect(qa).toContain('id="m0GainLabel">30 %');
    expect(qa).toContain('id="steelGainLabel">2,4 ×');
    expect(qa).toContain('id="balanceStatus"');
    expect(qa).toContain('Balanssi avoin.');
    expect(qa).toContain('Koearvot, ei hyväksytty miksaus.');
    expect(qa).toContain("if(mode==='M3'){src.loop=true");
    expect(original).not.toContain('m0GainControls');
  });

  it('M0 ja M2 käyttävät erillisiä, toiston aikana säädettäviä Web Audio -vahvistimia', () => {
    expect(qa).toContain("node.gain.setTargetAtTime(value,now,0.02)");
    expect(qa).toContain("smoothLevel(m0GuitarBus,value)");
    expect(qa).toContain("smoothLevel(steelM2Bus,value)");
    expect(qa).toContain("smoothLevel(m2BackingBus,value)");
    expect(qa).toContain("if(mode==='M0'){m0GuitarBus=ac.createGain()");
    expect(qa).toContain("gainMultiplier:1,output:steelM2Bus");
    expect(qa).toContain("m2BackingBus=ac.createGain()");
    expect(qa).toContain("src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;");
  });

  it('testisivua ei yhdistetä varsinaiseen navigaatioon tai #130:n alkuperäiseen sivuun', () => {
    expect(qa).toContain('<meta name="robots" content="noindex,nofollow">');
    expect(original).not.toContain('m2-steel-model.mjs');
    expect(qa).toContain("import('./m2-steel-model.mjs')");
    expect(qa).toContain('id="steelGain"');
  });
});
