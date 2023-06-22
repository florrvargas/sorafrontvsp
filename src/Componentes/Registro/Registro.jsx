import React, { useEffect } from 'react';
import './Registro.css'
import { useState } from 'react';
import { registroUsuario } from '../../redux/actions'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

export default function Registro() {

  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = (correo) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(correo);
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };

  const isConfirmPasswordValid = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleRegister = () => {
    try {
      if (!isEmailValid(correo)) {
        alert("El correo no es válido.");
        return;
      }
      if (!isPasswordValid(contraseña)) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
      }
      if (!isConfirmPasswordValid(contraseña, confirmarContraseña)) {
        alert("La contraseña y la confirmación de contraseña no coinciden.");
        return;
      }
  
      const payload = { nombre, correo, contraseña };
      dispatch(registroUsuario(payload));
      navigate("/perfil/viajes");
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  
  function handleTogglePassword() {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }
  
 
  return (
    <div className='registro'>
      <form class="formRegistro" >
        <h1 class="title">Regístrate </h1>
          <div class="flex">
            <label>
                <input  
                  required
                  type="text"
                  name="nombre"
                  onChange={(e) => setNombre(e.target.value)}
                  value={nombre}
                  placeholder="Nombre"
                  className="inputt"/>
            </label>  
          </div> 
            <label>
              <input
                required
                type="email"
                name="correo"
                onChange={(e) => setCorreo(e.target.value)}
                value={correo}
                placeholder="Email"
                className="inputt"
              />
            </label>
            <label className='passw'>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name="contraseña"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}
                placeholder="Contraseña"
                className="input"
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
            </label>
            <label className='passw'>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                name="confirmarContraseña"
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                value={confirmarContraseña}
                placeholder="Confirmar contraseña"
                className="input"
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
            </label>
      
        <button className="sigin-btn" onClick={handleRegister}>Registrarme</button>

        <p class="signin">¿Ya tienes una cuenta? <a href="/inicio-sesion">Inicia sesión</a> </p>
      </form>
    </div>
  )
}
