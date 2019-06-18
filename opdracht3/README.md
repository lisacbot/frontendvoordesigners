# Frontend voor designers

## Het vak
In het vak Frontend voor Designers leer je hoe je met HTML en CSS, en een beetje Javascript, snel en eenvoudig prototypes kan maken om je ontwerp ideeën te testen in een browser. We gaan animeren, responsive layouts uitproberen en interactie coderen ...

## Opdracht 3
Voor opdracht 3 ga je een functionaliteit ontwerpen met externe data, en testen. De data is JSON die met een REST API van een externe bron wordt ingeladen met Javascript. Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

## Use Case
We mochten zelf beslissen welke externe date we wilden gaan inladen en hoe we dit wilden vormgeven. Ik heb gekozen voor een 'Eenvoudige film database met JSON data movies.json.' Dit is een data api die zes verschillende films bevat. 

## Criteria
- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De data wordt van een externe bron ingeladen met Javascript
- In de demo maak je gebruik van meerdere verschillende UI events zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
- Verschillende states van de UI stack worden opgevangen en zijn vormgegeven.
- In de demo dien je rekening te houden met de interface design principles 04, 09 en 11 van Principles of User Interface Design.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github

## Principles of User Interface Design
### 04 - Keep users in control
Dit principe beschrijft dat gebruikers in controle moeten blijven. "Humans are most conformable when they feel in control of themselves and their environment." Dan voelen zij zich namelijk het meest confortabel. Het is het best om zo veel mogelijk informatie aan de gebruiker te geven om verwarring te voorkomen. Als je dit doet, dan gebeurt er dat. De gebruiker moet in controle blijven.

In mijn ontwerp heb ik hier zeker rekening meer gehouden. De gebruiker is in controle aangezien hij de keuze heeft over zes buttons. Bij het laden van de pagina worden eerst alle films getoont. Vervolgens heeft de gebruiker de keuze om een genre te kiezen en is hij dus helemaal in controle over de content die hij wilt zien.

### 09 - Appearance follows behavior
Dit principe beschrijft dat mensen het meest confortabel zijn als dingen zich gedragen op de manier dat wij verwachten dat ze zich gedragen. Als iets zich consistent gedraagd hebben het gevoel dat we een goede relatie ermee hebben. Dus; "Design elements should look like how they behave." En; "Form follows function."

Ook heb ik met dit principe rekening gehouden. Met de buttons op de pagina kan de gebruiker een actie uitvoeren. Het was dus heel belangrijk dat ik deze buttons zó ontworp dat ze zich als goede buttons zouden gedragen. In mijn uiteindelijke ontwerp heb ik hier zeker rekening mee gehouden. De buttons geven geen valse signalen af en gedragen zich als goede buttons.

### 11 - Strong visual hierarchies work best
Dit principe beschrijft de beste manier waarop er visuele hiërarchie gecreëerd wordt. Dit gebeurd wanneer gebruikers het zelfde item steeds in de zelfde volgorde te zien krijgen. De dikte en grootte van elemementen speelt hier een hele grote rol. Een slappe visuele hiërarchie zorgt voor verwarring en een opgepropt gevoel.

Met een goede visuele hierarchie van het ontwerp heb ik rekening gehouden. De titel van het document staat boven. Het geeft meer informatie aan de gebruiker over wat hij kan doen op de pagina. Vervolgens staan de buttons daar onder. Dat is waar de gebruiker zijn acties kan uitvoeren. De resulaten van die acties van de gebruiker (de films) staan weer daaronder.

## Breakdown schets

## Versie 1.0
Het eerste stadium van het ontwerp maken hield in dat ik de juiste data ingeladen moets krijgen. Ik heb veel geprobeerd. Aan het begin lukte het mij niet om drie verschillende onderdelen (H2, img en p) in te laden van één bepaalde film (array). Ik kreeg bijvoorbeeld alleen maar alle titels onder elkaar, maar niet gecombineerd met de andere elementen. Ik heb hulp gekregen en het is mij daarna wel gelukt met dit stukje code: 

```
function populateHeader(jsonObj) {
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myUl = document.createElement('ul');
    var myImg = document.createElement('img');

    myH2.textContent = jsonObj['title'];
    myImg.src = jsonObj['cover'];

    myArticle.appendChild(myH2);
    myArticle.appendChild(myImg);

    var directors = jsonObj['directors'];
    for (var i = 0; i < directors.length; i++) {
        var myList = document.createElement('li');

        myList.textContent = directors[i].name;
        myUl.appendChild(myList);
    }
    myArticle.appendChild(myUl);
    section.appendChild(myArticle);


}
```

Het resultaat is hieronder te vinden. Op de afbeelding is het niet goed te zien maar de de juiste data wordt in de pagina geladen.

**Versie 1.1:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/Schermafbeelding%202019-06-12%20om%2010.11.42.png?raw=true "Afbeelding 1")

Dit is een screenshot van het 'Inspecteren' scherm, waar de elementen te zien zijn.

**Versie 1.2:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/Schermafbeelding%202019-06-12%20om%2011.31.33.png?raw=true "Afbeelding 2")


Vervolgens heb ik een beetje css eraan toegevoegd. Dat gaf dit resultaat.

**Versie 1.3:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/Schermafbeelding%202019-06-12%20om%2010.12.46.png?raw=true "Afbeelding 3")


## Versie 2.0
Op dat moment laadde alle data in de pagina zodra de gebruiker op de pagina terecht kwam. De knoppen werkte echter nog niet. Na veel geprobeerd te hebben en hulp die ik heb gekregen is het gelukt. Elke button geeft het bijpassende genre met films weer aan de gebruiker. Het is gelukt door middel van de ze code:
```
var buttonEen = document.querySelector('button:nth-of-type(1)');
buttonEen.onclick = function () {
    filter('Horror');
    document.getElementsByTagName('BODY')[0].style.backgroundColor = "red";
}
```
Ik heb voor elke button deze functie aangemaakt. Hiermee heb ik de genres uit de api opgehaald.

Vervolgens heb ik een andere functie geschreven met twee loops daarin. Hier worden uit alle films de genres opgehaald waar vervolgens de specifieke genres uit worden gehaald die ik net met de vorige functie had benoemd. Dat ziet er zo uit:

```
function filter(f) {
    //document.getElementsByTagName('BODY')[0].style.backgroundColor = "yellow";
    section.innerHTML = '';
    var films = request.response;
    for (var i = 0; i < films.length; i++) {
        console.log(films[i].genres);
        for (var j = 0; j < films[i].genres.length; j++) {
            if (films[i].genres[j] == f) {
                populateHeader(films[i]);
            }
        }
    }
}
```

Alle buttons werkten op dat moment!! Met elke button werden de films met de bijbehorende genre ingeladen.

Het ondwerp was op dat moment nog niet helemaal zoals ik het in gedachten had. Ik ben verder gaan werken aan de styling van het ontwerp. Ik heb elke pagina/genre een andere kleur gegeven. Ik vond dit erg leuk omdat de pagina's hierdoor speels over komen. Dit zijn de pagina's geworden:

**Horror:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/horror.png?raw=true "Afbeelding 4")

**Crime:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/crime.png?raw=true "Afbeelding 4")

**Thriller:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/thriller.png?raw=true "Afbeelding 4")

**Drama:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/drama.png?raw=true "Afbeelding 4")

**Action:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/action.png?raw=true "Afbeelding 4")

**Adventure:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht3/v1/img/adventure.png?raw=true "Afbeelding 4")

## Keyboard controls
De styling was op dat moment voor mij afgerond. Wel wilde ik heel graag verschillende UI events verwerkt hebben waardoor je het ontwerp op verschillende manieren kan bedienen. Ik heb dit gedaan door middel van Keyboard controls. 

Ik ben begonnen met het opzoeken van de keyboard codes die ik wilde gaan gebruiken.

Horror: H, Crime: C, Thriller: T, Drama: D, Action: A, Adventure: V

Met dit stukje code heb ik de nummers aangeroepen waardoor ik deze in de console kon vinden:

```
document.addEventListener("keydown", function (event) {
    console.log(event.which);
})
```

Vervolgens heb ik een functie aangemaakt met daar binnen een if else statement. Ik maakte aan het begin de fout om voor elke toets een aparte functie aan te maken, maar dat werkte niet. Ik heb in één functie alle toetsen aangeroepen door middel van 'else if' te gebruiken. Dat ziet er als volgt uit:

```
document.onkeyup = function (e) {
    if (e.which == 72) {
        filter('Horror');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "red";
    } else if (e.which == 67) {
        filter('Crime');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "blue";
    } else if (e.which == 84) {
        filter('Thriller');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "green";
    } else if (e.which == 68) {
        filter('Drama');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "orange";
    } else if (e.which == 65) {
        filter('Action');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "grey";
    } else if (e.which == 86) {
        filter('Adventure');
        document.getElementsByTagName('BODY')[0].style.backgroundColor = "purple";
    }
}
```

## Testen
Op dat moment was mijn tweede versie af! Tijd om het te testen.. Ik heb twee korte tests uitgevoerd. 

### Test 1
Deze test heb ik uitgevoerd met Frederique Niemer. Ik heb haar eerste gevraagd wat haar favoriete genre was. Ze antwoorde; "Action". Vervolgens heb ik haar de opdracht gegeven om de films met dit genre te vinden.

### Resultaat
### Test 2
### Resultaat

