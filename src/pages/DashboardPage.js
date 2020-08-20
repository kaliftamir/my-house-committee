import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';




function DashboardPage(props) {
    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }   

    return (
        <div>
          <CommitteeNavbar activeUser={activeUser}/>  
          DashboardPage

        </div>
    );
    
}

export default DashboardPage;