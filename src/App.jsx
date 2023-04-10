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

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/QuienesSomos" element={<QuienesSomos/>} />
          <Route  path="/Servicios" element={<Servicios/>} />
          <Route  path="/Ayuda" element={<Ayuda/>} />
          <Route  path="/InicioSesion" element={<InicioSesion/>} />
          <Route  path="/Registro" element={<Registro/>} />
          <Route  path="/Conductoras" element={<Conductoras/>} />
          <Route  path="/Perfil" element={<Perfil/>} />
        </Routes>
      <Footer />
    </div>
    </>
  )
}


export default App
