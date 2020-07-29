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
var personsHeightInFeet = persons.map((person) => Number(((person.height * 100) / 30.48).toFixed(2)) )
var personsWithTheriHeightInFeet = persons.map((person) => {
    return {
        ...person,
        height: Number(((person.height * 100) / 30.48).toFixed(2))
    }
})
console.log(personsHeightInFeet)
console.log(personsWithTheriHeightInFeet)