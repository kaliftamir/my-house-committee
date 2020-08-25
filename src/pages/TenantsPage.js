import React, {  } from 'react';
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';



function TenantsPage(props) {
    
        
  const { activeUser } = props;

  if (!activeUser) {
      return <Redirect to="/" />
  }  

  return (
      <div>
        <CommitteeNavbar activeUser={activeUser}/>
        TenantsPage

      </div>
  );
    
}

export default TenantsPage;