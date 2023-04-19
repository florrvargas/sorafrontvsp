import axios from "axios";

  export function registroUsuario(payload) {
    return async function () {
      let json = await axios.post(`/users/registro`, payload);
      return json;s
    };
  }

  export function loginUsuario(payload) {
    return async function () {
      let json = await axios.post(`/users/login`, payload);
      return json;s
    };
  }


  export function traerUsuarios() {
    return async function (dispatch) {

      try {
        let json = await axios.get(`/users`);
        return dispatch({
          type: "TRAER_USUARIOS",
          payload: json.data,
        });
      } catch (error) {
        alert("No se pueden traer los Usuarios");
      }
    };
  }

  export function registroConductora(payload) {
    return async function () {
      let json = await axios.post(`/conductoras/registro`, payload);
      return json;
    };
  }s

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