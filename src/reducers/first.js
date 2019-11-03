import * as types from '../actionTypes'

const initialState = {
    allMessages: [],
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_SERVER: {
            return state
        }
        case types.ADD_TO_SERVER_SUCCESS: {
            return {
                ...state,
            }
        }
        case types.ADD_TO_SERVER_REJECT: {
            return state
        }
        case types.GET_MESSAGES: {
            return state
        }
        case types.GET_MESSAGES_SUCCESS: {
            const { data } = action.payload.data;
            console.log(data, "GET_MESSAGES_SUCCESS")
            return {
                ...state,
                allMessages: data
            }
        }
        case types.GET_MESSAGES_REJECT: {
            return state
        }
        default: {
            return state
        }
    }

}