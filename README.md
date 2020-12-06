# City searcher

En webbapplikation där man kan söka efter städer och se hur många invånare staden har.
Använder webbapiet:
http://www.geonames.org/export/geonames-search.html​.

## Uppgiftsbeskrivning
Kunden CityPop vill utveckla en webbaserad applikation där användaren kan söka fram hur
många invånare en viss stad har. Kunden vill att när man söker på en stad ska antalet
invånare för den staden hämtas från ett valfritt API över internet och presenteras på ett
snyggt sätt. Det ska också gå att söka på ett land och få fram de största städernas
invånarantal för det landet.
Din uppgift är att skapa ett git-repo där du samlar källkoden för applikationen.
Applikationen ska fungera enligt nedanstående kravspecifikation. När du är färdig pushar
du upp ditt git-repo till valfritt ställe så att vi kan nå det, förslagsvis Github.

## Kravspecifikation

### När användaren söker på en stad ska antalet invånare hämtas dynamiskt och visas.
När anändare sök på en stad visas en lista med städer. Det är för att det kan finnas flera städer med samma namn. 
Både land och invånare visas brevid staden.

### När användaren söker på ett land ska de städer med flest invånare visas och sorteras utifrån invånarantal.
Det finns två sökfält, en för länder och en för städer. Landets städer visas då i ordande efter invånarantal.

### När användaren sökt på ett land, ska de städer som dyker upp gå att klicka på varefter man får fram invånarantalet för den staden.
Om användaren har sökt på ett land visas inte längre invånare och land brevid staden.
Jag har valt att dela upp sökningen till två sökfält eftersom hur resultaten ska visas 
beror på om användaren har sökt på ett land eller inte.

### Det ska tydligt visas för användaren när applikationen laddar innehåll.
Det visas en laddningsicon när applikationen laddar innehåll.

### Olika typer av fel som kan uppstå ska visas för användaren, t.ex. om en stad inte finns.
Användaren informeras om landet eller staden som sökts efter inte finns. 