
// Head
appendLink("../stylesheets/faq.css");

// Meny


// Main
const faqQuestions = [
    {
        id:0,
        question: "Hur gör jag för att plugga utomlands?",
        answers: `Det finns tre olika sätt för hur du gå tillväga om du vill plugga utomlands. Du kan välja att köra solo och därmed bli en “freemover-student”. Då får du välja helt fritt vart i hela världen du vill åka, hur länge du vill vara borta och när du ska åka. Det är dock viktigt att ha i åtanke att du även måste fixa allt det praktiska själv med. Ansökan, resan, bostad, försäkring, visum, hela rubbet!

        Du kan även välja att göra ett utbytesår på den högskolan eller universitetet där du studerar. Antingen kan du gå via skolan eller en organisation som hjälper dig.
        
        Det tredje alternativet är att gå via en förmedlare, exempelvis KILROY. En förmedlare hjälper till och stöttar dig hela vägen från dess att du går i tankarna på att vilja plugga utomlands, till du kommer hem igen. Genom att gå via en förmedlare slipper du tänka på att det praktiska som behöver lösas, utan du kan istället fokusera på det häftiga äventyret som väntar!`,
    },
    {
        id:1,
        question: "Vem kan plugga utomlands?",
        answers: `
        Alla som är är kvalificerade för en högre utbildning vid universitet i Europa kan plugga utomlands, ta en fullständig kandidatexamen, masterexamen eller studera 1-2 terminer utomlands. Du kan också plugga utomlands efter gymnasiet även om du inte är ansluten till en svensk utbildning för tillfället.

        Till exempel kan du läsa en termin i USA eller i Australien för att se om vissa ämnen och områden är intressanta samtidigt som du upplever ditt vildaste utländska äventyr. Du kan också plugga ett år på College i USA eller läsa Academic English som bland annat gör det möjligt för dig att undervisa engelska både hemma och i utlandet.  
        `,
    },
    {
        id:2,
        question: "Var och vad ska jag studera?",
        answers: `Det kan vara bra att ha en idé om var i världen du vill studera. Ibland blir det inte heller som planerat. Du kanske alltid drömt om att studera i Nya Zeeland men det visar sig att Australien har bättre program, gå in med ett öppet sinne!

        Du kan studera i stort sett vad som helst, några exempel är:
        
        Arkitektur
        Handel
        Dans
        Kriminologi
        Utbildning
        Sport
        Konst
        Grafisk design
        Skådespel
        Och mycket, mycket mer...`,
    },
    {
        id:3,
        question: "Kan jag studera till läkare utomlands?",
        answers: `Kort och gott - svar JA! Eftersom intagningspoängen för att studera till läkare i Sverige är höga är det vanligt att studera till läkare utomlands.`,  
    },
    {
        id:4,
        question: "Vad kostar det att plugga utomlands?",
        answers: `Hur mycket det kostar att plugga utomlands beror på vilken skola du väljer, vilken utbildning och längden på utbildningen. Utgifterna som tillkommer när du pluggar utomlands är bland annat kursavgift, boende, nöjen och försäkring. Hör av dig till våra studierådgivare om vill du veta mer exakt vad det kommer kosta för dig att studera utomlands.`,        
    },
    {
        id:5,
        question: "Kan jag få stipendier för mina utlandsstudier?",
        answers: `Det kan du!`,         
    },
    {
        id:6,
        question: "Hur översätter jag mina betyg?",
        answers: `Det finns lite olika sätt som du kan få dina betyg översatta från svenska till engelska. Väljer du att göra ett utbytesår via ditt universitet eller högskola så brukar skolan hjälpa till att översätta dina betyg direkt. Det brukar även vara möjligt att få hjälp av sin gymnasieskola vid översättning av betyg. Ytterligare ett alternativ är att anlita en auktoriserad översättare.

        Be din skola om att få en extra kopia av betyget som de sätter en stämpel på. Vissa universitet kan nämligen kräva att få en certifierad kopia av ditt betyg. `,          
    },
    {
        id:7,
        question: "Är min utbildning CSN-berättigad?",
        answers: `Samtliga universitet och college som KILROY representerar är ackrediterade och godkända av Centrala Studiestödsnämnden. Detta innebär att du kan söka studiemedel från CSN för de allra flesta av de utbildningar som skolorna erbjuder. Det kan dock förekomma vissa kortare kurser och certifikatsutbildningar som inte berättigar till studiemedel. Vi hjälper dig gärna att kolla upp vilka stipendier du kan söka samt räkna på en studiebudget!`,         
    },
    {
        id:8,
        question: "När, var och hur ska jag ansöka till universitetet?",
        answers: `När du har bestämt dig vilket universitet och vilka kurser du vill läsa utomlands är det dags att börja jobba på en ansökan. `,         
    },
    {
        id:9,
        question: "När ska jag boka flygresan?",
        answers: `Efter att du blivit antagen till ditt drömuniversitet hjälper vi dig med glädje att hitta de bästa och billigaste flygbiljetterna, plus en bra reseförsäkring. I de flesta fallen kan vi ge dig bättre erbjudanden med större flexibilitet än de som du hittar här på hemsidan. De erbjudanden som våra reseexperter tar fram åt dig är inte bindande på något sätt – du bestämmer helt själv om du vill acceptera dealen eller inte. Då vi har specialavtal några av de största flygoperatörerna kan vi dessutom ta fram extra billiga flygbiljetter till unga och studenter.`,         
    },
    {
        id:10,
        question: "Behöver jag någon extra försäkring när jag pluggar utomlands?",
        answers: `Det kan vara en djungel att ta reda på vilken typ av försäkring du behöver teckna när du pluggar utomlands, men våra studierådgivare kan vägleda dig genom det!`,          
    },
    {
        id:11,
        question: "Vilka regler gäller för mitt pass och visum när jag studerar utomlands?",
        answers: `Vi rekommenderar att läsa på om pass och visumregler innan du reser utomlands för att plugga. Det är svårt att vägleda ditt pass och visum i allmänhet eftersom reglerna varierar beroende på destination, nationalitet och typ av visum du ansöker om.

        De flesta länder kräver att ditt pass är giltigt minst 6 månader efter ditt planerade resedatumet. Undersök de regler som gäller för dig vid antingen UD eller på den lokala ambassaden för det landet du ska plugga i.`,          
    },
    {
        id:12,
        question: "Ska jag byta adress när jag pluggar utomlands?",
        answers: `Det beror på hur länge du ska plugga utomlands. Den nuvarande regeln är att om du ska plugga utomands i minst ett år måste du registrera dig hos skatteverket.`,         
    },
    {
        id:13,
        question: "Vilka vaccinationer behöver jag?",
        answers: `Du kan behöva en del vaccinationer innan du åker utomlands för att plugga. Antalet och typen av nödvändiga vaccinationer beror på vart i världen du åker, hur länge du ska vara där samt vilka vaccinationer du tidigare fått.

        Kanske drömmer du om att att resa till andra länder efter din utbildning? Vi rekommenderar att du läser mer om vaccinationer eller kontaktar din läkare för rekommendationer. Vissa vaccinationer behövs ge mer än en gång, därför kan det vara en bra idé att vara ute i god tid för vaccinationer.`,        
    },
    {
        id:14,
        question: "Ska jag skapa ett bankkonto medan jag pluggar utomlands?",
        answers: `Det kan vara en bra idé att skapa ett lokalt bankkonto när du pluggar utomlands. I vissa länder kan det gå fort att skapa ett konto medan i andra länder är det en längre process. Du måsta ha en premanent adress och kom ihåg alla dina viktiga papper innan du tar dig ner till banken för att prata mer med dem.

        Under tiden kan du betala kontant eller ta ut pengar från ditt svenska bankkonto. Se till att du har tillräckligt med pengar för att klara dig under tiden. Vissa svenska banker samarbetar med banker utomlands. Kontrollera med din bank hemma om samarbetsavtal med banker i ditt nyta land. Det kan förenkla processen att skapa ett bankkonto utomlands.`,       
    },
    {
        id:15,
        question: "Vart kan jag bo när jag pluggar utomlands?",
        answers: `Det här är en av studenternas största problem, och är mycket sällan ett problem. Alla elever som vi skickat utomlands har hittat en bra plats att bo. Våra studierådgivare kan berätta allt om möjligheterna på det enskilda universitet eller land du vill plugga i. Vid vissa universitet och högskolor är det viktigt att ansöka om att stanna på skolans campus och vid andra universitet rekommenderar vi att du hittar ditt eget rum i ett hus eller lägenhet tillsammans med andra lokala eller internationella studenter.

        Många universitet erbjuder hjälp och vägledning för internationella studenter och vi kan hjälpa dig att hitta ett bra och centralt vandrarhem eller hotell för de första 14 dagarna eller mer, så kan du kommer dit med lugn och ro och börja leta efter en plats att bo på vid ankomst. Det är ofast lättare att hitta bostäder på plats än att göra det hemifrån.
        
        Var noga med att tänka på vad du letar efter innan du börjar. Om du skulle vilja bo nära många andra studenter kan de vara en bra idé att bo på ett collegehem. Om du vill ha din egen plats där du kan vara ensam är det ett bättre alternativet att hitta en lägenhet utanför campus. Kom ihåg att ett bostadsavtal ibland är bindande under en längre tidsperiod, så du måste vara säker på att du har hittat rätt innan du skriver under.`,          
    },
    {
        id:16,
        question: "Behöver jag skaffa nytt SIM-kort till mobilen?",
        answers: `Vill du vara snäll mot plånkan? Då kan det vara bra att skaffa ett nytt SIM-kort! KILROY har tillsammans med e-kit tagit fram ett erbjudande för att hjälpa dig hålla kontakten med familj och vänner under dina studier utomlands, samtidigt som du håller kostnaderna nere. Med e-kit SIM-kort tar du emot samtal både lokalt och globalt, samt mobilsurfar till en lägre kostnad än om du använder ditt svenska SIM-kort eller skaffar ett nytt SIM-kort på plats i ditt studieland.`,         
    },
    {
        id:17,
        question: "Hur blir det när jag kommer hem från utlandsstudier?",
        answers: `När du drog igång med dina utlandsstudier var allt nytt och spännande, men efter ett tag vanda du dig vid att både plugga på en nya skola, befinna dig i ett nytt skolsystem och dessutom ha din vardag i en helt annan kultur än den du är van vid. Att gå tillbaka till ditt ”normala liv” hemma i Sverige kan därför nästan bli, tro det eller ej, som en mindre kulturchock.

        Dina lärdomar och erfarenheter som du samlat på dig under din tid utomlands kan ha förändrat din syn på saker och ting och däribland hur vissa grejer fungerar där hemma. Men se det här som något positivt! Du har både blivit visare och dessutom är du nu hemma hos dina när och kära.  Och vem vet, wanderlusten har kanske fångat dig och snart är du ute på resande fot igen.`,           
    },
    {
        id:18,
        question: "Hur tillgodoräknar jag mina kurser från utlandet?",
        answers: `1. Första steget är att få förhandsgodkännande av de kurser du planerar att ta innan du åker.

        2. Det andra steget är att få de kurser du faktiskt studerade utomlands godkända av ditt universitet i Sverige när du kommer tillbaka.
        
        Denna process kan vara lite förvirrande eftersom att du först måste få ett godkännande av de kurser du vill läsa och ett slutgilitigt godkännande på att du får de kurser du faktisikt har studerat godkända när du kommer tillbaka igen.
        
        Det kan vara svårt att få information om vilka kurser du kan läsa på universitetet utomlands och när du börjar dina studier utomlands kanske du inser att du skulle föredra att ta andra kurser. De flesta universitet kommer inte att ha något emot att du ändrar dina planer, men om du inte har ansökt om tillgodoräknande av just de kurserna vid ditt universietet i Sverige kanske de sedan inte ens överväger att godkänna de kurser du faktiskt har tagit i slutänden. Det är därför viktigt att du kontrollerar hur flexibelt ditt universitet är i denna process innan du reser.
        
        Tillgodoräknandeprocessen av kurser från utländska universitet varierar från universitet till universitet i Sverige. Kontakta en studievägledare vid just ditt universitet, och de kommer att kunna hjälpa dig att komma igång med processen.`,          
    },
    {
        id:19,
        question: "Hur söker jag jobb på bästa sätt efter jag har pluggat utomlands?",
        answers: `En mastersexamen från ett annat land är ofta mycket specialiserat med ett professionellt fokus. Många utländska universitet har ett nära samarbete med berörda industrier och detta kommer att vara en fördel efter examen. Allt som allt kommer detta att göra dig mycket attraktiv på arbetsmarknaden efter examen.

        En del arbetsgivare söker internationell kompetens vid anställning, men de vet inte alltid exakt vilken typ av internationell kompetens de söker. På grund av detta är det viktigt att du sätter dina internationella kompetenser i ord.
        
        T.ex "Jag har fått en större förståelse för kulturen i USA eftersom jag har läst kurser i amerikansk kultur och politik samtidigt som jag upplevde vardagen och politiken i USA. Min akademiska engelska har förbättrats och jag känner mig fullt kapabel att delta i kontakter med utländska företag."`,         
    },
]

createFaqQuestionField(faqQuestions);

// Footer 


// Functions

function createFaqQuestionField(questions){
    let faqContainer = document.createElement("div");
    faqContainer.classList.add("faqContainer");
    let faqTitle = document.createElement("h1");
    faqTitle.classList.add("faqTitle");
    faqTitle.innerText = "FAQ";

    faqContainer.prepend(faqTitle);

    let faqQuestionDiv = document.createElement("div");
    faqQuestionDiv.classList.add("faqQuestionDiv");

    questions.forEach(question => {
        let faqQuestionBox = document.createElement("div");
        faqQuestionBox.classList.add("faqQuestionBox");

        let topBox = document.createElement("div");
        topBox.classList.add("top");

        let downArrow = document.createElement("div");
        downArrow.classList.add("DownArrowFaq");
        downArrow.innerHTML = "&#8595;";
        
        let LongArrow = document.createElement("div");
        LongArrow.classList.add("LongArrowFaq");
        LongArrow.classList.add("hide");
        LongArrow.innerHTML = "&#8627;";

        let questionText = document.createElement("h2");
        questionText.innerText = `${question.question}`;

        topBox.append(downArrow,LongArrow,questionText);

        let answerBox = document.createElement("div");
        answerBox.classList.add("answerBox");
        answerBox.classList.add("hide");
        answerBox.innerHTML = `
            <p class="faqAnswer">${question.answers}</p>
        `;

       faqQuestionBox.addEventListener("click",()=>{
           
            faqQuestionBox.classList.toggle("longer");
            downArrow.classList.toggle("hide");
            LongArrow.classList.toggle("hide");
            answerBox.classList.toggle("hide");
       })
       faqQuestionBox.append(topBox);
        faqQuestionBox.append(answerBox);
        faqQuestionDiv.append(faqQuestionBox);
    });

    faqContainer.append(faqQuestionDiv);

    document.querySelector("main").append(faqContainer);
    
}

let questionsBox = document.querySelectorAll(".faqQuestionBox");
