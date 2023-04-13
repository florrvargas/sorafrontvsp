import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Logo.png'
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated, getAccessTokenSilently  } = useAuth0();

//   async function saveUserDataToDatabase() {
//     try {
//        loginWithRedirect();
//       const token = await getAccessTokenSilently();

//       const response = await axios.post('https://example.com/api/userdata', {
//         user: user,
//         isAuthenticated: isAuthenticated,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }


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
            { isAuthenticated? 
            <li>
                <button onClick={() => logout()}>Cerrar sesión</button>
            </li> :
            <li>
                <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
            </li>
            }
        </ul>
        </div>

     

    </div>
  )
}


    
