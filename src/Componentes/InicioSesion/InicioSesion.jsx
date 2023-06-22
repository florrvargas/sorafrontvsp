import React, { useState, useEffect } from 'react';
import './InicioSesion.css';
import { loginUsuario, registroUsuario } from '../../redux/actions';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function InicioSesion() {
  const [input, setInput] = useState({
    contraseña: '',
    correo: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "62274512155-0s8stg20n5c8lmqsa2seet01vfkr2jo5.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('google-btn'), { size: 'medium' });
  }, []);

  function handleCallbackResponse(response) {
    const user = jwtDecode(response.credential);
  
    const logUser = {
      correo: user.email,
      contraseña: user.azp,
      nombre: user.name,
      foto: user.picture
    };
  
    dispatch(loginUsuario(logUser))
      .then(() => navigate('/perfil/viajes'))
      .catch(() => {
        dispatch(registroUsuario(logUser))
          .then(() => navigate('/perfil/viajes'))
          .catch(error => {
            alert(error.message);
          });
      });
  }

  function handleChange(e) {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!input.contraseña || !input.correo) {
      alert('Verifique los campos para poder continuar');
      return;
    }

    const { correo, contraseña } = input;

    dispatch(loginUsuario({ correo, contraseña }))
      .then(() => navigate('/perfil/viajes'))
      .catch(error => {
        alert(error);
        console.error(error);
      });
  }

  function handleTogglePassword() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }
  

  if(user) navigate("/perfil/viajes")

  return (
    <div className='container-inicio'>
      <form className='form'>
        <div className='header'>
          <h1 className='title'>Iniciar Sesion</h1>
        </div>
        <div className='inputs'>
          <input
            required
            type='email'
            name='correo'
            onChange={handleChange}
            value={input.correo}
            placeholder='Email'
            className='input'
          />
          <div className="pass">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name='contraseña'
              onChange={handleChange}
              value={input.contraseña}
              placeholder='Contraseña'
              className='input'
            />
            <button
              className="password-toggle-btn "
              type="button"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i> 
              ) : (
                <i className="fas fa-eye"></i> 
              )}
            </button>
          </div>

          
          <div className='checkbox-container'></div>
          <button className='sigin-btn' onClick={handleSubmit}>
            Iniciar Sesion
          </button>
          {/* <a className='forget' href='#'>
            ¿Olvidaste tu contraseña?
          </a> */}

          <div className='separator'>
            <hr className='line' />
            <span>O</span>
            <hr className='line' />
          </div>

          <a id='google-btn'></a>

          <p className='signup-link'>
            ¿No tienes una cuenta? <a href='/Registro'>Regístrate</a>
          </p>
        </div>
      </form>
    </div>
  );
}