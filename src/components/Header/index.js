import React from 'react'
import {NavLink} from 'react-router-dom'


class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink exact to="/" activeClassName="LinkActive" className="Link">MainPage</NavLink>
                <NavLink to="/SecondPage" activeClassName="LinkActive" className="Link">SecondPage</NavLink>
            </header>
        )
    }
}

export default Header;