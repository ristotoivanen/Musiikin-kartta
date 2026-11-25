# #48 Sointuhaasteen lukituksen asettelun regressio (25.11.2026)

**Havainto:** julkaisu-PR #207:n testiajo ([run 45535916795](https://github.com/ristotoivanen/Musiikin-kartta/actions/runs/45535916795)) epäonnistui testissä `sointipaja-mobiiliasettelu.spec.ts:127`. Väärän vastauksen jälkeen perussävelrivi siirtyi 20 px alas (547,953 → 567,953 px), Chromium desktop ja phone.

**Toisto:** #207:n yhdistelmä (beta `794d203` + #198 + #201) ajettuna paikallisesti läpäisi testin, joten syy ei ollut koodiyhdistelmässä. CI:n tarkka luku toistui, kun leveämpi fontti simuloitiin (`body{letter-spacing:.08em}`): 547,953 → 567,953 ja palauteosan korkeus 54,39 → 74,39 px.

**Juurisyy:** pelin palautealue (`#challenge-feedback`) oli varattu kiinteästi noin kahdelle riville (`min-height: 3,4 em`). Lukitusviesti ("Väärin. Valinnat lukittu 4 sekunniksi. Yritä samaa sointua uudelleen lukituksen jälkeen.") mahtuu 402 px:n leveydellä kahdelle riville vain, jos fontti on riittävän kapea. CI:n Linux-fontilla viesti rivittyi kolmelle riville, jolloin alue kasvoi 20 px ja työnsi alla olevan otelaudan ja perussävelrivin alas. Ei johtunut fokuksesta, vierityksestä, lukitusalueen (`#challenge-lock`) korkeudesta eikä CSS:n muusta asettelusta; muissa kuin lukitustilassa viestit ovat yhden rivin mittaisia.

**Korjaus (commit `cbfef4c`):** palautealueen korkeus mitataan pelin alussa ja ikkunan koon muuttuessa pisimmän viestin (lukitusviestin) mukaan nykyisellä fontilla ja leveydellä (`reserveGameFeedback()`, noin 8 riviä). iPhonella mitta on ennallaan (kaksi riviä, entinen 3,4 em minimi säilyy), joten ulkoasu ei muutu. Testin rajaa ei löysätty (0,5 px). Testi ajetaan nyt kahdesti: normaalilla ja leveällä kirjainvälillä (`0.08em`); korjaamattomalla koodilla leveän fontin testi epäonnistuu täsmälleen CI:n luvuilla (567,953).

**Testit:**
- Chromium desktop + phone: `sointipaja-prototype`, `-challenge`, `-mobiiliasettelu` 48/48; #207:n yhdistelmässä (beta + tämä haara) sointipaja-testit läpi.
- WebKit desktop + phone: samat kolme spekkiä 48/48 (ajettu myös yhdistelmässä).
- Yhdistelmässä `osiot.spec.ts` (4 virhettä) epäonnistui paikallisesti, koska generoituja sivuja ei ollut rakennettu beta-yhdistämisen jälkeen (`build:oppimiskartta`); ei liity tähän korjaukseen, ja CI rakentaa ne ennen testiä.

**iPhone 16 Pro -simulaattori (iOS 27.2, Mobile Safari, oikeat kosketukset, uusi simulaattori A2BCEF57):** peli, väärä vastaus, lukitus ja lukituksen päättyminen. Otelaudan yläreuna samassa kohdassa (931 px kuvakaappauksessa) ennen lukitusta, lukituksen aikana ja sen jälkeen (R1–R3); lukitusviesti 2 rivillä, ei siirtymää. Tämä ei todenna leveämmän fontin tilannetta Safarilla (sen kattaa Playwright-testi) eikä korvaa fyysistä iPhonea.

**Huomio:** simulaattori `C473C410…` poistui kesken työn, ja työkalun oletuslaite oli toisen session simulaattori (`Sävelnimet #116`). Siihen ehti kohdistua kolme napautusta ja yksi pyyhkäisy ennen virheen huomaamista; en käyttänyt sitä enää, ja loin oman laitteen testeille.
