import { describe,it,expect } from 'vitest';
import { ProgressStore,STORAGE_KEY,decode,proficiency,weight,type Result } from '../harjoittelija/storage';
import { defaults } from '../harjoittelija/settings';
const result:Result={id:'a:1',item:'notes:5:3',mode:'notes',input:'mic',check:'class',expected:43,played:43,first:true,errors:0,ms:1000,hint:false,at:1234,position:'5:3'};
function storage(initial:Record<string,string>={}) {
  const values={...initial};
  return {values,getItem:(key:string)=>values[key]??null,setItem:(key:string,value:string)=>{values[key]=value;}};
}
describe('versioitu selaintallennus',()=>{
  it('tallentaa ja lukee ilman vanhojen lukumerkintöjen muuttamista',()=>{
    const mem=storage({'musiikin-kartta:tehdyt':'["osa-3#otelauta"]'});
    const store=new ProgressStore(mem); store.record(result); store.record(result); store.settings({...defaults,max:12});
    const loaded=new ProgressStore(mem);
    expect(loaded.data.stats['mic:class:solo:notes:5:3']).toMatchObject({attempts:1,correct:1,totalMs:1000});
    expect(loaded.data.settings.max).toBe(12); expect(mem.values['musiikin-kartta:tehdyt']).toBe('["osa-3#otelauta"]');
  });
  it('migroi v1:n muuttamatta vanhaa ennen tallennusta',()=>{
    const raw=JSON.stringify({version:1,stats:{old:{attempts:3,correct:2,totalMs:2000,lastSeen:123}},settings:{max:12}});
    expect(decode(raw)).toMatchObject({version:2,stats:{old:{errors:0,attempts:3}},settings:{max:12}});
  });
  it.each(['{broken',JSON.stringify({version:99,stats:{}}),JSON.stringify({version:2,stats:{bad:{attempts:-1}}})])('säilyttää lukukelvottoman tai tulevan version %s',raw=>{
    const mem=storage({[STORAGE_KEY]:raw}); const store=new ProgressStore(mem); store.record(result);
    expect(mem.values[STORAGE_KEY]).toBe(raw); expect(store.warning).not.toBe(''); expect(store.data.recent).toHaveLength(1);
  });
  it('kiintiövirhe ei kadota tämän käynnin vastauksia',()=>{
    const store=new ProgressStore({getItem:()=>null,setItem:()=>{throw new Error('quota');}});
    store.record(result); expect(store.warning).toContain('vain sivun'); expect(store.data.recent).toHaveLength(1);
  });
  it('erottaa vihjeet, vastaustavat ja tarkistukset',()=>{
    const store=new ProgressStore(storage());
    store.record(result); store.record({...result,id:'a:2',hint:true}); store.record({...result,id:'a:3',input:'board'});store.record({...result,id:'a:4',check:'pitch'});
    expect(Object.keys(store.data.stats)).toHaveLength(4);
  });
  it('pitää kierroksesta vain uusimman tilan',()=>{
    const store=new ProgressStore(storage());
    const session={id:'a',mode:'notes',count:1,first:1,ms:1000,at:1,complete:false};
    store.session(session);store.session({...session,count:10,complete:true});expect(store.data.sessions).toHaveLength(1);expect(store.data.sessions[0].count).toBe(10);
  });
  it('osaamisarvio ja painotus käyttävät tarkkuutta ja nopeutta',()=>{
    expect(proficiency()).toBeNull(); expect(weight()).toBe(3);
    expect(proficiency({attempts:4,correct:4,totalMs:4000,lastSeen:1,errors:0})).toBe(1);
    expect(weight({attempts:4,correct:4,totalMs:4000,lastSeen:1,errors:0})).toBe(.25);
    expect(proficiency({attempts:4,correct:0,totalMs:24000,lastSeen:1,errors:4})).toBe(0);
  });
});
