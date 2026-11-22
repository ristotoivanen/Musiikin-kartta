# GitHubin haarat ja PR:t 16.11.2026

> **Ajantasaisuuslisäys 16.11.2026, vaiheen 2 tarkistus.** Alla olevat yksittäisten haarojen ahead/behind-luvut ja PR-tilat ovat alkuperäisen `beta f7a204b` -inventoinnin historiallinen kuva. GitHubin myöhempi `main` on `68b8a77`, `beta` on `f9964c5` ja niiden vertailu on **2/81** (ensin vain mainissa, sitten vain betassa). Uusin tarkistus palautti **60 GitHub-haaraa, 29 avointa PR:ää ja 28 avointa issuea**. [PR #83](https://github.com/ristotoivanen/Musiikin-kartta/pull/83) yhdistettiin betaan 16.11.2026; tämän inventaarion alempana oleva avoin #83-rivi on siis **vanhentunut**. #57–#61, #64 ja #65:n kärjet sisältyvät nykyiseen betan historiaan, mutta PR:t ovat yhä avoimia. #62/#63 ja aktiiviset Ensikeikka-/Riffikaiku-pinot vaativat erillisen delta- ja riippuvuusarvion ennen sulkemista tai yhdistämistä. [Uusin tarkistuspiste ja paikallisten worktreeiden rajaukset](auditointi.md#ajantasainen-tarkistuspiste-16112026--vaihe-16).


Lähteet ovat GitHubin PR- ja check-run-rajapinnat ja Git-refit ennen auditointihaaran luontia. Vertailun vasen luku kertoo pohjan yksinomaiset commitit, oikea haaran yksinomaiset commitit. Commit-ero ei mittaa toiminnallista eroa. Suljetun PR:n yhdistäminen ei yksin todista, että nykyinen haarakärki on tallella.

## Avoimet PR:t

| PR | Pohja → pää | Beta/PR | PR-tila ja raportoidut check-runit | Katselmoinnit API:ssa |
| --- | --- | --- | --- | --- |
| [#34](https://github.com/ristotoivanen/Musiikin-kartta/pull/34) | `beta` → `docs/beta-julkaisuvalmius` `b454601e` | 88/1 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#37](https://github.com/ristotoivanen/Musiikin-kartta/pull/37) | `beta` → `feature/mobiili-k2-k7` `a019e9a2` | 84/6 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#38](https://github.com/ristotoivanen/Musiikin-kartta/pull/38) | `feature/mobiili-k2-k7` → `feature/pentatoniset-melodiat-p2-p3` `9c379812` | 84/11 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#39](https://github.com/ristotoivanen/Musiikin-kartta/pull/39) | `feature/pentatoniset-melodiat-p2-p3` → `feature/savelkorva-kuuntelu` `513e7d78` | 84/17 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#40](https://github.com/ristotoivanen/Musiikin-kartta/pull/40) | `beta` → `docs/seuraava-kehitysversio` `6d173ee6` | 84/2 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46) | `beta` → `feature/otelauta-savelvalinnan-aani-ja-jatkokehitys` `5d741eee` | 72/5 | Auki · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53) | `beta` → `docs/yhtenainen-oppimisrakenne-2026-11` `23427b86` | 72/9 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#57](https://github.com/ristotoivanen/Musiikin-kartta/pull/57) | `prototype/oppimisen-aihealueet-aloitus` → `codex/oppimiskartta-vakautus-1` `ec153952` | 40/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#58](https://github.com/ristotoivanen/Musiikin-kartta/pull/58) | `prototype/oppimisen-aihealueet-aloitus` → `codex/otelautaopas-alavalikko` `d48d90fa` | 40/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#59](https://github.com/ristotoivanen/Musiikin-kartta/pull/59) | `prototype/oppimisen-aihealueet-aloitus` → `codex/ensikeikka-yhtenainen-tehtava` `f1b1e1ca` | 40/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#60](https://github.com/ristotoivanen/Musiikin-kartta/pull/60) | `prototype/oppimisen-aihealueet-aloitus` → `codex/riffikaiku-aloitus` `a0bc88ee` | 40/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) | `prototype/oppimisen-aihealueet-aloitus` → `codex/oppimiskartta-integraatio` `e897f862` | 31/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#62](https://github.com/ristotoivanen/Musiikin-kartta/pull/62) | `codex/oppimiskartta-integraatio` → `prototype/oppimiskartta-omasivurakenne` `3a985d12` | 31/60 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#63](https://github.com/ristotoivanen/Musiikin-kartta/pull/63) | `codex/oppimiskartta-integraatio` → `prototype/oppimiskartta-omille-sivuille` `f210a74a` | 31/103 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#64](https://github.com/ristotoivanen/Musiikin-kartta/pull/64) | `codex/riffikaiku-aloitus` → `feature/riffikaiku-harjoitus-ja-peli` `ce78b17e` | 37/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#65](https://github.com/ristotoivanen/Musiikin-kartta/pull/65) | `codex/oppimiskartta-aihesivut` → `codex/kitaran-perusteet` `49865f8a` | 24/0 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66) | `main` → `docs/ensikeikka-kehityspolku-2026-11` `723255e0` | 72/11 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#67](https://github.com/ristotoivanen/Musiikin-kartta/pull/67) | `main` → `docs/sointujen-maailma-oppimispolku-20261115` `ad1b32d4` | 72/4 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#70](https://github.com/ristotoivanen/Musiikin-kartta/pull/70) | `beta` → `docs/rytmin-oppimispolku-2026-11` `8656f276` | 0/2 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#73](https://github.com/ristotoivanen/Musiikin-kartta/pull/73) | `main` → `docs/oppimiskartan-aiheiden-laajennus-2026-11` `83e7d3ce` | 72/3 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#74](https://github.com/ristotoivanen/Musiikin-kartta/pull/74) | `beta` → `docs/kitaran-perusteet-lahtoruutu-20261115` `35249744` | 0/3 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#75](https://github.com/ristotoivanen/Musiikin-kartta/pull/75) | `feature/riffikaiku-harjoitus-ja-peli` → `feature/riffikaiku-peli-harjoittelu` `ec50a94d` | 36/1 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#76](https://github.com/ristotoivanen/Musiikin-kartta/pull/76) | `feature/ensikeikka-toinen-ilta` → `claude/kotikulman-ensikeikka` `23ebb3db` | 25/9 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#77](https://github.com/ristotoivanen/Musiikin-kartta/pull/77) | `beta` → `docs/rytmin-mikrofoniarvio-2026-11` `7a1f0d34` | 0/1 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#80](https://github.com/ristotoivanen/Musiikin-kartta/pull/80) | `claude/kotikulman-ensikeikka` → `claude/ensitreenit-lopetusjarjestys` `ceb5aa88` | 25/11 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#81](https://github.com/ristotoivanen/Musiikin-kartta/pull/81) | `feature/riffikaiku-peli-harjoittelu` → `feature/riffikaiku-korvakuulo` `625b9823` | 36/2 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#83](https://github.com/ristotoivanen/Musiikin-kartta/pull/83) | `beta` → `codex/kitaran-perusteet-lahtosivu` `3afff747` | 0/4 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |
| [#85](https://github.com/ristotoivanen/Musiikin-kartta/pull/85) | `beta` → `docs/rytmin-oss-auditointi-2026-11` `bef04078` | 0/1 | Draft · ei check-runia | ei kirjattuja review-tapahtumia |
| [#86](https://github.com/ristotoivanen/Musiikin-kartta/pull/86) | `claude/ensitreenit-lopetusjarjestys` → `claude/banditreenit` `10bfe3fe` | 25/13 | Draft · Cloudflare Pages success | ei kirjattuja review-tapahtumia |

Cloudflare-rivi osoittaa esikatselun. Se ei osoita yksikkö-, selain- tai fyysisen laitteen kokeita. Review-sarake kuvaa GitHub-tapahtumia, eikä ratkaise käyttäjän tuotantohyväksyntää.

## Suljetut PR:t

| PR | Tila | Kohde | Otsikko |
| --- | --- | --- | --- |
| [#1](https://github.com/ristotoivanen/Musiikin-kartta/pull/1) | Yhdistetty 2026-11-10 | `main` | Yhdistä FretEcho-kitaraharjoittelija Musiikin karttaan |
| [#2](https://github.com/ristotoivanen/Musiikin-kartta/pull/2) | Yhdistetty 2026-11-11 | `main` | Korjaa kitaraharjoittelijan vihjeet, mikrofoni ja tilastointi |
| [#3](https://github.com/ristotoivanen/Musiikin-kartta/pull/3) | Yhdistetty 2026-11-12 | `main` | Kitaraharjoittelijan neljä oppimispolkua, Otelautakartta ja kappaleharjoittelu |
| [#4](https://github.com/ristotoivanen/Musiikin-kartta/pull/4) | Yhdistetty 2026-11-12 | `feature/kitaraharjoittelija-oppimispolut` | Kappaleharjoittelijan soinnut, sanoitukset ja muistiharjoituksen vaikeustasot |
| [#11](https://github.com/ristotoivanen/Musiikin-kartta/pull/11) | Yhdistetty 2026-11-12 | `beta` | Lisää A-mollipentatonisen positio 2 Skaalat ja moodit -polkuun |
| [#12](https://github.com/ristotoivanen/Musiikin-kartta/pull/12) | Yhdistetty 2026-11-12 | `beta` | Lisää positioiden 1 ja 2 yhdistämisharjoitus |
| [#13](https://github.com/ristotoivanen/Musiikin-kartta/pull/13) | Yhdistetty 2026-11-12 | `beta` | Lisää A-mollipentatonisen positio 3 yhdistämisharjoituksen jälkeen |
| [#14](https://github.com/ristotoivanen/Musiikin-kartta/pull/14) | Yhdistetty 2026-11-12 | `beta` | Tunnista pentatonisen mallisävelten mykäksi jäävä käynnistys |
| [#15](https://github.com/ristotoivanen/Musiikin-kartta/pull/15) | Yhdistetty 2026-11-12 | `beta` | Korjaa positioiden 1 ja 2 mallisoitto kattamaan koko asteikko |
| [#16](https://github.com/ristotoivanen/Musiikin-kartta/pull/16) | Yhdistetty 2026-11-12 | `integration/main-iphone-fixes-into-beta` | Integroi mainin iPhone- ja Range-korjaukset beta-pohjaan |
| [#17](https://github.com/ristotoivanen/Musiikin-kartta/pull/17) | Yhdistetty 2026-11-12 | `beta` | Yhdistä tuotannon iPhone-tahdistuskorjaukset betan skaalaharjoituksiin |
| [#18](https://github.com/ristotoivanen/Musiikin-kartta/pull/18) | Yhdistetty 2026-11-13 | `main` | Julkaise pentatonisen positiot 2–3 ja yhdistämisharjoitus tuotantoon |
| [#19](https://github.com/ristotoivanen/Musiikin-kartta/pull/19) | Yhdistetty 2026-11-13 | `beta` | Lisää erillinen moodien oppimispolku (C-jooninen ja A-aiolinen) |
| [#20](https://github.com/ristotoivanen/Musiikin-kartta/pull/20) | Yhdistetty 2026-11-13 | `beta` | Moodiharjoituksissa asteikko kerran, poista turha mallifraasi |
| [#21](https://github.com/ristotoivanen/Musiikin-kartta/pull/21) | Yhdistetty 2026-11-13 | `beta` | Dokumentoi melodialähtöinen oppimispolku ja tekijänoikeusselvitetyt sävelmäehdokkaat |
| [#22](https://github.com/ristotoivanen/Musiikin-kartta/pull/22) | Yhdistetty 2026-11-13 | `beta` | Beta: rytmilliset perinnemelodiat pentatoniseen ja C-jooniseen |
| [#23](https://github.com/ristotoivanen/Musiikin-kartta/pull/23) | Yhdistetty 2026-11-13 | `main` | Yhtenäinen päävalikko ja kevyempi Musiikin teoria -aloitusnäkymä |
| [#24](https://github.com/ristotoivanen/Musiikin-kartta/pull/24) | Yhdistetty 2026-11-13 | `beta` | Beta: avattavat melodiaharjoitukset ja sävelten näyttö otelaudalla |
| [#25](https://github.com/ristotoivanen/Musiikin-kartta/pull/25) | Yhdistetty 2026-11-13 | `beta` | Yhtenäinen navigaatio ja Musiikin teoria -näkymä betaan |
| [#26](https://github.com/ristotoivanen/Musiikin-kartta/pull/26) | Yhdistetty 2026-11-13 | `fix/melodiaharjoitukset-otelauta-ja-avattavat` | Integroi uusin beta-navigaatio melodiaharjoitusten korjaushaaraan |
| [#27](https://github.com/ristotoivanen/Musiikin-kartta/pull/27) | Yhdistetty 2026-11-13 | `beta` | Beta: siirrä pidempi melodia muistiharjoitukseen, jätä improvisointi omaksi vaiheekseen |
| [#28](https://github.com/ristotoivanen/Musiikin-kartta/pull/28) | Yhdistetty 2026-11-13 | `beta` | Otelautaoppaan graafinen uudistus |
| [#29](https://github.com/ristotoivanen/Musiikin-kartta/pull/29) | Yhdistetty 2026-11-13 | `beta` | Tyylitiedostojen versiotunnisteet välimuistiongelman estämiseksi |
| [#32](https://github.com/ristotoivanen/Musiikin-kartta/pull/32) | Yhdistetty 2026-11-13 | `beta` | Lisää Kappaleharjoittelijaan Lataa MP3 -linkki |
| [#33](https://github.com/ristotoivanen/Musiikin-kartta/pull/33) | Yhdistetty 2026-11-13 | `beta` | Mobiili PR 1: soiva sävel näkyviin (K1) ja teoriasivun skriptivirhe (K6) |
| [#35](https://github.com/ristotoivanen/Musiikin-kartta/pull/35) | Yhdistetty 2026-11-13 | `beta` | iPhone: kappalesoittimen äänenvoimakkuussäädin GainNoden kautta |
| [#36](https://github.com/ristotoivanen/Musiikin-kartta/pull/36) | Yhdistetty 2026-11-13 | `main` | Julkaise testattu beta tuotantoon 13.11.2026 |
| [#41](https://github.com/ristotoivanen/Musiikin-kartta/pull/41) | Yhdistetty 2026-11-14 | `beta` | Beta: yhdistä Riffikaiku ja Ensikeikka Kitaraharjoitteluun |
| [#42](https://github.com/ristotoivanen/Musiikin-kartta/pull/42) | Yhdistetty 2026-11-14 | `main` | Julkaise nykyinen testattu beta tuotantoon 14.11.2026 |
| [#55](https://github.com/ristotoivanen/Musiikin-kartta/pull/55) | Yhdistetty 2026-11-15 | `beta` | Prototyyppi: etusivulle kahdeksan oppimisen aihealuetta |

## Kehityshaarat

| Haara ja kärki | Beta/haara | Main/haara | Päähaarana PR:issä | Avoimien PR:ien pohjana | Ehdotettu käsittely |
| --- | --- | --- | --- | --- | --- |
| `beta` `f7a204bf` | 0/0 | 2/72 | [#18](https://github.com/ristotoivanen/Musiikin-kartta/pull/18), [#26](https://github.com/ristotoivanen/Musiikin-kartta/pull/26), [#36](https://github.com/ristotoivanen/Musiikin-kartta/pull/36), [#42](https://github.com/ristotoivanen/Musiikin-kartta/pull/42) | [#34](https://github.com/ristotoivanen/Musiikin-kartta/pull/34), [#37](https://github.com/ristotoivanen/Musiikin-kartta/pull/37), [#40](https://github.com/ristotoivanen/Musiikin-kartta/pull/40), [#46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46), [#53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53), [#70](https://github.com/ristotoivanen/Musiikin-kartta/pull/70), [#74](https://github.com/ristotoivanen/Musiikin-kartta/pull/74), [#77](https://github.com/ristotoivanen/Musiikin-kartta/pull/77), [#83](https://github.com/ristotoivanen/Musiikin-kartta/pull/83), [#85](https://github.com/ristotoivanen/Musiikin-kartta/pull/85) | Säilytä · julkaisupohja |
| `claude/banditreenit` `10bfe3fe` | 25/13 | 2/60 | [#86](https://github.com/ristotoivanen/Musiikin-kartta/pull/86) | – | Aktiivinen · katselmoi ja sovita vain delta |
| `claude/ensitreenit-lopetusjarjestys` `ceb5aa88` | 25/11 | 2/58 | [#80](https://github.com/ristotoivanen/Musiikin-kartta/pull/80) | [#86](https://github.com/ristotoivanen/Musiikin-kartta/pull/86) | Aktiivinen · katselmoi ja sovita vain delta |
| `claude/kotikulman-ensikeikka` `23ebb3db` | 25/9 | 2/56 | [#76](https://github.com/ristotoivanen/Musiikin-kartta/pull/76) | [#80](https://github.com/ristotoivanen/Musiikin-kartta/pull/80) | Aktiivinen · katselmoi ja sovita vain delta |
| `codex/ensikeikka-yhtenainen-tehtava` `f1b1e1ca` | 40/0 | 2/32 | [#59](https://github.com/ristotoivanen/Musiikin-kartta/pull/59) | – | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `codex/kitaran-perusteet` `49865f8a` | 24/0 | 2/48 | [#65](https://github.com/ristotoivanen/Musiikin-kartta/pull/65) | – | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `codex/kitaran-perusteet-lahtosivu` `3afff747` | 0/4 | 2/76 | [#83](https://github.com/ristotoivanen/Musiikin-kartta/pull/83) | – | Aktiivinen · katselmoi ja sovita vain delta |
| `codex/oppimiskartta-aihesivut` `f1fe5e4f` | 25/0 | 2/47 | – | [#65](https://github.com/ristotoivanen/Musiikin-kartta/pull/65) | Säilytä vertailuksi · betassa, #65:n PR-pohja |
| `codex/oppimiskartta-integraatio` `e897f862` | 31/0 | 2/41 | [#61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) | [#62](https://github.com/ristotoivanen/Musiikin-kartta/pull/62), [#63](https://github.com/ristotoivanen/Musiikin-kartta/pull/63) | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `codex/oppimiskartta-vakautus-1` `ec153952` | 40/0 | 2/32 | [#57](https://github.com/ristotoivanen/Musiikin-kartta/pull/57) | – | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `codex/otelautaopas-alavalikko` `d48d90fa` | 40/0 | 2/32 | [#58](https://github.com/ristotoivanen/Musiikin-kartta/pull/58) | – | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `codex/riffikaiku-aloitus` `a0bc88ee` | 40/0 | 2/32 | [#60](https://github.com/ristotoivanen/Musiikin-kartta/pull/60) | [#64](https://github.com/ristotoivanen/Musiikin-kartta/pull/64) | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `docs/beta-julkaisuvalmius` `b454601e` | 88/1 | 18/1 | [#34](https://github.com/ristotoivanen/Musiikin-kartta/pull/34) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/ensikeikka-kehityspolku-2026-11` `723255e0` | 72/11 | 0/9 | [#66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/kitaran-perusteet-lahtoruutu-20261115` `35249744` | 0/3 | 2/75 | [#74](https://github.com/ristotoivanen/Musiikin-kartta/pull/74) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/melodiaharjoitusten-suunnitelma` `45eeb751` | 158/0 | 88/0 | [#21](https://github.com/ristotoivanen/Musiikin-kartta/pull/21) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `docs/oppimiskartan-aiheiden-laajennus-2026-11` `83e7d3ce` | 72/3 | 0/1 | [#73](https://github.com/ristotoivanen/Musiikin-kartta/pull/73) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/rytmin-mikrofoniarvio-2026-11` `7a1f0d34` | 0/1 | 2/73 | [#77](https://github.com/ristotoivanen/Musiikin-kartta/pull/77) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/rytmin-oppimispolku-2026-11` `8656f276` | 0/2 | 2/74 | [#70](https://github.com/ristotoivanen/Musiikin-kartta/pull/70) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/rytmin-oss-auditointi-2026-11` `bef04078` | 0/1 | 2/73 | [#85](https://github.com/ristotoivanen/Musiikin-kartta/pull/85) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/seuraava-kehitysversio` `6d173ee6` | 84/2 | 14/2 | [#40](https://github.com/ristotoivanen/Musiikin-kartta/pull/40) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/sointujen-maailma-oppimispolku-20261115` `ad1b32d4` | 72/4 | 0/2 | [#67](https://github.com/ristotoivanen/Musiikin-kartta/pull/67) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `docs/yhtenainen-oppimisrakenne-2026-11` `23427b86` | 72/9 | 2/9 | [#53](https://github.com/ristotoivanen/Musiikin-kartta/pull/53) | – | Aktiivinen dokumentaatio · katselmoi erikseen |
| `feature/css-versiot` `be6f4f83` | 100/0 | 30/0 | [#29](https://github.com/ristotoivanen/Musiikin-kartta/pull/29) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/ensikeikka-toinen-ilta` `6fca4564` | 25/2 | 2/49 | – | [#76](https://github.com/ristotoivanen/Musiikin-kartta/pull/76) | Säilytä · #76:n pohja, kaksi omaa committia yli jäädytyksen |
| `feature/kitaraharjoittelija-oppimispolut` `d2a1d6b2` | 213/0 | 143/0 | [#3](https://github.com/ristotoivanen/Musiikin-kartta/pull/3) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/lataa-mp3` `e3fbe034` | 96/0 | 26/0 | [#32](https://github.com/ristotoivanen/Musiikin-kartta/pull/32) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/melodiset-pilotit-pentatoninen-ja-jooninen` `4adcbeb9` | 140/0 | 70/0 | [#22](https://github.com/ristotoivanen/Musiikin-kartta/pull/22) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/mobiili-k2-k7` `a019e9a2` | 84/6 | 14/6 | [#37](https://github.com/ristotoivanen/Musiikin-kartta/pull/37) | [#38](https://github.com/ristotoivanen/Musiikin-kartta/pull/38) | Sovita tuoreeseen betaan erillisessä integraatiohaarassa |
| `feature/mode-learning-journey-v1` `32569afd` | 175/0 | 105/0 | [#19](https://github.com/ristotoivanen/Musiikin-kartta/pull/19) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/otelauta-savelvalinnan-aani-ja-jatkokehitys` `5d741eee` | 72/5 | 2/5 | [#46](https://github.com/ristotoivanen/Musiikin-kartta/pull/46) | – | Sovita tuoreeseen betaan erillisessä integraatiohaarassa |
| `feature/otelautaopas-ulkoasu` `1663e0d7` | 115/0 | 45/0 | [#28](https://github.com/ristotoivanen/Musiikin-kartta/pull/28) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/pentatoniset-melodiat-p2-p3` `9c379812` | 84/11 | 14/11 | [#38](https://github.com/ristotoivanen/Musiikin-kartta/pull/38) | [#39](https://github.com/ristotoivanen/Musiikin-kartta/pull/39) | Sovita tuoreeseen betaan erillisessä integraatiohaarassa |
| `feature/riffikaiku-harjoitus-ja-peli` `ce78b17e` | 37/0 | 2/35 | [#64](https://github.com/ristotoivanen/Musiikin-kartta/pull/64) | [#75](https://github.com/ristotoivanen/Musiikin-kartta/pull/75) | Korvattu yhdistämistarpeena · pää on betan historiassa |
| `feature/riffikaiku-korvakuulo` `625b9823` | 36/2 | 2/38 | [#81](https://github.com/ristotoivanen/Musiikin-kartta/pull/81) | – | Aktiivinen · katselmoi ja sovita vain delta |
| `feature/riffikaiku-peli-harjoittelu` `ec50a94d` | 36/1 | 2/37 | [#75](https://github.com/ristotoivanen/Musiikin-kartta/pull/75) | [#81](https://github.com/ristotoivanen/Musiikin-kartta/pull/81) | Aktiivinen · katselmoi ja sovita vain delta |
| `feature/savelkorva-kuuntelu` `513e7d78` | 84/17 | 14/17 | [#39](https://github.com/ristotoivanen/Musiikin-kartta/pull/39) | – | Sovita tuoreeseen betaan erillisessä integraatiohaarassa |
| `feature/scale-bridge-positions-1-2` `d7acccbd` | 214/10 | 144/10 | [#12](https://github.com/ristotoivanen/Musiikin-kartta/pull/12) | – | Säilytä toistaiseksi · tarkista squash/patch ja sivukärki |
| `feature/scale-journey-position-2` `5159a517` | 219/4 | 149/4 | [#11](https://github.com/ristotoivanen/Musiikin-kartta/pull/11) | – | Säilytä toistaiseksi · tarkista squash/patch ja sivukärki |
| `feature/scale-journey-position-3` `df051908` | 211/6 | 141/6 | [#13](https://github.com/ristotoivanen/Musiikin-kartta/pull/13) | – | Säilytä toistaiseksi · tarkista squash/patch ja sivukärki |
| `feature/yhtenainen-navigaatio` `d3a8e3ad` | 188/0 | 118/0 | [#23](https://github.com/ristotoivanen/Musiikin-kartta/pull/23) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `feature/yksi-sointu-sointukartta` `33687852` | 228/0 | 158/0 | [#4](https://github.com/ristotoivanen/Musiikin-kartta/pull/4) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/harjoittelija-auditointi` `5007d9a2` | 406/0 | 336/0 | [#2](https://github.com/ristotoivanen/Musiikin-kartta/pull/2) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/iphone-aanenvoimakkuus` `da65bf9e` | 86/0 | 16/0 | [#35](https://github.com/ristotoivanen/Musiikin-kartta/pull/35) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/melodiaharjoitukset-otelauta-ja-avattavat` `3dc1eabf` | 118/0 | 48/0 | [#24](https://github.com/ristotoivanen/Musiikin-kartta/pull/24) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/melody-memory-full-no-part-choice` `4223ed0e` | 105/0 | 35/0 | [#27](https://github.com/ristotoivanen/Musiikin-kartta/pull/27) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/mobiili-soiva-savel` `d9aaa7e5` | 90/0 | 20/0 | [#33](https://github.com/ristotoivanen/Musiikin-kartta/pull/33) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/modes-one-shot-scale-no-phrase` `43455cc1` | 163/0 | 93/0 | [#20](https://github.com/ristotoivanen/Musiikin-kartta/pull/20) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `fix/scale-audio-startup-feedback` `8ea8b237` | 208/4 | 138/4 | [#14](https://github.com/ristotoivanen/Musiikin-kartta/pull/14) | – | Säilytä toistaiseksi · tarkista squash/patch ja sivukärki |
| `fix/scale-bridge-full-two-positions` `96121cd6` | 205/5 | 135/5 | [#15](https://github.com/ristotoivanen/Musiikin-kartta/pull/15) | – | Säilytä toistaiseksi · tarkista squash/patch ja sivukärki |
| `integration/beta-snapshot-20261115` `f7a204bf` | 0/0 | 2/72 | – | – | Säilytä · jäädytetty vertailupiste |
| `integration/fretecho` `0d048179` | 415/0 | 345/0 | [#1](https://github.com/ristotoivanen/Musiikin-kartta/pull/1) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `integration/main-iphone-fixes-into-beta` `2c189358` | 192/0 | 122/0 | [#17](https://github.com/ristotoivanen/Musiikin-kartta/pull/17) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `integration/yhtenainen-navigaatio-beta` `de3af682` | 135/0 | 65/0 | [#25](https://github.com/ristotoivanen/Musiikin-kartta/pull/25) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `main` `68b8a772` | 72/2 | 0/0 | [#16](https://github.com/ristotoivanen/Musiikin-kartta/pull/16) | [#66](https://github.com/ristotoivanen/Musiikin-kartta/pull/66), [#67](https://github.com/ristotoivanen/Musiikin-kartta/pull/67), [#73](https://github.com/ristotoivanen/Musiikin-kartta/pull/73) | Säilytä · julkaisupohja |
| `preview/ensikeikka-ja-riffikaiku` `31395895` | 75/0 | 5/0 | [#41](https://github.com/ristotoivanen/Musiikin-kartta/pull/41) | – | Myöhempi arkistointiehdokas · commit säilyy |
| `prototype/oppimisen-aihealueet-aloitus` `5af29bdb` | 41/0 | 2/31 | [#55](https://github.com/ristotoivanen/Musiikin-kartta/pull/55) | [#57](https://github.com/ristotoivanen/Musiikin-kartta/pull/57), [#58](https://github.com/ristotoivanen/Musiikin-kartta/pull/58), [#59](https://github.com/ristotoivanen/Musiikin-kartta/pull/59), [#60](https://github.com/ristotoivanen/Musiikin-kartta/pull/60), [#61](https://github.com/ristotoivanen/Musiikin-kartta/pull/61) | Myöhempi arkistointiehdokas · commit säilyy |
| `prototype/oppimiskartta-omasivurakenne` `3a985d12` | 31/60 | 2/101 | [#62](https://github.com/ristotoivanen/Musiikin-kartta/pull/62) | – | Säilytä vertailuun · vaihtoehtoiset toteutukset |
| `prototype/oppimiskartta-omille-sivuille` `f210a74a` | 31/103 | 2/144 | [#63](https://github.com/ristotoivanen/Musiikin-kartta/pull/63) | – | Säilytä vertailuun · vaihtoehtoiset toteutukset |

Mahdollisen poiston ehdot: tarkista päätöshetkellä kärjen säilyminen, avoimet PR-riippuvuudet, julkaisuviitteet ja mahdollinen agentin työ. Vaihtoehtoisille ja squash-mergeä käyttäneille haaroille tarvitaan sisältövertailu.

## Issuet

| Issue | Tila | Aihe |
| --- | --- | --- |
| [#5](https://github.com/ristotoivanen/Musiikin-kartta/issues/5) | Auki | Otelautakartta: Intervallit / Sormitus -näyttötavan valinta sointuotteille |
| [#6](https://github.com/ristotoivanen/Musiikin-kartta/issues/6) | Auki | Improvisaatio: kolme sävelnäyttöä ja vanhan asteikon sävelharjoituksen poistaminen |
| [#7](https://github.com/ristotoivanen/Musiikin-kartta/issues/7) | Auki | Kappaleharjoittelija: Täydet soinnut / Power-soinnut -valinta |
| [#8](https://github.com/ristotoivanen/Musiikin-kartta/issues/8) | Suljettu | Kappaleiden musiikillinen laadunvarmistus: tahdit, soinnut ja MP3-tasot |
| [#9](https://github.com/ristotoivanen/Musiikin-kartta/issues/9) | Auki | Julkaisuvalmistelut: PR-riippuvuudet, äänitiedostot ja lopputestaus |
| [#10](https://github.com/ristotoivanen/Musiikin-kartta/issues/10) | Auki | Kappaleharjoittelija: Sormitusboksit ja näyttöasetukset Skaalat ja moodit -osioon |
| [#30](https://github.com/ristotoivanen/Musiikin-kartta/issues/30) | Auki | Kuunteluharjoitukset: paikanna sävel ja tunnista moodien erot (UI-auditoinnin jälkeen) |
| [#31](https://github.com/ristotoivanen/Musiikin-kartta/issues/31) | Auki | Pentatonisen positioiden 2–3 melodiset harjoitukset (mobiiliauditoinnin jälkeen) |
| [#43](https://github.com/ristotoivanen/Musiikin-kartta/issues/43) | Auki | Kitaraharjoittelija: soita valittu sävel Etsi sävelet otelaudalta -harjoituksessa |
| [#44](https://github.com/ristotoivanen/Musiikin-kartta/issues/44) | Auki | Otelautaopas: poista tarpeeton Otelautakartta / Otelaudan harjoitukset -alavalikko |
| [#45](https://github.com/ristotoivanen/Musiikin-kartta/issues/45) | Auki | Oppimisarkkitehtuuri: viimeistele auditoinnin päätökset ja pilotoi soittamalla alkava polku |
| [#47](https://github.com/ristotoivanen/Musiikin-kartta/issues/47) | Auki | Ensikeikka: yhdistä kappaleen kuuntelu ja lopetusten valinta samaan näkymään |
| [#48](https://github.com/ristotoivanen/Musiikin-kartta/issues/48) | Auki | Sointipaja: rakenna avosoinnuista barré- ja seiskasointuihin etenevä oppimispeli |
| [#49](https://github.com/ristotoivanen/Musiikin-kartta/issues/49) | Auki | Oppimisjaksojen yhteinen logiikka: teoria, pelit ja kitaraharjoitukset |
| [#50](https://github.com/ristotoivanen/Musiikin-kartta/issues/50) | Auki | Säveljahti: muuta sävelten etsintä alueittain eteneväksi otelautapeliksi |
| [#51](https://github.com/ristotoivanen/Musiikin-kartta/issues/51) | Auki | Riffikaiku: korjaa tai poista aloituksen staattinen Aloita tästä / Jatka -kortti |
| [#52](https://github.com/ristotoivanen/Musiikin-kartta/issues/52) | Auki | Skaalat ja moodit: yhdistä pelilliset ja oikean kitaran tehtävät samaan oppimisjaksoon |
| [#54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) | Auki | Oppimisuudistus – etenemisjärjestys, tehtävälista ja hyväksymisportit |
| [#56](https://github.com/ristotoivanen/Musiikin-kartta/issues/56) | Auki | Codex: pitkä itsenäinen työjakso Oppimiskartan vakautukseen ja rajattuihin korjauksiin |
| [#68](https://github.com/ristotoivanen/Musiikin-kartta/issues/68) | Auki | Mollibluesasteikko: yhteinen asteikkologiikka, Otelautaopas ja harjoitukset |
| [#69](https://github.com/ristotoivanen/Musiikin-kartta/issues/69) | Auki | Rytmi ja komppi: kuuntele, rakenna ja soita erilaisia säestysrytmejä |
| [#71](https://github.com/ristotoivanen/Musiikin-kartta/issues/71) | Auki | Oppimiskartan aiheiden hallittu laajennus: 3 uutta teemaa ja tyhjien aiheiden estäminen (myöhemmin) |
| [#72](https://github.com/ristotoivanen/Musiikin-kartta/issues/72) | Auki | Kitaran perusteet: lyhyt kertaus ilman harjoituksia ennen Oppimiskarttaa |
| [#78](https://github.com/ristotoivanen/Musiikin-kartta/issues/78) | Auki | Ensitreenit 1–9: arvo lopetusten A/B/C-järjestys myös normaalissa etenemisessä |
| [#79](https://github.com/ristotoivanen/Musiikin-kartta/issues/79) | Auki | Bänditreenit 1–9: kaksi treenikertaa, Ensikeikka omaksi kokonaisuudeksi vasta kun valmis |
| [#82](https://github.com/ristotoivanen/Musiikin-kartta/issues/82) | Auki | Rytmi: avoimen lähdekoodin hyödyntämisauditointi (Codex, ei toteutusta) |
| [#84](https://github.com/ristotoivanen/Musiikin-kartta/issues/84) | Auki | Yhteiset soittotyökalut: metronomi ja viritin erikseen sekä harjoituksiin upotettuina |
| [#87](https://github.com/ristotoivanen/Musiikin-kartta/issues/87) | Auki | Äänenlaatu: aidot soitinnäytteet perusharjoituksiin, Suno keikkabiiseihin ja taustoihin |
