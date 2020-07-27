# INTRODUCCIÓN A JAVASCRIPT

## ¿QUÉ ES JAVASCRIPT?

Convertir páginas estáticas en páginas dinámicas que luego se convierten en aplicaciones web.

Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

JS en realidad es compilado por el Just In Time Compiler.

**JS es Backwards Compatible**: La compatibilidad con versiones anteriores significa que cuando se acerpta como JS válido, no habrá un cambio futuro que haga que el código deje de funcionar.

**JS Compilador como BABEL**: Compilador de JS que permite usar todas las nuevas versiones de JS. BABEL traduce la nueva versión de JS a una versión vieja (y estandar) que el procesador si entiende.

## ¿POR QUÉ JAVASCRIPT?

Hay 3 lenguajes estándares para el desarrollo web: html, css y JavaScript.

- **HTML**: Información y maquetación.
- **CSS**: Estilos.
- **JS**: Lenguaje de programación.

A finales de 2019 la W3C decidió incluir como lenguaje de programación a Web Assembly (WA) es muy diferente a JS y no utilizaría ninguno de los 3 anteriores.

JavaScript se puede utilizar para:

- **Desarrollo Web**: Angular, Vue, React.
- **Desarrollo de Apps**: React Native.
- **Desarrollo de Apps para Desktop**: Electron.
- **Back-end/IOT**: Node JS.

## ELEMENTOS DE UN LENGUAJE DE PROGRAMACIÓN: VARIABLES, FUNCIONES, Y SINTAXIS

Dos componentes principales.
1. Data que guardamos en memoria.
2. Tareas (funciones) que haremos con esa data.

Valores:
- **Primitivos**:
    - **Numeros**: 40.
    - **String**: "Un String".
    - **Boolean**: true, false.
    - **null, undefined**: Valores vacíos... valores placeholder.

- **Primitivos**:
    - **Arrays**: [1, 2, 3]
    - **Objetos**: { nombre: "Fulano" }

Ejecuta:
> $ node src/values.js

## VARIABLES

Una variable es una representación de algún lugar en memoria para poder guardar un valor.

Así se declara una variable en JS
        var name = 'kasteion'

Hay dos fases de la creación de variables.
1. Declaración de la variable:
        var nombreDeLaVariable
2. Inicializar la variable:
        nombreDeLaVariable = 30

Declaración de un arreglo:
        var elements = ["computadora", "celular"]

Declaración de un objeto:
        var persona = {
            name: "kasteio",
            age: 34
        }

> $ node src/varaibles.js

## FUNCIONES

Cuando hablamos de funciones en JS, tenemos dos tipos de funciones:

1. **Funciones Declarativas (function declaration / function statement)**: En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

        function myFunction() {
            return 3
        }

        myFunction()

2. **Funciones de Expresión (function expression / funciones anónimas)**: En la expresión de función, la declaración se inicia con la palabra reservada var, donde generará una variable que guardará una función anónima.

        var miFuncion = function(a, b) {
            return a+b
        }

        miFunction(100, 85)

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

**Diferencias**: A las funciones declarativas se les aplica hoisting, y a la expresión como función no. Lo que quiere decir que con las funciones delcarativas, podemos mandar a llamar la función antes de que esta sea declarada, y con la expresión de función no. tendríamos que declararla primero, y después mandarla a llamar.

Ejecuta:
> $ node src/functions.js

# BASES DE JAVASCRIPT

## SCOPE

Es el alcance que tienen las variables.

**Scope Global**:
        var name = "Kasteion"

**Scope Local**:
        function localScope(){
            var age = 34
            console.log(`${name] has ${age} years young.`) 
        }

        localScope()

Ejecutar:
> $ node src/scope.js

## HOISTING

Es cuando las variables y las funciones se declaran antes de que se ejecute cualquier tipo de código.

El hoisting solo sucede con dos palabras clave que son function y var. 

El hoisting no sucede en la versión más moderna de ECMA Script 6 porque usa dos palabras claves nuevas llamadas const y let.

Las variables y las funciones se generan antes de procesar todo el código, pero las funciones se generan y luego las variables. 

Ejecutar:
> $ node src/hoisting.js

## COERCIÓN

Hay dos tipos de coerciones, Implicitas y Explicitas.

Las coerciones implicitas es cuando el lenguaje nos ayuda. Y cambia el tipo de los valores con tal de no dar errores.
        var a = 4 + '7'
        typeof a

        var b = 4 * '7'
        typeof b

        var a = 20
        var b = a + ''
        typeof b

Las coerciones explicitas es cuando nosotros obligamos a que un valor de cierto tipo cambie de tipo.
        var a = 20;
        var c = String(a)
        typeof c
        var d = Number(c)
        typeof d

Ejecutar:
> $ node src/coercion.js

## VALORES: TRUTHY Y FALSY

¿Qué valores por default son falsos?

- Boolean() // El vacío es falso
- Boolean(0) // Cero es falso
- Boolean(null) // El null es falso
- Boolean(NaN) // Not a Number es falso
- Boolean(undefined) // Undefined es falso
- Boolean(false) // Obviamente false es falso
- Boolean("") //Un string vacío es falso

¿Qué valores por default son verdaderos?

- Boolean(1), Boolean(2) // Cualquier número mayor a cero es verdadero.
- Boolean("a"), Boolean(" ") // Cualquier string aún con un espacio es verdadero.
- Boolean([]) // Los arrays son verdaderos
- Boolean({}) // Los objetos son verdaderos
- Boolean(function(){}) // Las funciones son verdaderas
- Boolean(true) // Obviamente true es verdadero.

> $ node src/truthyfalsy.js

## OPERADORES: ASIGNACIÓN, COMPARACIÓN Y ARITMÉTICOS

**Asignación**:

**Comparación**:
        3 == "3"; // Devuelve true -- Compara valores
        3 === "3"; //Devuelve false -- Compara tipo y valor
        5 < 3;
        5 > 3;
        4 <= 6;
        5 >= 6;
        a && b // Que a y b sean verdaderos
        a || b // Que a o b sean verdaderos

**Aritméticos**:
- De Operación:
        3 + 2 --> Suma
        50 - 10 --> Resta
        10 * 20 --> Multiplicación
        20 / 2 --> División
        "Kasteion " + "is " + "learning " + "JavaScript"
        var edad = 40
        edad++ // 41
        edad+=2 // 43

- Unary
        !false --> (true) --> negación

# CONDICIONALES

## CONDICIONALES: IF, ELSE, ELSE IF

        if (true){
            console.log("Se ejecutó la condición");
        }

        if (false){
            console.log("soy verdadero");
        } else {
            console.log("soy falso");
        }

        var edad = 18;
        if (edad === 18){
            console.log("Puedes votar, será tu primera votación.");
        } else if(edad >= 18){
            console.log("Puedes votar de nuevo.");
        } else {
            console.log("Aún no puedes votar.");
        }

        condición ? true : false;
        
        var  numero = 1;
        var resultado = numero === 1 ? "Soy un uno" : "No soy un uno";

Ejecutar:
> $ node src/piedra-papel-o-tijera-if.js 

## SWITCH
        
        var variable = 1
        switch(variable) {
            case 1: 
                console.log("Soy un uno!")
                break
            case 2:
                console.log("Soy un dos!")
                break;
            case 3:
                console.log("Soy un tres!)
                break;
            case default:
                console.log("Soy otra cosa...")
        }

Ejecutar:
> $ node src/piedra-papel-tijera-o-switch.js

# ARRAYS

## ARRAYS


        var frutas = ["manzana", "melon", "piña"]
        console.log(frutas)
        console.log(frutas.length)
        console.log(frutas[0])
        console.log(frutas[1])
        console.log(frutas[2])
        frutas.push("uvas") // Mete un elemento al final del array
        console.log(frutas)
        frutas.pop() // Elimina el último elemento del array
        console.log(fruts)
        frutas.unshift("fresas") // Mete un elemento al principio del array
        frutas.shift() // Saca un elemento del principio del array
        var posición = frutas.indexOf("melon") // Busca el index de un elemento en el array

Ejecutar:
> $ node src/arrays.js

# LOOPS

## LOOPS: FOR Y FOR...OF

        var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]
        
        function saludarEstudiantes(estudiante) {
            console.log(`Hola, ${estudiante}`)
        }

        for(var i = 0; i < estudiantes.length; i++){
            saludarEstudiantes(estudintes[i])
        }

        for(var estudiante of estudiantes){
            saludarEstudiantes(estudiante)
        }

Ejecutar:
> $ node src/for-loop.js

## LOOPS: WHILE
        var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

        function saludarEstudiante(estudiante) {
            console.log(`Hola ${estudiante}`)
        }

        while(estudiantes.length > 0){
            var estudiante = estudiantes.shift()
            saludarEstudiante(estudiante)
        }

Ejecutar:
> $ node src/while-loop.js

# OBJECTS

## OBJECTS

        var miAuto = {
            marca: "Toyota",
            modelo: "Corolla",
            anio: 2020
        };

        miAuto; --> Trae todo el objeto.

        miAuto.marca; --> Una de las propiedades del objeto.

        var miAuto = {
            marca: "Toyota",
            modelo: "Yaris",
            anio: 2020,
            detalleDelAuto: function(){
                console.log(`Auto ${this.modelo} ${this.annio}`)
            }
        };

        miAuto.detalleDelAuto();

Ejecutar:
> $ node src/objects.js

## OBJECTS: FUNCIÓN CONSTRUCTORA

Generar un template de un objeto. Y luego crear nuevas instancias con la palabra reservada new:

        function auto(marca, modelo, anio) {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
        }

        var AutoNuevo = new auto("Tesla", "Model 3", 2020);
        var AutoNuevo2 = new auto("Tesla", "Model X", 2018);
        var AutoNuevo3 = new auto("Toyota", "Corolla", 2020); 

Ejecutar:
> $ node src/objects.js

# MÉTODOS DE ARRAYS

## MÉTODOS DE RECORRIDOS DE ARRAY

- **.filter()**: Recibe una función que debe retornar verdadero o falso. Devuelve un arreglo con los elementos que dieron verdadero.

- **.map()**: Sirve para transformar un arreglo, recibe una función que devuelve el objeto tranformado.

## RECORRIENDO ARRAYS CON .FIND(), .FOREACH() Y .SOME()

- **.find()**: También recibe una función que debe retornar verdadero. Devuelve el valor que da verdadero.

- **.forEach()**: También recibe una función y la ejecuta para cada elemento del arreglo.

- **.some()**: Tambien recibe una función que debe regresar verdader o falso. El resultado es otro arreglo filtrado.

## ELIMINANDO ELEMENTOS DE UN ARRAY

- **.push()**: El método .push() nos permite agregar uno o más elementos al final del array.

- **.pop()**: El método .pop() nos permite sacar un elementos del final del array.

- **.unshift()**: El metodo .unshift() nos permite agregar uno o más elementos al principio del array.

- **.shift()**: El método .shift() nos permite sacar un elementos del inicio del array. 

Ejecutar:
> $ node src/array-methods.js