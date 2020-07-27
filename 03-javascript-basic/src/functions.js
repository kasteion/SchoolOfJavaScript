var saludarExpresion = function(nombre){
    console.log('Función expresiva:')
    console.log(`Hola ${nombre}`)
}

saludarDeclarative('Kasteion')
saludarExpresion('Kasteion')

function saludarDeclarative(nombre){
    console.log('Función declarativa:')
    console.log('Aquí sucede el hoisting...')
    console.log(`Hola ${nombre}`)
}