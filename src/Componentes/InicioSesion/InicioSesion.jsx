import React, { useState ,useEffect } from 'react';
import './InicioSesion.css'
import { loginUsuario } from '../../redux/actions';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function InicioSesion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [input, setInput] = useState({
    contraseña: "",
    correo: "",
  });


  useEffect(() => {

    google.accounts.id.initialize({
      client_id: "62274512155-0s8stg20n5c8lmqsa2seet01vfkr2jo5.apps.googleusercontent.com",
      callback : handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInButton"),
      {size:"medium"}
    );

  }, [])

  function handleCallbackResponse(response) {
    const user =(jwtDecode(response.credential))

    const logUser={
      correo:user.email,
      contraseña:user.azp
    }

    dispatch(loginUsuario(logUser))

    navigate("/perfil/viajes")
  }

  function validate(input) {
    let errors = {};
  
     if (!input.contraseña) {
      errors.contraseña = "Se requiere una contraseña";
    } else if (!input.correo || !input.correo.includes("@")) {
      errors.correo = "Se requiere correo";

  
    return errors;
  }
}

  
function handleChange(e) {
e.preventDefault();
console.log(input);
setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));

}

function handleSubmit(e) {
  try{
    if (
      !input.contraseña ||
      !input.correo
    ) {
      e.preventDefault();
      alert("Verifique los campos para poder continuar");
    } else {
      e.preventDefault();
    
      const logIn = {
        correo:input.correo,
        contraseña:input.contraseña
      }
      dispatch(loginUsuario(logIn))
    
      setInput({
        nombre: "",
        contraseña: "",
        correo: "",
        confirmarContraseña:"",
      });

      navigate("/perfil/viajes")

 }}catch(error){
    alert(error)
 }

}

return (
  <div className='container-inicio'>
   <form class="form">
    <div class="header">
      <h1 className='title'>Iniciar Sesion</h1></div>
    <div class="inputs">
        <input required="" type="email" name='correo' onChange={handleChange} value={input.correo} placeholder="Email" class="input"/>
        <input required="" type="password" name='contraseña' onChange={handleChange} value={input.contraseña} placeholder="Contraseña" class="input"/>
    <div class="checkbox-container">
       
    </div>
    <button class="sigin-btn" onClick={(e)=>handleSubmit(e)}>Iniciar Sesion</button>
    <a class="forget" href="#">¿Olvidaste tu contraseña?</a>
    

  <div class="separator">
    <hr class="line"/>
    <span>O</span>
    <hr class="line"/>
  </div>

  <button class="sigin-btn" id="signInButton"></button>

    <p class="signup-link">¿No tienes una cuenta? <a href="/Registro">Regístrate</a></p>
    </div>
</form>
</div>
)
}