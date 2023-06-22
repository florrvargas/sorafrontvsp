
import React, { useState } from 'react';
import './MiCuenta.css';
import SideBar from '../SideBar';
import Loading from '../../../Loading/Loading';
import perfil from '../../../../assets/perfil.png'
import { UilEditAlt } from '@iconscout/react-unicons'
import { useEffect } from 'react';
import { editarUsuario } from '../../../../redux/actions';


export default function MiCuenta(){

  const [modalVisible, setModalVisible] = useState(false);
  const [changeNameVisible, setChangeNameVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [userType, setUserType] = useState(JSON.parse(localStorage.getItem('userType')));

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const userTypeData = JSON.parse(localStorage.getItem('userType'));

    setUser(userData);
    setUserType(userTypeData);
  }, []);

  const handleOpenModal = (type) => {
    setModalVisible(!modalVisible);
    if (type === 'name') {
      setChangeNameVisible(true);
      setChangePasswordVisible(false);
    } else if (type === 'password') {
      setChangeNameVisible(false);
      setChangePasswordVisible(true);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
   
    console.log('Nombre:', name);
    console.log('Contraseña:', password);
    await editarUsuario(user.id, name, password);

    setName('');
    setPassword('');
    setChangeNameVisible(false);
    setChangePasswordVisible(false);
    setModalVisible(false);
  };

  if(!user){
      return <div className="containerMiCuenta">
      <SideBar/><Loading />
      </div>
  }

  return(
    <div className="containerMiCuenta">
      <SideBar/>
      <div className='misDatos'>
        <img src={user.foto? user.foto : perfil} alt={user.nombre} width={'200rem'} />
        <div className="cambiar">
          <h2>{user.nombre} </h2><UilEditAlt size='1.5rem' color='var(--purple2)' onClick={() => handleOpenModal('name')}/>
        </div>
        <p>Email: {user.correo}</p>
        
        <div className="cambiar">
          <button onClick={() => handleOpenModal('password')}>
            Cambiar Contraseña
          </button>
        </div>

        {userType && userType === "pasajera" ?
        <div className="ser-conductora">
          <h2>Te gustaría ser parte de nuestro equipo de conductoras?</h2>
          <a href="/conductoras">
          <button >Vuélvete conductora</button>
          </a>
        </div> :
        null }

        {modalVisible && (
        <div className="modal-overlay">
          <form >
            {changeNameVisible && (
              <div className='modal'>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder='Nuevo Nombre'
                  className='input input-modal'
                  onChange={handleNameChange}
                />
              </div>
            )}
            {changePasswordVisible && (
              <div className='modal'>
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder='Nueva Contraseña'
                  className='input input-modal'
                  onChange={handlePasswordChange}
                />
              </div>
            )}
            <button onClick={handleSubmit} type="submit">Guardar cambios</button>
          </form>
        </div>
        )}
      </div>
    </div>
  )
}





