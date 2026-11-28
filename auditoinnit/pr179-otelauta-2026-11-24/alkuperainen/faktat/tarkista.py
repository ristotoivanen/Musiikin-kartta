#!/usr/bin/env python3
"""Riippumaton laskenta: 78 paikkaa, vertailu sovelluksen nimiin ja taajuuksiin (Node-vienti JSON:ina)."""
import json, sys, math
tuning = {'E':40,'A':45,'D':50,'G':55,'B':59,'e':64}   # E2 A2 D3 G3 B3 E4
names = ['C','C♯','D','E♭','E','F','F♯','G','A♭','A','B♭','B']
app = json.load(open(sys.argv[1]))   # {key:[name,pitch,freq]}
bad = []
for s, o in tuning.items():
    for f in range(13):
        m = o + f
        exp = (names[m%12], f"{names[m%12]}{m//12-1}", 440*2**((m-69)/12))
        got = app[f"{s}{f}"]
        if got[0]!=exp[0] or got[1]!=exp[1] or abs(got[2]-exp[2])>1e-9: bad.append((s,f,exp,got))
print('paikkoja', len(app), 'virheitä', len(bad))
# Unisonot naapurikielillä ja G–B
pairs = list('EADGBe')
gb=0;tot=0
for i in range(5):
    a,b=pairs[i],pairs[i+1]; d=tuning[b]-tuning[a]; print(a,b,'väli',d)
for i,a in enumerate(pairs):
    for j in (i-1,i+1):
        if 0<=j<6:
            b=pairs[j]
            for f in range(13):
                t=tuning[a]+f-tuning[b]
                if 0<=t<=12: tot+=1; gb+= {a,b}=={'G','B'}
print('unisonotehtäviä',tot,'joista G–B',gb)
# oktaavit: kuinka monta paikkaa/ pitch
from collections import Counter
c=Counter(tuning[s]+f for s in tuning for f in range(13)); print('eri korkeuksia',len(c),'max paikkaa',max(c.values()))
# Kaikki sävelnimien paikkamäärät kaikilla kielillä ja E/A
for lvl,strs in (('ea','EA'),('kaikki','EADGBe')):
    print(lvl,{n:sum(1 for s in strs for f in range(13) if names[(tuning[s]+f)%12]==n) for n in names})
print('virheet' if bad else 'OK', bad[:3])
