console.log('Algo')
console.info('Basicamente lo mismo')
console.warn('Advertencia')
console.error('Error')

let tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'R'
    }
]

console.table(tabla)

console.group('conversation')
console.log('Hola')
console.group('bla')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.log('Bla bla bla bla')
console.groupEnd('bla')
console.log('Adios')
console.groupEnd('conversation')

// Esto puede servir para funciones

function funcion1() {
    console.group('funcion1')
    console.log('Esto es de la función 1')
    funcion2()
    console.log('Esto también es de la función 1')
    console.groupEnd('funcion1')
}

function funcion2(){
    console.group('funcion2')
    console.log('Esto es de la funcion2')
    console.groupEnd('funcion2')
}

funcion1()

console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')
console.count('veces')