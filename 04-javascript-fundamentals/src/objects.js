var person1 = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

var person2 = {
    name: 'Rachelle',
    surname: 'McSunrise',
    age: 25
}

function printNameUperCase(person){
    console.log(person.name.toUpperCase())
}

function printNameLowerCase(person){
    console.log(person.name.toLowerCase())
}

printNameUperCase(person1)
printNameLowerCase(person2)
printNameLowerCase({ name: 'Rambone' })

// Esto arrojaría un error
// printNameLowerCase()
// printNameLowerCase({ surname: 'Midnight' })