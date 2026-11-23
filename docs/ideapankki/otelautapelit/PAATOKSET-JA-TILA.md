# Otelautapeli-ideoiden päätösloki – 24.11.2026

**Tarkoitus:** tämän keskustelun arkistoinnin jälkeen kaikki olennaiset päätökset löytyvät Gitistä. **Ei koodin toteutus-, yhdistämis- tai julkaisuvaltuutusta.**

## Säveljahti

Kohderyhmä: noin 1–2 vuotta kitaraa soittaneet, joilla on sointujen, riffien tai asteikkokuvioiden osaamista mutta epäröintiä sävelten nimissä tai sijoittumisessa otelaudalle. Pelialueet **0–5 ja 0–12**; kaikki kuusi kieltä ja vapaat kielet heti mukana.

**Päätetty:** alkuvaiheen Karttajahti (etsi kaikki paikat), Sävelketju (pelaajan valinta vaikuttaa jatkoon) ja Korjaa kartta (korjaa väärä nuotti) vertailtiin. **Sävelketju B** valittiin jatkosuunnitteluun. V1.0:ssa pelaaja löytää yhden paikan, seuraava johtolanka syntyy automaattisesti; kaksi perhettä: sama sävelnimi ja sävelnimen vaihto. Kolme löydön ketju on normaali. Jokainen kosketus soittaa todellisen kieli/nauha-MIDI-korkeuden, myös väärä, aiempi ja valmis löytö. Ei pisteitä, ajastinta, pakollisia etenemislukituksia eikä mikrofonia.

**Teknisen auditoinnin BLOCKER:** generaattori saa näyttää vihjeen vain, kun **jokaisesta sen kelvollisesta oikeasta vastauksesta** on mahdollinen jatko luvattuun loppuun. Yhden onnistuvan polun löytyminen ei riitä. Vaihtuvan nimen ketjussa nimi vaihtuu oikeasti. V1.0:ssa huomioidaan myös paikka→nimi, kielikohtaiset tehtävät, fyysisen kitaran piilotettu tehtävä ja selkeä palaute.

**Pedagoginen kritiikki:** kaksi kiinnostavuusauditointia antoi pedagogiikalle 6 ja 6,5/10 sekä pelillisyydelle 5 ja 4,5/10 (tekoälyjen teoreettiset arviot, eivät pelaajatutkimusta). Mekaniikka uhkaa jäädä kolmen peräkkäisen kysymyksen sarjaksi. Vaikeammat nauhat 6–12 voi ohittaa valitsemalla vain tuttuja paikkoja. Pelkkä ruutujen laskeminen ei osoita oikean otelaudan hallintaa.

**V1.1 on SUOSITUS, EI päätetty lopullinen toteutus:** Sävelsilta-tyyppinen B-pulma. Kun pelaaja on löytänyt alkusävelen, hän näkee yhden koko musiikillisen tavoitteen ja ratkaisee jäljellä olevat kaksi suhdetta haluamassaan järjestyksessä, jos molemmat ovat mahdollisia. Automaattinen johtolanka toimii apuna eikä estä muuta oikeaa ratkaisua. Esimerkki 0–5: B-kieli/1=C4 → G-kieli/5=C4 (sama korkeus) ja A-kieli/3=C3 (oktaavia matalampi); jälkimmäiset voi löytää missä järjestyksessä tahansa. Alkusävelen muuttuessa tehtävä rakennetaan uudelleen, ei anneta mahdotonta vihjettä.

**Lisäsuosituksia:** kieleen kohdistuvat pulmat (”Etsi C D-kieleltä”), 0–12-kierroksella ylempien nauhojen tarkoituksellinen käyttö, N1-nimitunnistus, lyhyt opittua suhdetta selittävä palaute, istunnon aikainen muistipaluu ja vapaaehtoinen ”Kitara kädessä” -tila kesken ratkaisun. Ei väitettä soiton todentamisesta.

**Olemassa:** A/B-HTML-prototyyppi (A vaiheittaiset johtolangat, B koko pulma), kuusi A/B-kierrosta sekä kolme 0–5-lisäharjoitusta; [erillinen A/B-pilottipaketti](saveljahti/AB-PILOTTI.md). **Ei tehtyä oikeiden kitaristien käyttäjäkoetta eikä A/B-voittajaa.**

## Sävelverkko

**Erillinen oma harjoitus:** yhden tutun C:n napauttaminen avaa kaikkien C-paikkojen verkon. Säveljahti ja Sävelverkko eivät ole automaattisesti yksi peli. Alkuperäinen nimi Oktaavipolku hylättiin liian kapeana; Sävelverkko kuvaa samaa sävelnimeä eri kielillä ja oktaaveissa.

**Uusin hyväksytty aluepäätös 0–12 ja 0–24**, aiempi 0–5 poistettu nimenomaan Sävelverkosta. Tutki verkkoa = koko verkko heti valinnasta; Rakenna muistista = löydöt ja yhteydet paljastuvat vähitellen. Vihreä yhtenäinen = sama todellinen soiva MIDI-korkeus; keltainen katkoviiva = täsmälleen yhden oktaavin eli 12 puolisävelaskelen ero. Viivat ovat kulmikkaita näyttämään muotoja. Paksu E on ylhäällä ja ohut e alhaalla; kaksi kieltä kohti ohuempia +2 nauhaa (E→D, A→G) tai +3 (D→B, G→e) näyttää tyypillisen oktaavimuodon. Saman korkeuden vihreät yhteydet **säilytetään**, ei korvata keltaisilla. Lähiyhteyksiä suositaan viivaviidakon sijaan. Uusin [HTML-prototyyppi](savelverkko/PROTOTYYPPI-KULMAYHTEYDET.html) on arkistossa.

**Ei vahvistettu:** 0–24-verkon lopullinen viivamäärä, oikean iPhonen käytettävyys ja ääni, todellinen opittu otelautataito tai siirto betaan.

## Muut ideat

- **Karttajahti:** nimettyjen sävelten kaikki paikat; liian lähellä vanhaa seitsemän sävelen kertauspeliä.
- **Korjaa kartta:** virheellisen sävelmerkinnän tunnistaminen ja korjaaminen; alustava idea.
- **Suora kielikohtainen sävelkarttahaaste:** ”Etsi G D-kieleltä” / ”Mikä sävel on B-kielen 3. nauhalla?”; hyvä harjoitus, yksin helposti mekaaninen.
- **Riffin muuttoreitti:** kahden–kolmen sävelen riffin siirtäminen eri kieli-/oktaaviasemaan; mahdollinen myöhempi soveltava harjoitus.
- **Kitara ensin:** piilota virtuaalinen vastaus ja kokeile fyysisellä kitaralla ennen vahvistamista; Säveljahdissa vain vapaaehtoinen tila.
- **Sävelsilta:** Säveljahdin B-kierrosmallin työnimi, ei vielä oma Musapelit-kortti.

## Tekninen ja toiminnallinen rajaus

Säilytä vanha seitsemän luonnollisen sävelen kertaus ja suora osoite. Uudelle Säveljahdille oma Musapelit-aloitus/paluu. Harkittu uudelleenkäyttö: `harjoittelija/music.ts`, `Board`, `ReferencePlayer`; älä yhdistä PR #179:n vastakkaisia kieli-indeksejä suoraan (harjoittelijan 0 on ohut e, PR #179:n 0 paksu E). Ei uutta yleistä äänimoottoria tai koko sivuston pelimoottoria ilman lupaa.

**Seuraava käyttäjälähtöinen työ:** Säveljahdin A/B-kokeilu 5–6 soittajalla (jatkohalu, itsenäinen päättely, uusi paikannus oikealla kitaralla); Sävelverkon kulmaverkon käytettävyyden ja oppimisen testaus. Yhteensopivuus, VoiceOver, 320/360/390 px, 200 % suurennus sekä fyysinen iPhone Safari/Bluetooth testataan ennen mahdollisia julkaisuja.

**Älä yhdistä mitään PR:ää, muuta beta-/main-sisältöä tai julkaise prototyyppejä tämän arkiston perusteella.**