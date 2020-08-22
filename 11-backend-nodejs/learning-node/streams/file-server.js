const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
    fs.readFile('./learning-node/streams/big', (err, data) => {
        if (err) {
            console.log('error', err)
        }
        res.end(data)
    })
})

server.listen(3000)
console.log('Server listening on port 3000')