const boom = require('@hapi/boom')
const joi = require('@hapi/joi') // eslint-disable-line

function validate(data, schema){
    // ANTIGUA IMPLEMENTACIÓN DE JOI
    //const { error } = joi.object(schema).validate(data)

    // NUEVA IMPLEMENTACIÓN DE JOI
    const { error } = joi.object(schema).validate( data, { errors: { stack: true } })
    return error
}

function validationHandler(schema, check = 'body'){
    return function(req, res, next){
        const error = validate(req[check], schema)
        error ? next(boom.badRequest(error)) : next()
    }
}

module.exports = validationHandler