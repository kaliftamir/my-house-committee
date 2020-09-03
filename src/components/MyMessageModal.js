import React, { } from 'react';
import { Modal,Button,Row,Col,Form,Image } from 'react-bootstrap';
import { faExclamationCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import Parse from 'parse';
import './MyMessageModal.css'


function MyMessageModal(props) {

    const {handleModalOpen,handleModalClose,handleNewMessage } = props

       
    //controlled components
    const [titleInput, setTitleInput] = React.useState("")
    const [detailsInput, setDetailsInput] = React.useState("")
    const [priorityInput, setPriorityInput] = React.useState("info")
    const [imgInput, setImgInput] = React.useState(null) // an object
    const [iconShow, setIconShow] = React.useState(faInfoCircle)

      
    function handleCreateMessage () {
        
        //  Create Message in Parse
        const Message = Parse.Object.extend('Message');
        const newMessage = new Message();

        newMessage.set('objectId', Parse.User.current());
        newMessage.get('updatedAt', Parse.User.current());

        newMessage.set('title', titleInput);
        newMessage.set('details', detailsInput);
        newMessage.set('priority', priorityInput);
        newMessage.set('icon', iconShow);
        newMessage.set('img', new Parse.File(imgInput.name, imgInput));
        newMessage.set('userId', Parse.User.current());
        console.log(newMessage) 
        // callback function - sending with the new message
        handleNewMessage(newMessage) 
        
        //  Close and clean the modal              
        handleModalClose()
        cleanMyModal()            
        
    }

    function cleanMyModal() {
        setTitleInput("")        
        setDetailsInput("")
        setPriorityInput("info")
        setImgInput(null)
        setIconShow(faInfoCircle)
    }

    // functions to get values form each one of the inputs in the modal (controlled componentes)  
    function handleTitleChange(event) {
        setTitleInput(event.target.value)
        
    }  

    function handleDetailsChange(event) {
        setDetailsInput(event.target.value)
        
    }

    function handlePriorityChange(event) {
        setPriorityInput(event.target.value)

        // set the relevant icon
        if(event.target.value==="Important") {
            setIconShow(faExclamationCircle)
        } else {
            setIconShow(faInfoCircle)
        }
        
    }

    // function handleImgChange(event) {
    //     setImgInput(event.target.value)
        
    // }

    function handleImgFileChange(event) {
        // if the user select file
        if(event.target.files[0]) {
            setImgInput(event.target.files[0]) // syntax to get to the file - if molti need to add multi att to input


        } else {
            setImgInput(null)
        }
        
    }
    //--------------------------------------- 
    
    const imgURL = imgInput ? URL.createObjectURL(imgInput) : ""; // temporary url
    
    return(
        <div className="c-my-message-modal">
                <Modal show={handleModalOpen} onHide={handleModalClose}  size="lg">
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
                                    <Form.Control type="file" accept="image/*"  name="imgInput" onChange={handleImgFileChange}  />
                                </Col>
                            </Form.Group>
                            <Image src={imgURL} className="preview" /> 
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>                       
                        <Button variant="secondary" onClick={handleModalClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleCreateMessage}>
                            Create Message
                        </Button>
                    </Modal.Footer>
                </Modal>  
        </div>
    )


}

                
export default MyMessageModal;