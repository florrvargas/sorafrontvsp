import React, { useState } from 'react';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import perfil from '../../../assets/perfil.png'
import { useSelector } from 'react-redux';

export default function SideBar() {

  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [userType, setUserType] = useState(JSON.parse(localStorage.getItem('userType')));

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userTypeData = JSON.parse(localStorage.getItem('userType'));

    setUser(userData);
    setUserType(userTypeData);
  }, []);

  const handleLogout = async () => {
    await localStorage.removeItem('user');
    await localStorage.removeItem('userType');
    setUser(null);
    setUserType(null);

    navigate('/'); 
};

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

            {!user? <p>Loading...</p>: 
            

            <div className="user-profile">
                <div>
                    <img src={user.foto? user.foto: perfil} alt="admin-picture" width='100px'/>
                    <h3>{user.nombre} </h3>  
                </div>
            </div>}

            {userType && userType === "pasajera" ?

            <div className="side-nav">
            <ul >
                <li className="side">
                    <a href="/perfil/viajes">
                        <span>Viajes</span>
                    </a>
                </li>
                <li className="side">
                    <a href='/perfil/mis-viajes'>
                        <span>  Mis viajes</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/perfil/mi-cuenta">
                        <span>Mi cuenta</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/">
                        <span >Cerrar sesión</span>
                    </a>
                </li>
                
            </ul>
            </div> :
            userType && userType === "conductora" ?
            <div className="side-navBar">
            <ul >
                 <li className="side">
                    <a href='/perfil/solicitudes'>
                        <span> Solicitudes </span>
                    </a>
                </li>
                <li className="side">
                    <a href='/perfil/mis-viajes'>
                        <span> Viajes realizados</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/perfil/mi-cuenta">
                        <span>Mi cuenta</span>
                    </a>
                </li>
                <li className="side">
                    <a href="/perfil/viajes">
                        <span>Pedir un viaje</span>
                    </a>
                </li>
                <li className="side">
                    <a onClick={handleLogout}>
                        <span >Cerrar sesión</span>
                    </a>
                </li>
                
            </ul>
            </div>: null
            }
        </nav>
         
    </div>

)

            }