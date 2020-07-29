var randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)
randomNumber = randomNumber + 1
console.log(randomNumber)
randomNumber += 1
console.log(randomNumber)

var weight = 81
console.log(weight)
weight = weight - 2
console.log(weight)
weight -= 2
console.log(weight)
var pizza = 1
weight = weight + pizza
console.log(weight)
weight += pizza
console.log(weight)
var running = 1
weight = weight - running
console.log(weight)
weight -= running
console.log(weight)

var price = 200.3
console.log(price)
var total = price * 3
console.log(total)
total = (price * 100 * 3)/100
console.log(total)
total = Math.round(price * 100 * 3)/100
console.log(total)
var totalString = total.toFixed(2)
console.log(totalString)
var total2 = parseFloat(totalString)
console.log(total2)

var pizza = 8
var persons = 2
var slicesPerPerson = pizza / persons
console.log(slicesPerPerson)