# CONOCER LOS CONCEPTOS BÁSICOS DE NODEJS

## INSTALACIÓN DE NODE.JS

Si vas a trabajar con Node.js, lo primero que tienes que hacer es instalarlo en tu máquina desde la web de Node.js https://nodejs.org.

**node -v**

Este comando devolverá la versión de Node.js que se ha instalado. También nos habrá instalado npm, el gestor de paquetes. Para asegurarte de que está instalado, puedes ejecutar:

**npm -v**

Y te devolverá la versión de NP que hay instalada.

## NODE: ORÍGENES Y FILOSOFÍA

Node JS es una de las formas más rápidas de desarrollar y ejecutar código en el servidor de forma muy escalable. 

**¿Qué es NodeJS?**

Es un entorno de ejecución de JavaScript fuera del navegador. Se crea en 2009 y esta orientado a servidores. Se puede ejecutar para crear otro tipo de herramientas separadas de un explorador de internet, se puede utilizar en laptops o en servidores, para automatización, para IoT, para web scrapping, etc.

**Concurrencia**

Monohilo, con entradas y salidas asíncronas. Un proceso por cada núcleo del procesador. Esto permite tener muchísimas conexiones. 

**Motor V8**

Entorno de ejecución de JS creado por Google, y libre desde 2008. Escrito en C++. Convierte JS en código máquina en lugar de interpretarlo en tiempo real. El código es sólido porque si tenemos algún error nos enteramos al compilar y no conforme el lenguaje se va interpretando.

**Módulos**

Todo lo que sea sintaxis de programación, son módulos. Muchos módulos vienen por defecto en el paquete de Node. Puedes crear tus propios módulos.

**Orientado a eventos**

Hay un bucle de eventos que se ejecutan constantemente. Puedes orientar tu código de forma reactiva.


## EVENTLOOP: ASÍNCRONÍA POR DISEÑO

**¿Qué es el Event Loop?**

Un proceso con un **bucle** (infinito) que gestiona, de forma asíncrona, todos los eventos de tu aplicación. Todo lo que tenga que ejecutar lo manda de forma asíncrona y por eso sigue ejecutandose para seguír recibiendo peticiones.

Los eventos llegan a este loop desde el **Event Queue**, si el Event Loop puede procesarlo rápidamente entonces lo hace pero sí no lo manda al **Thread Pool** donde las transacciones se manejan de forma asíncrona. El **Thread Pool** levanta un hilo nuevo en nuestro procesador para ejecutar las acciones de Thread Pool y esto se ejecuta separado del Event Loop.

        Event Queue [Function, Request, Events]
                        |
                        |
                    Event Loop
                        |
                        |
        Thread Pool [DB Ops, Files, Slow Ops]



## MONOHILO: IMPLICACIONES EN DISEÑO Y SEGURIDAD

El problema de que sea monohilo es que al momento de dar un error esto detiene por completo nuestro proceso. Por lo tanto hay que estar muy al pendiente de todo lo que pasa en el código. Hay formas de escuchar los errores. Todas las funciones que no compruebe y que pueda decir esto podría fallar... lo que pueda pasar pasará y fallará....

Si no estamos pendiente de lo que viene en nuestros parametros... en el momento que venga algo que no esperabamos se rompe el programa y con él se rompe todo el hilo y con el hilo todo lo demás.

## VARIABLES DE ENTORNO

Para desde el script utilizar variables de entorno en el servidor.

Ejecutar:
> $ NOMBRE=Fredy WEB=www.kasteion.com node conceptos/entorno.js

## HERRAMIENTAS PARA SER MÁS FELICES: NODEMON Y PM2

https://nodemon.io/

Se instala con:
> $ npm install -g nodemon

Entonces puedo ejecutarlo:
> $ nodemon conceptos/entorno.js

Cualquier cambio que exista en entorno.js nodemon va a encargarse de reiniciar el server y empezar a ejecutar con el nuevo código. Perfecto para ambientes de desarrollo.

Se instala con:
> $ npm install -g pm2

Esto es para producción. Si algo se rompe en producción pm2 se encarga de reiniciar el server en prd.

Se inicia con:
> $ pm2 start conceptos/monohilo.js

PM2 tiene más opciones:
> $ pm2 start api.js -i 4 --> Para balancear varias instancias de un script api.js
>
> $ pm2 monitor --> para ver las metricas de la aplicación que está corriendo.
>
> $ pm2 status --> Para ver las aplicaciones que tenemos corriendo.
>
> $ pm2 logs --> Para ver los logs de lo que está corriendo en prd.
>
> $ pm2 stop monohilo --> Para detener el script monohilo
>
> $ pm2 stop 0 --> O con el número de proceso
>
> $ pm2 start 0 --> Vuelve a empezar el proceso

Aqui con pm2 puedo iniciar varios scripts y eso como para tener varias cosas corriendo en el backend de producción.

# CÓMO MANEJAR LA ASINCRONÍA

## CALLBACKS

En JavaScript, las funciones son ciudadanos de primera clase. Y al ser así puedo utilizarlas de cualquier manera. Por ejemplo: Como parámetros para otra función. Y eso es un callback

> $ nodemon ./async/callback.js

## CALLBACK HELL: REFACTORIZAR O SUFRIR

> $ nodemon ./async/callbackhell.js

## PROMESAS

> $ nodemon ./async/promises.js

## ASYNC/AWAIT

> $ nodemon ./async/async-await.js

# ENTENDER LOS MÓDULOS DEL CORE

Visita la documentación en: https://nodejs.org/

## GLOBALES

En Node tenemos el objeto **global** que contiene los metodos y propiedades básicas que usamos en Node, ej.: (setTimeOut)

> **global** es un equivalnete de this en el navegador.

En node **this** es un alias de global

        this === global // true

Algunos metodos que se incluyen en el **global** object son:
- **setTimeOut**: se encarga de llamar a otra función despues de un periodo de tiempo.
- **setInterval**: llama a otra función cada intervalo de tiempo.
- **setImmediate**: Equivalente a setTimeOute pero con tiempo 0.
- **clearTimeOut**: detiene un setTimeOut.
- **clearInterval**: detiene un setInterval.

## FILE SYSTEM

El módulo de filesystem nos permite acceder a archivos en nuestro sistema.

## CONSOLE

Con console podemos imprimir todo tipo de valores por nuestra terminal:

- **console.log**: Recibe cualquier tipo y lo muestra en la consola.
- **console.info**: Es equivalente a log pero es usado para informar.
- **console.error**: Es equivalente a log pero es usado para errores.
- **console.warn**: Es equivalente a log pero es usado para warning.
- **console.table**: Muestra una tabla a partir de un objeto.
- **console.count**: Inicia un contador autoincremental.
- **console.countReset**: Reinicia el contador a 0.
- **console.time**: Inicia un cronometro en ms.
- **console.timeEnd**: Finaliza el cronometro.
- **console.group**: Permite agrupar errores mediante identación.
- **console.groupEnd**: Finaliza la agrupación.
- **console.clear**: Limpia la consola.

## ERRORES (TRY/CATCH)

> $ nodemon ./modules/errores.js

## PROCESOS HIJO

Node JS, además de manejar sus propios procesos puede levantar otros procesos, iniciar procesos hijos. Como al mandar las tareas con setTimeout se crea un nuevo proceso, aquí tambien se pueden iniciar otros procesos.

Podemos levantar otro proceso con node, con python, con variables del sistema, con scripts, con lo que nos de la gana.

> $ nodemon ./modules/procesohijo.js

## MÓDULOS NATIVOS EN C++

1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

> $ npm i -g node-gyp

Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en https://nodejs.org/api/addons.html#addons_hello_world

3. Crea un `binding.gyp` en la raíz del módulo.

4. En la carpeta raíz del módulo ejecuta:

> $ node-gyp configure

5. Y si todo bien ejecuta:

> $ node-gyp build

## HTTP

> $ nodemon modules/http.js

## OS

> $ nodemon modules/os.js

## PROCESS

No es necesario hacer el require de process... porque viene dentro de los globals.

> $ nodemon modules/process.js

# UTILIZAR LOS MÓDULOS Y PAQUETES EXTERNOS

## GESTIÓN DE PAQUETES: NPM Y PACKAGE.JSON

NPM es un gestor de paquetes. NPM nos permite tener paquetes para practiamente todo.
 
Por ejemplo: Hay un paquete para saber si un número es par o impar... is_odd

Hay que balancear... es importante utilizar los modulos. Porque ya habrán soluciones hechas por otros y así no reinventamos la rueda. Al mismo tiempo puede llegar el caso de que nuestro proyecto termine dependiendo de cientos y cientos de dependencias y con eso traernos otros tantos problemas.

> $ nodemon paquetes/npm/index.js 

## CONSTRUYENDO MÓDULOS: REQUIRE E IMPORT

> $ nodemon paquetes/modulo/index.js

> $ node --experimental-modules paquetes/modulo/es6/index.mjs

## MÓDULOS ÚTILES

> $ npm init -y

1. **bcrypt**

Para encriptar (digamos passwords) y también para comparar el hash.

> $ npm install bcrypt

2. **moment**

Para trabajar con fechas de manera más sencilla que con javascript puro.

> $ npm install moment

3. **sharp**

Para trabajar con imagenes.

> $ npm install sharp

## DATOS ALMACENADOS VS EN MEMORIA

Cuando vas a escribir en memoria es muy rápido. Sin embargo cuanto tienes que escribir en disco hablamos de procesos mucho más lentos pero mucha más información y de forma persistente.

Una cosa que se puede hacer es leer la información una sola vez e irla pasando de función en función en función y luego, al finalizar el proceso entonces sí escribir a disco.

Porque si estamos leyendo de disco, procesando, escribiendo a disco. Y la siguiente función lee, procesa, escribe. Y así de función en función. Entonces nuestro proceso se vuelve muy lento.

## BUFFERS

Buffers son datos raros en hexadecimal.

Los Buffers se vuelven útiles cuando trabajamos con Streams.

## STREAMS

Los streams son el paso de datos de un lado a otro:

Hay Streams de:

1. Lectura: Voy leyendo desde un stream para procesarlos.

2. Escritura: Voy escribiendo desde un stream hacia un archivo.

3. De doble sentido: Se puede trabajar leyendo y escribiendo.

# CONOCER TRUCOS QUE NO QUIEREN QUE SEPAS

## BENCHMARKING (CONSOLE TIME Y TIMEEND)

> $ nodemon trucos/benchmarking.js

## DEBUGGER

> $ node --inspect modulos/http.js

En Chrome abrir la dirección:

> chrome://inspect

## ERROR FIRST CALLBACK

Todas las funciones por defecto tienen el error como primer parámetro. Esto es una conveción porque todo puede fallar. Otro de los patrones muy comúnes es tener el callback como ultima función (aunque no siempre).

En todos los módulos que creemos deberíamos recibir como primer parametro el error.

El throw error no funciona bien con funciones asincronas. Pero puede ser genial para funciones síncronas. Pero el return nos puede servir efectivamente para funciones asíncronas.

# MANEJAR HERRAMIENTAS CON NODE

## SCRAPING

> $ cd herramientas/scrapping
>
> $ npm init -y
>
> $ npm install puppeteer

Puppeteer va a descargar chromium para utilizarlo de forma automatizada.

## AUTOMATIZACIÓN DE PROCESOS

Hay muchas herramientas de automatización de procesos. Algunas de ellas pueden ser Webpack que está orientada a la automatización de el proceso de empaquetado de aplicaciones web. Pero tambien están herramientas como gulp y grunt con las que se puede automatizar casí cualquier cosa.

> $ cd herramientas/automatizacion
>
> $ npm init -y
>
> $ npm install gulp gulp-server-livereload
>
> También se podría instalar global con `npm install -g gulp`

## APLICACIONES DE ESCRITORIO

Uno de los paquetes de Node más potentes se llama Electron y nos permite convertir webs en aplicaciones de escritorio. Visual Studio Code, Slack, Microsoft Teams estan hechas con Electron.

> $ npm init -y
> 
> $ npm install electron