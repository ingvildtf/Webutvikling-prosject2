
#Space Art - Gruppe 47

#Dokumentasjon
###Innhold og Funksjonalitet
Dette prosjektet inneholder fem ulike installasjoner med "space" som tema. Hver installasjon består av et SVG bilde med animasjon som har  tilhørende dikt og musikk. Det er mulig å endre tema på siden til jul eller påske. Dette endrer bakgrunnsfargen til siden og setter inn ekstra jule/påske elementer i SVG bildet.  

##Teknologi


###SVG
Bildene er svg-filer (xml-data), lydene er mp3-filer, og tekstene er lagret i json-objekter.


Bildene er hentet i SVG format, mens tekstene brukes json og fetch for å hente dem. Animasjonen av SVG bildene er gjort ved å bruke biblioteket styled components. Ved bruk av dette kan react-komponenten (SVG-en) ha tilhørende css styling uten å knytte dette til komponenten via en ekstern css fil. Dette gjør ikke implementering av animasjon lettere, bare mer oversiktlig. Vi ser dermed ikke på styled components som et tredjepartsbibliotek i en slik definisjon som oppgaveteksten ikke tillater. CSS keyframes brukes til å gi SVG elementene animasjon slik som rotasjon, pulsering, bevegelse langs aksene, og transparente egenskaper. SVG elementene rendres til skjerm ved at de importeres til Installations hvor de legges til i et array som traverseres ved click-events. 

Rettigheter:
Ulike vektorfiler er hentet fra https://www.vecteezy.com/ og kombinert til ulike SVG-filer.


Ulike vektorfiler er hentet fra [vecteezy](https://www.vecteezy.com/) og kombinert til ulike SVG-filer. 
