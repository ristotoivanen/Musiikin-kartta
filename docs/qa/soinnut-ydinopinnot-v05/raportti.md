# Soinnut ja harmonia · Ydinopinnot v0.5

20.11.2026 · Tekninen katselmus · [#116](https://github.com/ristotoivanen/Musiikin-kartta/issues/116)

## Rajaus

Kolme liitteessä määriteltyä harjoitusta toteutettiin Musiikin kartan generaattorilla.
Aloitteleva oppija voi kuunnella säveliä erikseen ja yhdessä, vertailla E-duuria ja E-mollia
sekä kuunnella kolmea erilaista lopetusta. Kokeiltu-merkintä tallentuu vain käyttäjän omasta
painalluksesta ja sen voi perua. Kuuntelu, palaute ja merkintä eivät mittaa soittotaitoa.

Katselmointihaara `codex/soinnut-ydinopinnot-v05` perustuu [Draft-PR #133:n](https://github.com/ristotoivanen/Musiikin-kartta/pull/133)
tarkistettuun päätasoon `25712ed4655bbf54824ce6d9086f76f4ce55c1f3`.
Jatko-PR:n vertailuhaara on `claude/soinnut-harmonia-beta-integraatio`.
Cloudflare käyttää repon nykyistä Pages-integraatiota. Katselmointilinkit ovat Draft-PR:ssä.

- [Aihesivu](../../../oppi/soinnut/index.html)
- [Kuule ja kokoa sointu](../../../oppi/soinnut/kuule-ja-kokoa-sointu.html)
- [Yksi sävel muuttaa sointua](../../../oppi/soinnut/yksi-savel-muuttaa-sointua.html)
- [Mihin kappale haluaa palata?](../../../oppi/soinnut/mihin-kappale-haluaa-palata.html)

Käytössä ovat sivuston päävalikko ja aiheen paluulinkki, `study-unit`-avattava kokonaisuus,
`study-choice`-kortit, `study-steps`-sisältönavigointi, `practice`-harjoituskortti,
`study-knoppi`-lisätieto, `done-toggle`-merkintäpainike ja teoriakirjan generaattorin
`chord-diagram`-otekuvat. Korva- ja kitarakuvakkeet ovat samat kuin Ensimmäiset neljä iskua
-harjoituksessa. [Kuvakkeiden lähdenäkymä, #130](https://github.com/ristotoivanen/Musiikin-kartta/pull/130)

### Kuvakaappaukset

| Sivu | Työpöytä 1200 px | Puhelinemulaatio 390 px |
| --- | --- | --- |
| Soinnut ja harmonia | [PNG](kuvat/tyopoyta-aihesivu.png) | [PNG](kuvat/puhelin-aihesivu.png) |
| Kuule ja kokoa sointu | [PNG](kuvat/tyopoyta-kuule-ja-kokoa.png) | [PNG](kuvat/puhelin-kuule-ja-kokoa.png) |
| Yksi sävel muuttaa sointua | [PNG](kuvat/tyopoyta-duuri-ja-molli.png) | [PNG](kuvat/puhelin-duuri-ja-molli.png) |
| Mihin kappale haluaa palata? | [PNG](kuvat/tyopoyta-sointukierto.png) | [PNG](kuvat/puhelin-sointukierto.png) |

## Tekninen katselmus

| Kohde | Näyttö |
| --- | --- |
| Reitit, jatko ja paluu | Kolme suoraa harjoitusosoitetta, seuraava/edellinen, viimeisestä paluu ensimmäiseen, aihesivun paluu ja selaimen takaisinpaluu fokuksineen. Vanhat 18 URL:ia, niiden tallennetunnisteet ja laskenta todennetaan E2E-regressioissa. |
| Merkinnät | Ydinopintojen `harjoitus:`-tunnisteet ja #133:n G-pilotin `oppitunti:`-tunnisteet ovat eri. Sama selaimen `musiikin-kartta:luvut`-tallenne ja käsin peruttava merkintä. Vanhat tallenteet eivät kuittaa uusia harjoituksia. Vanhat 18 eivät muutu Ydinopintojen merkinnästä. |
| Saavutettavuus | Natiivit painikkeet ja avautuvat osiot, näkyvä fokus, tekstivastineelliset kaaviot, arvioinnin tekstipalaute, 44 px:n ⓘ ja kuuntelupainikkeet. Testit kattavat näppäimistön, saavutettavat nimet ja kortin leveyden 320/375/390/768/1200 px koossa 100 % ja 200 %. Ruudunlukijan kuulohavainnot ja koko sivun WCAG-arvio ovat avoinna. |
| Toisto | Sama #133:n sivukohtainen Web Audio -sovitus palvelee kaikkia Sointujen esimerkkejä. Uusi käynnistys katkaisee edellisen. Soivat lähteet häipyvät 25 ms:ssa ja tulevat ajastukset sekä keskeneräiset lataukset perutaan. Testattu AAC:n virhe → OGG, kahden muodon virhe → uusi yritys, nopea keskeytys sekä piilotus. Kierron näkyvä kohta seuraa `AudioContext.currentTime`-kelloa. |
| Musiikillinen sisältö | Ensimmäinen vertailu käyttää samoja äänitettyjä G3-, B3- ja D4-säveliä. Kaikki kolmen valinnat voi kuulla, ja palaute tunnistaa G–B–D:n. E/Em käyttää samaa kuuden kielen rakennetta vaihtamalla G-kielen G♯3:n G3:ksi. Kierto käyttää prototyypin G–C–D–G/C/D-äänijärjestystä ja etenemistä 2,25 sekunnin välein. |
| Mikrofoni | Harjoituksissa kuunnellaan ja valitaan painikkeilla. Mikrofoni-, äänenkorkeuden tunnistus- tai soittosuorituksen mittauskriteerejä ei sovelleta. |

### Ääninäytteet

Käytössä on 16 oikean teräskielisen kitaran kielinäytettä, joista 6 tulee #133:sta ja 10
lisättiin v0.5:een. Molemmat tiedostomuodot toimivat paikallisesti eri testipoluissa.
OGG:t tarkistettiin Metan kiinnitetyn commitin tarkisteilla ja WAV-lähteet WAV-julkaisun
tarkisteilla. Versioidut AAC-LC-tiedostot on tehty samoista WAV-lähteistä ja niillä on omat
SHA-256-tarkisteet. Oikeuksiin, kieliin ja nauhoihin liittyvät tiedot ovat lähdeasiakirjassa.
[Meta Steel Guitar ja CC0 1.0](../../../assets/audio/soinnut/LAHTEET.md)

Autokorrelaatio 0,10–0,65 sekunnin kohdalla tunnisti jokaisen 16 WAV-lähteen nimellissävelen
(ero −3,2…+16,7 senttiä tasavireestä). Aluke ylitti 5 % näytteen huipusta 4–43 ms kohdalla.
Laskennallinen näytesummien huippuraja valituilla voimakkuuksilla on noin 0,27 täydestä asteikosta
alkuperäisillä mono-WAV-arvoilla. Näytteen luonnollinen aluke, saavuttava äänenvoimakkuus ja
akustisen yhteissoinnin laatu arvioidaan vielä kuuntelemalla. E/Em:n vaihtuvan kielen alukearvio
oli molemmissa 24 ms. Tapahtuma-aikoihin ei lisätty kielikohtaista aikakorjausta.

### Käytännön testit

Kaikki alla mainitut fyysiset ja käyttäjäkokeet ovat **testaamatta** tässä katselmoinnissa.

| Ympäristö | Koe |
| --- | --- |
| iPhone/Safari, oikea laite | Kylmä lataus, ensimmäinen painallus, äänetön tila, äänenvoimakkuus, nopeasti peräkkäiset painallukset, pysäytys, lukitus, taustalle ja takaisin, Bluetooth-kuulokkeet. Kuuntelun pitää käynnistyä käyttäjän eleestä ja keskeytyä ilman kummitustoistoa. |
| Android/Chrome, oikea laite | Samaa toistosarjaa kaiuttimella ja kuulokkeilla. Tarkista pienet näytöt, kosketus sekä paluu taustalta. |
| Työpöytä ja oikea kitara | Tarkista alukkeet, vaimeneminen, äänenvoimakkuus ja luontevuus. Vertaa erityisesti E/Em:n otetta ja tärkeää G♯/G-vaihtoa sekä G-, C- ja D-lopetusten erottumista. Vertaa kitarakaaviota fyysiseen soittoon B-nimistöllä. |
| VoiceOver, TalkBack ja työpöydän ruudunlukija | Kuuntelu- ja vastausryhmien erottuminen, kysymyksen fokus, palautteen ilmoitus kerran, kaavioiden kuvailu, ⓘ-tila ja kokeiltu-merkintä. Kokeile myös suurta tekstiä ja vaakanäkymää. |
| Aloittelevan oppijan katselmus | Havainnoi, löytääkö oppija kuuntelun, kokeileeko useita valintoja ja löytääkö kuuntelu- ja vastauspainikkeet. Selvitä, kuvaileeko hän kahta lopetusta omin sanoin ja ymmärtääkö merkinnän omaksi kuittauksekseen. |

### Suunnittelukeskustelussa arvioitavat kohdat

- **Kierron rytmitys ja toisto.** Katselmointiversio säilyttää prototyypin lyhyen kertatoiston
  ja aloittaa joka kerta G:stä. Vaihtoehdot ovat pitää kertatoisto vertailun vuoksi tai arvioida
  toistuvaa kiertoa, jos oppijat tarvitsevat enemmän kuunteluaikaa. Silmukka vaikuttaisi myös
  pysäytyksen ja lopetuksen valinnan käyttöön.
- **Kierron G-ääni ja kaavio.** Soiva G säilyttää v0.5:n nelisävelisen sointiasettelun.
  ⓘ näyttää kitarakokeilun avoimen kuuden kielen G-otteen. Katselmuksessa voidaan säilyttää
  tasapaksu vertailu tai hyväksyä kaikkien kiertojen vaihtaminen kaavioiden avoimiin otteisiin.
  Jälkimmäinen muuttaisi rekisteriä ja äänen tiheyttä.
- **G-pilotin näkyvyys.** #133:n pilotin kolme suoraa harjoitusosoitetta, ankkurit ja merkinnät
  säilyvät. Pilotin kortit tulevat näkyviin suoraan pilotin ankkurista, jotta oletusnäkymässä
  on kolme sovittua Ydinopintojen harjoitusta ja aiemmat 18. Suunnittelukeskustelu voi päättää,
  tarvitaanko myöhemmin pilotille näkyvä paikka syventävässä opintopolussa.
- **Sivumalli.** Liitteen välilehtimäinen prototyyppi on sovitettu sivuston omiin
  harjoitussivuihin, joten sivulta toiselle siirryttäessä väliaikainen kuuntelu- ja valintatila
  palautuu alkuasetuksiin. Kokeiltu-merkintä säilyy. Ensiharjoitukseen palaaminen käyttää
  prototyypin Palaa alkuun -toimintoa.

### Riippuvuudet ja integraatio

- [PR #111](https://github.com/ristotoivanen/Musiikin-kartta/pull/111), `794d106a9824068fac80064244a8c850f12da5e4`,
  lisää Rytmin numeroimattoman johdannon, omat korttimerkinnät ja aloituslinkin. Aiemmat
  päällekkäisyydet painottuvat generoituun HTML:ään. Sointujen korttimerkinnät käyttävät #111:n
  tilarivin kanssa rinnakkain toimivaa merkintää.
- [Rytmi #134](https://github.com/ristotoivanen/Musiikin-kartta/pull/134),
  `a962bf6`, kehittää omaa Ydinopinnot-kokonaisuutta. Rinnakkaiset muutokset osuvat generaattoriin,
  avattavien kokonaisuuksien tyyleihin ja etenemisskriptiin. Harjoitussivun kokeiltu-merkintä
  käyttää samaa `data-study-mark`-attribuuttia.
- [#132](https://github.com/ristotoivanen/Musiikin-kartta/issues/132) on avoin rajapintaselvitys.
  [A/B/C-koe #135](https://github.com/ristotoivanen/Musiikin-kartta/pull/135) on erillisellä testipinnalla.
  Tämän haaran sointu- ja aikatapahtumat voidaan kytkeä myöhemmin sovittuun näyteadapteriin.
- Suositeltu integraatio hyväksynnän jälkeen: yhdistä #133 ja v0.5 samana Sointujen kokonaisuutena
  erillisessä integraatiotyöpuussa. Sovita #111:n johdanto yhteisiin lähteisiin ja Rytmi #134 siihen
  erillisenä sisältönä. Regeneroi oppimiskartta aina yhdistetyistä lähteistä, ja aja Sointujen ja
  Rytmin navigointi-, laskuri- ja ääniregressiot ennen mahdollista beta-päätöstä.

### Paikallinen katselmointi

```sh
npm ci
npm run build
python3 tools/playwright-server.py
```

Avaa [http://127.0.0.1:8765/oppi/soinnut/index.html#ydinopinnot](http://127.0.0.1:8765/oppi/soinnut/index.html#ydinopinnot).
Verkon Pages-testeissä tarkistetaan lisäksi kaikki neljä katselmointireittiä ja AAC/OGG-runkovastaukset.
