import React from 'react';
import './MiCuenta.css';
import { useAuth0 } from '@auth0/auth0-react';
import SideBar from '../SideBar';
import Loading from '../../../Loading/Loading';

export default function MiCuenta(){


    const user =  JSON.parse(localStorage.getItem("login"))
    // // const { user, isAuthenticated, isLoading} = useAuth0();
    // const {isLoading} = useAuth0();
    // // console.log(user)

    // if(isLoading){
    //     return <div className="containerMiCuenta">
    //     <SideBar/><Loading />
    //     </div>
    // }

    return(
        <div className="containerMiCuenta">
      <SideBar/>

        <div className='misDatos'>
            <img src={user.foto} alt={user.nombre} />
            <h2>{user.nombre}</h2>
            <p>Email: {user.correo}</p>
        </div>
    </div>
    )
}
