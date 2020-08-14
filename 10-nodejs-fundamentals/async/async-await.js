function hola(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
        }, 3000);
    })
    
}

function hablar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla bla bla bla...')
            resolve()
        }, 1000)
    })
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`)
            //reject('Aaaaaarrrrrrggggghhhhh!')
            resolve()
        }, 1000);
    })
}

async function conversacion(nombre, veces){
    console.log('Inicio del proceso...')
    try {
        await hola(nombre)
        for (let i = 0; i < veces; i++){
            await hablar()
        }
        await adios(nombre)
    } catch (error) {
        console.log('Ha ocurrido un error')
        console.log(error)
    }
    
    console.log('Fin del proceso')
}

conversacion('Fredy', 10)
console.log('Esto cuando sucede?')