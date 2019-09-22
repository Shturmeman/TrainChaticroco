import React from 'react';
import { connect } from 'react-redux'


class SecondPage extends React.Component{
    render(){
        const {texts} = this.props
        return(
            <main>
                <ul className="govno">
                    {texts.map((txt,index)=> <li key={index}>{txt}</li>)}
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state =>({
    texts: state.second.texts
})

export default connect(mapStateToProps,{})(SecondPage)