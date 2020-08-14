function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 3000);
    })
    
}

function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...')
            resolve(nombre)
        }, 1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            resolve()
        }, 1000);
    })
    
}

// ---
// console.log('Iniciando el proceso')
// hola('Fredy').then((nombre) => {
//     //console.log('Finalizando el proceso')
//     return hablar(nombre)
// }).then((nombre) => {
//     return hablar(nombre)
// }).then((nombre) => {
//     return hablar(nombre)
// }).then((nombre) => {
//     return adios(nombre)
// }).then(() => {
//     console.log('Finalizando el proceso')
// }).catch((error) => {
//     console.log('Ha ocurrido un error')
//     console.log(error)
// })

console.log('Iniciando el proceso')
hola('Fredy')
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then(() => {
    console.log('Finalizando el proceso')
})
.catch((error) => {
    console.log('Ha ocurrido un error')
    console.log(error)
})