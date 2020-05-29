import {
  TRAER_TODOS,
  TRAER_UNO,
  LOADING,
  ERROR,
  ERROR_FORM,
  CAMBIO_ESTADO_FORM,

  CAMBIO_DOCUMENTO_ID,
  CAMBIO_DOCUMENTO_NAME,
  CAMBIO_DOCUMENTO_EMPRESA_ID,
  CAMBIO_DOCUMENTO_CLIENTE_ID,
  CAMBIO_DOCUMENTO_DOCTYPE_ID,
  CAMBIO_DOCUMENTO_FILE,

  RECARGA,
  CANCELAR,
  GUARDAR
} from '../types/documentoTypes'

const INITIAL_STATE = {
  documentos: [],
  documento: [],
  file: [],
  loading: false,
  error: '',
  error_form: '',
  recargar_table: false,
  state_form: 'tabla'
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

    case CAMBIO_DOCUMENTO_NAME:
      return {
        ...state,
        documento: {
          ...state.documento,
          name: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_DOCTYPE_ID:
      return {
        ...state,
        documento: {
          ...state.documento,
          doctype_id: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_EMPRESA_ID:
      return {
        ...state,
        documento: {
          ...state.documento,
          empresa_id: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_CLIENTE_ID:
      return {
        ...state,
        documento: {
          ...state.documento,
          cliente_id: action.payload
        }
      };

    case CAMBIO_DOCUMENTO_FILE:
      return {
        ...state,
        file: action.payload
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
          name: '',
          doctype_id: '',
          empresa_id: '',
          cliente_id: '',
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
          name: '',
          doctype_id: '',
          empresa_id: '',
          cliente_id: '',
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