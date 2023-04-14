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

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/quienes-somos" element={<QuienesSomos/>} />
          <Route  path="/servicios" element={<Servicios/>} />
          <Route  path="/ayuda" element={<Ayuda/>} />
          <Route  path="/inicio-sesion" element={<InicioSesion/>} />
          <Route  path="/registro" element={<Registro/>} />
          <Route  path="/conductoras" element={<Conductoras/>} />
          <Route  path='/perfil/viajes' element={<Viajes/>} />
          <Route  path='/perfil/mi-cuenta' element={<MiCuenta/>} />
          <Route  path='/perfil/metodos_de_pagos' element={<MetodosPagos/>} />
        </Routes>
      <Footer />
    </div>
    </>
  )
}


export default App
