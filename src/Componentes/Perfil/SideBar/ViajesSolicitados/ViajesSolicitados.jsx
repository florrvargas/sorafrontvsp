import React from 'react'
import SideBar from '../SideBar'
import { obtenerViajesEnEspera } from '../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UilMapPinAlt, UilLocationPinAlt, UilMap, UilClock, UilDollarSignAlt} from '@iconscout/react-unicons'


export default function ViajesSolicitados() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const solicitudes = useSelector((state) => state.viajes);
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(solicitudes)

    useEffect(() => {
          dispatch(obtenerViajesEnEspera());
      }, [dispatch]);

      function generateRandomCode() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
      
        let code = '';
      
        // Generar las 2 letras aleatorias
        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(Math.random() * letters.length);
          code += letters[randomIndex];
        }
      
        // Generar los 2 números aleatorios
        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          code += numbers[randomIndex];
        }
      
        return code;
      }
    
      const randomCode = generateRandomCode();
      console.log(randomCode)


   const actualizarEstadoViaje = async (id) => {
    try {
      const respuesta = await axios.put(`/viajes/viajeSolicitado/${id}`, {
        driverCorreo: user.correo,
        estado: 'en proceso',
        codigoSeguridad: randomCode
      });

      if (respuesta.status === 200) {
         navigate(`/perfil/${id}`)
      }
      
    } catch (error) {
      console.error('Error al actualizar el estado del viaje:', error);
    }
  };

  

    
  return (
    <div className="containerMisViajes">
    <SideBar />
    <div className='rightMisViajes'>
      <h2>Solicitudes</h2>
      {!solicitudes.length ? 
        <div className='noViaje'>
          <span> No hay viajes en espera.</span>
        </div>: 
        solicitudes.length&&
        solicitudes.map((viaje) => (
            <div className="miViaje" key={viaje.id}>
              <p id='fecha'>{viaje.fecha}</p>
              <div className="ubicacion">
              <UilMapPinAlt size='1.5rem' color='var(--purple2)'/><span>Origen: {viaje.origen}</span>
              </div>
              <div className="ubicacion">
              <UilLocationPinAlt size='1.5rem' color='var(--purple2)'/><span>Destino: {viaje.destino}</span>
              </div>

              <div className="items">
                <div className="item">
                <UilMap size='1.5rem' color='var(--purple2)'/> <span>{viaje.distancia}</span>
                </div>
                <div className="item">
                <UilClock size='1.5rem' color='var(--purple2)'/> <span>{viaje.duracion}</span>
                </div>
                <button onClick={() => actualizarEstadoViaje(viaje.id)}>Aceptar</button>
              </div>

            </div>
      ))}
  </div>
  </div>
  )
}
