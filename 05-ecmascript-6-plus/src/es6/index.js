//Default PARAMS
//Before ES6
function newFunction(name, country){
    var name = name || 'Harriet'
    var country = country || 'UK'
    console.log(name, country)
}
newFunction()
newFunction('Lavinia', 'UA')

//Default PARAMS
//ES6
function newFunction2(name = 'Harriet', country = 'UK') {
    console.log(name, country)
}
newFunction2()
newFunction2('Lavinia', 'UA')

//CONCATENACIÓN STRINGS
//Before ES6
var hello = 'Hello'
var world = 'World'
var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
'Nunc suscipit metus eget mattis sagittis.'
var helloWorld = hello + ' ' + world
console.log(helloWorld)
console.log(lorem)

//CONCATENACIÓN STRINGS
//ES6
let helloWorld2 = `${hello} ${world}`
console.log(helloWorld2)
let ipsum = `Proin tempus dui in mauris aliquam, vitae auctor ipsum euismod. 
Proin pharetra ligula id lorem tempor, in porta felis condimentum.`
console.log(ipsum)

//DESERIALIZATION
//Before ES6
const laurence = {
    name: 'Laurence',
    surname: 'Willatt'
}
console.log(laurence.name, laurence.surname)

//DESERIALIZATION
//ES6
const { name, surname } = laurence
console.log(name, surname)

//ESTO ES ES6 
let offense = ['Jackson', 'Watt', 'Hester']
let deffense = ['White', 'Smith', 'Page']
let team = [...deffense, ...offense]

{
    var globalvar = 'global var'
}

{
    let globallet = 'global let'
    console.log(globallet)
}

console.log(globalvar)
// FAIL - Aquí no existe globallet porque no let respeta su scope al bloque en
// que fue declarada.
//console.log(globallet)

// LAS CONSTANTES SON DE ES6
const a = 'b'

// Before ES6
// CREANDO UN OBJETO A PARTIR DE VARIABLES
let object1 = {
    name: name,
    surname: surname
}
console.log(object1)

// ES6
// CREANDO UN OBJETO A PARTIR DE VARIABLES
let object2 = { name, surname }
console.log(object2)

//ES6
//ARROW FUNCTIONS
const names = [
    { name, surname},
    { name: 'Larry', surname: 'Wilbot'}
]
//Esta es la arrow function (nombre) => nombre.name
let listOfNames = names.map((nombre) => nombre.name)
console.log(listOfNames)
//Esta es otra arrow function
const printName = ({ name }) => console.log(`${name}`)
printName(names[0])
printName(names[1])

//ES6
//Las promesas son de ES6
function helloPromise() {
    return new Promise((resolve, reject) => {
        if (false) {
            setTimeout(() => resolve('The Promise had been resolved'), 1000)
        } else 
        {
            setTimeout(() => reject('The Promise has been rejected'), 1000);
            
        }
    })
}

helloPromise().then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

//Before ES6
function Calculator(){
}

Calculator.prototype.sum = function(a, b){
    this.a = a
    this.b = b
    return a + b
}

var pres6calc = new Calculator()
var result = pres6calc.sum(50, 20)
console.log(`pres6calc.sum(50, 20) = ${result}`)

//ES6
//Esta forma de crear clases es de ES6
class Calculator2 {
    constructor() {
        this.a = 0
        this.b = 0
    }

    sum(a, b){
        this.a = a
        this.b = b
        return this.a + this.b
    }
}

let es6calc = new Calculator2()
let resultes6 = es6calc.sum(120, 423)
console.log(`es6calc.sum(120, 423) = ${resultes6}`)

// ES6
// MODULES SON DE ES6
import helloWorldModule from './module.js'
helloWorldModule()

//ES6
//FUNCIONES GENERADORAS
let id = 0
function* idGenerator(){
    while(true){
        id++
        yield id
    }
}

console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)
console.log(idGenerator().next().value)