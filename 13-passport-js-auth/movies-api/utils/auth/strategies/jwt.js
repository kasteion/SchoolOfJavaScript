const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
const boom = require('@hapi/boom')

const UsersService = require('../../../services/users')
const { config } = require('../../../config')

passport.use(
    new Strategy({
        secretOrKey: config.authJwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async function(tokenPayload, callback){
        const usersService = new UsersService()
        try {
            const user = await usersService.getUser({ email: tokenPayload.email })
            if (!user) {
                return callback(boom.unauthorized(), false)
            }

            delete user.password
            
            callback(null, {...user, scopes: tokenPayload.scopes})
        } catch(err) {
            return callback(err)
        }
    })
)