"use strict";
// Varibel som används av två funktioner (createFilter och createButtonFilter) för att stoppa filter från att kunnas öppnas fler gånger.
// Kanske inte kommer behövas
let card = document.querySelectorAll(".programCard");
let expandButton = document.querySelectorAll(".expand");
let searchButton = document.querySelector("#search");

let once = 0;
let load = 0;
let loaded = 5;
let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"];
let finishArray = [];

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


// EVENT


LoadMoreFunction();
applyExpand();
//Load More
//Klar
function LoadMoreFunction() {
    let loadMore = document.createElement("button");
    if(document.querySelector("#loadMore") == null){
        loadMore.innerHTML = "Load More";
        loadMore.setAttribute("id", "loadMore");
        console.log("hej")
        document.querySelector("main").append(loadMore);
    }
    
    for(load; load < loaded ; load++){
            document.querySelector(".programList").append(createCard(PROGRAMMES[load])); 
    }
    load = loaded;
    loaded = loaded + 5;
    console.log(document.querySelector("#loadMore"));

    //Lägger till event listeners på alla kort
    card = document.querySelectorAll(".programCard");
    expandButton = document.querySelectorAll(".expand");
    searchButton = document.querySelector("#search");

    loadMore.addEventListener("click", LoadMoreFunction);
    loadMore.addEventListener("click", applyExpand);
}


// EVENT 

//Ser till att card.forEach inte lägger toggles två gånger för då fuckar allt ur
// VIKTIG KOD!!!!!
 
function applyExpand(){

    card.forEach(element => {
        console.log(element.getAttribute('listener'));
        if (element.getAttribute('listener') !== 'true'){
            element.setAttribute('listener', 'true');
            element.addEventListener("click", e => {
                console.log(element.getAttribute('listener'));
                if (element.classList.contains("longer")){
                  element.classList.toggle("flipped");
                }
              });
            
        }
        
      });
     
    expandButton.forEach(element => {
        if (element.getAttribute('listener') !== 'true'){
            element.setAttribute('listener', 'true')
            element.addEventListener("click", e => {
                e.stopPropagation()
                console.log(e.target);
                console.log(e.target.parentElement)
                e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle("longer");
                e.target.classList.toggle("rotated");
              });
        }
    });
      
    searchButton.addEventListener("click", e => {
            let inputValue = document.querySelector("#inputField").value;
            let countryValue = document.querySelector("#select1").value;
            let cityValue = document.querySelector("#select2").value;
          
            console.log(inputValue);
            console.log(countryValue);
            console.log(cityValue);
            searchProgram(inputValue, countryValue, cityValue);
    });
}

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

document.addEventListener("click", filter);

function searchProgram(textValue, country, city){
    programlist.innerHTML = "";
    finishArray = [];

    // Om allt är tomt så ska vi visa alla program i bokstavsordning från A-Ö - done
    if (textValue.length === 0 && country.length === 0 && city.length === 0){
        finishArray = PROGRAMMES;
        finishArray.sort((a, b) => a.name > b.name) ? -1 : 1;
        appendCards(finishArray);
    }
    // Om bara land är valt - done
    else if (textValue.length === 0 && country.length > 0 && city.length === 0){
        let countryObj = COUNTRIES.find(c => c.name.includes(country));
        let citys = CITIES.filter(ci => ci.countryID === countryObj.id);
    
        let universities = [];
        citys.forEach(city => {
            universities.push(UNIVERSITIES.filter(uni => uni.cityID === city.id));
        })

        universities.flat(1).forEach(uni => {
            finishArray.push(PROGRAMMES.filter(prog => prog.universityID === uni.id));
        })

        // mergar ihop nestlade arrayer
        finishArray = finishArray.flat(1);
        appendCards(finishArray);
    } 
    // Om bara stad är valt - done
    else if (textValue.length === 0 && country.length === 0 && city.length > 0){
        let cityObj = CITIES.find(c => c.name.includes(city));
        let universities = UNIVERSITIES.filter(uni => uni.cityID === cityObj.id);

        universities.forEach(uni => {
            finishArray.push(PROGRAMMES.filter(prog => prog.universityID === uni.id))
        })
        
        finishArray = finishArray.flat(1);
        appendCards(finishArray);
    } 
    // Om bara sökfältet är är ifyllt - done
    else if (textValue.length > 0 && country.length === 0 && city.length === 0){
        finishArray = PROGRAMMES.filter(prog => prog.name.toLowerCase().includes(textValue));
        appendCards(finishArray);
    }
    // Om stad och land är ifyllt - done
    else if (textValue.length === 0 && country.length > 0 && city.length > 0){
        let cityObj = CITIES.find(c => c.name.includes(city));
        let universities = UNIVERSITIES.filter(uni => uni.cityID === cityObj.id);

        universities.forEach(uni => {
            finishArray.push(PROGRAMMES.filter(prog => prog.universityID === uni.id))
        })

        finishArray = finishArray.flat(1);
        appendCards(finishArray);
    }
    // Om stad och input är ifyllt - done
    else if (textValue.length > 0 && country.length === 0 && city.length > 0){
        let cityObj = CITIES.find(c => c.name.includes(city));
        let universities = UNIVERSITIES.filter(uni => uni.cityID === cityObj.id);

        let programs = [];
        universities.forEach(uni => {
            programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id))
        })
        
        finishArray = programs.flat(1).filter(prog => prog.name.toLowerCase().includes(textValue));
        appendCards(finishArray);
    }
    // Om land och input är ifyllt - done 
    else if (textValue.length > 0 && country.length > 0 && city.length === 0){
        let countryObj = COUNTRIES.find(c => c.name.includes(country));
        let citys = CITIES.filter(ci => ci.countryID === countryObj.id);
    
        let universities = [];
        citys.forEach(city => {
            universities.push(UNIVERSITIES.filter(uni => uni.cityID === city.id));
        })

        let programs = [];
        universities.flat(1).forEach(uni => {
            programs.push(PROGRAMMES.filter(prog => prog.universityID === uni.id));
        })

        finishArray = programs.flat(1).filter(prog => prog.name.toLowerCase().includes(textValue));
        appendCards(finishArray);
    }
    // Om alla är ifyllda - NOT done
    else if (textValue.length > 0 && country.length > 0 && city.length > 0){
        console.log("alla ifyllda");
    }

    function appendCards(array){
        array.forEach(program => {
            document.querySelector(".programList").append(createCard(program));
        })
    }
    console.log(finishArray);
}


function filter(array){
    //Skapa en tom array som kommer fyllas med saker
    let finishedArray2 = [];
    let checked = document.querySelectorAll("input[type=checkbox]:checked");
    if (checked != null){
        //Kolla först vad som ska filtreras
        checked.forEach(e => {
            // Visum ------------------------------------------------------------------
            if (e.parentElement.parentElement.className === "visum"){
                let array = [];
                if (e.value === "Yes"){
                    array = PROGRAMMES.filter(element => {
                        let cityFilterID = UNIVERSITIES.find(e => e.id === element.universityID).cityID;
                        let countryFilterID = CITIES.find(e => e.id === cityFilterID).countryID;
                        let visum = COUNTRIES.find(e => e.id === countryFilterID).visa;
                        return visum;
                    });
                    array.forEach(e => finishedArray2.push(e));
                }
                if(e.value === "No") {
                    array = PROGRAMMES.filter(element => {
                        let cityFilterID = UNIVERSITIES.find(e => e.id === element.universityID).cityID;
                        let countryFilterID = CITIES.find(e => e.id === cityFilterID).countryID;
                        let visum = COUNTRIES.find(e => e.id === countryFilterID).visa;
                        return !visum;
                    });
                    array.forEach(e => finishedArray2.push(e));
                }
                console.log(finishedArray2);
            }
            // Språk ----------------------------------------------------------------------------
            else if (e.parentElement.parentElement.className === "sprak"){
                let array = [];
                if (e.value === "Swedish"){
                    array = PROGRAMMES.filter(element => element.language === 3);
                    array.forEach(e => finishedArray2.push(e));
                }
                if (e.value === "English"){
                    array = PROGRAMMES.filter(element => element.language == 1);
                    array.forEach(e => finishedArray2.push(e));
                }
                if (e.value === "French"){
                    array = PROGRAMMES.filter(element => element.language == 2);
                    array.forEach(e => finishedArray2.push(e));
                }
                if (e.value === "Spanish"){
                    array = PROGRAMMES.filter(element => element.language == 0); 
                    array.forEach(e => finishedArray2.push(e));   
                }
            }
            // Utbildningsnivå ----------------------------------------------------------------------------
            else if (e.parentElement.parentElement.className === "utbildningsniva"){
                let array = [];
                if (e.value === "Bachelor"){
                    array = PROGRAMMES.filter(element => element.level == 0);
                    array.forEach(e => finishedArray2.push(e));
                }
                if (e.value === "Master"){
                    array = PROGRAMMES.filter(element => element.level == 1);
                    array.forEach(e => finishedArray2.push(e));
                }
                if (e.value === "Doctorate"){
                    array = PROGRAMMES.filter(element => element.level == 2);
                    array.forEach(e => finishedArray2.push(e));
                }
            }
            // Studie Inriktning -------------------------------------------------------------------------------------
            else if (e.parentElement.parentElement.className === "studieinriktning"){
                let array = [];
                for (let i = 0; i < FIELDS.length; i++){
                    if (e.value === FIELDS[i].name) {
                        array = PROGRAMMES.filter(element => FIELDS[i].id === element.subjectID);
                        array.forEach(e => finishedArray2.push(e));
                    }
                }
                
            }
        });
    }
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
    studieInriktningDiv.classList.add("studieinriktning");
    
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
    visumNoCheck.setAttribute("type", "checkbox");
    visumNoCheck.setAttribute("value", "No");
    visumNoCheck.setAttribute("class", `COUNTRIES`);

    visumWrapperNo.append(visumNoCheck, spanNo, visumNo);
    
    // append båda visum yes och no
    visumDiv.append(visumWrapperYes, visumWrapperNo)
    filterDiv.append(visumDiv);
    
    
    document.querySelector("body").prepend(filterDiv);
    
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
