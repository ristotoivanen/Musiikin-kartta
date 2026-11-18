# 2. Pedagoginen suunnitelma: pulssista omaan komppiin ja ensimmäinen pilotti

**Tila:** ehdotus 16.11.2026. Ei toteutuslupa. Ei ohita issue #54:n portteja G1–G4.
**Suhde aiempaan:** PR #70 kuvaa kymmenen jakson oppimispolun ja toteutusohjelman P0–P8. Tämä asiakirja
ei toista sitä. Se tekee kolme asiaa: kytkee polun siihen, mitä kukin tehtävä oikeasti mittaa, rajaa
ensimmäisen pilotin tarkasti ja korjaa kaksi kohtaa, joissa aiempi suunnitelma lupaa mittaukselta
enemmän kuin se pystyy antamaan.

## 2.1 Kaksi korjausta aiempaan suunnitelmaan

**Napautuksen ajoitus ei ole "testattu kello".** PR #70:n toteutusohjelma (kohta 5) sallii pisteytyksen
"syötteillä, joiden kellot on testattu", ja Pulssijahti arvioi napautuksia. Napautuksen aikaleima on
kyllä tarkka, mutta se, mitä oppija **kuulee**, on myöhässä lähtöviiveen verran, ja selain tuntee tuon
viiveen huonosti (tekninen raportti 1.4). REPP-artikkeli viittaa arvioon, jonka mukaan näppäimistöön tai
hiireen perustuvan verkkonaputuksen virhe voi olla 60–100 ms. Seuraus: myös napautustehtävissä arvioidaan
**tasaisuutta ja pulssitasoa**, ei sitä, osuiko napautus klikin päälle. Bluetooth-kuulokkeilla klikin
päälle osuminen näyttäisi aina myöhästymiseltä.

**Taustan kanssa soittaminen ja mikrofoniarvio sulkevat toisensa pois, ellei taustaa tehdä mikrofonia
varten.** PR #70:n esimerkki B ("halutessaan kytketään mikrofoni") ja Bändin komppi yhdistävät
rumputaustan ja mikrofonin. Kokeessa pelkkä rumputausta tuotti 32–33 väärää iskua kahdeksassa tahdissa.
Mikrofoniarvio kuuluu siis tehtäviin, joissa taustana on pelkkä klikki tai oppijalla on kuulokkeet.
Bänditaustan kanssa soitetaan ilman automaattista arviota.

## 2.2 Polku: mitä harjoitellaan ja mitä mikäkin tehtävä todistaa

Sarake *Näyttö* käyttää issue #49:n ajatusta: tehtävä saa väittää vain sen, mitä se havaitsee.

| Vaihe | Oppija oppii | Nykyinen sisältö | Uusi tehtävämuoto | Näyttö |
| --- | --- | --- | --- | --- |
| 1 Pulssi | Löytää tasaisen sykkeen ja ykkösen | `oppi/rytmi/kuuntele-pulssi`, 84 BPM:n äänite | Sama pulssi kahdella eri soundilla ja tempolla | Kuunteluvalinta: mitattu. Taputus: itsearvio |
| 2 Jako | Laskee `1 ja 2 ja 3 ja 4 ja`, käsi liikkuu jatkuvasti | `oppi/rytmi/pulssi-ja-komppi`, `alas-ylos-yhdella-soinnulla` | Ruudukko, jossa liike ja soiva isku näkyvät erikseen | Ruutuvalinta: mitattu |
| 3 Tauko | Jättää iskun pois, käsi jatkaa | Ei ole | Kuuntele ja tunnista, täydennä puuttuva isku | Kuunteluvalinta: mitattu. Käden liike: vain itsearvio tai katsoja |
| 4 Kaksi komppia | Kuulee ja soittaa saman soinnun kahdella rytmillä | Ei ole | **Ensimmäinen pilotti** (luku 2.3) | Katso 2.4 |
| 5 Vaihto | Sointu vaihtuu, pulssi ei katkea | `kaksi-sointua-yhdessa-tahdissa` (G→D) | Vaihto vaimennetun iskun kautta | Itsearvio |
| 6 Aksentti | Painottaa 2 ja 4 tai muuta kohtaa | Ei ole | Kuuntele ja tunnista, rakenna | Kuunteluvalinta: mitattu |
| 7 Bändi | Soittaa rumpujen ja basson kanssa, pitää tauon | Harjoitustaustat ovat olemassa muussa käytössä | Tausta, josta kitara puuttuu | Itsearvio. Ei mikrofonia |
| 8 Oma komppi | Rakentaa 1–2 tahdin kuvion ja soittaa sen | Ei ole | Ruudukko rakennustilassa, kuuntelu, soitto | Rakennettu kuvio: tallennettu. Soitto: itsearvio |

Järjestys on suositus, ei lukko. Vaiheet 1–2 ovat jo sivustolla, joten niitä ei rakenneta uudelleen.
Pilotti linkittää niihin.

Mikrofoni voi myöhemmin tuoda lisäarvoa vaiheisiin 2–4 ja 8, joissa taustana riittää klikki. Vaiheisiin
5–7 se ei sovi: soinnun oikeellisuutta, aksenttia ja bänditaustan päälle soittoa se ei pysty arvioimaan.

## 2.3 Ensimmäinen pilotti: "Sama sointu, kaksi komppia"

Rajaus noudattaa issue #69:n ehdotusta (yksi sointu, kaksi 4/4-komppia, kontrolloidut näytteet).

**Tavoite.** Oppija kuulee, missä kohdassa tahtia isku jää pois, ja soittaa oikealla kitaralla kompin,
jossa on tauko, niin että käsi ei pysähdy.

**Aineisto.** Yksi tahti, kahdeksan kohtaa. `↓` on alasveto, `↑` ylösveto ja `·` kohta, jossa käsi
liikkuu mutta ei osu kieliin.

| | 1 | ja | 2 | ja | 3 | ja | 4 | ja |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Komppi A | ↓ | · | ↓ | · | ↓ | · | ↓ | · |
| Välivaihe | ↓ | · | ↓ | ↑ | ↓ | · | ↓ | ↑ |
| Komppi B | ↓ | · | ↓ | ↑ | · | ↑ | ↓ | ↑ |

Komppi B syntyy välivaiheesta poistamalla kolmosen alasveto. Se on pilotin ainoa uusi asia. Kuviot ovat
yleisiä säestysrytmejä, eikä niille anneta tyylinimeä.

**Ääni.** Näytteet tehdään nykyisellä `tools/aanet`-generaattorilla samasta rytmidatasta, jota ruudukko
näyttää. Tempo 72 BPM, vaihtoehtona 60 ja 84. Jokaisesta kompista on versio vaimennetuilla kielillä ja
G-soinnulla. Tausta on pelkkä klikki, jossa ykkönen erottuu.

**Kulku, noin 8–10 minuuttia.**

| # | Vaihe | Oppija tekee | Kesto |
| --- | --- | --- | --- |
| 1 | Kuule | Kuuntelee kompit A ja B peräkkäin samalla soinnulla. Kysymys: "Kumpi tuntuu keinuvammalta?" Ei oikeaa vastausta | 1 min |
| 2 | Näe | Näkee kaksi ruudukkoa ja kuulee yhden kompin. Valitsee, kumpaa ruudukkoa ääni vastaa. Kolme kierrosta, järjestys vaihtelee | 1–2 min |
| 3 | Muuta | Saa välivaiheen ruudukon. Poistaa yhden iskun ja kuulee tuloksen. Tehtävä: "Poista kolmosen isku. Mitä tapahtui?" | 1–2 min |
| 4 | Soita vaimennettuna | Vasen käsi lepää kielillä. Soittaa kompin A neljä tahtia mallin kanssa ja neljä tahtia pelkän klikin kanssa | 2 min |
| 5 | Soita komppi B | Sama komppi B:llä: ensin vaimennettuna, sitten halutessaan G-soinnulla | 2–3 min |
| 6 | Arvioi itse | Kaksi kysymystä: "Liikkuiko käsi myös kolmosen kohdalla?" ja "Pysyitkö mukana, kun malli vaikeni?" | 30 s |
| 7 | Uusi esimerkki | Sama komppi B eri tempolla. Ruudukon saa piiloon | 1 min |

Vaiheessa 4 ja 5 malli vaikenee neljän tahdin jälkeen ja klikki jatkuu. Oppija joutuu silloin pitämään
kuvion itse. Tämä on pilotin tärkein oppimishetki, ja se toimii ilman mikrofonia.

**Teoria samassa näkymässä.** Kaksi lyhyttä tekstiä, kumpikin avautuu pyydettäessä: "Miksi käsi liikkuu
tauon aikana?" ja "Mitä ja-kohta tarkoittaa?". Jälkimmäinen linkittää nykyiseen lukuun
`pulssi-ja-komppi`.

**Ei kuulu pilottiin:** mikrofoni, pisteet, tasot, aksentit, synkooppi nimettynä käsitteenä,
sointuvaihto, bänditausta, 16-osat, oma komppi, uusi tallennusmalli.

## 2.4 Mitä pilotin kukin vaihe mittaa

| Vaihe | Mitä tallentuu | Mitä siitä saa väittää | Mitä ei saa väittää |
| --- | --- | --- | --- |
| 1 Kuule | Ei mitään | – | – |
| 2 Näe | Valinnat, oikein/väärin | Oppija yhdisti kuullun rytmin ruudukkoon 3/3 | Että hän osaa soittaa sen |
| 3 Muuta | Lopullinen ruudukko | Oppija poisti oikean iskun | Että hän kuuli eron |
| 4–5 Soita | "Harjoiteltu"-merkintä oppijan painalluksesta | Oppija ilmoitti harjoitelleensa | Että hän soitti tai että rytmi piti |
| 6 Arvioi | Kaksi itsearviota | Oppijan oma käsitys | Mitään ajoituksesta |
| 7 Uusi | Sama kuin 4–5 | Sama | Sama |

Sivun yhteenveto sanoo esimerkiksi "Tunnistit rytmin ruudukosta. Harjoittelit kahta komppia." Se ei sano
"Osaat kaksi komppia".

## 2.5 Pilotin koekäyttö

Tavoite on selvittää, oppiiko oppija tauollisen kompin ja mikä häntä auttaa. Otos on pieni, joten tulos
on laadullinen.

- **Testaajat:** 5–8, joukossa vähintään kaksi, jotka eivät ole aiemmin soittaneet komppia, ja yksi
  puhelimella.
- **Havainnoija** on paikalla tai katsoo videon. Havainnoija arvioi soiton, ohjelma ei.
- **Havainnot, kirjataan erikseen:**
  1. Löytääkö testaaja aloituksen ilman ohjeita.
  2. Kuunteluvalinnat (ohjelma tallentaa).
  3. Soittaako testaaja kompin B neljä tahtia klikin kanssa, kun malli on vaiennut (havainnoija: 0–4
     tahtia oikein).
  4. Liikkuuko käsi tauon aikana (havainnoija: kyllä / välillä / ei).
  5. Testaajan oma arvio samoista asioista. Vertaa kohtiin 3 ja 4.
  6. Sama tehtävä 2–7 päivän kuluttua ilman ruudukkoa.
- **Kohta 5 on tämän selvityksen kannalta tärkein.** Jos oppijan itsearvio ja havainnoijan arvio
  poikkeavat toisistaan usein, se on näyttö siitä, että pelkkä itsearvio ei riitä ja että "äänitä ja
  kuuntele" tai mikrofonihavainto toisi oikeaa lisäarvoa. Jos ne täsmäävät, mikrofoniarvion hyöty on
  pieni eikä sitä kannata rakentaa.

## 2.6 Vaihtoehto ilman mikrofonia ja vertailu mikrofoniin

| | Kuuntelu, ruudukko ja itsearvio | Napautus ruudulle | Äänitä ja kuuntele itse | Mikrofonihavainto | Ihminen katsoo |
| --- | --- | --- | --- | --- | --- |
| Harjoiteltava taito | Kuuleminen, rakenteen ymmärrys, soitto ilman palautetta | Pulssi ja kuvio sormella | Oman soiton kuunteleminen | Soitto kitaralla | Soitto kitaralla |
| Mitä näyttöä syntyy | Valinnat mitattu, soitto ei | Tasaisuus ja kuvio mitattu, eri liikkeellä kuin soitto | Ei mitattua. Oppijan oma havainto | Iskujen määrä, tasaisuus, kuvio. Epävarmuudella | Kaikki, myös käden liike |
| Väärän palautteen riski | Ei ole: ei väitä mitään soitosta | Pieni, jos klikkiin osumista ei arvioida | Ei ole | Suuri ilman validointia | Pieni |
| Laitekattavuus | Kaikki | Kaikki | Lähes kaikki. iPhone varauksin | Rajattu: ei Bluetoothia, ei taustaa kaiuttimesta | Ei riipu laitteesta |
| Toteutustyö | Pieni. Käyttää nykyistä generaattoria | Pieni tai kohtalainen | Kohtalainen | Suuri: mittaus, validointi, viestintä | Ei koodia |
| Siirtyykö kitaraan | Kyllä, soitto on mukana | Osittain. Sormen napautus ei ole alas–ylös-liike | Kyllä | Kyllä | Kyllä |

**Arvio.** Ensimmäisessä pilotissa pedagoginen hyöty tulee kolmesta asiasta: oppija kuulee eron, näkee
saman rakenteen ruudukossa ja soittaa mallin vaiettua. Mikään niistä ei tarvitse mikrofonia.
Mikrofonihavainnon ainoa asia, jota muut eivät anna, on ulkopuolinen tieto omasta tasaisuudesta ja
tempon ryöminnästä. Se on arvokasta myöhemmin, ei ensimmäisessä kompissa.

"Äänitä ja kuuntele itse" on näiden välissä ja pedagogisesti aliarvostettu: se harjoittaa kuuntelemista,
ei väitä mitään ja on teknisesti paljon helpompi. Kun tausta soi kaiuttimesta, äänitys sisältää sekä
klikin että soiton oikeassa keskinäisessä ajoituksessa ilman mitään kalibrointia. Kuulokkeilla klikki ei
tallennu, ja silloin oppija kuulee vain oman soittonsa.

## 2.7 Suositus

1. Pilotti tehdään ilman mikrofonia luvun 2.3 rajauksella.
2. Pilotin koekäytössä verrataan oppijan itsearviota havainnoijan arvioon (2.5, kohta 5). Tulos kertoo,
   tarvitaanko mikrofonia lainkaan.
3. "Äänitä ja kuuntele itse" lisätään samaan tehtävään vasta, jos kohta 2 osoittaa tarpeen.
4. Mikrofonihavainto tulee kysymykseen vasta, kun mittauskoe (asiakirja 4) on läpäisty oikealla
   kitaralla.
