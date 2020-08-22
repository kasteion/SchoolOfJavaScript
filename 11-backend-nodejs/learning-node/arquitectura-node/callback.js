const asyncCallback = function(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(null, 'Hello World') // Error First Callback
        } else {
            callback('Hello Error')
        }
    }, 2000)
}

asyncCallback((error, message) => {
    if (error) {
        console.log(error)
    } else {
        console.log(message)
    }
})