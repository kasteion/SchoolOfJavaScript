const fetcDataCallback = require('./utils/fetchDataCallback')
const fetchDataCallback = require('./utils/fetchDataCallback')

const URL = 'https://rickandmortyapi.com/api/'
const CHARACTER_URI = 'character/'

const printCharacter = (error, character) => {
    if (error) {
        console.log(error)
    } else {
        console.log(character)
    }
}

fetchDataCallback(`${URL}${CHARACTER_URI}`, (error, characters) => {
    if (error){
        console.log(error)
    }
    else {
        console.log('Number of characters in Rick And Morty API')
        console.log(`${characters.info.count} characters`)
        fetchDataCallback(`${URL}${CHARACTER_URI}1`, (error, character) => {
            if(error) {
                console.log(error)
            } else {
                console.log('First Character of Rick And Morty API:')    
                console.log(character.name)
                fetcDataCallback(character.origin.url, (error, origin) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('Origin dimension of first character.')
                        console.log(origin.dimension)
                    }
                })
            }
    })
    }
})