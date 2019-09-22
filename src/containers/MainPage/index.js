import React from 'react';
import { addSomethingToServer, GetSomethingFromServer } from '../../actions/server'
import {SendOflineMessages} from '../../actions/Secondaction'
import { connect } from 'react-redux'

const initialState = {
    name: "",
    message: "",
    toStoreMes: ""
}
class MainPage extends React.Component {
    state = initialState
    changeName(text) {
        this.setState((prevState) => ({
            ...prevState,
            name: text

        }))
        console.log(this.state)
    }
    changeMessage(text) {
        this.setState((prevState) => ({
            ...prevState,
            message: text

        }))
        console.log(this.state)
    }
    addMessage() {
        this.props.addSomethingToServer({
            func: 'addMessage',
            nick: this.state.name,
            message: this.state.message

        })
        this.setState(() => initialState)
    }
    componentDidMount() {
        this.props.GetSomethingFromServer({
            func: "getMessages",
        })
    }

    addMessageToStore(val) {
            this.setState(prevState => ({
                ...prevState, 
                toStoreMes: val 
            }))
    }

    sendMessageToStore() {
            this.props.SendOflineMessages(this.state.toStoreMes)
    }

    render() {
        const { messages } = this.props
        return (
            <main>
                <h2>Add to store</h2>
                <input onChange={(e) => this.addMessageToStore(e.target.value)} value={this.state.toStoreMes}></input>
                <button onClick={() => this.sendMessageToStore()}>ADD TO STORE</button>
                <h2>Add to server</h2>
                <input onChange={(e) => this.changeName(e.target.value)} value={this.state.name} placeholder="name"></input>
                <input onChange={(e) => this.changeMessage(e.target.value)} value={this.state.message} placeholder="message"></input>
                <button onClick={() => this.addMessage()}>ADD TO SERVER</button>
                <div className="chat">
                    {messages.map((msg, index) => <p key={index}>{msg.nick === "" ? "undefined" : msg.nick} : {msg.message === "" ? "undefined" : msg.message}</p>)}
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.first.allMessages
    }
}
export default connect(mapStateToProps, { addSomethingToServer, GetSomethingFromServer,SendOflineMessages })(MainPage)