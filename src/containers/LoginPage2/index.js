import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'





class LoginPage2 extends React.Component {
    state = { newUser: false }

    switchForm() {
        this.setState(prevState => {
            return {
                ...prevState,
                newUser: !this.state.newUser
            }
        })
        console.log(this.state.newUser)
    }


    render() {
        const {newUser} = this.state
        return (
            <div>
                {newUser?
                <RegisterForm />
                :<LoginForm />
                
            }
                <button onClick={()=>this.switchForm()}>{newUser? "Login": "Register"}</button>
            </div>
        )
    }
}


export default connect(null, {})(LoginPage2)

