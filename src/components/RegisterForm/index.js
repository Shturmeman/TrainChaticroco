import React from 'react'
import { connect } from 'react-redux'
import { Register } from '../../actions/Login2'






class RegisterForm extends React.Component {
    state = { login: "", password: "", password2: "" }


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

    addSecondPasswordToState(val) {
        this.setState(prevState => ({
            ...prevState,
            password2: val
        }))
    }
    checkPassword(){
        if(this.state.password === this.state.password2){
            this.props.Register({login:this.state.login,password:this.state.password})
        }
        else{
            alert ("POSHEL NA XYI")
        }
    }

    render() {
        return (
            <form>
                <input placeholder="login" onChange={(e) => this.addLoginToState(e.target.value)} value={this.state.login}></input>
                <input placeholder="password" type="password" onChange={(e) => this.addPasswordToState(e.target.value)} value={this.state.password}></input>
                <input placeholder="repeat password" type="password" onChange={(e) => this.addSecondPasswordToState(e.target.value)} value={this.state.password2}></input>
                <button type="button" onClick={()=>this.checkPassword()}>Register</button>
            </form>

        )
    }
}


export default connect(null, { Register })(RegisterForm)