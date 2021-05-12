"use strict";

// Head


// Meny


// Main


// Footer 


// Functions
createSearchForm();
createOPT();

function createSearchForm(){
    let searchForm = document.createElement("div");
    searchForm.setAttribute("id", "searchForm");

    let inputField = document.createElement("input");
    inputField.setAttribute("id", "inputField");

    let select1 = document.createElement("select");
    select1.setAttribute("id", "select1");

    let select2 = document.createElement("select");
    select2.setAttribute("id", "select2");

    let search = document.createElement("button");
    search.setAttribute("id", "search");

    document.querySelector("body").append(searchForm, inputField, select1, select2, search);
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

function updateCityByCountry(){

}

function createSortAlternative(){

}

function sortProgram(){

}

function createCard(){
    

    function createFront(){

        function getProgrameSeats(){

        }

        function getProgrameGraduating(){

        }

        function getProgrameEntrypoints(){

        }
    }
}