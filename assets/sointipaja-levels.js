// Sointipaja #48: taso- ja kierrosmalli. Ei käyttöliittymä- eikä ääniriippuvuutta.
(() => {
  'use strict';
  const basic = ['C','G','D','Em'];
  const added = ['Am','E','A'];
  const all = [...basic,...added];
  const newChords = ['Dm','D7','A7','E7'];
  const cumulative = [...all,...newChords];
  const sevenths=['B7','C7','G7','Am7','Em7','Dm7'];
  const through3=[...cumulative,...sevenths];
  const colours=['Cmaj7','Fmaj7','Dsus2','Dsus4','Asus2','Asus4','Cadd9'];
  const through4=[...through3,...colours];
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
      {id:'new-chords', title:'Neljä uutta sointua', targets:newChords, options:['D','Dm','D7','A','A7','E','E7'], repeats:2},
      {id:'mixed', title:'Uudet ja tutut soinnut', targets:cumulative, options:cumulative, repeats:1},
      {id:'cumulative', title:'Kaikki yksitoista sointua', targets:cumulative, options:cumulative, repeats:1},
    ],
  },{
    id:'open-3', title:'Duuri- ja molliseiskat',
    rounds:[
      {id:'new-sevenths',title:'Kuusi uutta seiskasointua',targets:sevenths,options:['B7','C','C7','G','G7','Am','Am7','Em','Em7','Dm','Dm7'],repeats:1},
      {id:'seventh-review',title:'Seiskojen erot',targets:[...sevenths,'C','G','Am','Em','Dm','E7'],options:through3,repeats:1},
      {id:'cumulative',title:'Kaikki 17 sointua',targets:through3,options:through3,repeats:1},
    ],
  },{
    id:'open-4', title:'Maj7, sus ja add9',
    rounds:[
      {id:'new-colours',title:'Seitsemän uutta sointua',targets:colours,options:['C','C7','Cmaj7','Cadd9','Fmaj7','D','Dm','Dsus2','Dsus4','A','Am','Asus2','Asus4'],repeats:1},
      {id:'colour-review',title:'Sointujen erot',targets:[...colours,'C','C7','D','Dm','A','Am','G'],options:through4,repeats:1},
      {id:'cumulative',title:'Kaikki 24 sointua',targets:through4,options:through4,repeats:1},
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
