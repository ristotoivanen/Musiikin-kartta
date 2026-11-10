import { describe, it, expect } from 'vitest';
import { PracticeEngine, generate, matches, pool, weightedPick } from '../harjoittelija/engine';
import { defaults, fromURL, sanitize, type Settings } from '../harjoittelija/settings';
import { CHORDS, music, pc } from '../harjoittelija/music';
describe('kysymysten muodostus', () => {
  it('kieli-, nauha- ja luonnollisten sävelten rajaus', () => {
    const s = {...defaults,strings:[5],min:0,max:5};
    expect(pool(s).map(p=>p.midi)).toEqual([40,41,43,45]);
    expect(pool({...s,accidentals:true})).toHaveLength(6);
  });
  it('asteikko ja boksi käyttää yhteisiä sormituksia', () => {
    const s: Settings = {...defaults,mode:'scale',root:9,scale:'mp',box:1,min:5,max:8};
    const notes=pool(s); expect(notes).toHaveLength(12);
    expect(notes.every(p=>[0,3,5,7,10].includes(pc(p.midi-9)))).toBe(true);
    expect(notes.find(p=>p.string===2 && p.fret===8)).toBeUndefined();
  });
  it('kaikkien asteikkojen kysymykset pysyvät asteikossa', () => {
    for(const scale of Object.keys(music.SCALES)) for(let root=0;root<12;root++) {
      const s:Settings={...defaults,mode:'scale',root,scale,max:24};
      for(let i=0;i<5;i++) {
        const q=generate(s,i);
        expect(music.scaleNotes(music.SCALES[scale]).some(([iv])=>iv===pc(q.midi-root))).toBe(true);
      }
    }
  });
  it('järjestetty asteikko kulkee sävelkorkeuksissa', () => {
    const s:Settings={...defaults,mode:'scale',min:5,max:8,order:'up'};
    const values=Array.from({length:8},(_,i)=>generate(s,i).midi);
    expect(values).toEqual([...values].sort((a,b)=>a-b));
    expect(generate({...s,order:'down'},0).midi).toBeGreaterThan(values[0]);
  });
  it('sointu rakentuu sävel kerrallaan', () => {
    for(const chord of ['maj','min','dom7'] as const) {
      const s:Settings={...defaults,mode:'chord',root:0,chord,min:0,max:12};
      expect(CHORDS[chord].tones.map((_,i)=>pc(generate(s,i).midi))).toEqual(CHORDS[chord].tones.map(([iv])=>iv));
    }
  });
  it('nousevat, laskevat ja oktaavin intervallit säilyttävät tarkan etäisyyden', () => {
    for(const direction of ['up','down'] as const) for(let iv=1;iv<=12;iv++) {
      const q=generate({...defaults,mode:'interval',max:12,intervals:[iv],direction},0);
      expect(q.midi-q.reference!).toBe(iv*(direction==='up'?1:-1));
    }
  });
  it('tyhjä alue ilmoitetaan, ei loputonta silmukkaa', () => {
    expect(()=>generate({...defaults,mode:'chord',root:0,strings:[5],min:0,max:0},0)).toThrow();
    expect(()=>generate({...defaults,mode:'interval',strings:[5],min:0,max:0},0)).toThrow();
  });
  it('heikkoja suosiva arvonta ja toiston esto', () => {
    expect(weightedPick(['strong','weak'],[.25,3],()=>.5)).toBe('weak');
    const q=generate({...defaults,min:0,max:0},0,{},undefined,()=>0);
    expect(generate({...defaults,min:0,max:0},1,{},q,()=>0).position).not.toEqual(q.position);
  });
  it('URL:n validointi ja enharmonia', () => {
    expect(fromURL('?tila=scale&toonikka=Bb&asteikko=majp&loppu=99',defaults)).toMatchObject({mode:'scale',root:10,scale:'majp',max:24});
    expect(fromURL('?tila=bad&asteikko=__proto__&alku=NaN',defaults)).toMatchObject({mode:'notes',scale:'mp',min:0});
    expect(sanitize({strings:[],min:20,max:-2})).toMatchObject({strings:[0,1,2,3,4,5],min:20,max:20});
  });
});
describe('tilasiirtymät ja vastausten luotettavuus', () => {
  it('sävelluokka hyväksyy oktaavin, sävelkorkeus vaatii oikean oktaavin', () => {
    expect(matches(40,52,'class')).toBe(true); expect(matches(40,52,'pitch')).toBe(false);
    expect(matches(40,40.1,'class')).toBe(false);
  });
  it('tauko ei kasvata vastausaikaa ja samaa vastausta ei tallenneta kahdesti', () => {
    let now=0; const results:unknown[]=[];
    const e=new PracticeEngine({...defaults,hints:'off'},()=>({}),r=>results.push(r),()=>now,()=>0);
    e.start(); now=100; e.pause(); now=10000;
    expect(e.answer(e.question!.midi,'mic')).toBe('ignored');
    e.resume(); now=10400;
    expect(e.answer(e.question!.midi,'mic')).toBe('correct');
    expect(e.results[0].ms).toBe(500); expect(results).toHaveLength(1);
    e.answer(e.question!.midi,'mic'); expect(results).toHaveLength(1);
  });
  it('eriävä mikrofoni on ehdotus, vain vahvistettu virhe tilastoituu', () => {
    const e=new PracticeEngine(defaults,()=>({}),()=>{},()=>0,()=>0); e.start();
    expect(e.answer(e.question!.midi+1,'mic')).toBe('candidate'); expect(e.errors).toBe(0);
    e.confirmWrong(); e.answer(e.question!.midi,'mic'); expect(e.results[0]).toMatchObject({first:false,errors:1});
  });
  it('otelaudan vastaus edellyttää pyydettyä kohtaa sävelharjoituksessa', () => {
    const e=new PracticeEngine(defaults,()=>({}),()=>{},()=>0,()=>0); e.start();
    expect(e.answer(e.question!.midi,'board',{...e.question!.position,string:1})).toBe('wrong');
    e.hint(); expect(e.answer(e.question!.midi,'board',e.question!.position)).toBe('correct');
    expect(e.results[0]).toMatchObject({first:false,hint:true});
  });
  it('CAGED hyväksyy jokaisen oikean sointusävelen muodon sisällä', () => {
    const settings:Settings={...defaults,mode:'caged',max:24};
    const e=new PracticeEngine(settings,()=>({}),()=>{},()=>0,()=>0); e.start();
    const alternative=pool(settings).filter(p=>pc(p.midi)===pc(e.question!.midi)).at(-1)!;
    expect(e.answer(alternative.midi,'board',alternative)).toBe('correct');
  });
  it('10, 20 ja vapaat kierrokset sekä keskeytys', () => {
    for(const rounds of [10,20,0]) {
      const e=new PracticeEngine({...defaults,rounds},()=>({}),()=>{},()=>0,()=>0); e.start();
      for(let i=0;i<(rounds||30);i++) { e.answer(e.question!.midi,'mic'); e.next(); }
      expect(e.phase).toBe(rounds?'done':'active'); e.stop(); e.next(); expect(e.phase).toBe('done');
    }
  });
});
