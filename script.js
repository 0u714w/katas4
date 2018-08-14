const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"


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

//number 17

let number17 = document.getElementById("number17")
let result17 = document.createTextNode(JSON.stringify(bestThing.indexOf("only")))
number17.appendChild(result17)

//number 18

let number18 = document.getElementById("number18")
let result18 = document.createTextNode(JSON.stringify(bestThing.lastIndexOf("bit")))
number18.appendChild(result18)

//number 19

const splitGot = gotCitiesCSV.split(",")

for (let i = 0; i < splitGot.length; i++) {
    if (splitGot[i].includes("aa") || splitGot[i].includes("ee") || splitGot[i].includes("ii") || splitGot[i].includes("oo") || splitGot[i].includes("uu")) {


        let number19 = document.getElementById("number19")
        let result19 = document.createTextNode(JSON.stringify(splitGot[i] + ", "))
        number19.appendChild(result19)
    }
}

//number 20





for (let i = 0; i < lotrCitiesArray.length; i++) {


    if (lotrCitiesArray[i].endsWith("or")) {

        let number20 = document.getElementById("number20")
        let result20 = document.createTextNode(JSON.stringify(lotrCitiesArray[i] + " "))
        number20.appendChild(result20)
    }
}





//number 21

const bestThing1 = bestThing.split(" ")

for (let i = 0; i < bestThing1.length; i++) {
    if (bestThing1[i].substring(0, 1) === "b") {
        let number21 = document.getElementById("number21")
        let result21 = document.createTextNode(JSON.stringify(bestThing1[i]))
        number21.appendChild(result21)
    }

}

//number 22
if (lotrCitiesArray.includes("Mirkwood") == true) {
    let number22 = document.getElementById("number22")
    let result22 = document.createTextNode(JSON.stringify("Yes"))
    number22.appendChild(result22)
}

//number 23

if (lotrCitiesArray.includes("Hollywood") == false) {

    let number23 = document.getElementById("number23")
    let result23 = document.createTextNode(JSON.stringify("No"))
    number23.appendChild(result23)
}

//number 24

let number24 = document.getElementById("number24")
let result24 = document.createTextNode(JSON.stringify(lotrCitiesArray.indexOf("Mirkwood")))
number24.appendChild(result24)

//number 25

for (let i = 0; i < lotrCitiesArray.length; i++) {

    if (lotrCitiesArray[i].includes(" ")) {
        let number25 = document.getElementById("number25")
        let result25 = document.createTextNode(JSON.stringify(lotrCitiesArray[i]))
        number25.appendChild(result25)
    }
}

//number 26

let number26 = document.getElementById("number26")
let result26 = document.createTextNode(JSON.stringify(lotrCitiesArray.reverse()))
number26.appendChild(result26)

//number 27
let number27 = document.getElementById("number27")
let result27 = document.createTextNode(JSON.stringify(lotrCitiesArray.sort()))
number27.appendChild(result27)

//number 28

let number28 = document.getElementById("number28")
let result28 = document.createTextNode(JSON.stringify(lotrCitiesArray.sort(function(a, b) {
    return a.length - b.length
})))
number28.appendChild(result28)

//number 29

let number29 = document.getElementById("number29")
let result29 = document.createTextNode(JSON.stringify(lotrCitiesArray.pop()))
number29.appendChild(result29)

//number 30

lotrCitiesArray.push("Rohan")
let number30 = document.getElementById("number30")
let result30 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number30.appendChild(result30)

//number 31

console.log(lotrCitiesArray.shift())
let number31 = document.getElementById("number31")
let result31 = document.createTextNode(JSON.stringify(lotrCitiesArray.shift()))
number31.appendChild(result31)

//number 32

lotrCitiesArray.unshift("Gondor")
let number32 = document.getElementById("number32")
let result32 = document.createTextNode(JSON.stringify(lotrCitiesArray))
number32.appendChild(result32)