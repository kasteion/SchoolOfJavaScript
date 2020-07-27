var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

console.log('Resultado del for:')
function saludarEstudiantes(estudiante) {        
    console.log(`Hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

console.log()
console.log('Resultado del for of:')

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}