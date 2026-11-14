# Riffikaiku 0.3 (prototyyppi)

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
| `riffs.ts` | Kotitreenit (nyt 2 × 3 riffiä), harjoituskieli ja ohje, opastus, mikrofonitestin B3. |
| `store.ts` | Oma tallennus `musiikin-kartta:riffikaiku:v1`. |
| `Riffikaiku.tsx`, `MicTools.tsx`, `main.tsx`, `style.css` | Käyttöliittymä (pelinäkymä, lisävalikko, mikrofonin työkalut). Otelautana Kitaraharjoittelijan `Board`. |

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

## Pelin kulku (0.3)

1. **Valmis (ready):** uusi riffi ei soi itsestään. Pelaaja painaa **Kuuntele riffi**.
2. **Malli → vuoro:** malli soi; mikrofonin analyysi on tauolla, ja vuoro alkaa suojavaiheen jälkeen.
3. **Pallukat:** harmaa (ratkaisematta) · **vihreä** (heti oikein, nimi näkyviin, seuraava paikka) ·
   **punainen** (väärä sävel – myös väärä oktaavi – pysytään paikassa, oikeaa ei paljasteta) ·
   **keltainen** (oikea virheen jälkeen, nimi näkyviin; ei muutu vihreäksi). Symbolit ✓ ✗ ↻ ja
   ruudunlukijan teksti, joten väri ei ole ainoa vihje.
4. **Virheetön (kaikki vihreinä):** ”Riffi läpäisty!”. Peli ei siirry eikä soita itse. Pelaaja valitsee
   **Seuraava riffi** (kolmannen jälkeen onnittelunäkymä) tai **Soita uudelleen** (uusi arvioitava yritys
   heti, läpäisy säilyy).
5. **Loppuun keltaisilla:** ”Soitit riffin loppuun! Kokeile vielä ilman virheitä.” Vihreät ja keltaiset
   jäävät näkyviin. **Ei automaattista mallia eikä uutta yritystä** (poistettu käyttäjätestin perusteella).
   Pelaaja voi kuunnella mallia rajattomasti ja kokeilla säveliä vapaasti, ja valitsee itse
   **Yritä uudelleen**: uusi arvioitava yritys ensimmäisestä sävelestä, värit ja eteneminen nollataan,
   muistivihjeet säilyvät, malli ei soi itsestään. Epäonnistuneiden kokonaisyritysten laskuri kasvaa
   kerran per valmistunut yritys.
   **Vapaa kokeilu** (ennen ensimmäistä kuuntelua, onnistumisen ja epäonnistumisen jälkeen): virtuaalikitara
   soi ja mikrofoni kuulee (”Mikrofoni kuulee (vapaa kokeilu, ei arvioida): D4”), mutta näppäilyt eivät mene
   tarkistajalle eivätkä muuta tulosta, pallukoita, laskureita tai tallennusta. Yrityksen alussa
   näppäilytunnistin nollataan, joten kokeilusta soimaan jäänyt kieli ei vastaa.
6. **Kuuntele riffi kesken yrityksen** ei aloita uutta yritystä: paikka, värit, sävelnimet, muistivihjeet,
   laskuri ja läpäisyt säilyvät. Sama painike on soiton aikana **Pysäytä kuuntelu** (eteneminen säilyy;
   mikrofonilla vuoro jatkuu suojavaiheen kautta, joten pysäytys ei tuota haamuvastauksia).

**Muistivihjeet:** saman riffin kolmannen loppuun soitetun epäonnistuneen yrityksen jälkeen uusi
yritys näyttää harmaina ne paikat, jotka pelaaja on jollakin aiemmalla yrityksellä soittanut **heti
oikein**; muut ovat tyhjiä. Paikkakohtainen, ei hyväksy mitään, säilyy automaattisten uusintojen ja
kuuntelun ja Yritä uudelleen -toiminnon yli, nollautuu seuraavassa riffissä. (Vain vihreät, koska loppuun soitetussa yrityksessä kaikki
paikat on lopulta löydetty.) Manuaalinen **Vihje** on erillinen ja kirjataan tulokseen (`hint`).

### Pelinäkymä ja lisävalikko

Yläosa: Riffikaiku · ”Kotitreeni 1 · Riffi 2/3” · riffin nimi · **⋯ Lisää** (oikea reuna). Tila:
”Kuuntele riffi aloittaaksesi.” / ”Sinun vuorosi!” ja ohje ”Soita riffi B-kieleltä.”. Pallukat ja
”Ratkaistu n/4”. Soittoalue. Toiminnot: **Kuuntele riffi / Pysäytä kuuntelu** ja **Vihje**
(onnistumisen jälkeen Seuraava riffi ja Soita uudelleen; epäonnistumisen jälkeen Yritä uudelleen).

Lisävalikossa vain tilanteeseen sopivat: **Aloita uusi yritys** (kesken yrityksen, kun sitä on aloitettu), **Tauko** /
**Jatka**, **Kotitreenit**, **Mikrofonin tiedot** (vain oikea kitara: laite ja diagnostiikka),
**Vaihda pelitapaa**, **Lopeta harjoitus**. Valikon avaaminen ei muuta pelin tilaa. Hiiri, kosketus,
näppäimistö (Enter/välilyönti avaa, nuolet, Home/End, Esc sulkee ja palauttaa kohdistuksen), ulkopuolinen
napautus sulkee.

### Otelauta

Koko kuusikielinen otelauta (nauhat 0–5) näkyy aina, myös mikrofonitilassa (ei painettava). Harjoituskieli
korostetaan (täysi näkyvyys, kultainen reunus, paksumpi kieliviiva, otsikkosolun taustaväri), muut kielet
himmennetään. Selite: ”Harjoituskieli: B-kieli (toiseksi ohuin)”. Vastauksia ei näytetä ilman vihjettä.
Korostus on ohje, ei sääntö: oikea MIDI-sävel hyväksytään miltä kieleltä tahansa, eikä mikrofoni tunnista kieltä.
0.2:n ”Näytä koko otelauta” -valinta poistettiin.

## Kotitreenit

| Kotitreeni | Harjoituskieli | Sävelet | Riffit |
|---|---|---|---|
| 1 | B | B3, C4, D4 | Ensimmäinen kaiku B3–C4–D4–C4 (0-1-3-1), Edestakaisin C4–B3–C4–D4, Kaari takaisin B3–D4–C4–B3 |
| 2 | G | G3, A3, B3 | G-kielen kaari G3–A3–B3–A3, Kaksi samaa A3–A3–G3–B3, Hyppy alas B3–G3–A3–G3 |

Ennen Kotitreeni 1:tä on kahden sävelen opastus (B3–C4). Kotitreeni 2 avautuu Kotitreeni 1:n
suorittamisesta; suoritetut voi avata uudelleen kotitreenivalikosta. Kolmen virheettömän riffin jälkeen
”Onneksi olkoon! Kotitreeni 1 – B-kieli suoritettu!” ja valinnat Jatka / Harjoittele uudelleen /
Kotitreenit; viimeisen jälkeen ilmoitus, ettei uusia ole vielä. Ei automaattista siirtoa.
Tulevat kokonaisuudet: [KEHITYSSUUNNITELMA.md](KEHITYSSUUNNITELMA.md).

## Tallennus

Avain `musiikin-kartta:riffikaiku:v1` (ei muutoksia Kitaraharjoittelijan avaimeen). Kentät `structure:
'kotitreenit'`, `run` (kierros ja läpäistyt riffit), `levels` (suoritetut kotitreenit), `device`,
tuloksiin `passed`, `level` ja `legacy`. Mikrofonin ja virtuaalikitaran eteneminen on erillinen.

**Siirto 0.2:sta** (nelitasoinen rakenne, ei `structure`-kenttää): vanhoja tasoja ei näytetä eikä mitään
merkitä suoritetuksi tasonumeron perusteella (vanha taso 2 oli B-kieli, Kotitreeni 2 on G-kieli).
Riffikohtaiset tilastot ja tulokset säilyvät tunnisteittain; vanhat tulokset saavat `legacy: true`.
Vanhan tason 1 kesken olleista läpäistyistä riffeistä siirtyvät vain Kotitreeni 1:ssä täsmälleen samat
(`b-kaari`, `b-vaihto`). 0.2:n `fullBoard` säilytetään, mutta sitä ei enää käytetä.

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
- Mikrofonitilassa otelauta ei ole painettava, vaikka se näkyy (vastaus tulee kitarasta).
