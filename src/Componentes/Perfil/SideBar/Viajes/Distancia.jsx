import React from 'react'

export default function Distancia({viaje, setCosto}) {

    const redondeo = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2});

    const costo = redondeo.format((viaje.distance.value /1000) *100)
    setCosto(costo)

    console.log(viaje)

  return (
    <div className="result">
          <p>TIEMPO APROXIMADO: {viaje.duration.text} </p>
          <p>DISTANCIA: {viaje.distance.text } </p>
          <div className="costo">
            <h2>COSTO: </h2>
            <h2 id='costo'>$ {costo}</h2>
         </div> 
        </div>
  );
  }
