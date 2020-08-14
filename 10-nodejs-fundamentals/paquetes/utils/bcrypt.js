const bcrypt = require('bcrypt')

const password = 'P@sw0rd'
const passwordEquivocado = 'Password'

let encryptedPassword

bcrypt.hash(password, 5, (err, encrypted) => {
    encryptedPassword = encrypted
    console.log(encrypted)
})

let passwordInDB = '$2b$05$VICI/086kTtf1UN7Egesbu/0ftAi09xZsFc80ktrE2sLetnMEmhDS'

bcrypt.compare(password, passwordInDB, (err, same) => {
    if (same) {
        console.log('El password es correcto')
    } else 
    {
        console.log('El password está equivocado')
    }
})

bcrypt.compare(passwordEquivocado, passwordInDB, (err, same) => {
    if (same) {
        console.log('El password es correcto')
    } else 
    {
        console.log('El password está equivocado')
    }
})