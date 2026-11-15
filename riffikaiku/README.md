# Riffikaiku (beta)

Lyhyitä, neljän sävelen kitarariffejä kuunneltavaksi ja soitettavaksi. Kaksi selvästi erilaista
käyttötapaa samalla riffidatalla, säveltoistolla ja säveljonon tarkistajalla:

| Käyttötapa | Osoite | Tavoite | Palaute | Eteneminen |
|---|---|---|---|---|
| **Riffiharjoitus – oikea kitara** | `riffikaiku.html?tila=harjoitus` | Opetella kuulemaan ja soittamaan säveljonoja omalla kitaralla | Opastava: tunnistettu sävel, oikea kohta, väärä sävel, oktaaviero, epävarma tunnistus, vihje pyynnöstä. Ei virhepisteitä eikä aikarajoja | Itse kuitatut riffit (”Harjoiteltu”) ja mikrofonin kokonaan kuulemat kerrat |
| **Riffikaiku-peli – virtuaalikitara** | `riffikaiku.html?tila=peli` | Musiikillinen muisti- ja otelautapeli | Pallukat vihreä / punainen / keltainen, painalluksen välähdys, tähti ja ennätys | Todelliset läpäisyt (kaikki vihreinä), kotitreenit avautuvat järjestyksessä |

Aloitussivu `riffikaiku.html` näyttää kaksi korttia (Musiikin kartan `learning-card`), jotka ovat
tavallisia linkkejä omiin osoitteisiinsa: selaimen Takaisin, kirjanmerkit ja jakaminen toimivat ilman
reititintä. Ei rytmin pisteytystä, elämiä eikä pakollista nopeutta. Sivu ei ole hakukoneissa (`noindex`);
Kitaraharjoittelijan Sävelkorva ja otelauta -valikko linkittää siihen.

**Tila:** pelattava beta. Oikean kitaran, mikrofonin ja puhelimien toimintaa ei ole todennettu –
ks. [HYVAKSYNTAKOKEET.md](HYVAKSYNTAKOKEET.md).

## Rakenne

**Yhteinen ydin** (molemmat käyttötavat):

| Tiedosto | Tehtävä |
|---|---|
| `sequence.ts` | `SequenceChecker` (yksi yritys, pallukat), `SequencePractice` (yrityssarja, muistivihjeet), `OutputSettler` (mallisoiton jälkeinen suojavaihe). Ei ääntä, Reactia eikä syöttölaitetta. |
| `riffs.ts` | Kotitreenit (2 × 3 riffiä), harjoituskieli ja ohje, ehdotetut otelautapaikat, opastus, mikrofonitestin B3, `noteName`, `spotText`. |
| `audioAdapter.ts` | `GameAudio`-rajapinta ja `BrowserAudio` (Kitaraharjoittelijan `Microphone` + `ReferencePlayer`). |
| `store.ts` | Oma tallennus `musiikin-kartta:riffikaiku:v1` (ks. Tallennus). |
| `ui.tsx` | Sijaintipolku, käyttötavan tunniste, pallukkarivi, otelauta harjoituskielen korostuksella (Kitaraharjoittelijan `Board`). |
| `modes.ts`, `main.tsx`, `StartPage.tsx` | Käyttötapa URL-parametrista, aloitussivun kortit, sivun otsikko. |

**Oikea kitara:**

| Tiedosto | Tehtävä |
|---|---|
| `mic.ts` | `MicController`: lupa vasta valinnasta, äänitulo, kohinan mittaus, B-kielen testi, viritin, diagnostiikka, mallisoiton suojaus, irtoaminen. Ainoa paikka, joka puhuu mikrofonille. |
| `pluck.ts`, `tuner.ts` | `PluckDetector` (erilliset näppäilyt kehyksistä) ja `Tuner`. Puhtaita. |
| `practice.ts` | `RiffPractice`: vaiheet Kuuntele / Opettele / Kokeile muistista, opastava palaute, epävarma tunnistus, toistuva sävel, vihje, kuittaus. |
| `PracticeView.tsx`, `PracticeSteps.tsx`, `PracticeMic.tsx`, `MicTools.tsx` | Harjoitusvalikko, riffinäkymä, vaiheet, mikrofonin tilarivi ja paneelit (valmistelu, viritin, diagnostiikka). |

**Virtuaalikitara:**

| Tiedosto | Tehtävä |
|---|---|
| `game.ts` | `RiffGame`: pelin tilakone ilman mikrofonia; läpäisyt, tähdet ja ennätykset. |
| `GameView.tsx` | Pelin valikko, pelinäkymä ja kotitreenin onnittelu. |

Käännös: `vite.riffikaiku.config.ts` → `assets/riffikaiku/` (`emptyOutDir` koskee vain sitä).
Aja aina `npm run build` (se luo myös lisenssitiedoston ja päivittää `riffikaiku.html`:n `app.js?v=`-tunnisteen).
Kitaraharjoittelijan koodia (`harjoittelija/`) ei muuteta, joten sen käännös pysyy tavulleen samana.

## Mikrofonitunnistus: löydökset ja korjaukset (0.2)

Ketju: `getUserMedia` (valittu laite) → `Microphone` → `PitchLoop` (Pitchy, 170 ms ikkuna, kehys
noin 60 kertaa sekunnissa) → **`PluckDetector`** → `RiffGame` (reititys) → `SequencePractice` / `SequenceChecker` → UI.

1. **”Hiljaista” tarkoitti: taso alle kiinteän äänikynnyksen 0,01 RMS (−40 dBFS).** Kieli saattoi
   soida edelleen. Matala E vaimenee hitaasti (näkyi ~3 s), ohut E nopeasti (< 1 s). Hiljaisella
   tulolla (äänikortin pieni gain, kannettavan mikrofoni ja vahvistamaton sähkökitara) koko
   näppäys voi jäädä kynnyksen alle – tämä selittää todennäköisesti, miksi sisäisellä mikrofonilla
   vain D3 tunnistui. Riffikaiussa ei ollut Kitaraharjoittelijan kohinamittausta.
   **Korjaus:** mikrofonitestin (ja työkalujen) alussa mitataan 1 s taustakohinaa; kynnys = 3 ×
   kohinan 95. persentiili, rajoissa 0,003–0,15 (sama `noiseThreshold` kuin Kitaraharjoittelijassa).
   Äänekäs mittaus → oletuskynnys ja ohje. UI näyttää nyt ”alle äänikynnyksen” eikä ”hiljaista”.
2. **Laite vaihtui vain uudelleenkäynnistyksellä**, koska mikrofoni avattiin aina järjestelmän
   oletuksella; avoin selainvirta ei seuraa järjestelmäasetuksen muutosta. **Korjaus:** äänitulon
   valinta sovelluksessa (ks. alla).
3. **NoteGate vaati jokaiselle uudelle vastaukselle uuden alukkeen (taso ≥ 2× edellisen 300 ms:n
   minimi) tai ≥ 120 ms hiljaisuuden – myös eri sävelelle.** Soivan kielen päälle soitettu eri sävel
   jäi siksi huomaamatta. **Korjaus:** `PluckDetector` (Riffikaiun oma, jaettua NoteGatea ei muutettu)
   noudattaa NoteGaten sääntöjä ja hyväksyy lisäksi **sävelen vaihdon** uutena näppäilynä, kun uusi
   sävel on vakaa (240 ms), ei ole edellisen ylä-ääni- tai oktaavihyppy (12, 19, 24, 28, 31, 36
   puolisävelaskelta) ja sen taso on vähintään 25 % edellisen sävelen huipusta (myötäresonanssi ei
   kelpaa). Sama sävel uudelleen vaatii edelleen alukkeen tai vaimennuksen, joten sustain ei vastaa
   kahdesti. Nollaus (mallin jälkeen, tauolta) estää sävelvaihdon, kunnes seuraava näppäily on tullut
   alukkeen tai hiljaisuuden kautta – mallin kaiutinhäntä ei voi virittää sitä.
4. **Vakausaika 240 ms ei ole soittovaatimus.** Se lasketaan kehyksistä, joiden ikkunassa sävel vielä
   on, joten synteettisesti ~100–140 ms selvä näppäys riittää. Pelaajan ei tarvitse pitää kieltä soimassa.
5. Kaksikanavainen äänikortti (esim. Scarlett Solo: mikrofoni- ja soitintulo) avataan kahdella
   kanavalla; PitchLoop analysoi voimakkaampaa. Kanavaa ei voi valita selaimesta erikseen, ja selain
   voi silti tarjota laitteen monona (näkyy diagnostiikassa ja laitetiedossa).

### Diagnostiikka

Harjoituksen mikrofonipaneelin välilehti (Mikrofoni ja viritys → Diagnostiikka). Viisi vaihetta erikseen: **1. ääntä** (dB vs. kynnys, kanavat, leikkautuminen),
**2. sävelkorkeus** (Hz, sävel, MIDI, sentit, Pitchyn selkeys tai hylkäyksen syy),
**3. vakaus** (ehdokas ja ms / 240), **4. uusi näppäily** (valmis / syy: sama sävel soi,
ylä-ääni, liian hiljainen, vakautuu; viimeisin näppäily ja laskuri), **5. välitys** (harjoitukseen,
mikrofonitestiin tai ei välitetty). Näkymä on vain luku: se ei syötä mitään harjoitukseen.

### Äänitulon valinta

Valikko: ”Järjestelmän oletus” + selaimen ilmoittamat syöttölaitteet (`enumerateDevices`; nimet näkyvät
vasta luvan jälkeen; Chromen näennäislaitteet `default` ja `communications` piilotetaan). Vaihdossa vanha
virta (raidat ja analyysisolmut) suljetaan, uusi avataan `deviceId: { exact }` -ehdolla, kohina mitataan
uudelleen ja käytössä oleva laite näytetään selaimen ilmoittamana. Kesken riffin vaihto palaa
mikrofonitestiin ja sama riffi jatkuu alusta. Valinta tallennetaan. Puuttuva laite → järjestelmän
oletus ja ilmoitus. Laitteen irrotus → tauko. `devicechange` päivittää listan.

### Viritin

Normaali viritys E2–A2–D3–G3–B3–E4, A4 = 440 Hz, `cents = 1200 · log2(mitattu / tavoite)`.
Kieli valitaan tai ”Auto” (lähin vapaa kieli). **Vihreä alue ±5 senttiä** (tavallinen virittimien
raja; tiukempi hyppisi Pitchyn ja kielen hajonnan vuoksi). Lukema vaatii ≥ 5 selkeää havaintoa
100 ms:n ajalta ja ≤ 25 sentin hajonnan, muuten ”epävarma havainto” eikä ohjetta. Yli
puolisävelaskeleen poikkeama → ”kuulen X, tarkista kieli”. Mittari: mediaani + eksponentiaalinen
tasoitus. Viritin lukee kehysten taajuutta (myös epävireisiä), ei näppäilytapahtumia, eikä sen
havainnot koskaan mene pelin tarkistajalle. Virittimestä pääsee suoraan harjoitukseen.

## Riffiharjoitus – oikea kitara (0.4)

Harjoitusvalikko: lyhyt ohje (valitse riffi → valmistele mikrofoni tarvittaessa → kuuntele, opettele,
kokeile muistista → kuittaa), mikrofonin tilarivi, kaikki kotitreenien riffit **ilman lukkoja** ja
Jatka-painike viimeksi harjoiteltuun riffiin ja vaiheeseen. Riffinäkymässä vaiheet ovat painikkeina
(`aria-current="step"`), ja niiden välillä voi liikkua vapaasti:

1. **Kuuntele:** malli soi ja pysähtyy samasta painikkeesta. Pallukat näyttävät sävelten määrän ja soivan kohdan.
2. **Opettele:** sävelnimet, ehdotetut otelautapaikat järjestysnumeroin (A–A yhdistetään ”1·2”) ja soittovinkki.
   Otelaudalta voi kuunnella yksittäisiä säveliä. Mikrofoni näyttää ”Kuulen nyt: X” ja merkitsee sävelen
   paikalle, jos se kuuluu riffiin – mitään ei arvioida.
3. **Kokeile muistista:** sävelet ja paikat piilossa. Mikrofoni etenee samalla `SequenceChecker`-tarkistajalla
   kuin peli, mutta palaute on opastavaa:
   - oikea sävel oikeassa kohdassa → kohta merkitään tunnistetuksi (✓, nimi näkyviin);
   - väärä sävel → ”Kuulin X. Tähän kohtaan kuuluu toinen sävel.” Oikeaa ei paljasteta, kohta odottaa;
   - sama sävelnimi eri oktaavissa → erillinen ohje, joka mainitsee myös ylä-äänen mahdollisuuden;
   - **epävarma tunnistus** (yli 450 ms selvästi kynnyksen ylittävää ääntä ilman selkeää säveltä, tai
     epävireinen sävel) → ohje, ei virhettä;
   - **toistuva sama sävel** (odotettu sävel on sama kuin juuri hyväksytty, ja se soi yhä yli 700 ms) →
     ohje vaimentaa kieli;
   - **Näytä seuraava sävel** pyynnöstä: sävel ja ehdotettu paikka. Ei rangaistusta;
   - koko riffi → ”Mikrofoni kuuli koko riffin oikeassa järjestyksessä” ja kirjaus `practice.heard`.
     Ei pakota mihinkään: Soita uudelleen, kuittaa tai siirry seuraavaan.
   Ilman mikrofonia vaihe ei arvioi; **Näytä sävelet tarkistukseen** näyttää riffin oman soiton vertailuun.

Kokeile muistista -kierroksen eteneminen säilyy vaiheiden vaihdossa, mallin kuuntelussa, harjoitusvalikossa
käynnissä ja mikrofonin katkeamisessa; vain toinen riffi tai Aloita alusta nollaa sen. **Kuittaa
harjoitelluksi** on aina käytettävissä (myös ilman mikrofonia ja ilman koko riffin tunnistusta), ja sen
voi perua. Edellinen / Seuraava riffi eivät vaadi mitään suoritusta.

**Mikrofoni** (tilarivi aina näkyvissä): lupaa pyydetään vasta ”Ota mikrofoni käyttöön”- tai Viritin-
valinnasta. Valmistelu: äänitulo, kohinan mittaus, vapaaehtoinen B-kielen testi, viritin ja diagnostiikka
samassa paneelissa, sekä ”Mitä mikrofoni tunnistaa – ja mitä ei” -ohje. Mallisoiton ajan analyysi on
tauolla ja sen jälkeen suojavaihe (OutputSettler). Taustavälilehti tai irrotettu laite sulkee mikrofonin
ja kertoo syyn; harjoittelu jatkuu ilman mikrofonia, ja sen voi ottaa uudelleen käyttöön.

## Riffikaiku-peli – virtuaalikitara (0.4)

Pelin valikko: tulostaulu (läpäistyt riffit, tähdet, kotitreenit), Pelaa / Jatka -painike ja kotitreenit,
joissa jokaisen riffin tila (○ ei läpäisty, ✓ läpäisty, ★ läpäisty ilman vihjettä). Kotitreeni 2 avautuu
Kotitreeni 1:n suorittamisesta.

1. **Valmis (ready):** uusi riffi ei soi itsestään. Pelaaja painaa **Kuuntele riffi**.
2. **Vuoro:** otelaudan painallus soi ja välähtää: oikea vihreänä sävelnimellä, väärä punaisena ✗ (lyhyt
   tärähdys, ei animaatiota `prefers-reduced-motion`-asetuksella).
3. **Pallukat:** harmaa · **vihreä** (heti oikein) · **punainen** (väärä, myös väärä oktaavi; oikeaa ei
   paljasteta) · **keltainen** (oikea virheen jälkeen). Symbolit ✓ ✗ ↻ ja ruudunlukijan teksti.
   Otsikon alla kotitreenin riffit (✓/★/numero) kertovat etenemisen.
4. **Virheetön:** ”Riffi läpäisty!” ja saavutus: **Ensimmäinen läpäisy**, **Tähti** (ilman vihjettä) tai
   **Uusi ennätys** (vähemmän vääriä säveliä kuin aiemmin). Pelaaja valitsee Seuraava riffi tai Soita uudelleen.
5. **Loppuun keltaisilla:** tulos jää näkyviin, ei automaattista mallia; vapaa kokeilu ei muuta mitään;
   **Yritä uudelleen** aloittaa uuden arvioitavan yrityksen. Muistivihjeet kolmannen epäonnistumisen jälkeen.
6. **Kuuntele riffi kesken yrityksen** ei nollaa mitään; sama painike pysäyttää.
7. Kolmen läpäistyn riffin jälkeen onnittelu tähtineen (Jatka / Pelaa uudelleen / Pelin valikko).
   Seuraavaan siirrytään vain pelaajan valinnasta.

**Lopeta peli** palaa pelin valikkoon; edistyminen on jo tallennettu. Pelin näppäimistökäyttö:
otelaudan nuolinäppäimet, Home/End ja Enter/välilyönti (yhteinen `Board`).

**Muistivihjeet:** saman riffin kolmannen loppuun soitetun epäonnistuneen yrityksen jälkeen uusi
yritys näyttää harmaina ne paikat, jotka pelaaja on jollakin aiemmalla yrityksellä soittanut **heti
oikein**; muut ovat tyhjiä. Paikkakohtainen, ei hyväksy mitään, nollautuu seuraavassa riffissä.
Manuaalinen **Vihje** on erillinen ja kirjataan tulokseen (`hint`); vihjeen kanssa ei saa tähteä.

### Otelauta

Koko kuusikielinen otelauta (nauhat 0–5) näkyy aina. Harjoituskieli korostetaan (täysi näkyvyys,
kultainen reunus, paksumpi kieliviiva, otsikkosolun taustaväri), muut kielet himmennetään mutta ovat
painettavissa. Korostus on ohje, ei sääntö: oikea MIDI-sävel hyväksytään miltä kieleltä tahansa.
Mikrofoni ei tunnista kieltä eikä sormitusta – harjoitus ei väitä tunnistavansa niitä.

## Kotitreenit

| Kotitreeni | Harjoituskieli | Sävelet | Riffit |
|---|---|---|---|
| 1 | B | B3, C4, D4 | Ensimmäinen kaiku B3–C4–D4–C4 (0-1-3-1), Edestakaisin C4–B3–C4–D4, Kaari takaisin B3–D4–C4–B3 |
| 2 | G | G3, A3, B3 | G-kielen kaari G3–A3–B3–A3, Kaksi samaa A3–A3–G3–B3, Hyppy alas B3–G3–A3–G3 |

Samat kotitreenit ovat molemmissa käyttötavoissa. **Pelissä** ennen Kotitreeni 1:tä on kahden sävelen
opastus (B3–C4), Kotitreeni 2 avautuu Kotitreeni 1:n suorittamisesta, ja kolmen virheettömän riffin jälkeen
tulee onnittelu (Jatka / Pelaa uudelleen / Pelin valikko). Ei automaattista siirtoa. **Harjoituksessa**
kaikki riffit ovat auki heti eikä opastusta tarvita.
Tulevat kokonaisuudet: [KEHITYSSUUNNITELMA.md](KEHITYSSUUNNITELMA.md).

## Tallennus

Avain `musiikin-kartta:riffikaiku:v1`, `version: 1` (ei muutoksia Kitaraharjoittelijan avaimeen).
Kentät lisätään taaksepäin yhteensopivasti; mitään ei poisteta.

| Kenttä | Käyttö |
|---|---|
| `run.board`, `levels.board`, `stats.board`, `results` (`input: 'board'`) | **Pelin** todelliset läpäisyt, tähdet (`solo`) ja ennätys (`best`, 0.4) |
| `practice.marked` (0.4) | **Harjoituksen** itse kuitatut riffit (riffi → aika) |
| `practice.heard` (0.4) | Kerrat, jolloin mikrofoni kuuli koko riffin oikeassa järjestyksessä |
| `practice.last` (0.4) | Viimeksi harjoiteltu riffi ja vaihe (Jatka-painike) |
| `run.mic`, `levels.mic`, `stats.mic`, `results` (`input: 'mic'`) | **0.1–0.3:n mikrofonipeli**: säilytetään sellaisenaan, ei enää kirjoiteta |
| `tutorialDone`, `device`, `input`, `fullBoard`, `structure` | Pelin opastus, valittu äänitulo, vanhat kentät |

Harjoitus ja peli eivät koskaan näytä samannimistä mutta eri tavalla laskettua tulosta: harjoitus puhuu
”harjoitelluista” (itse kuitattu), peli ”läpäistyistä” ja ”tähdistä”. **Vanhoja mikrofonipelin läpäisyjä
ei muuteta harjoituksen kuittauksiksi**, koska virheetön pelisuoritus ei ole sama asia kuin pelaajan oma
arvio harjoittelun riittävyydestä. Harjoitusvalikko kertoo erikseen, että ne ovat tallessa.
Ennätystä (`best`) aletaan seurata ensimmäisestä 0.4:ssä kirjatusta yrityksestä; se ei ole ”uusi ennätys”.

**Siirto 0.2:sta** (nelitasoinen rakenne, ei `structure`-kenttää): vanhoja tasoja ei näytetä eikä mitään
merkitä suoritetuksi tasonumeron perusteella. Riffikohtaiset tilastot ja tulokset säilyvät tunnisteittain;
vanhat tulokset saavat `legacy: true`. Vanhan tason 1 kesken olleista läpäistyistä riffeistä siirtyvät vain
Kotitreeni 1:ssä täsmälleen samat (`b-kaari`, `b-vaihto`).

## Uudelleenkäytettävä ydin myöhempiin harjoituksiin

```ts
import { SequencePractice, type AnswerInput } from './sequence';
const practice = new SequencePractice(expectedMidi, input);   // input: 'mic' | 'board'
const attempt = practice.start(round);                        // uusi yritys, uusi kierrostunniste
const event = attempt.feed({ midi, round, input });           // accepted (green/yellow) | wrong | ignored
attempt.marks;              // ['pending' | 'red' | 'green' | 'yellow', ...]
attempt.index; attempt.complete; attempt.flawless;
const passed = practice.finish();                             // loppuun soitettu yritys
practice.failedAttempts; practice.memory;                     // muistivihjeet paikoittain (MIDI | null)
```

Syötteen tulkinta (näppäily vs. painallus) ja äänen hallinta pysyvät ytimen ulkopuolella
(`PluckDetector`, `GameAudio`). Käyttöesimerkit (ei toteutettu tässä työssä):

- **A-mollipentatoninen nouseva** (1. boksi, 5. nauha, A2–A4): `expected = [45, 48, 50, 52, 55, 57, 60, 62, 64, 67, 69]`.
  Pidemmissä jonoissa pallukat kannattaa ryhmitellä (esim. oktaaveittain), ydin ei muutu.
- **Laskeva**: sama lista käännettynä. **Nouseva–laskeva**: `[...up, ...up.slice(0, -1).reverse()]`;
  sävelet toistuvat eri paikoissa, mikä on paikkakohtaisen muistin vuoksi kunnossa.
- **Doorinen ja muut moodit**: jono moodin asteista. Moodin oppiminen vaatii lisäksi sävelkeskusta
  korostavia harjoituksia (esim. perussävel alussa ja lopussa, drone tai sävelkeskukseen palaava
  aihe), joita ei pidä rakentaa pelkän säveljoukon tarkistuksen varaan. Tämä on myöhempää työtä.
- Asteikkoharjoituksessa voi haluta oktaavin hyväksymisen (sävelluokka). Se tulisi lisätä
  vertailijan valinnaksi; Riffikaiussa väärä oktaavi on tarkoituksella väärä sävel.

## Testaus

| Taso | Tiedosto |
|---|---|
| Säveljono, kotitreenit, tallennus ja yhteensopivuus | `tests/riffikaiku-sequence.test.ts` |
| Harjoitus ja mikrofonin ohjain (korvikeääni) | `tests/riffikaiku-practice.test.ts` |
| Peli (korvikeääni) | `tests/riffikaiku-game.test.ts` |
| Signaaliketju synteettisellä kitaralla oikean Pitchyn läpi | `tests/riffikaiku-pipeline.test.ts`, `tests/riffikaiku-pluck-tuner.test.ts` |
| Selain (Chromium, työpöytä ja puhelinmitat) korvatuilla äänirajapinnoilla | `tests/e2e/riffikaiku.spec.ts` |

Simuloidut mikrofonitestit eivät ole oikean kitaran hyväksymistestejä: ks. [HYVAKSYNTAKOKEET.md](HYVAKSYNTAKOKEET.md).

## Tunnetut rajoitukset

- **Oikealla kitaralla ei ole testattu 0.2–0.4:ää.** Kaikki tunnistustulokset ovat synteettisiä.
- **Kieltä ja sormitusta ei tunnisteta**: vain sävelkorkeus. Ehdotettu paikka on ohje.
- **Sama sävel pehmeästi uudelleen** soivan kielen päälle ilman tason nousua jää huomaamatta (testi
  ”TUNNETTU RAJOITUS”). Harjoitus näyttää ohjeen vaimentaa kieli.
- **Sävelvaihdon tasoraja 25 %** on arvio. Liian matala → myötäresonanssi voi näkyä vääränä sävelenä;
  liian korkea → legato jää huomaamatta.
- **Oktaavi- ja ylä-äänivirheet**: matalilla kielillä Pitchy voi raportoida ylä-äänen. Harjoitus kertoo
  oktaavierosta erikseen eikä laske sitä virheeksi, mutta laskuri ei etene ennen oikeaa korkeutta.
- **Epävarman tunnistuksen raja** (450 ms kynnyksen yli ilman selkeää säveltä) on arvio, ei mitattu.
- **Yhtä aikaa soivat kielet** (soinnut) näkyvät epävarmana tunnistuksena; harjoitus on monofoninen.
- Selaimet voivat ohittaa pyynnön kytkeä puheenkäsittely pois (erityisesti puhelimet).
- Mallin ääni voi kuulua mikrofoniin myös suojavaiheen jälkeen kaikuisassa huoneessa; kuulokkeet auttavat.
- Muistivihjelaskuri (peli) ja Kokeile muistista -kierros (harjoitus) eivät säily sivun latauksen yli.
- Rytmiä ei arvioida kummassakaan käyttötavassa.
