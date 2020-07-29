var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://swapi.dev/api/people/1/' 

function getCharacter(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4){
            if (this.status == 200){
                callback(JSON.parse(this.responseText))
            }
        }
    }
    xhr.open('GET', 'https://swapi.dev/api/people/1/', true)
    xhr.send()
}

function printCharacter(character){
    console.log(`Hello, I am ${character.name}`)
}

getCharacter(URL, printCharacter)