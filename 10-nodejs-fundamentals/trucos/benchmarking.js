let suma = 0;
console.time('todo')
console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
    suma += i
}
console.timeEnd('bucle')

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
           console.log('Termina el proceso asíncrono')
           resolve() 
        });
    })
}

console.time('bucle2')
for (let i = 0; i < 10000000; i++) {
    suma += i
}
console.timeEnd('bucle2')

console.time('asíncrono')
asincrona().then(
    console.timeEnd('asíncrono')
)

console.timeEnd('todo')