const fs = require('fs')

fs.copyFile('learning-node/utils/naranja.txt', 'limon.txt', (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Ok. Naranja.txt fue copiado como limon.txt')
})