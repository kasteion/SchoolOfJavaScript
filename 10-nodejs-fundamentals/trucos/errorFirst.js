function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
            // ó callback(error)
        }
    })
}

asincrona((error, data) => {
    if (error) {
        console.error('Ha ocurrido un error.')
        console.error(error)
        //throw error
        return false; 
    }

    console.log('Todo ha ido bien, mi data es: ', data)
})