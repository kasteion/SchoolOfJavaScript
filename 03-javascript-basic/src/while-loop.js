var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`)
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift()
    saludarEstudiante(estudiante)
}