import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import empresasReducer from './empresasReducer'
import clientesReducer from './clientesReducer'

export default combineReducers({
    usersReducer,
    empresasReducer,
    clientesReducer
})