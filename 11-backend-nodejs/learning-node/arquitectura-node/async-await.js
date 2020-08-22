const promise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5){
                resolve('Hello World')
            } else {
                reject(new Error('Hello Error'))
            }
        }, 2000)
    })
}

async function miFuncionAsincrona() {
    try {
        let mensaje = await promise()
        mensaje = mensaje.toUpperCase()
        console.log(mensaje)
    } catch(error) {
        console.log(error)
    }
}

miFuncionAsincrona()