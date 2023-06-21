import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { crearViaje } from '../../../../redux/actions';
import { useAuth0 } from '@auth0/auth0-react';


export default function Distancia({viaje, origen, destino}) {

    const user = JSON.parse(localStorage.getItem('user'))
    const redondeo = new Intl.NumberFormat('en-NZ', { minimumFractionDigits: 2});
    const costo = ((viaje.distance.value/1000 ) *100)
 
    const viajeDB = {
      userCorreo:user.correo,
      montoTotal:costo,
      distancia:viaje.distance.text ,
      duracion: viaje.duration.text,
      estado: "en espera",
      origen: origen.placeName,
      destino: destino.placeName,
      origenLat: origen.lat,
      origenLng: origen.lng,
      destinoLat: destino.lat,
      destinoLng: destino.lng
    }



  return (
    <div className="result">
          <p>TIEMPO APROXIMADO: {viajeDB.duracion} </p>
          <p>DISTANCIA: {viajeDB.distancia } </p>
          <div className="costo">
            <h2>COSTO: </h2>
            <h2 id='costo'>$ {viajeDB.montoTotal}</h2>
         </div> 
         <form action="https://backsora.up.railway.app/pago" method='POST'>
          <input type="hidden" name='montoTotal' value={parseFloat(viajeDB.montoTotal)} />
          <input type="hidden" name='userCorreo' value={viajeDB.userCorreo} />
          <input type="hidden" name='distancia' value={viajeDB.distancia} />
          <input type="hidden" name='duracion' value={viajeDB.duracion} />
          <input type="hidden" name='origen' value={viajeDB.origen} />
          <input type="hidden" name='destino' value={viajeDB.destino} />
          <input type="hidden" name='origenLat' value={viajeDB.origenLat} />
          <input type="hidden" name='origenLng' value={viajeDB.origenLng} />
          <input type="hidden" name='destinoLat' value={viajeDB.destinoLat} />
          <input type="hidden" name='destinoLng' value={viajeDB.destinoLng} />
         <button className='sigin-btn' >Pedir viaje</button>
         </form>

        </div>
  );
  }
