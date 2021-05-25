// Head
appendLink("../stylesheets/index.css")

// Variables

let guide = [
    {
        name: "utbildning",
        text: "Att välja utbildning kan vara svårt, vi hjälper dig på vägen. Under menyn hittar du till alla våra program och kurser som erbjuds runt om i 33 städer. Där kan du få reda på allt ifrån antagninspoäng till huruvida studenter upplevde värdstaden. Låt dig inte skrämmas utan sök på. I många fall har studenter som aldrig trott de skulle komma in faktiskt fått åka iväg, även om det inte var deras första val! Lycka till!",
        img: "spain_big_1.jpg"
    },
    {
        name: "stipendium",
        text: "Att ansöka om stipendium för utlandsstudier kan vara ett bra sätt att finansiera studier utomlands. Ett stipendium för utlandsstudier kan bekosta en del av terminsavgiften eller vara ett tillskott till din privata kassa för uppehälle, boende och andra utgifter. Det finns ett flertal olika former av stipendier när du skall studera utomlands och GLÖM INTE att söka dem. Du kommer inte ångra dig.",
        img: "france_big_2.jpg"
    },
    {
        name: "visum",
        text: "Att studera utomlands innebär en del förberedelser. Förutom att bli antagen och ha ett giltigt pass behöver du ibland också söka ett särskilt visum för att få stanna en längre period. När det väl är dags att söka visum finns vi här för att guida dig, men redan nu kan du läsa om vad som gäller för våra destinationer utanför EU på FAQ sidan.",
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

    let circle = document.createElement("button");
    circle.setAttribute("id", "callForAction");
    circle.innerHTML = `<a href="../html/quiz.html">Gör testet nu</a>`;

    let textDiv = document.createElement("div");
    textDiv.setAttribute("id", "firstText");
    textDiv.innerHTML = `
        <h1>Vilken stad är du?</h1>
        <h2>Testa vårt quiz idag,</h2>
        <p>kanske är det Barcelona!</p>`;

    let scroll = document.createElement("h2");
    scroll.setAttribute("id", "scrollForMore");
    scroll.innerHTML = `<p>Scroll för vidare</p><p>information!</p><p> 	
    &#748;</p>`;

    wrapper.append(circle, textDiv, scroll);
    return wrapper;
}

function circleFacts(){
    let wrapper = document.createElement("div");
    wrapper.classList.add("factParent");

    // Total programs
    let circleOne = document.createElement("div");
    circleOne.classList.add("circle", `numOne`);
    circleOne.innerHTML = `
        <h3 class="bigger"><b>${PROGRAMMES.length}</b></h3>
        <p>program</p>`;

    // Total citys
    let circleTwo = document.createElement("div");
    circleTwo.classList.add("circle", `numTwo`);
    circleTwo.innerHTML = `
        <h3 class="bigger"><b>${COUNTRIES.length}</b></h3> 
        <p>länder</p> `;

    // Total Countrys
    let circleThree = document.createElement("div");
    circleThree.classList.add("circle", `numThree`);
    circleThree.innerHTML = `
        <h3 class="bigger"><strong>${CITIES.length}</strong></h3> 
        <p>städer</p> `;



    wrapper.append(circleOne, circleTwo, circleThree);
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

    let comment = document.createElement("p");
    comment.classList.add("comment");

    textWrapper.append(title, paragraph);
    imgWrapper.append(img, comment);
    wrapper.append(textWrapper, imgWrapper);
    return wrapper;
}