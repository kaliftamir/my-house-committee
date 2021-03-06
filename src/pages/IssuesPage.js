import React, { } from 'react';
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';



function IssuesPage(props) {

    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }      

    return (
        <div>
            <CommitteeNavbar activeUser={activeUser}/>
            IssuesPage under construction!

        </div>
    );
    
}

export default IssuesPage;