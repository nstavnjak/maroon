"use strict";
// Varibel som används av två funktioner (createFilter och createButtonFilter) för att stoppa filter från att kunnas öppnas fler gånger.
let once = 0;
let load = 0;
let loaded = 5;
let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"]

// Head
appendLink("../stylesheets/education.css");

// Meny


// Main
document.querySelector("main").append(createSearchForm());
createOPT();
document.querySelector("main").append(sortAndFilterParent());
let programlist = document.createElement("div");
programlist.classList.add("programList");
document.querySelector("main").append(programlist);


//Load More
//inte klar
function LoadMore() {
    let loadMore = document.createElement("button");
    
    loadMore.addEventListener("click", () => {
        for(load; load > loaded ; load++){
            PROGRAMMES.forEach(element => {
                document.querySelector(".programList").append(createCard(element));
            });
        }
    });
}

// CARD
const card = document.querySelectorAll(".programCard");
const expandButton = document.querySelectorAll(".expand");

card.forEach(element => {
  element.addEventListener("click", e => {
    console.log(element);
    if (element.classList.contains("longer")){
      element.classList.toggle("flipped");
    }
  });
})

expandButton.forEach(element => {
  element.addEventListener("click", e => {
    e.stopPropagation()
    console.log(e.target);
    console.log(e.target.parentElement)
    e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("longer");
    e.target.classList.toggle("rotated");
  })
})

// Functions

function createSearchForm(){
    let searchForm = document.createElement("div");
    searchForm.setAttribute("id", "searchForm");
    
    let innerWrapper = document.createElement("div");
    innerWrapper.setAttribute("id", "innerWrapper");

    let title = document.createElement("h2");
    title.textContent = `utbildning`;

    let inputField = document.createElement("input");
    inputField.setAttribute("id", "inputField");
    inputField.setAttribute("placeholder", "Sök efter programnamn")

    let selectParent = document.createElement("div");
    let select1 = document.createElement("select");
    select1.setAttribute("id", "select1");
    select1.classList.add("land")

    let select2 = document.createElement("select");
    select2.setAttribute("id", "select2");
    select2.classList.add("city")

    
    let searchButton = document.createElement("button");
    searchButton.setAttribute("id", "search");
    searchButton.textContent = `sök utbildningar`;

    selectParent.append(select1, select2);
    innerWrapper.append(title, inputField, selectParent, searchButton);
    searchForm.append(innerWrapper);

    return searchForm;
}

function createOPT(){
    for(let i = 1; i < 3; i++){
        let emptyOPT = document.createElement("option");
        emptyOPT.textContent = "";
        document.querySelector(`#select${i}`).append(emptyOPT);
    }
    
    //Intial skapning av städer och länder
    COUNTRIES.forEach(e => {
        let option = document.createElement("option");
        option.textContent = e.name;
        document.querySelector("#select1").append(option);
    });

    
    CITIES.forEach(e => {
        let option = document.createElement("option");
        option.textContent = e.name;
        document.querySelector("#select2").append(option);
    });
    
    document.querySelector("#select1").addEventListener("change", function(){
        
        document.getElementById("select2").innerHTML = "";

        console.log(document.querySelector("#select1").value);

        //SKapar alla städer beroende på vilket land som är valt
        if(document.querySelector("#select1").value != false){
            let country = COUNTRIES.find(e => e.name == document.querySelector("#select1").value);
            let cities = CITIES.filter(e => e.countryID === country.id);
            console.log(cities);

            //Skapar ett tomt alternativ i toppen
            let option = document.createElement("option");
            option.textContent = "";
            document.querySelector("#select2").append(option);

            cities.forEach(e =>{
               let option = document.createElement("option");
               option.textContent = e.name;
               document.querySelector("#select2").append(option);
           });
        }
        else {
            //Skapar ett tomt alternativ i toppen
            let option = document.createElement("option");
            option.textContent = "";
            document.querySelector("#select2").append(option);

            //Skapar alla städer om inget är valt i select1
            CITIES.forEach(e => {
                let option = document.createElement("option");
                option.textContent = e.name;
                document.querySelector("#select2").append(option);
            });
        }
    });
}

function sortAndFilterParent(){

    let sortAndFilterParent = document.createElement("div");
    sortAndFilterParent.setAttribute("id", "sortFilterParent");
    sortAndFilterParent.append(createSort(), createFilterButton());

    function createSort(){
        //skapar och returnerar en select till createSort som sen kan appendas
        let sortDiv = document.createElement("select");
        sortDiv.setAttribute("id", "sortera")
        let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"];
        sortAlternatives.forEach(e => {
            //skapar alla alternativ baserat på sortAlternatives arrayen
            let sortAlternative = document.createElement("option");
            sortAlternative.textContent = e;
            sortDiv.append(sortAlternative);
        });
        return sortDiv;
    }

    function createFilterButton(){
        let filterButton = document.createElement("button");
        filterButton.setAttribute("id", "filter")
        filterButton.textContent = "filtrera +"
        
        filterButton.addEventListener("click", e => {
            if (once == 0){
            createFilter();
            }
            once = once + 1;
            document.querySelector("body").classList.add("no-scroll");
        });
        return filterButton;
    }
    return sortAndFilterParent;
}

function createFilter(){
    //filterDiv innehåller allt och returneras i slutet
    let filterDiv = document.createElement("div");
    filterDiv.setAttribute("id", "expandFilter")
    //H1 Filtrera
    let filterH1 = document.createElement("h1")
    filterH1.textContent = "filtrera"
    
    let filterExit = document.createElement("button");
    filterExit.innerHTML = "&#x2716;";
    filterExit.addEventListener("click", e => {
        once = 0;
        //funderar på om vi ska skriva filterDiv.remove(); istället så den raderas?
        // filterDiv.innerHTML = "";
        filterDiv.remove();
        document.querySelector("body").classList.remove("no-scroll");
    });

    filterDiv.append(filterH1, filterExit);

    //Studie Inriktning --------------------------------------------------------------------------------------------------------
    let studieInriktningDiv = document.createElement("div");
    
    let studieInriktningH2 = document.createElement("h2");
    studieInriktningH2.textContent = "studie inriktning";
    studieInriktningDiv.append(studieInriktningH2);

    FIELDS.forEach(e => {
        let fieldWrapper = document.createElement("div")
        fieldWrapper.classList.add("fieldWrapper");

        let field = document.createElement("div");
        field.textContent = `${e.name}`;

        let span = document.createElement("span");
        span.classList.add("checkmark");

        let fieldCheck = document.createElement("input");
        fieldCheck.setAttribute("type", "checkbox");
        fieldCheck.setAttribute("id", `${e.name}`);
        fieldWrapper.append(fieldCheck, span, field);
        
        studieInriktningDiv.append(fieldWrapper);
    });

    filterDiv.append(studieInriktningDiv);

    //Språk --------------------------------------------------------------------------------------------------------

    let sprakDiv = document.createElement("div");
    
    let sprakH2 = document.createElement("h2");
    sprakH2.textContent = "språk";
    sprakDiv.append(sprakH2);

    LANGUAGES.forEach(e => {
        let languageWrapper = document.createElement("div")
        languageWrapper.classList.add("languageWrapper");
        
        let language = document.createElement("div");
        language.textContent = `${e.name}`;

        let span = document.createElement("span");
        span.classList.add("checkmark");

        let languageCheck = document.createElement("input");
        languageCheck.setAttribute("type", "checkbox");
        languageCheck.setAttribute("id", `${e.name}`);
        languageWrapper.append(languageCheck, span, language);
        
        sprakDiv.append(languageWrapper);
    });

    filterDiv.append(sprakDiv);

    

    //Levels --------------------------------------------------------------------------------------------------------

    let utbildningsnivaDiv = document.createElement("div");
    
    let utbildningsnivaH2 = document.createElement("h2");
    utbildningsnivaH2.textContent = "utbildnings nivå";
    utbildningsnivaDiv.append(utbildningsnivaH2);

    LEVELS.forEach(e => {
        let levelsWrapper = document.createElement("div")
        levelsWrapper.classList.add("levelsWrapper");

        let levels = document.createElement("div");
        levels.textContent = `${e}`;

        let span = document.createElement("span");
        span.classList.add("checkmark");

        let levelsCheck = document.createElement("input");
        levelsCheck.setAttribute("type", "checkbox");
        levelsCheck.setAttribute("id", `${e}`);
        levelsWrapper.append(levelsCheck, span, levels);
        
        utbildningsnivaDiv.append(levelsWrapper);
    });

    filterDiv.append(utbildningsnivaDiv);

    // Visum ----------------------------------------------------------------------------------------------------------
    
    // Denna är till båda
    let visumDiv = document.createElement("div");

    let visumH2 = document.createElement("h2");
    visumH2.textContent = "visum";
    visumDiv.append(visumH2);

    // Visum Ja ----------------------------------------------------------------------------------------------------------
    let visumWrapperYes = document.createElement("div");
    visumWrapperYes.classList.add("visumWrapper");

    let visumYesCheck = document.createElement("input");
    visumYesCheck.setAttribute("type", "checkbox");
    visumYesCheck.setAttribute("id", "Yes");

    let spanYes = document.createElement("span");
    spanYes.classList.add("checkmark");
    
    let visumYes = document.createElement("div");
    visumYes.textContent = "Ja";


    visumWrapperYes.append(visumYesCheck, spanYes, visumYes);
    
    
    // Visum Nej -------------------------------------------------------------------------
    let visumWrapperNo = document.createElement("div");
    visumWrapperNo.classList.add("visumWrapper");

    let visumNo = document.createElement("div");
    visumNo.textContent = "Nej";

    let spanNo = document.createElement("span");
    spanNo.classList.add("checkmark");

    let visumNoCheck = document.createElement("input");
    visumNoCheck.setAttribute("type", "checkbox");
    visumNoCheck.setAttribute("id", "No");

    visumWrapperNo.append(visumNoCheck, spanNo, visumNo);

    // append båda visum yes och no
    visumDiv.append(visumWrapperYes, visumWrapperNo)
    filterDiv.append(visumDiv);

    
    document.querySelector("body").prepend(filterDiv);

}


function createCard(program){
    
    let card = document.createElement("div");
    card.classList.add("programCard");

    // get university
    let university = UNIVERSITIES.find(e => e.id === program.universityID);
    // get city
    let city = CITIES.find(e => e.id === university.cityID);
    // get country 
    let country = COUNTRIES.find(e => e.id === city.countryID);
    // get language 
    let language = LANGUAGES.find(e => e.id === country.languageID);
    
    card.append(createFront(program), createBack(city));

    // done
    function createFront(program){

        let cardFront = document.createElement("div");
        cardFront.classList.add("programCardFace");
        cardFront.classList.add("front");

        cardFront.append(getMainInformation(program), getProgramSeats(program), getProgramGraduating(program.successRate), getProgramEntrypoints(program.entryGrades));

        // done
        function getMainInformation(program){
            let mainInformation = document.createElement("div");

            mainInformation.innerHTML = `
                <h1 class="">${program.name}</h1>
                <h2 class="">${university.name}</h2>
                <h2 class="">${city.name}, ${country.name}</h2>
                <div>
                    <h2 class="">${language.name}</h2>
                    <button class="expand"></div>
                </div>`;

            return mainInformation;
        }

        // NOT done
        function getProgramSeats(program){
            let programSeats = document.createElement("div");
            programSeats.classList.add("programSeats");
            
            let seats = program.exchangeStudents + program.localStudents;
            let circle = document.createElement("div");
            circle.classList.add("circle");
            circle.innerHTML = `${seats}<br>seats`;

            programSeats.append(circle)

            return programSeats;
        }

        // done
        function getProgramGraduating(SuccessRateArray){
            let graduation = document.createElement("div");
            graduation.classList.add("graduation",);


            graduation.innerHTML = `
                <div class="circle">${successAverage(SuccessRateArray)}% </div>
                <div> TAR EXAMEN</div>`;

            return graduation;
        }

        // done
        function getProgramEntrypoints(entryGradesArray){
            let entryPoints = document.createElement("div");
            entryPoints.classList.add("entryPoints");

            let title = document.createElement("h1");
            title.classList.add("entryPointsTitle");
            title.textContent = `Antagningspoäng`;

            let points = document.createElement("div");
            
            for (let i = 0; i < entryGradesArray.length; i++) {
                let grade = program.entryGrades[i];
                let year = 2021 - i;
                points.append(createCirlePoints(grade, year));
            }

            entryPoints.append(title, points);

            return entryPoints;
        }

        return cardFront;
    }
    return card;
}

function successAverage(successArray){

    let x = 0;
    successArray.forEach( e => {
        x = x + e;
    });

    let result = x / successArray.length;
    return result; 
}

function createCirlePoints(grade, year){
    let gradeBox = document.createElement("div");
    gradeBox.classList.add("gradeBox");

    let gradeYear = document.createElement("div");
    gradeYear.classList.add("gradeYear");
    gradeYear.textContent = year;

    let gradeCircle = document.createElement("div");
    gradeCircle.classList.add("gradeCircle");
    gradeCircle.textContent = grade;

    gradeBox.append(gradeYear, gradeCircle);

    return gradeBox;
}