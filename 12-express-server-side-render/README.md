# CONOCIMIENTOS NECESARIOS PARA APLICAR SSR

## INTRODUCCIÓN AL CURSO

Integrar una aplicación hecha en react del lado del cliente y servirla desde el lado del servidor con ayuda de node y express.

Hasta ahora hemos aprendido:
- A Configurar el entorno
- Maquetación y buenas prácticas
- Fundamentos de Javascript
- Javascript avanzado
- React.js
- Node.js

Requisitos:
- Node.js
- Webpack
- React
- Terminal

## PRESENTACIÓN DEL PROYECTO DEL CURSO Y SUS HERRAMIENTAS

Para aplicar la estrategia de server side rendering es necesario contar con una aplicación con ciertos requisitos mínimos, usando ciertas herramientas y estrategias especificas a lo largo del curso. En este curso se va a necesitar ReactJS, React Router y Redux. Pero se puede aplicar server side render a basicamente cualquier proyecto que tenga un cliente.

Las herramientas princiaples que se van a estar usando en el curso son:

- Babel: Transforma nuestro código.
- Express: Framework de aplicaciones web en Node.js
- React.js: Librería en Javascript para crear componentes interactivos.

## ¿QUÉ ES SERVER SIDE RENDERING?

Dos conceptos fundamentales:

**Client Side Rendering (CSR)**

Este proceso es lo habitual, lo que hacemos normalmente. Basicamente tenemos un archivos que contiene el contenido de nuestra aplicación, ese archivo se descarga del lado del clinete y la aplicación sera utilizable hasta que se termine de descargar el archivo.
- Servidor enviando respuesta al navegador
- Navegador descarga JS
- Navegador ejecuta React
- El sitio ahor es visible e interactuable

**Server Side Rendering (SSR)**

- Servidor enviando respuesta en HTML para ser renderizada en el navegador. (El server toma la aplicación y envía un html con la vista de la aplicación)
- El navegador renderiza el sitio. Ahora es visible mientras el navegador descarga el JS
- Navegador ejecuta React
- El sitio es interactivo

**¿Por qué renderizar desde el servidor?**
- La primera carga más rápida.
- Mejora SEO 
- Look & Feel

# PREPARANDO ENTORNO PARA APLICAR SSR

## ACTUALIZANDO DEPENDENCIAS EN NPM

1. Buscamos un proyecto que contenga react, react-router y redux.
2. Creamos una nueva rama del proyecto con `git checkout -b nombre_rama`.
3. Verificar las ramas que hay que actualizar: `npm outdated`.
4. Para actualizar la aplicación ingresamos: `npm update`.
5. Para verificar si hubo actualización de paquetes, lo hacemos con: `git status`.
6. Para verificar las dependencias actualizadas, ingresamos `git diff`.
7. Volvemos a verificar las dependencias que tenemos que actualizar con: `npm outdated`.
8. Hay dependencias que no se pueden actualizar directamente con el comando `npm update`, porque estas dependencias tienen otras dependencias que pueden estar siendo utilizadas por otras dependencias.
9. Corremos la aplicación (`npm run start`) para verificar que todavía funciona la aplicación y que el proceso de actualización de dependencias se realizó exitosamente. 

## CREACIÓN DEL SERVIDOR EN EXPRESS

1. Creamos 2 carpetas dentro de la carpeta src.
    - src/server: fuentes con toda la lógica relacionada con el servidor.
    - src/frontend: funets con toda la lógica relacionada con la app.
2. Movemos todos los archivos de nuestra app en react ubicada actualmente en la carpeta src, hacia src/frontend.
3. Creamos en la carpeta src/server 2 archivos, index.js y server.js
4. Instalamso la siguiente dependencia: `npm install @babel/register`
5. En el archivo src/server/index.js, agregaroms la siguiente configurción:
        require('@babel/register')({
            presets:['@babel/preset-env', '@babel/preset-react']
        })
        require('./server')
6. Instalamos más dependencias: `npm install express dotenv`.
7. Express sirve para poder instalar nuestro servidor local y dotenv se utiliza para manejar nuestras variables de entorno.
8. Agregamos todo el código necesario para correr el servidor de express en el archivo src/server/server.js
9. Creamos un nuevo script en el archivo package.json, para poder ejecutar nuestro servidor:
        "scripts": { "start:dev": "node src/server/index" }
10. Ejecutamos nuestro servidor desde la consola con `npm run start:dev`.
11. Desde el navegador de Google Chrome, ingresamos a la dirección localhost:3000 para verificar que esta funcionando nuestro servidor de express.

## USANDO NODEMON Y DOTENV

> $ npm install nodemon --dev
>
> $ npm install dotenv

## INTEGRACIÓN DE WEBPACK CON EXPRESS

> npm install webpack-dev-middleware webpack-hot-middleware --save-dev
>
> npm install react-hot-loader --save-dev

En webpack.config.js
> const webpack = require('webpack')
> 
> entry: ['./src/frontend/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true'],
>
> mode: 'development',
> En Plugins:
> new webpack.HotModuleReplacementPlugin(),

# INTEGRACIÓN DE EXPRESS CON REACT

## SERVIR REACT CON EXPRESS

1. Mover el contenido de public/index.html as res.send de src/server/server.js
2. Borrar el HtmlWebPackPlugin del webpack.config.js
3. Cambiar filename de MiniCssExtractPlugin por assets/app.css del webpack.config.js
4. Cambiar el filename del output a assets/app.js del webpack.config.js
5. Agregar `<link rel="stylesheet" href="assets/app.css" type="text/css">` y `script src="assets/app.js" type="text/javascript"></script>` al res.send de src/server/server.js 

Se deshabilita javascript para probar si la aplicación se esta renderizando desde el server (inpect --> settings) (Todavía no aún falta)

## ABSTRAYENDO REACT ROUTER, CREANDO HISTORY Y HACIENDO INITIALSTATE MÁS ACCESIBLE

Instalar dos dependencias
> npm install history react-router-config
Si fuera necesario instalar
> npm install react-router

En src/frontend/index.js
        import { createBrowserHistory } from 'history'
        import { Router } from 'react-router'
        const history = createBrowserHistory()

        <Provider store={store}>
            <Router history={history}>
                <App />

Crear routes/serverRoutes.js
        importar los componentes de react que están en routes/app.js

        const routes = [
            {
                exact: true,
                path: '/',
                component: Home
            },
            ... Para todas las rutas del src/frontend/index.js (solo lo que esta dentro del switch) solo el default (la ultima ruta es)
            {
                name: 'NotFound',
                component: NotFound
            }
        ]

        export default routes

Crear src/frontend/initialState.js
    Y mover todo el initialState a ese archivo
    export default initialState;

import initialState en frontend(index.js)

# APLICAR SERVER SIDE RENDERING

## DEFINICIÓN DE LA FUNCIÓN PRINCIPAL PARA REALIZAR EL RENDERIZADO DESDE EL SERVIDOR

Crear dos funciones principales para:
1. Convertir todos nuestros componentes en un string para poder ser enviados al servidor, desde el servidor y hacia el cliente.
2. Para reusar un poco la lógica del string que tomamos como html.

En src/server/server.js
        import React from 'react'
        import { renderToString } from 'react-dom/server'
        import { Provider } from 'react-redux'
        import { createStore } from 'redux'
        import { renderRoutes } from 'react-router-config'
        import { StaticRouter } from 'react-router-dom'
        import serverRoutes from '../frontend/routes/serverRoutes'
        import reducer from '../frontend/reducers'
        import initialState from '../frontend/reducers'
        
        // debajo del if (env === development)
        const setResponse = (html) => {
            return (
                `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Platzi Video</title>
                    <link rel="stylesheet" href="assets/app.css" type="text/css">
                </head>
                <body>
                    <div id="app">${html}</div>
                    <script src="assets/app.js" type="text/javascript"></script>
                </body>
                </html>`
            );
        }

        const renderApp = (req, res) => {
            const store = createStore(reducer, initialState);
            const html = renderToString(
                <Provider store={store}>
                    <StaticRouter location={req.url} context=[{}]>
                        { renderRoutes(serverRoutes) }
                    </StaticRouter>
                </Provider>
            )
            res.send(setResponse(html))
        }

        app.get('*', renderApp)

> npm install ignore-styles

    En src/server/index.js
        require('ignore-styles')

Otra vez probar deshabilitando javascript (Casí listo)

## ASSETS REQUIRE HOOK

Es momento de aplicar ajustes para que los assets se cargen bien desde el lado del servidor y poder enviarlos al cliente de manera eficiente.

Nos podemos apoyar de una dependencia llamada asset-require-hook.

> npm install asset-require-hook

En el archivo src/server/index.js

        // debajo de lo de babel
        require('asset-require-hook')({
            extensions: ['jpg', 'png', 'gif'],
            name: 'assets/[hash].[ext]'
        })

## HYDRATE Y ESTADO DE REDUX DESDE EXPRESS

Actualmente hacemos un doble renderizado porque estamos convirtiendo todo en un string y renderizandolo y luego estamos renderizando nuevamente toda la aplicación con su respectivo javascript.

El proceso fundamental de server side rendenring consiste en dos procesos. 

1. Renderizar a un string
2. Hidratar el string con todo su javascript.

En src/frontend/index.js hay que buscar el ReactDom.render y cambiarlo por un ReactDom.hydrate

Estamos definiendo el estado 2 veces y estamos usando dos veces el initial state en el backend y en el frontend.

En src/server/server.js
    Dentro de renderApp
        const store = createStore(reducer, initial
        const preloadedState = store.getState()
        .
        .
        .
        res.send(setResponse(html, preloadedState))

De acuerdo a https://redux.js.org/recipes/server-rendering/

En el html del setResponse de src/server/server.js
        // debajo de `<div id="app">${html}</div>`
        `<script>`
            `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}`
        `</script>`

En src/frontend/index.js
    Eliminamos el import del initial state
        // Debajo del const history
        `const preloadedState = window.__PRELOADED_STATE__`
        // Y luego debajo del store...
        `delete window.__PRELOADED_STATE__`

# TRABAJA CON ENTORNOS DE DESARROLLO Y PRODUCCIÓN

## CONFIGURANDO NUESTRO SERVIDOR PARA PRODUCCIÓN

Ponerle en src/server/server.js
        else {
            app.use(express.static(`${__dirname}/public`));
        }

Crear la carpeta src/server/public

Helmet: https://helmetjs.github.io una forma de asegurar nuestro express con varios middlewares para asegurar un poco nuestra aplicación. Helmet tiene 13 middleware para deshabilitar o habilitar cabeceras y evitar ataques.

> npm install helmet

En src/server/server.js
        import helmet from 'helmet'

        en el else de producción
        app.use(helmet())
        app.use(helmet.permittedCrossDomainPolicies())
        app.disabled('x-powered-by)

En el .gitignore agregar
        src/server/public

## CONFIGURANDO WEBPACK PARA PRODUCCIÓN

En package.json modificar el comando build:
    "build": "webpack-cli --config webpack.config.js"
Eliminar el comando:
    "start"

Probar
> npm run build

En webpack.config.js
        // Abajo de const MiniCSSExtractPlugin
        require('dotenv').config()
        const isDev = (process.env.ENV === 'development')
        const entry = [ quitar webpack-hot-middleware]
        if (isDev){
            entry.push(webpack-how-middleware...)
        }

        entry,
        mode: process.env.ENV

        plugins: [
            isDev ? new webpack.HotModuleReplacementPlugin():
            () => {},
            new MiniCss... etcetera.
        ]

En el .env
        ENV=production
        PORT=3001

Ejecutar:
> npm run build

Ejecutar:
> node src/server

## OPTIMIZACIÓN DEL BUILD

Hay que hacer otra serie de arreglos para optimizar el proceso de construcción de nuestro build. En este caso minificarlo y hacer una compresión gz. Para que tenga muchísimo menos peso y pueda ser accedido más rápidamente.

En el package.json
    Quitar de los modulos el html-loader
    Quitar de las dev dependencies quitar la dependencia de html-loader y html-webpack-plugin.

> npm install

> npm install compression-webpack-plugin --save-dev

En webpack.config.js
        const CompressionWebpackPlugin = require('compression-webpack-plugin')
        Y al final en los plugins
        debajo de is dev de webpack.hotmodulereplacementplugin
        isDev ? () => {} : new CompressionWebpackPlugin({
            test: /\.js$|\.css$/,
            filename: '[path].gz'
        })

> npm run build

Se crean los archivos css y archivos gz

> node src/server

La configuración para que carge archivos .gz se hace desde nginx.

> npm install terser-webpack-plugin --save-dev

        const TerserPlugin = require('terser-webpack-plugin')

        
        module.exports = {
            //Despues de resolve, antes de module:.
            optimization: {
                minimize: true,
                minimizer: [new TerserPlugin()]
            }
        }

> npm run build

> node src/server

## APLICAR HASHES AL NOMBRE DE NUESTROS BUILDS

En webpack.config.js
    En output: {
        filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js'
    }

    Al final del archivo en MiniCssExtractPlugin
    new MiniCssExtractPlugin({
        filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css
    })

> npm run build

Les pone a los archivos el hash del build de webpack.

npm install webpack-manifest-plugin

En webpack.config.js
        const ManifestPlugin = require('webpack-manifest-plugin')
        ...
        En la sección de plugins antes de new MiniCssExtractPlugin
        isDev ? () => {} : new ManifestPlugin(),

> npm run build

Crea un manifest.json en donde hace una referencia del nombre del archivo original y el archivo con su hash.

Crear en src/server/getManifest.js
        import fs from 'fs'
        const getManifest = () => {
            try {
                return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
            } catch (error) {
                console.log(err)
            }
        }
        export default getManifest

En src/server/server.js hay que crear un middleware
        import getManifest from './getManifest'
        // ... En el else de dev==='development' antes de app.use(express.static...)
        app.use((req, res, next) => {
            if (!req.hashManifest) req.hashManifest = getManifest()
            next()
        })
        // Un tercer parametro al setResponse
        const setResponse = (html, preloadState, manifest) => {
            ...
        }

        //en renderApp
        res.send(setResponse(html, preloadedState, req.hashManifest))
    
        // en setResponse nuevamente al principio
        const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css'
        const mainBuild = manifest ? manifest['main.js']: 'assets/app.js'

        cambiar 
        <link rel="stylesheet" href="${mainStyles}"...>
        <script src="${mainBuild}...>

> npm run build

> node src/server

# BUENAS PRÁCTICAS DE SERVER SIDE RENDER

## VENDORFILES EN WEBPACK: DEFINIENDO CACHEGROUPS

Pero no solo eso tambien se puede aplicar la estrategia de los vendorfiles. Con vendorfiles se pueden abstraer los archivos y separar la lógica que se programa de los archivos que se importan...

en webpack.config.js
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            splitChunks: {
                chunks: 'async', 
                name: true,
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        chunks: 'all',
                        reuseExistingChunk: true,
                        priority: 1,
                        filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
                        enforce: true
                    }
                }
            }
        }
## VENDOR FILES EN WEBPACK: GENERANDO EL VENDORFILE

en webpack.config.js
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
            splitChunks: {
                chunks: 'async', 
                name: true,
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        chunks: 'all',
                        reuseExistingChunk: true,
                        priority: 1,
                        filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
                        enforce: true,
                        test(module, chunks) {
                            const name = module.nameForCondition && module.nameForCondition();
                            return chunks.some(chunk => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name));
                        }
                    }
                }
            }
        }

> $ npm run build

En src/server/server.js
            // En setResponse
            const vendorBuild = mainifest ? manifest['vendors.js'] : 'assets/vendor.js';

            //Y agregar un segundo script al return de set response.

> $ npm run build

> $ node src/server

## CONFIGURACIÓN DE ESLINT

Airbnb propone una serie de reglas. Desde lado de webpack se puede configurar el ESLint para que nos arroje una serie de alertas.

> $ npm install eslint-loader eslint --save-dev

En el webpack.config.json

        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader'
                }, ...
                aqui están las otras reglas
            ]
        }

Para verificarlo:

npm run start:dev
Todo falla porque tenemos un monton de errores.

en package.json
        "scripts": {
            ....
            "start:dev"...
            "lint": "eslint src/frontend/ --ext .js --ext .jsx --fix"
        }

En los botons type='button'

Un Deconstruct en el Player.

# ALTERNATIVAS AL SSR CON EXPRESS

Existen multiples alternativas o frameworks que nos permiten hacer de forma más eficiente. Por ejemplo Gatsbyjs y Next.js.

## CÓMO IMPLEMENTAR NEXT.JS

Crear una carpeta en el root

nextjs

> $ cd nextjs
>
> $ npm init
>
> description: Next js en clase
>
> $ npm install react react-dom next


Editar el package.json
    "scripts": {
        ...
        "dev": "next",
        "build": "next build",
        "start": "next start"
     }

Crear una nueva carpeta next/pages
Y crear un nuevo archivo: next/pages/index.js

## CÓMO USAR GATSBY.JS

Otra herramienta muy poderosa para crear aplicaciones super rápidas (para tener un MVP) y con una estructura de creación de proyecto bastante sencilla es gatsbyjs.

> npm install -g gatsby-cli

nos vamos al root de nuestro proyecto y ejecutamos:

> gatsby new platzivideo-gatsby

> cd platzivideo-gatsby
> 
> gatsby develop

## CUANDO USAR CADA UNA DE LAS HERRAMIENTAS PRESENTADAS

1. Definir bien el objetivo del proyecto. (Para saber que herramientas usar)
2. Definir el alcance del proyecto. (Para saber que herramientas usar)
3. El tiempo de entrega, si tengo un deadline amplio es recomendado utilizar express.js
4. Entorno de producción. Con express hay que levantar un servidor, con gatsby se pueden generar sitios estaticos. Express permite manejar rutas dinámicas, atrapando la ruta y sirviendo multiples aplicaciones dependiendo de la ruta.