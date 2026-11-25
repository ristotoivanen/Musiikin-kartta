(()=>{
const grips={"C":[0,1,0,2,3,null],"G":[3,0,0,0,2,3],"D":[2,3,2,0,null,null],"Em":[0,0,0,2,2,0],"Am":[0,1,2,2,0,null],"E":[0,0,1,2,2,0],"A":[0,2,2,2,0,null],"Dm":[1,3,2,0,null,null],"D7":[2,1,2,0,null,null],"A7":[0,2,0,2,0,null],"E7":[0,0,1,0,2,0],"B7":[2,0,2,1,2,null],"C7":[0,1,3,2,3,null],"G7":[1,0,0,0,2,3],"Am7":[0,1,0,2,0,null],"Em7":[0,0,0,0,2,0],"Dm7":[1,1,2,0,null,null],"Cmaj7":[0,0,0,2,3,null],"Fmaj7":[0,1,2,3,null,null],"Dsus2":[0,3,2,0,null,null],"Dsus4":[3,3,2,0,null,null],"Asus2":[0,0,2,2,0,null],"Asus4":[0,3,2,2,0,null],"Cadd9":[3,3,0,2,3,null]};
const send=o=>{try{fetch('/__b',{method:'POST',body:JSON.stringify(o)})}catch(e){}};
const C=r=>({x:Math.round((r.left+r.right)/2*10)/10,y:Math.round((r.top+r.bottom)/2*10)/10});
let last='';
function snap(){
  const prog=document.querySelector('#progress')?.textContent||'';
  const lt=document.querySelector('#level-title')?.textContent||'',rc=document.querySelector('#round-context')?.textContent||'';
  const key=lt+'|'+rc+'|'+prog; if(key===last||!prog)return; last=key;
  const g=[null,null,null,null,null,null];
  document.querySelectorAll('#board .mark').forEach(m=>{g[+m.dataset.string]=+m.dataset.fret;});
  const chord=Object.keys(grips).find(k=>JSON.stringify(grips[k])===JSON.stringify(g));
  const li=+(lt.match(/Taso (\d)/)||[0,1])[1]-1;let ri=+(rc.match(/Kierros (\d)/)||[0,1])[1]-1;if(/^Vapaa/.test(rc)){ri=SointipajaLevelModel.levels[li].rounds.findIndex(r=>rc.endsWith(r.title));}
  const opts=SointipajaLevelModel.levels[li].rounds[ri].options;
  const grouped=li>=1;
  const root=chord&&chord[0];
  const rb=document.querySelector('#roots button[data-root="'+root+'"]');
  const out={t:Date.now(),key,chord,root,vh:innerHeight,sy:Math.round(scrollY),grouped};
  if(grouped&&rb){
    const real=document.getElementById('answers');
    const clone=document.createElement('div');clone.id='answers';clone.className='chord-answers';
    const names=opts.filter(n=>n[0]===root);
    names.forEach(n=>{const b=document.createElement('button');b.type='button';b.textContent=n;clone.append(b);});
    real.parentNode.insertBefore(clone,real);
    const bs=[...clone.children].map(b=>({n:b.textContent,r:b.getBoundingClientRect()}));
    out.chordBtn=C(bs.find(b=>b.n===chord).r);
    out.minW=Math.min(...bs.map(b=>b.r.width));out.minH=Math.min(...bs.map(b=>b.r.height));
    let ov=false;for(let i=0;i<bs.length;i++)for(let j=i+1;j<bs.length;j++){const a=bs[i].r,b=bs[j].r;if(a.left<b.right&&b.left<a.right&&a.top<b.bottom&&b.top<a.bottom)ov=true;}
    out.overlap=ov;out.rows=new Set(bs.map(b=>Math.round(b.r.top))).size;out.chordBottom=Math.max(...bs.map(b=>b.r.bottom));
    clone.remove();
    out.rootBtn=C(rb.getBoundingClientRect());out.rootsTop=Math.round(rb.getBoundingClientRect().top*10)/10;
  } else if(!grouped){
    out.chordBtn=null;
  }
  const nx=document.getElementById('next').getBoundingClientRect();out.next=C(nx);out.nextBottom=Math.round(nx.bottom);
  const neck=document.querySelector('#board .chord-neck');out.neckTop=neck?Math.round(neck.getBoundingClientRect().top*10)/10:null;
  send(out);
}
new MutationObserver(()=>setTimeout(snap,450)).observe(document.body,{subtree:true,childList:true,characterData:true});
setInterval(snap,700);
})();
