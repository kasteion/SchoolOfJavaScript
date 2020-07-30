let matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]


// ES10: Array flat
console.log(matrix)
let arrayFlat = matrix.flat()
console.log(arrayFlat)
console.log(array)
console.log(array.flat())
console.log(array.flat(2))

// ES10: Array flatMap
let array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value*2]))

// ES10: TrimStart, TrimEnd
let hello1 = '          Hello'
let hello2 = 'Hello           '
let hello3 = '       Hello    '
console.log(`|${hello1}|`)
console.log(`|${hello2}|`)
console.log(`|${hello3}|`)
console.log(`|${hello1.trimStart()}|`)
console.log(`|${hello2.trimEnd()}|`)
console.log(`|${hello3.trim()}|`)

// ES10: Optional Catch Error
const CONSTANT_VALUE = 'Some constant value'
try {
    CONSTANT_VALUE = 'Change!'
} catch {
    console.log('YOU SHALL NOT CHANGE!.')
}

// ES10: Object.fromEntries, lo inverso a Object.entries
// Convierte una matriz clave valor en un objeto.
matrix = [['frontend', 'Mike'], ['backend', 'Rachele'], ['design', 'Randolph']]
console.log(Object.fromEntries(matrix))

// Acceder a las descripciones de un Symbol
let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)