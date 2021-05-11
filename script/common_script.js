"use strict";

// Head


// Meny


// Main


// Footer 
function createFooter() {
    let footerElement = document.createElement("footer");
    footerElement.classList.add("footer");

    footerElement.innerHTML = `
         <div id="footerLinks">
            <a id="footerHem" class="footerText">Hem</a>
            <a id="footerUtbildining" class="footerText">Utbildning</a>
            <a id="footerTest" class="footerText">Test</a>
            <a id="footerFaq" class="footerText">faq</a>
        </div>
        <button id="arrowUp"></button>
        <div id="copyright">
            <p>Copyright © 2021 exchanger</p> 
            <p>all rights reserved</p>
            <p>site by Maroon 3</p>
        </div>
    `;
    document.body.append(footerElement);
}

let arrowTop = document.getElementById("arrowUp");

arrowTop.addEventListener("click", scrollToTop());

function scrollToTop(){
    window.scrollToTop(0, 0);
}

// Functions

function appendLink(link){
    let headElement = document.createElement("link");
    headElement.setAttribute("href", link);
    headElement.setAttribute("rel", "stylesheet");
    document.querySelector("head").append(headElement);
}

function meny(){

}

function filter(){

}

function loadMore(){

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