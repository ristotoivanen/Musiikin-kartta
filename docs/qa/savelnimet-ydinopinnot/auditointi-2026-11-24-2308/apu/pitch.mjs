import fs from 'node:fs';
const dir = process.argv[2];
const names = {C:0,Cs:1,D:2,Ds:3,E:4,F:5,Fs:6,G:7,Gs:8,A:9,As:10,B:11};
for (const f of fs.readdirSync(dir).filter(x=>x.endsWith('.wav')).sort()) {
  const b = fs.readFileSync(dir+'/'+f);
  const ch = b.readUInt16LE(22), sr = b.readUInt32LE(24);
  let off = 12; while (b.toString('ascii', off, off+4) !== 'data') off += 8 + b.readUInt32LE(off+4);
  const n = (b.readUInt32LE(off+4)) / 2 / ch; const x = new Float64Array(n);
  for (let i=0;i<n;i++) x[i] = b.readInt16LE(off+8+i*2*ch)/32768;
  const s = Math.floor(sr*0.3), len = Math.floor(sr*0.5);
  let best=0, bl=0; const minL=Math.floor(sr/700), maxL=Math.floor(sr/60);
  const r = [];
  for (let L=minL; L<=maxL; L++){ let c=0,e1=0,e2=0; for(let i=0;i<len;i++){c+=x[s+i]*x[s+i+L];e1+=x[s+i]**2;e2+=x[s+i+L]**2;} r[L]=c/Math.sqrt(e1*e2); }
  // first strong local max above 0.9*global max
  const gmax = Math.max(...r.filter(v=>v!==undefined));
  for (let L=minL+1; L<maxL; L++) if (r[L]>0.9*gmax && r[L]>=r[L-1] && r[L]>=r[L+1]) { bl=L; break; }
  const d=(r[bl-1]-r[bl+1])/(2*(r[bl-1]-2*r[bl]+r[bl+1])); const freq = sr/(bl+d);
  const m = f.match(/_([A-G]s?)(\d)_01/); const exp = 12*(parseInt(m[2])+1)+names[m[1]];
  const midi = 69+12*Math.log2(freq/440);
  console.log(f.replace('INSGuitarSteel_','').padEnd(34), freq.toFixed(2).padStart(8)+' Hz', 'midi', midi.toFixed(2), 'odotettu', exp, 'ero', ((midi-exp)*100).toFixed(0)+' c', 'kesto', (n/sr).toFixed(2)+' s');
}
