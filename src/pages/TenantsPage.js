import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';



function TenantsPage(props) {
    
        
  const { activeUser } = props;

  if (!activeUser) {
      return <Redirect to="/" />
  }  

  return (
      <div>
        TenantsPage

      </div>
  );
    
}

export default TenantsPage;