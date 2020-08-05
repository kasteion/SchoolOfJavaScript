# ¿QUÉ SIGNIFICA SER UN PROFESIONAL DE JAVASCRIPT?

¿Qué forma a un profesional?
- Conocimiento del lenguaje.
- Conocimiento de los entornos de programación.
- Mejores prácticas
- Versado en código.
- Tener una caja de herramientas.
- Ética / Profesionalismo
- Experiencia

El lenuaje JavaScript
- Cosas Fundamentales.
- Cosas no fundamentales - Cosas que hay que estudiar y saber que existen.
    - Promesas
    - Getters, Setters
    - Proxies
    - Generadores
- Como funciona:
    - El JavaScript Engine
    - Herencia Prototipal
    - Event Loop

Entornos de programación:
- Browser y el DOM API

Versaddo en código:
- Leemos mucho código constantemente.
- Hay que leer código... mucho... constantemente.

Mejores prácticas:
- No reiventemos la rueda. 
- Conozcamos los patrones de diseño.
- Probar nuestro código

Ética:
- Ser responsable.
- Entregar a tiempo.
- Sabe decir que no.
- No hacer daño.

Experiencia:
- Nada le gana a la experiencia. No se puede enseñar. Esta en tí. Perseverancia.

# INICIO DEL PROYECTO

> git init
> 
> npm init -y
>
> npm install -D live-server

# REPASO DE CONCEPTOS FUNDAMENTALES

## CÓMO LLEGA UN SCRIPT AL NAVEGADOR

El **DOM** es una representación de un documento HTML. El navegdor interpeta el archivo HTML y lo convierte a una estructura de arbol. Cuando termina de transformarlo se dispara el evento **DOMComtentLoader**, lo que significa que todo el documento está disponible para ser manipulado.

Los scripts, el exporador tiene que leerlos y ejecutarlos (fetch y exec). Por eso es importante el lugar en que ponemos las etiquetas script. Los mejor es añadir los scripts antes de que termine la etiqueta body. Tambien se el puede colocar el atributo async o defer a los scripts externos.

Scripts Externos (normal)

        HTML      ---------->                  ----------------->
        JS(fetch)             -------->
        JS(exec)                       ------->

Scripts Externos (async)

        <script async src="..."></script>

        HTML       ---------------------->           ---------->
        JS (fetch)            ----------->
        JS (exec)                         ---------->

        <body>
            <script async src="/hugeScript.js"></script>
            <script async src="/smallScript.js"></script>
        </body>

        HTML       ---------------->     ---------->                     ------>
        JS1(fetch)           ---------------------->
        JS1(exec)                                   -------------------->
        JS2(fetch)           ----->
        JS2(exec)                  ----->

Scripts Externos (defer)

        <body>
            <script defer src="/index.js"></script>
        </body>

        HTML       ------------------------------------------------->
        JS (fetch)           ---------->
        JS (exec)                                                    ---------->

Tanto con async como defer podemos hacer llamados asincronos pero tiene diferencias:
- **async**: Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
-**defer**: La petición es igual asíncrona como en async pero va a deferir la ejecución del JavaScript hasta el final de que se cargue todo el documento.

## SCOPE

El Scope o ámbito es lo que define el tiempo de vida de una variable, en que partes de nuestro código pueden ser usadas.

- **Global Scope**: Variables disponibles de forma global se usa la palabra var, son accesibles por todos los scripts que se cargan en la página. Aquí hay mucho riesgo de sobreescritura.

- **Function Scope**: Variables declaradas dentro de una función solo visibles dentro de ella misma (incluyendo los argumentos que se pasan a la función).

- **Block Scope**: Variables definidas dentro de un bloque, por ejemplo variables declaradas dentro de un loop while o for. Se usa let y const para declarar este tipo de variables.

- **Module Scope**: Cuando se denota un script de tipo module con el atributo type="module" las variables son limitadas el archivo en el que están declaradas.

Ejemplo:

> ./phase-one/ejercicios/scope.html

## CLOSURES

Son funciones que regresan una función o un objeto. Son funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir, encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

Ejemplo:

> ./phase-one/ejercicios/closures.html

## EL PRIMER PLUGIN

Ejemplo:

> src/index.js src/MediaPlayer.js & src/plugins/AutoPlay.js

## THIS

Ejemplo:

> ./phase-one/ejercicios/this.html

## LOS MÉTODOS CALL, APPLY Y BIND

Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va a usar cuando la función sea llamada.

Las funciones call, apply y bind son parte del prototipo Function. toda función usa este prototipo y por lo tanto tiene estas tres funciones.

- **functionName.call()**: Ejecutar la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.

- **functionName.apply()**: Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglocon los argumentos de la función que llamó a apply.

- **functionName.bind()**: Recibe como primer y único argumento el this. No ejecuta la función, solo regresa otra función con el nuevo this integrado.

Ejemplo:

> ./phase-one/ejercicios/call-apply-bind.html

## PROTOTYPE

En JavaScript todo son objetos, no tenemos clases, no tenemos ese plano para crear nuevos objetos.

Todos los objetos "heredan" de un prototipo que a su vez hereda de otro prototipo y así sucesivamente, creando lo que se llama prototype chain.

La keyword new crea un nuevo objeto que "hereda" todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancia que apunta al prototipo del que hereda.

Ejemplo:

> ./phase-one/ejercicios/prototype.html

## HERENCIA PROTOTIPAL

Ejemplo:

> ./phase-one/ejercicios/herencia-prototipal.html

# PARSERS Y EL ABSTRACT SYNTAX TREE

El JavaScript Engine recibe el código fuente y lo procesa de la siguiente manera: 
- Recibe el código fuente.
- El parser descompone y crea tokens que integran el AST (Abstract Sintax Tree).
- Se compila a bytecode y se ejecuta.
- Lo que se pueda se optimiza a machine code y se reemplaza el código base.

JavaScript Source Code ---> Parser ---> AST ---> Interpreter ---> Bytecode ---> Profiling data ---> Optimizing Compiler ---> Optimized Code ---> Deoptimize if needed

El parser agarra el código fuente y lo lee. Lo descompone ne Tokens (Ej.: let, net, +) una vez tiene los tokens arma el AST.

Un SyntaxError es lanzado cuando el motor de JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que tiene un AST generado por el parser.

El parsing es del 15% al 20% del proceso de ejecución por lo tanto hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.
- La mayoría del JavaScript en una página nunca se ejecuta.
- Hay que hacer bundling y code splitting

Hay 2 modos de hacer Parsing en V8 (Chrome y Node)

1. Eager Parsing:
    - Encuentra errores de sintaxis.
    - Crea el AST.
    - Construye scopes.

2. Lazy Parsing:
- Doble de rápido que el eager parser.
- No crea el AST.
- Construye los scopes parcialmente.

JavaScript llegó con Netscape. Se hacían cosas muy simples en esos tiempos. JavaScript es interpetado. Google Chrome reinventó como funcionan los motores de javascript.

Demo TOKENS:
> https://esprima.org/demo/parse.html#

## ABSTRACT SYNTAX TREE EN PRÁCTICA

Ir a:
> https://astexplorer.net/#/gist/16fc27fc420f705455f2b42b6c804aa1/d9cc7988c2c743d7edfbb3c3b1abed866c975ee4

Seleccionar Babel-eslint ---> Transform (ESLint4)

        const pi = 3.1415
        const half_pi = 1.57075

        // El nombre de las constnates debe estar en UPERCASE

        export default function(context) {
            return {
                VariableDeclaration(node) {
                    if (node.kind === 'const'){
                        const declaration = node.declarations[0]
                        if (typof declaration.init.value === 'number'){
                            if (declaration.id.name !== declaration.id.name.toUpperCase()) {
                                context.report({
                                    node: declaration.id,
                                    message: 'El nombre de la constante debe estar en mayúscula',
                                    fix: function(fixer){
                                        return fixer.replaceText(declaration.id, declaration.id.name.toUpperCase())
                                    }
                                })
                            }
                        }
                    }
                }
            }
        }

        // Lint rule not fired.
        // Fixed output follows:
        // --------------------------------------------------------------------------------
        const PI = 3.1415;
        const HALF_PI = 1.57075;
        // variable constantes
        // variables que guarden un numero
        // El nombre de la variable tiene que estar en UPPERCASE

## CÓMO FUNCIONA EL JAVASCRIPT ENGINE

¿Que hace un JavaScript Engine?
- Recibe código fuente.
- Parsea el código y produce un Abstrct Syntax Tree (AST).
- Se compila a bytecode y se ejecuta.
- Se optimiza a machine code y se reemplaza el código base.

Una vez tenemos el AST ahora hay que convertirlo a Bytecode.

Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador. Es portatil.

Machine code es el más bajo nivel, es código binario qeu va directo al procesador, especifico para una arquitectura de procesador.

El profiler se situal en medio del bytecode y el optimizador.

Cada máquina virtual tiene sus particulares, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engin:
- SpiderMonke - Firefox
- Chackra - Edge
- JavaScriptChore - Safari
- V8 - Chrome

## EVENT LOOP

El Event Loop hace que JavaScript parezca ser multihilo a pesar de que corre en un solo porceso.

Dos estructuras de datos:
- Stack 
- Memory Heap

JavaScript se organiza usando las siguientes estructuras de datos:
- **Stack**: Va apilando de forma organizada las diferentes instrucciones qeu se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- **Memory Heap**: De forma desorganizada se guarda información de las variables y del scope.
- **Schedule Tasks**: Aquí se agregan a la cola, las tareas programadas para su ejecución.
- **Task Queue**. Aquí se agregan las tareas que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- **Micro Task Queue**: Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

De Scheduled tasks ---> Task Queue

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queue y el stack moviendo tareas entre estas dos estructuras.

# FUNDAMENTOS INTERMEDIOS

## PROMESAS

Para crear las promesas usamos la palabra clave Promise. El constructor de Promise recie un sólo argumento, un callback con dos parámetros, resolve y reject.
- **resolve**: Es la función a ejecutr cuando se resuelve.
- **reject**: Es la función a ejecutar cuando se rechaza.

La clase Promise tiene algunos métodos estáticos bastante útiles: 
- **Promise.all**: Da error si una de las promesas es rechazada.
- **Promise.race**: Regresa sólo la promesa que se resuelva primero.

Ejemplo:

> ./phase-one/ejercicios/promises.html

## GETTERS Y SETTERS

Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords set y get para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.

        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            media: this.media,
            get muted() {
                return this.media.muted
            },
            set muted(value) {
                this.media.muted = value
            }
        }

# FUNDAMENTOS AVANZADOS

## PROXY

El proxy sirve para interceptar la lectura de propiedades de un objeto (los get y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica qeu nosotros definamos.

Igual que los getters y setters es una de las funcionalidades más recientes del lenguaje pero podemos interceptar muchas más cosas.

Ejemplo:

> ./phase-one/ejercicios/proxy.html

## GENERATORS

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope. 

Algunas de sus caracteristicas:
- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que se ejecuten.
- Regresan un value y un boolean donde que define si ya terminaron.
- `yield` es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

Ejemplo:

> ./phase-one/ejercicios/generators.html

# APIS DEL DOM

## FETCH - CÓMO CANCELAR PETICIONES

Las peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

XMLHttpReques --> xhr --> Inicialmente y es algo laborioso.

Podría pasar que con fetch y las single page applications, que el usuario saliera de la página y despues de que salió regresara alguna petición fetch asíncrona, entonces sería mejor que si el usuario sale pues cancelar las peticiones fetch que andan por allí.

Ejemplo:

> ./phase-one/ejercicios/abort-fetch.html

## INTERSECTION OBSERVER

Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

Ejemplo:

> src/plugins/AutoPause.js

## VISIBILITY CHANGE

El VisibilityChange forma parte del API del DOM. Llamado **Page Visibility** y nos deja saber si el elemento es visible. Puede ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

Ejemplos:
- Hacer que el video se pause automáticamente cuando el usuario cambie de pestaña.
- Un sitio tienen un carrusel de imágenes que no debería avanzar a la siguiente diapositiva a no ser que el usuario esté viendo la página.
- Una aplicación que muestra un panel de información y no se quiere que se actualice la información del servidor cuando la página no está visible.
- Una página quiere detectar cuando se está precargando para poder mantener un recuento de vistas de página.
- Un sitio desea desactivar los sonidos cuando el dispositivo está en modo espera (el usuario presiona el botón de encendido para apagar la pantalla).

        document.addEventListener("visibilitychange", () => {
            console.log(document.visibilityState)
        })

Ejemplo:

> src/plugins/AutoPause.js

## SERVICE WORKERS

Sirven para hacer que nuestras aplicaciones funcionen offline.

Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.

Los service workers actúan esencialmente como proxy servers asentados entre las aplicaciones web, el navegador y la red (cuando está accesible). Están destinados, entre otras cosas, a permitir la creacipon de experiencias offline efectivas, interceptando peticiones de red y realizando la acción apropiada si la conexión de red está disponible y hay disponible contenido actualizado en el servidor. También permitirán el acceso a notificaciones tipo push y APIs de sincronización en segundo plano.

**Descarga, instalación y activación**

En este punto, su service worker observará el siguiente ciclo de vida:
1. Descarga.
2. Instalación.
3. Activación.

Ejemplo:
>
> sw.js --> Service Worker
>
> index.js --> Registro del service worker

# TYPESCRIPT

## INTRODUCCIÓN

TypeScript es un superset de JavaScript que añade tipos a nuestras variables, ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así qué lo vamos a transpilar a JavaScript usando Parcel.

> $ npm install -D parcel-bundler

Editar:
        "start": "parcel index.html ejercicios/index.html ejercicios/**/*.html"

Y agregar al final:
        "browserslist": [
            "last 1 Chrome version"
        ]

Ejecutar:
> $ npm remove live-server

Ejecutar:
> $ npm start

Añadir una carpeta en los ejercicios llamada typescript y dos archivos index.ts e index.html.

Detener el server y ejecutar:
> rm -rf .cache/ dist/

## TIPOS BÁSICOS

- **boolean**: Valor verdadero o falso.
- **number**: Números.
- **string**: Cadena de texto.
- **string[]**: Arreglo del tipo cadena de texto.
- **Array**: Arreglo multi-tipo, acepta cadenas de texto o números.
- **enum**: Es un tipo especial llamado enumeración.
- **any**: Cualquier tipo.
- **object**: Del tipo objeto.

## FUNCIONES

En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

## INTERFACES

Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

## CLASES

En las clases en TypeScript sí existen las propiedades privadas.

Ejemplo:

> ./ejercicios/typescript/index.html

## CONVERTIR EL PROYECTO A TYPESCRIPT

Ejemplo:

> src/index.ts 
>
> src/index.ts 
>
> src/MediaPlayer.ts 
> 
> src/plugins/AutoPlay.ts 
> 
> src/plugins/AutoPause.ts 

# PATRONES DE DISEÑO

## QUÉ ES UN PATRON DE DISEÑO

Son como recetas que resuelven problemas que nos encontramos frecuentemente en el diseño de software. Una solución para un problema dentro de un contexto (que ocurre muchas veces)

Una solución para un problema dentro de un contexto (recurrente)
- El contexto es la situación donde el patrón aplica.
    - Esta situación debe ser recurrente.
        - Ejemplo: Muchos objetos están interesados en el estado de otro objetos.
    - Se refiere a la meta que estás tratando de alcanzar dentro del contexto.
- El problema incluye todas las limitaciones que existen dentro de este contexto.
    - Ejemplo: Estos objetos quieren recibir notificaciones cuando cambie el estado, sin tener que solicitar información.
- Un diseño genérico que alcanza la meta dentro del contexto.
    - Ejemplo: Crear una clase donde cualquier objeto se puede suscribir y desuscribir a cambios de un estado
- Oberver Pattern

> https://every-layout.dev/
>
> https://mediaqueri.es/

Un poco de historia:

La idea de los patrones comienza en la arquitectura con Christopher Alexander.

Sus libros describen patrones para construir arquitectura dinámica, como casas, pueblos y ciudades. The timeless Way of Buiding, A Pattern Language.

El libro que comenzó el campo de patrones de diseño de software fue publicado en 1995. Describe los patrones fundamentales. Fue Design Patterns escrito por The Gang of Four.

**Beneficios**:
- Los patrones de diseño son una caja de herramientas de soluciones bien probadas a problemas comunes en diseño de software.
- Te proveen un lenguaje común que permite comunicarse de forma específica y eficiente.

**Crítica**:
- Los patrones de diseño son una forma de complejidad.
- Son soluciones a las limitaciones de un lenguaje de programación. Ejemplo: Java o C# no tienen funciones de alto nivel.
- Cuando lo que tienes es un martillo, todo te parece un clavo.

"Patterns, like all forms of complexity, should be avoided until the are absolutely necessary."
Jeff Atwood - blog.codinghorror.com/head-first-design-patterns

**Conclusión**:
- Siempre busca pensar en términos de diseño, no de patrones.
- Usa un patrón cuando hay una necesidad natural de usarlos.
- Si existe una alternativa más simple, prefierela.

## CATEGORÍAS DE PATRONES DE DISEÑO

Los patrones de diseño se pueden dividir en tres categorías:

1. **Patrones Creacionales**: Proveen diferentes formas de crear objetos.
    - Abstract Factory.
    - **Buider (constructor)**: Es usado para permitir la creación de una variedad de objetos complejos desde un objeto fuente. Separa la creación de un objeto complejo de su estructura, de tal forma que el mismo proceso de construcción puede servir para crear represntaciones diferentes. El $ en jquery es un ejemplo del patrón builder.
    - Factory method.
    - Prototype.
    - Singleton.

2. **Patrones Estructurales**: Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.
    - **Adapter**: Expone una interfaz externa simple y esconde una interfaz interna compleja.
    - Bridge.
    - Composite.
    - Decorator.
    - Facade.
    - Flyweight.
    - Proxy.

3. **Patrones de Comportamiento**: Gestiona algoritmos y responsabilidades entre objetos.
    - Chain of Responsibility.
    - Command.
    - Interpreter.
    - Iterador.
    - Mediador.
    - Memento.
    - Observer.
    - State.
    - Strategy.
    - Template Method.
    - Visitor.

## PATRÓN SINGLETON Y CASOS DE USO

Es un patrón que te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

Caso de Uso:
- **Mongoose**: Mongoose es una librería que te ayuda a interactuar con una base de datos de MongoDB. Te provee con una interfaz simple para buscar, escribir y validar datos. En este tipo de librería solo quieres tener una instancia.

## IMPLEMENTACIÓN DEL PATRÓN SINGLETON

Ejemplo:

> $ ejercicios/singleton/index.html

## ¿CÓMO FUNCIONA EL PATRÓN OBSERVER?

El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto. Cada observador expone un método de update que es usado por el sujeto para notificar cualquier cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:
- Newsletter.
- Sockets.
- Listeners en página web.

## IMPLEMENTACIÓN DEL PATRÓN OBSERVER

Ejemplo:

> $ ejercicios/observer/index.html

## CASOS DE USO DEL PATRON OBSERVER: REDUX

**Redux**:
- Una librería de manejo de estados.
- Inicializas un store con un estado y un reducer.
- Despacha acciones que modifican el estado.
- El store notifica que el estado cambió.

Hay una propuesta para añadir observable a la standard library.

## PATRÓN DECORATOR Y CASOS DE USO

"Una entidad de software (clase, módulo, función, etc.) debe quedar abierta para su extensión, pero cerrada para su modificación".

Añade nuevas responsabilidades a un objeto de forma dinámica permitiendo extender su funcionalidad sin tener que usar subclases.

Forma parte de la categoría de los patrones estructurales.

Tecnica MonkeyPatching:

        class MackbookPro {
            constructor(){ this.memory = 8}
            cost() { return 2399 }
        }

        function withMemory(ammount, computer) {
            let cost = computer.cost()
            computer.cost = function(){
                let memoryCost = Math.max((amount - 8)*25,0)
                return cost + memoryCost
            }
        }

        let macbook = new MacbookPro()
        withMemory(32, macbook)
        console.log(macbook.cost())

The JavaScript Way:
- Closures.
- Herencia Prototipal.
- Middleware
- ECMAScript Decorators (Stage 2)

Ejemplos: Lodash.memoize

        function measure(fn){
            let start = Date.now()
            fn()
            console.log(`Time: ${Date.now() - start}ms`)
        }

        function fibonacci(num) {...}

        let fastFibonacci = lodash.memoize(fibonacci)

        measure(() => fastFibonacci(100000)) // Time: 625ms
        measure(() => fastFibonacci(100000)) // Time: 0ms

## IMPLEMENTACIÓN DEL PATRÓN DECORATOR

Ejemplo:

> ejercicios/decorator/index.html

# PROYECTO: MEDIAPLAYER

## IMPLEMENTACIÓN DE PLUGIN DE ADS: DESPLEGANDO EN CONSOLA

> src/plugins/Ads/Ads.ts 
>
> src/plugins/Ads/index.ts

## IMPLEMENTACIÓN DE PLUGIN DE ADS: DESPLEGANDO EN PANTALLA

## PUBLICAR EN NPM

Necesitas una cuenta en npm

Reestructurar el proyecto para tener una división para el site y una para el media player.

En mediaplayer:
> $ npm init -y
>
> $ npm i -D typescript
>
> $ npm run build
>
> $ npm whoami
>
> "main": "lib/MediaPlayer.js",
>
> "build": "tsc ./src/MediaPlayer.ts ./src/plugins/AutoPause.ts ./src/plugins/AutoPlay.ts ./src/plugins/Ads/Ads.ts ./src/plugins/Ads/Index.ts --outDir ./lib",
>
> $ npm run build
>
> $ npm login
>
> $ npm publish --access=public

En la carpeta del website:
> $ npm install @kasteion/platzimediaplayer
>
> $ npm i
