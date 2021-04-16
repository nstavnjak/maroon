
/*

Nedan finns databasen.

För enkelhetens skull (så vi slipper sitta och formattera) kommer
den i JSON-format. Det låter avancerad men det är inte det. Vi kommer
att prata om JSON under nästa kurs och ni kommer att inse att det
är ett mycket enkelt begrepp. Vi har dock valt att inte prata om det
i denna kurs.

Trots JSON-formatet kan ni, om ni tittar på databasen nedan, se att den följer
specifikationerna i dokumentet "Projektdatabas PFW21". Men ni behöver
inte kolla på raderna nedan om ni inte vill.

Det enda ni behöver veta är att objektet DB har följande struktur:
DB = {
    COUNTRIES,
    CITIES,
    UNIVERSITIES,
    PROGRAMMES,
    LANGUAGES,
    LEVELS,
    CLUBS,
    ENTERTAINMENT_PLACES
};

... där varje nyckel är en array av respektive entity: COUNTRY, CITY, etc.
Varje entity har exakt den strukturen som är specificerad i "Projektdatabas PFW21".

Till exempel har varje COUNTRY-object följande nycklar:
COUNTRY = {
    id,
    name,
    visa,
    flag,
    languageID
};

Allt blir tydligare om ni loggar konstanten DB och tittar
på innehållet via browserns console.




OBS 1
Innehållet i databasen är skapad programmatiskt och kan innehålla gramatiska
fel i namnen och lite annat konstigt. Exempel:
a) "Derecho Aplicadas" är grammatiskt fel på spanska.
b) Toulouse kan ha fler universitet än Paris, som ju är en mycket större stad.
Konstigheter som dessa behöver ni inte bry er om.

Om ni dock hittar data som verkligen inte alls fungerar så får ni hemskt gärna
höra av er till oss så ska vi kolla på det. Ett exempel på data som inte fungerar
skulle kunna vara negativa värden av antalet studenter i ett program.



OBS 2
Strukturen i databasen är satt. Den ska inte ändras.
Innehållet i databasen är däremot bara ett exempel, det skulle kunna
ändras. Exempelvis skulle troligtvis datan för programmen att ändras från år
till år, universitet skulle kunna ta bort program och lägga till nya, etc.
Er app ska INTE struktureras efter nuvarande innehåll utan efter databasens
struktur (vilka nycklar som finns).
Ni kan exempelvis inte basera appen på att Madrid har i detta exempel endast
ett universitet. Madrid skulle kunna ha fler universtitet i framtiden, eller
om vi behöver göra om exempel-databasen av någon anledning.


*/


const DB = JSON.parse(`

{
    "COUNTRIES": [
        {
            "id": 0,
            "name": "Spain",
            "visa": false,
            "languageID": 0,
            "flag": "spain.png"
        },
        {
            "id": 1,
            "name": "France",
            "visa": false,
            "languageID": 2,
            "flag": "france.png"
        },
        {
            "id": 2,
            "name": "Australia",
            "visa": false,
            "languageID": 1,
            "flag": "australia.png"
        },
        {
            "id": 3,
            "name": "United Kingdom",
            "visa": false,
            "languageID": 1,
            "flag": "uk.png"
        },
        {
            "id": 4,
            "name": "Sweden",
            "visa": false,
            "languageID": 3,
            "flag": "sweden.png"
        },
        {
            "id": 8,
            "name": "Chile",
            "visa": true,
            "languageID": 0,
            "flag": "chile.png"
        },
        {
            "id": 5,
            "name": "Mexico",
            "visa": true,
            "languageID": 0,
            "flag": "mexico.png"
        },
        {
            "id": 6,
            "name": "USA",
            "visa": true,
            "languageID": 1,
            "flag": "usa.png"
        },
        {
            "id": 7,
            "name": "Argentina",
            "visa": true,
            "languageID": 0,
            "flag": "argentina.png"
        }
    ],
    "CITIES": [
        {
            "id": 0,
            "name": "Madrid",
            "countryID": 0
        },
        {
            "id": 1,
            "name": "Sevilla",
            "countryID": 0
        },
        {
            "id": 2,
            "name": "Salamanca",
            "countryID": 0
        },
        {
            "id": 3,
            "name": "Paris",
            "countryID": 1
        },
        {
            "id": 4,
            "name": "Lyon",
            "countryID": 1
        },
        {
            "id": 5,
            "name": "Toulouse",
            "countryID": 1
        },
        {
            "id": 6,
            "name": "Nice",
            "countryID": 1
        },
        {
            "id": 7,
            "name": "Melbourne",
            "countryID": 2
        },
        {
            "id": 8,
            "name": "Sidney",
            "countryID": 2
        },
        {
            "id": 9,
            "name": "Canberra",
            "countryID": 2
        },
        {
            "id": 10,
            "name": "London",
            "countryID": 3
        },
        {
            "id": 11,
            "name": "Manchester",
            "countryID": 3
        },
        {
            "id": 12,
            "name": "York",
            "countryID": 3
        },
        {
            "id": 13,
            "name": "Sheffield",
            "countryID": 3
        },
        {
            "id": 14,
            "name": "Bath",
            "countryID": 3
        },
        {
            "id": 15,
            "name": "Edinborough",
            "countryID": 3
        },
        {
            "id": 16,
            "name": "Malm\u00f6",
            "countryID": 4
        },
        {
            "id": 17,
            "name": "Stockholm",
            "countryID": 4
        },
        {
            "id": 18,
            "name": "Uppsala",
            "countryID": 4
        },
        {
            "id": 19,
            "name": "Lund",
            "countryID": 4
        },
        {
            "id": 20,
            "name": "Santiago",
            "countryID": 8
        },
        {
            "id": 21,
            "name": "Valpara\u00edso",
            "countryID": 8
        },
        {
            "id": 22,
            "name": "Guadalajara",
            "countryID": 5
        },
        {
            "id": 23,
            "name": "Mexico DF",
            "countryID": 5
        },
        {
            "id": 24,
            "name": "Oaxaca",
            "countryID": 5
        },
        {
            "id": 25,
            "name": "Boston",
            "countryID": 6
        },
        {
            "id": 26,
            "name": "San Francisco",
            "countryID": 6
        },
        {
            "id": 27,
            "name": "Washington",
            "countryID": 6
        },
        {
            "id": 28,
            "name": "New York",
            "countryID": 6
        },
        {
            "id": 29,
            "name": "Buffalo",
            "countryID": 6
        },
        {
            "id": 30,
            "name": "Atlanta",
            "countryID": 6
        },
        {
            "id": 31,
            "name": "Buenos Aires",
            "countryID": 7
        },
        {
            "id": 32,
            "name": "C\u00f3rdoba",
            "countryID": 7
        }
    ],
    "UNIVERSITIES": [
        {
            "id": 0,
            "name": "Escuela de Estudios Superiores de Madrid",
            "cityID": 0
        },
        {
            "id": 1,
            "name": "Academia Universitaria de Sevilla",
            "cityID": 1
        },
        {
            "id": 2,
            "name": "Escuela de Estudios Superiores de Salamanca",
            "cityID": 2
        },
        {
            "id": 3,
            "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Paris",
            "cityID": 3
        },
        {
            "id": 4,
            "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Lyon",
            "cityID": 4
        },
        {
            "id": 5,
            "name": "Universit\u00e9 de Lyon",
            "cityID": 4
        },
        {
            "id": 6,
            "name": "Universit\u00e9 de Toulouse",
            "cityID": 5
        },
        {
            "id": 7,
            "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Toulouse",
            "cityID": 5
        },
        {
            "id": 8,
            "name": "\u00c9cole Nationale de Hautes \u00c9tudes de Nice",
            "cityID": 6
        },
        {
            "id": 9,
            "name": "Universit\u00e9 de Nice",
            "cityID": 6
        },
        {
            "id": 10,
            "name": "University of Melbourne",
            "cityID": 7
        },
        {
            "id": 11,
            "name": "Sidney University",
            "cityID": 8
        },
        {
            "id": 12,
            "name": "Canberra University",
            "cityID": 9
        },
        {
            "id": 13,
            "name": "London University",
            "cityID": 10
        },
        {
            "id": 14,
            "name": "University of London",
            "cityID": 10
        },
        {
            "id": 15,
            "name": "Manchester University",
            "cityID": 11
        },
        {
            "id": 16,
            "name": "Manchester School for Advanced Studies",
            "cityID": 11
        },
        {
            "id": 17,
            "name": "University of York",
            "cityID": 12
        },
        {
            "id": 18,
            "name": "York University",
            "cityID": 12
        },
        {
            "id": 19,
            "name": "University of Sheffield",
            "cityID": 13
        },
        {
            "id": 20,
            "name": "University of Bath",
            "cityID": 14
        },
        {
            "id": 21,
            "name": "University of Edinborough",
            "cityID": 15
        },
        {
            "id": 22,
            "name": "H\u00f6gskolan i Malm\u00f6",
            "cityID": 16
        },
        {
            "id": 23,
            "name": "Malm\u00f6 Universitet",
            "cityID": 16
        },
        {
            "id": 24,
            "name": "H\u00f6gskolan i Stockholm",
            "cityID": 17
        },
        {
            "id": 25,
            "name": "Stockholm Universitet",
            "cityID": 17
        },
        {
            "id": 26,
            "name": "Uppsala Universitet",
            "cityID": 18
        },
        {
            "id": 27,
            "name": "Lund Universitet",
            "cityID": 19
        },
        {
            "id": 28,
            "name": "H\u00f6gskolan i Lund",
            "cityID": 19
        },
        {
            "id": 29,
            "name": "Universidad de Santiago",
            "cityID": 20
        },
        {
            "id": 30,
            "name": "Universidad de Valpara\u00edso",
            "cityID": 21
        },
        {
            "id": 31,
            "name": "Escuela de Estudios Superiores de Valpara\u00edso",
            "cityID": 21
        },
        {
            "id": 32,
            "name": "Escuela de Estudios Superiores de Guadalajara",
            "cityID": 22
        },
        {
            "id": 33,
            "name": "Academia Universitaria de Guadalajara",
            "cityID": 22
        },
        {
            "id": 34,
            "name": "Escuela de Estudios Superiores de Mexico DF",
            "cityID": 23
        },
        {
            "id": 35,
            "name": "Universidad de Oaxaca",
            "cityID": 24
        },
        {
            "id": 36,
            "name": "Boston School for Advanced Studies",
            "cityID": 25
        },
        {
            "id": 37,
            "name": "Boston University",
            "cityID": 25
        },
        {
            "id": 38,
            "name": "San Francisco School for Advanced Studies",
            "cityID": 26
        },
        {
            "id": 39,
            "name": "University of Washington",
            "cityID": 27
        },
        {
            "id": 40,
            "name": "Washington University",
            "cityID": 27
        },
        {
            "id": 41,
            "name": "University of New York",
            "cityID": 28
        },
        {
            "id": 42,
            "name": "New York University",
            "cityID": 28
        },
        {
            "id": 43,
            "name": "University of Buffalo",
            "cityID": 29
        },
        {
            "id": 44,
            "name": "University of Atlanta",
            "cityID": 30
        },
        {
            "id": 45,
            "name": "Universidad de Buenos Aires",
            "cityID": 31
        },
        {
            "id": 46,
            "name": "Academia Universitaria de C\u00f3rdoba",
            "cityID": 32
        }
    ],
    "PROGRAMMES": [
        {
            "id": 0,
            "name": "Applied Medicine",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                7.5,
                7.31,
                7.25,
                7.05,
                6.97
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                48,
                51,
                51,
                54,
                59
            ]
        },
        {
            "id": 1,
            "name": "Advanced Studies in Law",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                8.19,
                8.04,
                7.95,
                7.79,
                7.78
            ],
            "localStudents": 12,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                54,
                55,
                59,
                59,
                59
            ]
        },
        {
            "id": 2,
            "name": "Human Design",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                5.56,
                5.63,
                5.45,
                5.31,
                5.46
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                51,
                47,
                46,
                45,
                42
            ]
        },
        {
            "id": 3,
            "name": "Filosof\u00eda y sostenibilidad",
            "universityID": 0,
            "language": 0,
            "entryGrades": [
                6.49,
                6.54,
                6.57,
                6.65,
                6.74
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                63,
                66,
                70,
                72,
                72
            ]
        },
        {
            "id": 4,
            "name": "Advanced Studies in Medicine",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                6.98,
                6.89,
                6.81,
                6.74,
                6.57
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                73,
                69,
                68,
                67,
                66
            ]
        },
        {
            "id": 5,
            "name": "Mathematics and Sustainability",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                5.63,
                5.31,
                5.76,
                5.47,
                5.67
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                52,
                52,
                48,
                45,
                44
            ]
        },
        {
            "id": 6,
            "name": "Estudios superiores de Medicina",
            "universityID": 0,
            "language": 0,
            "entryGrades": [
                8.07,
                7.99,
                7.97,
                7.83,
                7.74
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                45,
                49,
                50,
                53,
                56
            ]
        },
        {
            "id": 7,
            "name": "Ingenier\u00eda en el siglo XXI",
            "universityID": 0,
            "language": 0,
            "entryGrades": [
                5.7,
                5.76,
                5.77,
                5.78,
                5.88
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                58,
                59,
                63,
                66,
                72
            ]
        },
        {
            "id": 8,
            "name": "Sociology and Virtual Reality",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                6.61,
                6.7,
                6.86,
                6.87,
                6.98
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                55,
                55,
                57,
                61,
                63
            ]
        },
        {
            "id": 9,
            "name": "Medicine in the 21:st Century",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                8.15,
                7.98,
                8.03,
                8.01,
                8.05
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                57,
                57,
                56,
                57,
                56
            ]
        },
        {
            "id": 10,
            "name": "Law and History",
            "universityID": 0,
            "language": 1,
            "entryGrades": [
                7.42,
                7.47,
                7.24,
                7.3,
                7.26
            ],
            "localStudents": 26,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                61,
                63,
                64,
                64,
                68
            ]
        },
        {
            "id": 11,
            "name": "Sociolog\u00eda y sostenibilidad",
            "universityID": 0,
            "language": 0,
            "entryGrades": [
                6.68,
                6.68,
                6.63,
                6.56,
                6.49
            ],
            "localStudents": 20,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                37,
                39,
                41,
                46,
                47
            ]
        },
        {
            "id": 12,
            "name": "Mathematics and History",
            "universityID": 1,
            "language": 1,
            "entryGrades": [
                7.32,
                7.23,
                7.12,
                7,
                6.98
            ],
            "localStudents": 30,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                58,
                59,
                62,
                63,
                66
            ]
        },
        {
            "id": 13,
            "name": "Derecho y sociedad",
            "universityID": 1,
            "language": 0,
            "entryGrades": [
                8.35,
                8.18,
                7.93,
                7.93,
                7.89
            ],
            "localStudents": 28,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                67,
                65,
                61,
                55,
                53
            ]
        },
        {
            "id": 14,
            "name": "Estudios superiores de Derecho",
            "universityID": 1,
            "language": 0,
            "entryGrades": [
                6.28,
                6.19,
                6.01,
                5.84,
                5.47
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                65,
                67,
                63,
                64,
                65
            ]
        },
        {
            "id": 15,
            "name": "Estudios superiores de Medicina",
            "universityID": 1,
            "language": 0,
            "entryGrades": [
                7.89,
                7.87,
                7.77,
                7.72,
                7.71
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                51,
                50,
                52,
                47,
                47
            ]
        },
        {
            "id": 16,
            "name": "Human Engineering",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                5.99,
                5.98,
                6.07,
                5.77,
                5.77
            ],
            "localStudents": 34,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                67,
                67,
                65,
                65,
                64
            ]
        },
        {
            "id": 17,
            "name": "Sociology and Sustainability",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                6.69,
                6.88,
                6.96,
                7.02,
                7.32
            ],
            "localStudents": 35,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                56,
                64,
                49,
                59,
                55
            ]
        },
        {
            "id": 18,
            "name": "Law in Society",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                8.02,
                8.11,
                8.15,
                8.24,
                8.43
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                61,
                69,
                54,
                61,
                51
            ]
        },
        {
            "id": 19,
            "name": "Applied Medicine",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                7.1,
                7.24,
                7.26,
                7.33,
                7.51
            ],
            "localStudents": 20,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                59,
                59,
                57,
                53,
                66
            ]
        },
        {
            "id": 20,
            "name": "Law and History",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                8.22,
                8.06,
                8.62,
                7.94,
                8.3
            ],
            "localStudents": 34,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                60,
                62,
                61,
                54,
                60
            ]
        },
        {
            "id": 21,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 2,
            "language": 0,
            "entryGrades": [
                8.16,
                8.38,
                7.98,
                7.96,
                8.24
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                49,
                53,
                54,
                54,
                56
            ]
        },
        {
            "id": 22,
            "name": "Matem\u00e1ticas y sociedad",
            "universityID": 2,
            "language": 0,
            "entryGrades": [
                8.59,
                8.35,
                8.33,
                8.3,
                8.08
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                63,
                59,
                63,
                64,
                64
            ]
        },
        {
            "id": 23,
            "name": "Mathematics in the 21:st Century",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                7.61,
                7.69,
                7.95,
                7.87,
                7.19
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                44,
                36,
                39,
                52,
                51
            ]
        },
        {
            "id": 24,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 2,
            "language": 0,
            "entryGrades": [
                5.53,
                5.29,
                5.78,
                5.52,
                5.54
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                40,
                49,
                57,
                58,
                58
            ]
        },
        {
            "id": 25,
            "name": "Sociolog\u00eda y sostenibilidad",
            "universityID": 2,
            "language": 0,
            "entryGrades": [
                7,
                7.09,
                7.17,
                7.38,
                7.41
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                44,
                48,
                50,
                54,
                55
            ]
        },
        {
            "id": 26,
            "name": "Applied Mathematics",
            "universityID": 2,
            "language": 1,
            "entryGrades": [
                6.54,
                6.3,
                6.48,
                6.67,
                6.73
            ],
            "localStudents": 32,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                54,
                54,
                56,
                58,
                59
            ]
        },
        {
            "id": 27,
            "name": "Medicine and Virtual Reality",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                8.09,
                7.91,
                7.91,
                7.9,
                7.77
            ],
            "localStudents": 29,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                42,
                40,
                38,
                37,
                35
            ]
        },
        {
            "id": 28,
            "name": "Human Sociology",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                6.13,
                6.1,
                5.98,
                5.77,
                5.65
            ],
            "localStudents": 14,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                72,
                72,
                71,
                67,
                67
            ]
        },
        {
            "id": 29,
            "name": "Law and History",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                5.63,
                5.85,
                5.89,
                6.1,
                6.25
            ],
            "localStudents": 16,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                53,
                52,
                48,
                44,
                42
            ]
        },
        {
            "id": 30,
            "name": "Mathematics in Society",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                8.33,
                8.38,
                8.55,
                8.69,
                8.75
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                50,
                48,
                48,
                46,
                44
            ]
        },
        {
            "id": 31,
            "name": "Applied Sociology",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                8,
                8.06,
                8.2,
                8.29,
                8.29
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                44,
                46,
                36,
                45,
                51
            ]
        },
        {
            "id": 32,
            "name": "Human Philosophy",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                7.09,
                7.36,
                7.4,
                7.41,
                7.43
            ],
            "localStudents": 27,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                70,
                69,
                64,
                63,
                62
            ]
        },
        {
            "id": 33,
            "name": "Law in Society",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                6.56,
                6.5,
                6.39,
                6.32,
                6.2
            ],
            "localStudents": 26,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                66,
                66,
                67,
                72,
                73
            ]
        },
        {
            "id": 34,
            "name": "Sociology in Society",
            "universityID": 3,
            "language": 1,
            "entryGrades": [
                7.74,
                7.65,
                7.42,
                7.81,
                7.47
            ],
            "localStudents": 14,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                51,
                47,
                47,
                46,
                44
            ]
        },
        {
            "id": 35,
            "name": "\u00c9tudes avanc\u00e9s en Sociologie",
            "universityID": 3,
            "language": 2,
            "entryGrades": [
                5.73,
                5.84,
                5.85,
                5.86,
                5.96
            ],
            "localStudents": 12,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                71,
                68,
                66,
                66,
                61
            ]
        },
        {
            "id": 36,
            "name": "Mat\u00e9matiques appliqu\u00e9s",
            "universityID": 3,
            "language": 2,
            "entryGrades": [
                5.7,
                5.73,
                5.79,
                5.85,
                6.02
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                63,
                55,
                51,
                47,
                46
            ]
        },
        {
            "id": 37,
            "name": "Ing\u00e9nierie et r\u00e9alit\u00e9 virtuelle",
            "universityID": 3,
            "language": 2,
            "entryGrades": [
                7.14,
                7.11,
                7.01,
                6.92,
                6.68
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                64,
                72,
                61,
                68,
                67
            ]
        },
        {
            "id": 38,
            "name": "Sociologie et societ\u00e9",
            "universityID": 3,
            "language": 2,
            "entryGrades": [
                7.19,
                7.03,
                6.88,
                6.85,
                6.54
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                47,
                48,
                49,
                49,
                52
            ]
        },
        {
            "id": 39,
            "name": "Sociologie appliqu\u00e9s",
            "universityID": 4,
            "language": 2,
            "entryGrades": [
                6.81,
                7.09,
                7.13,
                7.26,
                7.4
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                44,
                45,
                47,
                53,
                60
            ]
        },
        {
            "id": 40,
            "name": "Droit et la France",
            "universityID": 4,
            "language": 2,
            "entryGrades": [
                8.02,
                7.92,
                7.73,
                7.69,
                8.05
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                68,
                72,
                72,
                66,
                67
            ]
        },
        {
            "id": 41,
            "name": "Droit et r\u00e9alit\u00e9 virtuelle",
            "universityID": 4,
            "language": 2,
            "entryGrades": [
                7.51,
                7.51,
                7.48,
                7.4,
                7.26
            ],
            "localStudents": 29,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                42,
                41,
                38,
                36,
                35
            ]
        },
        {
            "id": 42,
            "name": "Design in the 21:st Century",
            "universityID": 4,
            "language": 1,
            "entryGrades": [
                7.33,
                7.52,
                7.55,
                7.77,
                7.9
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                51,
                47,
                43,
                40,
                39
            ]
        },
        {
            "id": 43,
            "name": "Design et Histoire",
            "universityID": 4,
            "language": 2,
            "entryGrades": [
                6.68,
                6.81,
                6.65,
                6.9,
                6.64
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                48,
                49,
                49,
                54,
                55
            ]
        },
        {
            "id": 44,
            "name": "Ing\u00e9nierie et societ\u00e9",
            "universityID": 5,
            "language": 2,
            "entryGrades": [
                7.64,
                7.49,
                7.44,
                7.4,
                7.21
            ],
            "localStudents": 21,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                51,
                52,
                53,
                55,
                59
            ]
        },
        {
            "id": 45,
            "name": "Droit et durabilit\u00e9",
            "universityID": 5,
            "language": 2,
            "entryGrades": [
                7.77,
                7.53,
                7.48,
                7.46,
                7.37
            ],
            "localStudents": 31,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                63,
                64,
                62,
                68,
                62
            ]
        },
        {
            "id": 46,
            "name": "Medicine in Society",
            "universityID": 5,
            "language": 1,
            "entryGrades": [
                5.56,
                5.58,
                5.61,
                5.7,
                5.72
            ],
            "localStudents": 30,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                74,
                73,
                70,
                67,
                65
            ]
        },
        {
            "id": 47,
            "name": "Applied Engineering",
            "universityID": 5,
            "language": 1,
            "entryGrades": [
                6.49,
                6.49,
                6.42,
                6.32,
                6.23
            ],
            "localStudents": 28,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                70,
                69,
                67,
                63,
                63
            ]
        },
        {
            "id": 48,
            "name": "Philosophy and Sustainability",
            "universityID": 5,
            "language": 1,
            "entryGrades": [
                5.9,
                5.85,
                6.02,
                6.1,
                6.09
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                64,
                64,
                56,
                68,
                57
            ]
        },
        {
            "id": 49,
            "name": "Advanced Studies in Mathematics",
            "universityID": 5,
            "language": 1,
            "entryGrades": [
                8.1,
                8.22,
                8.32,
                8.07,
                8.34
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                51,
                57,
                47,
                52,
                43
            ]
        },
        {
            "id": 50,
            "name": "Applied Sociology",
            "universityID": 5,
            "language": 1,
            "entryGrades": [
                8.3,
                8.21,
                8.13,
                8.01,
                8
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                48,
                51,
                48,
                47,
                47
            ]
        },
        {
            "id": 51,
            "name": "Droit et durabilit\u00e9",
            "universityID": 6,
            "language": 2,
            "entryGrades": [
                6.69,
                6.92,
                6.96,
                7.13,
                7.33
            ],
            "localStudents": 27,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                69,
                74,
                74,
                75,
                76
            ]
        },
        {
            "id": 52,
            "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
            "universityID": 6,
            "language": 2,
            "entryGrades": [
                8.21,
                8.13,
                8.1,
                8.05,
                7.93
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                55,
                61,
                53,
                58,
                60
            ]
        },
        {
            "id": 53,
            "name": "Filosofie et societ\u00e9",
            "universityID": 6,
            "language": 2,
            "entryGrades": [
                8.35,
                8.2,
                8.31,
                8.43,
                8.1
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                40,
                43,
                44,
                39,
                46
            ]
        },
        {
            "id": 54,
            "name": "Advanced Studies in Medicine",
            "universityID": 6,
            "language": 1,
            "entryGrades": [
                7.18,
                7.3,
                7.32,
                7.33,
                7.62
            ],
            "localStudents": 31,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                42,
                48,
                47,
                50,
                44
            ]
        },
        {
            "id": 55,
            "name": "\u00c9tudes avanc\u00e9s en Filosofie",
            "universityID": 6,
            "language": 2,
            "entryGrades": [
                7.45,
                7.43,
                7.55,
                7.47,
                7.22
            ],
            "localStudents": 20,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                58,
                55,
                62,
                59,
                57
            ]
        },
        {
            "id": 56,
            "name": "Medicine appliqu\u00e9s",
            "universityID": 6,
            "language": 2,
            "entryGrades": [
                7.71,
                7.81,
                8.08,
                8.13,
                8.41
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                59,
                59,
                62,
                63,
                68
            ]
        },
        {
            "id": 57,
            "name": "Engineering and History",
            "universityID": 7,
            "language": 1,
            "entryGrades": [
                6.12,
                6.08,
                6,
                5.91,
                5.77
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                57,
                53,
                64,
                57,
                65
            ]
        },
        {
            "id": 58,
            "name": "Philosophy in Society",
            "universityID": 7,
            "language": 1,
            "entryGrades": [
                7.31,
                7.68,
                6.94,
                7.27,
                7.03
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                49,
                55,
                43,
                52,
                44
            ]
        },
        {
            "id": 59,
            "name": "Design appliqu\u00e9s",
            "universityID": 7,
            "language": 2,
            "entryGrades": [
                6.16,
                6.06,
                5.87,
                5.72,
                5.65
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                59,
                59,
                63,
                63,
                65
            ]
        },
        {
            "id": 60,
            "name": "Human Sociology",
            "universityID": 7,
            "language": 1,
            "entryGrades": [
                8.23,
                8.11,
                7.99,
                7.78,
                7.52
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                39,
                47,
                52,
                52,
                54
            ]
        },
        {
            "id": 61,
            "name": "Ing\u00e9nierie et societ\u00e9",
            "universityID": 7,
            "language": 2,
            "entryGrades": [
                5.95,
                6.15,
                6.25,
                6.29,
                6.49
            ],
            "localStudents": 29,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                56,
                57,
                59,
                63,
                63
            ]
        },
        {
            "id": 62,
            "name": "Droit et Histoire",
            "universityID": 7,
            "language": 2,
            "entryGrades": [
                8.35,
                8.67,
                8.04,
                8.35,
                8.69
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                42,
                43,
                45,
                46,
                52
            ]
        },
        {
            "id": 63,
            "name": "Filosofie et Histoire",
            "universityID": 7,
            "language": 2,
            "entryGrades": [
                7.06,
                6.61,
                6.54,
                6.29,
                6.15
            ],
            "localStudents": 15,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                53,
                53,
                54,
                59,
                45
            ]
        },
        {
            "id": 64,
            "name": "Medicine et durabilit\u00e9",
            "universityID": 7,
            "language": 2,
            "entryGrades": [
                7.15,
                7.5,
                7.39,
                7.32,
                6.83
            ],
            "localStudents": 25,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                55,
                51,
                49,
                44,
                44
            ]
        },
        {
            "id": 65,
            "name": "Medicine et Histoire",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                8.42,
                8.37,
                8.29,
                8.16,
                8.13
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                60,
                61,
                61,
                64,
                65
            ]
        },
        {
            "id": 66,
            "name": "Sociology in Society",
            "universityID": 8,
            "language": 1,
            "entryGrades": [
                8.49,
                8.36,
                8.43,
                8.26,
                8.29
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                42,
                46,
                46,
                47,
                50
            ]
        },
        {
            "id": 67,
            "name": "\u00c9tudes avanc\u00e9s en Filosofie",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                7.25,
                7.24,
                7.19,
                7.06,
                6.85
            ],
            "localStudents": 35,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                65,
                64,
                60,
                59,
                59
            ]
        },
        {
            "id": 68,
            "name": "\u00c9tudes avanc\u00e9s en Ing\u00e9nierie",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                6.64,
                6.61,
                6.56,
                6.54,
                6.48
            ],
            "localStudents": 23,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                48,
                42,
                38,
                36,
                35
            ]
        },
        {
            "id": 69,
            "name": "\u00c9tudes avanc\u00e9s en Medicine",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                7.54,
                7.62,
                7.65,
                7.68,
                7.47
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                62,
                61,
                58,
                57,
                56
            ]
        },
        {
            "id": 70,
            "name": "Human Engineering",
            "universityID": 8,
            "language": 1,
            "entryGrades": [
                6.34,
                6.69,
                6.71,
                6.74,
                6.82
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                44,
                50,
                52,
                57,
                57
            ]
        },
        {
            "id": 71,
            "name": "Engineering and Sustainability",
            "universityID": 8,
            "language": 1,
            "entryGrades": [
                7.03,
                7.04,
                7.05,
                7.2,
                7.38
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                66,
                62,
                71,
                64,
                63
            ]
        },
        {
            "id": 72,
            "name": "Law in the 21:st Century",
            "universityID": 8,
            "language": 1,
            "entryGrades": [
                6.16,
                6.23,
                6.24,
                6.4,
                6.46
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                58,
                58,
                60,
                60,
                60
            ]
        },
        {
            "id": 73,
            "name": "\u00c9tudes avanc\u00e9s en Design",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                6.92,
                6.91,
                6.89,
                6.79,
                6.72
            ],
            "localStudents": 24,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                57,
                57,
                56,
                55,
                51
            ]
        },
        {
            "id": 74,
            "name": "Philosophy and History",
            "universityID": 8,
            "language": 1,
            "entryGrades": [
                8.1,
                8.29,
                8.34,
                8.4,
                8.69
            ],
            "localStudents": 29,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                46,
                51,
                51,
                55,
                55
            ]
        },
        {
            "id": 75,
            "name": "\u00c9tudes avanc\u00e9s en Droit",
            "universityID": 8,
            "language": 2,
            "entryGrades": [
                8.31,
                8.27,
                8.25,
                8.73,
                8.6
            ],
            "localStudents": 14,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                59,
                59,
                56,
                56,
                54
            ]
        },
        {
            "id": 76,
            "name": "\u00c9tudes avanc\u00e9s en Sociologie",
            "universityID": 9,
            "language": 2,
            "entryGrades": [
                6.68,
                6.57,
                6.5,
                6.43,
                6.41
            ],
            "localStudents": 24,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                50,
                45,
                55,
                46,
                46
            ]
        },
        {
            "id": 77,
            "name": "Human Sociology",
            "universityID": 9,
            "language": 1,
            "entryGrades": [
                8.03,
                7.8,
                7.72,
                7.6,
                7.26
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                48,
                45,
                44,
                43,
                42
            ]
        },
        {
            "id": 78,
            "name": "Advanced Studies in Design",
            "universityID": 9,
            "language": 1,
            "entryGrades": [
                5.88,
                6.05,
                6.2,
                6.34,
                6.49
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                52,
                52,
                49,
                49,
                61
            ]
        },
        {
            "id": 79,
            "name": "Applied Design",
            "universityID": 9,
            "language": 1,
            "entryGrades": [
                6.6,
                6.77,
                7.02,
                7.12,
                7.42
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                42,
                34,
                48,
                47,
                45
            ]
        },
        {
            "id": 80,
            "name": "Ing\u00e9nierie et r\u00e9alit\u00e9 virtuelle",
            "universityID": 9,
            "language": 2,
            "entryGrades": [
                6.36,
                6.6,
                6.72,
                6.72,
                6.96
            ],
            "localStudents": 31,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                67,
                68,
                68,
                63,
                72
            ]
        },
        {
            "id": 81,
            "name": "Sociology in the 21:st Century",
            "universityID": 9,
            "language": 1,
            "entryGrades": [
                5.81,
                5.73,
                5.67,
                5.66,
                5.43
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                62,
                65,
                55,
                64,
                61
            ]
        },
        {
            "id": 82,
            "name": "\u00c9tudes avanc\u00e9s en Filosofie",
            "universityID": 9,
            "language": 2,
            "entryGrades": [
                6.13,
                6.1,
                6.04,
                5.91,
                5.86
            ],
            "localStudents": 29,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                66,
                67,
                68,
                69,
                76
            ]
        },
        {
            "id": 83,
            "name": "\u00c9tudes avanc\u00e9s en Medicine",
            "universityID": 9,
            "language": 2,
            "entryGrades": [
                7.52,
                7.5,
                7.49,
                7.29,
                7.17
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                61,
                63,
                67,
                68,
                74
            ]
        },
        {
            "id": 84,
            "name": "Advanced Studies in Design",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                5.81,
                5.86,
                6.01,
                6.01,
                6.14
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                69,
                67,
                66,
                65,
                60
            ]
        },
        {
            "id": 85,
            "name": "Medicine in Society",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                8.12,
                8.19,
                8.27,
                8.32,
                8.36
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                41,
                44,
                47,
                47,
                48
            ]
        },
        {
            "id": 86,
            "name": "Engineering and Virtual Reality",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                5.84,
                5.94,
                6.08,
                6.16,
                6.31
            ],
            "localStudents": 21,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                69,
                65,
                62,
                57,
                55
            ]
        },
        {
            "id": 87,
            "name": "Philosophy in the 21:st Century",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                6.1,
                6.23,
                6.25,
                6.29,
                6.35
            ],
            "localStudents": 18,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                58,
                60,
                56,
                58,
                58
            ]
        },
        {
            "id": 88,
            "name": "Design in Society",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                8.4,
                8.35,
                8.27,
                8.3,
                8.36
            ],
            "localStudents": 17,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                67,
                68,
                70,
                66,
                66
            ]
        },
        {
            "id": 89,
            "name": "Applied Design",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                6,
                5.81,
                5.92,
                5.96,
                6
            ],
            "localStudents": 23,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                34,
                39,
                40,
                43,
                50
            ]
        },
        {
            "id": 90,
            "name": "Sociology and History",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                6.84,
                6.89,
                6.92,
                6.98,
                7.13
            ],
            "localStudents": 26,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                61,
                61,
                59,
                59,
                57
            ]
        },
        {
            "id": 91,
            "name": "Advanced Studies in Sociology",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                5.57,
                5.6,
                5.7,
                5.74,
                6
            ],
            "localStudents": 21,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                66,
                68,
                63,
                70,
                64
            ]
        },
        {
            "id": 92,
            "name": "Advanced Studies in Mathematics",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                7.55,
                7.58,
                7.71,
                7.78,
                7.89
            ],
            "localStudents": 32,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                44,
                41,
                41,
                36,
                35
            ]
        },
        {
            "id": 93,
            "name": "Human Sociology",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                5.3,
                5.33,
                5.53,
                5.6,
                5.77
            ],
            "localStudents": 17,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                65,
                56,
                63,
                68,
                71
            ]
        },
        {
            "id": 94,
            "name": "Sociology in Society",
            "universityID": 10,
            "language": 1,
            "entryGrades": [
                7.98,
                7.88,
                7.69,
                7.44,
                7.41
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                47,
                47,
                47,
                48,
                50
            ]
        },
        {
            "id": 95,
            "name": "Law and Sustainability",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                6.27,
                6.26,
                6.38,
                6.32,
                6.32
            ],
            "localStudents": 12,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                64,
                60,
                57,
                57,
                51
            ]
        },
        {
            "id": 96,
            "name": "Philosophy in Society",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                8.85,
                8.71,
                8.45,
                8.45,
                8.31
            ],
            "localStudents": 33,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                65,
                65,
                67,
                61,
                61
            ]
        },
        {
            "id": 97,
            "name": "Applied Philosophy",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                7.27,
                7.28,
                7.37,
                7.41,
                7.57
            ],
            "localStudents": 30,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                57,
                61,
                66,
                69,
                71
            ]
        },
        {
            "id": 98,
            "name": "Advanced Studies in Design",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                8.06,
                8.21,
                8.24,
                8.25,
                8.34
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                62,
                62,
                69,
                62,
                67
            ]
        },
        {
            "id": 99,
            "name": "Human Medicine",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                8.37,
                8.36,
                8.08,
                7.96,
                7.81
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                46,
                49,
                49,
                50,
                54
            ]
        },
        {
            "id": 100,
            "name": "Law in Society",
            "universityID": 11,
            "language": 1,
            "entryGrades": [
                7.91,
                7.91,
                7.96,
                8.01,
                8.06
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                45,
                45,
                44,
                43,
                43
            ]
        },
        {
            "id": 101,
            "name": "Philosophy and History",
            "universityID": 12,
            "language": 1,
            "entryGrades": [
                8.26,
                8.39,
                8.47,
                8.63,
                8.67
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                40,
                40,
                40,
                39,
                37
            ]
        },
        {
            "id": 102,
            "name": "Applied Philosophy",
            "universityID": 12,
            "language": 1,
            "entryGrades": [
                7.47,
                7.63,
                7.68,
                7.75,
                7.82
            ],
            "localStudents": 19,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                42,
                43,
                42,
                51,
                45
            ]
        },
        {
            "id": 103,
            "name": "Advanced Studies in Law",
            "universityID": 12,
            "language": 1,
            "entryGrades": [
                5.58,
                5.57,
                5.54,
                5.49,
                5.36
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                54,
                53,
                52,
                51,
                47
            ]
        },
        {
            "id": 104,
            "name": "Human Law",
            "universityID": 12,
            "language": 1,
            "entryGrades": [
                7.83,
                8.01,
                8.13,
                8.19,
                8.2
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                42,
                38,
                43,
                37,
                35
            ]
        },
        {
            "id": 105,
            "name": "Sociology in Society",
            "universityID": 12,
            "language": 1,
            "entryGrades": [
                5.41,
                5.49,
                5.55,
                5.6,
                5.6
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                52,
                51,
                50,
                42,
                41
            ]
        },
        {
            "id": 106,
            "name": "Medicine in Society",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                6.85,
                6.81,
                7.13,
                6.99,
                6.67
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                62,
                60,
                59,
                55,
                53
            ]
        },
        {
            "id": 107,
            "name": "Design in the 21:st Century",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                6.91,
                6.49,
                6.46,
                6.29,
                6.13
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                41,
                42,
                43,
                45,
                46
            ]
        },
        {
            "id": 108,
            "name": "Applied Mathematics",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                8.27,
                8.32,
                8.49,
                8.37,
                8.43
            ],
            "localStudents": 35,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                66,
                61,
                69,
                69,
                64
            ]
        },
        {
            "id": 109,
            "name": "Advanced Studies in Sociology",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                6.47,
                6.84,
                7,
                7.09,
                7.16
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                57,
                56,
                55,
                54,
                52
            ]
        },
        {
            "id": 110,
            "name": "Applied Philosophy",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                7.76,
                7.98,
                8.12,
                8.48,
                8.58
            ],
            "localStudents": 33,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                46,
                48,
                51,
                54,
                56
            ]
        },
        {
            "id": 111,
            "name": "Engineering and History",
            "universityID": 13,
            "language": 1,
            "entryGrades": [
                6.06,
                5.72,
                5.71,
                5.65,
                5.41
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                36,
                38,
                41,
                43,
                46
            ]
        },
        {
            "id": 112,
            "name": "Applied Sociology",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.33,
                7.34,
                7.37,
                7.19,
                7.17
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                52,
                51,
                44,
                37,
                35
            ]
        },
        {
            "id": 113,
            "name": "Applied Design",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.06,
                6.96,
                6.95,
                6.86,
                6.84
            ],
            "localStudents": 31,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                57,
                55,
                53,
                48,
                48
            ]
        },
        {
            "id": 114,
            "name": "Advanced Studies in Medicine",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.81,
                7.98,
                8.06,
                8.19,
                8.52
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                68,
                63,
                57,
                56,
                55
            ]
        },
        {
            "id": 115,
            "name": "Engineering and History",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.65,
                7.59,
                7.57,
                7.56,
                7.45
            ],
            "localStudents": 34,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                51,
                50,
                43,
                43,
                40
            ]
        },
        {
            "id": 116,
            "name": "Medicine and Virtual Reality",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.38,
                7.45,
                7.47,
                7.6,
                7.89
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                53,
                46,
                46,
                44,
                43
            ]
        },
        {
            "id": 117,
            "name": "Design and Sustainability",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.03,
                7.03,
                6.98,
                6.63,
                6.46
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                37,
                40,
                42,
                43,
                43
            ]
        },
        {
            "id": 118,
            "name": "Medicine in Society",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                6.82,
                6.64,
                6.63,
                6.62,
                6.46
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                39,
                45,
                48,
                48,
                49
            ]
        },
        {
            "id": 119,
            "name": "Human Engineering",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                6.3,
                6.62,
                6.63,
                6.82,
                6.86
            ],
            "localStudents": 34,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                46,
                48,
                50,
                51,
                54
            ]
        },
        {
            "id": 120,
            "name": "Human Philosophy",
            "universityID": 14,
            "language": 1,
            "entryGrades": [
                7.2,
                6.98,
                7.39,
                7.36,
                7.6
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                72,
                72,
                71,
                71,
                64
            ]
        },
        {
            "id": 121,
            "name": "Philosophy and Sustainability",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                7.87,
                8.05,
                8.08,
                8.11,
                8.15
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                57,
                56,
                55,
                55,
                54
            ]
        },
        {
            "id": 122,
            "name": "Applied Design",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                5.38,
                5.43,
                5.46,
                5.69,
                5.79
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                62,
                60,
                60,
                58,
                57
            ]
        },
        {
            "id": 123,
            "name": "Mathematics and History",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                7.75,
                7.72,
                7.7,
                7.55,
                7.42
            ],
            "localStudents": 28,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                61,
                64,
                64,
                64,
                66
            ]
        },
        {
            "id": 124,
            "name": "Design in Society",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                6.05,
                6.28,
                6.16,
                6.01,
                5.85
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                67,
                66,
                63,
                62,
                58
            ]
        },
        {
            "id": 125,
            "name": "Applied Sociology",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                6.43,
                6.52,
                6.59,
                6.62,
                6.7
            ],
            "localStudents": 20,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                47,
                49,
                50,
                51,
                53
            ]
        },
        {
            "id": 126,
            "name": "Design and Virtual Reality",
            "universityID": 15,
            "language": 1,
            "entryGrades": [
                7.34,
                7.52,
                7.01,
                7.18,
                7.52
            ],
            "localStudents": 16,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                75,
                73,
                71,
                68,
                62
            ]
        },
        {
            "id": 127,
            "name": "Law and History",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                6.96,
                6.77,
                6.7,
                6.55,
                6.46
            ],
            "localStudents": 16,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                75,
                69,
                67,
                65,
                64
            ]
        },
        {
            "id": 128,
            "name": "Design and History",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                5.81,
                5.96,
                5.97,
                5.97,
                6.02
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                58,
                57,
                58,
                52,
                59
            ]
        },
        {
            "id": 129,
            "name": "Mathematics in the 21:st Century",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                7.84,
                7.79,
                7.8,
                7.73,
                7.9
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                46,
                50,
                42,
                48,
                41
            ]
        },
        {
            "id": 130,
            "name": "Mathematics and History",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                7.61,
                7.24,
                7.07,
                6.93,
                6.78
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                43,
                43,
                49,
                39,
                46
            ]
        },
        {
            "id": 131,
            "name": "Human Philosophy",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                8.33,
                8.71,
                8.16,
                8.12,
                8.01
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                51,
                51,
                53,
                56,
                56
            ]
        },
        {
            "id": 132,
            "name": "Advanced Studies in Medicine",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                7.88,
                7.72,
                7.9,
                7.38,
                7.57
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                52,
                50,
                46,
                52,
                59
            ]
        },
        {
            "id": 133,
            "name": "Applied Engineering",
            "universityID": 16,
            "language": 1,
            "entryGrades": [
                7.53,
                7.49,
                7.22,
                7.54,
                7.84
            ],
            "localStudents": 18,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                54,
                55,
                58,
                61,
                62
            ]
        },
        {
            "id": 134,
            "name": "Sociology and Virtual Reality",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                8.45,
                8.37,
                8.24,
                8.06,
                7.95
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                60,
                59,
                56,
                54,
                48
            ]
        },
        {
            "id": 135,
            "name": "Mathematics and Virtual Reality",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.99,
                8.25,
                8.3,
                8.33,
                8.65
            ],
            "localStudents": 32,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                55,
                50,
                51,
                49,
                56
            ]
        },
        {
            "id": 136,
            "name": "Philosophy and Sustainability",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.08,
                7.16,
                7.18,
                7.29,
                7.35
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                66,
                67,
                69,
                69,
                72
            ]
        },
        {
            "id": 137,
            "name": "Design in Society",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                5.73,
                5.41,
                5.64,
                5.58,
                5.5
            ],
            "localStudents": 24,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                49,
                45,
                43,
                54,
                46
            ]
        },
        {
            "id": 138,
            "name": "Human Sociology",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.74,
                7.77,
                7.51,
                7.88,
                7.68
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                42,
                44,
                49,
                49,
                55
            ]
        },
        {
            "id": 139,
            "name": "Advanced Studies in Mathematics",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.83,
                8.08,
                7.62,
                7.67,
                7.62
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                45,
                45,
                49,
                49,
                50
            ]
        },
        {
            "id": 140,
            "name": "Law and Virtual Reality",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.7,
                7.69,
                7.54,
                7.5,
                7.45
            ],
            "localStudents": 19,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                55,
                62,
                62,
                66,
                69
            ]
        },
        {
            "id": 141,
            "name": "Advanced Studies in Design",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                6.22,
                6.39,
                6.41,
                6.54,
                6.58
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                44,
                45,
                50,
                50,
                53
            ]
        },
        {
            "id": 142,
            "name": "Medicine in the 21:st Century",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                6.76,
                6.89,
                6.96,
                7.04,
                7.24
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                40,
                45,
                46,
                49,
                51
            ]
        },
        {
            "id": 143,
            "name": "Law in the 21:st Century",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                7.53,
                8.01,
                8.11,
                8.46,
                8.48
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                53,
                49,
                54,
                49,
                60
            ]
        },
        {
            "id": 144,
            "name": "Medicine and Virtual Reality",
            "universityID": 17,
            "language": 1,
            "entryGrades": [
                6.08,
                6.12,
                6.27,
                6.35,
                6.36
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                43,
                50,
                54,
                56,
                59
            ]
        },
        {
            "id": 145,
            "name": "Medicine and Sustainability",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                7.25,
                7.23,
                7.01,
                7.1,
                6.97
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                53,
                56,
                57,
                49,
                52
            ]
        },
        {
            "id": 146,
            "name": "Human Engineering",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                7.95,
                7.76,
                7.67,
                7.63,
                7.6
            ],
            "localStudents": 22,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                65,
                73,
                61,
                70,
                71
            ]
        },
        {
            "id": 147,
            "name": "Applied Law",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                6.3,
                6.59,
                6.15,
                6.58,
                6.08
            ],
            "localStudents": 33,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                53,
                52,
                52,
                51,
                44
            ]
        },
        {
            "id": 148,
            "name": "Philosophy in the 21:st Century",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                7.72,
                7.85,
                8.05,
                8.13,
                8.14
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                65,
                58,
                69,
                69,
                74
            ]
        },
        {
            "id": 149,
            "name": "Advanced Studies in Philosophy",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                7.45,
                7.9,
                7.44,
                7.67,
                7.65
            ],
            "localStudents": 15,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                75,
                70,
                69,
                68,
                64
            ]
        },
        {
            "id": 150,
            "name": "Mathematics and Virtual Reality",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                6.91,
                6.8,
                6.8,
                6.74,
                6.7
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                46,
                47,
                52,
                52,
                53
            ]
        },
        {
            "id": 151,
            "name": "Design in Society",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                6.03,
                6.47,
                6.26,
                6.14,
                5.96
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                51,
                49,
                43,
                43,
                42
            ]
        },
        {
            "id": 152,
            "name": "Philosophy in Society",
            "universityID": 18,
            "language": 1,
            "entryGrades": [
                5.62,
                5.36,
                5.83,
                5.74,
                5.3
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                65,
                63,
                62,
                58,
                55
            ]
        },
        {
            "id": 153,
            "name": "Mathematics and Sustainability",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                7.18,
                7.18,
                7.36,
                7.41,
                7.54
            ],
            "localStudents": 34,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                62,
                64,
                64,
                66,
                70
            ]
        },
        {
            "id": 154,
            "name": "Applied Engineering",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                7.29,
                7.3,
                7.44,
                7.48,
                7.57
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                41,
                41,
                44,
                49,
                50
            ]
        },
        {
            "id": 155,
            "name": "Advanced Studies in Design",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.66,
                6.63,
                6.62,
                6.33,
                6.33
            ],
            "localStudents": 14,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                66,
                57,
                67,
                58,
                60
            ]
        },
        {
            "id": 156,
            "name": "Mathematics in the 21:st Century",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.53,
                6.62,
                6.66,
                6.79,
                7.05
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                38,
                39,
                42,
                43,
                46
            ]
        },
        {
            "id": 157,
            "name": "Sociology in Society",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.04,
                5.94,
                5.66,
                5.6,
                5.59
            ],
            "localStudents": 21,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                61,
                66,
                69,
                70,
                72
            ]
        },
        {
            "id": 158,
            "name": "Applied Law",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.64,
                6.36,
                6.32,
                6.21,
                5.99
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                51,
                52,
                54,
                58,
                58
            ]
        },
        {
            "id": 159,
            "name": "Mathematics and History",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                8.37,
                8.53,
                8.28,
                8.41,
                8.63
            ],
            "localStudents": 20,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                63,
                64,
                69,
                69,
                71
            ]
        },
        {
            "id": 160,
            "name": "Design in Society",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.09,
                5.87,
                5.74,
                5.63,
                5.61
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                50,
                54,
                53,
                52,
                52
            ]
        },
        {
            "id": 161,
            "name": "Design in the 21:st Century",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.83,
                6.96,
                7.04,
                7.11,
                7.34
            ],
            "localStudents": 30,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                58,
                53,
                61,
                59,
                55
            ]
        },
        {
            "id": 162,
            "name": "Advanced Studies in Sociology",
            "universityID": 19,
            "language": 1,
            "entryGrades": [
                6.73,
                6.88,
                6.89,
                6.92,
                7.05
            ],
            "localStudents": 34,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                71,
                64,
                64,
                63,
                56
            ]
        },
        {
            "id": 163,
            "name": "Philosophy and Sustainability",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                7.37,
                7.57,
                7.51,
                7.42,
                7.52
            ],
            "localStudents": 14,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                42,
                42,
                42,
                42,
                49
            ]
        },
        {
            "id": 164,
            "name": "Applied Sociology",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                6.45,
                6.47,
                6.53,
                6.57,
                6.59
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                64,
                66,
                69,
                69,
                74
            ]
        },
        {
            "id": 165,
            "name": "Sociology and Sustainability",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                7.56,
                7.59,
                7.66,
                7.74,
                7.99
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                56,
                52,
                54,
                46,
                56
            ]
        },
        {
            "id": 166,
            "name": "Applied Design",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                7.44,
                7.53,
                7.7,
                7.55,
                7.15
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                46,
                46,
                43,
                41,
                38
            ]
        },
        {
            "id": 167,
            "name": "Engineering and History",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                7.15,
                7.41,
                6.99,
                7.38,
                6.91
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                62,
                62,
                63,
                65,
                71
            ]
        },
        {
            "id": 168,
            "name": "Advanced Studies in Medicine",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                5.74,
                5.99,
                5.64,
                5.64,
                5.53
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                61,
                63,
                68,
                71,
                75
            ]
        },
        {
            "id": 169,
            "name": "Advanced Studies in Sociology",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                8.66,
                8.52,
                8.3,
                7.97,
                7.94
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                40,
                47,
                49,
                49,
                49
            ]
        },
        {
            "id": 170,
            "name": "Human Law",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                5.85,
                5.97,
                5.98,
                5.71,
                5.88
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                72,
                68,
                68,
                66,
                65
            ]
        },
        {
            "id": 171,
            "name": "Advanced Studies in Philosophy",
            "universityID": 20,
            "language": 1,
            "entryGrades": [
                6.8,
                6.79,
                6.6,
                6.51,
                6.38
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                37,
                43,
                43,
                48,
                49
            ]
        },
        {
            "id": 172,
            "name": "Sociology and History",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                5.81,
                5.91,
                6.14,
                6.27,
                6.46
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                41,
                40,
                41,
                39,
                34
            ]
        },
        {
            "id": 173,
            "name": "Human Philosophy",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                7.35,
                7.4,
                7.59,
                7.87,
                7.98
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                39,
                41,
                45,
                47,
                51
            ]
        },
        {
            "id": 174,
            "name": "Applied Law",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                6.66,
                6.83,
                6.9,
                6.47,
                6.75
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                62,
                72,
                56,
                54,
                68
            ]
        },
        {
            "id": 175,
            "name": "Sociology and Sustainability",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                5.9,
                5.97,
                6.19,
                6.41,
                6.43
            ],
            "localStudents": 29,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                55,
                60,
                61,
                61,
                64
            ]
        },
        {
            "id": 176,
            "name": "Advanced Studies in Engineering",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                8.05,
                8.09,
                8.22,
                8.43,
                8.51
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                63,
                64,
                65,
                67,
                69
            ]
        },
        {
            "id": 177,
            "name": "Design and Virtual Reality",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                8.71,
                8.63,
                8.59,
                8.47,
                8.25
            ],
            "localStudents": 28,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                37,
                40,
                42,
                44,
                45
            ]
        },
        {
            "id": 178,
            "name": "Human Medicine",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                8.25,
                8.33,
                8.39,
                8.41,
                8.59
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                39,
                39,
                40,
                45,
                46
            ]
        },
        {
            "id": 179,
            "name": "Advanced Studies in Philosophy",
            "universityID": 21,
            "language": 1,
            "entryGrades": [
                7.56,
                7.52,
                7.35,
                7.23,
                7.14
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                57,
                55,
                54,
                53,
                51
            ]
        },
        {
            "id": 180,
            "name": "Advanced Studies in Engineering",
            "universityID": 22,
            "language": 1,
            "entryGrades": [
                5.95,
                5.7,
                6.1,
                6,
                5.91
            ],
            "localStudents": 26,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                66,
                65,
                60,
                59,
                56
            ]
        },
        {
            "id": 181,
            "name": "Avancerade studier inom Sociologi",
            "universityID": 22,
            "language": 3,
            "entryGrades": [
                8.27,
                8.41,
                8.46,
                8.48,
                8.72
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                67,
                61,
                61,
                61,
                61
            ]
        },
        {
            "id": 182,
            "name": "Engineering in Society",
            "universityID": 22,
            "language": 1,
            "entryGrades": [
                8.78,
                8.74,
                8.59,
                8.45,
                8.38
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                51,
                52,
                52,
                46,
                56
            ]
        },
        {
            "id": 183,
            "name": "Design i 2000-talet",
            "universityID": 22,
            "language": 3,
            "entryGrades": [
                7.8,
                7.75,
                7.67,
                7.65,
                7.59
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                65,
                65,
                66,
                69,
                59
            ]
        },
        {
            "id": 184,
            "name": "Human Law",
            "universityID": 22,
            "language": 1,
            "entryGrades": [
                6.98,
                7.01,
                7.14,
                7.3,
                7.4
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                49,
                42,
                51,
                48,
                55
            ]
        },
        {
            "id": 185,
            "name": "Matematik i 2000-talet",
            "universityID": 22,
            "language": 3,
            "entryGrades": [
                7.29,
                7.31,
                7.47,
                7.56,
                7.74
            ],
            "localStudents": 18,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                42,
                46,
                47,
                37,
                37
            ]
        },
        {
            "id": 186,
            "name": "Avancerade studier inom Teknik",
            "universityID": 23,
            "language": 3,
            "entryGrades": [
                5.81,
                6.22,
                5.87,
                5.77,
                5.48
            ],
            "localStudents": 28,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                67,
                69,
                70,
                71,
                73
            ]
        },
        {
            "id": 187,
            "name": "Mathematics and Virtual Reality",
            "universityID": 23,
            "language": 1,
            "entryGrades": [
                7.08,
                7.52,
                7.58,
                7.6,
                7.75
            ],
            "localStudents": 23,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                45,
                46,
                48,
                50,
                53
            ]
        },
        {
            "id": 188,
            "name": "Engineering and Sustainability",
            "universityID": 23,
            "language": 1,
            "entryGrades": [
                5.62,
                5.77,
                5.79,
                6.09,
                6.09
            ],
            "localStudents": 18,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                38,
                38,
                43,
                43,
                48
            ]
        },
        {
            "id": 189,
            "name": "Matematik och h\u00e5llbarhet",
            "universityID": 23,
            "language": 3,
            "entryGrades": [
                5.93,
                5.76,
                5.86,
                6.14,
                6.15
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                42,
                43,
                47,
                41,
                45
            ]
        },
        {
            "id": 190,
            "name": "Advanced Studies in Philosophy",
            "universityID": 23,
            "language": 1,
            "entryGrades": [
                6.03,
                5.96,
                5.91,
                5.65,
                5.6
            ],
            "localStudents": 33,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                47,
                52,
                38,
                41,
                44
            ]
        },
        {
            "id": 191,
            "name": "Design i historien",
            "universityID": 23,
            "language": 3,
            "entryGrades": [
                6.59,
                6.51,
                6.74,
                6.88,
                6.22
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                64,
                63,
                60,
                60,
                58
            ]
        },
        {
            "id": 192,
            "name": "Advanced Studies in Design",
            "universityID": 23,
            "language": 1,
            "entryGrades": [
                5.75,
                5.74,
                5.6,
                5.57,
                5.54
            ],
            "localStudents": 15,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                49,
                55,
                55,
                56,
                61
            ]
        },
        {
            "id": 193,
            "name": "Avancerade studier inom Design",
            "universityID": 23,
            "language": 3,
            "entryGrades": [
                7.23,
                7.15,
                7.14,
                6.78,
                6.69
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                41,
                35,
                35,
                40,
                43
            ]
        },
        {
            "id": 194,
            "name": "Engineering and History",
            "universityID": 24,
            "language": 1,
            "entryGrades": [
                7.55,
                7.46,
                7.45,
                7.4,
                7.24
            ],
            "localStudents": 15,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                71,
                71,
                67,
                67,
                61
            ]
        },
        {
            "id": 195,
            "name": "Design and Virtual Reality",
            "universityID": 24,
            "language": 1,
            "entryGrades": [
                5.52,
                5.52,
                5.46,
                5.31,
                5.25
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                62,
                58,
                58,
                52,
                50
            ]
        },
        {
            "id": 196,
            "name": "Medicine in the 21:st Century",
            "universityID": 24,
            "language": 1,
            "entryGrades": [
                6.75,
                6.69,
                6.5,
                6.44,
                6.44
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                40,
                41,
                37,
                43,
                43
            ]
        },
        {
            "id": 197,
            "name": "Avancerade studier inom Filosofi",
            "universityID": 24,
            "language": 3,
            "entryGrades": [
                6.4,
                6.37,
                6.33,
                6.29,
                6.23
            ],
            "localStudents": 30,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                32,
                40,
                44,
                45,
                47
            ]
        },
        {
            "id": 198,
            "name": "Applied Mathematics",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                7.19,
                7.25,
                7.46,
                7.54,
                7.83
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                54,
                54,
                58,
                58,
                60
            ]
        },
        {
            "id": 199,
            "name": "Law in Society",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                6.5,
                6.39,
                6.31,
                6.24,
                6.17
            ],
            "localStudents": 30,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                41,
                32,
                36,
                38,
                44
            ]
        },
        {
            "id": 200,
            "name": "Applied Sociology",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                6.02,
                5.76,
                5.79,
                5.7,
                6.12
            ],
            "localStudents": 26,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                47,
                45,
                42,
                40,
                37
            ]
        },
        {
            "id": 201,
            "name": "Design och h\u00e5llbarhet",
            "universityID": 25,
            "language": 3,
            "entryGrades": [
                6.07,
                6.16,
                6.1,
                6.26,
                5.98
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                45,
                42,
                35,
                33,
                33
            ]
        },
        {
            "id": 202,
            "name": "Avancerade studier inom Juridik",
            "universityID": 25,
            "language": 3,
            "entryGrades": [
                5.58,
                5.57,
                5.59,
                5.68,
                5.63
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                54,
                51,
                50,
                48,
                46
            ]
        },
        {
            "id": 203,
            "name": "Law and Virtual Reality",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                7.88,
                7.89,
                7.89,
                8.02,
                8.09
            ],
            "localStudents": 15,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                59,
                51,
                49,
                47,
                47
            ]
        },
        {
            "id": 204,
            "name": "Design and Sustainability",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                7.8,
                8.01,
                8.2,
                8.33,
                8.34
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                52,
                54,
                55,
                55,
                57
            ]
        },
        {
            "id": 205,
            "name": "Mathematics and Sustainability",
            "universityID": 25,
            "language": 1,
            "entryGrades": [
                7.48,
                7.76,
                7.56,
                7.37,
                7.29
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                40,
                33,
                37,
                43,
                37
            ]
        },
        {
            "id": 206,
            "name": "Avancerade studier inom Design",
            "universityID": 25,
            "language": 3,
            "entryGrades": [
                5.98,
                6.05,
                6.16,
                6.42,
                6.47
            ],
            "localStudents": 25,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                68,
                68,
                69,
                70,
                70
            ]
        },
        {
            "id": 207,
            "name": "Medicin i 2000-talet",
            "universityID": 25,
            "language": 3,
            "entryGrades": [
                6.25,
                6.02,
                6.24,
                6.18,
                6.04
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                43,
                43,
                42,
                40,
                33
            ]
        },
        {
            "id": 208,
            "name": "Design i 2000-talet",
            "universityID": 26,
            "language": 3,
            "entryGrades": [
                6.61,
                6.36,
                6.33,
                6.27,
                6.11
            ],
            "localStudents": 27,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                41,
                43,
                45,
                46,
                50
            ]
        },
        {
            "id": 209,
            "name": "Mathematics in the 21:st Century",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                6.26,
                6.45,
                6.13,
                6.23,
                6.65
            ],
            "localStudents": 25,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                57,
                63,
                64,
                64,
                65
            ]
        },
        {
            "id": 210,
            "name": "Filosofi och virtuell verklighet",
            "universityID": 26,
            "language": 3,
            "entryGrades": [
                7.29,
                7.41,
                7.42,
                7.59,
                7.62
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                43,
                48,
                41,
                41,
                43
            ]
        },
        {
            "id": 211,
            "name": "Applied Mathematics",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                6.33,
                5.96,
                6.67,
                6.46,
                6.05
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                68,
                68,
                69,
                69,
                69
            ]
        },
        {
            "id": 212,
            "name": "Design in the 21:st Century",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                7.22,
                7.01,
                7.55,
                7.36,
                7.28
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                46,
                44,
                42,
                41,
                39
            ]
        },
        {
            "id": 213,
            "name": "Law in the 21:st Century",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                5.61,
                5.62,
                5.86,
                5.98,
                6.15
            ],
            "localStudents": 33,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                44,
                44,
                40,
                38,
                33
            ]
        },
        {
            "id": 214,
            "name": "Philosophy in the 21:st Century",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                7.26,
                6.98,
                7.48,
                7.3,
                7.32
            ],
            "localStudents": 25,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                58,
                56,
                54,
                53,
                60
            ]
        },
        {
            "id": 215,
            "name": "Advanced Studies in Philosophy",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                6.11,
                6.38,
                6.16,
                6.01,
                6.42
            ],
            "localStudents": 34,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                57,
                57,
                56,
                53,
                49
            ]
        },
        {
            "id": 216,
            "name": "Human Sociology",
            "universityID": 26,
            "language": 1,
            "entryGrades": [
                7.87,
                7.77,
                7.55,
                7.54,
                7.48
            ],
            "localStudents": 33,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                57,
                64,
                65,
                65,
                70
            ]
        },
        {
            "id": 217,
            "name": "Avancerade studier inom Teknik",
            "universityID": 26,
            "language": 3,
            "entryGrades": [
                5.62,
                5.7,
                5.86,
                5.89,
                6.22
            ],
            "localStudents": 17,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                44,
                43,
                41,
                40,
                33
            ]
        },
        {
            "id": 218,
            "name": "Applied Mathematics",
            "universityID": 27,
            "language": 1,
            "entryGrades": [
                7.07,
                7.05,
                6.67,
                6.64,
                6.2
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                56,
                58,
                61,
                61,
                62
            ]
        },
        {
            "id": 219,
            "name": "Avancerade studier inom Design",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                5.77,
                5.69,
                5.6,
                5.56,
                5.42
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                36,
                39,
                41,
                42,
                46
            ]
        },
        {
            "id": 220,
            "name": "Sociologi i historien",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                8.15,
                7.76,
                7.7,
                7.64,
                7.39
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                42,
                44,
                34,
                39,
                50
            ]
        },
        {
            "id": 221,
            "name": "Medicin i historien",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                6.25,
                6.21,
                6.19,
                6.05,
                6
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                37,
                40,
                44,
                46,
                48
            ]
        },
        {
            "id": 222,
            "name": "Design and History",
            "universityID": 27,
            "language": 1,
            "entryGrades": [
                8,
                7.75,
                7.52,
                7.48,
                7.42
            ],
            "localStudents": 25,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                44,
                42,
                40,
                35,
                35
            ]
        },
        {
            "id": 223,
            "name": "Medicin och h\u00e5llbarhet",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                7.18,
                7.14,
                7.07,
                7.41,
                7.36
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                39,
                39,
                40,
                43,
                50
            ]
        },
        {
            "id": 224,
            "name": "Avancerade studier inom Teknik",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                8.33,
                8.45,
                8.37,
                8.34,
                8.52
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                57,
                61,
                49,
                51,
                49
            ]
        },
        {
            "id": 225,
            "name": "Avancerade studier inom Filosofi",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                7.77,
                7.89,
                7.62,
                7.74,
                7.52
            ],
            "localStudents": 35,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                58,
                58,
                67,
                68,
                75
            ]
        },
        {
            "id": 226,
            "name": "Matematik och h\u00e5llbarhet",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                7.93,
                7.87,
                7.87,
                7.84,
                7.81
            ],
            "localStudents": 29,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                40,
                40,
                34,
                43,
                39
            ]
        },
        {
            "id": 227,
            "name": "Filosofi i historien",
            "universityID": 27,
            "language": 3,
            "entryGrades": [
                7.07,
                6.82,
                6.8,
                7.25,
                6.75
            ],
            "localStudents": 31,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                61,
                62,
                65,
                65,
                66
            ]
        },
        {
            "id": 228,
            "name": "Advanced Studies in Engineering",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                7.95,
                7.84,
                7.81,
                7.78,
                7.6
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                44,
                47,
                49,
                53,
                54
            ]
        },
        {
            "id": 229,
            "name": "Applied Design",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                6.18,
                5.8,
                5.75,
                5.7,
                5.48
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                59,
                59,
                57,
                57,
                53
            ]
        },
        {
            "id": 230,
            "name": "Avancerade studier inom Matematik",
            "universityID": 28,
            "language": 3,
            "entryGrades": [
                6.51,
                6.44,
                6.21,
                6.32,
                6.79
            ],
            "localStudents": 34,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                68,
                65,
                66,
                73,
                71
            ]
        },
        {
            "id": 231,
            "name": "Sociology and History",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                8.25,
                8.43,
                8.15,
                8.05,
                8.24
            ],
            "localStudents": 29,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                52,
                51,
                55,
                57,
                57
            ]
        },
        {
            "id": 232,
            "name": "Law and Virtual Reality",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                7.86,
                7.61,
                7.6,
                7.27,
                7.26
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                61,
                63,
                63,
                65,
                66
            ]
        },
        {
            "id": 233,
            "name": "Avancerade studier inom Sociologi",
            "universityID": 28,
            "language": 3,
            "entryGrades": [
                5.83,
                5.75,
                5.6,
                5.48,
                5.38
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                64,
                64,
                64,
                67,
                71
            ]
        },
        {
            "id": 234,
            "name": "Advanced Studies in Mathematics",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                7.64,
                7.28,
                7.24,
                7.03,
                7.01
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                40,
                40,
                34,
                34,
                37
            ]
        },
        {
            "id": 235,
            "name": "Sociologi och h\u00e5llbarhet",
            "universityID": 28,
            "language": 3,
            "entryGrades": [
                6.16,
                6.14,
                6.01,
                5.8,
                5.78
            ],
            "localStudents": 26,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                54,
                48,
                45,
                44,
                44
            ]
        },
        {
            "id": 236,
            "name": "Advanced Studies in Law",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                6.7,
                6.54,
                6.41,
                6.36,
                6.34
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                66,
                63,
                62,
                59,
                58
            ]
        },
        {
            "id": 237,
            "name": "Sociology and Virtual Reality",
            "universityID": 28,
            "language": 1,
            "entryGrades": [
                6.67,
                6.75,
                6.75,
                6.83,
                6.86
            ],
            "localStudents": 24,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                45,
                47,
                47,
                48,
                50
            ]
        },
        {
            "id": 238,
            "name": "Avancerade studier inom Teknik",
            "universityID": 28,
            "language": 3,
            "entryGrades": [
                6.6,
                6.64,
                6.82,
                7,
                7.07
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                63,
                68,
                66,
                62,
                67
            ]
        },
        {
            "id": 239,
            "name": "Medicin i 2000-talet",
            "universityID": 28,
            "language": 3,
            "entryGrades": [
                5.94,
                6.13,
                6.24,
                5.74,
                5.52
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                65,
                63,
                60,
                57,
                56
            ]
        },
        {
            "id": 240,
            "name": "Sociology and Sustainability",
            "universityID": 29,
            "language": 1,
            "entryGrades": [
                6.52,
                6.63,
                6.71,
                6.77,
                6.85
            ],
            "localStudents": 18,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                57,
                60,
                61,
                64,
                65
            ]
        },
        {
            "id": 241,
            "name": "Applied Mathematics",
            "universityID": 29,
            "language": 1,
            "entryGrades": [
                6.98,
                7.15,
                7.2,
                7.05,
                7.22
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                43,
                45,
                46,
                49,
                55
            ]
        },
        {
            "id": 242,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 29,
            "language": 0,
            "entryGrades": [
                6,
                6.34,
                6.5,
                6.6,
                6.61
            ],
            "localStudents": 33,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                49,
                46,
                41,
                35,
                33
            ]
        },
        {
            "id": 243,
            "name": "Matem\u00e1ticas aplicadas",
            "universityID": 29,
            "language": 0,
            "entryGrades": [
                6.66,
                6.71,
                6.87,
                7.2,
                7.27
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                50,
                47,
                44,
                44,
                43
            ]
        },
        {
            "id": 244,
            "name": "Medicina en el siglo XXI",
            "universityID": 29,
            "language": 0,
            "entryGrades": [
                7.49,
                7.6,
                7.75,
                7.88,
                8.03
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                44,
                45,
                48,
                49,
                51
            ]
        },
        {
            "id": 245,
            "name": "Estudios superiores de Derecho",
            "universityID": 29,
            "language": 0,
            "entryGrades": [
                7.42,
                7.36,
                7.23,
                7.07,
                7.05
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                67,
                71,
                68,
                64,
                60
            ]
        },
        {
            "id": 246,
            "name": "Advanced Studies in Design",
            "universityID": 29,
            "language": 1,
            "entryGrades": [
                5.91,
                5.78,
                5.72,
                6.23,
                6.15
            ],
            "localStudents": 21,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                46,
                49,
                50,
                53,
                59
            ]
        },
        {
            "id": 247,
            "name": "Design and History",
            "universityID": 29,
            "language": 1,
            "entryGrades": [
                6.36,
                6.3,
                6.23,
                6.02,
                5.9
            ],
            "localStudents": 28,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                62,
                61,
                60,
                57,
                54
            ]
        },
        {
            "id": 248,
            "name": "Estudios superiores de Matem\u00e1ticas",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                7.14,
                7.11,
                7.07,
                6.72,
                6.79
            ],
            "localStudents": 27,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                42,
                50,
                47,
                37,
                43
            ]
        },
        {
            "id": 249,
            "name": "Dise\u00f1o en el siglo XXI",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                7.68,
                7.32,
                7.66,
                7.68,
                7.99
            ],
            "localStudents": 28,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                56,
                61,
                62,
                63,
                64
            ]
        },
        {
            "id": 250,
            "name": "Estudios superiores de Ingenier\u00eda",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                7.32,
                7.1,
                7.07,
                6.84,
                6.8
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                49,
                52,
                53,
                58,
                59
            ]
        },
        {
            "id": 251,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                5.99,
                5.93,
                5.95,
                5.84,
                5.85
            ],
            "localStudents": 15,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                34,
                35,
                40,
                40,
                41
            ]
        },
        {
            "id": 252,
            "name": "Ingenier\u00eda e historia",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                7.91,
                7.9,
                7.74,
                7.89,
                7.84
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                58,
                60,
                60,
                62,
                64
            ]
        },
        {
            "id": 253,
            "name": "Derecho e historia",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                6.47,
                6.45,
                6.38,
                6.21,
                6.17
            ],
            "localStudents": 27,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                53,
                52,
                46,
                44,
                42
            ]
        },
        {
            "id": 254,
            "name": "Estudios superiores de Derecho",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                8.59,
                8.45,
                8.38,
                8.35,
                8.32
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                67,
                66,
                65,
                62,
                55
            ]
        },
        {
            "id": 255,
            "name": "Filosof\u00eda en el siglo XXI",
            "universityID": 30,
            "language": 0,
            "entryGrades": [
                6.95,
                6.84,
                6.84,
                6.78,
                6.76
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                55,
                61,
                58,
                49,
                48
            ]
        },
        {
            "id": 256,
            "name": "Law in Society",
            "universityID": 31,
            "language": 1,
            "entryGrades": [
                6.17,
                6.02,
                5.91,
                5.78,
                5.62
            ],
            "localStudents": 17,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                63,
                63,
                66,
                70,
                72
            ]
        },
        {
            "id": 257,
            "name": "Medicina y sociedad",
            "universityID": 31,
            "language": 0,
            "entryGrades": [
                6.6,
                6.85,
                6.85,
                7,
                7.1
            ],
            "localStudents": 28,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                53,
                52,
                55,
                59,
                50
            ]
        },
        {
            "id": 258,
            "name": "Estudios superiores de Medicina",
            "universityID": 31,
            "language": 0,
            "entryGrades": [
                7.08,
                7.17,
                7.31,
                6.84,
                7.19
            ],
            "localStudents": 12,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                66,
                66,
                65,
                62,
                61
            ]
        },
        {
            "id": 259,
            "name": "Matem\u00e1ticas y realidad virtual",
            "universityID": 31,
            "language": 0,
            "entryGrades": [
                7.3,
                7.55,
                7.47,
                7.47,
                7.12
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                47,
                50,
                42,
                46,
                48
            ]
        },
        {
            "id": 260,
            "name": "Estudios superiores de Dise\u00f1o",
            "universityID": 31,
            "language": 0,
            "entryGrades": [
                6.04,
                6.11,
                6.11,
                6.15,
                6.17
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                69,
                69,
                69,
                70,
                71
            ]
        },
        {
            "id": 261,
            "name": "Design in Society",
            "universityID": 31,
            "language": 1,
            "entryGrades": [
                6.25,
                6.16,
                6.14,
                6.13,
                5.91
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                65,
                57,
                55,
                52,
                50
            ]
        },
        {
            "id": 262,
            "name": "Estudios superiores de Dise\u00f1o",
            "universityID": 32,
            "language": 0,
            "entryGrades": [
                7,
                7.06,
                7.35,
                6.94,
                6.99
            ],
            "localStudents": 35,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                44,
                40,
                34,
                34,
                33
            ]
        },
        {
            "id": 263,
            "name": "Advanced Studies in Design",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                6.32,
                6.63,
                6.67,
                6.82,
                6.95
            ],
            "localStudents": 29,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                66,
                58,
                68,
                65,
                67
            ]
        },
        {
            "id": 264,
            "name": "Law in the 21:st Century",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                7.95,
                8.08,
                8.21,
                8.36,
                8.37
            ],
            "localStudents": 34,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                58,
                58,
                57,
                52,
                52
            ]
        },
        {
            "id": 265,
            "name": "Advanced Studies in Mathematics",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                8.21,
                8.26,
                8.35,
                8.44,
                8.48
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                52,
                55,
                59,
                56,
                47
            ]
        },
        {
            "id": 266,
            "name": "Filosof\u00eda y sostenibilidad",
            "universityID": 32,
            "language": 0,
            "entryGrades": [
                7.18,
                7.33,
                6.95,
                7.08,
                7.36
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                65,
                66,
                62,
                66,
                69
            ]
        },
        {
            "id": 267,
            "name": "Estudios superiores de Matem\u00e1ticas",
            "universityID": 32,
            "language": 0,
            "entryGrades": [
                7.23,
                7.19,
                7.07,
                7.07,
                6.96
            ],
            "localStudents": 18,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                70,
                69,
                66,
                66,
                64
            ]
        },
        {
            "id": 268,
            "name": "Dise\u00f1o y sociedad",
            "universityID": 32,
            "language": 0,
            "entryGrades": [
                5.88,
                5.44,
                5.57,
                5.73,
                5.41
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                57,
                58,
                58,
                60,
                60
            ]
        },
        {
            "id": 269,
            "name": "Human Engineering",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                6.33,
                6.26,
                6.19,
                6.16,
                6.06
            ],
            "localStudents": 22,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                42,
                42,
                39,
                38,
                38
            ]
        },
        {
            "id": 270,
            "name": "Advanced Studies in Sociology",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                7.52,
                7.4,
                7.72,
                7.52,
                7.28
            ],
            "localStudents": 34,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                42,
                40,
                43,
                49,
                44
            ]
        },
        {
            "id": 271,
            "name": "Mathematics and Sustainability",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                6.17,
                6.5,
                6.56,
                6.69,
                6.77
            ],
            "localStudents": 31,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                66,
                72,
                60,
                65,
                71
            ]
        },
        {
            "id": 272,
            "name": "Applied Sociology",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                5.44,
                5.63,
                5.71,
                5.96,
                6.03
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                74,
                73,
                73,
                72,
                69
            ]
        },
        {
            "id": 273,
            "name": "Design and Sustainability",
            "universityID": 32,
            "language": 1,
            "entryGrades": [
                6.53,
                6.48,
                6.44,
                6.37,
                6.34
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                69,
                63,
                62,
                56,
                55
            ]
        },
        {
            "id": 274,
            "name": "Medicine and History",
            "universityID": 33,
            "language": 1,
            "entryGrades": [
                8.31,
                7.91,
                8.51,
                8.66,
                8.4
            ],
            "localStudents": 21,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                69,
                68,
                63,
                58,
                56
            ]
        },
        {
            "id": 275,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 33,
            "language": 0,
            "entryGrades": [
                7.6,
                7.48,
                7.41,
                7.37,
                7.22
            ],
            "localStudents": 16,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                40,
                43,
                46,
                34,
                45
            ]
        },
        {
            "id": 276,
            "name": "Sociolog\u00eda e historia",
            "universityID": 33,
            "language": 0,
            "entryGrades": [
                7.56,
                7.26,
                7.16,
                7.12,
                6.94
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                45,
                48,
                51,
                51,
                54
            ]
        },
        {
            "id": 277,
            "name": "Matem\u00e1ticas y sociedad",
            "universityID": 33,
            "language": 0,
            "entryGrades": [
                6.99,
                6.6,
                6.58,
                6.3,
                6.26
            ],
            "localStudents": 28,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                48,
                46,
                43,
                47,
                53
            ]
        },
        {
            "id": 278,
            "name": "Design and Virtual Reality",
            "universityID": 33,
            "language": 1,
            "entryGrades": [
                7.29,
                7.2,
                7.11,
                6.87,
                6.82
            ],
            "localStudents": 35,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                44,
                46,
                49,
                50,
                51
            ]
        },
        {
            "id": 279,
            "name": "Medicine in Society",
            "universityID": 33,
            "language": 1,
            "entryGrades": [
                8.02,
                8.27,
                7.88,
                7.92,
                7.8
            ],
            "localStudents": 28,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                49,
                47,
                47,
                43,
                42
            ]
        },
        {
            "id": 280,
            "name": "Medicine in the 21:st Century",
            "universityID": 33,
            "language": 1,
            "entryGrades": [
                6.18,
                6.05,
                6.04,
                5.82,
                5.74
            ],
            "localStudents": 19,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                59,
                55,
                59,
                53,
                58
            ]
        },
        {
            "id": 281,
            "name": "Matem\u00e1ticas aplicadas",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                7.47,
                7.57,
                7.6,
                7.62,
                7.69
            ],
            "localStudents": 21,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                64,
                65,
                65,
                70,
                73
            ]
        },
        {
            "id": 282,
            "name": "Medicine and Virtual Reality",
            "universityID": 34,
            "language": 1,
            "entryGrades": [
                7.14,
                7.3,
                7.33,
                7.36,
                7.2
            ],
            "localStudents": 21,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                45,
                49,
                56,
                56,
                57
            ]
        },
        {
            "id": 283,
            "name": "Matem\u00e1ticas y sostenibilidad",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                8.08,
                8.11,
                8.18,
                8.31,
                8.46
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                66,
                72,
                59,
                62,
                69
            ]
        },
        {
            "id": 284,
            "name": "Sociolog\u00eda e historia",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                5.37,
                5.51,
                5.54,
                5.75,
                6.06
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                56,
                56,
                52,
                50,
                44
            ]
        },
        {
            "id": 285,
            "name": "Law in the 21:st Century",
            "universityID": 34,
            "language": 1,
            "entryGrades": [
                5.64,
                5.68,
                5.81,
                5.9,
                5.92
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                62,
                61,
                59,
                58,
                55
            ]
        },
        {
            "id": 286,
            "name": "Estudios superiores de Dise\u00f1o",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                6.51,
                6.36,
                6.32,
                6.16,
                6.06
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                63,
                63,
                67,
                67,
                68
            ]
        },
        {
            "id": 287,
            "name": "Matem\u00e1ticas y sociedad",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                6.28,
                6.15,
                6.1,
                6.03,
                6.02
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                47,
                49,
                50,
                51,
                53
            ]
        },
        {
            "id": 288,
            "name": "Human Engineering",
            "universityID": 34,
            "language": 1,
            "entryGrades": [
                5.53,
                5.69,
                5.7,
                5.73,
                5.73
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                55,
                49,
                55,
                55,
                59
            ]
        },
        {
            "id": 289,
            "name": "Medicina y sostenibilidad",
            "universityID": 34,
            "language": 0,
            "entryGrades": [
                6.89,
                6.85,
                7.28,
                6.79,
                6.93
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                69,
                63,
                63,
                62,
                57
            ]
        },
        {
            "id": 290,
            "name": "Engineering and History",
            "universityID": 35,
            "language": 1,
            "entryGrades": [
                5.87,
                6.28,
                6.58,
                6.64,
                6.71
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                59,
                54,
                63,
                67,
                64
            ]
        },
        {
            "id": 291,
            "name": "Sociolog\u00eda en el siglo XXI",
            "universityID": 35,
            "language": 0,
            "entryGrades": [
                7.36,
                7.52,
                7.62,
                7.71,
                8.04
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                68,
                67,
                66,
                66,
                61
            ]
        },
        {
            "id": 292,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 35,
            "language": 0,
            "entryGrades": [
                7.5,
                7.58,
                7.59,
                7.62,
                7.8
            ],
            "localStudents": 32,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                46,
                42,
                43,
                46,
                43
            ]
        },
        {
            "id": 293,
            "name": "Derecho e historia",
            "universityID": 35,
            "language": 0,
            "entryGrades": [
                6.56,
                6.61,
                6.64,
                6.71,
                6.83
            ],
            "localStudents": 28,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                59,
                64,
                65,
                67,
                69
            ]
        },
        {
            "id": 294,
            "name": "Law in Society",
            "universityID": 35,
            "language": 1,
            "entryGrades": [
                8.01,
                8.1,
                8.13,
                8.15,
                8.22
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                61,
                69,
                67,
                57,
                62
            ]
        },
        {
            "id": 295,
            "name": "Human Medicine",
            "universityID": 35,
            "language": 1,
            "entryGrades": [
                6.22,
                6.14,
                6.14,
                6.01,
                5.98
            ],
            "localStudents": 35,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                35,
                41,
                42,
                46,
                46
            ]
        },
        {
            "id": 296,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 35,
            "language": 0,
            "entryGrades": [
                8.17,
                8.37,
                8.41,
                8.44,
                8.46
            ],
            "localStudents": 15,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                73,
                73,
                66,
                63,
                61
            ]
        },
        {
            "id": 297,
            "name": "Sociolog\u00eda en el siglo XXI",
            "universityID": 36,
            "language": 0,
            "entryGrades": [
                7.97,
                7.69,
                7.59,
                7.26,
                7.24
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                58,
                55,
                55,
                53,
                52
            ]
        },
        {
            "id": 298,
            "name": "Sociology and Sustainability",
            "universityID": 36,
            "language": 1,
            "entryGrades": [
                7.81,
                7.76,
                7.58,
                7.53,
                7.5
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                47,
                47,
                49,
                50,
                55
            ]
        },
        {
            "id": 299,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 36,
            "language": 0,
            "entryGrades": [
                7.84,
                8.04,
                8.16,
                8.25,
                8.58
            ],
            "localStudents": 27,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                60,
                59,
                58,
                54,
                53
            ]
        },
        {
            "id": 300,
            "name": "Ingenier\u00eda y sociedad",
            "universityID": 36,
            "language": 0,
            "entryGrades": [
                7.19,
                7.35,
                7.48,
                7.61,
                8.03
            ],
            "localStudents": 17,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                60,
                60,
                63,
                64,
                65
            ]
        },
        {
            "id": 301,
            "name": "Philosophy and Sustainability",
            "universityID": 37,
            "language": 1,
            "entryGrades": [
                6.81,
                6.55,
                6.93,
                6.88,
                7.11
            ],
            "localStudents": 15,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                60,
                55,
                55,
                54,
                49
            ]
        },
        {
            "id": 302,
            "name": "Applied Medicine",
            "universityID": 37,
            "language": 1,
            "entryGrades": [
                8.43,
                8.23,
                8.13,
                8.08,
                7.97
            ],
            "localStudents": 16,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                53,
                53,
                47,
                46,
                41
            ]
        },
        {
            "id": 303,
            "name": "Law and History",
            "universityID": 37,
            "language": 1,
            "entryGrades": [
                6.93,
                7.21,
                6.58,
                7.31,
                6.97
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                46,
                47,
                49,
                49,
                54
            ]
        },
        {
            "id": 304,
            "name": "Law and Sustainability",
            "universityID": 37,
            "language": 1,
            "entryGrades": [
                5.87,
                6.19,
                5.77,
                5.9,
                5.57
            ],
            "localStudents": 22,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                43,
                42,
                41,
                39,
                48
            ]
        },
        {
            "id": 305,
            "name": "Ingenier\u00eda e historia",
            "universityID": 37,
            "language": 0,
            "entryGrades": [
                5.79,
                6.1,
                6.07,
                6.09,
                5.92
            ],
            "localStudents": 19,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                46,
                41,
                45,
                48,
                44
            ]
        },
        {
            "id": 306,
            "name": "Sociolog\u00eda y sostenibilidad",
            "universityID": 37,
            "language": 0,
            "entryGrades": [
                8.53,
                8.28,
                8.24,
                8.2,
                7.97
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                73,
                71,
                69,
                68,
                66
            ]
        },
        {
            "id": 307,
            "name": "Medicina y realidad virtual",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                6.5,
                6.48,
                6.43,
                6.36,
                6.35
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                39,
                44,
                45,
                45,
                50
            ]
        },
        {
            "id": 308,
            "name": "Derecho y realidad virtual",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                8.41,
                7.99,
                7.93,
                7.85,
                7.51
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                51,
                46,
                43,
                42,
                40
            ]
        },
        {
            "id": 309,
            "name": "Ingenier\u00eda y sociedad",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                8.2,
                7.96,
                7.91,
                7.88,
                7.81
            ],
            "localStudents": 23,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                60,
                62,
                63,
                66,
                67
            ]
        },
        {
            "id": 310,
            "name": "Law and Virtual Reality",
            "universityID": 38,
            "language": 1,
            "entryGrades": [
                6.1,
                5.86,
                5.85,
                5.81,
                5.7
            ],
            "localStudents": 26,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                62,
                63,
                66,
                68,
                69
            ]
        },
        {
            "id": 311,
            "name": "Ingenier\u00eda y realidad virtual",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                7.6,
                7.99,
                8.05,
                7.63,
                7.19
            ],
            "localStudents": 30,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                63,
                66,
                68,
                76,
                76
            ]
        },
        {
            "id": 312,
            "name": "Ingenier\u00eda y sostenibilidad",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                6.79,
                6.76,
                6.63,
                6.63,
                6.61
            ],
            "localStudents": 31,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                62,
                66,
                59,
                56,
                63
            ]
        },
        {
            "id": 313,
            "name": "Advanced Studies in Engineering",
            "universityID": 38,
            "language": 1,
            "entryGrades": [
                6.45,
                6.2,
                6.11,
                6.09,
                5.88
            ],
            "localStudents": 25,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                68,
                75,
                66,
                67,
                71
            ]
        },
        {
            "id": 314,
            "name": "Estudios superiores de Ingenier\u00eda",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                6.9,
                6.79,
                6.71,
                6.48,
                6.46
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                61,
                65,
                66,
                68,
                69
            ]
        },
        {
            "id": 315,
            "name": "Estudios superiores de Matem\u00e1ticas",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                8.39,
                8.43,
                8.45,
                8.47,
                8.51
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                66,
                68,
                67,
                64,
                63
            ]
        },
        {
            "id": 316,
            "name": "Engineering and Virtual Reality",
            "universityID": 38,
            "language": 1,
            "entryGrades": [
                6.79,
                6.74,
                6.52,
                6.49,
                6.21
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                49,
                45,
                42,
                40,
                40
            ]
        },
        {
            "id": 317,
            "name": "Sociology and Virtual Reality",
            "universityID": 38,
            "language": 1,
            "entryGrades": [
                5.92,
                5.81,
                5.73,
                5.64,
                5.63
            ],
            "localStudents": 21,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                49,
                46,
                43,
                42,
                41
            ]
        },
        {
            "id": 318,
            "name": "Filosof\u00eda y sostenibilidad",
            "universityID": 38,
            "language": 0,
            "entryGrades": [
                8.12,
                7.99,
                7.96,
                7.86,
                7.76
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                62,
                59,
                56,
                55,
                50
            ]
        },
        {
            "id": 319,
            "name": "Sociology in Society",
            "universityID": 39,
            "language": 1,
            "entryGrades": [
                7.16,
                7,
                6.78,
                6.81,
                7.35
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                64,
                59,
                63,
                59,
                61
            ]
        },
        {
            "id": 320,
            "name": "Engineering and Sustainability",
            "universityID": 39,
            "language": 1,
            "entryGrades": [
                5.95,
                5.73,
                5.56,
                5.4,
                5.1
            ],
            "localStudents": 22,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                52,
                54,
                51,
                58,
                49
            ]
        },
        {
            "id": 321,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                6.57,
                6.2,
                6.15,
                6.09,
                5.89
            ],
            "localStudents": 34,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                63,
                65,
                66,
                66,
                69
            ]
        },
        {
            "id": 322,
            "name": "Applied Mathematics",
            "universityID": 39,
            "language": 1,
            "entryGrades": [
                7.92,
                7.52,
                7.5,
                7.36,
                7.09
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                57,
                58,
                60,
                60,
                64
            ]
        },
        {
            "id": 323,
            "name": "Estudios superiores de Dise\u00f1o",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                7.92,
                8.15,
                8.12,
                7.71,
                7.85
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                40,
                41,
                46,
                35,
                35
            ]
        },
        {
            "id": 324,
            "name": "Engineering and History",
            "universityID": 39,
            "language": 1,
            "entryGrades": [
                5.55,
                5.61,
                5.68,
                5.77,
                5.83
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                65,
                67,
                63,
                64,
                66
            ]
        },
        {
            "id": 325,
            "name": "Medicina y sociedad",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                7.83,
                7.9,
                7.92,
                8.22,
                8.46
            ],
            "localStudents": 19,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                50,
                54,
                54,
                55,
                56
            ]
        },
        {
            "id": 326,
            "name": "Filosof\u00eda y realidad virtual",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                5.62,
                5.99,
                5.71,
                5.68,
                5.52
            ],
            "localStudents": 35,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                35,
                36,
                40,
                44,
                47
            ]
        },
        {
            "id": 327,
            "name": "Estudios superiores de Matem\u00e1ticas",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                5.69,
                5.72,
                5.81,
                6.01,
                5.85
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                40,
                39,
                37,
                34,
                32
            ]
        },
        {
            "id": 328,
            "name": "Filosof\u00eda aplicadas",
            "universityID": 39,
            "language": 0,
            "entryGrades": [
                6.61,
                6.75,
                6.35,
                6.92,
                6.7
            ],
            "localStudents": 25,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                68,
                66,
                70,
                63,
                63
            ]
        },
        {
            "id": 329,
            "name": "Human Engineering",
            "universityID": 40,
            "language": 1,
            "entryGrades": [
                7.59,
                7.56,
                7.6,
                7.54,
                7.57
            ],
            "localStudents": 31,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                64,
                67,
                69,
                69,
                74
            ]
        },
        {
            "id": 330,
            "name": "Estudios superiores de Derecho",
            "universityID": 40,
            "language": 0,
            "entryGrades": [
                5.85,
                5.85,
                5.98,
                6.16,
                6.42
            ],
            "localStudents": 16,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                38,
                40,
                43,
                43,
                44
            ]
        },
        {
            "id": 331,
            "name": "Ingenier\u00eda y realidad virtual",
            "universityID": 40,
            "language": 0,
            "entryGrades": [
                6.97,
                6.88,
                6.74,
                6.5,
                6.49
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                38,
                40,
                41,
                44,
                45
            ]
        },
        {
            "id": 332,
            "name": "Filosof\u00eda en el siglo XXI",
            "universityID": 40,
            "language": 0,
            "entryGrades": [
                7.92,
                7.85,
                7.61,
                7.47,
                7.32
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                66,
                63,
                63,
                62,
                60
            ]
        },
        {
            "id": 333,
            "name": "Philosophy and History",
            "universityID": 40,
            "language": 1,
            "entryGrades": [
                6.49,
                6.43,
                6.43,
                6.39,
                6.19
            ],
            "localStudents": 25,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                74,
                69,
                69,
                66,
                62
            ]
        },
        {
            "id": 334,
            "name": "Design and Virtual Reality",
            "universityID": 40,
            "language": 1,
            "entryGrades": [
                6.1,
                5.97,
                5.93,
                5.81,
                5.47
            ],
            "localStudents": 26,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                67,
                68,
                69,
                72,
                74
            ]
        },
        {
            "id": 335,
            "name": "Applied Sociology",
            "universityID": 40,
            "language": 1,
            "entryGrades": [
                7.48,
                7.38,
                7.33,
                7.18,
                6.9
            ],
            "localStudents": 28,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                47,
                41,
                44,
                51,
                56
            ]
        },
        {
            "id": 336,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 40,
            "language": 0,
            "entryGrades": [
                6.28,
                6.26,
                6.24,
                6.13,
                5.98
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                47,
                55,
                55,
                55,
                64
            ]
        },
        {
            "id": 337,
            "name": "Advanced Studies in Medicine",
            "universityID": 40,
            "language": 1,
            "entryGrades": [
                7.11,
                7.05,
                6.71,
                6.47,
                6.46
            ],
            "localStudents": 13,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                58,
                60,
                61,
                61,
                63
            ]
        },
        {
            "id": 338,
            "name": "Filosof\u00eda y sostenibilidad",
            "universityID": 40,
            "language": 0,
            "entryGrades": [
                7.8,
                8.07,
                8.1,
                7.93,
                7.59
            ],
            "localStudents": 15,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                42,
                46,
                40,
                39,
                38
            ]
        },
        {
            "id": 339,
            "name": "Dise\u00f1o y sociedad",
            "universityID": 41,
            "language": 0,
            "entryGrades": [
                6.21,
                6.02,
                6.01,
                5.95,
                5.95
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                41,
                39,
                37,
                36,
                38
            ]
        },
        {
            "id": 340,
            "name": "Sociology and History",
            "universityID": 41,
            "language": 1,
            "entryGrades": [
                6.04,
                6.24,
                6.25,
                6.49,
                6.55
            ],
            "localStudents": 32,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                59,
                60,
                60,
                64,
                65
            ]
        },
        {
            "id": 341,
            "name": "Human Engineering",
            "universityID": 41,
            "language": 1,
            "entryGrades": [
                6.01,
                5.58,
                6.3,
                6.31,
                6.05
            ],
            "localStudents": 20,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                63,
                59,
                56,
                55,
                55
            ]
        },
        {
            "id": 342,
            "name": "Ingenier\u00eda aplicadas",
            "universityID": 41,
            "language": 0,
            "entryGrades": [
                7.16,
                7.12,
                6.95,
                6.72,
                6.72
            ],
            "localStudents": 21,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                40,
                42,
                43,
                43,
                46
            ]
        },
        {
            "id": 343,
            "name": "Estudios superiores de Filosof\u00eda",
            "universityID": 41,
            "language": 0,
            "entryGrades": [
                6.91,
                6.44,
                6.31,
                6.27,
                6.05
            ],
            "localStudents": 14,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                63,
                62,
                60,
                66,
                68
            ]
        },
        {
            "id": 344,
            "name": "Law and Sustainability",
            "universityID": 41,
            "language": 1,
            "entryGrades": [
                6.1,
                6.22,
                6.28,
                6.47,
                6.65
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                49,
                53,
                56,
                57,
                61
            ]
        },
        {
            "id": 345,
            "name": "Estudios superiores de Matem\u00e1ticas",
            "universityID": 41,
            "language": 0,
            "entryGrades": [
                5.55,
                5.32,
                5.47,
                5.87,
                5.35
            ],
            "localStudents": 12,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                44,
                52,
                53,
                58,
                62
            ]
        },
        {
            "id": 346,
            "name": "Medicine in the 21:st Century",
            "universityID": 41,
            "language": 1,
            "entryGrades": [
                7.86,
                8.01,
                8.04,
                8.16,
                8.19
            ],
            "localStudents": 30,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                56,
                57,
                60,
                63,
                64
            ]
        },
        {
            "id": 347,
            "name": "Ingenier\u00eda y realidad virtual",
            "universityID": 42,
            "language": 0,
            "entryGrades": [
                8.32,
                8.34,
                8.31,
                8.49,
                8.57
            ],
            "localStudents": 19,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                43,
                42,
                40,
                39,
                35
            ]
        },
        {
            "id": 348,
            "name": "Estudios superiores de Derecho",
            "universityID": 42,
            "language": 0,
            "entryGrades": [
                7.78,
                7.76,
                7.97,
                7.7,
                8.05
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                44,
                46,
                49,
                49,
                53
            ]
        },
        {
            "id": 349,
            "name": "Applied Law",
            "universityID": 42,
            "language": 1,
            "entryGrades": [
                7.78,
                7.81,
                7.59,
                7.75,
                7.66
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                45,
                46,
                49,
                51,
                52
            ]
        },
        {
            "id": 350,
            "name": "Human Design",
            "universityID": 42,
            "language": 1,
            "entryGrades": [
                7.26,
                7.27,
                7.49,
                7.57,
                7.59
            ],
            "localStudents": 12,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                44,
                47,
                48,
                50,
                54
            ]
        },
        {
            "id": 351,
            "name": "Advanced Studies in Engineering",
            "universityID": 42,
            "language": 1,
            "entryGrades": [
                8.41,
                8.59,
                8.6,
                8.44,
                8.3
            ],
            "localStudents": 22,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                62,
                65,
                67,
                63,
                61
            ]
        },
        {
            "id": 352,
            "name": "Applied Philosophy",
            "universityID": 42,
            "language": 1,
            "entryGrades": [
                5.74,
                6.18,
                6.21,
                6.25,
                6.46
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                42,
                45,
                46,
                48,
                51
            ]
        },
        {
            "id": 353,
            "name": "Estudios superiores de Sociolog\u00eda",
            "universityID": 42,
            "language": 0,
            "entryGrades": [
                7.77,
                7.79,
                7.96,
                8,
                8.16
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                63,
                63,
                64,
                60,
                65
            ]
        },
        {
            "id": 354,
            "name": "Estudios superiores de Ingenier\u00eda",
            "universityID": 43,
            "language": 0,
            "entryGrades": [
                6.69,
                6.94,
                6.96,
                6.98,
                7.26
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                40,
                42,
                47,
                36,
                45
            ]
        },
        {
            "id": 355,
            "name": "Sociolog\u00eda y sociedad",
            "universityID": 43,
            "language": 0,
            "entryGrades": [
                6.43,
                6.38,
                6.18,
                6.12,
                6
            ],
            "localStudents": 32,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                61,
                69,
                58,
                61,
                63
            ]
        },
        {
            "id": 356,
            "name": "Philosophy and Virtual Reality",
            "universityID": 43,
            "language": 1,
            "entryGrades": [
                7.64,
                7.88,
                7.89,
                7.98,
                8.16
            ],
            "localStudents": 35,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                56,
                56,
                57,
                62,
                62
            ]
        },
        {
            "id": 357,
            "name": "Ingenier\u00eda y sociedad",
            "universityID": 43,
            "language": 0,
            "entryGrades": [
                8.6,
                8.56,
                8.54,
                8.51,
                8.26
            ],
            "localStudents": 18,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                48,
                50,
                50,
                50,
                52
            ]
        },
        {
            "id": 358,
            "name": "Philosophy in Society",
            "universityID": 43,
            "language": 1,
            "entryGrades": [
                5.36,
                5.41,
                5.59,
                5.67,
                5.78
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                62,
                66,
                56,
                62,
                67
            ]
        },
        {
            "id": 359,
            "name": "Design and Virtual Reality",
            "universityID": 43,
            "language": 1,
            "entryGrades": [
                7.36,
                7.3,
                7.29,
                7.29,
                7.1
            ],
            "localStudents": 16,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                60,
                56,
                56,
                55,
                50
            ]
        },
        {
            "id": 360,
            "name": "Human Medicine",
            "universityID": 43,
            "language": 1,
            "entryGrades": [
                5.89,
                5.97,
                5.64,
                6.05,
                5.58
            ],
            "localStudents": 24,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                44,
                45,
                46,
                48,
                49
            ]
        },
        {
            "id": 361,
            "name": "Engineering and History",
            "universityID": 43,
            "language": 1,
            "entryGrades": [
                6.72,
                6.7,
                6.54,
                6.41,
                6.26
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                68,
                73,
                73,
                69,
                74
            ]
        },
        {
            "id": 362,
            "name": "Design and Virtual Reality",
            "universityID": 44,
            "language": 1,
            "entryGrades": [
                6.85,
                6.77,
                6.63,
                6.57,
                6.39
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                46,
                50,
                52,
                53,
                53
            ]
        },
        {
            "id": 363,
            "name": "Estudios superiores de Dise\u00f1o",
            "universityID": 44,
            "language": 0,
            "entryGrades": [
                6.91,
                6.72,
                6.61,
                6.59,
                6.53
            ],
            "localStudents": 25,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                64,
                68,
                69,
                72,
                74
            ]
        },
        {
            "id": 364,
            "name": "Applied Design",
            "universityID": 44,
            "language": 1,
            "entryGrades": [
                5.58,
                5.6,
                5.61,
                5.88,
                5.43
            ],
            "localStudents": 19,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                63,
                57,
                61,
                65,
                69
            ]
        },
        {
            "id": 365,
            "name": "Medicina y realidad virtual",
            "universityID": 44,
            "language": 0,
            "entryGrades": [
                5.75,
                5.75,
                5.71,
                5.59,
                5.54
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                42,
                34,
                39,
                38,
                35
            ]
        },
        {
            "id": 366,
            "name": "Applied Engineering",
            "universityID": 44,
            "language": 1,
            "entryGrades": [
                7.93,
                7.91,
                7.63,
                7.62,
                7.58
            ],
            "localStudents": 26,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                48,
                53,
                48,
                42,
                47
            ]
        },
        {
            "id": 367,
            "name": "Advanced Studies in Law",
            "universityID": 44,
            "language": 1,
            "entryGrades": [
                6.47,
                6.52,
                6.52,
                6.47,
                6.38
            ],
            "localStudents": 13,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                56,
                55,
                54,
                49,
                46
            ]
        },
        {
            "id": 368,
            "name": "Derecho aplicadas",
            "universityID": 44,
            "language": 0,
            "entryGrades": [
                8.09,
                8.18,
                8.2,
                8.4,
                8.41
            ],
            "localStudents": 33,
            "exchangeStudents": 5,
            "level": "Doctorate",
            "successRate": [
                65,
                60,
                58,
                57,
                52
            ]
        },
        {
            "id": 369,
            "name": "Human Philosophy",
            "universityID": 44,
            "language": 1,
            "entryGrades": [
                6.82,
                6.95,
                7.02,
                7.11,
                7.3
            ],
            "localStudents": 25,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                38,
                40,
                41,
                42,
                46
            ]
        },
        {
            "id": 370,
            "name": "Mathematics and Sustainability",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.36,
                7.19,
                7.18,
                7.14,
                7.1
            ],
            "localStudents": 30,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                66,
                65,
                60,
                58,
                56
            ]
        },
        {
            "id": 371,
            "name": "Applied Philosophy",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                6.68,
                6.52,
                6.5,
                6.4,
                6.13
            ],
            "localStudents": 25,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                56,
                56,
                54,
                53,
                52
            ]
        },
        {
            "id": 372,
            "name": "Law and Sustainability",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                6.26,
                6.46,
                6.65,
                6.77,
                6.81
            ],
            "localStudents": 12,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                54,
                53,
                50,
                47,
                44
            ]
        },
        {
            "id": 373,
            "name": "Sociology and Sustainability",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.99,
                7.63,
                7.63,
                7.52,
                7.42
            ],
            "localStudents": 17,
            "exchangeStudents": 4,
            "level": "Bachelor",
            "successRate": [
                42,
                45,
                48,
                49,
                49
            ]
        },
        {
            "id": 374,
            "name": "Human Medicine",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.02,
                6.81,
                6.79,
                6.67,
                6.57
            ],
            "localStudents": 15,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                60,
                60,
                61,
                63,
                64
            ]
        },
        {
            "id": 375,
            "name": "Advanced Studies in Medicine",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                6.43,
                6.41,
                6.35,
                6.32,
                6.25
            ],
            "localStudents": 27,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                42,
                47,
                50,
                48,
                49
            ]
        },
        {
            "id": 376,
            "name": "Law and Virtual Reality",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.9,
                8.06,
                8.06,
                8.09,
                8.11
            ],
            "localStudents": 17,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                57,
                59,
                60,
                62,
                63
            ]
        },
        {
            "id": 377,
            "name": "Design and History",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                6.25,
                6.42,
                6.46,
                6.69,
                6.69
            ],
            "localStudents": 23,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                55,
                55,
                53,
                52,
                51
            ]
        },
        {
            "id": 378,
            "name": "Design and Sustainability",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                5.89,
                6.08,
                5.66,
                6,
                6.07
            ],
            "localStudents": 32,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                60,
                54,
                53,
                66,
                56
            ]
        },
        {
            "id": 379,
            "name": "Human Law",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.89,
                8.09,
                8.14,
                8.48,
                8.51
            ],
            "localStudents": 14,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                51,
                56,
                45,
                56,
                44
            ]
        },
        {
            "id": 380,
            "name": "Applied Design",
            "universityID": 45,
            "language": 1,
            "entryGrades": [
                7.46,
                7.43,
                7.18,
                7.04,
                6.83
            ],
            "localStudents": 29,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                57,
                60,
                61,
                61,
                63
            ]
        },
        {
            "id": 381,
            "name": "Advanced Studies in Sociology",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                5.72,
                5.77,
                5.98,
                5.98,
                6.32
            ],
            "localStudents": 27,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                71,
                71,
                68,
                67,
                66
            ]
        },
        {
            "id": 382,
            "name": "Applied Philosophy",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.39,
                6.19,
                6.09,
                6.06,
                5.96
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Master",
            "successRate": [
                60,
                59,
                59,
                57,
                55
            ]
        },
        {
            "id": 383,
            "name": "Applied Engineering",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                7.08,
                7.33,
                7.41,
                7.44,
                7.82
            ],
            "localStudents": 27,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                59,
                61,
                62,
                67,
                68
            ]
        },
        {
            "id": 384,
            "name": "Law and Virtual Reality",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.58,
                6.67,
                6.49,
                6.6,
                6.42
            ],
            "localStudents": 23,
            "exchangeStudents": 6,
            "level": "Bachelor",
            "successRate": [
                45,
                45,
                42,
                41,
                39
            ]
        },
        {
            "id": 385,
            "name": "Applied Mathematics",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                7.14,
                7.1,
                7.15,
                7.17,
                6.97
            ],
            "localStudents": 30,
            "exchangeStudents": 4,
            "level": "Doctorate",
            "successRate": [
                66,
                72,
                64,
                63,
                62
            ]
        },
        {
            "id": 386,
            "name": "Advanced Studies in Medicine",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                5.67,
                5.52,
                5.45,
                5.33,
                5.31
            ],
            "localStudents": 18,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                62,
                67,
                67,
                72,
                72
            ]
        },
        {
            "id": 387,
            "name": "Advanced Studies in Law",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.05,
                5.91,
                5.9,
                5.84,
                5.93
            ],
            "localStudents": 33,
            "exchangeStudents": 4,
            "level": "Master",
            "successRate": [
                52,
                45,
                56,
                52,
                58
            ]
        },
        {
            "id": 388,
            "name": "Human Medicine",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                7.37,
                7.3,
                7.26,
                7.23,
                7.03
            ],
            "localStudents": 20,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                50,
                50,
                44,
                41,
                35
            ]
        },
        {
            "id": 389,
            "name": "Philosophy in Society",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.57,
                6.55,
                6.5,
                6.36,
                6.29
            ],
            "localStudents": 24,
            "exchangeStudents": 5,
            "level": "Master",
            "successRate": [
                52,
                56,
                57,
                59,
                61
            ]
        },
        {
            "id": 390,
            "name": "Engineering and Virtual Reality",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                8.08,
                8.14,
                8.38,
                8.48,
                8.74
            ],
            "localStudents": 13,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                50,
                47,
                43,
                41,
                39
            ]
        },
        {
            "id": 391,
            "name": "Engineering in the 21:st Century",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.1,
                6.21,
                6.34,
                6.54,
                6.75
            ],
            "localStudents": 24,
            "exchangeStudents": 6,
            "level": "Doctorate",
            "successRate": [
                61,
                56,
                56,
                56,
                62
            ]
        },
        {
            "id": 392,
            "name": "Advanced Studies in Design",
            "universityID": 46,
            "language": 1,
            "entryGrades": [
                6.63,
                6.52,
                6.41,
                6.39,
                6.28
            ],
            "localStudents": 27,
            "exchangeStudents": 5,
            "level": "Bachelor",
            "successRate": [
                63,
                62,
                58,
                58,
                55
            ]
        }
    ],
    "LANGUAGES": [
        {
            "id": 0,
            "name": "Spanish",
            "flag": "spain.png"
        },
        {
            "id": 1,
            "name": "English",
            "flag": "uk.png"
        },
        {
            "id": 2,
            "name": "French",
            "flag": "france.png"
        },
        {
            "id": 3,
            "name": "Swedish",
            "flag": "sweden.png"
        }
    ],
    "LEVELS": [
        "Bachelor",
        "Master",
        "Doctorate"
    ],
    "CLUBS": [
        {
            "id": 0,
            "universityID": 0,
            "memberCount": 18
        },
        {
            "id": 1,
            "name": "Pirag\u00fca amateur",
            "universityID": 0,
            "memberCount": 16
        },
        {
            "id": 2,
            "name": "Uni\u00f3n de Pirag\u00fca",
            "universityID": 0,
            "memberCount": 29
        },
        {
            "id": 3,
            "name": "Uni\u00f3n de Senderismo",
            "universityID": 0,
            "memberCount": 16
        },
        {
            "id": 4,
            "name": "Rugby en acci\u00f3n",
            "universityID": 0,
            "memberCount": 32
        },
        {
            "id": 5,
            "universityID": 1,
            "memberCount": 28
        },
        {
            "id": 6,
            "name": "Teatro en acci\u00f3n",
            "universityID": 1,
            "memberCount": 25
        },
        {
            "id": 7,
            "name": "Monta\u00f1ismo en acci\u00f3n",
            "universityID": 1,
            "memberCount": 14
        },
        {
            "id": 8,
            "name": "Asociaci\u00f3n de Vuelo",
            "universityID": 1,
            "memberCount": 33
        },
        {
            "id": 9,
            "name": "Asociaci\u00f3n de Fotograf\u00eda",
            "universityID": 1,
            "memberCount": 15
        },
        {
            "id": 10,
            "name": "Juegos de mesa amateur",
            "universityID": 1,
            "memberCount": 27
        },
        {
            "id": 11,
            "universityID": 2,
            "memberCount": 25
        },
        {
            "id": 12,
            "name": "Ajedrez en acci\u00f3n",
            "universityID": 2,
            "memberCount": 10
        },
        {
            "id": 13,
            "name": "Vino en acci\u00f3n",
            "universityID": 2,
            "memberCount": 24
        },
        {
            "id": 14,
            "name": "Club de Mus",
            "universityID": 2,
            "memberCount": 25
        },
        {
            "id": 15,
            "name": "Vuelo en acci\u00f3n",
            "universityID": 2,
            "memberCount": 9
        },
        {
            "id": 16,
            "universityID": 3,
            "memberCount": 17
        },
        {
            "id": 17,
            "name": "Fromage amateur",
            "universityID": 3,
            "memberCount": 7
        },
        {
            "id": 18,
            "name": "Rugby en action",
            "universityID": 3,
            "memberCount": 12
        },
        {
            "id": 19,
            "name": "Union de Rugby",
            "universityID": 3,
            "memberCount": 25
        },
        {
            "id": 20,
            "name": "Association de Po\u00e9sie",
            "universityID": 3,
            "memberCount": 22
        },
        {
            "id": 21,
            "name": "Ski amateur",
            "universityID": 3,
            "memberCount": 8
        },
        {
            "id": 22,
            "universityID": 4,
            "memberCount": 22
        },
        {
            "id": 23,
            "name": "Association de Po\u00e9sie",
            "universityID": 4,
            "memberCount": 7
        },
        {
            "id": 24,
            "name": "Association de Handball",
            "universityID": 4,
            "memberCount": 27
        },
        {
            "id": 25,
            "name": "Club de Randon\u00e9e",
            "universityID": 4,
            "memberCount": 12
        },
        {
            "id": 26,
            "universityID": 5,
            "memberCount": 17
        },
        {
            "id": 27,
            "name": "Rugby en action",
            "universityID": 5,
            "memberCount": 11
        },
        {
            "id": 28,
            "name": "Union de Th\u00e9atre",
            "universityID": 5,
            "memberCount": 20
        },
        {
            "id": 29,
            "name": "Club de Bridge",
            "universityID": 5,
            "memberCount": 31
        },
        {
            "id": 30,
            "name": "Union de Beaux Arts",
            "universityID": 5,
            "memberCount": 14
        },
        {
            "id": 31,
            "universityID": 6,
            "memberCount": 31
        },
        {
            "id": 32,
            "name": "Randon\u00e9e en action",
            "universityID": 6,
            "memberCount": 28
        },
        {
            "id": 33,
            "name": "Union de Randon\u00e9e",
            "universityID": 6,
            "memberCount": 15
        },
        {
            "id": 34,
            "name": "Ski en action",
            "universityID": 6,
            "memberCount": 12
        },
        {
            "id": 35,
            "universityID": 7,
            "memberCount": 8
        },
        {
            "id": 36,
            "name": "Club de Bon Manger",
            "universityID": 7,
            "memberCount": 16
        },
        {
            "id": 37,
            "name": "Union de \u00c9checs",
            "universityID": 7,
            "memberCount": 7
        },
        {
            "id": 38,
            "name": "Association de Rugby",
            "universityID": 7,
            "memberCount": 10
        },
        {
            "id": 39,
            "name": "Association de Fotografie",
            "universityID": 7,
            "memberCount": 28
        },
        {
            "id": 40,
            "universityID": 8,
            "memberCount": 14
        },
        {
            "id": 41,
            "name": "Club de Th\u00e9atre",
            "universityID": 8,
            "memberCount": 29
        },
        {
            "id": 42,
            "name": "Club de \u00c9checs",
            "universityID": 8,
            "memberCount": 9
        },
        {
            "id": 43,
            "name": "Voile amateur",
            "universityID": 8,
            "memberCount": 26
        },
        {
            "id": 44,
            "name": "Ski amateur",
            "universityID": 8,
            "memberCount": 9
        },
        {
            "id": 45,
            "universityID": 9,
            "memberCount": 7
        },
        {
            "id": 46,
            "name": "Fromage amateur",
            "universityID": 9,
            "memberCount": 19
        },
        {
            "id": 47,
            "name": "Randon\u00e9e en action",
            "universityID": 9,
            "memberCount": 33
        },
        {
            "id": 48,
            "name": "Club de \u00c9checs",
            "universityID": 9,
            "memberCount": 16
        },
        {
            "id": 49,
            "universityID": 10,
            "memberCount": 32
        },
        {
            "id": 50,
            "name": "Table Tennis Amateurs",
            "universityID": 10,
            "memberCount": 15
        },
        {
            "id": 51,
            "name": "Friends of Table Tennis",
            "universityID": 10,
            "memberCount": 22
        },
        {
            "id": 52,
            "name": "Friends of Rugby",
            "universityID": 10,
            "memberCount": 16
        },
        {
            "id": 53,
            "universityID": 11,
            "memberCount": 16
        },
        {
            "id": 54,
            "name": "Friends of Rugby",
            "universityID": 11,
            "memberCount": 17
        },
        {
            "id": 55,
            "name": "Friends of Boardgames",
            "universityID": 11,
            "memberCount": 16
        },
        {
            "id": 56,
            "name": "Chess Amateurs",
            "universityID": 11,
            "memberCount": 12
        },
        {
            "id": 57,
            "name": "Rugby Club",
            "universityID": 11,
            "memberCount": 33
        },
        {
            "id": 58,
            "universityID": 12,
            "memberCount": 32
        },
        {
            "id": 59,
            "name": "Friends of Mountainbike",
            "universityID": 12,
            "memberCount": 10
        },
        {
            "id": 60,
            "name": "Friends of Football",
            "universityID": 12,
            "memberCount": 7
        },
        {
            "id": 61,
            "name": "Table Tennis Amateurs",
            "universityID": 12,
            "memberCount": 27
        },
        {
            "id": 62,
            "name": "Gourmet Club",
            "universityID": 12,
            "memberCount": 31
        },
        {
            "id": 63,
            "name": "Friends of Table Tennis",
            "universityID": 12,
            "memberCount": 15
        },
        {
            "id": 64,
            "universityID": 13,
            "memberCount": 29
        },
        {
            "id": 65,
            "name": "Friends of Rugby",
            "universityID": 13,
            "memberCount": 29
        },
        {
            "id": 66,
            "name": "Friends of Cricket",
            "universityID": 13,
            "memberCount": 25
        },
        {
            "id": 67,
            "name": "Football Club",
            "universityID": 13,
            "memberCount": 14
        },
        {
            "id": 68,
            "name": "Table Tennis Amateurs",
            "universityID": 13,
            "memberCount": 26
        },
        {
            "id": 69,
            "universityID": 14,
            "memberCount": 31
        },
        {
            "id": 70,
            "name": "Friends of Bridge",
            "universityID": 14,
            "memberCount": 8
        },
        {
            "id": 71,
            "name": "Mounteneering Association",
            "universityID": 14,
            "memberCount": 15
        },
        {
            "id": 72,
            "name": "Football Amateurs",
            "universityID": 14,
            "memberCount": 30
        },
        {
            "id": 73,
            "universityID": 15,
            "memberCount": 20
        },
        {
            "id": 74,
            "name": "Photography Association",
            "universityID": 15,
            "memberCount": 32
        },
        {
            "id": 75,
            "name": "Friends of Cricket",
            "universityID": 15,
            "memberCount": 28
        },
        {
            "id": 76,
            "name": "Friends of Rugby",
            "universityID": 15,
            "memberCount": 30
        },
        {
            "id": 77,
            "name": "Boardgames Club",
            "universityID": 15,
            "memberCount": 16
        },
        {
            "id": 78,
            "name": "Chess Association",
            "universityID": 15,
            "memberCount": 33
        },
        {
            "id": 79,
            "universityID": 16,
            "memberCount": 9
        },
        {
            "id": 80,
            "name": "Friends of Mountainbike",
            "universityID": 16,
            "memberCount": 12
        },
        {
            "id": 81,
            "name": "Friends of Mounteneering",
            "universityID": 16,
            "memberCount": 23
        },
        {
            "id": 82,
            "name": "Friends of Photography",
            "universityID": 16,
            "memberCount": 9
        },
        {
            "id": 83,
            "name": "Chess Amateurs",
            "universityID": 16,
            "memberCount": 23
        },
        {
            "id": 84,
            "name": "Friends of Cricket",
            "universityID": 16,
            "memberCount": 21
        },
        {
            "id": 85,
            "universityID": 17,
            "memberCount": 7
        },
        {
            "id": 86,
            "name": "Rugby Amateurs",
            "universityID": 17,
            "memberCount": 13
        },
        {
            "id": 87,
            "name": "Friends of Gourmet",
            "universityID": 17,
            "memberCount": 30
        },
        {
            "id": 88,
            "name": "Friends of Mounteneering",
            "universityID": 17,
            "memberCount": 30
        },
        {
            "id": 89,
            "name": "Friends of Mountainbike",
            "universityID": 17,
            "memberCount": 31
        },
        {
            "id": 90,
            "name": "Gourmet Amateurs",
            "universityID": 17,
            "memberCount": 19
        },
        {
            "id": 91,
            "universityID": 18,
            "memberCount": 11
        },
        {
            "id": 92,
            "name": "Photography Association",
            "universityID": 18,
            "memberCount": 8
        },
        {
            "id": 93,
            "name": "Friends of Gourmet",
            "universityID": 18,
            "memberCount": 14
        },
        {
            "id": 94,
            "name": "Friends of Mounteneering",
            "universityID": 18,
            "memberCount": 10
        },
        {
            "id": 95,
            "universityID": 19,
            "memberCount": 24
        },
        {
            "id": 96,
            "name": "Boardgames Amateurs",
            "universityID": 19,
            "memberCount": 20
        },
        {
            "id": 97,
            "name": "Friends of Boardgames",
            "universityID": 19,
            "memberCount": 21
        },
        {
            "id": 98,
            "name": "Mountainbike Amateurs",
            "universityID": 19,
            "memberCount": 14
        },
        {
            "id": 99,
            "universityID": 20,
            "memberCount": 19
        },
        {
            "id": 100,
            "name": "Friends of Bridge",
            "universityID": 20,
            "memberCount": 14
        },
        {
            "id": 101,
            "name": "Friends of Photography",
            "universityID": 20,
            "memberCount": 22
        },
        {
            "id": 102,
            "name": "Boardgames Club",
            "universityID": 20,
            "memberCount": 16
        },
        {
            "id": 103,
            "name": "Bridge Association",
            "universityID": 20,
            "memberCount": 24
        },
        {
            "id": 104,
            "universityID": 21,
            "memberCount": 13
        },
        {
            "id": 105,
            "name": "Friends of Chess",
            "universityID": 21,
            "memberCount": 31
        },
        {
            "id": 106,
            "name": "Beer Amateurs",
            "universityID": 21,
            "memberCount": 8
        },
        {
            "id": 107,
            "name": "Friends of Beer",
            "universityID": 21,
            "memberCount": 19
        },
        {
            "id": 108,
            "name": "Friends of Cricket",
            "universityID": 21,
            "memberCount": 7
        },
        {
            "id": 109,
            "name": "Boardgames Association",
            "universityID": 21,
            "memberCount": 31
        },
        {
            "id": 110,
            "universityID": 22,
            "memberCount": 28
        },
        {
            "id": 111,
            "name": "Kl\u00e4ttringf\u00f6rening",
            "universityID": 22,
            "memberCount": 9
        },
        {
            "id": 112,
            "name": "Gemenskapet f\u00f6r Innebandy",
            "universityID": 22,
            "memberCount": 13
        },
        {
            "id": 113,
            "name": "Schackf\u00f6rening",
            "universityID": 22,
            "memberCount": 24
        },
        {
            "id": 114,
            "universityID": 23,
            "memberCount": 16
        },
        {
            "id": 115,
            "name": "Gemenskapet f\u00f6r Bordtennis",
            "universityID": 23,
            "memberCount": 24
        },
        {
            "id": 116,
            "name": "Orienteringklubben",
            "universityID": 23,
            "memberCount": 18
        },
        {
            "id": 117,
            "name": "Gemenskapet f\u00f6r Rugby",
            "universityID": 23,
            "memberCount": 16
        },
        {
            "id": 118,
            "universityID": 24,
            "memberCount": 32
        },
        {
            "id": 119,
            "name": "Gemenskapet f\u00f6r \u00d6l och mat",
            "universityID": 24,
            "memberCount": 7
        },
        {
            "id": 120,
            "name": "Gemenskapet f\u00f6r Hockey",
            "universityID": 24,
            "memberCount": 27
        },
        {
            "id": 121,
            "name": "Studentklubben Teater",
            "universityID": 24,
            "memberCount": 18
        },
        {
            "id": 122,
            "name": "Tennisf\u00f6rening",
            "universityID": 24,
            "memberCount": 28
        },
        {
            "id": 123,
            "name": "Hockeyklubben",
            "universityID": 24,
            "memberCount": 11
        },
        {
            "id": 124,
            "universityID": 25,
            "memberCount": 24
        },
        {
            "id": 125,
            "name": "Studentklubben Kl\u00e4ttring",
            "universityID": 25,
            "memberCount": 29
        },
        {
            "id": 126,
            "name": "Studentklubben eSports",
            "universityID": 25,
            "memberCount": 11
        },
        {
            "id": 127,
            "name": "Gemenskapet f\u00f6r \u00d6l och mat",
            "universityID": 25,
            "memberCount": 7
        },
        {
            "id": 128,
            "universityID": 26,
            "memberCount": 31
        },
        {
            "id": 129,
            "name": "Innebandyklubben",
            "universityID": 26,
            "memberCount": 15
        },
        {
            "id": 130,
            "name": "Gemenskapet f\u00f6r Orientering",
            "universityID": 26,
            "memberCount": 18
        },
        {
            "id": 131,
            "name": "Teaterf\u00f6rening",
            "universityID": 26,
            "memberCount": 29
        },
        {
            "id": 132,
            "universityID": 27,
            "memberCount": 11
        },
        {
            "id": 133,
            "name": "Gemenskapet f\u00f6r Kl\u00e4ttring",
            "universityID": 27,
            "memberCount": 14
        },
        {
            "id": 134,
            "name": "Studentklubben Tennis",
            "universityID": 27,
            "memberCount": 20
        },
        {
            "id": 135,
            "name": "Studentklubben Hockey",
            "universityID": 27,
            "memberCount": 19
        },
        {
            "id": 136,
            "name": "Gemenskapet f\u00f6r Bordtennis",
            "universityID": 27,
            "memberCount": 31
        },
        {
            "id": 137,
            "universityID": 28,
            "memberCount": 24
        },
        {
            "id": 138,
            "name": "Fotografif\u00f6rening",
            "universityID": 28,
            "memberCount": 17
        },
        {
            "id": 139,
            "name": "Gemenskapet f\u00f6r Fotografi",
            "universityID": 28,
            "memberCount": 26
        },
        {
            "id": 140,
            "name": "Hockeyf\u00f6rening",
            "universityID": 28,
            "memberCount": 11
        },
        {
            "id": 141,
            "name": "eSportsf\u00f6rening",
            "universityID": 28,
            "memberCount": 25
        },
        {
            "id": 142,
            "name": "Innebandyf\u00f6rening",
            "universityID": 28,
            "memberCount": 15
        },
        {
            "id": 143,
            "universityID": 29,
            "memberCount": 21
        },
        {
            "id": 144,
            "name": "Amigos de Pirag\u00fca",
            "universityID": 29,
            "memberCount": 30
        },
        {
            "id": 145,
            "name": "Vuelo amateur",
            "universityID": 29,
            "memberCount": 29
        },
        {
            "id": 146,
            "name": "Monta\u00f1ismo en acci\u00f3n",
            "universityID": 29,
            "memberCount": 10
        },
        {
            "id": 147,
            "universityID": 30,
            "memberCount": 30
        },
        {
            "id": 148,
            "name": "Amigos de Vino",
            "universityID": 30,
            "memberCount": 21
        },
        {
            "id": 149,
            "name": "Uni\u00f3n de Pirag\u00fca",
            "universityID": 30,
            "memberCount": 23
        },
        {
            "id": 150,
            "name": "Asociaci\u00f3n de Pintura",
            "universityID": 30,
            "memberCount": 22
        },
        {
            "id": 151,
            "name": "Mus amateur",
            "universityID": 30,
            "memberCount": 10
        },
        {
            "id": 152,
            "name": "Asociaci\u00f3n de Fotograf\u00eda",
            "universityID": 30,
            "memberCount": 33
        },
        {
            "id": 153,
            "universityID": 31,
            "memberCount": 10
        },
        {
            "id": 154,
            "name": "Balonmano en acci\u00f3n",
            "universityID": 31,
            "memberCount": 23
        },
        {
            "id": 155,
            "name": "Fotograf\u00eda amateur",
            "universityID": 31,
            "memberCount": 21
        },
        {
            "id": 156,
            "name": "Uni\u00f3n de Monta\u00f1ismo",
            "universityID": 31,
            "memberCount": 14
        },
        {
            "id": 157,
            "name": "Juegos de mesa amateur",
            "universityID": 31,
            "memberCount": 28
        },
        {
            "id": 158,
            "universityID": 32,
            "memberCount": 33
        },
        {
            "id": 159,
            "name": "Asociaci\u00f3n de Vuelo",
            "universityID": 32,
            "memberCount": 8
        },
        {
            "id": 160,
            "name": "Club de Balonmano",
            "universityID": 32,
            "memberCount": 26
        },
        {
            "id": 161,
            "name": "Club de Rugby",
            "universityID": 32,
            "memberCount": 30
        },
        {
            "id": 162,
            "name": "Amigos de Sexo, Drogas y Rockanroll",
            "universityID": 32,
            "memberCount": 18
        },
        {
            "id": 163,
            "universityID": 33,
            "memberCount": 16
        },
        {
            "id": 164,
            "name": "Teatro amateur",
            "universityID": 33,
            "memberCount": 18
        },
        {
            "id": 165,
            "name": "Ajedrez en acci\u00f3n",
            "universityID": 33,
            "memberCount": 13
        },
        {
            "id": 166,
            "name": "Juegos de mesa en acci\u00f3n",
            "universityID": 33,
            "memberCount": 21
        },
        {
            "id": 167,
            "name": "Vela amateur",
            "universityID": 33,
            "memberCount": 30
        },
        {
            "id": 168,
            "universityID": 34,
            "memberCount": 14
        },
        {
            "id": 169,
            "name": "Senderismo amateur",
            "universityID": 34,
            "memberCount": 32
        },
        {
            "id": 170,
            "name": "Uni\u00f3n de Vela",
            "universityID": 34,
            "memberCount": 12
        },
        {
            "id": 171,
            "name": "Asociaci\u00f3n de Fotograf\u00eda",
            "universityID": 34,
            "memberCount": 23
        },
        {
            "id": 172,
            "universityID": 35,
            "memberCount": 17
        },
        {
            "id": 173,
            "name": "Teatro amateur",
            "universityID": 35,
            "memberCount": 9
        },
        {
            "id": 174,
            "name": "Pintura amateur",
            "universityID": 35,
            "memberCount": 12
        },
        {
            "id": 175,
            "name": "Asociaci\u00f3n de Pintura",
            "universityID": 35,
            "memberCount": 13
        },
        {
            "id": 176,
            "name": "Club de Pintura",
            "universityID": 35,
            "memberCount": 19
        },
        {
            "id": 177,
            "universityID": 36,
            "memberCount": 22
        },
        {
            "id": 178,
            "name": "Asociaci\u00f3n de Ajedrez",
            "universityID": 36,
            "memberCount": 13
        },
        {
            "id": 179,
            "name": "Amigos de Sexo, Drogas y Rockanroll",
            "universityID": 36,
            "memberCount": 14
        },
        {
            "id": 180,
            "name": "Asociaci\u00f3n de Monta\u00f1ismo",
            "universityID": 36,
            "memberCount": 23
        },
        {
            "id": 181,
            "name": "Teatro en acci\u00f3n",
            "universityID": 36,
            "memberCount": 17
        },
        {
            "id": 182,
            "universityID": 37,
            "memberCount": 20
        },
        {
            "id": 183,
            "name": "Asociaci\u00f3n de Senderismo",
            "universityID": 37,
            "memberCount": 30
        },
        {
            "id": 184,
            "name": "Juegos de mesa amateur",
            "universityID": 37,
            "memberCount": 14
        },
        {
            "id": 185,
            "name": "Asociaci\u00f3n de Balonmano",
            "universityID": 37,
            "memberCount": 30
        },
        {
            "id": 186,
            "name": "Rugby en acci\u00f3n",
            "universityID": 37,
            "memberCount": 30
        },
        {
            "id": 187,
            "name": "Club de Juegos de mesa",
            "universityID": 37,
            "memberCount": 31
        },
        {
            "id": 188,
            "universityID": 38,
            "memberCount": 28
        },
        {
            "id": 189,
            "name": "Vino amateur",
            "universityID": 38,
            "memberCount": 13
        },
        {
            "id": 190,
            "name": "Club de Vino",
            "universityID": 38,
            "memberCount": 29
        },
        {
            "id": 191,
            "name": "Juegos de mesa en acci\u00f3n",
            "universityID": 38,
            "memberCount": 26
        },
        {
            "id": 192,
            "name": "Asociaci\u00f3n de Balonmano",
            "universityID": 38,
            "memberCount": 32
        },
        {
            "id": 193,
            "name": "Amigos de Pirag\u00fca",
            "universityID": 38,
            "memberCount": 12
        },
        {
            "id": 194,
            "universityID": 39,
            "memberCount": 13
        },
        {
            "id": 195,
            "name": "Club de Pirag\u00fca",
            "universityID": 39,
            "memberCount": 16
        },
        {
            "id": 196,
            "name": "Monta\u00f1ismo amateur",
            "universityID": 39,
            "memberCount": 18
        },
        {
            "id": 197,
            "name": "Uni\u00f3n de Vino",
            "universityID": 39,
            "memberCount": 30
        },
        {
            "id": 198,
            "name": "Vela en acci\u00f3n",
            "universityID": 39,
            "memberCount": 11
        },
        {
            "id": 199,
            "name": "Amigos de Pirag\u00fca",
            "universityID": 39,
            "memberCount": 13
        },
        {
            "id": 200,
            "universityID": 40,
            "memberCount": 27
        },
        {
            "id": 201,
            "name": "Vino en acci\u00f3n",
            "universityID": 40,
            "memberCount": 15
        },
        {
            "id": 202,
            "name": "Asociaci\u00f3n de Teatro",
            "universityID": 40,
            "memberCount": 29
        },
        {
            "id": 203,
            "name": "Teatro amateur",
            "universityID": 40,
            "memberCount": 22
        },
        {
            "id": 204,
            "name": "Club de Rugby",
            "universityID": 40,
            "memberCount": 31
        },
        {
            "id": 205,
            "universityID": 41,
            "memberCount": 31
        },
        {
            "id": 206,
            "name": "Asociaci\u00f3n de Sexo, Drogas y Rockanroll",
            "universityID": 41,
            "memberCount": 11
        },
        {
            "id": 207,
            "name": "Amigos de Vino",
            "universityID": 41,
            "memberCount": 27
        },
        {
            "id": 208,
            "name": "Asociaci\u00f3n de Pirag\u00fca",
            "universityID": 41,
            "memberCount": 31
        },
        {
            "id": 209,
            "name": "Amigos de Monta\u00f1ismo",
            "universityID": 41,
            "memberCount": 30
        },
        {
            "id": 210,
            "name": "Pirag\u00fca amateur",
            "universityID": 41,
            "memberCount": 15
        },
        {
            "id": 211,
            "universityID": 42,
            "memberCount": 20
        },
        {
            "id": 212,
            "name": "Uni\u00f3n de Pirag\u00fca",
            "universityID": 42,
            "memberCount": 21
        },
        {
            "id": 213,
            "name": "Monta\u00f1ismo en acci\u00f3n",
            "universityID": 42,
            "memberCount": 28
        },
        {
            "id": 214,
            "name": "Asociaci\u00f3n de Rugby",
            "universityID": 42,
            "memberCount": 24
        },
        {
            "id": 215,
            "name": "Uni\u00f3n de Vela",
            "universityID": 42,
            "memberCount": 32
        },
        {
            "id": 216,
            "universityID": 43,
            "memberCount": 31
        },
        {
            "id": 217,
            "name": "Amigos de Senderismo",
            "universityID": 43,
            "memberCount": 27
        },
        {
            "id": 218,
            "name": "Uni\u00f3n de Bicicleta",
            "universityID": 43,
            "memberCount": 11
        },
        {
            "id": 219,
            "name": "Juegos de mesa amateur",
            "universityID": 43,
            "memberCount": 22
        },
        {
            "id": 220,
            "name": "Amigos de Ajedrez",
            "universityID": 43,
            "memberCount": 11
        },
        {
            "id": 221,
            "universityID": 44,
            "memberCount": 20
        },
        {
            "id": 222,
            "name": "Uni\u00f3n de Monta\u00f1ismo",
            "universityID": 44,
            "memberCount": 14
        },
        {
            "id": 223,
            "name": "Amigos de Teatro",
            "universityID": 44,
            "memberCount": 19
        },
        {
            "id": 224,
            "name": "Vela amateur",
            "universityID": 44,
            "memberCount": 12
        },
        {
            "id": 225,
            "universityID": 45,
            "memberCount": 12
        },
        {
            "id": 226,
            "name": "Friends of Cricket",
            "universityID": 45,
            "memberCount": 20
        },
        {
            "id": 227,
            "name": "Friends of Table Tennis",
            "universityID": 45,
            "memberCount": 17
        },
        {
            "id": 228,
            "name": "Mountainbike Club",
            "universityID": 45,
            "memberCount": 9
        },
        {
            "id": 229,
            "name": "Friends of Boardgames",
            "universityID": 45,
            "memberCount": 31
        },
        {
            "id": 230,
            "name": "Friends of Rugby",
            "universityID": 45,
            "memberCount": 26
        },
        {
            "id": 231,
            "universityID": 46,
            "memberCount": 10
        },
        {
            "id": 232,
            "name": "Beer Club",
            "universityID": 46,
            "memberCount": 19
        },
        {
            "id": 233,
            "name": "Friends of Beer",
            "universityID": 46,
            "memberCount": 32
        },
        {
            "id": 234,
            "name": "Gourmet Club",
            "universityID": 46,
            "memberCount": 18
        },
        {
            "id": 235,
            "name": "Mountainbike Association",
            "universityID": 46,
            "memberCount": 26
        }
    ],
    "ENTERTAINMENT_PLACES": [
        {
            "id": 0,
            "name": "Club de noche Libertad",
            "cityID": 0
        },
        {
            "id": 1,
            "name": "Restaurante Chile",
            "cityID": 0
        },
        {
            "id": 2,
            "name": "Restaurante Ca\u00f1\u00ed",
            "cityID": 0
        },
        {
            "id": 3,
            "name": "Restaurante Azteca",
            "cityID": 0
        },
        {
            "id": 4,
            "name": "Club de noche Estrecho",
            "cityID": 0
        },
        {
            "id": 5,
            "name": "Bar Raza",
            "cityID": 0
        },
        {
            "id": 6,
            "name": "Bar Vascongadas",
            "cityID": 0
        },
        {
            "id": 7,
            "name": "Galer\u00eda Las Am\u00e9ricas",
            "cityID": 0
        },
        {
            "id": 8,
            "name": "Bar Lobos",
            "cityID": 0
        },
        {
            "id": 9,
            "name": "Restaurante Central",
            "cityID": 0
        },
        {
            "id": 10,
            "name": "Fonda Pac\u00edfico",
            "cityID": 0
        },
        {
            "id": 11,
            "name": "Bar NoPasar\u00e1n",
            "cityID": 0
        },
        {
            "id": 12,
            "name": "Bar Luna",
            "cityID": 0
        },
        {
            "id": 13,
            "name": "Bar Sombrero",
            "cityID": 0
        },
        {
            "id": 14,
            "name": "Cines Pepe",
            "cityID": 0
        },
        {
            "id": 15,
            "name": "Bar Mediterr\u00e1neo",
            "cityID": 0
        },
        {
            "id": 16,
            "name": "Bar de copas Londres",
            "cityID": 0
        },
        {
            "id": 17,
            "name": "Restaurante Hasta la Vista",
            "cityID": 0
        },
        {
            "id": 18,
            "name": "Discoteca Granada",
            "cityID": 1
        },
        {
            "id": 19,
            "name": "Restaurante Para\u00edso",
            "cityID": 1
        },
        {
            "id": 20,
            "name": "Galer\u00eda Luna",
            "cityID": 1
        },
        {
            "id": 21,
            "name": "Fonda Lobos",
            "cityID": 1
        },
        {
            "id": 22,
            "name": "Teatro Amigo",
            "cityID": 1
        },
        {
            "id": 23,
            "name": "Fonda Barna",
            "cityID": 1
        },
        {
            "id": 24,
            "name": "Fonda Arriba",
            "cityID": 1
        },
        {
            "id": 25,
            "name": "Restaurante Ca\u00f1\u00ed",
            "cityID": 1
        },
        {
            "id": 26,
            "name": "Bar de copas NoPasar\u00e1n",
            "cityID": 1
        },
        {
            "id": 27,
            "name": "Restaurante Guacamole",
            "cityID": 1
        },
        {
            "id": 28,
            "name": "Bar Pepe",
            "cityID": 1
        },
        {
            "id": 29,
            "name": "Fonda Binvenguts",
            "cityID": 1
        },
        {
            "id": 30,
            "name": "Restaurante Nunca",
            "cityID": 1
        },
        {
            "id": 31,
            "name": "Restaurante Fuego",
            "cityID": 1
        },
        {
            "id": 32,
            "name": "Restaurante Cul\u00e9",
            "cityID": 1
        },
        {
            "id": 33,
            "name": "Discoteca Sombrero",
            "cityID": 1
        },
        {
            "id": 34,
            "name": "Restaurante Extravagante",
            "cityID": 1
        },
        {
            "id": 35,
            "name": "Discoteca C\u00e1diz",
            "cityID": 1
        },
        {
            "id": 36,
            "name": "Galer\u00eda Nicaragua",
            "cityID": 1
        },
        {
            "id": 37,
            "name": "Discoteca Chile",
            "cityID": 1
        },
        {
            "id": 38,
            "name": "Discoteca Susodicho",
            "cityID": 2
        },
        {
            "id": 39,
            "name": "Restaurante Luna",
            "cityID": 2
        },
        {
            "id": 40,
            "name": "Bar Extravagante",
            "cityID": 2
        },
        {
            "id": 41,
            "name": "Bar Pepe",
            "cityID": 2
        },
        {
            "id": 42,
            "name": "Restaurante Barna",
            "cityID": 2
        },
        {
            "id": 43,
            "name": "Bar M\u00e9xico Lindo",
            "cityID": 2
        },
        {
            "id": 44,
            "name": "Club de noche Pirineos",
            "cityID": 2
        },
        {
            "id": 45,
            "name": "Bar de copas Reyes Magos",
            "cityID": 2
        },
        {
            "id": 46,
            "name": "Cines Andaluc\u00eda",
            "cityID": 2
        },
        {
            "id": 47,
            "name": "Restaurante Atl\u00e1ntico",
            "cityID": 2
        },
        {
            "id": 48,
            "name": "Cine La motosierra",
            "cityID": 2
        },
        {
            "id": 49,
            "name": "Bar Furibundo",
            "cityID": 2
        },
        {
            "id": 50,
            "name": "Discoteca NoPasar\u00e1n",
            "cityID": 2
        },
        {
            "id": 51,
            "name": "Discoteca Roma",
            "cityID": 2
        },
        {
            "id": 52,
            "name": "Bar \u00c1ngeles",
            "cityID": 2
        },
        {
            "id": 53,
            "name": "Bar Nunca",
            "cityID": 2
        },
        {
            "id": 54,
            "name": "Restaurante Vascongadas",
            "cityID": 2
        },
        {
            "id": 55,
            "name": "Galer\u00eda Raza",
            "cityID": 2
        },
        {
            "id": 56,
            "name": "Bar Amigo",
            "cityID": 2
        },
        {
            "id": 57,
            "name": "Restaurante Sierra Nevada",
            "cityID": 2
        },
        {
            "id": 58,
            "name": "Bistro Normandie",
            "cityID": 3
        },
        {
            "id": 59,
            "name": "Cave Lyon",
            "cityID": 3
        },
        {
            "id": 60,
            "name": "Th\u00e9atre Papi",
            "cityID": 3
        },
        {
            "id": 61,
            "name": "Discoteque Le Big Mac",
            "cityID": 3
        },
        {
            "id": 62,
            "name": "Restaurant Madrid",
            "cityID": 3
        },
        {
            "id": 63,
            "name": "Cave Gourmand",
            "cityID": 3
        },
        {
            "id": 64,
            "name": "Restaurant Asie",
            "cityID": 3
        },
        {
            "id": 65,
            "name": "Cave Profond",
            "cityID": 3
        },
        {
            "id": 66,
            "name": "Bar \u00e0 vins Le Nord",
            "cityID": 3
        },
        {
            "id": 67,
            "name": "Restaurant Notre Dame",
            "cityID": 3
        },
        {
            "id": 68,
            "name": "Bar \u00e0 vins S'il Vous Pla\u00eet",
            "cityID": 3
        },
        {
            "id": 69,
            "name": "Bistro Le Concept",
            "cityID": 3
        },
        {
            "id": 70,
            "name": "Bar \u00e0 vins Indochine",
            "cityID": 3
        },
        {
            "id": 71,
            "name": "Th\u00e9atre Le Sud",
            "cityID": 3
        },
        {
            "id": 72,
            "name": "Discoteque Londres",
            "cityID": 3
        },
        {
            "id": 73,
            "name": "Bistro March\u00e9",
            "cityID": 3
        },
        {
            "id": 74,
            "name": "Cave Plage",
            "cityID": 3
        },
        {
            "id": 75,
            "name": "Galerie Plafond",
            "cityID": 3
        },
        {
            "id": 76,
            "name": "Bistro Toulon",
            "cityID": 3
        },
        {
            "id": 77,
            "name": "Compagnie Gourmet",
            "cityID": 4
        },
        {
            "id": 78,
            "name": "Bistro Baudelaire",
            "cityID": 4
        },
        {
            "id": 79,
            "name": "Compagnie Lyon",
            "cityID": 4
        },
        {
            "id": 80,
            "name": "Restaurant Les Alpes",
            "cityID": 4
        },
        {
            "id": 81,
            "name": "Caf\u00e9 de Le Concept",
            "cityID": 4
        },
        {
            "id": 82,
            "name": "Restaurant La Grace",
            "cityID": 4
        },
        {
            "id": 83,
            "name": "Bistro S'il Vous Pla\u00eet",
            "cityID": 4
        },
        {
            "id": 84,
            "name": "Cave Le Chemin",
            "cityID": 4
        },
        {
            "id": 85,
            "name": "Bistro Le Sud",
            "cityID": 4
        },
        {
            "id": 86,
            "name": "Cave Arri\u00e8re Pays",
            "cityID": 4
        },
        {
            "id": 87,
            "name": "Bar \u00e0 vins La Vie",
            "cityID": 4
        },
        {
            "id": 88,
            "name": "Bar \u00e0 vins Papi",
            "cityID": 4
        },
        {
            "id": 89,
            "name": "Restaurant Le Big Mac",
            "cityID": 4
        },
        {
            "id": 90,
            "name": "Bar \u00e0 vins Normandie",
            "cityID": 4
        },
        {
            "id": 91,
            "name": "Th\u00e9atre Plafond",
            "cityID": 4
        },
        {
            "id": 92,
            "name": "Discoteque Asie",
            "cityID": 4
        },
        {
            "id": 93,
            "name": "Restaurant Notre Dame",
            "cityID": 4
        },
        {
            "id": 94,
            "name": "Bistro Londres",
            "cityID": 4
        },
        {
            "id": 95,
            "name": "Cave L'Oc\u00e9an",
            "cityID": 4
        },
        {
            "id": 96,
            "name": "Club Impressionant",
            "cityID": 4
        },
        {
            "id": 97,
            "name": "Caf\u00e9 de Toulouse",
            "cityID": 5
        },
        {
            "id": 98,
            "name": "Bistro L'Oc\u00e9an",
            "cityID": 5
        },
        {
            "id": 99,
            "name": "Cave Outre Mer",
            "cityID": 5
        },
        {
            "id": 100,
            "name": "Discoteque Madrid",
            "cityID": 5
        },
        {
            "id": 101,
            "name": "Discoteque Le Sud",
            "cityID": 5
        },
        {
            "id": 102,
            "name": "Restaurant La Mer",
            "cityID": 5
        },
        {
            "id": 103,
            "name": "Bar \u00e0 vins Impressionant",
            "cityID": 5
        },
        {
            "id": 104,
            "name": "Restaurant Le Chemin",
            "cityID": 5
        },
        {
            "id": 105,
            "name": "Restaurant Gourmand",
            "cityID": 5
        },
        {
            "id": 106,
            "name": "Cave La Vie",
            "cityID": 5
        },
        {
            "id": 107,
            "name": "Restaurant Outre Fois",
            "cityID": 5
        },
        {
            "id": 108,
            "name": "Bistro S'il Vous Pla\u00eet",
            "cityID": 5
        },
        {
            "id": 109,
            "name": "Restaurant Le Big Mac",
            "cityID": 5
        },
        {
            "id": 110,
            "name": "Bistro Le Concept",
            "cityID": 5
        },
        {
            "id": 111,
            "name": "Cave Papi",
            "cityID": 5
        },
        {
            "id": 112,
            "name": "Bistro Plafond",
            "cityID": 5
        },
        {
            "id": 113,
            "name": "Bistro March\u00e9",
            "cityID": 5
        },
        {
            "id": 114,
            "name": "Galerie Gourmet",
            "cityID": 5
        },
        {
            "id": 115,
            "name": "Bar \u00e0 vins Cath\u00e9drale",
            "cityID": 6
        },
        {
            "id": 116,
            "name": "Discoteque Le Nord",
            "cityID": 6
        },
        {
            "id": 117,
            "name": "Bar \u00e0 vins Afrique",
            "cityID": 6
        },
        {
            "id": 118,
            "name": "Th\u00e9atre Le Chemin",
            "cityID": 6
        },
        {
            "id": 119,
            "name": "Bar \u00e0 vins Asie",
            "cityID": 6
        },
        {
            "id": 120,
            "name": "Restaurant Les Alpes",
            "cityID": 6
        },
        {
            "id": 121,
            "name": "Restaurant Notre Dame",
            "cityID": 6
        },
        {
            "id": 122,
            "name": "Restaurant Le Sud",
            "cityID": 6
        },
        {
            "id": 123,
            "name": "Restaurant March\u00e9",
            "cityID": 6
        },
        {
            "id": 124,
            "name": "Bar \u00e0 vins Plafond",
            "cityID": 6
        },
        {
            "id": 125,
            "name": "Restaurant Le Big Mac",
            "cityID": 6
        },
        {
            "id": 126,
            "name": "Cave Toulon",
            "cityID": 6
        },
        {
            "id": 127,
            "name": "Cave Rez de Chauss\u00e9",
            "cityID": 6
        },
        {
            "id": 128,
            "name": "Bar \u00e0 vins Gourmand",
            "cityID": 6
        },
        {
            "id": 129,
            "name": "Bistro S'il Vous Pla\u00eet",
            "cityID": 6
        },
        {
            "id": 130,
            "name": "Caf\u00e9 de Redoutable",
            "cityID": 6
        },
        {
            "id": 131,
            "name": "Discoteque Londres",
            "cityID": 6
        },
        {
            "id": 132,
            "name": "Bar \u00e0 vins Arri\u00e8re Pays",
            "cityID": 6
        },
        {
            "id": 133,
            "name": "Bistro Baudelaire",
            "cityID": 6
        },
        {
            "id": 134,
            "name": "Fabulous Club",
            "cityID": 7
        },
        {
            "id": 135,
            "name": "Cream Place",
            "cityID": 7
        },
        {
            "id": 136,
            "name": "Rolling Caf\u00e9",
            "cityID": 7
        },
        {
            "id": 137,
            "name": "The Forest Pub",
            "cityID": 7
        },
        {
            "id": 138,
            "name": "Awesome Cinema",
            "cityID": 7
        },
        {
            "id": 139,
            "name": "Astounding Caf\u00e9",
            "cityID": 7
        },
        {
            "id": 140,
            "name": "Boomer Gallery",
            "cityID": 7
        },
        {
            "id": 141,
            "name": "Livid Pub",
            "cityID": 7
        },
        {
            "id": 142,
            "name": "Corduroi Hall",
            "cityID": 7
        },
        {
            "id": 143,
            "name": "Fraternity Gallery",
            "cityID": 7
        },
        {
            "id": 144,
            "name": "Haggis Pub",
            "cityID": 7
        },
        {
            "id": 145,
            "name": "Navy Caf\u00e9",
            "cityID": 7
        },
        {
            "id": 146,
            "name": "Fool Caf\u00e9",
            "cityID": 7
        },
        {
            "id": 147,
            "name": "Alladin Comedy Club",
            "cityID": 7
        },
        {
            "id": 148,
            "name": "Sabor House",
            "cityID": 7
        },
        {
            "id": 149,
            "name": "Blaise Theatre",
            "cityID": 7
        },
        {
            "id": 150,
            "name": "Scotland's Pub",
            "cityID": 7
        },
        {
            "id": 151,
            "name": "Troubles Gallery",
            "cityID": 7
        },
        {
            "id": 152,
            "name": "Fantastic Caf\u00e9",
            "cityID": 7
        },
        {
            "id": 153,
            "name": "Jamaica Caf\u00e9",
            "cityID": 8
        },
        {
            "id": 154,
            "name": "Solidarity Comedy Club",
            "cityID": 8
        },
        {
            "id": 155,
            "name": "Stone Gallery",
            "cityID": 8
        },
        {
            "id": 156,
            "name": "Vacuum Arena",
            "cityID": 8
        },
        {
            "id": 157,
            "name": "Boomer Club",
            "cityID": 8
        },
        {
            "id": 158,
            "name": "Never Mind Pub",
            "cityID": 8
        },
        {
            "id": 159,
            "name": "Cinderella Theatre",
            "cityID": 8
        },
        {
            "id": 160,
            "name": "Royal Nightclub",
            "cityID": 8
        },
        {
            "id": 161,
            "name": "The Forest Club",
            "cityID": 8
        },
        {
            "id": 162,
            "name": "Clapton Pub",
            "cityID": 8
        },
        {
            "id": 163,
            "name": "Peter & Molly Pub",
            "cityID": 8
        },
        {
            "id": 164,
            "name": "Astounding Pub",
            "cityID": 8
        },
        {
            "id": 165,
            "name": "Moscow Pub",
            "cityID": 8
        },
        {
            "id": 166,
            "name": "Poetry Gallery",
            "cityID": 8
        },
        {
            "id": 167,
            "name": "Scotland's Nightclub",
            "cityID": 8
        },
        {
            "id": 168,
            "name": "Rolling Cinema",
            "cityID": 8
        },
        {
            "id": 169,
            "name": "Kelly Pub",
            "cityID": 8
        },
        {
            "id": 170,
            "name": "Bourne Club",
            "cityID": 8
        },
        {
            "id": 171,
            "name": "Princess Theatre",
            "cityID": 8
        },
        {
            "id": 172,
            "name": "Babylon Club",
            "cityID": 8
        },
        {
            "id": 173,
            "name": "The Forest Place",
            "cityID": 9
        },
        {
            "id": 174,
            "name": "Babylon Hall",
            "cityID": 9
        },
        {
            "id": 175,
            "name": "Three Ws Pub",
            "cityID": 9
        },
        {
            "id": 176,
            "name": "Winston Place",
            "cityID": 9
        },
        {
            "id": 177,
            "name": "David Caf\u00e9",
            "cityID": 9
        },
        {
            "id": 178,
            "name": "William Arena",
            "cityID": 9
        },
        {
            "id": 179,
            "name": "Regio Place",
            "cityID": 9
        },
        {
            "id": 180,
            "name": "Fabulous Pub",
            "cityID": 9
        },
        {
            "id": 181,
            "name": "Surrogate Caf\u00e9",
            "cityID": 9
        },
        {
            "id": 182,
            "name": "Tomato Caf\u00e9",
            "cityID": 9
        },
        {
            "id": 183,
            "name": "Red Wall Hall",
            "cityID": 9
        },
        {
            "id": 184,
            "name": "Victorian Pub",
            "cityID": 9
        },
        {
            "id": 185,
            "name": "Perestroika Place",
            "cityID": 9
        },
        {
            "id": 186,
            "name": "Mountains Caf\u00e9",
            "cityID": 9
        },
        {
            "id": 187,
            "name": "Madrid Hall",
            "cityID": 9
        },
        {
            "id": 188,
            "name": "Livid House",
            "cityID": 9
        },
        {
            "id": 189,
            "name": "Blaise Centre",
            "cityID": 9
        },
        {
            "id": 190,
            "name": "Never Mind Hall",
            "cityID": 9
        },
        {
            "id": 191,
            "name": "Vacuum Comedy Club",
            "cityID": 9
        },
        {
            "id": 192,
            "name": "Stone Place",
            "cityID": 9
        },
        {
            "id": 193,
            "name": "Royal Pub",
            "cityID": 10
        },
        {
            "id": 194,
            "name": "Channel Comedy Club",
            "cityID": 10
        },
        {
            "id": 195,
            "name": "Moscow Centre",
            "cityID": 10
        },
        {
            "id": 196,
            "name": "King's Pub",
            "cityID": 10
        },
        {
            "id": 197,
            "name": "Boomer Hall",
            "cityID": 10
        },
        {
            "id": 198,
            "name": "Kelly Caf\u00e9",
            "cityID": 10
        },
        {
            "id": 199,
            "name": "Daniel Pub",
            "cityID": 10
        },
        {
            "id": 200,
            "name": "Livid Centre",
            "cityID": 10
        },
        {
            "id": 201,
            "name": "Astounding Caf\u00e9",
            "cityID": 10
        },
        {
            "id": 202,
            "name": "Corduroi Pub",
            "cityID": 10
        },
        {
            "id": 203,
            "name": "Fool Caf\u00e9",
            "cityID": 10
        },
        {
            "id": 204,
            "name": "Mountains Place",
            "cityID": 10
        },
        {
            "id": 205,
            "name": "Rolling Hall",
            "cityID": 10
        },
        {
            "id": 206,
            "name": "Lol Caf\u00e9",
            "cityID": 10
        },
        {
            "id": 207,
            "name": "Perestroika Pub",
            "cityID": 10
        },
        {
            "id": 208,
            "name": "Peter & Molly Pub",
            "cityID": 10
        },
        {
            "id": 209,
            "name": "Tomato House",
            "cityID": 10
        },
        {
            "id": 210,
            "name": "Never Mind Theatre",
            "cityID": 10
        },
        {
            "id": 211,
            "name": "Alladin Pub",
            "cityID": 10
        },
        {
            "id": 212,
            "name": "Bourne Theatre",
            "cityID": 10
        },
        {
            "id": 213,
            "name": "David Theatre",
            "cityID": 10
        },
        {
            "id": 214,
            "name": "The Lady Bug Pub",
            "cityID": 10
        },
        {
            "id": 215,
            "name": "Babylon Gallery",
            "cityID": 11
        },
        {
            "id": 216,
            "name": "Daniel Pub",
            "cityID": 11
        },
        {
            "id": 217,
            "name": "Princess Nightclub",
            "cityID": 11
        },
        {
            "id": 218,
            "name": "Bourne Theatre",
            "cityID": 11
        },
        {
            "id": 219,
            "name": "Cream Pub",
            "cityID": 11
        },
        {
            "id": 220,
            "name": "The Forest Gallery",
            "cityID": 11
        },
        {
            "id": 221,
            "name": "Blaise Pub",
            "cityID": 11
        },
        {
            "id": 222,
            "name": "Rocks Club",
            "cityID": 11
        },
        {
            "id": 223,
            "name": "Channel Nightclub",
            "cityID": 11
        },
        {
            "id": 224,
            "name": "Sabor Pub",
            "cityID": 11
        },
        {
            "id": 225,
            "name": "Mind the Gap Pub",
            "cityID": 11
        },
        {
            "id": 226,
            "name": "The Swan Caf\u00e9",
            "cityID": 11
        },
        {
            "id": 227,
            "name": "Winston Arena",
            "cityID": 11
        },
        {
            "id": 228,
            "name": "Regio Pub",
            "cityID": 11
        },
        {
            "id": 229,
            "name": "Succulent Arena",
            "cityID": 11
        },
        {
            "id": 230,
            "name": "Three Ws Comedy Club",
            "cityID": 11
        },
        {
            "id": 231,
            "name": "Surrogate Pub",
            "cityID": 11
        },
        {
            "id": 232,
            "name": "The Globe Caf\u00e9",
            "cityID": 11
        },
        {
            "id": 233,
            "name": "Imperio Pub",
            "cityID": 11
        },
        {
            "id": 234,
            "name": "The Daunted Pub",
            "cityID": 11
        },
        {
            "id": 235,
            "name": "Surrogate Comedy Club",
            "cityID": 12
        },
        {
            "id": 236,
            "name": "Clapton Cinema",
            "cityID": 12
        },
        {
            "id": 237,
            "name": "Peter & Molly Gallery",
            "cityID": 12
        },
        {
            "id": 238,
            "name": "Bourne Pub",
            "cityID": 12
        },
        {
            "id": 239,
            "name": "Princess Place",
            "cityID": 12
        },
        {
            "id": 240,
            "name": "Imperio Club",
            "cityID": 12
        },
        {
            "id": 241,
            "name": "Victorian Pub",
            "cityID": 12
        },
        {
            "id": 242,
            "name": "Awesome Pub",
            "cityID": 12
        },
        {
            "id": 243,
            "name": "Metropolitan Pub",
            "cityID": 12
        },
        {
            "id": 244,
            "name": "Cinderella Gallery",
            "cityID": 12
        },
        {
            "id": 245,
            "name": "Channel Hall",
            "cityID": 12
        },
        {
            "id": 246,
            "name": "Alladin Pub",
            "cityID": 12
        },
        {
            "id": 247,
            "name": "Fabulous Cinema",
            "cityID": 12
        },
        {
            "id": 248,
            "name": "Haggis Pub",
            "cityID": 12
        },
        {
            "id": 249,
            "name": "Boomer Pub",
            "cityID": 12
        },
        {
            "id": 250,
            "name": "The Daunted Comedy Club",
            "cityID": 12
        },
        {
            "id": 251,
            "name": "Rolling Arena",
            "cityID": 12
        },
        {
            "id": 252,
            "name": "Queen's Centre",
            "cityID": 12
        },
        {
            "id": 253,
            "name": "Scotland's Theatre",
            "cityID": 12
        },
        {
            "id": 254,
            "name": "Never Mind Hall",
            "cityID": 13
        },
        {
            "id": 255,
            "name": "Fabulous Hall",
            "cityID": 13
        },
        {
            "id": 256,
            "name": "Jamaica Place",
            "cityID": 13
        },
        {
            "id": 257,
            "name": "Clapton House",
            "cityID": 13
        },
        {
            "id": 258,
            "name": "The Swan Centre",
            "cityID": 13
        },
        {
            "id": 259,
            "name": "Haggis Pub",
            "cityID": 13
        },
        {
            "id": 260,
            "name": "Cream House",
            "cityID": 13
        },
        {
            "id": 261,
            "name": "Mind the Gap Pub",
            "cityID": 13
        },
        {
            "id": 262,
            "name": "Glasnost House",
            "cityID": 13
        },
        {
            "id": 263,
            "name": "Daniel Gallery",
            "cityID": 13
        },
        {
            "id": 264,
            "name": "Alladin Gallery",
            "cityID": 13
        },
        {
            "id": 265,
            "name": "The Globe Caf\u00e9",
            "cityID": 13
        },
        {
            "id": 266,
            "name": "Moscow Club",
            "cityID": 13
        },
        {
            "id": 267,
            "name": "Solidarity House",
            "cityID": 13
        },
        {
            "id": 268,
            "name": "Fantastic Club",
            "cityID": 13
        },
        {
            "id": 269,
            "name": "Cinderella Caf\u00e9",
            "cityID": 13
        },
        {
            "id": 270,
            "name": "Troubles Cinema",
            "cityID": 13
        },
        {
            "id": 271,
            "name": "Sheriff Arena",
            "cityID": 13
        },
        {
            "id": 272,
            "name": "Astounding Caf\u00e9",
            "cityID": 13
        },
        {
            "id": 273,
            "name": "David Centre",
            "cityID": 13
        },
        {
            "id": 274,
            "name": "The Forest Pub",
            "cityID": 13
        },
        {
            "id": 275,
            "name": "Madrid Caf\u00e9",
            "cityID": 13
        },
        {
            "id": 276,
            "name": "Stardust Comedy Club",
            "cityID": 14
        },
        {
            "id": 277,
            "name": "Fantastic Comedy Club",
            "cityID": 14
        },
        {
            "id": 278,
            "name": "Stone Caf\u00e9",
            "cityID": 14
        },
        {
            "id": 279,
            "name": "Mountains House",
            "cityID": 14
        },
        {
            "id": 280,
            "name": "Princess Arena",
            "cityID": 14
        },
        {
            "id": 281,
            "name": "Awesome House",
            "cityID": 14
        },
        {
            "id": 282,
            "name": "Moscow Pub",
            "cityID": 14
        },
        {
            "id": 283,
            "name": "Metropolitan Pub",
            "cityID": 14
        },
        {
            "id": 284,
            "name": "Haggis Club",
            "cityID": 14
        },
        {
            "id": 285,
            "name": "Green Cinema",
            "cityID": 14
        },
        {
            "id": 286,
            "name": "Perestroika Caf\u00e9",
            "cityID": 14
        },
        {
            "id": 287,
            "name": "The Swan Caf\u00e9",
            "cityID": 14
        },
        {
            "id": 288,
            "name": "Astounding Cinema",
            "cityID": 14
        },
        {
            "id": 289,
            "name": "Glasnost Pub",
            "cityID": 14
        },
        {
            "id": 290,
            "name": "Kelly Theatre",
            "cityID": 14
        },
        {
            "id": 291,
            "name": "Mind the Gap Pub",
            "cityID": 14
        },
        {
            "id": 292,
            "name": "The Daunted Gallery",
            "cityID": 14
        },
        {
            "id": 293,
            "name": "The Lady Bug Club",
            "cityID": 14
        },
        {
            "id": 294,
            "name": "Fabulous Place",
            "cityID": 15
        },
        {
            "id": 295,
            "name": "Moscow Pub",
            "cityID": 15
        },
        {
            "id": 296,
            "name": "Mountains Nightclub",
            "cityID": 15
        },
        {
            "id": 297,
            "name": "The Swan Pub",
            "cityID": 15
        },
        {
            "id": 298,
            "name": "Madrid Pub",
            "cityID": 15
        },
        {
            "id": 299,
            "name": "Clapton Club",
            "cityID": 15
        },
        {
            "id": 300,
            "name": "Livid Pub",
            "cityID": 15
        },
        {
            "id": 301,
            "name": "Royal Pub",
            "cityID": 15
        },
        {
            "id": 302,
            "name": "Stardust Comedy Club",
            "cityID": 15
        },
        {
            "id": 303,
            "name": "Sabor Arena",
            "cityID": 15
        },
        {
            "id": 304,
            "name": "William Pub",
            "cityID": 15
        },
        {
            "id": 305,
            "name": "The Daunted Caf\u00e9",
            "cityID": 15
        },
        {
            "id": 306,
            "name": "Imperio Pub",
            "cityID": 15
        },
        {
            "id": 307,
            "name": "Rocks Comedy Club",
            "cityID": 15
        },
        {
            "id": 308,
            "name": "Perestroika Caf\u00e9",
            "cityID": 15
        },
        {
            "id": 309,
            "name": "Mind the Gap Place",
            "cityID": 15
        },
        {
            "id": 310,
            "name": "Awesome Hall",
            "cityID": 15
        },
        {
            "id": 311,
            "name": "Daniel Pub",
            "cityID": 15
        },
        {
            "id": 312,
            "name": "Tomato Place",
            "cityID": 15
        },
        {
            "id": 313,
            "name": "Three Ws Pub",
            "cityID": 15
        },
        {
            "id": 314,
            "name": "Restaurang Hedarna",
            "cityID": 16
        },
        {
            "id": 315,
            "name": "Nattklubb Underlandet",
            "cityID": 16
        },
        {
            "id": 316,
            "name": "Galeri Amerikano",
            "cityID": 16
        },
        {
            "id": 317,
            "name": "Caf\u00e9 Svarta Draken",
            "cityID": 16
        },
        {
            "id": 318,
            "name": "Restaurang V\u00e5ren",
            "cityID": 16
        },
        {
            "id": 319,
            "name": "Konsthall Antagonist",
            "cityID": 16
        },
        {
            "id": 320,
            "name": "Galeri Freja",
            "cityID": 16
        },
        {
            "id": 321,
            "name": "Restaurang Ryssen",
            "cityID": 16
        },
        {
            "id": 322,
            "name": "Restaurang Boulognerskogen",
            "cityID": 16
        },
        {
            "id": 323,
            "name": "Restaurang Yggdrasil",
            "cityID": 16
        },
        {
            "id": 324,
            "name": "Pizzeria Milan",
            "cityID": 16
        },
        {
            "id": 325,
            "name": "Galeri Knastret",
            "cityID": 16
        },
        {
            "id": 326,
            "name": "Bar Valhalla",
            "cityID": 16
        },
        {
            "id": 327,
            "name": "Konsthall Sm\u00e5land",
            "cityID": 16
        },
        {
            "id": 328,
            "name": "Kiosk Filibuster",
            "cityID": 16
        },
        {
            "id": 329,
            "name": "Bar Norrland",
            "cityID": 16
        },
        {
            "id": 330,
            "name": "Konsthall Odin",
            "cityID": 16
        },
        {
            "id": 331,
            "name": "Restaurang F\u00f6rbrukat",
            "cityID": 16
        },
        {
            "id": 332,
            "name": "Restaurang Barabarerna",
            "cityID": 16
        },
        {
            "id": 333,
            "name": "Restaurang Sk\u00e5ne",
            "cityID": 16
        },
        {
            "id": 334,
            "name": "Restaurang Norrland",
            "cityID": 17
        },
        {
            "id": 335,
            "name": "Caf\u00e9 Lustig",
            "cityID": 17
        },
        {
            "id": 336,
            "name": "Caf\u00e9 Madrid",
            "cityID": 17
        },
        {
            "id": 337,
            "name": "Restaurang Freja",
            "cityID": 17
        },
        {
            "id": 338,
            "name": "Biograf Kisellerad",
            "cityID": 17
        },
        {
            "id": 339,
            "name": "Pizzeria Odin",
            "cityID": 17
        },
        {
            "id": 340,
            "name": "Teater Frysen",
            "cityID": 17
        },
        {
            "id": 341,
            "name": "Caf\u00e9 Barabarerna",
            "cityID": 17
        },
        {
            "id": 342,
            "name": "Restaurang V\u00e5ren",
            "cityID": 17
        },
        {
            "id": 343,
            "name": "Restaurang Sm\u00e5land",
            "cityID": 17
        },
        {
            "id": 344,
            "name": "Kiosk Calabria",
            "cityID": 17
        },
        {
            "id": 345,
            "name": "Caf\u00e9 F\u00f6rbrukat",
            "cityID": 17
        },
        {
            "id": 346,
            "name": "Biograf Sk\u00e4rg\u00e5rden",
            "cityID": 17
        },
        {
            "id": 347,
            "name": "Restaurang Machiavelli",
            "cityID": 17
        },
        {
            "id": 348,
            "name": "Kiosk Underlandet",
            "cityID": 17
        },
        {
            "id": 349,
            "name": "Restaurang \u00c4lgen",
            "cityID": 17
        },
        {
            "id": 350,
            "name": "Caf\u00e9 Kullen",
            "cityID": 17
        },
        {
            "id": 351,
            "name": "Restaurang Lurendrejeri",
            "cityID": 17
        },
        {
            "id": 352,
            "name": "Restaurang Sicilia",
            "cityID": 17
        },
        {
            "id": 353,
            "name": "Kiosk Filibuster",
            "cityID": 17
        },
        {
            "id": 354,
            "name": "Biograf Gefle",
            "cityID": 17
        },
        {
            "id": 355,
            "name": "Restaurang Milan",
            "cityID": 17
        },
        {
            "id": 356,
            "name": "Restaurang Milan",
            "cityID": 18
        },
        {
            "id": 357,
            "name": "Restaurang Norrland",
            "cityID": 18
        },
        {
            "id": 358,
            "name": "Konsthall Freja",
            "cityID": 18
        },
        {
            "id": 359,
            "name": "Caf\u00e9 Odin",
            "cityID": 18
        },
        {
            "id": 360,
            "name": "Kiosk Kisellerad",
            "cityID": 18
        },
        {
            "id": 361,
            "name": "Restaurang Barabarerna",
            "cityID": 18
        },
        {
            "id": 362,
            "name": "Bar Sk\u00e4rg\u00e5rden",
            "cityID": 18
        },
        {
            "id": 363,
            "name": "Nattklubb Lurendrejeri",
            "cityID": 18
        },
        {
            "id": 364,
            "name": "Restaurang Gamla Stan",
            "cityID": 18
        },
        {
            "id": 365,
            "name": "Galeri Calabria",
            "cityID": 18
        },
        {
            "id": 366,
            "name": "Nattklubb Frysen",
            "cityID": 18
        },
        {
            "id": 367,
            "name": "Caf\u00e9 Loki",
            "cityID": 18
        },
        {
            "id": 368,
            "name": "Biograf Machiavelli",
            "cityID": 18
        },
        {
            "id": 369,
            "name": "Caf\u00e9 V\u00e5ren",
            "cityID": 18
        },
        {
            "id": 370,
            "name": "Galeri Yggdrasil",
            "cityID": 18
        },
        {
            "id": 371,
            "name": "Bar Hedarna",
            "cityID": 18
        },
        {
            "id": 372,
            "name": "Restaurang Sm\u00e5land",
            "cityID": 18
        },
        {
            "id": 373,
            "name": "Caf\u00e9 Gefle",
            "cityID": 18
        },
        {
            "id": 374,
            "name": "Caf\u00e9 \u00c4lgen",
            "cityID": 18
        },
        {
            "id": 375,
            "name": "Biograf Lustig",
            "cityID": 18
        },
        {
            "id": 376,
            "name": "Restaurang Ryssen",
            "cityID": 18
        },
        {
            "id": 377,
            "name": "Caf\u00e9 Yggdrasil",
            "cityID": 19
        },
        {
            "id": 378,
            "name": "Nattklubb Odin",
            "cityID": 19
        },
        {
            "id": 379,
            "name": "Restaurang Valhalla",
            "cityID": 19
        },
        {
            "id": 380,
            "name": "Restaurang Gamla Stan",
            "cityID": 19
        },
        {
            "id": 381,
            "name": "Caf\u00e9 Barabarerna",
            "cityID": 19
        },
        {
            "id": 382,
            "name": "Galeri Sicilia",
            "cityID": 19
        },
        {
            "id": 383,
            "name": "Caf\u00e9 Madrid",
            "cityID": 19
        },
        {
            "id": 384,
            "name": "Teater Freja",
            "cityID": 19
        },
        {
            "id": 385,
            "name": "Bar Filibuster",
            "cityID": 19
        },
        {
            "id": 386,
            "name": "Bar Lurendrejeri",
            "cityID": 19
        },
        {
            "id": 387,
            "name": "Restaurang Sk\u00e5ne",
            "cityID": 19
        },
        {
            "id": 388,
            "name": "Kiosk Milan",
            "cityID": 19
        },
        {
            "id": 389,
            "name": "Galeri Boulognerskogen",
            "cityID": 19
        },
        {
            "id": 390,
            "name": "Teater Amerikano",
            "cityID": 19
        },
        {
            "id": 391,
            "name": "Restaurang Kisellerad",
            "cityID": 19
        },
        {
            "id": 392,
            "name": "Nattklubb Gefle",
            "cityID": 19
        },
        {
            "id": 393,
            "name": "Konsthall Ro",
            "cityID": 19
        },
        {
            "id": 394,
            "name": "Nattklubb Frysen",
            "cityID": 19
        },
        {
            "id": 395,
            "name": "Fonda Mare Nostrum",
            "cityID": 20
        },
        {
            "id": 396,
            "name": "Restaurante Amigo",
            "cityID": 20
        },
        {
            "id": 397,
            "name": "Cine M\u00e9xico Lindo",
            "cityID": 20
        },
        {
            "id": 398,
            "name": "Restaurante Atl\u00e1ntico",
            "cityID": 20
        },
        {
            "id": 399,
            "name": "Restaurante Sierra Nevada",
            "cityID": 20
        },
        {
            "id": 400,
            "name": "Restaurante Estrella",
            "cityID": 20
        },
        {
            "id": 401,
            "name": "Fonda Arriba",
            "cityID": 20
        },
        {
            "id": 402,
            "name": "Discoteca Ca\u00f1\u00ed",
            "cityID": 20
        },
        {
            "id": 403,
            "name": "Bar Chile",
            "cityID": 20
        },
        {
            "id": 404,
            "name": "Teatro Buenas",
            "cityID": 20
        },
        {
            "id": 405,
            "name": "Bar Cul\u00e9",
            "cityID": 20
        },
        {
            "id": 406,
            "name": "Bar Extravagante",
            "cityID": 20
        },
        {
            "id": 407,
            "name": "Bar Barna",
            "cityID": 20
        },
        {
            "id": 408,
            "name": "Club de noche Hasta la Vista",
            "cityID": 20
        },
        {
            "id": 409,
            "name": "Teatro Pepe",
            "cityID": 20
        },
        {
            "id": 410,
            "name": "Bar Los Andes",
            "cityID": 20
        },
        {
            "id": 411,
            "name": "Bar Luna",
            "cityID": 20
        },
        {
            "id": 412,
            "name": "Bar NoPasar\u00e1n",
            "cityID": 20
        },
        {
            "id": 413,
            "name": "Bar Libertad",
            "cityID": 20
        },
        {
            "id": 414,
            "name": "Cines Pirineos",
            "cityID": 20
        },
        {
            "id": 415,
            "name": "Restaurante La motosierra",
            "cityID": 20
        },
        {
            "id": 416,
            "name": "Discoteca Andaluc\u00eda",
            "cityID": 20
        },
        {
            "id": 417,
            "name": "Fonda Furibundo",
            "cityID": 21
        },
        {
            "id": 418,
            "name": "Bar Ninguno",
            "cityID": 21
        },
        {
            "id": 419,
            "name": "Restaurante Roma",
            "cityID": 21
        },
        {
            "id": 420,
            "name": "Restaurante Nemi",
            "cityID": 21
        },
        {
            "id": 421,
            "name": "Bar Reyes Magos",
            "cityID": 21
        },
        {
            "id": 422,
            "name": "Restaurante Hasta la Vista",
            "cityID": 21
        },
        {
            "id": 423,
            "name": "Cine Extravagante",
            "cityID": 21
        },
        {
            "id": 424,
            "name": "Bar Atl\u00e1ntico",
            "cityID": 21
        },
        {
            "id": 425,
            "name": "Club de noche Pac\u00edfico",
            "cityID": 21
        },
        {
            "id": 426,
            "name": "Restaurante Estrecho",
            "cityID": 21
        },
        {
            "id": 427,
            "name": "Teatro Sobremesa",
            "cityID": 21
        },
        {
            "id": 428,
            "name": "Bar Tacita de plata",
            "cityID": 21
        },
        {
            "id": 429,
            "name": "Cines Los Andes",
            "cityID": 21
        },
        {
            "id": 430,
            "name": "Club de noche Lords",
            "cityID": 21
        },
        {
            "id": 431,
            "name": "Galer\u00eda \u00c1ngeles",
            "cityID": 21
        },
        {
            "id": 432,
            "name": "Teatro Azteca",
            "cityID": 21
        },
        {
            "id": 433,
            "name": "Restaurante Ca\u00f1\u00ed",
            "cityID": 21
        },
        {
            "id": 434,
            "name": "Bar Mediterr\u00e1neo",
            "cityID": 21
        },
        {
            "id": 435,
            "name": "Restaurante Londres",
            "cityID": 21
        },
        {
            "id": 436,
            "name": "Bar Buenas",
            "cityID": 21
        },
        {
            "id": 437,
            "name": "Restaurante Lopetegui",
            "cityID": 21
        },
        {
            "id": 438,
            "name": "Fonda Roma",
            "cityID": 22
        },
        {
            "id": 439,
            "name": "Teatro Los Santos",
            "cityID": 22
        },
        {
            "id": 440,
            "name": "Bar Fuego",
            "cityID": 22
        },
        {
            "id": 441,
            "name": "Teatro Sierra Nevada",
            "cityID": 22
        },
        {
            "id": 442,
            "name": "Bar Susodicho",
            "cityID": 22
        },
        {
            "id": 443,
            "name": "Restaurante Lobos",
            "cityID": 22
        },
        {
            "id": 444,
            "name": "Restaurante Fiesta",
            "cityID": 22
        },
        {
            "id": 445,
            "name": "Club de noche Nicaragua",
            "cityID": 22
        },
        {
            "id": 446,
            "name": "Restaurante Chile",
            "cityID": 22
        },
        {
            "id": 447,
            "name": "Club de noche Hasta la Vista",
            "cityID": 22
        },
        {
            "id": 448,
            "name": "Bar de copas Libertad",
            "cityID": 22
        },
        {
            "id": 449,
            "name": "Restaurante Londres",
            "cityID": 22
        },
        {
            "id": 450,
            "name": "Fonda Nemi",
            "cityID": 22
        },
        {
            "id": 451,
            "name": "Bar La motosierra",
            "cityID": 22
        },
        {
            "id": 452,
            "name": "Restaurante Cul\u00e9",
            "cityID": 22
        },
        {
            "id": 453,
            "name": "Discoteca Estrecho",
            "cityID": 22
        },
        {
            "id": 454,
            "name": "Bar Ninguno",
            "cityID": 22
        },
        {
            "id": 455,
            "name": "Restaurante Nunca",
            "cityID": 22
        },
        {
            "id": 456,
            "name": "Restaurante Arriba",
            "cityID": 22
        },
        {
            "id": 457,
            "name": "Fonda Andaluc\u00eda",
            "cityID": 23
        },
        {
            "id": 458,
            "name": "Cines Reyes Magos",
            "cityID": 23
        },
        {
            "id": 459,
            "name": "Bar Londres",
            "cityID": 23
        },
        {
            "id": 460,
            "name": "Restaurante Vascongadas",
            "cityID": 23
        },
        {
            "id": 461,
            "name": "Fonda Libertad",
            "cityID": 23
        },
        {
            "id": 462,
            "name": "Cines Tacita de plata",
            "cityID": 23
        },
        {
            "id": 463,
            "name": "Restaurante Amigo",
            "cityID": 23
        },
        {
            "id": 464,
            "name": "Fonda Ca\u00f1\u00ed",
            "cityID": 23
        },
        {
            "id": 465,
            "name": "Galer\u00eda Cul\u00e9",
            "cityID": 23
        },
        {
            "id": 466,
            "name": "Bar Estrella",
            "cityID": 23
        },
        {
            "id": 467,
            "name": "Club de noche Fuego",
            "cityID": 23
        },
        {
            "id": 468,
            "name": "Restaurante Atl\u00e1ntico",
            "cityID": 23
        },
        {
            "id": 469,
            "name": "Restaurante Nicaragua",
            "cityID": 23
        },
        {
            "id": 470,
            "name": "Bar Chile",
            "cityID": 23
        },
        {
            "id": 471,
            "name": "Restaurante Central",
            "cityID": 23
        },
        {
            "id": 472,
            "name": "Restaurante Guacamole",
            "cityID": 23
        },
        {
            "id": 473,
            "name": "Bar Los Andes",
            "cityID": 23
        },
        {
            "id": 474,
            "name": "Bar Par\u00eds",
            "cityID": 23
        },
        {
            "id": 475,
            "name": "Bar Castizo",
            "cityID": 23
        },
        {
            "id": 476,
            "name": "Restaurante Sombrero",
            "cityID": 23
        },
        {
            "id": 477,
            "name": "Teatro Mediterr\u00e1neo",
            "cityID": 23
        },
        {
            "id": 478,
            "name": "Restaurante Lobos",
            "cityID": 23
        },
        {
            "id": 479,
            "name": "Restaurante Lobos",
            "cityID": 24
        },
        {
            "id": 480,
            "name": "Bar Estrella",
            "cityID": 24
        },
        {
            "id": 481,
            "name": "Restaurante Susodicho",
            "cityID": 24
        },
        {
            "id": 482,
            "name": "Cines Mariachis",
            "cityID": 24
        },
        {
            "id": 483,
            "name": "Club de noche C\u00e1diz",
            "cityID": 24
        },
        {
            "id": 484,
            "name": "Club de noche Las Am\u00e9ricas",
            "cityID": 24
        },
        {
            "id": 485,
            "name": "Bar Roma",
            "cityID": 24
        },
        {
            "id": 486,
            "name": "Bar de copas La motosierra",
            "cityID": 24
        },
        {
            "id": 487,
            "name": "Cines Nemi",
            "cityID": 24
        },
        {
            "id": 488,
            "name": "Cines Par\u00eds",
            "cityID": 24
        },
        {
            "id": 489,
            "name": "Galer\u00eda Nunca",
            "cityID": 24
        },
        {
            "id": 490,
            "name": "Bar Vascongadas",
            "cityID": 24
        },
        {
            "id": 491,
            "name": "Discoteca \u00c1ngeles",
            "cityID": 24
        },
        {
            "id": 492,
            "name": "Restaurante Sierra Nevada",
            "cityID": 24
        },
        {
            "id": 493,
            "name": "Restaurante Pirineos",
            "cityID": 24
        },
        {
            "id": 494,
            "name": "Restaurante M\u00e9xico Lindo",
            "cityID": 24
        },
        {
            "id": 495,
            "name": "Restaurante Binvenguts",
            "cityID": 24
        },
        {
            "id": 496,
            "name": "Bar Catalu\u00f1a",
            "cityID": 24
        },
        {
            "id": 497,
            "name": "Restaurante Los Santos",
            "cityID": 25
        },
        {
            "id": 498,
            "name": "Discoteca Extravagante",
            "cityID": 25
        },
        {
            "id": 499,
            "name": "Club de noche Veracruz",
            "cityID": 25
        },
        {
            "id": 500,
            "name": "Bar Los Andes",
            "cityID": 25
        },
        {
            "id": 501,
            "name": "Club de noche Raza",
            "cityID": 25
        },
        {
            "id": 502,
            "name": "Bar Central",
            "cityID": 25
        },
        {
            "id": 503,
            "name": "Teatro Para\u00edso",
            "cityID": 25
        },
        {
            "id": 504,
            "name": "Bar Andaluc\u00eda",
            "cityID": 25
        },
        {
            "id": 505,
            "name": "Bar de copas Las Am\u00e9ricas",
            "cityID": 25
        },
        {
            "id": 506,
            "name": "Bar de copas Sombrero",
            "cityID": 25
        },
        {
            "id": 507,
            "name": "Restaurante Castizo",
            "cityID": 25
        },
        {
            "id": 508,
            "name": "Restaurante Pac\u00edfico",
            "cityID": 25
        },
        {
            "id": 509,
            "name": "Bar de copas Catalu\u00f1a",
            "cityID": 25
        },
        {
            "id": 510,
            "name": "Bar de copas Granada",
            "cityID": 25
        },
        {
            "id": 511,
            "name": "Bar Hasta la Vista",
            "cityID": 25
        },
        {
            "id": 512,
            "name": "Bar Vascongadas",
            "cityID": 25
        },
        {
            "id": 513,
            "name": "Galer\u00eda Chile",
            "cityID": 25
        },
        {
            "id": 514,
            "name": "Bar Estrecho",
            "cityID": 25
        },
        {
            "id": 515,
            "name": "Bar Guacamole",
            "cityID": 25
        },
        {
            "id": 516,
            "name": "Bar Par\u00eds",
            "cityID": 25
        },
        {
            "id": 517,
            "name": "Bar de copas Binvenguts",
            "cityID": 25
        },
        {
            "id": 518,
            "name": "Club de noche Lopetegui",
            "cityID": 26
        },
        {
            "id": 519,
            "name": "Restaurante La motosierra",
            "cityID": 26
        },
        {
            "id": 520,
            "name": "Teatro Guacamole",
            "cityID": 26
        },
        {
            "id": 521,
            "name": "Bar Veracruz",
            "cityID": 26
        },
        {
            "id": 522,
            "name": "Fonda Roma",
            "cityID": 26
        },
        {
            "id": 523,
            "name": "Bar Atl\u00e1ntico",
            "cityID": 26
        },
        {
            "id": 524,
            "name": "Bar Ca\u00f1\u00ed",
            "cityID": 26
        },
        {
            "id": 525,
            "name": "Bar Mariachis",
            "cityID": 26
        },
        {
            "id": 526,
            "name": "Restaurante Los Gatos",
            "cityID": 26
        },
        {
            "id": 527,
            "name": "Restaurante Pac\u00edfico",
            "cityID": 26
        },
        {
            "id": 528,
            "name": "Teatro Vascongadas",
            "cityID": 26
        },
        {
            "id": 529,
            "name": "Galer\u00eda Extravagante",
            "cityID": 26
        },
        {
            "id": 530,
            "name": "Fonda Azteca",
            "cityID": 26
        },
        {
            "id": 531,
            "name": "Cines Cul\u00e9",
            "cityID": 26
        },
        {
            "id": 532,
            "name": "Cines Andaluc\u00eda",
            "cityID": 26
        },
        {
            "id": 533,
            "name": "Galer\u00eda Nicaragua",
            "cityID": 26
        },
        {
            "id": 534,
            "name": "Restaurante Lobos",
            "cityID": 26
        },
        {
            "id": 535,
            "name": "Restaurante Pepe",
            "cityID": 26
        },
        {
            "id": 536,
            "name": "Bar Fiesta",
            "cityID": 26
        },
        {
            "id": 537,
            "name": "Restaurante Antonia",
            "cityID": 26
        },
        {
            "id": 538,
            "name": "Restaurante Barna",
            "cityID": 27
        },
        {
            "id": 539,
            "name": "Cines Susodicho",
            "cityID": 27
        },
        {
            "id": 540,
            "name": "Cines Antonia",
            "cityID": 27
        },
        {
            "id": 541,
            "name": "Discoteca Mediterr\u00e1neo",
            "cityID": 27
        },
        {
            "id": 542,
            "name": "Restaurante Estrella",
            "cityID": 27
        },
        {
            "id": 543,
            "name": "Discoteca Vascongadas",
            "cityID": 27
        },
        {
            "id": 544,
            "name": "Bar Roma",
            "cityID": 27
        },
        {
            "id": 545,
            "name": "Bar Extravagante",
            "cityID": 27
        },
        {
            "id": 546,
            "name": "Bar Sobremesa",
            "cityID": 27
        },
        {
            "id": 547,
            "name": "Restaurante Furibundo",
            "cityID": 27
        },
        {
            "id": 548,
            "name": "Teatro Castizo",
            "cityID": 27
        },
        {
            "id": 549,
            "name": "Club de noche Fuego",
            "cityID": 27
        },
        {
            "id": 550,
            "name": "Cine Fiesta",
            "cityID": 27
        },
        {
            "id": 551,
            "name": "Discoteca Buenas",
            "cityID": 27
        },
        {
            "id": 552,
            "name": "Club de noche Andaluc\u00eda",
            "cityID": 27
        },
        {
            "id": 553,
            "name": "Club de noche Pac\u00edfico",
            "cityID": 27
        },
        {
            "id": 554,
            "name": "Restaurante Granada",
            "cityID": 27
        },
        {
            "id": 555,
            "name": "Restaurante Las Am\u00e9ricas",
            "cityID": 27
        },
        {
            "id": 556,
            "name": "Club de noche \u00c1ngeles",
            "cityID": 27
        },
        {
            "id": 557,
            "name": "Fonda Buenas",
            "cityID": 28
        },
        {
            "id": 558,
            "name": "Club de noche Antonia",
            "cityID": 28
        },
        {
            "id": 559,
            "name": "Restaurante Sierra Nevada",
            "cityID": 28
        },
        {
            "id": 560,
            "name": "Bar C\u00e1diz",
            "cityID": 28
        },
        {
            "id": 561,
            "name": "Bar de copas Mariachis",
            "cityID": 28
        },
        {
            "id": 562,
            "name": "Bar Las Am\u00e9ricas",
            "cityID": 28
        },
        {
            "id": 563,
            "name": "Bar de copas Estrella",
            "cityID": 28
        },
        {
            "id": 564,
            "name": "Cines Londres",
            "cityID": 28
        },
        {
            "id": 565,
            "name": "Bar Sobremesa",
            "cityID": 28
        },
        {
            "id": 566,
            "name": "Discoteca Para\u00edso",
            "cityID": 28
        },
        {
            "id": 567,
            "name": "Bar Pac\u00edfico",
            "cityID": 28
        },
        {
            "id": 568,
            "name": "Bar Lobos",
            "cityID": 28
        },
        {
            "id": 569,
            "name": "Discoteca Estrecho",
            "cityID": 28
        },
        {
            "id": 570,
            "name": "Restaurante Fuego",
            "cityID": 28
        },
        {
            "id": 571,
            "name": "Cine Par\u00eds",
            "cityID": 28
        },
        {
            "id": 572,
            "name": "Bar Pepe",
            "cityID": 28
        },
        {
            "id": 573,
            "name": "Teatro Los Santos",
            "cityID": 28
        },
        {
            "id": 574,
            "name": "Discoteca Reyes Magos",
            "cityID": 28
        },
        {
            "id": 575,
            "name": "Bar Extravagante",
            "cityID": 28
        },
        {
            "id": 576,
            "name": "Bar Pac\u00edfico",
            "cityID": 29
        },
        {
            "id": 577,
            "name": "Bar Par\u00eds",
            "cityID": 29
        },
        {
            "id": 578,
            "name": "Cine Los Gatos",
            "cityID": 29
        },
        {
            "id": 579,
            "name": "Galer\u00eda Fuego",
            "cityID": 29
        },
        {
            "id": 580,
            "name": "Fonda Lopetegui",
            "cityID": 29
        },
        {
            "id": 581,
            "name": "Bar Castizo",
            "cityID": 29
        },
        {
            "id": 582,
            "name": "Fonda Ninguno",
            "cityID": 29
        },
        {
            "id": 583,
            "name": "Cine Arriba",
            "cityID": 29
        },
        {
            "id": 584,
            "name": "Bar Azteca",
            "cityID": 29
        },
        {
            "id": 585,
            "name": "Fonda Ca\u00f1\u00ed",
            "cityID": 29
        },
        {
            "id": 586,
            "name": "Restaurante Para\u00edso",
            "cityID": 29
        },
        {
            "id": 587,
            "name": "Discoteca Hasta la Vista",
            "cityID": 29
        },
        {
            "id": 588,
            "name": "Restaurante Tacita de plata",
            "cityID": 29
        },
        {
            "id": 589,
            "name": "Bar Catalu\u00f1a",
            "cityID": 29
        },
        {
            "id": 590,
            "name": "Bar Furibundo",
            "cityID": 29
        },
        {
            "id": 591,
            "name": "Cines M\u00e9xico Lindo",
            "cityID": 29
        },
        {
            "id": 592,
            "name": "Fonda Libertad",
            "cityID": 29
        },
        {
            "id": 593,
            "name": "Bar Pepe",
            "cityID": 29
        },
        {
            "id": 594,
            "name": "Restaurante Los Andes",
            "cityID": 29
        },
        {
            "id": 595,
            "name": "Restaurante Furibundo",
            "cityID": 30
        },
        {
            "id": 596,
            "name": "Restaurante M\u00e9xico Lindo",
            "cityID": 30
        },
        {
            "id": 597,
            "name": "Bar Los Gatos",
            "cityID": 30
        },
        {
            "id": 598,
            "name": "Bar Arriba",
            "cityID": 30
        },
        {
            "id": 599,
            "name": "Restaurante Estrecho",
            "cityID": 30
        },
        {
            "id": 600,
            "name": "Bar de copas \u00c1ngeles",
            "cityID": 30
        },
        {
            "id": 601,
            "name": "Bar Barna",
            "cityID": 30
        },
        {
            "id": 602,
            "name": "Restaurante Fenomenal",
            "cityID": 30
        },
        {
            "id": 603,
            "name": "Cine Los Andes",
            "cityID": 30
        },
        {
            "id": 604,
            "name": "Cine Los Santos",
            "cityID": 30
        },
        {
            "id": 605,
            "name": "Galer\u00eda Central",
            "cityID": 30
        },
        {
            "id": 606,
            "name": "Bar Ca\u00f1\u00ed",
            "cityID": 30
        },
        {
            "id": 607,
            "name": "Fonda NoPasar\u00e1n",
            "cityID": 30
        },
        {
            "id": 608,
            "name": "Bar Estrella",
            "cityID": 30
        },
        {
            "id": 609,
            "name": "Restaurante Reyes Magos",
            "cityID": 30
        },
        {
            "id": 610,
            "name": "Club de noche Nunca",
            "cityID": 30
        },
        {
            "id": 611,
            "name": "Restaurante Raza",
            "cityID": 30
        },
        {
            "id": 612,
            "name": "Restaurante Pirineos",
            "cityID": 30
        },
        {
            "id": 613,
            "name": "Sabor Caf\u00e9",
            "cityID": 31
        },
        {
            "id": 614,
            "name": "Peter & Molly Theatre",
            "cityID": 31
        },
        {
            "id": 615,
            "name": "Queen's Caf\u00e9",
            "cityID": 31
        },
        {
            "id": 616,
            "name": "Imperio Gallery",
            "cityID": 31
        },
        {
            "id": 617,
            "name": "The Globe Hall",
            "cityID": 31
        },
        {
            "id": 618,
            "name": "Boomer Pub",
            "cityID": 31
        },
        {
            "id": 619,
            "name": "Fool Pub",
            "cityID": 31
        },
        {
            "id": 620,
            "name": "Livid Arena",
            "cityID": 31
        },
        {
            "id": 621,
            "name": "Regio Place",
            "cityID": 31
        },
        {
            "id": 622,
            "name": "Vacuum Theatre",
            "cityID": 31
        },
        {
            "id": 623,
            "name": "The Swan Theatre",
            "cityID": 31
        },
        {
            "id": 624,
            "name": "The Forest Pub",
            "cityID": 31
        },
        {
            "id": 625,
            "name": "Victorian Pub",
            "cityID": 31
        },
        {
            "id": 626,
            "name": "Metropolitan Pub",
            "cityID": 31
        },
        {
            "id": 627,
            "name": "Troubles Arena",
            "cityID": 31
        },
        {
            "id": 628,
            "name": "Succulent Caf\u00e9",
            "cityID": 31
        },
        {
            "id": 629,
            "name": "Red Wall Caf\u00e9",
            "cityID": 31
        },
        {
            "id": 630,
            "name": "Winston Cinema",
            "cityID": 31
        },
        {
            "id": 631,
            "name": "The Globe Pub",
            "cityID": 32
        },
        {
            "id": 632,
            "name": "Poetry Caf\u00e9",
            "cityID": 32
        },
        {
            "id": 633,
            "name": "Tomato Cinema",
            "cityID": 32
        },
        {
            "id": 634,
            "name": "The Swan Pub",
            "cityID": 32
        },
        {
            "id": 635,
            "name": "Princess Hall",
            "cityID": 32
        },
        {
            "id": 636,
            "name": "Moscow Pub",
            "cityID": 32
        },
        {
            "id": 637,
            "name": "David House",
            "cityID": 32
        },
        {
            "id": 638,
            "name": "Stone Pub",
            "cityID": 32
        },
        {
            "id": 639,
            "name": "Kelly Pub",
            "cityID": 32
        },
        {
            "id": 640,
            "name": "Fool Hall",
            "cityID": 32
        },
        {
            "id": 641,
            "name": "Victorian Arena",
            "cityID": 32
        },
        {
            "id": 642,
            "name": "Troubles Nightclub",
            "cityID": 32
        },
        {
            "id": 643,
            "name": "Royal Hall",
            "cityID": 32
        },
        {
            "id": 644,
            "name": "Corduroi Caf\u00e9",
            "cityID": 32
        },
        {
            "id": 645,
            "name": "King's Pub",
            "cityID": 32
        },
        {
            "id": 646,
            "name": "Peter & Molly Pub",
            "cityID": 32
        },
        {
            "id": 647,
            "name": "Haggis Cinema",
            "cityID": 32
        },
        {
            "id": 648,
            "name": "Scotland's Place",
            "cityID": 32
        },
        {
            "id": 649,
            "name": "Stardust Pub",
            "cityID": 32
        },
        {
            "id": 650,
            "name": "Blaise Nightclub",
            "cityID": 32
        },
        {
            "id": 651,
            "name": "Solidarity Pub",
            "cityID": 32
        }
    ]
}

`);
