import * as types from '../actionTypes'
import axios from 'axios'


const getUser = () => {
    return {
        type: types.GET_USER
    }
}

const getUserSuccess = payload => {
    return {
        type: types.GET_USER_SUCCESS,
        payload
    }
}


const getUserReject = payload => {
    return {
        type: types.GET_USER_REJECT,
        payload
    }
}


export const getUserFromServer = () =>
    async dispatch => {
        dispatch(getUser())
        try {
            const {data} = await axios({
                method: "GET",
                url: "https://uinames.com/api/?ext"
            })
            dispatch(getUserSuccess(data))
        }
        catch (e) {
            dispatch(getUserReject(e))
        }
    }
