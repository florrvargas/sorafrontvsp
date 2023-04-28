import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'
import { useAuth0 } from "@auth0/auth0-react";
import { registroUsuario, traerUsuariosPorCorreo } from '../../redux/actions';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';





export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently, user  } = useAuth0();
  

  return (
    <div className='navbar'>
        <div className="n-left">
            <a href="/"><img src={Logo} alt="" /></a>
        
        <ul>
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
        <ul>
            {/* <li>
                <a href="">Idioma</a>
            </li> */}
         
            <a>
                <button onClick={loginWithRedirect}>Ingresar</button>
            </a>
            
        </ul>
        </div>

     

    </div>
  )
}


    
