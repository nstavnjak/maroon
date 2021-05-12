"use strict";

// Head
appendLink("../stylesheets/quiz.css");

// Meny


// Main

startTestButton();

let startButton = document.querySelector(".startButton");

startButton.addEventListener("click", ()=> {

    startButton.style = "display: none;"
    document.querySelector("#quiz").prepend(createProgressBar());
    
    questions.forEach( e => {

        document.querySelector("#quiz").append(getQuestion(e));
    
        if (e.id == 1){
            document.querySelector("#quiz").append(createRightArrow());
        } 
        
        else if(e.id == 10){
            document.querySelector("#quiz").append(createLeftArrow());
        } 
        
        else {
            document.querySelector("#quiz").append(createLeftArrow());
            document.querySelector("#quiz").append(createRightArrow());
        }
       
    });
});


const questions = [
    {
        id:1,
        question: "1) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:2,
        question: "2) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:3,
        question: "3) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:4,
        question: "4) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:5,
        question: "5) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:6,
        question: "6) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:7,
        question: "7) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:8,
        question: "8) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:9,
        question: "9) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
    {
        id:10,
        question: "10) ",
        options: {
            a: "",
            b: "",
            c: "",
            d: "",
        }, 
    },
 ];

// Footer 

// Functions

function createProgressBar(){
    let progress = document.createElement("div");
    progress.classList.add("progress");

    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.innerText = "10%";

    progress.append(bar);

    return progress;
};


let i = 0;
function movingBar(questinsId){
    if(i== 0){
        i = 1;
        let elem = document.getElementsByClassName("bar");
        let width = 10;
        let id = setInterval (frame(questinsId), 10);

        function frame(questinsId){
            if (width >= questinsId){
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}

function startTestButton(){
    let startButton = document.createElement("button");
    startButton.classList.add("startButton");
    startButton.innerText = "Start the test"
    document.getElementById("quiz").append(startButton);
}


function getQuestion(obj){
    let questionsDiv = document.createElement("div");
    questionsDiv.classList.add("questionsDiv");

    questionsDiv.innerHTML = `
        <div class = "question"> ${obj.question}</div>
    `;

    let answersDiv = document.createElement("div");
    answersDiv.classList.add("answersDiv");
    
    answersDiv.innerHTML = `
        <button class="option">${obj.options.a}</button>
        <button class="option">${obj.options.b}</button>
        <button class="option">${obj.options.c}</button>
        <button class="option">${obj.options.d}</button>
    `;

    return questionsDiv;
}

function createRightArrow (){
    let rightButton = document.createElement("button");
    rightButton.setAttribute("id", "right");
    rightButton.innerHTML = `&#8680;`;

    return rightButton;
}

function createLeftArrow (){
    let leftButton = document.createElement("button");
    leftButton.setAttribute("id", "left");
    leftButton.innerHTML = `&#8678;`;

    return leftButton;
}