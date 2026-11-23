#!/bin/sh
# Simulaattorilaitteen WebKit-prosessien muisti (footprint) sekunnin välein, kunnes pysäytetään:
# sh muisti.sh <laite-UDID> <ulos.jsonl>
L=$(ps -axo pid,command | grep launchd_sim | grep "$1" | grep -v grep | awk '{print $1}' | head -1)
while true; do
  ps -axo pid,ppid,rss,command | awk -v p="$L" '$2==p {print $1, $3, $NF}' | while read pid rss enc; do
    name=$(echo "$enc" | base64 -d 2>/dev/null | grep -o 'com.apple.WebKit.[A-Za-z]*')
    [ -z "$name" ] && continue
    fp=$(footprint -p "$pid" 2>/dev/null | sed -n 's/.*Footprint: \([0-9.]* [KMG]B\).*/\1/p' | head -1)
    echo "{\"ms\":$(($(date +%s)*1000)),\"pid\":$pid,\"prosessi\":\"$name\",\"rssKt\":$rss,\"footprint\":\"$fp\"}"
  done >> "$2"
  sleep 1
done
