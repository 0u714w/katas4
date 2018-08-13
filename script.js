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


lotrCitiesArray.splice(2, 1)
let number8 = document.getElementById("number8")
let result8 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number8.appendChild(result8)

//number 9


lotrCitiesArray.splice(5)
let number9 = document.getElementById("number9")
let result9 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number9.appendChild(result9)


//number 10

lotrCitiesArray.splice(2, 0, 'Rohan')
let number10 = document.getElementById("number10")
let result10 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number10.appendChild(result10)


//number 11

lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
let number11 = document.getElementById("number11")
let result11 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number11.appendChild(result11)

//number 12

let number12 = document.getElementById("number12")
let result12 = document.createTextNode(JSON.stringify(bestThing.slice(0, 14)))
number12.appendChild(result12)

//number13

let number13 = document.getElementById("number13")
let result13 = document.createTextNode(JSON.stringify(bestThing.slice(-12)))
number13.appendChild(result13)

//number 14

let number14 = document.getElementById("number14")
let result14 = document.createTextNode(JSON.stringify(bestThing.slice(23, 38)))
number14.appendChild(result14)

//number 15

let number15 = document.getElementById("number15")
let result15 = document.createTextNode(JSON.stringify(bestThing.substring(0, 14)))
number15.appendChild(result15)

//number 16

let number16 = document.getElementById("number16")
let result16 = document.createTextNode(JSON.stringify(bestThing.substr(23, 15)))
number16.appendChild(result16)