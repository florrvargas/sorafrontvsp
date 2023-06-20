import React, { useState } from 'react';
import './MisViajes.css'
import SideBar from '../SideBar';
import Loading from '../../../Loading/Loading';
import { UilMapPinAlt, UilLocationPinAlt, UilMap, UilClock, UilDollarSignAlt} from '@iconscout/react-unicons'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { obtenerViajesPersonalizados } from '../../../../redux/actions';



export default function MisViajes() {

  const user = JSON.parse(localStorage.getItem('user'))
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      dispatch(obtenerViajesPersonalizados(user.correo, "realizado"));
    }
  }, [dispatch]);

  const viajesRealizados = useSelector((state) => state.viajes);
  console.log(viajesRealizados)

  const [currentPage, setCurrentPage ] = useState(1) 
  const viajesPorPag = 3                            
  const last= currentPage * viajesPorPag
  const first = last - viajesPorPag
  const currentViaje= viajesRealizados.slice(first, last)
  
  const page = (pageNumber) => {
      setCurrentPage(pageNumber);
  };

  function Pagination(){
    const pageNumbers = [];
    const cardsPerPage = Math.ceil(viajesRealizados.length/viajesPorPag)
    console.log(cardsPerPage)
    for (let i = 1; i <= cardsPerPage; i++) {
      pageNumbers.push(i)
    }

    return (
           <nav>
          <div className="pagination">
              {pageNumbers && pageNumbers.map(number => {
                return (
                  <p key={number}>
                      <button className="numbers" onClick={()=> page(number)}>{number}</button>
                  </p>
              )})}
          </div>
           </nav>
    )
  }

  if(!user){
    return <div className="containerMisViajes">
    <SideBar/><Loading />
    </div>
}

  return (
    <div className="containerMisViajes">
      <SideBar />
      <div className='rightMisViajes'>
        <h1>Historial de Viajes</h1>
        {currentViaje.length === 0? 
        <div className='noViaje'>
          <span> Todavía no realizaste viajes.</span>
          <a href="/perfil/viajes">
            <button>Pedir un viaje</button>
          </a>
        </div>: 
       
           currentViaje.map((viaje) =>
            <div className="miViaje" key={viaje.id}>
              <p id='fecha'>{viaje.fecha}</p>
              <div className="ubicacion">
              <UilMapPinAlt size='1.5rem' color='var(--purple2)'/><span>Origen: {viaje.origen}</span>
              </div>

              <div className="items">
                <div className="item">
                <UilMap size='1.5rem' color='var(--purple2)'/> <span>{viaje.distancia}</span>
                </div>
                <div className="item">
                <UilClock size='1.5rem' color='var(--purple2)'/> <span>{viaje.duracion}</span>
                </div>
                <div className="item">
                <UilDollarSignAlt size='1.5rem' color='var(--purple2)'/> <span>{viaje.montoTotal}</span>
                </div>
                </div>
              <div className="ubicacion">
              <UilLocationPinAlt size='1.5rem' color='var(--purple2)'/><span>Destino: {viaje.destino}</span>
              </div>
            
      </div>
          )}
       <Pagination  />


    </div>
    </div>
  )
}

