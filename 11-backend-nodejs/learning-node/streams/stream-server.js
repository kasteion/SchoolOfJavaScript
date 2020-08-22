const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
    const src = fs.createReadStream('./learning-node/streams/big')
    src.pipe(res)
})

server.listen(3000)
console.log('Server listening on http://localhost:3000')