import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const root = new URL('../', import.meta.url);
const source = (path: string) => readFileSync(new URL(path, root), 'utf8');
const original = source('testit/ensimmaiset-nelja-iskua.html');
const integrated = source('testit/ensimmaiset-nelja-iskua-steel.html');
const bank = JSON.parse(source('assets/soitinpankki/meta-steel-v1.json'));

const digest = (path: string) => createHash('sha256')
  .update(readFileSync(new URL(path, root))).digest('hex');

describe('Beta-pohjainen M2 Steel -integraatiovalmistelu', () => {
  it('säilyttää alkuperäisen #130:n sivun ja M0/M1/M3-rakenteen erillisenä', () => {
    expect(original).toContain('Ensimmäiset neljä iskua · v4 käytettävyyskoe');
    expect(original).toContain("if(mode==='M2')model=await getReal()");
    expect(original).toContain("if(mode==='M3'){src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;}");
    expect(original).not.toContain('m2BassShelf');
    expect(integrated).toContain("if(mode==='M3'){src.loop=true;src.loopStart=countin;src.loopEnd=countin+musicLength;}");
    expect(integrated).not.toContain('balance-trial.mjs');
    expect(integrated).toContain('name="robots" content="noindex,nofollow"');
    expect(integrated).toContain("const AUDIO_DIR='../assets/audio/ensimmaiset-nelja-iskua/'");
  });

  it('käyttää täsmälleen hyväksyttyjä B-WAV- ja FreePats E2 -lähteitä', () => {
    expect(digest('assets/audio/ensimmaiset-nelja-iskua/em-komppi-b-m3-hillitty-basso.wav'))
      .toBe('d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897');
    expect(digest('assets/audio/ensimmaiset-nelja-iskua/e2-freepats-fsbs-clean-bridge-alku-2s.wav'))
      .toBe('b1ff445814b57c381dade4ba1026280e6c5e94a93f6459874aa926bf019e4206');
    expect(bank.samples).toHaveLength(8);
    expect(bank.referenceGain).toBeCloseTo(.76221, 5);
    for (const sample of bank.samples) {
      for (const fmt of ['ogg','m4a'] as const) {
        const file=sample.files[fmt];
        const data=readFileSync(new URL('assets/soitinpankki/' + file.path, root));
        expect(data.byteLength).toBe(file.bytes);
        expect(createHash('sha256').update(data).digest('hex')).toBe(file.sha256);
      }
    }
  });

  it('käyttää kuuntelussa valittua gainia ja rajaa basson +2 dB:n vain M2:een', () => {
    expect(integrated).toContain("sample(t,t+beatLength,b,0.150,.85*.30)");
    expect(integrated).toContain("m2BassShelf.frequency.value=90;m2BassShelf.gain.value=2");
    expect(integrated).toContain('m2BackingBus.gain.value=.55');
    expect(integrated).toContain('gainMultiplier:2.4');
    expect(integrated).toContain("if(mode==='M2') {");
    expect(integrated).toContain("} else src.connect(ac.destination)");
    expect(integrated).toContain("if(mode==='M3'){src.loop=true");
    expect(original).not.toContain('steelPlayer');
  });

  it('näyttää varakitaran käytön, ei korvaa Steel-näytettä hiljaisesti', () => {
    expect(integrated).toContain("m2UsedFallback=true");
    expect(integrated).toContain("Musiikki soi FreePats-varakitaralla:");
    expect(integrated).toContain("Meta Steelin lataus ei onnistunut");
    expect(integrated).toContain("steelPlayer.stop(true)");
    expect(integrated).toContain("import('../assets/soitinpankki/steel-sampler.mjs')");
    expect(integrated).toContain("import('../assets/soitinpankki/m2-steel-model.mjs')");
  });
});
