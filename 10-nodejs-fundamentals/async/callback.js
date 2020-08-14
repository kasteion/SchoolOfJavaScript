function hola(nombre, miCallback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        miCallback(nombre)
    }, 3000)
}

function adios(nombre, otroCallback){
    setTimeout(() => {
        console.log(`Adiós ${nombre}`)
        otroCallback()
    }, 3000)
}

console.log('Iniciando proceso...')
hola('Fredy', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso')
    })
})
//console.log('Finalizando proceso...')