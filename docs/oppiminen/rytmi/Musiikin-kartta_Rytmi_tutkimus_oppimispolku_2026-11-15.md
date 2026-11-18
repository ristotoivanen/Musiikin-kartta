# Musiikin kartta: Rytmi – tutkimus, nykytilan arvio ja oppimispolku

**Versio:** suunnitelma 0.1, 15.11.2026  
**Tila:** ehdotus katselmointiin, ei hyväksytty toteutus eikä koodimuutos  
**Vertailupohja:** `ristotoivanen/Musiikin-kartta`, haara `codex/kitaran-perusteet`, commit `49865f8` (PR #65); rytmisivut `oppi/rytmi/*`, kanoniset lähteet `book/osa-1.html`, `tools/oppimiskartta/aiheet.json`, generaattori `tools/oppimiskartta/rakenna.py`. Repon muita haaroja ei muutettu.

## 1. Päätelmä

**Rytmi ei ole oppitunti, vaan käytännön läpi koko musiikin oppimisen kulkeva perustaito.** Sivuston pitää opettaa rytmin kuuleminen, kehollinen tuottaminen, soittoon siirtäminen, sisäisen pulssin säilyttäminen, musiikillinen soveltaminen ja ilmaisullinen kontrolli. Tätä ei voi arvioida pelkällä ”merkitse suoritetuksi” -painikkeella.

Kitaristi voi soittaa vasemman käden kevyesti vaimentamilla kielillä rytmisen, perkussiivisen osan ilman sointuja. Se on oikea soitto- ja harjoittelutekniikka, ei vain hätäkeino. Väärä sointu ei kuitenkaan välttämättä kuulosta hyvältä, vaikka rytmi pysyisi: harmoninen sopivuus on eri kysymys. Opetuksessa erotetaan kolme asiaa: **ajoitus (milloin), soiva tai vaimennettu tapahtuma (mitä) sekä painotus/kosketus (miten)**.

**Ehdotus oppimisen ydinmalliksi:** kuuntele → liiku / laske → jäljittele → toteuta kitaralla → muuntele → sovella bändissä → kokeile ilman mallia → kertaa uudessa yhteydessä. Tämä ei ole pakollinen samanmuotoinen kahdeksanvaiheinen oppituntikaava, vaan sopivien harjoittelumenetelmien valikoima.

## 2. Tutkimusnäytön rajat ja sovellukset

| Havainto | Näytön luonne | Suunnitteluseuraus |
| --- | --- | --- |
| Pulssin ja tahtien hahmottaminen sekä liikkeen ajoitus kytkeytyvät toisiinsa. | Useita katsauksia musiikin havaitsemisesta, liikkeestä ja sensomotorisesta synkronisaatiosta [1–3]. | Kehollinen harjoittelu ennen runsasta symboliikkaa; laskeminen, kävely, taputus, kitara. |
| Rytmin havaitseminen, rytmin tuottaminen ja lyhyiden rytmijonojen muistaminen ovat osittain eri kykyjä. | Moniulotteisuutta tutkinut tutkimus ja testistö [4–5]. | Diagnostiikka ja edistyminen näille erikseen; yksi tulos ei saa leimata kaikkea rytmitaitoa. |
| Kuunteleminen, mykkä motorinen harjoittelu ja soittaminen palautteella opettavat eri puolia musiikista. | Kitaristeja ja pianisteja käsittänyt koe [6]. | Mukaan kuuntele → kokeile ilman sointua → soita äänen kanssa. Älä tulkitse yksittäistä tutkimusta niin, että mikään tapa olisi kaikille ylivoimainen. |
| Vaihtelevan ja hajautetun harjoittelun hyödyt voivat näkyä vasta myöhemmässä muistamistestissä. | Musiikkiharjoittelututkimukset, myös ristiriitaisia tuloksia [7–8]. | Lyhyet jaksot, hallittu tehtävien sekoittaminen vasta alun oppimisen jälkeen, kertaus myöhemmin. |
| Sopiva synkopoinnin määrä voi lisätä grooven kokemusta. | Kuuntelukokeita ja katsauksia [9–10]. | Tauot ja takapotkut mukaan sen jälkeen, kun yksinkertainen pulssi pysyy. Ei monimutkaista synkopointia heti. |
| Pieniä ajoituspoikkeamia ei voi yksiselitteisesti pitää huonona groovena. | Groove-/mikroajoitustutkimuksissa ristiriitaisia ja tyyliriippuvia havaintoja [10–11]. | Älä opeta että jokaisen iskun on aina osuttava absoluuttisesti millisekunnilleen ruudukkoon; kuitenkin ensin harjoitetaan vakaata pulssia. |
| Aloittelijan komppikäden tasainen liike ja vaimennetut iskut ovat yleisiä didaktisia keinoja. | JustinGuitarin opetusmateriaalit, Berkleen kurssikuvaus; eivät vertaisarvioituja vaikuttavuustutkimuksia [12–13]. | Omaksutaan kelvollinen harjoituslogiikka, ei kopioida opetustekstejä tai ääniä. |

**Tärkeä ero:** tutkimus kertoo rytmioppimisen osa-alueista ja pedagogisista periaatteista. Esitetyt tehtävien rajat, BPM:t, pisteytys ja etenemisehdot ovat **tuotesuunnitteluehdotuksia**, eivät tutkimuksissa validoituja standardeja. Ne on testattava käyttäjillä.

## 3. Nykyisen toteutuksen auditoitu tilanne

Lähdekoodin `oppi/rytmi/index.html` (PR #65:n haarassa) sisältää seuraavat neljä korttia:

1. `Pulssi ja komppi` – tekstimuotoinen teoria, 84 BPM:n äänite, 4/4, kahdeksasosat, alas–ylös-liike ja G→D-vaihto.
2. `Löydä pulssi ja ykkönen` – laske, naputa jalkaa, taputa ykkönen, kokeile äänitteen kanssa.
3. `Alas–ylös yhdellä soinnulla` – vasen käsi vaimentaa, sitten G-ote, sitten alas/ylös ja soitto mallin kanssa.
4. `Kaksi sointua yhdessä tahdissa` – G→D kolmosella niin, ettei oikea käsi pysähdy.

**Hyvää:** lähtökohta on käytännöllinen, vaimennustekniikka on jo kuvattu, kahdeksasosien lasku on selkeä, teorian ja harjoitusten välillä on linkit, äänen mukana soittoa löytyy. Navigaatio ja neljän kortin ulkoasu ovat jo käyttökelpoisia.

**Puutteet:**

- Pelillinen tai interaktiivinen rytmikuuntelu ja matkiminen puuttuvat nykyisistä rytmisivuista.
- Nykyiset tehtävät nojaavat lähes samaan 84 BPM:n harjoiteäänitteeseen; tyylien, tempojen, instrumentaatioiden ja tehtävätilanteiden vaihtelu puuttuu.
- Ykkösen kuulemista ei opeteta useasta ristiriidattomasta esimerkistä. Aloittelija voi erehtyä pitämään jokaista voimakkainta rumpuiskua ykkösenä.
- Soittajan omaa pulssin säilyttämistä ilman metronomia tai silloin, kun rumpu vaikenee, ei harjoitella.
- Taukojen, pois jätettyjen iskujen, synkopoinnin, aksenttien, dynamiikan, shuffle-/swing-jaon ja 6/8-tuntuman opetus puuttuu rytmiosiosta.
- Harjoitukset ilmoitetaan tehdyiksi käyttäjän painalluksella, eikä rytmitaidon osaamistasoa arvioida. Tämä on kelvollinen aktiviteetin kirjaus, mutta ei taitotodiste.
- Rytmisivut ovat generaattorin luomia. Käsin tehty HTML-muutos häviää buildissa; kanonisten sisältölähteiden ja konfiguraation muutos tarvitaan.

**Koodiriippuvuudet:** `tools/oppimiskartta/aiheet.json` määrittää sisältöryhmät, `book/osa-1.html` omistaa alkuperäisen `pulssi-ja-komppi`-kappaleen, `tools/oppimiskartta/rakenna.py` luo `oppi/rytmi/*.html`. `assets/edistyminen.js` käyttää `musiikin-kartta:luvut`-avainta ja nykyisiä opintotunnisteita. `harjoittelija/audio.ts` hallitsee ääni- ja sävelentunnistusta, `riffikaiku/pluck.ts` tapahtumia sävelkorkeuden kanssa. Niitä ei saa olettaa valmiiksi polyfonisen, vaimennetun kitarakompin rytmitarkistimiksi.

## 4. Ehdotettu osaamismalli

**A. Pulssi ja tahtitaju:** kuule syke instrumentaatiosta riippumatta, erota pulssi rytmikuvion yksittäisistä äänistä, tunnista ykkönen ja 4/4:n sekä 3/4:n tuntuma.

**B. Sisäinen aika:** jatka sykettä äänien tauotessa; pidä tempo suunnilleen samana; toivu siitä, jos kadotat tahdin.

**C. Jaot ja ajoitus:** neljäsosat, kahdeksasosat, kuudestoistaosat, kolmisävelinen jako; erottele tasainen (straight) ja keinahteleva (swing/shuffle) jako.

**D. Kitaran motorinen komppi:** vaimennus, alaspäin/ylöspäin liike, tyhjät liikkeet, aksentit, hiljaisuus, vasemman ja oikean käden itsenäisyys.

**E. Yhteissoitto ja groove:** tunnista bassorummun ja virvelin suhde, toista lyhyt groove, reagoi bändin muutokseen ja hallitse sovittu lopetus.

**F. Luova rytmi:** muuntele mallia, synkopoi, rakenna kahden tahdin rytminen kysymys/vastaus ja improvisoi valitulla säveljoukolla niin, että fraasi on rytmisesti ymmärrettävä.

Näitä seurataan rinnakkaisina osaamisina, ei pakollisena yhtenä suorana taitotikkaina. Tehtävä voidaan käydä läpi, vaikka ei vielä hallitsisi sen kaikkea sisältöä.

## 5. Sisältörakenne: oppimisen jaksot

### Jakso 1. Pulssi löytyy (perustaso)

**Oppimistulos:** pystyy löytämään vakaasta musiikista sykkeen ja taputtamaan sen mukana.  
**Opetus:** sama rumpu-, basso- ja kitarakatkelma eri kerroksina; erota syke yksittäisestä rummun iskusta.  
**Pelit:** *Pulssijahti* (valitse kahdesta sykkeen nopeudesta tai osoita tasaiset lyönnit), *Käynnisty mukaan* (4 lähtöiskua, taputa mukana).  
**Kitaralla:** vaimennettu kielten napautus jokaisella neljäsosalla.  
**Siirtotehtävä:** kaksi uutta musiikkityyliä, joita ei harjoiteltu ensin.

### Jakso 2. Tahdin ykkönen ja painotukset

**Oppimistulos:** tunnistaa ykkösen ja erottaa sen tavallisesta virvelin 2/4-takapainosta.  
**Opetus:** bassorumpu, virveli ja sointukierron vaihtuminen; ykkönen ei aina kuulu kovimpana iskuna.  
**Pelit:** *Missä on ykkönen?* (kuuntelun jälkeen neljä vaihtoehtoa), *Takaisin ykköselle* (jatka kuvion tauon yli).  
**Kitaralla:** neljä vaimennettua vetoa, aksentti ykköselle, sitten kaksi ja neljä.

### Jakso 3. Kahdeksasosat ja jatkuva komppikäsi

**Oppimistulos:** osaa liikuttaa oikeaa kättä tasaisesti alas ja ylös ja laskea 1 ja 2 ja 3 ja 4 ja.  
**Opetus:** ensin ilman kitaraa, sitten käsi ilmassa, vaimennetut kielet, lopulta yksi helppo sointu.  
**Pelit:** *Komppikone* (päätä soitetaanko liikkeen kohdalla vai jätetäänkö se tyhjäksi), *Kuuntele ja kopioi* (4–8 tapahtumaa).  
**Huom:** aloitus voi olla 60–84 BPM, ja riittävän hidas sekä kehoon sopiva tempo valitaan tehtävän mukaan.

### Jakso 4. Tauko ja pois jätetty isku

**Oppimistulos:** käsi liikkuu, vaikka kieliin ei osuta, ja palaa musiikkiin oikeaan aikaan.  
**Opetus:** rytmi on iskujen JA taukojen järjestys; hiljaisuutta ei pidä täyttää vahingossa.  
**Pelit:** *Puuttuva isku*, *Hiljainen tahti*.  
**Kitaralla:** esimerkiksi jatkuva ↓ ↑ -liike, mutta vain ↓ iskuilla 1, 2 sekä ↑ iskulla 2& ja 4& (mallit ja tasot voivat vaihdella).  
**Seuranta:** erota liikkeen pysähtyminen ja oikeaoppinen hiljainen veto.

### Jakso 5. Rytmi säilyy sointuvaihdoissa

**Oppimistulos:** yhden tai kahden soinnun vaihto ei pysäytä yhteistä pulssia.  
**Opetus:** G ja D, ensin pelkkä pulssi ja valmiit soinnut, sitten oikea komppi; oikea käsi pitää sykkeen, vasen valmistaa vaihdon.  
**Pelit:** *Vaihda ajoissa* (alkuun virtuaalinen vaihto, myöhemmin oikea soitto), *Rytmi vai sointu?* (kuuntele kahdesta esimerkistä, kummassa ajoitus pettää).  
**Tärkeää:** vapaita kieliä soittava vaihto voi kuulostaa epätoivotulta; välillä tietoisesti hiljainen tai vaimennettu vaihto on parempi.

### Jakso 6. Rummut, basso ja yhteinen groove

**Oppimistulos:** tunnistaa bassorummun/virvelin tahdin ja osaa soittaa komppia niiden mukaan.  
**Opetus:** ensin pelkät rummut, sitten basso, lopuksi kitara. Sama rytmi eri instrumentaatioilla.  
**Pelit:** *Rakenna bändin komppi*, *Kuka on eri tahdissa?*.  
**Kitaralla:** vaimennettu komppi, tavallinen sointu sekä ”älä soita kaikkea täyteen” -harjoitus.  
**Sovellus:** yksinkertainen oikea bänditreeni, jossa sovitaan kuka aloittaa ja miten lopetetaan.

### Jakso 7. Kuudestoistaosat ja takapotkut

**Oppimistulos:** osaa laskea 1 e ja a -jaon ja soittaa synkopoituja painotuksia pulssin säilyessä.  
**Opetus:** lyhyet mallit, tasainen alijako, kehon liike.  
**Pelit:** *Takapotkuhaaste*, *Rytmivastaus*.  
**Kitaralla:** yksinkertaiset funk-/rock-kuviot kevyesti vaimennetuilla kielillä.  
**Raja:** vasta kun kahdeksasosat ja tauot pysyvät.

### Jakso 8. Blues, shuffle ja triolit

**Oppimistulos:** kuulee ja tuottaa tasaisen ja swing-/shuffle-jaon eron; ei sekoita 12/8:aa 4/4:n tasaisiin kahdeksasosiin.  
**Opetus:** suora rock, shuffle-blues, 12/8-tyyppinen hidas blues.  
**Pelit:** *Suora vai keinuva?*, *Bluesbändin kyytiin*.  
**Kitaralla:** yksi sointu tai vaimennettu groove, sitten I–IV–V-blues.  
**Sovellus:** yhteys pentatoniikkaan ja bluesimprovisointiin.

### Jakso 9. Muu tahtijako ja monipuolistaminen

**Oppimistulos:** tunnistaa 3/4- ja 6/8-tuntuman käytännössä, ei vain murtoluvusta.  
**Opetus:** ”kolmeen” ja ”kahteen kolmeen alijakoon” liikkuminen; vertaile 3/4 ja 6/8.  
**Pelit:** *Mihin tahdin ykkönen osuu?*, *Vaihda tahtilajia*.  
**Kitaralla:** akustiset ja hitaat keinuvaan pulssiin perustuvat säestykset.

### Jakso 10. Rytmi omaksi ilmaisuksi

**Oppimistulos:** rakentaa oman 1–2 tahdin kompin, muuntelee painotuksia ja improvisoi pitäen grooven.  
**Opetus:** vähennä näytön ohjeita; kuuntele ja jäljittele; tee oma muunnelma ja nauhoita.  
**Pelit:** *Rytmilaboratorio*, *Bändin rytmikoe* (Ensikeikka-yhteys, ei sen keskeneräisen lähdekoodin muokkaus).  
**Valmius:** ei numeroihin tuijottamista eikä muiden soiton katoaminen, kun kitara soittaa.

## 6. Kolme esimerkkitehtävää opetustarkkuudella

### Esimerkki A: Pulssijahti, ensimmäinen kerta, noin 3–5 min

1. Kuuluu 4/4-rumpu-bassolooppi ilman jatkuvaa metronomia. Kysymys: ”Mihin jalka menisi tasaisesti?”
2. Käyttäjä naputtaa suurta näytön aluetta, välilyöntiä tai omaa reittään; pelin virtuaalisyke näkyy vain alussa.
3. Kun pulssi löytyi, musiikki jatkaa. Käyttäjä naputtaa kahdeksan iskua.
4. Palaute näyttää erikseen: **osuitko oikeaan pulssitasoon** (esim. tempo puoliksi) ja **pysyikö valittu pulssi tasaisena**. Käyttäjää ei rangaista selittämättömästä ajoituksesta.
5. Uusi esimerkki eri instrumentaatiolla. Lopuksi 4 tahdin kuuntelu ilman näyttövihjeitä.
6. Vaihtoehto ilman syötettä: harjoittele kuuntelemalla ja taputtamalla, merkitse itse, onnistuitko; ei tekaistua mittausta.

### Esimerkki B: Mykkä komppi, 4/4, 72 BPM

1. Lyhyt kuva ja ääni: vasen käsi lepää kevyesti kielillä, ei paina otelautaa. Vältetään harmonisia flageolettiääniä tietyissä nauhakohdissa ja ylimääräistä voimankäyttöä.
2. Kuunnellaan 2 tahtia, lasketaan 1 ja 2 ja 3 ja 4 ja.
3. Oikea käsi liikkuu kahdeksasosissa. Ensin soitetaan joka ↓ ja ↑, myöhemmin jätetään määrättyjä osumia pois.
4. Kaksi ensimmäistä yritystä ilman automaattista tarkistusta; pääasia rento liike.
5. Halutessaan kytketään mikrofoni. Tehtävä arvioi vain **iskuhetkien** ajoitusta, ei sävelkorkeuksia, ja epävarmasta mikrofonisignaalista kerrotaan suoraan.
6. Lopuksi soitetaan sama kolmen tahdin rumpulooppi ilman metronomin jatkuvaa naksutusta, viimeinen tahti täysin itsenäisesti.

### Esimerkki C: Bändin rytmikoe, soveltava

1. Rumpali näyttää yhden tahdin kompin ja basisti vahvistaa ykkösen.
2. Pelaaja valitsee rytmin (esim. ↓ – ↓ ↑ – ↑ ↓ ↑) ja kuulee sen neljässä tahdissa.
3. Bändi tiputtaa kitaraa pois, jotta pelaajalla on oma tila.
4. Pelaaja soittaa samaa rytmiä vaimennetuilla kielillä tai helpolla soinnulla; alkuun ilman arviointia.
5. Tauossa rumpali lopettaa yhdeksi tahdiksi. Pelaaja pitää sisäisen pulssin ja tulee takaisin ykköselle.
6. Loppuun bändi antaa sovitun merkin ja soitetaan yksi yhteinen lopetus.
7. Palaute: pysyitkö mukana, tuntuiko tauko, tarvitsitko laskuvihjeen; automaattiset ajoitusluvut vain, jos käytetty mittaustapa on luotettava.

## 7. Musiikillinen ja tekninen palautteen malli

Erotetaan neljä ulottuvuutta: (i) oikea pulssitaso, (ii) ajoituksen vaihtelu, (iii) tahti- ja rytmikuvion osumat/tauot, (iv) palautuminen tahdin katoamisesta. Mahdollinen ”groove” on käyttäjän oma tai ohjaajan arvio, ei yhden numeerisen tarkkuusmittarin synonyymi.

Käyttöliittymässä annetaan sanallinen, toimintaan johtava palaute: ”Aloitit nelosen jälkeen liian aikaisin”, ”Käsi pysähtyy tyhjän kolmosen kohdalla; jatka liike ilmassa”, ”Pulssi pysyi, vaikka ykkösen jälkeen tuli tauko”. Ei jatkuvaa rankaisevaa punaisen vihreän vilkkumista.

Mikrofoni ei voi päätellä vaimennetun kompin **iskun suuntaa**, käden liikettä silloin kun kieliin ei osuta, eikä luotettavasti mikä sointu oli kyseessä. Visuaalisella/oma-arvioinnilla on pysyvä rooli. Ajoituksen automaattinen pisteytys on tehtävä ensin vertailtavilla käsitaputuksilla ja selkeillä atakeilla. Vaimennetun kitaran polyfonisten, vierekkäisten iskujen tunnistus vaatii käytännön koetestit. Tavallinen Pitchy-pohjainen sävelentunnistus ei tähän riitä.

Ääni ajastetaan Web Audio -äänikellon mukaan; näytön päivityskello, `setInterval` ja kahden erillisen `<audio>`-elementin rinnakkaiskäynnistys eivät takaa musiikillista tarkkuutta. Ajastus ja mahdollinen iskujen mittaus täytyy sitoa yhteiseen aikapohjaan. Sisääntulon ja ulostulon latenssi on eri asia kuin soittajan todellinen epätarkkuus. Kalibrointi/luotettavuusrajat ja laitekoe ovat välttämättömiä, jos millisekuntipalautetta annetaan [14–15].

## 8. Käyttöliittymän suositus

Nykyinen **Rytmi** säilyy Oppimiskartan aiheena, mutta nykyinen ”0/4 sisältöä tehty” korvataan mielekkäämmällä yhteenvedolla: esimerkiksi ”Pulssi: harjoiteltu / Komppikäsi: harjoiteltu / Tauot: aloittamatta” sekä mahdollinen ”Jatka tästä”. Edistymismerkintä ja osoitettu taito eivät ole sama asia.

Aiheen etusivu:

- **Jatka harjoitusta:** yksi näkyvä suositus, jonka voi ohittaa.
- **Opi perusteet:** Pulssi ja ykkönen; Kahdeksasosat; Vaimennettu komppi; Tauot ja sointuvaihdot.
- **Pelaa ja harjoittele:** Pulssijahti; Rytmikaiku; Komppikone; Hiljainen tahti.
- **Soita oikeasti:** 5–10 minuutin soittoharjoitteet oikealla kitaralla ja musiikillisilla taustoilla.
- **Syvennä ja sovella:** Groove, synkopointi, shuffle, muut tahtilajit, improvisointi, bänditreeni.

Ensimmäisessä näkymässä ei näytetä kymmeniä kortteja. Kukin lohko avataan omalle sivulle, kuten Musiikin kartan nykyinen navigaatiolinja edellyttää. Visuaalinen rytmiruudukko on lyhyt ohjausväline; lopullisissa tehtävissä ruudun saa piiloon. Puhe-/tekstivaihtoehdot, saavutettavat näppäimistösyötteet, liikeherkkyyden huomiointi ja mobiilin vaaka-/pystytilanteet testataan.

## 9. Mitä tietoisesti EI tehdä

- Ei rakenneta yhtä massiivista metronomipeliä, jolla teeskennellään opetettavan kaikki rytmi.
- Ei tulkita rytmiä pelkäksi ”yksi napautus joka klikillä” -tarkkuudeksi.
- Ei tehdä sointujen oppimisesta rytmin harjoittelun ennakkovaatimusta.
- Ei oteta automaattista mikrofoniarviointia käyttöön ilman todellista mittausnäyttöä.
- Ei muuteta Ensikeikan, Riffikaiun tai niiden yhteisten ääniosien koodia rinnakkaisessa rytmityössä.
- Ei julkaista tuottamattomia tai lisensoimattomia artistiäänitteitä osana sivustoa. Harjoitusloopit tehdään itse tai lisenssit dokumentoidaan.

## 10. Soviteltava eteneminen

**Ydinpolku (ensimmäinen julkaisu):** Pulssi → Ykkönen → Vaimennettu komppi → Tauot → Soita bändin kanssa. Jokaisessa on kuuntelu, tehtävä ja oikea soittosovellus.  
**Jatkokehitys:** kahdeksasosien muuntelu → dynamiikka → vaihtojen rytmi → sisäinen kello → synkopointi → shuffle/12/8 → improvisointi ja bändityöskentely.  
**Kertaaminen:** muutama lyhyt eri tehtävä eri päivinä ja vaihtelevilla taustoilla.  
**Käyttäjän valinta:** harjoittelu voi edetä missä tahansa aiheessa; suositellut polut eivät muodosta lukkoja.

## Lähteet

[1] Snyder, Gordon & Hannon (2024). *Theoretical and empirical advances in understanding musical rhythm, beat and metre*. Nature Reviews Psychology. https://www.nature.com/articles/s44159-024-00315-y  
[2] *The Psychology of Music: Rhythm and Movement*. Annual Review of Psychology. https://doi.org/10.1146/annurev-psych-122216-011740  
[3] *Music and movement pedagogy in basic education: a systematic review* (2024). Frontiers in Education. https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1403745/full  
[4] *You got rhythm, or more: The multidimensionality of rhythmic abilities* (2022). https://pmc.ncbi.nlm.nih.gov/articles/PMC9614186/  
[5] *The Harvard Beat Assessment Test* (2013). https://pubmed.ncbi.nlm.nih.gov/24324421/  
[6] Luciani et al. (2022). *The role of auditory feedback in the motor learning of music*. Scientific Reports. https://www.nature.com/articles/s41598-022-24262-x  
[7] *Optimizing Music Learning: Exploring How Blocked and Interleaved Practice Schedules Affect Advanced Performance*. https://pmc.ncbi.nlm.nih.gov/articles/PMC4989027/  
[8] *Distributed Practice and Procedural Memory Consolidation in Musicians’ Skill Learning*. https://doi.org/10.1177/0022429411424798  
[9] Witek et al. (2014). *Syncopation, Body-Movement and Pleasure in Groove Music*. PLOS ONE. https://pmc.ncbi.nlm.nih.gov/articles/PMC3989225/  
[10] *A review of psychological and neuroscientific research on musical groove* (2023). https://doi.org/10.1016/j.neubiorev.2023.105522  
[11] *There’s More to Timing than Time: Investigating Musical Microrhythm Across Disciplines and Cultures* (2024). https://online.ucpress.edu/mp/article/41/3/176/199793/  
[12] Berklee Online. *Rhythm and Groove Guitar*. https://online.berklee.edu/courses/rhythm-and-groove-guitar  
[13] JustinGuitar. *Rhythm Maestro*, *Missing Down Strums* / *The Old Faithful*. https://www.youtube.com/watch?v=dIYw6gFhj98 ja https://www.justinguitar.com/advanced_search?q=strum  
[14] W3C. *Web Audio API*, timing and latency. https://www.w3.org/TR/webaudio/  
[15] MDN. *Advanced techniques: Playing audio in time*. https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques  