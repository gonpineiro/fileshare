import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import empresasReducer from './empresasReducer'

export default combineReducers({
    usersReducer,
    empresasReducer
})