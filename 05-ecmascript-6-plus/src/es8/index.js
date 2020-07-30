// ES8: LAS TRAILING COMMAS SON DE ES8
const team = {
    frontend: 'Mike',
    backend: 'Rachele',
    design: 'Harriet',
}
console.log(team)

// ES8: CONVIERTE EL OBJETO EN UNA MATRIZ (CLAVE VALOR)
const entries = Object.entries(team)
console.log(entries)
console.log(entries.length)

//ES8: CONVIERTE EL OBJETO A UN ARREGLO SOLO CON SUS VALORES (SIN CLAVES)
const values = Object.values(team)
console.log(values)
console.log(values.length)

//ES8: Funciones de Padding
const hello = 'Hello'
console.log(hello.padStart(7, 'Hi'))
console.log(hello.padEnd(12, '-'))

//ES8: ASYNC - AWAIT
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)? setTimeout(() => resolve('Hello World!'), 3000) : reject(new Error('Hello World!'))
    })
}

// Sin try y catch
const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

// Con try y catch 
const helloAsynctTryCatch = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch(error) {
        console.error(error)
    }
}

helloAsynctTryCatch()