import axios from 'axios'
import { TRAER_USUARIO } from '../types/sesionTypes'

const URL_API = 'http://192.168.0.146:950/api/'
const URL = 'http://192.168.0.146:950/'

export const traerUsuario = (token) => async (dispatch) => {
    try {
        const response = await axios.get(URL_API + 'loginapp/' + token)
        
        dispatch({
            type: TRAER_USUARIO,
            payload: response.data
        })
        

    } catch (error) {
        console.log(error)
    }
}

export const logout = (token) => async () => {
    try {
        await axios.post(URL + 'logout', token)       

    } catch (error) {
        console.log(error)
    }
}