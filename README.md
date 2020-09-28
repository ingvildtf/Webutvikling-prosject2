# Space Art - Gruppe 47
Dette prosjektet inneholder fem ulike installasjoner med "space" som tema. Hver installasjon består av et SVG bilde med animasjon som har tilhørende dikt og musikk. Det er mulig å endre tema på siden til jul eller påske. Dette endrer bakgrunnsfargen til siden og setter inn ekstra jule/påske elementer i SVG bildet. Nettsiden er implementert som en Single Page Application (SPA) med React og bruk av router.
<<<<<<< HEAD
- [Teknologi](## Teknologi)
- [React](### React)
=======
- [Teknologi](#teknologi)
- [React](#react)
>>>>>>> master
- [SVG og AJAX](### SVG og AJAX)
- [HTML Web Storage](## HTML Web Storage)
- [Responsive Web Design](## Responsive web design)
- [Node.js og NPM](## Node.js og NPM)
- [Testing](## Testing)
- [Bruk av Git](## Bruk av Git)

## Teknologi

### React
For å opprette prosjektet brukte vi “create-react-app art-exhibition --template typescript”. Her blir en del gjort for oss, blant annet at prosjektet settes opp med typescript. Vi har installert flere pakker for å håndtere de forskjellige kravene:
react-router-dom: for navigering på siden
react-test-renderer: for snapshot testing
styled-components: for CSS-styling av komponenter.
<br>
**Struktur:**
Applikasjonen inneholder route til Space Art som viser installasjonene, NavBar og MyFavorites. 
 

### SVG og AJAX

Bildene er SVG-filer (xml-data), lydene er mp3-filer, og diktene lastes inn dynamisk med AJAX (Asynchronous JavaScript) gjennom fetch i DisplayPoem.tsx. Her blir json filen hentet ut fra PoetryDB, dersom det ikke går vil det bli kastet en feilmelding.
<br>
Prosjektet benytter seg av biblioteket styled components. Ved bruk av styled-components har man muligheten til å style komponentene direkte i typescript filen. Dette gjør man ved å opprette en konstant som tar inn en funksjon på formen “styled.*element*”. Vi har hovedsakelig brukt “styled.div”. Funksjonen returnerer en React-komponent som rendrer en HTML-tagg. Dette tilsvarer å gi en HTML-tagg et navn eller id, for så å style denne i en egen CSS-fil. Styled components er ikke inline-styling, men ren css.	Dette gjør ikke implementering av animasjon lettere, bare mer oversiktlig. Vi ser dermed ikke på styled components som et tredjepartsbibliotek i en slik definisjon som oppgaveteksten ikke tillater. 
<br>
CSS keyframes brukes til å gi SVG elementene animasjon slik som rotasjon, pulsering, bevegelse langs aksene, og transparente egenskaper. SVG elementene rendres til skjerm ved at de importeres til Installations hvor de legges til i et array som traverseres ved click-events. 
<br>
<br>
**Rettigheter:**
Ulike vektorfiler er hentet fra [Vecteezy](https://www.vecteezy.com/)og kombinert til ulike SVG-filer. 
<br>

Lydspor | Youtube-bruker | Link til video
:--- | :---: | :---
*Earth Rotation Sound* | D K | [Klikk her](https://www.youtube.com/watch?v=JEzq1I94gZA&t=25s)
*Free Sound Effect - Constant Rocket Engines* | Stingray Productions | [Klikk her](https://www.youtube.com/watch?v=MZwsO6H_FYo)
*radar sound effect* | sounds fx | [Klikk her](https://www.youtube.com/watch?v=_YFXdDppLw0)
*Magic Glitter - Fairy Dust Sound Effect* | Free Audio Zone | [Klikk her](https://www.youtube.com/watch?v=Yu62II1h43E)
*Sound of the Sun* | Mraknup | [Klikk her](https://www.youtube.com/watch?v=ZZQcLJjpdrI)
 

## HTML Web Storage

<br>
Her har vi brukt session storage til å lagre innstillinger for tema på siden. Det vil si at “siden husker” nåværende tema, så når brukeren refresher eller klikker seg tilbake til Home, vil det samme tema.  Temaet blir lagret i en state ved bruk av hooks.
<br>
Local storage er brukt til å kunne favorisere et bilde med en favoritt-knapp og la det ligge lagret selv når nettsiden lukkes. Ved å gå inn på MyFavorites-siden kan man se sitt favorittbilde, samt velge å fjerne bildet som favoritt. Lagringen til local storage skjer på samme vis som med session storage. Favoritten fjernes ved onClick og referanse til en egen slette-funksjon. Etter man har lagt til en ny favoritt eller fjernet en favoritt må siden lastes inn på nytt, for at innholdet på siden skal oppdatere seg. 
 
## Responsive web design

**Viewport:** viewport er tatt inn som en meta-tag i index.html i public folderen. Dette gjør nettsiden optimal for ulike skjermstørrelser og enheter. Gir instruksjoner på hvordan kontrollere sidedimensjoner og skalering.  
 <br>
**Media-queries:** Media queries er her brukt til å endre layouten på siden i forhold til antall pixler. Den tar inn et kriterie på størrelsen på skjermen, og forandrer layouten deretter. Ved 1050 pixler endres layouten fra at bilde og tekst ligger i to kolonner, til at elementene på siden ligger i en kolonne plassert under hverandre. Dette synes vi også fungerte for mobile enheter og har dermed ikke laget en egen media queries for mobilskjermer.
<br> 
 
**Scaling images:** Vi har her brukt en blanding av prosent og vw/vh, for å skalere bildene sånn at de passer til siden og ikke har spesifikk størrelse. 
<br>
 
**Layout:** Vi har brukt en blanding av CSS-grid og CSS-flexbox for å få et flytende design. Installasjonssiden er strukturert ved grid-template-areas, noe som gjør det oversiktlig og enkelt å implementere ønsket struktur ved smale skjermstørrelser. For topp-baren (NavBar) og favoritt siden er det brukt flexbox for å plassere elementene. Nettsiden har tre forskjellige temaer, et hovedtema - verdensrommet - og to sesongbaserte tema som er jul og påske.
<<<<<<< HEAD


## Node.js og NPM
node.js ble brukt til å sette opp utviklings og server miljøet for REACT-applikasjonen. 


## Testing
Har testet prosjektet i forskjellige nettlesere, blant annet Chrome, Safari, Microsoft Edge og Firefox Developer Edition. Chrome og Safari har blitt brukt jevnlig under prosjektet for å teste funksjonaliteten og responsiviteten til nettsiden. For å teste for forskjellige skjermstørrelser og enheter har vi brukt chrome og firefox sitt utviklerverktøy, i tillegg til å kjøre nettsiden på egne mobiler. 
<br>
I tillegg til brukertesting av nettsiden har vi også laget et snapshot test. Denne testen sammenligner brukergrensesnittet med et skjermbilde. Dersom nettsiden avviker fra dette bilde, vil testen feile. Koden er hentet fra: https://www.youtube.com/watch?v=KT4dFLrlS7A&ab_channel=phpstepbystep
<br>
Vi har testet for både funksjonalitet og responsivitet for alle enheter, og at dette fungerer likt for alle enheter. 
For mobil og Ipad har vi testet for både horisontal og vertikal retning på skjermen. 

=======
 <br>
## Node.js og NPM
node.js ble brukt til å sette opp utviklingss og servermiljøet for REACT-applikasjonen. 
 <br>
## Testing
Har testet prosjektet i forskjellige nettlesere, blant annet Chrome, Safari, Microsoft Edge og Firefox Developer Edition. Chrome og Safari har blitt brukt jevnlig under prosjektet for å teste funksjonaliteten og responsiviteten til nettsiden. For å teste for forskjellige skjermstørrelser og enheter har vi brukt chrome og firefox sitt utviklerverktøy, i tillegg til å kjøre nettsiden på egne mobiler. 
<br>
I tillegg til brukertesting av nettsiden har vi også laget et snapshot test. Denne testen sammenligner brukergrensesnittet med et skjermbilde. Dersom nettsiden avviker fra dette bilde, vil testen feile. Koden er hentet fra [YouTube](https://www.youtube.com/watch?v=KT4dFLrlS7A&ab_channel=phpstepbystep).
<br>
Vi har testet for både funksjonalitet og responsivitet for alle enheter, og at dette fungerer likt for alle enheter. 
For mobil og Ipad har vi testet for både horisontal og vertikal retning på skjermen. 
<br> 
>>>>>>> master
 
## Bruk av Git
For å samarbeide om prosjektet har vi brukt Git. Git gir mulighet til å lage issues, slik at det er lettere å fordele oppgaver og ha oversikt over progresjon i prosjektet. Vi har nummerert hver issue og gitt det et beskrivende navn, som også er brukt er brukt som branch navn. Branchen består av nummereringen til issuet og tilhørende navn. Vi har prøvd å følge git standarder og hatt en egen develop branch, som vi brancher ut i fra, og til slutt merget develop inn i master. 
