import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const RestrictedRoute = ({component: Component, auth: {isAuthenticated}, ...rest}) =>(
    <Route {...rest} render={props =>
        JSON.parse(localStorage.getItem("token")) === 1 || isAuthenticated  ? <Component {...props} /> : <Redirect to={{ pathname: '/signin', state: {from: props.location} }} />}
    />
);


const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(RestrictedRoute)