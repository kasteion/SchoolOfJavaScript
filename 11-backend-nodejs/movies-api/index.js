const express = require('express')

const app = express()

const { config } = require('./config/index')

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.get('/json', (req, res) => {
//     res.json({ hello: 'world'})
// })

const moviesApi = require('./routes/movies')

//Este es el middleware de error
const {logError, errorHandler, wrapError} = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')
const debug = require('debug')('app:server')
// body parser middleware
app.use(express.json())

// Rutas
moviesApi(app)

// Catch 404
app.use(notFoundHandler)

//Los middlewares de error deben ir al final de las rutas.
app.use(logError)
// Este es nuevo pro el boom
app.use(wrapError)
app.use(errorHandler)

app.listen(config.port, () => {
    debug(`Listening on http://localhost:${config.port}`)
})