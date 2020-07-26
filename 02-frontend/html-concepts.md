# CONCEPTOS INICIALES DE HTML

## ANATOMÍA DE UN ELEMENTO HTML: ATRIBUTOS, ANIDAMIENTO Y ELEMENTOS VACÍOS

Nuestros elementos HTML se componen de:
- **Etiqueta de apertura**: El nombre de nuestra etiqueta encerrado entre símbolos de mayor y menor (paréntesis angulares). Por ejemplo: `<h1>`
- **Contenido**: Dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML.
- **Etiqueta de cierre**: Son casí iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: `</h1>`

Las etiquetas de apertura también pueden tener atributos. Los atributos permiten definir características especiales para nuestros elementos: `<etiqueta atributo="valor del atributo">` Por ejemplo: `<h1 class="saludo">`.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: `<img src="puppy.png" alt="mi mascota">`.

## ANATOMÍA DE UN DOCUMENTO HTML: DOCTYPE, HTML, HEAD Y BODY

    <!DOCTYPE html>
    <html lang="en"> --> Root Element
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <h1>Este es mi primer Header</h1>
        <div>
          <p>Estoy muy feliz de escribir este parrafo</p>
        </div>
      </body>
    </html>

## FUNCIONES DE LAS ETIQUETAS HTML MÁS IMPORTANTES

`<!DOCTYPE html>`: Aquí definimos que el documento está bajo el estándar HTML5.

`<html lang="en"></html>`: Representa la raíz de nuestro documento HTML. Todos los demás elementos deben ser descendientes de este elemento.

`<head></head>`: En el head siempre vamos a encontrar los metadatos (que se escriben con la etiqueta `<meta>`) del documento que vamos a escribir, incluyendo también enlaces (que por lo general son de nuestro archivo de estilos, tipografías, etc).

`<meta>`: Define los metadatos que no pueden ser definidos usando otro elemento HTML, como por ejemplo el tipo de codificación: UTF-8.

`<title></title>`: Aquí definimos el título de nuestro documento, sólo puede contener texto y se muestra en la pestaña de la página.

`<body></body>`: Es la única etiqueta body que debe aparecer en nuestro documento y representa todo el contenido principal. Aquí es donde escribimos las etiquetas `<div>`, `<h1>`, `<p>`, `<footer>`, entre otras que hacen parte del cuerpo de nuestra página.

`<style></style>`: Aquí va el CSS.

`<script></script>`: Aquí va el JavaScript.

Descripción de algunos elementos vacíos:

`<img>`: La utilizamos para añadir imágenes. Normalmente debe ir acompañada de los atributos src (en donde se coloca la url o enlace en que encuentra nuestra imagen) y alt (por si la imagen no carga, el usuario puede leer una descripción de la imagen para tener una idea de lo que era. Otra razón es porque los lectores de pantalla leen este atributo y así personas con discapacidad visual pueden tener una idea de lo que aparece en la imagen).

`<input>`: Es un campo en donde el usuario puede ingresar datos. Es usada normalmente en formularios como el de inicio de sesión, registro, etc.

`<br>`: Con esta etiqueta se pueden hacer saltos de línea.

`<hr>`: Es muy parecida a `<br>` pero en este caso representa un quiebre temático entre los párrafos de una sección.

Descripción de las etiquetas semánticas para la estructura base de nuestra página:

`<header></header>`: Esta etiqueta la usamos para definir la cabecera de nuestra página en donde usualmente le colocamos un logo, el título de la página o aplicación y a veces un menú con una lista de navegación.

`<nav></nav>`: Esta es la etiqueta que usamos para colocar enlaces de navegación.

`<article></article>`: La usamos normalmente para definir contenido que puede vivir independiente al resto del contenido.

`<section></section>`: En esta etiqueta colocamos el contenido de las secciones de nuestra página. Por ejemplo en nuestra aplicación podemos tener mi lista, tendencias, etc.

`<aside></aside>`: El contenido de esta etiqueta no le agrega sentido al resto del contenido de la ágina, es decir que si se elimina, no afecta. Como por ejemplo la publicidad de nuestro sitio.

`<footer></footer>`: Es la parte final de nuestra página en donde normalmente se coloca información que el usuario pueda requerir de nuestro sitio como por ejemplo nuestras redes sociales, información de contacto, políticas de privacidad, entre otras.

`<h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>, <h5></h5>, <h6></h6>,`: Usamos estas etiquetas para desribir títulos en nuestra página y los números en ellas representan el nivel de importancia siendo `<h1>` el título más importnate y `<h6>` el título menos importante.

Descripción de otras etiquetas muy usadas:

`<div></div>`: Es el contenedor más común y más usado en HTML pero no tiene un significado especial.

`<button></button>`: Es utilizado para hacer botones. Normalmente va acompañado del evento onclick y de un script que define la acción que se realizará al dar click en el botón `<button onclick="alert('Hello World!')">Click me!</button>`

`<p></p>`: Con esta etiqueta escribimos párrafos.

`<a></a>`: Se utiliza para colocar enlaces. Se acompaña del atributo href en donde se coloca la dirección a la cual queremos dirigir.

`<ol></ol>`: Describe una lista ordenada. Los ítems se escriben con la etiqueta `<li>`.

`<ul></ul>`: Describe una lista desordenada. Los ítems se escriben con la etiqueta `<li>`.

`<li></li>`: Utilizado para escribir los ítems de una lista.

`<form></form>`: Usado para crear formularios. Van normalmente acompañados de las etiquetas `<input>`, `<label>`, `<textarea>`, `<select>`, `<option>`, `<button>`, entre otros.

## LA IMPORTANCIA DEL CÓDIGO SEMÁNTICO

Es importante que como desarrolladores tengamos claro el significado de escribir código. Debes ser consciente de que la manera en la que codeas tenga sentido.

La semántica HTML no es más que darle sentido y estructura a lo que estás escribiendo. Muy importnate para el navegador. No todo los elementos deberían ser un div.

Existen etiquetas especializadas para colocar texto y encabezados. Debemos tener en cuenta las etiquetas más importantes. 

`<header>`, `<nav>`, `<article>`, `<section>`, `<aside>`, `<footer>`

Es importante para que el código tenga sentido para otras personas.

        <body>
            <header>
                <ol>
                    <li>Inicio</li>
                    <li>Cuenta</li>
                </ol>
            </header>
            <section>
                <em>Hola</em> --> Esto esta con enfasís.
                <i>Hola</i> --> Esto solo está en ítalica
            </section>
            <footer>
            </footer>
        </body>

Las personas con discapacidad visual utilizan screen readers para navegar por las páginas. Entonces para ellos es especialmente importante utilizar este código semántico para entender las páginas.

## TIPOS DE ERRORES EN HTML, DEBUGGING Y SERVICIO DE VALIDACIÓN DE ETIQUETAS

**Errores Sintácticos**: Son errores de escritura en el código y evitan que el programa funcione. Pueden ser errores de tipado.

**Errores Lógicos**: En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.

En HTML el navegador no muestra los errores. Los lenguajes son interpretados por el navegador en tiempo real. Y en cierta forma se va comiendo los errores y no los muestra al usuario. El navegador trata de corregir como puede los errores que tengamos en HTML.

Sistema de validación de etiquetas W3C

> https://validator.w3.org
