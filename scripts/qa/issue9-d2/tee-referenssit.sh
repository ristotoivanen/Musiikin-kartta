#!/bin/sh
# Purkaa testikappaleen raidat referenssi-PCM:ksi (float32, 48 kHz, mono, 150 s) renderöidyn kohdan mittaukseen.
# sh tee-referenssit.sh [työpuu] [ref-kansio]  (oletukset: repon juuri, ./ref). Tarvitsee macOS:n afconvertin.
# Tulos noin 173 Mt; ref/ on .gitignoressa, eikä sitä viedä GitHubiin.
set -e
H=$(cd "$(dirname "$0")" && pwd)
ROOT=${1:-$H/../../..}; REF=${2:-$H/ref}; A=$ROOT/assets/audio/kappaleet
mkdir -p "$REF"; TMP=$(mktemp -d)
for v in normaali akustinen; do for t in saestys kitara laulu; do
  afconvert -f WAVE -d LEF32@48000 -c 1 "$A/yksi-sointu-kaksi-askelta-$v/yksi-sointu-kaksi-askelta-$v-$t.mp3" "$TMP/x.wav"
  off=$(afinfo "$TMP/x.wav" | grep "audio data file offset" | awk '{print $NF}')
  dd if="$TMP/x.wav" of="$REF/$v-$t.f32" bs=4 skip=$((off / 4)) count=$((150 * 48000)) 2>/dev/null
done; done
rm -rf "$TMP"; ls -l "$REF"
