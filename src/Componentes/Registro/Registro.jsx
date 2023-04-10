import React from 'react';
import './Registro.css'

export default function Registro() {
  return (
    <div className='registro'>
      <form class="formRegistro">
    <h1 class="title">Regístrate </h1>
        <div class="flex">
        <label>
            <input required="" placeholder="Nombre" type="text" class="input"/>
        </label>

        <label>
            <input required="" placeholder="Apellido" type="text" class="input"/>
            
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="Email" type="email" class="inputt"/>
    </label> 
        
    <label>
        <input required="" placeholder="Contraseña" type="password" class="inputt"/>
        
    </label>
    <label>
        <input required="" placeholder="Confirmar contraseña" type="password" class="inputt"/>
       
    </label>
    <button class="sigin-btn">Registrarme</button>
    <p class="signin">¿Ya tienes una cuenta? <a href="/InicioSesion">Inicia sesión</a> </p>
</form>
    </div>
  )
}
