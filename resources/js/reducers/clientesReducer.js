import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_CLIENTE_ID,
  CAMBIO_CLIENTE_RS,
  CAMBIO_CLIENTE_CUIL,
  CAMBIO_CLIENTE_DOMICILIO,
  CAMBIO_CLIENTE_TELEFONO,
  CAMBIO_CLIENTE_USER_ID,
  CAMBIO_CLIENTE_EMPRESA_ID,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/clienteTypes'

const INITIAL_STATE = {
  clientes: [],
  cliente: [],
  loading: false,
  error: '',
  error_form: '',
  recargar_table: false,
  state_form: 'tabla' //MODO GUARDAR 
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return {
        ...state,
        clientes: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        cliente: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_CLIENTE_ID:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          id: action.payload
        }
      };

    case CAMBIO_CLIENTE_RS:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          rs: action.payload
        }
      };

    case CAMBIO_CLIENTE_CUIL:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          cuil: action.payload
        }
      };

    case CAMBIO_CLIENTE_DOMICILIO:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          domicilio: action.payload
        }
      };

    case CAMBIO_CLIENTE_TELEFONO:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          telefono: action.payload
        }
      };

    case CAMBIO_CLIENTE_USER_ID:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          user_id: action.payload
        }
      };

    case CAMBIO_CLIENTE_EMPRESA_ID:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          empresa_id: action.payload
        }
      };

    case CAMBIO_ESTADO_FORM:
      return {
        ...state,
        state_form: action.payload
      };

    case GUARDAR:
      return {
        ...state,
        cliente: {
          id: '',
          user_id: '',
          empresa_id: '',
          rs: '',
          cuil: '',
          domicilio: '',
          telefono: '',
          estado: '',
        },
        loading: false,
        error: '',
        error_form: '',
        recargar_table: true,
        state_form: 'crear'
      };

    case CANCELAR:
      return {
        ...state,
        loading: false,
        error: '',
        error_form: '',
        cliente: {
          id: '',
          user_id: '',
          empresa_id: '',
          rs: '',
          cuil: '',
          domicilio: '',
          telefono: '',
          estado: '',
        },
        state_form: 'crear'
      };

    case RECARGA:
      return {
        ...state,
        loading: true,
        recargar_table: false,
      };

    default: return state
  }
}