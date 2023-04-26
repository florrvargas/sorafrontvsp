import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react'

export default function MPButton(user1, viaje) {

 const user = {
  name:'Pasajera',
  email: 'test_user_797091998@testuser.com'
 }
 const handleSubmit = async (event) => {
  event.preventDefault();
try {
  const response = await axios.post('/api/pago', {
    monto,
    descripcion,
    identificadorUsuario
  });

  const urlPago = response.data.init_point;
  window.location.replace(urlPago);
} catch (error) {
  console.error(error);
}


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Monto:
        <input type="number" value={monto} onChange={(event) => setMonto(event.target.value)} />
      </label>
      <label>
        Descripción:
        <input type="text" value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />
      </label>
      <label>
        Identificador de usuario:
        <input type="text" value={identificadorUsuario} onChange={(event) => setIdentificadorUsuario(event.target.value)} />
      </label>
      <button type="submit">Pagar</button>
    </form>
  );
}};