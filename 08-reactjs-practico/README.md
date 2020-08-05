# ¿QUÉ ES REACT JS?

## ¿QUÉ ES REACT JS?

**React** es una librearía (o biblioteca) desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio.

Cada pequeña parte de nuestra página web la conoceremos como "**Componente**". Cada componente se encargará de una función en específico. Además, podremos reuitilizar nuestro componentes siempre que lo necesitemos.

Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.

## DOM, VIRTUAL DOM Y REACT DOM

El **DOM** es el código HTML que se transforma en páginas web. Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

El **Virtual DOM** es una herramienta que usan tecnologías com React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero **React DOM** lo hace por nosotros.

# CREAR UNA APLICACIÓN CON REACT JS  
  
## CREATE REACT APP Y TIPOS DE COMPONENTES

### Inicialización de un proyecto en React

Creación de nuestro sitio web utilzando la plantilla (boilerplate) por defecto: 

> npx create-react-app nombre-de-tu-proyecto

En este caso:

> npx create-react-app holamundo
>
> cd holamundo
>
> npm run start

### Creación y Tipos de Componentes

Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.

Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida.

Este es en Stateful.js

    import React, { Component } from 'react';

    class Stateful extends Component {
      constructor(props) {
        super(props)

        this.state = { hello: 'Hola Mundo'}
      }

      render() {
        return (
          <h1>{this.state.hello}</h1>
        )
      }
    }

    export default Stateful

También tenemos componentes Stateless o Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX

Este es en Stateless.js

    import React from 'react'

    const Stateless = () => {
      return (
        <h1>Hola Mundo</h1>
      )
    }

    export default Stateless;

Este es en Representational.js

    import React from 'react'

    const Representational = () => <h1>Hola Mundo</h1>

    export default Representational

## JSX: JAVASCRIPT + HTML

Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript  en archivos .js.

React usa **JSX**: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.

    import React from 'react'

    const HolaMundo = () => {
      const claseCSSHolaMundo = 'container-red'
      const mensajeTextoHTML = '¡Hola, Mundo!'

      return (
          <div className={claseCSSHolaMundo}>
            <h1>{mensajeTextoHTML}</h1>
            {isTrue ? '¡Es verdad! :D': '¡No es verdad! :('}
          </div>
      )
    }

    export default HolaMundo


## PROPS: COMUNICACIÓN ENTRE COMPONENTES

Los **Props** son las forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

    //Button.jsx
    import React from 'react'

    const Button = props => {
      return (
        <div>
          <button type="button">{props.text}</button>
        </div>
      )
    }

    export default Button

    // index.jsx
    import React from 'react'
    import Button from './components/Button'

    ReactDOM.render(
      <Button text="¡Hola!" />,
      document.getElementById('root')
    )

## ¿QUÉ SON LOS MÉTODOS DEL CICLO DE VIDA?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan "Ciclo de vida del componente" es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario. 

Los componetes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje:

En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

### Actualización:

En esta fase nuestro componete está al pendiente de cambios que pueden venir a través de un cambio en "state" o "props" esto en consecuencia realiza una acción dentro de un componente.

### Desmonjate:

En esta etapa nuestro componente "Muere" cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene el DOM.

### Manejo de Errores:

Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación. 

Algo que debemos tener encuenta es que un componente NO debe pasar por todas las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

### Montado:

#### Constructor()

> Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

#### getDerivedStateFromProps()

> Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

#### render()

> Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación. 

#### ComponentDidMount()

> Este método se llama inmediatamente despues que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

### Actualización:

#### getDerivedStateFromProps()

> Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

#### shouldComponentUpdate()

> Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

#### render()

> Se llama el método render que representa los cambios en el DOM.

#### componentDidUpdate()

> Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

### Desmontado

#### componentWillUnmount()

> Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores:

#### getDerivedStateFromError()

> Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

#### componentDidCatch()

> Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

##  STATE - EVENTS

React nos permite responder a las interacciones de los usuarios con propiedades como `onClick`, `onChange`, `onKeyPress`, `onFocus`, `onScroll`, entre otras.

Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

    class Button extends React.Component {
      state = { count: 0 }
    
      handleClick = () => {
        this.setState({ count: this.state.count + 1 })
      }

      render() {
        const { count } = this.state
        return (
          <div>
            <h1>Manzanas: {count}</h1>
            <button onClick={this.handleClick}>Sumar</button>
          </div>
        )
      }
    }

Recuerda que los nombres de estos eventos deben serguir la nomenclatura camelCase.

## INSTALACIÓN Y CONFIGURACIÓN DE ENTORNO

> $ mkdir platzivideo
>
> $ cd platzivideo
>
> $ git init
>
> $ npm init -y
>
> $ mkdir src
>
> $ mkdir src/components
>
> $ mkdir public
>
> $ touch public/index.html
>
> $ npm install react react-dom

## AGREGANDO COMPATIBILIDAD CON TODOS LOS NAVEGADORES USANDO BABEL

**Babel** es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

Instalación de Babel y otras herrameintas para que funcione con React:

> $ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

Configuración de Babel (.babelrc):

    {
      "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
      ]
    }

# CONFIGURAR UN ENTORNO DE TRABAJO PROFESIONAL
  
## WEBPACK: EMPAQUETANDO NUESTROS MÓDULOS

**Webpack** es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

> $ npm install --save-dev webpack webpack-cli html-webpack-plugin html-loader

Configuración de Webpack (webpack.config.js):

    const path = require('path')
    const HtmlWebPackPlugin = require('html-webpack-plugin')

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './public/index.html',
                filename: './index.html'
            })
        ]
    }

Script para ejecutar las tareas de Webpack (`package.json`):

    {
      'scripts': {
        'build': 'webpack --mode production'
      }
    }

Luego de esto ya podemos ejecutar

> $ npm run build

## WEBPACK DEV SERVER: REPORTE DE ERRORES Y CAMBIOS EN TIEMPO REAL

Para poder ver los cambios de nuestro proyecto en tiempo real necesitamos un server.

Instalación de **Webpack Dev Server**:

> $ npm install --save-dev webpack-dev-server

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (`package.json`):

    {
      "scripts": {
        "build": "webpack --mode production",
        "start": "webpack-dev-server --open --mode development"
      }
    }

## ESTILOS CON SASS

Los **preprocesadores** como **Sass** son herramientas que nos permiten escibir CSS con una sintaxis un poco diferente y mas amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

> $ npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

Configuración de Sass en Webpack (`webpack.config.js`):

    const MiniCssExtractPlugin = require('mini-css-extract-plugin')

    //...

    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }

    //...

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css'
      })
    ]

## CONFIGURACIÓN FINAL: ESLINT Y GIT IGNORE

El **Git Ignore** es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo `.gitignore` y escribir los nombres de los archivos y/o carpetas que no queremos publicar. 

Los linters como **ESLint** son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo para nuestro código.

Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan. 

Instalación de ESLint:

> npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Podemos configurar las reglas de ESLint en el archivo `.eslintrc`.

El git ignore propuesto se puede encontrar aquí:

https://gist.github.com/gndx/60ae8b1807263e3a55f790ed17c4c57a

El eslintrc propuesto lo podemos encontrar aquí:

https://gist.github.com/gndx/747a8913d12e96ff8374e2125efde544

## ARQUITECTURA DE COMPONENTES PARA PLATZI VIDEO

public/index.html

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Platzi Video</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
    </html>

src/containers/App.js

    import React from 'react'
    const App = () => {
      return (
        <h1>React App</h1>
      )
    }
    export default App

src/index.js

    import React from 'react'
    import ReactDOM from 'react-dom'
    import App from './containers/App'
    ReactDOM.render(
      <App/>, document.getElementById('app')
    )

# LLEVAR UN DISEÑO DE HTML Y CSS A REACT
  
## ESTRUCTURA DEL HEADER

Archivos:

> Header.jsx
>
> App.jsx

## ESTILOS DEL HEADER

Archivos:

> Header.jsx
>
> Header.scss

## ESTRUCTURA Y ESTILOS DEL BUSCADOR

Archivos: 

> Search.jsx
> 
> Search.scss

## ESTRUCTURA Y ESTILOS DE CAROUSEL Y CAROUSEL ITEM

Archivos:

> CarouselItem.jsx
> 
> Carousel.jsx
>
> Carousel.scss

## ESTRUCTURA Y ESTILOS DEL FOOTER

Archivos:

> Footer.jsx
>
> Footer.scss

## AÑADIENDO IMÁGENES CON WEBPACK

Vamos a usar **File Loader** para acceder a las imágenes de nuestro proyecto desde el código.

Inicialmente, estos archivos estáticos se encuentran junto al código de desarrollo. Pero al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usermos las imágenes) con los nuevos nombres y rutas de los archivos.

Instalación de File Loader:

> $ npm install --save-dev file-loader

Configuración de File Loader en Webpack (`webpack.config.js`):

    rules: [
      {
        test: /\.(png|gif|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]'}
          }
        ]
      }
    ]

Uso de File Loader con React:

    import React from 'react'
    import nombreDeLaImagen from '../assets/static/nombre-del-archivo'

    const Component = () => (
      <img src={nombreDeLaImagen} />
    )

    export default Component;

## IMPORTS, VARIABLES Y FUENTES DE GOOGLE EN SASS

Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

    $theme-font: 'Muli, sans-serif';
    $main-color: #8f57fd;

    body {
      background: $main-color;
      font-family: $theme-font;
    }

Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

    //Vars.scss
    $theme-font: 'Muli, sans-serif';
    $main-color: #8f57fd;

    // App.scss
    @import "./Vars.scss"

    body {
      background: $main-color;
      font-family: $theme-font;
    }

También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.

@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)

# USO DE UNA API DE DESARROLLO (FAKE API)

## CREANDO UNA FAKE API

Vamos a usar **JSON Server** para crear una Fake API: una API "falsa" construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

> $ sudo npm install json-server -g
> 
> Recuerda que en Windows debes correr tu terminal de comandos en modo administrador
>
> Ejecutar el servidor de JSON Server:
>
> json-server archivoParaTuAPI.json

## REACT HOOKS: USEEFFECT Y USESTATE

**React Hooks**: Una característica de React disponible a partir de la versión 16.8 que nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones.

Implementado por la dificultad de pasar información de componente a componente. El uso de los constructores y el binding. Funciona a partir de la versión 16.8

## LECTURA REACT HOOKS

Los **React Hooks** son una característica de React que tenemos disponible a partir de la versión 16.8. Nos permiten agregar estado y ciclo de vida a nuestros componentes creados como funciones. 

El Hook **useState** nos devuelve un array con dos elementos: la primera posición es el valor de nuestro estado, la segunda es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

    import React, { useState } from 'react';

    const Component = () => {
      const [name, setName] = useState('Nombre por defecto')
      return (<div>{name}</div>)
    }

El Hook **useEffect** nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

El primer argumento que le enviamos a useEffect es una función que se ejecutará cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

El segundo argumento es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componentes.

    import React, { useState, useEffect } from 'react'
    
    const Component = () => {
      const [name, setName] = useState('Nombre por defecto')

      useEffect(() => {
        document.title = name
        return () => {
          document.title = 'El componente se desmontó'
        }
      }, [name]) 
      return <div>{name}</div>
    }

No olvides importar las funciones de los hooks desde la librería de React. También puedes usarlos de esta forma: `React.useNombreDelHook`

## CUSTOM HOOKS

React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones: 
- Los hooks siempre deben empezar con la palabra `use`: useAPI, useMovies, useWhatever.
- Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
- Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo: name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.

## PROPTYPES

Los **PropTypes** son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

Instalación de PropTypes:

> $ npm install prop-types

Uso de PropTypes:

    import React from 'react'
    import PropTypes from 'prop-types'

    const Component = ({ name, lastName, age, list }) => {
      // ...
    }

    Component.propTypes = {
      name: PropTypes.string,
      lastName: PropTypes.string,
      age: PropTypes.number,
      list: PropTypes.array
    }

    export default Component
  
Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo `isRequired`.

    Component.propTypes = {
      name: PropTypes.string.isRequired, //obligatorio
      lastName: PropTypes.string.isRequired, //obligatorio
      age: PropTypes.number, // opcional
      list: PropTypes.array // opcional
    }

# USAR REACT TOOLS
  
## DEBUGGEANDO REACT CON REACT DEVTOOLS

**React DevTools** es un herramienta muy parecida al inspector de elementos. Nos permite visualizar, analizar e interactuar con nuestros componentes de React desde el navegador. 

Encuentra más información sobre está herramienta en:
https://github.com/facebook/react-devtools
