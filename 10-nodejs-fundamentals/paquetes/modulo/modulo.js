function saludar()  {
    console.log('Hola Mundo!!!')
}

// Solo exporto la función
//module.exports = saludar

module.exports = {
    saludar,
    prop1: 'Hola que tal.'
}