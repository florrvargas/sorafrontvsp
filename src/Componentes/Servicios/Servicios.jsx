import React from 'react';
import './Servicios.css';
import servicios from '../../assets/Servicios.jpg';
import soraWoman2 from '../../assets/SoraWoman2.png'
import soraPet2 from '../../assets/SoraPet2.png'
import soraSenior2 from '../../assets/SoraSenior2.png';
import ruta from '../../assets/Ruta.png'

export default function Servicios() {
  return (
    <div className='containerServicios'>
      <div className="introServicios">
        <h1>Queremos que te muevas tranquila, libre y feliz</h1>
        <img src={servicios} alt="" width='600rem'/>
      </div>
      <div className="servicios">
        <h2>Conocé nuestros servicios</h2>
        <div className="soraServicios">

          <div className="leftServ">
            <h1>Sora Woman</h1>
            <span> Transporte exclusivo para mujeres 👩 </span>
            <span> Úsalo para moverte con amigas, colegas, tías, hijas, etc. Si necesitas ir a una reunión, llevar a tus hijos al médico, ir al aeropuerto este servicio es para tí.</span>
            <span></span>
          </div>
          <div className="rightServ">
            <img src={soraWoman2} alt="" width='400rem'/>
          </div>
        </div>

        <div className="soraServicios">
          <div className="rightServ">
            <img src={soraPet2} alt="" width='280rem' />
          </div>
          <div className="leftServ">
            <h1>Sora Pet</h1>
            <span> Transporte exclusivo para mujeres y animalovers 🐶 </span>
            <span> Úsalo para moverte con tu compañero peludo.</span>
            <span>Pide tu Sora Pet y sal al parque con tu amigo fiel.</span>
          </div>
        </div>

        <div className="soraServicios">
          <div className="leftServ">
            <h1>Sora Senior</h1>
            <span> Transporte exclusivo para mujeres sobre 60 años🧑‍🦳</span>
            <span> Te llevamos a donde lo necesites y si lo deseas, te acompañamos en tus quehaceres.</span>
            <span>Queremos que nuestras madres, abuelas, tías y amigas mayores sigan juntándose con sus amigas, saliendo a tomar café, yendo a la peluquería y/o comprando sus remedios tranquilas y felices.</span>
          </div>
          <div className="rightServ">
            <img src={soraSenior2} alt="" width='400rem' />
          </div>
        </div>

        <div className="soraServicios2">

<div className="leftServ">
  <h1>Sora Woman</h1>
  <span> Transporte exclusivo para mujeres 👩 </span>
  <span> Úsalo para moverte con amigas, colegas, tías, hijas, etc. Si necesitas ir a una reunión, llevar a tus hijos al médico, ir al aeropuerto este servicio es para tí.</span>
  <span></span>
</div>
<div className="rightServ">
  <img src={soraWoman2} alt="" width='400rem'/>
</div>
</div>

<div className="soraServicios2">
<div className="leftServ">
  <h1>Sora Pet</h1>
  <span> Transporte exclusivo para mujeres y animalovers 🐶 </span>
  <span> Úsalo para moverte con tu compañero peludo.</span>
  <span>Pide tu Sora Pet y sal al parque con tu amigo fiel.</span>
</div>
<div className="rightServ">
  <img src={soraPet2} alt="" width='280rem' />
</div>
</div>

<div className="soraServicios2">
<div className="leftServ">
  <h1>Sora Senior</h1>
  <span> Transporte exclusivo para mujeres sobre 60 años🧑‍🦳</span>
  <span> Te llevamos a donde lo necesites y si lo deseas, te acompañamos en tus quehaceres.</span>
  <span>Queremos que nuestras madres, abuelas, tías y amigas mayores sigan juntándose con sus amigas, saliendo a tomar café, yendo a la peluquería y/o comprando sus remedios tranquilas y felices.</span>
</div>
<div className="rightServ">
  <img src={soraSenior2} alt="" width='400rem' />
</div>
</div>

      </div>

      <div className="servicios">
        <h1>¿Qué tipos de ruta puedo tomar con Sora?</h1>
        <div className="soraServicio">
        <div className="leftRuta">
          <div className="ruta">
            <h3>👉 Ruta recurrente:</h3>
            <span>La usarás cuando tengas que ir a un mismo lugar, más de 1 vez en un determinado tiempo. Por ejemplo, ir dos veces a la semana al doctor.</span>
          </div>     
         <div className="ruta">
            <h3>👉 Ruta punto a punto:</h3>
            <span>La usarás cuando quieras moverte del punto A al punto B. Por ejemplo, ir a un banco.</span>
          </div>
        </div>
        <div className="rightServ">
          <img src={ruta} alt="" width='400rem'/>
        </div>
      </div>
      </div>
    </div>
  )
}
