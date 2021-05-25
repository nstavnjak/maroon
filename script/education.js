"use strict";
// Varibel som används av två funktioner (createFilter och createButtonFilter) för att stoppa filter från att kunnas öppnas fler gånger.
// Kanske inte kommer behövas
// let card = document.querySelectorAll(".programCard");
// let expandButton = document.querySelectorAll(".expand");

let load = 0;
let loaded = 5;
let checked = 0;
let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"];
let finishArray = PROGRAMMES;
let finishArrayFiltered = []

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


document.querySelector("#search").addEventListener("click", presort);
function presort(){
    let inputValue = document.querySelector("#inputField").value;
    let countryValue = document.querySelector("#select1").value;
    let cityValue = document.querySelector("#select2").value;
    
    searchProgram(inputValue, countryValue, cityValue);
}


document.getElementById("search").addEventListener("click", () => {
    LoadMoreReset();
    LoadMoreFunction(finishArray);
});
document.getElementById("sortera").addEventListener("change", () => {
    LoadMoreReset();
    LoadMoreFunction(finishArrayFiltered);
});
document.getElementById("filter").addEventListener("click", createFilter);


// EVENT

LoadMoreReset();
LoadMoreFunction(finishArray);


function sort(){
    let sorteraButton = document.querySelector("#sortera");
    if(finishArrayFiltered.length == 0){
        finishArrayFiltered = finishArray;
    }
        if(sorteraButton.value == "Program, A-Ö"){
            finishArrayFiltered.sort((a,b) => a.name > b.name ? 1 : -1); 
        } else if (sorteraButton.value == "Program, Ö-A"){
            console.log("hehahrajsd")
            finishArrayFiltered.sort((a,b) => a.name > b.name ? -1 : 1);
        } else if (sorteraButton.value == "Antagningspoäng, stigande"){
            finishArrayFiltered.sort((a,b) => a.entryGrades[0] - b.entryGrades[0]);
        } else if (sorteraButton.value == "Antagningpoäng, fallande"){
            finishArrayFiltered.sort((a,b) => b.entryGrades[0] - a.entryGrades[0]);
        }         
}
//Load More
//Klar
function LoadMoreFunction(array) {
    let loadMore = document.createElement("button");
    if(document.querySelector("#loadMore") == null){
        loadMore.innerHTML = "Load More";
        loadMore.setAttribute("id", "loadMore");
        document.querySelector("main").append(loadMore);
    }

    for(load; load < loaded ; load++){
            document.querySelector(".programList").append(createCard(array[load]));
    }
    load = loaded;
    loaded += 5;
    
    //Lägger till event listeners på alla kort
    loadMore.addEventListener("click", LoadMoreFunction);

    // loadMore.addEventListener("click", applyExpand);
}

function LoadMoreReset() {
    load = 0; 
    loaded = 5;
    sort();
    document.querySelector(".programList").innerHTML = "";
}

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
        if(i === 1){
            emptyOPT.innerHTML = "--- Land ---"
        }
        else {
            emptyOPT.innerHTML = "--- Stad ---";
        }
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
    
        //SKapar alla städer beroende på vilket land som är valt
        if(document.querySelector("#select1").value != "--- Land ---"){
            let country = COUNTRIES.find(e => e.name == document.querySelector("#select1").value);
            let cities = CITIES.filter(e => e.countryID === country.id);

            
            //Skapar ett tomt alternativ i toppen
            let option = document.createElement("option");
            option.textContent = "--- Stad ---";
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
            option.textContent = "--- Stad ---";
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
            document.querySelector("body").classList.add("no-scroll");
        });
        return filterButton;
    }
    return sortAndFilterParent;
}



function searchProgram(textValue, country, city){
    programlist.innerHTML = "";
    finishArrayFiltered = [];
    finishArray = [];

    // Om allt är tomt så ska vi visa alla program i bokstavsordning från A-Ö - done
    if (country === "--- Land ---" && city === "--- Stad ---"){
        if(textValue.length === 0){
            finishArray = PROGRAMMES;
            finishArray.sort((a, b) => a.name > b.name) ? -1 : 1;
            appendCards(finishArray);
        }
        else{
            finishArray = PROGRAMMES.filter(prog => prog.name.toLowerCase().includes(textValue));
            appendCards(finishArray);
        }
    }
    // Om stad eller stad och land och/eller input är ifyllt - done
    else if (city != "--- Stad ---"){
        let cityObj = CITIES.find(c => c.name.includes(city));
        let universities = UNIVERSITIES.filter(uni => uni.cityID === cityObj.id);

        if(textValue.length > 0){
            let programs = [];
            universities.forEach(uni => {
                programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id));
                finishArray = programs.flat(1).filter(prog => prog.name.toLowerCase().includes(textValue));
                appendCards(finishArray);
            });
        }
        else{
            let programs = [];
            console.log(universities);
            universities.forEach(uni => {
                programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id))
                finishArray = programs.flat(1);
            });
            appendCards(finishArray);
        }  
    }
    // Om land och input är ifyllt - done 
    else if (country.length != "--- Land ---"){
        let countryObj = COUNTRIES.find(c => c.name.includes(country));
        let citys = CITIES.filter(ci => ci.countryID === countryObj.id);
    
        let universities = [];
        citys.forEach(city => {
            universities.push(UNIVERSITIES.filter(uni => uni.cityID === city.id));
        });
        if(textValue.length > 0){
            let programs = [];
            universities.flat(1).forEach(uni => {
                programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id));
            });
            finishArray = programs.flat(1).filter(prog => prog.name.toLowerCase().includes(textValue));
            appendCards(finishArray);
        }
        else {
            let programs = [];
            universities.flat(1).forEach(uni => {
                programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id));
            });
            finishArray = programs.flat(1)
            appendCards(finishArray);
        }
    }
    // Om alla är ifyllda - Klar
    function appendCards(array){
        array.forEach(program => {
            document.querySelector(".programList").append(createCard(program));
        });
    }
}

function filter(){
    finishArrayFiltered = [];
    console.log("nu gör vi");
    //Skapa en tom array som kommer fyllas med saker
    let visumArray = [];
    let sprakArray = [];
    let utbildningsNivaArray = [];
    let studieInriktningArray = [];
    let bigArray = [visumArray, sprakArray, utbildningsNivaArray, studieInriktningArray];
    checked = document.querySelectorAll("input[type=checkbox]:checked");
        //Kolla först vad som ska filtreras
    checked.forEach(e => {
        // Visum ------------------------------------------------------------------
        if (e.parentElement.parentElement.className === "visum"){
            let array = [];
            
                if (e.value === "Yes"){
                    array = finishArray.filter(element => {
                        let cityFilterID = UNIVERSITIES.find(e => e.id === element.universityID).cityID;
                        let countryFilterID = CITIES.find(e => e.id === cityFilterID).countryID;
                        let visum = COUNTRIES.find(e => e.id === countryFilterID).visa;
                        return visum;
                    });
                    array.forEach(e => {visumArray.push(e)});
                }
                if(e.value === "No") {
                    array = finishArray.filter(element => {
                        let cityFilterID = UNIVERSITIES.find(e => e.id === element.universityID).cityID;
                        let countryFilterID = CITIES.find(e => e.id === cityFilterID).countryID;
                        let visum = COUNTRIES.find(e => e.id === countryFilterID).visa;
                        return !visum;
                    });
                    array.forEach(e => {visumArray.push(e)});
                }
            }
        // Språk ----------------------------------------------------------------------------
        else if (e.parentElement.parentElement.className === "sprak"){
            let array = [];
            if (e.value === "Swedish"){
                array = finishArray.filter(element => element.language === 3);
                array.forEach(e => sprakArray.push(e));
            }
            if (e.value === "English"){
                array = finishArray.filter(element => element.language == 1);
                array.forEach(e => sprakArray.push(e));
            }
            if (e.value === "French"){
                array = finishArray.filter(element => element.language == 2);
                array.forEach(e => sprakArray.push(e));
            }
            if (e.value === "Spanish"){
                array = finishArray.filter(element => element.language == 0); 
                array.forEach(e => sprakArray.push(e));   
            }
        }
        // Utbildningsnivå ----------------------------------------------------------------------------
        else if (e.parentElement.parentElement.className === "utbildningsniva"){
            let array = [];
            if (e.value === "Bachelor"){
                array = finishArray.filter(element => element.level == 0);
                array.forEach(e => utbildningsNivaArray.push(e));
            }
            if (e.value === "Master"){
                array = finishArray.filter(element => element.level == 1);
                array.forEach(e => utbildningsNivaArray.push(e));
            }
            if (e.value === "Doctorate"){
                array = finishArray.filter(element => element.level == 2);
                array.forEach(e => utbildningsNivaArray.push(e));
            } 
        }
        // Studie Inriktning -------------------------------------------------------------------------------------
        else if (e.parentElement.parentElement.className === "studieinriktning"){
            let array = [];
            for (let i = 0; i < FIELDS.length; i++){
                if (e.value === FIELDS[i].name) {
                    array = finishArray.filter(element => FIELDS[i].id === element.subjectID);
                    array.forEach(e => studieInriktningArray.push(e));
                }
            }
            
        }
    });
    bigArray.forEach(e => {
        if(e.length === 0 && !bigArray.includes(finishArray)){
            bigArray.splice(bigArray.indexOf(e), 1, finishArray);
        }
    });
    bigArray.sort((a,b) => a.length > b.length ? 1 : -1);
    
    let compareArray = [];
    
    bigArray.forEach(array => {
        if(array.length != 0){
            compareArray.push(array);
        }
    });
    let filterArray = [];
    filterArray = compareArray[0];
    filterArray.forEach(item => {
        item.score = 0;
        compareArray.forEach(array => {
            array.forEach(item2 => {
                if(item.id === item2.id){
                    item.score += 1;
                    if(item.score >= compareArray.length){
                        finishArrayFiltered.push(item);
                    }
                }
            });
        });
    });

    document.getElementById("sokKnapp").innerHTML = `Sök (${finishArrayFiltered.length} av 496)`
    

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
        //funderar på om vi ska skriva filterDiv.remove(); istället så den raderas?
        // filterDiv.innerHTML = "";
        filterDiv.remove();
        document.querySelector("body").classList.remove("no-scroll");
    });
    
    filterDiv.append(filterH1, filterExit);

    //Studie Inriktning --------------------------------------------------------------------------------------------------------
    let studieInriktningDiv = document.createElement("div");
    studieInriktningDiv.classList.add("studieinriktning");
    
    let studieInriktningH2 = document.createElement("h2");
    studieInriktningH2.textContent = "studieinriktning";
    studieInriktningDiv.append(studieInriktningH2);
    
    FIELDS.forEach(e => {
        let fieldWrapper = document.createElement("div")
        fieldWrapper.classList.add("fieldWrapper");
        
        let field = document.createElement("div");
        field.textContent = `${e.name}`;
        
        let span = document.createElement("span");
        span.classList.add("checkmark");
        
        let fieldCheck = document.createElement("input");
        fieldCheck.setAttribute("id", "filterBox");
        fieldCheck.setAttribute("type", "checkbox");
        fieldCheck.setAttribute("value", `${e.name}`);
        fieldCheck.setAttribute("class", `FIELDS`);
        fieldWrapper.append(fieldCheck, span, field);
        
        studieInriktningDiv.append(fieldWrapper);
    });

    filterDiv.append(studieInriktningDiv);
    
    //Språk --------------------------------------------------------------------------------------------------------
    
    let sprakDiv = document.createElement("div");
    sprakDiv.classList.add("sprak");
    
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
        languageCheck.setAttribute("id", "filterBox");
        languageCheck.setAttribute("type", "checkbox");
        languageCheck.setAttribute("value", `${e.name}`);
        languageCheck.setAttribute("class", `LANGUAGES`);
        languageWrapper.append(languageCheck, span, language);
        
        sprakDiv.append(languageWrapper);
    });
    
    filterDiv.append(sprakDiv);

    
    
    //Levels --------------------------------------------------------------------------------------------------------
    
    let utbildningsnivaDiv = document.createElement("div");
    utbildningsnivaDiv.classList.add("utbildningsniva");
    
    let utbildningsnivaH2 = document.createElement("h2");
    utbildningsnivaH2.textContent = "utbildningsnivå";
    utbildningsnivaDiv.append(utbildningsnivaH2);
    
    LEVELS.forEach(e => {
        let levelsWrapper = document.createElement("div")
        levelsWrapper.classList.add("levelsWrapper");

        let levels = document.createElement("div");
        levels.textContent = `${e}`;
        
        let span = document.createElement("span");
        span.classList.add("checkmark");
        
        let levelsCheck = document.createElement("input");
        levelsCheck.setAttribute("id", "filterBox");
        levelsCheck.setAttribute("type", "checkbox");
        levelsCheck.setAttribute("value", `${e}`);
        levelsCheck.setAttribute("class", `LEVELS`);
        levelsWrapper.append(levelsCheck, span, levels);
        
        utbildningsnivaDiv.append(levelsWrapper);
    });
    
    filterDiv.append(utbildningsnivaDiv);

    // Visum ----------------------------------------------------------------------------------------------------------
    
    // Denna är till båda
    let visumDiv = document.createElement("div");
    visumDiv.classList.add("visum");
    
    let visumH2 = document.createElement("h2");
    visumH2.textContent = "visum";
    visumDiv.append(visumH2);
    
    // Visum Ja ----------------------------------------------------------------------------------------------------------
    let visumWrapperYes = document.createElement("div");
    visumWrapperYes.classList.add("visumWrapper");
    
    let visumYesCheck = document.createElement("input");
    visumYesCheck.setAttribute("id", "filterBox");
    visumYesCheck.setAttribute("type", "checkbox");
    visumYesCheck.setAttribute("value", "Yes");
    visumYesCheck.setAttribute("class", `COUNTRIES`);

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
    visumNoCheck.setAttribute("id", "filterBox");
    visumNoCheck.setAttribute("type", "checkbox");
    visumNoCheck.setAttribute("value", "No");
    visumNoCheck.setAttribute("class", `COUNTRIES`);

    visumWrapperNo.append(visumNoCheck, spanNo, visumNo);
    
    // append båda visum yes och no
    visumDiv.append(visumWrapperYes, visumWrapperNo)
    filterDiv.append(visumDiv);

    //SÖK KNAPP ----------------------------------------------------
    
    let sokKnapp = document.createElement("button");
    sokKnapp.setAttribute("id", "sokKnapp");
    // sokKnapp.style.position = "relative";
    sokKnapp.innerHTML = `Sök (${finishArray.length} av 496)`;

    sokKnapp.addEventListener("click", () => {
        document.getElementById("expandFilter").remove();
        document.querySelector("body").classList.remove("no-scroll");
        LoadMoreReset();
        LoadMoreFunction(finishArrayFiltered);
    });

    filterDiv.append(sokKnapp);

    document.querySelector("body").prepend(filterDiv);

    document.querySelector("#filter").addEventListener("click", filter);
    document.querySelectorAll("#filterBox").forEach(button => {
        button.addEventListener("click", filter);
    });
    
}


function createCard(program){
    
    let card = document.createElement("div");
    card.classList.add("programCard");

    
    card.addEventListener("click", e => {
      if (card.classList.contains("longer")){
        card.classList.toggle("flipped");
      }
    });
    
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
                <h2 class="">${city.name}, ${country.name}</h2>`;

            let div = document.createElement("div");
            div.innerHTML = `<h2 class="">${language.name}</h2>`;

            let button = document.createElement("button");
            button.classList.add("expand")

            div.append(button);
            mainInformation.append(div);
            
            mainInformation.addEventListener("click", e => {
              e.stopPropagation();
              card.classList.toggle("longer");
              button.classList.toggle("rotated");
            });

            return mainInformation;
        }

        // NOT done
        function getProgramSeats(program){
            
            let seats = program.exchangeStudents + program.localStudents
            let exchangeStudents = (program.exchangeStudents / seats) * 100;
            let text = `<b>${exchangeStudents.toFixed()}%</b> av det toala antalet platser finns tillgängliga för utbytesstudenter`;
            
            return createMiddleParts("Antal Platser:", "programSeats", program.exchangeStudents, text, seats);
        }
        
        // done
        function getProgramGraduating(successRateArray){
            
            let x = 0;
            successRateArray.forEach( e => {
                x = x + e;
            });

            let seats = program.exchangeStudents + program.localStudents
            let result = x / successRateArray.length;

            let graduatingNumber = (seats/100)*result;
            let text = `<b>${graduatingNumber.toFixed()}</b>  elever tar examen efter avklarade studier`;
            
            return createMiddleParts("Success Rate", "graduation", result, text);
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

        function createMiddleParts(title, CL, progressWidth, pText, value = ""){
            let parentDiv = document.createElement("div");
            parentDiv.classList.add(CL);
            parentDiv.innerHTML = `<h1>${title} ${value}</h1>`;
           
            let progressBarOuter = document.createElement("div");
            progressBarOuter.classList.add("progressBar", "outer");

            let progressBarInner = document.createElement("div");
            progressBarInner.classList.add("progressBar", "inner");
            progressBarInner.textContent = `${progressWidth.toFixed()}%`;
            progressBarInner.style.width = `${progressWidth}%`
            
            if (progressWidth === program.exchangeStudents){
                progressBarInner.textContent = `${progressWidth} pla.`;
                progressBarInner.style.width = `${((progressWidth/value)*100).toFixed()}%`
            }

            let text = document.createElement("p");
            text.innerHTML = pText;
            progressBarOuter.append(progressBarInner);
            parentDiv.append(progressBarOuter, text);

            return parentDiv;
        }
        
        return cardFront;
    }
    return card;
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

