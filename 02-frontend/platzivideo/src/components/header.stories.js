import '../../assets/styles/components/header.css'

export default { title: 'Header'};

export const header = () => 
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
`