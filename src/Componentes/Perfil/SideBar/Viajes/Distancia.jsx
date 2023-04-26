import React from 'react'
import MPButton from './MercadoPago';
import { useDispatch } from 'react-redux';
import { crearViaje } from '../../../../redux/actions';


export default function Distancia({viaje}) {

    const redondeo = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2});


    const costo = ((viaje.distance.value/1000 ) *100)
    console.log(costo)
   

    const dispatch = useDispatch()
    const user =  JSON.parse(localStorage.getItem("login"))


    function handleCreateTravel() {
      dispatch(crearViaje((viaje.distance.value)/ 1000, costo));

    }

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
         <form action="http://localhost:3001/pago" method='POST'>
          <input type="hidden" name='costo' value={costo} />
         <button className='sigin-btn' onClick={(e)=>handleCreateTravel(e)}>Pedir viaje</button>
         </form>
         <MPButton viaje= {viaje} />

        </div>
  );
  }
