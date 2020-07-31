const fetchDataPromises = require('./utils/fetchDataPromises.js')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

fetchDataPromises(`${URL}${CHARACTER_URI}1`).then((character) => {
    console.log(character)
}).catch((error) => {
    console.log(error)
})