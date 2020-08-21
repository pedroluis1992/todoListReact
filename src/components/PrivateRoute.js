import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
import MenuBar from './menuBar'
import "../App.css"

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                < div className="body">
                    <MenuBar />
                    <Component {...props} />
                </div>
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;