const fs = require('fs')

function leer(ruta, callback){
    fs.readFile(ruta, (err, data) => {
        // Leído
        callback(data.toString())
    })
}

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log('No he podido escribirlo', err)
        }
        else {
            console.log('Se ha escrito correctamente')
        }
    })
}

function borrar(ruta, callback){
    fs.unlink(ruta, (err) => {
        if (err) {
            callback('No se pudo borrar el archivo')
        } else {
            callback('Archivo borrado correctamente')
        }
    })
}

leer(`${__dirname}/archivo.txt`, console.log)
//escribir(`${__dirname}/archivo1.txt`, 'Soy un archivo nuevo', console.log)
//borrar(`${__dirname}/archivo1.txt`, console.log)