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
  const [contrasena, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [dni, setDni] = useState('');
  const [fotoDni, setFotoDni] = useState(null);
  const [genero, setGenero] = useState('');

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
      if (!isPasswordValid(contrasena)) {
        alert("La contrasena debe tener al menos 6 caracteres.");
        return;
      }
      if (!isConfirmPasswordValid(contrasena, confirmarContraseña)) {
        alert("La contrasena y la confirmación de contrasena no coinciden.");
        return;
      }
      if (dni === '') {
        alert('Por favor, ingresa tu DNI/RUT.');
        return;
      }
      if (fotoDni === null) {
        alert('Por favor, adjunta una foto de tu DNI/RUT.');
        return;
      }
      if (genero === '') {
        alert('Por favor, selecciona tu género.');
        return;
      }
  
      const payload = { nombre, correo, contrasena, dni, fotoDni, genero };
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
      <form className="formRegistro" >
        <h1 className="title">Regístrate </h1>
          <div className="flex">
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
                name="contrasena"
                onChange={(e) => setContraseña(e.target.value)}
                value={contrasena}
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
                placeholder="Confirmar contrasena"
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

            <div className="flex">
        <label>
          <input  
            required
            type="text"
            name="dni"
            onChange={(e) => setDni(e.target.value)}
            value={dni}
            placeholder="DNI/RUT"
            className="inputt"
          />
        </label>  
      </div>
      <div className="flex">
        <label>
          <input  
            required
            type="file"
            name="fotoDni"
            onChange={(e) => setFotoDni(e.target.files[0])}
            accept="image/*"
            className="inputt"
          />
        </label>  
      </div>
      <div className="flex">
        <label>
          <select
            required
            name="genero"
            onChange={(e) => setGenero(e.target.value)}
            value={genero}
            className="inputt"
          >
            <option value="">Selecciona tu género</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </label>  
      </div>
      
        <button className="sigin-btn" onClick={handleRegister}>Registrarme</button>

        <p className="signin">¿Ya tienes una cuenta? <a href="/inicio-sesion">Inicia sesión</a> </p>
      </form>
    </div>
  )
}
