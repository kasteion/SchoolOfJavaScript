const { exec, spawn } = require('child_process')
//cons exec = require('child_process').exec

// En windows sería dir
exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }

    console.log(stdout)
})

exec('node modules/console.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err)
        return false
    }

    console.log(stdout)
})

let proceso = spawn('ls', ['-la'])
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', (data) => {
    console.log('¿Esta muerto?')
    console.log(proceso.killed)
    console.log(data.toString())
})

proceso.on('exit', () => {
    console.log('El proceso terminó')
    console.log(proceso.killed)
})

console.log(proceso.killed)