# CONCEPTOS INICIALES DE CSS

## ANATOMÍA DE UNA DECLARACIÓN CSS: SELECTORES, PROPIEDADES Y VALORES

Nuestros estilos con CSS se componen de:

- **Selector**: Son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}). por ejemplo: `h1 { }`

- **Propiedades**: Son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en el mismo selector. Por ejemplo: `h1 {color: }`.

- **Valores**: Son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: `h1 { color: red; }`

## TIPOS DE SELECTORES, PSEUDO-CLASES Y PSEUDO-ELEMENTOS

`*`: Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

        * {
            margin: 0;
        }

`~`: Este selector nos permite dar estilos a todos los elementos que cumplan los requisitos y sean "hermanos direcots", es decir, que tengan el mismo elemento padre. Pro ejemplo:

        .primertitulo ~ h2 {
            background-color: red;
        }

        <article class="ContenedorPadre">
            <h2 class="PrimerTitulo">Este es el primer elemento H2</h2>
            <h2>Este es el segundo elemento H2</h2>
            <div class="ElementoPadreDiferente">
                <!-- Este título NO tendrá color de fondo rojo porque su padre es diferente -->
                <h2>Este es el tercer elemento H2</h2>
            </div>
            <!-- Este título también tendrá color de fondo rojo -->
            <h2>Este es el cuarto elemento H2</h2>
        </article>

**Tipo**: Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplican a la etiqueta que queremos, por ejemplo: p, body, html, div, etc.

        h1 {
            color: red;
        }

**Clase**: Si nuestras etiquetas de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

        .saludo {
            font-size: 2em;
        }

**ID**: Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento.

        #buscador {
            border-radius: 29px
        }

Las **Pseudo-Clases** y **Pseudo-Elementos** nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estiolos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase pque queremos estilizar (por ejemplo p:first-child). En el caso de los pseudo-elementos debemos usar el do puntos dos veces (p::first-letter).

        p:first-child {
            color: white;
        }

        p:last-child {
            color: purple;
        }

        p:nth-child(2n) {
            color: red;
        }

        p::first-letter {
            color: red;
            font-size: 20px;
        }

Algunas urls:
> https://coolsymbol.com/emojis/emoji-for-copy-and-paste.html 🙂
>
> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
>
> https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
>
> https://developer.mozilla.org/

## MODELO DE CAJA

Todos los elementos HTML tienen un modelo de caja y esta compuesto por cuatro elementos: contenido, padding, border, margin.

Ve **./caja/modelo-de-caja.html** e inspecciona el html.

## VALORES RELATIVOS Y ABSOLUTOS

Los **valores absolutos** son, por ejemplo, centímetros, milímetros, pixeles y pulgadas. Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad. Ejemplo: cm, in, mm, px, pt, pc.

Los **valores relativos**, llevan este nombre porque dependen de otra unidad de medida o elementos. Por ejemplo, porcentajes, vmx, em, entre otros.

## DISPLAY EN CSS

Todos los elementos en CSS son cuadrados o rectángulso y aparte de eso, estos elementos tienen un comportamiento que se define a través de la propiedad display. Los display más comunes y usados son: block, inline, inline-block, none, table, flex y grid.

- **Block**: Pensemos en este display como el flujo que tenemos cada vez que escribimos. Por ejemplo, escribimos de izquierda a derecha, pero cuando se nos acaba el espacio horizontalmente, seguimos abajo. Este es el flujo de bloqeu en nuestra escritura (de arriba a abajo) y es exactamente el que obedece display block, llo que quiere decir que los elementos se visualizan uno debajo del otro. Algunos elementos que por defecto tienen este tipo de display son: `<div>`, `<p>`, `<h1>`, `<section>` y `<ul>`.

- **Inline**: Quiero que pensemos en este display como la línea base que seguimos para escribir, que en el caso del latín es de izquierda a derecha. Por lo tanto todos los elementos con este diplay se visualizarán uno al lado del otro de izquierda a derecha. Algunos elementos que por defecto tienen este tipo de display son: `<span>`, `<em>` y `<b>`. 

- **Inline-block**: Este display es muy similar al display inline, sin embargo este respeta el width y el height para que se le asigne a los elementos.

- **None**: Este display es utilizado para coultar elementos sin eliminarlos por completo del DOM.

- **Table**: Los elementos con este display se comportan como los elementos `<table>`.

- **Flex**: Centrar elementos, alinearlos a la derecha o a la izquierda, siempre ha sido una tarea difícil. Sin embargo, llega flexbox para ayudarnos con este dilema. Para usar flexbox es indispensable la propiedad display: flex en el elemento padre que por defecto alineará los elementos hijos de izquireda a derecha. También, este display suerle acompañarse por otras propiedades como justify-content y align-items.  

> https://css-tricks.com/snippets/css/a-guide-to-flexbox/

- **Grid**: Después de flexbox, llega el más poderoso sistema de layout: CSS Grid para implementarlo debemos hacer uso de display: grid en el elemento padre. 

> https://css-tricks.com/snippets/css/complete-guide-grid/

## FUNCIONES DE LAS PROPIEDADES CSS MÁS USADAS

- **width**: Define el ancho de un elemento. Por ejemplo: `width: 20px;`

- **height**: Define el alto de un elemento. Por ejemplo: `height: 20px;`

- **background**: Puede definir el color de fondo o la url de fondo de un elemento. Por ejemplo: `background: url("puppy.png");`

- **background-color**: Define el color de fondo de un elemento. Ejemplo: `background-color: red;`

- **color**: Define el color de nuestros textos. Estos colores los podemos escribir de 3 formas en CSS:
    - **Sistema hexadecimal**: Donde blanco se define como `#FFFFFF` y negro como `#000000`.

    - **Nombres**: Con los nombres de los colores, por ejemplo: black, red, green.

    - **RGB**: Donde la R significa Red, G significa Green y B significa Blue; por lo que escribimos rgb(red, green, blue) y cada uno de ellos es un valor de 0 a 255 que describe la intensidad de ese color. Por ejemplo, para denotar el color verde, escribimos: `rgb(0, 255, 0)`. También a estos valores se les puede agregar una opacidad (transparencia) que va de 0 a 1, por ejemplo: `rgba(0, 255, 0, 0.5)` lo que uqiere decir que el color verde lo queremos con una transparencia del 50%.

Algunas páginas para generar colores:

> https://coolors.co/
>
> https://colorhunt.co/
>
> https://picular.co/
>
> http://paletton.com/
>
> https://coolors.co/5e1dfc-ab88ff-8f57fd-21c08b-e6af2e

- **border**: Define el tamaño, estilo y color del borde de un elemento, por ejemplo: `border: 2px solid yellow;`

- **border-radius**: Define qué tan redondeado quiero mi elemento, por ejemplo: `border-radius: 20px;`

- **margin**: Define el margen de un elemento. Por ejemplo: `margin: 2px;` Lo que quiere decir que mi elemento tendrá márgenes en todos sus lados de 2px. 

Si por ejemplo quiero que mi elemento tenga un margen superior de 2px, margen inferior de 4px, margen derecho de 3px y margen izquierdo de 5px, lo escribiríamos de la siguiente forma: `margin: 2px 2px 4px 5px;` El primer valor es el margen superior y va en sentido de las manecillas del reloj.

Ahora, si sólo quiero que mi elemento tenga un margen a la derecha de 10px escribiría: `margin-right: 10px;`

Y para los demás valores sería:
- `margin-top: 10px;`: para el margen superior.
- `margin-left: 10px;`: para el margen izquierdo.
- `margin-bottom: 10px;`: para el margen inferior.

- **padding**: Define la distancia del borde de un elemento hasta su contenido. Por ejemplo `padding: 2px;` Lo que quiere decir es que mi elemento tendrá un "margen interno" en todos sus lados de 2px.

Si por ejemplo quiero que mi elemento tenga padding superior de 2px, padding inferior de 4px, padding a la derecha de 3px y padding a la izquierda de 5px, lo escribiría de la siguiente forma: `padding: 2px 3px 4px 5px;` El primer valor es el padding superior y siempre va en sentido de las manecillas del reloj.

Ahora si sólo quiero que mi elemento tenga un padding a la derecha de 10px, escribiría: `padding-right: 10px;`

Y para los demás valores sería:
- `padding-top: 10px;`: para el padding superior.
- `padding-left: 10px;`: para el padding izquierdo.
- `padding-bottom: 10px;`: para el padding inferior.

- **font-size**: Define el tamaño de la fuente. Por ejemplo: `font-size: 20px;`

- **font-family**: Define la familia tipográfica de la fuente. Por ejemplo: `font-family: 'Roboto', sans-serif;`. Podemos usar las fuentes de google fonts:
> https://fonts.google.com

- **opacity**: Determina la trnsparencia del elemento. Tiene valores entre 0 y 1, que pueden verse como un porcentaje. Por ejemplo, si quiero que mi elemento se vea con una transparencia del 50% escribiría: `opacity: 0.5;`

- **outline**: Un elemento algo desconocido es el esquema de los elementos HTML. Un esquema es una línea (por defecto de color azul) que se dibuja alrededor de los elementos que hace que destaquen".

Esto sucede mucho en elementos como los inputs y los buttons. Si no queremos ver esa línea, lo que hacemos es: `outline: none;`

Aunque también podemos decirle que tenga determinado estilo, color, tamaño, entre otras. Por ejemplo:

        outline-style: solid;
        outline-color: red;
        outline-width: 5px;

- **box-sizing**: Cuando trabajamos con paddings, por ejemplo, veremos que el tamaño de nuestro elemento crece. Si yo no quiero que el padding afecte el tamaño original del elemento, le agrego la propiedad box-sizing para que el tamaño total del elemento inclya el padding también y no se vean afectado por él. Ejemplo: `box-sizing: border-box;` 

- **transition**: Las transiciones CSS le permiten cambiar los valores de las propiedades durante una duración determinada.

Debemos tener presente que una transición NO es una animación. Una transición va de un punto A a un punto B sin interrupciones o saltos en medio.

Documentación sobre CSS Transitions:

> https://www.w3schools.com/css/css3_transitions.asp
>
> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
>
> https://css-tricks.com/almanac/properties/t/transition/

- **animation**: Esta propiedad permite que animemos nuestros elementos. 

Una documentación de animations:

> https://www.w3schools.com/css/css3_animations.asp
>      
> https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
>  
> https://css-tricks.com/almanac/properties/a/animation/
>
> https://codepen.io/levineuland/pen/AmwCL

## POSICIONAMIENTO EN CSS

El posicionamiento en CSS es una de las cosas más importantes, pues establece cómo van a estar ubicados nuestros elementos en la pantalla.

En CSS los elementos se posicionan utilizando las propiedades top, bottom, left y right, pero funcionarán si la position está establecida. Esto quiere deicr que si quiero que mi elemento div este completamente a la erecha, debo escribir en mi CSS lo siguiente: `div { position: absolute; right: 0px; }`

La propiedad position tiene 7 valores diferentes:

- **position: relative**: El elemento se coloca en relación a su posición normal.

- **position: absolute**: Los elementos con esta posición se ubican en relación al elemento relativo mas cercano. Aquí podemos hacer uso de las propiedades top, bottom, left y right.

- **position: fixed**: El elemento se ubica en relación con la ventana del javegador y también se ve afectado por las propiedades top, bottom, left y right.

- **position: sticky**: El elemento se posiciona en función de las posición de desplazamiento del usuario. Si lo ubicas a la izquierda, siempre va a estar allí sin importar cuantas veces se haga scroll en la página.

- **position: static**: Los elementos HTML son státicos por defecto, siguen el flujo normal de la página y no se ven afectados por las propiedades top, bottom, left, y right.

- **position: initial**: Ubica el elemento en la posición que tiene de forma predeterminada.

- **position: inherital**: Como su nombre lo indica, este valor hereda esta propiedad de su elemento padre.

# ARQUITECTURA CSS

## ¿QUE SON Y PARA QUÉ SIRVEN LAS ARQUITECTURAS CSS?

El objetivo de las arquitecturas css que el código css:
- Sea predecible
- Sea reutilizable
- Sea mantenible
- Sea escalable

Buenas prácticas:
- Establecer reglas con el equipo
- Explicar la estructura base
- Establecer estándares de codificación
- Evitar largas hojas de estilo
- Documentación

## OOCSS, BEM, SMACSS, ITCSS, Y ATOMIC DESIGN

El objetivo de las arquitecturas de CSS es hacer que el código CSS sea mantenible y escalable.

**OOCSS**

Es CSS orientado a objetos. Esta metodología se basa en separar el diseño del contenidos. Ejemplo:

        <style>
            .globalwidth {
                width: 100%;
            }

            .header {
                
            }

            .footer {

            }
        </style>
        <header class="header globalwidth">Header</header>
        <footer class="footer globalwidth">Footer</header>

**BEM**

> http://getbem.com/introduction/

BEM significa Block Element Modifier. Esta metodología separa los Bloques, los elementos y los modificadores.

        <body>
            <header class="bloque">
                <button class="bloque__elemento--red">RED</button>
                <button class="bloque__elemento--yellow">YELLOW</button>
            </header>
        </body>

**SMACSS**

> http://smacss.com/

Significa Arquitectura de CSS escalable y modular... Hay que ejecutar 5 pasos:

1. Dividir nuestro CSS en componentes base, son los componentes que vamos a estar utilizando en toda la aplicación.
2. Luego de esto va el Layout: Elementos que se utilizan en nuestra página una sola vez.
3. Module: son componentes que estaríamos utilizando en nuestra aplicación más de una vez.
4. State: aquí poríamos hablar de por ejemplo un boton que es verde pero cambia de color al darle click.
5. Theme: No todas las aplicaciones tienen tems pero la idea es que cuando cambien los temas y colores tambien se puedan separar desde código.

 **ITCSS**

 Significa Triangulo invertido de CSS. Se trata de dividir nuestro CSS ne ciertas partes para que no se combinen entre sí.

                Magnitud
             --------------
         Es  \            / C  / Ajustes
          pe  \          / l  /  Herramientas
           cia \        / a  /   Generico
            li  \      / r  /    Elementos
             d   \    / i  /     Objetos
               a  \  / d  /      Componentes
                d  \/ ad /       Utilidades

**Atomic Design**

El CSS está separado en:
- **Átomos**: Los elementos más pequeños, como por ejemplo: un button.
- **Moléculas**: Un conjunto de estos botones. 
- **Organismos**: Formado por varias móleculas.
- **Templates**: Formado por varios organismos.
- **Páginas**: Formadio por varias templates

# CONSTRUCCIÓN DE COMPONENTES

## ¿QUÉ ES UN COMPONENTE? ANALICEMOS NUESTROS DISEÑOS

Un componente, tanto en diseño como desarrollo web, es un elemento muy pequeño que tiene la capacidad de ser reutilizado en diferentes partes de una aplicación. Por ejemplo: botones, iconos, cards, entre otras.

Un sitio para buscar iconos:

> https://iconos8.es/icons/set/usuario-neutral

# MAQUETACIÓN Y DISEÑO RESPONSIVO

## FLEXBOX

Uno de los trabajos más difíciles en CSS es alinear elementos. Para hacer esto más fácil podemos contar con Flexbox.

Es importante tener presente que tendremos un contenedor y los elementos que queremos organizar dependiendo de nuestras necesidades.

Documentación:

> https://css-tricks.com/snippets/css/a-guide-to-flexbox/
>
>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

Este es un juego que nos enseña a uar flexbox:

> https://flexboxfroggy.com/#es

## NUESTRO NUEVO SISTEMA DE LAYOUT: CSS GRID

Con CSS Grid podemos maquetar todo el layout/estructura general de nuestro sitio para que se adapte a diferentes tamaños de pantalla, lo que conocemos como diseño responsivo.

Al igual que Flexbox, tenemos propiedades diferentes, tanto para el contenedor como para los elementos y podemos usarlos dependiendo de nuestras necesidades.

Viene con CSS y solo hay que colocar `display: grid;`

Documentación:

> https://css-tricks.com/snippets/css/complete-guide-grid/
>
> https://developer.mozilla.org/en-US/docs/Web/CSS/grid

Una página con ejemplos y experimentos de layout:

> https://labs.jensimmons.com/
>
> https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag

Un juego que nos enseña a usar CSS Grid:

> https://cssgridgarden.com/#es

## MEDIA QUERIES

Los media queries nos ayudan a ajustar nuestros diseños a dispositivos más pequeños como tablets o celulares.

Es recomendable seguir la metodología de Mobile First: comenzando a diseñar para el dispositivo más pequeño e ir creando las medias queries para las pantallas más gransdes.

# PREPROCESADORES

## ¿QUÉ ES UN PREPROCESADOR, CUÁLES EXISTEN Y CUÁLES SON SUS DIFERENCIAS?

CSS es un lenguaje de hojas de estilo que nos permite crear sitios web agradables para el usuario, sin embargo, nuestros archivos de CSS suelen ser bastante extensos, lo qeu produce una demanda significativa de nuestro tiempo y puede generar un trabajo menos productivo.

Una de las cosas que puedes hacer para evitar tantas líneas de código es utilizar los preprocesadores de CSS, los cuales extienden las funcionalidades de CSS común, permitiéndonos tener variables, funciones, mixins, reutilización de código, flexibilidad en el desarrollo, etc.

Un preprocesador se escribe con sintaxis especial que nosotros le indicamos y debe compilarse a CSS para ser comprendido por el navegador. En sí lo quee stamos haciendo es CSS pero con esteroides.

Esta sintaxis depende de cada preprocesador. Los más conocidos y usados son SASS, Stylus y LESS. ¿Cuál usar? Esta decisión depende de los gustos personales y de qué tan cómodo te sientes con una sintaxis o con otra, sin embargo, es también importante dialogar con el equipo y evaluar con que preprocesador quieren trabajar dependiendo de las necesidades del proyecto.

Aquí hay documentación de algunos de los preprocesdores:

> https://sass-lang.com/guide
>
> http://lesscss.org/
>
> http:/stylus-lang.com/

## INSTALACIÓN DE SASS Y CONFIGURACIÓN INICIAL

Instalación de SASS con NPM:

> $ npm install -g sass

En windows se puede utilizar Chocolatey Package Manager:

> choco install sass

En Mac se puede usar Homebrew:

> brew install sass/sasss/sass

Un repo de github
> https://github.com/teffcode/sass-workshop

## HABLEMOS DE VARIABLES, HERENCIA, ANIDAMIENTO, OPERADORES Y MÁS

**Variables de SASS**

        $colorcito: #aa88nn;

        .contenedor {
            color: $colorcito;
        }

**Anidamiento de SASS**

        .login__container--register {
            font-size: 16px;
            a {
                color: $blanco;
                font-weight: bold;
                font-size: 16px;
                text-decoration:none;
            }
        }

**Herencia de SASS**

        $verdecito: #21c08b;

        .flex {
            display: flex;
            align-items: center;
        }

        .header {
            @extend .flex;
            background-color: $verdecito;
            color: white;
            height: 100px;
            justify-content: space-between;
            top: 0px;
            width: 100%;
        }

**Mixin de SASS**

        @mixin flex {
            display: flex;
            align-items: center;
        }

        .header {
            @include flex;
            blackground-color: $verdecito;
            color: white;
            height: 100px;
            justify-content: space-between;
            top: 0px;
            width: 100%;
        }

Documentación

> https://sass-lang.com/documentation

# ACCESIBILIDAD

## LA ACCESIBILIDAD Y NUESTRA RESPONSABILIDAD COMO DESARROLLADORES

Debemos pensar en esas personas con una discapacidad visual, que no tienen la posibilidad de ver lo mismo que la mayoría de nosotros. Estas personas no siempre usan el mouse, sino lectores de pantalla.

Un lector de pantalla se encarga de leer toda la aplicación elemento por elemento. Que los lectores de pantalla funcionen es responsabilidad de los desarrolladores: debemos tener muy buena semántica, usar las etiquetas y atributos adecuados, entre otras.

Es un tema normalmente olvidado. Tambien hay que tener en cuenta los colores pues una persona daltónica no necesariamente puede notar las diferencias de contraste.

Los lectores de Pantalla: NVDA, Jaws, VoiceOver.

## MEJORANDO LA ACCESIBILIDAD DE NUESTRA PÁGINA DE INICIO

Herramienta ANDI para encontrar errores de accesibilidad.

> https://www.ssa.gov/accessibility/andi/help/install.html

En HTML la propiedad tabindex sirve para especificar en que orden debe leer una herramienta de lectura de pantalla.

> https://developer.mozilla.org/es/docs/Web/HTML/Atributos_Globales/tabindex

En HTML el atributo aria-label se puede colocar lo que queremos que lea el lector de pantalla, por ejemplo en los inputs.

# BONUS

## STORYBOOK PARA HTML

Storybooks es basicamente una guía donde nosotros como desarroladores podemos documentar todos los componentes de nuestra aplicación.

Con storybooks tenemos una especie de librería en la que podremos interactura con los componentes.

> https://storybook.js.org/docs/guides/guide-html/

## FLEXBOX

Flexbox es un modelo de Layout que nos permite posicionar y organizar los elementos de manera fácil y práctica en la pantalla. Esta conformado por dos partes: El contenedor y sus hijos directos (flex items)

En flexbox manejamos dos ejes: el main axis (eje principal) y el cross axis (eje secundario). La propiedad flex-direction controla si ele eje principal es el horizontal o el vertical.

La propiedad justify-content nos permite alinear nuestros items con respecto al eje principal (que puede ser horizontal o vertical dependiendo de la propiedad flex-direction). Los valores de justify-content pueden ser: flex-start, center, flex-end, space-between y space-around.

La propiedad align-items hace lo mismo que justify-content pero en el eje secundario y sus valores pueden ser: flex-start, flex-end, center, stretch y baseline.

También tenemos la propiedad flex que nos permiet definir un factor de crecimiento para los hijos de un contenedor flex. flex-grow 1 flex-grow 2 flex-grow 1 flex-grow 1