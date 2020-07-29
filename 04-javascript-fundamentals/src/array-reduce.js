var mike = {
    name: 'Mike',
    surname: 'Regent',
    height: 1.72,
    quantityOfBooks: 10
}
  
var raymond = {
    name: 'Raymond',
    surname: 'Thuy',
    height: 1.86,
    quantityOfBooks: 5
}
  
var randolph = {
    name: 'Randolph',
    surname: 'Thompson',
    height: 1.85,
    quantityOfBooks: 13
}
  
var scamp = {
    name: 'Scamp',
    surname: 'Miles',
    height: 1.71,
    quantityOfBooks: 7
}
  
var rachele = {
    name: 'Rachele',
    surname: 'Thorson',
    height: 1.56,
    quantityOfBooks: 9
}
  
var ronda = {
    name: 'Ronda',
    surname: 'Rayson',
    height: 1.76,
    quantityOfBooks: 3
}

var persons = [mike, raymond, randolph, scamp, rachele, ronda]

const reducer = (acum, {quantityOfBooks}) => acum += quantityOfBooks

var countOfBooks = persons.reduce(reducer, 0)

console.log(persons)
console.log(`People have a total of ${countOfBooks} books`)