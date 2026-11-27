# Sävelkorva ja melodia – Ydinopinnot: arkistointimuistio (27.11.2026)

Tämän muistion perusteella toinen istunto voi jatkaa työtä lukematta aiempaa keskustelua.

## 1. Tila yhdellä silmäyksellä

| | |
|---|---|
| PR | [#178](https://github.com/ristotoivanen/Musiikin-kartta/pull/178), Draft, base `beta`, haara `claude/116-savelkorva-ydinopinnot` |
| Toiminnallisesti lopullinen commit | `a7af747` (beta `07d8126` yhdistetty merge-commitilla `91e7cb2`). Sen jälkeen haaraan on lisätty vain dokumentaatiota. |
| Omistajan testaama versio | 2.3, `6f17abf` (harjoitusten lähdekoodi on sama kuin `a7af747`:ssä) |
| Esikatselu (`a7af747`) | https://f5d49639.musiikin-kartta.pages.dev/oppi/korva/index.html |
| Haaran esikatselualias | https://claude-116-savelkorva-ydinop.musiikin-kartta.pages.dev/oppi/korva/index.html |
| Aktiivinen kehitys | **päätetty 27.11.2026** |
| Yhdistäminen | ei betaan eikä mainiin; **odottaa erillistä lupaa** |

## 2. Päätökset

- Ominaisuuskehitys on jäädytetty. Pedagogiikkaa, melodioita ja käyttöliittymää ei muuteta ilman todettua regressiota.
- Omistajan käyttäjätesti on hyväksytty: version 2.3 harjoitukset toimivat odotetusti. Testilaitetta, selainta ja yksittäisiä testikohtia ei ole ilmoitettu.
- Uutta laajaa Sävelkorvan auditointia ei tarvita.
- Yhteisten regressioiden koordinointi tapahtuu issuessa [#213](https://github.com/ristotoivanen/Musiikin-kartta/issues/213).
- B4 (`practice.spec.ts`, Opettele) käsitellään issuessa [#211](https://github.com/ristotoivanen/Musiikin-kartta/issues/211).
- Linuxin B5–B6-virheitä (`song-d2`) **ei ole vielä todennettu puhtaalla betalla**.
- Sovittu etenemisjärjestys: **#213 → #179 → #178 → [#210](https://github.com/ristotoivanen/Musiikin-kartta/issues/210)**.
- PR #178 odottaa erillistä yhdistämislupaa.

## 3. Hyväksytty toteutus

Aiheen 04 Ydinopinnot, kolme harjoitusta: **01 Ylös, alas vai sama?**, **02 Kotiin vai kesken?**, **03 Kuule ja etsi kitaralta**. Aiemmat 14 sisältöä säilyvät samoilla osoitteilla ja tunnisteilla suljetussa osiossa.

| Tiedosto | Sisältö |
|---|---|
| `assets/melodia-ydinopinnot.js` / `.css` | logiikka, oma Web Audio -soitin, käyttöliittymä |
| `tools/oppimiskartta/sisallot/korva/*.html`, `aiheet.json`, `rakenna.py` | sisältölähteet ja generointi |
| `tests/melodia-ydinopinnot.test.ts`, `tests/e2e/savelkorva-ydinopinnot.spec.ts` | testit |
| `.github/workflows/savelkorva-116-qa.yml`, `playwright.savelkorva-116-webkit.config.ts` | CI |

Suunnittelu, versiohistoria ja korjaukset K1–K9: [suunnitteludokumentti](../../oppiminen/savelkorva-ja-melodia-116-vaihe-2.md). K1–K6 tehtiin v2.1:n auditoinnin jälkeen (v2.2, `5df1558`), K7–K9 v2.2:n uusintatestien jälkeen (v2.3, `6f17abf`).

Korjaus K9 koskee uusinnan huomiota ”vihreä palaute”, K8 löydöstä L1 (tukiääni) ja K7 huomiota ”Tarkista odottavan painalluksen aikana”. Uusintaraportin NO-GO/GO KORJAUKSIN -merkinnät kuvaavat versiota 2.2, eivät lopullista versiota.

## 4. Testitulokset ja niiden rajoitukset

### Commitilla `a7af747` (= puu, jossa toiminnallinen koodi on lopullinen)

| Ajo | Tulos |
|---|---|
| `npm run check` (macOS) | 883 testiä läpi |
| Chromium koko sarja (macOS) | 1383 läpi, 8 epäonnistui, 53 ohitettu |
| WebKit koko sarja (macOS) | 1357 läpi, 33 epäonnistui, 54 ohitettu |
| Sävelkorvan WebKit-kokoonpano (macOS) | 75 läpi, 3 ohitettu |
| CI: #117, #151 PDF, static, static-and-unit, webkit-savelkorva, Cloudflare | läpi |
| CI `chromium` (Linux), [ajo 46019310189](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46019310189) | **punainen**: 1379 läpi, 12 epäonnistui, 53 ohitettu; Sävelkorva + yhteinen UI 151 läpi |

Myöhempien dokumentaatiocommitien CI-ajot ovat erillisiä; niiden tila näkyy PR:ssä eikä muuta yllä olevaa.

### Linux-CI ja vertailu PR #179:ään

CI:n 12 epäonnistumista ovat #213:n B1–B6 desktop- ja phone-projekteissa. Samat 12 testiä (rivinumerot eroavat) kaatuivat PR #179:n ajoissa [46020872293](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46020872293) (`800a379`) ja [46021006088](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/46021006088) (`8065b07`), joissa ei ole PR #178:aa. `song-d2`:n 24 poikkeama-arvoa ovat kaikissa kolmessa ajossa samat. Vertailukohta ei ole puhdas beta. Lokiotteet: [beta-2026-11-27/](beta-2026-11-27/).

### Täydennys issueen #213

#213:n kirjauksen mukaan B1–B4 on todennettu puhtaalla betalla vain phone-projektissa. Tämän työn paikallisessa ajossa (macOS, puhdas `07d8126`) B1–B3 kaatuivat **sekä desktop- että phone-projektissa**, ja B4 toistui 36/60 ajossa ([ote](beta-2026-11-27/chromium-paikallinen.txt); palvelimena `python -m http.server`, portti 8766). Havaintoa ei ole kirjattu issueen.

### Rajoitukset

- Puhtaalla betalla ajettiin vain epäonnistuneet testit, ei koko sarjaa, eikä mitään Linuxissa.
- Äänitestit todentavat Web Audio -kutsut ja ajoituksen, eivät kuultua ääntä.
- WebKit- ja puhelintulokset ovat Playwright-emulaatiota; Xcode-simulaattori on erillinen taso.
- Useimpien beta-virheiden juurisyytä ei ole tutkittu.

## 5. Avoimet asiat ja todentamisen taso

| Asia | Taso nyt |
|---|---|
| Harjoitusten toimivuus kokonaisuutena | **omistaja testannut v2.3** (laite ilmoittamatta) |
| K1 kaksoisnapautuszoom | simulaattori v2.2; ei erikseen fyysisellä iPhonella |
| K7 Tarkista-lukitus, K8 tukiääni, K9 väri | automaattitestit; ei simulaattoria v2.3:lla; K7:n tuntuma arvioimatta |
| Äänitasapaino, 02:n tempo ja kesto | ei erikseen kuunneltu / kirjattu |
| Melodiaparit 4 ja 8 | ei erillistä kuunteluarviota |
| VoiceOver / ruudunlukija | ei testattu |
| Oikea kitara (harjoitus 03) | ei testattu |
| 320–375 px | WebKit-emulaatio, ei fyysinen laite |
| K6 generaattorin poikkeuspolut | vain yksikkötestit |
| macOS-WebKitin muut virheet (`learning-paths:518`, `song-volume-scales:22`, `visualizer:347`, `ensikeikka-toinen-ilta:294`, `practice:617/690/716`) | toistettu puhtaalla betalla tai epävakaita; **eivät kuulu #213:een, #211:een eikä muuhun tiedossa olevaan issueen** |
| Sivustonlaajuinen kaksoisnapautuszoom | #210 |
| Aiempien 14 sisällön ryhmittely ja säilytä/tiivistä-ehdotukset | #115:n päätös |

## 6. Jatkotoimet järjestyksessä

1. **#213:** B1–B6 puhtaalla betalla Linuxissa, juurisyyt, korjaukset erillisissä beta-haaroissa erillisellä luvalla (B4 = #211).
2. **#179:** sovitus päivitettyyn betaan, CI, omistajan lupa, yhdistäminen.
3. **#178:** sovitus uuteen betaan. Tilanteessa `a7af747` ↔ `8065b07` ristiriidassa olivat `tests/e2e/{aihelista,aihesivut,lukumerkinnat}.spec.ts` ja `tests/oppimiskartta-kokonaisuudet.test.ts`; #179:n muistio suosittaa sen `progress_text`-muotoa. `rakenna.py`:ssä säilytetään kaikki moduulien lataukset (Sävelnimet, Otelauta, Sävelkorva). Generoi (`python3 tools/oppimiskartta/rakenna.py`), aja `npm run check`, aihekohtaiset E2E:t ja CI; sitten erillinen yhdistämislupa.
4. **#210.**

Suositus 27.11.: **GO** #178:n sisällölle; yhdistäminen vasta sovitun järjestyksen mukaisesti ja yllä olevan sovituksen jälkeen.

## 7. Aineisto

| Aineisto | Sijainti |
|---|---|
| Alkuperäinen auditointi (v2.1, `b6ff787`) ja v2.2:n liite L1–L11, testitulokset, mittausskriptit, kuvat | [auditointi-v2.1-v2.2-2026-11-24/](auditointi-v2.1-v2.2-2026-11-24/auditointiraportti.md) |
| Erillinen uusintatestaus Xcode-simulaattorissa (v2.2, `5df1558`) | [uusinta-simulaattori-v2.2-2026-11-25/](uusinta-simulaattori-v2.2-2026-11-25/raportti-simulaattori.md) |
| Beta-yhteensopivuuden regressiovertailu | [QA-raportti](../savelkorva-178-beta-2026-11-27/raportti.md) |
| CI-lokiotteet, paikalliset vertailut | [beta-2026-11-27/](beta-2026-11-27/) |
| Luovutusraportti 27.11. (kirjoitettu ennen tätä muistiota) | [luovutusraportti](beta-2026-11-27/luovutusraportti-2026-11-27.md) |

Aineiston käsittely tallennettaessa: kuvakaappaukset on pienennetty enintään 1300 px:iin (alkuperäiset vain paikallisesti), lokien värikoodit ja paikalliset kotihakemistopolut on siivottu, ja välityspalvelimen tulosteet sekä simulaattorin UDID-tiedosto on jätetty pois. Skriptit on tallennettu näytöksi; niiden polut ja portit pitää sovittaa ennen uutta ajoa.

## 8. Paikallinen ympäristö

- Työpuu `~/src/Musiikin-kartta/worktrees/savelkorva-v23` (haara pushattu).
- Auditointityöpuu `~/src/Musiikin-kartta/audit-sk178` (detached `5df1558`; vain buildin muuttamat `*.js.map`-tiedostot).
- Paikallinen auditointiaineisto `~/src/Musiikin-kartta/git/auditoinnit/savelkorva-178-*` (ei versionhallinnassa pääpuussa).
- Mitään näistä ei ole poistettu.
