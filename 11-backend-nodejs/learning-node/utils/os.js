const os = require('os')

console.log('CPU info:', os.cpus())

console.log('IP address:', os.networkInterfaces())

console.log('Free memory:', os.freemem())

console.log('Type:', os.type())

console.log('SO Version', os.release())

console.log('User info', os.userInfo())