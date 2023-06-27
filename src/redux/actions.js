import axios from "axios";

export function registroUsuario(payload) {

  return async function (dispatch) {
    try {

      const { fotoDni, ...restoPayload } = payload
      console.log(payload)

      const formData = new FormData();
      formData.append('fotoDni', fotoDni);

      console.log(formData);

      const response = await axios.post('/usuarios/registro', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: {
          fotoDni: formData,
        },
      });
      if (response.status === 200) {
        const user = response.data.createUser; 
        const tipo = response.data.tipo
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('userType', JSON.stringify(tipo));
        // Dispatch de la acción para guardar el usuario en el estado
        dispatch({
          type: "REGISTRO_USUARIO",
          payload: user,tipo,
        });
  
        return user;
      } else {
        console.log(response.data.error);
        throw new Error(response.data.error);
      }
   } catch (error) {
      throw new Error(error.response.data.error);
    }
  };
}

export function loginUsuario(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('usuarios/login', payload);
        console.log(response)
      if (response.status === 200) {
        const pasajera = response.data.usuario;
        const conductora = response.data.conductora;
        const tipo = response.data.tipo
        localStorage.setItem('userType', JSON.stringify(tipo));
        if (pasajera){
          localStorage.setItem('user', JSON.stringify(pasajera));
          dispatch({
            type: "LOGIN_USUARIO",
            payload: pasajera, tipo,
          });
          return pasajera;
        }
        if (conductora){
          localStorage.setItem('user', JSON.stringify(conductora));
          dispatch({
            type: "LOGIN_USUARIO",
            payload: conductora, tipo,
          });
          return conductora;
        }
 
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  };
}
  


export function traerUsuarios() {
  return async function (dispatch) {

    try {
      let json = await axios.get(`/usuarios`);
      return dispatch({
        type: "TRAER_USUARIOS",
        payload: json.data,
      });
    } catch (error) {
      alert("No se pueden traer los Usuarios");
    }
  };
}

export function traerUsuariosPorCorreo(correo) {
  return async (dispatch) => {
    let usuariosCorreo = await axios.get(`/usuarios/users/${correo}`);
    dispatch({
      type: "TRAER_USUARIOS_POR_CORREO",
      payload: usuariosCorreo.data,
    });
  };
};

export function registroConductora(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/conductoras/registro`, payload);
      console.log(response)
      if (response.status === 200) {
        const user = response.data.createDriver;
        const tipo = response.data.tipo
        localStorage.setItem('usuario', JSON.stringify(user,tipo));
        // Dispatch de la acción para guardar el usuario en el estado
        dispatch({
          type: "REGISTRO_USUARIO",
          payload: user,tipo,
        });
  
        return user;
      } 
      else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.log(error);
      throw new Error('Error en el servidor');
    }
  };
}


export function traerConductoras() {
  return async function (dispatch) {

    try {
      let json = await axios.get(`/conductoras`);
      return dispatch({
        type: "TRAER_CONDUCTORaS",
        payload: json.data,
      });
    } catch (error) {
      alert("No se pueden traer las Conductoras");
    }
  };
}

export function crearViaje(payload) {
  return async function () {
    console.log(payload)
    let json = await axios.post(`/viajes/viaje`, payload);
    
    return json;
  };
}

export function traerViajes() {
    return async function (dispatch) {

      try {
        let json = await axios.get(`/viajes`);
        return dispatch({
          type: "TRAER_VIAJES",
          payload: json.data,
        });
      } catch (error) {
        alert("No se pueden traer los Viajes");
      }
    };
  }

export function obtenerViajesPersonalizados(correo, estado) {
  return async (dispatch) => {
    try {
      const response = await axios.get("/viajes/misViajes", {
        params: {
          userCorreo: correo,
          driverCorreo: correo,
          estado: estado
        },
      });
      // Realizar las acciones correspondientes con los viajes obtenidos
      dispatch({
        type: "OBTENER_VIAJES_REALIZADOS",
        payload: response.data.viajes,
      });
    } catch (error) {
      console.error("Error al obtener los viajes realizados:", error);
    }
  
  };
};

export function obtenerViajesEnEspera() {
  return async (dispatch) => {
    try {
      const response = await axios.get("/viajes/solicitudes");
      // Realizar las acciones correspondientes con los viajes obtenidos
      dispatch({
        type: "OBTENER_VIAJES_SOLICITADOS",
        payload: response.data.viajes,
      });
    } catch (error) {
      console.error("Error al obtener los viajes :", error);
    }
  
  };
};

export function obtenerViajePorId(id) {
  return async (dispatch) => {
  try {
    const response = await axios.get(`/viajes/viajeSolicitado/${id}`)
    console.log(response.data)
    dispatch({
      type: "OBTENER_VIAJE_POR_ID",
      payload: response.data,
    });
  } catch (error) {
    console.error('Error al cargar los datos del viaje:', error);
  }
};
}

export function editarUsuario(id, nombre, contraseña) {
  return async function () {
    try {
      const response = await axios.put(`usuarios/editarUser/${id}`, { nombre, contraseña });

      if (response.status === 200) {
        return response.data.usuario;
      } else {
        alert(response.data.error)
        throw new Error(response.data.error);
      }
    } catch (error) {
      alert(error);
      throw new Error('Error en el servidor');
    }
  };
}
