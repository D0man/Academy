# Academy
Projekty wykonywane przez społeczność discorda
[helloroman](https://discordapp.com/invite/VTyJc9N)
Projekt jest we wczesnej fazie i obecne challenge sa testowe. Wszelkie sugestie propozycje pomocy mile widziane.

## Challenge #1 - Landing Page
Celem wyzwania jest wykonanie warstwy frontendowej Landing Page, zbierającego adressy e-mail osób zainteresowanych udziałem w akademii.
Stack Technologiczny do wykonania zadania to html/css/js bez zadnych frameworkow, preprocesorow.
Rozwiązanie powinno dzialać na:
* Chrome 58+
* Edge  16+
* Safari 10.1+
* Firefox 54+
Przycisk do wysyania formularza powinien mieć ID: LandingEmail
Wykonane zadanie należy przesylac jako pull request na branch develop.
Zwrocie uwagę na sematyke html i accessibility.

### Grafiki
[Project.pdf](/assets/Layout.pdf.pdf})
[Figma](https://www.figma.com/file/gCTf2Ux96ETR0DMxr6T2m039/LandingPage?node-id=1%3A13)
[Zeppelin](https://zpl.io/boKzeQv)
<sub> Marginesy mogą się trochę nie zgadzać dopiero się uczę figmy</sub>
#### Bonus challenge
* Wykonaj zadanie bez użycia javascriptu
* Stwórz warstwe backendowa(dowolny język) lub podepnij się do firebase
### Termin
Wstępny czas na wykonanie challenga 21.01.2019



Jak ktoś ma ochotę zrobić lepszy readme, to niech to zrobi :D

### Struktura
Podzieliłem projekt na:
* backend
* frontend
* server

Dlaczego? Poniewaz, kazda z tych czesci projektu mozna reuzyc. Przykladowo warstwa frontendu. To jest tylko jedna strona z jakims formularzem i wyslaniem danych tego formularza w jakies miejsce.
Dlatego doszedl <b>serwer</b>, ktory obsluguje dane przychodzace z tego formularza i gdzies je zapisuje.
Dodatkowo jest <b>backend</b>, ktory ma byc panelem admina. On rowniez nie musi byc na tej samej domenie co frontend i serwer. Rownie dobrze nigdzie nie musi byc serwowany, bo admin moze miec to narzedzie po prostu lokalnie.

