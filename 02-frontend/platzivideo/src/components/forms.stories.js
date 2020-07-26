import '../../assets/styles/components/forms.css'

export default { title: 'Forms'}

export const loginForm = () => 
`
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
`

export const registerForm = () => 
`
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
`