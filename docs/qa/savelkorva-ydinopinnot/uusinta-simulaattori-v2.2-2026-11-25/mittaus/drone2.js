(async()=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const q=s=>document.querySelector(s);
const starts=()=>window.__evs.filter(e=>e.type=="source-start").length;
const rec=async(label,fn)=>{const n=starts();fn();await w(9000);const ev=window.__evs.filter(e=>e.type=="source-start").slice(n).map(e=>e.pitch);return {label,bass:ev.filter(p=>/:G2$/.test(p)).length,n:ev.length,pitches:[...new Set(ev)].join(",")}};
const out=[];window.__dr=out;
const ans=()=>[...document.querySelectorAll("[data-loppu]")];
for(let t=1;t<=3;t++){
 if(t>1){q("[data-melodia-seuraava]").click();await w(600);}
 out.push({task:t,info:q("[data-melodia-taso]").textContent});
 out.push(await rec("t"+t+" kuuntele molemmat (ennen tarkistusta)",()=>q("[data-melodia-kuuntele]").click()));
 await w(300);
 out.push(await rec("t"+t+" Loppu 1 (ennen tarkistusta)",()=>ans()[0].click()));
 q("[data-melodia-tarkista]").click();await w(400);
 out.push(await rec("t"+t+" kuuntele molemmat (tarkistuksen JÄLKEEN)",()=>q("[data-melodia-kuuntele]").click()));
 out.push(await rec("t"+t+" Loppu 2 (tarkistuksen JÄLKEEN)",()=>ans()[1].click()));
 out.push({task:t,infoAfter:q("[data-melodia-taso]").textContent});
}
window.__drdone=1;return "x"})()
