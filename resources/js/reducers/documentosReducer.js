import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_DOCUMENTO_ID,
  CAMBIO_DOCUMENTO_RS,
  CAMBIO_DOCUMENTO_CUIL,
  CAMBIO_DOCUMENTO_DOMICILIO,
  CAMBIO_DOCUMENTO_TELEFONO,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/documentoTypes'

const INITIAL_STATE = {
  documentos: [],
  documento: [],
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
        documentos: action.payload,
        loading: false,
        recargar_table: false,
        error: ''
      }
    case TRAER_UNO:
      return {
        ...state,
        documento: action.payload,
        loading: false,
        error: ''
      }
    case LOADING:
      return { ...state, loading: true }
    case ERROR:
      return { ...state, error: action.payload, loading: false }
    case ERROR_FORM:
      return { ...state, error_form: action.payload, loading: false }

    case CAMBIO_DOCUMENTO_ID:
      return {
        ...state,
        documento: {
          ...state.documento,
          id: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_RS:
      return {
        ...state,
        documento: {
          ...state.documento,
          rs: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_CUIL:
      return {
        ...state,
        documento: {
          ...state.documento,
          cuil: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_DOMICILIO:
      return {
        ...state,
        documento: {
          ...state.documento,
          domicilio: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_TELEFONO:
      return {
        ...state,
        documento: {
          ...state.documento,
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
        documento: {
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
        documento: {
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