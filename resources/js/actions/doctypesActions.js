import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    TRAER_CLIENTES,
    LOADING,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_DOCTYPE_NAME,
    CAMBIO_DOCTYPE_TIPO,
    CAMBIO_DOCTYPE_OBLIGATORIO,
    CAMBIO_DOCTYPE_ESTADO,
    CAMBIO_DOCTYPE_CLIENTES,

    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/doctypeTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'doctype')
        
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
        const response = await axios.get(URL + 'doctype/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const traerUnoAsociarClientes = (id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    dispatch({
        type: CAMBIO_ESTADO_FORM,
        payload: 'asociar'
    })

    try {
        const response = await axios.get(URL + 'doctype/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

        dispatch({
            type: TRAER_CLIENTES,
            payload: response.data.clientes
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioDoctypeName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCTYPE_NAME,
        payload: valor
    })
};

export const cambioDoctypeTipo = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCTYPE_TIPO,
        payload: valor
    })
};

export const cambioDoctypeObligatorio = (valor) => (dispatch) => {
    
    dispatch({
        type: CAMBIO_DOCTYPE_OBLIGATORIO,
        payload: valor
    })
};

export const cambioDoctypeEstado = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCTYPE_ESTADO,
        payload: valor
    })
};

export const cambioDoctypeClientes = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_DOCTYPE_CLIENTES,
        payload: valor
    })
};

export const agregar = (data) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'doctype', data);

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
        await axios.put(URL + 'doctype/' + id, data)

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

export const asociarClientes = (data, id) => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {        
        await axios.put(URL + 'doctype/clientes/' + id, data)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        console.log(error)
        const errors = error.response.data.errors
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
        const response = await axios.get(URL + 'doctype/' + id)

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
        await axios.delete(URL + 'doctype/' + id)

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

