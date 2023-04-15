import React, { useState } from 'react'
import './Viajes.css'
import SideBar from '../SideBar';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useEffect } from 'react';



export default function Viajes() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI'
  })

  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [done, setDone] = useState(false);
  const [costo, setCosto] =useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position)=> {
      setLatitud(position.coords.latitude);
      setLongitud(position.coords.longitude);
      setTimestamp(position.timestamp)
    })
  })
  
  const center = {lat:latitud, lng: longitud}
  const km = 2;
  const tiempoAprox = 20;
  
  function result(){
    const tarifaInicial = 100;
    const costo = tarifaInicial * km;
    setCosto(costo);
    setDone(true);
  } 
  
  if(!isLoaded) return <div>Loading...</div>

  return (
    <div className="containerViajes">
    <SideBar />
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName='mapContainer'
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    
    <div className="rightViajes form">
      <h2>Calcule su viaje</h2>
      <input placeholder="Origen" class="input" type="text"/>
      <p>Ej: direccion 1</p>
      <input placeholder="Destino" class="input" type="text"/>
      <p>Ej: direccion 2</p>
      <button class="sigin-btn" onClick={result}>Calcular</button>
      { done ? 
        <div className="result">
          <p>TIEMPO APROXIMADO: {tiempoAprox} min</p>
          <div className="costo">
            <h2>COSTO: </h2>
            <h2 id='costo'>$ {costo}</h2>
         </div> 
        </div> : null
      }

    
 
    </div>
    </div>
    
    </div>
  )



}
