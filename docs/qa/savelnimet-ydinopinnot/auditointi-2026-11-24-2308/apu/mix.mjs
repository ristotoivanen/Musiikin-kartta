import fs from 'node:fs';
import { riffPlan, melodyPlan } from '../../../../../assets/savelnimet-aanet.js';
const SR = 48000, dir = (process.env.AUDIT_WAV ?? './wav') + '/';
const cache = new Map();
function wav(name) { if (cache.has(name)) return cache.get(name); const b = fs.readFileSync(dir + name + '.m4a.wav'); let off = 12; while (b.toString('ascii', off, off+4) !== 'data') off += 8 + b.readUInt32LE(off+4); const ch = b.readUInt16LE(22); const n = b.readUInt32LE(off+4)/2/ch; const x = new Float32Array(n); for (let i=0;i<n;i++) x[i]=b.readInt16LE(off+8+i*2*ch)/32768; cache.set(name,x); return x; }
function synth({ voice, midi = 0, duration }) { const n = Math.ceil(SR*duration), d = new Float32Array(n), f = 440*2**((midi-69)/12); let seed=123456;
  for (let i=0;i<n;i++){ const t=i/SR; let v=0; if(voice==='kick'){const ph=48*t+40*(1-Math.exp(-30*t))/30; v=Math.sin(2*Math.PI*ph)*Math.exp(-19*t)*0.7;} else if(voice==='bass'){for(let h=1;h<=7;h++) v+=Math.sin(2*Math.PI*f*h*t+0.13*h)*Math.exp(-t*(2.7+0.6*h))/h**1.2; v*=0.45;} else { seed=(Math.imul(seed,1664525)+1013904223)>>>0; v=(seed/4294967296*2-1)*Math.exp(-t*(voice==='hat'?38:24))*0.36; if(voice==='snare') v+=0.14*Math.sin(2*Math.PI*180*t)*Math.exp(-32*t);} d[i]=v;} return d; }
function render(plan, total) { const g = new Float32Array(Math.ceil(SR*total)), b = new Float32Array(g.length);
  for (const e of plan.events) { const src = e.sample ? wav(e.sample) : synth(e); const dur = Math.min(e.duration, src.length/SR); const s0 = Math.round(e.at*SR); const n = Math.round(dur*SR); const tgt = e.sample ? g : b;
    for (let i=0;i<n && s0+i<tgt.length;i++){ const t=i/SR; let env = t<0.006? t/0.006 : 1; const fs=dur-Math.min(0.13,dur/3); if(t>fs) env*= Math.max(0,(dur-t)/(dur-fs)); tgt[s0+i]+=src[i]*e.gain*env*0.8; } }
  return { g, b }; }
const rms = (x,a,b)=>Math.sqrt(x.slice(a,b).reduce((s,v)=>s+v*v,0)/(b-a));
const db = v => (20*Math.log10(v)).toFixed(1);
for (const [label, plan] of [['riff F', riffPlan(3)], ['riff Ylempi D', riffPlan(12)], ['melodia C-C#-D', melodyPlan(4, 'xx0232')]]) {
  const total = plan.duration + 1.5; const { g, b } = render(plan, total);
  let peak = 0; for (let i=0;i<g.length;i++) peak = Math.max(peak, Math.abs(g[i]+b[i]));
  const rows = plan.markers.map(m => { const a = Math.round(m.at*SR), z = Math.min(g.length, Math.round((m.at+m.duration)*SR)); const gr = rms(g,a,z), br = rms(b,a,z); return db(gr/Math.max(br,1e-9)); });
  console.log(label.padEnd(16), 'huippu(miksaus)', peak.toFixed(3), 'kitara/komppi RMS dB per nuotti:', rows.join(' '), '| kitaran RMS (dBFS) ', db(rms(g,0,g.length)), 'komppi', db(rms(b,0,b.length)));
}
