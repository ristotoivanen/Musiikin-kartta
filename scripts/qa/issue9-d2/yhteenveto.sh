#!/bin/sh
# Jokaisen valmiin skenaarioajon (tulokset/*-loppu.json) ajoitus, lataus ja sointunäytön virhe.
# sh yhteenveto.sh [tuloskansio]  (oletus ./tulokset)
H=$(cd "$(dirname "$0")" && pwd); OUT=${1:-$H/tulokset}
for f in $(ls "$OUT"/*-loppu.json 2>/dev/null | sort); do
  b=$(basename "$f" -loppu.json)
  k=$(grep "^${b#*-} " "$OUT/kuorma.txt" 2>/dev/null | tail -1 | awk '{print $3}')
  printf "%-12s kuorma %-6s " "$b" "$k"
  node "$H/analyysi/d1-analyysi.mjs" "$f" | grep "^Kaikki" | sed -E 's/Kaikki: //; s/ \(n [0-9]+\)//g'
  node -e '
const r=JSON.parse(require("fs").readFileSync(process.argv[1])); const t0=r.events.find(e=>e.event==="skenaario-alku")?.ms;
const log=[...(r.d1Log??[]),...(r.d1?.events??[])]; const done=log.filter(e=>e.kind==="ladattu").map(e=>e.ms).sort((a,b)=>b-a)[0];
const c=k=>log.filter(e=>e.kind===k).length;
console.log("             lataus valmis "+(done&&t0?((done-t0)/1000).toFixed(1)+" s":"?")+", odotukset "+c("odottaa-latausta")+", alivuodot "+c("alivuoto")+", virheet "+c("virhe")+", jumit "+r.events.filter(e=>e.event==="jumi").length);' "$f"
  node "$H/analyysi/naytto-tarkistus.mjs" "$f" | sed 's/^/             näyttö: /'
done
