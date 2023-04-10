import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="n-left">
            <a href="/"><img src={Logo} alt="" /></a>
        
        <ul>
            <li>
                <a href="/QuienesSomos">Quienes Somos</a>
            </li>
            <li>
                <a href="/Servicios">Servicios</a>
            </li>
            <li>
                <a href="/Conductoras">Conductoras</a>
            </li>
            <li>
                <a href="/Ayuda">Ayuda</a>
            </li>
        </ul>
        
        </div>

        <div className="n-right">
        <ul>
            {/* <li>
                <a href="">Idioma</a>
            </li> */}
            <li>
                <a href="/InicioSesion">Iniciar Sesion</a>
            </li>
            <li>
                <a href="/Registro">Registrarse</a>
            </li>
        </ul>
        </div>

     

    </div>
  )
}


    
