const express = require('express')
const debug = require('debug')('app:server')

const app = express()

const is_leap = (year) => {
    return ((year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0)))
        ? true
        : false
}

app.get('/isleap/:year', (req, res) => {
    try {
        let aYear = Number.parseInt(req.params.year)
        if (!isNaN(aYear)) {
            if (is_leap(aYear)){
                res.status(200).send(`<h1>The year ${aYear} is a leap year</h1>`)
            } else {
                res.status(200).send(`<h1>The year ${aYear} is not a leap year</h1>`)
            }
        } else {
            res.status(400).send('<h1>Year should be a number</h1>')    
        }
    } catch (err){
        res.status(400).send('<h1>Year should be a number</h1>')
    }
    
})

app.listen(8000, () => {
    debug('Listening on http://localhost:8000')
})