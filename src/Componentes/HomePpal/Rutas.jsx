import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import '../Perfil/SideBar/Viajes/Viajes.css'
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import Places from '../Perfil/SideBar/Viajes/Places';
import Loading from '../Loading/Loading';


export default function Rutas() {
  
  const [ libraries ] = useState(['places']);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI',
    libraries,
  })

  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [done, setDone] = useState(false);
  const [ origen, setOrigen] = useState('');
  const [ destino, setDestino] = useState('');
  const [directions, setDirections] = useState()
  const [timestamp, setTimestamp] = useState('');


  useEffect(() => {
    console.log("fkdlfvb")
    
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
  } 

  
  if(!isLoaded) return <div className="containerRutas">
 <Loading />
  </div>

  return (
    <div className="containerRutas">
            <div className="ruta form">
      <h2>Calcule su viaje</h2>
      <Places
        placeholder={'Origen'} 
        setOrigen={(position) => {setOrigen(position);
      }} />
      
      <Places 
        placeholder={'Destino'}
        setDestino={(position) => {setDestino(position);
          }}
         />
    
      <button className={`sigin-btn `} onClick={result} >Calcular</button>
      { done && directions ? 
      <div className="result">
      <p>TIEMPO APROXIMADO: {directions.routes[0].legs[0].duration.text} </p>
      <p>DISTANCIA: {directions.routes[0].legs[0].distance.text} </p>
      <div className="costo">
        <h2>COSTO: </h2>
        <h2 id='costo'>$ {parseFloat(((directions.routes[0].legs[0].distance.value/1000 ) *100).toFixed(2))}</h2>
     </div> 
     </div>: null
      }
    </div>
    <div className="mapRuta">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName='mapContainerRutas'
        options={options}
        onLoad={onLoad}
      >
        <Marker
          position={center}
        />
        {directions && <DirectionsRenderer directions={directions}/>}
      </GoogleMap>
    

    </div>
    </div>
  )
}


