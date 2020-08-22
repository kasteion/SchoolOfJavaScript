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

## INTEGRACIÓN DE WEBPACK CON EXPRESS

# INTEGRACIÓN DE EXPRESS CON REACT

## SERVIR REACT CON EXPRESS

## ABSTRAYENDO REACT ROUTER, CREANDO HISTORY Y HACIENDO INITIALSTATE MÁS ACCESIBLE

# APLICAR SERVER SIDE RENDERING

## DEFINICIÓN DE LA FUNCIÓN PRINCIPAL PARA REALIZAR EL RENDERIZADO DESDE EL SERVIDOR

## ASSETS REQUIRE HOOK

## HYDRATE Y ESTADO DE REDUX DESDE EXPRESS

# TRABAJA CON ENTORNOS DE DESARROLLO Y PRODUCCIÓN

## CONFIGURANDO NUESTRO SERVIDOR PARA PRODUCCIÓN

## CONFIGURANDO WEBPACK PARA PRODUCCIÓN

## OPTIMIZACIÓN DEL BUILD

## APLICAR HASHES AL NOMBRE DE NUESTROS BUILDS

# BUENAS PRÁCTICAS DE SERVER SIDE RENDER

## VENDORFILES EN WEBPACK: DEFINIENDO CACHEGROUPS

## VENDOR FILES EN WEBPACK: GENERANDO EL VENDORFILE

## CONFIGURACIÓN DE ESLINT

# ALTERNATIVAS AL SSR CON EXPRESS

## CÓMO IMPLEMENTAR NEXT.JS

## CÓMO USAR GATSBY.JS

## CUANDO USAR CADA UNA DE LAS HERRAMIENTAS PRESENTADAS