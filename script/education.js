"use strict";

// Head


// Meny


// Main
document.querySelector("main").append(createSearchForm());

// Footer 


// Functions
createSearchForm();
createOPT();

function createSearchForm(){
    let searchForm = document.createElement("div");
    searchForm.setAttribute("id", "searchForm");

    let inputField = document.createElement("input");
    inputField.setAttribute("id", "inputField");

    let selectParent = document.createElement("div");
    let select1 = document.createElement("select");
    select1.setAttribute("id", "select1 land");

    let select2 = document.createElement("select");
    select2.setAttribute("id", "select2 city");

    let searchButton = document.createElement("button");
    searchButton.setAttribute("id", "search");
    selectParent.append(select1, select2);
    searchForm.append(inputField, selectParent, searchButton)

    return searchForm;
}


function createOPT(){
    for(let i = 1; i < 3; i++){
        let emptyOPT = document.createElement("option");
        emptyOPT.textContent = "";
        document.querySelector(`#select${i}`).append(emptyOPT);
    }
    
    COUNTRIES.forEach(e => {
        let option = document.createElement("option");
        option.textContent = e.name;
        document.querySelector("#select1").append(option);
    });
    
    document.querySelector("#select1").addEventListener("change", function(){
        console.log(document.querySelector("#select1").value);
        if(document.querySelector("#select1").value != false){
            console.log("hej");
        }
        else {
            console.log("nej");
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