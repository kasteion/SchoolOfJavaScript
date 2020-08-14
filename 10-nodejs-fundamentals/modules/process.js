//const process = requre('process')

process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    console.log('El proceso terminó.')
    setTimeout(() => {
        console.log('Esto no se va a ejecutar nunca')
        // En el exist ya se desconectó uno del event loop pro eso esto no hace
        // nada
    }, 0);
})

process.on('uncaughtException', (err, origen) => {
    console.log('Vaya se nos ha olvidado capturar un error')
    setTimeout(() => {
        console.log('Esto viene desde las excepciones')
    }, 0);
    //console.error(err)
})

funcionquenoexiste()
//console.log('Esto si el erro no se recoje no sale.')


// Esto es para cuando las promesas se rechazan.
process.on('uncaughtRejection', () => {}) 
