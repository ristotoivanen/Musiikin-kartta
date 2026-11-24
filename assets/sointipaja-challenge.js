// Sointuhaaste #48: selainriippumaton, testattava pelitila. Aika annetaan millisekunteina.
(() => {
  'use strict';
  const times=[30,60,120,180], penalties=[3,4,5];
  function cohorts(levels) {
    const seen=new Set();
    return levels.map(level=>{
      const names=[...new Set(level.rounds.flatMap(round=>round.targets))].filter(name=>!seen.has(name));
      names.forEach(name=>seen.add(name));
      return {id:level.id,title:level.title,names};
    });
  }
  function poolFor(groups,ids){
    return [...new Set(groups.filter(g=>ids.includes(g.id)).flatMap(g=>g.names))];
  }
  function createGame({pool,duration,penalty,now,orderFor,random=Math.random}){
    const names=[...new Set(pool)];
    if(names.length<2||!times.includes(duration)||!penalties.includes(penalty)||!Number.isFinite(now))throw new Error('Virheelliset peliasetukset');
    const deadline=now+duration*1000;
    let deck=[],current=null,lockedUntil=now,score=0,firstTry=0,errors=0,penaltyMs=0;
    let wrong=new Set(),missed={},lastNow=now;
    function next(){
      if(!deck.length)deck=orderFor({targets:names,repeats:1},random,current);
      current=deck.shift();wrong=new Set();
    }
    function state(now){
      if(!Number.isFinite(now))throw new Error('Virheellinen aika');
      lastNow=Math.max(lastNow,now);
      const remainingMs=Math.max(0,deadline-lastNow);
      const lockMs=Math.min(remainingMs,Math.max(0,lockedUntil-lastNow));
      return {phase:remainingMs===0?'finished':lockMs>0?'locked':'playing',remainingMs,lockMs,current,score,firstTry,errors,penaltyMs,wrong:[...wrong],missed:{...missed}};
    }
    function submit(name,now){
      const before=state(now);
      if(before.phase!=='playing'||!names.includes(name)||wrong.has(name))return {accepted:false,state:before};
      if(name===current){
        score++;if(!wrong.size)firstTry++;
        next();
        return {accepted:true,correct:true,state:state(now)};
      }
      errors++;wrong.add(name);missed[current]=(missed[current]||0)+1;
      lockedUntil=Math.min(deadline,lastNow+penalty*1000);
      penaltyMs+=lockedUntil-lastNow;
      return {accepted:true,correct:false,state:state(now)};
    }
    next();
    return {state,submit};
  }
  function recordKey(ids,duration,penalty){
    return 'musiikin-kartta:sointuhaaste:v1:'+JSON.stringify([[...new Set(ids)].sort(),duration,penalty]);
  }
  function readRecord(storage,key){
    try{
      const raw=storage.getItem(key);
      if(raw===null)return null;
      const n=JSON.parse(raw);
      return Number.isSafeInteger(n)&&n>=0?n:null;
    }catch{return null;}
  }
  function saveRecord(storage,key,score){
    const previous=readRecord(storage,key);
    const best=Math.max(previous??0,score);
    try{storage.setItem(key,JSON.stringify(best));return {best,previous,saved:true,newRecord:previous===null||score>previous};}
    catch{return {best,previous,saved:false,newRecord:false};}
  }
  globalThis.SointipajaChallenge={times,penalties,cohorts,poolFor,createGame,recordKey,readRecord,saveRecord};
})();
