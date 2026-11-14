# Portti G1 – ensimmäisen oppimisjakson katselmointi ja rajaus

**Tila:** 14.11.2026 · **G1:n valmistelukatselmointi tehty, päätösluonnos**. Ei ulkopuolista musiikkipedagogin katselmusta, omistajan hyväksyntää, laitetestiä, käyttäjätestiä, sovelluskoodia eikä julkaisuvaltuutusta.

**Konteksti:** [tehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54), [auditointi #45](https://github.com/ristotoivanen/Musiikin-kartta/issues/45), [yhteinen oppimisrakenne](yhtenainen-oppimisrakenne-2026-11.md), [36 taitoriippuvuuden katselmointi](taitoriippuvuuksien-katselmointi-2026-11.md), [ensimmäisen jakson käsikirjoitus](ensimmainen-oppimisjakso-nelja-iskua-2026-11.md) ja muuttamattomat alkuperäiset auditoinnit `docs/audit/oppimisarkkitehtuuri-2026-11/`.

## Katselmoinnin johtopäätös

**Suositus:** tee vain yhden `Soita ensimmäiset neljä iskua` -oppimistavoitteen A/E-pilotti. Älä tee tästä vielä koko sivuston ydinpolun uudistusta tai uutta peliarkkitehtuuria. **Teoria, kuuntelupeli, tavallinen fyysinen harjoitus ja haluttaessa pelillinen kitarahaaste kuuluvat samaan oppimisjaksoon**, eivät kahteen pakolliseen `Pelaa`/`Harjoittele`-haaraan. Tehtäviä voi tehdä vapaassa järjestyksessä; ensimmäisen kokeilun pitää olla välittömästi ymmärrettävä.

Uusi käyttöliittymärakenne **E ei ole oletusarvoisesti parempi** kuin A:n suoraviivaiset linkit. A on kustannus- ja monimutkaisuusverrokki. Testit eivät vielä vahvista kummankaan paremmuutta.

## G1.1 – ohjaavat periaatteet

**Ehdotus hyväksyttäväksi pilottia varten, ei koko sivuston rakenteeksi:**

- Aloita **musiikillisesta teosta**, ei pitkän teorialuvun lukemisesta tai valikoiden opettelusta.
- **Teoria tulee tehtävän yhteyteen**, mutta musiikin teoriaopas säilyy itsenäisenä ja syvälinkit kaksisuuntaisina.
- **Sama jakso sisältää erilaisia tehtävätyyppejä**: virtuaalinen, kuuloon perustuva, tavallinen oikean kitaran harjoitus ja haluttaessa oikealla kitaralla tehtävä pelillinen tehtävä.
- Jokainen näkee ehdotetun seuraavan tehtävän mutta voi avata aiemman, myöhemmän ja muun aiheen ilman suorituslukkoja.
- Ensimmäinen toiminto toimii ilman käyttäjätiliä, mikkiä tai soitinta. Apuväline tai vihje ei ole rangaistus.
- Väline ja mitattava asia näytetään selvästi; itsearvioitua kitarasoittoa ei väitetä automaattisesti todennetuksi.
- Älä rakenna yleistä pelimoottoria tai yhtenäistä pisteytystä ensimmäisen pilotin takia.

**Arvio:** periaatteet ovat johdonmukaisia viimeisimmän käyttäjäpalautteen, #49:n ja kriittisen auditoinnin kanssa. Tämä on sisäinen suunnittelukatselmointi, ei todistettu oppimishyöty.

## G1.2 – kuuden tarkemman taitoriippuvuuden ratkaisuehdotus

36 tunnistetta säilytetään. Ehdotetun ydinverkoston 18 muutettua riviä ovat katselmoitavia; riippuvuudet pitää viime kädessä sitoa **tehtävän suoritustapaan**, ei käyttää käyttöliittymälukkoina.

| Tunniste | Suositeltu ratkaisu | Tarkistettava vaara |
| --- | --- | --- |
| `EAR-ECHO` | Ei pakollista `EAR-REL`-porttia kahden äänen hyräilyyn tai virtuaaliseen matkimiseen. `EAR-REL` nimetään tarvittaessa palautteessa. | Mallin näkeminen tai automaattinen vihje ei saa kirjautua itsenäiseksi kuulonäytöksi. |
| `MELO-EAR` | Hahmottele/hyräile melodiaa ilman aiempaa pakollista `EAR-ECHO`-läpäisyä. Fyysinen soitto tarvitsee soitettavat paikat ja tarpeen mukaisen `GTR-CLEAN`-tuen. | Hyräilyä ei väitetä kitaralla soittamiseksi; rekisteri, rytmi ja melodian suunnat erotellaan. |
| `HARM-FUNCTION` | Koti–jännite–paluu voidaan aloittaa `EAR-HOME`-kontekstissa ennen `HARM-TRIAD`-analyysia. Sointujen **rakenteellinen tai funktion nimeävä itsenäinen analyysi** voi edellyttää kolmisointujen ja sävellajin käsitteitä siinä tehtävässä. | Kuullun miellyttävä päätös, viimeinen sävel tai basson liike yksin ei todista funktion ymmärtämistä. |
| `SCALE-PENTA` | Virtuaalinen viiden sävelen tunnistus ilman fyysistä `GTR-CLEAN`-porttia; fyysiseen sormitus- ja melodiatehtävään tekninen tuki. `EAR-HOME` opetetaan musiikillisen sovelluksen yhteydessä. | Ruudulla muistettu kuvio ei osoita pystyvyyttä improvisoida tai soittaa sitä. |
| `PLAY-IMPRO` | Kahden äänen oma vastaus ja tauko ovat varhaisen improvisaation versio. Vasta taustan pulssissa soitettavan version esitietoina `TIME-PULSE` ja fyysisessä versiossa soittimen hallinta. | Vapaan tehtävän keinotekoinen oikein/väärin-arviointi; erotetaan musiikillinen tarkoitus ja syötteen tarkistettavuus. |
| `HARM-7` | Itsenäiseen neljän sävelen septimisoinnun **rakentamiseen** `HARM-TRIAD` ja `PITCH-STEP` tarvitaan tai opetetaan tehtävän sisällä. Ensimmäinen 7/maj7/m7-**kuunteluvertailu** voi tulla ilman rakenneteoriatestiä. | Sointuäänen sävelten/otteiden tunnistus ei yksin näytä todellista soittotekniikkaa eikä äänenkuljetusta. |

**Täsmennyspyyntö tulevaan versioon:** `HARM-FUNCTION`, `SCALE-PENTA`, `HARM-7` ja `PLAY-IMPRO` kattavat nykyisillä nimillään useita arvioitavia asioita. Ei tarvitse keksiä lisää taitotunnisteita ennen pilottia, mutta arvioinnin `mode`, tehtäväversio ja mittauskriteeri on oltava yksilöity. Tehtävän teoriaan pääsee myös, jos käyttäjä ei suorita käytännön osiota.

**Katselmointitulos:** kuusi kriittistä suhdetta on perusteltu ja rajattu; **36:n koko osaamismallin hyväksyntä ja riippumaton musiikkipedagogin arviointi jäävät avoimiksi**.

## G1.3 – ensimmäisen pilotin jäädytettävä sisältörajaus (ehdotus)

**Päätavoite:** oppija pystyy kuulemaan neljä tasaista iskua ja kokeilemaan niitä itse taputtamalla tai valitsemallaan vapaalla kitarankielellä. Halutessaan hän sammuttaa viimeisen soivan kielen. Tehtävä voi alkaa ilman kitaraa.

### Ensimmäinen näkyvä askel

Otsikko: **Soita ensimmäiset neljä iskua**  
Ohje: **Kuuntele neljä tasaista iskua. Kokeile sitten itse taputtamalla tai kitaralla.**  
Päätoiminto: **Kuuntele neljä iskua**.

- Älä avaa wizardia, viritin-/mikrofoni- tai vaikeustasokyselyä. Toiston pysäytyksen tulee olla selvästi näkyvissä.
- `Pulssi` selitetään juuri silloin, kun käyttäjä haluaa ymmärtää: tasainen isku ja 1–2–3–4. Täysi teoria `/book/osa-1.html#pulssi-ja-komppi`.
- Myös **Kokeile itse** voidaan avata heti, jos kuuntelu ei ole mahdollista; kuuntelutaitoa ei tällöin merkitä suoritetuksi.

### Saman jakson tehtävämuodot

1. **Kuuntele** neljän iskun lyhyt esimerkki (ääni; toisto ja pysäytys).
2. **Kokeile pulssia** laskemalla tai taputtamalla; vain itsearvioitu toiminta.
3. **Pieni kuuntelupeli**: vertaa kaksi saman äänen ja voimakkuuden esimerkkiä, toinen tasainen, toinen selvästi epätasainen; **valinnainen**. Vastaus tarkistetaan vain valintana.
4. **Oikean kitaran harjoitus**: tue soitin, valitse yksi vapaa kieli, soita se neljä kertaa pulssissa ja vaimenna. Ei mikrofoniarviointia eikä täyteen vakiovireeseen pakottamista. Soitintapa on valinnainen, ei pelin läpäisyehto.
5. **Pieni musiikillinen soveltaminen**: uusi alkuperäinen lyhyt tausta, jossa voi tehdä saman neljän äänen roolin. Ei väitettä valmiista kappaleesta tai oikeuksista, ennen kuin aineisto on oikeasti tuotettu ja tarkistettu.
6. **Jatka / Kertaa / Valitse toinen aihe** – kaikki valinnat vapaina ilman etenemislukkoa.

**Tekninen reunaehto:** osan 1 nykyinen 84 BPM:n `pulssi-ja-komppi.m4a/wav` sisältää myös kahdeksasosat, kompin ja sointuvaihdon. Sitä voi käyttää teoriaesimerkkinä, **ei neljän iskun puhtaana aloitusnäytteenä**. Uusi/erillinen neljän iskun näyte ja tausta tarvitsevat sisällöllisen hyväksynnän ja teknisen äänitestin.

### Pilotista tarkoituksella pois

- Sointuotteet, täydellinen kappale, pentatoniset, moodit, tabulatuurilukeminen, nuottiviivasto.
- Mikrofoni, äänittäminen, kitarasoinnun automaattinen arviointi, suorituslukot, käyttäjätili, yleinen oppimis-/pisteytysmoottori.
- Koko sivuston päävalikon ja neljän nykyisen harjoittelupolun uudelleennumerointi.
- Uusien pelien (Säveljahti/Sointipaja) toteutus samassa PR:ssä. Ne käyttävät myöhemmin löydöksiä, eivät estä tätä pilottia.

**Sisällön hyväksymismerkki:** tehtävän versio 1 on dokumentoitu ja rajattu. Ei vielä hyväksyttyä äänimateriaalia tai ulkoista tarkistusta.

## G1.4 – saman sisältöinen A/E-käyttäjävertailu

Tässä päätössääntö on **ennakkoon ehdotettu**, ei hyväksytty eikä suoritettu. Pienellä otoksella ei väitetä tilastollista oppimisvaikutusta.

**Vaihtoehdot:**
- **A – linkkiverrokki:** nykyinen teoria- ja harjoittelusivusto, samat uudet sisältökortit/äänet ja suorat kaksisuuntaiset linkit; ei erillistä uutta polkusivua.
- **E – kevyt hybridi:** yksi nimetty tavoitesivu, josta avataan *täsmälleen sama* ohje, näytteet ja tehtävät; ei uutta pelimoottoria, käyttäjätilejä tai edistymisalgoritmia.
- Sisällön äänet, vihjeiden näkyvyys, opastuksen määrä, tehtävän vaativuus ja testiin käytetty aika pidetään mahdollisimman samoina. Ero on **löydettävyys, konteksti ja paluunavigaatio**.

**Testiehdotus:** vähintään 8 aidosti aloittelevaa henkilöä (4 A, 4 E) ja 2 jo muutaman asian osaavaa suorien linkkien ja oikopolkujen arvioijaa, ellei käytännössä saavuteta vain pienempää otosta; tällöin tulos on pelkkä laadullinen havainto. Älä testaa kahta versiota samalla aloittelijalla peräkkäin ilman järjestys-/oppimisvaikutuksen hallintaa. Eri henkilöille näytetään tehtävä siinä käyttötilanteessa, johon se on suunniteltu. Testin varsinainen tekijä/rekrytointi sovitaan myöhemmin.

**Testin käsikirjoitus, kummallekin vaihtoehdolle sama:**
1. Avaus: `Haluat oppia soittamaan neljä tasaista iskua. Aloita sivustolta ilman neuvojan ohjeita.`
2. Havainto: löydätkö ensimmäisen **oikean toimintopainikkeen**, vai päädytkö lukemaan/selamaan liikaa?
3. Avaa lyhyt `Miksi pulssi?`-selitys ja halutessasi koko teorialuku, **palaa täsmälleen samaan harjoitukseen**.
4. Kokeile tehtävää ilman kitaraa ja/tai oikealla kitaralla; ohjaaja ei korjaa ennen ensiyrityksen havaintoa.
5. Kokeile kuuntelupeliä ja/tai kappaleroolia. Kirjaa vihjeet, äänen ongelmat ja tehtävän vaihdot.
6. Keskeytä, palaa ja jatka; etsi myös **jokin aivan muu aihe** ilman pakollista suoritusjärjestystä.
7. Uusi neljän iskun näyte tai eri säestys samalla käynnillä sekä valinnainen kertaus 2–4 päivän kuluttua. Tee uusi tehtävä aidosti eri rytmi-/taustakontekstissa, ei vain samoilla nappivaihtoehdoilla.

**Kerättävät vähimmäismitat:**
- `first_action_without_prompt` (kyllä/ei), `first_action_seconds`, `wrong_turn_count`.
- `theory_find_and_return` (onnistui/ei), `resume_after_interrupt` (onnistui/ei), `access_other_topic` (onnistui/ei).
- `audio_control_ok`, `physical_four_strums` (arvioijan havainto **tai** erikseen merkitty itsearvio), `beat_choice_correct` (ei kitarasoittotaidon mittari).
- `hints_used`, `new_example_result`, `delayed_recall_result` sekä testiin käytetty aika.
- Laitteet, audio-ulostulo, apuvälineet, virheet ja mahdolliset selittävät vapaamuotoiset havainnot.

**Ennakkoon ehdotettava päätösraja:**
- Molempien prototyyppien on läpäistävä toiminnalliset stop-ehdot: käyttö ilman mikkiä/tiliä, äänentoiston hallittu pysäytys, navigoinnin paluu, ohjailtavuus näppäimistöllä ja pienellä näytöllä sekä turvallinen fyysinen tehtävä.
- **E:n lisäarvon pitäisi olla selvästi havaittava useammassa kuin yhdessä mitassa.** Käytännön nyrkkisäännöksi 4+4-aloittelijakokeessa: E:ssä vähintään **2 useampaa** löytää aloitustoiminnon ilman ohjetta *tai* aloitukseen kuluva mediaaniaika lyhenee vähintään **20 sekuntia**, **ja lisäksi** teoriaan palaaminen tai keskeytyksestä jatkaminen paranee ilman muita havaittuja heikennyksiä. Tämä on pieni, tarkoituksella konservatiivinen **päätösehdotus**, ei tilastollinen testi eikä ennalta päätetty tulos. Yhden henkilön havainto ei ratkaise.
- Jos vertailu jää tasaiseksi, ristiriitaiseksi tai E aiheuttaa selvästi enemmän ylläpitoa, **suosi A:ta**. E:tä voi kokeilla uudestaan rajatulla korjauksella, mutta älä oletusarvoisesti laajenna koko sivustolle.
- **Oppimisen siirto ja viivästetty kertaus raportoidaan** erillisenä, eikä nopea aloitus automaattisesti merkitse parempaa oppimista.

## Esitarkistuksen havaitsemat riskit ja pysäytysehdot

| Riski | Konkreettinen korjaus / pysäytys |
| --- | --- |
| Ensimmäinen ruutu on täynnä toimintoja | Näytä yksi korostettu kuuntelutoiminto, muut vasta oikeaan aikaan tai kevyesti tehtävälistassa. |
| Ei-kitaraa-versio muuttuu peliksi, jonka klikkaus on ainoa näyttö | Erottele kuunteleminen, naputus/itsearvio, oikein/väärin-kuunteluvalinta ja uuden rytmiesimerkin näyttö. |
| Ääni jää soimaan navigoidessa | Pysäytys/hävitys testataan myös piilotetulla välilehdellä ja puhelimen keskeytyksessä ennen julkaisemista. |
| A- ja E-versioissa eri materiaali tai eri vihjeannos | Vertailu keskeytetään ja yhdenmukaistetaan ennen mittaamista. |
| Vain synteettinen napsu, ei musiikillista sovellusta | Lisää yksinkertainen soitettava tausta tai käyttökoe; pelkkä nappiharjoitus ei täytä musiikillista tavoitetta. |
| Neljän iskun näyte vertautuu nykyiseen 84 BPM:n koko oppituntiin | Rajaa näyte, älä käytä koko komppiäänitettä aloitustestin neljän iskun mallina. |
| Oikean kitaran palaute ei vastaa todellista näyttöä | Pidä itsearvio ja havainnoitu suoritus erikseen; ei automaattista puhtaus-, rytmi- tai sormitustuomiota. |
| Suora aihevalinta ja vanhat linkit rikkoutuvat | Ei mergeä eikä beta-julkaisua ennen regressiotarkistusta. |
| Uudesta 36-taidon graafista tehdään pakollinen lukitus | Pysäytä: graafi palvelee toimituksellista suunnittelua, ei käyttäjän kulun estämistä. |

## Portin G1 status ja seuraava sallittu toimi

- [x] Oppimisperiaatteiden johdonmukaisuus nykyiseen auditointiin, #49:ään ja käyttäjän viimeisimpiin toiveisiin **suunnittelutasolla katselmoitu**.
- [x] Kuusi kriittistä riippuvuutta rajattu ja selitetty; koko 36:n ehdotus pidetään edelleen katselmoitavana, ei hyväksyttynä.
- [x] Pilotin yhden oppimisjakson soveltamisala ja ensimmäinen käyttäjätoiminto täsmennetty.
- [x] A/E-testin alustava protokolla, havaintokentät ja ennalta ehdotettu päätöskynnys kirjattu.
- [ ] **Omistajan G1-hyväksyntä**: pilotin rajaus ja päätöskynnykset hyväksytty tai korjattu.
- [ ] **Ulkoinen pedagoginen/soittokatselmointi** tehtäväversioille ennen väitettä opetuksellisesta toimivuudesta.
- [ ] Sovitut ensimmäiset mallinäytteet, kitaraharjoituksen käyttökoe ja alkuperäisen taustan oikeusketju valmiina (vaihe 2).

**Työjärjestyssuositus:** G1:n sisäinen valmistelu on valmis. Omistajan hyväksyttyä sen voidaan tehdä rajatut A- ja E-prototyypit erilliseen **toteutushaaraan**, ei tähän dokumentaatio-PR:ään. Kaikki testien tulokset ja rakennepäätös kirjataan vasta todellisten testien jälkeen.
