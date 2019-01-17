## Od MK

Strona testowana pod kątem większości wiodących rozdzielczości, oraz ok. 100 przeglądarek mobilnych oraz desktopowych z wynikiem pozytywnym ok. 75/100.
### Testy obejmowały:
* ok. 10 przestarzałych przeglądarek desktopowyche(brak wparcia CSS3 lub wsparcie w ograniczonym stopniu)
* ok. 5 przeglądarek tekstowych
* ok. 10 przestarzałych przeglądarek mobilnych
* ok. 30 przeglądarek mobilnych
* ok. 45 przeglądarek desktopowych

### Testy w 5 różnych rozdzielczościach z wynikiem pozytywnym:
* 370/500 wliczając przeglądarki przestarzałe oraz tekstowe
* 370/375 na przeglądarkach wspierających CSS3 w stopniu przynajmniej dobrym

### Testy dla wymaganych przeglądarek:
* Chrome 58+ - testowane dla Chrome 51+ z wynikiem pozytywnym w każdej rozdzielczości
* Edge  16+ - testowane dla Edge 16+ z wynikiem pozytywnym
* Safari 10.1+ - testowane dla Safari 9+ z wynikiem pozytywnym
* Firefox 54+ - testowane dla Firefox 54+ z wynikiem pozytywnym

### Baza danych:
Skrypt `mailPushing.php':
* wymagana baza MySQL
* wymagana tabela codeacademy
* struktura tabeli:
`id - primary`
`email - unique`