const fetchDataPromises = require('./utils/fetchDataPromises.js')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

fetchDataPromises(`${URL}${CHARACTER_URI}`).then((characters) => {
    console.log('Number of character in Rick And Morty API:')
    console.log(`${characters.info.count} character`)
    return fetchDataPromises(`${URL}${CHARACTER_URI}1`)
}).then((character) => {
    console.log('Second character in Rick And Morty API:')
    console.log(character.name)
    return fetchDataPromises(character.origin.url)
}).then((origin) => {
    console.log('Origin of second character:')
    console.log(origin.dimension)
}).catch((error) => {
    console.log(error)
})