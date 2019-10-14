import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivatRouter } from './components/PrivatRouter'

import NewsPage from './containers/NewsPage'
import Layout from "./components/Layout"
import MainPage from './containers/MainPage'
import SecondPage from './containers/SecondPage'
import LoginPage from './containers/LoginPage'
import LoginPage2 from './containers/LoginPage2'

export const LINKS = {
    mainPage: '/',
    SecondPage: '/SecondPage',
    NewsPage: '/NewsPage',
    LoginPage: '/LoginPage',
    LoginPage2: '/LoginPage2'
}

class Router extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path={LINKS.mainPage}
                        component={MainPage}
                    />
                    <PrivatRouter path={LINKS.SecondPage}
                        component={SecondPage}
                    />
                    <PrivatRouter path={LINKS.NewsPage}
                        component={NewsPage}
                    />
                    <Route path={LINKS.LoginPage}
                        component={LoginPage}
                    />
                    <Route path={LINKS.LoginPage2}
                        component={LoginPage2}
                    />
                </Switch>
            </Layout>
        )
    }
}


export default Router