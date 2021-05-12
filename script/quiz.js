"use strict";

// Head
appendLink("stylesheets/quiz.css");

// Meny
document.body.append(createProgressBar());

// Main

const questions = [
    {
        "id":1,
        "question": "1) "
    },
    {
        "id":2,
        "question": "2) "
    },
    {
        "id":3,
        "question": "3)"
    },
    {
        "id":4,
        "question": "4)"
    },
    {
        "id":5,
        "question": "5)"
    },
    {
        "id":6,
        "question": "6)"
    },
    {
        "id":7,
        "question": "7)"
    },
    {
        "id":8,
        "question": "8)"
    },
    {
        "id":9,
        "question": "9)"
    },
    {
        "id":10,
        "question": "10)"
    },
 ];

// Footer 

// Functions

function createProgressBar(){
    let progress = document.createElement("div");
    progress.setAttribute("id", "Progress");

    let bar = document.createElement("div");
    bar.setAttribute("id", "bar");

    progress.append(bar);

    return progress;
}

