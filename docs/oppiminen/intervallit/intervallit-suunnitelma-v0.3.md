# Intervallit, kuulo ja kolmisoinnut – oppimissuunnitelma v0.3

**Päiväys:** 17.11.2026  
**Tila:** EHDOTUS, omistajan katselmointiin. Ei toteutuslupaa eikä julkaisulupaa.  
**Lähtötilanne:** `beta` f9964c5 / `main` 68b8a77, Clauden 17.11.2026 klo 22.45 tarkistus. Tarkistettava uudelleen ennen toteutusta.

> Tämä dokumentoitu versio on v0.3:n suunnitteluperusta ja 17.11. tehty omistajan jatkorajaus. Alkuperäinen v0.3 ja 38 kohdan auditointimatriisi on säilytettävä auditointiaineistossa. Löydösten käsittely on erillisessä dokumentissa. Tässä ei suljeta testattavia löydöksiä.

## Tavoite ja rajat

Oppija hallitsee oktaavin 12 puolisävelaskelta (13 päätepistettä, 0–12), intervallien nimet ja suhteet, erottaa sävelvälejä kuulolla, rakentaa duuri- ja mollikolmisointuja ja soveltaa taitoja kitaralla. Teoria, kuulo/pelit ja kitara kulkevat samoissa jaksoissa. Kansalaisopiston A–A-harjoitus havainnollistaa, ei lukitse oppimista A:han. Arpeggiot ja septimisoinnut ovat **erillisiä mahdollisia jatkokokonaisuuksia**, eivät tämän työn hyväksymisehtoja.

Viisi toisistaan riippumatonta taitoa:
1. Intervallinimet, numero, laatu, puolisävelmäärät ja kirjoitusasu.
2. Kuulonvarainen vertailu: suunta, sama/eri, suurempi/pienempi ja pieni/suuri.
3. Kuulonvarainen nimeäminen.
4. Kolmisoinnun rakenne sekä duurin ja mollin ero.
5. Kitaralla soveltaminen. Itsekuittaus ei ole automaattinen mittaus.

## Intervallit ja vastaussäännöt

| Puolisävelaskelta (pa) | Opetuksen ensisijainen nimi | Esimerkki A:sta |
|---:|---|---|
| 0 | puhdas priimi | A–A |
| 1 | pieni sekunti | A–B♭ |
| 2 | suuri sekunti | A–B |
| 3 | pieni terssi | A–C |
| 4 | suuri terssi | A–C♯ |
| 5 | puhdas kvartti | A–D |
| 6 | tritonus (ylinouseva kvartti / vähennetty kvintti) | A–D♯ / A–E♭ |
| 7 | puhdas kvintti | A–E |
| 8 | pieni seksti | A–F |
| 9 | suuri seksti | A–F♯ |
| 10 | pieni septimi | A–G |
| 11 | suuri septimi | A–G♯ |
| 12 | puhdas oktaavi | A–ylempi A |

Priimi, kvartti, kvintti ja oktaavi ovat perusmuodoissaan puhtaita; sekunti, terssi, seksti ja septimi pieniä tai suuria. Pieni on vastaavaa suurta yhden puolisävelaskeleen suppeampi. Ylinousevat ja vähennetyt laadut eivät rajoitu tritonukseen, vaikka alkeiskurssi rajaa muun käsittelyn myöhemmäksi.

Pelkkä pa-määrä ei määrää yksiselitteisesti intervallin kirjoitettua nimeä. Nimi → pa on tämän taulukon kontekstissa yksiselitteinen. Pa → nimi kysyy taulukon tavanomaista nimitystä; 6 pa hyväksyy myös ylinousevan kvartin ja vähennetyn kvintin. Tarkat kirjoitusasutehtävät **aina sävelkirjaimin**: A–A♯ = ylinouseva priimi, A–B♭ = pieni sekunti. Kansalaisopiston nousevan kromaattisen A–A-soittoharjoituksen A♯ voidaan kirjoittaa B♭:ksi silloin, kun kysytään intervallina pientä sekuntia, ja muutoksen syy selitetään.

Erotetaan sävelasteet (perussävel, terssi, kvintti; 1–3–5) puolisävelkaavoista (duuri 0–4–7 pa, molli 0–3–7 pa). Duuri voidaan kuvata myös 4+3 pa ja molli 3+4 pa. Opetuksessa täydet nimet, vastauksissa myös vakiintuneet lyhyet nimet (priimi, oktaavi, tritonus). Käytetään termejä *intervalli* (synonyymi *sävelväli*), *puolisävelaskel* (pa) ja *perussävel*. Nykyinen kansainvälinen B/B♭-käytäntö ja H/B-selitys; sovitetaan PR #67:n lopulliseen linjaan. Paksu E-kieli = 6. kieli.

## Oppimisjaksot

| Jakso | Teoria | Kuulo ja pelit | Kitaralla | MVP |
|---|---|---|---|---|
| 1. Askel ja oktaavi | 0–12, puoli- ja kokosävelaskel, priimi, oktaavi | suunta, sama/eri sävel, suuremman välin vertailu (A), kokeileva kuuntelujakso (G) | A-kieli nauhat 0–12, sitten paksu E 5–8, A 4–7, D 3–7 | kyllä |
| 2. Nimiperheet | intervallin numero sävelkirjaimista eri lähtösävelillä | A tarkentuu, B (sama/eri) kaukaisilla pareilla | luonnollisten sävelten välin numero | kyllä |
| 3. Laadut | laatuperheet, ankkurit 0/3/4/7/12 pa, sitten koko 13 kohdan taulukko | C: pieni/suuri terssi; D: neljän ankkurin nouseva nimitehtävä | nykyinen intervallitila 3/4/7/12, kuultu väli ja soitto (F) | kyllä |
| 4. Suhteet | käännösparit ja enharmonian syventäminen | C muilla laaduilla; laskevat välit, B lähinaapureilla | kaksi väliä ja vertailu | myöhemmin |
| 5. Kolmisoinnut | duuri 0–4–7 pa, molli 0–3–7 pa | E: kuule duuri/molli, raportoidaan erikseen | A/Am ja D/Dm, nykyinen soinnun sävelet -tila | minimiosa |
| 6. Siirto | sama rakenne uudella perussävelellä | D laajenee; vaihtelevat lähtösävelet ja sointiväri | sama rakenne muualta otelaudalta | myöhemmin |
| 7. Kertaus | koko nimistö muistista | sekoitettu ja viivästetty testi, myös vaikeat välit ja harmoniset | selitä ja soita kaksi kolmisointua | myöhemmin |

MVP:n neljä **kuulolla nimettävää nousevaa ankkuria** ovat pieni terssi (3), suuri terssi (4), puhdas kvintti (7) ja puhdas oktaavi (12). Priimi (0) kuuluu sama/eri-tehtävään; teoriassa käytetään viittä ankkuria. Koko kurssin tavoite on kaikkien intervallien tunnistus nousevina, laskevina ja samanaikaisina; tämä ei ole MVP:n tulos.

Tehtävät A–G: A = kumpi suurempi (eri lähtösävelistä); B = sama vai eri (eri lähtösävelistä); C = pieni vai suuri (ensin terssit); D = nimeä neljä ankkuria kuulemalla; E = kuule duurin/mollin muutos (raportti, ei läpäisyehto); F = kuuntele ja soita (itsekuittaus); G = 30–60 s vastaamatonta kuuntelua kokeiluna. Tehtävät ovat oppimisharjoituksia, eivät peruste uuden pelimoottorin rakentamiselle.

## Osaamisen mittarit (pilotin hypoteesit, eivät validoituja normeja)

| Taito | MVP-näyttö | Ehdotettu tarkistus |
|---|---|---|
| Nimistö | 8 nimiperhettä; 26 suuntaista nimi↔pa-kohdetta; 6 kirjoitusasutehtävää | jokainen kerran itsenäisesti oikein; 1 ja 7 vrk jälkeen 24/26; 5/6 uudesta juuresta |
| Kuulovertailu | A, B, C-terssi, erilliset tulokset | 16/20 kussakin kahtena päivänä, jälkimmäinen ≥7 vrk |
| Kuulonvarainen nimeäminen | D: 3/4/7/12 pa nousevina, 4 vastausvaihtoehtoa | 17/20 ja viivästetty ≥7 vrk |
| Kolmisoinnut | duuri/molli uudesta juuresta sekä selitys | 2/2 ja oikea selitys; E kirjataan erikseen |
| Kitara | A–A, kuultu väli, A/Am ja D/Dm | itsekuittaus erillään testituloksesta |

Vihjeelliset yritykset erikseen. Äänettömäksi jäänyt kysymys mitätöidään eikä kirjata virheeksi. Testikysymyksen uusintasoittokerrat kirjataan (ehdotus: enintään kaksi). Osaamisarviota `proficiency()` (65 % tarkkuus, 35 % nopeus) tai valintapainoa `weight()` ei käytetä läpäisyrajana.

## Nykyisten osien hyödyntäminen

Lähtökohta on `book/osa-2.html#savelet-ja-intervallit`, generoitu `oppi/savelnimet/savelet-ja-intervallit.html`, `harjoittelija/engine.ts`-intervallitila, `chordTone: 'build'`, `ProgressStore`, `assets/edistyminen.js` ja `ReferencePlayer.playTimed()`. Ei toteuteta rinnakkaisia otelauta- tai sointumoottoreita. Oppimiskartan sijainti: nykyinen Sävelnimet ja sointumerkinnät; linkit Sävelkorva ja melodia- sekä Soinnut ja harmonia -aiheista. Varmistetaan mahdollinen uudelleennimeäminen PR #73:ssa. Säilytetään URL:t, ankkurit ja aiempi eteneminen. Muutos lähdemalliin `tools/oppimiskartta/aiheet.json` ja generaattoriin, ei vain generoituun HTML:ään.

## iPhone-äänen riippuvuus: omistajan 17.11. jatkorajaus

iPhonen yleinen äänikorjaus **erotetaan intervallien toteutustehtävästä**. PR #92 korjaa kappalesoitinta (`songAudio.ts`), **ei** vielä `ReferencePlayer`-intervalliääntä; siksi #92:n valmistuminen ei itsessään sulje K6:ta. Kuulotehtävissä pitää olla äänitesti sekä `En kuullut ääntä` -toiminto; käynnistys- tai kellovirhe ja käyttäjän ilmoittama äänettömyys mitätöivät yrityksen. Ääntä ei saa merkitä varmasti kuulluksi vain sen perusteella, että kellonaika etenee. Yhteisen apuosan/valinnaisen ReferencePlayer-kytkennän vaiheistettu malli (R1c) on suunnitteluehdotus, **ei tässä valtuutettu toteutus**. Muutos Riffikaikuun tai muihin shared-audio-käyttäjiin vaatii erillisen luvan ja regressiotestit.

Kuuloharjoituksia saa kehittää muilla testatuilla alustoilla; iPhone Safarin kuulo-osan julkaisu ja K6:n sulkeminen edellyttävät fyysistä iPhone-testiä (äänetön-kytkin, lukitus/paluu, tausta/paluu, kaiutin/Bluetooth/kuulokkeet ja mahdollinen mikrofoni). Merkitään laite, käyttöjärjestelmä, selain, commit-SHA ja havainnot. Teoriaosuus ei saa vaatia toimivaa ääntä.

## Rajat, riippuvuudet ja päätösportit

- Suunnitelman katselmointi `IV-REV` ei valtuuta koodia; erillinen toteutuslupa `IV-READY` valtuuttaa vain nimetyn rajatun työn; `IV-ACCEPT` edellyttää näyttöä ja fyysisiä laitetestejä kuulo-osan julkaisussa. Nämä eivät korvaa projektin PR #88:n portteja.
- Omistajan päätösehdotukset: L1 intervallit ovat PR #53:n kolmisointupilotin esitieto-osa; L2 PR #91:n rytmipilottia ei ohiteta; L3 täysi nimi opetuksessa ja vakiintuneet lyhyet vastauksina; A/E oletuksena A eli nykyisen rakenteen laajennus. Kirjattava erikseen hyväksytyiksi.
- Ennen varsinaista toteutusta tarkistetaan betan ajantasainen SHA, PR:t #53, #67, #73, #88, #91, #92 ja issue #9 sekä päällekkäisyyksien rajat.
- Ei muutoksia Ensikeikkaan, Riffikaikuun, rytmipilottiin, yhteiseen äänimoduuliin tai korvatreeniin tässä dokumentaatiotyössä.
- Testivaatimukset myöhemmälle toteutukselle: teoria ja enharmonia, aktiiviset vastausjoukot, satunnaistetut lähtösävelet/sointivärit, erilliset taitomittarit, äänen mitätöinti, saavutettavuus (näppäimistö, aria-live, ♯/♭), mobiili 320/360/390 px ja 200 % teksti, etenemisen säilyminen, build ja linkkitestit.

## Auditointijälki

Auditointi 17.11.2026: 33 alkuperäistä löydöstä + R1–R5, yhteensä 38. v0.3:ssa 13 dokumentaatiolla suljettua, 4 omistajan päätöstä odottavaa, 18 koodia ja testiä odottavaa sekä 3 pedagogista pilotin hypoteesia. Äänikorjausta tai muita testattavia löydöksiä **ei** ole merkitty suljetuiksi. Tarkempi tilakirjanpito: [auditointilöydökset](./intervallit-auditointiloydokset-v03.md).

**Ei automaattista mergeä tai julkaisua.**
