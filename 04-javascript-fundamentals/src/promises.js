const { resolve } = require('path')

var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const URL = 'https://swapi.dev/api/people/'

function getCharacter(id){
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
            if(this.readyState == 4){
                if (this.status == 200){
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

const onError = id => console.log(`There was a problem geting data from character ${id}`)

getCharacter(10).then((character) => {
    console.log(`Hello, my name is ${character.name}`)
}).catch(onError)