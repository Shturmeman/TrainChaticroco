import React from 'react'
import { connect } from 'react-redux'
import { getUserFromServer } from '../../actions/Login'


class LoginPage extends React.Component {

    componentDidMount() {
        if (this.props.user)
            this.props.history.push("/")
    }

    componentDidUpdate() {
        if (this.props.user) {
            localStorage.setItem("user", JSON.stringify(this.props.user))
            this.props.history.push("/")
        }
    }


    render() {
        const { getUserFromServer, isFetching } = this.props
        return (
            <>
                {isFetching ?
                    <h2>LOADING</h2> :
                    <div>
                        <input placeholder="name"></input>
                        <input placeholder="password"></input>

                        <button onClick={() => getUserFromServer()}>ZDAROVA</button>
                        <button>Login</button>
                        <button>Exit</button>
                    </div>
                }
            </>
        )
    }
}
const mapStateToProps = ({ login }) => {
    return {
        isFetching: login.isFetching,
        user: login.user
    }
}


export default connect(mapStateToProps, { getUserFromServer })(LoginPage)