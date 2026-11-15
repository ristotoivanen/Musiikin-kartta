# Riffikaiku 0.4 – oikean kitaran hyväksyntäkokeet

**Tila: EI TEHTY versioilla 0.2–0.4.** Ensimmäinen käyttäjäkoe tehtiin versiolla 0.1 (sähkökitara,
MacBook Pron mikrofoni ja Scarlett Solo 4th Gen); sen havainnot johtivat 0.2:n korjauksiin.
Rajat 9/10 ja 0/10 ovat ehdotettuja pilotin hyväksyntärajoja, eivät mitattuja tuloksia.

0.4:stä alkaen oikea kitara on **Riffiharjoitus – oikea kitara** (`riffikaiku.html?tila=harjoitus`):
ei pallukkapisteitä, virheitä eikä läpäisyä, vaan opastava palaute Kokeile muistista -vaiheessa.
Tunnistusketju (Microphone → PitchLoop → PluckDetector → säveljonon tarkistaja) on sama kuin 0.3:ssa,
joten kokeet mittaavat samoja asioita, mutta tulos luetaan palautetekstistä ja ”Tunnistettu X/4” -laskurista.

## Mitä on testattu ja miten

| Testityyppi | Mitä | Missä |
|---|---|---|
| Automaattinen, ei ääntä | Säveljonon tarkistus, harjoituksen vaiheet ja palaute, mikrofonin ohjain (lupa, laite, kohina, B-testi, viritin, diagnostiikka, irtoaminen), pelin tilakone, tallennus ja yhteensopivuus | `tests/riffikaiku-sequence`, `-practice`, `-game`, `-pluck-tuner` |
| Synteettinen äänisignaali | Kuusi vapaata kieltä, sustain, A–A, legato, myötäresonanssi, ylä-ääni, kynnys, mallin kaiutinhäntä, epävireinen sävel, kohina – oikean Pitchyn läpi harjoitusohjaimeen | `tests/riffikaiku-pipeline` |
| Selain (Chromium) korvatuilla äänirajapinnoilla | Aloitus, harjoitus ja peli, laitevalinta, viritin, diagnostiikka, epävarma tunnistus, toistuva sävel, irtoaminen, taustavälilehti, mobiilimitat | `tests/e2e/riffikaiku.spec.ts` |
| Oikea kitara, oikea mikrofoni, oikea puhelin | **Ei vielä testattu** | tämä ohje |

Simuloidut mikrofonitestit eivät ole oikean kitaran hyväksymistestejä.

## Valmistelu

1. Käynnistä palvelin työpuussa: `python3 -m http.server 8790 --bind 127.0.0.1` ja avaa
   `http://127.0.0.1:8790/riffikaiku.html?tila=harjoitus`. (127.0.0.1 on selaimelle suojattu osoite, joten
   mikrofoni toimii ilman HTTPS:ää.) Käännös on valmiina; lähdemuutosten jälkeen `npm run build`.
2. Puhelinkokeet vaativat HTTPS-osoitteen: käytä haaran Cloudflare Pages -esikatselua.
3. Tyhjennä tarvittaessa edistyminen konsolissa: `localStorage.removeItem('musiikin-kartta:riffikaiku:v1')`.
   Kitaraharjoittelijan avain `musiikin-kartta:harjoittelu` ei saa muuttua.
4. Kirjaa: laite, selain ja versio, äänitulo, kaiutin vai kuulokkeet, äänikortin gain, kitara
   (sähkö: vahvistin/suoraan äänikorttiin), etäisyys mikrofonista, huoneen melu.
5. **Pidä diagnostiikka auki** epäselvissä kohdissa (Mikrofoni ja viritys → Diagnostiikka) ja kirjaa
   vaihe, joka ei toteudu (1 ääni, 2 sävelkorkeus, 3 vakaus, 4 uusi näppäily, 5 välitys) sekä syy.

## Kokeet

Merkitse jokaisesta yrityksestä: onnistui / puuttuva tapahtuma (soitettu sävel ei näkynyt) /
ylimääräinen tapahtuma (laskuri tai ”Kuulin X” muuttui ilman näppäystä).

1. **MacBook Pron mikrofoni.** Ota mikrofoni käyttöön ja valitse se äänitulovalikosta. Tarkista, että
   ”Käytössä:” näyttää sen. Pidä kielet hiljaa kohinamittauksen ajan. Kirjaa kohina ja kynnys. Soita B3.
   Sähkökitaralla ilman vahvistinta odotettavissa on heikko taso: kirjaa vaihe 1 jokaiselle kielelle.
2. **Scarlett Solo 4th Gen.** Vaihda valikosta *kesken käytön* (koe 11). Kitara soitintuloon.
   Säädä gain niin, ettei diagnostiikka näytä leikkautumista. Kirjaa kanavamäärä ja analysoitava kanava.
3. **Kaikki kuusi vapaata kieltä** E2 A2 D3 G3 B3 E4: diagnostiikassa kunkin taajuus, sävel ja
   ”Viimeisin: X”. Kirjaa, kauanko vaihe 2 pysyy päällä, ja tuleeko vaiheessa 4 täsmälleen yksi näppäily
   per näppäys. Toista hiljaa ja voimakkaasti.
4. **Kokeile muistista, Kotitreeni 1 ja 2**: 10 kierrosta kutakin riffiä. Tavoite ≥ 9/10 kierrosta, joissa
   ”Mikrofoni kuuli koko riffin oikeassa järjestyksessä” ilman yhtään väärää ”Kuulin X” -palautetta.
5. **Sama sävel kahdesti**: Kotitreeni 2:n ”Kaksi samaa” (A3–A3–G3–B3), 10 × vaimennuksella ja 10 × ilman.
   Kirjaa puuttuvat toiset sävelet ja tuplautuvat ensimmäiset. Näkyykö ohje ”Sama sävel soi yhä”, kun
   toinen A jää tunnistamatta, ja onko ohje ymmärrettävä?
6. **Eri sävelet ilman taukoa** (legato): Kotitreeni 1:n riffit nopeasti. Kirjaa puuttuvat sävelet ja
   diagnostiikan syy (vaihe 4: ”sävelen vaihto” vs. ”liian hiljainen”).
7. **Uusi näppäys, kun edellinen soi vielä**: eri sävel ja sama sävel. Sama sävel pehmeästi on tunnettu
   rajoitus – kirjaa, kuinka usein se jää huomaamatta normaalilla näppäyksellä.
8. **Tahallinen väärä sävel ja oktaavi**: väärä → ”Kuulin X. Tähän kohtaan kuuluu toinen sävel”, laskuri ei
   etene. B4 B3:n sijaan → oktaaviohje. Kirjaa, kuinka usein **oikein soitettu matala sävel** näkyy
   oktaavivirheenä (ylä-ääni) – tämä on palautteen tärkein luotettavuusmittari.
9. **Epävarma tunnistus**: soita kaksi kieltä yhtä aikaa, soita epävireisellä kielellä ja puhu taustalla.
   Odotus: ”Epävarma tunnistus” -ohje, ei ”Kuulin X” -väitettä eikä laskurin etenemistä.
10. **Viritin**: jokainen kieli, lukeman vakaus, ”liian matala / vireessä / liian korkea” oikeaan suuntaan
    (vertaa erilliseen virittimeen, jos saatavilla). Väärä kieli valittuna → ”kuulen X”.
11. **Äänitulon vaihto ja irrotus kesken käytön**: odotus ei sivun latausta, kohina mitataan uudelleen,
    Kokeile muistista -eteneminen säilyy. Irrota USB-kortti kesken → ”Yhteys mikrofoniin katkesi”,
    harjoitus jatkuu ilman mikrofonia; kytke ja ota mikrofoni uudelleen käyttöön.
12. **Mallisoiton haamuhavainnot**: koske kitaraan, mutta älä soita. Kuuntele malli 10 kertaa Kokeile
    muistista -vaiheessa kaiutin täysillä ja odota 5 s. Tavoite 0/10 laskurin etenemistä tai
    ”Kuulin X” -palautetta. Toista kielet vaimentamatta (myötäresonanssi kaiuttimesta).

**Harjoituksen käytettävyys:** ymmärtääkö soittaja kolme vaihetta ilman ohjetta; onko Opettele-vaiheen
”Kuulen nyt: X” hyödyllinen vai häiritsevä; kokeeko soittaja palautteen opastavana eikä arvostelevana;
löytyykö Kuittaa harjoitelluksi; toimiiko harjoitus mielekkäästi ilman mikrofonia (Näytä sävelet
tarkistukseen). Taustavälilehti: mikrofonin merkkivalo sammuu.

## Tulostaulukko (täytä)

| Koe | Mac Safari sis. mik. | Mac Chrome sis. mik. | Mac Safari Scarlett | Mac Chrome Scarlett | iPhone Safari | Android Chrome | Huomiot |
|---|---|---|---|---|---|---|---|
| 1 sisäinen mikrofoni | | | | | | | |
| 2 Scarlett | | | | | | | |
| 3 kuusi kieltä | | | | | | | |
| 4 muistista koko riffi /10 | | | | | | | |
| 5 A–A vaim. / ilman /10 | | | | | | | |
| 6 legato /10 | | | | | | | |
| 7 uusi näppäys soivan päälle | | | | | | | |
| 8 väärä / oktaavi / väärä oktaavihälytys | | | | | | | |
| 9 epävarma tunnistus | | | | | | | |
| 10 viritin | | | | | | | |
| 11 laitteen vaihto ja irrotus | | | | | | | |
| 12 haamut /10 | | | | | | | |
