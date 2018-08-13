const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
const dest = document.getElementById("main")

//number 1


let number1 = document.getElementById("number1")
let result1 = document.createTextNode(JSON.stringify(gotCitiesCSV))
number1.appendChild(result1)

//number 2

let number2 = document.getElementById("number2")
let result2 = document.createTextNode(JSON.stringify(bestThing.split(" ")))
number2.appendChild(result2)

//number 3
let number3 = document.getElementById("number3")
let result3 = document.createTextNode(JSON.stringify(gotCitiesCSV.replace(/,/g, " ; ")))
number3.appendChild(result3)

//number 4
let number4 = document.getElementById("number4")
let result4 = document.createTextNode(JSON.stringify(lotrCitiesArray.join(",")))
number4.appendChild(result4)

//number 5
let number5 = document.getElementById("number5")
let result5 = document.createTextNode(JSON.stringify(lotrCitiesArray.slice(0, 5)))
number5.appendChild(result5)

//number 6
let number6 = document.getElementById("number6")
let result6 = document.createTextNode(JSON.stringify(lotrCitiesArray.slice(3, 8)))
number6.appendChild(result6)

//number7
let number7 = document.getElementById("number7")
let result7 = document.createTextNode(JSON.stringify(lotrCitiesArray.slice(2, 5)))
number7.appendChild(result7)

//number8
{
    const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    lotrCitiesArray.splice(2, 1)
    let number8 = document.getElementById("number8")
    let result8 = document.createTextNode(JSON.stringify(lotrCitiesArray))
    number8.appendChild(result8)
}
//number 9
{
    const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
    lotrCitiesArray.splice(6)
    let number9 = document.getElementById("number9")
    let result9 = document.createTextNode(JSON.stringify(lotrCitiesArray))
    number9.appendChild(result9)
}

//number 10
{



}