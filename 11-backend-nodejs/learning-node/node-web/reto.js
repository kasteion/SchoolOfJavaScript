const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === "/reto"){
        let body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        .on('end', () => {
            res.writeHead(200, {'Constent-Type': 'text/plain'})
            try {
                body = Buffer.concat(body).toString()
                let fecha = new Date(JSON.parse(body).date)
                let day = ''
                switch(fecha.getDay()){
                    case 0:
                        day = 'Sunday'
                        break
                    case 1:
                        day = 'Monday'
                        break
                    case 2:
                        day = 'Tuesday'
                        break
                    case 3:
                        day = 'Wensday'
                        break
                    case 4:
                        day = 'Thursday'
                        break
                    case 5:
                        day = 'Friday'
                        break
                    case 6:
                        day = 'Saturday'
                        break
                }
                res.end(day)
            }
            catch (err) {
                res.end(err.toString())
            }
        })
    } else {
        res.statusCode = 404
        res.end()
    }
})

server.listen(8002)
console.log('Server is listening on http://localhost:8002')