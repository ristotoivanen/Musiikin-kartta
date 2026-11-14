# Riffikaiku 0.3 – oikean kitaran hyväksyntäkokeet

**Tila: EI TEHTY versioilla 0.2–0.3.** Ensimmäinen käyttäjäkoe tehtiin versiolla 0.1 (sähkökitara,
MacBook Pron mikrofoni ja Scarlett Solo 4th Gen); sen havainnot johtivat 0.2:n korjauksiin.
Rajat 9/10 ja 0/10 ovat ehdotettuja pilotin hyväksyntärajoja, eivät mitattuja tuloksia.

## Mitä on testattu ja miten

| Testityyppi | Mitä | Missä |
|---|---|---|
| Automaattinen, ei ääntä | Pallukat, muistivihjeet, tasot, tallennus, tilakone, reititys, viritinlaskenta, näppäilytunnistimen päätökset | `tests/riffikaiku-sequence`, `-game`, `-pluck-tuner` |
| Synteettinen äänisignaali | Kuusi vapaata kieltä (eri voimakkuudet ja näytteenottotaajuudet), sustain, A–A, legato, myötäresonanssi, ylä-ääni, kynnys, mallin kaiutinhäntä – oikean Pitchyn läpi | `tests/riffikaiku-pipeline` |
| Selain (Chromium) korvatuilla äänirajapinnoilla | Koko käyttöliittymä, laitevalinta, viritin, diagnostiikka, tasot, mobiilimitat, teemat | `tests/e2e/riffikaiku.spec.ts` |
| Oikea kitara, oikea mikrofoni, oikea puhelin | **Ei vielä testattu** | tämä ohje |

## Valmistelu

1. Käynnistä palvelin worktreessä:
   `cd /Users/ristotoivanen/src/Musiikin-kartta/worktrees/riffikaiku-v0-1 && python3 -m http.server 8790 --bind 127.0.0.1`
   ja avaa `http://127.0.0.1:8790/riffikaiku.html`. (127.0.0.1 on selaimelle suojattu osoite, joten
   mikrofoni toimii ilman HTTPS:ää.) Käännös on valmiina; lähdemuutosten jälkeen `npm run build`.
2. Puhelinkokeet vaativat HTTPS-osoitteen (esim. Cloudflare-esikatselu haarasta). **Haaraa ei ole
   pushattu**; puhelinkokeet vasta erillisen päätöksen jälkeen.
3. Tyhjennä tarvittaessa edistyminen konsolissa: `localStorage.removeItem('musiikin-kartta:riffikaiku:v1')`.
   Kitaraharjoittelijan avain `musiikin-kartta:harjoittelu` ei saa muuttua.
4. Kirjaa: laite, selain ja versio, äänitulo, kaiutin vai kuulokkeet, äänikortin gain, kitara
   (sähkö: vahvistin/suoraan äänikorttiin), etäisyys mikrofonista, huoneen melu.
5. **Pidä diagnostiikka auki** epäselvissä kohdissa (”Mikrofonin diagnostiikka” tai pelissä
   ”Mikrofonin tiedot ja äänitulo”) ja kirjaa vaihe, joka ei toteudu (1 ääni, 2 sävelkorkeus,
   3 vakaus, 4 uusi näppäily, 5 välitys) sekä näkyvä syy.

## Kokeet

Merkitse jokaisesta yrityksestä: onnistui / puuttuva tapahtuma (soitettu sävel ei näkynyt) /
ylimääräinen tapahtuma (pallukka muuttui ilman näppäystä tai väärä ”kuulin X”).

1. **MacBook Pron mikrofoni.** Valitse se äänitulovalikosta. Tarkista, että ”Käytössä:” näyttää sen.
   Pidä kielet hiljaa kohinamittauksen ajan. Kirjaa kohina ja kynnys (diagnostiikka). Soita B3.
   Sähkökitaralla ilman vahvistinta odotettavissa on heikko taso: kirjaa vaihe 1 jokaiselle kielelle.
2. **Scarlett Solo 4th Gen.** Vaihda valikosta *kesken käytön* (koe 11). Kitara soitintuloon.
   Säädä gain niin, ettei diagnostiikka näytä leikkautumista. Kirjaa kanavamäärä ja analysoitava kanava.
3. **Kaikki kuusi vapaata kieltä** E2 A2 D3 G3 B3 E4: diagnostiikassa kunkin taajuus, sävel ja
   ”Viimeisin: X”. Kirjaa, kauanko vaihe 2 pysyy päällä (ennen 0.1:ssä E2 ~3 s, E4 < 1 s) ja tuleeko
   vaiheessa 4 täsmälleen yksi näppäily per näppäys. Toista hiljaa ja voimakkaasti.
4. **Kotitreeni 1:n B-kielen riffit** (B3–C4–D4–C4, C4–B3–C4–D4, B3–D4–C4–B3): 10 kierrosta kutakin,
   tavoite ≥ 9/10 kaikki vihreinä ilman turhaa uusintaa. Lisäksi Kotitreeni 2 (G-kieli: G3–A3–B3–A3,
   A3–A3–G3–B3, B3–G3–A3–G3).
5. **Sama sävel kahdesti**: Kotitreeni 2:n ”Kaksi samaa” (A3–A3–G3–B3).
   10 × vaimennuksella ja 10 × ilman. Kirjaa puuttuvat toiset sävelet ja tuplautuvat ensimmäiset.
6. **Eri sävelet ilman taukoa** (legato, ei vaimennusta): Kotitreeni 1:n riffit nopeasti peräkkäin. Kirjaa
   puuttuvat sävelet ja diagnostiikan syy (vaihe 4: ”sävelen vaihto” vs. ”liian hiljainen”).
7. **Uusi näppäys, kun edellinen soi vielä**: sekä eri sävel että sama sävel. Sama sävel pehmeästi on
   tunnettu rajoitus – kirjaa, kuinka usein se jää huomaamatta normaalilla näppäyksellä.
8. **Tahallinen väärä sävel ja palautuminen**: soita väärä → punainen, sama kohta pysyy; oikea →
   keltainen; riffi loppuun → ”Soitit riffin loppuun!”, pallukat jäävät näkyviin. Soita sen jälkeen
   vapaasti säveliä: ”Mikrofoni kuulee (vapaa kokeilu, ei arvioida)” näyttää ne, mutta pallukat ja tulos
   eivät saa muuttua. Paina Yritä uudelleen kielen vielä soidessa: **kirjaa, tuleeko haamuvastausta**
   (soimaan jäänyt kieli ei saa vastata). Myös väärä oktaavi (B4 B3:n sijaan).
9. **Virheetön riffi hyväksytään**: kaikki vihreinä → ”Riffi läpäisty!”, peli odottaa valintaa
   (Seuraava riffi / Soita uudelleen). Kolme riffiä → onnittelunäkymä.
10. **Viritin**: jokainen kieli, lukeman vakaus, ”liian matala / vireessä / liian korkea” oikeaan suuntaan
    (vertaa erilliseen virittimeen, jos saatavilla). Väärä kieli valittuna → ”kuulen X”.
11. **Äänitulon vaihto kesken käyttökerran**: pelistä (”Mikrofonin tiedot ja äänitulo”) ja valmistelusta.
    Odotus: ei sivun latausta, mikrofonitesti uudella laitteella, sama riffi jatkuu. Irrota myös USB-kortti
    kesken → tauko ja ohje; kytke ja jatka.
12. **Mallisoiton haamuhavainnot**: koske kitaraan, mutta älä soita. Kuuntele uudelleen 10 kertaa, kaiutin
    täysillä, ja odota 5 s vuoron alun jälkeen. Tavoite 0/10 muuttunutta pallukkaa ja ”kuulin X” -palautetta.
    Toista kielet vaimentamatta (myötäresonanssi kaiuttimesta).

**Pelinäkymän käytettävyys:** Kuuntele riffi kesken yrityksen (myös punaisen kohdan aikana) ja Pysäytä
kuuntelu – pallukat ja kohta säilyvät, eikä pysäytyksen jälkeen tule haamuvastausta. **Lopeta harjoitus**
toimii puhelimella yhdellä napautuksella ja sulkee mikrofonin. Aloitusnäkymästä pääsee takaisin harjoitusvalikkoon. Harjoituskielen korostus näkyy kirkkaassa valossa puhelimen näytöllä.

Lisäksi: taustavälilehti kesken vuoron (tauko, mikrofonin merkkivalo sammuu), luvan epääminen
(ohje ja virtuaalikitara), virtuaalikitara hiirellä ja kosketuksella (A–A–C–A kahdella nopealla
napautuksella, ei zoomausta).

## Tulostaulukko (täytä)

| Koe | Mac Safari sis. mik. | Mac Chrome sis. mik. | Mac Safari Scarlett | Mac Chrome Scarlett | iPhone Safari | Android Chrome | Huomiot |
|---|---|---|---|---|---|---|---|
| 1 sisäinen mikrofoni | | | | | | | |
| 2 Scarlett | | | | | | | |
| 3 kuusi kieltä | | | | | | | |
| 4 kotitreenien riffit /10 | | | | | | | |
| 5 A–A vaim. / ilman /10 | | | | | | | |
| 6 legato /10 | | | | | | | |
| 7 uusi näppäys soivan päälle | | | | | | | |
| 8 väärä → keltainen | | | | | | | |
| 9 virheetön hyväksytään | | | | | | | |
| 10 viritin | | | | | | | |
| 11 laitteen vaihto | | | | | | | |
| 12 haamut /10 | | | | | | | |
