const passport = require('passport')
const { Strategy: FacebookStrategy } = require('passport-facebook')
const axios = require('axios')
const boom = require('@hapi/boom')

const { config } = require('../../../config/index')

passport.use( new FacebookStrategy({
    clientID: config.facebookClientId,
    clientSecret: config.facebookClientSecret,
    callbackURL: '/auth/facebook/callback'
}, async function(accessToken, refreshToken, profile, callback) {
    const { data, status } = await axios({
        url: `${config.apiUrl}/api/auth/sign-provider`,
        method: 'post',
        data: {
            name: profile.name,
            email: profile.emails[0].value,
            password: profile.id,
            apiKeyToken: config.apiKeyToken
        }
    })
    
    if (!data || status !== 200){
        return callback(boom.unauthorized(), false)
    }

    return callback(null, data)
}))