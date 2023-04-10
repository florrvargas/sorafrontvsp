import React from 'react';
import './SideBar.css';
import perfil from '../../../assets/perfil.png'


export default function SideBar() {
    return (
        <div className="sideBar">
 
        <nav>
            {/* <div className="button_sidebar">
                <label htmlFor="check" className="menuButton">
                <input id="check" type="checkbox"/>
                    <span className="top"></span>
                    <span className="mid"></span>
                    <span className="bot"></span>
                </label>
            </div> */}

            <div className="user-profile">
                <img src={perfil} alt="admin-picture" width='100px'/>
                <h3>Nombre</h3>                
            </div>

            <div className="side-nav">
            <ul >
                <li className="side">
                    <a href="/Perfil/viajes">
                        <span>Viajes</span>
                    </a>
                </li>
                <li className="side">
                    <a href='/Perfil/pagos'>
                        <span>  Métodos de pago</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/Perfil/mi-cuenta">
                        <span>Mi cuenta</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/">
                        <span>Cerrar sesión</span>
                    </a>
                </li>
                {/* <li className="side-nav_refug">
                    <a href="/dashboard/refugios">
                    <img src={refugio} width='25px'/>
                    <span>Refugios</span>
                    </a>
                </li> */}
            </ul>
            </div>
        </nav>
    </div>

)
}
