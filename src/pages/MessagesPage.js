import React, { } from 'react';
import './MessagesPage.css'
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import Message from '../components/Message';
import { Row,Breadcrumb,InputGroup,FormControl,Dropdown,DropdownButton,Navbar,Nav } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch,faExclamationCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'



function MessagesPage(props) {

    
    const { activeUser } = props;

    if (!activeUser) {
        return <Redirect to="/" />
    }      

    return (
        <div className="p-messages">
            
            <CommitteeNavbar activeUser={activeUser}/>

            <Navbar expand="lg">
                <Navbar.Brand href="#/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <InputGroup className="flter-bar mb-12">

                            <FormControl className="mb-12" placeholder="&#xF002; filter by text title and details"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            
                            />
                            <FontAwesomeIcon icon={faCoffee} />
                            <FontAwesomeIcon icon={faSearch} />
                            <FontAwesomeIcon icon={faExclamationCircle} />
                            <FontAwesomeIcon icon={faInfoCircle} />
                           
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-primary"
                            title="Filter by Priority"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">Regular</Dropdown.Item>
                            <Dropdown.Item href="#">Important</Dropdown.Item>
                            <Dropdown.Item href="#">Urgent</Dropdown.Item>                            
                            </DropdownButton>             
                        </InputGroup>

                        <InputGroup className="mb-3">
                         
                            <InputGroup.Prepend>

                                <InputGroup.Text>Sort by:</InputGroup.Text>
                                <InputGroup.Radio name="sort" aria-label="Radio button for following text input" />
                                <InputGroup.Text className="label">Date</InputGroup.Text>
                                <InputGroup.Radio name="sort" aria-label="Radio button for following text input" />
                                <InputGroup.Text className="label">Priority</InputGroup.Text>

                            </InputGroup.Prepend>                  
                            

                        </InputGroup>
                      
                    </Nav>
                    <Nav className="ml-auto">
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Row className="flex-container">
                <Breadcrumb.Item className="new-message-btn" href="#">
                    New Message
                </Breadcrumb.Item>
            </Row>
           
            <Message image={"jerry.jpg"} title={"Pool"} details={"bla bla bla la bla blala bla blala bla blala bla blala bla blala bla blala bla blala bla bla"} priority={"Important"}/>
            <Message image={"george.jpg"} title={"Garbage"} details={"bla bla bla"} priority={"Regular"}/>
               

        </div>
    );
    
}

export default MessagesPage;