const util = require('util')

const helloPluto = util.deprecate( () => {
    console.log('Pluto: I am a planet.')
}, 'pluto is deprecated. It is not a planet anymore')

helloPluto()