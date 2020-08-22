// %s -- String
// %d -- Números
// %j -- json

// La consola se alimenta del paquete utils.format

console.log('Un %s y un %s', 'perrito', 'gatito')

console.info('Un %s y un %s', 'perrito', 'gatito')

console.warn('Un %s y un %s', 'perrito', 'gatito')

console.assert(42 == "42") // No imprime nada porque nada falla
console.assert(42 === "42")

console.trace('hello')

const util = require('util')
const debuglog = util.debuglog('foo') //NODE_DEBUG=foo node console-utils.js

debuglog('Hello from foo')