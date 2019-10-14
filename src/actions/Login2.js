import * as types from '../actionTypes'
import { GraphQLClient } from 'graphql-request'
import { checkToken, gql } from '../Utility'

const logInRequest = () => {
    return {
        type: types.LOG_IN
    }
}

const logInSuccess = (payload) => {
    return {
        type: types.LOG_IN_SUCCESS,
        payload
    }
}

const logInReject = (e) => {
    return {
        type: types.LOG_IN_REJECT,
    }
}






export const logIn = (payload) => {
    console.log(payload)
    return async dispatch => {
        dispatch(logInRequest())
        checkToken()
        try {
            const res = await gql.request(`query login($login:String!,$password:String!){
                login (login:$login,password:$password)
            }`, { login: payload.login, password: payload.password })
            if (res.login) {
                localStorage.setItem("authToken", res.login)
                dispatch(logInSuccess(res))
            }

        }
        catch (e) {
            dispatch(logInReject(e))
        }

    }
}

const registerRequest = () => {
    return {
        type: types.REGISTER
    }
}

const registerSuccess = (payload) => {
    return {
        type: types.REGISTER_SUCCESS,
        payload
    }
}

const registerReject = (e) => {
    return {
        type: types.REGISTER_REJECT,
    }
}


export const Register = (payload) => {
    console.log("regarega", payload)
    return async dispatch => {
        dispatch(registerRequest())
        checkToken()
        try {
            const res = await gql.request(`mutation newUser ($login:String!,$password:String!){
                createUser(login:$login,password:$password){
                    _id
                }}`, { login: payload.login, password: payload.password })
            console.log("regaRes", res)
            if (!!res.createUser) {
                console.log("success")
                dispatch(registerSuccess(res))
                dispatch(logIn(payload))
            }

        }
        catch (e) {
            dispatch(registerReject(e))
        }

    }
}

