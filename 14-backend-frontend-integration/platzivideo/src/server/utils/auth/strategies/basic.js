const passport = require('passport')
const { BasicStrategy } = require('passport-http')
const boom = require('@hapi/boom')
const axios = require('axios')

require('dotenv').config()

passport.use(
    new BasicStrategy(
        async function(email, password, callback){
            try {
                const { data, status } = await axios({
                    url: `${process.env.API_URL}/api/auth/sign-in`,
                    method: "post",
                    auth: {
                        password, 
                        username: email
                    },
                    data: {
                        apiKeyToken: process.env.API_KEY_TOKEN
                    }
                })

                if (!data || status !== 200) {
                    return callback(boom.unauthorized(), false)
                }

                return callback(null, data)
            } catch (err) {
                callback(err)
            }
        }
    )
)