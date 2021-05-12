"use strict";

// Head
appendLink("../stylesheets/education.css");

// Meny


// Main


// Functions

let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"]
// function createSearchForm(){

// }

// function createOPT(){

// }

// function updateCityByCountry(){

// }

createSort()
function createSort(){
    //skapar och returnerar en select till createSort som sen kan appendas
    let sortDiv = document.createElement("select");
    let sortAlternatives = ["Program, A-Ö", "Program, Ö-A", "Antagningspoäng, stigande", "Antagningpoäng, fallande"];
    sortAlternatives.forEach(e => {
        //skapar alla alternativ baserat på sortAlternatives arrayen
        let sortAlternative = document.createElement("option");
        sortAlternative.textContent = e;
        sortDiv.append(sortAlternative);
    });
    document.querySelector("main").append(sortDiv);
}

function creatFilterButton(){
    //filterDiv innehåller allt och returneras i slutet
    let filterDiv = document.createElement("div");

    let filterH1 = document.createElement("h1")
    filterH1.textContent = "filtrera"

    let studieInriktningDiv = document.createElement("div");
    
    let studieInriktningH2 = document.createElement("h2");
    studieInriktningH2.textContent = "studie inriktning";

    FIELDS.forEach(e => {
        let field = document.createElement("input");
        fields.setAttribute("type", "checkbox");
        filterDiv.append(field);
        console.log(field)
    });
    document.querySelector("main").append(filterDiv);
}

// }

// 

// function createSortAlternative(){
//     let sortDiv = document.createElement("div");
//     sortDiv.setAttribute("id", "sortWrapper")

//     let sortButton = document.createElement("div");
//     sortButton.textContent = `sortera &#748;`;
//     sortButton.classList.add("sortButton")

//     let sortAlt = document.createElement("div");
//     sortAlternatives.forEach( element => {
//         let sortAlternative = document.createElement("p");
//         sortAlternative.textContent = element;
//         sortAlt.append(sortAlternative);
//     })

//     return sortDiv
// }

// document.querySelector("main").append(createSortAlternative());
// function sortProgram(){

// }


function createCard(program){
    
    let card = document.createElement("div");
    card.classList.add("programeCard");

    // get university
    let university = DB.UNIVERSITIES.find(e => e.id === program.universityID);
    // get city
    let city = DB.CITIES.find(e => e.id === university.cityID);
    // get country 
    let country = DB.COUNTRIES.find(e => e.id === city.countryID);
    // get language 
    let language = DB.LANGUAGES.find(e => e.id === country.languageID);
    
    card.prepend(createFront(program));

    card.prepend(createBack(city));

    // done
    function createFront(program){

        let cardFront = document.createElement("div");
        cardFront.classList.add("programeCardFace");
        cardFront.classList.add("front");

        cardFront.append(getProgramEntrypoints(program.entryGrades), getProgramGraduating(program.successRate), getProgramSeats(program), getMainInformation(program));

        // done
        function getMainInformation(program){
            let mainInformation = document.createElement("div");

            mainInformation.innerHTML = `
                <h1 class="">${program.name}</h1>
                <h2 class="">${university.name}</h2>
                <h2 class="">${city.name, country.name}</h2>
                <div>
                    <h2 class="">${language.name}</h2>
                    <button class="deleteButton">X</div>
                </div>`;

            return mainInformation;
        }

        // NOT done
        function getProgramSeats(program){
            let programeSeats = document.createElement("div");
            programeSeats.classList.add("programeSeats circle");
            
            let seats = program.exchangeStudents + program.localStudents;
            console.log(seats);


            return programeSeats;
        }

        // done
        function getProgramGraduating(SuccessRateArray){
            let graduation = document.createElement("div");
            graduation.classList.add("graduation circle");


            graduation.innerHTML = `
                <div> </div>
                <div>${successAverage(SuccessRateArray)}% TAR EXAMEN</div>`;

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
                let year = 2020 - i;
                points.append(createCirlePoints(grade, year));
            }

            entryPoints.append(points);
            entryPoints.append(title)

            return entryPoints;
        }

        return cardFront;
    }
}

function successAverage(successArray){

    let x = 0;
    successArray.forEach(element => {
        element += x;
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

    gradeBox.append(gradeCircle);
    gradeBox.append(gradeYear);

    return gradeBox;
}