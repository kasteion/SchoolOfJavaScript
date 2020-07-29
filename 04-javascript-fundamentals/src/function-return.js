var mike = {
    name: 'Mike',
    surname: 'Regent',
    age: 27
}

var rachelle = {
    name: 'Rachelle',
    surname: 'McSunrise',
    age: 15
}

const ADULT_AGE = 21

function isAdult(person){
    if (person.age >= ADULT_AGE){
        return true
    } else 
    {
        return false
    }
}

function printIsAdult(person){
    if (isAdult(person)){
        console.log(`${person.name} is an Adult`)
    } else {
        console.log(`${person.name} is not an Adult`)
    }
}

printIsAdult(mike)
printIsAdult(rachelle)