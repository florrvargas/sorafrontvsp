import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png'
import Android from '@iconscout/react-unicons/icons/uil-android';
import Apple from '@iconscout/react-unicons/icons/uil-apple'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Whatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';

export default function Footer() {
  return (
    <div className='containerFooter'>

      <img src={Logo} alt="" />

      <div className="contactoFooter">
        <p>Contáctanos</p>
        <div className="info">
        <Instagram className="iconFooter"size='1.5rem' color='var(--pink1)'/>
          <a href="https://www.instagram.com/sora_chile/">
        <p>Instagram</p></a>
        </div>
        <div className="info">
        <Whatsapp className="iconFooter" size='1.5rem' color='#20BA2F'/>
        <a href="https://wa.me/56983478039?text=Hola%20Sora!">
        <p>Whatsapp</p>
        </a>
        </div>

      </div>

      <div className="descargaAppFooter">
      <p>Descarga nuestra App Móvil</p>
        <div className="info">
          <Android className="iconFooter" size='1.5rem' color='#20BA2F'/>
          <p>Descarga la App para Android</p>
          </div>
          <div className="info">
          <Apple className="iconFooter" size='1.5rem' color='black'/>
          <p>Descarga la App para iOS</p>
          </div>
        </div>
      

      <div className="serviciosFooter">
      <p>Conoce nuestros servicios</p>
      <div className="serv">
        <a href="/Servicios"><p>SoraWoman</p></a>
        <a href="/Servicios"><p>SoraPet</p></a>
        <a href="/Servicios"><p>SoraSenior</p></a>
      </div>
      </div>

      <div className="ayudaFooter">
        <a href="/Conductoras"><p>Vuélvete conductora</p></a>
        <a href="/Ayuda"><p>Ayuda</p></a>
        <a href="/QuienesSomos"><p>QuienesSomos</p></a>
      </div>
    </div>
  )
}
