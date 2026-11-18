# Esitaitoriippuvuuksien katselmointi, versio 1

**Tila:** 14.11.2026, **suunnitteluehdotus**. Ei hyväksytty opetussuunnitelma, eikä koodin tai tallennusmallin muutos.

**Tarkastettu alkuperäinen:** [02-PERUSTIEDOT-JA-ESITAIDOT.md](../audit/oppimisarkkitehtuuri-2026-11/02-PERUSTIEDOT-JA-ESITAIDOT.md) sekä auditoinnin [06-UUSI-TAVOITERAKENNE](../audit/oppimisarkkitehtuuri-2026-11/06-UUSI-TAVOITERAKENNE.md), [07-KEHITYSKARTTA](../audit/oppimisarkkitehtuuri-2026-11/07-KEHITYSKARTTA-JA-PILOTIT.md) ja [08-KRIITTINEN-KATSELMUS](../audit/oppimisarkkitehtuuri-2026-11/08-KRIITTINEN-KATSELMUS.md). Tämän raportin ehdotukset erotetaan **alkuperäisen auditoinnin väitteistä**.

## 0. Tarkistuksen perustulos

- Alkuperäisessä taulukossa on **36 taitotunnistetta, ei 35**. `HARM-7` sisältää numeron ja voi jäädä pois rajatuista tekstihakumalleista. Säilytä kaikki **36 tunnistetta täsmälleen**.
- Tunnisteita ei ole kahteen kertaan, eikä alkuperäisen taulukon välttämätön/hyödyksi/samalla/jatko-viitteissä ole olemattomia tunnisteita.
- Alkuperäinen **Välttämätön** on monessa tapauksessa tarkoituksenmukainen vain **tietyssä välineessä tai itsenäisessä lopputestissä**, ei ensimmäisen helpon kokeilun porttina.
- Ehdotettu uusi **ydinriippuvuuksien graafi on syklitön**. Riippuvuus ei silti ole automaattinen käyttöliittymälukko: puuttuva asia voidaan opettaa samassa tehtävässä.
- Alla 18/36 rivin ydinriippuvuussaraketta muuttuu alkuperäisestä; muissa kuvataan rajat ja saman tehtävän opetus tarkemmin. Tämä **ei** tarkoita 18 virhettä alkuperäisessä työssä: monessa on kyse tehtävän ja mittarin täsmentymisestä.

## 1. Riippuvuuksien merkitys

1. **Ydinriippuvuus:** taito tarvitaan kyseisen tehtävän **täyteen itsenäiseen suoritukseen** valitussa toteutustavassa. Voidaan opetella saman jakson sisällä. Ei automaattista lukitusta.
2. **Tilanne-ehto:** esimerkiksi oikean kitaran puhdas painettu sävel, nimetty intervalli, rytmin kanssa ajoittaminen tai diagrammin lukeminen tarvitaan vain, **kun tehtävä mittaa sitä**. Älä käytä tätä ehdottomana esivaatimuksena kaikissa versioissa.
3. **Rinnakkain opetettava:** teorialause, virheestä oppiminen, asento, viritys tai vihje voi tulla heti ennen tarvittavaa tekoa. Sen osaamista ei tarvitse erikseen osoittaa valmiiksi ennen toimimista.
4. **Hyödyllinen jatko:** annetaan vapaaehtoisena seuraavana ehdotuksena, ei lukitse muuta sisältöä.

Jos taitotunnisteeseen kuuluu sekä **kuuleminen/näkeminen** että **fyysinen soittaminen**, niitä ei tule arvioida samana suorituksena. Tulevassa sisältösopimuksessa tarvitaan tarvittaessa tehtäväversiokohtainen `mode` tai `assessmentMode`, ei välttämättä uusia taitotunnisteita.

## 2. Kaikki 36 tunnistetta

| Taitotunniste | Auditoinnin `Välttämätön` | Ehdotettu ydinriippuvuus | Katselmoinnin perustelu / tehtävärajaus |
| --- | --- | --- | --- |
| `GTR-ORIENT` | — | — | Ensimmäinen kieli ja nauha opetetaan tunnistamalla, ei sanakokeella. |
| `PRACTICE-SAFE` | — | — | Turvaohje näytetään ennen äänen voimakkuutta ja fyysistä suoritusta. |
| `TOOL-AUDIO` | — | — | Toisto ja pysäytys opitaan ensimmäisen ääniesimerkin yhteydessä. |
| `TIME-PULSE` | — | — | Neljä iskua voi ensin kuunnella ja taputtaa; nuottiarvojen lukua ei vaadita. |
| `EAR-HOME` | — | — | Kuunteluesimerkki ja harmonia opettavat kodin tunteen ennen nimiä. |
| `PITCH-NAME` | — | — | Merkinnät H/B ja muut sävelnimet opetetaan ensimmäisessä niitä käyttävässä tehtävässä. |
| `GTR-TUNE` | GTR-ORIENT | GTR-ORIENT | Vain fyysisen kitaran virittäminen; PITCH-NAME opetetaan virittimen näyttöä käytettäessä. |
| `GTR-CLEAN` | GTR-ORIENT | GTR-ORIENT | Puhdas *painettu* sävel tarvitsee sormen paikan ja paineen opettelua. Vapaa kieli erikseen. |
| `GTR-MUTE` | GTR-CLEAN | GTR-ORIENT | Äänen sammuttaminen opetetaan ensimmäisen vapaan kielen äänen jälkeen. |
| `READ-CHORD` | GTR-ORIENT | — | Merkkien X/0 ja nauhan lukeminen opitaan kaavion ensimmäisellä käyttökerralla. |
| `READ-TAB` | GTR-ORIENT | — | Kieli, nauhanumero ja 0 opetetaan ensimmäisellä kahden äänen tabilla. |
| `READ-RHYTHM` | TIME-PULSE | TIME-PULSE | Iskujen/pituuksien ymmärtäminen ennen nimettyjen kahdeksasosien lukemista. |
| `READ-STAFF` | READ-RHYTHM,  PITCH-NAME | PITCH-NAME, TIME-PULSE | Vain tehtävässä, jossa täytyy nimetä sävelkorkeus ja toteuttaa rytmi; alkeisviivasto voi opettaa ne samanaikaisesti. |
| `TIME-GROOVE` | TIME-PULSE | TIME-PULSE | Rytmi suhteessa taustaan voidaan aloittaa taputtamalla ja myöhemmin soittaa. |
| `PRACTICE-LOOP` | — | — | Hidas paikallinen korjaus voidaan aloittaa ensimmäisen virheen yhteydessä. |
| `PLAY-CHANGE` | READ-CHORD,  GTR-CLEAN,  TIME-PULSE | GTR-CLEAN, TIME-PULSE | Kahden fyysisen otteen vaihto; READ-CHORD vain, jos ote annetaan kaaviona. |
| `PLAY-SONG` | GTR-CLEAN,  TIME-PULSE | GTR-ORIENT, TIME-PULSE | Minimitehtävä on yhden vapaan kielen rooli: ei pakollista täyttä sointua tai painetun sävelen puhtaustaitoa. |
| `EAR-REL` | — | — | Nouseva/laskeva tai sama/eri voidaan opetella kuulemalla ilman nimettyä kotisäveltä. |
| `EAR-ECHO` | EAR-REL | — | Kahden sävelen jonoa voi matkia hyräillen tai virtuaalisesti ilman ennalta opittua EAR-REL:iä. |
| `PITCH-STEP` | — | — | Puoliaskelta ja kokoaskelta verrataan nauhoilla tai ääninäytteessä. |
| `FRET-MAP` | GTR-ORIENT,  PITCH-NAME | GTR-ORIENT, PITCH-NAME | Nimettyjen paikkojen itsenäinen etsintä; opeta molemmat alussa. |
| `EAR-INTERVAL` | EAR-REL,  PITCH-STEP | EAR-REL | PITCH-STEP opetetaan samassa tehtävässä, kun intervalli nimetään tai lasketaan. |
| `HARM-TRIAD` | PITCH-STEP | PITCH-STEP | Itsenäinen kolmisoinnun rakentaminen edellyttää askelvälien ymmärtämistä tai niiden opettamista rinnalla. |
| `HARM-QUALITY` | — | — | Duuri/molli voidaan kuulla ilman 1–3–5-sanastoa; terssin selitys opettaa HARM-TRIAD/PITCH-STEP rinnalla. |
| `HARM-FUNCTION` | EAR-HOME,  HARM-TRIAD | EAR-HOME | Koti–lähtö–paluu voidaan ensin kuulla; HARM-TRIAD vasta soinnun sävelrakenteen analyysissa. |
| `HARM-KEY` | EAR-HOME,  HARM-QUALITY | EAR-HOME | Kokonainen duurin/mollin konteksti vaatii HARM-QUALITYn tai sen opettamisen tässä. |
| `HARM-TRANSPOSE` | PITCH-STEP | — | Suhteiden kuuntelu tai muodon siirto voi alkaa ennen PITCH-STEP-laskua. |
| `FRET-SHAPES` | FRET-MAP,  READ-CHORD,  GTR-CLEAN | FRET-MAP, GTR-CLEAN | Täyden siirrettävän otteen fyysinen teko ja perussävelen nimeäminen; READ-CHORD vain kaavion kautta tehtäessä. |
| `MELO-EAR` | EAR-ECHO,  GTR-CLEAN | — | Lyhyen sävelkulun hyräily ja hahmottelu onnistuvat ilman koko EAR-ECHO-polun läpäisyä. |
| `SCALE-PENTA` | GTR-CLEAN,  EAR-HOME | — | Viiden sävelen tunnistus ja virtuaalinen paikkatehtävä eivät vaadi oikean kitaran tekniikkaa. |
| `SCALE-CONNECT` | SCALE-PENTA,  FRET-MAP | SCALE-PENTA | Kahden tutun position yhdistäminen; FRET-MAP hyödyllinen nimille, ei kuviolla navigoimisen ehdoton portti. |
| `PLAY-IMPRO` | TIME-PULSE,  GTR-CLEAN | — | Aloita kahden äänen omasta vastauksesta ja tauosta, vaikka oppija ei osaisi koko pentatonista. |
| `CREATE-PIECE` | TIME-PULSE | — | Oman kahden äänen idean saa tehdä ilman pakollista tahtiosaamista. |
| `HARM-7` | HARM-TRIAD,  PITCH-STEP | HARM-TRIAD, PITCH-STEP | Neljännen sointusävelen (septimi) rakentaminen edellyttää kolmisoinnun ja etäisyyden ymmärtämistä, jotka voi opettaa samassa jaksossa. |
| `HARM-VOICE` | HARM-TRIAD | HARM-TRIAD | Itsenäinen äänenkuljetuksen analyysi perustuu sointujen säveljoukkoihin; ohjattu yhteisen sävelen kuulohavainto voi tulla aiemmin. |
| `SCALE-MODE` | EAR-HOME,  PITCH-STEP | EAR-HOME | Saman toonikan kuultu moodivertailu; PITCH-STEP opetetaan tunnussävelen selityksen yhteydessä. |

### Keskeiset saman tehtävän aikana opetettavat asiat

- **PRACTICE-SAFE** (kuulon suojaaminen, rentous, tauotus) koskee kaikkea oikeaa soittoa ja äänen toistoa, vaikka sitä **ei saa käyttää estävänä osaamisporttina**. Näytä käytännön ohje oikeaan aikaan.
- **GTR-TUNE** ei ole esitaito ensimmäiseen rytmin taputtamiseen eikä virtuaalipeliin. Sävelkorkeuden oikeaa kuunteluvertailua varten soitin on syytä tarkistaa; ulkoinen viritin hyväksytään.
- **READ-CHORD, READ-TAB ja READ-STAFF** ovat merkintätapoja. Harjoituksen voi opettaa mallista, korvalla tai sanallisella ohjeella ilman kaikkien notaatioiden läpäisyä.
- **EAR-HOME, HARM-QUALITY ja HARM-KEY** ovat eri tasoja: kuultu koti, duuri/mollin kuuntelu, perusteltu sävelkeskus ja sävellajikonteksti. Viimeinen melodiasävel tai mieltymys ei todista kotia.
- **FRET-MAP**-virtuaalivalinta ei kerro oikeasta käytetystä kielestä/nauhasta mikrofoniäänitteessä. Sama MIDI-korkeus voi syntyä eri paikoista.
- **SCALE-PENTA, SCALE-CONNECT ja SCALE-MODE** voivat sisältää teoriaa, virtuaalisen pelin, pelillisen kitarahaasteen ja vapaan kitaraharjoituksen **samassa oppimisjaksossa**, ilman erillistä Pelaa/Harjoittele-porttia.

## 3. Esimerkit, jotka osoittavat riippuvuuksien toimivuuden

**A. Ensimmäiset neljä iskua:** `TIME-PULSE` voidaan aloittaa taputtamalla ilman `GTR-CLEAN`-taitoa. Fyysisessä tehtävässä opetetaan `GTR-ORIENT`, `PRACTICE-SAFE`, `GTR-MUTE` ja **vapaa** kieli saman jakson sisällä. `PLAY-SONG`:n helppo yhden kielen kappalerooli ei edellytä sointuja.

**B. Kahden sävelen vastaus:** `EAR-ECHO` onnistuu ensi yrityksellä hyräilemällä tai virtuaaliotelaudalla ilman `EAR-REL`-teoriatestiä. `EAR-REL` voidaan nimetä palautteessa: sama, korkeampi, matalampi. Kitarasuorituksen oma osaamishavainto arvioidaan erikseen.

**C. Soinnun sisään katsominen:** alkuperäinen `HARM-QUALITY` sallii kuunteluvertailun ilman `HARM-TRIAD`-porttia. Terssin vaihtaminen (`HARM-TRIAD`, `PITCH-STEP`) opetetaan ohjatussa kokeessa; tämän jälkeen tarkistetaan itsenäinen uusi sointu. Oikealla kitaralla soittaminen arvioidaan omana taitonaan.

**D. Pentatoninen ja moodit:** virtuaalinen viiden sävelen tunnistus ei vaadi `GTR-CLEAN`-taitoa; sormituksen harjoittelun kyllä. `SCALE-MODE`-vertailussa sama toonika ja sitä tukeva harmonia on tehtävän suunnitteluehto. `PITCH-STEP` tarvitaan selittämään moodin ero (esim. A-aiolisen F vs A-doorisen F♯), mutta ei ensimmäisen eron kuulemisen esitaitokoe.

## 4. Ennen hyväksyntää

- [ ] Musiikkipedagogi tarkistaa erityisesti `EAR-ECHO`, `MELO-EAR`, `HARM-FUNCTION`, `SCALE-PENTA` ja `PLAY-IMPRO`-rajausten uskottavuuden.
- [ ] Ensimmäisen oppitunnin käsikirjoituksella osoitetaan, että taitoa voi oikeasti opettaa saman jakson sisällä, vaikka sitä ei aseteta portiksi.
- [ ] Testataan lyhyt, uusi musiikillinen esimerkki sekä myöhempi kertaus; ei pelkkää saman ruudun uudelleenklikkausta.
- [ ] Erotetaan mitatut vastaukset, vihjeellinen onnistuminen ja oikean kitaran itsearviointi.
- [ ] Tarkistetaan terminologia ja kiinnitetään lopulliset `required`-ehdot **tehtävän versioon**, ei taitotunnisteen koko käyttöön.
- [ ] Ei muuteta vanhoja `localStorage`-merkityksiä, syvälinkkejä eikä harjoittelupolkuihin pääsyä tämän katselmoinnin perusteella.

**Lähteiden tila:** alkuperäiset auditointiraportit ovat muuttamattomina GitHubin `docs/audit/oppimisarkkitehtuuri-2026-11/` -hakemistossa. Tässä tehdyt erot ovat uusia suunnittelupäätösehdotuksia ja tarvitsevat vielä omistajan hyväksynnän.
