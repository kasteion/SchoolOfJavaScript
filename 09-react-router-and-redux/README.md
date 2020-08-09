# ¿QUÉ ES REACT ROUTER? Y APLICARLO EN TUS PROYECTOS
  
## ¿QUÉ ES REACT ROUTER Y CÓMO INSTALARLO?

Dentro de nuestro repositorio podemos crear una nueva rama:

> $ git checkout -b feature/router-redux

Ya dentro de la rama podemos instalar React Router, la librería que nos va a permitir manejar rutas dentro de nuestra aplicación.

> $ npm install react-router-dom --save

(También se puede clonar este proyecto https://github.com/platzi/PlatziVideo.git)

## CREAR NUESTRO ARCHIVO DE RUTAS

Dentro de nuestro proyecto vamos a crear una carpeta llamada routes donde vamos a ir añadiendo las rutas que necesitemos en la aplicación.

Las rutas que añadamos debemos definirlas con el componente `Route` y estas deben estar encapsuladas dentro del componente `BrowserRouter` del paquete de `react-router-dom`. Para definir una ruta con el componente Route debemos pasarle las props de: 
- `path` para indicar la url.
- `exact` si queremos que funcione única y exactamente con la url que le digamos.
- `component` para indicarle el componente que va a renderizar.

Archivos:

> src/routes/App.js
>
> Cambia App.jsx por Home.jsx y tambien el componente dentro del archivo.
>
> Cambia index.js el `import App from './routes/App'`

## CONTAINER: LOGIN

Es necesario configurar para trabajar con múltiples rutas.

Archivos:

> Creamos src/containers/Login.jsx

Configuracion en `webpack.config.js`:

        module.exports = {
            {/*...Despues de modules...*/}
            devServer: {
                historyApiFallback: true
            },
            { /*... Antes de Plugins...*/}
        }

## CONTAINER: REGISTER

Para asegurar que nuestras rutas solamente rendericen con la que haga match con la url debemos encapsular las rutas dentro del componente Switch

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register}/>
        </Switch>

Atributos para los Route Objects:
- **path**: La ruta en la que se renderizará el componente en forma de cadena de texto.
- **exact**: Un booleano para definir si queremos que la ruta sea exacta para rnederizar un componente. Ej.: /index !== /index/all
- **strict**: Un booleano para definir si queremos que el último slash sea tomado en cuenta para rnederizar un componente. Ej: /index !== /index/
- **sensitive**: Un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Ej.: /index !== /Index
- **component**: Recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
- **render**: Recibe un método que retorna un componente. A diferencia de component no remonta el componente.

## CONTAINER: 404 NOT FOUND

Es importante siempre tener una ruta que renderice un componente para las urls que no existan, debemos añadir esta ruta al final de Switch para que sea el caso por default.

Fragment nos permite no añadir elementos extra al DOM, podemos utilizar Fragment de 2 maneras: 
1. Añadiendo el componente.
2. O implemente encapsulando nuestros elementos dentro de `<>`

## COMPONENTE: LAYOUT

Archivos:

> src/components/Layout.jsx

Se utiliza el layout en:

> src/routes/App.js

## MANEJANDO ENLACES Y CONFIGURACIONES

El componente es similiar a un elemento ya que nos permite navegar dentro de la aplicación, pero sin la necesidad de tener que recargar la página. Para indicarle el destino simplemente debemos pasarle la prop `to='/mi-enlace'`

        import { Link } from 'react-router-dom'

        <Link to="/">
            <img className="header--logo" src={HeaderLogo} alt="Logo Platzi Video" width="200px" height="60px"/>
        </Link>

# QUÉ ES REDUX?

## QUÉ ES REDUX

Redux es una librearía escrita en JavaScript, basada en la arquitectura Flux y creada por Dan Abramov, se basa en 3 principios fundamentales:

1. Solamente hay una fuente de la verdad.
2. El estado es de solo lectura.
3. Solamente podemos utilizar funciones puras.

Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

## ¿QUÉ ES REDUX? PROFUNDIZANDO EN LA HERRAMIENTA

Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.

Uno de los principales usos que tiene Redux es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.

Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.

Una de las principales motivaciones para crear Redux nace en resulver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en tres principios:

**Única fuente de la verdad**:

Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.

**El estado es de solo lectura**:

La única forma de modificiar el estado es emitiendo un action, este objeto describe lo que va a ocurrir.

**Los cambios se realizan con funciones puras**:

Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.

Teniendo en cuenta esta información continuaremos en el curso explicando cada uno de lestos elementos que incorpora Redux en nuestra aplicación.

## INSTALACIÓN DE REDUX

Instalamos las dependencias para poder trabajar con Redux:

> $ npm install --save redux react-redux

Dentro de nuestro proyecto creamos una carpeta para nuestros actions y otra para los reducers que utilizaremos en Redux.

El paquete `react-redux` nos proporciona un `Provider` para poder encapsular nuestros componentes por medio de un connect para poder transmitir la información que necesitemos del store a cada componente.

Debemos encapsular nuestra aplicación dentro de un provider, porque nada fuera del provider podrá acceder al store.

El `<Provider />` hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función `connect()`

Dado que cualquier componente React en una aplicación React Redux se puede conectar, la mayoría de las aplicaciones mostrarán un `<Provider>` en el nivel superior, con el árbol de componentes completo de la aplicación dentro de él. Normalmente, no puede usar un componente conectado a menos que esté anidado dentro de un provider.

Archivos:

> src/actions/index.js --> vacío
>
> src/reducres/index.js --> vacío
>

        // src/index.js
        import { Provider } from 'react-redux'
        import { createStore } from 'redux'

        ReactDOM.render(
            <Provider>
                <App/>
            </Provider>, 
            document.getElementById('app')
        )

## CREANDO EL STORE DE REDUX

Para crear un Store necesitamos llamar a la función `createStore` del paquete de `redux` pasándole los parámetros del reducer y initialState.

Para conectar un componente a Redux vamos a necesitar importar `connect` de `react-redux`, connect va a aceptar dos parámetros:
1. mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
2. mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en redux. 

- Esta basado en el patrón de diseño Flux
- Toda la data de la aplicación, se encuentra en una estructura previamente definida.
- Toda la información se encontrará almacenada en un único lugar llamado STORE.
- El STORE jamás se modifica de forma directa.
- Interacciones de usuairo y/o código, dispara acciones que describen qué sucedió.
- El valor actual de la información de la aplicación se llama **State**
- Nun nuveo estado es creado, en base a la combinación del viejo estado y una acción, por una función llamada Reducer.

En index.js se crea el store:
        const store = createStore(reducer, initialState)

También en src/reducers/index.js
        const reducer = (state, action) => {
            return state
        }
        export default reducer


# APLICANDO REDUX A NUESTRA APLICACIÓN

Un action de Redux va a contener dos elementos:
- `type`: para indicar la acción que se va a ejecutar.
- `payload`: es la información que estamos mandando a reducer.

Dentro de los reducers usaremos un `switch` para separar la lógica por cada tipo de acción que tendremos en Redux

## CREANDO UN SERVICIO PARA GRAVATAR

Instalar md5:
> $ npm install --save md5

Podríamos instalar desde npm un paquete que use gravatar pero podemos ir a github y analizar el código del paquete, para no agregar elementos inecesarios a nuestro proyecto y hacerlo más pesado.

Así que creamos:

> src/utils/gravatar.js

## UNOS RETOQUES AL UI

Instalamos:

> $ npm instal --save classnames


## DEBUG CON REDUX DEVTOOLS

Redux Dev Tools nos va a servir mucho para entender mejor el flujo de nuestra información en nuestra aplicación y poder realizar debugging de manera sencilla.

Solamente es necesario instalar la extensión según el navegador
- Chrome
- Firefox

Una vez instalado dentro de nuestro `index.js` vamos a añadir el siguiente código:

        // importamos compose
        import { createStore, compose } from 'redux';

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        const store = createStore(reducer, initialState, composeEnhancers())