#!/bin/sh
# P1: kalibrointi-iskut ja iPhonen H4-termi samasta tallenteesta. Ks. README.md ja
# harjoittelija/kaksiraitatesti/H4-P1-KALIBROINTIOHJE.md.
# Aja ensin aja.sh samaan ulostulokansioon. ROI (iskukohta) valitaan frames-ohjelman PNG-kuvasta:
#   "$OUT/bin/frames" <video> <kansio> <aika s>  → kuva-<aika>.png (puolikas koko; ROI = PNG-koordinaatit × 2)
# Käyttö: sh tools/h4-video/kalibroi.sh <video.MOV> <ulostulokansio> <säädin ms> <x> <y> <leveys> <korkeus> <suunta> [kosketuskohta px]
#   suunta = iskijän liike ROI:ssa: oikea | vasen | alas | ylos
set -eu
VIDEO=$1; OUT=$2; SLIDER=$3; X=$4; Y=$5; W=$6; H=$7; SUUNTA=$8; KOSKETUS=${9:-}
HERE=$(cd "$(dirname "$0")" && pwd)
NODE=${NODE:-node}
swiftc -O -o "$OUT/bin/roi" "$HERE/roi.swift" 2>/dev/null
"$OUT/bin/roi" "$VIDEO" "$OUT" "$X" "$Y" "$W" "$H" 2 | tee "$OUT/roi.txt"
"$NODE" "$HERE/isku.mjs" "$OUT" "$SUUNTA" $KOSKETUS | tee "$OUT/iskut.txt"
"$NODE" "$HERE/kalibrointi.mjs" "$OUT" "$SLIDER" | tee "$OUT/kalibrointi.txt"
