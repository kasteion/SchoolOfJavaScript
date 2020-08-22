const fs = require('fs')

fs.mkdir('platzi/escuela-js/node', { recursive: true }, (err) => {
    if (err) {
        console.log(err)
    }
})