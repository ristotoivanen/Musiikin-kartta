# Kelaussarjat fyysisellä iPhonella (PR #126, K1–K3)

Kesto noin 20 minuuttia. Kokeessa selvitetään, toistuuko simulaattorissa nähty **noin 10,6 s:n jumi** (H7, `KELAUS-JUURISYY.md` luku 8) oikealla iPhonella. Kokeessa ei arvioida ääntä, joten kuuloon ei tarvitse keskittyä.

Kokeessa on kolme osaa, ja jokaisesta tallennetaan oma raportti:

| Osa | Mitä tehdään | Raportti |
| --- | --- | --- |
| A | Ajurin kierros 1: 24 sarjaa | `kelaussarja-A` |
| B | Ajurin kierros 2: 24 sarjaa | `kelaussarja-B` |
| C | Käsin tehdyt nopeat kaksois- ja kolmoiskelaukset | `kelaussarja-C` |

Jokainen osa tehdään **omalla sivulatauksellaan**, koska testisivun tapahtumaloki on rajattu 4 000 tapahtumaan ja yksi ajurikierros tuottaa noin 2 000. Raportti katoaa, kun sivu ladataan uudelleen, joten **tallenna raportti ennen uudelleenlatausta**.

## Osoite

```
https://test-kaksiraita-kelausanalyy.musiikin-kartta.pages.dev/kaksiraitatesti?lahde=synteettinen&koe=kelaussarja
```

Tarkista ensimmäisestä raportista, että sen alussa lukee `"bundle":"7fdb5dd65cc9"`. Muu arvo tarkoittaa, että esikatselu on päivittynyt toiseen versioon. Ilmoita silloin arvo raportin mukana.

## Ennen aloitusta

1. **Automaattinen lukitus pois:** Asetukset → Näyttö ja kirkkaus → Automaattinen lukitus → *Ei koskaan* (palauta kokeen jälkeen). Jos näyttö lukittuu tai vaihdat sovellusta, sivu pysäyttää toiston, ja kesken ollut osa on tehtävä uudelleen.
2. Kirjaa iPhonen malli, iOS-versio ja onko virransäästötila päällä.
3. Äänenvoimakkuudella ja Bluetoothilla ei ole tässä kokeessa merkitystä.

## Osat A ja B: ajuri

1. Avaa osoite Safarissa **uudessa välilehdessä**. Sivulla lukee *Tila: Synteettinen … uusi moottori*.
2. Paina **Aja kelaussarjat (24)**. Älä koske ruutuun ajon aikana. Painikkeen vieressä näkyy *Kelaussarjat: sarja n/24*.
   - Ajo kestää tavallisesti noin minuutin, jumien kanssa enemmän.
   - **Jos sivu jäätyy** (laskuri ja aika eivät etene), älä paina mitään. Kirjaa suunnilleen, missä sarjassa ja kuinka kauan jäätyminen kesti. Ajuri jatkaa itse.
3. Kun rivillä lukee *Kelaussarjat: valmis: ok N/24 …*, kirjaa rivi sellaisenaan.
4. **Tallenna raportti:** vieritä alas kohtaan **Raportti** → **Valitse raportti** → napauta valittua tekstiä → **Kopioi**. Liitä teksti muuttamattomana uuteen muistiinpanoon tai sähköpostiin itsellesi, otsikoksi `kelaussarja-A`. Teksti on noin 0,5 Mt.
5. Lataa sivu uudelleen Safarin ⟳-painikkeella ja tee osa **B** samoin (raportti `kelaussarja-B`).

## Osa C: käsin

Lataa sivu uudelleen. Tee kumpaakin sarjatyyppiä **10 kertaa**. Pidä sarjojen välissä noin 3 sekunnin tauko.

**C1, soitosta (10 sarjaa):**
1. Paina **▶ Soita** ja odota, että aika etenee.
2. Napauta **Siirry kohtaan 0:30** kaksi tai kolme kertaa niin nopeasti kuin pystyt. Vuorottele: kaksoisnapautus, kolmoisnapautus, kaksoisnapautus…

**C2, kesken aloituksen (10 sarjaa):**
1. Paina **■ Tauko** ja odota noin 2 s.
2. Paina **▶ Soita** ja heti perään (alle puolessa sekunnissa) **Siirry kohtaan 0:30** kerran tai kahdesti.

Jos sivu zoomaa nopeissa napautuksissa, nipistä takaisin ja napauta painikkeen eri kohtiin.

Jäätymiset ja virheet:
- **Jäätyminen:** kirjaa, kuinka mones sarja oli kyseessä ja kuinka kauan jäätyminen kesti. Jatka, kun sivu taas reagoi.
- **Ilmoitus *Kelaus ei valmistunut … Paina Soita uudelleen*:** kirjaa se, paina ▶ Soita ja jatka.

Lopuksi paina ■ Tauko ja tallenna raportti nimellä `kelaussarja-C`.

## Toimita

- Raportit `kelaussarja-A`, `-B` ja `-C` muuttamattomina.
- Osien A ja B valmis-rivit.
- iPhonen malli, iOS-versio ja virransäästötila.
- Havaitut jäätymiset: osa, sarja tai kohta ja arvioitu kesto. Kirjaa myös ruudulla näkyneet virheilmoitukset.

## Mitä raportista nähdään

Analyysi tehdään Macilla komennolla `node tools/kaksiraitatesti-raportti.mts kelaussarja-A.json kelaussarja-B.json kelaussarja-C.json`.

- **Ajurin sarjat:** jokaisesta `kelaussarja-tulos`.
  - Tulos on `ok`, `aikakatkaisu`, `vaara-kohta` tai `ei-toistoa`.
  - Lisäksi kirjataan pääsäikeen pisin jumi `pisinJumiMs` (20 ms:n tarkkuus), aloitukset, ohitukset ja aikakatkaisumerkinnät.
  - Onnistuneet ja epäonnistuneet sarjat jäävät raporttiin samalla tavalla.
- **Käsin tehdyt sarjat:** tunnistetaan painallustapahtumista. Painallusten väli saa olla alle 0,5 s. Tuloksena on tulos ja pisin näyteväli.
- **Tapahtumakatkokset:** sivu ottaa näytteen 0,5 s:n välein myös tauolla. Työkalu listaa kaikki yli 2 s:n välit. Jokaisesta näkyy, oliko sivu piilossa (`visibilitychange`), ja ajurin sarja, jonka aikana katko tapahtui. Yli 10 s:n katkokset, joiden aikana sivu oli näkyvissä, lasketaan erikseen.
- **H7:n tunniste:** viimeisen `seek-write`n jälkeen ei tapahtumia eikä näytteitä noin 10 s:iin, sitten `emptied` ja `kelaus-aikakatkaisu`. Lisäksi tarkistetaan, kuinka monta millisekuntia `toisto-alkoi`n jälkeen jumiin johtanut `load()` tehtiin (simulaattorissa 3–32 ms).

## Jos jokin menee pieleen

- **Ajurin sarjat päättyvät `ei-toistoa` ja ruudulla lukee *Toisto vaatii uuden painalluksen*:** iOS estää ajurin ohjelmallisen toiston ilman painallusta (hypoteesi H6). Kyse ei ole H7:stä. Kirjaa tämä ja tee osa C silti.
- **Näyttö lukittui tai vaihdoit sovellusta kesken osan:** tallenna raportti, lataa sivu uudelleen ja tee osa alusta. Raportissa tämä näkyy piilossa olleena katkona.
- **Raporttikenttä näyttää vanhaa tekstiä:** paina ■ Tauko ja **Valitse raportti** uudelleen.
