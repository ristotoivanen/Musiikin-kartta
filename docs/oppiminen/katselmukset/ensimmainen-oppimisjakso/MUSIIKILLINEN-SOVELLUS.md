# Ensimmäiset neljä iskua – musiikillinen sovellus ja äänitteet

**Tila:** 17.11.2026. Tämä on omistajan musiikillisesti hyväksyttäväksi tarkoitettu suunnitelma. Äänitteitä ei ole tehty, eikä mitään ole kokeiltu oikealla kitaralla.
**Pohja:** `origin/beta` `f9964c5`. Kattaa auditoinnin korjauskohdan P2 ensimmäisen jakson osalta.
**Liittyy:** [Pedagoginen käsikirjoitus](PEDAGOGINEN-KASIKIRJOITUS.md) (vaiheet V1–V7) · [A/E-vertailu ja testisuunnitelma](A-E-VERTAILU-JA-TESTISUUNNITELMA.md) · [Kriittinen katselmus](KRIITTINEN-KATSELMUS-JA-AVOIMET-PAATOKSET.md)

Merkinnät: **[Nykytila]** = betassa ja tarkistettu, **[Lähde]** = dokumentoitu muualla mutta ei toteutettu, **[Ehdotus]** = uusi ja hyväksymätön.

---

## 1. Olemassa oleva aineisto ja uusi aineisto erikseen

### 1.1 Olemassa oleva aineisto ja sen sopivuus tähän jaksoon

| Aineisto | Mitä se on | Sopivuus tähän jaksoon | Oikeudet |
| --- | --- | --- | --- |
| `assets/audio/osa-1/pulssi-ja-komppi` (m4a ja wav, 33 s) [Nykytila] | 84 BPM. 2 tahtia naksutusta, 2 tahtia kahdeksasosia, 4 tahtia G-komppia, 2 tahtia G–D ja loppusointu. Tehty oppaan omalla generaattorilla. | **Ei ensimmäiseksi malliksi.** Puhdasta pulssia on vain noin 5,7 s, minkä jälkeen tulee kolme uutta asiaa. Sopii V7:n jälkeiseksi teoriaesimerkiksi, kuten nyt. | Oppaan oma, Unlicense |
| `assets/audio/osa-1/kolme-cowboyta` (100 s) [Nykytila] | 84 BPM, G-duuri. 4 lähtöiskua, säkeistö (8 tahtia) G G Am D ×2 ja kertosäe (8 tahtia) G C G G / D C G G·D, nämä kahdesti, sekä loppusointu G. Yhteensä 33 tahtia. Taustassa on kitara, basso ja rummut, ei melodiaa. | **Ei ensimmäiseksi sovellukseksi.** 33 tahtia 84 BPM:ssä on pitkä. Basso soittaa jo sävelet, joten oppijan yhden kielen rooli ei täydennä taustaa. G-duurissa avoimista kielistä vain D (4. kieli) sopii pedaaliksi koko kappaleen ajan, ja se vaatisi keskimmäisen kielen löytämisen. Sopii askeleeksi 4 (luku 5). | Tausta on oppaan oma sovitus. Soinnut, tahtimäärät ja tempo perustuvat Songsterrin transkriptioon J. Karjalaisen ja Mustien Lasien levytyksestä. Sovituksen oikeusasemaa ei ole selvitetty tässä katselmuksessa, ks. luku 6. |
| `oppi/kitara/soita-ensin-basso.html` [Nykytila] | Harjoitus: jokaisen tahdin ykkösellä perussävel (G 6/3, A vapaa, C 5/3, D vapaa) Kolme cowboyta -taustan kanssa. | Hyvä **askel 4**, mutta vaatii kaksi painettua säveltä ja neljä eri kieltä. | Kuten edellä |
| `assets/audio/harjoittelija/am-vamp-*.mp3` (240 s) [Nykytila] | Sunolla tehty Am-vamp, kaksi tahdistettua raitaa. Käytössä Kitaraharjoittelijan improvisointivaiheessa. | **Ei tähän jaksoon.** Siinä ei ole lähtölaskua, ja tempoa ja muotoa ei ole dokumentoitu. Kesto on 4 minuuttia. Avoin A-kieli sopisi siihen pedaaliksi, mutta se on myöhempi improvisoinnin ja kuuntelun aineisto. | Suno, kaikki oikeudet pidätetään, käyttö vain Kitaraharjoittelijassa ([AANITTEET-LISENSSI.md](../../../../assets/audio/AANITTEET-LISENSSI.md)) |
| `tools/aanet/esimerkit.js`, `Score`-luokka [Nykytila] | Generaattori, jolla voi kirjoittaa naksutuksen (`countIn`, `drum('click', …, accent)`), yksittäisen kielen näppäyksen (`pick`), otteen valituilla kielillä (`strum` + `strings`) ja rummut. Ääni syntetisoidaan Karplus–Strong-menetelmällä harjoitustaustojen moottorissa. | Kaikki alla ehdotetut äänitteet voi tehdä tällä ilman uutta äänimoottoria tai ulkoisia näytteitä. | Oppaan oma |

### 1.2 Uusi aineisto [Ehdotus]

Tässä ehdotetaan neljä uutta äänitettä (M0–M3) ja yksi uusi lyhyt tausta, *Ensimmäinen groove*. Kaikki ovat **uutta harjoitusmateriaalia**. Mikään niistä ei ole sovitus olemassa olevasta kappaleesta. Ne renderöidään oppaan omalla generaattorilla.

---

## 2. Jakson äänitteet M0–M3

Yhteiset ominaisuudet:

- Tahtilaji 4/4.
- Perustempo 72 BPM, jolloin isku kestää 0,833 s ja tahti 3,33 s. Helpotusversio on 60 BPM.
- Naksutus on generaattorin `click`. Ykkönen on korostettu (`accent`) eli korkeampi, kuten nykyisessä osan 1 äänitteessä.
- Tiedostot tehdään samoina muotoina kuin muut osan 1 esimerkit (m4a ja wav).

| Tunnus | Nimi ja käyttö | Sisältö tahdeittain | Kesto 72 / 60 BPM |
| --- | --- | --- | --- |
| **M0** | *Naksutus.* V2a:n ja V5:n harjoitusraita | 16 tahtia naksutusta, ykkönen korostettu. Ei muuta. | 53 s / 64 s |
| **M1** | *Malli: neljä iskua ja hiljaisuus.* V0 ja V1 | Tahti 1: neljä naksahdusta (lähtölasku). Tahti 2: naksutus jatkuu, ja **6. kieli (E2) soi iskuilla 1–4**, jokainen ääni yhden iskun mittainen. Tahti 3: naksutus, kitara on hiljaa. Viimeinen ääni loppuu tahdin 3 ykköseen, kuten vaimennettuna. Tahdit 4–5: samat kuin 2–3. | 16,7 s (vain 72 BPM) |
| **M2** | *Ensimmäinen groove.* V6. Kolme versiota | Ks. luku 3 | noin 33 s / noin 40 s |
| **M3** | *Kuuntelutehtävän parit.* V2b | Kuusi neljän naksahduksen näytettä (luku 2.1) | noin 3,3 s kukin |

**Silmukka.** M0 ja M2:n taustaversio voivat soida toistuvasti. Näytetarkka ohjelmallinen silmukka on iOS Safarissa epävarma (vrt. issue #9). [Ehdotus] M0 renderöidään siksi riittävän pitkäksi (16 tahtia). Selaimen oma `loop` tai uudelleen aloittaminen painikkeesta on sallittu, mutta saumattomuutta ei luvata.

**Miksi vaimennus kuuluu M1:ssä?** Jokaisen kitaraäänen pituus on tasan yksi isku, ja viimeinen loppuu seuraavan tahdin ykköseen. Generaattorin nuotin pituus katkaisee soinnin. Näin malli näyttää, miltä *pysäytetty* ääni kuulostaa verrattuna vapaasti soivaan.

### 2.1 M3: kuuntelutehtävän parien tarkka määrittely

- Jokaisessa parissa on yksi **tasainen** näyte: neljä naksahdusta 72 BPM:ssä, väli 833 ms ja ensimmäinen korostettu.
- Parin toinen näyte on **epätasainen**. Siinä yksi isku on siirretty **±150 ms**, mikä on noin 18 % iskuvälistä. Kaikki muu on identtistä: äänenväri, voimakkuus, korostus ja kesto.
- Kuusi epätasaista versiota: isku 2, 3 tai 4 siirretty joko aikaisemmaksi tai myöhemmäksi. Ensimmäistä iskua ei siirretä, koska se ei muuta yhtään väliä havaittavasti ilman edeltävää kontekstia.
- Tehtävä arpoo kolme kierrosta niin, että siirretty isku ja suunta vaihtuvat ja tasainen näyte on satunnaisesti ensimmäisenä tai toisena.
- **Vaikeuden perustelu [Ehdotus, varmistettava]:** 150 ms:n siirto on tarkoitettu selvästi kuultavaksi myös harjoittelemattomalle. Arvoa ei ole johdettu tutkimuksesta tätä tehtävää varten. Se on koekuunneltava huomenna (testi T6). Jos erottelu on liian helppo tai liian vaikea, arvo säädetään välille 100–200 ms ennen toteutusta.

---

## 3. Ensimmäinen soitettava sovellus: *Ensimmäinen groove*

### 3.1 Määrittely

| Ominaisuus | Arvo [Ehdotus] |
| --- | --- |
| **Soitettava kieli ja sävel** | 6. kieli vapaana, **E2** (noin 82 Hz) |
| **Sävellaji ja soinnut** | E-molli. Em (i) ja Am (iv) |
| **Tahtilaji** | 4/4 |
| **Tempo** | 72 BPM. Helpotusversio 60 BPM |
| **Muoto** | Lähtölasku 1 tahti (4 naksahdusta) + **8 tahtia** + lopetusisku |
| **Soinnut tahdeittain** | \| Em \| Em \| Am \| Am \| Em \| Em \| Am \| Am \| → lopetus |
| **Lopetus** | Tahdin 9 ykkösellä koko bändi soittaa yhden lyhyen Em-iskun (noin ¼ iskua), ja sen jälkeen kaikki on hiljaa. |
| **Oppijan rytmi, vaihe 1** | Neljäsosat: **E jokaisella iskulla 1–4 kaikissa kahdeksassa tahdissa** (32 ääntä). Tahdin 9 ykkösellä oppija **pysäyttää äänen** samalla kun bändi lyö lopetuksen. |
| **Kesto** | 72 BPM: (1 + 8) × 3,33 s + lopetus ≈ 31 s ja häntä. 60 BPM: noin 37 s ja häntä. |

### 3.2 Kuultava säestys

| Soitin | Mitä soittaa | Miksi |
| --- | --- | --- |
| **Naksutus** | Vain lähtölaskun tahdissa | Oppija tunnistaa M0:sta tutun aloituksen. Kun bändi alkaa, rummut kantavat pulssin. |
| **Rummut** | Bassorumpu iskuilla 1 ja 3, virveli iskuilla 2 ja 4, hi-hat **neljäsosina** (ei kahdeksasosina). Tahdin 5 ykkösellä symbaali merkitsemään toista kierrosta. | Neljäsosainen hi-hat vastaa oppijan iskuja. Kahdeksasosat houkuttelisivat soittamaan tuplatempoa. |
| **Rytmikitara** | Soinnut iskuilla 1 ja 3 (puolinuotit), **vain kielet 4–1** (`strum` + `strings: [2,3,4,5]`). Em = E3 G3 B3 E4 ja Am = E3 A3 C4 E4. | Matala rekisteri jää vapaaksi oppijan E2:lle. Puolinuotit jättävät oppijan neljäsosille tilaa. |
| **Basso** | **Ei ole.** | Oppija on bändin basisti. Ilman häntä tausta kuulostaa ohuelta, joten rooli on aidosti tarpeellinen. |
| **Mallibasso** (vain versioissa M2a ja M2c) | 6. kieli samalla kitarasoundilla kuin M1, oppijan osa täsmälleen. Voimakkuus selvästi kuuluva mutta rytmikitaraa hiljaisempi. | Helpotus: oppija kuulee, mitä ja milloin soitetaan. |

**Versiot (kolme tiedostoa kahdella tempolla):**

| Tiedosto | Sisältö | Käyttö |
| --- | --- | --- |
| **M2-tausta** | Rummut ja rytmikitara, ei bassoa | V6:n varsinainen tehtävä sekä vaiheen 2 varsinainen tehtävä (sama tiedosto) |
| **M2a** | Tausta ja mallibasso E-pedaalina | V6, helpotus |
| **M2c** | Tausta ja mallibasso E–A (luku 5) | Toinen sävel, helpotus |

### 3.3 Miksi juuri E-molli ja Em–Am

- **E-pedaali sopii molempiin sointuihin ilman puolisävelen hankausta.** E on Em:n perussävel ja Am:n kvintti. Oppijan E2 ei siis ole millään iskulla puolisävelaskeleen päässä taustan sävelistä.
- **Toinen sävel on valmiina rakenteessa.** Am-tahdeissa perussävel A on vapaa 5. kieli, joka on 6. kielen vieressä. Toinen sävel ei vaadi vasenta kättä (luku 5).
- **Jakso ei vaadi virittämistä koko kitaralle.** Taustan pitää sopia vain yhteen tai kahteen vapaaseen kieleen.
- **Rajaus:** Am-tahdeissa vaiheen 1 E-basso tekee soinnusta käännöksen Am/E. Se on tavallinen pedaaliratkaisu, mutta kuulostaa vähemmän päättyneeltä kuin Am perussävelellä. Tämä on **musiikillinen arvio, joka pitää kuunnella** (testi T3). Jos se kuulostaa aloittelijan korvaan väärältä, varavaihtoehto on luvussa 3.5.

### 3.4 Helpotukset järjestyksessä

1. **Mallibasso päälle** (M2a).
2. **Vain ykkösellä:** oppija soittaa E:n vain jokaisen tahdin ensimmäisellä iskulla ja antaa sen soida, ja pysäyttää lopetuksessa. Taustaa ei muuteta.
3. **Hitaampi versio** (60 BPM).
4. **Vain neljä ensimmäistä tahtia:** oppija lopettaa tahdin 4 jälkeen. Tämä on ohje, ei erillinen tiedosto.

Helpotukset ovat oppijan valittavissa. Mikään niistä ei estä merkitsemästä V6:ta tehdyksi, mutta itsearvion kirjaukseen tallentuu, oliko mallibasso käytössä (pedagoginen käsikirjoitus, luku 7.2).

### 3.5 Varavaihtoehto, jos Em–Am-pedaali ei toimi korvakuulolta

**E5–A5 (kvinttisoinnut, ei terssiä):** \| E5 \| E5 \| A5 \| A5 \| ×2, sama rytmi ja sama oppijan osa. Rytmikitara pysyy matalan rekisterin yläpuolella: E5 = `x x 2 4 x x` (E3 B3) ja A5 = `x x x 2 5 x` (A3 E4). E on A5:n kvintti, eikä terssiä ole, joten pedaali ei tee soinnusta käännöksen kuuloista. Sointi on rokimpi ja karumpi. Toinen sävel A toimii samalla tavalla. **Valinta tehdään testin T3 perusteella.**

---

## 4. Mihin oppijan iskut sijoittuvat: kaavio

Vaihe 1 (E-pedaali), 72 BPM. *Lask.* = lähtölasku, ✋ = pysäytä.

| Tahti | Lask. | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sointu | – | Em | Em | Am | Am | Em | Em | Am | Am | Em (lyhyt isku) |
| Naksutus | 1 2 3 4 | – | – | – | – | – | – | – | – | – |
| Oppija | (laske) | E E E E | E E E E | E E E E | E E E E | E E E E | E E E E | E E E E | E E E E | ✋ ykkösellä |

Vaihe 2 (toinen sävel):

| Tahti | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oppija | E E E E | E E E E | **A A A A** | **A A A A** | E E E E | E E E E | **A A A A** | **A A A A** | ✋ |

---

## 5. Toisen sävelen lisääminen ja silta olemassa olevaan aineistoon

**Toinen sävel on A, vapaa 5. kieli.** [Ehdotus]

- **Tausta pysyy samana** (M2-tausta). Mallin kanssa käytetään M2c:tä.
- **Mitä uutta opitaan:**
  1. Kielen vaihto peukalolla viereiseen kieleen.
  2. Kahden tahdin ryhmien laskeminen: *Em kaksi tahtia, Am kaksi tahtia*.
  3. Perussävelen kuuleminen. Am-tahdeissa A kuulostaa *kotoisammalta* kuin E.
- **Pysäytys vaihdossa:** E:n ei tarvitse loppua erikseen ennen A:ta. Peukalo siirtyy 5. kielelle, ja 6. kieli soi hetken alla. Tätä ei pidetä virheenä tässä vaiheessa. Tarkka äänenkuljetus kuuluu myöhemmäksi.
- **Kielen tunnistus:** *A-kieli on paksuimman kielen vieressä, toiseksi paksuin.* Nimeä ei kysytä.
- **Miksi ei painettua säveltä?** Ensimmäinen painettu sävel tuo mukaan vasemman käden, nauhan takana painamisen ja särinän, eli kolme uutta asiaa. Avoin A tuo vain yhden uuden asian, kielen vaihdon.

**Silta askeleeseen 4, *Soita ensin basso* (Kolme cowboyta, 84 BPM):** [Ehdotus]
Kolme cowboyta -taustan säkeistössä (G G Am D) on kaksi tahtia, joissa perussävel on vapaa kieli: Am (vapaa A) ja D (vapaa D). Välivaihe voi olla *Soita vain Am- ja D-tahdit*:

- Oppija soittaa ykkösellä A:n Am-tahdissa ja D:n D-tahdissa.
- G-tahdeissa hän laskee hiljaa.

Tämä käyttää olemassa olevaa äänitettä ilman muutoksia. Se lisää tauot ja kolmannen kielen. Sen jälkeen nykyinen ohje (G 6/3 ja C 5/3) lisää painetut sävelet. **Välivaihe on tekstilisäys olemassa olevaan harjoitukseen, ei uusi äänite.** Tempo 84 BPM ja tauot on testattava (T7).

---

## 6. Oikeudet ja varmuus: mikä on vahvistettu, mikä ei

| Asia | Tila |
| --- | --- |
| Generaattori ja sen äänimoottori ovat oppaan omaa koodia (Unlicense). Syntetisointi tapahtuu ilman ulkoisia näytteitä. | [Nykytila] `tools/aanet/README.md` ja `esimerkit.js` tarkistettu. Äänimoottorin `backingTrack.renderScore` lähdettä ei auditoitu rivi riviltä. |
| M0, M1 ja M3 ovat pelkkää naksutusta ja yhden kielen ääntä. Niissä ei ole sävellyksellistä sisältöä. | [Ehdotus] Ei oikeuskysymystä odotettavissa. |
| *Ensimmäinen groove*: kahden yleisen soinnun vuorottelu (Em–Am), ei melodiaa eikä sanoja, uusi. | [Ehdotus] Yleisen sointukulun ei odoteta olevan suojattu. **Tämä on suunnittelun arvio, ei oikeudellinen vahvistus.** Nimi valitaan niin, ettei se viittaa olemassa olevaan kappaleeseen. |
| Kolme cowboyta -harjoitustausta | [Nykytila] Julkaistu betassa. Soinnut, muoto ja tempo perustuvat levyn transkriptioon. Auditoinnin 08-dokumentti vaatii oikeuksien erittelyä sävelmän, sovituksen ja äänitteen tasolla. **Tätä ei ole tehty, eikä tämä katselmus vahvista sitä.** Askeleen 4 käyttö riippuu omistajan aiemmasta tai erillisestä oikeusarviosta. |
| Am-vamp (Suno) | [Nykytila] Käyttöehdot rajaavat sen Kitaraharjoittelijaan. Ei käytetä tässä. |
| Musiikillinen toimivuus | **Ei vahvistettu.** Kaikki luvun 3 ratkaisut ovat kirjoituspöydällä tehtyjä. Ne tarkistetaan oikealla kitaralla (luku 7). |

---

## 7. Huomenna oikealla kitaralla tehtävät tarkistukset

Tarkka protokolla ja kirjauspohja ovat [testisuunnitelman luvussa 4.1](A-E-VERTAILU-JA-TESTISUUNNITELMA.md#41-huominen-tarkistus-oikealla-kitaralla). Musiikin kannalta ratkaistaan nämä:

| Nro | Kysymys | Miten kokeillaan ilman uusia äänitteitä | Päätös, joka seuraa |
| --- | --- | --- | --- |
| **T1** | Onko 72 BPM sopiva ensimmäiselle neljän iskun soitolle? Onko 60 liian hidas ja 84 liian nopea? | Metronomisovellus 60, 72 ja 84 BPM:ssä. Soita 6. kieltä peukalolla kuvio *neljä ääntä ja neljä hiljaa* kahdeksan kierrosta kullakin tempolla. | Perus- ja helpotustempo |
| **T2** | Pysähtyykö ääni siististi, kun peukalo laskeutuu takaisin? Kuuluuko kierretyn kielen hankausääni? Onko kämmensyrjä parempi? | Sama metronomi. Vertaa kolmea vaimennustapaa: peukalo, kämmensyrjä ja vasemman käden sormet. | Ensisijainen vaimennustapa (käsikirjoitus, luku 4.3) |
| **T3** | Kuulostaako E-pedaali Am-soinnun alla hyväksyttävältä? Onko Em–Am vai E5–A5 parempi? | Äänitä puhelimeen rytmikitara: Em (xx2000) ja Am (xx2210) puolinuotteina 72 BPM:ssä metronomin kanssa, 2 + 2 tahtia ×2. Soita sitten päälle E-pedaali ja vaiheen 2 E–A. Toista E5:llä (`x x 2 4 x x` = E3 B3) ja A5:llä (`x x x 2 5 x` = A3 E4). | Tausta: Em–Am tai E5–A5 |
| **T4** | Kuinka paljon epävirettä E-pedaali kestää? | Löysää 6. kieltä tietoisesti noin neljännessävelen verran (viritinsovellus, noin 50 senttiä). Soita T3:n nauhoituksen päälle ja sitten noin 20 sentin poikkeamalla. | Tarvitaanko V6:ssa viritysrivi ja kuinka näkyvästi |
| **T5** | Kuuluuko oma akustinen tai sähkökitara puhelimen kaiuttimesta soivan naksutuksen kanssa? Peittääkö kumpikaan toista? | Oma iPhone, kaiutin noin puolella äänenvoimakkuudella, ja kuulokkeet. | Ohjeteksti äänenvoimakkuudesta ja mallibasson taso |
| **T6** | Kuuluuko ±150 ms:n siirto selvästi neljän naksahduksen sarjassa? | Ei voi kokeilla ilman näytettä. Siirretään ensimmäiseen renderöintiin. **Huomenna vain kirjataan** tavoitearvo ja hyväksyntäkriteeri: 2/2 kuuntelijaa kuulee eron heti, mutta se ei ole triviaali. | M3:n siirron suuruus |
| **T7** | Toimiiko välivaihe *Soita vain Am- ja D-tahdit* Kolme cowboyta -taustan kanssa 84 BPM:ssä? | Olemassa oleva `kolme-cowboyta.m4a` betasta tai paikallisesti. | Silta askeleeseen 4 tai ei |
| **T8** | Onko peukalo 6. kielellä aloittelijalle luontevampi kuin plektra? Toimiiko se nailonkielisellä klassisella kitaralla? | Kokeile molemmat. Jos mahdollista, pyydä yhtä täysin aloittelijaa kokeilemaan pelkän V4:n ohjetekstin perusteella. | Käsikirjoituksen luku 4.2 |

**Kirjattava jokaisesta:** kitara (akustinen, sähkö tai klassinen), kielten ikä, käytetty tempo, laite ja kaiutin, mitä kuului ja mikä päätös tehtiin. Pohja on testisuunnitelmassa.

---

## 8. Toteuttajalle: mitä tästä dokumentista ei saa muuttaa ilman hyväksyntää

- Kieli (6.), sävel (E2), tahtilaji (4/4), tahtimäärä (8 + lähtölasku + lopetusisku) ja oppijan rytmi (neljäsosat).
- Basson puuttuminen taustasta.
- Hi-hatin neljäsosat.
- Rytmikitaran rajaus kieliin 4–1.

Tempo (72 tai 60) ja sointuvalinta (Em–Am tai E5–A5) ovat **testien T1 ja T3 jälkeen** lukittavia. Ennen niitä äänitteitä ei renderöidä julkaistaviksi.
