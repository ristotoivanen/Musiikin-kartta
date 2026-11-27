// Research only, #213 B5-B6. No D2 player, playback, or production changes.
import { readFileSync, writeFileSync, mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const base = resolve(process.argv[2]);
const out = resolve(process.argv[3]);
mkdirSync(out, { recursive: true });
const require = createRequire(join(base, 'package.json'));
const { chromium } = require('@playwright/test');
const ts = require('typescript');
// Use the unchanged parser, but not the player or its calibration routine.
const source = readFileSync(join(base, 'harjoittelija/mp3Layout.ts'), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { parseMp3 } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
const sha = bytes => createHash('sha256').update(bytes).digest('hex');

function cmd(name, args, maxBuffer = 128 * 1024 * 1024) {
  const res = spawnSync(name, args, { maxBuffer });
  if (res.status !== 0 || res.error) throw new Error(name + ': ' + (res.error || res.stderr?.toString()));
  return res;
}

function decode(path, codec) {
  const fixed = codec === 'mp3';
  const res = cmd('ffmpeg', ['-nostdin','-v','error','-threads','1','-c:a',codec,'-f','mp3','-i',path,'-map','0:a:0','-c:a',fixed?'pcm_s16le':'pcm_f32le','-f',fixed?'s16le':'f32le','pipe:1']);
  const b = res.stdout;
  const bytes = fixed ? 2 : 4;
  if (b.length % bytes) throw new Error('Partial PCM sample');
  // Buffer is not guaranteed to be aligned: use DataView.
  const v = new DataView(b.buffer,b.byteOffset,b.byteLength);
  const get = fixed ? i => v.getInt16(i*2,true)/32768 : i => v.getFloat32(i*4,true);
  return { count:b.length/bytes, get, warnings:res.stderr.toString().slice(0,2000) };
}

// Serializable, shared verbatim between browser and FFmpeg comparisons.
function stats(ref, part, channels, start, skip, n, refLength, partLength) {
  if (start<0 || skip<0 || start+n>refLength || skip+n>partLength) {
    return {invalidLength:true, refLength,partLength,start,skip,n};
  }
  let count=0, max=0, sum2=0, positive=0, negative=0, overOne=0, nonFinite=0;
  let first=null, last=null, hash=2166136261, refPeak=0;
  const byChannel=Array.from({length:channels},()=>({count:0,max:0,sum2:0}));
  for(let i=0;i<n;i++) for(let c=0;c<channels;c++){
    const a=ref(c,start+i), b=part(c,skip+i), d=b-a, abs=Math.abs(d);
    if(!Number.isFinite(d)){nonFinite++;continue;}
    refPeak=Math.max(refPeak,Math.abs(a));
    const sign=d>0?1:d<0?2:0;
    hash=Math.imul(hash^sign,16777619)>>>0;
    if(sign){count++;byChannel[c].count++;if(first===null)first={sample:start+i,channel:c};last={sample:start+i,channel:c};}
    if(d>0)positive++; if(d<0)negative++;
    if(abs>1.01/32768)overOne++;
    max=Math.max(max,abs);sum2+=d*d;
    byChannel[c].max=Math.max(byChannel[c].max,abs);byChannel[c].sum2+=d*d;
  }
  // Determine whether an adjacent sample shift improves alignment (diagnostic only).
  const shiftRms={};
  for(let shift=-4;shift<=4;shift++){
    const lo=Math.max(0,-skip-shift), hi=Math.min(n,partLength-skip-shift);
    let s=0,k=0;
    for(let i=lo;i<hi;i+=4) for(let c=0;c<channels;c++){const d=part(c,skip+i+shift)-ref(c,start+i);s+=d*d;k++;}
    shiftRms[shift]=k?Math.sqrt(s/k):null;
  }
  const bestShift=Object.entries(shiftRms).filter(([,v])=>v!==null).sort((a,b)=>a[1]-b[1])[0]?.[0];
  return {count,max,rms:Math.sqrt(sum2/(n*channels)),positive,negative,overOne,nonFinite,first,last,signHash:hash.toString(16).padStart(8,'0'),refPeak,shiftRms,bestShift,
    byChannel:byChannel.map(({sum2,...x})=>({...x,rms:Math.sqrt(sum2/n)}))};
}

const browser = await chromium.launch({args:['--mute-audio','--disable-audio-output']});
const env = {baseline:cmd('git',['-C',base,'rev-parse','HEAD']).stdout.toString().trim(),node:process.version,chromium:browser.version(),ffmpeg:cmd('ffmpeg',['-version']).stdout.toString(),platform:process.platform,arch:process.arch};
writeFileSync(join(out,'environment.json'),JSON.stringify(env,null,2));
console.log(JSON.stringify(env));
const tmp=mkdtempSync(join(tmpdir(),'qa-213-'));
const summary=[];
try {
  for(const version of ['normaali','akustinen']) for(const track of ['saestys','kitara','laulu']){
    const name='yksi-sointu-kaksi-askelta-'+version;
    const path=join(base,'assets/audio/kappaleet',name,name+'-'+track+'.mp3');
    const bytes=readFileSync(path);
    const layout=parseMp3(bytes);
    if(layout.sampleRate!==48000 || layout.channels!==2) throw new Error('Unexpected MP3 layout: '+path);
    const frame=1152, decoderDelay=529; // Explicit hypothesis, independently checked by shift RMS and origin control.
    const offsets=layout.frameOffsets, cases=[];
    const starts=[0,575,576,1151,480000,480001,5000000,Math.floor(layout.length/2),layout.length-2000,layout.length-1000];
    function add(start,pre){
      const n=Math.min(48000,layout.length-start);
      const first=pre==='origin'?0:Math.max(0,Math.floor((start+layout.delay)/frame)-pre);
      const end=Math.min(offsets.length,Math.ceil((start+layout.delay+n)/frame)+2);
      cases.push({start,n,pre,first,end,skip:start+layout.delay-first*frame+decoderDelay,byteStart:offsets[first],byteEnd:end<offsets.length?offsets[end]:layout.dataEnd});
    }
    for(const start of [...new Set(starts)]) add(start,2);
    for(const start of [480000,Math.floor(layout.length/2)]) for(const pre of [8,32,128,'origin']) add(start,pre);
    const page=await browser.newPage();
    await page.route('http://127.0.0.1:8765/**', route=>route.request().url().endsWith('/audio.mp3')?
      route.fulfill({status:200,contentType:'audio/mpeg',body:bytes}):
      route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Independent MP3 decode</title>'}));
    await page.goto('http://127.0.0.1:8765/');
    const browserResult=await page.evaluate(async ({cases,statsSource,layoutLength})=>{
      const measure=(0,eval)('('+statsSource+')');
      const ctx=new AudioContext({sampleRate:48000});
      const bytes=await (await fetch('/audio.mp3')).arrayBuffer();
      const digest=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))).map(x=>x.toString(16).padStart(2,'0')).join('');
      const full=await ctx.decodeAudioData(bytes.slice(0));
      const access=b=>(c,i)=>b.getChannelData(c)[i];
      const f=access(full), channels=full.numberOfChannels;
      const again=await ctx.decodeAudioData(bytes.slice(0));
      const repeatFull=measure(f,access(again),channels,0,0,full.length,full.length,again.length);
      const measurements=[];
      for(const q of cases){
        const raw=await ctx.decodeAudioData(bytes.slice(q.byteStart,q.byteEnd));
        const p=access(raw);
        const m=measure(f,p,channels,q.start,q.skip,q.n,full.length,raw.length);
        let repeatPart=null;
        if(q.start===480000 && q.pre===2){
          const dup=await ctx.decodeAudioData(bytes.slice(q.byteStart,q.byteEnd));
          repeatPart=measure(p,access(dup),channels,0,0,raw.length,raw.length,dup.length);
        }
        measurements.push({...q,rawLength:raw.length,stats:m,repeatPart});
      }
      const result={sampleRate:ctx.sampleRate,fullLength:full.length,layoutLength,channels,sha256:digest,repeatFull,measurements};
      await ctx.close();
      return result;
    },{cases,statsSource:stats.toString(),layoutLength:layout.length});
    await page.close();
    if(browserResult.sha256!==sha(bytes))throw new Error('Browser fetch SHA mismatch');
    const codecs={};
    for(const codec of ['mp3','mp3float']){
      const full=decode(path,codec);
      const length=full.count/layout.channels;
      const f=(c,i)=>full.get(i*layout.channels+c);
      const measurements=[];
      for(const q of cases){
        const rawPath=join(tmp,'segment.mp3');
        writeFileSync(rawPath,bytes.subarray(q.byteStart,q.byteEnd));
        const raw=decode(rawPath,codec), rawLength=raw.count/layout.channels;
        const p=(c,i)=>raw.get(i*layout.channels+c);
        const m=stats(f,p,layout.channels,q.start,q.skip,q.n,length,rawLength);
        measurements.push({...q,rawLength,stats:m,warnings:raw.warnings});
      }
      codecs[codec]={fullLength:length,warnings:full.warnings,measurements};
    }
    const comparisons=cases.map((q,i)=>{
      const a=browserResult.measurements[i].stats,b=codecs.mp3.measurements[i].stats,c=codecs.mp3float.measurements[i].stats;
      return {start:q.start,pre:q.pre,chromiumCount:a.count,chromiumMax:a.max,chromiumRms:a.rms,chromiumOverOne:a.overOne,fixedCount:b.count,fixedMax:b.max,floatCount:c.count,floatMax:c.max,
        sameSignedMismatchHash:!a.invalidLength&&!b.invalidLength&&a.signHash===b.signHash,chromiumBestShift:a.bestShift,fixedBestShift:b.bestShift,floatBestShift:c.bestShift,
        invalidLength:!!(a.invalidLength||b.invalidLength||c.invalidLength)};
    });
    const result={version,track,sha256:sha(bytes),layout:{...layout,frameOffsets:undefined,frames:offsets.length},decoderDelay,browser:browserResult,ffmpeg:codecs,comparisons};
    writeFileSync(join(out,version+'-'+track+'.json'),JSON.stringify(result,null,2));
    summary.push({version,track,fullLength:browserResult.fullLength,layoutLength:layout.length,repeatFull:browserResult.repeatFull,repeatPart:browserResult.measurements.find(q=>q.repeatPart)?.repeatPart,comparisons});
    console.log(JSON.stringify({version,track,fullLength:browserResult.fullLength,layoutLength:layout.length,repeatFullCount:browserResult.repeatFull.count,repeatPartCount:browserResult.measurements.find(q=>q.repeatPart)?.repeatPart.count,comparisons}));
    writeFileSync(join(out,'summary.json'),JSON.stringify(summary,null,2));
  }
} finally { await browser.close(); rmSync(tmp,{recursive:true,force:true}); }
console.log('Completed tracks:',summary.length);
if(summary.length!==6)process.exitCode=1;
