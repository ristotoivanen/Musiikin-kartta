#!/bin/sh
# Valmiiden skenaarioajojen (tuloskansio/*-loppu.json) ajoitus, lataus ja sointunäytön virhe.
# sh yhteenveto.sh [tuloskansio] [skenaario]   (oletukset: ./tulokset, d1)
# Muiden skenaarioiden raportit ohitetaan ja niistä kerrotaan. Poistumiskoodi on 0 vain, jos valitun skenaarion
# raportteja löytyi ja jokaisen analyysi onnistui; muuten ensimmäisen epäonnistuneen analyysin koodi
# (analyysi/yhteinen.mjs: 1 poikkeama, 2 rikkinäinen syöte, 3 liian vähän mittauksia) tai 2/3 kansiolle.
# Poistumiskoodi 0 ei tarkoita hyväksymisrajojen täyttymistä: vertaa lukuja README:n rajoihin.
set -u
H=$(cd "$(dirname "$0")" && pwd); OUT=${1:-$H/tulokset}; SCENARIO=${2:-d1}
[ -d "$OUT" ] || { echo "VIRHE: tuloskansiota ei ole: $OUT" >&2; exit 2; }
TMP=$(mktemp -d); trap 'rm -rf "$TMP"' EXIT
status=0; found=0
note() { [ "$status" -ne 0 ] || status=$1; }
for f in "$OUT"/*-loppu.json; do
  [ -e "$f" ] || break
  b=$(basename "$f" -loppu.json)
  node "$H/analyysi/lataus-yhteenveto.mjs" "$f" "$SCENARIO" > "$TMP/lataus" 2> "$TMP/virhe"; rc=$?
  if [ $rc -ne 0 ]; then found=$((found + 1)); printf '%-12s ' "$b"; cat "$TMP/virhe"; note $rc; continue; fi
  if grep -q '^OHITETTU' "$TMP/lataus"; then printf '%-12s %s\n' "$b" "$(cat "$TMP/lataus")"; continue; fi
  found=$((found + 1))
  k=$(grep "^${b#*-} " "$OUT/kuorma.txt" 2>/dev/null | tail -1 | awk '{print $3}')
  node "$H/analyysi/d1-analyysi.mjs" "$f" > "$TMP/d1" 2> "$TMP/virhe"; rc=$?
  if [ $rc -ne 0 ]; then printf '%-12s ' "$b"; cat "$TMP/virhe"; note $rc; continue; fi
  line=$(grep '^Kaikki' "$TMP/d1" | sed -E 's/Kaikki: //; s/ \(n [0-9]+\)//g')
  if [ -z "$line" ]; then printf '%-12s VIRHE: Kaikki-rivi puuttuu analyysista\n' "$b"; note 2; continue; fi
  printf '%-12s kuorma %-6s %s\n' "$b" "${k:-?}" "$line"
  sed 's/^/             /' "$TMP/lataus"
  node "$H/analyysi/naytto-tarkistus.mjs" "$f" > "$TMP/naytto" 2> "$TMP/virhe"; rc=$?
  if [ $rc -ne 0 ]; then printf '             näyttö: '; cat "$TMP/virhe"; note $rc; continue; fi
  sed 's/^/             näyttö: /' "$TMP/naytto"
done
if [ "$found" -eq 0 ]; then echo "EI MITTAUKSIA: kansiossa $OUT ei ole skenaarion $SCENARIO loppuraportteja" >&2; exit 3; fi
exit $status
