import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivatRouter = ({ component: Component, ...rest }) =>
    <Route
        {...rest}
        render={props => {
            const user = localStorage.getItem("user");
            if (!user) return <Redirect to="/LoginPage" />;
            return (
                <Component {...props} />
            )
        }}
    />


// const PrivatRouter = props =>
//     <Route {...props}
//         component={pageComponentProps => {
//             const PageComponent = porps.component
//             if (localStorage.authToken)
//                 return (
//                     <PageComponent {...pageComponentProps} />
//                 )
//             else {
//                 return (
//                     <Redirect to={props.fallback} />
//                 )
//             }
//         }}
//     />