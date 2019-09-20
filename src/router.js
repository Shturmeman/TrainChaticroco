import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from "./components/Layout"
import MainPage from './containers/MainPage'
import Header from './components/Header'
import SecondPage from './containers/SecondPage'

class Router extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path='/'
                        render={() => <MainPage />}
                    />
                     <Route path='/SecondPage'
                        render={() => <SecondPage />}
                    />
                </Switch>
            </Layout>
        )
    }
}


export default Router