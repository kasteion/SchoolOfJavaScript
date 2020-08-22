const { Transform } = require('stream')

const transformStream = new Transform({
    transform(chunk, encoding, callback){
        let cuenta = 0
        let cadena = chunk.toString()
        let cadenaNueva = ''
        for (let i = 0; i < cadena.length; i++){
            if (cadena[i] === ' '){
                cuenta = 0
                cadenaNueva += ''
            } else {
                if (cuenta === 0){
                    cadenaNueva += cadena[i].toUpperCase()
                } else {
                    cadenaNueva += cadena[i]
                }
                cuenta++
            }
        }
        cadena = cadenaNueva
        this.push(cadena)
        callback()
    }
})

process.stdin.pipe(transformStream).pipe(process.stdout)