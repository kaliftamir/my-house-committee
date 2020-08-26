import React, { } from 'react';
import './MessagesPage.css'
import { Redirect } from 'react-router-dom';
import CommitteeNavbar from '../components/CommitteeNavbar';
import Message from '../components/Message';
import { Row,Breadcrumb,InputGroup,FormControl,Dropdown,DropdownButton,Navbar,Nav,Modal,Form,Col,Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faSearch,faExclamationCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'



function MessagesPage(props) {

    
    const { activeUser } = props;

    const [iconShow, setIconShow] = React.useState(faInfoCircle)
    const [showNewMessageModal, setShowNewMessageModal] = React.useState(false)
    const [messages, setMessages] = React.useState([])

    
    //controlled components
    const [titleInput, setTitleInput] = React.useState("")
    const [detailsInput, setDetailsInput] = React.useState("")
    const [priorityInput, setPriorityInput] = React.useState("")
    const [imgInput, setImgInput] = React.useState("")

    function handleModalClose() {

        setShowNewMessageModal(false)

    }
    
    function handleNewMessage(message) {

         // Add userId to the message object in order to link it to user object 1:1
        message.userId = activeUser.id;

        // for id I am taking the id of the last recipe in the array and adding 1
        message.id = messages[messages.length - 1].id + 1;

        setMessages(messages.concat(message)) // add new message to the array
        
    }

    function handleCreateMessage () {
        
        const newMessage = {
          
            title: titleInput, 
            details: detailsInput,
            priority:priorityInput, 
            img: imgInput 
        } 

        console.log(newMessage)
        
        handleNewMessage(newMessage)
        handleModalClose()
    }
  
    // functions for each input in the modal (controlled componentes)  
    function handleTitleChange(event) {

        setTitleInput(event.target.value)
        
    }  

    function handleDetailsChange(event) {

        setDetailsInput(event.target.value)
        
    }

    function handlePriorityChange(event) {

        setPriorityInput(event.target.value)

        // set the relevant icon
        if(priorityInput==="Important") {
            setIconShow(faExclamationCircle)
        } else {
            setIconShow(faInfoCircle)
        }
        
    }

    function handleImgChange(event) {

        setImgInput(event.target.value)
        
    }
    //---------------------------------------

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
                <Breadcrumb.Item className="new-message-btn" onClick={() => setShowNewMessageModal(true)}>
                    New Message
                </Breadcrumb.Item>
            </Row>

           
            <Message image={"jerry.jpg"} title={"Pool"} details={"bla bla bla la bla blala bla blala bla blala bla blala bla blala bla bla"} priority={"Important"} icon={iconShow}/>
            <Message image={"george.jpg"} title={"Garbage"} details={"bla bla bla"} priority={"Regular"} icon={iconShow}/>



             <Modal show={showNewMessageModal} size="lg" onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group as={Row} controlId="title">
                                <Form.Label column sm={2}>
                                    Title:
                                </Form.Label>
                                <Col sm={10}>
                                    {/* the value and name needs to be the same if you want to use a single function for onchange for all inputs */}
                                    <Form.Control type="text" value={titleInput} name="titleInput" onChange={handleTitleChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="details">
                                <Form.Label column sm={2}>
                                    Details:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows="5" value={detailsInput} name="detailsInput" onChange={handleDetailsChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="priority">
                                <Form.Label column sm={2}>
                                    Priority:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" value={priorityInput} name="priortyInput" onChange={handlePriorityChange}>
                                        <option>Info</option>
                                        <option>Important</option>
                                    </Form.Control>   
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="img">
                                <Form.Label column sm={2}>
                                    Image URL
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" value={imgInput} name="imgInput" onChange={handleImgChange}  />
                                </Col>
                            </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCreateMessage} >
                            Create Message
                        </Button>
                    </Modal.Footer>
                </Modal>  

        </div>
    );
    
}

export default MessagesPage;