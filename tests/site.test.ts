import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import { describe,it,expect } from 'vitest';
const read=(file:string)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
describe('staattisen sivuston yhteensopivuus',()=>{
  it('muutetut nykyiset skriptit ovat syntaktisesti kelvollisia classic-skriptejä',()=>{
    for(const file of ['assets/otelauta.js','assets/edistyminen.js','assets/harjoitustausta.js','assets/korvatreeni.js']) expect(()=>new Script(read(file))).not.toThrow();
  });
  it('oppaan osat säilyttävät luvut, vanhat kuuntelut ja pelkät harjoituslinkit',()=>{
    for(const part of [1,2,3,4,5]){
      const html=read(`book/osa-${part}.html`);
      expect(html).toContain('assets/edistyminen.js');expect(html).toContain('../kitaraharjoittelija.html');
      expect(html).not.toContain('harjoittelija/app');expect(html).not.toContain('main.tsx');
    }
    expect(read('book/osa-4.html')).toContain('data-korvatreeni="aste"');
    expect(read('book/osa-4.html')).toContain('data-korvatreeni="sointu"');
    expect(read('book/osa-5.html')).toContain('assets/audio/osa-5/em-c-tausta.m4a');
  });
});
