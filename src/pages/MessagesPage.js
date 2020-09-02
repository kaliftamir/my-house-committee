import React, { Component, useEffect, useState } from 'react';
import './MessagesPage.css'
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import Message from '../components/Message';
import MyMessageModal from '../components/MyMessageModal';
import MyOldMessageModal from '../components/MyOldMessageModal';
import { Row,Breadcrumb,InputGroup,FormControl,Dropdown,DropdownButton,Navbar,Nav,Modal,Form,Col,Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Parse from 'parse'; 
import MessageModel from '../model/MessageModel';


function MessagesPage(props) {

    
    const { activeUser } = props;

 
    const [showNewMessageModal, setShowNewMessageModal] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState([])
    const [sortedMessages, setSortedMyMessages] = React.useState("date")
 
    // states for updating message
    const [showOldMessageModal, setShowOldMessageModal] = React.useState(false)
    const [oldTitle, setOldTitle] = React.useState("")
    const [oldDetails, setOldDetails] = React.useState("")
    const [oldPriority, setOldPriority] = React.useState("")
    const [oldImg, setOldImg] = React.useState("")
    const [oldId, setOldId] = React.useState("")

   
           
    
    function handleDeleteMessage(deletedId,message) {
            
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to delete
        query.get(deletedId).then((object) => {
        object.destroy().then((response) => {
            
           // alert to the user
           //alert("The message was deleted")

           // update the array of messages 
           const index = myMessages.indexOf(message) // get the index of the 'deleted message' object  
           setMyMessages(myMessages.splice(myMessages.splice(index, 1))); 
           //setMyMessages(myMessages.splice(deletedId,1, ...myMessages)); 
           console.log(myMessages)                   
           

        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while deleting Message: ${JSON.stringify(error)}`);
            console.error('Error while deleting Message', error);
        });
        });
    } 

   
    //function handleOpenOldMessage (updatedId,updatedTitle,updatedDetails,updatedPriority,updatedImg) {
    function handleOpenOldMessage (updatedId,message) {

        // open modal 
        setShowOldMessageModal(true)
       
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // get all values of the message from parse.
        query.get(updatedId).then((object) => {
            
            //alert(updatedTitle)
           
        // set all original values of an old message - in the Modal 
        //    setOldId(updatedId)            
        //    setOldTitle(updatedTitle)
        //    setOldDetails(updatedDetails)
        //    setOldPriority(updatedPriority)
        //    setOldImg(updatedImg)          

       
        object.save().then((response) => {
            // set all original values of an old message - in the Modal             
            setOldId(updatedId)            
            setOldTitle(message.title)
            setOldDetails(message.details)
            setOldPriority(message.priority)
            setOldImg(message.img)
            console.log(message)         
        
         
        }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while updating Message: ${JSON.stringify(error)}`);
            console.error('Error while updating Message', error);
        });
        });
        

    }

    //----------------------------------------------------------------------------------------------

    function handleUpdateMessage (oldMessage) {
       
        oldMessage.save().then((response) => {

           
            // You can use the "get" method to get the value of an attribute
            // Ex: response.get("<ATTRIBUTE_NAME>")
            
            handleDeleteMessage(oldId,oldMessage)

            // update the array of messages 
           const index = myMessages.indexOf(oldMessage) // get the index of the 'deleted message' object
           
           setMyMessages(myMessages.splice(oldMessage,1));
           //setMyMessages(myMessages.splice(myMessages.splice(oldMessage, 1)));  
           //setMyMessages(myMessages.concat(oldMessage));

           
          }, (error) => {
            if (typeof document !== 'undefined') document.write(`Error while updating Message: ${JSON.stringify(error)}`);
            console.error('Error while updating Message', error);
          });

        // const index = myMessages.findIndex((message) => message.id === oldId);
        // myMessages[index].title=oldTitle
        // setMyMessages(myMessages)       


    }
    
    //---------------------------------------------------------------------------------------------
    function handleNewMessage(newMessage) { 
              

        newMessage.save().then(
            (result) => {
                //  Update state (messages array) with the new message
                const message = new MessageModel(result);
                setMyMessages(myMessages.concat(message))                
                
            },
            (error) => {
                console.error('Error while creating Message: ', error);
            }
        );
     
    }
    //-----------------------------------------------------------------------------------------------

    function handleModalClose() {
        setShowNewMessageModal(false)
        setShowOldMessageModal(false)
                
    } 

    function handleModalOpen() {
        setShowNewMessageModal(true)
         
       
    }
    function handleOldModalOpen() {       
        setShowOldMessageModal(true)      
       
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
    
    function sortBy(string) {
        setSortedMyMessages(string) 
        
        
    }


    // sort the messages 
    let showSortedMessages=[]

    if(sortedMessages==="date") {

        showSortedMessages=myMessages.sort((a,b)=> a.id > b.id ? 1:-1)

    } else if(sortedMessages==="priority") {

        showSortedMessages=myMessages.sort((a,b)=> a.priority > b.priority ? 1:-1)

    } 
    
    // Map my messages to UI
    const myMessageToShow = showSortedMessages.map((message,index) =>
         <Message key={index} id={message.id} img={message.img} title={message.title} details={message.details}
          priority={message.priority} icon={message.icon} message={message}
          deleteMessage={()=>handleDeleteMessage(message.id,message)}    // callback props
        //   updateMessage={()=>handleOpenOldMessage(message.id,message.title,message.details,
        //   message.priority,message.img)}/>) //  callback props
        updateMessage={()=>handleOpenOldMessage(message.id,message)}/>) //  callback props

    
    return (
        <div className="p-messages">
            
            <CommitteeNavbar activeUser={activeUser}/>

            <Navbar expand="lg">
                <Navbar.Brand href="#/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <InputGroup className="mb-12">

                            <FormControl className="flter-bar mb-12" placeholder="filter by text title and details"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"/>                           
                            
                     
                            <FontAwesomeIcon className={"search-icon"} icon={faSearch} />
                           
                           
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-primary"
                            title="Filter by Priority"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#" value="info">Info</Dropdown.Item>
                            <Dropdown.Item href="#" value="important">Important</Dropdown.Item>
                                                      
                            </DropdownButton>             
                        </InputGroup>

                        <InputGroup className="mb-3">
                         
                            <InputGroup.Prepend>

                                <InputGroup.Text>Sort by:</InputGroup.Text>
                                <InputGroup.Radio name="sort" aria-label="Radio button for following text input"
                                 onChange={()=>sortBy("date")} defaultChecked />
                                <InputGroup.Text className="label">Date</InputGroup.Text>
                                <InputGroup.Radio name="sort" aria-label="Radio button for following text input"
                                 onChange={()=>sortBy("priority")} />
                                <InputGroup.Text className="label">Priority</InputGroup.Text>

                            </InputGroup.Prepend>                  
                            

                        </InputGroup>
                      
                    </Nav>
                    <Nav className="ml-auto">
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Row className="flex-container">
                    <Breadcrumb.Item className="new-message-btn" onClick={handleModalOpen}>
                        New Message
                    </Breadcrumb.Item>
                </Row>            
                {myMessageToShow}
            </Container>  


            <MyMessageModal handleNewMessage={handleNewMessage} handleModalOpen={showNewMessageModal}
            handleModalClose={handleModalClose} />

            
            <MyOldMessageModal title={oldTitle} details={oldDetails} priority={oldPriority} img={oldImg}
            handleUpdateMessage={handleUpdateMessage} handleOldModalOpen={showOldMessageModal}
            handleModalClose={handleModalClose} />
            
                 


        </div>
    );
    
}

export default MessagesPage;