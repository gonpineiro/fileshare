import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import empresasReducer from './empresasReducer'
import clientesReducer from './clientesReducer'
import doctypesReducer from './doctypesReducer'

export default combineReducers({
    usersReducer,
    empresasReducer,
    clientesReducer,
    doctypesReducer
})