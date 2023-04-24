import './App.css'
import { Route, Routes } from "react-router-dom";
import Footer from './Componentes/Footer/Footer'
import Home from './Componentes/HomePpal/Home'
import Navbar from './Componentes/Navbar/Navbar'
import Servicios from './Componentes/Servicios/Servicios';
import QuienesSomos from './Componentes/QuienesSomos/QuienesSomos';
import InicioSesion from './Componentes/InicioSesion/InicioSesion';
import Ayuda from './Componentes/Ayuda/Ayuda';
import Registro from './Componentes/Registro/Registro';
import Conductoras from './Componentes/Conductoras/Conductoras';
import Perfil from './Componentes/Perfil/Perfil';
import MiCuenta from './Componentes/Perfil/SideBar/MiCuenta/MiCuenta';
import Viajes from './Componentes/Perfil/SideBar/Viajes/Viajes';
import MetodosPagos from './Componentes/Perfil/SideBar/MetodosPagos/MetodosPagos';
import Pago from './Componentes/Perfil/SideBar/Pago/Pago';
import { Provider } from 'react-redux';
import store from './redux/store.js'

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar></Navbar>
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route  path="/quienes-somos" element={<><Navbar/><QuienesSomos/><Footer/></>} />
          <Route  path="/servicios" element={<><Navbar/><Servicios/><Footer/></>} />
          <Route  path="/ayuda" element={<><Navbar/><Ayuda/><Footer/></>} />
          <Route  path="/inicio-sesion" element={<><Navbar/><InicioSesion/><Footer/></>} />
          <Route  path="/registro" element={<><Navbar/><Registro/><Footer/></>} />
          <Route  path="/conductoras" element={<><Navbar/><Conductoras/><Footer/></>} />
          <Route  path='/perfil/viajes' element={<Viajes/>} />
          <Route  path='/perfil/viajes/pago' element={<Pago/>} />
          <Route  path='/perfil/mi-cuenta' element={<MiCuenta/>} />
          <Route  path='/perfil/metodos_de_pagos' element={<MetodosPagos/>} />
        </Routes>
    </div>
    </Provider>
    </>
  )
}


export default App
