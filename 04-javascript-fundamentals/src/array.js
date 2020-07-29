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

console.log(`persons[0] = `, persons[0])
console.log(`persons[1].altura = `, persons[1].height)
console.log(`persons[2]["nombre"] = `, persons[2]["name"])

for(var i = 0; i < persons.length; i++){
    var person = persons[i]
    console.log(`${person.name} height is ${person.height}`)
}