const { rejects } = require("assert")

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://swapi.dev/api/people/'

function getCharacter(id){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if (this.readyState == 4){
                if (this.status == 200) {
                    resolve(JSON.parse(this.responseText))
                } else if (this.status >= 400) {
                    reject(id)
                }
            }
        }
        xhr.open('GET', `${URL}${id}/`, true)
        xhr.send()
    })
}

const onError = (id) => console.log(`There was an error. Could not get data for character ${id}`)

getCharacter(1).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
    return getCharacter(2)
}).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
    return getCharacter(3)
}).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
    return getCharacter(4)
}).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
    return getCharacter(5)
}).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
}).catch(onError)