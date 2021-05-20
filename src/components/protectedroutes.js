import React from 'react'
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function ProtectedRoute({ isAuth: isAuth, component: Component, ...rest }) {
    return <Route {...rest} render={(props) => {
        if (isAuth) {
            return <Component />;

        }

        else {
            return (
                <Redirect to={{ pathname: "/", state: { from: props.location } }} />
            );
        }
    }} />;
}

export default ProtectedRoute
