# Musiikin kartta: Rytmi – toteutusohjelma ja hyväksyntäkriteerit

**Versio:** toteutusesitys 0.1, 15.11.2026  
**Riippuvuus:** [Rytmi-tutkimus ja oppimispolku](./Musiikin-kartta_Rytmi_tutkimus_oppimispolku_2026-11-15.md)  
**Tila:** **EI TOTEUTUSLUPA**. Ei muutoksia GitHubiin, PR:iin, beta-haaraan tai julkaisuun. Toteutusta koskevat kriteerit ovat ehdotuksia, jotka omistaja hyväksyy katselmoinnissa.

## 1. Tavoite

Toteuta oppimisaihe `oppi/rytmi/` niin, että se opettaa käytännössä rytmin kuulemista, oman pulssin tuottamista, oikean käden vaimennettua komppia, taukojen hallintaa sekä soittamista rumpujen ja basson kanssa. Kokonaisuus tukee myöhemmin swing/shufflea, synkopointia, improvisointia ja Ensikeikan bändiharjoittelua. Kitaran sointukäsitteet eivät ole rytmin perustason ennakkovaatimus.

## 2. Vahvistettu nykytila: referenssi ja riskit

Lähtöhaara `codex/kitaran-perusteet` (PR #65, 49865f8). Nykyiset rytmisivut:

- `oppi/rytmi/index.html` – neljän kortin ryhmä.
- `oppi/rytmi/pulssi-ja-komppi.html` – teoria.
- `oppi/rytmi/kuuntele-pulssi.html` – kuuntelu/lasku.
- `oppi/rytmi/alas-ylos-yhdella-soinnulla.html` – mykistetyt kielet ja G.
- `oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html` – G→D kolmosella.

**Nämä HTML-tiedostot ovat generoituja.** Lähde on `tools/oppimiskartta/aiheet.json` ja `book/osa-1.html` sekä mahdollisesti `tools/oppimiskartta/sisallot/rytmi/*.html`, joita ei vielä ole, mutta joihin uusia standalone-oppitunteja voi ehdotetusti sijoittaa. `tools/oppimiskartta/rakenna.py` muodostaa sivut komennolla `npm run build:oppimiskartta`. Nykyinen neljän kortin opintopäämäärä kirjautuu `assets/edistyminen.js`:n kautta ja `musiikin-kartta:luvut`-avaimeen.

**Muita samanaikaisia haaroja:** Ensikeikka, Riffikaiku ja Kitaran perusteet ovat omia kehityskokonaisuuksia. Niiden koodiin ei tehdä rytmiprojektissa oikopolkuja eikä yhteisiä ristiriitaisiksi muuttuvia muutoksia. Uusi työ vain erillisessä haarassa ajantasaisesta, erikseen valitusta integraatiopohjasta. Pohjan valinta ei ole tämän ehdotuksen lupa aloittaa toteutusta.

## 3. Opintorakenne ja URL-luonnos

Säilytetään vanhat osoitteet ja tallennustunnisteet. Uusia sivuja saa luoda generaattorin kautta; nämä ovat **suunniteltuja**, eivät nykyisiä osoitteita.

| Pääryhmä | Oppitunti / harjoitus | Ydinmääränpää |
| --- | --- | --- |
| Aloita tästä | `pulssi-ja-komppi` (nykyinen) | Peruskäsitteet, havainnot; muokkaa erottamaan rytmi ja pulssi |
| Tunne pulssi | `pulssijahti` | Pulssin tunnistus ja mukana taputus |
| Tahdin rakenne | `missa-on-ykkonen` | Ykkönen, backbeat 2 ja 4, tahdiraja |
| Komppikäsi | `mykka-komppi` | Vasen vaimentaa, oikean käden tasainen liike |
| Soita ja jätä pois | `puuttuva-isku` | Tauot ja liike ilman kosketusta |
| Sointu ja rytmi | nykyinen `alas-ylos-yhdella-soinnulla` | Siirto oikeaan G-sointuun |
| Soinnunvaihto | nykyinen `kaksi-sointua-yhdessa-tahdissa` | G→D niin, ettei pulssi katkea |
| Bändin kanssa | `bandin-komppi` | Rummut ja basso, lopetusmerkki, tarvittaessa vaimennus |
| Oma aika | `hiljainen-tahti` | Tahdin sisäisen pulssin säilyttäminen |
| Syvennä | `takapotkut`, `shuffle-ja-blues`, `oma-rytmi` | Monimutkaisemmat rytmit ja luova soveltaminen |

**Etusivulle** kerralla vain 3–5 helposti valittavaa osiota. Syventävät taidot voivat avautua omille osiosivuilleen, mutta eivät muodosta ehdottomia lukkoja. Suositeltu polku on näkyvä, navigaatio säilyy vapaana.

## 4. Pelit ja harjoitteet: määrittele ensin käyttäytyminen

### Peli A – Pulssijahti (MVP)

**Syöte:** kosketus/näppäin, vaihtoehtoinen oma arvio.  
**Ääni:** alkuun yksinkertainen bassorumpu + basso, myöhemmin monipuolinen bändilooppi ilman klikkinauhaa.  
**Tehtävä:** kuuntele → aloita naputus → pysy 4–8 tahdin ajan pulssissa.  
**Tarkistus:** erota 1/2x ja 2x pulssitasot mahdollisista vääristä ajoituksista.  
**Palaute:** ”Taputit joka toisella iskulla. Tämäkin on musiikillinen pulssitaso, mutta kokeile nyt kaikkia neljäsosia.”  
**Vaikeutuminen:** uusi tempo, instrumentaatio, pulssin epäsuora ilmeneminen.  
**Ei saa:** pelkkä reaktionopeustesti musiikillisen ennakoinnin sijasta; napautuksilla toistuvasti myöhässä oleminen ei automaattisesti tarkoita ettei pulssi kuuluisi.

### Peli B – Rytmikaiku (MVP)

**Syöte:** napautukset tai myöhemmin mikrofoni; vaikeimmissa kuunteluversioissa myös vaihtoehtoiset rytmivastaukset.  
**Ääni:** 1–2 tahdin alkuperäinen rumpu-/käsitaputus-/mykkäkomppi.  
**Tehtävä:** toista sama kuvio; ensin yksi tahti, lopulta lyhyt kahden tahdin kutsu–vastaus.  
**Palaute:** puuttuuko isku, onko ylimääräinen isku, säilyykö suhteellinen rytminen rakenne.  
**Yhteys Riffikaikuun:** sama yleinen muistin ja matkimisen tavoite, mutta uusi **rytmin tapahtuma-/aika-arvio**, ei Riffikaiun MIDI-säveljonotarkistajaa.

### Peli C – Komppikone (MVP:n loppu / vaihe 2)

**Syöte:** kahdeksan ruudun tahdinrakentaja (ja myöhemmin 16); joka kohdassa vaihtoehdot ”soita”, ”liikuta kättä tyhjänä”, ja tarvittaessa ”vaimennettu perkussio”. Nuolten suunta johdetaan jatkuvasta liikkeestä, ei piiloteta vaikean valikon taakse.  
**Ääni:** Web Audio -kellolla soitettu alkuperäinen 1–2 tahdin komppi rumpujen päälle.  
**Tehtävä:** rakenna rytmi, kuuntele, matki oikealla kitaralla, piilota ruudukko.  
**Eteneminen:** joka alas–ylös → pois jätetyt iskut → yksinkertainen aksentointi.  
**Ei saa:** antaa vaikutelmaa, että painike voi arvioida oikean käden liikettä silloin kun ääntä ei kuulu.

### Peli D – Hiljainen tahti (vaihe 2)

**Syöte:** naputus/kitara.  
**Ääni:** 4 tahtia mukana + 1 tahti ilman tukirumpuja + paluu; myöhemmin 2+2 ja 4+4.  
**Tehtävä:** pidä pulssi musiikin hiljentyessä.  
**Arvio:** onko paluu ykköselle suunnilleen oikeaan aikaan ja onko tahti pysynyt tasaisena; palautteen ei tarvitse olla millisekuntipisteytys.  
**Turva:** äänen ollessa pois päältä ei silti jatketa huomaamatta taustalla mitä tahansa ääntä; käyttäjän tulee ymmärtää tehtävä.

### Peli E – Bändin komppi (vaihe 2)

Rummuista, bassosta ja mallikitarasta erikseen säädettävä alkuperäinen harjoitustausta. Kitaristi soittaa mykistettynä tai G/Em-otteella. Harjoitellaan aloitusmerkki, säännöllinen peruskomppi, hiljaisuus ja sovittu yhteinen lopetus. Yhteys Ensikeikan harjoitusmaailmaan rakennetaan vasta erillisen integraatiopäätöksen jälkeen.

## 5. Ensimmäisen kokonaisen opetusjakson käsikirjoitus

**Nimi:** ”Pysy bändin kyydissä” (10–12 minuuttia, harjoitusosuudet 2–3 min).  
**Tavoite:** pysyä 4/4-sykkeessä ja soittaa vaimennetuilla kielillä ilman sointupainetta.

1. **Kuule** (45 s): kahden tahdin komppi 76 BPM:llä: bassorumpu neljäsosilla, virveli 2 ja 4; huomio ”rummut eivät soita aina jokaisella alijaolla”.
2. **Tunne** (60 s): askella tai taputa 1–2–3–4. Käyttäjä valitsee, tuntuvatko iskut nopeilta vai hitailta, ilman läpäisypakkoa.
3. **Kokeile** (90 s): naputa suuriin näytön alueisiin 4 tahtia. Aloittelijalle kaksi mallitahtia ennen pisteytettävää osaa.
4. **Kitara** (2 min): aseta vasen käsi kevyesti kielille niin, ettei niitä paineta nauhoihin. Oikea käsi soittaa tasaisesti neljäsosilla, sitten alajako kahdeksasosiin.
5. **Yksi muutos** (90 s): ”Jätä kaksi hiljaiseksi, mutta anna käden liikkua”. Kuullaan kaksi oikeaa toteutusta.
6. **Musiikissa** (2 min): rumpu + basso -tausta, jonka kitaraosiosta on jätetty tilaa. Soita 8 tahtia ilman ruudukkoa.
7. **Kokeile uudestaan** (60 s): sama onnistumistavoite vähän eri soundilla, ettei opita vain yhtä äänitettä.
8. **Lopuksi** (30 s): itsearvio ”Pysyikö käsi liikkeessä?” / ”Pysyikö bändi mukana?”; suositus seuraavaksi harjoitukseksi.

Ensimmäinen MVP-harjoitus ei tarvitse mikrofonia. Mahdollinen pisteytys vain syötteillä, joiden kellot on testattu. Käyttäjä voi aina harjoitella ilman luvan antamista mikrofonille.

## 6. Arkkitehtuuri ja datamalli

### 6.1 Rytmitapahtumat

Sävelkorkeudesta riippumaton, puhdas malli (esimerkkirajapinta, ei lopullinen tyyppimääritelmä):

```
RhythmPattern {
  meter: [4,4] | [3,4] | [6,8] | ...;
  tempoBpm: number;
  subdivision: 1 | 2 | 3 | 4;
  events: [{ beat: number, kind: 'hit'|'rest'|'muted', accent?: number,
             direction?: 'down'|'up'|'either' }];
}
RhythmAttempt {
  inputMode: 'tap'|'keyboard'|'mic'|'self-report';
  timingEvents: [{ seconds: number, confidence?: number }];
  measuredLatencyMs?: number;
  result?: 'verified'|'uncertain'|'practice-only';
}
```

Aikayksiköt ja tahtimallit pitää määritellä täsmällisesti: `beat` tarkoittaa yhden neljäsosan yksikköä 4/4:ssä; 6/8:ssa on määriteltävä erikseen tahtiosoitus, kahden pääiskun taktus ja kolmen kahdeksasosan jakoryhmä. Synkopoitu tapahtuma ei ole ”virheelliseen kohtaan osuva”, jos se on rytmikuviossa tarkoituksellinen.

### 6.2 Äänimoottori

- Alkuperäinen tempo-sidonnainen soitin, jossa äänet ajoitetaan `AudioContext.currentTime`-kellolla ja `AudioBufferSourceNode`-/`OscillatorNode.start(when)`-kutsuilla etukäteen; ei `setInterval`-toistoon perustuvaa audiokelloa.
- Sävelet, rummun iskuäänet, aloituslasku, vaimennettu kitara ja tarvittaessa shuffle-versio ovat alkuperäisiä, lisenssitarkistettuja esimerkkiraitoja.
- Näyttöanimointi voi käyttää erillistä kelloa, mutta ääni määrää rytmin. Selaimen taustalle meno keskeyttää turvallisesti; paluu ei jatka väärästä tahdista.
- Muutokset tempoon, looppiin ja mallin päälle/pois kytkemiseen tehdään musiikillisesti järkevissä rajapisteissä; vältetään erillisten HTMLMediaElement-raitojen sekuntitason ajelehtiminen.
- Yhtenäinen elinkaaren hallinta: yksi aktiivinen soitto, ääni pysähtyy sivulta poistuttaessa, Safari-äänikontekstin resume/hylkäys käsitellään.

### 6.3 Syötteet ja mittaus

**Vaihe 1:** painike, napautus, näppäimistö, itsearvio.  
**Vaihe 2 (R&D):** mikrofonilla vaimennetun kitaran ja käsitaputuksen akustisten iskujen tunnistus. Mikrofoni käsittelee äänitulon paikallisesti. Uusi onset-tyyppinen detektori vertailee muuttuvaa energiatasoa / äänen kirkkauden muutosta ja taltioi iskuhetket. Edellyttää kohinan mittausta, debouncen, peräkkäisten kahdeksasosien erottamista ja palautteen epävarmuusindikaattoria.

Pitch-detektiota (`Pitchy`, `riffikaiku/pluck.ts`) ei voi käyttää suoraan vaimennetun kompin rytmitunnistuksena: siinä ei välttämättä ole puhdasta sävelkorkeutta. Vältetään myös mikrofonin kuuleman harjoitustaustan laskemista soitoksi. Kuulokkeet auttavat; kaikuisen kaiutintilan automaattinen arvio voidaan tarvittaessa kytkeä pois. Bluetoothin vaihteleva viive rajoittaa tarkkaa ajastusta. Validoidaan laitekohtaisesti ennen numeerista arviointia.

**Mittaussuunnitelma:** synteettinen iskuajoitus (tarkka referenssi), tallennetut todelliset kitara-/taputusnäytteet, eri kohinatasot, hiljainen/voimakas isku, 60–120 BPM, 8- ja 16-osat, iPhone/Safari, Android/Chrome, macOS. Kalibroidaan audio- ja syötelatenssi; alustava arvio tehdään vain, jos confidence ja mittausepävarmuus sallivat. Ei oleteta että mikrofonin näytehetki ja korvassa kuultu napsahdus ovat samassa absoluuttisessa aikajanassa.

### 6.4 Edistyminen

- **Aktiviteetti:** harjoitusta kokeiltu / suoritettu (olemassa oleva `musiikin-kartta:luvut` ja nykyiset vanhat avaimet säilyvät).
- **Taitohavainto:** `pulse`, `meter`, `subdivision`, `strum`, `rests`, `groove`, `continuation` jne. erillisinä. Vain todellisesta mitatusta suorituksesta tallennetaan ”mitattu”. Itsearvio on erikseen `selfReported`.
- **Kertaus:** uusi yritys tai eri tausta myöhempänä päivänä, ei pakollinen aikaväli eikä pelin keinotekoinen rajaus.
- **Tietosuoja:** mieluiten paikallinen säilytys; pelkät tapahtuma- ja taitotiedot, ei raakaa mikrofonin ääntä oletuksena. Ei pakotettua kirjautumista.
- **Migratio:** vanhat neljän suorituksen merkinnät näkyvät edelleen, mutta niitä ei pidä retroaktiivisesti muuntaa ”rytmitaidon hallinnaksi”.

## 7. Toteutuspaketit ja rajat

| Paketti | Työ | Valmis, kun |
| --- | --- | --- |
| P0 Auditointi | Valitse integraatiopohja; vertaa nykyiset haarat, pelit, audio, progress, CSS, generated/lähde-erottelu. | Muutoslista ja turvalliset kosketuspinnat hyväksytty; ei koodimuutoksia. |
| P1 Pedagoginen MVP | Kirjoita 5 opetusosion sisältö, lyhyet soitto-ohjeet, 10–15 alkuperäistä rytmiesimerkkiä, mahdolliset vaimennuskuvat. | Jokaisessa opetusosiossa oppimistulos, kuunteluesimerkki, motorinen harjoitus, soitto ja itsenäinen sovellus. |
| P2 Audio-ydin | Puhtaat tapahtumamallit, ajastin, original samplet, metronomin vaimennus, takaisinkytkentä. | Testit osoittavat deterministisen beat-aikataulun ja turvallisen keskeytyksen; mobiilin toisto kokeiltu. |
| P3 Navigaatio | Uudet kanoniset oppitunnit ja `aiheet.json`; sivugeneraattori; säilytetyt paluureitit. | Sivut generoidaan idempotentisti, deep linkit ja vanhat URL:t toimivat. |
| P4 Ensimmäiset pelit | Pulssijahti ja Rytmikaiku; alkuun napautus, näppäimistö, itsearvio. | Aloittelija pystyy harjoittelemaan ilman kitaraa/mikkiä; palaute erottaa pulssitason ja ajoituksen. |
| P5 Oikean kitaran MVP | Mykkä komppi, peruskomppi G/Em:llä, tauot, bänditaustojen soittotila. | Toimivat ilman näyttöön katsomista; oikean kitaran käyttötesti; ei virheellistä automaattiarviota. |
| P6 Mikrofonin tutkimus | Erillinen onset-detektori, kalibrointi, latenssi ja hiljaisen/perkussiivisen kompin testit. | Oikeilla laitteilla luotettavuus osoitettu; muuten mikki jää opt-in kokeelliseksi, ei pakolliseksi. |
| P7 Jatkorytmit | Synkopointi, 16-osat, shuffle, 12/8, 3/4, 6/8, oman kompin rakentaminen. | Jokaisessa musiikillinen kuuntelu ja oikea soitto; vaikeustaso ei ole suoraan sidottu yhteen kokonaisarvosanaan. |
| P8 Soveltava integraatio | Ensikeikka-/Riffikaiku-yhteydet, ryhmän koesoitto ja pedagoginen arvio. | Vain erikseen hyväksytyn integraatiopäätöksen jälkeen, ei rinnakkaistyön väkisin sulauttamista. |

**Toteutusjärjestys:** P0 → P1 → P2 → P3 ja P4 → P5. P6 erillinen tutkimushaara, P7 vasta kun perusta toimii. P8 vain erikseen päätettynä.

## 8. Hyväksyntäkriteerit: käyttäjältä mitattava oppiminen

### Koko rytmi-MVP:n hyväksyntä

- Testikäyttäjä, jolla ei ole vahvaa rytmitaustaa, löytää aloittamisen 30 sekunnissa ilman ulkoista ohjausta (tavoite, ei tutkimusstandardi).
- Käyttäjä oppii löytämään pulssin ja ymmärtää eron ”kaikkien iskujen” ja ”joka toisen iskun” välillä.
- Käyttäjä pystyy kuvaamaan, miten vaimennetaan kielet turvallisesti ja miksi oikea käsi ei pysähdy pois jätetyn iskun kohdalla.
- Käyttäjä voi tehdä olennaiset harjoitukset ilman mikrofonia tai kirjautumista.
- Harjoitukset siirtävät asian musiikkiin: käyttäjä soittaa vähintään yhden alkuperäisen rumpu-basso-taustan mukana ja osaa tulla takaisin mukaan lyhyen tauon jälkeen.
- Käyttäjä ei saa tehty-merkinnästä väärää lupausta taitotason todentamisesta.
- Puhelimen näytöltä näkyy selkeä harjoitus; soitettavan osion aikana voi käyttää suuria ohjaimia ja päättää olla katsomatta näyttöä.
- Ei lisensoimattomia kaupallisia kappaleiden audiotiedostoja eikä keskenään riiteleviä yhtäaikaisia äänisoittimia.

### Tekninen regressio

- `npm ci`; `npm run lint`; `npm run typecheck`; `npm test`; `npm run build`; `npm run check:song-audio`; `python3 tools/linkit/tarkista-linkit.py`; `npm run test:e2e -- --workers=3` (sekä `npm run build:oppimiskartta` erikseen tarvittaessa).
- Testit: pulssin puolikas/kaksinkertainen tulkinta, hiljaisuus, ylimääräinen/puuttuva isku, dropout, tempo change, äänen keskeytys, kaksi soitinta päällekkäin, Safari resume, käytännön käyttö oikealla kitaralla.
- Testit: nykyisten 4 rytmilinkkiä, vanhat teoriaviitteet, `musiikin-kartta:luvut`-migratio, uudet paluureitit, 320/360/390 px, ruudunlukija, näppäimistö, iPhone/Safari, Android/Chrome.
- Testien läpäisy tai koodin merge ei yksin riitä: omistajan musiikillinen testi ja käyttäjäkokeet ennen valmista beta-arviota.

## 9. Käyttäjäkokeen runko

**Aiemmin / jälkeen:** 10–15 minuutin lyhyt sokkona kuunneltu pulssi + taputus + mykkä komppi -tehtävä ennen harjoittelua, heti lopuksi ja esimerkiksi viikon kuluttua. Ei tarvitse rakentaa psykologista diagnostiikkaa; tarkoituksena on testata tuotetta, ei tehdä lääketieteellisiä päätelmiä.

Käyttäjälle annetaan harjoitteluvideo/äänite ilman ennakkotabia. Arvioidaan: kykeneekö löytämään rytmin, säilyykö pulssi, osaako oikea käsi olla tasainen, pystyykö käyttäjä vaihtamaan ääni-/soittotapaa, tunnistaako tauot, väheneekö ruudun seuraamisen tarve. Kirjataan käyttäjän oma kokemus sekä mahdollinen ajoitustieto erikseen.

**Testaa vähintään:** täysi aloittelija, kitaran alkeet osaava, aiemmin soittanut, puhelimen käyttäjä, omaa kitaraa käyttävä. Tämä on suuntaa-antava käytettävyyskatselmus, ei tilastollisesti riittävä vaikuttavuustutkimus.

## 10. Esimerkki toteutuksen toimeksiannoksi myöhemmin

> Laadi ensin P0-auditointi tämän suunnitelman pohjalta. Selvitä ajantasainen ja hyväksytty integraatiopohja sekä kaikki nykyiset avoimet PR:t. Älä muuta `beta`- tai `main`-haaraa, Ensikeikkaa, Riffikaikua tai keskeneräisiä Kitaran perusteita. Älä muokkaa generoituja `oppi/`-HTML-sivuja käsin. Erota P1:n kanoninen opetussisältö, P2:n audio-ydin ja P4:n pelit. Tee aluksi pelkästään yhden kokonaisen rytmiopetusjakson rajattu prototyyppi, testaa se, ja raportoi turvalliset seuraavat vaiheet. Älä automaattisesti mergeä tai julkaise. Kysy omistajan katselmointipäätöstä ennen seuraavaan vaiheeseen etenemistä.

**Tämä on käyttövalmis spesifikaatio jatkotyön perustaksi, mutta mitään vaihetta ei ole hyväksytty eikä toteutettu.**