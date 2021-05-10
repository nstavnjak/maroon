"use strict";

// Head


// Meny


// Main


// Footer 
function createFooter() {
    let footerElement = document.createElement("footer");
    footerElement.classList.add("footer");

    footerElement.innerHTML = `
        <div id="footerHem" class="footerText">Hem</div>
        <div id="footerUtbildining" class="footerText">Utbildning</div>
        <div id="footerTest" class="footerText">Test</div>
        <div id="footerFaq" class="footerText">faq</div>
    `;
    document.body.append(footerElement);
}

// Functions

function appendLink(link){
    let headElement = document.createElement("link");
    headElement.setAttribute("href", link);
    headElement.setAttribute("rel", "stylesheet");
    document.head.append(headElement);
}

function meny(){

}

function filter(){

}

function loadMore(){

}

function createBack(cityobject){

    function getCityInfo(cityobject){
        
    }

    function getCityRatingNightlife(){

    }

    function getCityRatingFood(){
        
    }

    function getCityRatingHousing(){
        
    }

    function createStudentsComments(){

    }

}