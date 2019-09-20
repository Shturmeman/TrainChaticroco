import React from 'react';
import {jsonPost} from '../../actions/server'
import {connect} from 'react-redux'

class MainPage extends React.Component{
    state = {
        name: "",
        message : ""
    }

    changeName(text){
        this.setState((prevState)=>({
            ...prevState,
            name:text

        }))
        console.log(this.state)
    }
    changeMessage(text){
        this.setState((prevState)=>({
            ...prevState,
            message:text

        }))
        console.log(this.state)
    }
    addMessage(){
        this.props.jsonPost({
            func: 'addMessage', 
            nick: this.state.nick, 
            message: this.state.message})
    }

    render(){
        return(
            <main>
                <input onChange={(e)=> this.changeName(e.target.value)} value={this.state.name}></input>
                <input onChange={(e)=>this.changeMessage(e.target.value)} value={this.state.message}></input>
                <button onClick={()=>this.addMessage()}>CLICK HERE</button>
            </main>
        )
    }
}


export default connect(null, {jsonPost})(MainPage)