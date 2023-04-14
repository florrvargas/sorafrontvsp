import React from 'react'
import './Viajes.css'
import SideBar from '../SideBar';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const center = {lat:-32.9451582, lng: -60.6864795}

export default function Viajes() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI'
  })

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
      <button class="sigin-btn">Calcular</button>
 
    
    </div>
    </div>
    
    </div>
  )



}
