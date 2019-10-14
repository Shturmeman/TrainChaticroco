import React from 'react'
import {NavLink} from 'react-router-dom'
import {LINKS} from '../../router'


class Header extends React.Component{
    render(){
        return(
            <header>
                <NavLink exact to={LINKS.mainPage} activeClassName="LinkActive" className="Link">MainPage</NavLink>
                <NavLink to={LINKS.SecondPage} activeClassName="LinkActive" className="Link">SecondPage</NavLink>
                <NavLink to={LINKS.NewsPage} activeClassName="LinkActive" className="Link">NewsPage</NavLink>
                <NavLink to={LINKS.LoginPage2} activeClassName="LinkActive" className="Link">LoginPage</NavLink>
            </header>
        )
    }
}

export default Header;