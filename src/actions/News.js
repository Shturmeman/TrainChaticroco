import * as types from '../actionTypes'
import axios from 'axios'


const getNews = () => {
    return {
        type: types.GET_NEWS
    }
}

const getNewsSuccess = payload => {
    return {
        type: types.GET_NEWS_SUCCESS,
        payload
    }
}

const getNewsReject = payload => {
    return {
        type: types.GET_NEWS_REJECT,
        payload
    }
}


export const getNewsFromServer = () =>
    async dispatch => {
        dispatch(getNews())
        try{
            const data = await axios({
                method : "GET",
                url: "https://newsapi.org/v2/top-headlines?country=ua&apiKey=336938ad234f4f1b88068948a9a96656"
            })
            dispatch(getNewsSuccess(data))
        }
        catch(e){
            dispatch(getNewsReject(e))
        }
    }
