(async()=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const q=s=>document.querySelector(s);
const log=[];window.__solveRound=async(mode)=>{ // mode: "ok" | "octave"
 const n0=window.__evs.filter(e=>e.type=="source-start").length;
 const lis=q("[data-melodia-kuuntele]"); if(lis.textContent.includes("Pysäytä")) lis.click();
 lis.click(); await w(400);
 for(let i=0;i<40&&q("[data-melodia-tehtava]").hidden;i++) await w(250);
 await w(5500);
 const st=window.__evs.filter(e=>e.type=="source-start").slice(n0).map(e=>e.pitch.split(":")[1]);
 const btn=id=>[...document.querySelectorAll("[data-paikka]")].find(b=>b.dataset.paikka===id);
 const info=q("[data-melodia-taso]").textContent;
 let ans=st.slice(); let note="";
 if(mode=="octave"){ // vaihda ensimmäinen sävel oktaaviin, jos pari löytyy
   const tw=ans.map(id=>{const nm=id.replace(/\d/g,""),oc=+id.replace(/\D/g,"");const alt=[nm+(oc+1),nm+(oc-1)].find(x=>btn(x));return alt});
   const k=tw.findIndex(Boolean); if(k>=0){note=ans[k]+"->"+tw[k];ans[k]=tw[k];}
 }
 for(const id of ans){ btn(id).click(); await w(700);}
 await w(300);
 const chk=q("[data-melodia-tarkista]"); const chkVis=!chk.hidden; if(chkVis) chk.click(); await w(500);
 return {info,motif:st.join(">"),ans:ans.join(">"),note,chkVis,fb:q("[data-melodia-palaute]").innerText.slice(0,260),cards:q("[data-melodia-kaari]")?q("[data-melodia-kaari]").innerText.slice(0,500):""};
};
window.__next=async()=>{const n=q("[data-melodia-seuraava]");n.click();await w(500);return q("[data-melodia-taso]").textContent;};
return "ready"})()
