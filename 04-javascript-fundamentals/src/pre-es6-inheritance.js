function inherit(child, parent){
    var fn = function(){}
    fn.prototype = parent.prototype
    child.prototype = new fn
    child.prototype.constructor = child
}

function Person(name, surname, height){
    this.name = name
    this.surname = surname
    this.height = height
}

Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`)
}

Person.prototype.imTall = function(){
   (this.height > 1.8) ? console.log(`(${this.name}): I am Tall`) : console.log(`(${this.name}): I am not Tall`)
}

function Developer(name, surname){
    this.name = name
    this.surname = surname
}

inherit(Developer, Person)

Developer.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}, and i am a dev.`)
}

var raymond = new Person('Raymond', 'Thuy', 1.84)
var rachele = new Developer('Rachele', 'Thorson', 1.6)

raymond.sayHello()
raymond.imTall()

rachele.sayHello()
rachele.imTall()