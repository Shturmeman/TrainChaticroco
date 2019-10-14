import {combineReducers} from 'redux';
import first from './first'
import second from './second'
import news from './news'
import login from './login'
import login2 from './login2'

export default combineReducers({first,second,news,login,login2})