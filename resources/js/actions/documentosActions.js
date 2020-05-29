import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_DOCUMENTO_NAME,
    CAMBIO_DOCUMENTO_EMPRESA_ID,
    CAMBIO_DOCUMENTO_DOCTYPE_ID,
    CAMBIO_DOCUMENTO_CLIENTE_ID,
    CAMBIO_DOCUMENTO_FILE,

    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/documentoTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'documento')
        
        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerUno = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'editar'
    })

    try {
        const response = await axios.get(URL + 'documento/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioDocumentoName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCUMENTO_NAME,
        payload: valor
    })
};

export const cambioDocumentoEmpresaId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCUMENTO_EMPRESA_ID,
        payload: valor
    })
};

export const cambioDocumentoDoctypeId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCUMENTO_DOCTYPE_ID,
        payload: valor
    })
};

export const cambioDocumentoClienteId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCUMENTO_CLIENTE_ID,
        payload: valor
    })
};

export const cambioDocumentoFile = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCUMENTO_FILE,
        payload: valor
    })
};

export const agregar = (data) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {   
        
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }     
        await axios.post(URL + 'documento', data, config);

        dispatch({
            type: GUARDAR
        });

    }
    catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)

        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
};

export const editar = (data, id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        await axios.put(URL + 'documento/' + id, data)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
}

export const traerUnoBorrar = (id) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'borrar'
    })


    try {
        const response = await axios.get(URL + 'documento/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const borrar = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        await axios.delete(URL + 'documento/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.message
        console.log(errors)
        dispatch({
            type: ERROR_FORM,
            payload: errors
        });
    }
}

export const cancelar = () => (dispatch) => {
    dispatch({
        type: CANCELAR
    })
}

export const traerTabla = () => (dispatch) => {

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'tabla'
    })
}

export const traerFormulario = () => (dispatch) => {

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'crear'
    })
}

