import { TRAER_USUARIO } from '../types/sesionTypes'
  
  const INITIAL_STATE = {  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {     
    
        case TRAER_USUARIO:
          return { user: action.payload };
  
      default: return state
    }
  }