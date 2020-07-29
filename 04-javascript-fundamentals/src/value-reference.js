var mike = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

function happyBirthday(person){
    person.age += 1
}

function happyBirthday2(age){
    age += 1
}

function happyBirthday3({ age }){
    age += 1
}

function futurePerson(person){
    return {
        ...person,
        age: person.age + 1
    }
}

console.log(mike)
// Aquí la variable va por referencia
happyBirthday(mike)
console.log(mike)
// Aquí la variable va por valor
happyBirthday2(mike.age)
console.log(mike)
// Aquí tambien va por valor
happyBirthday3(mike.age)
console.log(mike)
// Aquí la variable va por referencia pero el objeto original no cambia porque 
// la función devuelve un objeto nuevo.
var olderMyke = futurePerson(mike)
console.log(mike)
console.log(olderMyke)