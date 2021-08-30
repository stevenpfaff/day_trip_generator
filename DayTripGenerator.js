const destination = ['Florida', 'Texas', 'Montana', 'Arizona']

const resturant = ['Texas Road House', 'Buffalo Wild Wings', 'Culvers', 'Jimmy Johns'];

const transportation = ['Amtrak', 'Airplane', 'Car', 'RV'];

const entertainment = ['Beach', 'Hiking', 'Museum', 'Baseball Game'];

function getRandomNumber(max){
   return Math.floor(Math.random() * max)
}

function getRandomEntertainment() {
    let lenEntertain = entertainment.length
    let randomNumber = getRandomNumber(lenEntertain)
    return entertainment[randomNumber]
}

function getRandomTransportation() {
    let lenTransportation = transportation.length
    let randomNumber = getRandomNumber(lenTransportation)
    return transportation[randomNumber]
}

function getRandomLocation() {
    let lenLocation = destination.length
    let randomNumber = getRandomNumber(lenLocation)
    return destination[randomNumber]
}

function getRandomResturaunt() {
    let lenResturaunt = resturant.length
    let randomNumber = getRandomNumber(lenResturaunt)
    return resturant[randomNumber]
}

let randomEntertainment = getRandomEntertainment()
let randomTransportation = getRandomTransportation()
let randomLocation = getRandomLocation()
let randomResturant = getRandomResturaunt()

function getOutputText() {
    let displayText = "This is your random vacation" + " "; randomEntertainment + " "; randomTransportation + " "; randomResturant + " "; randomLocation + " "
    let questionText = "Is there anything you need to change?"
    let outputText = displayText + randomEntertainment + " " + randomTransportation + " " + randomResturant + " " + randomLocation + " " + questionText
    return outputText
}

let outputText = getOutputText()
while(true) {
    let userInput = prompt(outputText)
    if(userInput === "no" || userInput === "") {
        break 
    }else if(userInput === "entertainment") {
    randomEntertainment = getRandomEntertainment()
    outputText = getOutputText(randomEntertainment, randomTransportation, randomResturant, randomLocation)
    }else if(userInput === "transportation"){
    randomTransportation = getRandomTransportation()
    outputText = getOutputText(randomEntertainment, randomTransportation, randomResturant, randomLocation)
    }else if(userInput === "destination"){
    randomLocation = getRandomLocation()
    outputText = getOutputText(randomEntertainment, randomTransportation, randomResturant, randomLocation)
    }else if(userInput === "resturant"){
    randomResturant = getRandomResturaunt()
    outputText = getOutputText(randomEntertainment, randomTransportation, randomResturant, randomLocation)
    }else 
    alert("Please enter \"entertainment\", \"transportation\", \"destination\", \"resturant\", \"no\", or an empty string")
}
console.log(randomEntertainment, randomLocation, randomResturant, randomTransportation)
console.log("Random Trip Completely Generated!")
