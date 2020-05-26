import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_CLIENTE_RS,
    CAMBIO_CLIENTE_CUIL,
    CAMBIO_CLIENTE_DOMICILIO,
    CAMBIO_CLIENTE_TELEFONO,
    CAMBIO_CLIENTE_USER_ID,
    CAMBIO_CLIENTE_EMPRESA_ID,

    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/clienteTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'cliente')
        
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
        const response = await axios.get(URL + 'cliente/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioClienteRs = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_RS,
        payload: valor
    })
};

export const cambioClienteCuil = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_CUIL,
        payload: valor
    })
};

export const cambioClienteDomicilio = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_DOMICILIO,
        payload: valor
    })
};

export const cambioClienteTelefono = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_TELEFONO,
        payload: valor
    })
};

export const cambioClienteEmpresaId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_EMPRESA_ID,
        payload: valor
    })
};

export const cambioClienteUserId = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_CLIENTE_USER_ID,
        payload: valor
    })
};

export const agregar = (data) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'cliente', data);

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
        await axios.put(URL + 'cliente/' + id, data)

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
        const response = await axios.get(URL + 'cliente/' + id)

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
        await axios.delete(URL + 'cliente/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.errors

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

