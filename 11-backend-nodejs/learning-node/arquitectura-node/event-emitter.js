const EventEmmiter = require('events')

class Logger extends EventEmmiter {
    execute (callback) {
        console.log('Before')
        this.emit('start')
        callback()
        this.emit('finish')
        console.log('After')
    }
}

const logger = new Logger()

logger.on('start', () => console.log('Starting'))
logger.on('finish', () => console.log('Finishing'))
logger.on('finish', () => console.log("It's Done"))

//logger.execute(() => console.log('Hello World'))
logger.execute(() => setTimeout(() => {
    console.log('Hello World')
}, 500))
