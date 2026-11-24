# Ensimmäiset neljä iskua + Meta Steel: beta-pohjainen integraatioesikatselu

**Tila:** erillinen Draft-PR `beta`-haaraa vasten. Tämä muutos **ei yhdistä
mitään betaan** eikä lisää uutta sivua opiskelijoiden navigaatioon.

## Miksi tämä haara on erillinen?

M0–M3-harjoitus on edelleen Draft-PR #130:ssa, jonka haarapohja on
vanhempi kuin nykyinen beta. Meta Steelin näytekirjastopilotti on
Draft-PR #136:ssa, ja M2-sovitin #159:ssa. Aiemmassa #160:ssa on
kuuntelukoetta varten erilaisia äänenvoimakkuussäätimiä ja koepaneeleita,
joita ei tule viedä sellaisenaan oppimispolkuun.

Tämä haara koostettiin **suoraan nykyisen beta-commitin**
`d5dfd1c8bd92e204c46fd76cb493895ffb1ae1aa` päälle.
Alkuperäisen #130:n testisivun, testien ja ääniassetien Git-blobit
on tuotu **identtisinä**. Samoin Meta Steel -manifestin, 8 Vel02-näytteen
(16 OGG/AAC-assetin), lisenssin ja soitinmoottorin Git-blobit ovat
**identtiset #136:n kanssa**. M2-sovitin on identtinen #159:n kanssa.

## Mitä testataan?

- **Alkuperäinen:** `/testit/ensimmaiset-nelja-iskua.html` on #130:n
  muuttamaton M0–M3-harjoitus. Se on rinnakkainen vertailukohta.
- **Steel-kooste:** `/assets/soitinpankki/ensimmaiset-nelja-iskua-steel.html` on
  sama harjoitus, jossa vain rajatut äänenlaatuun liittyvät muutokset:
  - M0: alkuperäinen FreePats E2, kuuntelukokeen kitarataso 30 %
    alkuperäisestä (0,85 × 0,30 = 0,255). Klikki ennallaan.
  - M1: alkuperäinen klikillinen pulssiharjoitus muuttumaton.
  - **M2:** Meta Steel Guitar E2 (Vel02), mallikitaran kerroin 2,4×.
    Alkuperäinen hyväksytty B-WAV identtinen SHA-256-tarkisteella
    `d93a4373f956354ce63eb62a682125bd85710f938d70714e3abc25a28a2c8897`.
    Sen vahvistus 0,55 ja Web Audio lowshelf 90 Hz **+2 dB**, jota
    käyttäjä kuunteli hyväksi tähän nimenomaiseen harjoitukseen.
    Tämä on taajuuskorostus, **ei erillisen bassokitararaidan säätö**;
    bassorumpukin voi korostua. Sama 72 BPM:n audiokello, sisäänlasku,
    neljän soittotahdin/taukotahdin kuviot, vaimennus ja pysäytys.
  - M3: alkuperäisen B-WAV:n jatkuva soitto ja silmukka **ilman EQ:ta
    tai gain-muutoksia**.
- Jos Steel-pankin lataus epäonnistuu, M2 voi soida **FreePats-varanäytteellä**.
  Tästä annetaan näkyvä ilmoitus, ei hiljaista korvausta. Varatilaa
  ei pidetä alkuperäisen Steel-äänen kuunteluhyväksyntänä.

**Sivun sijoitus:** Steel-vertailusivu on tarkoituksella `assets/soitinpankki/`-hakemistossa, jotta #130:n alkuperäinen `testit/`-hakemistorakenne ja sen regressiotesti pysyvät muuttumattomina.

## Mitä EI tehdä

- Ei oppimiskartan tai tuotannon navigaatiomuutosta.
- Ei 375 näytteen kirjaston julkaisemista, muiden soitinäänien vaihtoa,
  Tone.js-riippuvuutta tai uutta audiokelloa.
- Ei #160:n sokkoutettuja QA-valitsimia tai mallikitaran kolmea erillistä
  säätöä oppilaan harjoitussivuun.
- Ei muuta alkuperäisen #130:n HTML-tiedostoa tai opetusmallia.
- Ei korjaa aiemmin tunnettua iOS:n AudioSession-/Bluetooth-/lukitusbugia.

## Alkuperäisen #130:n selainregression erillinen status

Ensimmäisen koosteen CI:ssä [GitHub Actions #45058104149](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/45058104149)
täysi `npm run check`, SHA-256-vertailut ja kaikki tämän koosteen
**Steel-selaintestit** läpäisivät. Alkuperäisen #130:n erikseen kopioitu
Playwright-sarja tuotti kuitenkin kuusi epäonnistumista, vaikka
**alkuperäinen HTML ja testi ovat täsmälleen samat Git-blobit** kuin #130:ssa:

- WAV-puskurin kestoa verrattiin `duration === 2` ilman dekooderin
  sallimaa numeerista toleranssia (2 epäonnistumista).
- 320/375 px:n puhelimen `showGuide`-vierityksen jälkeen
  pysäytyspainike, vaiheotsikko ja aikajana eivät mahtuneet kaikki
  vaaditusti näkyviin kolmen sekunnin aikana (4 epäonnistumista).

**Ei kuitata näitä virheitä pois eikä muuteta alkuperäistä #130:ta
ääni-integraation sivutuotteena.** Erillisessä #168:n CI-portissa
testataan uusi Steel-integraatio Chromiumilla ja WebKitillä; #130:n
täyden selainregression vihreys on **erillinen käyttöönoton este**,
kunnes alkuperäisen harjoituksen omistaja on korjannut tai käsitellyt
löydökset. Kuusi epäonnistumista on dokumentoitu #130:n ja #168:n
PR-keskusteluihin.

## Hyväksyntäportit

1. GitHub Actions: `npm run check`, kahden harjoituksen yksikkö- ja
   selaintestit Chromium desktop/phone sekä Steel-versio WebKit desktop/phone.
   Tarkista myös lähdeaudion SHA-256-identtisyys.
2. Fyysinen iPhone/Safari ja Android/Chrome: M0, M2 ja M3, tauko, pysäytys,
   taustoitus/lukitus, Bluetooth-kuulokkeet tilanteen mukaan.
3. B-säestyksen **jakelu- ja käyttöoikeus** on alkuperäisen #130:n
   README:n mukaan vahvistettava ennen testisivua laajempaa käyttöä.
   Koeversion tekninen onnistuminen ei yksin ratkaise oikeustilannetta.
4. Vasta hyväksynnän jälkeen päätetään, korvataanko vanha #130:n
   mallikitaran toteutus Steel-versiolla yhdessä oppilaalle
   näkyvässä harjoituksessa. Poista silloin rinnakkainen QA-esikatselu
   ja koeversiokohtaiset diagnostiset maininnat erillisessä siistimisessä.
5. Yhdistäminen betaan ja mainiin on erillinen käyttäjän päätös.

**Liittyvät:** PR #130 (alkuperäinen), #136 (soitinpankki),
#159 (M2-sovitin), #160 (kuuntelu- ja bassokoe), issue #132 ja #156.
