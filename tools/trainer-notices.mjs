import { existsSync, readFileSync, writeFileSync } from 'node:fs';
// Keep the complete MIT copyright/permission notices alongside the static bundle.
const packages = ['react','react-dom','scheduler','loose-envify','js-tokens','pitchy'];
const notices = packages.map(name => {
  const base = new URL(`../node_modules/${name}/`,import.meta.url);
  const pkg = JSON.parse(readFileSync(new URL('package.json',base),'utf8'));
  return `${name} ${pkg.version} (${pkg.license})\n${readFileSync(new URL('LICENSE',base),'utf8')}`;
});
const fftReadme = readFileSync(new URL('../node_modules/fft.js/README.md',import.meta.url),'utf8');
notices.push('fft.js (MIT)\n'+fftReadme.slice(fftReadme.lastIndexOf('#### LICENSE')));
notices.unshift('FretEcho — adapted pitch loop, microphone input, MIDI utilities, proficiency/picker ideas\nSource: https://github.com/dmb1107/fretecho\nRevision: e86aa94ee9516df2ba98129805e4d3fb61a50cdf\n'+readFileSync(new URL('../harjoittelija/vendor/FretEcho-LICENSE.txt',import.meta.url),'utf8'));
// Riffikaiku käyttää samoja kirjastoja ja mukautettua sävelentunnistusta, joten sama ilmoitus kulkee sen käännöksen mukana.
for(const dir of ['harjoittelija','riffikaiku']){
  if(existsSync(new URL(`../assets/${dir}/app.js`,import.meta.url))) writeFileSync(new URL(`../assets/${dir}/THIRD-PARTY-NOTICES.txt`,import.meta.url),notices.join('\n\n----------------\n\n'));
}
