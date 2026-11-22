# #117 – vanhojen osoitteiden, suoritusten ja lähderiippuvuuksien yhteensopivuussopimus

**Tilanne:** 22.11.2026 · **Pohja:** `beta` @ `5a8905694e0b29b306e473173ea8d3dde72eab53` · **Luonne:** auditointi, EI lähdesiirto eikä poistopäätös.

**Lähteet:** [issue #117](https://github.com/ristotoivanen/Musiikin-kartta/issues/117), [#115:n inventaario / Draft-PR #146](https://github.com/ristotoivanen/Musiikin-kartta/pull/146), `tools/oppimiskartta/aiheet.json`, `assets/edistyminen.js`, `tools/oppimiskartta/rakenna.py`, `tools/pdf/rakenna-pdf.py`, `tools/linkit/tarkista-linkit.py`, `tests/site.test.ts`, `tests/e2e/lukumerkinnat.spec.ts` ja `tools/oppimiskartta/sisaltorekisteri.json`.

## 1. Menetelmä ja näyttörajat

Tämän dokumentin 68-rivinen luettelo on poimittu PR #146:n **todellisen HTML:n** inventaariosta ja verrattu `beta`n rekisteriin sekä nykyisten reittien luetteloon. Kaikkien 41 kirjan harjoituksesta poimitun sivun täsmällinen lähtöosa, luvun ID ja `data-oppisisalto`-tunniste tarkistettiin 11 `book/osa-*.html`-lähteestä; yksi erillinen poiminta tunnistettiin `<!-- oppisisalto:… -->` -rajoista. Kitaran perusteiden viiden sivun `data-study-item` ja `data-study-kind` tarkistettiin erikseen suoraan `beta`n HTML-tiedostoista. 11 kirjan osan luvut ja historiallisten ankkurien siirtotaulukko on poimittu `assets/edistyminen.js`n lähdekoodista. Nämä ovat **lähdeanalyysin** tuloksia, eivät väitteitä onnistuneesta nykyisen haaran koko automaattisten testien ajosta.

Pysyvä regressiosopimus on [`tests/fixtures/issue-117-legacy-urls.json`](../../tests/fixtures/issue-117-legacy-urls.json). Sitä ei saa päivittää automaattisesti generaattorin nykyarvojen mukaiseksi: sopimus suojaa juuri **aiemmin julkaistuja** osoitteita ja merkityksiä. Muutoksen yhteydessä uusi vastinreitti/alias on lisättävä, ei vanhaa poistettava. Ei vielä tuotantoympäristön HTTP-/Cloudflare-404/301-mittausta, mobiili-/VoiceOver-kokeita, todellista paikallistallennushistorian otosta, soittotestiä eikä PDF-tulosteen Chrome-renderöintiä.

**Lähtötilan lukumäärät:** aiheet 02–08 68 sivua (02 4, 03 3, 04 14, 05 8, 06 18, 07 7, 08 14); aihe 01 5 erillistä sivua; yhteensä **73** sisältösivua = **28 lukua, 41 harjoitusta ja 4 oppituntia**. Lisäksi 8 aihesivua ja 11 kirjan osaa.

## 2. Pysyvä URL- ja suoritustunnistematriisi

Suhteelliset URL:t on esitetty sivuston juuresta; saman polun `.html`-päätteen mahdollinen poistaminen palvelimen avulla **ei** korvaa historiallisen `.html`-osoitteen suojausta. Merkintä on vanha itse kuitattu **Tehty**, ei uuden Ydinopinnon osaamisnäyttö. `source` on nykyinen täsmällinen lähderiippuvuus: 28 kirjalukua, 41 `data-oppisisalto`-poimintaa, yksi `oppisisalto`-rajojen poiminta sekä kolme itsenäistä lähdettä. Näiden oikean aloitusluvun, poimintatunnisteen ja olemassaolon suojaa myös erillinen lähdesidontatesti.

| Nykyinen / säilytettävä URL | Suoritustunniste | Laji | Lähderiippuvuus |
|---|---|---|---|
| `/oppi/kitara/savelesta-sointuun.html` | `oppitunti:savelesta-sointuun` | oppitunti | `tools/oppimiskartta/sisallot/kitara/savelesta-sointuun.html` |
| `/oppi/kitara/vaihto-ja-sointukartta.html` | `oppitunti:vaihto-ja-sointukartta` | oppitunti | `tools/oppimiskartta/sisallot/kitara/vaihto-ja-sointukartta.html` |
| `/oppi/kitara/sointukierrot.html` | `sointukierrot` | luku | `book/osa-1.html#sointukierrot` |
| `/oppi/kitara/soita-ensin-basso.html` | `harjoitus:soita-ensin-basso` | harjoitus | `book/osa-1.html#sointukierrot [data-oppisisalto=soita-ensin-basso]` |
| `/oppi/kitara/mihin-kierto-paattyy.html` | `oppitunti:mihin-kierto-paattyy` | oppitunti | `tools/oppimiskartta/sisallot/kitara/mihin-kierto-paattyy.html` |
| `/oppi/rytmi/pulssi-ja-komppi.html` | `pulssi-ja-komppi` | luku | `book/osa-1.html#pulssi-ja-komppi` |
| `/oppi/rytmi/kuuntele-pulssi.html` | `harjoitus:kuuntele-pulssi` | harjoitus | `book/osa-1.html#pulssi-ja-komppi [data-oppisisalto=kuuntele-pulssi]` |
| `/oppi/rytmi/alas-ylos-yhdella-soinnulla.html` | `harjoitus:alas-ylos-yhdella-soinnulla` | harjoitus | `book/osa-1.html#pulssi-ja-komppi [data-oppisisalto=alas-ylos-yhdella-soinnulla]` |
| `/oppi/rytmi/kaksi-sointua-yhdessa-tahdissa.html` | `harjoitus:kaksi-sointua-yhdessa-tahdissa` | harjoitus | `book/osa-1.html#pulssi-ja-komppi [data-oppisisalto=kaksi-sointua-yhdessa-tahdissa]` |
| `/oppi/savelnimet/kitaran-kielet-ja-sointumerkinnat.html` | `oppitunti:kitaran-kielet-ja-sointumerkinnat` | oppitunti | `book/osa-1.html#kitaran-merkinnat [excerpt=kitaran-kielet-ja-sointumerkinnat]` |
| `/oppi/savelnimet/savelet-ja-intervallit.html` | `savelet-ja-intervallit` | luku | `book/osa-2.html#savelet-ja-intervallit` |
| `/oppi/savelnimet/siirra-yhta-sormea.html` | `harjoitus:siirra-yhta-sormea` | harjoitus | `book/osa-2.html#savelet-ja-intervallit [data-oppisisalto=siirra-yhta-sormea]` |
| `/oppi/korva/musiikki-on-kieli.html` | `musiikki-on-kieli` | luku | `book/osa-2.html#musiikki-on-kieli` |
| `/oppi/korva/taydenna-fraasi.html` | `harjoitus:taydenna-fraasi` | harjoitus | `book/osa-2.html#musiikki-on-kieli [data-oppisisalto=taydenna-fraasi]` |
| `/oppi/korva/savellajin-tunnistaminen.html` | `savellajin-tunnistaminen` | luku | `book/osa-4.html#savellajin-tunnistaminen` |
| `/oppi/korva/vaihda-kotisavelta.html` | `harjoitus:vaihda-kotisavelta` | harjoitus | `book/osa-4.html#savellajin-tunnistaminen [data-oppisisalto=vaihda-kotisavelta]` |
| `/oppi/korva/intervallit.html` | `intervallit` | luku | `book/osa-7.html#intervallit` |
| `/oppi/korva/mika-aste-soi.html` | `harjoitus:mika-aste-soi` | harjoitus | `book/osa-7.html#intervallit [data-oppisisalto=mika-aste-soi]` |
| `/oppi/korva/etsi-jalkimmainen-savel.html` | `harjoitus:etsi-jalkimmainen-savel` | harjoitus | `book/osa-7.html#intervallit [data-oppisisalto=etsi-jalkimmainen-savel]` |
| `/oppi/korva/basso.html` | `basso` | luku | `book/osa-7.html#basso` |
| `/oppi/korva/kuuntele-bassolinja.html` | `harjoitus:kuuntele-bassolinja` | harjoitus | `book/osa-7.html#basso [data-oppisisalto=kuuntele-bassolinja]` |
| `/oppi/korva/soinnut.html` | `soinnut` | luku | `book/osa-7.html#soinnut` |
| `/oppi/korva/kumpi-on-molli.html` | `harjoitus:kumpi-on-molli` | harjoitus | `book/osa-7.html#soinnut [data-oppisisalto=kumpi-on-molli]` |
| `/oppi/korva/tunnista-sointutyyppi.html` | `harjoitus:tunnista-sointutyyppi` | harjoitus | `book/osa-7.html#soinnut [data-oppisisalto=tunnista-sointutyyppi]` |
| `/oppi/korva/septimi-korvalla.html` | `septimi-korvalla` | luku | `book/osa-10.html#septimi-korvalla` |
| `/oppi/korva/kolme-c-sointua.html` | `harjoitus:kolme-c-sointua` | harjoitus | `book/osa-10.html#septimi-korvalla [data-oppisisalto=kolme-c-sointua]` |
| `/oppi/otelauta/otelauta.html` | `otelauta` | luku | `book/osa-5.html#otelauta` |
| `/oppi/otelauta/etsi-a-ilman-asteikkokuviota.html` | `harjoitus:etsi-a-ilman-asteikkokuviota` | harjoitus | `book/osa-5.html#otelauta [data-oppisisalto=etsi-a-ilman-asteikkokuviota]` |
| `/oppi/otelauta/etsi-sama-savel.html` | `harjoitus:etsi-sama-savel` | harjoitus | `book/osa-5.html#otelauta [data-oppisisalto=etsi-sama-savel]` |
| `/oppi/otelauta/perussavel.html` | `perussavel` | luku | `book/osa-5.html#perussavel` |
| `/oppi/otelauta/etsi-savel-kahdelta-kielelta.html` | `harjoitus:etsi-savel-kahdelta-kielelta` | harjoitus | `book/osa-5.html#perussavel [data-oppisisalto=etsi-savel-kahdelta-kielelta]` |
| `/oppi/otelauta/nimea-savel.html` | `harjoitus:nimea-savel` | harjoitus | `book/osa-5.html#perussavel [data-oppisisalto=nimea-savel]` |
| `/oppi/otelauta/caged.html` | `caged` | luku | `book/osa-6.html#caged` |
| `/oppi/otelauta/soita-c-kahdesta-kohdasta.html` | `harjoitus:soita-c-kahdesta-kohdasta` | harjoitus | `book/osa-6.html#caged [data-oppisisalto=soita-c-kahdesta-kohdasta]` |
| `/oppi/soinnut/harmoninen-kentta.html` | `harmoninen-kentta` | luku | `book/osa-3.html#harmoninen-kentta` |
| `/oppi/soinnut/kolme-sointua-g-duurista.html` | `harjoitus:kolme-sointua-g-duurista` | harjoitus | `book/osa-3.html#harmoninen-kentta [data-oppisisalto=kolme-sointua-g-duurista]` |
| `/oppi/soinnut/kaikuluotain.html` | `harjoitus:kaikuluotain` | harjoitus | `book/osa-3.html#harmoninen-kentta [data-oppisisalto=kaikuluotain]` |
| `/oppi/soinnut/roomalaiset-numerot.html` | `roomalaiset-numerot` | luku | `book/osa-3.html#roomalaiset-numerot` |
| `/oppi/soinnut/siirra-kierto-d-duuriin.html` | `harjoitus:siirra-kierto-d-duuriin` | harjoitus | `book/osa-3.html#roomalaiset-numerot [data-oppisisalto=siirra-kierto-d-duuriin]` |
| `/oppi/soinnut/sointujen-tehtavat.html` | `sointujen-tehtavat` | luku | `book/osa-3.html#sointujen-tehtavat` |
| `/oppi/soinnut/laula-paluu.html` | `harjoitus:laula-paluu` | harjoitus | `book/osa-3.html#sointujen-tehtavat [data-oppisisalto=laula-paluu]` |
| `/oppi/soinnut/kvinttiympyra.html` | `kvinttiympyra` | luku | `book/osa-4.html#kvinttiympyra` |
| `/oppi/soinnut/siirra-keskelle-d.html` | `harjoitus:siirra-keskelle-d` | harjoitus | `book/osa-4.html#kvinttiympyra [data-oppisisalto=siirra-keskelle-d]` |
| `/oppi/soinnut/barre.html` | `barre` | luku | `book/osa-6.html#barre` |
| `/oppi/soinnut/etsi-barresointu.html` | `harjoitus:etsi-barresointu` | harjoitus | `book/osa-6.html#barre [data-oppisisalto=etsi-barresointu]` |
| `/oppi/soinnut/rakenna-barre.html` | `harjoitus:rakenna-barre` | harjoitus | `book/osa-6.html#barre [data-oppisisalto=rakenna-barre]` |
| `/oppi/soinnut/siirra-kierto-c-duuriin.html` | `harjoitus:siirra-kierto-c-duuriin` | harjoitus | `book/osa-6.html#barre [data-oppisisalto=siirra-kierto-c-duuriin]` |
| `/oppi/soinnut/septimisoinnut.html` | `septimisoinnut` | luku | `book/osa-10.html#septimisoinnut` |
| `/oppi/soinnut/lisaa-septimi.html` | `harjoitus:lisaa-septimi` | harjoitus | `book/osa-10.html#septimisoinnut [data-oppisisalto=lisaa-septimi]` |
| `/oppi/soinnut/soita-septimisoinnut.html` | `harjoitus:soita-septimisoinnut` | harjoitus | `book/osa-10.html#septimisoinnut [data-oppisisalto=soita-septimisoinnut]` |
| `/oppi/soinnut/ii-v-i.html` | `ii-v-i` | luku | `book/osa-10.html#ii-v-i` |
| `/oppi/soinnut/ii-v-i-kahdessa-savellajissa.html` | `harjoitus:ii-v-i-kahdessa-savellajissa` | harjoitus | `book/osa-10.html#ii-v-i [data-oppisisalto=ii-v-i-kahdessa-savellajissa]` |
| `/oppi/asteikot/asteikot.html` | `asteikot` | luku | `book/osa-2.html#asteikot` |
| `/oppi/asteikot/etsi-puoliaskeleet.html` | `harjoitus:etsi-puoliaskeleet` | harjoitus | `book/osa-2.html#asteikot [data-oppisisalto=etsi-puoliaskeleet]` |
| `/oppi/asteikot/pentatoniikka.html` | `pentatoniikka` | luku | `book/osa-8.html#pentatoniikka` |
| `/oppi/asteikot/tee-kolmesta-savelesta-melodia.html` | `harjoitus:tee-kolmesta-savelesta-melodia` | harjoitus | `book/osa-8.html#pentatoniikka [data-oppisisalto=tee-kolmesta-savelesta-melodia]` |
| `/oppi/asteikot/kysymys-ja-vastaus-koko-boksilla.html` | `harjoitus:kysymys-ja-vastaus-koko-boksilla` | harjoitus | `book/osa-8.html#pentatoniikka [data-oppisisalto=kysymys-ja-vastaus-koko-boksilla]` |
| `/oppi/asteikot/moodit.html` | `moodit` | luku | `book/osa-11.html#moodit` |
| `/oppi/asteikot/vaihda-f-nauhaa-ylemmas.html` | `harjoitus:vaihda-f-nauhaa-ylemmas` | harjoitus | `book/osa-11.html#moodit [data-oppisisalto=vaihda-f-nauhaa-ylemmas]` |
| `/oppi/kappaleet/kappale-asteina.html` | `kappale-asteina` | luku | `book/osa-3.html#kappale-asteina` |
| `/oppi/kappaleet/sama-kappale-c-duurissa.html` | `harjoitus:sama-kappale-c-duurissa` | harjoitus | `book/osa-3.html#kappale-asteina [data-oppisisalto=sama-kappale-c-duurissa]` |
| `/oppi/kappaleet/transponointi.html` | `transponointi` | luku | `book/osa-4.html#transponointi` |
| `/oppi/kappaleet/sovita-savellaji-laulajalle.html` | `harjoitus:sovita-savellaji-laulajalle` | harjoitus | `book/osa-4.html#transponointi [data-oppisisalto=sovita-savellaji-laulajalle]` |
| `/oppi/kappaleet/kappale.html` | `kappale` | luku | `book/osa-7.html#kappale` |
| `/oppi/kappaleet/mika-sointu-tulee.html` | `harjoitus:mika-sointu-tulee` | harjoitus | `book/osa-7.html#kappale [data-oppisisalto=mika-sointu-tulee]` |
| `/oppi/kappaleet/tee-sointukartta.html` | `harjoitus:tee-sointukartta` | harjoitus | `book/osa-7.html#kappale [data-oppisisalto=tee-sointukartta]` |
| `/oppi/kappaleet/etsi-ensimmainen-melodiasavel.html` | `harjoitus:etsi-ensimmainen-melodiasavel` | harjoitus | `book/osa-7.html#kappale [data-oppisisalto=etsi-ensimmainen-melodiasavel]` |
| `/oppi/kappaleet/improvisointi.html` | `improvisointi` | luku | `book/osa-8.html#improvisointi` |
| `/oppi/kappaleet/soita-kysymys-ja-vastaus.html` | `harjoitus:soita-kysymys-ja-vastaus` | harjoitus | `book/osa-8.html#improvisointi [data-oppisisalto=soita-kysymys-ja-vastaus]` |
| `/oppi/kappaleet/sovittaminen.html` | `sovittaminen` | luku | `book/osa-9.html#sovittaminen` |
| `/oppi/kappaleet/vaihda-saestysta.html` | `harjoitus:vaihda-saestysta` | harjoitus | `book/osa-9.html#sovittaminen [data-oppisisalto=vaihda-saestysta]` |
| `/oppi/kappaleet/oma-kappale.html` | `oma-kappale` | luku | `book/osa-9.html#oma-kappale` |
| `/oppi/kappaleet/aanita-kahdeksan-tahtia.html` | `harjoitus:aanita-kahdeksan-tahtia` | harjoitus | `book/osa-9.html#oma-kappale [data-oppisisalto=aanita-kahdeksan-tahtia]` |

## 3. Oppimiskartan pysyvät aiheankkurit ja suorat linkit

| Aiheankkuri (`/index.html#…`) | Aihesivu |
|---|---|
| `#aihe-kitara` | `/oppi/kitara/index.html` |
| `#aihe-rytmi` | `/oppi/rytmi/index.html` |
| `#aihe-nuotit` | `/oppi/savelnimet/index.html` |
| `#aihe-korva` | `/oppi/korva/index.html` |
| `#aihe-otelauta` | `/oppi/otelauta/index.html` |
| `#aihe-soinnut` | `/oppi/soinnut/index.html` |
| `#aihe-asteikot` | `/oppi/asteikot/index.html` |
| `#aihe-kappaleet` | `/oppi/kappaleet/index.html` |

Säilytä myös `#oppimisaiheet`, opetus- ja pelisivujen kontekstiparametrit `?aihe=aihe-…`, `?tapa=pelit|kitara`, `?tila=peli|harjoitus`, `?polku=…` ja kitaraharjoittelijan `?harjoitus=…`. Ne ovat **erilaisia parametriavaruuksia**: `aihe` palauttaa lähtöaiheeseen, `tapa` oppimistapaan, `tila` Riffikaiun toimintatilaan, `polku` joko opintopolun avaukseen tai harjoittelijan polkuun. Älä tee yleistä parametrien poistavaa uudelleenohjausta. Historia- ja paluufokus hyödyntävät myös `history.state.returnTopic`.

## 4. Teoriaoppaan 11 osaa, 28 lukua ja historialliset ankkurit

Kukin `/book/osa-N.html` on itsessään säilytettävä URL. Seuraavassa on **PARTS-taulukon odottama** lukujen ja muiden ankkurien lista, ei vielä selaimessa mitattu 11 sivun ankkuritoiminta.

| Kirjan osoite | Lukujen ankkurit (numero) | Muut julkiset ankkurit |
|---|---|---|
| `/book/osa-1.html` | `#pulssi-ja-komppi` (1), `#sointukierrot` (2) | `#pulssi-aanite`, `#kahdeksasosat`, `#kitaran-merkinnat`, `#alas-ylos-komppi`, `#vaihto-kolmosella`, `#kolme-cowboyta` |
| `/book/osa-2.html` | `#musiikki-on-kieli` (3), `#savelet-ja-intervallit` (4), `#asteikot` (5) | `#ensikeikan-teoria`, `#ensikeikan-teoria-otsikko`, `#h-savelnimi` |
| `/book/osa-3.html` | `#harmoninen-kentta` (6), `#roomalaiset-numerot` (7), `#sointujen-tehtavat` (8), `#kappale-asteina` (9) | `#kaikuluotain`, `#neljas-savel`, `#asteiden-varit` |
| `/book/osa-4.html` | `#savellajin-tunnistaminen` (10), `#kvinttiympyra` (11), `#transponointi` (12) | `#ympyra-otsikko` |
| `/book/osa-5.html` | `#otelauta` (13), `#perussavel` (14) | `#oktaaviharjoitus`, `#oktaavimuodot`, `#e-ja-a-kielen-nauhat` |
| `/book/osa-6.html` | `#barre` (15), `#caged` (16) | `#numerokartta` |
| `/book/osa-7.html` | `#intervallit` (17), `#basso` (18), `#soinnut` (19), `#kappale` (20) | `#aste-korvalla`, `#aste-harjoitus`, `#sointu-harjoitus`, `#tehtava-harjoitus` |
| `/book/osa-8.html` | `#improvisointi` (21), `#pentatoniikka` (22) | `#em-c-tausta`, `#am-tausta`, `#boksi-e-mollissa` |
| `/book/osa-9.html` | `#sovittaminen` (23), `#oma-kappale` (24) | `#kokoa-yhteen`, `#esimerkkikappale`, `#kappale-1-luonnos`, `#kappale-2-b-osa`, `#kappale-3-septimit`, `#kappale-4-sovitus` |
| `/book/osa-10.html` | `#septimisoinnut` (25), `#septimi-korvalla` (26), `#ii-v-i` (27) | `#c-duurin-septimisoinnut` |
| `/book/osa-11.html` | `#moodit` (28) | – |

Vanhat **viisiosaisen kirjan** väärään osaan osoittavat fragmentit käsitellään `assets/edistyminen.js`n `followMovedAnchor()`-toiminnolla, joka käyttää `location.replace()`-ohjausta vain, jos nykyiseltä sivulta puuttuu kyseinen ID. Tämä on **JavaScript-riippuvainen yhteensopivuus**, ei HTTP-tason 301-uudelleenohjaus. Ilman JavaScriptiä vanha väärän osan linkki voi avata oikean sivun sijasta väärän osan alkuun.

### Vanhat tallennustunnisteet: `MOVED` (tarkka kuvaus)

| Vanha tunniste | Nykyiset perintömerkinnät |
|---|---|
| `osa-1#musiikki-on-kieli` | `musiikki-on-kieli` |
| `osa-1#savelet-ja-intervallit` | `savelet-ja-intervallit` |
| `osa-1#asteikot` | `asteikot` |
| `osa-1#harmoninen-kentta` | `harmoninen-kentta` |
| `osa-1#roomalaiset-numerot` | `roomalaiset-numerot` |
| `osa-1#sointujen-tehtavat` | `sointujen-tehtavat` |
| `osa-2#sointukierrot` | `sointukierrot`, `kappale-asteina` |
| `osa-2#kvinttiympyra` | `kvinttiympyra` |
| `osa-2#savellajin-tunnistaminen` | `savellajin-tunnistaminen` |
| `osa-2#transponointi` | `transponointi` |
| `osa-3#otelauta` | `otelauta` |
| `osa-3#barre` | `perussavel`, `barre` |
| `osa-3#caged` | `caged` |
| `osa-3#septimisoinnut` | `septimisoinnut`, `ii-v-i` |
| `osa-3#pentatoniikka` | `pentatoniikka` |
| `osa-3#moodit` | `moodit` |
| `osa-4#intervallit` | `intervallit` |
| `osa-4#basso` | `basso` |
| `osa-4#soinnut` | `soinnut`, `septimi-korvalla` |
| `osa-4#kappale` | `kappale` |
| `osa-5#improvisointi` | `improvisointi` |
| `osa-5#sovittaminen` | `sovittaminen` |
| `osa-5#oma-kappale` | `oma-kappale` |

**Tarkka siirtologiikka:** `load()` lukee ensin avaimen `musiikin-kartta:luvut`. Jos se on kelvollinen JSON-merkkijonotaulukko (myös `[]`), se voittaa vanhan `musiikin-kartta:tehdyt`-avaimen. Jos uudempi ei ole kelvollinen, luetaan vanha taulukko, josta vain `MOVED`-avaimet mapataan uuteen luvun ID:hen. Uuteen avaimeen kirjoitetaan siirto vain silloin, kun uudempi avain oli **kokonaan puuttuva** ja kartoituksessa oli tuloksia. Vanhaa avainta ei poisteta. Jos uudempi avain on olemassa mutta virheellinen, data voi näkyä muistissa mutta **ei tallennu korjattuna automaattisesti**. Tästä tarvitaan erillinen regressio ja turvallinen korjaussuunnitelma, ei nykyisen skriptin muutos tässä työssä.

## 5. localStorage ja tulosten merkitykset

| Avain / avainperhe | Muoto ja merkitys | Rajaus |
|---|---|---|
| `musiikin-kartta:luvut` | JSON-merkkijonotaulukko: luku = slug, harjoitus = `harjoitus:slug`, muu = `oppitunti:slug` | Vanha käyttäjän **Tehty-kuittaus**, ei osaamisen todennus. PR #141 lisää omia **Kokeiltu**-ID:itä tähän samaan taulukkoon. |
| `musiikin-kartta:tehdyt` | Perintötaulukko: `osa-N#luku` | `MOVED`-muunnos vain ehdollisesti, alkuperäinen jää paikalleen. |
| `musiikin-kartta:aihenakyma` | JSON `{expanded,shown,openedBy}` | Aihekorttien näkyvyys; **ei** suoritus eikä taitotodistus. |
| `musiikin-kartta:harjoittelu` | Kitaraharjoittelijan `version:3`, settings/stats/recent/sessions | Eri tulosmalli. Älä yhdistä luku-/harjoituskuittauksiin. |
| `musiikin-kartta:ensikeikka` | `version:1`, `completed:number[]` | Pelin kappalekohtaiset suoritukset (1–5, 6–9), säilyttää tuntemattomat ID:t päivityksessä. |
| `musiikin-kartta:riffikaiku:v1` | `version:1`; `stats`, `results`, `run`, `levels`, `practice.marked/heard/last` | `board`-peliläpäisy, vanha `mic`-pelituloshistoria, oikean kitaran itsekuittaus ja mikrofonihavainto ovat **eri asioita**. Vanhat tasot eivät automaattisesti siirry uusiin kotitreeneihin. |
| `musiikin-kartta:skaalapolku:v1` ja `…:position-2:v1`, `…:position-3:v1`, `…:bridge-1-2:v1` | Numeroarvoiset, erilliset asteikkopositioiden / yhdistämisharjoituksen vaiheet | Itsearvioidut vaiheet, eivät automaattinen taitotodistus. |
| `musiikin-kartta:skaalapolku:active-position:v1`, `…:tempo:v1`, `…:bridge-tempo:v1` | Aktiivinen positio ja tempovalinnat | Harjoitusnäkymän käyttäjäasetuksia. |
| `musiikin-kartta:moodipolku:ionian:v1`, `…:aeolian:v1`, `…:active:v1` | Moodiharjoitusten vaiheet ja valittu moodi | Eri tunnisteperhe kuin pentatonisissa harjoituksissa. |

**Merkitysrike estettävä:** `Tehty` = käyttäjä merkitsi aiemman sisällön tehdyksi; `Kokeiltu` = käyttäjä kokeili uutta Ydinopintojen harjoitusta; pelin oikein vastattu = pelin havainto; mikrofoni kuuli = havainto; oikean kitaran osaaminen = **ei todennettu ilman erillistä näyttöä**. Sama paikallistallennusavain ei ole sama semantiikka. Esimerkiksi vanha `harmoninen-kentta` ei saa kirjoittaa uutta `harjoitus:kuule-ja-kokoa-sointu`-tunnistetta eikä `Kokeiltu` saa korottaa Ydinopinnon hallituksi.

Tiedot ovat **selaimen ja originin** (skeema + host + portti) paikallisia. `rinnepelto.com` ja Pages-esikatseludomain eivät jaa localStoragea. URL- tai palvelinympäristön vaihto ei itsessään siirrä käyttäjän historiaa. Selaimen historian tyhjennys voi poistaa merkinnät.

## 6. Lähteet, generoitu sisältö ja PDF

`tools/oppimiskartta/rakenna.py` lukee `tools/oppimiskartta/aiheet.json`, `book/osa-*.html` ja erilliset `tools/oppimiskartta/sisallot/{aihe}/*.html`-lähteet. Se poimii `<section class="chapter" id="…">`-luvut, `data-oppisisalto`-harjoitukset sekä erityiset `<!-- oppisisalto:… -->`-rajatut poiminnat. Se tuottaa `oppi/{aihe}/*.html`-sivut ja aihesivut, muokkaa `index.html`n reitit/aihekortit sekä `assets/oppimiskartta.js`n aihepolut. Generaattori vaatii jokaista 28 kirjan lukua vastaavan yksikäsitteisen sisältösivun ja yksilölliset suoritus-ID:t; `--tarkista` ei muuta tiedostoja. `tools/oppimiskartta/rakenna-osiot.py` kuluttaa `sisaltorekisteri.json`-rekisteriä Musapelien/Kitaratreenin/Soittopakin koostamisessa. `tools/linkit/tarkista-linkit.py` tarkistaa tiedostot, fragmentit ja PARTS/MOVED-yhdenmukaisuuden.

`tools/pdf/rakenna-pdf.py` käyttää **suoraan** `book/osa-1.html`…`book/osa-11.html`, `book/sanasto.html` ja `book/h-savelnimen-alkupera.html`. Se tarvitsee myös `book/reader.css`, `tools/pdf/kooste.css` ja etusivun `<p class="tagline">`-sisällön; poiminta odottaa kirjan `<head>`, `<header class="hero"><div class="frame">`- ja `<article>`-rakennetta sekä lukujen otsikkorakennetta. `<audio>` vaihtuu rinnepelto.comin kirja-ankkurilinkiksi, `<details>` avataan, `id`/aria-kohteet prefiksoidaan ja sivunumerot päätellään Chromen renderöimän PDF:n nimetyistä kohteista (korkeintaan kolme yritystä). Tuotos on `pdf/musiikin-kartta.pdf`, jonka sisältöä ei saa käsin korvata. Pelkän oppimiskartan uusiminen ei muuta PDF-lähdettä; book-lähteen poistaminen rikkoo nykyisen PDF-tuotannon.

**Vanhat verkkolinkit:** `/book/index.html`, `/book/sanasto.html`, `/book/h-savelnimen-alkupera.html`, `/pdf/musiikin-kartta.pdf` sekä kirjansisäiset luvut, harjoitusten media-ankkurit ja HTTP-lähteeseen sidotut ääni-/työkalulinkit kuuluvat säilytysvaatimukseen. Äänitiedoston polun löytyminen ei todista äänen laatua tai kuunneltavuutta.

## 7. Riskirekisteri ja hyväksymisportit

| Vakavuus | Riski | Regressiosuoja / päätös |
|---|---|---|
| **P0 / todettu #151** | Nykyinen PDF-koostaja odottaa `index.html`n poistunutta `<p class="tagline">`-rakennetta ja keskeytyy ennen PDF:n tuottamista. | [Erillinen korjausissue #151](https://github.com/ristotoivanen/Musiikin-kartta/issues/151), korjaus yhteisten lähteiden omistavassa PR:ssä; todellinen PDF-ajo sekä PDF-linkit/sivut ennen GO-päätöstä. |
| **P0** | Poistettu `book/osa-*.html` katkaisee oppituntien generoinnin ja PDF:n. | Älä poista book-lähteitä; rakenna aihelähde-pilotti ja todista molemmat rakennuspolut ennen irrotusta. |
| **P0** | Legacy-osoitteet ja fragmentit rikkoutuvat, jos otsikko/slug muuttuu, tai vanhat osat katoavat. | Kiinteä URL/ID/ankkuribaseline, alias-/redirect-suunnitelma, suorat HTTP- ja JS-on/off-selainkokeet. |
| **P0** | `Tehty` muuttuu `Kokeiltu`ksi tai uuden taidon hallinnaksi. | Uudet vakaat ID:t; ei automaattista vanha→Ydinopinto-merkintämigraatiota; erillinen semanttinen näyttö. |
| **P1** | `luvut` on virheellinen JSON mutta olemassa: legacy-luku näkyy muistissa, ei tallennu uuteen avaimeen automaattisesti. | Dokumentoitu reunatapaus; koodimuutokset erillisessä integraatiotehtävässä + rikkinäisten tallenteiden palautussuunnitelma. |
| **P1** | JS-pois rikkoo vanhaan väärään kirjan osaan viittaavan ankkurin. | Alias vastaanottavan sivun HTML:ään tai palvelintason reitti ennen vanhan rakenteen muutosta. |
| **P1** | `?aihe`/`?tapa`/`?tila`/`?polku` tai paluufokus katoaa URL-siirrossa. | Kontekstisäilyttävät selaintestit ja navin kohdelinkkien tarkistus. |
| **P1** | Suoritukset häviävät alkuperän vaihtuessa tai tallennusversion päivittyessä väärin. | Origin-päätös, erilliset fixturet eri versioille, ei testailua oikealla käyttäjätallenteella. |
| **P1** | PDF voi sisältää vanhoja tai rikkinäisiä verkkolinkkejä, vaikka HTML syntyy. | PDF-HTML-koosteen rakennetesti ja myöhempi Chrome-renderin + linkki-/sivunumeroiden testi. |
| **P2** | Ääni, kuvat, CSS ja copyright-viitteet jäävät kirjan suhteellisiin polkuihin. | `rebase()`-tarkistus, oikeiden media-URLien HTTP/selaintestaus, lisenssien tarkistus ennen siirtoa. |
| **P2** | PR #141 / #137 / #145 ja muut rinnakkaiset työt muuttavat samoja generaattorin/tallennuksen/UI:n lähteitä. | Tämä PR lisää vain dokumentin, fixturet ja erillistestit. Konfliktit ja integraatio testataan vasta sovitussa vaiheessa. |

## 8. Regressiot ja näyttötasot

**Lähtötilan olemassa olevat testit:** `tests/site.test.ts` jäädyttää 70 aikaisempaa reittiä, 28 teoriaoppaan lukua, 41 harjoituspoimintaa, 73 sivun yksilö-ID:t, aiheankkurit, lähdetiedostot, linkit ja generaattorin `--tarkista`n; `tests/e2e/lukumerkinnat.spec.ts` käy läpi 73 sisältösivun merkintä-, peruutus-, reload- ja aihesivu-/kirjasynkronoinnin. `tests/osiot.test.ts` suojaa Musapeli- ja Kitaratreeni-parametreja ja sisällön rekisteriä. `tools/linkit/tarkista-linkit.py` tarkistaa staattiset paikalliset URLit/ankkurit ja PARTS/MOVED-taulukon. Näiden testien **olemassaolo ei tarkoita, että ne olisi ajettu tässä auditoinnissa**.

**#117:n uudet itsenäiset testit:** `tests/yhteensopivuus-117.test.ts` lukee jäädytetyn JSON-fixturen ja tarkistaa jokaisen 73 vanhan URL:n, ID:n, lajin, 28 lukukytkentää, 41 harjoituspoiminnan lähdesidontaa, 11 osan ankkurit sekä 8 aihepolkua. Lisäksi se ajaa `assets/edistyminen.js`n eristetyssä VM-ympäristössä oikean vanha→uusi-fallbackin, nykyisen avaimen etusijan, vanhan tunnisteen säilymisen ja uuden Ydinopinnon merkitsemättömyyden. `tests/e2e/yhteensopivuus-117.spec.ts` mittaa oikeassa Chromium-selaimessa vanhan book-ankkurin JS-ohjauksen sekä historiallisen tallennuksen säilymisen desktop-/puhelinemulaatioissa. `tests/issue-117-pdf-sources.py` kutsuu PDF:n todellista Python-koostajaa ilman PDF-binäärin tulostamista tai tiedostomuutoksia. Erillinen `.github/workflows/issue-117-compat.yml` ajaa täyden lint-/tyyppi-/Vitest-kokonaisuuden, selaimen historialliset testit ja PDF:n **oman estävän tarkistuksen** rinnakkaisina töinä.

**Automaattiset tarkistukset jatkossa:** Vitest, nykyinen linkki- ja generaattoritarkistus, PDF:n väli-HTML, PR #141:n uuden ja vanhan ID-avaruuden integraatiotestit, Playwright JS-päällä/pois (11 osaa, historialliset ankkurit), 73 merkintäpolkua, tallennusskenaarioiden siirto ja Cloudflare-esikatselun HTTP-linkit. **Fyysiset kokeet:** Safari/iPhone + Android, ruudunlukijan ankkuripaluut, paikallishistorian säilyminen päivityksen yli, PDF:n tulostus ja musiikillinen sisältöarvio. Näitä ei korvata staattisella tarkistuksella.

### Tähän auditointiin jo mitattu CI-näyttö ja löydetty estävä vika

[PR #150:n ensimmäinen Actions-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44993438834): **11/11 uutta Vitest-testiä läpi**, generaattorin `--tarkista` läpi, **104 sivun / 2 629 viittauksen** staattinen linkkitarkistus **0 ongelmaa**. Ensimmäinen PDF-koosteen testi odotti virheellisesti vain 28 `chapter`-osiota kaikkiaan 13 dokumentista; todellisuudessa varsinaisissa kirjaosissa on 28 lukua ja kahdessa liitteessä yhteensä 4 `chapter`-muotoista osiota. Testin oletus korjattiin ja sen jälkeen [toinen CI-ajo](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/44993522102) löysi **todellisen tuotantokoodin PDF-eston**:

```text
index.html: ei löytynyt kohtaa <p class="tagline">
```

`tools/pdf/rakenna-pdf.py`n `build_html()` vaatii `index.html`-sivulta `<p class="tagline">…</p>`, mutta nykyinen `beta`n `index.html` ei sisällä sitä. Koko PDF:ää **ei pystytä nykyisellä koodilla tuottamaan**. Tätä ei korjata tämän keskustelun yhteisiä tiedostoja koskevien muutosrajausten takia; toteutusvaatimus kirjattu [issueen #151](https://github.com/ristotoivanen/Musiikin-kartta/issues/151). Tämä on testillä havaittu nykytilan P0-bugi, ei hypoteettinen riski.

**Testinäyttöä ei pidä ylitulkita:** 11 Vitest-testiä ja linkki-/generaattoritarkistus olivat onnistuneita; PDF-tuotanto epäonnistui. Myöhemmin lisättyjen koko testisuiten ja Playwright-kokeiden tulos riippuu uuden QA-työnkulun ajosta. Varsinaista PDF-tulostusta, iPhonen tai Androidin fyysistä testausta ja todellisen käyttäjän tallennushistoriaa ei ole tässä tarkistettu.

## 9. Myöhempi turvallinen lähdesiirron järjestys (ei toteuteta nyt)

1. **Lukitse sopimus:** hyväksy 73 URL:in, kirja-ankkurien, 28 luku-ID:n ja paikallistallennusten merkitykset; tallenna regressiobaseline, päätä saman originin säilytys ja varmistettavat vanhat URLit. Ei sisällön poistamista.
2. **Määritä yksi kanoninen aihelähde:** sisältö-ID, versio, oppimistavoite, sisältö/media, lähde-/lisenssiviitteet, vanhat alias-URLit/ankkurit, oma `Tehty`/`Kokeiltu`-tulossemantiikka ja PDF-osarakenne. Yksi sisältölähde, monta esitystapaa, ei kahta muokattavaa tekstikopiota.
3. **Yksi pilotti:** valitse rajattu sisältö, jolla on sekä kirjavastine että harjoitussivu. Generoi rinnakkainen kokeilutulos **eri ulostulopolkuun** eikä korvaa julkaistuja sivuja. Vertaa HTML-rakennetta, tekstin pedagogista vastaavuutta, audio- ja linkkikohteita, ID:tä, PDF-väli-HTML:ää ja käyttäjämerkintöjä. Merkitse hyväksytyt tarkoitukselliset erot.
4. **Siirrä yksi aihe kerrallaan** vasta hyväksynnän jälkeen. Säilytä vanhat polut alias-/redirect-kerroksella, joka toimii ilman JavaScriptiä; varmista `--tarkista`, linkit, PDF, tallennukset, 320 px/200 % ja saavutettavuus jokaisessa vaiheessa. Kaikki muutokset palautettavia.
5. **Irrota kirja lähteenä vasta**, kun sekä verkkosivut että yhtenäinen PDF/lukukokemus tuotetaan samasta kanonisesta aihelähteestä ja kirjan omat 11 osaa + liitteet voidaan tuottaa yhteensopivuusnäkymiksi. Vanhaa teoriaa ei automaattisesti kopioida sisältömalliksi.
6. **Erillinen omistajan hyväksyntä** ennen kirjan ensisijaisen navigaation piilottamista tai vanhan julkisen sisällön poistamista. Vanhat linkit ja historia säilyvät riippumatta näkyvyyden päätöksestä.

**Rinnakkaisuus ja integraatio:** #115 / PR #146 on katselmoitava sisältöehdotus eikä yhdistetty sisältöpäätös. #116 sekä PR #141 ja #137 muuttavat Ydinopintojen koosteita ja `assets/edistyminen.js`n Kokeiltu-käytöstä. #145 koskee intervallisivuja/vanhaa book-sivua. #54 käsittelee vanhojen PR:ien siivousta. Tämä #117-PR ei muuta näiden yhteisiä tiedostoja, sulje issueita eikä yhdistä mitään. **NO-GO** todelliselle lähdesiirrolle, kunnes integraatiotestit ja omistajan päätösportit ovat valmiit.
