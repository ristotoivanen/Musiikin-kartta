// Sointipaja #48: taso- ja kierrosmalli. Ei käyttöliittymä- eikä ääniriippuvuutta.
(() => {
  'use strict';
  const basic = ['C','G','D','Em'];
  const added = ['Am','E','A'];
  const all = [...basic,...added];
  const newChords = ['Dm','D7','A7','E7'];
  const cumulative = [...all,...newChords];
  const levels = [{
    id: 'open-1', title: 'Seitsemän tavallista avosointua',
    rounds: [
      {id:'first', title:'Ensimmäiset soinnut', targets:basic, options:basic, repeats:1},
      {id:'added', title:'Kolme uutta sointua', targets:added, options:all, repeats:2},
      {id:'review', title:'Kaikki yhdessä', targets:all, options:all, repeats:2},
    ],
  }, {
    id:'open-2', title:'Molli ja seiskasoinnut',
    rounds:[
      {id:'d-family', title:'D, Dm ja D7', targets:['D','Dm','D7'], options:['D','Dm','D7'], repeats:2},
      {id:'ae-family', title:'A7 ja E7 sekä tutut vertailusoinnut', targets:['A','A7','E','E7'], options:['A','Am','A7','E','Em','E7'], repeats:2},
      {id:'cumulative', title:'Kaikki yksitoista sointua', targets:cumulative, options:cumulative, repeats:1},
    ],
  }];
  function orderFor(round, random=Math.random, previous=null) {
    // Sekoita täysi monijoukko. Valitse vain seuraavia sallittuja kohteita,
    // joilla loputkin voidaan järjestää ilman välitöntä toistoa.
    const remaining = new Map(round.targets.map(name=>[name,round.repeats]));
    const result=[];
    let left=round.targets.length*round.repeats;
    while(left){
      const candidates=[...remaining].filter(([name,n])=>{
        if(!n||name===previous)return false;
        // Valinnan jälkeen valittua ei saa käyttää ensimmäisenä.
        return [...remaining].every(([other,m])=>other===name ? m-1<=Math.floor((left-1)/2) : m<=Math.ceil((left-1)/2));
      });
      if(!candidates.length)throw new Error('Kierroksen tehtäviä ei voi järjestää ilman peräkkäisiä toistoja');
      const [name,n]=candidates[Math.floor(random()*candidates.length)];
      result.push(name);remaining.set(name,n-1);left--;previous=name;
    }
    return result;
  }
  globalThis.SointipajaLevelModel={levels,orderFor};
})();
