var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://swapi.dev/api/people/'

function getCharacter(id, callback){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (this.readyState == 4){
            if (this.status == 200){
                callback(JSON.parse(this.responseText))
            }
        }
    }
    xhr.open('GET', `${URL}${id}/`, true)
    xhr.send()
}

function printCharacter(character){
    console.log(`Hello, my name is ${character.name}`)
}

// Aunque llame las funciones en orden no hay garantía de que las respuestas se
// resuelvan en orden.

getCharacter(1, printCharacter)
getCharacter(2, printCharacter)
getCharacter(3, printCharacter)
getCharacter(4, printCharacter)
getCharacter(5, printCharacter)