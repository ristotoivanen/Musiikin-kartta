const path=require('path');const {chromium,devices}=require(path.join(process.argv[2],'node_modules','playwright'));const out=process.argv[3];
(async()=>{const b=await chromium.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',args:['--mute-audio','--disable-audio-output']});
const ctx=await b.newContext({...devices['iPhone 13']});const p=await ctx.newPage();
await p.goto('http://127.0.0.1:8765/oppi/soinnut/yksi-savel-muuttaa-sointua.html');
await p.evaluate(()=>{const v=[0.9,0.1];Math.random=()=>v.shift()??0;});
const sec=p.locator('.sointuharjoitus');
const shot=async n=>sec.screenshot({path:path.join(out,n)});
await shot('1-vertailu.png');
await sec.getByRole('button',{name:'Arvaa'}).click();
await shot('2-arvaus.png');
await sec.getByRole('group',{name:'Vastaa'}).getByRole('button',{name:'Sointu 1'}).click();
await shot('3-vastattu-nykyinen.png');
// Ehdotus (vain tässä kuvassa): vastauksen jälkeen nimetyt E/Em palaavat Sointu 1/2 -kuuntelun tilalle.
await p.evaluate(()=>{const s=document.querySelector('.sointuharjoitus');s.querySelector('[data-suora-kuuntelu]').hidden=false;s.querySelector('[data-arvaus-kuuntelu]').hidden=true;});
await shot('4-vastattu-ehdotus-nimetyt-palaavat.png');
await b.close();})().catch(e=>{console.error(e);process.exit(1)});
