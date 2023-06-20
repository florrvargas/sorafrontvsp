import React, { useEffect } from 'react'
import './ViajePendiente.css'
import { useDispatch, useSelector } from 'react-redux';
import { obtenerViajesPersonalizados } from '../../../redux/actions';
import DetalleViaje from '../DetalleViaje/DetalleViaje';
import { useNavigate } from 'react-router-dom';
import { UilMapPinAlt, UilLocationPinAlt, UilMap, UilClock, UilDollarSignAlt} from '@iconscout/react-unicons'
import SideBar from '../SideBar/SideBar';



export default function ViajePendiente() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("payment_id");
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    useEffect(() => {
    if (user) {
        dispatch(obtenerViajesPersonalizados(user.correo, "en espera"));
    }
    }, [dispatch]);

    const viaje= useSelector((state) => state.viajes);


if(viaje && viaje.length){
  return (
     <div className="containerMiCuenta">
    <SideBar/>
    <div className='viajePendiente'>
        <h1>Tu Auto fue Reservado.</h1>
        <h3 id='h3'>En instantes enviaremos a tu SoraWoman.</h3><br/><br/><br/>
        <div className="operacion" key={viaje[0].id}>
          <h2 id='operacion'>Operacion EXITOSA # {paymentId}</h2>
          <div className="detalle ">
          <UilMapPinAlt size='1.5rem' color='var(--purple2)'/>
          <div className="pedido">
            <span>Origen </span>
            <h2>{viaje[0].origen}</h2>
          </div>
          </div>
          <div className="detalle">
          <UilLocationPinAlt size='1.5rem' color='var(--purple2)'/>
          <div className="pedido">
            <span>Destino </span>
            <h2>{viaje[0].destino}</h2>
          </div>
          </div>
      </div>
      <br/>
        <button onClick={()=>navigate(`/perfil/${viaje[0].id}`)}>Continuar</button>
    </div>
    </div>
  )}

else{
      return (
        <div className="containerMisViajes">
      <SideBar/>
        <div>
          <h1>Tu Auto fue Reservado.</h1>
          <h3>En instantes enviaremos a tu SoraWoman.</h3><br/><br/><br/>
          <h2>Operacion EXITOSA # {paymentId}</h2>
          <button onClick={()=>navigate(`/perfil/${viaje[0].id}`)}>Continuar</button>
        </div>
        </div>
      )
  }}