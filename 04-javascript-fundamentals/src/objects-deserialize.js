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

function printNameUpperCase(person){
    var { name } = person
    console.log(name.toUpperCase())
}

function printNameLowerCase({ name }){
    console.log(name.toLowerCase())
}

printNameUpperCase(person1)
printNameLowerCase(person2)
printNameUpperCase({ name: 'Rambone' })

function printNameAndAge({ name, age }){
    console.log(`${name} has ${age} years old.`)
}

printNameAndAge(person1)
printNameAndAge(person2)
printNameAndAge({ name: 'Rambone', age: 30 })