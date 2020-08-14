const http = require('http')

// http.createServer((request, response) => {
//     console.log('Nueva petición!')
//     console.log(request.url)

//     response.writeHead(201, { 'Content-Type': 'text/plain' })
//     response.write(`Hola, ya se usar HTTP de NodeJS`)

//     response.end()
// }).listen(3000)


http.createServer(router).listen(3000)

function router(request, response) {
    console.log('¡Nueva petición!')
    console.log(request.url)

    switch(request.url){
        case '/hola':
            response.write('<h1>Hola, que tal</h1>')
            response.end()
            break;
        default:
            response.write('<h1>Error 404: No se lo que quieres</h1>')
            response.end()
    }
}

console.log('Escuchando http en el puerto 3000')