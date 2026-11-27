# Issue #9: ensilatauksen päätösloki (23.11.2026)

1. **Syy ensin.** Hyväksytty D2 lataa koko version ennen ensimmäistä ääntä. Simulaattorissa 420 kt/s:n yhteydellä
   37,0–37,4 s (laitteella ~36 s). Cloudflaren nopeustesti samalta verkolta 91–670 kt/s; Pagesin staattinen tiedosto ja
   Functionin MP3 yhtä hitaita → verkko, ei palvelin eikä soitin (purku ja kalibrointi < 0,5 s).
2. **Palvelinpää (vähäriskinen):** ei keinoja ensilataukseen. MP3 ei pakkaudu; Functionia ei voi ohittaa (oletussoitin
   tarvitsee Rangen); välimuistiotsakkeet koskevat vain toistuvia käyntejä, jotka ovat jo nopeita (304). Ei muutoksia.
3. **Virtalataus erillisenä moduulina** (`progressiveLoad.ts`): soittomoottoriin vain odotus ennen palan purkua,
   oletuksena pois. Kehysrakenne ennustetaan vakiokokoisista kehyksistä ja tarkistetaan otsake otsakkeelta;
   muuten koko lataus. Hylätty vaihtoehto: kasvava kehystaulukko (olisi muuttanut moottorin rakennetta ja kestoa).
4. **Aloitussääntö** mitatusta nopeudesta (× 0,8): toistoa hitaammalla yhteydellä aloitus odottaa, jottei toisto
   ohita latausta. Mitattu 45 kt/s:lla: aloitus 179,8 s, 0 odotusta.
5. **Esilataus:** arvioitu, ei toteutettu (turha liikenne, Range-jatkolatauksen lisämonimutkaisuus, hyöty ≤ 2–3 s).
6. **Vertailu hyväksyttyyn D2:een:** ajoitus, muisti, verkkoliikenne ja toiminnot samat tai paremmat; ei uusia virheitä
   kilpailutilanteissa. Uusi riski: yhteyden katkeaminen kesken soiton näkyy virheenä vasta, kun tavuja tarvitaan.
7. **Päätös:** turvallinen, mitattu parannus → erillinen Draft-PR. `4444e6a` säilyy palautuspisteenä.
