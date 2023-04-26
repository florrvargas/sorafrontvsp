import React from 'react'
import { useDispatch } from 'react-redux';
import { crearViaje } from '../../../../redux/actions';

export default function Distancia({viaje, setCosto}) {

    const redondeo = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2});
    const costo = redondeo.format((viaje.distance.value /1000) *100)
    setCosto(costo)
    const dispatch = useDispatch()
    const user =  JSON.parse(localStorage.getItem("login"))


    const viajeCrear = {
      userCorreo:user.correo,
      montoTotal:viaje.distance.value,
      distancia:viaje.distance.text 
    }

    console.log(viajeCrear)
  
  function handleCreateTravel() {
    dispatch(crearViaje(viajeCrear))
  }

  return (
    <div className="result">
          <p>TIEMPO APROXIMADO: {viaje.duration.text} </p>
          <p>DISTANCIA: {viaje.distance.text } </p>
          <div className="costo">
            <h2>COSTO: </h2>
            <h2 id='costo'>$ {costo}</h2>
         </div> 
         <a href="/perfil/viajes/pago">
         <button className='sigin-btn' onClick={()=>handleCreateTravel()}>Pedir viaje</button></a>
        </div>
  );
  }
