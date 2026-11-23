Aloitan lukemalla projektin taustan ja hakemalla repositorion, jotta voin tarkistaa issuet, PR:t ja lähdekoodin sekä laskea sävelmatematiikan ja generaattorin toteutettavuuden itse.

# Säveljahti / Sävelketju v0.9: riippumaton auditointi

## Lopputulos

**HYVÄKSY KORJAUKSIN.** Toteutusta ei pidä aloittaa ennen kuin yksi BLOCKER ja MAJOR-löydökset on korjattu v1.0-suunnitelmaan.

- **Kunnossa:** Kaikki suunnitelman sävelet, oktaavit ja kieli/nauha-paikat ovat oikein. Generaattori pystyy aina jatkamaan ketjua, kuten laskin alla.
- **Suurin ongelma:** Pelimekaniikka ei vaadi eikä mittaa otelautatietoa. 0–5-alueella pelaaja voi edetä naapuriruutuja napauttelemalla ja kokeilemalla. Hänen valinnoillaan on harvoin merkitystä.

## Mitä tarkistin

- **Lähdekoodi (varmennettu):** beta-haara (454aee5), PR #46 ja PR #179 haettuina gitillä. Kävin läpi `NoteJourney.tsx`, `Board.tsx`, `audio.ts`, `music.ts`, `style.css`, `songAudio.ts`, `otelauta-ydinopinnot.js`, PR #179:n QA-raportin ja #43:n päätösdokumentin (`reviews/2026-11-14-jatkokehityspaatokset.md`).
- **Issuet:** #49 ja #50 luin GitHubista. #43:n, PR #46:n ja PR #179:n keskustelusivuja en saanut auki, koska GitHub rajoitti hakuja. Niiden osalta nojaan koodiin ja repon dokumentteihin.
- **Laskettu:** Kirjoitin skriptin, joka käy läpi kaikki aloituspaikat ja tehtävätyypit molemmilla alueilla. Se laskee pahimman tapauksen: pelaaja valitsee aina sen oikean vastauksen, joka on ketjun kannalta huonoin.
- **Mittaamatta:** iPhonella en mitannut mitään. Mobiilileveydet ovat laskelmia CSS:stä.

## Musiikillinen oikeellisuus: kaikki tarkistettu, ei virheitä

Vakiovire E2=40, A2=45, D3=50, G3=55, B3=59, E4=64.

- **§3:** A3=C3 → B1=C4 on oktaavi. D3=F3 → D5=G3 on kokosävelaskel. ✓
- **§7, ketju 1:** B1=C4 → G5=C4 → A3=C3. ✓
- **§7, ketju 2:** E1=F2 → D3=F3 → D5=G3 → G0=G3. Kaikki ovat ainoita vaihtoehtoja alueella 0–5. ✓
- **§7, ketju 3:** B1 → G5 → D10 (kaikki C4) → e8=C5. ✓
- **C:n paikat:** C löytyy 0–12-alueelta kuudesta paikasta (E8 ja A3 = C3, D10/G5/B1 = C4, e8 = C5). ✓
- **§13:** MIDI-arvot ja paikkamäärät 36/78 ovat oikein. ✓

Luonnollisten sävelten paikkoja on alueella 0–5 kolme tai neljä per sävel, alueella 0–12 kuudesta kahdeksaan.

## Generaattori: laskennan tulokset

- **Ei umpikujia:** Pahimmassakin tapauksessa jokaisesta oikeasta aloituspaikasta saa vähintään 3 löydön ketjun, molemmilla alueilla ja molemmissa tehtäväperheissä. Kun kaikki tehtävätyypit ovat käytössä, 4 löytöä onnistuu aina. §6:n riski on siis ratkaistavissa. 78 ruudun ja kolmen askeleen täydellinen läpikäynti on kevyt, joten erillistä heuristiikkaa ei tarvita.
- **Valintoja on 0–5-alueella vähän.** Ensimmäisen löydön jälkeen tehtävillä S1, A1 ja A2 on aina vain yksi oikea vastaus. S2:lla ja S3:lla on kaksi vastausta vain 4 ja 3 lähtöpaikasta 36:sta. 0–12-alueella S1:llä on kaksi vastausta 42 lähtöpaikasta 78:sta, joten siellä valinnoilla on oikeasti merkitystä.
- **0–5:n saman sävelen ketju on sama kuin nykyinen tehtävä.** Jokainen saman sävelen 4 löydön ketju alueella 0–5 käy läpi sävelen kaikki paikat. Se on siis nykyinen NoteJourney eri järjestyksessä.
- **Ilman S4:ää syntyy yksi umpikuja.** Ilman S4:ää alueella 0–5 aloitus D-kielen 3. nauhalta (F3) takaa vain 2 löytöä.
- **Ylennettyjä ja alennettuja säveliä tulee paljon.** Kun kaikki tehtävätyypit ovat käytössä, 52 % 0–5-alueen 4 löydön ketjuista ja 36 % 0–12-alueen ketjuista sisältää ♯- tai ♭-sävelen.

## Löydökset

### BLOCKER

**B1. Ydinmekaniikka ei vaadi eikä mittaa otelautatietoa** *(laskettu + ehdotus)*
- **Perustelu:**
  - A1- ja A2-tehtävät ovat pelkkiä naapuriruudun napautuksia. Säveltietoa ei tarvita.
  - Väärän napautuksen palaute kertoo sävelen. Koska kokeilusta ei rangaista (mikä on oikea periaate), tehtävät voi ratkaista napauttelemalla järjestyksessä.
  - Suunnitelma ei erota omaa ensimmäistä oikeaa vastausta kokeilemalla löydetystä.
  - Tehtävät kulkevat vain suuntaan "nimi → paikka". Suuntaa "paikka → nimi" ei harjoiteta.
  - Siirtymä oikeaan kitaraan syntyy säännöistä ja muodoista, eikä suunnitelma opeta niitä:
    - Sama sävel löytyy paksummalta naapurikieleltä 5 nauhaa ylempää, paitsi B-kieleltä G-kielelle 4.
    - Oktaavimuodot: E→D ja A→G ovat +2 nauhaa, D→B ja G→e +3 nauhaa.
- **Korjaus:**
  1. Jokaisella tehtävätyypillä on nimetty sääntö, ja vihjeet ja palaute puhuvat sillä. PR #179:n `unisonRule` on valmis malli sanamuodolle.
  2. A1 ja A2 muutetaan nimitehtäviksi: "Kokoaskel ylöspäin: mikä sävel? Valitse nimi, sitten paikka" tai "Etsi G samalta kieleltä".
  3. Jokaiseen ketjuun tulee vähintään yksi "mikä sävel tämä on?" -askel.
  4. Jokaisen löydön kohdalle kirjataan istunnon ajaksi, löytyikö se ensimmäisellä yrityksellä, useammalla yrityksellä, vihjeellä vai paljastettuna. Tämä vastaa #49:n `assessmentMode`-jakoa ja PR #179:n palautteen jakoa. Loppuyhteenveto käyttää tätä tietoa.

### MAJOR

**M1. Oletusalue 0–5 sopii kohderyhmälle huonosti ja vähentää vaihtelua** *(laskettu + ehdotus)*
- **Perustelu:** 1–2 vuotta soittaneelle nauhat 0–5 ovat avosointujen aluetta ja yleensä tutuinta. Epävarmuus on nauhoilla 5–12. Lisäksi 0–5:n saman sävelen ketjut toistavat nykyisen tehtävän, ja valintoja on vähän (ks. laskenta).
- **Korjaus:** Tehdään 0–12 pääalueeksi. Puhelimelle tarjotaan pedagogisia ikkunoita, esimerkiksi nauhat 0–5, 5–9 ja 8–12 (kädenasemat), eikä pelkkiä vierityspikavalintoja. 0–5 jää lämmittelyksi. Tämä on omistajan päätös.

**M2. Pelaajan valinnoilla on 0–5-alueella harvoin vaikutusta** *(laskettu)*
- **Perustelu:** Ensimmäisen löydön jälkeen vastaus on lähes aina yksiselitteinen. Ensimmäisessäkin askeleessa pelaaja valitsee luultavasti aina saman tutun C:n (B1). Väite "Omat päätökset muuttavat reittiä" (§9) ei toteudu.
- **Korjaus:**
  - Ajoittain tarjotaan kaksi johtolankaa, joista pelaaja valitsee: "oktaavi ylös vai sama korkeus toiselta kieleltä?". Tämä on aito ja oppimiseen liittyvä päätös.
  - Tehtävä voi sulkea pois tutut ratkaisut: "Löydä C, jota et käyttänyt viime ketjussa".
  - Loppunäyttö kertoo vaihtoehtoiset reitit: "Olisit voinut käyttää myös paikkaa D10".

**M3. Otelaudan suunta ja sävellaskenta ovat ristiriidassa PR #179:n kanssa** *(varmennettu)*
- **Perustelu:**
  - `Board.tsx` on vaakasuuntainen: ohut e on ylhäällä kuten tabulatuurissa.
  - PR #179:n otelauta on pystysuuntainen kuten sointukaavioissa: paksu E vasemmalla ja nauhat riveinä.
  - Sävelmatematiikka on kahdessa paikassa, ja kielten järjestys on päinvastainen (indeksi 0 on toisessa ohut e, toisessa paksu E).
  - Nimet eroavat: `note()` käyttää oletuksena ylennyksiä (C♯, D♯, G♯, A♯), PR #179 sekaisin E♭, A♭, B♭ ja C♯, F♯. Kielten nimet ovat "ohut E" ja "ohut e-kieli".
  - Tämä on ristiriidassa §11:n yhdenmukaisuusvaatimuksen kanssa samassa aiheessa.
- **Korjaus:** Omistaja päättää ennen toteutusta, kumpaa suuntaa käytetään millä laitteella. Pystysuunta ratkaisisi puhelimen 0–12-ongelman, koska sivu vierisi normaalisti pystyyn. Lisäksi tarvitaan yhteinen testiaineisto (C:n paikat, MIDI-arvot, nimet), jota molemmat toteutukset käyttävät.

**M4. `Board`-komponenttia ei voi käyttää sellaisenaan** *(varmennettu ja laskettu)*
- **Perustelu:**
  - `disabled` estää napautukset koko otelaudalta, joten valmista ketjua ei voi kuunnella.
  - Kun merkit muuttuvat, `follow='hints'` vierittää otelaudan ensimmäiseen DOM-järjestyksen `.target`-merkkiin eikä uusimpaan löytöön. Tämä rikkoo §10:n vaatimuksen, ettei näkymää siirretä automaattisesti.
  - Otelaudan vähimmäisleveys on 96 + 6 × 46 = 372 px. 390 px:n näytöllä tilaa on noin 338 px (sivun ja `.journey-lesson`-laatikon reunukset), joten **0–5 ei mahdu nytkään 390 px:iin**. 0–12 vaatii 694 px, jolloin näkyvissä on noin 5 nauhaa kerrallaan.
- **Korjaus:**
  - Lisätään kuuntelutila, jossa napautus soi mutta ei laske löydöksi.
  - Lisätään `follow='none'`. Otelauta vierii vain, kun pelaaja pyytää vihjettä.
  - Kielimerkintäsarake kavennetaan noin 40 px:iin, jolloin 40 + 6 × 46 = 316 px mahtuu 390 px:iin. 360 px:iin mahtuminen vaatii 44 px solut.

**M5. iPhonen äänetön-kytkin mykistää pelin ilman ilmoitusta** *(varmennettu koodista, laite testaamatta)*
- **Perustelu:** `ReferencePlayer` ei aseta `navigator.audioSession.type = 'playback'`. Samassa repossa `songAudio.ts`, `sointuharjoitus.js` ja `rytmi-ydinopinnot.js` asettavat sen. Äänetön-tilassa Web Audio voi olla mykistetty vaikka AudioContextin tila on "running", joten §8:n näkyvä ilmoitus ei koskaan näy.
- **Korjaus:** Asetus tehdään käyttäjän napautuksen aikana ennen ensimmäistä `await`-kutsua. Lisätään pysyvä vihje: "Ei ääntä iPhonessa? Tarkista äänetön-kytkin". Jos muutos tehdään yhteiseen `ReferencePlayer`-luokkaan, se vaikuttaa myös Scale-, Mode-, Melody- ja ScaleBridge-harjoituksiin, joten siitä tehdään erillinen pieni PR regressiotesteineen.

**M6. §13:n ruudunlukijavaatimus paljastaisi vastaukset** *(varmennettu)*
- **Perustelu:** Vaatimus "kieli/nauha/sävel nimetty ruudunlukijalle" kirjaimellisesti toteutettuna kertoo jokaisen ruudun sävelen etukäteen. Nykyinen `Board` toimii oikein: se kertoo sävelen vasta merkitystä kohdasta.
- **Korjaus:** Muotoilu muutetaan: "kieli ja nauha aina; sävel vasta napautuksen tai löydön jälkeen". Tälle lisätään testi.

**M7. NoteJourneyn kohtalo jää auki ja on ristiriidassa #50:n kanssa** *(varmennettu)*
- **Perustelu:**
  - #50:n hyväksymiskriteeri on "Existing NoteJourney functionality is preserved", ja #50:n kohderyhmä oli aloittelijat.
  - Suunnitelma ei kerro, korvaako Säveljahti nykyisen tehtävän.
  - Tehtävään ohjaavat `musapelit.html` (kaksi korttia, joissa lukee "Otelautakuva, ei ääntä"), `?polku=otelauta&harjoitus=savelten-etsinta`, LearningPaths-valikon "Sävelten etsintä", `oppi/otelauta/index.html` (sekä betassa että PR #179:ssä) ja e2e-testit.
- **Korjaus:** Päätetään, että Säveljahti korvaa tehtävän samassa osoitteessa ja "etsi kaikki paikat" jää yhdeksi jahtityypiksi, tai tehdään toinen ratkaisu. #50 päivitetään vastaamaan uutta kohderyhmää. Korttien tekstit päivitetään.

**M8. Oktaavinumerot ja paikkamerkinnät sekoittuvat** *(varmennettu dokumentista + ehdotus)*
- **Perustelu:**
  - Dokumentissa "G5=C4" tarkoittaa G-kielen 5. nauhaa, mutta §13:ssa "G3=55" tarkoittaa sävelkorkeutta G3. Tämä on juuri se käsitesekaannus, jota §3 kieltää.
  - Kitara on transponoiva soitin: B-kielen 1. nauha soi C4:nä, mutta nuottikirjoituksessa se kirjoitetaan C5:ksi.
  - Tehtävä "toinen C4" olettaa, että pelaaja tuntee tieteellisen oktaavimerkinnän.
- **Korjaus:**
  - Dokumentissa käytetään paikoille PR #179:n merkintää "G 5" tai "G-kieli/5".
  - Käyttöliittymän tehtävät viittaavat löydettyyn paikkaan: "yhtä korkea kuin B-kielen 1. nauha".
  - Oktaavinumero näytetään toissijaisena ja merkitään "soiva korkeus".

### MINOR

1. **Suuntasana "ylös/alas" on epäselvä** tabulatuurisuunnassa: ylös visuaalisesti vai korkeammalle? Käytetään sanoja "korkeammalle/matalammalle (kohti runkoa/satulaa)".
2. **Ylennettyjen ja alennettujen sävelten nimeäminen on päättämättä**, vaikka niitä on 36–52 %:ssa ketjuista. Noudatetaan harjoittelijan ♯/♭-asetusta. Samaa ääntä tarkoittavissa nimissä palaute näyttää molemmat, esimerkiksi "C♯/D♭".
3. **L1 käynnistyy harvoin ja on itsestään selvä.** Se on mahdollinen vain 12 lähtöpaikasta 78:sta. Jätetään pois v1:stä. 12. nauhan oivallus siirretään S2:n ja S3:n vihjeisiin.
4. **S4 on muiden tehtävien yläjoukko.** Se tarvitaan vain varajatkona 0–5-alueen saman sävelen ketjuissa (D-kielen F3-tapaus). Pidetään sisäisenä varajatkona, ei näkyvänä tehtävätyyppinä.
5. **Automaattisesti vaihtuva johtolanka peittää palautteen**, ja ruudunlukija voi lukea kaksi ilmoitusta peräkkäin. Pysyvä "Edellinen löytö" -rivi ja yksi yhdistetty live-ilmoitus ovat tarpeen. Tämä vastaa suunnitelman avoimeen kysymykseen 1: kyllä tarvitaan.
6. **Sivun sulkeminen ja lukitus:** PR #46 kuuntelee vain `visibilitychange`-tapahtumaa, ei `pagehide`-tapahtumaa. Lukituksen jälkeen Safarin AudioContext voi olla tilassa "interrupted", jolloin äänen käynnistys odottaa 4 s ennen virheilmoitusta. Yksittäiselle napautukselle 1–1,5 s riittää.
7. **Vihjeportaiden ensimmäinen taso** ("suunta") ei toimi ensimmäisessä tehtävässä, koska vertailukohtaa ei ole. Vihjeportaat määritellään tehtävätyypeittäin.
8. **Kertauspaluu ja tallennus ovat ristiriidassa.** §9 lupaa palata aiemmin vaikeisiin tehtäviin, #49 ja #50 odottavat paikallista edistymistietoa, mutta §14.9 jättää tallennuksen auki. Ehdotus: v1:ssä vain istunnon aikainen muisti.
9. **PR #46:n kuvaus on epätarkka.** `ReferencePlayer` on jo betassa, ja #43:n päätös käskee käyttää sitä. PR #46 lisää vain noin 30 riviä NoteJourneyyn, ja se pohjautuu 14.11. versioon. Joko PR rebasetaan ja yhdistetään, tai sama logiikka kirjoitetaan uuteen komponenttiin. Ei molempia.

### HUOMIO

- **Moni asia on jo valmiina betassa** (varmennettu): kielimerkintöjen pysyvyys vaakavierityksessä, vierityksen vihje, nuolinäppäimet ja Home/End, `role="status"`-palaute, merkkityypit `wrong` ja `playing` sekä `ReferencePlayer.play(notes, onNote)`. "Kuuntele ketju" -toiminto ei siis tarvitse uutta äänimoottoria.
- **Tabulatuurisuunta ei vastaa sitä, mitä soittaja näkee** katsoessaan omaa kitaraansa: paksu E on silloin lähimpänä. Valinta on hyväksyttävä, mutta §11:n väite yhdenmukaisuudesta oikean otelaudan kanssa kannattaa muotoilla rehellisemmin.
- **Fyysisen kitaran askel kannattaa tuoda ketjun sisään.** Esimerkiksi: "Soita tämä paikka kitarallasi ja vertaa vertailusävelen ääneen". Syntetisoitu vertailusävel tekee itsearvioinnin rehelliseksi ilman mikrofonia.
- **Sijoitus Musapeleihin poikkeaa #49:n ja #50:n lisäyksistä** (yksi oppimiskokonaisuus, ei erillisiä "pelaa" ja "harjoittele" -haaroja). Tämä ratkeaa "Sama aihe" -linkeillä ja PR #179:n aihesivun linkillä.
- **#50:n aloittelijoiden vaiheet hylätään.** Kirjataan, että aloittelijoiden polku on Otelauta-ydinopinnot.

## Rajaus v1:lle

**Jätetään pois:**
- L1-tehtävä
- S4 näkyvänä tehtävätyyppinä
- pysyvä tallennus
- erillinen tehtäväperheen valinta (generaattori vuorottelee; enintään yksi kevyt valinta)
- 0–12-alueen vierityspikavalinnat, jos ikkunat (M1) toteutetaan

**Puuttuu ja on välttämätön:**
- säännöt ja muodot palautteessa (B1)
- "mikä sävel tämä on?" -askel
- ensimmäisen yrityksen kirjaus
- kuuntelutila valmiille ketjulle
- vieritysperiaatteen korjaus
- äänetön-kytkimen käsittely
- NoteJourneyn ja osoitteiden siirtosuunnitelma
- ylennettyjen ja alennettujen sävelten nimeämissääntö
- yhteinen testiaineisto PR #179:n kanssa

## Omistajan päätökset ennen toteutusta

1. Mikä on oletusalue ja mitä puhelimella näytetään: 0–5, 0–12 vai kädenasemaikkunat?
2. Otelaudan suunta: yksi yhtenäinen suunta sivustolle vai vaaka- ja pystysuunta laitteen mukaan (yhteensovitus PR #179:n kanssa)?
3. Korvaako Säveljahti NoteJourneyn samassa osoitteessa, mitä nimeä käytetään, ja miten korttien tekstit ja #50 päivitetään?
4. Mitkä tehtävätyypit tulevat v1:een (ehdotus: S1–S3, nimitehtävinä muotoillut askeltehtävät, S4 varajatkona, ei L1:tä)?
5. Tuleeko suunta "paikka → nimi" mukaan v1:een?
6. Ensimmäisen yrityksen kirjaus ja sen näyttäminen, sekä tallennus: vain istunto vai localStorage #49:n sääntöjen mukaan?
7. Miten ylennetyt ja alennetut sävelet nimetään, ja näytetäänkö oktaavinumerot?
8. Tehdäänkö äänetön-kytkimen korjaus yhteiseen `ReferencePlayer`-luokkaan erillisenä PR:nä vai vain Säveljahtiin? Ja rebasetaanko PR #46 vai korvataanko se?
9. Laajennetaanko `Board`-komponenttia (kuuntelutila, `follow='none'`, kapeampi kielisarake) vai tehdäänkö erillinen otelauta?
10. Saako pelaaja ajoittain valita seuraavan johtolangan kahdesta (M2)?

En muuttanut koodia, issueita, PR:iä enkä suunnitelmaa.

Lähteet:
- [Issue #50](https://github.com/ristotoivanen/Musiikin-kartta/issues/50)
- [Issue #49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49)
- [Issue #43](https://github.com/ristotoivanen/Musiikin-kartta/issues/43) (en saanut sivua auki; käytin repon päätösdokumenttia)
- [PR #46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46) (koodi luettu gitillä)
- [PR #179](https://github.com/ristotoivanen/Musiikin-kartta/pull/179) (koodi ja QA-raportti luettu gitillä)

Haluatko, että teen tästä dokumentin, jossa löydökset on helppo käydä läpi yksitellen?