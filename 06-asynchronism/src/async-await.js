const fetchDataPromises = require('./utils/fetchDataPromises.js')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

const getCharacter = async () => {
    try {
        const character = await fetchDataPromises(`${URL}${CHARACTER_URI}1`)
        console.log(character)
    } catch(err) {
        console.log(err)
    }
}

getCharacter()