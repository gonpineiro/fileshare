import axios from 'axios'
import { TRAER_USUARIO } from '../types/sesionTypes'

const URL = 'http://192.168.0.146:950/api/'

export const traerUsuario = (token) => async (dispatch) => {
    try {
        const response = await axios.get(URL + 'loginapp/' + token)
        
        dispatch({
            type: TRAER_USUARIO,
            payload: response.data
        })
        

    } catch (error) {
        console.log(error)
    }
}