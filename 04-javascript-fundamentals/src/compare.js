var x = 4, y = '4'
console.log(`x = ${x}`)
console.log(`y = '${y}'`)

var comparacion = (x == y)
console.log(`x == y? ${comparacion}`)
comparacion = (x===y)
console.log(`x === y? ${comparacion}`)

var mike = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

var mike2 = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

var mike3 = {
    ...mike
}

var mike4 = mike

console.log('mike = ', mike)
console.log('mike2 = ', mike2)
console.log('mike3 = ', mike3)
console.log('mike4 = ', mike4)

var comparacion = (mike == mike2)
console.log(`mike == mike2? ${comparacion}`)
var comparacion = (mike === mike2)
console.log(`mike === mike2? ${comparacion}`)
var comparacion = (mike == mike3)
console.log(`mike == mike3? ${comparacion}`)
var comparacion = (mike === mike3)
console.log(`mike === mike3? ${comparacion}`)
var comparacion = (mike == mike4)
console.log(`mike == mike4? ${comparacion}`)
var comparacion = (mike == mike4)
console.log(`mike == mike4? ${comparacion}`)
console.log('Son iguales porque ambas variables estan apuntando al mismo espacio en memoria.')
mike4.name = 'Miguel'
console.log(`mike4.name = 'Miguel'`)
console.log('mike4 = ', mike4)
console.log('mike = ', mike)