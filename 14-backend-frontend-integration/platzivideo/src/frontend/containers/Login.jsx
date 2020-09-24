import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <>
      <Header isLogin />
      <section className='register'>
        <section className='register--container'>
          <form className='register--form' onSubmit={handleSubmit}>
            <h1 className='register--form-title'>Inicia sesión</h1>
            <div className='register--form-input-container'>
              <input
                className='register--form-input'
                type='email'
                name='email'
                id='email'
                placeholder='Correo'
                onChange={handleInput}
              />
              <input
                className='register--form-input'
                type='password'
                name='password'
                id='password'
                placeholder='Contraseña'
                onChange={handleInput}
              />
              <input
                className='register--form-submit'
                type='submit'
                value='Iniciar Sesión'
              />
              <div className='register--form-check-container'>
                <div>
                  <label htmlFor='rememberMe'>
                    <input type='checkbox' name='rememberMe' id='rememberMe' />
                    Recuérdame
                  </label>
                </div>
                <a href='/'>Olvidé mi contraseña</a>
              </div>
            </div>
            <div className='register--form-socialbutton-container'>
              <button className='register--form-socialbutton' type='button'>
                <img src={googleIcon} alt='Google Icon' />
                <p>Inicia sesión con Google</p>
              </button>
              <button className='register--form-socialbutton' type='button'>
                <img src={twitterIcon} alt='Twitter Icon' />
                <p>Inicia sesión con Twitter</p>
              </button>
            </div>
            <p>
              No tienes ninguna cuenta
              <Link to='/register'>
                <b> Regístrate</b>
              </Link>
            </p>
          </form>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

//export default Login
export default connect(null, mapDispatchToProps)(Login);
