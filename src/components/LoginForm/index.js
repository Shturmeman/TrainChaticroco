import React from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../actions/Login2'
import { getLogautUser } from '../../actions/Logout'

class LoginForm extends React.Component {
    state = { login: "", password: "" }


    addLoginToState(val) {
        this.setState(prevState => ({
            ...prevState,
            login: val
        }))
    }

    addPasswordToState(val) {
        this.setState(prevState => ({
            ...prevState,
            password: val
        }))
    }


    render() {
        const { logIn, getLogautUser } = this.props

        return (
            <form>
                <input placeholder="login" onChange={(e) => this.addLoginToState(e.target.value)} value={this.state.login}></input>
                <input placeholder="password" type="password" onChange={(e) => this.addPasswordToState(e.target.value)} value={this.state.password}></input>
                <button onClick={() => logIn({ login: this.state.login, password: this.state.password })} type="button">Sighn In</button>
                <button onClick={getLogautUser} type="button">Log Out</button>
            </form>

        )
    }
}


export default connect(null, { logIn, getLogautUser })(LoginForm)






