"use strict";

// Head
appendLink("../stylesheets/common_style.css");
appendLink("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap");
appendLink("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap");

// Meny
document.querySelector("nav").append(createMeny());
let menyButton = document.querySelector("#menyButton");

menyButton.addEventListener("click", e => {
    if (menyButton.textContent === "meny"){
        menyButton.textContent = "close";
    } else {
        menyButton.innerText = "meny";
    }

    document.querySelector("#menyLinks").classList.toggle("out");
    menyButton.classList.toggle("close");
    document.body.classList.toggle("no-scroll");
})


// Main


// Footer 
document.querySelector("footer").append(createFooter());
document.querySelector(".footer").append(createArrowUp());

// Functions
function createFooter() {
    let footerElement = document.createElement("div");
    footerElement.classList.add("footer");

    footerElement.innerHTML = `
         <div id="footerLinks">
            <a href="../html/index.html" id="footerHem" class="footerText">Hem</a>
            <a href="../html/education.html" id="footerUtbildining" class="footerText">Utbildning</a>
            <a href="../html/quiz.html" id="footerTest" class="footerText">Test</a>
            <a href="../html/faq.html" id="footerFaq" class="footerText">faq</a>
        </div>
        <div id="copyright">
            <p>Copyright © 2021 exchanger</p> 
            <p>all rights reserved | site by Maroon 3</p>
        </div>
    `;

    return footerElement;
}

function createArrowUp(){
    let arrowButton = document.createElement("div");
    arrowButton.classList.add("arrowUp");

    arrowButton.innerHTML = `<span>&#8593;</span>`;
    
    document.querySelector(".footer").append(arrowButton);
    arrowButton.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });

    return arrowButton;
}

function appendLink(link){
    let headElement = document.createElement("link");
    headElement.setAttribute("href", link);
    headElement.setAttribute("rel", "stylesheet");
    document.querySelector("head").append(headElement);
}

function createMeny(){
    let nav = document.createElement("div");
    nav.classList.add("menyWrapper");

    // The visible
    let logo = document.createElement("div");
    logo.setAttribute("id", "logo");
    logo.textContent = `xchanger`;
    let menyButton = document.createElement("button");
    menyButton.setAttribute("id", "menyButton");
    menyButton.textContent = `meny`;
    
    // The invisible
    let menyLinks = document.createElement("div");
    menyLinks.setAttribute("id", "menyLinks")
    menyLinks.innerHTML = `
        <a href="../html/index.html">HEM</a>
        <a href="../html/education.html">UTBILDNINGAR</a>
        <a href="../html/quiz.html">TEST</a>
        <a href="..//html/faq.html">FAQ</a>
        <div id="navcopyright">Copyright © 2021 exchanger | all rights reserved</div>`;

    
    nav.append(logo, menyButton, menyLinks);
    return nav;
}

function createBack(cityObj){

    let cardBack = document.createElement("div");
    cardBack.classList.add("programCardFace");
    cardBack.classList.add("back");

    let scrollDiv = document.createElement("div");
    scrollDiv.classList.add("scroll");
    scrollDiv.append(getCityInfo(cityObj), getRatings(cityObj), createStudentsComments(cityObj));
    cardBack.append(scrollDiv);
    // NOT done, kanske ändra med bilderna? Slider?
    function getCityInfo(cityObj){
        let div = document.createElement("div");
        let country = COUNTRIES.find(c => c.id === cityObj.countryID);

        let cityInfo = document.createElement("div");
        cityInfo.classList.add("cityInfo");

        let landCountryParent = document.createElement("div");
        let cityTitle = document.createElement("h1");
        let countryTitle = document.createElement("h2");
        
        cityTitle.textContent = cityObj.name;
        countryTitle.textContent = country.name;
        

        let visum = document.createElement("div");
        visum.textContent = `visum`;
        if (country.visa){
            visum.classList.add("green");
        } else {
            visum.classList.add("red");
        }
        
        landCountryParent.append(cityTitle, countryTitle);
        cityInfo.append(landCountryParent, visum);

        let cityPictureWrapper = document.createElement("div");
        cityPictureWrapper.classList.add("cityPictureWrapper");
        
        cityObj.imagesNormal.forEach( image => {
            let img = document.createElement("img");
            img.setAttribute("src", `../Images/${image}`);
            cityPictureWrapper.append(img);
        })

        let cityText = document.createElement("p");
        cityText.classList.add("cityText");
        cityText.textContent = `${cityObj.text}`;
        div.append(cityInfo, cityPictureWrapper, cityText);
        
        return div;
    }

    // done
    function getRatings(cityObj){
        let ratings = document.createElement("div");

        let comments = COMMENTS_CITY.filter(comment => comment.cityID === cityObj.id);
    
        ratings.append(circleRating(comments, "out", "Nattliv"), circleRating(comments, "food", "Matkultur"), circleRating(comments, "accomodation", "Boende"));
        
        return ratings;
    }

    // done
    function circleRating(array, theme, title){
        
        let counter = 0;
        array.forEach(element => {
            counter = counter + element.stars[`${theme}`];
        }); 
        
        let rating = document.createElement("div");
        rating.classList.add("rating");
        let titleElement = document.createElement("h1");
        titleElement.textContent = title;
        let circleRating = document.createElement("div");
        circleRating.classList.add("circleRating");
        circleRating.textContent = `${(counter/array.length).toFixed()} / 5`;

        rating.append(titleElement, circleRating);
        return rating;
    }
    
    // done
    function createStudentsComments(cityObj){
        let comments = COMMENTS_CITY.filter(comment => comment.cityID === cityObj.id);
        let commentParent = document.createElement("div");
        
        comments.sort((a, b) => b.date.year - a.date.year);
        
        comments.forEach(comment => {
            let commentDiv = document.createElement("div");
            commentDiv.classList.add("comment");

    
            let sum = comment.stars.out + comment.stars.food + comment.stars.accomodation;
           
           
            commentDiv.innerHTML = `
                <div>
                    <div>
                        <h1>${comment.alias}</h1>
                        <h2>${comment.date.year}.${comment.date.month}.${comment.date.day}</h2>
                    </div>
                    <div>
                        <h2>${(sum/3).toFixed()}/5</2>
                        <div class="bar">
                            <div class="visible bar"></div>
                        </div>
                    </div>
                </div>
                <p>"${comment.text}"</p>`;
            
            
            
            commentParent.append(commentDiv);
           
        });
        return commentParent;
    }
    return cardBack;
    
}