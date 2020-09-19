const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

const UserService = require('../../../services/users')
const UsersService = require('../../../services/users')

passport.use(new BasicStrategy( async function(email, password, callback) {
    const userService = new UsersService()
    try {
        const user = await userService.getUser( { email })
        if (!user) {
            return callback(boom.unauthorized(), false)
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return callback(boom.unauthorized(), false)
        }

        // Si no elimino el usuario lo va a devolver en el callback y será visible en el javascript del usuario.
        delete user.password

        return callback(null, user)
    } catch (err) {
        callback(error)        
    }
}))