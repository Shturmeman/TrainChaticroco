import * as types from '../actionTypes'

const initialState = {
    texts: []
}

export default (state = initialState,action)=>{
    switch(action.type){
        case (types.SEND_OFFLINE_MESSAGES) : {
            return {
                texts: [...state.texts,action.payload]
            }
        }
        default: return state
    }
    
}