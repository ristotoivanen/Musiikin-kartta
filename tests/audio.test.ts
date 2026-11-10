import { afterEach,describe,it,expect,vi } from 'vitest';
import { Microphone,micError } from '../harjoittelija/audio';
import { StabilityGate } from '../harjoittelija/vendor/pitchDetector';
import { openMic,type MicStream } from '../harjoittelija/vendor/micInput';
afterEach(()=>vi.unstubAllGlobals());
describe('mikrofonin luotettavuus ja elinkaari',()=>{
  it('vaatii vakaan sävelen ja vapautuksen ennen uutta vastausta',()=>{
    const gate=new StabilityGate(); gate.feed(null,-200,240); gate.feed(null,-1,240);
    expect(gate.feed(40,0,240)).toBeNull();expect(gate.feed(40,100,240)).toBeNull();expect(gate.feed(40,240,240)).toBe(40);
    expect(gate.feed(40,1000,240)).toBeNull();expect(gate.feed(41,1500,240)).toBeNull();
    gate.feed(null,1600,240);gate.feed(null,1800,240);gate.feed(41,2000,240);expect(gate.feed(41,2250,240)).toBe(41);
  });
  it('epävakaa sävel ei muodosta vastausta',()=>{
    const gate=new StabilityGate(); gate.feed(null,-200,240); gate.feed(null,-1,240);
    for(let time=0;time<1000;time+=40) expect(gate.feed(time%80?40:52,time,240)).toBeNull();
  });
  it('tauolta jatkaminen vaatii uuden alukkeen',()=>{
    const gate=new StabilityGate();gate.reset();
    expect(gate.feed(40,0,120)).toBeNull();expect(gate.feed(40,500,120)).toBeNull();
    gate.feed(null,600,120);gate.feed(null,800,120);gate.feed(40,900,120);expect(gate.feed(40,1100,120)).toBe(40);
  });
  it('myöhäinen lupavastaus vapauttaa mikrofonin pysäytyksen jälkeen',async()=>{
    let resolve!:(mic:MicStream)=>void;const stop=vi.fn();
    const microphone=new Microphone(()=>new Promise(r=>resolve=r));
    const opening=microphone.start('',{},()=>{});microphone.stop();resolve({stop} as unknown as MicStream);
    expect(await opening).toBe(false);expect(stop).toHaveBeenCalledOnce();
  });
  it('lupa evätty ei luo äänikontekstia',async()=>{
    const Context=vi.fn();vi.stubGlobal('AudioContext',Context);
    vi.stubGlobal('navigator',{mediaDevices:{getUserMedia:vi.fn().mockRejectedValue(new DOMException('denied','NotAllowedError'))}});
    await expect(openMic()).rejects.toMatchObject({name:'NotAllowedError'});expect(Context).not.toHaveBeenCalled();
  });
  it('kontekstin epäonnistuminen pysäyttää jo myönnetyn äänivirran',async()=>{
    const stop=vi.fn();vi.stubGlobal('navigator',{mediaDevices:{getUserMedia:vi.fn().mockResolvedValue({getTracks:()=>[{stop}]})}});
    vi.stubGlobal('AudioContext',class { constructor(){throw new Error('context failed');} });
    await expect(openMic()).rejects.toThrow('context failed');expect(stop).toHaveBeenCalledOnce();
  });
  it('HTTPS- tai API-puutteen käsittely',async()=>{
    vi.stubGlobal('navigator',{});await expect(openMic()).rejects.toThrow('HTTPS');
  });
  it.each([['NotAllowedError','lupa evättiin'],['NotFoundError','ei löydy'],['NotReadableError','ei voitu avata'],['OverconstrainedError','ei löydy']])('ymmärrettävä virheilmoitus %s',(name,text)=>expect(micError(new DOMException('error',name))).toContain(text));
});
