import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import HeaderLogo from '../assets/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header--logo' src={HeaderLogo} alt='Logo Platzi Video' width='200px' height='60px' />
      </Link>
      <div className='header--dropdown'>
        <button className='header--dropbtn' type='button'>
          {
            (hasUser) ?
              <img src={gravatar(user.email)} alt={user.email} width='50px' height='50px' /> :
              <img src={UserIcon} alt='Logo Usuario' width='50px' height='50px' />
          }
          <p>Perfil</p>
        </button>
        <div className='header--dropdown-content'>
          {
            (hasUser) ?
              <a href='/'>{user.name}</a> :
              null
          }

          {
            (hasUser) ?
              <a href='/' onClick={handleLogout}>Cerrar Sesión</a> :
              <Link to='/login'>Iniciar sesión</Link>
          }
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

//export default Header
export default connect(mapStateToProps, mapDispatchToProps)(Header);
