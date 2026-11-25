# Omistajan käyttäjätestausohje (Otelauta, PR #179, viimeistelty)

**Haara:** `claude/116-otelauta-auditointikorjaukset` · **Testaa puhelimella (Safari), pystyasennossa; kitara käsillä jos mahdollista.**
Esikatseluosoitteet ovat raportin loppuosassa (`raportti-luovutus.md` / pääkeskustelun luovutus).

## Mitä korjattiin (katso erityisesti)
1. **Suunnat:** väärän vastauksen ruudussa on nuoli ja nauhamäärä. ↑ = kohti satulaa (kohti kitaran päätä), ↓ = kohti tallaa. Sanat sanovat saman asian.
2. **04:n viimeinen löytö:** kun löydät viimeisen sävelen, napauttamasi ruutu ei saa hypätä eikä jäädä Safarin alapalkin alle.
3. **02:n paikkavalinta laudan alaosassa:** valitun paikan ruudussa näkyy ✓ tai ✗ ja sävel, ja laudan alla on lyhyt tulosrivi.

## Kokeile (noin 10 minuuttia)
| Harjoitus | Tee näin | Odotettu |
|---|---|---|
| **01 Sama sävel toiselta kieleltä** | Napauta väärää ruutua laudan ylä- ja alaosasta. | Ruudussa `↓3`/`↑4` jne.; teksti ”Siirry N nauhaa kohti tallaa/satulaa”. Soita kitaralla: onko suunta oikein? Oikea vastaus → Uusi tehtävä laudan alta avaa uuden tehtävälauseen ruudun yläreunaan. |
| **02 Kuule ja löydä oktaavi** | Valitse suhde (kuuntele ensin). Valitse sitten paikka **laudan alaosasta** napauttamalla. | Ruudussa `✓`/`✗`+sävel, rivi laudan alla (voi vaatia pienen vierityksen). Pidempi selitys ylhäällä. Vastausta ei paljasteta ennen valintaa. |
| **03 Etsi perussävel E- ja A-kieleltä** | Vastaa väärin kahdesti nimeämistehtävässä; kokeile etsintätehtävää väärällä paikalla. | Virheteksti ohjaa päättelyyn (”kohti satulaa/tallaa”), ei kerro vastausta. Näytä vastaus -merkki on neutraali. |
| **04 Liiku otelaudalla** | Löydä kaikki sävelet; kokeile viimeisenä lautaa ylhäältä, keskeltä ja alhaalta. Kokeile myös ”Kaikki kuusi kieltä”. | Viimeisen napautuksen jälkeen ruutu pysyy paikallaan; ”✓ Kaikki N löytyi”, Kuuntele löydetyt ja Uusi sävel näkyvät. |

## Kerro palautteessa
- Onko ”kohti satulaa / kohti tallaa” selkeä kitaristille vai pitäisikö sanoa toisin (esim. ”kohti kitaran päätä / kohti kitaran runkoa”)?
- Hyppäsikö jokin ruutu tai meniko jokin napautus väärään soluun?
- Peittyikö jokin painike tai teksti Safarin alapalkin alle?
- Ymmärsitkö virheen ilman palautetekstin lukemista?
- Kuulostaako ääni oikealta laitteen kaiuttimella (matalat sävelet)? *(Fyysinen laite, ei vielä testattu.)*

## Tiedossa (ei bugeja tähän vaiheeseen)
- 03: kiintopistenauhalla toinen virhe antaa saman tekstin (N8).
- Vaaka → pysty kesken harjoituksen palauttaa sivun alkuun (N9).
- iPhone 17e:llä Safarin alapalkki peittää hetkeksi 02:n kolmannen suhdepainikkeen; vierittämällä se on käytettävissä (N10).
- Vaaka-asennossa lauta täyttää vain vasemman osan.
- Avoinna: VoiceOver, fyysisen iPhonen kuuntelutesti, oikean kitaran käyttäjäkoe, 400 % reflow, vähennetty liike.
