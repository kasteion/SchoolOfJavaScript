import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import Header from '../components/Header';
import '../assets/styles/components/Login.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register--container'>
          <form className='register--form' onSubmit={handleSubmit}>
            <h1 className='register--form-title'>Regístrate</h1>
            <div className='register--form-input-container'>
              <input
                className='register--form-input'
                type='text'
                name='name'
                id='name'
                placeholder='Nombre'
                onChange={handleInput}
              />
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
                value='Registrarme'
              />
            </div>
            <div className='register--form-anchorcontainer'>
              <Link to='/login'>
                Iniciar sesión
              </Link>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};
//export default Register
export default connect(null, mapDispatchToProps)(Register);
