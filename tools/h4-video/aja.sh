#!/bin/sh
# H4-videomittauksen analyysi yhdelle tallenteelle. Ks. README.md.
# Käyttö: sh tools/h4-video/aja.sh <video.MOV> <ulostulokansio> <säädin ms> [ääniraidan indeksi, oletus 0]
# Ulostulokansio pidetään repon ulkopuolella (sisältää videosta puretun äänen ja kuvadatan).
set -eu
VIDEO=$1; OUT=$2; SLIDER=$3; TRACK=${4:-0}
HERE=$(cd "$(dirname "$0")" && pwd)
NODE=${NODE:-node}
mkdir -p "$OUT/bin"
# Tiivisteeseen vain tiedoston nimi (ei polkua).
(cd "$(dirname "$VIDEO")" && shasum -a 256 "$(basename "$VIDEO")") | tee "$OUT/sha256.txt"
swift "$HERE/info.swift" "$VIDEO" 2>/dev/null | tee "$OUT/info.txt"
swiftc -O -o "$OUT/bin/frames" "$HERE/frames.swift" 2>/dev/null
swiftc -O -o "$OUT/bin/aani" "$HERE/aani.swift" 2>/dev/null
"$OUT/bin/frames" "$VIDEO" "$OUT"
"$OUT/bin/aani" "$VIDEO" "$TRACK" "$OUT/aani.f32"
"$NODE" "$HERE/sisalto.mts" "$OUT"
"$NODE" "$HERE/valahdys.mjs" "$OUT/ruudukko.csv" "$OUT/valahdykset.json" | tee "$OUT/valahdykset.txt"
"$NODE" "$HERE/paritus.mjs" "$OUT" "$SLIDER" | tee "$OUT/paritus.txt"
"$NODE" "$HERE/lisatarkistus.mjs" "$OUT" | tee "$OUT/lisatarkistus.txt"
"$NODE" "$HERE/raitaero.mjs" "$OUT" | tee "$OUT/raitaero.txt"
"$NODE" "$HERE/taulukko.mjs" "$OUT" "$SLIDER" | tee "$OUT/taulukko.md"
"$NODE" "$HERE/valotus.mjs" "$OUT" | tee "$OUT/valotus.txt"
# Kuva-ajan malli ilman iskuja (P1-tallenteelle ajetaan lisäksi kalibroi.sh).
rm -f "$OUT/iskut.json"
"$NODE" "$HERE/kalibrointi.mjs" "$OUT" "$SLIDER" | tee "$OUT/kuvamalli.txt"
