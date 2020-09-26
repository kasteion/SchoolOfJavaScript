# INTRODUCCIÓN A BACKEND FOR FRONTEND

## ¿QUÉ ES EL PATRÓN BACKEND FOR FRONTEND?

Es un patrón arquitectónico para crear backends separados para frontends específicos o múltiples interfaces, tanto móviles como web.

Aplica este patrón a tu proyecto sí:
- Usas diferentes lenguajes para desarrollar interfaces.
- Optimizas el backend según requerimientos de las interfaces.
- Tu equipo realiza cambios en el backend con frecuencia.

# INTEGRA PLATZIVIDEO CON LA API

## PREPARACIÓN DEL SERVIDOR E INSTALACIÓN DE DEPENDENCIAS

> git clone https://github.com/platzi/curso-backend-for-frontend.git

Clonar la versión final del curso de server side render.

Copiamos en server la carpeta ssr-server/utils/auth/strategies/basic.js del proyecto de passportjs, copiarlo a src/server/utils/auth/strategies/basic.js

Copiamos las rutas de /auth/sign-in y auth/sign-up del index.js del proyecto de passportjs a server/server.js

Luego instalamos dependencias:

> npm install passport passport-http @hapi/boom axios

Copiar el archivo .env-example a .env
        PORT=3000
        ENV=development
        API_URL=https://platzivideo-secured-api.now.sh
        API_KEY_TOKEN=8Q12039481932SDFASDFKMVCkdmfasdf

> npm install cookie-parser express-session

En el archivos src/server/server.js
        import cookieParser from 'cookie-parser'
        import boom from '@hapi/boom'
        import passport from 'passport'
        import axios from 'axios'

        //esto ya está
        const { ENV, PORT } = process.env;

        app.use(express.json())
        app.use(cookieParser())
        app.use(passport.initialize())
        app.use(passport.session())

        require('./utils/auth/strategies/basic')

> npm install @babel/polyfill

Y en el archivo src/server/index.js
        require('ignore-styles') // Ya está
        require('@babel/polyfill) // Agregar este
        require('@babel/register')({... // ya esta

## INSTALACIÓN Y CONFIGURACIÓN DE REDUX THUNK

Redux Thunk:
Nos permitirá trabajar con nuestros actions y hacer peticiones para trabajar un proyecto más unificado.

Actions:
Son objetos planos que se mandan para el flujo de nuestra información. Son objetos que estamos enviando con un payload y con un type para identificarlos. Lo que hace Redux Thunk es identificar si uno de estos actions tiene una función, ejecutarla y luego retornar el elemento ( que puede ser la data de una llamada a un api ) y de esta forma seguir con el flujo de la información. 

Redux Thunk es un middleware que vamos a utilizar dentro de nuestro proyecto.

> npm install redux-thunk

En src/frontend/index.js
    // Solo es que estoy agregando el applyMiddleware
    import { createStore, compose, applyMiddleware } from 'redux'
    import thunk from 'redux-thunk'

Luego debemos decirle a nuestro store y obviamente a nuestro proyecto que vamos a utilizar este middleware (thunk) y eso lo hacemos dentro de composeEnhacers
    const store = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))

Y con esto ya podemos trabajar con funciones dentro de nuestros actions así como los objetos que van a ser parte de los actions que estamos trabajando con nuestro proyecto.

## CONFIGURACIÓN DE REGISTRO DE USUARIO

Dentro de source/frontend/actions/index.js

Usamos redux-thunk para poder identificar actions que tienen una función internamente. Si redux-thunk detecta que la función no tiene una action no hace nada.

                import axios from 'axios';

                export const setError = (payload) => ({
                type: 'SET_ERROR',
                payload,
                });

                export const registerUser = (payload, redirectUrl) => {
                return (dispatch) => {
                axios.post('/auth/sign-up', payload)
                .then(({ data }) => dispatch(registerRequest(data)))
                .then(() => {
                window.location.href = redirectUrl
                })
                .catch(error => dispatch(setError(error)))
                };
                };

                export { setFavorite as default } 

Luego cambiamos src/frontend/containers/Register.jsx

Remplazamos
                import { registerRequest } from '../actions';

Por
                import { registerUser } from '../actions';

Y buscamos todos los registerRequest por registerUser.

Cambio 

                const handleSubmit = (event) => {
                event.preventDefault();
                props.registerUser(form);
                props.history.push('/');
                };

Por

                const handleSubmit = (event) => {
                event.preventDefault();
                props.registerUser(form, '/login');
                };

En src/server/server.js cambiar ${config.apiUrl} por ${process.env.API_URL} y resto de cambios en app.post('/auth/sign-up'...

Ejecutamos:

> npm install
>
> npm run start:dev

## PROBANDO NUESTRO REGISTRO DE USUARIO

Revisamos nuestra estrategia en src/server/utils/strategies/basic.js porque hay un problema con el config.

> npm install
> 
> npm run start:dev

## INTEGRACIÓN DEL INICIO DE SESIÓN

Vamos añadir un nuevo elemento a nuestros actions en src/frontend/actions/index.js

loginUser

Luego se cambia en /src/frontend/containers/Login.jsx para agregar el action (loginUser) que acabamos de crear.

## VALIDACIÓN DE RUTAS

Vamos a validar que rutas solo se pueden mostrar si el usuario ha inicado sesión.

En el archivo src/frontend/index.js vamos a crear una validación basada en el initialState que tenemos.

`<App isLogged={(preloadedState.user.id)}/>`

Luego nos vamos a modificar /src/frontend/routes/App.js agregando una validación basada en isLogged.

También hay que hacer cambios en /src/frontend/routes/serverRoutes.js

Luego también hay que modificar el renderApp de nuestro archivo /src/server/server.js

## INTEGRACIÓN DEL CIERRE DE SESIÓN

Cambiamos el /src/frontend/components/Header.jsx

## FETCH DE ESTADO INICIAL

Es hora de cargar el estado inicial de nuestra aplicación.

Para esto trabajamos en /src/server/server.js en la función renderApp

# IMPLEMENTACIÓN DE TESTING EN EL PROYECTO

## PRUEBAS UNITARIAS CON JEST

Instalamos las dependencias que vamos a utilizar:

> npm install jest enzyme enzyme-adapter-react-16 -D

Agregamos un scripts pa package.json

                "test": "jest",
                "test:watch": "jest --watch"

Vamos a trabajar sobre la carpeta frontend para añadir pruebas unitarias.

Creamos una carpeta en /src/frontend/ llamada __test__ y dentro de esta carpeta el archivo setupTest.js.

Luego creamos al final del package.json un nuevo elemento llamado "jest"

                "jest": {
                "setupoFilesAfterEnv": [
                "<rootDir>/src/frontend/__test__/setupTest.js"
                ]
                }

## CONFIGURACIÓN DE FILEMOCKS Y STYLEMOCKS

Antes de crear nuestras primeras pruebas debemos garantizar que tenemos los mocks necesarios para los archivos (imagenes de nuestro proyecto) y los estilos.

Vamos a crear una carpeta en /src/frontend/ llamada __mocks__ y dentro de esta carpeta creamos el archivo styleMock.js y el archivo fileMock.js

Luego en el archivo de package.json creamos un nuevo elemento dentro del objeto "jest".

Así quedaría el objeto "jest" dentro de package.json

                "jest": {
                "setupoFilesAfterEnv": [
                "<rootDir>/src/frontend/__test__/setupTest.js"
                ],
                "moduleNameMapper": {
                "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/frontend/__mocks__/fileMock.js",
                "\\.(scss|css|sass)$": "<rootDir>/src/frontend/__mocks__/styleMock.js"
                }
                }

## IMPLEMENTANDO PRUEBAS EN EL FOOTER

Hora de realizar nuestras primeras pruebas. Una de las convencios es identificar el espacio donde las vamos a añadir. Ordenar los elementos de acuerdo a como hemos organizado los elementos de nuestro proyecto.

La prueba del footer la creo en `/src/frontend/__test__/components/Footer.test.js`.

## IMPLEMENTANDO SNAPSHOTS

Un snapshot nos va a permitir a nosotros garantizar que la UI no cambie bruscamente. Digamos nosotros hacemos un cambio y lo mandamos a producción con doble elementos o sin algun elemento.

Debemos instalar:

> npm install --save-dev react-test-renderer

Luego nos vamos siempre al test del Footer (Footer.test.js)

Si al final si quiero el elemento pues tengo que hacerle un update al snapshot para que pase la prueba con.

> jest --updateSnapshot

O como dice la consola con:

> npm run test -- -u

## CREANDO MOCKS DEL STORE

El proyecto incorpora herramientas como React Router y Redux. Cuando probamos un componente que incorpora estas herramientas debemos garantizar que funciona de forma correcta. Esto lo hacemos por medio de un provider que garantiza que el store llega a los componentes y puede montar los elementos que recibe y probar cada una de las particulares que tienen los elementos que son parte de nuestro projecto.

En ``src/frontend/__mocks__` creamos un archivo llamado ProviderMock.js

## IMPLEMENTANDO PRUEBAS EN EL HEADER

Creamos el test del header en `/src/frontend/__test__/components/Header.test.js`

## PROBANDO EL ENVÍO DEL FORMULARIO

Tenemos que garantizar que las diferentes partes de nuestro proyecto tengan una prueba. Partes como inicio de sesión, registro, las funciones de gravatar. Estas son las partes que debemos garantizar que funcionan.

Esta prueba va a depender del componente Register.jsx

Creamos una nueva prueba en `/src/frontend/__test__/containers/Register.test.js`

## PROBANDO GRAVATAR FUNCTION

Una prueba para ver si cada vez que le envío un correo electrónico a la función de gravatar me devuelve una imagen.

Creamos la prueba en `/src/frontend/__test__/utils/gravatar.test.js`

## PROBANDO ACCIONES

Debemos crear un mock para las actions. Creamos un elemento en `/src/frontend/__mocks__/MovieMocks.js`

Tambien creamos `/src/frontend/__test__/actions/index.js`

## JEST COVERAGE

Ya añadimos pruebas a nuestro proyecto, pero es el momento de ver como obtener informes de nuestras pruebas y el coverage de las mismas.

En package.json se activa el modo verbose
                "jest": {
                        "verbose": true,
                        ...
                }

Para coverage tambien tenemos que agregar un nuevo script.
        "test:coverage": "jest --coverage"

Esto genera un reporte de coverage en la consola pero tambien genera uno en html más facil de ver.

# DESPLIEGUE DEL FRONTEND

## DESPLEGAR PLATZI VIDEO EN HEROKU

Una de las fases importantes dentro de la construcción de tus aplicaciones es desplegarlas a producción.

**Crear una cuenta en Heroku**
Para crear una cuenta en Heroku es muy fácil, solo debes de ingresar al sitio https://heroku.com y en la esquina superior izquierda crear una cuenta.

Una vez creada la cuenta vamos a crear un proyecto donde vivirá tu aplicación de Platzi Video.

En el dashboard eliges la opción de "New" asignas un nombre a tu aplicación, "platzivideo-app".

Elegir la región donde se encuentra físicamente el servidor... "United States".

Y por último le damos "Create App".

**Conectar proyecto**
Ahora ha llegado el momento de conectar nuestra aplicación con Heroku, tienes dos opciones, conectar con el servicio de git privado que te ofrece Heroku o conectar con tu repositorio de GitHub.

Con la opción "Heroku Git" se puede controlar mejor el flujo de la aplicación. Es necesario instalar "Heroku Cli" para poder trabajar mejor desde la terminal.

Una vez instalado "Heroku CLI" debemos iniciar sesión y conectar nuestra aplicación con el repositorio privado que nos ofrece Heroku.

> heroku login

Este comando abre una nueva ventanan de tu navegador donde permite iniciar sesión. Una vez autenticados con Heroku, se puede conectar el proyecto al repositorio remoto.

Se puede iniciar con 

> git init

Conectar remotamente con:

> heroku git:remote -a NOMBRE-PROYECTO

Agregar todos los cambios con

> git add .

Crear un commit 

> git commit -m 'Deploy Platzi Video'

Enviar los cambios a Heroku

> git push heroku master

Este comando desencadena el primer despliegue de la apliación, lo más probable es que falle ya que falta configurar algunas variables de entorno. 

**Preparar proyecto**
Especificar versión de Node, para esto vamos a editar nuestro archivo "package.json" y añadir el siguiente código:

                "engines": {
                        "node": "12.16.x"
                }

Agregar las varaibles de entorno a Heroku.

Para agregar las variables de entorno es necesario ingresar al panel administrativo de tu proyecto y visitar la sección de "Settings", donde encontrarás la información de tu aplicación y luego la sección de "Config Vars".

Deberás añadir cada una de las variables de entorno a la configuración de Heroku.

Ahora estan todos los elementos listos y hay que enviar el cambio del engine de node para que se compile el proyecto, guarda los cambios y súbelos a heroku.

Espera por el despliegue automático.

> git push heroku master

Cada vez que necesites desplegar tus proyectos, debes de trabajar con el flujo de git, guardando cambios y enviando a la rama principal, esto desencadena un despliegue.

Si quieres ver el output del despliegue puedes ejecutar el siguiente comando:

> heroku logs --tail --app NOMBRE-APP

# MALAS

Cuando creamos un thunk con Redux Thunk nuestra función recibe dos parámetros: