import '../assets/styles/main-view.css'

export default { title: 'Views' };

export const mainView = () => 
`
<header class="header">
<img class="header--logo" src="./assets/static/logo-platzi-video-BW2.png" alt="Logo Platzi Video" width="200px" height="60px">
<div class="header--dropdown">
    <button class="header--dropbtn">
        <img src="./assets/static/user-icon.png" alt="Logo Usuario">
        <p>Perfil</p>
    </button>
    <div class="header--dropdown-content">
      <a href="#">Cuenta</a>
      <a href="#">Cerrar Sesión</a>
    </div>
</div>
</header>
<section class="search">
    <div class="search--container">
        <h1 class="search--title">¿Que quieres ver hoy?</h1>
        <input class="search--input" type="text" placeholder="Buscar...">    
    </div>
</section>
<section class="list">
        <div class="list--container">
            <h1 class="list-title">Mi Lista</h1>
            <div class="carousel--container">
                <div class="carousel--item">
                    <img class="carousel--itemimg" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
            </div>
        </div>
</section>
<section class="list">
        <div class="list--container">
            <h1 class="list-title">Tendencias</h1>
            <div class="carousel--container">
                <div class="carousel--item">
                    <img class="carousel--itemimg" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
            </div>
        </div>
</section>
<section class="list">
        <div class="list--container">
            <h1 class="list-title">Originales de Platzi Video</h1>
            <div class="carousel--container">
                <div class="carousel--item">
                    <img class="carousel--itemimg" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
                <div class="carousel--item">
                    <img class="carousel--item-img" src="https://images.pexels.com/photos/3968083/pexels-photo-3968083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Movie Poster" width="200px" height="250px">
                    <div class="carousel--itemdetails">
                        <div>             
                          <img class="carousel--itemdetails-img" src="./assets/static/play-icon.png" alt="Play Icon">
                          <img class="carousel--itemdetails-img" src="./assets/static/plus-icon.png" alt="Plus Icon">
                        </div>
                        <p class="carousel--itemdetails-title">Título descriptivo</p>
                        <p class="carousel--itemdetails-subtitle">2019 16+ 114 minutos</p>
                    </div>
                </div>
            </div>
        </div>
</section>
<footer class="footer">
        <a class="footer--anchor" href="#">Terminos de uso</a>
        <a class="footer--anchor" href="#">Declaración de privacidad</a>
        <a class="footer--anchor" href="#">Centro de ayuda</a>
</footer>
`

export const notFoundView = () => 
`
<header class="header">
<img class="header--logo" src="./assets/static/logo-platzi-video-BW2.png" alt="Logo Platzi Video" width="200px" height="60px">
<div class="header--dropdown">
    <button class="header--dropbtn">
        <img src="./assets/static/user-icon.png" alt="Logo Usuario">
        <p>Perfil</p>
    </button>
    <div class="header--dropdown-content">
      <a href="#">Cuenta</a>
      <a href="#">Cerrar Sesión</a>
    </div>
</div>
</header>
<section class="notfound">
    <h1 class="notfound--title">404</h1>
    <p class="notfound--message">La página que estás buscando no existe...</p>
    <a class="notfound--anchor" href="#">Go Back</a>
</section>
<footer class="footer">
        <a class="footer--anchor" href="#">Terminos de uso</a>
        <a class="footer--anchor" href="#">Declaración de privacidad</a>
        <a class="footer--anchor" href="#">Centro de ayuda</a>
</footer>
`

export const loginView = () => 
`
<header class="login--header">
    <img class="login--headerlogo" src="./assets/static/logo-platzi-video-BW2.png" alt="Logo Platzi Video" width="200px" height="60px">
</header>
<section class="register">
        <section class="register--container">
            <form class="register--form" action="" method="post">
                <h1 class="register--form-title">Inicia sesión</h1>
                <div class="register--form-input-container">
                    <input class="register--form-input" type="email" name="email" id="email" placeholder="Correo">
                    <input class="register--form-input" type="password" name="password" id="password" placeholder="Contraseña">
                    <input class="register--form-submit" type="submit" value="Iniciar Sesión">
                    <div class="register--form-check-container">
                        <div>
                            <input type="checkbox" name="rememberMe" id="rememberMe">
                            <label for="rememberMe">Recuérdame</label>
                        </div>
                        <a href="#">Olvidé mi contraseña</a>
                    </div>
                </div>
                <div class="register--form-socialbutton-container">
                    <button class="register--form-socialbutton">
                        <img src="./assets/static/google-icon.png" alt="Google Icon">
                        <p>Inicia sesión con Google</p>
                    </button>
                    <button class="register--form-socialbutton">
                        <img src="./assets/static/twitter-icon.png" alt="Twitter Icon">
                        <p>Inicia sesión con Twitter</p>
                    </button>
                </div>
                <p>No tienes ninguna cuenta <b><a href="#">Regístrate</a></b></p>
            </form>
        </section>
    </section>
<footer class="footer">
    <a class="footer--anchor" href="#">Terminos de uso</a>
    <a class="footer--anchor" href="#">Declaración de privacidad</a>
    <a class="footer--anchor" href="#">Centro de ayuda</a>
</footer>
`

export const registerView = () => 
`
<header class="register--header">
    <img class="register--headerlogo" src="./assets/static/logo-platzi-video-BW2.png" alt="Logo Platzi Video" width="200px" height="60px">
</header>
<section class="register">
        <section class="register--container">
            <form class="register--form" action="" method="post">
                <h1 class="register--form-title">Regístrate</h1>
                <div class="register--form-input-container">
                    <input class="register--form-input" type="text" name="name" id="name" placeholder="Nombre">
                    <input class="register--form-input" type="email" name="email" id="email" placeholder="Correo">
                    <input class="register--form-input" type="password" name="password" id="password" placeholder="Contraseña">
                    <input class="register--form-submit" type="submit" value="Registrarme">
                </div>
                <div class="register--form-anchorcontainer">
                    <a href="#">Iniciar sesión</a>
                </div>
            </form>
        </section>
</section>
<footer class="footer">
    <a class="footer--anchor" href="#">Terminos de uso</a>
    <a class="footer--anchor" href="#">Declaración de privacidad</a>
    <a class="footer--anchor" href="#">Centro de ayuda</a>
</footer>
`