var scamp = {
    name: 'Scamp',
    surname: 'Miles',
    height: 1.71
}
  
var rachele = {
    name: 'Rachele',
    surname: 'Thorson',
    height: 1.56
}

function sayHello(helloPrase){
    return function( { name } ){
        console.log(`${helloPrase} my name is ${name}`)
    }
}

const sayWassup = sayHello('Wassup!')
const sayYo = sayHello('Yo!')

sayWassup(scamp)
sayWassup(rachele)
sayYo(scamp)
sayYo(rachele)