const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hello World\n')
})

server.listen(8000)
console.log('El servidor está escuchando en la url http://localhost:8000')