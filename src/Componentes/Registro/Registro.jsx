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

  const handleRegister = async () => {
    try {
   
    if (!isEmailValid(correo)) {
      alert("El correo no es válido.")
    }

    if (!isPasswordValid(contraseña)) {
      alert("La contraseña debe tener al menos 6 caracteres.")
    }

    if (!isConfirmPasswordValid(contraseña, confirmarContraseña)) {
      alert("La contraseña y la confirmación de contraseña no coinciden.")
    }

    const payload = { nombre, correo, contraseña };
    const user = dispatch(registroUsuario(payload));

    if (user) {
      navigate("/perfil/viajes");
    } else {
      alert("No se pudo completar el registro.");
    }
  } catch (error) {
    console.log(error);
    alert("Ha ocurrido un error.");
  }
};
 
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
            <label>
              <input
                required
                type="password"
                name="contraseña"
                onChange={(e) => setContraseña(e.target.value)}
                value={contraseña}
                placeholder="Contraseña"
                className="inputt"
              />
            </label>
            <label>
              <input
                required
                type="password"
                name="confirmarContraseña"
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                value={confirmarContraseña}
                placeholder="Confirmar contraseña"
                className="inputt"
              />
            </label>
      
        <button className="sigin-btn" onClick={handleRegister}>Registrarme</button>

        <p class="signin">¿Ya tienes una cuenta? <a href="/inicio-sesion">Inicia sesión</a> </p>
      </form>
    </div>
  )
}
