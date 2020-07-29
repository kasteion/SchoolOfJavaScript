function Person(name, surname, height){
    this.name = name
    this.surname = surname
    this.height = height
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name} ${this.surname}`)
}

Person.prototype.imTall = function(){
    (this.height > 1.8)? console.log("I am tall") : console.log("I am not tall")
}

var mike = new Person('Mike', 'Regent', 1.84)
var rachele = new Person('Rachele', 'Thorson', 1.54)
var raymond = new Person('Raymond', 'Thuy', 1.72)

mike.sayHello()
mike.imTall()

rachele.sayHello()
rachele.imTall()

raymond.sayHello()
raymond.imTall()