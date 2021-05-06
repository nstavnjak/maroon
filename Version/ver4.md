## Version 4

##### Funktionaliteter
I denna version:

- Användaren ska kunna filtrera de sökta programkort efter: studieinriktning, språk, utbildningsnivå, svårighetsgrad, visum.

- Användaren ska kunna göra ett test för att få fram stadsalternativ om man är osäker på var man vill ta vägen åt. 

##### Sidor

Test - varpå nya divar skapas vid varje steg i svaren och tillslut en resultatdel.

##### Funktioner

- createQuizQuestionsDOM (*egengjordDATABASE) :: returnerar ett DOM, med frågan och alternativen där i. 

    *egengjordDATABASE = inkluderar frågor och alternativ till quizet

- valueCounter(*kopia av DB.cities) :: array sorterad efter viktighet, den räknar vilket land som matchar bäst

    Innehåller 2st = RadioID[array av radioID tillhörande alternativ som matchar staden], valuePoints(viktade), Points(ej viktat). 


##### Globala Variabler

##### Css-filer

en test - inkluderar all styling för att vidare divar i quizet