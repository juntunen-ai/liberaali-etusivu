# Liberaalipuolue – verkkosivuston HTML-malli

Interaktiivinen ulkoasuluonnos. Ei puolueen virallinen sivusto. Tilattu julkaistavaksi GitHub Pagesissa.

## Käyttö

Avaa `index.html` tai `liberaali-etusivu.html`. Paikallinen palvelin: `python3 -m http.server 8765`.

HTML-sivut generoidaan `python3 build.py` -komennolla. Ulkoasu on tiedostossa `assets/style.css`; pienet selainvuorovaikutukset tiedostossa `assets/main.js`. Sivujen pääsisältö toimii myös ilman JavaScriptiä.

## Sivut

Etusivu, tavoitteet, kolme teemasivua, ihmiset ja viisi henkilöesittelyä, keitä olemme, tarinaosio ja haastattelupohja, ajankohtaista, osallistuminen, lähteet ja mallin kuvaus.

## Aineisto ja rajaukset

- Graafinen manuaali: https://liberaalipuolue.fi/wp-content/uploads/2017/11/Liberaalipuolue_Graafinen_Manuaali.pdf
- Verkkovärit ja alkuperäiset logot: https://liberaalipuolue.fi/media/
- Raleway (paikallinen fontti, SIL OFL 1.1): Google Fonts; lisenssi `assets/font-license.txt`.
- Henkilökuvat ja tehtävät: https://liberaalipuolue.fi/puoluehallitus/ (tarkistettu 29.10.2026).
- Poliittiset tiivistelmät ovat toimituksellisia luonnoksia; hyväksytty ohjelma: https://liberaalipuolue.fi/puolueohjelma/
- Historialähteet ja täydelliset lähdelinkit: `tietoa-mallista.html`.
- Ei keksittyjä henkilöhaastatteluja, sitaatteja, tapahtumia tai vaikutuslukuja.
- Ei lomaketietojen keruuta, analytiikkaa, evästeitä tai ulkoisia fonttipyyntöjä.
- GitHub Pages -julkaisu on julkinen. Hakukoneita pyydetään jättämään luonnos indeksoimatta.

Logot ja kuvat säilyvät niiden oikeudenhaltijoiden aineistona. Ne ovat tässä tilatussa uudistusluonnoksessa, eikä niille myönnetä uutta käyttöoikeutta.

## Julkaisu

GitHub Pages: `main`-haaran juurikansio. `.nojekyll` poistaa Jekyll-käsittelyn. Julkaisukansio sisältää vain mallisivuston aineistoa.
