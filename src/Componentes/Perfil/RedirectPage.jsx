import React from 'react'
import './RedirectPage.css'
import SideBar from './SideBar/SideBar'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { registroUsuario } from '../../redux/actions';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

export default function RedirectPage() {
  const navigate = useNavigate()
  const {user, isLoading} = useAuth0()
  const dispatch=useDispatch()


  {!isLoading?
    dispatch(registroUsuario({
      nombre:`${user.given_name} ${user.family_name}`,
      correo:user.email,
      contraseña:user.sub,
      foto:user.picture
  }))
  :
  <h1>Cargando..</h1>
  }

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/perfil/viajes');
    }, 2000); // redirige después de 5 segundos

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return(<Loading/>);

}

