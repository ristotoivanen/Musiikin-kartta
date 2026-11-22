# Vaihe A: aikaperustan tavoitteet (määritelty ennen mittauksia, 22.11.2026)

Tavoitteet on kirjattu ennen yhtään vaiheen A mittausta, eikä niitä muuteta tulosten perusteella.
Mittaus tehdään iOS-simulaattorissa Web Audio -graafissa raidan analysaattorista (ei kaiuttimesta) ristikorrelaatiolla
MP3:sta purettua referenssiä vasten. Luotettava mittaus: score ≥ 0,9 ja score − second ≥ 0,1.

| tunnus | tavoite | raja |
|---|---|---|
| A-T1 | Raitojen keskinäinen tahti (kuuluva kitara − säestys, laulu − säestys) | alustava ±25 ms (issue #9, ennallaan) |
| A-T2 | Aikajanan arvo − renderöity kohta, jokainen luotettava mittaus 1,0–6 s käynnistyksestä | \|virhe\| ≤ 30 ms |
| A-T3 | Sointunäytön vaihto suhteessa kuuluvaan iskuun, jokainen mitattu vaihto | −80…+40 ms (negatiivinen = näyttö ennen ääntä) |
| A-T4 | Jatkokohta: kuultu kohta jatkon alussa − kuultu kohta tauon hetkellä | −40…+40 ms |

Tilanteet, jotka mitataan erikseen ja joissa kaikkien tavoitteiden pitää täyttyä:

1. kylmäkäynnistys
2. tauko ja jatko
3. nopea jatko (tauko 0,3 s)
4. toistuva jatko (vähintään kolme peräkkäistä)
5. kelaus soiton aikana

**A-T3:n peruste.** ITU-R BT.1359 -suosituksen havaittavuusrajat ovat: ääni kuvaa edellä 45 ms, ääni kuvaa jäljessä
125 ms. Harjoittelussa sointunäytön kuuluu ennemmin ennakoida kuin myöhästyä, joten raja on −80 ms ennen
ja +40 ms jälkeen.

**Ulostuloviive.** Simulaattorissa `outputLatency` ja `getOutputTimestamp` raportoidaan erikseen. Tavoitteet koskevat
graafissa mitattua ääntä. Laitteen kaiutin- tai kuulokeviive lisätään vasta laitemittauksessa.

**Kovakoodattu korjausarvo.** Aikajanassa ei saa käyttää kiinteää korjausvakiota, ellei sen pysyvyyttä ole osoitettu
kaikissa tilanteissa ja molemmissa versioissa.
