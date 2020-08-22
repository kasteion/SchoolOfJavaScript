const promise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5){
                resolve('Hello World')
            } else {
                reject('Hello Error')
            }
        }, 2000)
    })
}

promise().then((message) => {
    return message.toUpperCase()
}).then((message) => {
    console.log(message)
}
).catch((error) => {
    console.log(error)
})