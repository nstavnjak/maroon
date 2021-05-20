// Head
appendLink("../stylesheets/index.css")

// Variables

let guide = [
    {
        name: "utbildning",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "spain_big_1.jpg"
    },
    {
        name: "stipendium",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "france_big_2.jpg"
    },
    {
        name: "visum",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img: "australia_big_1.jpg"
    }
];



// Main
document.querySelector("main").append(callForAction(), circleFacts());
guide.forEach(element => {
    document.querySelector("main").append(guideLine(element.name, element.text, element.img, element.buttonText));
})


// Functions

function callForAction(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("first");


    return wrapper;
}

function circleFacts(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("factParent");

    // Total programs
    let rhombPR = document.createElement("div");
    rhombPR.classList.add("rhomb", `num0`);
    rhombPR.innerHTML = `
        <h3><b>${PROGRAMMES.length}</b></h3>
        <p>program erbjuds</p>`;

    // Total citys
    let rhombCI = document.createElement("div");
    rhombCI.classList.add("rhomb", `num1`);
    rhombCI.innerHTML = `
        <h3><b>${CITIES.length}</b></h3> 
        <p>olika städer runt om i</p> `;

    // Total Countrys
    let rhombCO = document.createElement("div");
    rhombCO.classList.add("rhomb", `num2`);
    rhombCO.innerHTML = `
        <h3><strong>${COUNTRIES.length}</strong></h3> 
        <p>länder</p> `;



    wrapper.append(rhombPR, rhombCI, rhombCO);
    return wrapper;
}

function guideLine(head, text, image, programCom){
    let wrapper = document.createElement("div");
    wrapper.classList.add("guidePart");

    // TEXT PART
    let textWrapper = document.createElement("div");
    
    let title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = `${head}`;

    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.textContent = `${text}`;

    // IMG PART 
    let imgWrapper = document.createElement("div");
    
    let img = document.createElement("img");
    img.classList.add("img");
    img.setAttribute("src", `../Images/${image}`);
document.querySelector("main").append(topPlace());

    let comment = document.createElement("p");
    comment.classList.add("comment");

    textWrapper.append(title, paragraph);
    imgWrapper.append(img, comment);
    wrapper.append(textWrapper, imgWrapper);
    return wrapper;
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