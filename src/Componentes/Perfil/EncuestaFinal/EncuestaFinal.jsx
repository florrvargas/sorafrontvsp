import React from 'react'
import './EncuestaFinal.css'
import { useNavigate } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

export default function () {
    const navigate= useNavigate()

  return (
    <div className="containerMiCuenta">
    <SideBar/>

      <div className='misDatos'>
      <h1>Gracias por confiar en Sora...</h1><br/><br/>
        <h3>Nos gustaría que nos comentes como ha sido tu viaje, por favor completa este formulario. <br></br> 
        Te tomará solo unos minutos.</h3>
        <a href=""> Link al google form</a><br/><br/>
        <button onClick={() => navigate("/perfil/viajes")}>Volver a inicio</button>
          </div>
</div>
  )
}
