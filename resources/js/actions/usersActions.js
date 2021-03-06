import axios from 'axios'
import {
    TRAER_TODOS,
    TRAER_UNO,
    LOADING,
    ERROR_FORM,

    CAMBIO_USUARIO_NAME,
    CAMBIO_USUARIO_EMAIL,
    CAMBIO_USUARIO_TYPE,
    CAMBIO_USUARIO_PASSWORD,
    CAMBIO_ESTADO_FORM,
    
    CANCELAR,
    RECARGA,
    GUARDAR
} from '../types/userTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerTodos = () => async (dispatch) => {
    
    dispatch({
        type: RECARGA
    })

    try {
        const response = await axios.get(URL + 'user')

        dispatch({
            type: TRAER_TODOS,
            payload: response.data
        })

    } catch (error) {
        const errors = error.response.data.errors
        console.log(error.response)
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
        const response = await axios.get(URL + 'user/' + id)

        dispatch({
            type: TRAER_UNO,
            payload: response.data
        })

    } catch (error) {
        console.log(error)
    }
}

export const cambioUsuarioName = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_NAME,
        payload: valor
    })
};

export const cambioUsuarioEmail = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_EMAIL,
        payload: valor
    })
};

export const cambioUsuarioType = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_TYPE,
        payload: valor
    })
};

export const cambioUsuarioPassword = (valor) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_PASSWORD,
        payload: valor
    })
};

export const agregar = (data) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        await axios.post(URL + 'user', data);

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
        await axios.put(URL + 'user/' + id, data)

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
        const response = await axios.get(URL + 'user/' + id)

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
        await axios.delete(URL + 'user/' + id)

        dispatch({
            type: GUARDAR
        })

    } catch (error) {
        const errors = error.response.data.message        
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

