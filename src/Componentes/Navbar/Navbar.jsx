import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="n-left">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <ul className={`n-list ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="/quienes-somos">Quienes Somos</a>
          </li>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          <li>
            <a href="/conductoras">Conductoras</a>
          </li>
          <li>
            <a href="/ayuda">Ayuda</a>
          </li>
        </ul>
      </div>

      <div className="n-right">
        <ul className={`n-list n-list1 ${isMenuOpen ? 'open' : ''} `}>
          <li>
          {user?
            <a href="/perfil/viajes">
              <button>Ingresar</button>
            </a>:
            <a href="/inicio-sesion">
              <button>Ingresar</button>
            </a>
          }         
          </li> 

        </ul>
        <div className={`n-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}
