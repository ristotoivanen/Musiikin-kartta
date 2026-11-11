# Kitaraharjoittelijan auditointi ja korjaukset

11.11.2026 · Musiikin kartta · haara `fix/harjoittelija-auditointi` · lähtö `e17b593` (julkaistu `main`)

## Tulos lyhyesti

Kaksi raportoitua ongelmaa on toistettu ja korjattu. Harjoitus ei enää näytä
vastausta kysymyksen alussa, ja mikrofonin voi testata erikseen ennen harjoitusta.
Katselmuksessa löytyi lisäksi 27 muuta vikaa tai puutetta, jotka on korjattu samalla.

Koodi on testattu automaattisesti: 158 yksikkötestiä ja 32 selaintestiä kahdella
näyttökoolla, sekä tuotantobundlella että kehityspalvelimella. **Oikealla kitaralla,
mikrofonilla tai äänikortilla ei ole testattu mitään.** Kaikki mikrofonitestit
käyttävät simuloitua signaalia. Otelaudalla vastaaminen on julkaisuvalmis.
Mikrofonilla vastaaminen kannattaa julkaista vasta, kun alla olevat
hyväksyntätestit 1–6 on tehty oikealla soittimella.

Tuotantoon ei ole julkaistu mitään, eikä haaraa ole yhdistetty `main`-haaraan.

## Kaksi raportoitua ongelmaa

### 1. Vastaus näkyi liian aikaisin

**Toisto:** tyhjällä selaintallennuksella Aloita harjoitus näytti kysymyksessä 1
oikean kohdan vihreänä nimineen, ja painikkeessa luki Piilota vihje.

**Syy:** asetuksen `hints` oletus oli `fade`, ja `prepareQuestion` avasi vihjeen
itse kuudessa ensimmäisessä kysymyksessä.

**Korjaus:** harjoittelutapoja on kolme, ja ne valitaan asetusten näkyvimmästä kohdasta.

| Tapa | Toiminta | Tilastointi |
| --- | --- | --- |
| Testaa osaamistasi (oletus) | Vastaus ei näy. Vihje avataan pyynnöstä. Jokainen kysymys alkaa ilman vihjettä. | Ilman vihjettä vastatut ovat itsenäisiä. |
| Opettele | Oikea kohta näkyy heti. Kysymyksen alla lukee, ettei kyse ole testistä. | Kaikki vastaukset ovat vihjeellisiä. |
| Vähennä vihjeitä | Kysymykset 1–3 vastaus näkyvissä, 4–6 apupiste, loput ilman. | Kuusi ensimmäistä vihjeellisiä, loput itsenäisiä. |

Vihjeellä on kaksi tasoa. **Näytä vihje** antaa apupisteen, josta vastauksen voi
päätellä (esimerkiksi kielen vapaan sävelen tai asteikon perussävelet). **Näytä
vastaus** näyttää oikean kohdan. Käytetty vihje jää voimaan, vaikka sen piilottaa:
moottori säilyttää korkeimman käytetyn tason, eikä käyttöliittymä voi laskea sitä.
Kierroksen yhteenveto, tilastot ja harjoituskerrat erottavat itsenäiset vastaukset.

**Vanhat tallennetut asetukset:** aiempaa automaattista oletusta `fade` ei voi
erottaa käyttäjän omasta valinnasta. Tallennusversio nousee kolmoseen, ja versioiden
1–2 arvo `fade` (tai puuttuva arvo) vaihtuu tapaan Testaa osaamistasi. Käyttäjä näkee
kerran ilmoituksen, jossa muutos kerrotaan ja neuvotaan, mistä vihjeet saa takaisin.
Arvot Näytä aina ja Piilota säilyvät, samoin kaikki muut asetukset, tilastot, tulokset
ja harjoituskerrat. Pelkkä sivun avaaminen ei kirjoita tallenteeseen mitään.

### 2. Mikrofonin toimintaa ei nähnyt

**Toisto:** sivulla ei ollut mikrofonitestiä eikä tasomittaria. Mikrofoni avautui
vain mikrofoniharjoituksessa tai kalibroinnissa, ja havainto näkyi vain, kun sävel
oli jo hyväksytty.

**Korjaus:** sivulla on aina näkyvä Mikrofoni-osio ja painike **Testaa mikrofoni**.
Se toimii vastaustavasta riippumatta eikä koske harjoitusmoottoriin tai tallennukseen.
Testi näyttää äänitulon nimen ja kanavan, äänitason mittarin (−60…0 dB) kynnysviivoineen,
tunnistetun sävelen (esimerkiksi E2), taajuuden, vireen sentteinä ja tunnistuksen
varmuuden. Se kertoo myös, kun vakaa sävel kelpaisi vastaukseksi.

Kuusi tilaa erottuvat toisistaan tekstillä ja värillä:

1. Mikrofoni ei ole käytössä.
2. Pyydetään mikrofonilupaa.
3. Mikrofoni kuuntelee, mutta ääntä ei kuulu. Ohjeet: laitteen valinta, äänikortin gain ja INST-tila, kynnyksen lasku.
4. Ääntä kuuluu, mutta säveltä ei tunnisteta. Epävireinen sävel näytetään erikseen poikkeamineen.
5. Sävel tunnistettu.
6. Virhe: lupa evätty, laitetta ei löydy, laite varattu tai äänitulo katkesi. Jokaisella on oma toimintaohje.

Tasomittari liikkuu myös silloin, kun säveltä ei hyväksytä, koska äänenkäsittely
raportoi nyt jokaisen kehyksen tason ja tilan. Testi käyttää samaa ketjua ja samaa
Pitchy-tunnistusta kuin harjoitus. Testin lopettaminen pysäyttää äänivirran ja
irrottaa analyysisolmut. Harjoituksen aikana sama taso ja kuultu sävel näkyvät
kysymyksen alla.

## Muut löydetyt viat vakavuusjärjestyksessä

Kaikki alla olevat on korjattu, ellei toisin mainita.

### Vakavat

| # | Vika | Syy | Korjaus |
| --- | --- | --- | --- |
| 3 | Mikrofoni avattiin uudelleen joka kysymyksessä. Firefox kysyy luvan joka kerta, ja USB-laitteen avaus kestää. | Vastauksen jälkeen `mic.stop()`, seuraavassa kysymyksessä uusi `getUserMedia` ja uusi `AudioContext`. | Mikrofoni pysyy auki koko kierroksen. Se suljetaan tauolla, lopussa, välilehden piilottamisessa ja sivulta poistuttaessa. |
| 4 | Selain saattoi jumittua 10–20 sekunniksi. | Jokainen esimerkkiääni ja mikrofonin avaus loi ja sulki oman `AudioContext`in. Tällä koneella (oletuslähtönä Scarlett Solo) uuden kontekstin luonti jäi odottamaan äänilaitetta, kun edellinen oli juuri suljettu. Toistui myös ilman harjoittelijaa. | Sivulla on yksi yhteinen äänikonteksti, joka luodaan kerran ja suljetaan sivulta poistuttaessa. Katso Tunnetut ongelmat, kohta 1. |
| 5 | Sävelharjoitus väitti astetta: ”Oikein: E, 5. aste”. | Aste laskettiin kaikissa tiloissa oletustoonikan A ja oletussoinnun mukaan. | Aste kuuluu vain asteikko-, sointu- ja CAGED-tehtäviin. |
| 6 | Boksin tai CAGED-muodon valinta johti tyhjään tai vajaaseen tehtävään, ja virhe tuli vasta aloitettaessa tai kesken kierroksen. | Boksi ja muoto suodatettiin erikseen tallennetulla nauha-alueella (oletus 0–5). | Boksi ja muoto määräävät alueensa itse. `validate` tarkistaa valinnat etukäteen, estää aloituksen ja kertoo syyn. |
| 7 | Kuullun sävelen ja asteen tunnistuksen vihje paljasti vastauksen suoraan tai ei auttanut lainkaan. | Vihje näytti aina kysytyn kohdan sävelnimineen. | Tehtäväkohtaiset kaksitasoiset vihjeet. |
| 8 | Mikrofonin avaamiseen ja lupakyselyyn kulunut aika laskettiin ensimmäisen kysymyksen vastausaikaan. | Kello käynnistyi ennen mikrofonin avautumista. | Mikrofoni avataan ennen kysymystä. Myös sävelen vakaantumisaika vähennetään vastausajasta. |
| 9 | Tallennettu äänilaite, jota ei enää ole, esti mikrofonin käytön, vaikka valikossa näkyi oletustulo. | Laite pyydettiin ehdolla `exact`, ja valikko näytti ensimmäisen vaihtoehdon. | Avaus yrittää oletustuloa ja kertoo siitä. Valikossa näkyy Aiemmin valittu laite. |

### Kohtalaiset

| # | Vika | Korjaus |
| --- | --- | --- |
| 10 | Toonika ja asteet kirjoitettiin ristiin: valinta E♭ näkyi kysymyksessä muodossa D♯, ja B-duurin terssi alennusasetuksella muodossa E♭. | Toonika kirjoitetaan aina kuten muualla sivustolla, ja asteet sävellajin mukaan yhteisen kirjaston `noteName`-funktiolla. |
| 11 | Kysymys oli kieliopillisesti väärin: ”Mikä aste C on A-mollipentatoninen-asteikossa?” | ”A-mollipentatoninen: mikä aste on C?” |
| 12 | Asteikkotehtävässä boksin ulkopuolinen oikea sävel kelpasi vastaukseksi. | Vastaus kelpaa vain harjoitusalueelta, kuten CAGEDissa. |
| 13 | Järjestyksessä soitettava asteikko hyväksyi minkä tahansa oktaavin, ja kierros katkesi kesken asteikon. | Oktaavi tarkistetaan aina, ja kierros on yksi läpisoitto. |
| 14 | Intervallitehtävä kysyi pieniä intervalleja moninkertaisesti suuriin nähden. | Ensin valitaan intervalli ja suunta, sitten sävelpari. |
| 15 | Soimaan jäänyt sävel saattoi vastata seuraavaan kysymykseen: 140 ms epäselvää ääntä riitti virittämään tunnistuksen uudelleen. | Uusi vastaus vaatii 120 ms oikeaa hiljaisuutta tai uuden alukkeen. Epäselvät kehykset eivät viritä porttia. |
| 16 | Asteikon ja CAGEDin tilastokohde oli yksittäinen kieli ja nauha, vaikka kysyttiin astetta. Kohteita oli niin paljon, ettei heikkojen painotus käytännössä toiminut. | Kohde on aste. Vanhat avaimet säilyvät ja ovat luettavissa. |
| 17 | Osaamisarvio ei koskaan toipunut alun virheistä, ja nopeusrajat (1,5–5 s) olivat liian tiukat oikealla kitaralla vastaavalle. | Arvio on liukuva keskiarvo viimeisimmistä vastauksista. Rajat ovat 2,5–8 s. |
| 18 | Kierroksen aikana asetukset täyttivät ruudun, ja puhelimella kysymys oli pitkän vierityksen takana. | Kierroksen aikana asetukset tiivistyvät yhdelle riville ja kysymys on ylimpänä. |
| 19 | Oikealla kitaralla soittava joutui tarttumaan hiireen jokaisen vastauksen jälkeen. | Oikean vastauksen jälkeen siirrytään itse seuraavaan. Asetuksen saa pois. |
| 20 | Kaksikanavaisesta äänikortista pyydettiin monosignaalia, jolloin selain summaa kanavat puoleen tasoon ja toisen tulon kohina tulee mukaan. | Tulo avataan kahdella kanavalla ja analysoidaan se, jossa kitara soi. |

### Lievät

| # | Vika | Korjaus |
| --- | --- | --- |
| 21 | Matalat esimerkkisävelet eivät kuuluneet pienistä kaiuttimista (kolmioaalto, E2 = 82 Hz). | Kitaramaisempi sävel, jossa on ylä-ääniä. |
| 22 | Kuullun sävelen nimeäminen ilman vertailusäveltä vaatii absoluuttista sävelkorvaa. | Oletuksena soi ensin vertailusävel A. Asetuksen saa pois. |
| 23 | Näppäimistöllä vastaava kadotti kohdistuksen, kun otelauta lukittui vastauksen jälkeen. | Kohdistus siirtyy Seuraava kysymys -painikkeeseen ja takaisin otelaudalle. |
| 24 | Väärä vastaus ei jättänyt jälkeä otelaudalle, eikä oikea kohta näkynyt ratkaisun jälkeen. | Väärät valinnat merkitään, ja ratkaisu näkyy vastauksen jälkeen. |
| 25 | Tauolla kysymys jäi näkyviin, joten miettimisaika jäi mittaamatta. | Tauolla kysymys ja otelauta ovat piilossa. |
| 26 | Analyysi-ikkuna oli kiinteä 8192 näytettä, mikä on 192 kHz:n äänikortilla vain 43 ms. | Ikkuna on noin 170 ms kaikilla taajuuksilla. |
| 27 | Navigaation Interaktiiviset harjoitukset vei sivulle nimeltä Kitaraharjoittelija. | Linkin nimi on Kitaraharjoittelija kaikilla sivuilla. |
| 28 | Selaintestit soittivat testiääniä koneen oikeasta äänilähdöstä. | Testiselain käynnistyy ilman äänilähtöä. |
| 29 | Varmuuskopion pystyi lataamaan mutta ei palauttamaan, eikä tuloksia voinut poistaa. | Palautus tarkistaa tiedoston ja pyytää vahvistuksen. Tulosten poisto säilyttää asetukset. |

## Harjoitustilojen auditointi

| Tila | Havainnot | Tila nyt |
| --- | --- | --- |
| Otelaudan sävelet | Vastaus näkyi heti, palaute väitti astetta, vihje oli sama kuin vastaus. | Korjattu. Kysymys nimeää kielen, palaute kertoo kielen ja nauhan. Otelaudalla vaaditaan kysytty kieli. |
| Tunnista kuultu sävel | Vihje paljasti nimen, tehtävä vaati absoluuttista sävelkorvaa, 12 painiketta myös luonnollisilla sävelillä. | Korjattu. Vertailusävel A, vihje näyttää ensin kohdan ilman nimeä, painikkeita on 7 tai 12. |
| Kuule ja toista | Tilastokohde oli kieli ja nauha, vaikka kysytään sävelkorkeutta. | Korjattu. Kohde on sävelkorkeus. |
| Asteikot ja pentatoniikka | Boksi ja alue ristiriidassa, kirjoitusasu sekaisin, boksin ulkopuoli kelpasi, järjestys ei tarkistanut oktaavia. | Korjattu. |
| Sointusävelet | Kapealla alueella kierros katkesi kesken, kun aste puuttui. Terssin kirjoitusasu riippui ylennysasetuksesta. | Korjattu. Puuttuva aste kerrotaan ennen aloitusta. |
| CAGED | Muodot olivat oikein, mutta alue rajasi ne vajaiksi. Vihje näytti heti koko muodon asteineen. | Korjattu. Taso 1 näyttää muodon pisteinä, taso 2 asteet. |
| Intervallit | Valinta painottui pieniin intervalleihin. Palaute ei nimennyt intervallia. | Korjattu. Palaute: ”A2 → C♯3 on suuri terssi ylöspäin”. |

Tauko, jatkaminen, lopettaminen ja tallennus on testattu jokaisessa tilassa
selaintesteillä. Jokaisesta tilasta on linkki oppaan lukuun, jossa teoria on
(Lue teoria), ja asteikkotilasta otelautaharjoittelijaan samalla toonikalla ja asteikolla.

## Musiikillisen logiikan tarkastus

Musiikillinen perusaineisto oli oikein. Virheet olivat siinä, miten sitä esitettiin
ja rajattiin (kohdat 5, 6, 10–14). Tarkastus on tehty ohjelmallisesti riippumattomia
vertailuarvoja vasten (`tests/music.test.ts`, `tests/engine.test.ts`):

- **Viritys ja numerointi:** E4 B3 G3 D3 A2 E2, kieli 1 on ohut E. Kaikkien 150 kohdan (6 kieltä × nauhat 0–24) MIDI-arvo on vapaa kieli + nauha.
- **Sävelnimet:** kansainvälinen B, ylennykset ja alennukset, enharmoniset vastineet, B♯3 = C4 ja C♭4 = B3.
- **Asteikot:** kaikkien yhdeksän asteikon (molli- ja duuripentatoninen, seitsemän moodia) sävelrakenne vastaa teoriaa. Asteiden nimet vastaavat puoliaskelia.
- **Transponointi:** jokainen asteikko kaikissa 12 toonikassa. Sävelluokat ovat oikein, jokainen aste saa oman kirjaimensa ja ensimmäinen aste on toonikan nimi.
- **Soinnut:** duuri 1–3–5, molli 1–♭3–5, dominanttiseptimi 1–3–5–♭7. Esimerkit A, Am, G7 ja B♭7 oikein kirjoitettuina.
- **Intervallit:** nimet 1–12 puoliaskelelle. Nousevat ja laskevat intervallit säilyttävät tarkan etäisyyden kaikissa oktaaveissa.
- **Pentatoniset boksit:** 2 asteikkoa × 12 toonikaa × 5 boksia. Jokaisella kielellä on täsmälleen kaksi asteikon säveltä, eikä väliin jää muita. A-mollin boksi 1 on nauhoilla 5–8 ja E-mollin nauhoilla 0–3.
- **CAGED:** viisi muotoa ovat samat avosoinnut kuin yhteisen kirjaston `chordGrip` palauttaa. Siirrettyinä ne sisältävät vain asteet 1, 3 ja 5 kaikissa 12 sävellajissa. C-duurin sijainnit: C 0–3, A 3–5, G 5–8, E 8–10, D 10–13.
- **Vastattavuus:** satunnaistesti muodostaa yli 2 000 kysymystä kaikissa seitsemässä tilassa satunnaisilla kielillä, alueilla ja asetuksilla. Jokaisella kysymyksellä on vähintään yksi kelpaava vastaus näkyvällä alueella, tai `validate` on estänyt aloituksen.

**Vertailu otelautaharjoittelijaan:** molemmat käyttävät samaa `assets/otelauta.js`-kirjastoa
asteikoille, bokseille ja kirjoitusasulle, joten ne eivät voi antaa eri tulosta.
Harjoittelijan omat CAGED-muodot on sidottu kirjastoon testillä. Toonikoiden nimet
(E♭, A♭, B♭, C♯, F♯) ovat nyt samat molemmilla sivuilla.

## Mikrofonitunnistuksen katselmus

Ketju: mikrofoni → `AudioContext` → kanavajako → analyysi → Pitchy (McLeod) →
tila ja taso → vakaa sävel → vastauksen tarkistus → palaute.

| Kohta | Havainto ja toteutus |
| --- | --- |
| Oikeudet | Lupa pyydetään vain käyttäjän painalluksesta. Evätty lupa, puuttuva laite, varattu laite ja HTTPS-puute saavat oman ohjeensa. Myöhässä myönnetty lupa vapautetaan, jos toiminto on jo peruttu. |
| USB-äänikortin valinta | Laitteet näkyvät luettelossa luvan jälkeen. Laitteen vaihto testin aikana avaa uuden laitteen ja sulkee vanhan. Luettelo päivittyy, kun laite kytketään tai irrotetaan. |
| Kynnysarvot | RMS 0,01 (−40 dB), selkeys 0,94, vire ±35 senttiä, vakaus 240 ms. Säädettävissä, ja muutos vaikuttaa heti testin aikana. Taustakohinan mittaus asettaa äänikynnyksen. |
| Aluke | Alukkeen epävakaat kehykset eivät vastaa. Vakausaika alkaa, kun sävel on asettunut. Enintään 80 ms:n katkos ei nollaa sitä. |
| Ylä-äänet ja oktaavivirheet | Synteettinen sävel, jossa perustaajuus on osaääniä heikompi, tunnistuu oikeaan oktaaviin. Oikeaa kitaraa ei ole testattu. Tarkan sävelkorkeuden tarkistuksessa oktaavin heitto näytetään erikseen (”oikea sävelnimi, mutta eri oktaavi”). |
| Vire | Yli toleranssin poikkeava sävel näytetään poikkeamineen, mutta se ei kelpaa vastaukseksi eikä ole virhe. |
| Virheelliset havainnot | Kohina, alueen ulkopuolinen taajuus ja epävire eivät ole vastauksia eivätkä virheitä. Vakaa mutta tehtävästä eriävä sävel on ehdotus: se kirjataan virheeksi vain käyttäjän vahvistuksella. Ohitetut havainnot tallentuvat tulokseen kenttään `mismatches`. |
| Soimaan jäävä sävel | Uusi kysymys nollaa portin. Vastaus vaatii vaimennuksen tai uuden näppäyksen. |
| Laitteen irrotus | Äänivirran päättyminen tai äänikontekstin keskeytyminen tauottaa harjoituksen, vapauttaa laitteen ja kertoo syyn. Jatka avaa mikrofonin uudelleen. |
| Sulkeminen | Äänivirta pysäytetään ja analyysisolmut irrotetaan tauolla, kierroksen lopussa, testin lopussa, välilehden piilottamisessa ja sivulta poistuttaessa. |
| Kieli ja nauha | Mikään teksti ei väitä mikrofonin tunnistavan kieltä tai nauhaa. Ohje sanoo sen suoraan, ja palaute on muotoa ”Soitit sävelen E3”. |
| Sävelluokka ja tarkka korkeus | Sävelnimitarkistus hyväksyy kaikki oktaavit, tarkka tarkistus vain saman MIDI-arvon. Molemmat on testattu. |

### Rajoitukset

- Tunnistus kuulee yhden sävelen kerrallaan. Sointuja tai kahta yhtä aikaa soivaa kieltä se ei tunnista.
- Legato (hammer-on, pull-off, liuku) ilman uutta näppäystä ei rekisteröidy uutena vastauksena. Tämä on tarkoituksellista: sama sääntö estää ylä-ääneksi kääntyvää havaintoa vastaamasta kahdesti.
- Vastaus syntyy aikaisintaan noin 0,3–0,4 sekunnin kuluttua näppäyksestä (analyysi-ikkuna ja vakausaika).
- Mikrofonilla ”heti oikein” on optimistinen luku, koska eriävä havainto on virhe vain vahvistettuna.
- Alukkeen tunnistus ja kanavan valinta ovat uusia heuristiikkoja. Ne on testattu vain synteettisellä signaalilla.
- Särö, voimakas sustain ja toisten kielten resonanssi voivat heikentää selkeyttä. Vaikutusta ei ole mitattu.
- Kaiuttimista kuuluva tausta tai esimerkkiääni voi sekoittaa tunnistusta. Esimerkin ajaksi analyysi keskeytetään.

## Tilastointi ja tallennus

| Kysymys | Vastaus |
| --- | --- |
| Tallentuvatko oikeat ja väärät vastaukset oikein? | Kyllä. Testattu yksikkö- ja selaintesteillä, myös kaksoisnapsautuksilla. Samaa vastausta ei voi tallentaa kahdesti. |
| Erotetaanko ensimmäisen yrityksen onnistuminen? | Kyllä (`first`, `errors`). |
| Vaikuttavatko vihjeet oikein? | Kyllä. Vihjeelliset vastaukset menevät omaan tilastoonsa (`guided`), eikä piilottaminen muuta sitä. |
| Onko vastausaika luotettava? | Parempi kuin ennen: siihen ei lasketa taukoja, esimerkin toistoa, mikrofonin avaamista eikä sävelen vakaantumista. |
| Vääristävätkö epävarmat havainnot tilastoja? | Eivät tuota virheitä. Ne tekevät mikrofonin luvuista optimistisia. |
| Onko osaamisarvio mielekäs? | 65 % heti oikein -osuutta ja 35 % nopeutta, viimeisimmät vastaukset painottuvat. Rajat ovat harkintaa, eivät mitattuja. |
| Toimiiko heikkojen painotus? | Kyllä, kun kohteesta on kolme itsenäistä vastausta. Astekohtaiset kohteet täyttävät ehdon nopeasti. |
| Säilyvätkö tulokset uudelleenlatauksessa? | Kyllä. Testattu. |
| Toimiiko vanhojen tietojen luku? | Versiot 1–3. Rikkinäistä tai tulevan version tallennetta ei kirjoiteta päälle. |
| Onko malli versioitu? | Kyllä, versio 3. Kuvaus on tiedostossa `harjoittelija/README.md`. |

Edistyminen-osio näyttää harjoituksittain vastausten määrän, itsenäisesti heti oikein
menneet, vihjeelliset ja keskiajan. Seuraavaksi-kohta nimeää epävarmat kohteet
selkokielellä (esimerkiksi ”A-mollipentatoninen: ♭3. aste”). Osaamiskartta kattaa
harjoituksen Otelaudan sävelet.

## Integraatio Musiikin karttaan

- Oppaan kahdeksan harjoituslinkkiä avaavat oikean harjoituksen tallennetuista asetuksista huolimatta. Testattu jokainen.
- Etusivun Jatka kitaraharjoittelua -linkki lukee tallennusversiot 2 ja 3.
- Otelautaharjoittelija, oktaaviharjoitus, harjoitustaustat ja oppaan korvaharjoitukset toimivat, vaikka harjoittelijan bundlen lataus estetään. Testattu.
- Oppaan lukumerkinnät ovat eri avaimissa, eikä harjoittelija koske niihin. Testattu.
- Linkkitarkistus: 17 sivua, 550 viittausta, 0 ongelmaa.
- PDF: `tools/pdf/rakenna-pdf.py` tuottaa 67 sivua, ja tiedoston koko on sama kuin julkaistun. Navigaatio ei kuulu PDF:ään. Julkaistavaa PDF:ää ei ole muutettu.
- Oppaan sivuilta muuttui vain navigaation linkin nimi (yksi rivi sivua kohti). Sisältöön ei ole koskettu.
- Sivusto toimii ilman mikrofonia: otelaudalla vastaaminen ei pyydä lupaa missään vaiheessa.

## Muutetut tiedostot

- `harjoittelija/engine.ts`, `settings.ts`, `music.ts`, `storage.ts`: harjoittelutavat, vihjeet, validointi, kirjoitusasu, tallennusversio 3.
- `harjoittelija/feedback.ts` (uusi): ohjeet, palautteet ja kohteiden kuvaukset.
- `harjoittelija/audio.ts`, `vendor/micInput.ts`, `vendor/pitchDetector.ts`: mikrofonin elinkaari, yhteinen äänikonteksti, tasomittaus, kanavavalinta, vastausportti.
- `harjoittelija/main.tsx`, `Controls.tsx`, `Board.tsx`, `style.css`, `MicPanel.tsx` (uusi), `Progress.tsx` (uusi): käyttöliittymä.
- `assets/harjoittelija/app.js`, `app.css`, `app.js.map`: uusi build (358 kB, gzip 95 kB).
- `assets/edistyminen.js`: etusivun yhteenveto lukee version 3.
- `kitaraharjoittelija.html`, `otelautaharjoittelija.html`, `harjoitustaustat.html`, `book/*.html`: navigaation linkin nimi.
- `tests/*.test.ts`, `tests/fakeMic.ts`, `tests/e2e/practice.spec.ts`: testit.
- `playwright.config.ts`, `vitest.config.ts`, `package.json`, `package-lock.json`: testiselain ilman äänilähtöä, kattavuusmittaus.
- `README.md`, `harjoittelija/README.md`, `reviews/`: dokumentaatio.

## Testitulokset

Ympäristö: macOS (arm64), Node 22.19.0, Python 3.14, paikallinen Google Chrome.

| Komento | Tulos |
| --- | --- |
| `npm run lint` | Läpi. |
| `npm run typecheck` | Läpi. |
| `npm test` | 158/158 seitsemässä tiedostossa (aiemmin 50). |
| `npm run coverage` | Logiikkamoduulit: 95,8 % riveistä, 90,5 % haaroista. |
| `npm run build` | Läpi. Lisenssi-ilmoitukset ennallaan. |
| `npm run test:e2e` | 64/64 tuotantobundlella (32 testiä × työpöytä ja puhelin; aiemmin 26). |
| `PRACTICE_TEST_DEV=1 npm run test:e2e` | 64/64 Viten kehityspalvelimella. |
| `npm audit` | 0 haavoittuvuutta. |
| `python3 tools/linkit/tarkista-linkit.py` | 0 ongelmaa. |
| `python3 tools/pdf/rakenna-pdf.py --out … --html …` | 67 sivua. |

Testit kattavat pyydetyt kohdat: vihjeiden oletustila, vastauksen paljastuminen,
vihjeen näyttäminen ja piilottaminen, harjoitustilan vaihtaminen, mikrofonitesti
ilman harjoitusta, mikrofonin tilamuutokset, RMS-tasomittari, sävelhavainnon
näyttäminen, epävarman havainnon käsittely, resurssien sulkeminen, aloittaminen ja
keskeyttäminen, tilastojen oikeellisuus, asteikkojen ja sointujen laskenta, otelaudan
sijainnit, puhelin- ja työpöytänäkymät sekä nopeat peräkkäiset toiminnot.

### Kattavuuden olennaiset puutteet

- **Oikeaa ääntä ei ole testattu.** Simuloitu signaali on puhdas siniaalto, kohina tai kiinteä osaäänisarja. Se ei sisällä aluketta, vaimenemista, säröä, resonanssia eikä huoneen kaikua.
- **Vain Chrome.** Safari, Firefox, iOS ja Android ovat testaamatta. Puhelintesti on Chromen iPhone 13 -emulointi.
- React-näkymillä ei ole yksikkötestejä. Ne testataan selaintesteillä.
- Selaimen oikea lupakysely, oikea `getUserMedia` ja oikea laitteen irrotus on korvattu testeissä jäljitelmillä.
- Sivulta poistuminen ja välilehden piilottaminen on testattu lähettämällä tapahtumat käsin.
- Ruudunlukijalla ei ole testattu. Saavutettavuus on tarkistettu koodista ja näppäimistöllä.
- Esimerkkisävelen sointia en voi kuunnella. Se pitää arvioida korvalla.

## Hyväksyntätestit oikealla kitaralla

Näitä ei ole tehty. Tee ne Chromella ennen kuin mikrofonivastaaminen julkaistaan.

1. **Mikrofonitesti äänikortilla.** Avaa Mikrofonin asetukset, paina Testaa mikrofoni, salli lupa ja valitse Äänituloksi Scarlett Solo. Soita jokainen vapaa kieli. Odotus: mittari nousee kynnysviivan yli, sävel on E2, A2, D3, G3, B3 ja E4, vire muutaman sentin sisällä ja varmuus yli 94 %. Kanavanumero vastaa tuloa, johon kitara on kytketty.
2. **Hiljaisuus ja kohina.** Älä soita: tila on ”ääntä ei kuulu”. Paina Mittaa taustakohina. Hankaa kieliä tai puhu: tila on ”säveltä ei tunnisteta”, eikä mittari jää paikoilleen.
3. **Kierros soittamalla.** Otelaudan sävelet, Soita kitaralla, nauhat 0–5. Soita kymmenen kysymystä koskematta hiireen. Odotus: oikea sävel hyväksytään alle sekunnissa, seuraava kysymys tulee itse, eikä soimaan jäänyt sävel vastaa siihen.
4. **Väärä sävel.** Soita tahallaan väärä sävel. Odotus: ”Kuulin sävelen …, ei kirjattu virheeksi”. Soita sitten oikea.
5. **Ylä-äänet ja oktaavit.** Valitse tarkka sävelkorkeus. Soita matala E, 12. nauhan huiluääni ja nauhat 12–17 ohuilla kielillä. Kirjaa, kuuleeko tunnistus oktaavin väärin.
6. **Sustain ja särö.** Anna sävelen soida pitkään, vaihda säveltä vaimentamatta ja kokeile säröllä. Kirjaa, vastaako sama sävel kahdesti tai jääkö uusi näppäys huomaamatta.
7. **Laitteen irrotus.** Irrota äänikortti kesken kierroksen. Odotus: harjoitus menee tauolle ja kertoo syyn. Kytke takaisin ja paina Jatka.
8. **Jumittuminen.** Kun Scarlett Solo on koneen oletuslähtö: aloita Kuule ja toista, lopeta kesken esimerkin, lataa sivu uudelleen ja aloita heti uudestaan. Kirjaa, jumittuuko sivu (katso Tunnetut ongelmat, kohta 1).
9. **Esimerkkiäänet.** Kuuntele Kuule ja toista sekä intervallit kaiuttimista ja kuulokkeista. Kuuluuko matala E selvästi, ja onko voimakkuus sopiva?
10. **Muut selaimet ja laitteet.** Safari, Firefox, iPhone tai iPad: lupakysely, mikrofonitesti ja yksi kierros.
11. **Macin oma mikrofoni.** Sähkökitara ilman vahvistinta on hiljainen. Kokeile, riittääkö taso vai pitääkö äänikynnystä laskea.

Jos kohdissa 3–6 tulee vääriä hyväksyntöjä tai hylkäyksiä, kirjaa mikrofonitestin
lukemat (taso, varmuus, vire). Niiden perusteella kynnysarvot voi säätää.

## Tunnetut jäljellä olevat ongelmat

1. **`AudioContext`in luonti voi jumittaa selaimen.** Tällä koneella uuden äänikontekstin luonti kesti 10–20 sekuntia sen jälkeen, kun sivu, jolla ääni soi, oli suljettu tai ladattu uudelleen. Tämä toistui Chromessa ilman harjoittelijaa ja sovelluksen omassa selainpaneelissa, kun oletuslähtö oli Scarlett Solo 4th Gen. Ilman äänilähtöä käynnistetyssä Chromessa sitä ei esiintynyt. En pysty selvittämään, johtuuko se laitteesta, ajurista, ajankohdasta vai Chromesta. Harjoittelija luo nyt enintään yhden äänikontekstin sivulatausta kohti, joten jumi voi osua korkeintaan kerran, ensimmäiseen ääntä käyttävään toimintoon. Aiempi toteutus loi kontekstin jokaista esimerkkiääntä ja mikrofonin avausta varten. Hyväksyntätesti 8 kertoo, näkyykö ongelma tavallisessa käytössä.
2. Mikrofonin tilastot ovat optimistisia (katso Rajoitukset).
3. Version 2 aikana kertyneet asteikko-, CAGED- ja toistotilastot eivät enää kartu eivätkä näy heikkojen kohteiden listassa uusien rinnalla. Ne säilyvät tallenteessa.
4. Varmuuskopion palautus korvaa nykyiset tiedot. Se ei yhdistä niitä.
5. Samanaikaisten välilehtien tallennuksia ei yhdistetä. Käytä yhtä harjoitusvälilehteä.
6. Keskeneräinen kysymys ei säily sivun uudelleenlatauksessa. Vastatut säilyvät.
7. `vendor/notes.ts` sisältää FretEchon käyttämättömiä apufunktioita. Ne eivät päädy bundleen, ja tiedosto on jätetty alkuperäiseksi.
8. ESLint 9 näyttää asennuksessa ylläpidon päättymisilmoituksen. Riippuvuuksissa ei ole haavoittuvuuksia.

## Muutokset, jotka kannattaa tarkistaa erikseen

Nämä ovat harkintaan perustuvia valintoja, ja ne voi perua vaikuttamatta muuhun:

- **Automaattinen siirtyminen seuraavaan kysymykseen** on oletuksena päällä (viive 1,4 s otelaudalla, 1,8 s mikrofonilla).
- **Vertailusävel A** kuullun sävelen nimeämisessä on oletuksena päällä.
- **Osaamisarvion nopeusrajat** ovat 2,5–8 s (aiemmin 1,5–5 s).
- **Navigaation linkin nimi** vaihtui kaikilla sivuilla.
- **Mikrofoni on auki koko kierroksen ajan** eikä sulkeudu vastausten välillä.

## Julkaisuvalmius

- **Otelaudalla vastaaminen, vihjeet, harjoittelutavat, tilastot ja tallennus:** valmis julkaistavaksi katselmoinnin jälkeen.
- **Mikrofonitesti:** valmis kokeiltavaksi. Se ei voi vahingoittaa tuloksia, ja se on väline hyväksyntätestien tekemiseen.
- **Mikrofonilla vastaaminen:** julkaise vasta hyväksyntätestien 1–6 jälkeen. Logiikka on testattu, mutta kynnysarvot ja alukkeen tunnistus ovat validoimatta oikealla soittimella.

Julkaisussa HTML, CSS ja JavaScript pitää päivittää samalla kertaa, koska bundlen
nimi on vakaa `app.js`. Vanha välimuistissa oleva bundle, joka kohtaa uuden
tallennusversion, ei kirjoita sen päälle vaan näyttää varoituksen.

## Commitit ja pull request

| Commit | Sisältö |
| --- | --- |
| `8aee9d9` | Korjaa kitaraharjoittelijan vihjeet, mikrofoni ja tilastointi. Koodi, testit ja uusi build. |
| `bcd3bd6` | Nimeä kitaraharjoittelija navigaatiossa samalla nimellä kuin sivulla. |
| `3ed7fbb` | Lisää yksikkötestien kattavuusmittaus. |
| `5b876bc` | Tämä raportti, `README.md` ja `harjoittelija/README.md`. |

Koko loki: `git log --oneline e17b593..fix/harjoittelija-auditointi`.

Pull request: [ristotoivanen/Musiikin-kartta#2](https://github.com/ristotoivanen/Musiikin-kartta/pull/2),
haarasta `fix/harjoittelija-auditointi` haaraan `main`. Sitä ei yhdistetä automaattisesti.
