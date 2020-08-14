//let buffer = Buffer.alloc(4)
//let buffer = Buffer.from([1, 2, 3, 5])
let buffer = Buffer.from('Hola')

console.log(buffer)
console.log(buffer.toString())

// ---

let abc = Buffer.alloc(26)

console.log(abc)

for (let i = 0; i < abc.length; i++) {
    abc[i] = i + 97
}

console.log(abc)
console.log(abc.toString())