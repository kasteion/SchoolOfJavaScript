var auto = {
    marca: "Toyota",
    linea: "Yaris",
    modelo: 2008
}

var auto2 = {
    marca: "Tesla",
    linea: "Model X",
    modelo: 2018,
    getDetails: function(){
        console.log(`${this.marca} ${this.linea} ${this.modelo}`)
    }
}

console.log('Objetos normales:')
console.log(auto)
console.log(auto.marca)
auto2.getDetails()

console.log()
console.log('Objetos como función:')
function Auto(marca, linea, modelo){
    this.marca = marca
    this.linea = linea
    this.modelo = modelo
}
var autoNuevo = new Auto("Toyota", "Corolla", 2020)
console.log(autoNuevo);