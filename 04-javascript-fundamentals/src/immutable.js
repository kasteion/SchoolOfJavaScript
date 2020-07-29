var scamp = {
    name: 'Scamp',
    surname: 'Miles',
    age: 24
}

function getOlderPerson(person) {
    return {
        ...person,
        age: person.age + 1
    }
}

var olderScamp = getOlderPerson(scamp)

console.log(scamp)
console.log(olderScamp)

var evenOlderScamp = getOlderPerson(olderScamp)
console.log(evenOlderScamp)