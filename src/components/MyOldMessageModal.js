import React, { } from 'react';
import { Modal,Button,Row,Col,Form,Image,Alert } from 'react-bootstrap';
import { faExclamationCircle,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './MyMessageModal.css'



function MyOldMessageModal (props) {

    const {title,details,priority,img,handleOldModalOpen,handleModalClose,handleUpdateMessage } = props
    const [alertNotification, setAlertNotification] = React.useState(false)
  
       
    //controlled components
    const [titleInput, setTitleInput] = React.useState("")
    const [detailsInput, setDetailsInput] = React.useState("")
    const [priorityInput, setPriorityInput] = React.useState("")
    const [imgInput, setImgInput] = React.useState(null) // an object
    const [iconShow, setIconShow] = React.useState(faInfoCircle)

  

    function handleCreateUpdatedMessage () {

        // an object that will reload the details of old message
        const oldMessage = {};
    
        oldMessage.title = titleInput
        oldMessage.details = detailsInput
        oldMessage.priority = priorityInput 
        oldMessage.icon = iconShow
        oldMessage.img =  imgInput // need to fix

        // notification to the user
        setAlertNotification(true) 
       
        // update callback function
        handleUpdateMessage(oldMessage)       
                

        //  Close the modal after 1 sec            
        
        setTimeout(function() {
            handleModalClose()
          }, 1000);
      
        
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

    function handleImgFileChange(event) {
        // if the user select file
        if(event.target.files[0]) {
            setImgInput(event.target.files[0]) // syntax to get to the file - if molti need to add multi att to input


        } else {
            setImgInput(null)
        }
        
    }
    //--------------------------------------------------------------------------------------------------- 
    
    const imgURL = imgInput ? URL.createObjectURL(imgInput) : ""; // temporary url
    
    return(
        <div className="c-my-message-modal">
                <Modal show={handleOldModalOpen} onHide={handleModalClose}  size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Updated Message</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>

                        {alertNotification ? <Alert variant="success">
                        Message was updated!
                        </Alert> : <Alert/>}

                            <Form.Group as={Row} controlId="title">
                                <Form.Label column sm={2}>
                                    Title:
                                </Form.Label>
                                <Col sm={10}>
                                    {/* the value and name needs to be the same if you want to use a single function for onchange for all inputs */}
                                    <Form.Control type="text" defaultValue={title} name="titleInput" onChange={handleTitleChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="details">
                                <Form.Label column sm={2}>
                                    Details:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="textarea" rows="5" defaultValue={details} name="detailsInput" onChange={handleDetailsChange}  />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="priority">
                                <Form.Label column sm={2}>
                                    Priority:
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" defaultValue={priority} name="priortyInput" onChange={handlePriorityChange}>
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
                            <Image src={img} className="preview" /> 
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>                       
                        <Button variant="secondary" onClick={handleModalClose}>
                            Cancel
                        </Button>

                        <Button variant="primary" onClick={handleCreateUpdatedMessage}>
                            Update Message
                        </Button>
                    </Modal.Footer>
                </Modal>  
        </div>
    )


}

                
export default MyOldMessageModal;