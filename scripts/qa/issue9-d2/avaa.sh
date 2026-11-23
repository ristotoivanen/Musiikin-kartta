#!/bin/sh
# Avaa mittausskenaarion simulaattorin tuoreeseen Safariin ja kirjaa koneen kuorman.
# sh avaa.sh <portti> <skenaario> <ajo> [normaali|akustinen] [lisäparametrit, esim. "&viite=pois"]
# Laite: ympäristömuuttuja SIM_UDID (oletus: ensimmäinen käynnissä oleva simulaattori).
# Ensimmäinen Soita pitää napauttaa simulaattorissa itse: iOS ei käynnistä AudioContextia ohjelmallisesta painalluksesta.
set -e
[ $# -ge 3 ] || { sed -n '2,5p' "$0"; exit 1; }
U=${SIM_UDID:-$(xcrun simctl list devices booted | grep -Eo '[0-9A-F-]{36}' | head -1)}
[ -n "$U" ] || { echo "Ei käynnissä olevaa simulaattoria (SIM_UDID)"; exit 1; }
OUT=$(dirname "$0")/tulokset; mkdir -p "$OUT"
xcrun simctl terminate "$U" com.apple.mobilesafari 2>/dev/null || true; sleep 1
echo "$3 $(date +%T) $(uptime | sed 's/.*averages: //')" >> "$OUT/kuorma.txt"
xcrun simctl openurl "$U" "http://127.0.0.1:$1/kitaraharjoittelija.html?kappale=yksi-sointu-kaksi-askelta-${4:-normaali}&skenaario=$2&valjas=1&ajo=$3$5"
echo "avattu $3 ($2) laitteella $U: napauta Soita"
