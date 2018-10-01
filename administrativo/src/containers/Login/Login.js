import React, { Component } from 'react';
import classes from './Login.css';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {

    state = {
        
    };

    render() {
        return (
        <div className={classes.Login}>
            <LoginForm></LoginForm>
        </div>
        );
    }
}

export default Login;