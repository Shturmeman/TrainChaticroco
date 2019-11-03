import * as types from '../actionTypes'

const initialState = {
    newsList: [],
    isFetching: false
}


export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_NEWS: {
            return { ...state, isFetching: true }
        }
        case types.GET_NEWS_SUCCESS: {
            // console.log(payload)
            return { ...state, isFetching: false, newsList: payload.data.articles }
        }
        case types.GET_NEWS_REJECT: {
            return { ...state, isFetching: false }
        }
        default: return state
    }
}

