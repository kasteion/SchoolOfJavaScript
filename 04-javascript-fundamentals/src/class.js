class Person {
    constructor(name, surname, height) {
        this.name = name
        this.surname = surname
        this.height = height
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }

    imTall() {
        return this.height > 1.8
    }

    printTall(){
        if (this.imTall()){
            console.log(`(${this.name}): I am Tall`)
        } else {
            console.log(`(${this.name}): I am not Tall`)
        }
    }
}

var raymond = new Person('Raymond', 'Thuy', 1.72)
raymond.sayHello()
raymond.printTall()

class Dev extends Person {
    constructor(name, surname, height, pLanguage){
        super(name, surname, height)
        this.pLanguage = pLanguage
    }

    sayHello(){
        console.log(`Hello, my name is ${this.name} and I am a ${this.pLanguage} dev.`)
    }
}

var rachele = new Dev('Rachele', 'Thorson', 1.54, 'JavaScript')
rachele.sayHello()
rachele.printTall()

