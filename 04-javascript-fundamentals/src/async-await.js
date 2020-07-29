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

const onError = (id) => 
    console.log(`There was an error getting data for character ${id}`)

async function getCharacters() {
    var charactersIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,10]
    var promises = charactersIds.map((id) => getCharacter(id))
    try {
        var characters = await Promise.all(promises)
        characters.forEach((character) => console.log(`Helo, my name is ${character.name}`))
    } catch (id) {
        onError(id)
    }
}

getCharacters()