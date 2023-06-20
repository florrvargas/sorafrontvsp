import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import SideBar from '../SideBar/SideBar';
import { GoogleMap, useLoadScript, Marker, DirectionsRenderer, DirectionsService } from '@react-google-maps/api';
import './DetalleViaje.css'
import '../SideBar/Viajes/Viajes.css'
import Loading from '../../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  obtenerViajePorId } from '../../../redux/actions';
import '../../Perfil/SideBar/Viajes/Viajes.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



export default function DetalleViaje() {

    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [directions, setDirections] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const userType = JSON.parse(localStorage.getItem('userType'))
    
    const viaje = useSelector((state) => state.viajes);
    console.log(viaje.codigoSeguridad)
   
    const origen = {
        lat: viaje.origenLat,
        lng: viaje.origenLng,
    }
    const destino = {
        lat: viaje.destinoLat,
        lng: viaje.destinoLng,
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyA_L3GuLKlfEebK6qSzJRRhs8g9vf3k7rI',
    })

  useEffect(() => {
    dispatch(obtenerViajePorId(id));
    fetchDirections(origen, destino)
  }, [dispatch, id]); 
  

  const mapRef = useRef()
  const center = {lat:latitud, lng: longitud}
  const options = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false
  }), []);
  const onLoad = useCallback((map) => (mapRef.current = map))
 
  const fetchDirections = () => {
    if (!origen || !destino) return;
  
    const directionsService = new google.maps.DirectionsService();
   
    directionsService.route(
      {
        origin: origen,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        } else {
          console.error("Error al obtener la ruta:", status);
        }
      }
    );
  };

  const actualizarEstadoViaje = async (id) => {
    try {
      const respuesta = await axios.put(`/viajes/viajeSolicitado/${id}`, {
        estado: 'realizado',
      });

      if (respuesta.status === 200) {
         navigate(`/perfil/solicitudes`)
      }
      
    } catch (error) {
      console.error('Error al actualizar el estado del viaje:', error);
    }
  };
  


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
      {userType=== "conductora" ?
      <div className="rightViajes form2">
      <h3 id='h3'>Código de Seguridad: </h3>
      <h1>{viaje.codigoSeguridad}</h1>
      <button  onClick={() => actualizarEstadoViaje(id)}>Terminar viaje</button>
      </div> :
      <div className="rightViajes form2">
      <h3 id='h3'>Código de Seguridad: </h3>
      <h1>{viaje.codigoSeguridad}</h1>
      <button  onClick={() => navigate("/perfil/viaje-finalizado")}>Continuar</button>
      </div>
      }
      
      
    
    
    </div>
    </div>
  )
}

