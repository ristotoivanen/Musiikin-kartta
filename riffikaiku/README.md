# Riffikaiku 0.2 (prototyyppi)

Kuuntele neljän sävelen riffi ja soita se takaisin samassa järjestyksessä – **oikealla kitaralla**
(mikrofoni) tai **virtuaalikitaralla** (otelauta, hiiri tai kosketus). Ei rytmin pisteytystä,
aikarajaa eikä elämiä. Sivu: `riffikaiku.html` (ei linkitetty muualta sivustolta, `noindex`).

**Tila:** paikallisesti pelattava prototyyppi. Oikean kitaran, mikrofonin ja puhelimien toimintaa
ei ole todennettu – ks. [HYVAKSYNTAKOKEET.md](HYVAKSYNTAKOKEET.md).

## Rakenne

| Tiedosto | Tehtävä |
|---|---|
| `sequence.ts` | **Yhteinen ydin**: `SequenceChecker` (yksi yritys, pallukat) ja `SequencePractice` (yrityssarja, muistivihjeet). `OutputSettler` (mallisoiton jälkeinen suojavaihe). Ei ääntä, Reactia eikä syöttölaitetta. |
| `pluck.ts` | `PluckDetector`: PitchLoopin analyysikehyksistä erilliset näppäilyt (ks. alla). Puhdas, raportoi diagnostiikan. |
| `tuner.ts` | `Tuner`: jatkuva viritinlukema kehyksistä. Puhdas. |
| `game.ts` | `RiffGame`: tilakone ja tapahtumien reititys. Ei Reactia eikä suoraa ääntä. |
| `audioAdapter.ts` | `GameAudio`-rajapinta ja `BrowserAudio` (Kitaraharjoittelijan `Microphone` + `ReferencePlayer`, laitelista, kynnys). |
| `riffs.ts` | 4 tasoa × 3 riffiä, tason kielet ja ohje, opastus, mikrofonitestin B3. |
| `store.ts` | Oma tallennus `musiikin-kartta:riffikaiku:v1`. |
| `Riffikaiku.tsx`, `MicTools.tsx`, `main.tsx`, `style.css` | Käyttöliittymä. Otelautana Kitaraharjoittelijan `Board`. |

Käännös: `vite.riffikaiku.config.ts` → `assets/riffikaiku/` (`emptyOutDir` koskee vain sitä).
`npm run build` kääntää molemmat; `npm run build:riffikaiku` vain Riffikaiun. Kitaraharjoittelijan
koodia (`harjoittelija/`) ei muutettu versiossa 0.2, joten sen käännös pysyy tavulleen samana.

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

Avattava näkymä (”Mikrofonin diagnostiikka” aloitusnäkymästä ja valmistelusta, ”Mikrofonin tiedot”
pelin aikana). Viisi vaihetta erikseen: **1. ääntä** (dB vs. kynnys, kanavat, leikkautuminen),
**2. sävelkorkeus** (Hz, sävel, MIDI, sentit, Pitchyn selkeys tai hylkäyksen syy),
**3. vakaus** (ehdokas ja ms / 240), **4. uusi näppäily** (valmis / syy: sama sävel soi,
ylä-ääni, liian hiljainen, vakautuu; viimeisin näppäily ja laskuri), **5. välitys** (riffiyritykseen,
mikrofonitestiin tai ei välitetty). Näkymä on vain luku: se ei syötä mitään peliin.

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

## Pallukat ja muistivihjeet

- **Harmaa**: ei vielä ratkaistu tällä yrityksellä (sävelnimi piilossa).
- **Vihreä**: oikea sävel heti → nimi näkyviin, seuraava paikka.
- **Punainen**: väärä sävel (myös väärä oktaavi) → pysytään samassa paikassa. Oikeaa säveltä ei
  paljasteta (”Väärä sävel. Kokeile uudelleen.”; mikrofonilla lisäksi mitä kuultiin).
- **Keltainen**: oikea sävel virheen jälkeen → nimi näkyviin, seuraava paikka. Ei muutu vihreäksi.
- Riffi hyväksytään vain kaikki vihreinä. Keltaisellakin riffin saa soittaa loppuun: ”Soitit riffin
  loppuun! Kokeile vielä ilman virheitä.” → **Yritä uudelleen** (tai Kuuntele ja yritä).
- Väri ei ole ainoa vihje: symbolit ✓ ✗ ↻ ja ruudunlukijan teksti jokaisessa pallukassa.

**Muistivihjeet:** saman riffin kolmannen loppuun soitetun epäonnistuneen yrityksen jälkeen uusi
yritys näyttää harmaina ne paikat, jotka pelaaja on jollakin aiemmalla yrityksellä soittanut
**heti oikein** (vihreä); muut paikat ovat tyhjiä. Muisti on paikkakohtainen. Vihje ei hyväksy
mitään. Yksittäiset väärät sävelet ja ”Aloita alusta” eivät kasvata laskuria. Miksi vain vihreät:
loppuun soitetussa yrityksessä kaikki paikat on lopulta löydetty, joten ”löydetyt paikat”
paljastaisivat aina koko riffin. Laskuri on käyttökertakohtainen (ei tallennu).
Manuaalinen sävelvihje on erillinen ja kirjataan tulokseen (`hint`).

## Tasot

| Taso | Kielet | Riffit |
|---|---|---|
| 1 Ensimmäiset riffit | B | B3–C4–D4–C4 (0-1-3-1), Edestakaisin, Laskeva kaiku (askeleet ≤ 2 puolisävelaskelta) |
| 2 Muista melodia | B | Kumpu, Toistuva alku (E–E), Hyppivä kaiku |
| 3 Kaksi kieltä | G + B | Kahden kielen nousu, Kaksi samaa A–A–C–A, Kahden kielen kaari |
| 4 Laajempi otelauta | kaikki 6 | Hyppy ylös, Mollinen kaiku, Kielten yli (Am-murtosointu) |

Nauhat 0–5; testi varmistaa, että jokainen sävel löytyy tason otelaudalta. Tason ulkopuoliset kielet
piilotetaan; ”Näytä koko otelauta” näyttää kaikki kuusi (sama tarkistus). Oikean kitaran tilassa ohje
”Soita B-kielellä (toiseksi ohuin kieli).” – tarkistus perustuu silti vain sävelkorkeuteen.
Otsikko ”Taso 1 · Riffi 2/3”. Tason kolmen virheettömän riffin jälkeen onnittelunäkymä
(”Onneksi olkoon! Läpäisit tason N!”) ja valinnat Jatka / Harjoittele uudelleen / Takaisin
tasovalikkoon; viimeisen tason jälkeen loppunäkymä ilman seuraavaa tasoa. Ei automaattista siirtoa.
Tasovalikko: läpäistyt, nykyinen (jatkuu kesken jääneestä) ja seuraava avattu taso.

## Tallennus

Avain `musiikin-kartta:riffikaiku:v1` (ei muutoksia Kitaraharjoittelijan avaimeen). Versio 1
laajennettiin taaksepäin yhteensopivasti: `run` (tasokierros ja läpäistyt riffit), `levels`
(läpäistyt tasot), `fullBoard`, `device`, tuloksiin `passed` ja `level`. Puuttuvat kentät saavat
oletuksen; mitään ei poisteta. Mikrofonin ja virtuaalikitaran eteneminen on erillinen.

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

## Tunnetut rajoitukset

- **Oikealla kitaralla ei ole testattu 0.2:ta.** Kaikki tunnistustulokset ovat synteettisiä.
- **Sama sävel pehmeästi uudelleen** soivan kielen päälle ilman tason nousua jää edelleen
  huomaamatta (testi ”TUNNETTU RAJOITUS”). Ohje: vaimenna kieli hetkeksi.
- **Sävelvaihdon tasoraja 25 %** on arvio. Liian matala → myötäresonanssi voi tuottaa punaisen;
  liian korkea → legato jää huomaamatta. Mitattava kitarakokeissa (diagnostiikan vaihe 4 näyttää syyn).
- **Väärä havainto on punainen**: koska läpäisy vaatii kaikki vihreinä, yksikin virheellinen
  mikrofonihavainto pakottaa uuden yrityksen.
- Selaimet voivat ohittaa pyynnön kytkeä puheenkäsittely pois (erityisesti puhelimet).
- Muistivihjelaskuri ei säily sivun latauksen yli.
