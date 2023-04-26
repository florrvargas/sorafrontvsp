import axios from "axios";

  export function registroUsuario(payload) {
    return async function () {
      try
        { 
        let json = await axios.post(`/usuarios/registro`, payload);

        let userCreated = await {
          correo: json.data.user.correo,
          contraseña: payload.contraseña
        }

        let logIn = await axios.post(`/usuarios/login`, userCreated);

        localStorage.setItem("login", JSON.stringify(logIn.data.usuario));

        return logIn



      }catch(error){
        console.log(error)
      }

    };
  }

  export function loginUsuario(payload) {
    return async function () {
      let json = await axios.post(`/usuarios/login`, payload);

     localStorage.setItem("login",  JSON.stringify(json.data.usuario)) 

      return json;
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
    return async function () {
      let json = await axios.post(`/conductoras/registro`, payload);
      return json;
    };
  }

  export function loginConductora(payload) {
    return async function () {
      let json = await axios.post(`/conductoras/login`, payload);
      return json;s
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