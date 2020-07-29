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

function sayHello(helloPhrase = 'Hello'){
    console.log(`${helloPhrase}, my name is ${this.name}`)
}

sayHello()

sayHello.call(rachele, 'Hey')
sayHello.apply(scamp, ['Yo!'])

const sayHelloRachele = sayHello.bind(rachele, 'Wassup!')
const sayHelloScamp = sayHello.bind(scamp)

sayHelloRachele()
sayHelloScamp()