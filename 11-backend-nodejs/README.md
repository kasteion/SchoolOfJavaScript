# TU PRIMERA EXPERIENCIA CON NODE.JS

## ¿QUÉ ES NODE.JS?

Node.js es un entorno de ejecución para JavaScript construido con el motor JavaScript V8 de Chrome. JavaScript es un lenguaje interpretado pero en Node.js tenemos algo llamado el JIT Compiler que es una especie de monitor que optimiza fragmentos de código que son ejecutados frecuentemente.

Un entorno de ejecución es una capa encima del sistema operativo que ejecuta una pieza de software. Como consume memoria, como accede a las variables y cada cuanto corre el Garbage Collector.

Chrome V8 es un motor opensource de JavaScript desarrollado por the Chromium Project para Chrome y Chromium. Chrome V8 es el que tiene el JIT Compiler.

## ¿PARA QUÉ SIRVE?

Con Node.js lo que se hizo fue tomar el motor V8 de Chrome y creo un entorno de ejecución para poder ejecutar código JavaScript en el servidor.

2009 - Ryan Dahl muestra al mundo Node.js
2011 - Linked In usa NodeJS en Producción.
2013 - Ghost y Paypal saca Cracking
2015 - IOJS NodeJS Fundation
2017 - Mainstream +8 Millones de instancias funcionado

## DIFERENCIAS ENTRE NODE.JS Y JAVASCRIPT

En JavaScript del lado del cliente tenemos el DOM y CSSDOM así como el objeto window para manipular los elementos de nuestra página además una serie de APIs, aquí unos ejemplos.
- fetch
- SessionStorage y LocalStorage
- canvas
- bluetooth
- audio
- web authentication

Mientras que en Node.js no tenemos un DOM ni un objeto window, lo que sí tenemos son una serie de módulos que nos permite interactuar con los recursos de la máquina como el sistema operativo y el sistema de archivos, por ejemplo:
- os
- fs
- http
- util
- debugger
- stream
- events

## INSTALACIÓN DE NODE.JS

https://nodejs.org/es/

## ARQUITECTURA ORIENTADA A EVENTOS

Los eventos nos permiten manejar código asíncrono de una mejor manera.

Asincronísmo:

> $ node learning-node/arquitectura-node/callback.js
>
> $ node learning-node/arquitectura-node/promises.js
>
> $ node learning-node/arquitectura-node/async-await.js
>
> $ node learning-node/arquitectura-node/event-emitter.js

## NODEJS PARA LA WEB

Ejemplo:
> $ node learning-node/node-web/server.js
>
> $ node learning-node/node-web/echo-server.js

**Reto - Crea un servicio que reciba tu fecha de nacimiento y devuelva el día en que naciste**

> $ node learning-node/node-web/reto.js

# MANEJO Y USO DE STREAMS CON NODE.JS

https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

## INTRODUCCIÓN A STREAMS

Los Streams son una colección de datos como los arrays o las cadenas de texto (strings) sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podmeos manejar una gran cantidad de datos de manera óptima.

Ejemplo:
> $ node learning-node/streams/big-file.js
>
> $ node learning-node/streams/file-server.js
> -- Observar la ram del proceso al cargar el archivo de esta forma
>
> $ node learning-node/streams/stream-server.js
>
> -- La ram no se utiliza tanto de esta forma.

## READABLE Y WRITABLE STREAMS

Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente.

Tienen eventos porque los heredan de la clase **EventEmitter**.

**Readable**
- **Eventos**:
    - **data**: Se dispara cuando recibe datos.
    - **end**: Se dispara cuando termina de recibir datos.
    - **error**: Se dispara cuando hay un error.
- **Funciones**
    - **pipe**
    - **unpipe**
    - **read**
    - **push**

**Writeable**
- **Eventos**
    - **drain**: Se dispara cuando emite datos.
    - **finish**: Se dispara cuando termina de emitir.
    - **error**: Se dispara cuando hay un error.
- **Funciones**
    - **write**
    - **end**

Ejemplos:

> $ node learning-node/streams/readable-stream.js
>
> $ node learning-node/streams/writable-stream.js

## DUPLEX Y TRANSFORMS STREAMS

Ambos sirven para simplificar nuestro código:
- **Duplex**: Implementa los métodos write y read a la vez.
- **Transform**: Es similar a Duplex pero con una sintaxis más corta.

Simplifican nuestro código porque no necesito crear un readable stream y un writable stream y utilizarlos en el código.

Ejemplo:
> node learning-node/streams/duplex.js
>
> node learning-node/streams/transform.js

**Reto - Escribir un progrma que reciba un stream y lo devuelva transoformado en Cammel Case**

> node learning-node/streams/reto.js

# USO DE UTILIDADES DE NODE.JS

## SISTEMA OPERATIVO Y SISTEMA DE ARCHIVOS

Node viene con varias utilidades incorporadas, entre estos módulos básicos están la de sistema operativo y la del sistema de archivos:
- **os**: Sirve para consultar y manejar los recursos del sistema operativo.
- **fs**: Sirve para administrar (copiar, crear, borrar etc) archivos y directorios.

Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona pero también se puede ejecutar de forma síncrona, por ejemplo el método readFile() tiene su versión síncrona readFileSync().

Ejemplos:
> $ node learning-node/utils/os.js
>
> $ node learning-node/utils/sync-files.js learning-node/utils/naranja.txt
>
> $ node learning-node/utils/async-files.js learning-node/utils/naranja.txt

## ADMINISTRAR DIRECTORIOS Y ARCHIVOS

Ejemplos:

> $ $ node learning-node/utils/read-dir.js  
> 
> $ node learning-node/utils/make-dir.js
>
> $ node learning-node/utils/copy-file.js

## CONSOLA, UTILIDADES Y DEBUGGING

Por defecto todo lo que imprimimos con cosole.log se va por el stdout y todo lo que imprimimos con cosole.error se va por el stderr

Ejemplos:
> $ node learning-node/utils/console-class.js
>
> $ node learning-node/utils/console-utils.js
>
> $ node learning-node/utils/util-deprecate.js
>
> $ node --inspect learning-node/utils/console-class.js

## CLUSTER Y PROCESOS HIJOS

Una sola instancia de Node.js corre un solo hilo de ejecución. Para tomar ventaja de los sistemas con multiples core, necesitamos lanzar un cluster de procesos de Node.js para manejar la carga.

El módulo cluster nos permite la creación fácil de procesos hijos que comparten el mismo puerto del servidor. Veamos un ejemplo en código:

> $ node learning-node/utils/cluster.js

Si corremos nuestro archivo de Node.js ahora compartirá el puerto 8000 con los diferentes workers.

En Windows, todavía no es posible establecer un nombre de proceso server en un worker.

https://pinchito.es/2013/modo-cluster

https://nodeschool.io/

# CREA TU PRIMER PROYECTO EN EXPRESS.JS

## ¿QUÉ ES EXPRESS.JS Y PARA QUÉ SIRVE?

Express.js es un framework para crear **Web Apps**, **Web APIs** o cualquier tipo de **Web Services**. Es similar a lo que hacen otros frameworks como Koa o Api JS. Es libre bajo la licencia MIT y fue inspirado en el framework Sinatra (Ruby) escrito por TJ Holowaychuk.

En 2014 los derechos de express fueron adquiridos por una empresa llamada StrongLoop, en 2015 IBM adquirió StrongLoop y en 2016 IBM anunción que express sería dirigido por la NodeJS Fundation.

Express es muy liviano y minimalista además de ser extensible a través de Middlewares. Esto hace posible salír a producción con algo que ya es minimalista y bastante ligero y optimizado. 

Express tiene un Template Engine como Pub, Mustache o Handlebar pero uno puede hacer su template engine. 

Express maneja un sistema de rutas.

Los Middlewares interceptan el request y el response para ejeuctar una acción en medio. Los Plugins se manejan como middleware.

## CREANDO TU PRIMER SERVIDOR CON EXPRESS.JS

Se crean estos comando en el package.json:

        "scripts": {
             "test": "echo \"Error: no test specified\" && exit 1",
            "dev": "DEBUG=app:* nodemon index",
            "start": "NODE_ENV=production node index"
        },

Se crea .eslintrc.json
        {
            "parserOptions": {
                "ecmaVersion": 2018
            },
            "extends": ["eslint:recommended", "prettier"],
            "env": {
                "es6": true,
                "node": true,
                "mocha": true
            },
            "rules": {
                "no-console": "warn"
            }
        }

Se crea prettierrc.json
        {
            "tabWidth": 2,
            "semi": true,
            "singleQuote": true
        }

Se instala:
> $ npm i express dotenv
> $ npm i --save-dev eslint eslint-config-prettier eslint-plugin-prettier prettier
> $ npx mrm lint-staged

La configuración está en: config/index.js

El servidor express está en index.js

## REQUEST OBJECT

El objet `req` (Request) es Express representa el llamado HTTP y tiene diferentes propiedades del llamado, como la cadena de texto query (Query params), los parámetros de la URL (URL params), el cuerpo (Body), los encabezados (HTTP headers), etc.

Para acceder al `req` basta con acceder al primer parámetro de nuestros router handlers (router middleware) ó middleware.

Como por ejemplo así lo hemos visto siempre:

app.get("/user/:id", function(req, res) {
    res.send("user " + req.params.id);
})

**req.body**

Contiene los pares de llave-valor de los datos enviados en el cuerpo (body) del llamado (request). Por defecto es `undefined` pero es establecido cuando se usa algún "body-parser" middleware como `body-parser` y `multer`.

En **Postman** cuando hacemos un request y enviamos datos en la pestaña **Body**, estos middlewares son los que nos ayudan a entender el tipo de datos que vamos a recibir en el `req.body`.

Aquí podemos ver como se pueden usar estos middlewares para establecer el valor del `req.body`:

        const app = requires('express')();
        const bodyParser = require('body-parser')
        const multer = require('multer')
        const upload = multer(); // Para datos tipo multipart/form-data

        app.use(bodyParser.json()); // Para datos tipo application/json
        app.use(bodyParser.urlencoded({extended: true})) // Para datos tipo application/x-www-form-urlencoded

        app.post('/profile', upload.array(), function(req, res, next) { 
            console.log(req.body)
            res.json(req.body)
        })

> Más información sobre los diferentes formatos que puede tener el body: https://developer.mozilla.org/es/docs/Web/HTTP/Methods/POST

**req.params**

Esta propiedad contiene un objeto con las propiedades equivalnetes a los parámetros nombrados en la ruta. Por ejemplo, si tenemos una ruta de la forma `/user/:name` entonces la propiedad `name` está disponible como `req.params.name` y allí podremos ver su valor. Supongamos que llamaramos a la ruta con `/user/glrodasz`, entonces el valor de `req.params.name` sería `glrodasz`. Este objeto por defecto tiene el valor de un objeto vacío {}.

        // GET /user/glrodasz
        req.params.name;
        // => "glrodasz"

**req.query**

Esta propiedad contiene un objeto con las propiedades equivalentes a las cadenas de texto query de la ruta. Si no hay ninguna cadena de texto query tendrá como valor por defecto un objeto vacío {}.

        req.query.q;
        // => "tobi ferret"

        // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
        req.query.order;
        // => "desc"

        req.query.shoe.color;
        // => "blue"

        req.query.shoe.type;
        // => "converse"

Más información sobre los query strings en: https://es.wikipedia.org/wiki/Query_string y https://tools.ietf.org/html/rfc3986#section-3.4

## RESPONSE OBJECT

El objeto `res` representa la respuesta HTTP que envía una aplicación en Express.

Para acceder al `res` basta con acceder al segundo parámetro de nuestros `router handlers` (router middleware) o middleware.

Como por ejemplo así lo hemos visto siempre:

        app.get("/user/:id", function(req, res) {
            res.send("user " + req.params.id)
        })

**res.end()**

Finaliza el proceso de respuesta. Este método viene realmente del core de Node.js, específicamente del método `resposne.end()` de `http.ServerResponse`.

Se usa para finalizar el request rápidamente sin ningún dato. Si necesitas enviar datos se debe usar `res.send()` y `res.json()`

        res.end();
        res.status(404).end()

**res.json()**

Envía una respuesta JSON. Este método envía una respuesta (con el content-type correcto) y convierte el parámetro enviado en una cadena de texto JSON haciendo uso de `JSON.stringify()`.

El parámetro puede ser cualquier tipo de JSON, incluido un objeto, un arreglo, una cadena de texto, un boolean, número, null y también puede ser usado para convertir otros valores a JSON.

        res.json(null)
        res.json( { user: "tobi" })
        res.status(500).json({error: "message"})

**res.send()**

Envía una respuesta HTTP. El parámetro `body` puede ser un objeto tipo Buffer, una cadena de texto, un objeto, o un arreglo. Por ejemplo:

        res.send(Buffer.from("whoop"))
        res.send({some: "json"})
        res.send("<p>some html</p>")
        res.status(404).send("Sorry, we cannot find that!")
        res.status(500).send({ error: "something blew up" })

**Reto - Crear un servidor express que reciba un año y responda si es bisiesto o no**

> node movies-api/reto.js

# APRENDE A CREAR UN API CON REST

## ANATOMÍA DE UNA API RESTFUL

REST, significa Representational State Transfer. Es un estilo de arquitectura para construír web services. No es un estándar pero sí existe una especificación creada por Roy Fielding, de la Apache Software Fundation.

    URL:    /api/movies     /api/movies/:id
    GET     LIST            RETRIEVE
    PUT     REPLACE         REPLACE/CREATE
    PATCH   N/A             UPDATE
    POST    CREATE          N/A
    DELETE  DELETE          DELETE

## ESTRUCTURA DE UNA PELÍCULA CON MOOCKARU

Mockaroo* es un servicio que nos permite crear datos simulados a partir de una estructura, por ejemplo para generar la estructura de nuestra película:

        {
            id: 'd2a4a062-d256-41bb-b1b2-9d915af6b75e',
            title: 'Notti bianche, Le (White Nights)',
            year: 2019,
            cover: 'http://dummyimage.com/800x600.png/ff4444/ffffff',
            description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
            duration: 66,
            contentRating: 'G',
            source: 'https://ovh.net/semper/rutrum/nulla/nunc.jsp',
            tags: [
            'Action|Adventure',
            'Action|Adventure|Thriller',
            'Horror|Western',
            'Horror|Thriller',
            'Comedy|Romance|Sci-Fi',
            'Adventure|Animation|Children|Comedy|Fantasy',
            'Drama'
            ]
        }

Luego seleccionamos el número de filas (rows) que queremos generar y elegimos el formato, en este caso será de tipo JSON. Podemos hacer click en preview para ver cómo queda y finalmente para descar los datos hacemos click en **Download Data**.

## IMPLEMENTANDO UN CRUD EN EXPRESS.JS

CRUD viene de las siglas Create, Retrieve, Update, Delete.

Vamos a especificar las siguientes rutas:

GET /movies {
    "response": "200",
    "data": [{}, {}, {}]
}

GET /movies?tags[]=horror {
    "response": "200",
    "data": [{}, {}, {}]
}

GET /movies/:id {
    "response": "200",
    "data": {}
}

POST /movies {
    "response": "201",
    "data": {}
}

PATCH /movies/:id {
    "response": "200",
    "data": {}
}

DELETE /movies/:id {
    "response": "200",
    "data": {}
}

## MÉTODOS IDEMPOTENTES DEL CRUD

https://www.gitignore.io --> node linux windows mac --> Está página crea un gitignore recomendado depende del proyecto.

## IMPLEMENTANDO UNA CAPA DE SERVICIOS

MVC se queda corta en las aplicaciones modernas, no basta solo con tener modelo, vista y controlador.

 -------------     ----------     -----------
| Controllers |   | Services |   | Librerias  |
| ------------|---|          |---| (Lib)      |
| Middlewares |   |          |   | Modelo     |
| Router      |   |          |   |            |
 -------------     ----------     ------------
      ||                Business        API
      API               Logic           DATABASE
      ||                                CLOUD DB
      JSON

**Reto - Implementar método patch**

> node movies-api/index.js

# CÓMO CONECTARSE CON LIBRERÍAS EXTERNAS EN EXPRESS.JS

## CREACIÓN DE UNA BD EN MONGOATLAS

Usaremos Mongo Atlas para conectarnos a una instancia de MongoDB.

La URI de mongodb tiene estra estructura:

mongodb+srv://DB_USER:DB_PASSWORD@DB_HOST/DB_NAME

https://www.mongodb.com/cloud/atlas

Aquí se puede crear un cluster de mongdb... Un cluster de 3 instancias.

mongodb+srv://db_user_platzivideos:DB_PASSWORD@cluster0-higgd.mong.../DB_NAME

Es un cluster compartido y es gratuito.

## CONEXIÓN A MONGOATLAS UNA INSTANCIA DE MONGODB

> mongo.js

## CONEXIÓN CON ROBO3T Y MONGODB COMPASS A UNA BD

Robo 3T y MongoDB Compass son dos clientes con interfaz gráfica que nos permiten conectarnos a nuestras instancias de Mongo DB y manipularlas de una manera más fácil. Con ambos clientes nos podemos conectar a una instancia de cualquier servidor, inclusive a una instancia de MongoDB Atlas.

Para descargarlos se puede usar los siguientes enlaces respectivamente:

- https://robomongo.org/download
- https://www.mongodb.com/download-center/compass

**Conexión usando MongoDB Compass**

Si nosotros copiamos el Mongo URI desde Mongo Atlas podemos conectarnos fácilmente con MongoDB Compass:

1. Iniciamos sesión en MongoDB Atlas https://www.mongodb.com/cloud/atlas
2. Nos vamos a la sección de **Clusters** en el menú lateral izquierdo.
3. Seleccionamos **connect** en nuestro cluster sandbox.
4. Seleccionamos la opción **Connect with MongoDB Compass**.
5. Si no tenemos MongoDB Compass instalado, podemos descargarlo desde allí. Si ya lo tienes instalado continua con el paso 6.
6. Le damos clic en el botón copy para copiar el Mongo URI.
7. Abrimos **MongoDB Compass** e inmediatamente va a reconocer nuestra URI que tenemos en el portapapeles.
8. Hacemos clic en **yes** para que nos cree una nueva conexión, pero es necesario introducir el **password** del usuario de la base de datos.
9. Podemos ponerle un nombre favorito y darle en **Create favorite** y luego en **Connect**.

**Conexión usando Robo 3T**

Para poder conectarnos a MongoDB Atlas haciendo uso de Robo 3T, necesitamos copiar el Mongo URI:

1. Inicamos sesión en MongoDB Atlas https://www.mongodb.com/cloud/atlas
2. Nos vamos a la sección de **Clusters** en el menu lateral izquierdo.
3. Seleccionamos **connect** en nuestro cluster sandbox.
4. Seleccionamos la opción **Connect with MongoDB Compass**
5. Si no tenemos MongoDB Compass instalado, podemos descargarlo de alí. Si ya lo tenemos instalado continua con el paso 6. 
6. Le damos click en el btón **copy** para copiar el Mongo URI. 
7. Abrimos **Robot 3T** y hacemos click arriba en la parte izquierda en el link de **create**.
8. En la parte de abajo hay un input donde pegaremos el Mongo URI y hacemos click en **From SRV**
9. Le cambiamos el nombre a nuestra conexión en **Name** por el que consideres más conveniente.
10. Nos vamos a la pestaña **Authentication** y actualizamos le **password** por el password correcto del usuario.
11. Hacemos click en **test** en la parte inferior izquierda para probar que todo esta OK, y luego podemos hacer click en **save** y **connect**.

## IMPLEMENTACIÓN DE LAS ACCIONES DE MONGODB

Los métodos de MongoDB para implementar un CRUD son:

- Create
    - insertOne(document, options)
- Read
    - find(query, projection)
    - findOne(query, projection)
- Update
    - updateOne(filter, update, options)
- Delete
    - deleteOne(filter, options)

## CONEXIÓN DE NUESTROS SERVICIOS CON MONGODB

> mongo.js y services/movies.js

# CONOCE COMO FUNCIONAN LOS MIDDLEWARE EN EXPRESS.JS

## ¿QUÉ ES UN MIDDLEWARE? CAPA DE MANEJO DE ERRORES USANDO UN MIDDLEWARE

Un middleware es una pieza de software que está en medio de otras dos. Se le conoce como software glue porque conecta dos piezas de software. 

En express, la manera en que funcionan los middlewares es mediante la firma del request object (HTTP request argument called "req" by convetion), response object (HTTP response argument called "res" by convetion) y la funcionalidad next (Callback argument, called "next" by convention).

        function(req, res, next){
            next()
        }

En el middleware podemos cambiar el req, cambiar el res o ejecutar el siguiente middleware llamando a next. Si le mandamos un valor a next se ejecutan los middlewares de error.

Los middlewares en next de formato error tienen una firma diferente:

        function errorHandler(err, req, res, next){
            res.status(err.status || 500)
            res.json({ error: err});
        }

## MANEJO DE ERRORES ASÍNCRONOS Y SÍNCRONOS EN EXPRESS

El manejo de errores en Express es el proceso de capturar un error de manera asíncrona como síncrona. Por defecto Express viene con un manejador de errores por defecto, así que no es necesario escribir uno para empezar a usarlo.

Los errores que ocurren de manera síncrona dentro de un manejador de rutas o un middleware no requiren trabajo extra. Si un código síncrono lanza un error express automáticamente capturará el error. Por ejemplo:

        app.get("/", function(req, res){
            throw new Error ("BROKEN"); // Express capturara este error por sí solo.
        })

Pero para errores que se retornan desde funciones asíncronas invocadas dessde un manejador de ruta o un middleware, es necesario pasar el error como argumento a la función next(), de esta manera Express capturará el error y lo procesará. Por ejemplo:

        app.get("/", function(req, res, next) {
            fs.readFile("/file-does-not-exist", function(err, data){
                if (err){
                    next(err)
                } else {
                    res.send(data)
                }
            })
        })

Es responsabilidad de nosotros capturar errores que puedan ocurrir en código asíncrono invocado desde un manejador de ruta o middleware para que Express lo procese. Por ejemplo:

        app.get("/", function(req, res, next){
            setTimeout(funciton(){
                try {
                    throw new Error("BROKEN")
                } catch(err){
                    next(err)
                }
            }, 100)
        })

El ejemplo de arriba usa un bloque try...catch para capturar los erroes en el código asíncrono y pasarlo a Express. Si el bloque try...catch fuese omitido, Express no podría capturar el error debido a que no es parte de un manejador síncrono de código. 

Cuando se usan funciones que retornan promesas, puedes simplemente proveer la funcionalidad **next** al final del manejador catch de la promesa y Express automáticamente capturará el error. Por ejemplo:

        app.get("/", function(req, res, next){
            Promise.resolve()
                .then(function(){
                    throw new Error("BROKEN")
                })
                .catch(next) // Errores serán pasados a Express.
        })

## CAPA DE VALIDACIÓN DE DATOS USANDO UN MIDDLEWARE

La capa de validación de datos es necesaria porque los endpoints no sabe que datos les estamos enviando. Mediante este middleware podemos especificar esquemas. De esta forma si el usuario manda un tipo de dato incorrecto podemos indicarselo. Para esto vamos a crear una funcionalidad llamada validationHandler.

        function validationHandler(schema, check = "body"){
            return function(req, res, next){
                const error = validate(req[check], schema)
                error ? next(New Erro(error)) : next()
            }
        }

## ¿QUÉ ES JOI Y BOOM?

Joi y Boom son tecnologias del ecosistema de Hapi JS pero son tan buenas que las vamos a implementar como un middleware en nuestra aplicación de express.

Joi es un Object Schema Validation para ayudarnos a validar los esquemas para la base de datos.

https://github.com/sideway/joi

Boom (HTTP-friendly error objects) es un manejador de errores de manera más comprensible.

https://github.com/hapijs/boom
https://github.com/hapijs/boom/blob/master/API.md

## IMPLEMENTANDO BOOM

npm install @hapi/boom

Boom nos porvee una serie de utilidades para retornar errores HTTP, cada utilidad es un objeto de respuesta de tipo Boom que incluye las siguientes propiedades: 
- **isBoom**: Si es true indica que es una instancia de Boom.
- **isServer**: Si es true indica que el código de respuesta es mayor o igual a 500.
- **message**: El mensaje de error.
- **typeof**: El constructor usado para crear el error (ejemplo: Boom.badRequest).
- **output**: La respuesta formateada (generalmente esta es la que usamos) y contiene las siguientes claves:
    - **statusCode**: Código de estatus HTTP.
    - **headers**: Un objeto que contiene encabezados HTTP donde cada clave es un nombre de encabezado y el valor es el contenido del encabezado.
    - **payload**: El objeto formateado usado como respuesta y contiene las siguientes claves:
        - **statusCode**: Código de estatus HTTP, proviene de statusCode.
        - **error**: Nombre derivado del error HTTP statusCode.
        - **message**: Mensaje de error derivado de error.message.

## IMPLEMENTANDO JOI

npm install @hapi/joi

## PROBAR LA VALIDACIÓN DE NUESTROS ENDPOINTS

Probar con Postman.

## MIDDLEWARES POPULARES EN EXPRESS.JS

**Body parser**

Analiza los cuerpos de las solicitudes entrantes en un middleware antes que los manejadores de ruta disponibles bajo la propiedad `req.body`.

https://expressjs.com/en/resources/middleware/body-parser.html

**CORS**

Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación.

https://expressjs.com/en/resources/middleware/cors.html

**Morgan**

Un logger de solicitudes HTTP para Node.js

https://expressjs.com/en/resources/middleware/morgan.html

**Helmet**

Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas pero puede ayudar! 

https://github.com/helmetjs/helmet

**Express Debug**

Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la página cuando las estamos desarrollando. 

https://github.com/devoidfury/express-debug

**Express Slash**

Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. 

https://github.com/ericf/express-slash

**Passport**

Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones.

https://github.com/jaredhanson/passport

> Puedes encontrar más middlewares populares en el siguiente enlace:
>
> https://expressjs.com/en/resources/middleware.html

# IMPLEMENTA TESTS EN NODE.JS

La primera suite de test que vamos a crear es para nuestros endpoints. Es lo que está en nuestro archivo de rutas. 

> $ npm i -D mocha supertest sinon proxyquire

- **mocha**: Nos ayuda a correr los test.
- **supertest**: Levanta un servidor temporal.
- **sinon**: Crea mocks para test
- **proxyquire**: inyecta los mocks cuando se requiren los paquetes.

## CREACIÓN DE TESTS PARA NUESTROS ENDPOINTS

**Flujo de test Mocha**

**Consideramos un test it(message, function(){})**

Si dentro del callback se lanza un error, el test se da por fallido y se pasa al siguiente test. En caso de que la ejecución del callback termine sin errores entonces se pasa al siguiente test automáticamente.

Si en la ejecución del callback llamamos a una función asíncrona, debemos pasarle una función **done** como parámetro (el nombre es arbitrario).

Si pasamos ese parámetro mocha sabrá que debe esperar a que la ejecutemos para pasar al siguiente test y darlo como aprobado. O en caso de que ejecutemos done(error), sabrá que debe pasar al siguiente pero dándolo como fallido.

        it(messaje, function(done){
            setInmediate(()=> done())
        })

En caso de que tengamos una promesa podemos simplemente retornarla y mocha esperará a que la promesa se complete, dando el test como aprobado o fallido dependiendo de si se resuelve correctamente o no.

Debemos utilizar el callback done o retornar una promesa, pero no utilizar ambos o se producirá un error.

        it (mensaje, async function(){
            return Promise.resolve('hola)
        })

También podemos realizar un test asíncrono y tratarlo como síncrono con async/await. En este caso, al igual que en el caso síncrono, el test depende de si la función finaliza correctamente o finaliza con un error.

        it(mensaje, async function(){
            const promesa = Promise.resolve('hola')
            await promesa
        })

Como no envolvemos el await en un try/catch, este lanzará un error en caso de que la promesa sea rechazada, por lo tanto el teste pasará fallido.

**Testing de endpoints HTTP**

Para esto utilizamos una librería llamada supertest, la cual sirve para testear servidores HTTP NODE.js, nos permite envíar solicitudes HTTP de tipo GET, POST, PATCH, PUT, y DELETE, y recibir la respuesta. 

supertest nos provee una función a la que le debemos pasar nuestra app express como parámetro (con sus rutas establecidas), y nos retornará un objeto por el cual podemos realizar solicitudes y validaciones.

        const createRequester = require('supertest)
        const request = createRequester(app)

        request
            .get('/user')
            .expect('Content-Type', /json/)
            .expect('Content-Length', '15')
            .expect(200)
            .end(function(err, res){
                if (err) throw err
            })

Si estamos en un test mocha, podemos pasar el done a la función end.

        request
            .get('/user')
            .expect(200)
            .end(done)

De esta manera, si hay un error mocha recibirá un done con el error y el test fallará, y si no hay error, no fallará porque done no recibirá un error. End recibe un error first callback.

Si no usamos la función end, los expect lanzarán errores en el segundo parámetro y podemos capturarlos de la siguente manera...

        request
            .get('/user')
            .expect(200, done)

Para leer la respuesta podemos usar un then
        
        request
            .get('/user')
            .then(response => {
                assert(response.body.email, 'foo@bar.com')
            })

## CREACIÓN DE TESTS PARA NUESTROS SERVICIOS

## CREACIÓN DE TESTS PARA NUESTRAS UTILIDADES

**TDD**

Primero crear los tests y luego la funcionalidad. Para usar TDD hay que tener muy clara la lógica del negocio.

## AGREGANDO UN COMANDO PARA COVERAGE

Es importante asegurarnos que estamos probando todos los caminos de una funcionalidad a la hora de hacer tests. Un comando de coverage nos ayuda a ver donde estamos fallando

> npm i -D nyc

## DEBUGGING E INSPECT

**Haciendo debugging**

Para aprovechar por completo la funcionalidad de debugging que implementa Express, se recomienda cambiar todos los console.log por debug haciendo uso de un namespace de la siguiente forma:

        const debug = require('debug')('app:server')
        debug('Hello debug')

De esta manera si ejecutamos nuestra aplicación con el comando 
> DEBUG=app:* node index.js
nos mostrará los diferentes logs.

Los namespaces que se recomiendan son los siguientes:
- **app:server** para todo lo relacionado con el inicio del servidor como el mensaje `Listening on http://localhost`
- **app:db** para todo lo relaciona con logs de las bases de datos, inicialización y ejecución de scripts.
-**app:error**: para todo lo relacionado con errores en nuestra aplicación.

> Nótese que esta convención es opcional, es decir, tu puedes seleccionar cualuier namespace. Lo más importante es que sea el mismo que se pasará en la opción **DEBUG**.

Express.js por defecto ya trae unos logs de debugging por defecto los podemos activar mediante la variable de entorno `DEBUG=express:*`.

Por lo que se recomiendan los scripts en el `package.json` de la siguiente manera:

        "scripts": {
            "dev": "DEBUG=express:*,app:* nodemon index",
            "debug": "DEBUG=express:*,app:* npm run start",
        },

**Ejecutando el modo inspect en desarrollo**

El modulo `inspect` de Node.js nos permite ejecutar un ambiente para hacer debugging de código haciendo uso de la consola de desarrolladores de Google. Para ejecutarlo en modo desarrollo con `nodemon` basta con agregar el flag `--inspect` por lo que recomiendo el siguiente script en nuestro archivo `package.json`.

        "scripts": {
            "inspect": "DEBUG=express:*,app:* nodemon --inspect index"
        }

# DESPLIEGA TU PRIMERA APLICACIÓN EN EXPRESS.JS

## CONSIDERANDO LAS MEJORES PRÁCTICAS PARA EL DESPLIEGUE

- Remover contraseñas quemadas en el código.
- Encapsular código spaghetti
- Revisar la estructura del proyecto
- Configurar los scripts de build
- Agregar soporte de caché
- Añadir HTTPS y CORS
- Revisar otras prácticas de seguridad

## VARIABLES DE ENTORNO, CORS Y HTTPS

**Como usar las variables de entorno para diferentes ambientes**

Ya vimos cómo en nuestro ambiente local podemos hacer uso de las variables de entorno usaondo el archivo `.env` y la librería `dotenv`.

Generalmente lo que se recomienda es usar el mismo para los diferentes ambientes como **Staging(Pruebas)** y **Producción**.

Para ello se debe acceder al servidor remoto:

1. Duplicar el archivo `.evn.example` y renombrarlo por `.env`.
2. Cargar los respectivos valores de las variables de entorno.
3. Usar valores y servicios diferentes para cada ambiente, esto quiere decir que las credenciales de desarrollo, staging y producción deben ser completamente diferentes.
4. Si se quiere tomar un backup de estos valores se recomienda usar las notas seguras de aplicaciones como 1Password o LasPass.

> Como lo hemos dicho antes no se debe hacer commit del archivo `.env` y este debe estar en el `.gitignore`, ademas se recomienda manejar solo un archivo `.env`. Mas información: https://github.com/motdotla/dotenv#faq

**Cuando no es posible acceder al servidor remoto**

Algunos servicios como **Heroku** o **Now** no nos permiten acceder a un servior remoto pues la administración del servidor es controlada por los mismos servicios, sin embargo cada servicio tiene sus mecanismos para establecer las variables de entorno:

- https://devcenter.heroku.com/articles/config-vars
- https://vercel.com/docs/build-step#environment-variables

**Variables de entorno de forma nativa**

El uso del archivo `.env` junto con la biblioteca `dotenv` es un mecanismo que nos facilita la configuración de variables de entorno pero si por alguna razón las quisiéramos cargar de manera nativa, es decir desde el sistema operativo se puede utilizar Digital Ocean o algo así.

https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps

**Habilitando CORS en producción**

El intercambio de recursos de origen cruzado (Cross-Origin Resource Sharing) es un mecanismo que agrega unos encabezados (Headers) adicionales HTTP para permitir que un user agent (generalmente un navegador) obtenga permisos para acceder a los recursos de un servidor en un origin distinto (dominio) del que pertenece.

**Por ejemplo una solicitud de origen cruzado sería** hacer una petición AJAX desde una aplicación que se encuentra en https://dominio-.com para cargar el recurso https://api.dominio-b.com/data.json.

> Por razones de seguridad, los navegadores restringen las solicitudes HTTP de origen cruzado iniciadas dentro de un scripts.

Si necesitmos permitir request desde un dominio diferente al del servidor podemos usar el middleware `cors` para permitirlo, pero se importante no dejarlo expuesto a todos los dominios.

**Habilitar CORS para todos los request (No recomendado en producción)**

        const express = require('express')
        const cors = require('cors')
        const app = express()

        app.use(cors())

        app.get("/products/:id", function(req, res, next){
            res.json({msg: "This is CORS-enabled for all origins!})
        })

        app.listen(8000, function(){
            console.log('CORS-enabled web server listening on port 8000')
        })

**Habilitar CORS para los request específicos de un cliente (Recomendado para producción)**
        
        const express = require("express")
        const cors = require("cors")
        const app = express()

        const corsOptions = { origin: "http://example.com" }

        app.use(cors(corsOptions))

        app.get("/products/:id", function(req, res, next){
            res.json({ msg: "This si CORS-enabled for only example.com" })
        })

        app.listen(8000, funciton(){
            console.log("CORS-enabled web server listening on port 8000")
        })

Debemos tener en centa que para aplicaciones server-side es poco probable que necesiten el uso de CORS debido a que las aplicaciones conviven en el mismo dominio. Sin embargo, es buena practica habilitarlo para los llamados externos de nuestra API.

Más información sobre el middleware CORS en https://expresjs.com/en/resources/middleware/cors.html

**Cómo funciona y por qué es importante el uso de HTTPS**

El Protocolo Seguro de Transferencia de Hipertexto (HTTPS) es un protocolo HTTP que funciona en el puerto 443 y utiliza un cifrado basado en SSL (Secure Sockets Layer) / TSL (Transmission Layer Security) con el fin de crear un canal de comunicación seguro entre el cliente y el servidor.

**Por qué usar HTTPS**

Una de las razones por la cual siempre debemos usar sitios con HTTPS es que sin este cualquier individuo podría efectuar ataques conocidos como `mann-in-the-middle` o `eavesdropping` y obtener nuestro usuario y contraseña en el momento en que intentamos acceder a este servicio qeu no tiene HTTPS establecido.

**Cómo funciona**

1. El cliente envía un mensaje al servidor y este responde con su certificado público.
2. El cliente comprueba que este certificado sea valido y toma la llave pública.
3. El cliente genera una cadena llamada `pre-master secret` y la cifra usando la llave pública del servidor y se lo envía.
4. El servidor usa su llave privada para comprobar el `pre-master secret`.
5. En ese momento tanto el cliente como el servidor usan el `pre-master secret` para generar un `master secret` que es usado como una llave simétrica.
6. Teniendo este par de llaves ya se pueden enviar mensajes seguros entre ellos.

**Cómo habilitar HTTPS en nuestro servior**

Dependiendo el servicio de hosting que estemos usando puede ofrecernos o no una instalación de certificados de seguridad SSL/TLS que pueden tener algún cost. Sin embargo exiten servicios como Let's Encrypt que permiten la instalación de este certificado completamente gratis. Servicios como Now y Heroku ofrecen HTTPS por defecto.

Más información: 

- https://letsencrypt.org/how-it-works/
- https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
- https://devcenter.heroku.com/articles/ssl
- https://devcenter.heroku.com/articles/automated-certificate-management

## ¿CÓMO IMPLEMENTAR UNA CAPA DE MANEJO DE CACHÉ?

> utils/time.js
>
> utils/cacheREsponse.js

## ¿CÓMO CONTENER TU APLICACIÓN EN DOCKER?

Para contener nuestra aplicación en Docker y ejecutarla lo primero es asegurarnos que tenemos instalado Docker.

Luego lo que debemos hacer es crear un nuevo archivo llamado `Dockerfile` y en el insertamos el siguiente contenido:

        FROM node:10-alpine
        WORKDIR /srv/app
        COPY . .
        RUN npm install
        EXPOSE 3000
        ENV NODE_ENV=production
        CMD ["node", "index.js"]

Con el siguiente script creamos una imagen con nuestro  aplicativo.

> docker build -t movies-api .

Con el siguiente script podemos ejecutar nuestra imagen en modo `detach`

> docker run -p 3000:3000 -d movies-api

Si nos dirigimos a `http://localhost:3000` deberíamos ver nuestra API funcionando.

## DESPLIEGUE EN NOW

Now es una plataforma en constante actualización, si te llega a pasar un mensaje de error relacionado con Express, intenta esto:

En el archivo now.json cambia
        "builds": [{ "src": "index.js", "use": "@now/node" }]
por
        "builds": [{ "src": "index.js", "use": "@now/node-server" }]

Now es un servicio serverless...

Descargar la aplicación de escritorio...

> now secret add nombre_variable valor_variable
>
> now secret add db_user db_user_value
>
> Now secret ls

now.json   
        {
            "name": "platzivideo",
            "version": 2,
            "builds: [{ "src": "index.js", "use": "@now/node" }],
            "routes": [{ "src": "/(.*), "dest": "/index.js"}],
            "env": { "DB_USER": "@platzivideos-db-user",
                     "DB_PASSWORD": "@platzivideos-db-password",
                    
        }

> now dev

> now

> now alias url-que-me-dan https://platzivideo-api.now.sh

# ¿QUÉ APRENDISTE EN ESTE CURSO?