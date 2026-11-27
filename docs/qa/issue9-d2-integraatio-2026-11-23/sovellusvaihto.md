# Issue #9: D2 ja sovellusvaihto (PR #181 B7) – korjauskoe

> **Tulos (lisätty 24.11.2026):** korjaus (PR #182, `446a143`) hyväksyttiin fyysisellä iPhonella 24.11.:
> B7 kolmesti, sovellusvaihto latauksen aikana, sovellusvaihto + akustinen versio, lukitus 10 s ja 60 s, mykistykset,
> äänenvoimakkuus ja sointunäyttö toimivat (omistaja: "Kaikki toimi hyvin. Ei ollut mitään ongelmaa."). PR #182
> yhdistettiin `release/issue9-d2`:een ja PR #181 betaan (`9526b70`). Testaamatta jääneet kohdat: [`README.md`](README.md).

## Laitehavainto (PR #181, fyysinen iPhone, 23.11.2026)

Lukitustestit B1–B6 ja D2:n aiemmat toiminnot toimivat. B7: Safarista toiseen sovellukseen ~20 s ja takaisin →
toisto etenee näytöllä, mutta ääntä ei kuulu. Versionvaihto ei palauta ääntä.

## Juurisyy (koodista ja simulaattorista)

Juurisyytä ei mitattu laitteella suoraan (sivu ei näe iOS:n äänettömyyttä). Korjauksen jälkeen oire ei toistunut
laitteella, mikä tukee päätelmää.

1. Sivun piiloutuessa `hide` pysäyttää D2:n. Paluun jälkeen Soita näkee kontekstin tilassa `running`, joten se ei kutsu
   `resume()`a eikä palautusta. Kellovahti on nollattu piiloutumisessa (tila `unknown`), joten D6-palautus ei käynnisty.
2. Toisto alkaa samaan kontekstiin. Sen kello etenee (näyttö liikkuu), mutta iOS on deaktivoinut äänen ulostulon
   sovellusvaihdossa. Sivu ei näe tätä: `state` = running, `currentTime` etenee, signaali GainNodeissa on normaali.
   Simulaattorissa oikea sovellusvaihto (HOME, 8–20 s, paluu) jätti vanhan kontekstin tilaan running koko ajaksi.
3. Versionvaihto vapauttaa soittimen datan mutta säilyttää saman (äänettömän) kontekstin, joten se ei auta.

Signaalitason mittaus (AnalyserNode) ei todista, että ääni kuuluu kaiuttimesta tai kuulokkeista.

## Korjaus (`SongJourney.tsx`)

- Kun sivu piiloutuu D2-kontekstin ollessa olemassa (tai konteksti/äänisessio ilmoittaa `interrupted`), merkitään,
  että konteksti on uusittava.
- Seuraava **käyttäjän** Soita-painallus sulkee vanhan kontekstin ja soittimen ja luo uudet saman eleen aikana.
  Kohta, kitaran/laulun mykistys, äänenvoimakkuus ja looppi säilyvät; raidat haetaan selaimen välimuistista.
  Vanhan kontekstin puskurit vapautuvat sulkemisessa. Ei automaattista soittoa eikä jatkuvaa uudelleenluontia.
- Jos lataus valmistuu taustakäynnin jälkeen, soitto ei käynnisty vanhaan kontekstiin, vaan pyydetään painamaan
  Soita ("Soitin oli taustalla latauksen aikana. Paina Soita aloittaaksesi.").
- Ilman piiloutumista tauko ja jatko käyttävät samaa kontekstia kuten ennen (testattu).
- `?diag=1` näyttää kontekstin tilan, kellon, `outputLatency`n, äänisession tyypin/tilan ja tapahtumalokin
  (piiloon/näkyviin, äänisessio, kontekstin tilat, uusinnat).

Huom: myös lukitus piilottaa sivun, joten lukituksen jälkeen Soita uusii nyt kontekstin (aiemmin samaan kontekstiin,
tarvittaessa suspend → resume). B1–B6 on siksi testattava uudelleen.

## Testit

- Chromium E2E `tests/e2e/song-d2-sovellusvaihto.spec.ts` (4, desktop + phone): ilman piiloutumista sama konteksti;
  paluun jälkeen uusi konteksti, vanha suljettu, kohta, mykistys, taso 50 % ja looppi säilyvät, yksi soitto; 10 vaihtoa →
  aina yksi avoin konteksti; vaihto latauksen aikana (ei soittoa vanhaan kontekstiin) ja versionvaihto paluun jälkeen.
  Mutaatio: uusinta pois → 3/4 kaatuu.
- Simulaattori, oikea sovellusvaihto (HOME): 20 s → uusinta kohdassa 9,5 s, soitto jatkuu, renderöity aikajana 0,0 ms;
  versionvaihto paluun jälkeen soi uudella kontekstilla. Muisti 4 vaihtoa: 5 kontekstia luotu, 4 suljettu, WebContent
  104–133 Mt (huippu 174), ei kasvua.

## Fyysinen iPhone-testi (laitetesti.md B1–B7 + nämä)

Tulos 24.11.: kohdat 1–4 hyväksytty, lukitus 10 s ja 60 s (B1, B2) hyväksytty, mykistykset ja äänenvoimakkuus
toimivat (kohdan 6 säilyminen sovellusvaihdon yli ei erikseen kirjattu). Kohdat 5 (sovellusvaihto + lukitus),
7 (kaiutin/kuulokkeet) ja 8:n B3–B6 jäivät kirjaamatta.

1. **B7:** soita 30 s → toinen sovellus 20 s → takaisin → Soita kerran. Odotus: ääni kuuluu 1–2 s:ssa samasta kohdasta.
2. Sama 3 kertaa peräkkäin.
3. Sovellusvaihto latauksen aikana (heti ensimmäisen Soitan jälkeen) → takaisin: odotus ohje "Paina Soita…" tai soitto
   alkaa vasta painalluksesta, ja ääni kuuluu.
4. Sovellusvaihto → takaisin → vaihda versio → Soita: uusi versio kuuluu.
5. Sovellusvaihto → lukitus → avaus → Soita.
6. Kitara pois ja äänenvoimakkuus 50 % ennen vaihtoa: säilyvät paluun jälkeen.
7. Kaiutin ja (jos saatavilla) kuulokkeet / Bluetooth.
8. B1–B6 uudelleen (lukituksen jälkeen konteksti nyt uusitaan).
Jos ääni ei kuulu, avaa `?diag=1`-linkki, toista ja kirjaa diagnostiikan rivit (konteksti, äänisessio, loki).
