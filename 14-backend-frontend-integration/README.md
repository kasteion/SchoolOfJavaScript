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

## INTEGRACIÓN DEL CIERRE DE SESIÓN

## FETCH DE ESTADO INICIAL

# IMPLEMENTACIÓN DE TESTING EN EL PROYECTO

## PRUEBAS UNITARIAS CON JEST

## CONFIGURACIÓN DE FILEMOCKS Y STYLEMOCKS

## IMPLEMENTANDO PRUEBAS EN EL FOOTER

## IMPLEMENTANDO SNAPSHOTS

## CREANDO MOCKS DEL STORE

## IMPLEMENTANDO PRUEBAS EN EL HEADER

## PROBANDO EL ENVÍO DEL FORMULARIO

## PROBANDO GRAVATAR FUNCTION

## PROBANDO ACCIONES

## JEST COVERAGE

# DESPLIEGUE DEL FRONTEND

## DESPLEGAR PLATZI VIDEO EN HEROKU

# CONCLUSIONES

## CONCLUSIONES Y CIERRE