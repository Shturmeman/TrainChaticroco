import * as types from '../actionTypes'

const initialState = {
    user: null,
    isFetching: false
}


export default (state = initialState, {type,payload}) => {
    switch (type) {
        case types.GET_USER: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.GET_USER_SUCCESS: {
            console.log(payload)
            return {
                ...state ,
                isFetching : false,
                user: payload
            }
        }
        case types.GET_USER_REJECT : {
            return {
                ...state,
                isFetching: false                
            }
        }
        default : {
            return state
        }
    }
}