import React from 'react'
import { useEffect } from 'react';
import MPButton from './MercadoPago';

export default function Distancia({viaje}) {

    const redondeo = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2});

    const costo = ((viaje.distance.value/1000 ) *100)
    console.log(costo)
   

    function handleCreateTravel() {
      dispatch(crearViaje((viaje.distance.value)/ 1000, costo));

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
