function otraFuncion(){
    return serompe()
}

function serompe() {
    return 3 + z
}

function serompeAsync(){
    setTimeout(() => {
        try {
            return 3 + z
        } catch(err) {
            console.error('Error en mi función asíncrona')
        }
    }, 1000);
}

try {
    otraFuncion()
    //serompeAsync()
}
catch (err) {
    console.log('Vaya ha ocurrido un error...')
    console.error(err.message)
    console.log('Pero no pasa nada... lo hemos capturado')
}

console.log('Esto de aqui está al final')