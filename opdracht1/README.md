# Frontend voor designers - Opdracht 1
Hier beschrijf je de opdracht, wat je hebt gemaakt en hoe je je ontwerp door verschillende versies te testen hebt verbeterd. Bij iedere test voeg je een link toe naar de betreffende demo.

Bijvoorbeel bij de demo van versie in kun je zo een link maken, zodat iedereen de demo zelf kan uitproberen:

[Demo 1 voor opdracht 1](https://koopreynders.github.io/frontendvoordesigners/opdracht1/v1/)


Je kan ook een link plaatsen naar de bron code van de demo:

[Code demo 1 voor opdracht 1](https://github.com/KoopReynders/frontendvoordesigners/blob/master/opdracht1/v1/)

# Opdracht 
Ik heb een lijst gevonden studentenhuizen gemaakt. In deze lijst kunnen er details worden bekeken over de kamer om te bepalen of deze geschikt. Het was de bedoeling dat ik het mooi zou vormgeven en een goed werkende interface zou neerzetten. 

## Use Case
- In een lijst gevonden studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is.

## Criteria
- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De Principles of User Interface Design nr 04 & 11 zijn goed toegepast.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github.

## Priniples of User Interface Design
### Nr 04 - Keep user in control
Dit principe beschrijft dat gebruikers in controle moeten blijven. "Humans are most conformable when they feel in control of themselves and their environment." Dan voelen zij zich namelijk het meest confortabel. Het is het best om zo veel mogelijk informatie aan de gebruiker te geven om verwarring te voorkomen. Als je dit doet, dan gebeurt er dat. De gebruiker moet in controle blijven.

In mijn ontwerp heb ik ook rekening gehouden met dit principe. De gebruiker is namelijk in controle. Wanneer er op een woning geklikt kan worden komt er meer informatie te voorschijn. Over deze actie beslist de gebruiker helemaal. Bovendien wordt er door middel van het pijltje de gebruiker duidelijk gemaakt dat er meer informatie zichtbaar is. Op deze manier krijgt hij/zij meer informatie over wat er komen gaat.

### Nr 11 - Strong visual hierarchies work best
Dit principe beschrijft de beste manier waarop er visuele hiërarchie gecreëerd wordt. Dit gebeurd wanneer gebruikers het zelfde item steeds in de zelfde volgorde te zien krijgen. De dikte en grootte van elemementen speelt hier een hele grote rol. Een slappe visuele hiërarchie zorgt voor verwarring en een opgepropt gevoel.

In mijn ontwerp heb ik wederop rekening gehouden met dit principe. Ik heb voor consistentie gezorgt wat veel rust creëerd. Bovendien heb ik onderscheidt gemaakt tussen elementen door de dikte en grootte hiervan te wisselen. Belangrijke informatie zoals de titel is groot en dikker, minder belangrijkere informatie valt minder op. 

## Versie 1.0
Ik ben constent begonnen met het plaatsen van blokken. Deze blokken bevatten de eerst zichtbare content van de woningen. Wanneer er over deze blokken gehoverd wordt veranderd de kleur. Wordt erop geklikt, dan klapt het blok uit én veranderd de kleur weer. Het zijn allemaal accordeons. 


**Accordeon ingeklapt:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht1/v1/img/Schermafbeelding%202019-05-08%20om%2010.01.11.png?raw=true "Screenshot 1")

**Accordeon uitgeklapt:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht1/v1/img/Schermafbeelding%202019-05-08%20om%2010.01.18.png?raw=true "Screenshot 2")



## Definitief
Wat het aller eerste opvalt is de kleur die anders is. Ik heb de kleuren omgedraaid en het effect is groot. Er is meer rust. Bovendien heb ik meer gewerkt aan de uitlijning. Ik heb met Flexbox en Grids ervoor gezorgt dat de content goed geplaatst is. 

**Accordeon ingeklapt:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht1/v1/img/Schermafbeelding%202019-05-08%20om%2011.09.21.png?raw=true "Screenshot 1")

**Accordeon uitgeklapt:**
![alt text](https://github.com/lisacbot/frontendvoordesigners/blob/master/opdracht1/v1/img/Schermafbeelding%202019-05-08%20om%2011.09.29.png?raw=true "Screenshot 2")

### Evaluatie Javascript
Het JS script onderdeel vond ik lastig. Ik heb aan het begin veel op internet opgezocht om van start te kunnen. Toen ik in week twee in de les zat heb ik samen met Iris naar de opdracht gekeken. Zij heeft namelijk de zelfde case gekozen en had de JS heel anders gemaakt.

Ze had me geholpen met het volgende stukje code:
```
var button = document.querySelector('.druk');
var hidden = document.querySelector('.hidden');

button.addEventListener('click', function(){
    hidden.classList.toggle('hidden');
});
```
