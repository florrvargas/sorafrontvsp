import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import './Viajes.css'
import SideBar from '../SideBar';
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import Places from './Places';
import Distancia from './Distancia';
import Loading from '../../../Loading/Loading';
import { useAuth0 } from '@auth0/auth0-react';

export default function Viajes() {
  
  const [ libraries ] = useState(['places']);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI',
    libraries,
  })

  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [done, setDone] = useState(false);
  const [costo, setCosto] =useState('');
  const [ origen, setOrigen] = useState('');
  const [ destino, setDestino] = useState('');
  const [directions, setDirections] = useState()
  const [disableButton, setDisableButton] = useState()
  const {user} = useAuth0()
  
  console.log(JSON.stringify(user))
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition((position)=> {
      setLatitud(position.coords.latitude);
      setLongitud(position.coords.longitude);
      setTimestamp(position.timestamp)
    })
  },[])
  
  const mapRef = useRef()
  const center = {lat:latitud, lng: longitud}
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);
  const onLoad = useCallback((map) => (mapRef.current = map))


  const fetchDirections = (destino) => {
    if (!origen) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: origen,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };
  
  
  
  function result(){
    fetchDirections(destino)
    setDone(true);
    setDisableButton('eliminarBtn');
  } 

  
  if(!isLoaded) return <div className="containerViajes">
  <SideBar /><Loading />
  </div>

  return (
    <div className="containerViajes">
    <SideBar />
    <div className="map">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName='mapContainer'
        options={options}
        onLoad={onLoad}
      >
        <Marker
          position={center}
        />
        {directions && <DirectionsRenderer directions={directions}/>}
      </GoogleMap>
    
    <div className="rightViajes form">
      <h2>Calcule su viaje</h2>
      <Places
        placeholder={'Origen'} 
        setOrigen={(position) => {setOrigen(position);
      }} />
      <p>Ej: direccion 1</p>
      <Places 
        placeholder={'Destino'}
        setDestino={(position) => {setDestino(position);
          }}
         />
      <p>Ej: direccion 2</p>
      <button className={`sigin-btn ${disableButton}`} onClick={result} >Calcular</button>
      { done && directions ? <Distancia viaje={directions.routes[0].legs[0]} />
         : null
      }
    </div>
    </div>
    </div>
  )
}


