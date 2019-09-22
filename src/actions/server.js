import * as types from '../actionTypes'
import axios from 'axios'


const baseUrl = "http://students.a-level.com.ua:10012"

const postRequest = payload => {
    return {
        type: types.ADD_TO_SERVER,
        payload
    }
}
const postRequestSuccess = payload => {
    return {
        type: types.ADD_TO_SERVER_SUCCESS,
        payload
    }
}
const postRequestReject = () => {
    return {
        type: types.ADD_TO_SERVER_REJECT,

    }
}
export const addSomethingToServer = payload => async dispatch => {
    try {
        dispatch(postRequest())
        const data = await axios({
            method: "POST",
            url: baseUrl,
            data: JSON.stringify(payload) 
        })
        dispatch(postRequestSuccess(data))
    }
    catch(error) {
        dispatch(postRequestReject(error))
    }
    
}

const GetAllMessages = payload => {
    return {
        type: types.GET_MESSAGES,
        payload
    }
}
const GetAllMessagesSuccess = payload => {
    return {
        type: types.GET_MESSAGES_SUCCESS,
        payload
    }
}
const GetAllMessagesReject = () => {
    return {
        type: types.GET_MESSAGES_REJECT,

    }
}


export const GetSomethingFromServer = payload => async dispatch =>{
    dispatch(GetAllMessages())
    try {
        const data = await axios({
            method: "POST",
            url: baseUrl,
            data: JSON.stringify(payload) 
        })
        dispatch(GetAllMessagesSuccess(data))
    }
    catch(error) {
        dispatch(GetAllMessagesReject(error))
    }
    
}