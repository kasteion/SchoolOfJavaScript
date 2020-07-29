class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    sayHello(fn){
        var { name } = this
        console.log(`Hello, my name is ${name}`)
        if (fn){
            fn(name)
        }
    }
}

class Dev extends Person {
    constructor(name, surname, pLanguage){
        super(name, surname)
        this.pLanguage = pLanguage
    }

    sayHello(fn){
        var { name, pLanguage} = this
        console.log(`Hello, my name is ${name} and I am a ${pLanguage} dev`)
        if (fn) {
            fn(name, true)
        }
    }
}

function sayHelloBack(name, isDev){
    console.log(`Hello ${name}, nice meeting you.`)
    if (isDev) {
        console.log(`Oh ist so cool you are a dev`)
    }
}

var raymond = new Person('Raymond', 'Thuy')
var rachele = new Dev('Rachele', 'Thorson', 'JavaScript')

raymond.sayHello()
rachele.sayHello()
raymond.sayHello(sayHelloBack)
rachele.sayHello(sayHelloBack)