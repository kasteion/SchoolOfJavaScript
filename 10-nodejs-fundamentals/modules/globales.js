console.log(global) // Nunca hagas esto en producción

let i = 0
const intervalo = setInterval(() => { 
    i++
    console.log('Hola')
    if (i === 10) {
        clearInterval(intervalo)
    }
}, 1000)

setImmediate(() => {
    console.log('Ejecutaré esto tan pronto pueda')
})

console.log(__dirname)  // El directorio en el que estoy ejecutando
console.log(__filename) // El archivo que estoy ejecutando

// No es recomendable crear variables globales, es preferible crear archivos de 
// configuración e importarlos.
global.mivariable = 'mi valor global' // Creación de una variable global
console.log(mivariable)