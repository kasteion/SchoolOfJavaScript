var mike = {
    name: 'Mike',
    surname: 'Regent',
    height: 1.72
}
  
var raymond = {
    name: 'Raymond',
    surname: 'Thuy',
    height: 1.86
}
  
var randolph = {
    name: 'Randolph',
    surname: 'Thompson',
    height: 1.85
}
  
var scamp = {
    name: 'Scamp',
    surname: 'Miles',
    height: 1.71
}
  
var rachele = {
    name: 'Rachele',
    surname: 'Thorson',
    height: 1.56
}
  
var ronda = {
    name: 'Ronda',
    surname: 'Rayson',
    height: 1.76
}

var persons = [mike, raymond, randolph, scamp, rachele, ronda]

console.log(persons)
var tallPersons = persons.filter((person) => person.height > 1.8)
console.log(tallPersons)
var shortPersons = persons.filter((person) => person.height < 1.6)
console.log(shortPersons)
