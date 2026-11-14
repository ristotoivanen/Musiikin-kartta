# Riffikaiku 0.1 (prototyyppi)

Kuuntele neljän sävelen riffi ja soita se takaisin samassa järjestyksessä – **oikealla kitaralla**
(mikrofoni) tai **virtuaalikitaralla** (otelauta, hiiri tai kosketus). Ei rytmin pisteytystä,
aikarajaa eikä elämiä. Sivu: `riffikaiku.html` (ei linkitetty muualta sivustolta).

## Tasot ja pallukat

| Taso | Kielet otelaudalla | Riffit |
|---|---|---|
| 1 Yksi kieli | B | Ensimmäinen kaiku B3–C4–D4–C4, Edestakaisin, Laskeva kaiku (askeleet ≤ 2 puolisävelaskelta) |
| 2 Yksi kieli, isommat askeleet | B | Kumpu, Toistuva alku (E–E), Hyppivä kaiku |
| 3 Kaksi kieltä | G + B | Kahden kielen nousu, Kaksi samaa A–A–C–A, Kahden kielen kaari |
| 4 Koko otelauta | kaikki 6 | Hyppy ylös, Mollinen kaiku, Kielten yli (Am-murto) |

Ennen tasoa 1 on kahden sävelen opastus B-kielellä. Nauhat ovat aina 0–5; testi varmistaa, että
jokaisen riffin jokainen sävel löytyy tason otelaudalta. Tason ulkopuoliset kielet piilotetaan;
”Näytä koko otelauta” näyttää kaikki kuusi kieltä heti (tallentuu). Oikean kitaran tilassa näkyy
ohje, esimerkiksi ”Soita B-kielellä (toiseksi ohuin kieli).” – mikrofoni tarkistaa silti vain
sävelkorkeuden, koska kieltä ei voi tunnistaa luotettavasti.

Pallukat (sama `SequenceChecker` molemmilla pelitavoilla ja kaikilla otelaudan laajuuksilla):
**vihreä** = heti oikein, **punainen** = tähän kohtaan soitettiin väärä vakaa sävel, **keltainen** =
punainen kohta korjattiin. Väärä oktaavi ei muuta väriä. Riffi hyväksytään vain kaikki vihreinä.
Keltaisellakin riffin saa soittaa loppuun; sen jälkeen ”Kuuntele ja yritä uudelleen” tai ”Yritä heti
uudelleen”. Sävelvihjeen käyttö ei estä läpäisyä, mutta se kirjataan (`hint`, tilasto `solo`).

Kun tason kolme riffiä on läpäisty saman kierroksen aikana, näytetään ”Onneksi olkoon! Läpäisit
tason N!” ja valinnat ”Jatka tasolle N+1” / ”Harjoittele tasoa uudelleen” (viimeisellä tasolla
”Aloita alusta tasolta 1”). Peli ei siirry itse. Mikrofonilla ja virtuaalikitaralla on omat
tasokierrokset ja läpäistyt tasot.

**Tila:** paikallisesti pelattava prototyyppi. Oikean kitaran, mikrofonin ja puhelimien toimintaa
ei ole todennettu – ks. [HYVAKSYNTAKOKEET.md](HYVAKSYNTAKOKEET.md).

## Rakenne

| Tiedosto | Tehtävä |
|---|---|
| `sequence.ts` | `SequenceChecker`: puhdas säveljonon tarkistaja (odotetut MIDI-korkeudet, `index`, `hintUsed`, `input`, kierrostunniste, tapahtumat `accepted` / `wrong` / `octave` / `ignored`). `OutputSettler`: mallisoiton jälkeinen suojavaihe. |
| `game.ts` | `RiffGame`: tilakone `idle → permission → mic-check → model-playing → output-settling → listening → success`, sivupolut `paused` ja `error`. Ei Reactia eikä suoraa ääntä. |
| `audioAdapter.ts` | `GameAudio`-rajapinta ja `BrowserAudio`, joka käyttää Kitaraharjoittelijan `Microphone`- ja `ReferencePlayer`-luokkia (Pitchy, `PitchLoop`, `NoteGate`, `OnsetDetector`). Ei omaa sävelentunnistusta. |
| `riffs.ts` | 4 tasoa × 3 tätä peliä varten tehtyä riffiä, tason kielet ja ohje, opastus, mikrofonitestin B3. |
| `store.ts` | Oma tallennus `musiikin-kartta:riffikaiku:v1`: tasokierros, läpäistyt tasot ja tulokset vastaustavoittain (`mic` / `board`), otelautavalinta. Kentät `run`, `levels`, `fullBoard` ja `passed` lisättiin taaksepäin yhteensopivasti. |
| `Riffikaiku.tsx`, `main.tsx`, `style.css` | Käyttöliittymä. Otelautana Kitaraharjoittelijan `Board`. |

Käännös: `vite.riffikaiku.config.ts` → `assets/riffikaiku/` (`emptyOutDir` koskee vain sitä).
`npm run build` kääntää molemmat; `npm run build:riffikaiku` vain Riffikaiun.
`tools/riffikaiku-versio.mjs` päivittää `riffikaiku.html`:n `app.js?v=`-tunnisteen.

## Vastauksen hyväksyntä

- Mikrofoni: vain uusi `StableNoteEvent` (NoteGate: vakaa ≥ 240 ms ja edellä uusi aluke tai
  ≥ 120 ms hiljaisuus) syötetään tarkistajalle. Kohina, epävire (> ±35 senttiä) ja lyhyt ääni eivät
  tuota tapahtumaa, joten ne eivät etene eivätkä rankaise.
- Virtuaalikitara: jokainen painallus soi (`ReferencePlayer`, oma instanssi) ja on yksi tapahtuma.
  Sama sävelkorkeus mistä tahansa kielestä ja nauhasta kelpaa.
- Molemmat käyttävät samaa `SequenceChecker`ia. Väärä oktaavi ei ole hyväksytty eikä virhe.
- Mallisoiton ajan analyysi on tauolla (`Microphone.pause`). Sen jälkeen `output-settling`: kuuntelu
  alkaa, kun ≥ 250 ms on kulunut ja tulo on ollut hiljaa ≥ 150 ms, tai viimeistään 1,5 s jälkeen.
  Kuuntelun alussa NoteGate nollataan (`rearm`), joten tasaisesti soiva häntä ei vastaa.
- Vanhat callbackit: `op` (mallisoitto, lupa), `micSession` (suljetun mikrofonin kehykset) ja kierros-
  tunniste (`SequenceChecker`).
- Taustavälilehti (`visibilitychange`), oma tauko ja laitteen irrotus: soitto pysähtyy ja mikrofoni
  vapautetaan. Jatko avaa mikrofonin uudelleen; hyväksytyt sävelet säilyvät.

## Poikkeamat suunnitelmasta

- **Virtuaalikitara on tasavertainen pelitapa**, ei vain vararatkaisu (täsmennys 14.11.2026).
- **”Kuuntele uudelleen” ja ”Aloita alusta” aloittavat riffin alusta** (pallukat nollautuvat).
  Väärät sävelet ja vihje kertyvät silti riffiyrityksen tulokseen.
- **Vastaustavan vaihto jatkaa sen tavan omasta tasokohdasta**, koska tasot ovat erilliset.
- **Lyhyen sävelen raja ei ole 240 ms soivaa ääntä.** Vakausaika lasketaan kehyksistä, joiden 170 ms:n
  analyysi-ikkunassa vaimennettu sävel vielä on. Synteettisellä signaalilla ≤ 80 ms ääni hylätään
  aina, mutta ~100–140 ms selvä näppäys voi jo hyväksyä (sävelkorkeudesta riippuen).
- **Ei linkkiä navigaatiosta.** Sivulla on sivuston päävalikko (Kitaraharjoittelu aktiivisena),
  mutta mikään sivu ei linkitä Riffikaikuun, ja sivu on `noindex`. Näin keskeneräinen peli ei
  näy käyttäjille, vaikka haara joskus yhdistettäisiin.
- Mikrofonitesti hyväksyy B3:n; muu vakaa sävel todistaa mikrofonin toimivan (”Jatka silti”).

## Tunnetut riskit

- **R1 legato ja nopea A–A:** NoteGate vaatii jokaiselle uudelle vastaukselle uuden alukkeen (taso
  ≥ 2× viimeisen 300 ms:n minimi) tai ≥ 120 ms hiljaisuuden – myös eri sävelelle. Pehmeä uusi näppäys
  soivan kielen päälle voi jäädä tunnistamatta. Testi `TUNNETTU RAJOITUS` dokumentoi tämän.
  Mahdollinen 0.2-korjaus kitaradatan jälkeen: Riffikaiun oma virittyminen sävelkorkeuden vaihdosta
  (pois lukien oktaavi- ja ylä-äänihypyt) – vaatii oikeat mittaukset, ei arvausta.
- **R2 kaiutinhäntä ja huone:** suojavaihe ja NoteGaten nollaus on testattu vain synteettisesti.
- **R3 laitteet:** selaimet voivat ohittaa `echoCancellation/noiseSuppression/autoGainControl: false`
  -pyynnön (erityisesti puhelimet). iPhone Safaria ei ole testattu; Playwrightin phone-projekti on
  Chromium iPhone-mitoilla.
- **R4 viereiset kielet ja väärät havainnot:** resonanssi tai ylä-ääni voi tuottaa vakaan väärän
  sävelen → kohta muuttuu punaiseksi. Koska läpäisy vaatii kaikki vihreinä, yksikin väärä havainto
  pakottaa uuden yrityksen mikrofonitilassa. Tämän osuus pitää mitata kitarakokeissa (K1, K6).
