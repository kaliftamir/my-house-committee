import React, { } from 'react';
import { Modal,Button,Row,Col,Form,InputGroup } from 'react-bootstrap';
import './MyVotingModal.css'
import Parse from 'parse';



function MyVotingModal(props) {

    const { handleModalOpen,handleModalClose,handleNewVoting } = props

       
    //controlled components
    const [titleInput, setTitleInput] = React.useState("")
    const [detailsInput, setDetailsInput] = React.useState("")
    const [optionsInput, setOptionsInput] = React.useState("")
    const [endDateInput, setEndDateInput] = React.useState("") 
    
    function handleCreateVoting()  {

         // 1) Create Vote in Parse
        const Vote = Parse.Object.extend('Vote');
        const newVote = new Vote();

        newVote.set('title', setTitleInput);
        newVote.set('details', setDetailsInput);
        newVote.set('options', setOptionsInput);
        newVote.set('endDate', setEndDateInput);
        newVote.set('ownerId', Parse.User.current());
        //newVote.set('accountId',activeUser.id);

        // callback function - sending with the new voting
        handleNewVoting(newVote) 
        
        // clean the modal       
        cleanMyModal() 

    }   
    


    function cleanMyModal() {
        setTitleInput("")        
        setDetailsInput("")
        setOptionsInput("")        
        setEndDateInput("")
       
    }

    // functions to get values form each one of the inputs in the modal (controlled componentes)  
    function handleTitleChange(event) {
        setTitleInput(event.target.value)
        
    }  

    function handleDetailsChange(event) {
        setDetailsInput(event.target.value)
        
    }

    function handleOptionsChange(event) {
        setOptionsInput(event.target.value)     
        
    }


    // function handleImgChange(event) {
    //     setImgInput(event.target.value)
        
    // }

    function handleEndDateChange(event) {        
        setEndDateInput(event.target.value)
        
    }
    //--------------------------------------- 
    
    
    return(
        <div className="c-my-voting-modal">
                <Modal show={handleModalOpen} onHide={handleModalClose}  size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>New Voting</Modal.Title>
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
                            <Form.Group as={Row} controlId="options">
                                <Form.Label column sm={2}>
                                    Options:
                                </Form.Label>
                                <Col sm={10}>

                                    <InputGroup.Prepend value={optionsInput}  name="optionsInput" onChange={handleOptionsChange}>

                                        <InputGroup.Text>yes</InputGroup.Text>
                                        <InputGroup.Radio name="sort" aria-label="Radio button for following text input"
                                        defaultChecked />
                                        <InputGroup.Text className="label">no</InputGroup.Text>
                                        <InputGroup.Radio name="sort" aria-label="Radio button for following text input"/>
                                                                               
                                    </InputGroup.Prepend>                                                     
                                      
                                </Col>
                               
                                
                            </Form.Group>
                            <Form.Group as={Row} controlId="date">
                                <Form.Label column sm={2}>
                                    End Date:
                                </Form.Label>
                                
                                <Col sm={3}>
                                    <Form.Control type="date" value={endDateInput} name="endDateInput" onChange={handleEndDateChange}  />
                                </Col> 
                                                                
                            </Form.Group>
                            
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>                      
                        
                        <Button variant="primary" onClick={handleCreateVoting}>
                            Create 
                        </Button>
                    </Modal.Footer>
                </Modal>  
        </div>
    )


}

                
export default MyVotingModal;