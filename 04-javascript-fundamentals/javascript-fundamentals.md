# PRIMEROS PASOS EN JAVASCIRPT

## VARIABLES

Ejecutar:
> $ node src/variables.js

## VARIABLES: STRINGS

Ejecutar:
> $ node src/variables-strings.js

## VARIABLES: NÚMEROS

Ejecutar:
> $ node src/variables-numbers.js

## FUNCIONES

Ejecutar:
> $ node src/functions.js

## FUNCIONES: SCOPE

Ejecutar:
> $ node src/functions-scope.js

## OBJETOS

Ejecutar:
> $ node src/objects.js

## DESESTRUCTURAR OBJETOS

Ejecutar:
> $ node src/objects-deserialize.js

## PARÁMETROS COMO REFERENCIA O COMO VALOR

Ejecutar:
> $ node src/value-reference.js

## COMPARACIONES EN JAVASCRIPT

Ejecutar:
> $ node src/compare.js

# ESTRUCTURAS DE CONTROL Y FUNCIONES

Empezaremos a trabajar con estructuras de control, estás nos permiten decidir el flujo de nuestro código.

## CONDICIONALES

Empezamos con los condicionales. Los condicionales nos permiten decidir si un código se ejecuta o no. Mediante un condicional (`if`) decidiremos si se ejecuta una parte de nuestro código cuando se cumpla o no cierta condición.

Ejecutar:
> $ node src/if.js

## FUNCIONES QUE RETORNAN VALORES

Return detiene la ejecución de una función y devuelve el valor de esta función.

Las variables definidas con cost se comportan como variables, excepto que no pueden ser reasigandas. Las constantes pueden ser declaradas en mayúsculas o minúsculas.

Ejecutar:
> $ node src/function-return.js 

## ARROW FUNCTIONS

Las Arrow functions permiten una nomenclatura más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse antes de ser utilizadas.

Al escribir las Arrow Functions no es necesario escribir la palabra function, la palabra return, ni las llaves.

Ejecutar:
> $ node src/arrow-function.js 

## CICLOS: FOR

Ejecutar:
> $ node src/for.js 

## CICLOS: WHILE

Ejecutar:
> $ node src/while.js 

## CICLOS: DO-WHILE

Ejecutar:
> $ node src/do-while.js 

## CONDICIONAL MÚLTIPLE: SWITCH

Ejecutar:
> $ node src/switch.js 

# ARRAYS

## INTRODUCCIÓN A ARRAYS

Los arrays son estructuras que nos permiten organizar elementos dentro de una colección. Estos elementos pueden ser números, strings, booleanos, objetos, etc.

Ejecutar:
> $ node src/array.js 

## FILTRAR UN ARRAY

Para filtrar siempre necesitamos establecer una condición. El método filter() crea una nueva matriz con todos los elementos que pasan la prueba implementada por función proporcionada. Si no hay elementos que pasen la prueba, filter devuelve un array vacío.

Ejecutar
> $ node src/array-filter.js

## TRANSFORMAR UN ARRAY

El método map() itera sobre los elementos de un array en el orden de inserción y devuelve un array nuevo con los elementos modificados.

Ejecutar
> $ node src/array-map.js

## REDUCIR UN ARRAY A UN VALOR

El método reduce() nos permite reducir, mediante una función que se aplica cada uno de los elementos del array, todos los elementos de dicho array a un valor único.

> $ node src/array-reduce.js

# PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT

## COMO FUNCIONAN LAS CLASES EN JAVASCRIPT

Las clases son funciones cuya sintaxis tiene dos componentes:
- Expresiones
- Declaraciones

1. Hablar de objetos en javascript es hablar de prototipos.
2. this hacer referencia al nuevo objeto que se acaba de crear.
3. La función que define el prototipo retorna implícitamente this, es decir, retorna el nuevo objeto que se creo.
4. La palabra reservada new se utiliza para crear un nuevo objeto con el prototipo indicado.

Ejecutar:
> $ node src/pre-es6-class.js

## MODIFICANDO UN PROTOTIPO

Ejecutar:
> $ node src/pre-es6-inheritance.js

## LA VERDAD OCULTA SOBRE LAS CLASES EN JAVASCRIPT

Los objetos en JavaScript son "contenedores" dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a las propiedades no solo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

## CLASES EN JAVASCRIPT

Ejecutar:
> $ node src/class.js

# ASINCRONISMO

## FUNCIONES COMO PARÁMETROS

En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

Hay ciertos valores que se comportan como true o como false.

Valores Falsy
- false
- null
- 0
- ''
- undefined
- NaN

Valores Truthy
- true
- {}
- []
- 'cualquier string no vacio'

Ejecutar:

> $ node src/functions-as-params.js

## CÓMO FUNCIONA EL ASINCRONISMO EN JAVASCRIPT

JavaScript sólo puede hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otros procesos. Este modelo de concurrencia se llama EventLoop.

JavaScript delega en el navegador ciertas tareas y les asocia funciones que deberán ser ejecutadas al ser completadas. Estas funciones se llaman callbacks, y una vez que el navegador ha regresado con la respuesta, el callback asociado pasa a la cola de tareas para ser ejecutado una vez que 

## CÓMO FUNCIONA EL TIEMPO EN JAVASCRIPT

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantiza que el callback se ejecute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

Ejecutar:
> $ node src/asynchronism.js

## CALLBACKS

> $ npm i xmlhttprequest


Ejecutar:
> $ node src/callbacks.js

## HACIENDO MÚLTIPLES REQUESTS

Ejecutar:
> $ node src/multiple-callbacks.js

## MANEJANDO EL ORDEN Y EL ASINCRONISMO EN JAVASCRIPT

Ejecutar:
> $ node src/chained-callbacks.js

## MANEJO DE ERRORES CON CALLBACKS

Ejecutar:
> $ node src/callbacks-handling-errors.js

## PROMESAS

Pensemos en las promesas como valores que aún no conocemos. Las promesa de que un valor va a estar allí.

- Una promesa inicia en el estado **Pending**
- Si la promesa se resuelve exitosamente, esta pasa al estado de **Fulfilled** --> .then(val => ... )
- Si ocurre algún error en la operación asincrona pasa al estado de **Rejected** --> .catch(err => ...)

Al llegar al estado fulfilled podemos incluir otras promesas en el then e ir encadenando promesas de esta forma.

Ejecutar:
> $ node src/promises.js

## PROMESAS ENCADENADAS

Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos un arreglo de Promesas, que pasaremos como parámetro a Promise.all(ArregloDePromesas), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

Ejecutar:
> $ node src/chained-promises.js

## MÚLTIPLES PROMESAS EN PARALELO

Ejecutar:
> $ node src/all-promises.js

## ASINC-AWAIT: LO ÚLTIMO EN ASINCRONISMO

Ejecutar:
> $ node src/async-await.js

# COMPLEMENTOS

## VAR LET Y CONST: LAS DIFERENCIAS ENTRE ELLOS

**var** es la manera más antigua de declarar variables. No es muy estricta en cuanto al alcance, ya que al declarar variables de esta forma, dichas variables podrás se accedidas, e incluso modificadas, tanto dentro como fuera de los bloques internos en una función.

Con **let** por otra parte, el alcance se reduce al bloque (las llaves) en el cual la variable fue declarada. Fuera de este bloque la variable no existe. Una vez declarada la variable con let, no se puede volver a declarar en ninguna otra parte de la función.

**const** al igual que **let** se define en el contexto o alcance de un bloque a diferencia de let y var, las variables definidas como constantes (const), ya no podrán ser modificadas ni delcaradas nuevamente, en ninguna otra parte de la función o el contexto en el que ya existen.

La recomendación es reducir siempre al mínimo el alcance de nuestras variables, por lo que se debe usar let en lugar de var mientras sea posible.

Ejecutar:
> $ node src/var-let-const.js

## ¿HACE CUÁNTOS DÍAS NACISTE?

Con variables de tipo Date, se pueden realizar operaciones de suma y resta similares a las que se realizan con números. El resultado que se obtiene está en milisegundos, por lo que luego hay que hacer algunas operaciones adicionales para llevarlos a días, meses o años según queramos. También aplica para Horas, Minutos y Segundos.

Ejecutar:
> $ node src/time.js

## FUNCIONES RECURSIVAS

La recursividad es un cocepto muy importante en cualquier lenguaje de programación. Una función recursiva es básicamente aquella que se llama (o se ejecuta) a sí misma de forma controlada, hasta que sucede una condición base.

Ejecutar:
> $ node src/recursive.js

## MEMORIZACIÓN: AHORRANDO CÓMPUTO

La memorización es una técnica de programación que nos permite ahorrar cómputo o procesamiento en JavaScript, al ir almacenando el resultado invariable de una función para que no sea necesario volver a ejecutar todas las instrucciones de nuevo, cuando se vuelva a llamar con los mismos parámetros. Es similar a usar memoria cache.

Abrir:
> public/memoization.html

## ENTIENDE LOS CLOSURES DE JAVASCRIPT

Un closure, básicamente, es una función que recuerda el estado de las variables al momento de ser invocada, y conserva este estado a través de reiteradas ejecuciones. Un aspecto fundamental de los closures es qeu son funciones que retornan otras funciones.

Ejecutar:
> $ node src/cosures.js

## ESTRUCTURAS DE DATOS INMUTABLES

Las estructuras de datos inmutables forman parte de los principios de la Programación Funcional y nos permite evitar tener efectos colaterales en los datos. En otras palabras, que hayan modificaciones en las variables sin nuestro consentimiento, produciendo comportamientos inesperados en el programa.

Ejecutar:
> $ node src/immutable.js

## CAMBIANDO DE CONTEXTO AL LLAMAR A UNA FUNCIÓN

El contexto (o alcance) de una uncioón es por lo general, window. Así que en ciertos casos, intentamos referirnos a this en alguna parte del código, es posible que tengamos un comportamiento inesperado, porque el contexto quizás no sea el que esperamos.

Existen al menos tres maneras de cambiar el contexto de una función.
- Usamos el método .bind, enviamos la referencia a la función sin ejecutarla pasando el contexto como parámetro.
- Usando el método .call, ejecutamos inmediatamente la función con el contexto indicado.
- Usando el método .apply es imilar a .call pero los parámetros adicionales se pasan como un arreglo de valores.

Ejecutar:
> $ node src/function-context.js

## ¿CUÁNDO HACE FALTA PONER EL PUNTO Y COMA AL FINAL DE LA LÍNEA?

El punto y coma es opcional en JavaScript, excepto en algunos casos:
- Cuando usamos varias instrucciones en una misma línea.
        const name = 'Rambone'; console.log(`Hello, my name is ${name}`)
- Al comenzar la próxima línea con un array
        console.log('Random Log');
        [1, 2, 3].forEach(n => console.log(n * 2))
- Al comenzar la próxima línea con un template string
        const nombre = 'Rambone'
        console.log(`Hola mi nombre es ${name}`);
        `${nombre} es un desarrolador`