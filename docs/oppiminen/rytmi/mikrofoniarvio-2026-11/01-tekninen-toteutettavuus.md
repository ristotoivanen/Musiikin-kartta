# 1. Tekninen toteutettavuus: rytmin tunnistus selaimen mikrofonilla

**Tila:** itsenäinen selvitys 16.11.2026. Ei toteutuslupa. Pohja `beta` `f7a204b`.
**Merkinnät:** **[V]** varmennettu tässä selvityksessä (luettu koodista tai ajettu), **[L]** lähteeseen
perustuva arvio, **[O]** testaamaton oletus. Lähdenumerot viittaavat tämän tiedoston loppuun.

## 1.1 Tutkimuskysymys ja lyhyt vastaus

> Voidaanko selaimen mikrofonilla arvioida kitaran rytmistä suoritusta riittävän luotettavasti?

**Ei yleisenä, isku iskulta annettavana arvosanana.** Syitä on viisi, ja ne ovat toisistaan
riippumattomia, joten yhden korjaaminen ei riitä:

1. Selain ei tiedä luotettavasti, kuinka paljon ääni viivästyy kaiuttimeen ja mikrofonista takaisin.
   Viive on laitekohtainen, kymmenistä satoihin millisekunteihin. [L]
2. Kaiuttimesta kuuluva tausta näyttää tunnistimelle soitolta. [V, synteettinen koe]
3. Kevyet ylösvedot soivan soinnun päällä ja nopeat kuviot jäävät havaitsematta, myös tutkimuksen
   parhailla menetelmillä noin joka viides. [V, synteettinen koe] [L]
4. Kompin isku ei ole piste. Kuuden kielen alasveto kestää kymmeniä millisekunteja, joten "iskun hetki"
   on jo määritelmältään epätarkka. [V] [L]
5. Ihmisen tavallinen ajoitushajonta on samaa suuruusluokkaa kuin mittausvirhe. [L]

**Kyllä rajattuna havaintona,** jos kolme ehtoa täyttyy, ja nekin ovat oletuksia, kunnes ne on
mitattu oikealla kitaralla (luku 4):

- arvioidaan koko ottoa (esimerkiksi 8 tahtia) eikä yksittäistä iskua
- käytetään mittareita, jotka eivät riipu tuntemattomasta vakioviiveestä: iskujen määrä, iskuvälien
  tasaisuus, tempo ja sen ryömintä sekä se, mihin kahdeksasosiin iskut osuivat
- tausta ei vuoda mikrofoniin (kuulokkeet) tai tausta on tehty mikrofonia varten (pelkkä kapeakaistainen
  klikki, jonka tunnistin osaa erottaa)

## 1.2 Lähtötilanne koodissa

Kaikki tämän luvun kohdat ovat **[V]**: luettu haarasta `origin/beta` (`f7a204b`, 15.11.2026).

| Asia | Havainto | Tiedosto |
| --- | --- | --- |
| Mikrofonin avaus | `getUserMedia`, kaiunpoisto, kohinanvaimennus ja automaattinen tasonsäätö pyydetään pois, kaksi kanavaa | `harjoittelija/vendor/micInput.ts` |
| Analyysin kello | Yksi analyysikehys ruudunpäivitystä kohti (`requestAnimationFrame`), näytteet `AnalyserNode.getFloatTimeDomainData`-kutsulla, aikaleima `performance.now()` käsittelyhetkellä | `harjoittelija/vendor/pitchDetector.ts` |
| Sävelentunnistus | Pitchy (McLeod), noin 170 ms:n ikkuna, yksi sävel kerrallaan | sama |
| Aluketunnistin | 50 ms:n RMS vähintään kaksinkertaistuu 300 ms:n pienimpään arvoon nähden, 150 ms:n toipumisaika | sama, `OnsetDetector` |
| Hyväksytty sävel | Vaatii 240 ms vakaan sävelkorkeuden. Tapahtuman aikaleima on hyväksymishetki, ei iskun alku | `NoteGate`, `riffikaiku/pluck.ts` |
| Riffikaiun arvio | Säveljonon järjestys. Ajoitusta ei arvioida | `riffikaiku/sequence.ts`, `practice.ts` |
| Toiston ajastus | Asteikkolooppi ajastaa sävelet `AudioContext.currentTime`-kelloon 1,6 s etukäteen, tarkistus 25 ms:n välein | `harjoittelija/audio.ts`, `ReferencePlayer.loop` |
| Muu toisto | Ensikeikka renderöi koko oton puskuriin. Kappaleet soivat `<audio>`-elementeillä | `ensikeikka/audio.ts`, `harjoittelija/songAudio.ts` |
| Latenssitiedot | `baseLatency`, `outputLatency`, `getOutputTimestamp` ja `AudioWorklet` eivät esiinny lähdekoodissa | haku koko lähdepuusta |
| Rytmisisältö | Neljä generoitua sivua `oppi/rytmi/`, lähde `book/osa-1.html` ja `tools/oppimiskartta/aiheet.json`. Yksi 84 BPM:n äänite. Suoritus merkitään itse | `oppi/rytmi/*`, `tools/aanet/esimerkit.js` |
| Oikean kitaran näyttö | Hyväksyntäkokeet versioille 0.2–0.4 on merkitty tekemättömiksi. Ainoa oikean kitaran koe tehtiin versiolla 0.1 | `riffikaiku/HYVAKSYNTAKOKEET.md` |
| `AGENTS.md` | Tiedostoa ei ole yhdessäkään 53 etähaarasta eikä Git-historiassa | `git log --all -- AGENTS.md` |

Kolme johtopäätöstä:

- **Nykyinen ketju on sävelentunnistin, ei rytmimittari.** Sen aikaleimat ovat 240 ms tai enemmän iskun
  jälkeen ja ruudunpäivityksen tarkkuudella. Sitä ei pidä laajentaa rytmiin.
- **Toiston ajastuksen oikea malli on jo olemassa** (`ReferencePlayer.loop`). Rytmitoisto voi käyttää
  samaa etukäteisajastusta. Kappaleiden `<audio>`-raidat eivät kelpaa rytmin viitteeksi: iPhonella niiden
  kelausviive oli mitattuna 0,3–0,8 s (projektin oma mittaus 12.11.2026).
- **Edes sävelentunnistuksen toimivuutta oikealla kitaralla ei ole todennettu** nykyversioilla. Rytmin
  mikrofoniarvio rakentuisi siis ketjulle, jonka perustaso on itsekin vahvistamatta.

Tehtävänanto pyysi noudattamaan repositorion `AGENTS.md`-ohjeita. Koska tiedostoa ei ole, selvitys
noudattaa issueiden #54, #49 ja #69 kirjattuja rajoja: ei tuotantokoodia, ei muutoksia keskeneräisiin
haaroihin, ei mergeä, ei uusia issueita.

## 1.3 Oma koe: nykyinen tunnistin ja vertailutunnistin

Koodi ja koko taulukko: [koe/tulokset.md](./koe/tulokset.md). Signaali on synteettinen, joten koe voi
osoittaa vain, mikä **ei** toimi edes ihanneoloissa. **[V]** tarkoittaa tässä "ajettu ja toistettavissa",
ei "toimii oikealla kitaralla".

| Tilanne (8 tahtia) | Nykyinen `OnsetDetector`, 60 Hz | Spektrivuo, 5 ms:n hyppy |
| --- | --- | --- |
| Soiva G, kahdeksasosat alas–ylös, 80 BPM | alas 32/32, **ylös 0/32**, viive 49 ms, hajonta 12,5 ms | 64/64, 4 ylimääräistä, viive 2 ms, hajonta 2,2 ms |
| Sama, 120 BPM | alas 24/32, **ylös 0/32** | 62/64, 2 ylimääräistä |
| Sama, hiljainen soitto (−12 dB), 100 BPM | alas 27/32, ylös 0/32 | alas 32/32, ylös 24/32 |
| Tauollinen komppi `↓ · ↓↑ · ↑↓↑`, 100 BPM | 21/48 | 48/48, 3 ylimääräistä |
| Vaimennetut kielet, kahdeksasosat, 80 BPM | 64/64, hajonta 4,6 ms | 64/64, 3 ylimääräistä |
| Soiva G, kuudestoistaosat, 80 BPM | 28/128 | 76/128 (ylösvedoista 12/64) |
| **Pelkkä rumputausta kaiuttimesta, kitara hiljaa** | **32 väärää iskua** | **33 väärää iskua** |

## 1.4 Mittausketju ja virhebudjetti

Rytmiarvio vertaa kahta hetkeä: milloin isku **piti** soittaa ja milloin se **soitettiin**. Kummassakin
on omat virheensä.

| Virhelähde | Suuruusluokka | Voiko poistaa? | Luokka |
| --- | --- | --- | --- |
| Lähtöviive (selain → kaiutin) | Kannettavan kaiuttimella edestakainen viive oletusasetuksin noin 55–67 ms, viritettynä 14–19 ms (yksi MacBook, 2021) [8] | Kalibroimalla | [L] |
| Selaimen ilmoittama `outputLatency` | Chrome 102, Firefox 70, Safari vasta 18.4 [7]. Arvo oli mittauksessa alle puolet todellisesta [8] | Ei luotettava yksinään | [L] |
| Bluetooth-kuulokkeet | Selvästi suurempi kuin langallisella ja ilmoitettu arvo liian pieni [8]. Yousician neuvoo välttämään langattomia [14] | Ei käytännössä | [L] |
| Tuloviive (mikrofoni → selain) | Sisältyy edellä mainittuun edestakaiseen viiveeseen. `MediaTrackSettings.latency` palautti aina 10 ms laitteesta riippumatta [8] | Kalibroimalla | [L] |
| Android-laitteiden kirjo | Sama laite 20 ms tai 205 ms asetuksista riippuen (natiivimittaus) [15] | Laitekohtaisesti | [L] |
| Ruudunpäivitykseen sidottu analyysi | 16,7 ms:n askel, hajonta 4,8 ms. Virransäästössä 33 ms ja 9,6 ms | Kyllä: AudioWorklet | [V] |
| AudioWorklet-käsittely | 128 näytteen lohko eli 2,7 ms (48 kHz). `currentFrame` kertoo lohkon paikan näytteen tarkkuudella [5] | – | [L] |
| Tunnistimen oma viive | Energiasuhde 39–69 ms, spektrivuo 2–4 ms | Vakio-osa kyllä | [V, synteettinen] |
| Vedon kesto kielten yli | Alasveto 6 kieltä, 12 ms väli = 60 ms. Nopea veto lyhyempi | Ei: iskun hetki on sopimus | [V] generaattorin arvo, [O] oikea soitto |
| Äänen kulku ilmassa | 2,9 ms metriä kohti | Vakio samassa asennossa | fysiikka |
| Soittajan oma hajonta | Naputus ennakoi iskua tyypillisesti kymmeniä millisekunteja, ja asynkronian hajonta on samaa suuruusluokkaa [9]. Tarkkaa lukua en saanut varmistettua alkuperäistekstistä | Ei ole virhe vaan mitattava asia | [L] |

**Seuraus:** jos halutaan sanoa "olit 40 ms myöhässä", kokonaisviive pitää tuntea muutaman millisekunnin
tarkkuudella juuri tällä laitteella ja juuri tässä istunnossa. Selaimen omat luvut eivät riitä siihen.
Jos sanotaan vain "iskuvälisi olivat tasaiset" tai "kolmosen kohdalla kuului isku, vaikka siinä piti
olla tauko", vakioviive supistuu pois. Tämä ero ratkaisee koko arkkitehtuurin.

## 1.5 Kalibrointivaihtoehdot

| Tapa | Miten | Vahvuus | Heikkous | Luokka |
| --- | --- | --- | --- | --- |
| K1 Selaimen ilmoittamat arvot | `baseLatency` + `outputLatency` | Ei käyttäjän vaivaa | Puuttuu vanhasta Safarista, aliarvioi, Bluetooth valehtelee [7][8] | [L] |
| K2 Kaiutin–mikrofoni-mittaus | Sivu soittaa klikkejä, mikrofoni kuulee ne, erotus on edestakainen viive | Mittaa oikean ketjun. Kaufman käytti tätä AudioWorkletilla [8] | Ei toimi kuulokkeilla. Pätee vain niin kauan kuin laite ja reitti eivät vaihdu | [L] |
| K3 Viite samassa äänityksessä | Tausta sisältää merkkiäänet, mikrofoni äänittää sekä ne että soiton. Ajoitus luetaan äänityksen sisältä | Viive supistuu pois kokonaan. REPP raportoi latenssin ja jitterin keskimäärin 2 ms:n sisällä naputukselle [9] | Vaatii kaiuttimet, ei kuulokkeita eikä langattomia. REPP on tehty naputukselle ja analysoi palvelimella, ei selaimessa. Kitaran taajuusalue peittää REPP:n merkkikaistan (200–340 Hz) | [L], sovitus kitaraan [O] |
| K4 Soittajan oma viite | Soittaja soittaa 8 vaimennettua iskua klikin mukana, mediaani asetetaan nollaksi | Toimii kuulokkeilla | Leipoo soittajan oman ennakoinnin nollaksi. Ei kerro, onko soittaja edellä vai jäljessä | [O] |
| K5 Ei kalibrointia | Käytetään vain viiveestä riippumattomia mittareita | Yksinkertaisin ja rehellisin | Ei "edellä/jäljessä"-tietoa | – |

REPP on tämän selvityksen tärkein yksittäinen lähde, koska se on vertaisarvioitu osoitus siitä, että
selaimella **voi** mitata ajoitusta tarkasti, kun viite ja suoritus ovat samassa äänityksessä. Samalla
se näyttää hinnan: vain kannettavat tietokoneet, vain kaiuttimet, hiljainen huone, kohinanvaimennus pois
ja osallistujien karsinta, jos merkkiäänet eivät erotu [9]. Luin artikkelista esijulkaisun (bioRxiv v3),
en lopullista lehtiversiota.

## 1.6 Iskujen alkukohtien tunnistus: menetelmät ja näyttö

| Menetelmä | Periaate | Näyttö | Sopivuus tähän |
| --- | --- | --- | --- |
| Energiasuhde (nykyinen) | RMS-tason nousu | Ei havaitse ylösvetoja soivan soinnun päältä [V] | Ei |
| Spektrivuo | Spektrin positiivinen muutos kehysten välillä | Reaaliaikaisena F = 74,5 %, ±25 ms, sekalainen 25 966 alukkeen aineisto [10]. Kitaran mikrofonisignaalilla (pickup) F1 = 79,5 %, ±50 ms [11] | Lähtökohta |
| Logaritminen, suodatettu spektrivuo | Sama puolisävelkaistoilla | F = 80,3 %, tarkkuus 88,3 %, saanti 73,5 % [10] | Jatkokehitys, jos perusversio ei riitä |
| Neuroverkko (CRNN) | Opetettu malli | Pickup F1 = 97,6 %. Puhelimen mikrofoni F1 = 85–93 %, ylösvedot 53–79 % [11] | Ei nyt: opetusaineisto, mallin koko, ei selainversiota |
| Sävelentunnistus (Pitchy) | Yhden sävelen jaksollisuus | Ei tunnista sointua eikä vaimennettua iskua [V] | Ei rytmiin |

Tulkinta lähteistä [10] ja [11]:

- Parhaallakin julkaistulla mallilla puhelimen mikrofonista **noin joka kymmenes isku** jää löytymättä
  tai on ylimääräinen ±50 ms:n ikkunalla. Yksittäisen iskun tuomio ("tämä isku puuttui") on siis usein
  väärä. Koko oton tunnusluku kestää tämän virhetason paremmin.
- **Lyönnin suuntaa ei saada luotettavasti.** Tuore tutkimus tarvitsi suunnan opettamiseen rannekkeen
  kiihtyvyysanturin, ja pelkällä mikrofonilla ylösvetojen F1 jäi 53–79 %:iin [11].
- Tutkimusaineisto [11] äänitettiin metronomin kanssa tempoilla 60–100 BPM ilman taustamusiikkia. Tulos
  ei kerro mitään tilanteesta, jossa kaiuttimesta soi rumpukomppi.

## 1.7 Olosuhteet: kitara, soittotapa, tausta, mikrofoni ja laite

Tämän taulukon arviot ovat **[O]**, ellei toisin merkitä. Ne ovat perusteltuja odotuksia, joiden
järjestys pitää mitata luvun 4 kokeella.

| Olosuhde | Odotus | Perustelu |
| --- | --- | --- |
| Akustinen kitara, laitteen mikrofoni | Paras tapaus | Voimakas, laajakaistainen aluke. Tutkimuksen [11] asetelma |
| Sähkökitara ilman vahvistinta, laitteen mikrofoni | Heikko | Taso on matala. Projektin oma koeohje ennakoi saman sävelentunnistukselle [V] |
| Sähkökitara vahvistimesta, laitteen mikrofoni | Kohtalainen | Särö ja kompressio tasoittavat alukkeen ja pidentävät sointia |
| Sähkökitara äänikortin kautta | Puhtain signaali | Ei huonetta eikä taustaa. Harvalla oppijalla on äänikortti |
| Vaimennetut kielet | Helpoin tunnistaa, mutta hiljainen | Lyhyt, perkussiivinen ääni [V, synteettinen]. Muistuttaa muita napsahduksia: käden osuma kanteen, pöydän kopautus, jalka |
| Hiljaiset iskut ja ylösvedot | Vaikein | 8/32 ylösvetoa puuttui −12 dB:n tasolla [V, synteettinen], F1 53–79 % [11] |
| Soiva sointu, kahdeksasosat ≤ 100 BPM | Todennäköisesti riittävä spektrivuolla | [V, synteettinen], [11] |
| Kuudestoistaosat | Ei riittävä | 76/128 [V, synteettinen] |
| Tausta kaiuttimesta | Estää arvion, ellei taustaa ole suunniteltu mikrofonia varten | 32–33 väärää iskua [V, synteettinen] |
| Kaiunpoisto apuna | Ei | Kaiunpoisto on tehty puheelle ja vääristää soittimen ääntä. Koodi kytkee sen pois samasta syystä [V] |
| Laitteen oma äänenkäsittely | Riski | Pyyntö kytkeä käsittely pois ei aina toteudu. WebKitin vikailmoituksissa pois kytkemisestä on seurannut hiljainen virta tai vain vasen kanava [13] |
| iPhone ja Safari | Suurin epävarmuus | Mikrofonin avaaminen muuttaa laitteen äänitilaa ja toiston voimakkuutta [13]. Projektilla on jo omia iPhone-äänikorjauksia [V] |
| Android ja Chrome | Suuri laitekirjo | [15] |
| Bluetooth-kuulokkeet tai -mikrofoni | Rajataan pois | [8][14] |

## 1.8 Mitä mikrofonista voi päätellä ja mitä ei

**Voi päätellä, jos luvun 4 validointi onnistuu:**

| Päätelmä | Ehto |
| --- | --- |
| Mikrofoni kuuli N iskumaista ääntä | Tausta ei vuoda |
| Iskuvälien tasaisuus | Sama |
| Tempo ja sen ryömintä oton aikana | Sama, vähintään noin 8 iskua |
| Mihin kahdeksasosiin iskut osuivat, kun vaihe sovitetaan dataan | Harva kuvio, tempo ≤ noin 100 BPM, iskut selviä |
| Onko soitto keskimäärin edellä vai jäljessä | Vain viitteellä samassa äänityksessä (K3) |

**Ei voi päätellä:**

- **Lyönnin suuntaa.** [11]
- **Liikkuiko käsi tauon aikana.** Äänetön liike ei kuulu. Tämä on kompin opetuksen ydinasia, ja se jää
  aina itsearvion tai katsojan varaan.
- **Mikä sointu soi tai osuiko veto oikeille kielille.** Nykyinen tunnistus on yksiääninen. [V]
- **Oliko ääni kitarasta.** Taputus, pöydän kopautus ja kaiuttimen rumpu näyttävät samalta. Mikrofoni ei
  siis todista, että oppija soitti kitaraa.
- **Että puuttuva havainto tarkoittaa soittamatonta iskua.** Tunnistin jättää iskuja huomaamatta.
  Palautteen pitää sanoa "kuulin 6 iskua", ei "soitit 6 iskua".
- **Aksentteja ja dynamiikkaa luotettavasti.** Laitteen tasonsäätö ja etäisyys muuttavat tasoja. Saman
  oton sisäinen vertailu voi onnistua. [O]
- **Groovea tai musikaalisuutta.** Pienet ajoituspoikkeamat eivät ole yksiselitteisesti virheitä
  (aiemman selvityksen PR #70 lähteet 10–11).
- **Ajoitusta millisekunnin tarkkuudella** millään kuluttajalaitteella ilman viitettä.

**Kaksi asiaa, joita ei pidä sekoittaa:**

- Riffikaiun "Tunnistettu X/4" on **sävelten järjestyksen** tarkistus. Se ei mittaa rytmiä. [V]
- Onnistunut synteettinen testi on **regressiotesti**, ei näyttö toimivuudesta. Projektin omat testit
  sanovat saman (`tests/fakeMic.ts`). [V]

## 1.9 Kirjastot

| Kirjasto | Lisenssi | Alukkeiden tunnistus | Arvio |
| --- | --- | --- | --- |
| essentia.js | AGPL-3.0 | Essentian C++-algoritmit, WebAssembly | Ei: tarttuva lisenssi, repo on Unlicense. Suuri paketti |
| aubio | GPL-3.0 tai uudempi | Useita menetelmiä | Ei: lisenssi, ei selainkirjasto |
| aubiojs | MIT (kääre), sisältää aubion | README lupaa vain sävelkorkeuden ja tempon | Ei: alukkeita ei tarjolla, aubion lisenssi seuraa mukana |
| Meyda | MIT | Piirteiden laskenta. Alukkeiden poimintaa en saanut varmistettua | Ei tarvetta |
| @audio/beat | MIT | Spektrivuo, energia, vaihe, monikaista. Puhdas funktio näytetaulukolle | Mahdollinen vertailukohta. Nuori projekti (24 committia) |
| MMLL | MIT | Kyllä, esimerkki käyttää vanhentunutta ScriptProcessorNodea | Ei |
| pitchy | 0BSD | Ei, vain sävelkorkeus | Jo käytössä, ei laajenneta |

Lähde: kunkin projektin GitHub-sivu [16]. Julkaisupäiviä tai pakettikokoja en saanut varmistettua.

**Suositus:** oma spektrivuotunnistin puhtaana TypeScript-funktiona. Kokeen versio on noin 40 riviä
ilman nopeaa Fourier-muunnosta. Perustelut: ei uutta riippuvuutta eikä lisenssikysymystä, aikaleimat
pysyvät omassa hallinnassa, ja sama funktio toimii yksikkötestissä, jälkianalyysissä ja myöhemmin
AudioWorkletissa. Valmiista kirjastosta ei olisi apua vaikeimpiin osiin, jotka ovat kalibrointi, taustan
erottaminen ja palautteen rehellisyys.

## 1.10 Lähteet

Luettu suoraan, ellei toisin mainita.

1. W3C. *Web Audio API*. https://www.w3.org/TR/webaudio/ (viitattu PR #70:n kautta, ei luettu uudelleen)
2. MDN. *AudioContext: outputLatency*. https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency
3. MDN. *AudioContext: baseLatency*. https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency
4. MDN. *AudioContext: getOutputTimestamp()*. https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/getOutputTimestamp
5. MDN. *AudioWorkletGlobalScope*. https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletGlobalScope
6. MDN. *MediaStreamTrack: getSettings()*. https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/getSettings
7. Beaufort, F. *Synchronize audio and video playback on the web*. web.dev. https://web.dev/articles/audio-output-latency
8. Kaufman, J. (2021). *Browser Audio Latency*. https://jefftkaufman.substack.com/p/browser-audio-latency
   Yhden kannettavan mittaus vuodelta 2021. Luvut ovat suuntaa antavia.
9. Anglada-Tort, M., Harrison, P. M. C. & Jacoby, N. (2022). *REPP: A robust cross-platform solution for
   online sensorimotor synchronization experiments*. Behavior Research Methods.
   https://link.springer.com/article/10.3758/s13428-021-01722-2 Luettu esijulkaisu:
   https://www.biorxiv.org/content/10.1101/2021.01.15.426897v3.full-text (osa tekstistä tiivistelmänä)
10. Böck, S., Krebs, F. & Schedl, M. (2012). *Evaluating the Online Capabilities of Onset Detection
    Methods*. ISMIR 2012. https://archives.ismir.net/ismir2012/paper/000049.pdf
11. Murgul, S., Schimper, J. & Heizmann, M. (2025). *Joint Transcription of Acoustic Guitar Strumming
    Directions and Chords*. ISMIR 2025. https://arxiv.org/abs/2508.07973 (loppuosa tiivistelmänä)
12. Repp, B. H. & Su, Y.-H. (2013). *Sensorimotor synchronization: A review of recent research
    (2006–2012)*. Psychonomic Bulletin & Review. https://link.springer.com/article/10.3758/s13423-012-0371-2
    Ei luettu. Mainittu jatkolukemisena, väitteet tässä raportissa nojaavat lähteeseen 9.
13. WebKit Bugzilla 262759, 294623, 326286, 267676 ja 281978. https://bugs.webkit.org/show_bug.cgi?id=262759
    Luettu vain hakutulosten tiivistelminä. Vikailmoitukset ovat yksittäisiä havaintoja.
14. Yousician Support. *Setting up your guitar*. https://support.yousician.com/hc/en-us/articles/201723651-Setting-up-your-guitar
    Luettu vain hakutuloksen tiivistelmänä.
15. Android Developers. *Low latency audio* (Oboe). https://developer.android.com/games/sdk/oboe/low-latency-audio
    Luettu vain hakutuloksen tiivistelmänä. Natiivisovelluksen mittaus, ei selaimen.
16. GitHub: https://github.com/MTG/essentia.js · https://github.com/aubio/aubio ·
    https://github.com/qiuxiang/aubiojs · https://github.com/meyda/meyda · https://github.com/audiojs/beat ·
    https://github.com/sicklincoln/MMLL · https://github.com/ianprime0509/pitchy
