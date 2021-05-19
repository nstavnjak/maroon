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
            {value: 11, option: "Soligt", optValue:"sol"},
            {value: 12, option: "Kallt", optValue:"kall"},
            {value: 13, option: "Blåsigt", optValue:"vind"},
            {value: 14, option: "Regnigt", optValue:"regn"}
        ]           
    },
    {
        id:2,
        question: "Vad tycker du om te?",
        answers: [
            {value: 21, option: "optionA", optValue:""},
            {value: 22, option: "optionB", optValue:""},
            {value: 23, option: "optionC", optValue:""},
            {value: 24, option: "optionC", optValue:""}
        ]  
    },
 
    {
        id:3,
        question: "Är kusten ett måste?",
        answers: [
            {value: 31, option: "optionA", optValue:""},
            {value: 32, option: "optionB", optValue:""},
            {value: 33, option: "optionC", optValue:""},
            {value: 34, option: "optionC", optValue:""}
        ] 
    },
    {
        id:4,
        question: "Är kusten ett måste?",
        answers: [
            {value: 41, option: "optionA", optValue:""},
            {value: 42, option: "optionB", optValue:""},
            {value: 43, option: "optionC", optValue:""},
            {value: 44, option: "optionC", optValue:""}
        ]      
    },
    {
        id:5,
        question: "Är kusten ett måste?",
        answers: [
            {value: 51, option: "optionA", optValue:""},
            {value: 52, option: "optionB", optValue:""},
            {value: 53,option: "optionC", optValue:""},
            {value: 54, option: "optionC", optValue:""}
        ]       
    },
    {
        id:6,
        question: "Är kusten ett måste?",
        answers: [
            {value: 61, option: "optionA", optValue:""},
            {value: 62, value: 14, option: "optionB", optValue:""},
            {value: 63, option: "optionC", optValue:""},
            {value: 64, option: "optionC", optValue:""}
        ]      
    },
    {
        id:7,
        question: "Är kusten ett måste?",
        answers: [
            {value: 71, option: "optionA", optValue:""},
            {value: 72, option: "optionB", optValue:""},
            {value: 73, option: "optionC", optValue:""},
            {value: 74, option: "optionC", optValue:""}
        ]        
    },
    {
        id:8,
        question: "Är kusten ett måste?",
        answers: [
            {value: 81, option: "optionA", optValue:""},
            {value: 82, option: "optionB", optValue:""},
            {value: 83, option: "optionC", optValue:""},
            {value: 84, option: "optionC", optValue:""}
        ]         
    },
    {
        id:9,
        question: "Är kusten ett måste?",
        answers: [
            {value: 91, option: "optionA", optValue:""},
            {value: 92, option: "optionB", optValue:""},
            {value: 93, option: "optionC", optValue:""},
            {value: 94, option: "optionC", optValue:""}
        ]       
    },
    {
        id:10,
        question: "10?",
        answers: [
            {value: 101, option: "optionA", optValue:""},
            {value: 102, option: "optionB", optValue:""},
            {value: 103, option: "optionC", optValue:""},
            {value: 104, option: "optionC", optValue:""}
        ] 
    },
 ];

let cities = [
    {
        "key":["varmt", "Spain"],
        "id": 0,
        "name": "Madrid",
        "countryID": 0,
        "sun": 305,
        "text": "Madrid \u00e4r Spaniens huvudstad och den st\u00f6rsta staden p\u00e5 Iberiska halv\u00f6n. Med sina 3,2 miljoner inv\u00e5nare i kommunen, och 6 miljoner i storstadsomr\u00e5det, \u00e4r Madrid en av de folkrikaste st\u00e4derna inom EU. Madrid \u00e4r bel\u00e4get p\u00e5 v\u00e4nstra stranden av Manzanares, ett litet tillfl\u00f6de till Tajos biflod Jarama.",
        "imagesNormal": [
            "madrid_normal_1.jpg",
            "madrid_normal_2.jpg",
            "madrid_normal_3.jpg",
            "madrid_normal_4.jpg"
        ],
        "imagesBig": [
            "madrid_big_1.jpg",
            "madrid_big_2.jpg"
        ]
    },
    {
        "key":["varmt", "Spain"],
        "id": 1,
        "name": "Sevilla",
        "countryID": 0,
        "sun": 310,
        "text": "Sevilla \u00e4r Spaniens fj\u00e4rde st\u00f6rsta stad med 1,3 miljoner inv\u00e5nare i storstadsomr\u00e5det. Staden grundades av romarna och \u00e4r fylld av gammal charm och historia, h\u00e4r finns bland annat Cristopher Columbus grav. Staden ligger i s\u00f6dra Spanien och \u00e4r av de varmaste i landet med en \u00e5rlig dygnsmedeltemperatur p\u00e5 18,6 \u00b0C.",
        "imagesNormal": [
            "sevilla_normal_1.jpg",
            "sevilla_normal_2.jpg",
            "sevilla_normal_3.jpg",
            "sevilla_normal_4.jpg"
        ],
        "imagesBig": [
            "sevilla_big_1.jpg",
            "sevilla_big_2.jpg"
        ]
    },
    {
        "key":["kallt", ""],
        "id": 2,
        "name": "Salamanca",
        "countryID": 0,
        "sun": 280,
        "text": "Salamanca \u00e4r en stad i v\u00e4stra delen av Spanien. Staden \u00e4r bel\u00e4gen i provinsen Kastilien och Leon och avst\u00e5ndet till huvudstaden Madrid (och d\u00e4rmed n\u00e4rmaste stora flygplats Barajas) \u00e4r ungef\u00e4r 21 mil. Sj\u00e4lva staden har 154 000 inv\u00e5nare, medan regionen har ett inv\u00e5narantal p\u00e5 354 000. Salamanca \u00e4r en genuin universitetsstad d\u00e4r ca 20% av alla inv\u00e5nare \u00e4r studerande.",
        "imagesNormal": [
            "salamanca_normal_1.jpg",
            "salamanca_normal_2.jpg",
            "salamanca_normal_3.jpg",
            "salamanca_normal_4.jpg"
        ],
        "imagesBig": [
            "salamanca_big_1.jpg",
            "salamanca_big_2.jpg"
        ]
    },
    {
        "key":["kallt", "PSG"],
        "id": 3,
        "name": "Paris",
        "countryID": 1,
        "sun": 222,
        "text": "Paris bes\u00f6ks \u00e5rligen av cirka 30 miljoner utl\u00e4ndska turister. \u00c5r 2019 rankades staden som den andra mest bes\u00f6kta i v\u00e4rlden, efter Bangkok. Popul\u00e4ra turistattraktioner \u00e4r bland annat Eiffeltornet, Notre-Dame, Sacr\u00e9-C\u0153ur, Louvren, Triumfb\u00e5gen och Champs-\u00c9lys\u00e9es.",
        "imagesNormal": [
            "paris_normal_1.jpg",
            "paris_normal_2.jpg",
            "paris_normal_3.jpg",
            "paris_normal_4.jpg"
        ],
        "imagesBig": [
            "paris_big_1.jpg",
            "paris_big_2.jpg"
        ]
    },
    {
        "key":["kallt", "PSG"],
        "id": 4,
        "name": "Lyon",
        "countryID": 1,
        "sun": 220,
        "text": "Lyon \u00e4r en stad och kommun i M\u00e9tropole de Lyon och \u00e4r huvudstad i regionen Auvergne-Rh\u00f4ne-Alpes i syd\u00f6stra Frankrike. \u00c5r 2017 hade Lyon 516 092 inv\u00e5nare, vilket g\u00f6r den till Frankrikes tredje st\u00f6rsta stad efter Paris och Marseille. Lyons storstadsomr\u00e5de med f\u00f6rorter utg\u00f6r med sina 2 214 068 inv\u00e5nare Frankrikes n\u00e4st st\u00f6rsta storstadsomr\u00e5de efter Paris.",
        "imagesNormal": [
            "lyon_normal_1.jpg",
            "lyon_normal_2.jpg",
            "lyon_normal_3.jpg",
            "lyon_normal_4.jpg"
        ],
        "imagesBig": [
            "lyon_big_1.jpg",
            "lyon_big_2.jpg"
        ]
    },
    {
        "key":["kallt", "PSG"],
        "id": 5,
        "name": "Toulouse",
        "countryID": 1,
        "sun": 287,
        "text": "Toulouse \u00e4r en storstad bel\u00e4gen i s\u00f6dra Frankrike vid floden Garonne. Toulouse \u00e4r k\u00e4nt som den rosa staden (la ville rose) eftersom de flesta \u00e4ldre byggnader \u00e4r byggda av ett lokalt producerat tegel som \u00e4r rosa. Staden \u00e4r \u00e4ven en stor universitetsstad med mer \u00e4n 100 000 studenter. Tolouse erjbuder allt fr\u00e5n cassoulet och fina japanska tr\u00e4dg\u00e5rdar till romerska museum.",
        "imagesNormal": [
            "toulouse_normal_1.jpg",
            "toulouse_normal_2.jpg",
            "toulouse_normal_3.jpg",
            "toulouse_normal_4.jpg"
        ],
        "imagesBig": [
            "toulouse_big_1.jpg",
            "toulouse_big_2.jpg"
        ]
    },
    {
        "key":["kallt", "PSG"],
        "id": 6,
        "name": "Nice",
        "countryID": 1,
        "sun": 312,
        "text": "Nice \u00e4r en stad bel\u00e4gen i syd\u00f6stra Frankrike, i regionen Provence-Alpes-C\u00f4te dAzur vid Medelhavskusten och Franska rivieran. Nice \u00e4r en stor turiststad. Den ligger vid Franska rivieran och har en stor m\u00e4ngd solturister fr\u00e5n b\u00e5de Frankrike och andra l\u00e4nder.",
        "imagesNormal": [
            "nice_normal_1.jpg",
            "nice_normal_2.jpg"
        ],
        "imagesBig": [
            "nice_big_1.jpg"
        ]
    },
    {
        "key":["kallt", ""],
        "id": 7,
        "name": "Melbourne",
        "countryID": 2,
        "sun": 270,
        "text": "Melbourne \u00e4r en hamnstad i syd\u00f6stra Australien och huvudstad i den australiska delstaten Victoria. Det \u00e4r Australiens n\u00e4st st\u00f6rsta stad med drygt 4,4 miljoner inv\u00e5nare (2015). Melbourne var huvudstad i Australien fr\u00e5n 1 januari 1901, d\u00e5 federationen bildades, fram till 9 maj 1927 d\u00e5 parlamentshuset i Canberra togs i bruk. Staden genomkorsas av floden Yarra.",
        "imagesNormal": [
            "melbourne_normal_1.jpg",
            "melbourne_normal_2.jpg"
        ],
        "imagesBig": [
            "melbourne_big_1.jpg"
        ]
    },
    {
        "key":["kallt", ""],
        "id": 8,
        "name": "Sidney",
        "countryID": 2,
        "sun": 310,
        "text": "Sydney \u00e4r Australiens st\u00f6rsta stad och ligger p\u00e5 landets \u00f6stkust. Ungef\u00e4r 4,3 miljoner m\u00e4nniskor bor i omr\u00e5det. Det \u00e4r det sk\u00f6na v\u00e4dret, arkitekturen och det unika hamnomr\u00e5det som gjort staden popul\u00e4r. Fler \u00e4n 2,5 miljoner turister bes\u00f6ker \u00e5rligen Sydney, och det \u00e4r just i hamnomr\u00e5det som bes\u00f6kare flockas. D\u00e4r finns stora turistattraktioner, s\u00e5 som det v\u00e4rldsber\u00f6mda operahuset och hamnens i\u00f6gonfallande h\u00e4ngbro.",
        "imagesNormal": [
            "sidney_normal_1.jpg",
            "sidney_normal_2.jpg",
            "sidney_normal_3.jpg",
            "sidney_normal_4.jpg"
        ],
        "imagesBig": [
            "sidney_big_1.jpg",
            "sidney_big_2.jpg"
        ]
    },
    {
        "id": 9,
        "name": "Canberra",
        "countryID": 2,
        "sun": 290,
        "text": "Canberra \u00e4r Australiens huvudstad. Den \u00e4r bel\u00e4gen p\u00e5 federalt territorium, Australian Capital Territory (ACT). Staden har drygt 350 000 inv\u00e5nare (2009) och \u00e4r Australiens \u00e5ttonde st\u00f6rsta stad samt den st\u00f6rsta stad som inte ligger vid kusten. Omr\u00e5det Canberra byggdes p\u00e5 och omr\u00e5det runt staden best\u00e5r av en blandning av eukalyptussavann, \u00f6ppna gr\u00e4smarker, buskmarker, tr\u00e4skmarker och torra eukalyptusskogar.",
        "imagesNormal": [
            "canberra_normal_1.jpg",
            "canberra_normal_2.jpg"
        ],
        "imagesBig": [
            "canberra_big_1.jpg"
        ]
    },
    {
        "key":["regnigt", "Machester"],
        "id": 10,
        "name": "London",
        "countryID": 3,
        "sun": 150,
        "text": "Det h\u00e4r \u00e4r inte bara vilken storstad som helst, London \u00e4r Europas st\u00f6rsta metropol med en unik personlighet formad av sina ikoniska landm\u00e4rken, \u00e5rhundraden av historia och sin trendiga mode-, konst- och matkultur. Staden \u00e4r p\u00e5 en och samma g\u00e5ng v\u00e4ldigt brittisk och samtidigt internationellt och londonborna \u00e4r lika bekv\u00e4ma med att diskutera v\u00e4dret som de senaste trenderna med pop-up restauranger och lokalbryggd \u00f6l. ",
        "imagesNormal": [
            "london_normal_1.jpg",
            "london_normal_2.jpg",
            "london_normal_3.jpg",
            "london_normal_4.jpg"
        ],
        "imagesBig": [
            "london_big_1.jpg",
            "london_big_2.jpg"
        ]
    },
    {
        "key":["regnigt", "Machester"],
        "id": 11,
        "name": "Manchester",
        "countryID": 3,
        "sun": 120,
        "text": "En av juvelerna i norra Englands krona \u00e4r Manchester. Det \u00e4r en levande stad med karakt\u00e4r, k\u00e4nd f\u00f6r sin l\u00e4ttsamma humor och sitt \u00f6verfl\u00f6d av kultur. H\u00e4r finns ett rikt kulturliv, bra mat- och dryckeskultur, och staden \u00e4r lika stolt \u00f6ver sin musikscen som sina fotbollslag.",
        "imagesNormal": [
            "manchester_normal_1.jpg",
            "manchester_normal_2.jpg",
            "manchester_normal_3.jpg",
            "manchester_normal_4.jpg"
        ],
        "imagesBig": [
            "manchester_big_1.jpg",
            "manchester_big_2.jpg"
        ]
    },
    {
        "key":["vind", ""],
        "id": 12,
        "name": "York",
        "countryID": 3,
        "sun": 140,
        "text": "York \u00e4r en stad och distriktshuvudort i North Yorkshire. Den ligger i enhetskommun York och riksdelen norra England, i den centrala delen av landet, 280 km norr om huvudstaden London. York ligger 17 meter \u00f6ver havet och antalet inv\u00e5nare \u00e4r 144 202.",
        "imagesNormal": [
            "york_normal_1.jpg",
            "york_normal_2.jpg"
        ],
        "imagesBig": [
            "york_big_1.jpg"
        ]
    },
    {
        "id": 13,
        "name": "Sheffield",
        "countryID": 3,
        "sun": 150,
        "text": "Sheffield \u00e4r en storstad i Sheffield i South Yorkshire, England. Den har f\u00e5tt sitt namn efter floden Sheaf som flyter genom staden. Orten har 518 090 inv\u00e5nare. Fr\u00e5n att huvudsakligen ha varit en industristad har staden utvecklat en bredare ekonomisk bas och \u00e4r en av de \u00e5tta st\u00f6rsta engelska st\u00e4derna utanf\u00f6r London. Storstadsomr\u00e5det (Sheffield Urban Area) har 640 720 inv\u00e5nare.",
        "imagesNormal": [
            "sheffield_normal_1.jpg",
            "sheffield_normal_2.jpg",
            "sheffield_normal_3.jpg",
            "sheffield_normal_4.jpg"
        ],
        "imagesBig": [
            "sheffield_big_1.jpg",
            "sheffield_big_2.jpg"
        ]
    },
    {
        "id": 14,
        "name": "Bath",
        "countryID": 3,
        "sun": 100,
        "text": "Bath \u00e4r en stad i grevskapet Somerset i sydv\u00e4stra England, Storbritannien. Staden grundades i floden Avons dalar runt naturliga heta k\u00e4llor d\u00e4r romarna byggde bad och ett tempel, vilket gav staden dess d\u00e5varande namn, Aquae Sulis. Edgar kr\u00f6ntes till kung av England i Baths klosterkyrka \u00e5r 973. Genom sina badanl\u00e4ggningar blev staden ett popul\u00e4rt resm\u00e5l under den georgianska eran.",
        "imagesNormal": [
            "bath_normal_1.jpg",
            "bath_normal_2.jpg"
        ],
        "imagesBig": [
            "bath_big_1.jpg"
        ]
    },
    {
        "id": 15,
        "name": "Edinburgh",
        "countryID": 3,
        "sun": 50,
        "text": "Edinburgh har en s\u00e4llsynt charm med smala och kullerstensg\u00e5ngar, som kallas st\u00e4nger p\u00e5 skotska. Staden \u00e4r ocks\u00e5 k\u00e4nd f\u00f6r sina m\u00f6rka h\u00f6rn d\u00e4r skr\u00e4mmande h\u00e4ndelser har \u00e4gt rum, dess majest\u00e4tiska byggnader, otaliga fascinerande museer som \u00e4r fria att bes\u00f6ka och s\u00e4rskilt stadens sn\u00e4lla och \u00f6ppna lokalbefolkningen. Alla ovan n\u00e4mnda g\u00f6r denna stad till en favorit bland dem som har bes\u00f6kt den.",
        "imagesNormal": [
            "edinburgh_normal_1.jpg",
            "edinburgh_normal_2.jpg"
        ],
        "imagesBig": [
            "edinburgh_big_1.jpg"
        ]
    },
    {
        "id": 16,
        "name": "Malmo",
        "countryID": 4,
        "sun": 150,
        "text": "Gr\u00f6na parker och sandstr\u00e4nder i kombination med en rik kultur, historia och modern konst \u2013 i Malm\u00f6 kan du g\u00e5 din egen v\u00e4g, bokstavligt talat. Fr\u00e5n den livliga, centrala shoppingdelen \u00e4r det bara en kort promenad till pittoreska gamla stan och Malm\u00f6hus slott. D\u00e4rifr\u00e5n kan du enkelt forts\u00e4tta till den moderna v\u00e4stra hamnen och njuta av utsikten \u00f6ver \u00d6resundsbron och Turning Torso. Och i Malm\u00f6 \u00e4lskar man mat, dryck och trevligt s\u00e4llskap, s\u00e5 du \u00e4r aldrig l\u00e5ngt fr\u00e5n en bra restaurang eller ett mysigt kaf\u00e9.",
        "imagesNormal": [
            "malmo_normal_1.jpg",
            "malmo_normal_2.jpg"
        ],
        "imagesBig": [
            "malmo_big_1.jpg"
        ]
    },
    {
        "id": 17,
        "name": "Stockholm",
        "countryID": 4,
        "sun": 150,
        "text": "Stockholm \u00e4r Sveriges huvudstad samt landets kulturella, politiska, mediala och ekonomiska centrum. Staden ligger vid M\u00e4larens utlopp i \u00d6stersj\u00f6n, p\u00e5 gr\u00e4nsen mellan landskapen S\u00f6dermanland och Uppland. Staden \u00e4r v\u00e4rldens femte nordligaste huvudstad bland sj\u00e4lvst\u00e4ndiga stater. ",
        "imagesNormal": [
            "stockholm_normal_1.jpg",
            "stockholm_normal_2.jpg",
            "stockholm_normal_3.jpg",
            "stockholm_normal_4.jpg"
        ],
        "imagesBig": [
            "stockholm_big_1.jpg",
            "stockholm_big_2.jpg"
        ]
    },
    {
        "id": 18,
        "name": "Uppsala",
        "countryID": 4,
        "sun": 120,
        "text": "Uppsala \u00e4r en t\u00e4tort i Uppland, centralort i Uppsala kommun och residensstad f\u00f6r Uppsala l\u00e4n. Den \u00e4r Sveriges fj\u00e4rde st\u00f6rsta t\u00e4tort med en befolkning p\u00e5 165 456 inv\u00e5nare (2020), medan hela kommunen har cirka 234 000 inv\u00e5nare (2020). Sedan 1164 \u00e4r Uppsala kyrkligt centrum i Sverige i och med dess \u00e4rkebiskopss\u00e4te inom Svenska kyrkan. Uppsala universitet, grundat 1477, \u00e4r det \u00e4ldsta s\u00e4tet f\u00f6r h\u00f6gre utbildning i Norden.",
        "imagesNormal": [
            "uppsala_normal_1.jpg",
            "uppsala_normal_2.jpg",
            "uppsala_normal_3.jpg",
            "uppsala_normal_4.jpg"
        ],
        "imagesBig": [
            "uppsala_big_1.jpg",
            "uppsala_big_2.jpg"
        ]
    },
    {
        "id": 19,
        "name": "Lund",
        "countryID": 4,
        "sun": 150,
        "text": "Lunds cirka 50 000 svenska och internationella studenter ger staden en s\u00e4rskild puls. Lunds universitet \u00e4r internationellt hyllat f\u00f6r sin forskning och sociala verksamhet. N\u00e5gra av Sveriges b\u00e4sta sk\u00e5despelare, komiker och musiker kommer fr\u00e5n Lund. H\u00e5ll utkik efter de m\u00e5nga publika studenttraditionerna, som students\u00e5ngarnas konsert 1 maj och Lund Comedy Festival.",
        "imagesNormal": [
            "lund_normal_1.jpg",
            "lund_normal_2.jpg"
        ],
        "imagesBig": [
            "lund_big_1.jpg"
        ]
    },
    {
        "id": 20,
        "name": "Santiago",
        "countryID": 8,
        "sun": 290,
        "text": "Santiago de Chile, oftast kallat enbart Santiago, \u00e4r Chiles huvudstad. Sj\u00e4lva kommunen har endast cirka 400 000 inv\u00e5nare, medan hela storstadsomr\u00e5det omfattar lite fler \u00e4n 6 miljoner inv\u00e5nare.",
        "imagesNormal": [
            "santiago_normal_1.jpg",
            "santiago_normal_2.jpg"
        ],
        "imagesBig": [
            "santiago_big_1.jpg"
        ]
    },
    {
        "id": 21,
        "name": "Valparaiso",
        "countryID": 8,
        "sun": 300,
        "text": "Valpara\u00edso \u00e4r en stad i centrala Chile, och \u00e4r huvudort f\u00f6r en region samt en provins med samma namn. Den \u00e5r en av Chiles viktigaste hamnst\u00e4der vid Stilla havets kust, och \u00e4r bel\u00e4gen i den centrala delen av landet, tv\u00e5 timmars bilf\u00e4rd nordv\u00e4st om huvudstaden Santiago. Folkm\u00e4ngden uppg\u00e5r till cirka 250 000 inv\u00e5nare. Under kolonialtiden f\u00f6rblev Valpara\u00edso en by med ett f\u00e5tal hus och en kyrka, men efter Chiles sj\u00e4lvst\u00e4ndighet 1817 blev staden den chilenska flottans f\u00f6rsta hamn och en port till frihandel.",
        "imagesNormal": [
            "valparaiso_normal_1.jpg",
            "valparaiso_normal_2.jpg"
        ],
        "imagesBig": [
            "valparaiso_big_1.jpg"
        ]
    },
    {
        "id": 22,
        "name": "Guadalajara",
        "countryID": 5,
        "sun": 260,
        "text": "Guadalajara \u00e4r en stad och kommun i v\u00e4stra Mexiko och \u00e4r den administrativa huvudorten f\u00f6r delstaten Jalisco. Den \u00e4r landets tredje st\u00f6rsta stad (efter Mexico City och Ecatepec de Morelos) och utg\u00f6r det n\u00e4st st\u00f6rsta storstadsomr\u00e5det, bara Mexico City \u00e4r st\u00f6rre.",
        "imagesNormal": [
            "guadalajara_normal_1.jpg",
            "guadalajara_normal_2.jpg"
        ],
        "imagesBig": [
            "guadalajara_big_1.jpg"
        ]
    },
    {
        "id": 23,
        "name": "Mexico City",
        "countryID": 5,
        "sun": 304,
        "text": "Mexico DF \u00e4r Mexicos huvudstad och har circa 21 miljoner inv\u00e5nare i storstadsomr\u00e5det vilket g\u00f6r staden till en av de folkrikaste i v\u00e4rlden. Huvudstaden \u00e4r det viktigaste ekonomiska, industriella och kulturella centret i landet. Staden ligger i ett omr\u00e5de pr\u00e4glat av 3 000 \u00e5r gammal pre-columbiansk kultur. Sj\u00e4lva stadens historia g\u00e5r dock bara tillbaka till perioden motsvarande europeisk medeltid. P\u00e5 grund av h\u00f6jden \u00f6ver havet har Mexico City ett behagligt subtropiskt h\u00f6glandsklimat. Endast mellan april och juni blir det mycket varmt mitt p\u00e5 dagen, tidvis \u00f6ver 30 \u00b0C, resten av \u00e5ret ligger dagstemperaturen runt 20 \u00b0C, n\u00e5got l\u00e4gre vintertid, n\u00e5got h\u00f6gre sommartid.",
        "imagesNormal": [
            "mexico city_normal_1.jpg",
            "mexico city_normal_2.jpg"
        ],
        "imagesBig": [
            "mexico city_big_1.jpg"
        ]
    },
    {
        "id": 24,
        "name": "Oaxaca",
        "countryID": 5,
        "sun": 300,
        "text": "Oaxaca \u00e4r en delstat i sydv\u00e4stra Mexiko, gr\u00e4nsande till Stilla havet i s\u00f6der. Oaxaca \u00e4r hemtrakt f\u00f6r bland annat urfolken mixtekerna och zapotekerna, men totalt finns det 16 erk\u00e4nda urfolk i regionen. Tack vare omr\u00e5dets karga och avsk\u00e4rmande terr\u00e4ng har urfolkens kultur i st\u00f6rre utstr\u00e4ckning \u00f6verlevt h\u00e4r, j\u00e4mf\u00f6rt med andra delar av Mexiko. I Oaxaca finns det rika arkeologiska och historiska platser, som t.ex. Monte Alb\u00e1n och Mitla.",
        "imagesNormal": [
            "oaxaca_normal_1.jpg",
            "oaxaca_normal_2.jpg"
        ],
        "imagesBig": [
            "oaxaca_big_1.jpg"
        ]
    },
    {
        "id": 25,
        "name": "Boston",
        "countryID": 6,
        "sun": 140,
        "text": "Boston \u00e4r huvudstad i delstaten Massachusetts i USA. Boston \u00e4r den mest befolkade staden i delstaten, och den st\u00f6rsta i regionen New England. \u00c5r 2005 hade staden 596 638 inv\u00e5nare, vilket g\u00f6r det till USA:s elfte st\u00f6rsta storstadsomr\u00e5de. Inv\u00e5narna i Boston kallas p\u00e5 engelska Bostonians.",
        "imagesNormal": [
            "boston_normal_1.jpg",
            "boston_normal_2.jpg"
        ],
        "imagesBig": [
            "boston_big_1.jpg"
        ]
    },
    {
        "id": 26,
        "name": "San Francisco",
        "countryID": 6,
        "sun": 160,
        "text": "San Francisco officiellt City and County of San Francisco \u00e4r en stad i norra Kalifornien i USA. Staden ligger p\u00e5 \u00e4nden av en halv\u00f6 mellan Stilla havet och San Franciscobukten. Det egentliga San Francisco har omkring en miljon inv\u00e5nare, men staden fungerar som nav f\u00f6r omr\u00e5det runt bukten (vilket \u00e4ven innefattar st\u00e4der som San Jose och Oakland) och i omr\u00e5det bor det cirka 8,4 miljoner m\u00e4nniskor.",
        "imagesNormal": [
            "san francisco_normal_1.jpg",
            "san francisco_normal_2.jpg"
        ],
        "imagesBig": [
            "san francisco_big_1.jpg"
        ]
    },
    {
        "id": 27,
        "name": "Washington",
        "countryID": 6,
        "sun": 203,
        "text": "Washington, D.C. \u00e4r huvudstaden i USA. H\u00e4r kan du hitta Vita huset, Washinton Monument och Lincoln Memorial. F\u00f6r den kulturellt intresserade \u00e4r staden \u00e4ven full av konstgallerior och National Gallery of Art. I Washington \u00e5terfinns traditioner och etniciteter fr\u00e5n v\u00e4rlden \u00f6ver, s\u00e5 att hitta god mat blir inga problem!",
        "imagesNormal": [
            "washington_normal_1.jpg",
            "washington_normal_2.jpg"
        ],
        "imagesBig": [
            "washington_big_1.jpg"
        ]
    },
    {
        "id": 28,
        "name": "New York",
        "countryID": 6,
        "sun": 135,
        "text": "New York \u00e4r ansedd som en v\u00e4rldsstad med ett starkt globalt inflytande inom ekonomi, massmedia, politik, utbildning, underh\u00e5llning och mode. Det \u00e4r v\u00e4rldens ledande finansiella centrum och huserar \u00e4ven FN:s h\u00f6gkvarter i stadsdelen Manhattan. Inv\u00e5narna kallas \"New Yorkers\". New Yorks mest k\u00e4nda smeknamn \u00e4r The Big Apple och har \u00e4ven kallats \"staden som aldrig sover\".",
        "imagesNormal": [
            "new york_normal_1.jpg",
            "new york_normal_2.jpg"
        ],
        "imagesBig": [
            "new york_big_1.jpg"
        ]
    },
    {
        "id": 29,
        "name": "Buffalo",
        "countryID": 6,
        "sun": 250,
        "text": "Buffalo \u00e4r den n\u00e4st st\u00f6rsta staden i delstaten New York med en yta av 136,0 km\u00b2 och en befolkning som uppg\u00e5r till cirka 285 000 (2003). Den \u00e4r bel\u00e4gen vid \u00f6stra \u00e4nden av Lake Erie vid utloppet i Niagarafloden. Buffalos n\u00e4rmaste stora grannstad \u00e4r Toronto i Kanada. Buffalo \u00e4r administrativ huvudort (county seat) i Erie County. Storstadsomr\u00e5det Buffalo\u2013Niagara Falls har 1 135 509 inv\u00e5nare (2010).",
        "imagesNormal": [
            "buffalo_normal_1.jpg",
            "buffalo_normal_2.jpg"
        ],
        "imagesBig": [
            "buffalo_big_1.jpg"
        ]
    },
    {
        "id": 30,
        "name": "Atlanta",
        "countryID": 6,
        "sun": 150,
        "text": "Atlanta \u00e4r delstaten Georgias st\u00f6rsta stad och tillika huvudstad. Staden grundades redan p\u00e5 1800-talet, och det finns d\u00e4rf\u00f6r m\u00e5nga historiskt intressanta byggnader och platser att bes\u00f6ka i staden. Landskapet som Atlanta ligger i \u00e4r mycket vacker, och omgivningarna \u00e4r mycket trevliga. Landskapet \u00e4r b\u00f6ljande med m\u00e5nga kullar, och t\u00e4ckt av en fantastisk skog.",
        "imagesNormal": [
            "atlanta_normal_1.jpg",
            "atlanta_normal_2.jpg"
        ],
        "imagesBig": [
            "atlanta_big_1.jpg"
        ]
    },
    {
        "id": 31,
        "name": "Buenos Aires",
        "countryID": 7,
        "sun": 205,
        "text": "Buenos Aires \u00e4r sedan 1880 huvudstad i republiken Argentina. Staden \u00e4r bel\u00e4gen vid R\u00edo de la Platas s\u00f6dra strand och har cirka 2,9 miljoner inv\u00e5nare samt 12,8 miljoner inv\u00e5nare i storstadsomr\u00e5det. Stadens centrum utg\u00f6rs av ett eget federalt distrikt (egentligen autonom stad, ciudad aut\u00f3noma) som omges av provinsen Buenos Aires, vars huvudort La Plata ligger s\u00f6der om Buenos Aires. Buenos Aires betyder ungef\u00e4r \"Den goda luften\" eller \"De goda vindarna\".",
        "imagesNormal": [
            "buenos aires_normal_1.jpg",
            "buenos aires_normal_2.jpg"
        ],
        "imagesBig": [
            "buenos aires_big_1.jpg"
        ]
    },
    {
        "id": 32,
        "name": "Cordoba",
        "countryID": 7,
        "sun": 320,
        "text": "C\u00f3rdoba \u00e4r en stad och kommun i regionen Andalusien i s\u00f6dra Spanien. Den ligger cirka 130 kilometer norr om turistomr\u00e5det Costa del Sol. Folkm\u00e4ngden uppg\u00e5r till cirka 300 000 inv\u00e5nare. C\u00f3rdoba \u00e4r en industristad med livsmedels-, metall- och kemisk industri. Staden \u00e4r ocks\u00e5 bekant f\u00f6r sitt konsthantverk med r\u00f6tter i den moriska tiden \u2013 bland annat filigranarbeten i silver och speciell keramik.",
        "imagesNormal": [
            "cordoba_normal_1.jpg",
            "cordoba_normal_2.jpg"
        ],
        "imagesBig": [
            "cordoba_big_1.jpg"
        ]
    }
];

let updatedCitiesByAnswers = [];

// Main

createQuizContainer();
document.querySelector(".questionsContainer").append(createStartButton());

let startButton = document.querySelector("#startButton");
let quizContainer = document.querySelector(".container");
let questionField = document.getElementById("question");
let answersField = document.getElementById("answersButtons");
let nextButton = document.getElementById("right");
let finishButton = document.getElementById("finish");

// Global array och variabel
let shuffliedQuestions, currentQuestionIndex;

//EventListener

//On click på start-knappen kallas på funktionen startQuiz
startButton.addEventListener("click", startQuiz);

//On click på nästa pillen kallas på funktioner resetTheValuation, setNextQuestion och updateBar.
nextButton.addEventListener("click", ()=>{

    currentQuestionIndex++;
    
    //Vid sista frågan kallar på show funktionen och slutar quizet
    if(currentQuestionIndex === 9){
        resetTheValuation();
        showResult(cities);
    }
    //Annars
   else{
    resetTheValuation();
    updateBar(currentQuestionIndex);
    setNextQuestion();
   }
});

 //On click på sluta knappen anropas funktionen showResult med argumentet finished array
 finishButton.addEventListener("click", ()=>{
       showResult(cities);
 });

//Skapar en div (visar antal städer som rekommenderas) med en visa knapp.
function showResult(cities){

    //Tömmer quiz containern 
    quizContainer.innerHTML = "";
    quizContainer.classList.add("questionsContainer");

    quizContainer.innerHTML= `<div class="resultatText">${cities.length} Städer hittades</div>`;

    //Skapar en visa knapp
    let showButton = document.createElement("button");
    showButton.classList.add("showButton");
    showButton.innerText = "Visa";

    //Knappen appendas i quiz containern
    quizContainer.append(showButton);

    //On click på visa knappen skapas resultat fältet()
    showButton.addEventListener("click",()=>{
        document.querySelector("main").innerHTML= "";
        document.querySelector("main").append(createResult(cities));
    });
};

// Footer 

// Functions

// Återställer input värdet 
function resetTheValuation(){
    let inputValue = document.querySelector(".valuationInput")
    inputValue.value = 5;
    document.querySelector(".numberOfInput").innerText = inputValue.value;
}

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

//Tömmer questions containern och hämtar en fråga från den slumpmässig sorterat arrayen
function setNextQuestion(){
    clearTheQuestionAndAnswerfield();
    showQuestion(shuffliedQuestions[currentQuestionIndex]);
}

//Tömmer (tar bort) elementen som ligger i answer fältet 
function clearTheQuestionAndAnswerfield(){
   document.querySelector(".navigateButtons").classList.add("hide");

   //Tömmer fältet tills den är tom.
    while(answersField.firstChild){
        answersField.removeChild(answersField.firstChild);
    }
}

//Tar emot questions arrayen och sätter frågor och svar 
function showQuestion(question){

    document.querySelector(".valuationDiv").classList.remove("hide");

    questionField.innerText = question.question;

    question.answers.forEach(answers => {
     
        let button = document.createElement("button");
        button.classList.add("answer");
        button.innerText = answers.option;

        button.addEventListener("click", () =>{
           
            let allOptions = document.querySelectorAll(".answer");
            allOptions.forEach(e => {
                e.classList.remove("selectedOpt");
            });
            
            button.classList.add("selectedOpt");
            document.querySelector(".navigateButtons").classList.remove("hide");
            
         
        });

        answersField.append(button);
    });
    
}

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
    valuationInput.setAttribute("min","0");
    valuationInput.setAttribute("max","10");
    valuationInput.setAttribute("value","5");

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
    rightArrow.innerHTML = `&#8680;`;

    //Skapar sluta-knappen
    let finish = document.createElement("button");
    finish.setAttribute("id", "finish");
    finish.innerHTML = `Sluta`;

    navigateButtons.append(finish,rightArrow);

    questionsContainer.append(question,answersButtons,valuationDiv,navigateButtons)

    quizcontainer.append(questionsContainer);
    document.querySelector("main").append(quizcontainer);
};

//Skapar start-knappen och appendar den i quiz containern
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
    lastProgress.style.width =level + 10 + "%";
}

//Tar emot den uppdaterade array enligt svar och returnerar resultat diven
function createResult(updatedArray){

        //Skapar resultat containern
        let resultContainer = document.createElement("div");
        resultContainer.setAttribute("id","resultContainer");

        let storstMatch = document.createElement("h1");
        storstMatch.classList.add("matched");
        storstMatch.innerText = "Störst Match";
        
        let andraRek = document.createElement("h1");
        andraRek.classList.add("matched");
        andraRek.innerText = "Andra Rekommendationer";

        resultContainer.append(storstMatch,createCityFront(updatedArray),andraRek);

    //Tar emot en array och returnerar en div element som innehåller all information för varje stad i arrayen
    function createCityFront(updatedArray){
        //Skapar stad fältet
        let cityBoxes = document.createElement("div");
        cityBoxes.classList.add("cityBoxes");

        updatedArray.forEach(city => {
            //skapar en div för varje stad som finns i den uppdaterade array
            let countryCityDiv = document.createElement("div");
            countryCityDiv.classList.add("country-city");

            //Skapar namn och knapp fältet
            let cityNameAndButtonDiv = document.createElement("div");
            cityNameAndButtonDiv.classList.add("nameAndButton");

            let country = COUNTRIES.find(c => c.id === city.countryID);

            //Skapar ett p element som innehåller namn på stad och land för varje city objekt i arrayen
            let cityNameP = document.createElement("p");
            cityNameP.classList.add("cityName");
            cityNameP.innerHTML = `${city.name}, ${country.name}`;

            //Skapar ner pillen 
            let expandPill = document.createElement("button");
            expandPill.classList.add("expandArrow");
            expandPill.innerHTML = `&#8679;`;

            //Skapar diven som kommer innehålla infon om staden
            let detailedCity = document.createElement("div");
            detailedCity.classList.add("detailedCity");
            detailedCity.classList.add("hide");
            detailedCity.append(createBack(city));

            cityNameAndButtonDiv.append(cityNameP,expandPill);
            countryCityDiv.append(cityNameAndButtonDiv,detailedCity);
            
                //On click, togglas longer, hide och shrinkArrow classes
                countryCityDiv.addEventListener("click", () => {
                    countryCityDiv.classList.toggle("longer");
                    detailedCity.classList.toggle("hide");
                    cityNameP.classList.toggle("hide");
                    expandPill.classList.toggle("shrinkArrow");
                });

                //Alla städer appendas i stad fältet
                cityBoxes.append(countryCityDiv);
            });  

        // Returnerar stad fältet för att senare appendas i resultat container
        return cityBoxes;
    }

    //Returnerar resultat container för att senare appendas on click på visa knappen
    return resultContainer;
}
