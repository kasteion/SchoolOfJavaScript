# INTRODUCCIÓN A LA LÍNEA DE COMANDOS

En este curso hablaremos de:
    - Introducción a la línea de comandos.
    - Configurar la terminal y el editor de código.
    - Git y GitHub

## INSTALACIÓN DE UBUNTU BASH EN WINDOWS

Necesitamos activar el Developer Mode en Windows.

1) Primero hay que actualizar Windows (Si usas Windows)... yo sí así que sí.

> Inicio --> Settings --> Update & Security

2) Luego hay que activar la caracteristica de Windows Subsystem for Linux

> Panel de Control --> Pogramas --> Turn Windows Feature On or Off --> Activar Windows Subsystem for Linux

3) Luego hay que instalar el Ubuntu de la Windows Store

En ubuntu:

> $ curl -sL "https://deb.nodesource.com/setup_12.x | sudo -E bash - 
> 
> sudo apt-get install -y nodejs
>
> node -v
>
> npm -v

Instalar Visual Studio Code e instalar la extensión: **Remote WSL** 

Ejecutar Ubuntu como administrador y buscar un direcotrio en linux en /mnt/c y escribir `code .`

Ejecutar:
> $ npx create-react-app portfolio
>
> $ cd portolio
>
> $ npm start

http://localhost:3000

> code . --> Modificar app.css

## INTRODUCCIÓN A LA TERMINAL

## MANEJO DE ARCHIVOS Y DIRECTORIOS

Vamos a ver diferentes comandos que nos serán de gran utilidad:

- **ls**: Nos permite listar los archivos y directorio que se encuentren dentro de la carpeta en la que estamos ubicados, podemos pasarle distintos parámetros:
    - -a Podemos ver los archivos ocultos.
    - -l nos lista los contenidos mostrando sus permisos y propietarios.
    - -t nos lista los contenidos según su fecha.
- **clear**: Nos limpia la pantalla.
- pwd: Nos retorna la ruta absoluta en la cual nos encontramos.
- **mkdir**: Crea una carpeta.
- **cd**: Nos mueve a alguna carpeta que le indiquemos.
- **history**: Muestra el histórico de todos los comandos que hemos ejecutado.
    - !248 --> Vuelve a ejecutar el comando # 248 en el history.
- **touch**: Crea un archivo vacío con el nombre que le indiquemos.
- **nano**: Es un editor dentro de la consola, podemos abrir cualquier archivo y modificar.
- **mv**: Permite mover archivos entre distintas capetas, solamente debemos indicarle el nombre del archivo y la ruta de destino.
- **rm**: Elimina únicamente un archivo, añadiendo el parámetro -rf podemos eliminar directorios tambien.

## HERRAMIENTAS BÁSICAS (COMANDOS CAT, MORE, TAIL Y OPEN)

- **cat**: Permite visualizar un archivo completo en la terminal.
- **more**: Muestra por partes un archivo dentro de la terminal.
- **tail**: Muestra las últimas 10 líneas de cada archivo, se puede modificar pasándole el parámetro con el número de líneas Ej.: -15
- **open**: Abre un archivo con el programa que tengamos por defecto.

## CREA LLAVES SSH

Las llaves SSH nos van a ayudar para autenticarnos con servidores. SSH utiliza criptografía asimétrica o sea, tenemos dos llaves:

- **Pública**: La llave pública la podemos compartir por Internet.
- **Privada**: Debemos tenerla en un sitio seguro y no debe ser compartida.

Tener una llave SSH nos permitirá una conexión fácil y segura con servidores y en este caso para conectarnos a GitHub.

Para crear una llave SSH utilizamos el siguiente comando:

> $ ssh-keygen -t rsa -b 4096 -C "Comentario para esta Key"

# CONFIGURACIÓN ENTORNO DE DESARROLLO

## CONFIGURACIÓN DE LA TERMINAL MAC-OS

Instalar y configurar una nueva terminal.

**Hyper**: Una terminal multiplataforma.
> https://hyper.is

Oh my zsh --> Personalizar un poco más la terminal.

> https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH
>
> https://ohmyz.sh/
>
> https://github.com/ohmyzsh/ohmyzsh/wiki/Themes

## CONFIGURACIÓN DE ZSH PARA WINDOWS CON LINUX SHELL

Descargar e instalar Hyper.
> https://hyper.is

En Ubuntu:
> $ sudo apt-get install zsh

Instalar ohmyzsh en ubutu:
> chsh -s /usr/bin/zsh

En Hyper
Menu --> Edit --> Preference

## COMO INSTALAR NODEJS

Node es el entorno de ejecución que tenemos para JavaScript en el lado del servidor, está basado en el motor V8 de Google Chrome. Fue creado por Ryan Dahl en 2009, es Open Source y multiplataforma.

En Mac se puede instalar homebrew

> https://brew.sh/index_es

Una vez tengamos instalado homebrew

> $ brew install node
>
> $ node -v
>
> $ npm -v

En Linux Ubuntu Debian:

> $ sudo apt update
> 
> $ sudo apt install nodejs
>
> $ sudo apt install npm

En distros basadas en Arch

> $ pacman -S nodejs npm

Una vez instalado node podemos correr:

> node
> console.log('Hola Mundo')

npm es el manejador de paquetes de Node en él podemos instalar dependencias a nuestro proyecto o instalar programas globalmente en nuestro sistema.

## INSTALACIÓN Y CONFIGURACIÓN DE VSCODE

Plugins para VSCode:
- **Git Blame**: Va a mostrar el autor de la línea de código en la que estemos trabajando.
- **ESLint**: Es una herramineta de análisis de código estático para identificar patrones problematicos encontrados en el código JavaScript, o sea, nuestro linter. Debemos instalar y configurar ESLint para que siga el estilo de código que le indiquemos.

En el proyecto en la consola de vscode correr:

> $ npm install -g eslint
> $ npx exlint --init
> To check syntax, find problems and enforce code styles
> Javascript modules (import/export)
> React
> Browse
> Use popular style guide
> AirBNB
> JSON
> extend "airbnb"

- **Color Highlight**: Resalta el color que estemos escribiendo.
- **SASS**: Es un preprocesador de CSS.

## PLUGINS DE GOOGLE CHROME

En la terminal de VSCode

> $ npm start

En google chrome instalar el plugin de react y el plugin de redux.

> React Developer Tools --> Ofrecido por facebook
>
> Redux DevTools --> Ofrecido por remotedevio
>
> JSON Viewer --> Ofrecido por tulios

# GIT & GITHUB

## ¿QUÉ ES GIT, PARA QUÉ SE USA Y QUÉ RESUELVE?

Git es un sistema de control de versiones que nos permite llevar un histórico sobre los cambios de nuestro proyecto, no es el único sistema de control de versiones, pero sí el más usado. Fue creado por Linus Torvalds.

Los repositorios son una estructura de datos que almacenan información sobre archivos y directorios. Es el inicio de todo proyecto Git, de un repositorio encontramos ramas, no son más que la duplicación de un objeto bajo un repositorio, permite trabajar en paralelo para unir los cambios al final.

## INSTALACIÓN DE GIT

Primero revisemos si ya lo tenemos instalador:

> $ git --version

En MacOSX se puede instalar con homebrew:

> $ brew install git

En Linux Debian y Ubuntu:

> $ sudo apt-get update
>
> $ sudo apt-get install git

En windows yo lo instalaría de aquí:

> https://git-scm.com/downloads

Aunque tambien está:

> https://gitforwindows.org

Algunas configuraciones para git... un usuario y un email.

> $ git config --global user.name "Your Name"
>
> $ git config --global user.email "your@email.com"

## CÓMO CREAR UN REPOSITORIO, PRIMER COMMIT, RESET Y LOGS

Para comenzar un nuevo repositorio en git se ejecuta el comando:

> $ git init

Al correr el comando nuestra terminal nos va a mostrar que nos encontramos dentro de la rama master, la rama principal de todo proyecto en Git. Además si ejecutamos `ls -la` veremos una carpeta oculta llamada **.git**

Todo cambio tienen varios estados dentro de Git:
- Sin seguimiento
- Sin cambios
- Con cambios
- En stagging

Para ver el estado del repositorio ejecutamos el comando: 

> $ git status

Podemos añadir un archivo con el comando:

> $ git add nombre-del-archivo 

Una vez lo tenemos añadido podemos dar commit con el comando

> $ git commit -m "mensaje del commit"

Podemos visualizar un historico de los commits con:

> $ git log

Dentro de Git es posible regresar entre commits con el comando:

> $ git reset

Tenemos dos opciones para regresar:

- **--soft**: Vamos a movernos al commit que le indiquemos, sin eliminar los commits de por medio.
- **--hard**: Nos movemos al commit que indiquemos y regresamos el repositorio al estado del commit borrando todos los commit de por medio.

## RAMAS, REBASE Y MERGE

Recuerda que una rama es la duplicación de un objeto sobre el repositorio y nos va a permitir trabajar en paralelo para después unir los cambios a nuestro proyecto, en este caso a nuestra rama master los comandos principales son:

- **git checkout -b develop**: Según el commit en el cual ejecutemos este comando va a ser el punto en el cual se va a crear una rama idéntica, en este caso con el nombre "develop".
- **git merge develop**: Va a añadir los commits a la rama master.
- **git rebase develop**: Va a añadir los commits a la rama master unificando ambas ramas y conservando la historia de la misma.

> $ git branch

## GITHUB: CONFIGURACIÓN, REPOSITORIO REMOTO, PUSH Y PULL

> $ git clone url
> $ git pull origin master
> $ git push origin master