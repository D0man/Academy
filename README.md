demo of my version - http://vizman.ayz.pl/01-Landing-Page/

﻿# Academy
Projekty wykonywane przez społeczność discorda
[helloroman](https://discordapp.com/invite/VTyJc9N)
Projekt jest we wczesnej fazie i obecne challenge są testowe. Wszelkie sugestie, propozycje pomocy mile widziane.

## Challenge #1 - Landing Page
Celem wyzwania jest wykonanie warstwy frontendowej Landing Page, zbierającego adresy mail osób zainteresowanych udziałem w akademii.
Stack Technologiczny do wykonania zadania to html/css/js bez żadnych frameworkow, preprocesorow.
Rozwiązanie powinno dzialać na:
* Chrome 58+
* Edge  16+
* Safari 10.1+
* Firefox 54+
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



Jak ktoś ma ochotę zrobić lepszy readme, to niech to zrobi :D

## Challenge #2 - Header + Home Page
Zadanie typowo frontendowe, zostało podzielone na 3 mini zadania i jednego bonusowego, tym razem widok tylko w jednej wersji mobilnej aby utrwalić podejście mobile first, a nie dlatego, że mi się nie chciało robić...
Jako że większośc z was próbowała stosować BEM w swoim CSSie jest to dziś oficjalna metodologia naszych challengy.
Zadania:
* Przygotuj Header strony
Zawiera logo i przycisk menu, przycisk ma zmieniac swoj wyglad gdy menu jest aktywne.
Menu ma zawierać linki które na razie prowadzą do #.
Zarówno przycisk jak i menu mają być animowane
Zadanie można wykonać zarówno z pomocą javascriptu jak i przy pomocy tzw. checkbox hack.
Staraj się w jak najlepszy sposób odwzorować grafikę, nawet jak wydaje sie brzydka
* Przygotuj sekcje strony zgodnie z załączoną grafiką.
Sekcja ma zawierać 3 checkboxy w których można zaznaczać postępy zadań.
* Javascript
Pierwsze zadania do którego wykonania niezbędne jest wykorzystania Javascriptu.
Do sekcji z poprzedniego zadania należy podpiąc skrypt, który będzie pokazywał czas do ukończenia zadania(10.02.2019 23:59:59)
Czas ma odmierzać dni jeżeli do końca zadania zostało więcej niż 48 godzin.
Jeżeli zostało mniej niż 48 godzin, sekcja ma pokazywać czas w formacie gg:mm:ss, wyswietlany czas ma miec kolor czerwony i ma sie zmieniac na bieżąco.
* Bonus zadanie
Napisz kod przy użyciu sassa i nowoczesnego javascriptu, zapoznaj się z narzędziami typu webpack,parcel,gulp, npm script i zaimplementuj je w wykonaniu zadania.
### Grafiki
Na razie tylko figma
[Figma](https://www.figma.com/file/bgjopxy8ZV8tWyxm0koix0wg/Header?node-id=0%3A1)
### Termin
Wstępny czas na wykonanie challenga 10.02.2019
### Porada
BEM jest koncepcją nazwienictwa, ale nie tylko klass cssowych. Polega on na tym ze dzielimi klasy na bloki, elementy i modyfikatory.
Bloki są samodzielnymi elementami strony, oznacza to, że jeżeli możemy coś wyjąć i włożyć w dowolne miejsce na stronie, będzie wyglądać tak samo jak wcześniej. Elementy są elemntami bloku, które jednak nieco różnią się stylem od głownego bloku, nie powinno się ich wyjmować z bloku. Modyfikatory służa tylko do drobnych zmian wizualnych można stosować zarówno do elementów jak i bloków.
Dobra analogią może być np. prosta budowa człowieka. Blokiem w takim przypadku będzie ręka, elementem, łokieć a modyfikatorem lewa, palce natomiast beda juz oddzielnym elementem bo moga sie pojawic zarowno u rak jak i u nog - maja wlasne elementy np paznokncie imoga miec swoje modyfikatory np.brudne.
.reka-> -> reka__lokiec -> reka__lokiec--lewy
.palec -> palec__paznokiec --> palec__paznokiec--brudny