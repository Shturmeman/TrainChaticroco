import React from 'react'
import Header from '../Header'
class Layout extends React.Component {
    render() {
        const { children } = this.props
        return (
            <div className="container">
                <Header/>
                {children}

            </div>
        )
    }
}

export default Layout 