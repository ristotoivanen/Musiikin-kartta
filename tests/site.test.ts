import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';
import { describe,it,expect } from 'vitest';
import ts from 'typescript';
const read=(file:string)=>readFileSync(new URL('../'+file,import.meta.url),'utf8');
describe('staattisen sivuston yhteensopivuus',()=>{
  it('muutetut nykyiset skriptit ovat syntaktisesti kelvollisia classic-skriptejä',()=>{
    for(const file of ['assets/otelauta.js','assets/edistyminen.js','assets/harjoitustausta.js','assets/korvatreeni.js']) expect(()=>new Script(read(file))).not.toThrow();
  });
  it('otelautakartan moduuliskriptit ovat syntaktisesti kelvollisia ja ladataan moduulina',()=>{
    // visualizer.js tuo seiskasointuotteet import-lauseella, joten se ei ole enää classic-skripti.
    for(const file of ['assets/visualizer.js','assets/seventh-voicings.js']){
      const { diagnostics } = ts.transpileModule(read(file),{ fileName:file, reportDiagnostics:true, compilerOptions:{ allowJs:true, module:ts.ModuleKind.ESNext, target:ts.ScriptTarget.ES2022 } });
      expect(diagnostics).toEqual([]);
    }
    const html=read('otelautaharjoittelija.html');
    expect(html).toContain('<script src="assets/otelauta.js"></script>');
    expect(html).toContain('<script type="module" src="assets/visualizer.js"></script>');
  });
  it('otelautakartassa ei ole harjoitus- tai äänentoistotoimintoja', () => {
    const visualizer = read('otelautaharjoittelija.html');
    const redirect = read('harjoitustaustat.html');
    const home = read('index.html');
    expect(visualizer).toContain('assets/visualizer.js');
    expect(visualizer).not.toContain('assets/oktaavit.js');
    expect(visualizer).not.toContain('assets/harjoitustausta.js');
    expect(visualizer).not.toContain('<audio');
    expect(visualizer).toContain('Sormitusboksit ja näyttöasetukset');
    expect(redirect).toContain('otelautaharjoittelija.html');
    expect(home).toContain('Tutki otelautakarttaa');
    expect(home).not.toContain('Soita taustan mukana');
  });

  it('oppaan osat säilyttävät luvut, vanhat kuuntelut ja pelkät harjoituslinkit',()=>{
    for(const part of Array.from({length: 11}, (_, index) => index + 1)){
      const html=read(`book/osa-${part}.html`);
      expect(html).toContain('assets/edistyminen.js');expect(html).toContain('../kitaraharjoittelija.html');
      expect(html).not.toContain('harjoittelija/app');expect(html).not.toContain('main.tsx');
    }
    expect(read('book/osa-7.html')).toContain('data-korvatreeni="aste"');
    expect(read('book/osa-7.html')).toContain('data-korvatreeni="sointu"');
    expect(read('book/osa-8.html')).toContain('assets/audio/osa-8/em-c-tausta.m4a');
  });
});
