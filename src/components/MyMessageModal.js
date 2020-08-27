import React, { } from 'react';
import { Modal,Button,Row,Col,Form } from 'react-bootstrap';

function MyMessageModal(props) {

    const {handleModalClose,handleCreateMessage,showNewMessageModal} = props


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
        if(event.target.value==="Important") {
            setIconShow(faExclamation)
        } else {
            setIconShow(faInfoCircle)
        }
        
    }

    function handleImgChange(event) {

        setImgInput(event.target.value)
        
    }
    //---------------------------------------    
    return(
        <div className="c-my-message-modal">
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
    )


}

                
export default MyMessageModal;