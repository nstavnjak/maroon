// Head
appendLink("../stylesheets/index.css")


// Meny


// Main
document.querySelector("main").append(topPlace());

// Footer 

// Functions

function topPlace(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("firstPageWrapper");
    
    let callForAction = document.createElement("div");
    callForAction.classList.add("callForAction");

    let circleAction = document.createElement("div"); 
    circleAction.classList.add("circleAction");


}

function createGuideParts(title, text, img){
    let wrapper = document.createElement("div");
    wrapper.classList.add("guidePart");

    let textBox = document.createElement("div");

    let pictureBox = document.createElement("img");
}