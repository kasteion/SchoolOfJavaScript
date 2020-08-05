import React from 'react'
import '../assets/styles/components/Header.scss'
import HeaderLogo from '../assets/static/logo-platzi-video-BW2.png'
import UserIcon from '../assets/static/user-icon.png'

const Header = () => {
    return (
        <header className="header">
            <img className="header--logo" src={HeaderLogo} alt="Logo Platzi Video" width="200px" height="60px"/>
            <div className="header--dropdown">
            <button className="header--dropbtn">
                <img src={UserIcon} alt="Logo Usuario"/>
                <p>Perfil</p>
            </button>
            <div className="header--dropdown-content">
                <a href="#">Cuenta</a>
                <a href="#">Cerrar Sesión</a>
            </div>
            </div>
        </header>
    )
}

export default Header