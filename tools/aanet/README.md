# Ääniesimerkkien generaattori

Kirjan ääniesimerkit renderöidään selaimessa harjoitustaustojen soittimilla. Kitara ja harppu syntetisoidaan Karplus–Strong-menetelmällä, ja mukana ovat sama basso, rummut, kaiku ja kompressori kuin harjoitustaustoissa. Näin kaikki esimerkit kuulostavat samalta ja niiden voimakkuus on tasattu samaan tasoon.

## Tiedostot

- `esimerkit.js` – jokainen esimerkki nuotteina, otteina ja rytmeinä. Muokkaa tätä, kun haluat muuttaa esimerkkiä.
- `index.html` – generaattori. Esimerkit voi kuunnella yksitellen ennen tallennusta.
- `palvelin.py` – paikallinen palvelin, joka tallentaa renderöidyt äänet kansioon `assets/audio`.

## Uudelleenrenderöinti

Tarvitset macOS:n, koska palvelin muuntaa äänet `afconvert`-työkalulla.

1. Käynnistä palvelin repon juuresta: `python3 tools/aanet/palvelin.py`
2. Avaa selaimessa `http://127.0.0.1:8766/tools/aanet/`
3. Kuuntele muuttamasi esimerkki **Kuuntele**-painikkeella. Tallenna se rivin **Tallenna**-painikkeella, tai kaikki kerralla painikkeella **Tallenna kaikki**.

Palvelin tekee jokaisesta esimerkistä AAC-tiedoston (`.m4a`, 128 kbit/s, stereo) ja varalle mono-WAV-tiedoston (24 kHz). Kirjan sivut käyttävät molempia `<source>`-elementeillä.

Kun muutat esimerkkiä, tarkista että kirjan tekstin kuvaus pitää edelleen paikkansa: esimerkiksi tempo, sointujen järjestys, lähtöiskujen määrä ja melodian aloitussävel.
