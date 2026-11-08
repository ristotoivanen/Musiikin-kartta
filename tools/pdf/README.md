# Tulostettava PDF

Oppaan verkkosivut ovat ainoa lähde. PDF kootaan niistä, joten tekstiä ei tarvitse ylläpitää kahdessa paikassa.

## Kokoaminen

Aja repon juuresta:

```bash
python3 tools/pdf/rakenna-pdf.py
```

PDF tallentuu tiedostoon `pdf/musiikin-kartta.pdf`. Skripti tarvitsee Pythonin (3.9 tai uudempi) ja Chromen tai Chromiumin. Jos Chrome ei löydy automaattisesti, anna sen polku `CHROME`-ympäristömuuttujalla. Valitsimella `--html polku.html` saat talteen myös kootun HTML:n, jos haluat tutkia sitä selaimessa.

## Mitä skripti tekee

- Kokoaa kannen, sisällysluettelon, osat I–V ja liitteeksi H-sävelnimen tutkielman.
- Vaihtaa ääniesimerkkien soittimet linkeiksi, jotka avaavat saman esimerkin verkkoversiosta.
- Avaa harjoitusten vastaukset näkyviin.
- Muuttaa osien väliset linkit PDF:n sisäisiksi. Linkit otelautaharjoittelijaan ja harjoitustaustoihin osoittavat osoitteeseen rinnepelto.com.
- Tulostaa PDF:n kahdesti, jotta sisällysluetteloon saadaan oikeat sivunumerot.

Sisällysluettelo luetaan sivujen `<section class="chapter">`- ja `<p class="chapter-number">`-merkinnöistä, joten uusi luku tulee mukaan automaattisesti. Uusi osa tai liite lisätään skriptin listoihin `PARTS` ja `APPENDICES`.

## Tyylit

- `book/reader.css` sisältää `@media print` -lohkon. Sen ansiosta myös yksittäinen osa tulostuu selaimesta vaaleana paperiversiona.
- `kooste.css` sisältää vain koosteen omat osat: kannen, sisällysluettelon, sivujen alatunnisteen ja osien sivunvaihdot.

Osien omat `<style>`-lohkot kootaan samaan tiedostoon. Käytä siksi eri osissa eri luokkanimiä, jos tyylit eroavat.
