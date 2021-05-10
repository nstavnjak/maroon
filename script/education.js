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
    DB.COUNTRIES.forEach(e => {
        let option = document.createElement("option");
        option.innerHTML = e.name;
        document.querySelector("select1").append(option);
    });
    
    if (document.querySelector("select1").value === true){
        let countrySerch = document.querySelector("select1").value;
        DB.COUNTRIES.find(e => {
            e.name === document.querySelector("select1").value;
        });
    }
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