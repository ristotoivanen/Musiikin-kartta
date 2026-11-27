(async()=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const q=s=>document.querySelector(s);
const btn=id=>[...document.querySelectorAll("[data-paikka]")].find(b=>b.dataset.paikka===id);
const res=[];
for(const iv of [20,60,80,100,150]){
 const before=+q("[data-etsi-vastaus]").dataset.kuultu;
 const ids=["B3","C4","D4","G3"]; const ss0=window.__evs.filter(e=>e.type=="source-start").length;
 for(let i=0;i<ids.length;i++){btn(ids[i]).click(); if(i<ids.length-1) await w(iv);}
 await w(1500);
 const after=+q("[data-etsi-vastaus]").dataset.kuultu;
 res.push({iv,presses:ids.length,confirmed:after-before,starts:window.__evs.filter(e=>e.type=="source-start").length-ss0,chain:[...document.querySelectorAll("[data-etsi-vastaus] li")].map(l=>l.textContent).join("")});
}
return JSON.stringify(res)})()
