console.log('Hello, TypeScript')

// Boolean
let muted: boolean = true
muted = false

// Números
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// String
let nombre: string = 'Bruce Baner'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = []
people = ['Isabel', 'Nicole', 'Raul']

let peopleAndNumbers: Array<string|number> = []
peopleAndNumbers.push('Richard')
peopleAndNumbers.push(9000)

// Enum
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo'
}

let colorFavorito: Color = Color.Amarillo
console.log(`Mi color favorito es ${colorFavorito}`)

// Any
let comodin: any = 'Jocker'
comodin = { type: 'Wildcard' }
comodin = 1

// Object
let someObject: object = { type: 'Wildcard' }

function add(a: number, b: number): number {
    return a + b
}

const sum = add(4, 6)
console.log(sum)

// Este es un closure con typescript
function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a
    }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)
console.log(fourPlus6)

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`
}

const agente: string = fullName('Agente')
console.log(agente)

// El ? en color significa que el campo no es obligatorio
interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r: Rectangulo): number{
    return r.ancho * r.alto
}

const areaRect = area(rect)
console.log(areaRect)

rect.toString = function(){
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())