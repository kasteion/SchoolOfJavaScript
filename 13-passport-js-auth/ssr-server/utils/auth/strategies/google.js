const passport = require('passport')
const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')
const axios = require('axios')
const boom = require('@hapi/boom')

const { config } = require('../../../config/index')

passport.use(
    new GoogleStrategy(
        {
            clientID: config.googleClientId,
            clientSecret: config.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async function(accessToken, refreshToken, profile, callback){
            const { data, status } = await axios({
                url: `${config.apiUrl}/api/auth/sign-provider`,
                method: 'post',
                data: {
                    name: profile._json.name,
                    email: profile._json.email,
                    password: profile.id,
                    apiKeyToken: config.apiKeyToken
                }
            })

            if (!data || status !== 200){
                return callback(boom.unauthorized(), false)
            }

            return callback(null, data)
        }
    )
)