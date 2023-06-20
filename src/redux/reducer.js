const initialState = {
    usuarios: [],
    usuarioActual: [],
    conductores: [],
    viajes:[],
  

    //agregar mas estados si se requiere...
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true,
        };
        case "REGISTRO_USUARIO":
          return {
            ...state,
            usuarioActual : action.payload,
          };
        case "LOGIN_USUARIO":
          return {
            ...state,
            usuarioActual: action.payload,
          };
          
        case "TRAER_USUARIOS":
          return {
            ...state,
            usuarios: action.payload,
          };
          case "TRAER_CONDUCTORES":
        return {
            ...state,
            conductores: action.payload,
        };
  
      case "TRAER_VIAJES":
        return {
          ...state,
          viajes: action.payload,
        };
        
      case "OBTENER_VIAJES_REALIZADOS":
        return {
          ...state,
          viajes: action.payload,
        };
      case "OBTENER_VIAJES_SOLICITADOS":
        return {
          ...state,
          viajes: action.payload,
        };
      case "OBTENER_VIAJE_POR_ID":
        return {
          ...state,
        viajes: action.payload,
        };
  
  
      default:
        return state;
    }
  }
  
  export default rootReducer;