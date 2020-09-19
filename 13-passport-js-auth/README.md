# APRENDER SOBRE AUTENTICACIÓN Y AUTORIZACIÓN

## STACK DE SEGURIDAD MODERNO

Anteriormente las compañías se comunicaban por medio de una intranet (Una red privada que funciona dentro de las compañías) en esta habían protocolos como SOAP, SAML, WS-Federation, pero esos protocolos se quedarón cortos. Ahora es necesario otra serie de cosas y conceptos como la autenticación y la autorización, los microservicios, la necesidad de tener multiples clientes, fomentaron la creación de un nuevo STACK compuesto de 3 protocolos: JSON Web Tockens, OAuth 2.0 y OpenID Connect.

- **JSON Web Tokens**: Son un estandar de la industria abierto que nos permite comunicarnos entre 2 clientes de un lado a otro de una manera más segura.
- **OAuth 2.0**: Es un estandar de la industria que permite implementar autorización, (**No confundir autorización con autenticación**). Precisamente una de las diferencias entre open authorization 1.0 (OAuth 1.0) y su versión 2 fue la necesidad de adaptarse a estas nuevas tecnologías mobile.
- **Open ID Connect**: Es una capa de autenticación que funciona por encima de **OAuth 2.0**.

## ¿QUÉ ES LA AUTENTICACIÓN Y LA AUTORIZACIÓN?

La autenticación: es una acción de verificar la identidad de un usuario, es decir verificar si el usuario existe y en efecto es él. En nuestra aplicación vamoas a implementar autenticación con usuario y contraseña para posteriormente genera un Token de autorización.

La autorización es la acción de otorgar permisos de manera limitada a nuestros recursos. Nosotros a veces otorgamos permisos de solo lectura o permisos de lectura y escritura. En nuestra aplicación vamos a otorgar permisos para el usuario final de lectura y de escritura sobre su propia colección. Y otros permisos administrativos. ESto lo haremos por medio de tokens que vamos a otrogarle a nuestro servidor.

## INTRODUCCIÓN A LAS SESIONES

Cuando tu visitas un sitio web se crea una petición http. Http es un protocolo que no tiene estado esto quiere decir que diferentes direcciones http nunca comparten información entre si, así que la manera de poder compartir está información en peticiones http es mediante el uso de una sesión. Cuando visitas un sitio web por primera vez se crea una sesión, no es necesario estar autenticado para que está sesión sea creada.

Supongamos que vas a un sitio a buscar vuelos, cuando entras al sito se crea una sesión y conforme vas haciendo busquedas a esos vuelos se van guardando tus preferencias de búsqueda en esta sesión. Luego esta sesión genera un ID que se almacena en una cookie. La cookie es un archivo que se almacena en tu navegador para que cuando tu cierres el navegador la cookie permaezca con el id de la sesión, así la próxima vez que vuelvas esté ID de la sesión que permanece en la cookie se relaciona con la sesión que estaba previamente abierta y así puede cargar tus preferencias en los vuelos que estabas buscando.

Es por eso qeu muchas veces aunque nosotros no iniciemos sesión podemos ver que nuestras preferncias están allí, también cuando hay un proceso de autenticación, la sesión se almacena directamente y se relaciona con tu usuario, por seguridad la sesión debería terminar al cierto tiempo de inactividad, sin embargo dependiendo del mecanismo que estés usando podrías tener sesiones por días o incluso por meses **cookie-session** y **express-session** son librerías que nos permiten implementar todo el tema de sisiones en express, la diferencia más grande es que **cookie-session** nos permite almacenar la sesión en la memoria en el lado del servidor.

A la hora de escalar la sesión es muy importante utilizar bases de datos en memria como Redis, eso es una ventaja que tiene JWT, pues JWT no tiene estado y por lo tnato no necesita memoria.

# CONOCER QUÉ SON LOS JSON WEB TOKENS

## ANATOMÍA DE UN JWT

RFC 7519

Un JWT es un estandar de la industria que nos permite generar demandas entre 2 clientes de manera segura.

JSON Web Token:
eyJhbGciOiJIUzl1NilsInR5cCI6IkpXVCJ9.eyJzdWliOilxMjM0NTY3ODkwliwibmFtZSI6IkpvaG4gRG9lliwiaWF0ljoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

Header { "alg": "HS256", "typ":"JWT" }
Payload { "sub": "1234567890", "name": "John Doe", "iat": 1516239022 }
Signature HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload) your-256-bit-secret )

Digamos arriba hay un JWT y abajo un JWT decodificado.

Un JWT consta de 3 partes, generalmente divididas por un punto:

- **Header**: Tiene 2 atributos:
    - El tipo que en este caso siempre debería ser JWT.
    - El algoritmo de encriptación de la firma, el algoritmo de encriptación puede ser sincrono o asincrono. El algoritmo asincrono usan 2 llaves de encriptación; una privada y una publica, donde la llave pública se usa para encriptar y la llave privada se usa para desencritpar. Los algorimtos sincronos usan la misma llave para encriptar y desencriptar, ambos son seguros de usar pero depende de donde los uses. Los algoritmos asincronos deben usarse donde hay partes públicas que puedan tener acceso a está llave, mientras que los algoritmos sincronos solo deben usarse en sistemas como el backend.

- **Payload**: Es donde guardamos toda la información de nuestro usuario, incluso todos los scopes de autorización, este payload se compone de algo llamado los claims, los claims son generalmente representados por 3 letras para mantener el JWT muy pequeño, hay diferentes tipos de claims. S pueden usar Registered Claim Names, Public Claim Names (Public y Registered ya están definidos en el estandard) y Private Claim Names (Los definimos nosotros).

- **Signature**: La tercera parte del JWT que es la firma y es lo que hace muy poderoso el JWT está compuesto por el header códificado más el payload códificado, ha esto se le aplica el algoritmo de encriptación por su puesto usando un secret. En el caso del algoritmo H256 debemos usar un string de 256 bits de longitud.

## AUTENTICACIÓN TRADICIONAL VRS JWT

En la autenticación tradicional cuado sucede un proces de autenticación se crea una sesión, el id de esta sesión se almacen en una cookie que es enviada al navegador. (Las cookies se llaman así por las galletas de la fortuna que tienen mensajes dentro) a partir de allí todos los request tienen la cookie que almacena el id de la sesión y está es usada para verificar la sesión previamente activa, uno de los problemas que se tiene es por ejemplo: 
- cliente como la single page apps no pueden refrescar o no refrescan todas las veces entonces no pueden saber si hay cambios en la sesión. 
- Por definición las Rest API no deberían tener estado, al usar sesiones estamos generando estado y esto contradice este principio.
- En las arquitecturas modernas que usan por ejemplo microservicios, la sesión solo existe en una máquina no fluye hacia los otros clientes, entonces es un poco dificil de escalar, y otro problema es que por ejemplo el control de acceso siempre requiere que vallamos a base de datos, finalmente controlar el uso de memoria también puede ser un problema, ya que cada cliente que se conecta genera una sesión y consume más memoria.

En la autenticación con JWT al suceder el proceso de autenticación se firma un token, a partir de allí el token es enviado al cliente y este debe ser almacenado en memoria o en una cookie, todos los request de allí en adelante llevan este token, una de las ventajas es qeu una aplicación como una Single Page App ya no requiere del backend para saber si el usuario está autenticado, lo otro es que el backend puede recibir múltiples request de múltiples clientes y lo único que les interesa es saber si el token está bien firmado, finalmente es el cliente quien sabe que permisos tiene y no tiene que ir a base de datos para saber si tiene estos permisos.

## FIRMANDO Y VERIFICANDO NUESTRO JWT

Para firmar un JWT debemos utilizar la librería llamada node json web token. Esta librería tiene un método llamado sign.

        jwt.sign({ sub: user.id}, 'secret', options)
    
Este metodo recibe como primer atributo el payload, segundo el secret y tercero opciones extras para el firmado de nuestro jwt.

Para verificar nuestro jwt con la misma librería utilizamos el metodo verify.

        jwt.verify(token, 'secret', function(err, decoded){})

Este método recibe primero el token que queremos verificar, segundo el secret y tercer un callback que nos devuelve el token decodificado.

1. Crear carpeta jwt-utilities
2. cd jwt-utilities
3. npm init -y
4. Crear archivo index.js
5. npm install jsonwebtoken

Se utiliza así:
> node index.js sign secret Fredy

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGcmVkeSIsImlhdCI6MTU5ODQ2MDY4MX0.0Rz3mcxmUGXc4aCk-CRun-pPv_h9xIrPcM9_5U5jsoI

https://jwt.io

> node index.js verify secret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJGcmVkeSIsImlhdCI6MTU5ODQ2MDY4MX0.0Rz3mcxmUGXc4aCk-CRun-pPv_h9xIrPcM9_5U5jsoI

## SERVER-SIDE VS CLIENT-SIDE SESSIONS

**¿Qué es una sesión?**

En terminos generales una sesión es una manera de preservar un estado deseado.

**¿Qué es una sesión del lado del servidor?**

La sesión en el lado del servidor suele ser una pieza de información que se guarda en memoria o en una base de datos y esta permite hacerle seguimiento a la información de autenticación, con el fin de identificar al usuario y determinar cuál es el estado de autenticación. Mantener la sesión de esta manera en el lado del servidor es lo que se considera "stateful", es decir que maneja un estado.

**¿Qué es la sesión del lado del cliente?**

Las SPA (Single-page apps) requieren una manera de saber si el usuario esta autenticado o no. Pero esto no se puede hacer de una manera tradicional porque suelen ser muy desacopladas con el backend y no suelen refrescar la página como lo hacen las aplicaciones renderizadas en el servidor.

JWT (JSON Web Token) es un mecanismo de autenticación sin estado, lo que conocemos como "stateless". Lo que significa que no hay una sesión que exista del lado del servidor.

La manera como se comporta la sesión del lado del cliente es: 
1. Cuando el usuario hace "login" agregamos una bandera para indicar que lo esta.
2. En cualquier punto de la aplicación verificamos la expiración del token.
3. Si el token expira, cambiamos la bandera para indicar que el usuario no está logueado.
4. Se suele chequear cuando la ruta cambia.
5. Si el token expiró lo redireccionamos a la ruta de "login" y actualizamos el estado como "logout".
6. Se actualiza la UI para mostrar que el usuario ha cerrado sesión.

## BUENAS PRÁCTICAS CON JWT

En los últimos años se ha criticado fuertemente el uso de JSON Web Tokens. La realidad es que muchas compañías hoy en día los usan sin ningún problem siguiendo unas buenas practicas de seguridad, que aseguran su uso sin ningún inconveniente.

**Evitar almacenar información sensible**

Debido a que los JSON Web tokens son decodificables es posible visualizar la información del payload, por lo que ningún tipo de información sensible debe ser expuesto como contraseñas, keys, etc. Tampoco debería agregarse información confidencial del usuario como su número de identificación o información médica, y a que como hablamos anteriormente, los hackers pueden usar esta información para hacer ingeniería social.

**Mantener su peso lo más liviano posible**

Suele tenerse la tentación de guardar toda la información del perfil en el payload del JWT, pero esto no debería hacerse ya que necesitamos que le JWT sea lo más pequeño posible debido a que al enviarse con todos los request estamos consumiendo parte del ancho de banda.

**Establecer un tiempo de expiración corto**

Debido a que los tokens pueden ser robados si no se toman las medidas correctas de almacenamiento seguro, es muy importante que estos tengan una expiración corta, el tiempo recomendado es desde 15 minutos hasta un máximo de 2 horas.

**Tratar los JWT como tokens opacos**

Aunque los tokens se pueden decodificar, deben tratarse como tokens opacos, es decir como si no tuviesen ningún valor legible. Esto es porque desde el lado del cliente no tenemos manera de verificar si la firma es correcta, así que si confiamos en la infomación decodificada del token, alguien podría introducir un token invalido con otra información a propósito. Lo mejor, es siempre enviar el token del lado del servidor y hacer las verificaciones allí.

**¿Donde guardar los tokens**

Cuando estamos trabajando con SPA (Single Page Apps) debemos evitar almacenar los tokens en Local Storage o Session Storage. Estos deben ser almacenados en memoria o en una Cookie, pero solo de manera segura y con el flag httpOnly, esto quiere decir que la cookie debe venir del lado del servidor con el token almacenado. Mas información:

https://auth0.com/docs/tokens/token-storage#single-page-apps

**Silent authentication vs Refresh tokens**

Debido a que es riesgos almacenar tokens del lado del cliente, no se deberían usar Refresh Tokens cuando se trabaja solo con una SPA. Lo que se debe implementar es Silent Authentication, para ello se debe seguir el siguiente flujo:

1. La SPA obtiene un access token al hacer login o mediante cualquier flujo de OAuth.
2. Cuando el token expira el API retornara un error 401.
3. En este momento se debe detectar el error y hacer un request para obtener de nuevo un access token.
4. Si nuestro backend server tiene una sesión valida (Se puede usar una cookie) entonces respondemos con un nuevo access token.

Más información:
- https://auth0.com/docs/authorization/configure-silent-authentication
- https://auth0.com/docs/tokens/refresh-tokens

Hay que tener en cuenta que para implementar Silent authentication y Refresh tokens, se require tener un tipo de sesión valida del lado del servidor por lo que en una SPA es posible que sea necesario una especie de backend-proxy, ya que la sesión no debería convivir en el lado del API server.

En el paso 2, si se esta usando alguna librería para manejo de estado como redux, se puede implementar un middleware que detecte este error y proceda con el paso 3.

# ENTENDER CÓMO FUNCIONAN LAS COOKIES

## ¿QUÉ SON LAS COOKIES Y CÓMO IMPLEMENTAR EL MANEJO DE SESIÓN?

Una cookie es un archivo creado por un sitio web que tiene pequeños pedazos de datos almacenados en él, su proposito princiapl es identificar al usuario mediante el almacenamiento de su historial.

Las **session cookies** tienen un corto tiempo de vida, ya que estas son removidas cuando se cierra el tab o el navegador.

Las **persistent cookies** se usan generalmente para restaurar al usuario guardando información de su interes.

Las **secure cookies** almacenan datos de manera cifrada para que terceros mal intencionados no puedan orbar la información en el, suelen usarse en conexiones https es decir

**Hay leyes de cookies que debes seguir al pie de la letra:**

- Avisarle al usuario que estás haciendo uso de cookies en tu sitio para guardar información.
- Es necesario que el usuario de su consentimiento para manejar cookies en tu sitio.

Si las cookies son necesarias para la autenticación del usuario o para algún problema de seguridad esas leyes no aplican en esté caso. 

Para implementar cookies:

1. Creamos una capeta llamada handle-session
2. Ingresamos a la carpetas y ejecutamos `npm init -y`
3. Instalamos las dependencias: `npm install express express-session`. **express-session**: nos permite hacer el manejo de sesión con cookies.
4. También vamos a instalar la dependencia `npm install --save-dev nodemon`.
5. Creamos un nuevo archivo llamado `index.js`.
6. Creamos 2 scripts en nuestro package.json 
        {
            "scripts": {
                "dev": "nodemon index.js",
                "start": "node index.js"
            } 
        }

## COOKIES VS SESSION STORAGE VR LOCAL STORAGE

El **Local Storage** tien un almacenamiento máximo de 5MB, la información almacenada aquí no se va con cada requiest que hacemos al servidor, esto nos ayuda a reducir la información entre cliente y servidor, la información que esta almacenada en el local storage persiste aunque cerremos la ventana de nuestro navegador.

El **Session Storage** es similar al Local Storage solo que la información está disponible por tab o por window, esto quiere decir que apenas cerremos un tab o un window la información deja de persistir al igual solo la información que almacenamos en cada tab está disponible en ese mismo tab.

Las **cookies** solo tienen un almacenamiento de 4KB, lo interesante de las cookies es que si se les puede establecer un tiempo de expiración.

Para el local storage o el session storage esto tendríamos que hacerlo programaticamente con javascript.

Una de las desventajas que tienen las cookies es que por cada petición que se haga al servidor sea de imagenes, html, etc. Las cookies van adjuntas a la petición y esto ocasiona un overhead al hacer las peticiones.

Una de las ventajas es que las cookies se pueden hacer seguras mediante el flag `httpOnly` esto permite que la información de la cookie solo sea accedida y modificada en el servidor.

Finalmente te preguntaras: ¿Cuándo debemos usar el uno o el otro?

- Si la información no es senisble podemos almacenarla en Local Storage o en Session Storage.
- Si la información es medianamente sensible como por ejemplo: nombres de usuario o algunos terminos que puedan identificar al usuario, lo más recomendado es usar el Session Storage.
- Finalmente si la información es muy sensible como contraseñas o JSON Web Tokens, lo más recomendado es almacenarlo en una cookie pero siempre teniendo en cuenta el flag `httpOnly`.

La manera como podemos acceder a la API de WebStorage y SessionStorage es mediante la palabra sessionSTorage está tiene 2 métodos, uno es setItem donde podemos especificar con que key queremos almacenar nuestra información:

        sessionStorage.setItem('hello', 'temporary world');

Muy similar al Local Storage mediante la palabra `localStorage`

        localStorage.setItem('hello', 'world');

Si nosotros quisieramos acceder a esta información lo podemos hacer mediante `sessionStorage.getItem('hello')`; o con el Local Storage mediante `localStorage.getItem('hello')`.

Al cerrar el tab todo lo almacenado en con sessionStorage e inspeccionamos la aplicación veremos que se borra la información. Pero si vemos el localStorage todavía persistira el key 'hello': 'world'.

# IMPLEMENTAR AUTENTICACIÓN EN EXPRESS USANDO PASSPORT.JS

## ARQUITECTURA DEL PROYECTO PLATZI VIDEO

La arquitectura del proyecto depende de una **API server** que fue constuido en backend nodejs. El API Server tiene un CRUD de películas. Pero en este repositorio vamos a agregar unos endpoints para hacer `signIn` (Autenticar) y un endpoint para hacer `signUp` (Crear nuevos usuarios).

Tendremos un API Token que nos permitira definir los permisos para un Admin Client. El API Token va a conceder permisos administrativos.

Se va a tener un render server que entrega la aplicación al cliente. Este render server utiliza un Access Token publico de solo lectura. Este access tocken va a utilizar un JSON Web Token que va ha tener la información del usuairo que hace autenticación y los permisos determinados por el **API Token**.

Una SPA se va a comunicar con nuestra API a través del Render Server que va a hacer de Proxy. Para esto es importnate que la SPA tenga un servidor proque toda la comunicación que sucede de los Access Token mediante el API Server, debe ocurrir en el Servidor.

## AGREGANDO LA COLECCIÓN DE USUARIOS

1. Vamos a crear un nuevo schema en nuestra carpeta /utils/schemas/users.js, vamos a requerir la librería **joi**, que nos permite definir el schema que va ha ser usado en la collection de usuarios.
2. Creamos el servicio en /services/users.js

## AGREGANDO LA COLECCIÓN DE PELÍCULAS DE USUARIO

1. Vamos a crear un nuevo schma en /utils/schemas/userMovies.js
2. Creamos un servicio en /services/userMovies.js
3. Creamos las nuevas rutas en /routes/userMovies.js

## IMPLEMENTANDO EL POST Y DELETE DE LAS PELÍCULAS DE USUARIO

Se continua con la implementación de las rutas de usuario, en esta ocasión se implementan los metodos post y delete en /routes/userMovies.js.

Ahora para pode utilizar nuestra ruta lo agregamos al archivo index.js de nuestro proyecto.

## COMO CONECTARNOS A LA BASE DE DATOS

**MongoDB Compass** es un cliente con interfaz gráfica que nos permite conectarnos a nuestras instancias de Mongo DB y manipularlas de una manera más fácil. Con este cliente nos podemos conectar a una instancia de cualquier servidor incluso una instancia de MongoDB Atlas.

## CONFIGURACIÓN DE PASSPORT.JS

**Passport.js** es un middleware para express que nos permite implementar estrategias de autenticación de una manera rápida y simple.

> npm install passport jsonwebtoken passport-http passport-jwt
>
> npm install chalk --save-dev

Se agregan variables de entorno a .env.example y .env
        // USERS
        DEFAULT_ADMIN_PASSWORD=root
        DEFAULT_USER_PASSWORD=secret

        // AUTH
        AUTH_JWT_SECRET=(El key generado con keygen.io)

        //API KEYS
        PUBLIC_API_KEY_TOKEN=
        ADMIN_API_KEY_TOKEN=

Sacamos el secret de keygen.io, una página que nos permite definir un key de base 264 bits. (WEP 256-bits Key).
        defaultAdminPassord: process.env.DEFAULT_ADMIN_PASWORD,
        defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
        publciApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
        adminApikeyToken: process.env.ADMIN_API_KEY_TOKEN

Luego hay que modificar el config/index.js agregando las variables de entorno que acabamos de definir.

Se ejecutan los scripts/mongo/seedMovies.js, seedUsers.js y seedApiKeys.js solo para crear diferentes peliculas usuarios y api keys.

Necesitamos los api keys entonces tengo que irlos a traer de la base de datos. Estos api keys los copio a public api key y a admin api key.

## IMPLEMENTACIÓN DE BASICSTRATEGY CON PASSPORT.JS

Crear utils/auth/strategies/basic.js

## IMPLEMENTACIÓN DE STRATEGY Y EXTRACTJWT CON PASSPORT.JS

Recibiremos un JWT y a partir del token decodificado buscaremos el usuario.

Agregar a config/index.js
        authJwtSecret: process.env.AUTH_JWT_SECRET

Y creamos utils/auth/strategies/jwt.js

## IMPLEMENTACIÓN DE NUESTRO SIGN-IN

1. Creamos un nuevo servicio en services/apiKeys.js. Este servicio nos permitira que a partir de un Api Key Token podamos obtener los scopes requridos a la hora de hacer sign in.
2. Creamos una nueva ruta en routes/auth.js
3. Importamos la ruta en index.js
4. Corremos npm run dev 
5. Lo probamos con Postman.

## IMPLEMENTACIÓN DE NUESTRO SIGN-UP

1. En nuestro archivo routes/auth.js importamos el servicio UsersServic.js porque con este vamos a usar el método para crear usuarios. También necesitamos validar los datos del usuario así que importamos el validationHandler.js de la ruta ../utils/middleware/validationHandler y necesitamos el schmea para crear usuarios así que importamos { createUserSchema } desde ../utils/schemas/users
2. Implementamos router.post para la ruta '/sign-up'
3. Lo probamos en Postman.

## PROTEGIENDO NUESTRAS RUTAS CON PASSPORT.JS

Vamos a proteger las rutas e routes/movies.js & routes/userMovies.js

Hay que importar passport:
const passport = require('passport')

Para esto se importa la estrategia de Json Web Tokens con 
require('../utils/auth/strategies/jwt')

Y se usa password en las partes del router.get o post o el verbo http
router.get('/', passport.authenticate('jwt', {session: false}), async function (req, res, next) {...})

el passport.authenticate('jwt', {session: false}) funciona como un middleware.

Ahora si probamos nuestro endpoint con postman nos dará un Unathorized.

Entonces debemos hacer sign-in para que nos devuelva un token y cada vez que necesitemos las rutas debemos ir a authorizations --> Bearer Token --> y agregar el token que nos dio el sign-in.

## MIDDLEWARE PARA EL MANEJO DE SCOPES

Create un nuevo middleware en utils/middleware/scopesValidationHandler.js

Todas nuestras rutas deben ser validadas así que en todas las rutas const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler') encontes en cada verbo de router despues del middleware de passport.authenticate va el de scopesValidationHandler(['read:movies']) o 'create:movies' depende del permiso que necesite.

## CONFIGURACIÓN DEL SERVER RENDER

Crear en la raiz una carpeta llamada ssr-server

Esta carpeta tienes nuevas variables de entorno:
        // CONFIG
        PORT=8000

        // API URL
        API_URL=http://localhost:3000

        // API KEY
        API_KEY_TOKEN=(PUBLIC_API_KEY_TOKEN)

También la configuración en config/index.js
        const config = {
                dev: process.env.NODE_ENV !== 'production',
                port: process.env.PORT || 8000,
                apiUrl: process.env.API_URL,
                apiKeyToken: process.env.API_KEY_TOKEN
        }

## COMUNICACIÓN MÁQUINA A MÁQUINA

Crear un nuevo archivo en ssr-server/utils/auth/strategies/basic.js

## IMPLEMENTANDO RECORDAR SESIÓN

Generalmente cuando queremos implmenetar la opción de recordar sesión para Express mediante passport, lo que hacemos es extender la expiración de la Cookie.

En nuestra ruta de sign-in de nuestro server side render hacemos las siguiente modificaciones:

                // Agregamos las variables de tiempo en segundos
                const THIRTY_DAYS_IN_SEC = 2592000; /2592000000
                const TWO_HOURS_IN_SEC = 7200; //7200000

                app.post('/auth/sign-in', asyunc function(req, res, next){
                        const {rememberMe} = req.body
                        passport.authenticate('basic', function(error, data){
                                try{
                                        if (error || !data){
                                                next(boom.unauthoried())
                                        }
                                        
                                        req.login(data, {session: false}, async function(error){
                                                if (error){
                                                        next(error)
                                                }

                                                const { token, ...user } = data

                                                res.cookie('token', token, {
                                                        httpOnly: !config.dev,
                                                        secure: !config.dev,
                                                        maxAge: rememberMe ? THIRTY_DAYS_IN_SEC : TWO_HOURS_IN_SEC
                                                }) 
                                                res.status(200).json(user)
                                        })
                                }
                                } catch(error){
                                        next(error)
                                }
                        })(req, res, next)
                })

## IMPLEMENTACIÓN DE LAS RUTAS DE LAS PELÍCULAS DE USUARIO 

# ENTENDER QUÉ ES OAUTH 2.0 Y OPENID CONNECT

## ¿QUÉ ES OAUTH 2.0 Y OPENID CONNECT?

**OAuth 2.0** 
Open Authorization 2.0 es un estándar de la industria que nos permite implementar autorización. Es diferente la autorización y la autenticación.

Roles:
- Resource Owner - User.
- Resourse Server - Service API.
- Client - Application
- Authorizacion Server - Service API.

1. La aplicación quiere hacer un Athorization Request.
2. Yo como usuario debo conceder a la aplicación y darle un Authorization Grant.
3. Con ese Authorization Grant la aplicación va al Authorization Server, este verifica que los datos son correctos y le da a la aplicación un Authorization Token.
4. La aplicación con ese Access Token puede hacer peticiones al resource server, el cual devuelve los recursos protegidos porque yo le entregue un Access token.

**OpenID Connect**
Es una capa de autenticación que funciona sobre la capa de Opent Authorization. 

- Los access token se usan exclusivamente para los llamados al API (Para obtener recursos)
- Entra un nuevo concepto llamado ID Token, un nuevo token que nos permite identificar si el usuario está autenticado y nos permite obtener la información del usuario.
- Define unos claim y scopes definidos para el ID Token y debemos implementar un endpoint llamado userInfo, donde enviamos el ID Token y podemos obtener la info del usuario.
- OpenID Connect también define como debemos hacer uso del manejo de sesión, como hacer logout, como implementar single sign on.

Flujo:
- Se hacer un request a /authorize y este nos genera un ID token que tiene definidos los scopes de OpenID y profile 
- Con este ID Token ya sabemos que el usuario está autenticado y podemos hacer un request a /user-info y obtener la información del usuario.

# IMPLEMENTAR AUTENTICACIÓN CON REDES SOCIALES

## CÓMO CREAR UN PROYECTO EN GOOGLE API PARA HACER AUTENTICACIÓN CON OAUTH 2.0

Con el fin de poder usar Google como método de autenticación es necesario crear un nuevo proyecto dentro de la consola de desarrolladores de Google.

1. Nos dirigimos a https://console.developers.google.com y nos autenticamos con nuestra cuenta de Google.
2. En la parte superior izquierda seleccionamos la organización que queremos usar (Debe haber una por defecto) y hacemos click en **Create Project**
3. Luego nos vamos al slidebar izquierdo y seleccionamos **Credentials > Create credentials > OAuth client ID**
4. Nos aseguramos de elegir `Web Application` como el tipo de aplicación.
5. Luego establecemos el nombre del cliente que en nuestro caso será `SSR Server`, el **Authorized JavaScript origins**: `http://localhost:8000` y el **Authorized redirect URIs** http://localhost:8000/auth/google-oauth/callback. Cuando hagamos despliegue de nuestra aplicación lo ideal es crear otro cliente y remplazar las URLs por las URLs correspondientes de producción.
6. El **Application Name** del **Consent Screen** será `Platzi Videos`.
7. Al finalizar la creación copiamos el **Client ID** y **Client secret** que seran usados como `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` respectivamente.

## IMPLEMENTANDO OAUTH2.0 CON GOOGLE

Ponemos el GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET en los archivos .env y .env.example

En ssr-server/config/index.js tambien colocamos el client id y el secret.

Instalamos npm install passport-oauth

Creamos la estrategia en ssr-server/utils/auth/strategies/oauth.js

Ahora implementamos nuestra rutas de autenticación con google en index.js

## IMPLEMENTANDO SIGN PROVIDER EN NUESTRA API

1. Se crea una nueva funcion en movies-api/services/users.js llamada `getOrCreateUser`
2. En utils/schemas/users.js se le cambia el nombre a createUserSchema por userSchema y sin el isAdmin y se define un nuevo createUserSchema con el isAdmin y se define un createProviderUserSchema.
3. Y ya podemos definir en movies-api/routes/auth.js 

En el navegador puedo entonces probar entrar a http://localhost:8000/auth/google-oauth

## AUTENTICACIÓN CON GOOGLE USANDO OPENID CONNECT

En el curso vimos como se podía implementar Google Authentication usando la estrategia de OAuth directamente. En esta lectura vamos a explorar como hacer la autenticación usando la estrategia directa de Google.

Lo primero es instalar nuestras dependencias:

> npm install passport-google-oauth

Luego creamos una nueva estrategia llamada google dentro de utils/auth/strategies/google.js

                const passport = require('passport')
                const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth')

                const { config } = require('../../../config/index')

                passport.use(
                        new GoogleStrategy(
                                {
                                        clientID: config.googleClientId,
                                        clientSecret: config.googleClientSecret,
                                        callbackURL: "/auth/google/callback"
                                },
                                function(accessToken, refreshToken, profile, cb){
                                        const { data, status } = await axios({
                                                url: `${config.apiURL}/api/auth/sign-provider`,
                                                method: 'post',
                                                data: {
                                                        name: profile.name, 
                                                        email: profile.email,
                                                        password: profile.id,
                                                        apiKeyToken: config.apiKeyToken
                                                }
                                        })

                                        if (!data || status !== 200){
                                                return cb(boom.unauthorized(), false)
                                        }

                                        return cb(null, data)
                                }
                        )
                )

Teniendo nuestra estrategia de Google ya podemos agregar dos nuevas rutas de autenticación.

                app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile', 'openid']}))

                app.get('/auth/google/callback', passport.authenticate('google', { session: false}), 
                function(req, res, next){
                        if (!req.user){
                                next(boom.unauthorized())
                        }

                        const { token, ...user } = req.user;

                        res.cookie('token', token, {
                                httpOnly: !config.dev,
                                secure: !config.dev
                        })

                        res.status(200).json(user)
                })
## CÓMO CREAR UNA CUENTA DE DESARROLLADOR CON TWITTER

Con el fin de poder usar Twitter como método de autenticación es necesario crear una cuenta de desarrollador de Twitter. Es necesario postularse para que la cuenta de desarrollador pueda ser utilizada y suele tomar hasta 24 horas de aprovación. Para aplicar a la cuenta es necesario dirigirse a https://developer.twitter.com/en/apply-for-access.html y hacer click en el botón Apply for a developer account.

Cuando la cuenta ha sido aprobada, entonces procederemos a crear una aplicación para usarla en nuestro método de autenticación, para ello debemos:

1. Nos dirigimos a la lista de nuestras aplicaciones en https://developer.twitter.com/en/apps
2. Allí creamos una nueva app haciendo click en el botón **Create an App**.
3. Llenamos los correspondientes campos como **App Name** y **Website URL**
4. Las URLs de **Terms of Service URL** y **Privacy policy URL** son necesarias para poder solicitar el email del usuario.
5. Como callback URL podemos usar `http://localhost:8000/auth/twitter/callback`. Lo ideal es que cuando salimos a producción creamos una aplicación diferente y esta vez usaremos la URL de producción.
6. Marcamos como **Enabled** que nuestra app va a ser usada para **Sign in with Twitter**.
7. Hacemos click en **Create**, accedemos a los detalles de la app creada y en el tab de **Permissions**, y luego en **Additional permissions** marcamos **Request email address from users** y guardamos.
8. Nos vamos al tab de **Keys and tokens** y copiamos los **Consumer API Keys** que son los que usaremos como `TWITTER_CONSUMER_KEY` y `TWITTER_CONSUMER_SECRET` respectivamente.

## AUTENTICACIÓN CON TWITTER

De keygen.io un sha de 256 para el secret de session de twitter.

movies-api > npm run dev
ssr-server > npm run dev

Tuve que instalar express-session, lodash, passport-twitter

Probar http://localhost:8000/auth/twitter

## AUTENTICACIÓN CON FACEBOOK

A continuación veremos cómo podemos implementar la autenticación haciendo uso de la estrategia para Facebook. Es importante primero tener una cuenta de Facebook para desarrolladores: https://developers.facebook.com/ y crear una app/project como lo hemos hecho anteriormente para Google y Twitter. Podemos seguir las instrucciones aquí: https://developers.facebook.com/docs/apps, para obtener nuestros `FACEBOOK_CLIENT_ID` y `FACEBOOK_CLIENT_SECRET` respectivamente.

Lo primero es instalar nuestras dependencias.

> npm install passport-facebook

Luego creamos una nueva estrategia llamada `facebook` dentro de `utils/auth/strategies/facebook.js`:

Teniendo nuestra estrategia de **Facebook** ya podemos agregar las dos nuevas rutas de autenticación.

app.get('/auth/facebook'...

app.get('/auth/facebook/callback'...

# ASEGURAR TU APLICACIÓN DE EXPRESS

## SEGURIDAD CON HELMET Y NPM AUDIT

## AUTOMATIZAR EL CHECKEO DE VULNERABILIDADES CON SNYK

## QUÉ ES OWASP Y BUENAS PRÁCTICAS DE SEGURIDAD

## CONCLUSIONES Y CIERRE DEL CURSO