const fetchDataPromises = require('./utils/fetchDataPromises.js')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

const doChallenge = async () => {
    try {
        const characters = await fetchDataPromises(`${URL}${CHARACTER_URI}`)
        const character = await fetchDataPromises(`${URL}${CHARACTER_URI}1`)
        const origin = await fetchDataPromises(character.origin.url)
        console.log('Number of characaters in Rick And Morty API:')
        console.log(`${characters.info.count} characters.`)
        console.log('First Character of Rick And Morty API')
        console.log(character.name)
        console.log('Origin dimension of first character')
        console.log(origin.dimension)
    } catch (err) {
        console.log(err)
    }
}

doChallenge()