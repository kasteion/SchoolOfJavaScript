function hola(nombre, callback){
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        callback(nombre)
    }, 3000);
}

function hablar(callbackHablar){
    setTimeout(() => {
        console.log('Bla bla bla bla...')
        callbackHablar()
    }, 1000)
}

function adios(nombre, callbackAdios){
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        callbackAdios()
    }, 1000);
}

function conversacion(nombre, veces, callback){
    if (veces > 0){
        hablar(() => {
            conversacion(nombre, veces - 1, callback)
        })
    } else {
        callback(nombre)
    }
}

// hola('Fredy', (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () => {
//                     console.log('Proceso terminado...')
//                 })
//             })
//         })
//     })
// })

console.log('Iniciando proceso')
hola('Fredy', (nombre) => {
    conversacion(nombre, 20, (nombre) => {
        adios(nombre, () => {
            console.log('Proceso Terminado...')
        })
    })
})