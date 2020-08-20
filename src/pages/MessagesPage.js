import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



function MessagesPage(props) {

    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }      

    return (
        <div>
          MessagesPage

        </div>
    );
    
}

export default MessagesPage;