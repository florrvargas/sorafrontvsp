import React from 'react';
import './MiCuenta.css';
import { useAuth0 } from '@auth0/auth0-react';
import SideBar from '../SideBar';
import Loading from '../../../Loading/Loading';

export default function MiCuenta(){

    const { user, isAuthenticated, isLoading} = useAuth0();
    console.log(user)

    if(isLoading){
        return <div className="containerMiCuenta">
        <SideBar/><Loading />
        </div>
    }

    return(
        <div className="containerMiCuenta">
      <SideBar/>

        <div className='misDatos'>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    </div>
    )
}
