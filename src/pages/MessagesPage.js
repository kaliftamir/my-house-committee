import React, { useEffect,useState } from 'react';
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

    //controlled component
    const [filterInput, setFilterInput] = React.useState("")

    const [showNewMessageModal, setShowNewMessageModal] = React.useState(false)
    const [myMessages, setMyMessages] = React.useState([])
    const [sortedMessages, setSortedMyMessages] = React.useState("date")
    const [filteredMessages, setFilteredMessages] = React.useState("all")
 
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
                
               
                // update the array of messages 
                const index = myMessages.indexOf(message) // get the index of the 'deleted message' object  
                setMyMessages(myMessages.splice(myMessages.splice(index, 1)));  // update the array
                          
            
            }, (error) => {
                if (typeof document !== 'undefined') document.write(`Error while deleting Message: ${JSON.stringify(error)}`);
                console.error('Error while deleting Message', error);
            });
        });
    } 
  
 

    //----------------------------------------------------------------------------------------------

    // get all values of message we want to update in the modal
    function handleOpenOldMessage(messageId,message) {

        // open modal 
        setShowOldMessageModal(true)

        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to update
        query.get(messageId).then((object) => {

            object.save().then((response) => {
                // You can use the "get" method to get the value of an attribute
                setOldId(messageId)
                setOldTitle(response.get("title")) 
                setOldDetails(response.get("details"))
                setOldPriority(response.get("priority")) 
                setOldImg(response.get("img")) 
              
                 console.log(oldId )          
               
            }, (error) => {
                if (typeof document !== 'undefined') document.write(`Error while updating Message: ${JSON.stringify(error)}`);
                console.error('Error while updating Message', error);
            });
        });

    }

    //-----------------------------------------------------------------------------------------------

    function handleUpdateMessage(oldMessage) {

        
        const Message = Parse.Object.extend('Message');
        const query = new Parse.Query(Message);
        // here you put the objectId that you want to update
        query.get(oldId).then((object) => {
            object.set('title', oldMessage.title);
            object.set('details', oldMessage.details);
            object.set('img', new Parse.File("resume.txt", { base64: btoa(oldMessage.img) }));
            object.set('userId', Parse.User.current());
            object.set('priority', oldMessage.priority);
            object.save().then((response) => {
                // You can use the "get" method to get the value of an attribute
                // Ex: response.get("<ATTRIBUTE_NAME>")

         
            // update the array
            setMyMessages(myMessages)         
              
               
            }, (error) => {
                if (typeof document !== 'undefined') document.write(`Error while updating Message: ${JSON.stringify(error)}`);
                console.error('Error while updating Message', error);
            });
        });
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
            //query.equalTo("userId", Parse.User.current());
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

    //-----------------------------------------------------------------------------
    
    function sortBy(string) {
        setSortedMyMessages(string)        
        
    }
    
    function filtertBy(string) {
        setFilteredMessages(string)
              
    }

    function handleFilterBar(event) {
        setFilterInput(event.target.value)
        
    }  

    // sort the messages 
    let showSortedMessages=[]
    

    if(sortedMessages==="date") { 

        showSortedMessages=myMessages.sort((a,b)=> a.createdAt > b.createdAt ? 1:-1)
        

    } else if(sortedMessages==="priority") {

        showSortedMessages=myMessages.sort((a,b)=> a.priority > b.priority ? 1:-1)

    } 

    // filter the messages 
    let showFilteredMessages=[]

    //if(showSortedMessages.includes(filterInput))

    if(filteredMessages==="info") { 

        showFilteredMessages=showSortedMessages.filter(message=> (message.priority==="info") &&
         (message.title.includes(filterInput) || message.details.includes(filterInput)))

    } else if(filteredMessages==="important") {

        showFilteredMessages=showSortedMessages.filter(message=> (message.priority==="Important") &&
        (message.title.includes(filterInput) || message.details.includes(filterInput)))

    } else  {
        showFilteredMessages=showSortedMessages.filter(message=> 
        message.title.includes(filterInput) || message.details.includes(filterInput))

    }
           
    
    
    // Map my messages to UI
    const myMessageToShow = showFilteredMessages.map((message,index) =>
         <Message key={index} id={message.id} img={message.img} title={message.title} details={message.details}
          priority={message.priority} icon={message.icon} message={message}
          className={(activeUser.isCommitteeMember ? "show-button" : "hide-button")} // show/hide in case of committee member
          deleteMessage={()=>handleDeleteMessage(message.id,message)}    // callback props
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
                            aria-describedby="inputGroup-sizing-default" onChange={handleFilterBar}/>                           
                            
                     
                            <FontAwesomeIcon className={"search-icon"} icon={faSearch} />
                           
                           
                        </InputGroup>

                        <InputGroup className="mb-3">
                            <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-primary"
                            title="Filter by Priority"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item eventKey="1" value="all" onClick={()=>filtertBy("all")}>All</Dropdown.Item>
                            <Dropdown.Item eventKey="2" value="info" onClick={()=>filtertBy("info")}>Info</Dropdown.Item>
                            <Dropdown.Item eventKey="3" value="important" onClick={()=>filtertBy("important")}>Important</Dropdown.Item>
                                                      
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
                    <Breadcrumb.Item className = {activeUser.isCommitteeMember ? "new-message-btn show-button" : "new-message-btn hide-button"}
                      onClick={handleModalOpen}>
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