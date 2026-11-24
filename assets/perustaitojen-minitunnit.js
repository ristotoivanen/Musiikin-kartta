// Integraation lähtö: hyväksytty #186 v0.17 / 4b20e6b.
(()=>{
'use strict';
const root=document.getElementById('perustaitojen-minitunnit');
if(!root)return;
const $=id=>document.getElementById(id);
const beat=60/84,bar=4*beat;
const clapPatterns=[
{beats:[1,2,3,4],name:'kaikilla iskuilla',short:'kaikki iskut'},
{beats:[1,3],name:'iskuilla 1 ja 3',short:'1 ja 3'},
{beats:[2,4],name:'iskuilla 2 ja 4',short:'2 ja 4'},
{beats:[1],name:'ykkösellä',short:'vain 1'}
];
// Taputus vain neljäsosaiskuilla; ja-kohdat näyttävät kompin ylösvetojen paikat.
const subdivisionPatterns=clapPatterns.map(pattern=>({...pattern,beats:pattern.beats.map(n=>(n-1)*2)}));
const selections={pulse:{index:0,pending:null,at:null},tap:{index:0,pending:null,at:null}};
let lastClapKey=null;
function guitarMode(){return lesson==='strum'&&stage==='guitar';}
function clapState(){return lesson==='strum'?selections.tap:selections.pulse;}
function patterns(){return lesson==='strum'?subdivisionPatterns:clapPatterns;}
function hasClap(){return true;}
const idle='84 BPM · Jatkuu, kunnes pysäytät.';
const asset='../../assets/audio/osa-1/pulssi-ja-komppi.wav';
// The same two-bar quarter-note click supports both tapping and guitar practice.
const pulseCue={start:0,end:2*bar};
let lesson='pulse',stage='tap',phase='idle',generation=0,context=null,decoded=null,loading=null,source=null,frame=0,started=0,range=null;
const pressed=(selector,key,value)=>root.querySelectorAll(selector).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset[key]===value)));
function paintClaps(elapsed){
const selection=clapState(),options=patterns(),subdiv=lesson==='strum',guitar=guitarMode();
const barIndex=elapsed>=0?Math.floor((elapsed+0.000001)/bar):-1;
if(selection.pending!==null&&barIndex>=selection.at){
selection.index=selection.pending;selection.pending=null;selection.at=null;
}
const pattern=options[selection.index],key=String(subdiv)+':'+String(guitar)+':'+selection.index+':'+selection.pending;
if(key===lastClapKey)return;
lastClapKey=key;
const current=(guitar?'Soita ':'Taputa ')+pattern.name;
if($('clap-current').textContent!==current)$('clap-current').textContent=current;
$('clap-next').textContent=selection.pending===null?'Valitse rytmikuvio nuolilla.':'Seuraavassa tahdissa: '+options[selection.pending].short;
$('clap-guide').dataset.pattern=String(selection.index);
$('clap-guide').dataset.pending=selection.pending===null?'':String(selection.pending);
$('clap-position').textContent=String(selection.index+1)+' / '+String(options.length);
$('clap-all').setAttribute('aria-pressed',String((selection.pending===null?selection.index:selection.pending)===0));
for(const [i,cell] of Array.from($('beats').children).entries()){
if(subdiv){
for(const [j,part] of Array.from(cell.querySelectorAll('.half')).entries()){
const clap=pattern.beats.includes(i*2+j);
part.classList.toggle('tap-target',clap);
part.querySelector('.clap-symbol').textContent=clap?'●':'·';
part.querySelector('.tap-label').textContent=guitar?(clap?'Soita':'Ei osumaa'):(clap?'Taputa':'');
}
}else{
const clap=pattern.beats.includes(i+1);
cell.classList.toggle('clap',clap);
cell.querySelector('small').textContent=clap?'Taputa':'Vain jalka';
}
}
}
function selectClap(direction,direct=null){
if(!hasClap())return;
const elapsed=phase==='playing'&&context?context.currentTime-started:-1;
if(elapsed>=0)paintClaps(elapsed);
const selection=clapState(),options=patterns(),base=selection.pending===null?selection.index:selection.pending;
const target=direct===null?(base+direction+options.length)%options.length:direct;
if(elapsed>=0){
selection.pending=target===selection.index?null:target;
selection.at=selection.pending===null?null:Math.floor((elapsed+0.000001)/bar)+1;
}else{
selection.index=target;selection.pending=null;selection.at=null;
}
paintClaps(elapsed);
}
function paint(elapsed){
const active=elapsed>=0,half=active?Math.floor((elapsed+0.000001)/(beat/2)):-1,idx=active?Math.floor(half/2)%4:-1;
const strum=lesson==='strum';
if(hasClap())paintClaps(elapsed);
for(const [i,cell] of Array.from($('beats').children).entries()){
cell.classList.toggle('on',i===idx);
if(strum){const parts=cell.querySelectorAll('.sub .half');for(const [j,part] of Array.from(parts).entries()){const now=i===idx&&half%2===j;part.classList.toggle('now',now);}cell.querySelector('.mark').textContent=i===idx?'Nyt':'';}else{cell.querySelector('.mark').textContent=i===idx?'Nyt':'';}
}
}
function setPhase(value,message){
phase=value;
$('play').textContent=value==='playing'||value==='loading'?'■ Pysäytä':'▶ Aloita';
$('status').textContent=message;
$('exercise').dataset.state=value;
$('recovery').hidden=value!=='error';
}
function stop(message=idle){
generation++;cancelAnimationFrame(frame);
if(hasClap()){const selection=clapState();if(selection.pending!==null){selection.index=selection.pending;selection.pending=null;selection.at=null;}}
if(source){source.onended=null;try{source.stop();}catch{}source.disconnect();source=null;}
setPhase('idle',message);paint(-1);
}
function render(){
const strum=lesson==='strum',guitar=guitarMode();
$('exercise').dataset.lesson=lesson;$('exercise').dataset.stage=stage;
pressed('[data-lesson]','lesson',lesson);pressed('[data-stage]','stage',stage);
$('exercise-title').textContent=strum?'Pulssista komppiin':'Löydä pulssi ja ykkönen';
$('stages').hidden=!strum;$('brushing').hidden=!guitar;$('strum-explanation').hidden=!strum;$('strum-foot').hidden=!strum;
$('clap-all').textContent=strum?'Peruspulssi':'Kaikki iskut';
$('clap-prev').setAttribute('aria-label',guitar?'Edellinen soittokuvio':'Edellinen taputuskuvio');
$('clap-forward').setAttribute('aria-label',guitar?'Seuraava soittokuvio':'Seuraava taputuskuvio');
$('strum-hand').textContent=guitar?'Käsi alas numeroilla ja ylös ja-tavuilla. Soita vain merkityillä numeroilla, muulloin liikuta kättä kieliin osumatta.':'Taputa vain merkityillä numeroilla. Ja-tavuilla ei taputeta.';
if(!strum){
$('instruction').textContent='Naputa jalalla jokainen isku ja laske neljään. Taputa käsillä vain merkityillä iskuilla. Vaihda taputuskuviota nuolilla, kun olet valmis. Kaikki iskut -painikkeella palaat perusrytmiin.';
$('hint').textContent='Pidä jalalla tasainen pulssi, vaikka taputus vaihtuu.';
$('pattern-text').textContent='Ykkönen aloittaa uuden tahdin. Sen ei tarvitse olla voimakkain isku.';
}else if(guitar){
$('instruction').textContent='Ota kitara. Vaimenna kielet kevyesti tai valitse tuttu sointu. Soita sama rytmi, jota äsken taputit.';
$('hint').textContent='Laske 1 ja 2 ja 3 ja 4 ja. Pidä komppikäsi liikkeessä koko ajan.';
$('pattern-text').textContent='Ei osumaa tarkoittaa, että käsi jatkaa liikettä kieliin osumatta. Voit aloittaa vaimennetuilla kielillä ja kokeilla sitten omaa sointua.';
}else{
$('instruction').textContent='Pidä sama jalalla naputettava pulssi kuin ensimmäisessä harjoituksessa. Laske ääneen 1 ja 2 ja 3 ja 4 ja.';
$('hint').textContent='Taputa käsillä valittua rytmiä. Vaihda kuviota nuolilla, kun olet valmis.';
$('pattern-text').textContent='Ja on iskun puolivälissä. Kitaralla siinä on ylösvetovuoro, mutta tässä taputetaan vain numeroilla.';
}
$('beats').replaceChildren();lastClapKey=null;
for(let i=0;i<4;i++){
const cell=document.createElement('div');cell.className='beat';
const halfMarkup=(label,direction)=>'<div class="half"><b>'+label+'</b>'+(guitar?'<span class="direction">'+direction+'</span>':'')+'<span class="clap-symbol"></span><small class="tap-label"></small></div>';
cell.innerHTML=strum?'<div class="sub">'+halfMarkup(String(i+1),'↓')+halfMarkup('ja','↑')+'</div><div class="mark"></div>':'<b>'+String(i+1)+'</b><small>Taputa</small><div class="mark"></div>';
$('beats').append(cell);
}
paint(phase==='playing'&&context?context.currentTime-started:-1);
}
async function getBuffer(ctx){
if(decoded)return decoded;
if(!loading)loading=(async()=>{
const response=await fetch(asset);
if(!response.ok)throw new Error('Äänite ei latautunut');
const buffer=await ctx.decodeAudioData(await response.arrayBuffer());
if(buffer.duration<pulseCue.end)throw new Error('Äänite on liian lyhyt');
decoded=buffer;return buffer;
})().finally(()=>{loading=null;});
return loading;
}
function tick(){
if(phase!=='playing'||!context)return;
const elapsed=context.currentTime-started;
paint(elapsed>=0?elapsed:-1);frame=requestAnimationFrame(tick);
}
async function start(){
const id=++generation;
setPhase('loading','Ladataan äänitettä…');
try{
const C=window.AudioContext||window.webkitAudioContext;if(!C)throw new Error('Web Audio ei ole käytettävissä');
if(!context){
context=new C();
context.addEventListener('statechange',()=>{if(phase==='playing'&&context.state!=='running')stop('Toisto keskeytyi. Aloita uudelleen.');});
}
await context.resume();if(id!==generation)return;
const buffer=await getBuffer(context);if(id!==generation)return;
if(context.state!=='running')throw new Error('Äänentoisto ei käynnistynyt');
const cue=pulseCue,sr=buffer.sampleRate;
range={start:Math.round(cue.start*sr)/sr,end:Math.round(cue.end*sr)/sr};
source=context.createBufferSource();source.buffer=buffer;source.loop=true;source.loopStart=range.start;source.loopEnd=range.end;
source.connect(context.destination);
started=context.currentTime+0.05;
source.start(started,range.start);
setPhase('playing','84 BPM · Soi jatkuvasti.');tick();
}catch(e){if(id!==generation)return;stop();setPhase('error','Ääni ei käynnistynyt. Kokeile uudelleen.');}
}
for(const b of root.querySelectorAll('[data-lesson]'))b.addEventListener('click',()=>{if(lesson===b.dataset.lesson)return;stop();lesson=b.dataset.lesson;stage='tap';render();});
for(const b of root.querySelectorAll('[data-stage]'))b.addEventListener('click',()=>{if(stage===b.dataset.stage)return;stage=b.dataset.stage;render();});
$('clap-prev').addEventListener('click',()=>selectClap(-1));
$('clap-forward').addEventListener('click',()=>selectClap(1));
$('clap-all').addEventListener('click',()=>selectClap(0,0));
$('play').addEventListener('click',()=>{if(phase==='playing'||phase==='loading')stop();else void start();});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop('Pysäytetty. Aloita uudelleen, kun olet valmis.');});
window.addEventListener('pagehide',()=>stop());
root.addEventListener('toggle',()=>{if(!root.open){stop();root.querySelectorAll('audio').forEach(a=>a.pause());}});
$('lessons').hidden=false;$('exercise').hidden=false;render();setPhase('idle',idle);
$('minitunti-fallback').hidden=true;
})();
