const initialState = {
    usuarios: [],
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
  
  
      default:
        return state;
    }
  }
  
  export default rootReducer;