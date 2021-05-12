"use strict";

// Head
appendLink("../stylesheets/education.css");

// Meny


// Main
document.body.append(createSortAlternative());

// Functions

// function createSearchForm(){

// }

// function createOPT(){

// }

// function updateCityByCountry(){

// }

function createSortAlternative(){
    let sortAlt = document.createElement("select");
    sortAlt.classList.add("sortAlt");
    sortAlt.setAttribute("value", "Sortera");

    sortAlt.innerHTML = `
        <option value ="sortera">Sortera</option>
        <option value ="aTillö">Sortera program a - ö</option>
        <option value ="öTilla">Sortera program ö - a</option>
        <option value ="stigande">Antagningspoäng, stigande</option>
        <option value ="fallande">Antagningspoäng, fallande</option>
    `;
    return sortAlt;
}

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