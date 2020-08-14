const os = require('os')

console.log(os.arch()) // Arquitectura x64
console.log(os.platform()) // En que plataforma estoy corriendo, Win, Linux...
console.log(os.cpus().length) // Número de CPUS
console.log(os.cpus()) // Información de los CPUS
console.log(os.constants) // Todos los errores y señales del sistema
console.log(os.freemem()) // Memoria libre en bytes

const MB_SIZE = 1024*1024
const megabytes = (bytes) => {
    return bytes / MB_SIZE
}

console.log(`Free mem: ${megabytes(os.freemem()).toFixed(2)} MB`)

const GB_SIZE = 1024*1024*1024
const gigabytes = (bytes) => {
    return bytes / GB_SIZE
}

console.log(`Total mem: ${gigabytes(os.totalmem()).toFixed(2)} GB`)

console.log(os.homedir())
console.log(os.tmpdir())
console.log(os.hostname())

console.log(os.networkInterfaces())