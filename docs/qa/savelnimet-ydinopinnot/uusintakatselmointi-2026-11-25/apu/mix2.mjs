import fs from 'node:fs';
import { riffPlan, melodyPlan, routePlan, intervalPair, chordSequence } from '../../../../../assets/savelnimet-aanet.js';
const SR=48000, dir=(process.env.AUDIT_WAV ?? './wav') + '/';
const cache=new Map();
function wav(n){ if(cache.has(n))return cache.get(n); const b=fs.readFileSync(dir+n+'.m4a.wav'); let off=12; while(b.toString('ascii',off,off+4)!=='data') off+=8+b.readUInt32LE(off+4); const ch=b.readUInt16LE(22); const N=b.readUInt32LE(off+4)/2/ch; const x=new Float32Array(N); for(let i=0;i<N;i++) x[i]=b.readInt16LE(off+8+i*2*ch)/32768; cache.set(n,x); return x;}
function synth({voice,midi=0,duration}){const n=Math.ceil(SR*duration),d=new Float32Array(n),f=440*2**((midi-69)/12);let seed=123456;for(let i=0;i<n;i++){const t=i/SR;let v=0;if(voice==='kick'){const ph=48*t+40*(1-Math.exp(-30*t))/30;v=Math.sin(2*Math.PI*ph)*Math.exp(-19*t)*0.7;}else if(voice==='bass'){for(let h=1;h<=7;h++)v+=Math.sin(2*Math.PI*f*h*t+0.13*h)*Math.exp(-t*(2.7+0.6*h))/h**1.2;v*=0.45;}else{seed=(Math.imul(seed,1664525)+1013904223)>>>0;v=(seed/4294967296*2-1)*Math.exp(-t*(voice==='hat'?38:24))*0.36;if(voice==='snare')v+=0.14*Math.sin(2*Math.PI*180*t)*Math.exp(-32*t);}d[i]=v;}return d;}
function render(plan,total){const g=new Float32Array(Math.ceil(SR*total)),b=new Float32Array(g.length);for(const e of plan.events){const src=e.sample?wav(e.sample):synth(e);const dur=Math.min(e.duration,src.length/SR);const s0=Math.round(e.at*SR),n=Math.round(dur*SR),tg=e.sample?g:b;for(let i=0;i<n&&s0+i<tg.length;i++){const t=i/SR;let env=t<0.006?t/0.006:1;const fs=dur-Math.min(0.13,dur/3);if(t>fs)env*=Math.max(0,(dur-t)/(dur-fs));tg[s0+i]+=src[i]*e.gain*env*0.8;}}return{g,b};}
// biquad (RBJ)
function biquad(x,type,f0,Q=0.707){const w=2*Math.PI*f0/SR,c=Math.cos(w),s=Math.sin(w)/(2*Q);let b0,b1,b2;const a0=1+s,a1=-2*c,a2=1-s;if(type==='hp'){b0=(1+c)/2;b1=-(1+c);b2=(1+c)/2}else{b0=(1-c)/2;b1=1-c;b2=(1-c)/2}const y=new Float32Array(x.length);let x1=0,x2=0,y1=0,y2=0;for(let i=0;i<x.length;i++){const v=(b0*x[i]+b1*x1+b2*x2-a1*y1-a2*y2)/a0;y[i]=v;x2=x1;x1=x[i];y2=y1;y1=v}return y}
const phone=x=>biquad(biquad(biquad(x,'hp',350),'hp',350),'lp',9000);
const rms=(x,a,b)=>Math.sqrt(x.slice(a,b).reduce((s,v)=>s+v*v,0)/Math.max(1,b-a));const db=v=>(20*Math.log10(Math.max(v,1e-9))).toFixed(1);
const peak=x=>x.reduce((m,v)=>Math.max(m,Math.abs(v)),0);
const variants={melody:[3,4,5].map(f=>['melodia fret'+f,melodyPlan(f,'xx0232')]),riff:[3,4,12].map(f=>['riffi fret'+f,riffPlan(f)])};
for(const [label,plan] of [...variants.melody,...variants.riff]){const total=plan.duration+1.6;const {g,b}=render(plan,total);const gp=phone(g),bp=phone(b);
 const mix=g.map((v,i)=>v+b[i]);const mixp=gp.map((v,i)=>v+bp[i]);
 const rows=plan.markers.map(m=>{const a=Math.round(m.at*SR),z=Math.min(g.length,Math.round((m.at+m.duration)*SR));return `${db(rms(g,a,z)/rms(b,a,z))}/${db(rms(gp,a,z)/rms(bp,a,z))}`});
 const active=Math.round(plan.duration*SR);
 console.log(label.padEnd(15),'huippu',db(peak(mix)),'dBFS (puhelin',db(peak(mixp))+')','RMS aktiivinen',db(rms(mix,0,active)),'dBFS','| kitara/komppi dB (täysi/puhelin) per nuotti:',rows.join(' '));}
