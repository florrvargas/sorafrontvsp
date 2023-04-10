import React from 'react';
import './Home.css'
import Cards from '../Servicios/Cards';
import soraWoman from '../../assets/SoraWoman.png'
import soraPet from '../../assets/SoraPet.png'
import soraSenior from '../../assets/SoraSenior.png'
import inicio from '../../assets/Inicio.png'
import inicioPortada from '../../assets/InicioPortada.jpg'

export default function Home() {
  return (
    <div className='containerHome'>

    {/* -------------------------------------------------------
    ---------------------- INICIO ----------------------
    ------------------------------------------------------- */}
      <div className="inicio">
        <div className="inicioRight">
        <h1 id='h1'>Planifica tu viaje y muévete con Sora</h1>
        <span>Sora se encargará de que llegues tranquila y feliz a tu destino</span>
        <a href="/Conductoras">
        <button className='button'>Vuélvete conductora </button></a>
        </div>
        <img src={inicioPortada} alt="" width='60%' />
      </div>
    {/* -------------------------------------------------------
    ---------------------- SERVICIOS ----------------------
    ------------------------------------------------------- */}
      <div className="serviciosHome">
      <h1>Conoce nuestros servicios</h1>
      <div className="cardsHome">
        <a href="/Servicios">
        <Cards 
          nombre='SoraWoman' 
          imagen={soraWoman} 
          info='Transporte exclusivo para mujeres.'/>
        </a>
        <a href="/Servicios">
        <Cards 
          nombre='SoraPet' 
          imagen={soraPet} 
          info='Transporte exclusivo para mujeres y animalovers.'/>
        </a>
        <a href="/Servicios">
        <Cards 
          nombre='SoraSenior' 
          imagen={soraSenior} 
          info='Transporte exclusivo para mujeres mayores.'/>
        </a>
      </div>
      </div>

    {/* -------------------------------------------------------
    ---------------------- WHY SORA ----------------------
    ------------------------------------------------------- */}
      <div className="whySora">
        <img src={inicio} alt="" width='50%' />
        <div className="inicioRight">
          <h1>¿Por qué moverte con SORA?</h1>
          <div className="razones">
          <span> ● Nos importa y nos preocupa que MUJERES, MADRES y AMIG@S de la comunidad LGBTQIA puedan movilizarse sin sentir miedo a ser violentad@s y/o asaltad@s.</span>
          <span> ● Somos una startup de movilidad femenina ideada por MUJERES, para MUJERES.</span>
          <span> ● Donde SORA esté, estaremos haciendo alianzas y donando dinero a diversas ONG'S que persigamos los mismos propósitos.</span>
          </div>
          <a href="/QuienesSomos">
          <button className='button'>Mas información sobre SORA </button>
          </a>
        </div>
      </div>
    </div>
  )
}
