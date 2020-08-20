import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



function SignupPage(props) {
    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }       

    return (
        <div>
          SignupPage

        </div>
    );
    
}

export default SignupPage;