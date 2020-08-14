const fs = require('fs')
const stream = require('stream')
const { Transform } = require('stream')
const util = require('util')

let data = ''

let readableStream = fs.createReadStream(`${__dirname}/input.txt`)
readableStream.setEncoding('utf-8')
readableStream.on('data', (chunk) => {
    //console.log(chunk)
    data += chunk
})

// readableStream.on('end', () => {
//     console.log(data)
// })

// // Buffer de salida
// process.stdout.write('Hola')
// process.stdout.write('que')
// process.stdout.write('tal')

const transform = Transform

function Mayus(){
    Transform.call(this)
}
util.inherits(Mayus, Transform)

Mayus.prototype._transform = function(chunk, codif, callback) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    callback()
}

let mayus = new Mayus()

readableStream
    .pipe(mayus)
    .pipe(process.stdout)