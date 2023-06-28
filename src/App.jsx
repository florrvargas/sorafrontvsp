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
import RedirectPage from './Componentes/Perfil/RedirectPage';
import MiCuenta from './Componentes/Perfil/SideBar/MiCuenta/MiCuenta';
import Viajes from './Componentes/Perfil/SideBar/Viajes/Viajes';
import MisViajes from './Componentes/Perfil/SideBar/MisViajes/MisViajes';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import ViajesSolicitados from './Componentes/Perfil/SideBar/ViajesSolicitados/ViajesSolicitados';
import DetalleViaje from './Componentes/Perfil/DetalleViaje/DetalleViaje';
import ViajePendiente from './Componentes/Perfil/ViajePendiente/ViajePendiente';
import EncuestaFinal from './Componentes/Perfil/EncuestaFinal/EncuestaFinal';
import RegistroConductora from './Componentes/Conductoras/RegistroConductora/RegistroConductora';
 
function App() {
  return (
    <>
      <Provider store={store}>
      <div className="app">
        
        <Routes>
          <Route exact path="/01" element='' />
          <Route exact path="/" element={<><Navbar/><Home/><Footer/></>} />
          <Route  path="/quienes-somos" element={<><Navbar/><QuienesSomos/><Footer/></>} />
          <Route  path="/servicios" element={<><Navbar/><Servicios/><Footer/></>} />
          <Route  path="/ayuda" element={<><Navbar/><Ayuda/><Footer/></>} />
          <Route  path="/inicio-sesion" element={<><Navbar/><InicioSesion/><Footer/></>} />
          <Route  path="/registro" element={<><Navbar/><Registro/><Footer/></>} />
          <Route  path="/conductoras" element={<><Navbar/><Conductoras/><Footer/></>} />
          <Route  path="/registro-conductora" element={<><Navbar/><RegistroConductora/><Footer/></>} />
          {/* <Route  path='/perfil' element={<RedirectPage/>} /> */}
          <Route  path='/perfil/viajes' element={<Viajes/>} />
          <Route  path='/perfil/viajes/success' element={<ViajePendiente/>} />
          <Route  path='/perfil/viajes/failure' element='ERROR AL PROCESAR EL PAGO' />
          <Route  path='/perfil/viajes/pending' element='PAGO PENDIENTE' />
          <Route  path='/perfil/mi-cuenta' element={<MiCuenta/>} />
          <Route  path='/perfil/mis-viajes' element={<MisViajes/>} />
          <Route  path='/perfil/solicitudes' element={<ViajesSolicitados/>} />
          <Route  path='/perfil/:id' element={<DetalleViaje/>} />
          <Route  path='/perfil/viaje-finalizado' element={<EncuestaFinal/>} />

        </Routes>
    </div>
    </Provider>
    </>
  )
}


export default App
