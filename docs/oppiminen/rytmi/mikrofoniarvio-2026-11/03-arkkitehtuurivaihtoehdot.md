# 3. Arkkitehtuurivaihtoehdot ja päätösehdotus

**Tila:** ehdotus 16.11.2026. Ei toteutuslupa.

## 3.1 Vaihtoehdot

| | Mitä oppija saa | Mitä ohjelma väittää |
| --- | --- | --- |
| **A Ei mikrofonia** | Kuuntelu, ruudukko, soitto mallin ja klikin kanssa, itsearvio | Vain valinnat, jotka oppija teki ruudulla |
| **B Mikrofoni peilinä** | Äänittää oman soittonsa ja kuuntelee sen | Ei mitään. Oppija arvioi itse |
| **C Mikrofoni havaintona** | Oton jälkeen yhteenveto: montako iskua kuului, kuinka tasaisesti, mihin kohtiin | "Kuulin…", epävarmuus näkyvissä, ei arvosanaa |
| **D Reaaliaikainen pisteytys** | Jokainen isku saa heti merkin: ajoissa, myöhässä, puuttuu | Iskukohtainen tuomio |
| **E Opetettu malli** | Kuten C tai D, lisäksi lyönnin suunta ja sointu | Iskut, suunta ja sointu |

## 3.2 Vertailu

| Kriteeri | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| Pedagoginen hyöty ensimmäisessä kompissa | Suuri | Suuri | Kohtalainen | Kohtalainen, voi häiritä | Sama kuin D |
| Hyöty tasaisuuden hiomisessa myöhemmin | Pieni | Kohtalainen | Suuri | Suuri | Suuri |
| Väärän palautteen riski | Ei ole | Ei ole | Hallittavissa: koko otto, epävarmuus näkyy | Suuri: noin joka kymmenes isku väärin parhaallakin mallilla | Suuri ylösvedoissa |
| Riippuvuus tuntemattomasta viiveestä | Ei | Ei kaiuttimilla | Ei, jos mittarit valitaan oikein | Kyllä, täysin | Kyllä |
| Toimii bänditaustan kanssa | Kyllä | Kyllä | Ei kaiuttimilla | Ei kaiuttimilla | Ei osoitettu |
| Laitekattavuus | Kaikki | Lähes kaikki | Rajattu | Hyvin rajattu | Hyvin rajattu |
| Toteutustyö | Pieni | Kohtalainen | Suuri | Hyvin suuri | Hyvin suuri, lisäksi opetusaineisto |
| Uudet riippuvuudet | Ei | Ei | Ei | Ei | Mallin ajoympäristö ja malli |
| Validointi oikealla kitaralla ennen käyttöä | Soitettavuus | Kuuluvuus | Koko mittauskoe | Mittauskoe jokaisella laiteluokalla | Sama, lisäksi mallin yleistyvyys |
| Näyttö toimivuudesta nyt | Osat olemassa | Ei | Ei | Ei | Ei selaimessa |

Perustelut luvuille ovat teknisessä raportissa (1.3–1.8).

## 3.3 Miksi D ja E hylätään

**D** vaatii kolme asiaa yhtä aikaa: viiveen tuntemisen muutaman millisekunnin tarkkuudella jokaisella
laitteella, lähes virheettömän iskujen tunnistuksen ja taustan, joka ei vuoda mikrofoniin. Mikään näistä
ei ole nyt osoitettu, ja kahdelle ensimmäiselle lähteet antavat syyn epäillä. Kaupalliset
natiivisovellukset, esimerkiksi Yousician, arvioivat ajoitusta mikrofonilla. Niissä on latenssin
kalibrointiasetus, ja nekin varoittavat langattomista laitteista (tekninen raportti, lähde 14).
Natiivisovellus pääsee laitteen äänipinoon tavalla, johon selain ei pääse, joten niiden olemassaolo ei
todista, että sama onnistuu selaimessa. Lisäksi iskukohtainen punainen ja vihreä merkki ohjaa oppijan
katsomaan ruutua kuuntelemisen sijaan, mikä on aiemman rytmisuunnitelman (PR #70, tutkimusosan kohta 7)
vastaista.

**E** antaisi lyönnin suunnan, mutta tuoreimmassa tutkimuksessa ylösvetojen F1 oli puhelimen mikrofonilla
53–79 %, ja suunnan opettamiseen tarvittiin ranteeseen kiinnitetty anturi. Mallia ei ole julkaistu
selaimessa ajettavana. Oman mallin opettaminen on tutkimushanke, ei tämän sivuston tehtävä.

## 3.4 Miksi C on ehdollinen eikä heti toteutettava

C on ainoa mikrofonivaihtoehto, joka voi olla rehellinen: se arvioi koko ottoa, käyttää viiveestä
riippumattomia mittareita ja näyttää epävarmuutensa. Sen toimivuus on silti oletus. Synteettinen koe
osoittaa vain, että spektrivuo ei kaadu ihanneoloissa. Oikeasta kitarasta, oikeasta huoneesta ja
puhelimen mikrofonista ei ole yhtään mittausta.

C:n rakentaminen ennen mittausta toistaisi Riffikaiun tilanteen, jossa tunnistusketju on rakennettu ja
testattu synteettisesti, mutta oikean kitaran hyväksyntäkokeet ovat tekemättä. Siksi C:n ensimmäinen
askel on mittausväline, ei oppijan ominaisuus (asiakirja 4).

## 3.5 Tekninen rakenne, jos C joskus toteutetaan

Rakenne on kuvattu, jotta mittausväline voidaan tehdä samoista osista. Se ei ole toteutuslupa.

```
RhythmPattern (yksi totuus)
   ├─► toisto: etukäteisajastus AudioContext-kelloon (ReferencePlayer.loop-malli)
   ├─► ruudukko: sama data näytölle
   └─► analyysi: odotetut kohdat

mikrofoni ─► AudioWorklet-tallennin ─► raaka mononäytejono + currentFrame
                                              │  (oton jälkeen)
                                              ▼
                               spektrivuo ─► iskujen ajat
                                              ▼
                     tempon ja vaiheen sovitus ─► mittarit + luottamus
                                              ▼
                               sanallinen yhteenveto tai "en saanut selvää"
```

Valinnat ja niiden syyt:

| Valinta | Syy |
| --- | --- |
| Analyysi oton jälkeen, ei reaaliajassa | Huiput voi poimia molempiin suuntiin katsoen. Vaihe ja tempo sovitetaan koko ottoon. Oppija kuuntelee soittaessaan eikä katso ruutua |
| Tallennus AudioWorkletilla | Näytteet ja niiden paikka äänikellossa näytteen tarkkuudella. Ei riipu ruudunpäivityksestä tai välilehden tilasta. Tuki kaikissa selaimissa keväästä 2021 |
| Analyysi puhtaana funktiona näytetaulukolle | Sama koodi yksikkötestissä, mittausvälineessä ja tuotannossa. Äänitetyt oikeat otot käyvät testiaineistoksi |
| Yksi `RhythmPattern` toistolle, ruudukolle ja analyysille | Issue #69:n vaatimus: toisto ja arviointi käyttävät samaa mallia |
| Ei kosketa `PitchLoop`-, `NoteGate`- tai `PluckDetector`-luokkiin | Ne palvelevat sävelentunnistusta, ja niiden oikean kitaran kokeet ovat kesken. Rytmi on oma moduulinsa |
| Tausta mikrofonitilassa on pelkkä klikki tai kuulokkeet | Tekninen raportti 1.3: rumputausta tuottaa vääriä iskuja |
| Ääntä ei lähetetä minnekään | Sama periaate kuin `riffikaiku/mic.ts`:ssä |

**Viiveestä riippumattomat mittarit.** Olkoon iskujen havaitut ajat t₁…tₙ ja kuvion odotetut kohdat
tunnettuja.

1. *Iskujen määrä* tahtia kohti verrattuna kuvioon.
2. *Tempo:* suoran sovitus iskujen aikoihin. Kulmakerroin on tempo.
3. *Ryömintä:* muuttuuko iskuväli oton aikana.
4. *Vaihe:* etsitään siirtymä, jolla havaitut iskut osuvat parhaiten ruudukon kohtiin. Siirtymä itse
   heitetään pois, koska se sisältää tuntemattoman viiveen.
5. *Kuvio:* mihin kahdeksasosiin iskut osuivat siirtymän jälkeen.
6. *Tasaisuus:* jäännösten hajonta siirtymän jälkeen.
7. *Luottamus:* kuinka suuri osa havainnoista osui johonkin ruudukon kohtaan ja kuinka selvästi paras
   siirtymä erottui toiseksi parhaasta. Alle kynnyksen yhteenveto on "en saanut selvää", ei arvio.

Kohta 4 kätkee yhden heikkouden: jos oppija soittaa koko kuvion kahdeksasosan verran sivussa, sovitus ei
huomaa sitä. Tämän voi korjata vain viitteellä samassa äänityksessä (tekninen raportti, K3), ja sen
toimivuus kitaralla on mittauskokeen kysymys.

## 3.6 Päätösehdotus

1. **Ensimmäinen rytmipilotti tehdään vaihtoehdolla A.** Ei mikrofonia.
2. **B pidetään valmiudessa** ja lisätään, jos pilotin koekäyttö osoittaa, että oppijan itsearvio ja
   havainnoijan arvio eroavat (asiakirja 2, kohta 2.5).
3. **C:stä päätetään mittauskokeen perusteella.** Koe tehdään erillisellä mittausvälineellä omistajan
   omalla kitaralla ja laitteilla, ennalta kirjatuin hyväksymisrajoin (asiakirja 4).
4. **D:tä ja E:tä ei toteuteta.**
5. **Riippumaton hyöty heti:** yhteinen `RhythmPattern` ja siihen perustuva ajastettu toisto tarvitaan
   vaihtoehdossa A joka tapauksessa. Ne ovat sama osa, jonka issue #69 nimeää paketiksi P2.

**Mikä muuttaisi suosituksen.** Jos mittauskokeessa iskujen määrä ja kuvio tunnistuvat hyväksymisrajojen
mukaisesti vähintään kahdella laiteluokalla, C kannattaa toteuttaa niille olosuhteille, joissa se
läpäisi. Jos ne eivät tunnistu edes akustisella kitaralla ja kannettavalla hiljaisessa huoneessa, C
hylätään ja mikrofonin rooli rytmissä jää B:hen.
