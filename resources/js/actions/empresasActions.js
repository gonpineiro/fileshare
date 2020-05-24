import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,
    CAMBIO_ESTADO_FORM,

    CAMBIO_EMPRESA_RS,
    CAMBIO_EMPRESA_CUIL,
    CAMBIO_EMPRESA_DOMICILIO,
    CAMBIO_EMPRESA_TELEFONO,

    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/empresaTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerTodos = () => async (dispatch) => {

    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'empresa')
        
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
        const response = await axios.get(URL + 'empresa/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioEmpresaRs = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_EMPRESA_RS,
        payload: valor
    })
};

export const cambioEmpresaCuil = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_EMPRESA_CUIL,
        payload: valor
    })
};

export const cambioEmpresaDomicilio = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_EMPRESA_DOMICILIO,
        payload: valor
    })
};

export const cambioEmpresaTelefono = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_EMPRESA_TELEFONO,
        payload: valor
    })
};

export const agregar = (data) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'empresa', data);

        dispatch({
            type: GUARDAR
        });

    }
    catch (error) {
        const errors = error.response.data.errors

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
        await axios.put(URL + 'empresa/' + id, data)

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
        const response = await axios.get(URL + 'empresa/' + id)

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
        await axios.delete(URL + 'empresa/' + id)

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

