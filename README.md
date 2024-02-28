# FE23-SolBeen_Solaris

WHEN user has selected a Planet in dropdown, and press SÖK:
CALL function for receiving fact of planets.
IF facts of planet is stored in Local Storage,
RETURN planet data

ELSE   
GET API key from  https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com,¨
	IF error -> show error message for USER.
THEN get json-file with “planet facts” from   from  https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com,¨.
	IF error -> show error message for USER.
STORE and stringify “planet facts”  in Local Storage.
RETURN planet data.

CALL function to get all planet names from the “planet facts”

CALL function to check if the planet the User has selected in dropdown is available in “planet facts”.
 IF not in list:   
	   CALL function and show error message for USER.
ELSE  
     CALL function that opens modal  “planet info window” to show planet facts.

WHEN function for “planet info window” is activated:
CALL function to CREATE DOM element for modal window and apply existing unused HTML elements
CALL function to GET planet info from the “planet facts”, and connect to each element in DOM.
CALL function to change style of initial Body elements.
CALL function to prepare dropdown for new SÖK.







Godkänt:

    All UI-design är gjord med CSS (bilder är inte tillåtna)
    Sidan är byggd med HTML, CSS och Vanilla JS
    Användaren kan söka på planeter med hjälp av textsök
    Koden innehåller kommentarer som förklarar vad den gör

Väl Godkänt:

    Samtliga kriterier för Godkänt är uppfyllda.
    Koden är uppdelad i moduler med en kommentar i varje modul som förklarar dess syfte.
    API-nyckeln hämtas med metoden POST (den är inte hårdkodad)

Level-ups:

    Spara i local storage och visa ny sida med vald planet
    Effekter på planeterna (t ex: rotation vid hover, fina slides vid inladdning av planet)
    Felhantering där felkod presenteras användaren
    Extra info om planeterna
    Något eget kreativt och unikt

