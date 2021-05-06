## Version 3

##### Funktionaliteter
Sortera efter: 
- A-Ö, 
- Ö-A, 
- entrypoints stigande
- entrypoints fallande

##### Sidor
Faq - En sida som ger dig svar på olika frågor som du möjligtvis kan stöta på i en ansökningsprocess(lagd i ver3, ifall vi hinner)

##### Funktioner
- sortProgram (array) :: NORETURN, sorterar arrayen som skickas med beroende på vilken sortering som väls i selecten (utbildningar)

- filterFunction (array) :: (common)
    - filterBy*kategori(array) ::returnera [kopia updated array] detta ger oss en uppdaterad version av arrayen
	*kategori = studieinriktning, språk, utbildningsnivå, svårighetsgrad, visum 
    (alltså 5 funktioner i filterfunctionen)

- createBack (cityOBJECT) :: return DOM, ger oss all information om staden när vi flippar kortet. (common)
    - createStudentComments (cityOBJECT) :: return DOM, ger oss en pratbubbla om studenternas recensioner (kommer vara en funktion i createBack)

##### Globala Variabler

##### Css-filer
- Faq