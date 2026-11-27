(async()=>{const q=s=>document.querySelector(s),w=ms=>new Promise(r=>setTimeout(r,ms));const out={};
const pick=window.__pick||0; // 0 or 1
q("[data-melodia-seuraava]").click(); await w(400);
out.infoNew=q("[data-melodia-taso]").textContent;
[...document.querySelectorAll("[data-loppu]")][pick].click(); await w(300);
q("[data-melodia-tarkista]").click(); await w(300);
out.fb=q("[data-melodia-palaute]").innerText; out.infoAfter=q("[data-melodia-taso]").textContent;
out.labels=[...document.querySelectorAll("[data-loppu]")].map(b=>b.textContent.trim().replace(/\s+/g," "));
// uudelleenkuuntelu
q("[data-melodia-kuuntele]").click(); await w(300);
out.infoReplay=q("[data-melodia-taso]").textContent;
return JSON.stringify(out)})()
