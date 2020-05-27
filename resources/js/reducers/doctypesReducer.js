import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_DOCTYPE_ID,
  CAMBIO_DOCTYPE_NAME,
  CAMBIO_DOCTYPE_TIPO,
  CAMBIO_DOCTYPE_OBLIGATORIO,
  CAMBIO_DOCTYPE_ESTADO,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/doctypeTypes'

const INITIAL_STATE = {
  doctypes: [],
  doctype: [],
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
        doctypes: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        doctype: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_DOCTYPE_ID:
      return {
        ...state,
        doctype: {
          ...state.doctype,
          id: action.payload
        }
      };

    case CAMBIO_DOCTYPE_NAME:
      return {
        ...state,
        doctype: {
          ...state.doctype,
          name: action.payload
        }
      };

    case CAMBIO_DOCTYPE_TIPO:
      return {
        ...state,
        doctype: {
          ...state.doctype,
          tipo: action.payload
        }
      };

    case CAMBIO_DOCTYPE_OBLIGATORIO:
      return {
        ...state,
        doctype: {
          ...state.doctype,
          obligatorio: action.payload
        }
      };

    case CAMBIO_DOCTYPE_ESTADO:
      return {
        ...state,
        doctype: {
          ...state.doctype,
          estado: action.payload
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
        doctype: {
          name: '',
          tipo: '',
          obligatorio: '',
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
        doctype: {
          name: '',
          tipo: '',
          obligatorio: '',
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