var rachelle = {
    name: 'Rachelle',
    surname: 'McSunrise',
    age: 35,
    weight: 80
}

const WEIGHT_VARIATION = 0.200
const DAYS_OF_YEAR = 365

const increaseWeight = persona => persona.weight += WEIGHT_VARIATION
const decreaseWeight = persona => persona.weight -= WEIGHT_VARIATION


console.log(`Starting the year ${rachelle.name} weigths ${rachelle.weight} Kg`)

for (var i = 0; i < DAYS_OF_YEAR; i++){
    var probability = Math.random()
    if (probability < 0.25){
        increaseWeight(rachelle)
    } else if (probability > 0.75) {
        decreaseWeight(rachelle)
    }
}

console.log(`At the end of a year ${rachelle.name} weights ${rachelle.weight} Kg`)