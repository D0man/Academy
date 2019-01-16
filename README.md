# Academy
Projekty wykonywane przez społeczność discorda
<<<<<<< HEAD
[helloroman](https://discordapp.com/invite/VTyJc9N)
Projekt jest we wczesnej fazie i obecne challenge sa testowe. Wszelkie sugestie propozycje pomocy mile widziane.

## Challenge #1 - Landing Page
Celem wyzwania jest wykonanie warstwy frontendowej Landing Page, zbierającego adressy e-mail osób zainteresowanych udziałem w akademii.
Stack Technologiczny do wykonania zadania to html/css/js bez zadnych frameworkow, preprocesorow.
Rozwiązanie powinno dzialać na:
=======
[helloroman](https://discordapp.com/invite/VTyJc9N)
Projekt jest we wczesnej fazie i obecne challenge są testowe. Wszelkie sugestie, propozycje pomocy mile widziane.

## Challenge #1 - Landing Page
Celem wyzwania jest wykonanie warstwy frontendowej Landing Page, zbierającego adresy mail osób zainteresowanych udziałem w akademii.
Stack Technologiczny do wykonania zadania to html/css/js bez żadnych frameworkow, preprocesorow.
Rozwiązanie powinno dzialać na:
>>>>>>> origin-mk/develop
* Chrome 58+
* Edge  16+
* Safari 10.1+
* Firefox 54+
<<<<<<< HEAD
Przycisk do wysyania formularza powinien mieć ID: LandingEmail
Wykonane zadanie należy przesylac jako pull request na branch develop.
Zwrocie uwagę na sematyke html i accessibility.

### Grafiki
[Project.pdf](/assets/Layout.pdf})
[Figma](https://www.figma.com/file/gCTf2Ux96ETR0DMxr6T2m039/LandingPage?node-id=1%3A13)
[Zeppelin](https://zpl.io/boKzeQv)
<sub> Marginesy mogą się trochę nie zgadzać dopiero się uczę figmy</sub>
#### Bonus challenge
* Wykonaj zadanie bez użycia javascriptu
* Stwórz warstwe backendowa(dowolny język) lub podepnij się do firebase
### Termin
Wstępny czas na wykonanie challenga 21.01.2019

=======
Przycisk do wysłania formularza powinien mieć ID: LandingEmail
Wykonane zadanie należy przesyłac jako pull request na branch develop.
Zwrocie uwagę na semantykę html i accessibility.

### Grafiki
[Project.pdf](/assets/Layout.pdf)
[Figma](https://www.figma.com/file/gCTf2Ux96ETR0DMxr6T2m039/LandingPage?node-id=1%3A13)
[Zeppelin](https://zpl.io/boKzeQv)
<sub> Marginesy mogą się trochę nie zgadzać, dopiero się uczę figmy</sub>
#### Bonus challenge
* Wykonaj zadanie bez użycia javascriptu
* Stwórz warstwę backendową(dowolny język) lub podepnij się do firebase
### Termin
Wstępny czas na wykonanie challenga 21.01.2019


>>>>>>> origin-mk/develop

Jak ktoś ma ochotę zrobić lepszy readme, to niech to zrobi :D

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