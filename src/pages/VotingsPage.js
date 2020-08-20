import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



function VotingPage(props) {

    
  const { activeUser } = props;

  if (!activeUser) {
      return <Redirect to="/" />
  }        

  return (
      <div>
        DashboardPage

      </div>
  );
    
}

export default VotingPage;