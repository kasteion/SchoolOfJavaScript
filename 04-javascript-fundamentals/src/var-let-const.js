var scamp = {
    name: 'Scamp',
    surname: 'Miles',
    age: 27
}

function canVoteVar(person){
    if (person.age >= 18){
        var message = `${person.name} can vote.`
    } else {
        var message = `${person.name} can not vote.`
    }
    console.log(message)
}

function canVoteLet(person){
    // FAIL
    //
    // if (person.age >= 18){
    //     let message = `${person.name} can vote.`
    // } else {
    //     let message = `${person.name}s can not vote.`
    // }
    // console.log(message)

    let message
    if (person.age >= 18){
        message = `${person.name} can vote.`
    } else {
        message = `${person.name}s can not vote.`
    }
    console.log(message)
}

function canDrinkConst(person){
    // FAIL
    // const DRINKING_AGE = 18
    // DRINKING_AGE = 21
    const DRINKING_AGE = 21
    let message
    if (person.age >= DRINKING_AGE){
        message = `${person.name} can drink.`
    } else {
        message = `${person.name}s can not drink.`
    }
    console.log(message)
}

canVoteVar(scamp)
canVoteLet(scamp)
canDrinkConst(scamp)

const numbers = [1,2,3,4,5,6,7]
console.log(numbers)
numbers.push(8)
numbers.push(9)
console.log(numbers)
numbers.pop()
numbers.pop()
numbers.pop()
console.log(numbers)
numbers.unshift(0)
console.log(numbers)
numbers.shift()
numbers.shift()
console.log(numbers)
numbers[0] = 3
console.log(numbers)

for(var i = 0; i < 10; i++){

}
console.log(`The for ended, the value of i is ${i}`)

for (let j = 0; j < 10; j++){

}
// FAIL
//console.log(`The for ended, the value of j is ${j}`)