import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_EMPRESA_ID,
  CAMBIO_EMPRESA_RS,
  CAMBIO_EMPRESA_CUIL,
  CAMBIO_EMPRESA_DOMICILIO,
  CAMBIO_EMPRESA_TELEFONO,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/empresaTypes'

const INITIAL_STATE = {
  empresas: [],
  empresa: [],
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
        empresas: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        empresa: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_EMPRESA_ID:
      return {
        ...state,
        empresa: {
          ...state.empresa,
          id: action.payload
        }
      };

    case CAMBIO_EMPRESA_RS:
      return {
        ...state,
        empresa: {
          ...state.empresa,
          rs: action.payload
        }
      };

    case CAMBIO_EMPRESA_CUIL:
      return {
        ...state,
        empresa: {
          ...state.empresa,
          cuil: action.payload
        }
      };

    case CAMBIO_EMPRESA_DOMICILIO:
      return {
        ...state,
        empresa: {
          ...state.empresa,
          domicilio: action.payload
        }
      };

    case CAMBIO_EMPRESA_TELEFONO:
      return {
        ...state,
        empresa: {
          ...state.empresa,
          telefono: action.payload
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
        empresa: {
          id: '',
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
        empresa: {
          id: '',
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