var mike = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

var rachelle = {
    name: 'Rachelle',
    surname: 'McSunrise',
    age: 13
}

var ripley = {
    name: 'Ripley',
    surname: 'Thornton',
    age: 34
}

var ralph = {
    name: 'Ralf',
    surname: 'Thome',
    age: 15
}

const ADULT_AGE = 18

function isAdult(person){
    return person.age >= ADULT_AGE
}

const isAdult2 = function(person){
    return person.age >= ADULT_AGE
}

const isAdult3 = (person) => {
    return person.age >= ADULT_AGE
}

const isAdult4 = person => person.age >= ADULT_AGE

const isAdult5 = ({ age }) => age >= ADULT_AGE

const printIsAdult = person => (isAdult(person))
    ? console.log(`${person.name} is an Adult`)
    : console.log(`${person.name} is not an Adult`)

const printIsAdult2 = person => (isAdult2(person))
    ? console.log(`${person.name} is an Adult`)
    : console.log(`${person.name} is not an Adult`)

const printIsAdult3 = person => (isAdult3(person))
    ? console.log(`${person.name} is an Adult`)
    : console.log(`${person.name} is not an Adult`)

const printIsAdult4 = person => (isAdult4(person))
    ? console.log(`${person.name} is an Adult`)
    : console.log(`${person.name} is not an Adult`)

const printIsAdult5 = person => (isAdult5(person))
    ? console.log(`${person.name} is an Adult`)
    : console.log(`${person.name} is not an Adult`)

printIsAdult(mike)
printIsAdult2(rachelle)
printIsAdult3(ripley)
printIsAdult4(ralph)
printIsAdult5(mike)