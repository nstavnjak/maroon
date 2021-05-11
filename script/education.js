"use strict";

// Head


// Meny


// Main


// Footer 


// Functions

// function createSearchForm(){

// }

// function createOPT(){

// }

// function updateCityByCountry(){

// }

// function createSortAlternative(){

// }

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

function createBack(cityObj){

    let cardBack = document.createElement("div");
    cardBack.classList.add("programeCardBack");
    cardBack.classList.add("front");

    cardBack.prepend(getCityInfo(cityObj), getRatings(cityObj), createStudentsComments(cityObj));

    // NOT done, kanske ändra med bilderna? Slider?
    function getCityInfo(cityObj){
        let div = document.createElement("div");
        let country = DB.COUNTRIES.find(c => c.id === cityObj.countryID);

        let cityInfo = document.createElement("div");
        cityInfo.classList.add("cityInfo");

        let landCountryParent = document.createElement("div");
        let cityTitle = document.createElement("h1");
        let countryTitle = document.createElement("h1");
        
        cityTitle.textContent = cityObj.name;
        countryTitle.textContent = country.name;
        

        let visum = document.createElement("div");
        visum.textContent = `visum`;
        if (country.visa){
            visum.classList.add("green");
        } else {
            visum.classList.add("red");
        }

        landCountryParent.append(countryTitle, cityTitle);
        cityInfo.append(visum, landCountryParent);

        let cityPicture = document.createElement("img");
        cityPicture.setAttribute("src", `${}`);
        cityPicture.setAttribute("alt", "city");

        div.append(cityPicture, cityInfo);

        return div;
    }

    // done
    function getRatings(cityObj){
        let ratings = document.createElement("div");

        let comments = DB.COMMENTS_CITY.filter(comment => comment.cityID === cityObj.id);

        ratings.append(circleRating(comments, out, "Nattliv"), circleRating(comments, food, "Matkultur"), circleRating(comments, accomodation, "Boende"));
        
        return ratings;
    }

    // done
    circleRating(array, theme, title){
        
        let counter = 0;
        array.forEach(element => {
            element.stars[`${theme}`] += counter;
        });   
        
        let rating = document.createElement("div");
        rating.classList.add("rating");
        let titleElement = document.createElement("h2");
        let circleRating = document.createElement("div");
        circleRating.classList.add("circleRating");
        circleRating.textContent = `${counter/array.length} / 5`;

        rating.append(circleRating, titleElement);
        return circleRating;
    }
    
    // done
    function createStudentsComments(cityObj){
        let comments = DB.COMMENTS_CITY.filter(comment => comment.cityID === cityObj.id);
        let commentParent = document.createElement("div");

        comments.forEach(comment => {
            let commentDiv = document.createElement.length("div");
            commentDiv.classList.add("comment");

            let sum = comment.stars.out + comment.stars.food + comment.stars.housing;
            commentDiv.innerHTML = `
                <div>
                    <div>
                        <h1>${comment.alias}</h1>
                        <h3>${comment.date.year}.${comment.date.month}.${comment.date.day}</h3>
                    </div>
                    <div>
                        <h2>${sum/comment.stars.length}/5</2>
                        <div class="bar">
                            <div class="visible bar"></div>
                        </div>
                    </div>
                </div>
                <p>"${comment.text}"</p>`;
            
            
            
            commentParent.append(commentDiv);
        });
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
    gradeBox.append(gradeYear):

    return gradeBox;
}