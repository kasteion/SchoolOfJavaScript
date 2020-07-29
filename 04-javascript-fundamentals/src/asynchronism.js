setTimeout(() => console.log('Hello with timeout.'), 3000)
for(var i = 0; i < 10000000000; i++){
    // This will be executed before the function in the setTimeoute over there.
}