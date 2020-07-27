console.log('Listado de articulos:')
var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];
console.log(articulos)

console.log()
var articulosBaratos = articulos.filter(function(articulo){
    return articulo.costo < 1000
})
console.log('Articulos baratos:')
console.log(articulosBaratos)

console.log()
var articulosSoloNombres = articulos.map(function(articulo){
    return articulo.nombre
})
console.log('Listado de nombres de articulos:')
console.log(articulosSoloNombres)

console.log()
console.log('Buscando una Laptop:')
var Laptop = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop'
})
console.log(Laptop)

console.log()
console.log('For each de los articulos:')
articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
})

console.log()
console.log("Hay articulos de más de 1000?")
var articulosCaros = articulos.some(function(articulo){
    return articulo.costo > 1000
})
console.log(articulosCaros)

console.log()
console.log('Push()')
articulos.push({nombre: 'Auto', costo: 35000})
console.log(articulos)

console.log()
console.log('Pop()')
var auto = articulos.pop()
console.log(auto)
console.log(articulos)

console.log()
console.log('Unshift()')
articulos.unshift(auto)
console.log(articulos)

auto = undefined
console.log(auto)
console.log()
console.log('Shift()')
auto = articulos.shift()
console.log(auto)
console.log(articulos)