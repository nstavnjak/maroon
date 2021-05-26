"use strict";

// Head
appendLink("../stylesheets/quiz.css");

// Meny

//Arrays

const questions = [
    {
        id:1,
        question: "Vilket klimat trivs du bäst i?",
        answers: [
            {value: 11, option: "Där det är varmt"},
            {value: 12, option: "Där det är svalt"},
            {value: 13, option: "Där det är blött"},
            {value: 14, option: "Där man har lite av allt"}
        ]           
    },
    {
        id:2,
        question: "Hur långt vill du åka?",
        answers: [
            {value: 21, option: "Spelar ingen som helst roll"},
            {value: 22, option: "Jag måste åka till en annan kontinent"},
            {value: 23, option: "Stannar gärna nära"},
            {value: 24, option: "Vill åka så långt bort som möjligt"}
        ]  
    },
 
    {
        id:3,
        question: "Vilken stadsform attraherar dig mest?",
        answers: [
            {value: 31, option: "Metropol"},
            {value: 32, option: "Storstad"},
            {value: 33, option: "Stad"},
            {value: 34, option: "Mindre stad"}
        ] 
    },
    {
        id:4,
        question: "Är du en soldyrkare?",
        answers: [
            {value: 41, option: "Jag avgudar solen"},
            {value: 42, option: "Vem gillar inte soliga dagar"},
            {value: 43, option: "Bara det inte blir för varmt"},
            {value: 44, option: "Jag trivs bäst i svala trakter"}
        ]      
    },
    {
        id:5,
        question: "Vilken del av världen fascinerar dig mest?",
        answers: [
            {value: 51, option: "Australien"},
            {value: 52, option: "Europa"},
            {value: 53, option: "Sydamerika"},
            {value: 54, option: "Nordamerika"}
        ]       
    },
    {
        id:6,
        question: "Hur stor badkruka är du?",
        answers: [
            {value: 61, option: "Vad är en badkruka?"},
            {value: 62, option: "Inte alls"},
            {value: 63, option: "Litegrann"},
            {value: 64, option: "Mycket, usch"}
        ]      
    },
    {
        id:7,
        question: "Gillar du att utmanas lingvistikt?",
        answers: [
            {value: 71, option: "Nej, jag vill enkelt kunna göra mig förstådd"},
            {value: 72, option: "Nej, men kan klara mig om det skulle behövas"},
            {value: 73, option: "En utmaningär aldrig fel så länge det inte är konstant"},
            {value: 74, option: "Ja det gör jag verkligen!"}
        ]        
    },
    {
        id:8,
        question: "Hur högt värderar du fotboll?",
        answers: [
            {value: 81, option: "Det betyder allt"},
            {value: 82, option: "Följer några ligor"},
            {value: 83, option: "Inte så intresserad förutom när VM och EM är hålls"},
            {value: 84, option: "Bryr mig inte alls"}
        ]         
    },
    {
        id:9,
        question: "Vad skulle vara det första du skulle ta med dig om du strandades på en ö? ",
        answers: [
            {value: 91, option: "Te"},
            {value: 92, option: "Paraply"},
            {value: 93, option: "Solkräm"},
            {value: 94, option: "Vet inte"}
        ]       
    },
    {
        id:10,
        question: "Välj en av följande matkombinationer?",
        answers: [
            {value: 101, option: "Fried dim sim, Chiko Roll, Vegemite"},
            {value: 102, option: "Ajiaco colombiano, Arepas, Burrito"},
            {value: 103, option: "Cevapi, Lax ,Waffle"},
            {value: 104, option: "Hamburgare, Milkshake, Limepaj"}
        ] 
    },
 ];

let mappedCities = CITIES.map(city => {
    return {
        "points": 0,
        "valuePoints": 0,
        "id": city.id,
        "name": city.name,
        "countryID": city.countryID,
        "sun": city.sun,
        "text": city.text,
        "imagesNormal": city.imagesNormal,
        "imagesBig": city.imagesBig
    }
});

let answears = [
    {
        "cityID": 0,
        "value": [103, 72, 102, 31, 64, 52, 41, 11, 81, 21, 23, 93]
    },
    {
        "cityID": 1,
        "value": [103, 102, 73, 33, 63, 52, 41, 82, 21, 23, 11, 93]
    },
    {
        "cityID": 2,
        "value": [103, 102, 34, 73, 63, 52, 41, 82, 21, 23, 11, 93]
    },
    {
        "cityID": 3,
        "value": [103, 31, 63, 71, 52, 42, 81, 21, 23, 93, 11, 14]
    },
    {
        "cityID": 4,
        "value": [103, 33, 62, 52, 72, 42, 82, 21, 23, 93, 11, 14]
    },
    {
        "cityID": 5,
        "value": [103, 33, 63, 73, 52, 41, 82, 21, 23, 93, 14]
    },
    {
        "cityID": 6,
        "value": [103, 34, 61, 52, 72, 41, 82, 21, 23, 11, 93, 11]
    },
    {
        "cityID": 7,
        "value": [101, 31, 61, 51, 42, 83, 71, 21, 22, 92, 11]
    },
    {
        "cityID": 8,
        "value": [101, 32, 61, 51, 41, 83, 21, 71, 22, 92, 11]
    },
    {
        "cityID": 9,
        "value": [101, 33, 62, 51, 41, 83, 21, 71, 22, 92, 11]
    },
    {
        "cityID": 10,
        "value": [103, 31, 64, 52, 43, 81, 21, 71, 91, 12, 13]
    },
    {
        "cityID": 11,
        "value": [103, 33, 63, 52, 44, 81, 21, 71, 91, 14, 13]
    },
    {
        "cityID": 12,
        "value": [103, 34, 64, 52, 43, 82, 71, 21, 91, 14, 13]
    },
    {
        "cityID": 13,
        "value": [103, 33, 64, 52, 43, 84, 21, 91, 14, 13]
    },
    {
        "cityID": 14,
        "value": [103, 34, 64, 52, 44, 84, 21, 71, 91, 23, 14, 13]
    },
    {
        "cityID": 15,
        "value": [103, 31, 62, 52, 44, 84, 21, 91, 71, 23, 14, 13]
    },
    {
        "cityID": 16,
        "value": [103, 33, 62, 52, 43, 82, 21, 92, 72, 23, 13, 14]
    },
    {
        "cityID": 17,
        "value": [103, 31, 62, 52, 43, 82, 21, 92, 23, 72, 12, 14]
    },
    {
        "cityID": 18,
        "value": [103, 33, 62, 52, 44, 83, 21, 92, 23, 72, 12, 14]
    },
    {
        "cityID": 19,
        "value": [103, 34, 63, 52, 43, 83, 21, 92, 23, 72, 13, 14]
    },
    {
        "cityID": 20,
        "value": [102, 31, 64, 53, 41, 21, 22, 93, 74, 11, 24]
    },
    {
        "cityID": 21,
        "value": [102, 34, 61, 53, 41, 21, 22, 93, 74, 11, 24]
    },
    {
        "cityID": 22,
        "value": [102, 104, 63, 54, 42, 84, 21, 22, 74, 93, 14, 24]
    },
    {
        "cityID": 23,
        "value": [102, 104, 62, 54, 41, 84, 21, 22, 73, 93, 11, 24]
    },
    {
        "cityID": 24,
        "value": [102, 104, 64, 54, 41, 84, 21, 22, 73, 93, 14, 24]
    },
    {
        "cityID": 25,
        "value": [104, 33, 62, 54, 43, 83, 21, 22, 71, 94, 14, 24]
    },
    {
        "cityID": 26,
        "value": [104, 32, 61, 54, 43, 83, 21, 22, 94, 71, 14, 24]
    },
    {
        "cityID": 27,
        "value": [104, 31, 63, 54, 42, 83, 21, 22, 94, 71, 13, 14, 24]
    },
    {
        "cityID": 28,
        "value": [104, 32, 64, 54, 43, 83, 21, 22, 94, 71, 14, 11, 24]
    },
    {
        "cityID": 29,
        "value": [104, 34, 62, 54, 42, 83, 21, 22, 94, 71, 11, 24]
    },
    {
        "cityID": 30,
        "value": [104, 33, 64, 54, 43, 83, 21, 22, 94, 71, 13, 24]
    },
    {
        "cityID": 31,
        "value": [102, 31, 61, 53, 42, 81, 21, 22, 94, 74, 11, 24]
    },
    {
        "cityID": 32,
        "value": [102, 32,  64, 53, 41, 81, 21, 22, 94, 74, 11]
    }
]

// Main

createQuizContainer();
document.querySelector(".questionsContainer").append(createStartButton());

let startButton = document.querySelector("#startButton");
let quizContainer = document.querySelector(".container");
let questionField = document.getElementById("question");
let answersField = document.getElementById("answersButtons");
let nextButton = document.getElementById("right");
let finishButton = document.getElementById("finish");
let selectedOpt = document.querySelector(".selectedOpt");

// Global array och variabel
let shuffliedQuestions, currentQuestionIndex=1;

//EventListener

//On click på start-knappen kallas på funktionen startQuiz
startButton.addEventListener("click", startQuiz);

// Startar quizet
function startQuiz() {

    //Gömmer start-knappen
    startButton.classList.add("hide");

    document.querySelector(".questionsContainer").classList.toggle("bigger");
    
    //Sorterar questions arrayen slumpmässig
    shuffliedQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
   
    //Appendar processbaren
    quizContainer.prepend(createProgressBar());

    setNextQuestion();
}


//On click på nästa pillen kallas på funktioner resetTheValuation, setNextQuestion och updateBar.
nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;

    let radioAnswers = document.querySelectorAll(`input[type="radio"]:checked`);

       answears.forEach(array=>{
            array.value.forEach(obj=>{  
                if(obj == parseInt(radioAnswers[0].value)){
                    let city = mappedCities.find(c => c.id === array.cityID)
                    city.valuePoints += 1 + parseInt(document.querySelector(".valuationInput").value);
                }   
            })       
        });
    
    
    //Vid sista frågan kallar på show funktionen och slutar quizet
    if(currentQuestionIndex === 10){
        
        document.querySelector("main").innerHTML= "";
        document.querySelector("main").append(createResult(mappedCities));
    }
    //Annars
   else{    
        updateBar(currentQuestionIndex);
        setNextQuestion();
   }
});

//On click på sluta knappen appendas funktionen createResult med argumentet mappedCities
finishButton.addEventListener("click",()=>{

    let radioAnswers = document.querySelectorAll(`input[type="radio"]:checked`);

       answears.forEach(array=>{
            array.value.forEach(obj=>{  
                if(obj == parseInt(radioAnswers[0].value)){
                    let city = mappedCities.find(c => c.id === array.cityID)
                    city.valuePoints += 1 + parseInt(document.querySelector(".valuationInput").value);
                }   
            })       
        });

    //Tömmer main
    document.querySelector("main").innerHTML = "";
    //appendas resultatet
    document.querySelector("main").append(createResult(mappedCities));

});

// Footer 

// Functions

//Tömmer questions containern och hämtar en fråga från den slumpmässig sorterat arrayen
function setNextQuestion(){
    clearTheAnswerfield();
    
    //Tömmer (tar bort) elementen som ligger i answer fältet 
    function clearTheAnswerfield(){
    document.querySelector(".navigateButtons").classList.add("hide");
 
    //Tömmer fältet tills den är tom.
     while(answersField.firstChild){
         answersField.removeChild(answersField.firstChild);
     }
 }
    showQuestion(shuffliedQuestions[currentQuestionIndex]);

    //Tar emot questions arrayen och sätter frågor och svar 
    function showQuestion(question){

    document.querySelector(".valuationDiv").classList.remove("hide");

    questionField.innerText = question.question;
    questionField.setAttribute("id",`${question.id}`);

    question.answers.forEach(answers => {
     
        let radio = document.createElement("input");
        radio.setAttribute("type","radio");
        radio.setAttribute("value",`${answers.value}`)
        radio.setAttribute("name",`question${question.id}`);
        radio.setAttribute("id",`${answers.value}`)
        radio.classList.add("hide");

        let button = document.createElement("label");
        button.classList.add("answer");
        button.innerText = answers.option;
        button.setAttribute("value", `${answers.value}`);
        button.setAttribute("for",`${answers.value}`)
 
        button.addEventListener("click", (el) =>{
           
            let allOptions = document.querySelectorAll(".answer");
            allOptions.forEach(e => {
                e.classList.remove("selectedOpt");
            });

            let valueOfChosenButton = parseInt(el.target.htmlFor);
            updateMappedCity(valueOfChosenButton,el.target.parentElement.previousSibling.id);
       
            el.target.classList.add("selectedOpt");

            document.querySelector(".navigateButtons").classList.remove("hide");
        });
        answersField.append(radio,button);
    });   
}
}

let key=0;
function updateMappedCity(buttonSelectedvalue, questionID){
   
        answears.forEach(o => {

            o.value.forEach(value => {
                if(value === buttonSelectedvalue){

                    mappedCities.forEach(city => {
                        if(city.id === o.cityID){
                            city.points +=1;   
                            
                        }     
                        
                    })
                    
                }       
            });

        })
    
        if(questionID.toString() === key.toString()[0]){

            answears.forEach(o => {
    
                o.value.forEach(value => {
                    if(value === key){
                    
                        mappedCities.forEach(city => {
                            if(city.id === o.cityID){
                                city.points -=1; 

                            } 
                            
                        })
                    }       
                });
    
            
            })
        }

    key = buttonSelectedvalue;
};


//Skapar quiz container - Frågor och Svar fältet
function createQuizContainer(){

    // Skapar quiz container
    let quizcontainer = document.createElement("div");
    quizcontainer.classList.add("container");

    //Skapar frågor container
    let questionsContainer = document.createElement("div");
    questionsContainer.classList.add("questionsContainer");

    //Skapar frågor div
    let question = document.createElement("div");
    question.setAttribute("id","question");

    //Värdering fältet
    let valuationDiv = document.createElement("div");
    valuationDiv.classList.add("valuationDiv");
    valuationDiv.classList.add("hide");
    valuationDiv.innerHTML = `
     
       <div class="valuationTextDiv">
       <p class="valuationText">Inte viktigt</p>
       <p class="valuationText">Mycket viktigt</p>
       </div>
    `;
    
    //Skapar input fältet
    let valuationInputDiv = document.createElement("div");
    valuationInputDiv.classList.add("valuationInputDiv");

    //Skapar input element
    let valuationInput = document.createElement("input");
    valuationInput.classList.add("valuationInput");
    valuationInput.setAttribute("type","range");
    valuationInput.setAttribute("min","1");
    valuationInput.setAttribute("max","10");
  

    //Skapar diven som visar värden på input elementen
    let numberOfInput = document.createElement("div");
    numberOfInput.classList.add("numberOfInput");
    numberOfInput.innerText = valuationInput.value;

    valuationInput.addEventListener("input",()=>{
        numberOfInput.innerText = valuationInput.value;
    })

    valuationInputDiv.prepend(valuationInput);
    valuationInputDiv.append(numberOfInput);
    valuationDiv.append(valuationInputDiv);

    //Skapar svar fältet 
    let answersButtons = document.createElement("div");
    answersButtons.setAttribute("id","answersButtons")
   
    //Skapar navigation fältet 
    let navigateButtons = document.createElement("div");
    navigateButtons.classList.add("navigateButtons","hide");

    //Skapar nästa pillen
    let rightArrow = document.createElement("button");
    rightArrow.setAttribute("id", "right");
    rightArrow.innerHTML = `&#x2192;`;

    //Skapar sluta-knappen
    let finish = document.createElement("button");
    finish.setAttribute("id", "finish");
    finish.innerHTML = `Sluta`;

    navigateButtons.append(finish,rightArrow);

    questionsContainer.append(question,answersButtons,valuationDiv,navigateButtons)

    quizcontainer.append(questionsContainer);
    document.querySelector("main").append(quizcontainer);
};

//Skapar start-knappen och returnerar den
function createStartButton(){
    let startButton = document.createElement("button");
    startButton.setAttribute("id","startButton");
    startButton.classList.add("startButton");
    startButton.innerText = "Starta testet";
    return startButton;
}

//Skapar processbaren
function createProgressBar(){
    let progress = document.createElement("div");
    progress.classList.add("progress");

    let bar = document.createElement("div");
    bar.classList.add("bar");
   
    bar.style.width = `0%`;
    progress.append(bar);

    return progress;
};

//Tar emot numret av det visade frågan och ändrar på längden av processbaren.
function updateBar(questionNumber){
    let lastProgress = document.querySelector(".bar");
    let level = questionNumber*10;
    lastProgress.style.width =level + "%";
}

//Tar emot den uppdaterade array enligt svar och returnerar resultat diven
function createResult(updatedArray){
    document.querySelector(".menyWrapper").style.display = "flex";
    document.querySelector("footer").style.display = "block";
    document.querySelector("main").style.height = "calc(100vh - 8rem)";

    //Skapar resultat containern
    let resultContainer = document.createElement("div");
    resultContainer.setAttribute("id","resultContainer");
    let sortedArrayByValuePoints = updatedArray.slice(0);
    //Sorterar arrayen efter Value points, den som har högst poäng hamnar längst upp
    sortedArrayByValuePoints.sort((a, b) => a.valuePoints > b.valuePoints ? -1 : 1);
    let sortedArrayByPoints = sortedArrayByValuePoints.slice(0,7);

    let storstMatch = document.createElement("div");
    storstMatch.classList.add("matched");
    storstMatch.innerHTML = `<h1 class="storstMatchTitle">Störst Match</h1>`;

    sortedArrayByValuePoints.splice(3);

    sortedArrayByValuePoints.forEach(city => {
        let programCard = document.createElement("div");
        programCard.classList.add("programCard");
        programCard.addEventListener("click", e => {
            programCard.style.scrollBehavior = "smooth";
            programCard.scrollTop = 0;
            programCard.classList.toggle("longer");
        })

       programCard.append(createBack(city))
        storstMatch.append(programCard);
    })

    //Sorterar arrayen efter points, den som har högst poäng hamnar längst upp
    sortedArrayByPoints.sort((a, b) => a.points > b.points ? -1 : 1);
    
    console.log(sortedArrayByPoints);
    let andraRek = document.createElement("div");
    andraRek.classList.add("matched");
    andraRek.innerHTML = `<h1 class="andraRekTitle">Andra Rekommendationer</h1>`;
    sortedArrayByPoints.forEach(city => {
        let programCard = document.createElement("div");
        programCard.classList.add("programCard");
        programCard.addEventListener("click", e => {
            programCard.style.scrollBehavior = "smooth";
            programCard.scrollTop = 0;
            programCard.classList.toggle("longer");
        })
        programCard.append(createBack(city));
        andraRek.append(programCard);
    })
    
    //storst match och andra rekommendationer divar appendas i resultat containern.
    resultContainer.append(storstMatch,andraRek);

    return resultContainer;
}
