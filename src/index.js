import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
import {logIn} from './actions/Login2'
import { GraphQLClient } from 'graphql-request'
const gql = new GraphQLClient("/graphql", { headers: {} })

gql.request(`query ZahodNaSite($login:String!, $password:String!){
    login(login:$login,password:$password)
  }`, {login: "", password: ""}).then(result => console.log(result))

store.subscribe(()=>console.log(store.getState()))
store.dispatch(logIn("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI1ZDkyMzM0MTc5OTdlYzI5OGE0NTJiOTQiLCJsb2dpbiI6IlNodHVybWFuIiwiYWNsIjpbIjVkOTIzMzQxNzk5N2VjMjk4YTQ1MmI5NCIsInVzZXIiXX0sImlhdCI6MTU2OTg2Mjg1Mn0.w9vAFMSRnKi5gpT-z5lfrG2SGeX-01saSxOLcnMJn-4"))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Router >

            </Router>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
