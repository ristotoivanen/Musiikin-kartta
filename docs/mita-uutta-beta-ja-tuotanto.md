# Musiikin kartta: ”Mitä uutta?” – beta ensin, tuotanto myöhemmin

**Suunnittelupäätös 18.11.2026.** Tämä dokumentti kirjaa tuotelinjauksen ja jatkotehtävät. Se **ei** anna lupaa käyttöliittymämuutoksiin, API-tunnuksiin, Git-mergeen, Cloudflare-asetusten muutoksiin tai julkaisuun.

**Seuranta:** [ensisijainen tehtävälista #54](https://github.com/ristotoivanen/Musiikin-kartta/issues/54) · [tuotantoversion oma tehtävä #112](https://github.com/ristotoivanen/Musiikin-kartta/issues/112) · [betan alkuperäinen ehdotus](https://github.com/ristotoivanen/Musiikin-kartta/issues/54#issuecomment-6959505974).

## Päätetty etenemisjärjestys

1. **Beta ensin:** MK-20261117-02:n ”Mitä uutta?” -paneeli viimeistellään, sovitetaan Clauden uudistamaan etusivuun ja testataan aidossa beta-ympäristössä erillisellä hyväksynnällä.
2. **Beta-kokemukset arvioidaan:** tiedotteen sisältö, julkaisun ajankohdan oikeellisuus, löydettävyys, saavutettavuus, mobiili ja ympäristöerottelu.
3. **Tuotantoversio omana myöhempänä julkaisunaan:** suunnittelu, Draft-PR, katselmointi, testit ja omistajan erillinen julkaisu-/merge-hyväksyntä. Ei automaattista siirtoa betasta tuotantoon.

Claude Code omistaa yhtenäisen oppimisympäristön etusivun ja navigaation uudistuksen. Codexin MK-20261117-02-työ koskee toistaiseksi julkaisutietojen teknistä käsittelyä. **Codex ei muuta etusivua tai yhteisiä käyttöliittymäkomponentteja ennen kuin Clauden uuden rakenteen liitoskohta on katselmoitu.**

## Beta: testaajille tarkoitettu tarkempi tiedote

- Oppimiskartan etusivulla hillitty, saavutettava ”Mitä uutta?” -toiminto.
- Näytetään **vain betaan todella päätyneet** muutokset, lyhyt testaustehtävä, suorat linkit ja tarpeelliset rajoitteet.
- Päivitetty-aika perustuu oikean beta-aliasta palvelevan **viimeisimmän onnistuneen Pages-deploymentin** valmistumisaikaan; ei commit-, PR- tai build-aloitusaikaan.
- Jos todellista ajankohtaa ei voida vahvistaa, näytetään hallittu varatila (”Tietoa ei saatavilla”).
- Beta-kohtaiset resurssit ja metadata eivät kuulu tuotannon eivätkä muiden preview-haarojen julkaisuartifactiin tässä ensimmäisessä vaiheessa.
- MK-20261117-02:n paikallinen prototyyppi, erillinen Pages Git-julkaisukoe ja autentikoitu Pages API -aikavarmennus on raportoitu valmiiksi. Eristetyn jatkuvan metadatalukijan käyttöönotto, käyttöliittymän integrointi ja aktiivisen betan julkaisu ovat eri, vielä hyväksymättömiä vaiheita. Kertaluonteinen Pages Read -koetunnus on omistajan ilmoituksen mukaan peruttu.

## Tuotanto: vain käyttäjälle merkittävät uudistukset

Tuotannon ”Mitä uutta?” ei ole tekninen changelog eikä uutisvirta jokaisesta deploy-kerrasta.

**Ilmoitukseen hyväksyttäviä esimerkkejä:**
- Uusi oppimiskokonaisuus tai olennainen harjoittelutapa.
- Uusi merkittävä musiikkipeli tai soiton työkalu.
- Selvästi käyttäjän toimintaa muuttava, merkittävä käytettävyys- tai navigaatiouudistus.
- Muu omistajan toimituksellisesti hyväksymä käyttäjälle tärkeä toiminnallinen muutos.

**Ei tiedoteta:** tavallisista bugikorjauksista, riippuvuuspäivityksistä, sisäisistä refaktoroinneista, pienistä tyyliviilauksista, yksittäisistä commiteista, pelkistä PR-mergeistä tai epäonnistuneista / keskeneräisistä julkaisuista.

**Näkyvyys ja käyttöliittymä:**
- Pieni ja selkeä ”Mitä uutta?” -tekstilinkki tai vastaava saavutettava infopainike. Ei automaattista pop-upia eikä oppimista hallitsevaa elementtiä.
- Uuden tiedotteen tai ”Uusi”-merkin saa näyttää **vain silloin**, kun käyttäjälle merkittävä muutos on todella julkaistu. Aiemman merkittävien muutosten historian voi silti pitää avattavissa ilman uutta ilmoitusta.
- Lyhyet selkokieliset kuvaukset siitä, mitä käyttäjä voi uutena tehdä. Linkki toiminnon kokeilemiseen tarvittaessa.
- Toimivuus mobiilissa, näppäimistöllä ja ruudunlukijalla.

**Julkaisuaika:** näytetään **sen onnistuneen tuotantojulkaisun aika, jossa tiedotteeseen hyväksytty merkittävä muutos tuli käyttöön ensimmäisen kerran**. Tämä ei saa muuttua pienen korjauksen tai muun teknisen tuotantodeployn vuoksi. Tiedote julkaistaan vasta, kun sitä vastaavan toiminnon tuotantokäyttöönotto on vahvistettu. Jos useita merkittäviä muutoksia julkaistaan erillisinä kertoina, niiden päivämäärät sidotaan omiin julkaisuihinsa.

**Toimituksellinen portti:** versionhallittu muutoskuvaus hyväksytään erikseen, yhdistetään todelliseen deploymentiin ja julkaistaan vain kyseisen ympäristön hyväksytyssä tiedoteluettelossa. Cloudflare API todentaa *milloin ja mikä versio* julkaistiin; se ei automaattisesti todista, *mitä käyttäjämerkittävää* muuttui.

## Yhteinen tekniikka, erillinen julkaisuvirta

Myöhemmin voidaan käyttää samaa palvelinpuolisen metadatan tarkistuslogiikkaa molemmille ympäristöille. **Sisältö, julkaisuidentiteetti ja näkyvyyspäätökset ovat silti erilliset.**

- Beta: testattavat julkaistut muutokset; beta-deploymentin aika.
- Tuotanto: vain toimituksellisesti hyväksytyt merkittävät julkaistut muutokset; kyseisen merkittävän uudistuksen alkuperäinen tuotantodeploymentin aika.
- Beta-kokeilut, beta-metadata, keskeneräiset toiminnot ja testaajille tarkoitetut ohjeet eivät saa vuotaa tuotantoon.
- Kun tuotantotoimintoa aikanaan toteutetaan, aiempia beta-only-erottelutestejä päivitetään **tietoisesti**: tuotantoon saa tulla sen oma rajattu tiedote, ei betan resursseja tai dataa.

## Hyväksymisportit

### Ennen betan käyttöönottoa
- [ ] Eristetyn palvelinpuolisen metadatalukijan ratkaisu ja salaisuuksien käsittely katselmoitu.
- [ ] Clauden uudistetun Oppimiskartan etusivun liitoskohta katselmoitu; ei päällekkäisiä muutoksia.
- [ ] Käyttäjälle näkyvät merkinnät vastaavat todella betassa julkaistuja muutoksia.
- [ ] Aika, alias ja SHA vahvistetaan; virheet johtavat turvalliseen varatilaan.
- [ ] Saavutettavuus, mobiili, suorat linkit ja tuotantoerottelun regressiot testattu.
- [ ] Erillinen Draft-PR, omistajan hyväksyntä ja hallittu beta-julkaisu.

### Ennen tuotannon oman ominaisuuden toteutusta
- [ ] Betan todellinen käyttö ja palaute katselmoitu.
- [ ] Merkittävyyden toimituksellinen kynnys ja julkaisuprosessi hyväksytty.
- [ ] Tuotantotiedote ja ajankohta sidotaan **merkittävän muutoksen** todelliseen julkaisuun.
- [ ] Beta- ja tuotantoresurssien erottelu testataan uudella ympäristökohtaisella mallilla.
- [ ] Oma tuotannon Draft-PR ja erillinen julkaisupäätös.

**Ei vielä toteuteta tuotannon ilmoitustoimintoa.** Seuranta: [#112](https://github.com/ristotoivanen/Musiikin-kartta/issues/112).
