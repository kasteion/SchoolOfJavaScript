var ripley = {
    name: 'Ripley',
    surname: 'Thornton',
    age: 34,
    weight: 90
}

const WEIGHT_VARIATION = 0.3
const GOAL = ripley.weight - 3

const personEatsALot = () => Math.random() < 0.3
const personMakesCardio = () => Math.random() < 0.4
const gainWeight = person => person.weight += WEIGHT_VARIATION
const looseWeight = person => person.weight -= WEIGHT_VARIATION

var days = 0;

console.log(`Starting the year ${ripley.name} weights ${ripley.weight}`)
console.log(`${ripley.name} wants to loose 3 Kg, let's see how much time it takes...`)

while (ripley.weight > GOAL) {
    if(personEatsALot()){
        if(!personMakesCardio()){
            gainWeight(ripley)
        }
    } else {
        if (personMakesCardio()){
            looseWeight(ripley)
        }
    }
    days += 1
}

console.log(`${ripley.name} has reached the goal.`)
console.log(`It tooked ${days} days.`)
console.log(ripley)