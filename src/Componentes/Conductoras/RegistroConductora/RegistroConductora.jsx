import "./RegistroConductora.css"
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerConductora } from "../../../redux/actions";


const RegistroConductora = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContraseña] = useState('');
  const [edad, setEdad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [tipoDeViaje, setTipoDeViaje] = useState('');
  const [vehiculoAsegurado, setVehiculoAsegurado] = useState('');

  const [foto, setFoto] = useState(null);
  const [carnetidentidad, setCarnetidentidad] = useState(null);
  const [hojaDeVida, setHojaDeVida] = useState(null);
  const [antecedentes, setAntecedentes] = useState(null);
  const [documentosVehiculo, setDocumentosVehiculo] = useState(null);
  const [licenciaConducir, setLicenciaConducir] = useState(null);
  const [imagenSeguro, setImagenSeguro] = useState(null);

  const handleRegistro = (e) => {
    e.preventDefault();

    const payload = { nombre, correo, contrasena, edad, direccion, numeroCuenta,tipoDeViaje, vehiculoAsegurado, foto, carnetidentidad, hojaDeVida, antecedentes, documentosVehiculo, licenciaConducir, imagenSeguro };
    dispatch(registerConductora(payload));
    // navigate("/perfil/viajes");

  };

  return (
    <div className="cond-registro">
      <form className="cond-formRegistro"onSubmit={handleRegistro}>
      <h1 className="title">Registro de Conductora</h1><br/><br/>
      <span>Completa el siguiente formulario para ser parte de nuestro grupo de conductoras.</span><br/><br/>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSf3JKCf2_R_wIO8h5tAYsyO8sFYspXBt-dqlarDw4f5nu84AQ/viewform">
        Click aquí para ir al formulario.
      </a>


        {/* <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label htmlFor="correo">Correo</label>
        <input type="email" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required />

        <label htmlFor="contrasena">Contraseña</label>
        <input type="password" id="contrasena" value={contrasena} onChange={(e) => setContraseña(e.target.value)} required />

        <label htmlFor="edad">Edad</label>
        <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required />

        <label htmlFor="direccion">Dirección</label>
        <input type="text" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />

        <label htmlFor="numeroCuenta">Número de Cuenta</label>
        <input type="text" id="numeroCuenta" value={numeroCuenta} onChange={(e) => setNumeroCuenta(e.target.value)} required />

        <label htmlFor="tipoDeViaje">Tipo de Viaje</label>
        <input type="text" id="tipoDeViaje" value={tipoDeViaje} onChange={(e) => setTipoDeViaje(e.target.value)} required />

        <label htmlFor="vehiculoAsegurado">Vehículo Asegurado</label>
        <input type="text" id="vehiculoAsegurado" value={vehiculoAsegurado} onChange={(e) => setVehiculoAsegurado(e.target.value)} required />

        <label htmlFor="foto">Foto</label>
        <input type="file" id="foto" onChange={(e) => setFoto(e.target.files[0])} required />

        <label htmlFor="carnetidentidad">Carnet de Identidad</label>
        <input type="file" id="carnetidentidad" onChange={(e) => setCarnetidentidad(e.target.files[0])} required />

        <label htmlFor="hojaDeVida">Hoja de Vida</label>
        <input type="file" id="hojaDeVida" onChange={(e) => setHojaDeVida(e.target.files[0])} required />

        <label htmlFor="antecedentes">Antecedentes</label>
        <input type="file" id="antecedentes" onChange={(e) => setAntecedentes(e.target.files[0])} required />

        <label htmlFor="documentosVehiculo">Documentos del Vehículo</label>
        <input type="file" id="documentosVehiculo" onChange={(e) => setDocumentosVehiculo(e.target.files[0])} required />

        <label htmlFor="licenciaConducir">Licencia de Conducir</label>
        <input type="file" id="licenciaConducir" onChange={(e) => setLicenciaConducir(e.target.files[0])} required />

        <label htmlFor="imagenSeguro">Imagen del Seguro</label>
        <input type="file" id="imagenSeguro" onChange={(e) => setImagenSeguro(e.target.files[0])} required />

        <button className="sigin-btn" onClick={handleRegistro}>Registrarme</button> */}

      </form>
    </div>
  );
};

export default RegistroConductora;

