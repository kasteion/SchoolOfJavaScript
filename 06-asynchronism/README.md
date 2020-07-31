# CONCEPTOS DE ASINCRONISMO EN JAVASCRIPT

- Callback
- Promesas
- Async Await

## INTRODUCCIÓN AL ASINCRONISMO

Javascript es un lenguaje de programación asíncrono y no bloqueante con un manejador de eventos conocido como el event loop. Implementado en un único hilo para sus interfaces de entrada y salida.

**¿Qué es asincronismo?**

Es una acción que no ocurre al mismo tiempo.

Analogía con un aeropuerto: JavaScript sería como un aeropuerto con una única pista de aterrizaje.

- **Thread**: Pista de aterrizaje
- **Input**: Cuando un avión aterriza
- **Output**: Cuando un avión despega
- **Event Loop**: Torre de Control

**Memory Heap**: Memoria compartida para todas nuestras aplicaciones.

**Pila de ejecución** --> **Funciones** --> **CallBack** --> **Cola de Tareas**

**Cola de Tareas**: Cuando la pila de ejecución queda vacía, entonces el event loop trabaja la cola de tareas.

## PRESENTCIÓN DEL RETO

Las principales estructuras que utiliza JavaScript para trabajar con asincronismo son Callback, Promesas y Async Await.

Utilizando la Rick and Morti API

1. Obtener el número de personajes de la serie
2. Obtener el nombre del primer personaje
3. Obtener la dimensión a la cual pertenece un un tercer llamado.

Utilizaremos el API 3 veces, la primera vez con callbacks, la segunda con promesas y la tercera con async await.

# DESARROLLAR SOLUCIONES UTILIZNADO ASINCRONISMO

## DEFINICIÓN DE LA ESTRUCTURA DE UN CALLBACK

Una función que al crearla le pasamos como parametro una segunda función que luego ejecutamos durante el flujo de ejecución de la primera función.

## PETICIONES A APIS USANDO CALLBACKS

Instalar xmlhttprequest como dependencia al proyecto:
> $ npm install xmlhttprequest --save

        let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
        
        function fetchData(url_api, callback){
            let xhr = new XMLHttpRequest()
            xhr.open('GET', url_api, true)
            xhr.onreadystatechange = function(event) {
                if(xhr.status === 4){
                    if (xhr.status === 200){
                        callback(null, JSON.parse(xhttp.responseText))
                    } else {
                        const error = new Error(`Error ${url_api}`)
                        return callback(error, null)
                    }
                }
            }
            xhr.send()
        }

Ejecutar:
> $ npm callback

## MÚLTIPLES PETICIONES A UN API CON CALLBACKS

Ejecutar:
> $ npm callback:challenge

## IMPLEMENTANDO PROMESAS

Las promesas utilizan el objeto Promise para ser implementadas.

Dependen de algo que va a suceder (Promesa), esta proemsa puede suceder en el futuro o nunca.

Es una función que devuelve una promesa con dos callbacks...
un resolve y un reject.

Ejecutar:
> $ npm promises

## RESOLVER EL PROBLEMA CON PROMESAS

Ejecutar:
> $ npm promises:challenge

## CONOCIENDO ASYNC/AWAIT

Ejecutar:
> $ npm async

## RESOLVER PROMEA CON ASYNC/AWAIT

Ejecutar:
> $ npm async:challenge

# COMPRENDER LAS DIFERENCIAS ENTREA LAS ESTRUCTURAS ASINCRONAS

## CALLBACKS VS PROMESAS VS ASYNC/AWAIT

**Callbacks**
- **Ventajas**:
    - Es 'Simple' de implementar.
    - Son universales... corren en cualquier navegador. (Garantía de uso).
- **Desventajas**:
    - Composición un poco tosca y vamos anidando cada vez más. Esto puede llegar a convertirse en un callback hell lo cual dificulta su mantenimiento por el desarrolador.
    - Tiene un flujo poco intuitivo.
    - No tiene muy buen manejo de errores.

**Promesas**
- **Ventajas**: 
    - Facilmente enlazable con los `.then(return).then(return)`
    - Es poderoso, una gran capacidad para manejar asincronismo.
- **Desventajas**:
    - No maneja excepciones sino que tenemos un catch al final.
    - Podemos llegar a ser propensos a errores si nosotros no retornamos en el siguiente valor.
    - Puede ser que necesitemos un polyfill para correr en todos los navegadores. Tenemos que trasponer el código con algo como babel.
 
**Async Await**
- **Ventajas**:
    - Son más fáciles de leer y de entender.
- **Desventajas**:
    - Igual que las promesas podemos necesitar un polyfill y con esto se vuelve más pesada nuestra construcción.