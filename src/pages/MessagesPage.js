import React, { Component, useEffect, useState } from 'react';
import './MessagesPage.css'
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import Message from '../components/Message';
import MyMessageModal from '../components/MyMessageModal';
import { Row,Breadcrumb,InputGroup,FormControl,Dropdown,DropdownButton,Navbar,Nav,Modal,Form,Col,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch,faExclamationCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Parse from 'parse'; 
import MessageModel from '../model/MessageModel';




function MessagesPage(props) {

    
    const { activeUser } = props;

 
    const [showNewMessageModal, setShowNewMessageModal] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState([])

    // add this state for parse
    //const [messages, setMessages] = React.useState([])

 
    function handleNewMessage(message) {
        setMyMessages(myMessages.concat(message)) // add new message to the array
        console.log(myMessages)
    }

    function handleModalClose() {
        setShowNewMessageModal(false)
                
    } 

    function handleModalOpen() {
        setShowNewMessageModal(true)
       
    }
    
    // function handleNewMessage(message) {

    //      // Add userId to the message object in order to link it to user object 1:1
    //      myMessages.userId = activeUser.id;

    //     // for id I am taking the id of the last recipe in the array and adding 1
    //     myMessages.id = myMessages[myMessages.length - 1].id + 1;

    //     setMyMessages(myMessages.concat(message)) // add new message to the array
    //     console.log(myMessages)
    // }

    

    useEffect(() => {
        if (activeUser) {
            const Message = Parse.Object.extend('Message');
            const query = new Parse.Query(Message);
            query.equalTo("userId", Parse.User.current());
            query.find().then(results => {
                // Success - results is the array of messages
                const myMessages = results.map(result => new MessageModel(result));
                setMyMessages(myMessages);
            }, (error) => {
                console.error('Error while fetching Message', error);
            });
        }
    }, [activeUser])  
    
    console.log(myMessages)

    if (!activeUser) {
        return <Redirect to="/" />
    } 
    
    // Map my messages to UI
    const myMessageToShow = myMessages.map((message,index) =>
         <Message key={index} img={message.img} title={message.title} details={message.details}
          priority={message.priority} icon={message.icon} />)

    

    return (
        <div className="p-messages">
            
            <CommitteeNavbar activeUser={activeUser}/>

            <Navbar expand="lg">
                <Navbar.Brand href="#/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <InputGroup className="flter-bar mb-12">

                            <FormControl style={{fontFamily: "FontAwesome"}} className="mb-12" placeholder="&#xF002; filter by text title and details"
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
                <Breadcrumb.Item className="new-message-btn" onClick={handleModalOpen}>
                    New Message
                </Breadcrumb.Item>
            </Row>
           

            {myMessageToShow}


                 <MyMessageModal handleNewMessage={handleNewMessage} handleModalOpen={showNewMessageModal}
                  handleModalClose={handleModalClose}/>
                 


        </div>
    );
    
}

export default MessagesPage;