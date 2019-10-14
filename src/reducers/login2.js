import * as types from '../actionTypes'
import jwt_decode from 'jwt-decode'

const initialState = {
    data: null,
    isFetching: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.LOG_IN: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.LOG_IN_SUCCESS: {
            const token = jwt_decode(payload)
            return {
                ...state,
                token: payload,
                data: token,
                isFetching: false
            }
        }
        case types.LOG_IN_REJECT: {
            return {
                ...state,
                isFetching: false
            }
        }
        case types.LOG_OUT: {
            localStorage.clear()
            return initialState
        }
        case types.REGISTER: {
            return {
                isFetching: true
            }
        }
        case types.REGISTER_SUCCESS: {
            return {
                isFetching: false
            }
        }
        case types.REGISTER_REJECT: {
            return {
                isFetching: false
            }
        }
        default: {
            return state
        }
    }
}