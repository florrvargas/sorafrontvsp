import React, { useState } from 'react';
import './InicioSesion.css'
import { Link } from "react-router-dom";


export default function InicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();  
//   alert(username,password)
// }

return (
  <div className='container-inicio'>
   <form class="form">
    <div class="header">
      <h1 className='title'>Iniciar Sesion</h1></div>
    <div class="inputs">
        <input placeholder="Email" class="input" type="text"/>
        <input placeholder="Contraseña" class="input" type="password"/>
    <div class="checkbox-container">
       
    </div>
    <button class="sigin-btn">Iniciar Sesion</button>
    <a class="forget" href="#">¿Olvidaste tu contraseña?</a>
    

  <div class="separator">
    <hr class="line"/>
    <span>O</span>
    <hr class="line"/>
  </div>
  <button type="submit" class="sigin-btn">
    <span>Iniciar sesion con Google</span>
  </button>
    <p class="signup-link">¿No tienes una cuenta? <a href="/Registro">Regístrate</a></p>
    </div>
</form>
</div>
)
}