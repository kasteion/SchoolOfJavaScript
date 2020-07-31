const fetchDataCallback = require('./utils/fetchDataCallback.js')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

function printCharacter(error, character){
    if (error){
        console.log(error)
    } else {
        console.log(character)
    }
}

fetchDataCallback(`${URL}${CHARACTER_URI}/1`, printCharacter)